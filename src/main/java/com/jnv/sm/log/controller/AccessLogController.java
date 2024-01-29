package com.jnv.sm.log.controller;

import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.jnv.sm.log.service.AccessLogService;
import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;

@Controller
public class AccessLogController {


    @Resource(name = "accessLogService")
    private AccessLogService svc;

    @RequestMapping("sm/getAccessLog.do")
    public NexacroResult getAccessLog(@ParamDataSet(name = "dsSearch") Map<String, Object> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();
        result.addDataSet("dsAccessLog", svc.getAccessLog(searchMap));
        return result;
    }
}
