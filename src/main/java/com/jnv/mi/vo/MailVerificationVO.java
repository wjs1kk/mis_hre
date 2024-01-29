package com.jnv.mi.vo;

import com.jnv.jncore.vo.CommonVO;
import org.apache.ibatis.type.Alias;

@Alias("mailVerificationVO")
public class MailVerificationVO extends CommonVO {

    private String userId;
    private String userName;
    private String emailAddr;
    private String rqstId;
    private String verificationCode;
    private String expireDt;
    private String verifiedToken;

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getEmailAddr() {
        return emailAddr;
    }

    public void setEmailAddr(String emailAddr) {
        this.emailAddr = emailAddr;
    }

    public String getRqstId() {
        return rqstId;
    }

    public void setRqstId(String rqstId) {
        this.rqstId = rqstId;
    }

    public String getVerificationCode() {
        return verificationCode;
    }

    public void setVerificationCode(String verificationCode) {
        this.verificationCode = verificationCode;
    }

    public String getExpireDt() {
        return expireDt;
    }

    public void setExpireDt(String expireDt) {
        this.expireDt = expireDt;
    }

    public String getVerifiedToken() {
        return verifiedToken;
    }

    public void setVerifiedToken(String verifiedToken) {
        this.verifiedToken = verifiedToken;
    }
}
