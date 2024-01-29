package com.jnv.common.mail.service;

import java.util.Map;

import com.jnv.common.vo.MailTemplateVO;

public interface MailTemplateService {

    MailTemplateVO getTemplate(String name);

    MailTemplateVO getFormattedValue(String templateName, Map<String, ?> params);
}
