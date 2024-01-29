package com.jnv.common.mail.service.impl;

import java.util.HashMap;
import java.util.Map;

import javax.annotation.Resource;

import com.jnv.common.mail.service.MailTemplateDAO;
import com.jnv.common.mail.service.MailTemplateService;
import com.jnv.common.vo.MailTemplateVO;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service("mailTemplateService")
@Transactional
public class MailTemplateServiceImpl implements MailTemplateService {

    @Value("#{jnframeProp['sysId']}")
    private String sysId;

    @Resource(name = "mailTemplateDAO")
    private MailTemplateDAO mailTemplateDAO;

    @Override
    public MailTemplateVO getTemplate(String id) {
        Map<String, String> map = new HashMap<>();
        map.put("sysId", sysId);
        map.put("templateId", id);
        return mailTemplateDAO.getTemplate(map);
    }

    @Override
    public MailTemplateVO getFormattedValue(String id, Map<String, ?> params) {
        MailTemplateVO vo = getTemplate(id);
        return vo.toFormatted(params);
    }
}
