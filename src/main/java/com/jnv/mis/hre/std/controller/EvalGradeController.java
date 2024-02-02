package com.jnv.mis.hre.std.controller;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.jnv.mis.hre.std.service.EvalGradeService;
import com.jnv.mis.hre.std.vo.EvalGradeVO;
import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;

@Controller
public class EvalGradeController {
	
	@Resource(name = "EvalGradeService")
	private EvalGradeService service;

    @RequestMapping("mis/hre/hre3060/getEvalGrade.do")
    public NexacroResult getEvalGrade(@ParamDataSet(name="dsSearch") Map<String, Object> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();
        result.addDataSet("dsList", service.getEvalGradeList(searchMap));
        return result;
    }
    
    @RequestMapping("mis/hre/hre3060/setEvalGrade.do")
    public NexacroResult setEvalGrade(@ParamDataSet(name="dsList") List<EvalGradeVO> hre3060VO) throws Exception{
    	NexacroResult result = new NexacroResult();

        String rmsg = service.setEvalGradeList(hre3060VO);

        result.addVariable("callbackMsg", rmsg);

        return result;
    }
}
