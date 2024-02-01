package com.jnv.mis.hre.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.jnv.mis.hre.service.Hre3010DAO;
import com.jnv.mis.hre.service.Hre3060DAO;
import com.jnv.mis.hre.service.Hre3060Service;
import com.jnv.mis.hre.vo.Hre3060VO;

@Service("Hre3060Service")
public class Hre3060ServiceImpl implements Hre3060Service{
	@Resource(name = "Hre3060DAO")
    
	private Hre3060DAO dao;
	public List<Hre3060VO> getEvalGradeList(){
		return dao.getEvalGradeList();
	}
}
