package com.jnv.ast.resources.controller;

import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.jnv.ast.resources.service.ResourcesListService;
import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;

@Controller
public class ResourcesListController {

    @Resource(name = "resourcesListService")
    private ResourcesListService svc;

    /**
     * 자원 목록 조회
     *
     * @param searchMap
     * @return result
     */
    @RequestMapping("ast/resources/getResourcesList.do")
    public NexacroResult getResourcesList(@ParamDataSet(name = "dsSearch") Map<String, Object> searchMap) {
        NexacroResult result = new NexacroResult();
        result.addDataSet("dsList", svc.getResourcesList(searchMap));
        return result;
    }
}
