package com.jnv.mis.hre.service;

import java.util.List;
import java.util.Map;

import org.egovframe.rte.psl.dataaccess.mapper.Mapper;

import com.jnv.mis.hre.vo.Hre3060VO;
import com.jnv.sam.vo.TypeTwoVO;

@Mapper("Hre3060DAO")
public interface Hre3060DAO {
	List<Hre3060VO> getEvalGradeList(Map<String, Object> params);
	void insertEvalGrade(Hre3060VO hre3060VO);
    void updateEvalGrade(Hre3060VO hre3060VO);
    void deleteEvalGrade(Hre3060VO hre3060VO);
    int getDuplicatedKeyCnt(Hre3060VO Hre3060VO);
}
