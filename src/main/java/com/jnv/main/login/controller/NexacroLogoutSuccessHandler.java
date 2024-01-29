package com.jnv.main.login.controller;

import java.io.IOException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.nexacro.java.xapi.data.PlatformData;
import com.nexacro.java.xapi.tx.HttpPlatformResponse;
import com.nexacro.java.xapi.tx.PlatformException;
import com.nexacro.uiadapter.spring.core.context.NexacroContext;
import com.nexacro.uiadapter.spring.core.context.NexacroContextHolder;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.DefaultRedirectStrategy;
import org.springframework.security.web.RedirectStrategy;
import org.springframework.security.web.authentication.logout.LogoutSuccessHandler;

public class NexacroLogoutSuccessHandler implements LogoutSuccessHandler {

    private static final Logger LOG = LoggerFactory.getLogger(NexacroLogoutSuccessHandler.class);

    private String successUrl;

    private final RedirectStrategy redirectStrategy = new DefaultRedirectStrategy();

    @Override
    public void onLogoutSuccess(HttpServletRequest request, HttpServletResponse response,
            Authentication authentication) throws IOException {
        NexacroContext context = null;
        try {
            context = NexacroContextHolder.getNexacroContext(request, response);
            PlatformData platformData = new PlatformData();
            platformData.getVariableList().add("callbackMsg", "success");

            HttpPlatformResponse platformResponse = context.getPlatformResponse();
            platformResponse.setData(platformData);
            platformResponse.sendData();
        } catch (PlatformException e) {
            LOG.error("Sending logout result failed", e);
            redirectStrategy.sendRedirect(request, response, successUrl);
        }
    }

    public String getSuccessUrl() {
        return successUrl;
    }

    public void setSuccessUrl(String successUrl) {
        this.successUrl = successUrl;
    }
}
