package com.jnv.sm.role.service;

import java.util.List;
import java.util.Map;

import com.jnv.sm.vo.ModuleComboVO;
import com.jnv.sm.vo.RoleManageVO;

public interface RoleManageService {

    List<RoleManageVO> getRoleSearch(Map<String, Object> searchMap) throws Exception;

    String setRoleList(List<RoleManageVO> roleList) throws Exception;

    List<ModuleComboVO> getModuleCombo(Map<String, Object> searchMap) throws Exception;

    //List<RoleManageVO> getChildRoleSearch(Map<String, Object> searchMap) throws Exception;

    //List<RoleManageVO> getParentsRoleSearch(Map<String, Object> searchMap) throws Exception;

    //List<RoleManageVO> getRolePopupSearch(Map<String, Object> searchMap) throws Exception;

    //String setRolePopupInfo(List<RoleManageVO> roleList) throws Exception;

    //String deleteChildRole(List<RoleManageVO> roleList) throws Exception;

    //String deleteParentsRole(List<RoleManageVO> roleList) throws Exception;

}
