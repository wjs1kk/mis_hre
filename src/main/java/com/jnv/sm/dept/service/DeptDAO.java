package com.jnv.sm.dept.service;

import java.util.List;
import java.util.Map;

import com.jnv.jncore.vo.ComboVO;
import com.jnv.sm.vo.DeptVO;

import org.egovframe.rte.psl.dataaccess.mapper.Mapper;

@Mapper("deptDAO")
public interface DeptDAO {

    List<DeptVO> selectDeptList(Map<String, ?> map);

    void insertDept(DeptVO vo);

    void updateDept(DeptVO vo);

    void deleteDept(DeptVO vo);

    List<ComboVO> selectDeptCombo(Map<?, ?> commandMap);

    List<ComboVO> selectOrganCombo(Map<?, ?> commandMap);

}
