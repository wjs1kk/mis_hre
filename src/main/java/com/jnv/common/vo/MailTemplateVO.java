package com.jnv.common.vo;

import java.util.Map;

import com.jnv.jncore.vo.CommonVO;
import org.apache.commons.text.StringSubstitutor;
import org.apache.ibatis.type.Alias;

@Alias("mailTemplateVO")
public class MailTemplateVO extends CommonVO {

    private String sysId;
    private String templateId;
    private String templateSubject;
    private String templateHtmlCn;
    private String templateTextCn;
    private String useYn;

    public String getSysId() {
        return sysId;
    }

    public void setSysId(String sysId) {
        this.sysId = sysId;
    }

    public String getTemplateId() {
        return templateId;
    }

    public void setTemplateId(String templateId) {
        this.templateId = templateId;
    }

    public String getTemplateSubject() {
        return templateSubject;
    }

    public void setTemplateSubject(String templateSubject) {
        this.templateSubject = templateSubject;
    }

    public String getTemplateHtmlCn() {
        return templateHtmlCn;
    }

    public void setTemplateHtmlCn(String templateHtmlCn) {
        this.templateHtmlCn = templateHtmlCn;
    }

    public String getTemplateTextCn() {
        return templateTextCn;
    }

    public void setTemplateTextCn(String templateTextCn) {
        this.templateTextCn = templateTextCn;
    }

    public String getUseYn() {
        return useYn;
    }

    public void setUseYn(String useYn) {
        this.useYn = useYn;
    }

    public MailTemplateVO toFormatted(Map<String, ?> map) {
        MailTemplateVO vo = new MailTemplateVO();
        StringSubstitutor substitutor = new StringSubstitutor(map);
        vo.setSysId(this.getSysId());
        vo.setTemplateId(this.getTemplateId());
        vo.setUseYn(this.getUseYn());

        vo.setTemplateSubject(substitutor.replace(this.getTemplateSubject()));
        vo.setTemplateHtmlCn(substitutor.replace(this.getTemplateHtmlCn()));
        vo.setTemplateTextCn(substitutor.replace(this.getTemplateTextCn()));

        return vo;
    }
}
