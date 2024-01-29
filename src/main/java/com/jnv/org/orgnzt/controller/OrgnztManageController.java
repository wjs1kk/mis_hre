package com.jnv.org.orgnzt.controller;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.jnv.org.orgnzt.service.OrgnztManageService;
import com.jnv.org.orgnzt.vo.OrgnztDeptVO;
import com.jnv.org.orgnzt.vo.OrgnztManageVO;
import com.jnv.org.orgnzt.vo.OrgnztStdVO;
import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;

@Controller
public class OrgnztManageController {

    @Resource(name = "orgnztManageService")
    private OrgnztManageService service;

    /**
     * 조직정보 - 조직관리 기준일자 조회
     *
     * @param searchMap
     * @return result
     */
    @RequestMapping("org/orgnztManage/getOrgnStdYmdList.do")
    public NexacroResult getOrgnStdYmdList(@ParamDataSet(name = "dsSearch") Map<String, Object> searchMap) {
        NexacroResult result = new NexacroResult();
        result.addDataSet("dsOrgnStdYmdList", service.getOrgnStdYmdList(searchMap));
        return result;
    }

    /**
     * 조직정보 - 조직관리 트리 조회
     *
     * @param searchMap
     * @return result
     */
    @RequestMapping("org/orgnztManage/getOrgnztManageList.do")
    public NexacroResult getOrgnztManageList(@ParamDataSet(name = "dsSearch") Map<String, Object> searchMap) {
        NexacroResult result = new NexacroResult();
        result.addDataSet("dsOrgnList", service.getOrgnztManageList(searchMap));
        return result;
    }

    /**
     * 조직정보 - 부서목록 조회
     *
     * @param searchMap
     * @return result
     */
    @RequestMapping("org/orgnztManage/getOrgnztDeptList.do")
    public NexacroResult getOrgnztDeptList(@ParamDataSet(name = "dsSearch") Map<String, Object> searchMap) {
        NexacroResult result = new NexacroResult();
        result.addDataSet("dsDeptList", service.getOrgnztDeptList(searchMap));
        return result;
    }

    /**
     * 조직정보 저장 (기준일/ 조직관리/ 부서목록)
     *
     * @param orgnztStdVO
     * @param orgnztManageVO
     * @param orgnztDeptVO
     *
     * @return result
     */
    @RequestMapping("org/orgnztManage/saveOrgnztManage.do")
    public NexacroResult setOrgnztManage(@ParamDataSet(name = "dsOrgnStdYmdList") List<OrgnztStdVO> orgnztStdVO,
            @ParamDataSet(name = "dsOrgnList") List<OrgnztManageVO> orgnztManageVO,
            @ParamDataSet(name = "dsDeptList") List<OrgnztDeptVO> orgnztDeptVO) {
        NexacroResult result = new NexacroResult();

        String rMsg = service.setOrgnztManage(orgnztStdVO, orgnztManageVO, orgnztDeptVO);

        if ("success".equals(rMsg)) {
            result.addVariable("callbackMsg", "success");
        } else {
            result.addVariable("callbackMsg", "failure");
        }
        return result;
    }

    /**
     * 조직정보 - 부서목록 팝업 조회
     *
     * @param searchMap
     * @return result
     */
    @RequestMapping("org/orgnztManage/getDeptPopupList.do")
    public NexacroResult getDeptPopupList(@ParamDataSet(name = "dsSearch") Map<String, Object> searchMap) {
        NexacroResult result = new NexacroResult();
        result.addDataSet("dsList", service.getDeptPopupList(searchMap));
        return result;
    }

}
