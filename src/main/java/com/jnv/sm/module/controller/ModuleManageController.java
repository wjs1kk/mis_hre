package com.jnv.sm.module.controller;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.jnv.sm.module.service.ModuleManageService;
import com.jnv.sm.vo.ModuleManageVO;
import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;

@Controller
public class ModuleManageController {

    @Resource(name = "moduleManageService")
    private ModuleManageService service;

    @RequestMapping("sm/getModuleManageList.do")
    public NexacroResult getModulemanageList(@ParamDataSet(name = "dsSearch") Map<String, Object> searchMap)
        throws Exception {

        NexacroResult result = new NexacroResult();

        result.addDataSet("dsModuleManage", service.getModuleManageList(searchMap));

        return result;
    }

    @RequestMapping("sm/setModuleManageList.do")
    public NexacroResult setModuleManageList(
        @ParamDataSet(name = "dsModuleManage") List<ModuleManageVO> moduleManageList)
        throws Exception {

        NexacroResult result = new NexacroResult();

        String rmsg = service.setModuleManageList(moduleManageList);

        result.addVariable("callbackMsg", rmsg);

        return result;
    }

}
