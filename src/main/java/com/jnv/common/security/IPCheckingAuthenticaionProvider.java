package com.jnv.common.security;

import java.net.InetAddress;
import java.net.UnknownHostException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.concurrent.Callable;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.AccountExpiredException;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.CredentialsExpiredException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.LockedException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import com.jnv.common.util.ClientInfoUtil;
import com.jnv.jncore.security.UserVO;
import com.jnv.main.login.service.LoginHistoryDAO;

import org.egovframe.rte.fdl.security.userdetails.EgovUserDetails;

@Component("ipCheckingAuthenticationProvider")
public class IPCheckingAuthenticaionProvider implements AuthenticationProvider {

    private static final Logger LOG = LoggerFactory.getLogger(IPCheckingAuthenticaionProvider.class);

    @Resource(name = "loginHistoryDAO")
    private LoginHistoryDAO dao;

    @Value("#{authProp['checkClientIp']}")
    private boolean checkClientIp;

    @Value("#{authProp['allowIfIpListIsEmpty']}")
    private boolean allowIfIpListIsEmpty;

    private UserDetailsService userDetailsService;
    private PasswordEncoder passwordEncoder;

    @Override
    public Authentication authenticate(Authentication authentication) throws AuthenticationException {
        String username = (String) authentication.getPrincipal();
        String password = (String) authentication.getCredentials();
        HttpServletRequest req = ((ServletRequestAttributes) RequestContextHolder.currentRequestAttributes())
            .getRequest();
        String accessIPAddress = ClientInfoUtil.getRemoteIp(req);
        InetAddress accessedIP;
        try {
            accessedIP = InetAddress.getByName(accessIPAddress);
        } catch (UnknownHostException e) {
            LOG.error("Cannot parse IP address, value={}", accessIPAddress);
            throw new BadCredentialsException("Cannot parse IP addess, value=" + accessIPAddress);
        }

        EgovUserDetails userDetails = (EgovUserDetails) userDetailsService.loadUserByUsername(username);

        if (userDetails == null)
            throw new UsernameNotFoundException(String.format("User %s not found", username));

        UserVO vo = (UserVO) userDetails.getEgovUserVO();

        Map<String, String> params = new HashMap<>();
        params.put("userId", vo.getUserId());

        if (checkClientIp) {
            LOG.debug("Checking if '{}' can login...", accessIPAddress);
            List<String> ipList = dao.selectAccessibleIP(params);
            boolean contains = ipList.stream()
                .map(ip -> nullIfException(() -> InetAddress.getByName(ip)))
                .filter(Objects::nonNull)
                .anyMatch(ip -> ip.equals(accessedIP));

            // 다음 경우에 로그인을 차단한다.
            // 1. property 상에 접근 가능 IP를 지정하지 않은 사용자의 로그인을 차단한 상태에서
            //    접근 가능 IP가 지정되지 않은 사용자가 로그인을 시도하는 경우
            // 2. 로그인을 시도한 사용자의 접근 가능 IP 목록에 사용자가 로그인을 시도한 IP가 존재하지 않는 경우
            if (((allowIfIpListIsEmpty && !ipList.isEmpty()) || !allowIfIpListIsEmpty) && !contains)
                throw new BadCredentialsException(
                    String.format(
                        "User %s cannot access in this IP.",
                        username));
        }

        LOG.debug("Login Request Address: {}", accessIPAddress);

        if (!userDetails.isAccountNonLocked())
            throw new LockedException("User account is locked");
        if (!userDetails.isEnabled())
            throw new DisabledException("User is disabled");
        if (!userDetails.isAccountNonExpired())
            throw new AccountExpiredException("User account is expired");
        if (!passwordEncoder.matches(password, userDetails.getPassword()))
            throw new BadCredentialsException("Password does not match");
        if (!userDetails.isCredentialsNonExpired())
            throw new CredentialsExpiredException("User credentials have expired");

        UsernamePasswordAuthenticationToken result = new UsernamePasswordAuthenticationToken(
            userDetails,
            password,
            userDetails.getAuthorities());
        result.setDetails(authentication.getDetails());

        return result;
    }

    @Override
    public boolean supports(Class<?> authentication) {
        return true;
    }

    public UserDetailsService getUserDetailsService() {
        return userDetailsService;
    }

    public void setUserDetailsService(UserDetailsService userDetailsService) {
        this.userDetailsService = userDetailsService;
    }

    public PasswordEncoder getPasswordEncoder() {
        return passwordEncoder;
    }

    public void setPasswordEncoder(PasswordEncoder passwordEncoder) {
        this.passwordEncoder = passwordEncoder;
    }

    private static <T> T nullIfException(Callable<? extends T> callable) {
        try {
            return callable.call();
        } catch (Exception e) {
            return null;
        }
    }
}
