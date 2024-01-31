package com.jnv.mis.hre.service;

import java.util.List;
import java.util.Map;

import com.jnv.mis.hre.vo.EvalTypeVO;

public interface Hre3040Service {

	List<EvalTypeVO> getEvalTypeList(Map<String, Object> searchMap)throws Exception;

	String setEvalTypeList(List<EvalTypeVO> evalTypeList)throws Exception;

}
