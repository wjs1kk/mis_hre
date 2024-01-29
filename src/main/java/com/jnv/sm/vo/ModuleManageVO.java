package com.jnv.sm.vo;

import org.apache.ibatis.type.Alias;

import com.jnv.jncore.vo.CommonVO;

@Alias("moduleVO")
public class ModuleManageVO extends CommonVO{

    private String sysId;
    private String moduleId;
    private String moduleNm;
    private String rgstId;
    private String rgstIp;
    private String rgstDt;
    private String updtId;
    private String updtIp;
    private String updtDt;
    private String useYn;
    private String useYmd;
    private String endYmd;
    private String sortOrdr;
    private String rgstNm;
    private String updtNm;

    public String getSysId() {
        return sysId;
    }
    public void setSysId(String sysId) {
        this.sysId = sysId;
    }
    public String getModuleId() {
        return moduleId;
    }
    public void setModuleId(String moduleId) {
        this.moduleId = moduleId;
    }
    public String getModuleNm() {
        return moduleNm;
    }
    public void setModuleNm(String moduleNm) {
        this.moduleNm = moduleNm;
    }

    public String getRgstId() {
        return rgstId;
    }

    public void setRgstId(String rgstId) {
        this.rgstId = rgstId;
    }

    public String getRgstIp() {
        return rgstIp;
    }

    public void setRgstIp(String rgstIp) {
        this.rgstIp = rgstIp;
    }

    public String getRgstDt() {
        return rgstDt;
    }

    public void setRgstDt(String rgstDt) {
        this.rgstDt = rgstDt;
    }

    public String getUpdtId() {
        return updtId;
    }

    public void setUpdtId(String updtId) {
        this.updtId = updtId;
    }

    public String getUpdtIp() {
        return updtIp;
    }

    public void setUpdtIp(String updtIp) {
        this.updtIp = updtIp;
    }
    public String getUpdtDt() {
        return updtDt;
    }
    public void setUpdtDt(String updtDt) {
        this.updtDt = updtDt;
    }

    public String getUseYn() {
        return useYn;
    }

    public void setUseYn(String useYn) {
        this.useYn = useYn;
    }

    public String getUseYmd() {
        return useYmd;
    }

    public void setUseYmd(String useYmd) {
        this.useYmd = useYmd;
    }

    public String getEndYmd() {
        return endYmd;
    }

    public void setEndYmd(String endYmd) {
        this.endYmd = endYmd;
    }
    public String getSortOrdr() {
        return sortOrdr;
    }
    public void setSortOrdr(String sortOrdr) {
        this.sortOrdr = sortOrdr;
    }

    public String getRgstNm() {
        return rgstNm;
    }

    public void setRgstNm(String rgstNm) {
        this.rgstNm = rgstNm;
    }

    public String getUpdtNm() {
        return updtNm;
    }

    public void setUpdtNm(String updtNm) {
        this.updtNm = updtNm;
    }
}
