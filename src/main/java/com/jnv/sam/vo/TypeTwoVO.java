package com.jnv.sam.vo;

import org.apache.ibatis.type.Alias;

import com.jnv.jncore.vo.CommonVO;

@Alias("typeTwoVO")
public class TypeTwoVO extends CommonVO{

    private String sysId;
    private String progId;
    private String progNm;
    private String progTy;
    private String progUrl;
    private String progDc;
    private String progFileNm;
    private String substituteUrl;
    private String substituteUseYn;
    private String atchFileId;
    private String permissionUseYn;
    private String permissionDc;
    private String radioUseYn;
    private String rgstId;
    private String RgstNm;
    private String rgstIp;
    private String RgstDt;
    private String updtId;
    private String updtIp;
    private String updtDt;

    public String getSysId() {
        return sysId;
    }
    public void setSysId(String sysId) {
        this.sysId = sysId;
    }
    public String getProgId() {
        return progId;
    }
    public void setProgId(String progId) {
        this.progId = progId;
    }
    public String getProgNm() {
        return progNm;
    }
    public void setProgNm(String progNm) {
        this.progNm = progNm;
    }
    public String getProgTy() {
        return progTy;
    }
    public void setProgTy(String progTy) {
        this.progTy = progTy;
    }
    public String getProgUrl() {
        return progUrl;
    }
    public void setProgUrl(String progUrl) {
        this.progUrl = progUrl;
    }
    public String getProgDc() {
        return progDc;
    }
    public void setProgDc(String progDc) {
        this.progDc = progDc;
    }
    public String getProgFileNm() {
        return progFileNm;
    }
    public void setProgFileNm(String progFileNm) {
        this.progFileNm = progFileNm;
    }
    public String getSubstituteUrl() {
        return substituteUrl;
    }
    public void setSubstituteUrl(String substituteUrl) {
        this.substituteUrl = substituteUrl;
    }
    public String getSubstituteUseYn() {
        return substituteUseYn;
    }
    public void setSubstituteUseYn(String substituteUseYn) {
        this.substituteUseYn = substituteUseYn;
    }
    public String getAtchFileId() {
        return atchFileId;
    }
    public void setAtchFileId(String atchFileId) {
        this.atchFileId = atchFileId;
    }
    public String getPermissionUseYn() {
        return permissionUseYn;
    }
    public void setPermissionUseYn(String permissionUseYn) {
        this.permissionUseYn = permissionUseYn;
    }
    public String getPermissionDc() {
        return permissionDc;
    }
    public void setPermissionDc(String permissionDc) {
        this.permissionDc = permissionDc;
    }
    public String getRgstId() {
        return rgstId;
    }
    public void setRgstId(String rgstId) {
        this.rgstId = rgstId;
    }
    public String getRgstNm() {
        return RgstNm;
    }
    public void setRgstNm(String rgstNm) {
        RgstNm = rgstNm;
    }
    public String getRgstIp() {
        return rgstIp;
    }
    public void setRgstIp(String rgstIp) {
        this.rgstIp = rgstIp;
    }
    public String getRgstDt() {
        return RgstDt;
    }
    public void setRgstDt(String rgstDt) {
        RgstDt = rgstDt;
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
    public String getRadioUseYn() {
        return radioUseYn;
    }
    public void setRadioUseYn(String radioUseYn) {
        this.radioUseYn = radioUseYn;
    }

}
