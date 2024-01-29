package com.jnv.bbs.qna.service.impl;

import java.util.Map;

import javax.annotation.Resource;

import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.jnv.bbs.qna.service.QnaManageDAO;
import com.jnv.bbs.qna.service.QnaManageService;
import com.jnv.bbs.vo.QnaVO;
import com.jnv.common.seq.service.IdGeneratorService;

@Service("qnaManageService")
@Transactional
public class QnaManageServiceImpl implements QnaManageService {

    @Resource(name = "qnaManageDAO")
    private QnaManageDAO dao;

    @Resource(name = "idGeneratorService")
    private IdGeneratorService idGen;

    /**
     * QNA 신규 - QNA질문등록 조회
     */
    @Override
    public QnaVO getQnaManage(Map<String, Object> searchMap) {

        // 조회수 CNT updateCnt
        if ("Y".equals(searchMap.get("isRead"))) {
            dao.updateQnaReadCount(searchMap);
        }

        return dao.getQnaManage(searchMap);
    }

    /**
     * QNA질문등록 저장
     */
    @Override
    public void setQnaManage(QnaVO qnaVO) {

        if (StringUtils.isEmpty(qnaVO.getQnaId())) {
            String qnaId = idGen.nextIdFor("qnaId");
            qnaVO.setQnaId(qnaId);

            dao.insertQnaManage(qnaVO);
        } else {
            dao.updateQnaManage(qnaVO);
        }
    }

    /**
     * QNA질문등록 삭제
     */
    @Override
    public void deleteQnaManage(QnaVO qnaVO) {
        dao.deleteQnaManage(qnaVO);
    }

    /**
     * QNA 답변 등록 / 수정 저장
     */
    @Override
    public void setQnaAnswrManage(QnaVO qnaVO) {

        if (StringUtils.isEmpty(qnaVO.getAnswrId())) {
            dao.updateQnaAnswr(qnaVO);
        } else if (qnaVO.getAnswrId().equals(qnaVO.getSessionUserId())) {
            dao.reUpdateQnaAnswr(qnaVO);
        }
    }

    /**
     * QNA 답변 삭제
     */
    @Override
    public void delUpdateQnaAnswr(QnaVO qnaVO) {

        dao.delUpdateQnaAnswr(qnaVO);
    }

}
