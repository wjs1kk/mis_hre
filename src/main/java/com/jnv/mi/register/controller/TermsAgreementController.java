package com.jnv.mi.register.controller;

import java.util.HashMap;
import java.util.List;

import javax.annotation.Resource;
import javax.annotation.security.PermitAll;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.jnv.jncore.annotation.JnRequestDataset;
import com.jnv.jncore.argumentresolver.JnResult;
import com.jnv.mi.register.service.TermsAgreementService;
import com.jnv.mi.vo.TermsAgreementVO;

@Controller
public class TermsAgreementController {

    @Resource(name = "termsAgreementService")
    private TermsAgreementService service;

    @PermitAll
    @RequestMapping(value = "pts/mif/termsAgree", produces = "text/html")
    public String goTermsAgree() {
        return "/index-web";
    }

    @PermitAll
    @RequestMapping("mi/register/getTerms.do")
    public JnResult getTerms() {
        JnResult result = new JnResult();
        result.addDataSet("dsTerms", service.getTermsList(new HashMap<>()));
        return result;
    }

    @PermitAll
    @RequestMapping("mi/register/setTermsAgreement.do")
    public JnResult setTermsAgreement(@JnRequestDataset(name = "dsTerms") List<TermsAgreementVO> agreement, HttpSession session) {
        session.setAttribute("termsAgreement", agreement);

        JnResult result = new JnResult();
        result.addVariable("callbackMsg", "success");

        return result;
    }

    @PermitAll
    @RequestMapping("mi/register/clearTermsAgreement.do")
    public JnResult clearTermsAgreement(HttpSession session) {
        session.removeAttribute("termsAgreement");

        JnResult result = new JnResult();
        result.addVariable("callbackMsg", "success");

        return result;
    }
}
