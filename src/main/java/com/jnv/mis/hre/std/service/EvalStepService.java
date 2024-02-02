package com.jnv.mis.hre.std.service;

import java.util.List;
import java.util.Map;

import com.jnv.mis.hre.std.vo.EvalStepVO;


public interface EvalStepService {

	List<EvalStepVO> getEvalStepList(Map<String, Object> paramMap) throws Exception;

	String setEvalStepList(List<EvalStepVO> evalStepList) throws Exception;

}
