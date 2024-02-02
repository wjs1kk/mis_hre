package com.jnv.mis.hre.std.service;

import java.util.List;
import java.util.Map;

import org.egovframe.rte.psl.dataaccess.mapper.Mapper;

import com.jnv.mis.hre.std.vo.EvalGradeVO;

@Mapper("EvalGradeDAO")
public interface EvalGradeDAO {
	List<EvalGradeVO> getEvalGradeList(Map<String, Object> params);
	void insertEvalGrade(EvalGradeVO hre3060VO);
    void updateEvalGrade(EvalGradeVO hre3060VO);
    void deleteEvalGrade(EvalGradeVO hre3060VO);
    int getDuplicatedKeyCnt(EvalGradeVO Hre3060VO);
}
