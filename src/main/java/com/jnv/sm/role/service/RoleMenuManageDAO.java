package com.jnv.sm.role.service;

import java.util.List;
import java.util.Map;

import com.jnv.sm.vo.RoleMenuManageVO;

import org.egovframe.rte.psl.dataaccess.mapper.Mapper;

@Mapper("roleMenuManageDAO")
public interface RoleMenuManageDAO {
    /*
     * List<ComboVO> selectModuleList();
     *
     * List<RoleMenuManageVO> selectRoleMenuManage(Map<?, ?> map);
     *
     * List<RoleMenuManageVO> selectRoleMenuManageDetail(Map<?, ?> map);
     *
     * void updateRoleMenuManage(RoleMenuManageVO vo);
     *
     * int getDuplicateRoleMenuFunc(RoleMenuManageVO vo);
     *
     * void insertRoleMenuFunc(RoleMenuManageVO vo);
     *
     * int getCountRoleMenuFunc(RoleMenuManageVO vo);
     *
     * void deleteConnHistMenu(RoleMenuManageVO vo);
     *
     * void deleteRoleMenuFunc(RoleMenuManageVO vo);
     *
     * List<Map<String, String>> selectAuthYnCombo();
     */
    List<RoleMenuManageVO> getRole(Map<String, Object> paramMap);

    List<RoleMenuManageVO> getRoleMenuSearch(Map<String, Object> paramMap);

    void deleteRoleMenuFunc(RoleMenuManageVO menu);

    int getDuplicateRoleMenuFunc(RoleMenuManageVO menu);

    void insertRoleMenuFunc(RoleMenuManageVO menu);

}
