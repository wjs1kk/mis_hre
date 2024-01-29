package com.jnv.bbs.service;

import java.util.List;
import java.util.Map;

import com.jnv.bbs.vo.NoticeBoardCommentVO;
import com.jnv.bbs.vo.NoticeBoardVO;

public interface NoticeBoardManageService {

    List<NoticeBoardVO> getNoticeBoard(Map<String, Object> searchMap);

    void setNoticeBoard(NoticeBoardVO noticeBoardVO);

    void deleteNoticeBoard(NoticeBoardVO noticeBoardVO);

    void deleteNoticeBoardComment(NoticeBoardCommentVO noticeBoardCommentVO);

    List<NoticeBoardVO> getNoticeBoardDetail(Map<String, Object> searchMap);

    void setNBRecommend(NoticeBoardVO noticeBoardVO);

    void setNBDisrecommend(NoticeBoardVO noticeBoardVO);

    String checkPassword(Map<String, Object> searchMap);
}
