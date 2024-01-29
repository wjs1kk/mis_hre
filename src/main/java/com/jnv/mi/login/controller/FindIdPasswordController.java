package com.jnv.mi.login.controller;

import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.jnv.jncore.annotation.JnRequestDataset;
import com.jnv.jncore.argumentresolver.JnResult;
import com.jnv.mi.login.service.FindIdPasswordService;

@Controller
public class FindIdPasswordController {

    @Resource(name = "findIdPasswordService")
    private FindIdPasswordService service;

    @RequestMapping("mi/login/findId.do")
    public JnResult findId(@JnRequestDataset(name = "dsFindId") Map<String, Object> params) {
        JnResult result = new JnResult();
        String id = service.findUserId(params);
        result.addVariable("foundMemberId", id);
        return result;
    }

    @RequestMapping("mi/login/findPassword.do")
    public JnResult findPassword(@JnRequestDataset(name = "dsFindPasswd") Map<String, Object> params) {
        JnResult result = new JnResult();
        String email = service.resetPassword(params);
        result.addVariable("emlAddr", email);
        return result;
    }
}
