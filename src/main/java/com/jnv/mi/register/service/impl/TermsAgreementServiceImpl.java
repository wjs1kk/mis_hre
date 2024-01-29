package com.jnv.mi.register.service.impl;

import java.util.List;
import java.util.Map;
import javax.annotation.Resource;

import com.jnv.mi.register.service.TermsAgreementDAO;
import com.jnv.mi.register.service.TermsAgreementService;
import com.jnv.mi.vo.TermsVO;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service("termsAgreementService")
public class TermsAgreementServiceImpl implements TermsAgreementService {

    @Resource(name = "termsAgreementDAO")
    private TermsAgreementDAO dao;

    @Value("#{jnframeProp['sysId']}")
    private String sysId;

    @Override
    public List<TermsVO> getTermsList(Map<String, Object> params) {
        params.put("sysId", sysId);
        return dao.getTermsList(params);
    }
}
