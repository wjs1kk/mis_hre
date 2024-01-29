package com.jnv.sm.role.service;

import java.util.List;
import java.util.Map;

import com.jnv.sm.vo.RoleManageVO;
import com.jnv.sm.vo.RoleUserManageVO;

public interface RoleUserManageService {

    List<RoleUserManageVO> getRoleUserSearch(Map<String, Object> searchMap) throws Exception;

    List<RoleUserManageVO> getUserList(Map<String, Object> searchMap) throws Exception;

    String setRoleUser(List<RoleUserManageVO> userList) throws Exception;

    List<RoleManageVO> getRoleSearch(Map<String, Object> searchMap);

}
