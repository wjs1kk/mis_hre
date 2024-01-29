package com.jnv.sm.vo;

import org.apache.ibatis.type.Alias;

import com.jnv.jncore.vo.CommonVO;

@Alias("functionVO")
public class FunctionVO extends CommonVO{

    private String displayImgUrl;
    private String funcCode;
    private String funcDesc;
    private String funcId;
    private String funcName;
    private String funcPattern;
    private String funcPatternType;
    private String funcType;
    private String progId;
    private String registDt;
    private String registUserId;
    private String registUserIp;
    private String sortOrdr;
    private String updtDt;
    private String updtUserId;
    private String updtUserIp;
    private String menuId;
    private String menuNm;

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
    public String getRegistDt() {
        return registDt;
    }
    public void setRegistDt(String registDt) {
        this.registDt = registDt;
    }
    public String getRegistUserId() {
        return registUserId;
    }
    public void setRegistUserId(String registUserId) {
        this.registUserId = registUserId;
    }
    public String getRegistUserIp() {
        return registUserIp;
    }
    public void setRegistUserIp(String registUserIp) {
        this.registUserIp = registUserIp;
    }
    public String getSortOrdr() {
        return sortOrdr;
    }
    public void setSortOrdr(String sortOrdr) {
        this.sortOrdr = sortOrdr;
    }
    public String getUpdtDt() {
        return updtDt;
    }
    public void setUpdtDt(String updtDt) {
        this.updtDt = updtDt;
    }
    public String getUpdtUserId() {
        return updtUserId;
    }
    public void setUpdtUserId(String updtUserId) {
        this.updtUserId = updtUserId;
    }
    public String getUpdtUserIp() {
        return updtUserIp;
    }
    public void setUpdtUserIp(String updtUserIp) {
        this.updtUserIp = updtUserIp;
    }
    public String getMenuId() {
        return menuId;
    }
    public void setMenuId(String menuId) {
        this.menuId = menuId;
    }
    public String getMenuNm() {
        return menuNm;
    }
    public void setMenuNm(String menuNm) {
        this.menuNm = menuNm;
    }


}
