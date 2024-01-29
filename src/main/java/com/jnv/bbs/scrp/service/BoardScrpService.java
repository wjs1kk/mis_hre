package com.jnv.bbs.scrp.service;

import java.util.List;
import java.util.Map;

import com.jnv.bbs.vo.BoardScrpVO;

public interface BoardScrpService {

    List<BoardScrpVO> getBoardScrapList(Map<String, Object> searchMap);

    void setBoardScrapManage(List<BoardScrpVO> boardScrpVO);

    void deleteBoardScrapManage(BoardScrpVO boardScrpVO);
}
