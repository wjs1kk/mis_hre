package com.jnv.bbs.faq.service.impl;

import java.util.Map;

import javax.annotation.Resource;

import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.jnv.bbs.faq.service.FaqManageDAO;
import com.jnv.bbs.faq.service.FaqManageService;
import com.jnv.bbs.vo.FaqVO;
import com.jnv.common.seq.service.IdGeneratorService;

@Service("faqManageService")
@Transactional
public class FaqManageServiceImpl implements FaqManageService {

    @Resource(name = "faqManageDAO")
    private FaqManageDAO dao;

    @Resource(name = "idGeneratorService")
    private IdGeneratorService idGen;

    /**
     * FAQ 상세 조회
     */
    @Override
    public FaqVO getFaqManage(Map<String, Object> searchMap) {

        if ("Y".equals(searchMap.get("isRead"))) { // 상세화면에서 조회수 + 1
            // "Y" Object고 searchMap에서 "isRead"를 찾아서 값 비교
            // 화면에서 dsSearch에서 "isRead"를 받음

            dao.updateFaqReadCount(searchMap); // FAQ 조회 CNT +1
        }

        return dao.getFaqManage(searchMap);
    }

    /**
     * FAQ 상세 저장
     */
    @Override
    public void setFaqManage(FaqVO faqVO) {

        if (StringUtils.isEmpty(faqVO.getFaqId())) {
            String faqId = idGen.nextIdFor("faqId");
            faqVO.setFaqId(faqId);

            dao.insertFaqManage(faqVO);
        } else {
            dao.updateFaqManage(faqVO);
        }
    }

    /**
     * FAQ 상세 삭제
     */
    @Override
    public void deleteFaqManage(FaqVO faqVO) {
        dao.deleteFaqManage(faqVO);
    }

    /**
     * FAQ 상태 변경
     */
    @Override
    public void setFaqStts(FaqVO faqVO, String faqSttsCd) {

        faqVO.setFaqSttsCd(faqSttsCd);
        dao.updateFaqSttsCd(faqVO);

    }
}