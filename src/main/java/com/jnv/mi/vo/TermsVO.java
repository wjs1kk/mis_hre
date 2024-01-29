package com.jnv.mi.vo;

import com.jnv.jncore.vo.CommonVO;
import org.apache.ibatis.type.Alias;

@Alias("termsVO")
public class TermsVO extends CommonVO {

    private String sysId;
    private String trmsId;
    private String trmsTitle;
    private String trmsCn;
    private String esntlYn;
    private String useYn;
    private String sortOrdr;
    private String rgstId;
    private String rgstIp;
    private String rgstDt;
    private String updtId;
    private String updtIp;
    private String updtDt;

    public String getSysId() {
        return sysId;
    }

    public void setSysId(String sysId) {
        this.sysId = sysId;
    }

    public String getTrmsId() {
        return trmsId;
    }

    public void setTrmsId(String trmsId) {
        this.trmsId = trmsId;
    }

    public String getTrmsTitle() {
        return trmsTitle;
    }

    public void setTrmsTitle(String trmsTitle) {
        this.trmsTitle = trmsTitle;
    }

    public String getTrmsCn() {
        return trmsCn;
    }

    public void setTrmsCn(String trmsCn) {
        this.trmsCn = trmsCn;
    }

    public String getEsntlYn() {
        return esntlYn;
    }

    public void setEsntlYn(String esntlYn) {
        this.esntlYn = esntlYn;
    }

    public String getUseYn() {
        return useYn;
    }

    public void setUseYn(String useYn) {
        this.useYn = useYn;
    }

    public String getSortOrdr() {
        return sortOrdr;
    }

    public void setSortOrdr(String sortOrdr) {
        this.sortOrdr = sortOrdr;
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
}
