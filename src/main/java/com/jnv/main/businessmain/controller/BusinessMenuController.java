package com.jnv.main.businessmain.controller;

import static com.jnv.common.util.Constants.FIELD_DATA;
import static com.jnv.common.util.Constants.RESULT_VIEW;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;

import javax.annotation.Resource;
import javax.annotation.security.PermitAll;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.egovframe.rte.fdl.cmmn.exception.EgovBizException;
import org.egovframe.rte.fdl.security.userdetails.util.EgovUserDetailsHelper;
import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.jnv.jncore.argumentresolver.JnParam;
import com.jnv.jncore.argumentresolver.JnResult;
import com.jnv.jncore.exception.controller.BaseAjaxController;
import com.jnv.jncore.security.UserVO;
import com.jnv.main.businessmain.service.BusinessMenuService;
import com.jnv.main.vo.CompLangVO;
import com.jnv.main.vo.MenuVO;
import com.jnv.main.vo.MessageVO;
import com.nexacro.uiadapter.spring.core.annotation.ParamVariable;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;

@Controller
@SuppressWarnings("rawtypes")
public class BusinessMenuController extends BaseAjaxController {

    @Resource(name = "businessMenuService")
    private BusinessMenuService service;

    @Resource
    private ObjectMapper objectMapper;

    @PermitAll
    @RequestMapping("/selectNexacroMenu.do")
    public NexacroResult selectNexacroMenu() {
        NexacroResult result = new NexacroResult();
        List<MenuVO> data = service.selectNexacroMenuList();
        List<MenuVO> favoriteMenu = service.getFavoriteMenu();
        List<MessageVO> messageList = service.selectNexacroMessageList();
        List<CompLangVO> compLangList = service.selectNexacroCompLangList();

        result.addDataSet("dsMenu", data);
        result.addDataSet("dsFavoriteMenu", favoriteMenu);
        result.addDataSet("gdsMessage", messageList);
        result.addDataSet("gdsCompLanguage", compLangList);  // component multi language

        return result;
    }

    @PermitAll
    @RequestMapping("/selectNexacroMenuLang.do")
    public NexacroResult selectNexacroMenuLang() {
        NexacroResult result = new NexacroResult();

        List<MenuVO> data = new ArrayList<>();

        Locale locale = LocaleContextHolder.getLocale();

        String sLang = locale.getLanguage();

        if (sLang != null && !"ko".equals(sLang))
            data = service.selectNexacroMenuLangList(sLang);

        if (data == null || data.isEmpty())
            data = service.selectNexacroMenuList();

        result.addDataSet("dsMenu", data);
        return result;
    }

    @PermitAll
    @RequestMapping("/cmn/getMessage.do")
    public JnResult getMessage() {
        JnResult result = new JnResult();
        List<MessageVO> messages = service.selectNexacroMessageList();
        result.addDataSet("dsMessage", messages);
        return result;
    }

    // 메뉴 트리 조회
    @SuppressWarnings("unchecked")
    @PermitAll
    @RequestMapping("/cmn/getTreeMenu.do")
    public JnResult selectTreeMenu(@RequestParam Map param)
            throws EgovBizException {
        List<MenuVO> list = service.selectTreeMenu(param);

        JnResult result = new JnResult();
        result.addDataSet("data", list);
        return result;
    }

    // 메뉴 트리 조회
    @RequestMapping("selectMenuSearch.do")
    public String selectMenuSearch(JnParam param, HttpServletRequest req, HttpServletResponse res, ModelMap model)
            throws EgovBizException {
        List<MenuVO> list = service.selectMenuSearch(param);
        String oftenCount = service.selectMenuSearchOftenUseCount(param);
        model.addAttribute(FIELD_DATA, list);
        model.addAttribute("oftenCount", oftenCount);
        model.addAttribute("size", list.size());
        return RESULT_VIEW;
    }

    // 메뉴 트리 조회
    @RequestMapping("selectMenuPath.do")
    public String selectMenuPath(JnParam param, HttpServletRequest req, HttpServletResponse res, ModelMap model)
            throws EgovBizException {
        String menuPath = service.selectMenuPath(param);
        model.addAttribute("menuPath", menuPath);
        return RESULT_VIEW;
    }

    /**
     * 사용자 클릭 > 패스워드 변경
     *
     * @param param
     * @param req
     * @param res
     * @param model
     *
     * @return
     *
     * @throws EgovBizException
     */
    @RequestMapping("goPasswordChange.do")
    public String passwordChange(JnParam param, HttpServletRequest req, HttpServletResponse res, ModelMap model)
            throws EgovBizException {
        return "/common/main/passwordChange.jn";
    }

    /**
     * 현재 비밀번호 맞는지 확인
     *
     * @param param
     * @param request
     * @param model
     *
     * @return
     *
     * @throws EgovBizException
     */
    @RequestMapping("/comparePassword.do")
    public String comparePassword(JnParam param, HttpServletRequest request, ModelMap model) throws EgovBizException {
        boolean flag = service.comparePassword(param);
        model.addAttribute(FIELD_DATA, flag);
        return RESULT_VIEW;
    }

    /**
     * 비밀번호 변경
     *
     * @param request
     * @param model
     * @param param
     *
     * @return
     *
     * @throws EgovBizException
     */
    @RequestMapping("/passwordChange.do")
    public String passwordChange(HttpServletRequest request, ModelMap model, JnParam param) throws EgovBizException {
        service.passwordChange(param);
        return RESULT_VIEW;
    }

    @RequestMapping("/cmn/favorite/setFavoriteMenu.do")
    public NexacroResult setFavoriteMenu(@ParamVariable(name = "menuId") String menuId,
            @ParamVariable(name = "setFavorite") String setFavorite, HttpServletRequest request) {
        NexacroResult result = new NexacroResult();

        if (Boolean.TRUE.equals(EgovUserDetailsHelper.isAuthenticated())) {
            UserVO userVO = (UserVO) EgovUserDetailsHelper.getAuthenticatedUser();
            Map<String, Object> map = new HashMap<>();
            map.put("menuId", menuId);
            map.put("setFavorite", setFavorite);
            map.put("sessionSysId", userVO.getSysId());
            map.put("sessionUserId", userVO.getUserId());
            map.put("sessionUserIp", request.getRemoteAddr());

            service.setFavoriteMenu(map);

            result.addVariable("resultMsg", "success");
            result.addVariable("menuId", menuId);
            result.addVariable("favoriteYn", setFavorite);
        } else {
            result.addVariable("resultMsg", "failed");
        }

        return result;
    }

    @RequestMapping("/cmn/favorite/getFavoriteMenu.do")
    public NexacroResult getFavoriteMenu() {
        NexacroResult result = new NexacroResult();
        result.addDataSet("dsFavoriteMenu", service.getFavoriteMenu());
        return result;
    }
}
