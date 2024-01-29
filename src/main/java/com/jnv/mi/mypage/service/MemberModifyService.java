package com.jnv.mi.mypage.service;

import java.util.Map;

import com.jnv.mi.vo.MemberModifyVO;

public interface MemberModifyService {

    MemberModifyVO getMemberInfo();

    void setMemberInfo(MemberModifyVO member);

    String confirmPassword(Map<String, Object> memberMap);

    String updatePassword(Map<String, Object> memberMap);

    String withdraw(Map<String, Object> map);
}
