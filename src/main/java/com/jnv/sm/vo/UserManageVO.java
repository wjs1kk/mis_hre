package com.jnv.sm.vo;

import org.apache.ibatis.type.Alias;

import com.jnv.jncore.vo.CommonVO;

@Alias("UserManageVO")
public class UserManageVO extends CommonVO {

    private String userId;
    private String memberId;
    private String userNmKr;
    private String userNmEn;
    private String passwd;
    private String emailAddr;
    private String telNo;
    private String phoneNo;
    private String useYn;
    private String rgstId;
    private String rgstIp;
    private String rgstDt;
    private String updtId;
    private String updtIp;
    private String updtDt;
    private String deptCd;
    private String jobTitle;
    private String jobPosition;
    private String pwExpireDt;
    private String passwdCheck;
    private String deptNm;
    private String origPasswd;

    private String joinAprvStts;
    private String joinAprvSttsNm;

    public String getUserId() {
        return userId;
    }
    public void setUserId(String userId) {
        this.userId = userId;
    }
    public String getMemberId() {
        return memberId;
    }
    public void setMemberId(String memberId) {
        this.memberId = memberId;
    }
    public String getUserNmKr() {
        return userNmKr;
    }
    public void setUserNmKr(String userNmKr) {
        this.userNmKr = userNmKr;
    }
    public String getUserNmEn() {
        return userNmEn;
    }
    public void setUserNmEn(String userNmEn) {
        this.userNmEn = userNmEn;
    }
    public String getPasswd() {
        return passwd;
    }
    public void setPasswd(String passwd) {
        this.passwd = passwd;
    }
    public String getEmailAddr() {
        return emailAddr;
    }
    public void setEmailAddr(String emailAddr) {
        this.emailAddr = emailAddr;
    }
    public String getTelNo() {
        return telNo;
    }
    public void setTelNo(String telNo) {
        this.telNo = telNo;
    }
    public String getPhoneNo() {
        return phoneNo;
    }
    public void setPhoneNo(String phoneNo) {
        this.phoneNo = phoneNo;
    }
    public String getUseYn() {
        return useYn;
    }
    public void setUseYn(String useYn) {
        this.useYn = useYn;
    }
    public String getRgstId() {
        return rgstId;
    }
    public void setRgstId(String rgstId) {
        this.rgstId = rgstId;
    }
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
    public String getDeptCd() {
        return deptCd;
    }
    public void setDeptCd(String deptCd) {
        this.deptCd = deptCd;
    }
    public String getJobTitle() {
        return jobTitle;
    }
    public void setJobTitle(String jobTitle) {
        this.jobTitle = jobTitle;
    }
    public String getJobPosition() {
        return jobPosition;
    }
    public void setJobPosition(String jobPosition) {
        this.jobPosition = jobPosition;
    }

    public String getPwExpireDt() {
        return pwExpireDt;
    }

    public void setPwExpireDt(String pwExpireDt) {
        this.pwExpireDt = pwExpireDt;
    }

    public String getPasswdCheck() {
        return passwdCheck;
    }

    public void setPasswdCheck(String passwdCheck) {
        this.passwdCheck = passwdCheck;
    }

    public String getDeptNm() {
        return deptNm;
    }

    public void setDeptNm(String deptNm) {
        this.deptNm = deptNm;
    }

    public String getOrigPasswd() {
        return origPasswd;
    }

    public void setOrigPasswd(String origPasswd) {
        this.origPasswd = origPasswd;
    }

    public String getJoinAprvStts() {
        return joinAprvStts;
    }

    public void setJoinAprvStts(String joinAprvStts) {
        this.joinAprvStts = joinAprvStts;
    }

    public String getJoinAprvSttsNm() {
        return joinAprvSttsNm;
    }

    public void setJoinAprvSttsNm(String joinAprvSttsNm) {
        this.joinAprvSttsNm = joinAprvSttsNm;
    }
}
