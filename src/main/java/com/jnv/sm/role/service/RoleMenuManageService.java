package com.jnv.sm.role.service;

import java.util.List;
import java.util.Map;

import com.jnv.sm.vo.RoleMenuManageVO;

public interface RoleMenuManageService {

    List<RoleMenuManageVO> getRole(Map<String, Object> searchMap) throws Exception;

    List<RoleMenuManageVO> getRoleMenuSearch(Map<String, Object> searchMap) throws Exception;

    String setRoleMenu(List<RoleMenuManageVO> roleMenuList) throws Exception;

}
