package com.jnv.mis.hre.std.service;

import java.util.List;
import java.util.Map;

import com.jnv.mis.hre.std.vo.EvalTypeVO;

public interface EvalTypeService {

	List<EvalTypeVO> getEvalTypeList(Map<String, Object> searchMap)throws Exception;

	String setEvalTypeList(List<EvalTypeVO> evalTypeList)throws Exception;

}
