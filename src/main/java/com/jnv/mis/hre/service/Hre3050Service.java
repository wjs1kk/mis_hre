package com.jnv.mis.hre.service;

import java.util.List;
import java.util.Map;

import com.jnv.mis.hre.vo.Hre3050VO;

public interface Hre3050Service {

    List<Hre3050VO> getEvalEmpList(Map<String, Object> searchMap) throws Exception;
    
    String setEvalEmpList(List<Hre3050VO> evalEmpList) throws Exception;
	

}
