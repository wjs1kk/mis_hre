package com.jnv.sm.program.service;

import java.util.List;
import java.util.Map;

import com.jnv.sm.vo.ProgramTableVO;
import org.springframework.ui.ModelMap;

import com.jnv.jncore.argumentresolver.JnParam;
import com.jnv.jncore.vo.ComboVO;
import com.jnv.sm.vo.ProgramDetailVO;
import com.jnv.sm.vo.ProgramHeaderVO;
import com.jnv.sm.vo.ProgramVO;

import org.egovframe.rte.fdl.cmmn.exception.EgovBizException;

public interface ProgramService {

    List<ProgramHeaderVO> selectProgramList(Map<String, Object> param);

    List<ProgramDetailVO> selectFunctionList(Map<String, Object> dsSearch);

    List<ComboVO> selectProgTyComboList() throws EgovBizException;

    List<ComboVO> selectFuncTypeComboList() throws EgovBizException;

    List<ComboVO> seletFuncPatternTypeComboList() throws EgovBizException;

    void saveProgramList(List<ProgramHeaderVO> programList) throws Exception;

    void saveProgramFuncList(List<ProgramDetailVO> funcList) throws Exception;

    void programMasterDelete(ProgramHeaderVO[] headerVO, ModelMap model) throws EgovBizException;

    void programDetailDelete(ProgramDetailVO[] detailVO, ModelMap model) throws EgovBizException;

    String programMasterSaveValidation(ProgramHeaderVO[] headerVO, ModelMap model) throws EgovBizException;

    void cmProgChangeProgIdP(JnParam param) throws EgovBizException;

    List<ProgramVO> selectProgTableList(JnParam param) throws EgovBizException;

    void progTableListSave(ProgramVO[] vos, ModelMap model) throws EgovBizException;

    void progTableListDelete(ProgramVO[] vos, ModelMap model) throws EgovBizException;

    void saveAtchFileId(Map<String, Object> params, ModelMap model) throws EgovBizException;

    List<ProgramTableVO> getAvailableTableList(Map<String, ?> params);

    List<ProgramTableVO> getSelectedTableList(Map<String, ?> params);

    void setSelectedTableList(List<ProgramTableVO> selectedTables, String sysId, String progId);
}
