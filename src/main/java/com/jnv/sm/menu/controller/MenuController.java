package com.jnv.sm.menu.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import static com.jnv.common.util.Constants.RESULT_VIEW;
import com.jnv.common.accesslog.annotation.AccessLogging;
import com.jnv.jncore.argumentresolver.JnParam;
import com.jnv.jncore.exception.BusinessException;
import com.jnv.jncore.vo.ComboVO;
import com.jnv.sm.menu.service.MenuManageService;
import com.jnv.sm.vo.MenuManageVO;
import com.jnv.sm.vo.ProgramVO;
import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.spring.core.annotation.ParamVariable;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;
import org.egovframe.rte.fdl.cmmn.exception.EgovBizException;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class MenuController {

    @Resource(name = "menuManageService")
    private MenuManageService menuManageService;

    /**
     * 시스템관리 > 메뉴/권한 관리 > 메뉴관리 페이지
     *
     * @param req
     * @param model
     *
     * @return
     */
    @AccessLogging
    @RequestMapping("menuManage.do")
    public String menuManage(HttpServletRequest req, ModelMap model) {
        return "/sm/menu/menuManage.jn";
    }

    /**
     * 시스템관리 > 메뉴/권한 관리 > 메뉴관리 모듈 콤보 조회
     *
     * @param type
     *
     * @return
     */
    @RequestMapping("sm/getMenuModuleCombo.do")
    public NexacroResult selectModuleIdComboList(@ParamVariable(name = "type", required = false) String type) {
        Map<String, Object> map = new HashMap<>();
        map.put("type", type);
        List<ComboVO> list = menuManageService.selectModuleIdComboList(map);

        NexacroResult result = new NexacroResult();
        result.addDataSet("dsModuleCombo", list);
        return result;
    }

    @RequestMapping("sm/getSystemIdCombo.do")
    public NexacroResult getSystemIdCombo(@ParamVariable(name = "type", required = false) String type) {
        NexacroResult result = new NexacroResult();
        Map<String, Object> map = new HashMap<>();
        map.put("type", type);
        List<ComboVO> list = menuManageService.getSystemIdCombo(map);
        result.addDataSet("dsSysIdCombo", list);

        return result;
    }

    /**
     * 시스템관리 > 메뉴/권한 관리 > 메뉴관리 메뉴타입 콤보 조회
     *
     * @param commandMap
     * @param req
     * @param model
     *
     * @return
     *
     * @throws Exception
     */
    @RequestMapping("selectMenuTyCombo.do")
    public String selectMenuTypeComboList(@RequestParam Map<?, ?> commandMap, HttpServletRequest req, ModelMap model)
            throws EgovBizException {
        List<ComboVO> list = menuManageService.selectMenuTyComboList(commandMap);
        model.addAttribute("options", list);
        return RESULT_VIEW;
    }

    /**
     * 시스템관리 > 메뉴/권한 관리 > 메뉴관리 > 메뉴 , 기능 조회
     *
     * @throws Exception
     */
    @RequestMapping("sm/getMenuManageList.do")
    public NexacroResult selectMenuManageList(@ParamDataSet(name = "dsSearch") Map<String, String> map)
            throws BusinessException {
        NexacroResult result = new NexacroResult();
        List<MenuManageVO> data = menuManageService.selectMenuManageList(map);
        result.addDataSet("dsMenu", data);

        return result;
    }

    /**
     * 시스템관리 > 메뉴/권한 관리 > 메뉴관리 > 메뉴 저장
     */
    @RequestMapping("sm/saveMenuManageList.do")
    public NexacroResult saveMenuManageList(@ParamDataSet(name = "dsMenu") List<MenuManageVO> dsMenu)
            throws BusinessException {
        NexacroResult result = new NexacroResult();
        menuManageService.saveMenu(dsMenu);
        result.addVariable("callbackMsg", "success");

        return result;
    }

    /**
     * 시스템관리 > 메뉴/권한 관리 > 메뉴관리 > 링크 클릭시 프로그램 조회하는 팝업
     *
     * @param param
     * @param commandMap
     * @param req
     * @param model
     *
     * @return
     *
     * @throws Exception
     */
    @RequestMapping("programSearchPopup.do")
    public String programSearchPopup(
            JnParam param, @RequestParam Map<?, ?> commandMap, HttpServletRequest req, ModelMap model)
            throws EgovBizException {
        return "/sm/menu/programSearchPopup.jn";
    }

    /**
     * 시스템관리 > 메뉴/권한 관리 > 메뉴관리 > 프로그램 조회 팝업 > 프로그램 조회
     *
     * @param param
     * @param commandMap
     * @param req
     * @param model
     *
     * @return
     *
     * @throws Exception
     */
    @AccessLogging(preferredMenuId = "smMenuManage", actionName = "프로그램 목록 조회")
    @RequestMapping("selectProgramSearchPopup.do")
    public String selectProgramSearchPopup(
            JnParam param, @RequestParam Map<?, ?> commandMap, HttpServletRequest req, ModelMap model)
            throws EgovBizException {
        List<ProgramVO> list = menuManageService.selectProgramSearchPopup(param);
        model.addAttribute("data", list);
        return RESULT_VIEW;
    }

    @AccessLogging(preferredMenuId = "smMenuManage", actionName = "메뉴 ID 사용 여부 조회")
    @RequestMapping("searchMenuId.do")
    public String searchMenuId(JnParam param, HttpServletRequest req, ModelMap model) throws EgovBizException {
        List<MenuManageVO> vos = param.getDataset("menuManageVO", MenuManageVO.class);
        String message = menuManageService.searchMenuId(vos.toArray(new MenuManageVO[0]));
        model.addAttribute("message", message);
        return RESULT_VIEW;
    }

    /**
     * 시스템관리 > 메뉴/권한 관리 > 메뉴관리 > 메뉴ID변경
     *
     * @param param
     * @param commandMap
     * @param req
     * @param res
     * @param model
     *
     * @return
     *
     * @throws Exception
     */
    @AccessLogging(preferredMenuId = "smMenuManage", actionName = "메뉴 ID 변경")
    @RequestMapping("cmMenuChangeMenuIdP.do")
    public String cmMenuChangeMenuIdP(
            JnParam param, @RequestParam Map<?, ?> commandMap, HttpServletRequest req, HttpServletResponse res,
            ModelMap model)
            throws EgovBizException {
        menuManageService.cmMenuChangeMenuIdP(param);
        return RESULT_VIEW;
    }

}
