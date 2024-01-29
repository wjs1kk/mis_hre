package com.jnv.bbs.service;

import java.util.List;
import java.util.Map;

import org.egovframe.rte.psl.dataaccess.mapper.Mapper;

import com.jnv.bbs.vo.NoticeBoardCommentVO;

@Mapper("noticeBoardCommentDAO")
public interface NoticeBoardCommentDAO {

    List<NoticeBoardCommentVO> getNBDetailComment(Map<String, Object> searchMap);

    void insertNBDetailComment(NoticeBoardCommentVO commentVO);

    void deleteNBDetailComment(NoticeBoardCommentVO commentVO);

}
