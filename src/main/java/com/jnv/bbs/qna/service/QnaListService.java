package com.jnv.bbs.qna.service;

import java.util.List;
import java.util.Map;

import com.jnv.bbs.vo.QnaVO;

public interface QnaListService {

    List<QnaVO> getQnaList(Map<String, Object> searchMap);

}
