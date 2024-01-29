package com.jnv.bbs.qna.service;

import java.util.List;
import java.util.Map;

import org.egovframe.rte.psl.dataaccess.mapper.Mapper;

import com.jnv.bbs.vo.QnaVO;

@Mapper("qnaListDAO")
public interface QnaListDAO {

    List<QnaVO> getQnaList(Map<String, Object> searchMap);
}
