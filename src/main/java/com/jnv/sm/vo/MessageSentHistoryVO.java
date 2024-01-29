package com.jnv.sm.vo;

import org.apache.ibatis.type.Alias;

import com.jnv.jncore.vo.CommonVO;

@Alias("messageSentHistoryVO")
public class MessageSentHistoryVO extends CommonVO {

    private String sndngUser;
    private String sndngYmd;
    private String sndngGubun;
    private String userId;
    private String userCnt;
    private String sndngTitle;
    private String regYmd;
    private String regBy;
    private String mdfcnBy;
    private String mdfcnYmd;
    private String sndngContents;
    private String sndngSeq;
    private String sndngStatus;
    private String reciveStatus;
    private String eml;
    private String telno;
    private String reciveYmd;

    public String getSndngUser() {
        return sndngUser;
    }

    public void setSndngUser(String sndngUser) {
        this.sndngUser = sndngUser;
    }

    public String getSndngYmd() {
        return sndngYmd;
    }

    public void setSndngYmd(String sndngYmd) {
        this.sndngYmd = sndngYmd;
    }

    public String getSndngGubun() {
        return sndngGubun;
    }

    public void setSndngGubun(String sndngGubun) {
        this.sndngGubun = sndngGubun;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getUserCnt() {
        return userCnt;
    }

    public void setUserCnt(String userCnt) {
        this.userCnt = userCnt;
    }

    public String getSndngTitle() {
        return sndngTitle;
    }

    public void setSndngTitle(String sndngTitle) {
        this.sndngTitle = sndngTitle;
    }

    public String getRegYmd() {
        return regYmd;
    }

    public void setRegYmd(String regYmd) {
        this.regYmd = regYmd;
    }

    public String getRegBy() {
        return regBy;
    }

    public void setRegBy(String regBy) {
        this.regBy = regBy;
    }

    public String getMdfcnBy() {
        return mdfcnBy;
    }

    public void setMdfcnBy(String mdfcnBy) {
        this.mdfcnBy = mdfcnBy;
    }

    public String getMdfcnYmd() {
        return mdfcnYmd;
    }

    public void setMdfcnYmd(String mdfcnYmd) {
        this.mdfcnYmd = mdfcnYmd;
    }

    public String getSndngContents() {
        return sndngContents;
    }

    public void setSndngContents(String sndngContents) {
        this.sndngContents = sndngContents;
    }

    public String getSndngSeq() {
        return sndngSeq;
    }

    public void setSndngSeq(String sndngSeq) {
        this.sndngSeq = sndngSeq;
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

    public String getReciveYmd() {
        return reciveYmd;
    }

    public void setReciveYmd(String reciveYmd) {
        this.reciveYmd = reciveYmd;
    }
}
