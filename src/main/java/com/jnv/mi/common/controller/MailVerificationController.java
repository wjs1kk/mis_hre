package com.jnv.mi.common.controller;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.jnv.jncore.annotation.JnRequestDataset;
import com.jnv.jncore.argumentresolver.JnResult;
import com.jnv.mi.common.service.MailVerificationService;
import com.jnv.mi.vo.MailVerificationVO;

@Controller
public class MailVerificationController {

    @Resource(name = "mailVerificationService")
    private MailVerificationService service;

    @RequestMapping("mi/common/mailVerification/sendMail.do")
    public JnResult sendVerificationMail(@JnRequestDataset(name = "dsEmailVerification") MailVerificationVO params) {
        JnResult result = new JnResult();
        MailVerificationVO vo = service.sendVerificationEmail(params);
        result.addDataSet("dsEmailVerification", vo);
        result.addVariable("callbackMsg", "success");
        return result;
    }

    @RequestMapping("mi/common/mailVerification/checkVerificationCode.do")
    public JnResult checkVerificationCode(@JnRequestDataset(name = "dsEmailVerification") MailVerificationVO params) {
        JnResult result = new JnResult();
        service.checkVerificationCode(params);
        result.addVariable("callbackMsg", "success");
        return result;
    }
}
