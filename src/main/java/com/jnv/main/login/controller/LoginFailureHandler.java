package com.jnv.main.login.controller;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Stream;

import javax.annotation.Resource;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.session.SessionRegistry;
import org.springframework.security.web.DefaultRedirectStrategy;
import org.springframework.security.web.RedirectStrategy;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;
import org.springframework.security.web.authentication.session.SessionAuthenticationException;

import com.jnv.jncore.exception.controller.BaseAjaxController;
import com.jnv.main.login.service.LoginHistoryService;
import com.jnv.main.vo.LoginLogVO;

public class LoginFailureHandler extends BaseAjaxController implements AuthenticationFailureHandler {

    private static final Logger LOG = LoggerFactory.getLogger(LoginFailureHandler.class);

    @Resource(name = "loginHistoryService")
    private LoginHistoryService service;

    private String defaultUrl;

    private RedirectStrategy redirectStrategy = new DefaultRedirectStrategy();

    @Resource(name = "sessionRegistry")
    private SessionRegistry sessionRegistry;

    @Override
    public void onAuthenticationFailure(
            HttpServletRequest request,
            HttpServletResponse response,
            AuthenticationException exception)
            throws IOException, ServletException {
        String memberId = request.getParameter("j_username");
        if (exception instanceof SessionAuthenticationException) {
            Map<String, String> map = new HashMap<>();
            map.put("memberId", memberId);

            String userId = service.selectAvailableUserIdForMemberId(map);
            map.put("userId", userId);

            List<LoginLogVO> list = null;
            try {
                list = service.selectLoginLog(map);
            } catch (Exception e) {
                LOG.error(
                    "Cannot get last login IP address for user {}, tried logging in with member id {}",
                    userId,
                    memberId);
            }
            response.setContentType("text/html;charset=UTF-8");

            Stream<LoginLogVO> stream = (list == null) ? Stream.empty() : list.stream();

            String message = stream
                .findFirst()
                .map(vo -> String.format("IP %s으로 로그인되어 있습니다. ", vo.getUserIp()))
                .orElse("다른 컴퓨터에서 로그인 중입니다. ");

            StringBuilder sb = new StringBuilder();
            sb.append("<!DOCTYPE html>")
                .append("<html>")
                .append("<head>")
                .append("<meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">")
                .append("</head>")
                .append("<body>")
                .append("<form id=\"login\" method=\"post\">")
                .append("<input type=\"hidden\" name=\"j_username\" value=\"")
                .append(request.getParameter("j_username"))
                .append("\">")
                .append("<input type=\"hidden\" name=\"j_password\" value=\"")
                .append(request.getParameter("j_password"))
                .append("\">")
                .append("<input type=\"hidden\" name=\"redirectTo\" value=\"")
                .append(StringUtils.defaultString(request.getParameter("redirectTo")))
                .append("\">")
                .append("</form>")
                .append("<script type=\"text/javascript\">")
                .append("window.onload = function () {")
                .append("    if (confirm(\"")
                .append(message)
                .append("기존 접속을 해제하시겠습니까?\")) {")
                .append("        url = \"" + request.getContextPath() + "/invalidatePreviousSession.do\";")
                .append("    } else {")
                .append("        url = \"" + request.getContextPath() + "/simpleLogin.do\";")
                .append("    }")
                .append("    var form = document.querySelector(\"#login\");")
                .append("    form.action = url;")
                .append("    form.submit();")
                .append("}")
                .append("</script>")
                .append("</body>")
                .append("</html>");

            PrintWriter out = response.getWriter();
            out.write(sb.toString());
        } else {
            redirectStrategy.sendRedirect(request, response, defaultUrl);
        }
    }

    public String getDefaultUrl() {
        return defaultUrl;
    }

    public void setDefaultUrl(String defaultUrl) {
        this.defaultUrl = defaultUrl;
    }

}
