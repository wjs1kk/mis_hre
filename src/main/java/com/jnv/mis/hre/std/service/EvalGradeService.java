package com.jnv.mis.hre.std.service;

import java.util.List;
import java.util.Map;

import com.jnv.mis.hre.std.vo.EvalGradeVO;

public interface EvalGradeService {
	List<EvalGradeVO> getEvalGradeList(Map<String, Object> params);
	String setEvalGradeList(List<EvalGradeVO> hre3060VO) throws Exception;
}
