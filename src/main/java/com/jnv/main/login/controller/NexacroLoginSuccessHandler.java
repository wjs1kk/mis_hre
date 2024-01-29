package com.jnv.main.login.controller;

import java.io.IOException;
import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.jnv.jncore.exception.BusinessException;
import com.jnv.main.login.service.LoginHistoryService;
import com.nexacro.java.xapi.data.PlatformData;
import com.nexacro.java.xapi.tx.HttpPlatformResponse;
import com.nexacro.java.xapi.tx.PlatformException;
import com.nexacro.uiadapter.spring.core.context.NexacroContext;
import com.nexacro.uiadapter.spring.core.context.NexacroContextHolder;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.DefaultRedirectStrategy;
import org.springframework.security.web.RedirectStrategy;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.security.web.authentication.WebAuthenticationDetails;

public class NexacroLoginSuccessHandler implements AuthenticationSuccessHandler {

    private static final Logger LOG = LoggerFactory.getLogger(NexacroLoginSuccessHandler.class);

    @Resource(name = "loginHistoryService")
    private LoginHistoryService service;

    private String defaultUrl;

    private final RedirectStrategy redirectStrategy = new DefaultRedirectStrategy();

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response,
            Authentication authentication) throws IOException {
        try {
            saveHistory(request, authentication);
        } catch (Exception e) {
            LOG.error("Cannot save login log", e);
            throw new BusinessException("fail.common.msg");
        }

        NexacroContext nexacroContext = NexacroContextHolder.getNexacroContext();
        if (nexacroContext != null) {
            HttpPlatformResponse platformResponse = nexacroContext.getPlatformResponse();
            PlatformData data = new PlatformData();
            data.getVariableList().add("callbackMsg", "success");
            try {
                platformResponse.setData(data);
                platformResponse.sendData();
            } catch (PlatformException e) {
                LOG.error("Cannot send response", e);
            }
        } else {
            redirectStrategy.sendRedirect(request, response, "/index.jsp");
        }
    }

    public String getDefaultUrl() {
        return defaultUrl;
    }

    public void setDefaultUrl(String defaultUrl) {
        this.defaultUrl = defaultUrl;
    }

    /**
     * 로그인 기록을 저장한다.
     *
     * @param req
     * @param auth
     *
     * @throws Exception
     */
    protected void saveHistory(HttpServletRequest req, Authentication auth) {
        UserDetails userDetails = (UserDetails) auth.getPrincipal();
        WebAuthenticationDetails authDetails = (WebAuthenticationDetails) auth.getDetails();
        service.saveLoginLog(userDetails, authDetails, req.getSession().getId());
    }
}
