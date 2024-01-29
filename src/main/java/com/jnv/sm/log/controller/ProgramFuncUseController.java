package com.jnv.sm.log.controller;

import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.jnv.sm.log.service.ProgramFuncUseService;
import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;

@Controller
public class ProgramFuncUseController {

    private static final Logger LOG = LoggerFactory.getLogger(ProgramFuncUseController.class);

    @Resource(name = "programFuncUseService")
    private ProgramFuncUseService service;

    @RequestMapping("sm/progStat/getUserByMenuStat.do")
    public NexacroResult getUserByMenuStat(@ParamDataSet(name = "dsSearch") Map<String, Object> searchMap) {
        NexacroResult result = new NexacroResult();
        result.addDataSet("dsUserByMenu", service.getUserByMenuStat(searchMap));

        return  result;
    }

    @RequestMapping("sm/progStat/getTxByMenuStat.do")
    public NexacroResult getTxByMenuStat(@ParamDataSet(name = "dsSearch") Map<String, Object> searchMap) {
        NexacroResult result = new NexacroResult();
        result.addDataSet("dsTxByMenu", service.getTxByMenuStat(searchMap));

        return  result;
    }

    @RequestMapping("sm/progStat/getMenuByUserStat.do")
    public NexacroResult getMenuByUserStat(@ParamDataSet(name = "dsSearch") Map<String, Object> searchMap) {
        NexacroResult result = new NexacroResult();
        result.addDataSet("dsMenuByUser", service.getMenuByUserStat(searchMap));

        return  result;
    }

    @RequestMapping("sm/progStat/getTxByUserStat.do")
    public NexacroResult getTxByUserStat(@ParamDataSet(name = "dsSearch") Map<String, Object> searchMap) {
        NexacroResult result = new NexacroResult();
        result.addDataSet("dsTxByUser", service.getTxByUserStat(searchMap));

        return  result;
    }
}
