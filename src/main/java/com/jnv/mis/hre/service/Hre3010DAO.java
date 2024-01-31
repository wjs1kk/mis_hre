package com.jnv.mis.hre.service;

import java.util.List;
import java.util.Map;

import org.egovframe.rte.psl.dataaccess.mapper.Mapper;

import com.jnv.jncore.vo.ComboVO;
import com.jnv.mis.hre.vo.Hre3010VO;

@Mapper("Hre3010DAO")
public interface Hre3010DAO {
	List<Hre3010VO> getStdMgtList();
	List<ComboVO> selectHreCodeCombo(Map<String, ?> params);
}
