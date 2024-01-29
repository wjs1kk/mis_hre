package com.jnv.bbs.service;

import java.util.List;
import java.util.Map;

import com.jnv.bbs.vo.BoardMasterVO;

public interface BoardMasterService {

    List<BoardMasterVO> getBoardMasterList(Map<String, Object> searchMap);

    String saveBoardMasterList(List<BoardMasterVO> boardMasterVO);
}
