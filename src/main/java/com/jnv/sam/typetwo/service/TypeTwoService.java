package com.jnv.sam.typetwo.service;

import java.util.List;
import java.util.Map;

import com.jnv.sam.vo.TypeTwoVO;

import org.egovframe.rte.fdl.cmmn.exception.EgovBizException;

public interface TypeTwoService {

    List<TypeTwoVO> getTypeTwoList(Map<String, Object> paramMap) throws Exception;

    String setTypeTwoList(List<TypeTwoVO> typeTwoList) throws Exception;
}
