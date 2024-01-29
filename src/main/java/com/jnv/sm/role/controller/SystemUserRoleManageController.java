package com.jnv.sm.role.controller;

import java.util.List;
import java.util.Map;
import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import static com.jnv.common.util.Constants.RESULT_VIEW;
import com.jnv.common.accesslog.annotation.AccessLogging;
import com.jnv.jncore.argumentresolver.JnParam;
import com.jnv.jncore.exception.controller.BaseAjaxController;
import com.jnv.sm.role.service.SystemUserRoleManageService;
import com.jnv.sm.vo.CmtnVO;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class SystemUserRoleManageController extends BaseAjaxController {

    @Resource(name = "systemUserRoleManageService")
    private SystemUserRoleManageService service;

    /**
     * 시스템 관리 > 메뉴/권한 관리 > 임시 사용자 관리 페이지
     *
     * @param req
     * @param model
     *
     * @return
     *
     * @throws Exception
     */
    @AccessLogging
    @RequestMapping("systemUserRoleManage.do")
    public String userRoleManage(HttpServletRequest req, ModelMap model) throws Exception {
        return "/sm/role/systemUserRoleManage.jn";
    }

    /**
     * 시스템 관리 > 메뉴/권한 관리 > 임시 사용자 관리 > 사용자 조회
     *
     * @param param
     * @param req
     * @param model
     *
     * @return
     *
     * @throws Exception
     */
    @AccessLogging(preferredMenuId = "smUserRoleManage", actionName = "조회")
    @RequestMapping("searchTmpUser.do")
    public String searchTmpUser(JnParam param, HttpServletRequest req, ModelMap model) throws Exception {
        List<CmtnVO> list = service.searchTmpUser(param);
        model.addAttribute("data", list);
        return RESULT_VIEW;
    }

    /**
     * 시스템 관리 > 메뉴/권한 관리 > 임시 사용자 관리 > 사용자 저장
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
    @AccessLogging(preferredMenuId = "smUserRoleManage", actionName = "저장")
    @RequestMapping("insertSystemUserRoleManage.do")
    public String insertSystemUserRoleManage(
            JnParam param, @RequestParam Map<?, ?> commandMap, HttpServletRequest req, HttpServletResponse res,
            ModelMap model)
            throws Exception {
        CmtnVO[] vos = param.getDataset("cmtnVO", CmtnVO.class).toArray(new CmtnVO[0]);
        service.insertSystemUserRoleManage(vos, model);
        return RESULT_VIEW;
    }

    /**
     * 시스템 관리 > 메뉴/권한 관리 > 임시 사용자 관리 > 사용자 삭제
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
    @AccessLogging(preferredMenuId = "smUserRoleManage", actionName = "삭제")
    @RequestMapping("deleteSystemUserRoleManage.do")
    public String deleteSystemUserRoleManage(
            JnParam param, @RequestParam Map<?, ?> commandMap, HttpServletRequest req, HttpServletResponse res,
            ModelMap model)
            throws Exception {
        CmtnVO[] vos = param.getDataset("cmtnVO", CmtnVO.class).toArray(new CmtnVO[0]);
        service.deleteSystemUserRoleManage(vos, model);
        return RESULT_VIEW;
    }

}
