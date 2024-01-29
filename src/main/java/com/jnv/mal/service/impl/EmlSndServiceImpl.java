package com.jnv.mal.service.impl;

import static com.jnv.common.util.Constants.RESULT_FAILURE;
import static com.jnv.common.util.Constants.RESULT_SUCCESS;

import java.util.List;
import java.util.Map;
import java.util.Properties;

import javax.annotation.Resource;
import javax.mail.Authenticator;
import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.AddressException;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.jnv.common.seq.service.IdGeneratorService;
import com.jnv.mal.service.EmlSndDAO;
import com.jnv.mal.service.EmlSndService;
import com.jnv.mal.vo.EmlSndVO;

@Service("emlSndService")
@Transactional
public class EmlSndServiceImpl implements EmlSndService {

    @Resource(name = "emlSndDAO")
    private EmlSndDAO dao;

    @Resource(name = "idGeneratorService")
    private IdGeneratorService idGen;

    /**
     * SMTP 서버 호스트명
     */
    @Value("#{smtpProp['mail.smtp.host']}")
    private String smtpHost;

    /**
     * SMTP 서버 포트 기본값은 SSL 사용 시 587, 미사용 시 25
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
    public List<EmlSndVO> getEmlSndList(Map<String, Object> searchMap) {
        return dao.getEmlSndList(searchMap);
    }

    @Override
    public List<EmlSndVO> getEmlSndUser(Map<String, Object> searchMap) {
        return dao.getEmlSndUser(searchMap);
    }

    @Override
    public String setTmpltSave(List<EmlSndVO> list) {
        String rmsg = RESULT_FAILURE;

        for (EmlSndVO vo : list) {

            String emlTmpltId = idGen.nextIdFor("emlTmpltId");
            vo.setEmlTmpltId(emlTmpltId);
            int cnt = dao.insertTmpltList(vo);
            if (cnt > 0)
                rmsg = RESULT_SUCCESS;
        }
        return rmsg;
    }

    @Override
    public String setTmpltUpdate(List<EmlSndVO> list) {
        String rmsg = RESULT_FAILURE;

        for (EmlSndVO vo : list) {

            int cnt1 = dao.updateTmpltList(vo);
            if (cnt1 > 0)
                rmsg = RESULT_SUCCESS;
        }
        return rmsg;
    }

    @Override
    public String setTmpltDelete(List<EmlSndVO> list) {
        String rmsg = RESULT_FAILURE;

        for (EmlSndVO vo : list) {

            int cnt1 = dao.deleteTmpltList(vo);
            if (cnt1 > 0)
                rmsg = RESULT_SUCCESS;
        }
        return rmsg;
    }

    @Override
    public List<EmlSndVO> getTmpltList(Map<String, Object> searchMap) {
        return dao.getTmpltList(searchMap);
    }

    @Override
    public List<EmlSndVO> setTmpltDtl(Map<String, Object> searchMap) {
        return dao.setTmpltDtl(searchMap);
    }

    @Override
    public List<EmlSndVO> getEmlSndDtl(Map<String, Object> searchMap) {
        return dao.getEmlSndDtl(searchMap);
    }

    @Override
    public List<EmlSndVO> getEmlSndDtl2(Map<String, Object> searchMap) {
        return dao.getEmlSndDtl2(searchMap);
    }

    @Override
    public String getEmlSnd(EmlSndVO emlSnd, List<EmlSndVO> rcvList) {
        String rmsg = RESULT_FAILURE;

        Properties props = System.getProperties();
        props.put("mail.smtp.host", smtpHost);
        props.put("mail.smtp.port", smtpPort);
        props.put("defaultEncoding", "utf-8");
        props.put("mail.smtp.auth", "true");
        props.put("mail.smtp.ssl.enable", smtpRequiresSsl);
        props.put("mail.smtp.ssl.trust", smtpHost);

        final String userId = smtpUserName;
        final String userPw = smtpPassword;

        try {
            String sender = smtpFromAddress;
            String subject = emlSnd.getEmlTtl();
            String body = emlSnd.getSndCn();

            Session session = Session.getDefaultInstance(props, new Authenticator() {

                @Override
                protected PasswordAuthentication getPasswordAuthentication() {
                    return new PasswordAuthentication(userId, userPw);
                }
            });

            session.setDebug(false);

            Message mimeMessage = new MimeMessage(session);
            mimeMessage.setFrom(new InternetAddress(sender));

            InternetAddress[] toAddr = new InternetAddress[rcvList.size()];

            for (int i = 0; i < toAddr.length; i++) {
                EmlSndVO vo = rcvList.get(i);
                toAddr[i] = new InternetAddress(vo.getRcvEmlAddr());
            }

            mimeMessage.setRecipients(Message.RecipientType.TO, toAddr);

            mimeMessage.setSubject(subject);
            mimeMessage.setText(body);

            Transport.send(mimeMessage);

            rmsg = RESULT_SUCCESS;

            String emlId = idGen.nextIdFor("emlId");

            if (rmsg == RESULT_SUCCESS) {
                emlSnd.setEmlId(emlId);
                dao.setEmlSndInfo(emlSnd);
                for (EmlSndVO vo : rcvList) {
                    vo.setEmlId(emlId);
                    dao.setEmlRsvInfo(vo);
                }
            }
        } catch (AddressException e) {
            e.printStackTrace();
        } catch (MessagingException e) {
            e.printStackTrace();
        }

        return rmsg;
    }

}
