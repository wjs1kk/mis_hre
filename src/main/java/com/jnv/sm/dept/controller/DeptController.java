package com.jnv.sm.dept.controller;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.jnv.common.accesslog.annotation.AccessLogging;
import com.jnv.jncore.argumentresolver.JnParam;
import com.jnv.jncore.exception.controller.BaseAjaxController;
import com.jnv.jncore.vo.ComboVO;
import com.jnv.sm.dept.service.DeptService;
import com.jnv.sm.vo.DeptVO;

import static com.jnv.common.util.Constants.RESULT_VIEW;

import org.egovframe.rte.fdl.cmmn.exception.EgovBizException;

@Controller
public class DeptController extends BaseAjaxController {

    @Resource(name = "deptService")
    private DeptService deptService;

    /**
     * 시스템관리 > 기준정보 관리 > 부서 관리 페이지
     *
     * @param req
     * @param model
     * @return
     * @throws EgovBizException
     */
    @AccessLogging
    @RequestMapping("programDept.do")
    public String menuManage(HttpServletRequest req, ModelMap model) throws EgovBizException {
        return "/sm/dept/programDept.jn";
    }

    /**
     * 시스템관리 > 기준정보 관리 > 부서 관리 > 부서 조회
     *
     * @param req
     * @param model
     * @param param
     * @return
     * @throws EgovBizException
     */
    @AccessLogging(preferredMenuId = "smDept", actionName = "조회")
    @RequestMapping("selectDeptList.do")
    public String selectDeptList(HttpServletRequest req, ModelMap model, JnParam param) throws EgovBizException {
        List<DeptVO> list = deptService.selectDeptList(param);
        model.addAttribute("data", list);
        return RESULT_VIEW;
    }

    /**
     * 시스템관리 > 기준정보 관리 > 부서 관리 > 부서 저장
     *
     * @param req
     * @param model
     * @param param
     * @return
     * @throws EgovBizException
     */
    @AccessLogging(preferredMenuId = "smDept", actionName = "저장")
    @RequestMapping("saveDept.do")
    public String saveDept(HttpServletRequest req, ModelMap model, JnParam param) throws EgovBizException {
        deptService.saveDept(param);
        return RESULT_VIEW;
    }

    /**
     * 시스템관리 > 기준정보 관리 > 부서 관리 > 부서 삭제
     *
     * @param req
     * @param model
     * @param param
     * @return
     * @throws EgovBizException
     */
    @AccessLogging(preferredMenuId = "smDept", actionName = "삭제")
    @RequestMapping("deleteDept.do")
    public String deleteDept(HttpServletRequest req, ModelMap model, JnParam param) throws EgovBizException {
        deptService.deleteDept(param);
        return RESULT_VIEW;
    }

    /**
     * 공통 부서 콤보 조회
     *
     * @param commandMap
     * @param req
     * @param model
     * @return
     * @throws EgovBizException
     */
    @AccessLogging(preferredMenuId = "smDept", actionName = "부서 콤보 조회")
    @RequestMapping("selectDeptCombo.do")
    public String selectDeptCombo(@RequestParam Map<?, ?> commandMap, HttpServletRequest req, ModelMap model)
            throws EgovBizException {
        List<ComboVO> list = deptService.selectDeptCombo(commandMap);
        model.addAttribute("options", list);
        return RESULT_VIEW;
    }

    /**
     * 공통 부서(팀) 콤보 조회
     *
     * @param commandMap
     * @param req
     * @param model
     * @return
     * @throws EgovBizException
     */
    @AccessLogging(preferredMenuId = "smDept", actionName = "부서(팀) 콤보 조회")
    @RequestMapping("selectOrganCombo.do")
    public String selectOrganCombo(@RequestParam Map<?, ?> commandMap, HttpServletRequest req, ModelMap model)
            throws EgovBizException {
        List<ComboVO> list = deptService.selectOrganCombo(commandMap);
        model.addAttribute("options", list);
        return RESULT_VIEW;
    }
}
