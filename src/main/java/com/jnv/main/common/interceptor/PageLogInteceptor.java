package com.jnv.main.common.interceptor;

import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;
import java.util.stream.Collectors;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang3.StringUtils;
import org.apache.commons.text.StringEscapeUtils;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import com.jnv.jncore.security.UserVO;
import com.jnv.main.common.service.CommonDAO;

import org.egovframe.rte.fdl.security.userdetails.util.EgovUserDetailsHelper;

public class PageLogInteceptor implements HandlerInterceptor {

    private static final String PARAM_USER_NM = "userNm";
    private static final String PARAM_SESSION_USER_IP = "sessionUserIp";
    private static final String PARAM_USER_ID = "userId";
    private static final String PARAM_FUNC_TYPE = "funcType";
    private static final String PARAM_MENU_ID = "menuId";
    private static final Set<String> PATH_SET = new HashSet<>();
    private static final Set<String> SENSITIVE_SET = new HashSet<>();

    static {
        PATH_SET.add("/accessDenied.do");
        PATH_SET.add("/loginFailure.do");
        PATH_SET.add("/logoutSuccess.do");
        PATH_SET.add("/concurrentExpired.do");
        PATH_SET.add("/checkReadEmail.do");
        PATH_SET.add("/findPassword.do");
        PATH_SET.add("/businessMain.do");
        PATH_SET.add("/checkUserTelno.do");
        PATH_SET.add("/checkUserEml.do");
        PATH_SET.add("/updateNewPassword.do");

        SENSITIVE_SET.add("member");
        SENSITIVE_SET.add("memberDgs");
        SENSITIVE_SET.add("memberModify");
        SENSITIVE_SET.add("memberModifyDgs");
    }

    @Resource(name = "commonDAO")
    private CommonDAO dao;

    @Override
    public void postHandle(
        HttpServletRequest request,
        HttpServletResponse response,
        Object handler,
        ModelAndView modelAndView) throws Exception {

        String contextPath = request.getContextPath() == null ? "" : request.getContextPath();
        Set<String> set = PATH_SET.stream()
            .map(item -> contextPath + item)
            .collect(Collectors.toSet());

        String target = contextPath + "/simpleLogin.do";
        // 2020-12-02 kangsy 메뉴별 기능에 대한 로그 저장 하기 위해 생성
        // jsp마다 삭제, 수정, 저장 등 이벤트 발생시 munuId, funcType 설정 해줘야함
        // (menuId, funcType(funcType) 는 layoutMulit.jsp 에서 파라미터로 넘겨줌)
        if (!request.getRequestURI().equals(target)
            && !set.contains(request.getRequestURI())
            && EgovUserDetailsHelper.isAuthenticated()) {

            Map<String, Object> param = new HashMap<>();
            String funcType = StringEscapeUtils.unescapeHtml4(request.getParameter(PARAM_FUNC_TYPE));
            String menuId = StringEscapeUtils.unescapeHtml4(request.getParameter(PARAM_MENU_ID));

            UserVO user = (UserVO) EgovUserDetailsHelper.getAuthenticatedUser();

            if (funcType != null) {
                funcType = StringEscapeUtils.unescapeJson(funcType.replaceAll("\"(.*)\"", "$1"));
            }
            if (menuId != null) {
                menuId = StringEscapeUtils.unescapeJson(menuId.replaceAll("\"(.*)\"", "$1"));
            }

            if (StringUtils.isNotEmpty(menuId)
                && menuId != null
                && !"".equals(PARAM_MENU_ID)) {

                param.put(PARAM_USER_ID, user.getUserId());
                param.put(PARAM_SESSION_USER_IP, null);
                param.put(PARAM_USER_NM, user.getUserNmKr());
                param.put(PARAM_MENU_ID, menuId);
                param.put(PARAM_FUNC_TYPE, funcType);

                // 민감정보 접근제어 메뉴 여부를 위해 회원관리,회원정보수정 메뉴 진입시 접근제어 메뉴로 저장
                if (SENSITIVE_SET.contains(menuId)) {
                    param.put("cntnContrYn", "1");
                }

                dao.insertConnectLog(param);
            }
        }
    }
}
