package com.jnv.sm.vo;

import org.apache.ibatis.type.Alias;

import com.jnv.jncore.vo.CommonVO;

@Alias("equipManagerVO")
public class EquipManagerVO extends CommonVO {

    private String userId;
    private String userNm;
    private String eqId;
    private String memberId;
    private String userIdOld;
    private String eqIdOld;
    private String userIdNew;
    private String eqIdNew;
    private String eqVer;
    private String eqNmKr;
    private String typeApprNmEn;
    private String rgstId;
    private String rgstDt;
    private String rgstIp;
    private String updtId;
    private String updtDt;
    private String updtIp;
    private String link2;


    public String getMemberId() {
        return memberId;
    }
    public void setMemberId(String memberId) {
        this.memberId = memberId;
    }
    public String getLink2() {
        return link2;
    }
    public void setLink2(String link2) {
        this.link2 = link2;
    }
    public String getUserId() {
        return userId;
    }
    public void setUserId(String userId) {
        this.userId = userId;
    }
    public String getUserNm() {
        return userNm;
    }
    public void setUserNm(String userNm) {
        this.userNm = userNm;
    }
    public String getEqId() {
        return eqId;
    }
    public void setEqId(String eqId) {
        this.eqId = eqId;
    }
    public String getUserIdOld() {
        return userIdOld;
    }
    public void setUserIdOld(String userIdOld) {
        this.userIdOld = userIdOld;
    }
    public String getEqIdOld() {
        return eqIdOld;
    }
    public void setEqIdOld(String eqIdOld) {
        this.eqIdOld = eqIdOld;
    }
    public String getUserIdNew() {
        return userIdNew;
    }
    public void setUserIdNew(String userIdNew) {
        this.userIdNew = userIdNew;
    }
    public String getEqIdNew() {
        return eqIdNew;
    }
    public void setEqIdNew(String eqIdNew) {
        this.eqIdNew = eqIdNew;
    }
    public String getEqVer() {
        return eqVer;
    }
    public void setEqVer(String eqVer) {
        this.eqVer = eqVer;
    }
    public String getEqNmKr() {
        return eqNmKr;
    }
    public void setEqNmKr(String eqNmKr) {
        this.eqNmKr = eqNmKr;
    }
    public String getTypeApprNmEn() {
        return typeApprNmEn;
    }
    public void setTypeApprNmEn(String typeApprNmEn) {
        this.typeApprNmEn = typeApprNmEn;
    }
    public String getRgstId() {
        return rgstId;
    }
    public void setRgstId(String rgstId) {
        this.rgstId = rgstId;
    }
    public String getRgstDt() {
        return rgstDt;
    }
    public void setRgstDt(String rgstDt) {
        this.rgstDt = rgstDt;
    }
    public String getRgstIp() {
        return rgstIp;
    }
    public void setRgstIp(String rgstIp) {
        this.rgstIp = rgstIp;
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
    @Override
    public String toString() {
        return "EquipManagerVO [userId=" + userId + ", userNm=" + userNm + ", eqId=" + eqId + ", memberId=" + memberId
                + ", userIdOld=" + userIdOld + ", eqIdOld=" + eqIdOld + ", userIdNew=" + userIdNew + ", eqIdNew="
                + eqIdNew + ", eqVer=" + eqVer + ", eqNmKr=" + eqNmKr + ", typeApprNmEn=" + typeApprNmEn + ", rgstId="
                + rgstId + ", rgstDt=" + rgstDt + ", rgstIp=" + rgstIp + ", updtId=" + updtId + ", updtDt=" + updtDt
                + ", updtIp=" + updtIp + ", link2=" + link2 + "]";
    }


}
