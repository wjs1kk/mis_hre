package com.jnv.mis.hre.controller;

import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.jnv.mis.hre.service.Hre3050Service;
import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;

@Controller
public class Hre3050Controller {
    @Resource(name = "hre3050Service")
    private Hre3050Service service;
    
    
    @RequestMapping("/mis/hre/hre_3050M/getEvalEmpList.do")
    public NexacroResult getEvalEmpList(@ParamDataSet (name = "dsSearch") Map<String, Object> searchMap) throws Exception{
        
        NexacroResult result = new NexacroResult();
        
        result.addDataSet("dsList", service.getEvalEmpList(searchMap));
        
        return result;
    }
    

}
