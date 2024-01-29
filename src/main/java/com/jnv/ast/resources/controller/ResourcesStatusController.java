package com.jnv.ast.resources.controller;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.jnv.ast.resources.service.ResourcesStatusService;
import com.jnv.ast.vo.ResourcesAddVO;
import com.jnv.ast.vo.ResourcesDetailAddVO;
import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;

@Controller
public class ResourcesStatusController {

    @Resource(name = "resourcesStatusService")
    private ResourcesStatusService svc;

    /**
     * 자원현황 조회
     *
     * @param searchMap
     * @return result
     */
    @RequestMapping("ast/resources/getResourcesStatusList.do")
    public NexacroResult getResourcesStatusList(@ParamDataSet(name = "dsSearch") Map<String, Object> searchMap) {
        NexacroResult result = new NexacroResult();
        result.addDataSet("dsList", svc.getResourcesStatusList(searchMap));
        return result;
    }

    /**
     * 자원현황 수정
     *
     * @param vo, resDetailList
     * @return result
     */
    @RequestMapping("ast/resources/getResourcesUpdate.do")
    public NexacroResult setResourcesManage(@ParamDataSet(name = "dsList") ResourcesAddVO vo,
            @ParamDataSet(name = "dsDetailList") List<ResourcesDetailAddVO> resDetailList) {
        NexacroResult result = new NexacroResult();
        String rmsg = svc.getResourcesUpdate(vo);
        String rmsg2 = svc.getResourcesUpdate2(vo, resDetailList);
        if ("success".equals(rmsg) || "success".equals(rmsg2)) {
            result.addVariable("callbackMsg", "success");
        } else {
            result.addVariable("callbackMsg", "failure");
        }
        return result;
    }
}
