package com.jnv.mis.hre.controller;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.jnv.mis.hre.service.Hre3010Service;
import com.jnv.mis.hre.service.Hre3060Service;
import com.jnv.mis.hre.vo.Hre3060VO;
import com.jnv.sam.vo.TypeTwoVO;
import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;

@Controller
public class Hre3060Controller {
	
	@Resource(name = "Hre3060Service")
	private Hre3060Service service;

    @RequestMapping("mis/hre/hre3060/getEvalGrade.do")
    public NexacroResult getEvalGrade(@ParamDataSet(name="dsSearch") Map<String, Object> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();
        result.addDataSet("dsList", service.getEvalGradeList(searchMap));
        return result;
    }
    
    @RequestMapping("mis/hre/hre3060/setEvalGrade.do")
    public NexacroResult setEvalGrade(@ParamDataSet(name="dsList") List<Hre3060VO> hre3060VO) throws Exception{
    	NexacroResult result = new NexacroResult();

        String rmsg = service.setEvalGradeList(hre3060VO);

        result.addVariable("callbackMsg", rmsg);

        return result;
    }
}
