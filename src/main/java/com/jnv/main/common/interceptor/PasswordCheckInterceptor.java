package com.jnv.main.common.interceptor;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang3.StringUtils;
import org.springframework.web.servlet.HandlerInterceptor;

import com.jnv.jncore.security.UserVO;

import org.egovframe.rte.fdl.security.userdetails.util.EgovUserDetailsHelper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class PasswordCheckInterceptor implements HandlerInterceptor {

    private static final Logger LOG = LoggerFactory.getLogger(PasswordCheckInterceptor.class);

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {

        String contextPath = request.getContextPath() == null ? "" : request.getContextPath();

        String target = contextPath + "/goMyPage.do";
        if (!request.getRequestURI().equals(target) && !request.getRequestURI().equals(contextPath + "/accessDenied.do")
            && !request.getRequestURI().equals(contextPath + "/loginFailure.do")
            && !request.getRequestURI().equals(contextPath + "/logoutSuccess.do")
            && !request.getRequestURI().equals(contextPath + "/concurrentExpired.do")
            && !request.getRequestURI().equals(contextPath + "/checkReadEmail.do")
            && !request.getRequestURI().equals(contextPath + "/findPassword.do")
            && !request.getRequestURI().equals(contextPath + "/checkUserTelno.do")
            && !request.getRequestURI().equals(contextPath + "/checkUserEml.do")
            && !request.getRequestURI().equals(contextPath + "/updateNewPassword.do")
            && !request.getRequestURI().equals(contextPath + "/invalidatePreviousSession.do")
            && !request.getRequestURI().equals(contextPath + "/goMyPage.do")
            && !request.getRequestURI().equals(contextPath + "/comparePasswordChk.do")
            && !request.getRequestURI().equals(contextPath + "/userChgPassword.do")) {

            UserVO sessionUser = (UserVO) EgovUserDetailsHelper.getAuthenticatedUser();
            if(sessionUser == null) {
                return true;
            }
            SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
            String pwExpireDt = sessionUser.getPwExpireDt();
            Date chgDate = null;
            Date toDate = new Date();
            try {
                if(!StringUtils.isNotBlank(pwExpireDt)) {
                    response.sendRedirect(target);
                    return false;
                }
                chgDate = new Date(sdf.parse(pwExpireDt).getTime());
                int compare = chgDate.compareTo(toDate);
                if (compare <= 0) {
                    response.sendRedirect(target);
                    return false;
                }
            } catch (ParseException e) {
                LOG.error("Failed to parse date format.", e);
            }
//
//            if (!EgovUserDetailsHelper.isAuthenticated()) {
//                response.sendRedirect(target);
//                return false;
//            }
        }
        return true;
    }

}
