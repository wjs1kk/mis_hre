package com.jnv.bbs.qna.service;

import java.util.Map;

import com.jnv.bbs.vo.QnaVO;

public interface QnaManageService {

    QnaVO getQnaManage(Map<String, Object> searchMap);

    void setQnaManage(QnaVO qnaVO);

    void deleteQnaManage(QnaVO qnaVO);

    void setQnaAnswrManage(QnaVO qnaVO);

    void delUpdateQnaAnswr(QnaVO qnaVO);

}
