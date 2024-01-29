package com.jnv.bbs.service;

import java.util.List;
import java.util.Map;

import org.egovframe.rte.psl.dataaccess.mapper.Mapper;

import com.jnv.bbs.vo.BoardMasterVO;

@Mapper("boardMasterDAO")
public interface BoardMasterDAO {

    List<BoardMasterVO> getBoardMasterList(Map<String, Object> searchMap);

    void insertBoardMaster(BoardMasterVO boardMasterVO);

    void updateBoardMaster(BoardMasterVO boardMasterVO);

    void deleteBoardMaster(BoardMasterVO boardMasterVO);

    int getDuplicateKeyCnt(BoardMasterVO boardMasterVO);

    void insertBoardMSTOption(BoardMasterVO boardMasterVO);

    void updateBoardMSTOption(BoardMasterVO boardMasterVO);

    void deleteBoardMSTOption(BoardMasterVO boardMasterVO);

}
