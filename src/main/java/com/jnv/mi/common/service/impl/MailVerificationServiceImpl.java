package com.jnv.mi.common.service.impl;

import java.security.NoSuchAlgorithmException;
import java.security.SecureRandom;
import java.time.Duration;
import java.time.Instant;
import java.util.Base64;
import java.util.HashMap;
import java.util.Map;
import java.util.Objects;
import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import com.jnv.common.mail.service.MailTemplateService;
import com.jnv.common.mail.service.SendMailService;
import com.jnv.jncore.exception.BusinessException;
import com.jnv.mi.common.service.MailVerificationDAO;
import com.jnv.mi.common.service.MailVerificationService;
import com.jnv.mi.vo.MailVerificationVO;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

@Service("mailVerificationService")
public class MailVerificationServiceImpl implements MailVerificationService {

    private static final String EMAIL_TEMPLATE_ID = "EML_VRF";

    private static final String KEY_VERIFICATION_CODE = "verificationCode";
    private static final String KEY_VERIFICATION_RQST_ID = "verificationRqstId";
    private static final String KEY_VERIFICATION_EMAIL_ADDR = "verificationEmailAddr";
    private static final String KEY_VERIFICATION_EXPIRE_DT = "verificationExpireDt";
    private static final String KEY_VERIFIED_TOKEN = "verifiedToken";

    @Resource(name = "mailVerificationDAO")
    private MailVerificationDAO dao;

    @Resource(name = "mailTemplateService")
    private MailTemplateService mailTemplateService;

    @Resource(name = "sendMailService")
    private SendMailService sendMailService;

    /**
     * SMTP 서버 호스트명
     */
    @Value("#{smtpProp['mail.smtp.host']}")
    private String smtpHost;

    /**
     * SMTP 서버 포트
     * 기본값은 SSL 사용 시 587, 미사용 시 25
     */
    @Value("#{smtpProp['mail.smtp.port'] ?: ((smtpProp['mail.smtp.ssl.enable'] ?: false) ? 587 : 25)}")
    private int smtpPort;

    /**
     * SMTP 서버 인증 시 사용되는 사용자명
     */
    @Value("#{smtpProp['mail.smtp.auth.username']}")
    private String smtpUserName;

    /**
     * SMTP 서버 인증 시 사용되는 비밀번호
     */
    @Value("#{smtpProp['mail.smtp.auth.password']}")
    private String smtpPassword;

    /**
     * SMTP 서버 접속 시 SSL 사용 여부
     */
    @Value("#{smtpProp['mail.smtp.ssl.enable'] ?: false}")
    private boolean smtpRequiresSsl;

    /**
     * SMTP 메일 발신자 주소
     */
    @Value("#{smtpProp['mail.smtp.from.address']}")
    private String smtpFromAddress;

    /**
     * SMTP 메일 발신자 이름
     */
    @Value("#{smtpProp['mail.smtp.from.Name']}")
    private String smtpFromName;

    @Override
    public MailVerificationVO sendVerificationEmail(MailVerificationVO params) {
        if (dao.isMailAddressUsed(params)) {
            throw new BusinessException("errors.mi.emailVerification.inUse");
        }

        Instant expire = Instant.now().plus(Duration.ofMinutes(5));
        HttpServletRequest request = getHttpServletRequest();
        String emailAddr = params.getEmailAddr();

        // 인증 번호를 생성한다.
        String verificationCode = generateVerificationCode();
        String rqstId = generateToken();

        Map<String, Object> map = new HashMap<>();
        map.put(KEY_VERIFICATION_CODE, verificationCode);

        sendMailService.sendMail(emailAddr, EMAIL_TEMPLATE_ID, map);

        // 세션에 인증 요청 정보를 저장한다.
        HttpSession session = request.getSession();
        session.setAttribute(KEY_VERIFICATION_RQST_ID, rqstId);
        session.setAttribute(KEY_VERIFICATION_EMAIL_ADDR, emailAddr);
        session.setAttribute(KEY_VERIFICATION_CODE, verificationCode);
        session.setAttribute(KEY_VERIFICATION_EXPIRE_DT, expire);
        session.removeAttribute(KEY_VERIFIED_TOKEN);

        // 요청 내용을 전달한다.
        MailVerificationVO result = new MailVerificationVO();
        result.setUserId(params.getUserId());
        result.setUserName(params.getUserName());
        result.setEmailAddr(params.getEmailAddr());
        result.setRqstId(rqstId);
        result.setExpireDt(String.valueOf(expire.toEpochMilli()));

        return result;
    }

    @Override
    public MailVerificationVO checkVerificationCode(MailVerificationVO vo) {
        Instant now = Instant.now();
        HttpServletRequest request = getHttpServletRequest();
        HttpSession session = request.getSession();
        String verificationCode = vo.getVerificationCode();
        String verificationEmailAddr = vo.getEmailAddr();
        String verificationRqstId = vo.getRqstId();
        String sessionVerificationCode = (String) session.getAttribute(KEY_VERIFICATION_CODE);
        String sessionVerificationEmailAddr = (String) session.getAttribute(KEY_VERIFICATION_EMAIL_ADDR);
        String sessionVerificationRqstId = (String) session.getAttribute(KEY_VERIFICATION_RQST_ID);
        Instant sessionVerificationExpireDt = (Instant) session.getAttribute(KEY_VERIFICATION_EXPIRE_DT);

        // 인증 요청 후 이메일 주소가 변경되었는지 확인한다.
        if (!Objects.equals(verificationEmailAddr, sessionVerificationEmailAddr)
                || !Objects.equals(verificationRqstId, sessionVerificationRqstId)) {
            throw new BusinessException("errors.mi.emailVerification.emailChanged");
        }

        // 인증번호 입력 제한 시간이 경과하였는지 확인한다.
        if (now.isAfter(sessionVerificationExpireDt)) {
            throw new BusinessException("errors.mi.emailVerification.timeout");
        }

        // 인증번호가 올바르게 입력되었는지 확인한다.
        if (!Objects.equals(verificationCode, sessionVerificationCode)) {
            throw new BusinessException("errors.mi.emailVerification.codeNotValid");
        }

        String token = generateToken();
        session.setAttribute(KEY_VERIFIED_TOKEN, token);
        vo.setVerifiedToken(token);

        return vo;
    }

    private static HttpServletRequest getHttpServletRequest() {
        ServletRequestAttributes requestAttrs = (ServletRequestAttributes) RequestContextHolder.getRequestAttributes();
        if (requestAttrs == null) {
            throw new IllegalStateException("No request attributes found.");
        }

        return requestAttrs.getRequest();
    }

    private String generateVerificationCode() {
        SecureRandom random = getSecureRandom();
        int value = random.nextInt(1000000);
        return String.format("%06d", value);
    }

    private String generateToken() {
        SecureRandom random = getSecureRandom();
        byte[] buf = new byte[32];
        random.nextBytes(buf);
        return Base64.getEncoder().encodeToString(buf);
    }

    private static SecureRandom getSecureRandom() {
        SecureRandom random;
        try {
            random = SecureRandom.getInstanceStrong();
        } catch (NoSuchAlgorithmException e) {
            random = new SecureRandom();
        }
        return random;
    }
}
