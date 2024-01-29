package com.jnv.common.mail.service;

import java.util.Map;

import com.jnv.common.vo.MailTemplateVO;
import org.egovframe.rte.psl.dataaccess.mapper.Mapper;

@Mapper("mailTemplateDAO")
public interface MailTemplateDAO {

    MailTemplateVO getTemplate(Map<String, ?> map);
}
