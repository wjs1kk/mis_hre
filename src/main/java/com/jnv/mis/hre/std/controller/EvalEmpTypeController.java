package com.jnv.mis.hre.std.controller;

import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.jnv.mis.hre.std.service.EvalEmpTypeService;
import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;

@Controller
public class EvalEmpTypeController {
	@Resource(name = "EvalEmpTypeService")
	private EvalEmpTypeService service;
	
	@RequestMapping("mis/hre/hre3050/getEvalEmpType.do")
    public NexacroResult getEvalGrade(@ParamDataSet(name="dsSearch") Map<String, Object> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();
        result.addDataSet("dsList", service.getEvalEmpType(searchMap));
        return result;
    }
}
