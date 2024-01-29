package com.jnv.main.login.controller;

import java.util.HashMap;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.egovframe.rte.fdl.security.userdetails.util.EgovUserDetailsHelper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Profile;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.jnv.common.config.JnFrameProperties;
import com.jnv.main.login.service.FindPasswordService;
import com.jnv.main.login.service.SessionInvalidatorService;

@Controller
@Profile("web")
public class WebLoginController {

    private static final Logger LOG = LoggerFactory.getLogger(WebLoginController.class);

    @Resource(name = "findPasswordService")
    private FindPasswordService findPasswordService;

    @Resource(name = "sessionInvalidatorService")
    private SessionInvalidatorService sessionInvalidatorService;

    @GetMapping(value = "/login", produces = "text/html")
    public String login() {
        return "/index-web";
    }

    @GetMapping(value = "/findIdPw", produces = "text/html")
    public String goFindIdPw() {
        return "/index-web";
    }

    @RequestMapping("/cmn/getSessionUserInfo.do")
    @ResponseBody
    public ResponseEntity<Map<String, Object>> getSessionUserInfo() {
        Map<String, Object> map = new HashMap<>();
        if (Boolean.TRUE.equals(EgovUserDetailsHelper.isAuthenticated())) {
            Object user = EgovUserDetailsHelper.getAuthenticatedUser();
            map.put("data", user);
        }
        return ResponseEntity.ok(map);
    }

    @RequestMapping(value = "/businessMain.do")
    public String businessMain() {
        String frontendType = JnFrameProperties.getProperty("frontendType", "web");
        return String.format("/index-%s", frontendType);
    }

    /**
     * 권한이 없는 리소스에 접근했을 때 보여준다.
     *
     * @return
     */
    @RequestMapping("/accessDenied.do")
    public String accessDenied() {
        return "/common/security/accessDenied";
    }

    /**
     * 로그아웃에 성공했을 때 보여준다.
     *
     * @return
     */
    @RequestMapping("/logoutSuccess.do")
    public String logoutSuccess() {
        LOG.debug("Logout Success.");

        return "/common/security/logoutSuccess";
    }

    /**
     * 로그인 실패 시 보여준다.
     *
     * @return
     */
    @RequestMapping("/loginFailure.do")
    public String loginFailure() {
        return "/common/security/loginFailure";
    }

    /**
     * 기존의 접속을 끊을지 물어본다.
     *
     * @return
     */
    @RequestMapping("/concurrentExpired.do")
    public String concurrentExpired() {
        return "/common/security/concurrentExpired";
    }

    /**
     * 세션종료 시 보여준다.
     *
     * @return
     */
    @RequestMapping("/sessionExpired.do")
    public String sessiontionExpired() {
        return "/common/security/sessionExpired";
    }

    /**
     * @param req
     * @return
     */
    @RequestMapping("/invalidatePreviousSession.do")
    public String invalidatePreviousSession(HttpServletRequest req) {
        sessionInvalidatorService.invalidate(req.getParameter("j_username"));
        HttpSession session = req.getSession(false);
        if (session != null) {
            session.invalidate();
        }

        return "forward:/login";
    }
}
