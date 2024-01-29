package com.jnv.sm.vo;

import org.apache.ibatis.type.Alias;

import com.jnv.jncore.vo.CommonVO;

@Alias("roleUserLogVO")
public class RoleUserLogVO extends CommonVO {

    private String userId;
    private String memberId;
    private String userNmKr;
    private String organCd;
    private String organNm;
    private String roleCode;
    private String roleNm;
    private String processTy;
    private String processDt;
    private String processById;
    private String processByMemberId;
    private String processByNmKr;
    private String processReason;

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

    public String getRoleCode() {
        return roleCode;
    }

    public void setRoleCode(String roleCode) {
        this.roleCode = roleCode;
    }

    public String getRoleNm() {
        return roleNm;
    }

    public void setRoleNm(String roleNm) {
        this.roleNm = roleNm;
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

    public String getProcessByMemberId() {
        return processByMemberId;
    }

    public void setProcessByMemberId(String processByMemberId) {
        this.processByMemberId = processByMemberId;
    }

    public String getProcessByNmKr() {
        return processByNmKr;
    }

    public void setProcessByNmKr(String processByNmKr) {
        this.processByNmKr = processByNmKr;
    }

    public String getProcessReason() {
        return processReason;
    }

    public void setProcessReason(String processReason) {
        this.processReason = processReason;
    }
}
