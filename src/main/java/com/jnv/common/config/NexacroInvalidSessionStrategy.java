package com.jnv.common.config;

import java.io.IOException;
import java.util.Objects;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.nexacro.java.xapi.data.PlatformData;
import com.nexacro.java.xapi.tx.HttpPlatformResponse;
import com.nexacro.java.xapi.tx.PlatformException;
import com.nexacro.uiadapter.spring.core.NexacroConstants;
import com.nexacro.uiadapter.spring.core.context.NexacroContext;
import com.nexacro.uiadapter.spring.core.context.NexacroContextHolder;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.security.web.DefaultRedirectStrategy;
import org.springframework.security.web.RedirectStrategy;
import org.springframework.security.web.session.InvalidSessionStrategy;
import org.springframework.security.web.session.SessionInformationExpiredEvent;
import org.springframework.security.web.session.SessionInformationExpiredStrategy;

public class NexacroInvalidSessionStrategy implements InvalidSessionStrategy, SessionInformationExpiredStrategy {

    private static final Logger LOG = LoggerFactory.getLogger(NexacroInvalidSessionStrategy.class);

    private String defaultUrl;

    private final RedirectStrategy redirectStrategy = new DefaultRedirectStrategy();

    public String getDefaultUrl() {
        return defaultUrl;
    }

    public void setDefaultUrl(String defaultUrl) {
        this.defaultUrl = defaultUrl;
    }

    @Override
    public void onInvalidSessionDetected(HttpServletRequest request,
            HttpServletResponse response) throws IOException {
        handleInvalidSession(request, response);
    }

    @Override
    public void onExpiredSessionDetected(SessionInformationExpiredEvent event) throws IOException {
        HttpServletRequest request = event.getRequest();
        HttpServletResponse response = event.getResponse();

        if (request != null && response != null) {
            handleInvalidSession(request, response);
        }
    }

    private void handleInvalidSession(HttpServletRequest request, HttpServletResponse response) throws IOException {
        NexacroContext context = NexacroContextHolder.getNexacroContext();
        if (context == null) {
            try {
                context = NexacroContextHolder.getNexacroContext(request, response);
            } catch (PlatformException e) {
                LOG.error("Cannot get nexacro context", e);
            }
        }

        String sessionCookieName = Objects.toString(request.getServletContext().getSessionCookieConfig().getName(), "JSESSIONID");
        Cookie cookie = new Cookie(sessionCookieName, "");
        cookie.setMaxAge(0);
        response.addCookie(cookie);

        if (context == null) {
            response.setStatus(HttpStatus.UNAUTHORIZED.value());
            redirectStrategy.sendRedirect(request, response, defaultUrl);
        } else {
            handleNexacro(context);
        }
    }

    private void handleNexacro(NexacroContext context) {
        PlatformData platformData = new PlatformData();
        platformData.getVariableList().add(NexacroConstants.ERROR.ERROR_CODE, -1200);
        platformData.getVariableList().add(NexacroConstants.ERROR.ERROR_MSG, "장기간 사용하지 않아 로그아웃되었습니다.");
        HttpPlatformResponse platformResponse = context.getPlatformResponse();
        platformResponse.setData(platformData);
        try {
            platformResponse.sendData();
        } catch (PlatformException e) {
            LOG.error("Cannot send error message", e);
        }
    }
}
