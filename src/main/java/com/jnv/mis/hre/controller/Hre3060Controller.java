package com.jnv.mis.hre.controller;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.jnv.mis.hre.service.Hre3010Service;
import com.jnv.mis.hre.service.Hre3060Service;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;

@Controller
public class Hre3060Controller {
	
	@Resource(name = "Hre3060Service")
	private Hre3060Service service;

    @RequestMapping("mis/hre/hre3060/getEvalGrade.do")
    public NexacroResult getEvalGrade() throws Exception {

        NexacroResult result = new NexacroResult();
        result.addDataSet("dsList", service.getEvalGradeList());

        return result;
    }
}
