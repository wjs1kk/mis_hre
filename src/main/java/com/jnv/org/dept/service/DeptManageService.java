package com.jnv.org.dept.service;

import java.util.List;
import java.util.Map;

import com.jnv.org.dept.vo.DeptManageVO;

public interface DeptManageService {

    List<DeptManageVO> getDeptManageList(Map<String, Object> searchMap);
    String saveDeptManageList(List<DeptManageVO> deptManageVO);

    List<DeptManageVO> getUpDeptPopupList(Map<String, Object> searchMap);


}
