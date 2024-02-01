package com.jnv.mis.hre.service;

import java.util.List;
import java.util.Map;

import com.jnv.mis.hre.vo.Hre3060VO;
import com.jnv.sam.vo.TypeTwoVO;

public interface Hre3060Service {
	List<Hre3060VO> getEvalGradeList(Map<String, Object> params);
	String setEvalGradeList(List<Hre3060VO> hre3060VO) throws Exception;
}
