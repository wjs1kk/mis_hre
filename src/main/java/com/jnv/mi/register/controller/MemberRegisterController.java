package com.jnv.mi.register.controller;

import javax.annotation.Resource;
import javax.annotation.security.PermitAll;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.jnv.jncore.annotation.JnRequestDataset;
import com.jnv.jncore.argumentresolver.JnResult;
import com.jnv.mi.register.service.MemberRegisterService;
import com.jnv.mi.vo.MemberRegisterVO;

@Controller
public class MemberRegisterController {

    @Resource(name = "memberRegisterService")
    MemberRegisterService service;

    @PermitAll
    @RequestMapping(value = "pts/mif/register", produces = "text/html")
    public String goRegisterForm() {
        return "/index-web";
    }

    @PermitAll
    @RequestMapping(value = "pts/mif/registerComplete", produces = "text/html")
    public String goRegisterComplete() {
        return "/index-web";
    }

    @RequestMapping("mi/register/checkId.do")
    public JnResult checkId(@JnRequestDataset(name = "dsMemberInfo") MemberRegisterVO vo) {
        JnResult result = new JnResult();
        boolean available = service.checkMemberIdAvailable(vo.getMemberId());
        result.addVariable("isIdCheckPassed", available ? "Y" : "N");
        return result;
    }

    @RequestMapping("mi/register/register.do")
    public JnResult register(@JnRequestDataset(name = "dsMemberInfo") MemberRegisterVO vo) {
        JnResult result = new JnResult();
        service.registerMember(vo);
        result.addVariable("callbackMsg", "success");
        return result;
    }
}
