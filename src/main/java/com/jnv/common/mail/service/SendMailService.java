package com.jnv.common.mail.service;

import java.util.Map;

public interface SendMailService {

    void sendMail(String emailAddr, String templateId, Map<String, Object> params);
}
