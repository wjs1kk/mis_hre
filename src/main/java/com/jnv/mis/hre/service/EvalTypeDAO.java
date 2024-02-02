package com.jnv.mis.hre.service;

import java.util.List;
import java.util.Map;

import org.egovframe.rte.psl.dataaccess.mapper.Mapper;

import com.jnv.mis.hre.vo.EvalTypeVO;

@Mapper("evalTypeDAO")
public interface EvalTypeDAO {

	//리스트 조회
	List<EvalTypeVO> getEvalTypeList(Map<String, Object> paramMap);

	void selectEvalType(EvalTypeVO evalTypeVO);
	
	//행추가
	void insertEvalType(EvalTypeVO evalTypeVO);

	//수정	
	void updateEvalType(EvalTypeVO evalTypeVO);

	//행삭제
	void deleteEvalType(EvalTypeVO evalTypeVO);

}
