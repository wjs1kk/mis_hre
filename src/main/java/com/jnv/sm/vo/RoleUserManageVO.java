
package com.jnv.sm.vo;

import org.apache.ibatis.type.Alias;

import com.jnv.jncore.vo.CommonVO;

@Alias("roleUserManageVO")
public class RoleUserManageVO extends CommonVO {

    private String roleCode;
    private String userId;
    private String useYn;
    private String useYmd;
    private String endYmd;
    private String rgstId;
    private String rgstIp;
    private String rgstDt;
    private String updtId;
    private String updtIp;
    private String updtDt;
    private String updtReason;

    private String userNm;
    private String userNmKr;
    private String deptCd;
    private String deptNm;
    private String deptCode;
    private String deptNameKr;
    private String jobPosition;
    private String jobTitle;

    /**** role Log 위해 추가 ****/
    private String organCd;
    private String organNm;
    private String processTy;
    private String processDt;
    private String processById;
    private String processReason;
    private String roleNm;

    private String memberId;
    private String telNo;
    private String phoneNo;
    private String emailAddr;

    public String getRoleNm() {
        return roleNm;
    }

    public void setRoleNm(String roleNm) {
        this.roleNm = roleNm;
    }

    public String getOrganCd() {
        return organCd;
    }

    public void setOrganCd(String organCd) {
        this.organCd = organCd;
    }

    public String getOrganNm() {
        return organNm;
    }

    public void setOrganNm(String organNm) {
        this.organNm = organNm;
    }

    public String getProcessTy() {
        return processTy;
    }

    public void setProcessTy(String processTy) {
        this.processTy = processTy;
    }

    public String getProcessDt() {
        return processDt;
    }

    public void setProcessDt(String processDt) {
        this.processDt = processDt;
    }

    public String getProcessById() {
        return processById;
    }

    public void setProcessById(String processById) {
        this.processById = processById;
    }

    public String getProcessReason() {
        return processReason;
    }

    public void setProcessReason(String processReason) {
        this.processReason = processReason;
    }

    public String getRoleCode() {
        return roleCode;
    }

    public void setRoleCode(String roleCode) {
        this.roleCode = roleCode;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getUseYn() {
        return useYn;
    }

    public void setUseYn(String useYn) {
        this.useYn = useYn;
    }

    public String getUseYmd() {
        return useYmd;
    }

    public void setUseYmd(String useYmd) {
        this.useYmd = useYmd;
    }

    public String getEndYmd() {
        return endYmd;
    }

    public void setEndYmd(String endYmd) {
        this.endYmd = endYmd;
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

    public String getUpdtReason() {
        return updtReason;
    }

    public void setUpdtReason(String updtReason) {
        this.updtReason = updtReason;
    }

    public String getUserNm() {
        return userNm;
    }

    public void setUserNm(String userNm) {
        this.userNm = userNm;
    }

    public String getUserNmKr() {
        return userNmKr;
    }

    public void setUserNmKr(String userNmKr) {
        this.userNmKr = userNmKr;
    }

    public String getDeptCd() {
        return deptCd;
    }

    public void setDeptCd(String deptCd) {
        this.deptCd = deptCd;
    }

    public String getDeptNm() {
        return deptNm;
    }

    public void setDeptNm(String deptNm) {
        this.deptNm = deptNm;
    }

    public String getDeptCode() {
        return deptCode;
    }

    public void setDeptCode(String deptCode) {
        this.deptCode = deptCode;
    }

    public String getDeptNameKr() {
        return deptNameKr;
    }

    public void setDeptNameKr(String deptNameKr) {
        this.deptNameKr = deptNameKr;
    }

    public String getJobPosition() {
        return jobPosition;
    }

    public void setJobPosition(String jobPosition) {
        this.jobPosition = jobPosition;
    }

    public String getJobTitle() {
        return jobTitle;
    }

    public void setJobTitle(String jobTitle) {
        this.jobTitle = jobTitle;
    }

    public String getMemberId() {
        return memberId;
    }

    public void setMemberId(String memberId) {
        this.memberId = memberId;
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

    public String getEmailAddr() {
        return emailAddr;
    }

    public void setEmailAddr(String emailAddr) {
        this.emailAddr = emailAddr;
    }
}
