package com.jnv.mis.hre.std.service.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jnv.mis.hre.std.service.EvalEmpTypeDAO;
import com.jnv.mis.hre.std.service.EvalEmpTypeService;
import com.jnv.mis.hre.std.vo.EvalEmpTypeVO;

@Service("EvalEmpTypeService")
public class EvalEmpTypeServiceImpl implements EvalEmpTypeService{

	@Resource(name = "EvalEmpTypeDAO")
	private EvalEmpTypeDAO dao;
	
	@Override
	public List<EvalEmpTypeVO> getEvalEmpType(Map<String, Object> params){
		return dao.getEvalEmpType(params);
	}
}
