package com.jnv.sm.log.service;

import java.util.List;
import java.util.Map;

import com.jnv.sm.vo.RoleUserLogVO;
import com.jnv.sm.vo.RoleUserManageVO;

import org.egovframe.rte.psl.dataaccess.mapper.Mapper;

@Mapper("roleUserLogDAO")
public interface RoleUserLogDAO {

    List<RoleUserLogVO> getRoleLog(Map<String, Object> paramMap);

    void insertRoleLog(RoleUserManageVO role);

    void updateRoleLog(RoleUserManageVO role);
}
