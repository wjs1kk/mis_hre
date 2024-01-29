package com.jnv.bbs.service;

import java.util.List;
import java.util.Map;

import com.jnv.bbs.vo.NoticeBoardVO;

public interface NoticeBoardListService {

    List<NoticeBoardVO> getNoticeBoardList(Map<String, Object> searchMap);
}
