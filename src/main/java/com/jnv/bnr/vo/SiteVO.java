package com.jnv.bnr.vo;

import org.apache.ibatis.type.Alias;

import com.jnv.jncore.vo.CommonVO;

@Alias("SiteVO")
public class SiteVO extends CommonVO {
    private String siteId;
    private String siteNm;
    private String siteUrl;
    private String siteDesc;
    private String siteClsCd;
    private String useYn;
    private String rgstrId;
    private String rgstDt;
    private String updtrId;
    private String updtDt;
    public String getSiteId() {
        return siteId;
    }
    public void setSiteId(String siteId) {
        this.siteId = siteId;
    }
    public String getSiteNm() {
        return siteNm;
    }
    public void setSiteNm(String siteNm) {
        this.siteNm = siteNm;
    }
    public String getSiteUrl() {
        return siteUrl;
    }
    public void setSiteUrl(String siteUrl) {
        this.siteUrl = siteUrl;
    }
    public String getSiteDesc() {
        return siteDesc;
    }
    public void setSiteDesc(String siteDesc) {
        this.siteDesc = siteDesc;
    }
    public String getSiteClsCd() {
        return siteClsCd;
    }
    public void setSiteClsCd(String siteClsCd) {
        this.siteClsCd = siteClsCd;
    }
    public String getUseYn() {
        return useYn;
    }
    public void setUseYn(String useYn) {
        this.useYn = useYn;
    }
    public String getRgstrId() {
        return rgstrId;
    }
    public void setRgstrId(String rgstrId) {
        this.rgstrId = rgstrId;
    }
    public String getRgstDt() {
        return rgstDt;
    }
    public void setRgstDt(String rgstDt) {
        this.rgstDt = rgstDt;
    }
    public String getUpdtrId() {
        return updtrId;
    }
    public void setUpdtrId(String updtrId) {
        this.updtrId = updtrId;
    }
    public String getUpdtDt() {
        return updtDt;
    }
    public void setUpdtDt(String updtDt) {
        this.updtDt = updtDt;
    }

}
