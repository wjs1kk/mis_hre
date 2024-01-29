package com.jnv.mi.mypage.service;

import java.util.Map;

import com.jnv.mi.vo.MemberModifyVO;
import org.egovframe.rte.psl.dataaccess.mapper.Mapper;

@Mapper("memberModifyDAO")
public interface MemberModifyDAO {

    MemberModifyVO getMyPageInfo(Map<String, Object> map);

    void updateMemberInfo(MemberModifyVO memberInfo);

    void updateUserInfo(MemberModifyVO memberInfo);

    void updatePassword(Map<String, Object> memberMap);

    String getPasswordHash(Map<String, Object> memberMap);

    void deleteMember(Map<String, Object> map);

    void updateWithdrawState(Map<String, Object> map);
}
