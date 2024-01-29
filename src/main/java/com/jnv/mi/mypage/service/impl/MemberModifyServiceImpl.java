package com.jnv.mi.mypage.service.impl;

import static com.jnv.common.util.Constants.RESULT_FAILURE;
import static com.jnv.common.util.Constants.RESULT_SUCCESS;

import java.util.HashMap;
import java.util.Map;
import java.util.Objects;

import javax.annotation.Resource;
import javax.transaction.Transactional;

import org.egovframe.rte.fdl.security.userdetails.util.EgovUserDetailsHelper;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.jnv.jncore.exception.BusinessException;
import com.jnv.jncore.security.UserVO;
import com.jnv.mi.mypage.service.MemberModifyDAO;
import com.jnv.mi.mypage.service.MemberModifyService;
import com.jnv.mi.vo.MemberModifyVO;

@Service("memberModifyService")
@Transactional
public class MemberModifyServiceImpl implements MemberModifyService {

    @Resource(name = "memberModifyDAO")
    private MemberModifyDAO dao;

    @Resource(name = "passwordEncoder")
    private PasswordEncoder passwordEncoder;

    @Override
    public MemberModifyVO getMemberInfo() {
        if (!Boolean.TRUE.equals(EgovUserDetailsHelper.isAuthenticated())) {
            return null;
        }

        UserVO user = (UserVO) EgovUserDetailsHelper.getAuthenticatedUser();
        Map<String, Object> map = new HashMap<>();
        map.put("userId", user.getUserId());

        MemberModifyVO member = dao.getMyPageInfo(map);
        String email = member.getEmlAddr();

        // 이메일을 화면에 표시할 수 있도록 @ 기준으로 자른다.
        int atIndex = email.lastIndexOf("@");

        String emlAddrLocal;
        String emlAddrDomain = null;

        if (atIndex == -1) {
            emlAddrLocal = email;
        } else {
            emlAddrLocal = email.substring(0, atIndex);
            emlAddrDomain = email.substring(atIndex + 1);
        }
        member.setEmlAddrLocal(emlAddrLocal);
        member.setEmlAddrDomain(emlAddrDomain);

        return member;
    }

    @Override
    public void setMemberInfo(MemberModifyVO member) {
        MemberModifyVO oldData = getMemberInfo();

        String newEmlAddr = String.join("@", member.getEmlAddrLocal(), member.getEmlAddrDomain());
        member.setEmlAddr(newEmlAddr);

        if (!Objects.equals(newEmlAddr, oldData.getEmlAddr()) && !"Y".equals(member.getEmailVerified())) {
            throw new BusinessException("errors.mi.register.emailNotVerified");
        }

        try {
            dao.updateMemberInfo(member);
            dao.updateUserInfo(member);
        } catch (Exception e) {
            throw new BusinessException("fail.common.save");
        }
    }

    @Override
    public String confirmPassword(Map<String, Object> memberMap) {
        if (!Boolean.TRUE.equals(EgovUserDetailsHelper.isAuthenticated())) {
            return RESULT_FAILURE;
        }

        UserVO userVO = (UserVO) EgovUserDetailsHelper.getAuthenticatedUser();
        memberMap.put("memberId", userVO.getMemberId());

        String password = (String) memberMap.get("oldPasswd");
        String encodedPassword = dao.getPasswordHash(memberMap);
        boolean matches = passwordEncoder.matches(password, encodedPassword);

        return matches ? RESULT_SUCCESS : RESULT_FAILURE;
    }

    @Override
    public String updatePassword(Map<String, Object> memberMap) {
        if (!Objects.equals(RESULT_SUCCESS, confirmPassword(memberMap))) {
            return "oldPasswordNotMatched";
        }

        String passwd = (String) memberMap.get("passwd");
        String encodedPasswd = passwordEncoder.encode(passwd);
        memberMap.put("passwd", encodedPasswd);
        dao.updatePassword(memberMap);

        return RESULT_SUCCESS;
    }

    @Override
    public String withdraw(Map<String, Object> map) {
        if (!Objects.equals(RESULT_SUCCESS, confirmPassword(map))) {
            return "passwordNotMatched";
        }

        UserVO userVO = (UserVO) EgovUserDetailsHelper.getAuthenticatedUser();
        map.put("userId", userVO.getUserId());

        dao.deleteMember(map);
        dao.updateWithdrawState(map);

        return RESULT_SUCCESS;
    }
}
