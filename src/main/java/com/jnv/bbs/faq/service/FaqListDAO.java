package com.jnv.bbs.faq.service;

import java.util.List;
import java.util.Map;

import org.egovframe.rte.psl.dataaccess.mapper.Mapper;

import com.jnv.bbs.vo.FaqVO;

@Mapper("faqListDAO")
public interface FaqListDAO {

    List<FaqVO> getFaqList(Map<String, Object> searchMap);

}
