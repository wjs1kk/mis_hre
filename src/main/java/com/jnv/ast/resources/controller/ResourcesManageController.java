package com.jnv.ast.resources.controller;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.jnv.ast.resources.service.ResourcesManageService;
import com.jnv.ast.vo.ResourcesAddVO;
import com.jnv.ast.vo.ResourcesDetailAddVO;
import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;

@Controller
public class ResourcesManageController {

    @Resource(name = "resourcesManageService")
    private ResourcesManageService svc;

    /**
     * 자원등록 상세 조회
     *
     * @param searchMap
     * @return result
     */
    @RequestMapping("ast/resources/getResourcesItem.do")
    public NexacroResult getResourcesItem(@ParamDataSet(name = "dsSearch") Map<String, Object> searchMap) {
        NexacroResult result = new NexacroResult();
        result.addDataSet("dsList", svc.getResourcesItem(searchMap));
        result.addDataSet("dsDetailList", svc.getResourcesDetailItem(searchMap));
        return result;
    }

    /**
     * 자원등록 저장
     *
     * @param vo, resDetailList
     * @return result
     */
    @RequestMapping("ast/resources/setResourcesManage.do")
    public NexacroResult setResourcesManage(@ParamDataSet(name = "dsList") ResourcesAddVO vo,
            @ParamDataSet(name = "dsDetailList") List<ResourcesDetailAddVO> resDetailList) {
        NexacroResult result = new NexacroResult();
        String rmsg = svc.setResourcesManage(vo);
        String rmsg2 = svc.setDetailResManage(vo, resDetailList);
        if ("success".equals(rmsg) || "success".equals(rmsg2)) {
            result.addVariable("callbackMsg", "success");
        } else {
            result.addVariable("callbackMsg", "failure");
        }
        return result;
    }

    /**
     * 자원등록 삭제
     *
     * @param
     * @return
     */
    @RequestMapping("ast/resources/deleteResourcesManage.do")
    public NexacroResult deleteResourcesManage(@ParamDataSet(name = "dsDetailList") ResourcesDetailAddVO resVO,
            @ParamDataSet(name = "dsList") ResourcesAddVO vo) {
        NexacroResult result = new NexacroResult();
        svc.deleteAllResourcesManage(resVO, vo);
        result.addVariable("callbackMsg", "success");
        return result;
    }

}
