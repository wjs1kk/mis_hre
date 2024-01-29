package com.jnv.org.dept.controller;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.jnv.org.dept.service.DeptManageService;
import com.jnv.org.dept.vo.DeptManageVO;
import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;

@Controller
public class DeptManageController {

    @Resource(name = "deptManageService")
    private DeptManageService service;

    /**
     * 조직관리 - 부서관리 - 부서관리 조회
     *
     * @param searchMap
     * @return result
     */
    @RequestMapping("org/deptManage/getDeptManageList.do")
    public NexacroResult getDeptManageList(@ParamDataSet(name = "dsSearch") Map<String, Object> searchMap) {
        NexacroResult result = new NexacroResult();
        result.addDataSet("dsList", service.getDeptManageList(searchMap));
        return result;
    }

    /**
     * 조직관리 - 부서관리 - 부서관리 저장
     *
     * @param voList
     * @return result
     */
    @RequestMapping("org/deptManage/saveDeptManageList.do")
    public NexacroResult saveDeptManageList(@ParamDataSet(name = "dsList") List<DeptManageVO> voList) {
        NexacroResult result = new NexacroResult();
        service.saveDeptManageList(voList);
        result.addVariable("callbackMsg", "success");

        return result;
    }

    /**
     * 조직관리 - 부서관리 - 상위부서코드 팝업
     *
     * @param searchMap
     * @return result
     */
    @RequestMapping("org/deptManage/getUpDeptPopupList.do")
    public NexacroResult getUpDeptPopupList(@ParamDataSet(name = "dsSearch") Map<String, Object> searchMap) {
        NexacroResult result = new NexacroResult();
        result.addDataSet("dsList", service.getUpDeptPopupList(searchMap));
        return result;
    }


}
