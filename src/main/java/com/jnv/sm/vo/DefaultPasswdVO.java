
package com.jnv.sm.vo;

import org.apache.ibatis.type.Alias;

import com.jnv.jncore.vo.CommonVO;

@Alias("defaultPasswdVO")
public class DefaultPasswdVO extends CommonVO{

    private String passwd;
    private String setType;
    private String setLength;
    private String updtIp;
    private String updtDt;
    private String updtId;
    private String passwdChgCnt;


    public String getPasswd() {
        return passwd;
    }
    public void setPasswd(String passwd) {
        this.passwd = passwd;
    }
    public String getSetType() {
        return setType;
    }
    public void setSetType(String setType) {
        this.setType = setType;
    }
    public String getSetLength() {
        return setLength;
    }
    public void setSetLength(String setLength) {
        this.setLength = setLength;
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
    public String getUpdtId() {
        return updtId;
    }
    public void setUpdtId(String updtId) {
        this.updtId = updtId;
    }
    public String getPasswdChgCnt() {
        return passwdChgCnt;
    }
    public void setPasswdChgCnt(String passwdChgCnt) {
        this.passwdChgCnt = passwdChgCnt;
    }
    @Override
    public String toString() {
        return "DefaultPasswdVO [passwd=" + passwd + ", setType=" + setType + ", setLength=" + setLength + ", updtIp="
                + updtIp + ", updtDt=" + updtDt + ", updtId=" + updtId + ", passwdChgCnt=" + passwdChgCnt + "]";
    }
    



}
