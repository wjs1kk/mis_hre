package com.jnv.sm.vo;

import org.apache.ibatis.type.Alias;

import com.jnv.jncore.vo.CommonVO;

@Alias("sendMessageUserVO")
public class SendMessageUserVO extends CommonVO {

    private String sndCd;
    private String userGubun;
    private String userId;
    private String reciveStatus;
    private String sndingMemo;
    private String regYmd;
    private String regBy;
    private String mdfcnBy;
    private String mdfcnYmd;

    private String userNameKr;
    private String cmid;
    private String umid;
    private String msgType;
    private String status;
    private String requestTime;
    private String sendTime;
    private String reportTime;
    private String destPhone;
    private String destName;
    private String sendPhone;
    private String sendName;
    private String subject;
    private String msgBody;
    private String nationCode;
    private String senderKey;
    private String templateCode;
    private String responseMethod;
    private String timeout;
    private String reType;
    private String reBody;
    private String rePart;
    private String coverFlag;
    private String smsFlag;
    private String replyFlag;
    private String retryCnt;
    private String attachedFile;
    private String vxmlFile;
    private String callStatus;
    private String usePage;
    private String useTime;
    private String snResult;
    private String telInfo;
    private String cinfo;
    private String userKey;
    private String adFlag;
    private String rcsRefkey;
    private String sndngTelno;
    private String reciveYmd;

    private String sndStat;
    private String recStat;
    private String emailAddr;
    private String phoneNo;
    private String sndType;
    private String sndSubject;
    private String sndBdt;
    private String msgSndGrpId;
    private String rgstIp;
    private String rgstId;
    private String rgstDt;
    private String updtId;
    private String updtDt;
    private String updtIp;
    private String sndUserNm;
    private String userYn;

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

    public String getEmailAddr() {
        return emailAddr;
    }

    public void setEmailAddr(String emailAddr) {
        this.emailAddr = emailAddr;
    }

    public String getPhoneNo() {
        return phoneNo;
    }

    public void setPhoneNo(String phoneNo) {
        this.phoneNo = phoneNo;
    }

    public String getUserNameKr() {
        return userNameKr;
    }

    public void setUserNameKr(String userNameKr) {
        this.userNameKr = userNameKr;
    }

    public String getCmid() {
        return cmid;
    }

    public void setCmid(String cmid) {
        this.cmid = cmid;
    }

    public String getUmid() {
        return umid;
    }

    public void setUmid(String umid) {
        this.umid = umid;
    }

    public String getMsgType() {
        return msgType;
    }

    public void setMsgType(String msgType) {
        this.msgType = msgType;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getRequestTime() {
        return requestTime;
    }

    public void setRequestTime(String requestTime) {
        this.requestTime = requestTime;
    }

    public String getSendTime() {
        return sendTime;
    }

    public void setSendTime(String sendTime) {
        this.sendTime = sendTime;
    }

    public String getReportTime() {
        return reportTime;
    }

    public void setReportTime(String reportTime) {
        this.reportTime = reportTime;
    }

    public String getDestPhone() {
        return destPhone;
    }

    public void setDestPhone(String destPhone) {
        this.destPhone = destPhone;
    }

    public String getDestName() {
        return destName;
    }

    public void setDestName(String destName) {
        this.destName = destName;
    }

    public String getSendPhone() {
        return sendPhone;
    }

    public void setSendPhone(String sendPhone) {
        this.sendPhone = sendPhone;
    }

    public String getSendName() {
        return sendName;
    }

    public void setSendName(String sendName) {
        this.sendName = sendName;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public String getMsgBody() {
        return msgBody;
    }

    public void setMsgBody(String msgBody) {
        this.msgBody = msgBody;
    }

    public String getNationCode() {
        return nationCode;
    }

    public void setNationCode(String nationCode) {
        this.nationCode = nationCode;
    }

    public String getSenderKey() {
        return senderKey;
    }

    public void setSenderKey(String senderKey) {
        this.senderKey = senderKey;
    }

    public String getTemplateCode() {
        return templateCode;
    }

    public void setTemplateCode(String templateCode) {
        this.templateCode = templateCode;
    }

    public String getResponseMethod() {
        return responseMethod;
    }

    public void setResponseMethod(String responseMethod) {
        this.responseMethod = responseMethod;
    }

    public String getTimeout() {
        return timeout;
    }

    public void setTimeout(String timeout) {
        this.timeout = timeout;
    }

    public String getReType() {
        return reType;
    }

    public void setReType(String reType) {
        this.reType = reType;
    }

    public String getReBody() {
        return reBody;
    }

    public void setReBody(String reBody) {
        this.reBody = reBody;
    }

    public String getRePart() {
        return rePart;
    }

    public void setRePart(String rePart) {
        this.rePart = rePart;
    }

    public String getCoverFlag() {
        return coverFlag;
    }

    public void setCoverFlag(String coverFlag) {
        this.coverFlag = coverFlag;
    }

    public String getSmsFlag() {
        return smsFlag;
    }

    public void setSmsFlag(String smsFlag) {
        this.smsFlag = smsFlag;
    }

    public String getReplyFlag() {
        return replyFlag;
    }

    public void setReplyFlag(String replyFlag) {
        this.replyFlag = replyFlag;
    }

    public String getRetryCnt() {
        return retryCnt;
    }

    public void setRetryCnt(String retryCnt) {
        this.retryCnt = retryCnt;
    }

    public String getAttachedFile() {
        return attachedFile;
    }

    public void setAttachedFile(String attachedFile) {
        this.attachedFile = attachedFile;
    }

    public String getVxmlFile() {
        return vxmlFile;
    }

    public void setVxmlFile(String vxmlFile) {
        this.vxmlFile = vxmlFile;
    }

    public String getCallStatus() {
        return callStatus;
    }

    public void setCallStatus(String callStatus) {
        this.callStatus = callStatus;
    }

    public String getUsePage() {
        return usePage;
    }

    public void setUsePage(String usePage) {
        this.usePage = usePage;
    }

    public String getUseTime() {
        return useTime;
    }

    public void setUseTime(String useTime) {
        this.useTime = useTime;
    }

    public String getSnResult() {
        return snResult;
    }

    public void setSnResult(String snResult) {
        this.snResult = snResult;
    }

    public String getTelInfo() {
        return telInfo;
    }

    public void setTelInfo(String telInfo) {
        this.telInfo = telInfo;
    }

    public String getCinfo() {
        return cinfo;
    }

    public void setCinfo(String cinfo) {
        this.cinfo = cinfo;
    }

    public String getUserKey() {
        return userKey;
    }

    public void setUserKey(String userKey) {
        this.userKey = userKey;
    }

    public String getAdFlag() {
        return adFlag;
    }

    public void setAdFlag(String adFlag) {
        this.adFlag = adFlag;
    }

    public String getRcsRefkey() {
        return rcsRefkey;
    }

    public void setRcsRefkey(String rcsRefkey) {
        this.rcsRefkey = rcsRefkey;
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

    public String getReciveStatus() {
        return reciveStatus;
    }

    public void setReciveStatus(String reciveStatus) {
        this.reciveStatus = reciveStatus;
    }

    public String getSndingMemo() {
        return sndingMemo;
    }

    public void setSndingMemo(String sndingMemo) {
        this.sndingMemo = sndingMemo;
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

    public String getSndngTelno() {
        return sndngTelno;
    }

    public void setSndngTelno(String sndngTelno) {
        this.sndngTelno = sndngTelno;
    }

    public String getReciveYmd() {
        return reciveYmd;
    }

    public void setReciveYmd(String reciveYmd) {
        this.reciveYmd = reciveYmd;
    }

    public String getSndStat() {
        return sndStat;
    }

    public void setSndStat(String sndStat) {
        this.sndStat = sndStat;
    }

    public String getSndType() {
        return sndType;
    }

    public void setSndType(String sndType) {
        this.sndType = sndType;
    }

    public String getSndCd() {
        return sndCd;
    }

    public void setSndCd(String sndCd) {
        this.sndCd = sndCd;
    }

    public String getMsgSndGrpId() {
        return msgSndGrpId;
    }

    public void setMsgSndGrpId(String msgSndGrpId) {
        this.msgSndGrpId = msgSndGrpId;
    }

    public String getRgstId() {
        return rgstId;
    }

    public void setRgstId(String rgstId) {
        this.rgstId = rgstId;
    }

    public String getSndUserNm() {
        return sndUserNm;
    }

    public void setSndUserNm(String sndUserNm) {
        this.sndUserNm = sndUserNm;
    }

    public String getUserYn() {
        return userYn;
    }

    public void setUserYn(String userYn) {
        this.userYn = userYn;
    }

    public String getRecStat() {
        return recStat;
    }

    public void setRecStat(String recStat) {
        this.recStat = recStat;
    }
}
