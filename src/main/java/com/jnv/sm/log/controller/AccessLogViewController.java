package com.jnv.sm.log.controller;

import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.jnv.sm.log.service.AccessLogViewService;
import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;

@Controller
public class AccessLogViewController {

    @Resource(name = "accessLogViewService")
    private AccessLogViewService svc;

    @RequestMapping("sm/getAccessLogView.do")
    public NexacroResult getRoleLog(@ParamDataSet(name = "dsSearch") Map<String, Object> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();
        result.addDataSet("dsAccessLogView", svc.getAccessLogView(searchMap));
        return result;
    }
}
