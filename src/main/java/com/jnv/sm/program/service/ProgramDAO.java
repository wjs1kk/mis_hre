package com.jnv.sm.program.service;

import com.jnv.jncore.vo.ComboVO;
import com.jnv.sm.vo.ProgramDetailVO;
import com.jnv.sm.vo.ProgramHeaderVO;
import com.jnv.sm.vo.ProgramTableVO;
import com.jnv.sm.vo.ProgramVO;
import org.apache.ibatis.annotations.Param;
import org.egovframe.rte.psl.dataaccess.mapper.Mapper;

import java.util.List;
import java.util.Map;

@Mapper("programDAO")
public interface ProgramDAO {

    List<ProgramHeaderVO> selectProgramList(Map<String, ?> map);

    List<ProgramDetailVO> selectFunctionList(Map<String, ?> map);

    List<ComboVO> selectProgTyComboList();

    List<ComboVO> selectFuncTypeComboList();

    List<ComboVO> selectFuncPatternTypeComboList();

    void insertProgram(ProgramHeaderVO vo);

    void updateProgram(ProgramHeaderVO vo);

    void deleteProgram(ProgramHeaderVO vo);

    void insertFunction(ProgramDetailVO vo);

    void updateFunction(ProgramDetailVO vo);

    void deleteFunction(ProgramDetailVO vo);

    String selectSaveValidation(ProgramHeaderVO vo);

    void deleteProgramFunction(ProgramHeaderVO vo);

    void cmProgChangeProgIdP(Map<String, ?> map);

    List<ProgramVO> selectProgTableList(Map<String, ?> map);

    void insertProgTableList(ProgramVO vo);

    void updateProgTableList(ProgramVO vo);

    void deleteProgTableList(ProgramVO vo);

    void updateAtchFileId(Map<String, ?> map);

    List<ProgramTableVO> getAvailableTableList(Map<String, ?> map);

    List<ProgramTableVO> getSelectedTableList(Map<String, ?> map);

    void deleteTableList(@Param("sysId") String sysId, @Param("progId") String progId);

    void setTable(ProgramTableVO item);
}
