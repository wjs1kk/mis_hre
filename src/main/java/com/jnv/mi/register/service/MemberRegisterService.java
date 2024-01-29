package com.jnv.mi.register.service;

import com.jnv.mi.vo.MemberRegisterVO;

public interface MemberRegisterService {

    boolean checkMemberIdAvailable(String memberId);

    void registerMember(MemberRegisterVO vo);
}
