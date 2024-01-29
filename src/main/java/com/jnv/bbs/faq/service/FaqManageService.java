package com.jnv.bbs.faq.service;

import java.util.Map;

import com.jnv.bbs.vo.FaqVO;

public interface FaqManageService {

    FaqVO getFaqManage(Map<String, Object> searchMap);

    void setFaqManage(FaqVO faqVO);

    void deleteFaqManage(FaqVO faqVO);

    void setFaqStts(FaqVO faqVO, String faqSttsCd);
}
