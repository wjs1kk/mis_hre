package com.jnv.mis.hre.std.service;

import java.util.List;
import java.util.Map;

import com.jnv.mis.hre.std.vo.EvalEmpTypeVO;

public interface EvalEmpTypeService {
	List<EvalEmpTypeVO> getEvalEmpType(Map<String, Object> params);
}
