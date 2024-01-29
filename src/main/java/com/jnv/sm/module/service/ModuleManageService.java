package com.jnv.sm.module.service;

import java.util.List;
import java.util.Map;

import com.jnv.sm.vo.ModuleManageVO;

import org.egovframe.rte.fdl.cmmn.exception.EgovBizException;

public interface ModuleManageService {

    List<ModuleManageVO> getModuleManageList(Map<String, Object> paramMap) throws EgovBizException;

    String setModuleManageList(List<ModuleManageVO> moduleManageList) throws EgovBizException;


}
