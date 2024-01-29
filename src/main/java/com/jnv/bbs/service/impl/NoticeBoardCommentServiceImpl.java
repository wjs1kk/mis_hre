package com.jnv.bbs.service.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.jnv.bbs.service.NoticeBoardCommentDAO;
import com.jnv.bbs.service.NoticeBoardCommentService;
import com.jnv.bbs.vo.NoticeBoardCommentVO;

@Service("noticeBoardCommentService")
public class NoticeBoardCommentServiceImpl implements NoticeBoardCommentService {

    @Resource(name = "noticeBoardCommentDAO")
    private NoticeBoardCommentDAO dao;

    /**
     * 소통광장 - 게시물 상세조회 내용 -댓글내용 조회
     */
    @Override
    public List<NoticeBoardCommentVO> getNBDetailComment(Map<String, Object> searchMap) {

        return dao.getNBDetailComment(searchMap);
    }

    /**
     * 소통광장 - 게시물 상세조회 내용 -댓글내용 입력
     */
    @Override
    public void setNBDetailComment(NoticeBoardCommentVO commentVO) {

        dao.insertNBDetailComment(commentVO);
    }

    /**
     * 소통광장 - 게시물 상세조회 내용 -댓글내용 삭제
     */
    @Override
    public void deleteNBDetailComment(NoticeBoardCommentVO commentVO) {
        dao.deleteNBDetailComment(commentVO);
    }

}
