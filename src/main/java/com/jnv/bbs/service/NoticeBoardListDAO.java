package com.jnv.bbs.service;

import java.util.List;
import java.util.Map;

import org.egovframe.rte.psl.dataaccess.mapper.Mapper;

import com.jnv.bbs.vo.NoticeBoardVO;

@Mapper("noticeBoardListDAO")
public interface NoticeBoardListDAO {

    List<NoticeBoardVO> getNoticeBoardList(Map<String, Object> searchMap);

}
