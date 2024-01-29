package com.jnv.mi.register.service;

import java.util.List;
import java.util.Map;

import com.jnv.mi.vo.TermsVO;

public interface TermsAgreementService {

    List<TermsVO> getTermsList(Map<String, Object> params);
}
