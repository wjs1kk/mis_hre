package com.jnv.mis.hre.service;

import java.util.List;
import java.util.Map;

import com.jnv.mis.hre.vo.EvalStepVO;

public interface Hre3030Service {

	List<EvalStepVO> getEvalStepList(Map<String, Object> paramMap) throws Exception;

	String setEvalStepList(List<EvalStepVO> evalStepList) throws Exception;

}
