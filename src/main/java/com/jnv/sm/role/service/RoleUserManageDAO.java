package com.jnv.sm.role.service;

import java.util.List;
import java.util.Map;

import com.jnv.sm.vo.RoleUserManageVO;

import org.egovframe.rte.psl.dataaccess.mapper.Mapper;

@Mapper("roleUserManageDAO")
public interface RoleUserManageDAO {

    List<RoleUserManageVO> getRoleUserSearch(Map<String, Object> paramMap);

    List<RoleUserManageVO> getUserList(Map<String, Object> paramMap);

    void insertRoleUser(RoleUserManageVO role);

    void updateRoleUser(RoleUserManageVO role);

    void deleteRoleUser(RoleUserManageVO role);

}
