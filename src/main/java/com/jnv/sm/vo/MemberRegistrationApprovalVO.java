package com.jnv.sm.vo;

import com.jnv.jncore.vo.CommonVO;
import org.apache.ibatis.type.Alias;

@Alias("memberRegistrationApprovalVO")
public class MemberRegistrationApprovalVO extends CommonVO {

    private String memberId;
    private String memberNmKr;
    private String memberNmEn;
    private String passwd;
    private String passwdCheck;
    private String ogdpInstCd;
    private String ogdpInstNm;
    private String emlAddr;
    private String ofcTelno;
    private String ofcFxno;
    private String mblTelno;
    private String prvcClctAgreYn;
    private String prvcPvsnAgreYn;
    private String applyDt;
    private String applyCont;
    private String joinAprvStts;
    private String joinAprvSttsNm;
    private String joinAutzr;
    private String joinAprvDt;
    private String corpYn;
    private String jbpsCd;
    private String jbpsNm;
    private String ogdpDeptCd;
    private String ogdpDeptNm;
    private String mbrZip;
    private String mbrAddr;
    private String mbrDaddr;
    private String ofcZip;
    private String ofcAddr;
    private String ofcDaddr;
    private String whdwlYn;
    private String useYn;
    private String userId;

    private String mbrAddrMerged;
    private String ofcAddrMerged;

    public String getMemberId() {
        return memberId;
    }

    public void setMemberId(String memberId) {
        this.memberId = memberId;
    }

    public String getMemberNmKr() {
        return memberNmKr;
    }

    public void setMemberNmKr(String memberNmKr) {
        this.memberNmKr = memberNmKr;
    }

    public String getMemberNmEn() {
        return memberNmEn;
    }

    public void setMemberNmEn(String memberNmEn) {
        this.memberNmEn = memberNmEn;
    }

    public String getPasswd() {
        return passwd;
    }

    public void setPasswd(String passwd) {
        this.passwd = passwd;
    }

    public String getPasswdCheck() {
        return passwdCheck;
    }

    public void setPasswdCheck(String passwdCheck) {
        this.passwdCheck = passwdCheck;
    }

    public String getOgdpInstCd() {
        return ogdpInstCd;
    }

    public void setOgdpInstCd(String ogdpInstCd) {
        this.ogdpInstCd = ogdpInstCd;
    }

    public String getOgdpInstNm() {
        return ogdpInstNm;
    }

    public void setOgdpInstNm(String ogdpInstNm) {
        this.ogdpInstNm = ogdpInstNm;
    }

    public String getEmlAddr() {
        return emlAddr;
    }

    public void setEmlAddr(String emlAddr) {
        this.emlAddr = emlAddr;
    }

    public String getOfcTelno() {
        return ofcTelno;
    }

    public void setOfcTelno(String ofcTelno) {
        this.ofcTelno = ofcTelno;
    }

    public String getOfcFxno() {
        return ofcFxno;
    }

    public void setOfcFxno(String ofcFxno) {
        this.ofcFxno = ofcFxno;
    }

    public String getMblTelno() {
        return mblTelno;
    }

    public void setMblTelno(String mblTelno) {
        this.mblTelno = mblTelno;
    }

    public String getPrvcClctAgreYn() {
        return prvcClctAgreYn;
    }

    public void setPrvcClctAgreYn(String prvcClctAgreYn) {
        this.prvcClctAgreYn = prvcClctAgreYn;
    }

    public String getPrvcPvsnAgreYn() {
        return prvcPvsnAgreYn;
    }

    public void setPrvcPvsnAgreYn(String prvcPvsnAgreYn) {
        this.prvcPvsnAgreYn = prvcPvsnAgreYn;
    }

    public String getApplyDt() {
        return applyDt;
    }

    public void setApplyDt(String applyDt) {
        this.applyDt = applyDt;
    }

    public String getApplyCont() {
        return applyCont;
    }

    public void setApplyCont(String applyCont) {
        this.applyCont = applyCont;
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

    public String getJoinAutzr() {
        return joinAutzr;
    }

    public void setJoinAutzr(String joinAutzr) {
        this.joinAutzr = joinAutzr;
    }

    public String getJoinAprvDt() {
        return joinAprvDt;
    }

    public void setJoinAprvDt(String joinAprvDt) {
        this.joinAprvDt = joinAprvDt;
    }

    public String getCorpYn() {
        return corpYn;
    }

    public void setCorpYn(String corpYn) {
        this.corpYn = corpYn;
    }

    public String getJbpsCd() {
        return jbpsCd;
    }

    public void setJbpsCd(String jbpsCd) {
        this.jbpsCd = jbpsCd;
    }

    public String getJbpsNm() {
        return jbpsNm;
    }

    public void setJbpsNm(String jbpsNm) {
        this.jbpsNm = jbpsNm;
    }

    public String getOgdpDeptCd() {
        return ogdpDeptCd;
    }

    public void setOgdpDeptCd(String ogdpDeptCd) {
        this.ogdpDeptCd = ogdpDeptCd;
    }

    public String getOgdpDeptNm() {
        return ogdpDeptNm;
    }

    public void setOgdpDeptNm(String ogdpDeptNm) {
        this.ogdpDeptNm = ogdpDeptNm;
    }

    public String getMbrZip() {
        return mbrZip;
    }

    public void setMbrZip(String mbrZip) {
        this.mbrZip = mbrZip;
    }

    public String getMbrAddr() {
        return mbrAddr;
    }

    public void setMbrAddr(String mbrAddr) {
        this.mbrAddr = mbrAddr;
    }

    public String getMbrDaddr() {
        return mbrDaddr;
    }

    public void setMbrDaddr(String mbrDaddr) {
        this.mbrDaddr = mbrDaddr;
    }

    public String getOfcZip() {
        return ofcZip;
    }

    public void setOfcZip(String ofcZip) {
        this.ofcZip = ofcZip;
    }

    public String getOfcAddr() {
        return ofcAddr;
    }

    public void setOfcAddr(String ofcAddr) {
        this.ofcAddr = ofcAddr;
    }

    public String getOfcDaddr() {
        return ofcDaddr;
    }

    public void setOfcDaddr(String ofcDaddr) {
        this.ofcDaddr = ofcDaddr;
    }

    public String getWhdwlYn() {
        return whdwlYn;
    }

    public void setWhdwlYn(String whdwlYn) {
        this.whdwlYn = whdwlYn;
    }

    public String getUseYn() {
        return useYn;
    }

    public void setUseYn(String useYn) {
        this.useYn = useYn;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getMbrAddrMerged() {
        return mbrAddrMerged;
    }

    public void setMbrAddrMerged(String mbrAddrMerged) {
        this.mbrAddrMerged = mbrAddrMerged;
    }

    public String getOfcAddrMerged() {
        return ofcAddrMerged;
    }

    public void setOfcAddrMerged(String ofcAddrMerged) {
        this.ofcAddrMerged = ofcAddrMerged;
    }
}
