package com.jnv.mi.register.service.impl;

import java.util.List;
import java.util.Objects;
import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import com.jnv.common.seq.service.IdGeneratorService;
import com.jnv.jncore.exception.BusinessException;
import com.jnv.mi.register.service.MemberRegisterDAO;
import com.jnv.mi.register.service.MemberRegisterService;
import com.jnv.mi.vo.MemberRegisterVO;
import com.jnv.mi.vo.TermsAgreementVO;
import org.apache.commons.lang3.StringUtils;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

@Service("memberRegisterService")
@Transactional
public class MemberRegisterServiceImpl implements MemberRegisterService {

    @Resource(name = "memberRegisterDAO")
    private MemberRegisterDAO dao;

    @Resource(name = "passwordEncoder")
    private PasswordEncoder passwordEncoder;

    @Resource(name = "idGeneratorService")
    private IdGeneratorService idGen;

    @Override
    public boolean checkMemberIdAvailable(String memberId) {
        ensureIdIsValid(memberId);
        return true;
    }

    @Override
    public void registerMember(MemberRegisterVO vo) {
        validate(vo);

        String userId = idGen.nextIdFor("userId");
        vo.setUserId(userId);

        String encodedPassword = passwordEncoder.encode(vo.getPasswd());
        vo.setPasswd(encodedPassword);

        ServletRequestAttributes attrs = (ServletRequestAttributes) RequestContextHolder.getRequestAttributes();
        HttpServletRequest request = Objects.requireNonNull(attrs).getRequest();
        HttpSession session = request.getSession();
        @SuppressWarnings("unchecked")
        List<TermsAgreementVO> agreement = (List<TermsAgreementVO>) session.getAttribute("termsAgreement");

        dao.insertUserInfo(vo);
        dao.insertMemberInfo(vo);

        for (TermsAgreementVO item : agreement) {
            item.setUserId(userId);
            dao.insertAgreement(item);
        }
    }

    private void validate(MemberRegisterVO vo) {
        ensureIdIsValid(vo.getMemberId());

        if (!"Y".equals(vo.getIdChecked())) {
            throw new BusinessException("errors.mi.register.idNotChecked");
        }

        if (!"Y".equals(vo.getEmailVerified())) {
            throw new BusinessException("errors.mi.register.emailNotVerified");
        }
    }

    private void ensureIdIsValid(String memberId) {
        if (StringUtils.isEmpty(memberId)) {
            throw new BusinessException("errors.required2", new Object[] { "fields.mi.register.memberId" });
        }

        if (memberId.length() >= 20 || memberId.length() < 4) {
            throw new BusinessException("errors.mi.register.memberIdLength", new Object[] { 4, 20 });
        }

        if (!memberId.matches("[0-9a-z]+")) {
            throw new BusinessException("errors.mi.register.memberIdFormat");
        }

        boolean duplicated = dao.getMemberIdDuplicated(memberId);
        if (duplicated) {
            throw new BusinessException("errors.mi.register.memberIdInUse", new Object[] { memberId });
        }
    }
}
