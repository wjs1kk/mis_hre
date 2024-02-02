package com.jnv.mis.hre.service;

import java.util.List;
import java.util.Map;

import org.egovframe.rte.psl.dataaccess.mapper.Mapper;

import com.jnv.mis.hre.vo.EvalStepVO;

@Mapper("evalStepDAO")
public interface EvalStepDAO {

	//리스트 조회
	List<EvalStepVO> getEvalStepList(Map<String, Object> paramMap);

	void selectEvalStep(EvalStepVO evalStepVO);
	
	//행추가
	void insertEvalStep(EvalStepVO evalStepVO);

	//수정	
	void updateEvalStep(EvalStepVO evalStepVO);

	//행삭제
	void deleteEvalStep(EvalStepVO evalStepVO);

}
