package com.jnv.sm.user.service;

import java.util.List;
import java.util.Map;

import com.jnv.sm.vo.MemberRegistrationApprovalVO;
import com.jnv.sm.vo.UserManageVO;

import org.egovframe.rte.psl.dataaccess.mapper.Mapper;

@Mapper("userManageDAO")
public interface UserManageDAO {

    List<UserManageVO> getUserManageList(Map<String, Object> params);

    UserManageVO getUserManageItem(Map<String, Object> params);

    void selectUserManage(UserManageVO userManageVO);

    void deleteUserManage(UserManageVO userManageList);

    void insertUserManage(UserManageVO userManageList);

    void updateUserManage(UserManageVO userManageList);

    void deleteUserManageList(UserManageVO user);

    void insertMember(UserManageVO user);

    void updateMember(UserManageVO user);
    void deleteMember(UserManageVO user);

    boolean getMemberIdExists(UserManageVO user);

    MemberRegistrationApprovalVO getRegistInfo(Map<String, ?> params);

    void updateRegistStatus(MemberRegistrationApprovalVO item);

    void updateUserStatus(MemberRegistrationApprovalVO item);
}
