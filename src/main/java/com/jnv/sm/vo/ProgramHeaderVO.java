package com.jnv.sm.vo;

import org.apache.ibatis.type.Alias;

import com.jnv.jncore.vo.CommonVO;

@Alias("programHeaderVO")
public class ProgramHeaderVO extends CommonVO{

    private String sysId;
    private String sysNm;
    private String progId;
    private String progNm;
    private String progTy;
    private String progUrl;
    private String progDc;
    private String progFileNm;
    private String progAuthor;
    private String substituteUrl;
    private String substituteUseYn;
    private String atchFileId;
    private String permissionUseYn;
    private String permissionDc;
    private String rgstId;
    private String rgstIp;
    private String rgstDt;
    private String updtId;
    private String updtIp;
    private String updtDt;
    private String cnt;
    private String dbInfo;
    private String atchFileInfo;

    public String getSysId() {
        return sysId;
    }
    public void setSysId(String sysId) {
        this.sysId = sysId;
    }
    public String getSysNm() {
        return sysNm;
    }
    public void setSysNm(String sysNm) {
        this.sysNm = sysNm;
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
    public String getProgAuthor() {
        return progAuthor;
    }
    public void setProgAuthor(String progAuthor) {
        this.progAuthor = progAuthor;
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
    public String getCnt() {
        return cnt;
    }
    public void setCnt(String cnt) {
        this.cnt = cnt;
    }
    public String getDbInfo() {
        return dbInfo;
    }
    public void setDbInfo(String dbInfo) {
        this.dbInfo = dbInfo;
    }
    public String getAtchFileInfo() {
        return atchFileInfo;
    }
    public void setAtchFileInfo(String atchFileInfo) {
        this.atchFileInfo = atchFileInfo;
    }
}
