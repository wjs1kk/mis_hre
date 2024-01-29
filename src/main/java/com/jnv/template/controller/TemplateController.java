package com.jnv.template.controller;

import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;

import com.jnv.jncore.annotation.JnRequestDataset;
import com.jnv.jncore.argumentresolver.JnParam;
import com.jnv.jncore.argumentresolver.JnResult;
import com.jnv.sm.user.service.UserManageService;
import com.jnv.sm.vo.UserManageVO;

import org.egovframe.rte.fdl.cmmn.exception.EgovBizException;

@Controller
@Transactional
public class TemplateController {

    @Resource(name = "userManageService")
    private UserManageService userManageService;

    @RequestMapping("sam/type1/getUser.do")
    public JnResult getUser(@JnRequestDataset(name = "dsSearch") Map<String, Object> searchMap) {
        JnResult result = new JnResult();
        result.addDataSet("dsUserManage", userManageService.getUser(searchMap));
        return result;
    }

    @RequestMapping("sam/type1/setUser.do")
    public JnResult setUser(@JnRequestDataset(name = "dsUserManage") UserManageVO user) {
        JnResult result = new JnResult();
        String msg = userManageService.setUser(user);
        result.addVariable("callbackMsg", msg);
        result.addVariable("userId", user.getUserId());
        return result;
    }
}
