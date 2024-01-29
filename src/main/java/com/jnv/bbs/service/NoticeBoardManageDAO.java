package com.jnv.bbs.service;

import java.util.List;
import java.util.Map;

import org.egovframe.rte.psl.dataaccess.mapper.Mapper;

import com.jnv.bbs.vo.NoticeBoardCommentVO;
import com.jnv.bbs.vo.NoticeBoardVO;

@Mapper("noticeBoardManageDAO")
public interface NoticeBoardManageDAO {

    List<NoticeBoardVO> getNoticeBoard(Map<String, Object> searchMap);

    void insertNoticeBoard(NoticeBoardVO noticeBoardVO);

    void updateNoticeBoard(NoticeBoardVO noticeBoardVO);

    void deleteNoticeBoard(NoticeBoardVO noticeBoardVO);

    void deleteNoticeBoardComment(NoticeBoardCommentVO noticeBoardCommentVO);

    List<NoticeBoardVO> getNoticeBoardDetail(Map<String, Object> searchMap);

    void updateDetailReadCount(Map<String, Object> searchMap);

    void updateNBRecommend(NoticeBoardVO noticeBoardVO);

    void updateNBDisrecommend(NoticeBoardVO noticeBoardVO);

    String getCheckPassword(Map<String, Object> searchMap);
}
