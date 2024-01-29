package com.jnv.sm.dept.service;

import java.util.List;
import java.util.Map;

import com.jnv.jncore.argumentresolver.JnParam;
import com.jnv.jncore.vo.ComboVO;
import com.jnv.sm.vo.DeptVO;

import org.egovframe.rte.fdl.cmmn.exception.EgovBizException;

public interface DeptService {

    List<DeptVO> selectDeptList(JnParam param) throws EgovBizException;

    void saveDept(JnParam param) throws EgovBizException;

    void deleteDept(JnParam param) throws EgovBizException;

    List<ComboVO> selectDeptCombo(Map<?, ?> commandMap) throws EgovBizException;

    List<ComboVO> selectOrganCombo(Map<?, ?> commandMap) throws EgovBizException;

}
