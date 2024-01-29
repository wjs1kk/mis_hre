package com.jnv.sm.log.controller;

import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.jnv.sm.log.service.RoleUserLogService;
import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;

@Controller
public class RoleUserLogController {

    @Resource(name = "roleUserLogService")
    private RoleUserLogService svc;

    /**
     * 권한 변경 이력 조회
     *
     * @param param
     * @param param
     * @param searchMap
     * @return
     * @throws Exception
     */

    @RequestMapping("sm/getRoleLog.do")
    public NexacroResult getRoleLog(@ParamDataSet(name = "dsSearch") Map<String, Object> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();
        result.addDataSet("dsRoleLog", svc.getRoleLog(searchMap));
        return result;
    }
}
