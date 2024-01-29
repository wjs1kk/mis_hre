package com.jnv.bbs.qna.service.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.jnv.bbs.qna.service.QnaListDAO;
import com.jnv.bbs.qna.service.QnaListService;
import com.jnv.bbs.vo.QnaVO;

@Service("qnaListService")
@Transactional
public class QnaListServiceImpl implements QnaListService {

    @Resource(name = "qnaListDAO")
    private QnaListDAO dao;

    /**
     * QNA 목록 조회
     */
    @Override
    public List<QnaVO> getQnaList(Map<String, Object> searchMap) {
        return dao.getQnaList(searchMap);
    }
}
