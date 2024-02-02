package com.jnv.mis.hre.std.service;

import java.util.List;
import java.util.Map;

import org.egovframe.rte.psl.dataaccess.mapper.Mapper;

import com.jnv.mis.hre.std.vo.EvalEmpTypeVO;

@Mapper("EvalEmpTypeDAO")
public interface EvalEmpTypeDAO {
	List<EvalEmpTypeVO> getEvalEmpType(Map<String, Object> params);
}
