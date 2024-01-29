package com.jnv.mi.register.service;

import java.util.List;
import java.util.Map;

import com.jnv.mi.vo.TermsVO;
import org.egovframe.rte.psl.dataaccess.mapper.Mapper;

@Mapper("termsAgreementDAO")
public interface TermsAgreementDAO {

    List<TermsVO> getTermsList(Map<String, Object> params);
}
