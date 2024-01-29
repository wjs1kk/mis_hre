package com.jnv.mi.vo;

import com.jnv.jncore.vo.CommonVO;
import org.apache.ibatis.type.Alias;

@Alias("memberModifyVO")
public class MemberModifyVO extends CommonVO {

    private String memberId; // 회원ID
    private String memberNmKr; // 한글 이름
    private String memberNmEn; // 영문 이름
    private String passwd; // pw
    private String emlAddr; // 이메일 주소
    private String mblTelno; // 연락처
    private String mbrAddr; // 주소
    private String mbrDaddr; // 상세주소
    private String ogdpInstNm; // 소속기관명
    private String ogdpInstCd; // 소속기관코드
    private String jbpsCd; // 직위코드
    private String jbpsNm; // 직위명
    private String ogdpDeptCd; // 부서코드
    private String ogdpDeptNm; // 부서명
    private String ofcTelno; // 사무실전화번호
    private String ofcFxno; // 사무실 팩스번호
    private String ofcAddr; // 사무실 주소
    private String ofcDaddr; // 사무실 상세주소
    private String whdwlYn; // 탈퇴여부
    private String updtId; // 수정ID
    private String updtIp;
    private String updtDt;
    private String pwExpireDt; // 비밀번호 만료일
    private String rePasswd; // 비밀번호 재확인
    private String mbrZip; // 우편번호
    private String ofcZip; // 사무실 우편번호
    private String emlAddrLocal;
    private String emlAddrDomain;
    private String newPasswd;
    private String checkCode;
    private String emailVerified;
    private String passwdCheck;
    private String userId;
    private String rgstId;
    private String oldEmlAddr;

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

    public String getEmlAddr() {
        return emlAddr;
    }

    public void setEmlAddr(String emlAddr) {
        this.emlAddr = emlAddr;
    }

    public String getMblTelno() {
        return mblTelno;
    }

    public void setMblTelno(String mblTelno) {
        this.mblTelno = mblTelno;
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

    public String getOgdpInstNm() {
        return ogdpInstNm;
    }

    public void setOgdpInstNm(String ogdpInstNm) {
        this.ogdpInstNm = ogdpInstNm;
    }

    public String getOgdpInstCd() {
        return ogdpInstCd;
    }

    public void setOgdpInstCd(String ogdpInstCd) {
        this.ogdpInstCd = ogdpInstCd;
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

    public String getPwExpireDt() {
        return pwExpireDt;
    }

    public void setPwExpireDt(String pwExpireDt) {
        this.pwExpireDt = pwExpireDt;
    }

    public String getRePasswd() {
        return rePasswd;
    }

    public void setRePasswd(String rePasswd) {
        this.rePasswd = rePasswd;
    }

    public String getMbrZip() {
        return mbrZip;
    }

    public void setMbrZip(String mbrZip) {
        this.mbrZip = mbrZip;
    }

    public String getOfcZip() {
        return ofcZip;
    }

    public void setOfcZip(String ofcZip) {
        this.ofcZip = ofcZip;
    }

    public String getNewPasswd() {
        return newPasswd;
    }

    public void setNewPasswd(String newPasswd) {
        this.newPasswd = newPasswd;
    }

    public String getCheckCode() {
        return checkCode;
    }

    public void setCheckCode(String checkCode) {
        this.checkCode = checkCode;
    }

    public String getEmailVerified() {
        return emailVerified;
    }

    public void setEmailVerified(String emailVerified) {
        this.emailVerified = emailVerified;
    }

    public String getPasswdCheck() {
        return passwdCheck;
    }

    public void setPasswdCheck(String passwdCheck) {
        this.passwdCheck = passwdCheck;
    }

    public String getEmlAddrLocal() {
        return emlAddrLocal;
    }

    public void setEmlAddrLocal(String emlAddrLocal) {
        this.emlAddrLocal = emlAddrLocal;
    }

    public String getEmlAddrDomain() {
        return emlAddrDomain;
    }

    public void setEmlAddrDomain(String emlAddrDomain) {
        this.emlAddrDomain = emlAddrDomain;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getRgstId() {
        return rgstId;
    }

    public void setRgstId(String rgstId) {
        this.rgstId = rgstId;
    }

    public String getOldEmlAddr() {
        return oldEmlAddr;
    }

    public void setOldEmlAddr(String oldEmlAddr) {
        this.oldEmlAddr = oldEmlAddr;
    }
}
