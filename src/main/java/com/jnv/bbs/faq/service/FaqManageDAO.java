package com.jnv.bbs.faq.service;

import java.util.Map;

import org.egovframe.rte.psl.dataaccess.mapper.Mapper;

import com.jnv.bbs.vo.FaqVO;

@Mapper("faqManageDAO")
public interface FaqManageDAO {

    FaqVO getFaqManage(Map<String, Object> searchMap);

    void insertFaqManage(FaqVO faqVO);

    void updateFaqManage(FaqVO faqVO);

    void updateFaqReadCount(Map<String, Object> searchMap);

    void deleteFaqManage(FaqVO faqVO);

    void updateFaqSttsCd(FaqVO faqVO);

}
