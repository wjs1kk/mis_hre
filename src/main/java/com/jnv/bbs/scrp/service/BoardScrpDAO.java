package com.jnv.bbs.scrp.service;

import java.util.List;
import java.util.Map;

import org.egovframe.rte.psl.dataaccess.mapper.Mapper;

import com.jnv.bbs.vo.BoardScrpVO;

@Mapper("boardScrpDAO")
public interface BoardScrpDAO {

    List<BoardScrpVO> getBoardScrapList(Map<String, Object> searchMap);

    int getDuplicateKeyCnt(BoardScrpVO boardScrpVO);

    void insertBoardScrap(BoardScrpVO boardScrpVO);

    void deleteBoardScrap(BoardScrpVO boardScrpVO);
}
