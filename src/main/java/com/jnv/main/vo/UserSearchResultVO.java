package com.jnv.main.vo;

import org.apache.ibatis.type.Alias;

import com.jnv.jncore.vo.CommonVO;

@Alias("userSearchPopupVO")
public class UserSearchResultVO extends CommonVO {

    private String userId;
    private String memberId;
    private String userNmKr;
    private String memberNmKr;
    private String memberNmEn;
    private String ogdpInstCd;
    private String ogdpInstNm;
    private String emlAddr;
    private String ofcTelno;
    private String ofcFxno;
    private String mblTelno;
    private String joinAplyStts;
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

    public String getJoinAplyStts() {
        return joinAplyStts;
    }

    public void setJoinAplyStts(String joinAplyStts) {
        this.joinAplyStts = joinAplyStts;
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
}
