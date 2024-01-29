package com.jnv.bbs.service;

import java.util.List;
import java.util.Map;

import com.jnv.bbs.vo.NoticeBoardCommentVO;

public interface NoticeBoardCommentService {

    List<NoticeBoardCommentVO> getNBDetailComment(Map<String, Object> searchMap);

    void setNBDetailComment(NoticeBoardCommentVO commentVO);

    void deleteNBDetailComment(NoticeBoardCommentVO commentVO);

}
