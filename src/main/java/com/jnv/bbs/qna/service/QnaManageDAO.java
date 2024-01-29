package com.jnv.bbs.qna.service;

import java.util.Map;

import org.egovframe.rte.psl.dataaccess.mapper.Mapper;

import com.jnv.bbs.vo.QnaVO;

@Mapper("qnaManageDAO")
public interface QnaManageDAO {

    QnaVO getQnaManage(Map<String, Object> searchMap);

    void insertQnaManage(QnaVO qnaVO); // 질문 입력

    void updateQnaManage(QnaVO qnaVO); // 질문 수정

    void deleteQnaManage(QnaVO qnaVO); // 질문 삭제

    void updateQnaAnswr(QnaVO qnaVO); // 답변 입력

    void reUpdateQnaAnswr(QnaVO qnaVO); // 답변 수정

    void delUpdateQnaAnswr(QnaVO qnaVO); // 답변 삭제

    void updateQnaReadCount(Map<String, Object> searchMap); // 조회수cnt

}
