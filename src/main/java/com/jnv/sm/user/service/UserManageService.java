package com.jnv.sm.user.service;

import java.util.List;
import java.util.Map;

import com.jnv.sm.vo.MemberRegistrationApprovalVO;
import com.jnv.sm.vo.UserManageVO;

public interface UserManageService {

    List<UserManageVO> getUserManageList(Map<String, Object> paramMap);

    UserManageVO getUser(Map<String, Object> params);

    String setUser(UserManageVO userManageList);

    String deleteUserList(List<UserManageVO> userManageList);

    MemberRegistrationApprovalVO getRegistInfo(Map<String, ?> params);

    void updateRegistApprovalStatus(MemberRegistrationApprovalVO vo, String status);
}
