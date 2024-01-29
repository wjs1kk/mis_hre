package com.jnv.main.vo;

import org.apache.ibatis.type.Alias;

import com.jnv.jncore.vo.CommonVO;

/**
 * 넥사크로 component multi language
 * @author parkmg
 */
@Alias("compLangVO")
public class CompLangVO extends CommonVO{

    private String formId;
    private String langId;
    private String compId;
    private String compIndex;
    private String compText;
    private String compType;

    public String getFormId() {
        return formId;
    }
    public void setFormId(String formId) {
        this.formId = formId;
    }
    public String getLangId() {
        return langId;
    }
    public void setLangId(String langId) {
        this.langId = langId;
    }
    public String getCompId() {
        return compId;
    }
    public void setCompId(String compId) {
        this.compId = compId;
    }
    public String getCompIndex() {
        return compIndex;
    }
    public void setCompIndex(String compIndex) {
        this.compIndex = compIndex;
    }
    public String getCompText() {
        return compText;
    }
    public void setCompText(String compText) {
        this.compText = compText;
    }
    public String getCompType() {
        return compType;
    }
    public void setCompType(String compType) {
        this.compType = compType;
    }

}
