package com.jnv.common.mail.service.impl;

import java.nio.charset.StandardCharsets;
import java.util.Map;
import javax.annotation.Resource;

import com.jnv.common.mail.service.MailTemplateService;
import com.jnv.common.mail.service.SendMailService;
import com.jnv.common.vo.MailTemplateVO;
import com.jnv.jncore.exception.BusinessException;
import org.apache.commons.mail.DefaultAuthenticator;
import org.apache.commons.mail.EmailException;
import org.apache.commons.mail.HtmlEmail;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service("sendMailService")
public class SendMailServiceImpl implements SendMailService {

    public static final String DEFAULT_ERROR_MSG = "fail.common.msg";
    @Resource(name = "mailTemplateService")
    private MailTemplateService mailTemplateService;

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
    public void sendMail(String emailAddr, String templateId, Map<String, Object> params) {
        MailTemplateVO template = mailTemplateService.getTemplate(templateId);

        HtmlEmail email = new HtmlEmail();
        email.setHostName(smtpHost);
        email.setSmtpPort(smtpPort);
        email.setCharset(StandardCharsets.UTF_8.name());
        email.setSSLOnConnect(smtpRequiresSsl);
        email.setAuthenticator(new DefaultAuthenticator(smtpUserName, smtpPassword));

        // 수신자 주소를 설정한다.
        try {
            email.setFrom(smtpFromAddress);
        } catch (EmailException e) {
            throw new BusinessException(DEFAULT_ERROR_MSG);
        }

        // 발신자 정보를 설정한다.
        try {
            email.addTo(emailAddr);
        } catch (EmailException e) {
            throw new BusinessException(DEFAULT_ERROR_MSG);
        }

        // 메일 제목과 본문을 설정하여 메일을 발송한다.
        try {
            MailTemplateVO formatted = template.toFormatted(params);
            email.setSubject(formatted.getTemplateSubject());
            email.setHtmlMsg(formatted.getTemplateHtmlCn());
            email.setTextMsg(formatted.getTemplateTextCn());
            email.send();
        } catch (EmailException e) {
            throw new BusinessException(DEFAULT_ERROR_MSG);
        }
    }
}
