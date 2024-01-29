package com.jnv.mi.common.service;

import com.jnv.mi.vo.MailVerificationVO;

public interface MailVerificationService {

    MailVerificationVO sendVerificationEmail(MailVerificationVO params);

    MailVerificationVO checkVerificationCode(MailVerificationVO vo);
}
