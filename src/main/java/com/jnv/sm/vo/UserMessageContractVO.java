package com.jnv.sm.vo;

import org.apache.ibatis.type.Alias;

import com.jnv.jncore.vo.CommonVO;

@Alias("userMessageContractVO")
public class UserMessageContractVO extends CommonVO {

    private String userId;
    private String userNameKr;
    private String organNameKr;
    private String telno;
    private String eml;
    private String userGubun;
    private String sndngUser;
    private String userNmKr;
    private String sndType;
    private String organNm;
    private String phoneNo;
    private String emailAddr;
    private String insttCd;
    private String sndUserNm;

    public String getOrganNm() {
        return organNm;
    }

    public void setOrganNm(String organNm) {
        this.organNm = organNm;
    }

    public String getPhoneNo() {
        return phoneNo;
    }

    public void setPhoneNo(String phoneNo) {
        this.phoneNo = phoneNo;
    }

    public String getEmailAddr() {
        return emailAddr;
    }

    public void setEmailAddr(String emailAddr) {
        this.emailAddr = emailAddr;
    }

    public String getInsttCd() {
        return insttCd;
    }

    public void setInsttCd(String insttCd) {
        this.insttCd = insttCd;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getUserNameKr() {
        return userNameKr;
    }

    public void setUserNameKr(String userNameKr) {
        this.userNameKr = userNameKr;
    }

    public String getOrganNameKr() {
        return organNameKr;
    }

    public void setOrganNameKr(String organNameKr) {
        this.organNameKr = organNameKr;
    }

    public String getTelno() {
        return telno;
    }

    public void setTelno(String telno) {
        this.telno = telno;
    }

    public String getEml() {
        return eml;
    }

    public void setEml(String eml) {
        this.eml = eml;
    }

    public String getUserGubun() {
        return userGubun;
    }

    public void setUserGubun(String userGubun) {
        this.userGubun = userGubun;
    }

    public String getSndngUser() {
        return sndngUser;
    }

    public void setSndngUser(String sndngUser) {
        this.sndngUser = sndngUser;
    }

    public String getUserNmKr() {
        return userNmKr;
    }

    public void setUserNmKr(String userNmKr) {
        this.userNmKr = userNmKr;
    }

    public String getSndType() {
        return sndType;
    }

    public void setSndType(String sndType) {
        this.sndType = sndType;
    }

    public String getSndUserNm() {
        return sndUserNm;
    }

    public void setSndUserNm(String sndUserNm) {
        this.sndUserNm = sndUserNm;
    }
}
