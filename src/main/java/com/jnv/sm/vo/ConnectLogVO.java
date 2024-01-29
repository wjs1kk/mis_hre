package com.jnv.sm.vo;

import org.apache.ibatis.type.Alias;

import com.jnv.jncore.vo.CommonVO;

@Alias("connectLogVO")
public class ConnectLogVO extends CommonVO{

    private String userId;
    private String cntnDt;
    private String cntnIp;
    private String userNmKr;
    private String userNameKr;
    private String lgnStatus;
    private String menuId;
    private String menuNm;
    private String funcId;
    private String funcName;
    private String cntnContrYn;
    private String progUrl;
    private String cnt;

    public String getProgUrl() {
        return progUrl;
    }
    public void setProgUrl(String progUrl) {
        this.progUrl = progUrl;
    }
    public String getCnt() {
        return cnt;
    }
    public void setCnt(String cnt) {
        this.cnt = cnt;
    }
    public String getUserId() {
        return userId;
    }
    public void setUserId(String userId) {
        this.userId = userId;
    }
    public String getCntnDt() {
        return cntnDt;
    }
    public void setCntnDt(String cntnDt) {
        this.cntnDt = cntnDt;
    }
    public String getCntnIp() {
        return cntnIp;
    }
    public void setCntnIp(String cntnIp) {
        this.cntnIp = cntnIp;
    }
    public String getUserNmKr() {
        return userNmKr;
    }
    public void setUserNmKr(String userNmKr) {
        this.userNmKr = userNmKr;
    }
    public String getLgnStatus() {
        return lgnStatus;
    }
    public void setLgnStatus(String lgnStatus) {
        this.lgnStatus = lgnStatus;
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
    public String getCntnContrYn() {
        return cntnContrYn;
    }
    public void setCntnContrYn(String cntnContrYn) {
        this.cntnContrYn = cntnContrYn;
    }
    public String getUserNameKr() {
        return userNameKr;
    }
    public void setUserNameKr(String userNameKr) {
        this.userNameKr = userNameKr;
    }


}
