package com.jnv.mis.hre.service;

import java.util.List;
import java.util.Map;

import org.egovframe.rte.psl.dataaccess.mapper.Mapper;

import com.jnv.mis.hre.vo.Hre3050VO;

@Mapper("hre3050DAO")
public interface Hre3050DAO {
    
    //리스트 조회
    List<Hre3050VO> getEvalEmpList(Map<String, Object> params);
    
    
    
    
    void insertEvalEmp(Hre3050VO hre3050VO);
    void updateEvalEmp(Hre3050VO hre3050VO);
    void deleteEvalEmp(Hre3050VO hre3050VO);
}
