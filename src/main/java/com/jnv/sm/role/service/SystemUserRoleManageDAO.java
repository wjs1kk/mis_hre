package com.jnv.sm.role.service;

import java.util.List;
import java.util.Map;

import com.jnv.sm.vo.CmtnVO;

import org.egovframe.rte.psl.dataaccess.mapper.Mapper;

@Mapper("systemUserRoleManageDAO")
public interface SystemUserRoleManageDAO {

    List<CmtnVO> searchTmpUser(Map<String, ?> map) ;

    void insertSystemUserRoleManage(CmtnVO vo) ;

    void insertSystemMemberRoleManage(CmtnVO vo) ;

    void updateSystemUserRoleManage(CmtnVO vo) ;

    void updateSystemMemberRoleManage(CmtnVO vo) ;

    void deleteSystemUserRoleManage(CmtnVO vo) ;

    void deleteSystemMemberRoleManage(CmtnVO vo) ;

    void deleteSystemUserRole(CmtnVO vo) ;

}
