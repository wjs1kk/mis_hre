package com.jnv.common.security;

import com.jnv.jncore.security.UserVO;
import com.jnv.main.login.service.LoginHistoryService;
import org.egovframe.rte.fdl.cmmn.exception.EgovBizException;
import org.egovframe.rte.fdl.security.userdetails.EgovUserDetails;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.event.EventListener;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.session.SessionDestroyedEvent;
import org.springframework.security.core.session.SessionInformation;
import org.springframework.security.core.session.SessionRegistry;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;
import java.util.List;

@Component
public class SessionDestroyedListener {

    private static final Logger LOG = LoggerFactory.getLogger(SessionDestroyedListener.class);

    @Resource
    private SessionRegistry sessionRegistry;

    @Resource(name = "loginHistoryService")
    private LoginHistoryService historyService;

    public SessionDestroyedListener() {
        LOG.debug("initialized");
    }

    @EventListener
    public void onApplicationEvent(SessionDestroyedEvent event) {
        Object principal = null;
        UserVO userVO = null;
        List<SecurityContext> contexts = event.getSecurityContexts();

        if (!contexts.isEmpty()) {
            Authentication authentication = contexts.get(0).getAuthentication();
            if (authentication instanceof UsernamePasswordAuthenticationToken) {
                UsernamePasswordAuthenticationToken token = (UsernamePasswordAuthenticationToken) authentication;
                principal = token.getPrincipal();
            }
        } else {
            SessionInformation sessionInfo = (sessionRegistry == null)
                    ? null
                    : sessionRegistry.getSessionInformation(event.getId());

            if (sessionInfo != null) {
                principal = sessionInfo.getPrincipal();
            }
        }

        if (principal instanceof EgovUserDetails) {
            Object user = ((EgovUserDetails) principal).getEgovUserVO();
            if (user instanceof UserVO) {
                userVO = (UserVO) user;
            }
        }

        if (userVO != null) {
            try {
                historyService.saveLogoutLog(userVO, event.getId());
            } catch (EgovBizException e) {
                LOG.error("Cannot save logout log. UserID: {}", userVO.getUserId());
            }
        }
    }
}
