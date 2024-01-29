package com.jnv.sm.vo;

import org.apache.ibatis.type.Alias;

import com.jnv.jncore.vo.CommonVO;

@Alias("sendMessageVO")
public class SendMessageVO extends CommonVO {


    private String sndCd;
    private String sndType;
    private String sndSubject;
    private String sndBdt;
    private String ttSndCnt;
    private String scsCnt;
    private String failCnt;
    private String sndDt;
    private String mdfcmYmd;
    private String mdfcnBy;
    private String sndStat;
    private String reciveStatus;
    private String sndngTelno;
    private String userId;
    private String userNm;
    private String saveTitle;
    private String saveContent;
    private String rgstIp;
    private String rgstId;
    private String rgstDt;
    private String updtId;
    private String updtDt;
    private String updtIp;
    private String sndUserId;

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

    public String getUpdtDt() {
        return updtDt;
    }

    public void setUpdtDt(String updtDt) {
        this.updtDt = updtDt;
    }

    public String getUpdtIp() {
        return updtIp;
    }

    public void setUpdtIp(String updtIp) {
        this.updtIp = updtIp;
    }

    public String getSndCd() {
        return sndCd;
    }

    public void setSndCd(String sndCd) {
        this.sndCd = sndCd;
    }

    public String getSndType() {
        return sndType;
    }

    public void setSndType(String sndType) {
        this.sndType = sndType;
    }

    public String getSndSubject() {
        return sndSubject;
    }

    public void setSndSubject(String sndSubject) {
        this.sndSubject = sndSubject;
    }

    public String getSndBdt() {
        return sndBdt;
    }

    public void setSndBdt(String sndBdt) {
        this.sndBdt = sndBdt;
    }

    public String getUserNm() {
        return userNm;
    }

    public void setUserNm(String userNm) {
        this.userNm = userNm;
    }

    public String getScsCnt() {
        return scsCnt;
    }

    public void setScsCnt(String scsCnt) {
        this.scsCnt = scsCnt;
    }

    public String getFailCnt() {
        return failCnt;
    }

    public void setFailCnt(String failCnt) {
        this.failCnt = failCnt;
    }

    public String getMdfcmYmd() {
        return mdfcmYmd;
    }

    public void setMdfcmYmd(String mdfcmYmd) {
        this.mdfcmYmd = mdfcmYmd;
    }

    public String getMdfcnBy() {
        return mdfcnBy;
    }

    public void setMdfcnBy(String mdfcnBy) {
        this.mdfcnBy = mdfcnBy;
    }

    public String getReciveStatus() {
        return reciveStatus;
    }

    public void setReciveStatus(String reciveStatus) {
        this.reciveStatus = reciveStatus;
    }

    public String getSndngTelno() {
        return sndngTelno;
    }

    public void setSndngTelno(String sndngTelno) {
        this.sndngTelno = sndngTelno;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getSaveTitle() {
        return saveTitle;
    }

    public void setSaveTitle(String saveTitle) {
        this.saveTitle = saveTitle;
    }

    public String getSaveContent() {
        return saveContent;
    }

    public void setSaveContent(String saveContent) {
        this.saveContent = saveContent;
    }

    public String getTtSndCnt() {
        return ttSndCnt;
    }

    public void setTtSndCnt(String ttSndCnt) {
        this.ttSndCnt = ttSndCnt;
    }

    public String getSndDt() {
        return sndDt;
    }

    public void setSndDt(String sndDt) {
        this.sndDt = sndDt;
    }

    public String getSndStat() {
        return sndStat;
    }

    public void setSndStat(String sndStat) {
        this.sndStat = sndStat;
    }

    public String getRgstId() {
        return rgstId;
    }

    public void setRgstId(String rgstId) {
        this.rgstId = rgstId;
    }

    public String getSndUserId() {
        return sndUserId;
    }

    public void setSndUserId(String sndUserId) {
        this.sndUserId = sndUserId;
    }
}
