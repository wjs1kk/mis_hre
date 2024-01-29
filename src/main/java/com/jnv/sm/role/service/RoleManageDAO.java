package com.jnv.sm.role.service;

import java.util.List;
import java.util.Map;

import com.jnv.jncore.vo.ComboVO;
import com.jnv.sm.vo.ModuleComboVO;
import com.jnv.sm.vo.RoleManageVO;

import org.egovframe.rte.psl.dataaccess.mapper.Mapper;

@Mapper("roleManageDAO")
public interface RoleManageDAO {

    List<RoleManageVO> getRoleSearch(Map<String, Object> params);

    List<ModuleComboVO> getModuleCombo(Map<String, Object> paramMap);

    void insertRole(RoleManageVO role);

    void updateRole(RoleManageVO role);

    void deleteRole(RoleManageVO role);

    List<RoleManageVO> getChildRoleSearch(Map<String, Object> paramMap);

    List<RoleManageVO> getParentsRoleSearch(Map<String, Object> paramMap);

    List<RoleManageVO> getRolePopupSearch(Map<String, Object> paramMap);

    void insertPopupRole(RoleManageVO role);

    void deleteChildPopupRole(RoleManageVO role);

    void deleteParentsPopupRole(RoleManageVO role);

    void deleteRoleFamily(RoleManageVO role);

    int getDuplicatedKeyCnt(RoleManageVO role);

}
