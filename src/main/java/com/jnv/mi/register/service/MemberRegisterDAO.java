package com.jnv.mi.register.service;

import com.jnv.mi.vo.MemberRegisterVO;
import com.jnv.mi.vo.TermsAgreementVO;
import org.apache.ibatis.annotations.Param;
import org.egovframe.rte.psl.dataaccess.mapper.Mapper;

@Mapper("memberRegisterDAO")
public interface MemberRegisterDAO {

    boolean getMemberIdDuplicated(@Param("memberId") String memberId);

    void insertUserInfo(MemberRegisterVO vo);
    void insertMemberInfo(MemberRegisterVO vo);

    void insertAgreement(TermsAgreementVO vo);
}
