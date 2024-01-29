package com.jnv.ast.resources.controller;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.jnv.ast.resources.service.ResourcesRqstListService;
import com.jnv.ast.vo.ResourcesRqstListVO;
import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;

@Controller
public class ResourcesRqstListController {

    @Resource(name = "resourcesRqstListService")
    private ResourcesRqstListService svc;

    /**
     * 자원신청 조회
     *
     * @param searchMap
     * @return result
     */
    @RequestMapping("ast/resources/getAstRqst.do")
    public NexacroResult getAstRqst(@ParamDataSet(name = "dsSearch") Map<String, Object> searchMap) {
        NexacroResult result = new NexacroResult();
        result.addDataSet("dsList", svc.getAstRqst(searchMap));
        return result;
    }

    /**
     * 자원신청
     *
     * @param searchMap
     * @return result
     */
    @RequestMapping("ast/resources/getAstRqstApply.do")
    public NexacroResult getAstRqstApply(@ParamDataSet(name = "dsDetailList") List<ResourcesRqstListVO> resDetailList) {
        NexacroResult result = new NexacroResult();
        String rmsg = svc.getAstRqstApply(resDetailList);
        if ("success".equals(rmsg)) {
            result.addVariable("callbackMsg", "success");
        } else {
            result.addVariable("callbackMsg", "failure");
        }
        return result;
    }

}
