package com.jnv.main.login.controller;

import java.util.Map;
import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import static com.jnv.common.util.Constants.FIELD_DATA;
import static com.jnv.common.util.Constants.PARAM_MAP;
import static com.jnv.common.util.Constants.RESULT_VIEW;
import com.jnv.common.accesslog.annotation.AccessLogging;
import com.jnv.common.attach.service.FileUploadService;
import com.jnv.common.config.JnFrameProperties;
import com.jnv.jncore.argumentresolver.JnParam;
import com.jnv.jncore.exception.controller.BaseAjaxController;
import com.jnv.main.login.service.FindPasswordService;
import com.jnv.main.login.service.SessionInvalidatorService;
import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;
import org.egovframe.rte.fdl.cmmn.exception.EgovBizException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@Profile("nexacro")
public class NexacroLoginController extends BaseAjaxController {

    private static final Logger LOG = LoggerFactory.getLogger(NexacroLoginController.class);

    @Resource(name = "findPasswordService")
    private FindPasswordService findPasswordService;

    @Resource(name = "sessionInvalidatorService")
    private SessionInvalidatorService sessionInvalidatorService;

    @Resource(name = "fileUploadService")
    private FileUploadService fileService;

    /**
     * 로그인 화면으로 이동한다. (로그인 처리는 Spring Security 기능을 이용.)
     *
     * @param req
     * @param model
     *
     * @return
     *
     * @throws EgovBizException
     */
    @RequestMapping(value = "/login.do")
    public String login(HttpServletRequest req, ModelMap model) {
        return "/common/security/login";
    }

    /**
     * 2016.04.28 외부 로그인 외부 로그인 화면으로 이동한다. (로그인 처리는 Spring Security 기능을 이용.)
     *
     * @param req
     * @param model
     *
     * @return
     */
    @RequestMapping(value = "/simpleLogin.do")
    public String loginExt(HttpServletRequest req, ModelMap model) {
        return "/common/security/simpleLogin";
    }

    /**
     * 비밀번호 찾기 팝업
     *
     * @param req
     * @param model
     *
     * @return
     */
    @RequestMapping("/findPassword.do")
    public String findPassword(HttpServletRequest req, ModelMap model) {
        return "/common/security/findPassword";
    }

    /**
     * 비밀번호 찾기 - 전화번호
     *
     * @param param
     * @param req
     * @param model
     *
     * @return
     *
     * @throws EgovBizException
     */
    @RequestMapping("/checkUserTelno.do")
    public String checkUserTelno(JnParam param, HttpServletRequest req, ModelMap model) throws EgovBizException {
        @SuppressWarnings("unchecked")
        boolean result = findPasswordService.isValidTelno((Map<String, String>) param.getDatasetFirstItem(PARAM_MAP));
        model.addAttribute(FIELD_DATA, result);
        return RESULT_VIEW;
    }

    /**
     * 비밀번호 찾기 - 이메일
     *
     * @param param
     * @param req
     * @param model
     *
     * @return
     *
     * @throws EgovBizException
     */
    @RequestMapping("/checkUserEml.do")
    public String checkUserEml(JnParam param, HttpServletRequest req, ModelMap model) throws EgovBizException {
        @SuppressWarnings("unchecked")
        boolean result = findPasswordService.isValidEml((Map<String, String>) param.getDatasetFirstItem(PARAM_MAP));
        model.addAttribute(FIELD_DATA, result);
        return RESULT_VIEW;
    }

    @SuppressWarnings("unchecked")
    @RequestMapping("/updateNewPassword.do")
    public String updateNewPassword(JnParam param, HttpServletRequest req, ModelMap model) throws EgovBizException {
        findPasswordService.updatePassword((Map<String, String>) param.getDatasetFirstItem(PARAM_MAP));
        req.getSession().invalidate();
        return RESULT_VIEW;
    }

    // 메인 포탈 화면 호출
    //    @AccessLogging(preferredMenuId = "mainPotal")
    @RequestMapping(value = "/businessMain.do")
    public String businessMain(HttpServletRequest req, ModelMap model) {
        String frontendType = JnFrameProperties.getProperty("frontendType", "web");
        return String.format("/index-%s", frontendType);
    }

    // 메인 포탈 화면 호출(html)
    @RequestMapping(value = "/businessMain1.do")
    @AccessLogging(actionName = "메뉴", preferredMenuId = "mainPortal")
    public String businessMain1(HttpServletRequest req) {
        return "/layout/mainPortal";
    }

    // 시스템관리 포탈 화면 호출
    @AccessLogging(preferredMenuId = "SM")
    @RequestMapping(value = "/systemMain.do")
    public String systemMain(HttpServletRequest req) {
        return "/layout/layoutMulti";
    }

    /**
     * 권한이 없는 리소스에 접근했을 때 보여준다.
     *
     * @param req
     * @param model
     *
     * @return
     */
    @RequestMapping("/accessDenied.do")
    public String accessDenied(HttpServletRequest req, ModelMap model) {
        return "/common/security/accessDenied";
    }

    /**
     * 로그아웃에 성공했을 때 보여준다.
     *
     * @param req
     * @param model
     *
     * @return
     *
     * @throws EgovBizException
     */
    @RequestMapping("/logoutSuccess.do")
    public String logoutSuccess(HttpServletRequest req, ModelMap model) {
        LOG.debug("Logout Success.");

        return "/common/security/logoutSuccess";
    }

    /**
     * 로그인 실패 시 보여준다.
     *
     * @param req
     * @param model
     *
     * @return
     */
    @RequestMapping("/loginFailure.do")
    public String loginFailure(HttpServletRequest req, ModelMap model) {
        return "/common/security/loginFailure";
    }

    /**
     * 기존의 접속을 끊을지 물어본다.
     *
     * @param req
     * @param model
     *
     * @return
     *
     * @throws EgovBizException
     */
    @RequestMapping("/concurrentExpired.do")
    public String concurrentExpired(HttpServletRequest req, @RequestParam Map<?, ?> commandMap, ModelMap model)
            throws EgovBizException {
        return "/common/security/concurrentExpired";
    }

    /**
     * 세션종료 시 보여준다.
     *
     * @param req
     * @param model
     *
     * @return
     */
    @RequestMapping("/sessionExpired.do")
    public String sessiontionExpired(HttpServletRequest req, ModelMap model) {
        return "/common/security/sessionExpired";
    }

    /**
     * @param dsLogin
     * @param req
     *
     * @return
     */
    @RequestMapping("mi/login/invalidatePreviousSession.do")
    public String invalidatePreviousSession(@ParamDataSet(name = "dsLogin") Map<String, Object> dsLogin,
            HttpServletRequest req) {
        sessionInvalidatorService.invalidate((String) dsLogin.get("username"));
        HttpSession session = req.getSession(false);
        if (session != null) {
            session.invalidate();
        }

        return "forward:/login";
    }
}
