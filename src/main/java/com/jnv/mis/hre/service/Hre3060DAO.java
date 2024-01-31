package com.jnv.mis.hre.service;

import java.util.List;

import org.egovframe.rte.psl.dataaccess.mapper.Mapper;

import com.jnv.mis.hre.vo.Hre3060VO;

@Mapper("Hre3060DAO")
public interface Hre3060DAO {
	List<Hre3060VO> getEvalGradeList();
}
