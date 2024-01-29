package com.jnv.bbs.faq.service.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.jnv.bbs.faq.service.FaqListDAO;
import com.jnv.bbs.faq.service.FaqListService;
import com.jnv.bbs.vo.FaqVO;

@Service("faqListService")
@Transactional
public class FaqListServiceImpl implements FaqListService{

    @Resource(name = "faqListDAO")
    private FaqListDAO dao;

    /**
     * FAQ 목록 조회
     */
    @Override
    public List<FaqVO> getFaqList(Map<String, Object> searchMap) {
        return dao.getFaqList(searchMap);
    }

}
