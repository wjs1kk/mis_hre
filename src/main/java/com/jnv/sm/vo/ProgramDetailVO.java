package com.jnv.sm.vo;

import com.jnv.jncore.vo.CommonVO;
import org.apache.ibatis.type.Alias;

@Alias("programDetailVO")
public class ProgramDetailVO extends CommonVO {

    private String displayImgUrl;
    private String funcCode;
    private String funcDesc;
    private String funcId;
    private String funcName;
    private String funcPattern;
    private String funcPatternType;
    private String funcType;
    private String progId;
    private String regYmd;
    private String regUserId;
    private String regUserIp;
    private String sortOrdr;
    private String mdfcnYmd;
    private String mdfcnUserId;
    private String mdfcnUserIp;

    private String sysId;
    private String rgstId;
    private String rgstDt;


    public String getDisplayImgUrl() {
        return displayImgUrl;
    }

    public void setDisplayImgUrl(String displayImgUrl) {
        this.displayImgUrl = displayImgUrl;
    }

    public String getFuncCode() {
        return funcCode;
    }

    public void setFuncCode(String funcCode) {
        this.funcCode = funcCode;
    }

    public String getFuncDesc() {
        return funcDesc;
    }

    public void setFuncDesc(String funcDesc) {
        this.funcDesc = funcDesc;
    }

    public String getFuncId() {
        return funcId;
    }

    public void setFuncId(String funcId) {
        this.funcId = funcId;
    }

    public String getFuncName() {
        return funcName;
    }

    public void setFuncName(String funcName) {
        this.funcName = funcName;
    }

    public String getFuncPattern() {
        return funcPattern;
    }

    public void setFuncPattern(String funcPattern) {
        this.funcPattern = funcPattern;
    }

    public String getFuncPatternType() {
        return funcPatternType;
    }

    public void setFuncPatternType(String funcPatternType) {
        this.funcPatternType = funcPatternType;
    }

    public String getFuncType() {
        return funcType;
    }

    public void setFuncType(String funcType) {
        this.funcType = funcType;
    }

    public String getProgId() {
        return progId;
    }

    public void setProgId(String progId) {
        this.progId = progId;
    }

    public String getSortOrdr() {
        return sortOrdr;
    }

    public void setSortOrdr(String sortOrdr) {
        this.sortOrdr = sortOrdr;
    }

    public String getRegYmd() {
        return regYmd;
    }

    public void setRegYmd(String regYmd) {
        this.regYmd = regYmd;
    }

    public String getRegUserId() {
        return regUserId;
    }

    public void setRegUserId(String regUserId) {
        this.regUserId = regUserId;
    }

    public String getRegUserIp() {
        return regUserIp;
    }

    public void setRegUserIp(String regUserIp) {
        this.regUserIp = regUserIp;
    }

    public String getMdfcnYmd() {
        return mdfcnYmd;
    }

    public void setMdfcnYmd(String mdfcnYmd) {
        this.mdfcnYmd = mdfcnYmd;
    }

    public String getMdfcnUserId() {
        return mdfcnUserId;
    }

    public void setMdfcnUserId(String mdfcnUserId) {
        this.mdfcnUserId = mdfcnUserId;
    }

    public String getMdfcnUserIp() {
        return mdfcnUserIp;
    }

    public void setMdfcnUserIp(String mdfcnUserIp) {
        this.mdfcnUserIp = mdfcnUserIp;
    }

    public String getSysId() {
        return sysId;
    }

    public void setSysId(String sysId) {
        this.sysId = sysId;
    }

    public String getRgstId() {
        return rgstId;
    }

    public void setRgstId(String rgstId) {
        this.rgstId = rgstId;
    }

    public String getRgstDt() {
        return rgstDt;
    }

    public void setRgstDt(String rgstDt) {
        this.rgstDt = rgstDt;
    }
}
