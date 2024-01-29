package com.jnv.main.login.controller;

import java.io.IOException;

import javax.annotation.Resource;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.session.SessionRegistry;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.DefaultRedirectStrategy;
import org.springframework.security.web.RedirectStrategy;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.security.web.authentication.WebAuthenticationDetails;
import org.springframework.security.web.savedrequest.HttpSessionRequestCache;
import org.springframework.security.web.savedrequest.RequestCache;
import org.springframework.security.web.savedrequest.SavedRequest;

import com.jnv.jncore.exception.controller.BaseAjaxController;
import com.jnv.jncore.util.StringUtil;
import com.jnv.main.login.service.LoginHistoryService;

/**
 * 로그인 결과를 로그에 저장하는 핸들러
 */
public class LoginSuccessHandler extends BaseAjaxController implements AuthenticationSuccessHandler {

    private static final Logger LOGGER = LoggerFactory.getLogger(LoginSuccessHandler.class);

    @Resource(name = "loginHistoryService")
    private LoginHistoryService service;

    private String defaultUrl;

    private final RequestCache reqCache = new HttpSessionRequestCache();
    private final RedirectStrategy redirectStrategy = new DefaultRedirectStrategy();

    @Resource
    private SessionRegistry sessionRegistry;

    public String getDefaultUrl() {
        return defaultUrl;
    }

    public void setDefaultUrl(String defaultUrl) {
        this.defaultUrl = defaultUrl;
    }

    /**
     * 로그인 성공 시 로그를 저장한다.
     *
     * @see org.springframework.security.web.authentication.AuthenticationSuccessHandler#onAuthenticationSuccess(javax.servlet.http.HttpServletRequest,
     * javax.servlet.http.HttpServletResponse,
     * org.springframework.security.core.Authentication)
     */
    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication auth)
            throws IOException, ServletException {
        try {
            saveHistory(request, auth);
        } catch (IOException | ServletException e) {
            throw e;
        } catch (Exception e) {
            LOGGER.error("There was an error saving login history", e);
            throw new ServletException("Failed to save login log", e);
        }

        resultRedirectStrategy(request, response);
    }

    /**
     * 로그인 기록을 저장한다.
     *
     * @param req
     * @param auth
     *
     * @throws Exception
     */
    protected void saveHistory(HttpServletRequest req, Authentication auth) throws IOException, ServletException {
        UserDetails userDetails = (UserDetails) auth.getPrincipal();
        WebAuthenticationDetails authDetails = (WebAuthenticationDetails) auth.getDetails();
        service.saveLoginLog(userDetails, authDetails, req.getSession().getId());
    }

    /**
     * 로그인 성공 시 요청한 URL로 리다이렉트한다.
     *
     * @param req
     * @param resp
     * @param auth
     *
     * @throws IOException
     */
    protected void resultRedirectStrategy(HttpServletRequest req, HttpServletResponse resp) throws IOException {
        SavedRequest savedReq = reqCache.getRequest(req, resp);

        String redirectTo = req.getParameter("redirectTo");
        if (!StringUtil.isEmpty(redirectTo)) {
            redirectStrategy.sendRedirect(req, resp, redirectTo);
        } else if (savedReq != null) {
            String targetUrl = savedReq.getRedirectUrl();
            redirectStrategy.sendRedirect(req, resp, targetUrl);
        } else {
            redirectStrategy.sendRedirect(req, resp, defaultUrl);
        }
    }
}
