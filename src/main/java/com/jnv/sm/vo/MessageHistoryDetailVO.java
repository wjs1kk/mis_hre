package com.jnv.sm.vo;

import org.apache.ibatis.type.Alias;

import com.jnv.jncore.vo.CommonVO;

@Alias("messageHistoryDetailVO")
public class MessageHistoryDetailVO extends CommonVO {

    private String sndngUser;
    private String sndngSeq;
    private String userGubun;
    private String userId;
    private String userNameKr;
    private String eml;
    private String telno;
    private String sndngEml;
    private String sndngTelno;
    private String sndngStatus;
    private String reciveStatus;
    private String userNmKr;
    private String phoneNo;
    private String emailAddr;

    public String getUserNmKr() {
        return userNmKr;
    }

    public void setUserNmKr(String userNmKr) {
        this.userNmKr = userNmKr;
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

    public String getSndngUser() {
        return sndngUser;
    }

    public void setSndngUser(String sndngUser) {
        this.sndngUser = sndngUser;
    }

    public String getSndngSeq() {
        return sndngSeq;
    }

    public void setSndngSeq(String sndngSeq) {
        this.sndngSeq = sndngSeq;
    }

    public String getUserGubun() {
        return userGubun;
    }

    public void setUserGubun(String userGubun) {
        this.userGubun = userGubun;
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

    public String getEml() {
        return eml;
    }

    public void setEml(String eml) {
        this.eml = eml;
    }

    public String getTelno() {
        return telno;
    }

    public void setTelno(String telno) {
        this.telno = telno;
    }

    public String getSndngEml() {
        return sndngEml;
    }

    public void setSndngEml(String sndngEml) {
        this.sndngEml = sndngEml;
    }

    public String getSndngTelno() {
        return sndngTelno;
    }

    public void setSndngTelno(String sndngTelno) {
        this.sndngTelno = sndngTelno;
    }

    public String getSndngStatus() {
        return sndngStatus;
    }

    public void setSndngStatus(String sndngStatus) {
        this.sndngStatus = sndngStatus;
    }

    public String getReciveStatus() {
        return reciveStatus;
    }

    public void setReciveStatus(String reciveStatus) {
        this.reciveStatus = reciveStatus;
    }
}
