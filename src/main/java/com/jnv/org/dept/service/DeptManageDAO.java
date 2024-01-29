package com.jnv.org.dept.service;

import java.util.List;
import java.util.Map;

import org.egovframe.rte.psl.dataaccess.mapper.Mapper;

import com.jnv.org.dept.vo.DeptManageVO;

@Mapper("deptManageDAO")
public interface DeptManageDAO {

    List<DeptManageVO> getDeptManageList(Map<String, Object> searchMap);
    void insertDept(DeptManageVO deptManageVO);
    void updateDept(DeptManageVO deptManageVO);
    void deleteDept(DeptManageVO deptManageVO);
    int getDuplicateKeyCnt(DeptManageVO deptManageVO); // 중복체크

    List<DeptManageVO> getUpDeptPopupList(Map<String, Object> searchMap);
}
