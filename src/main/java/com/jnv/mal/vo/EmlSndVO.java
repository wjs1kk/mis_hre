package com.jnv.mal.vo;

import org.apache.ibatis.type.Alias;

import com.jnv.jncore.vo.CommonVO;

@Alias("emlSndVO")
public class EmlSndVO extends CommonVO {

    private String emlTmpltId;
    private String emlTtl;
    private String sndCn;
    private String atchFileId;

    private String rcvUserId;
    private String rcvUserNm;
    private String deptCd;
    private String deptNm;
    private String emlAddr;
    private String sndDt;
    private String sndNm;
    private String sndSttsCd;
    private String sndSttsNm;
    private String rcvDt;
    private String rcvSttsCd;
    private String rcvNo;
    private String rcvEmlAddr;

    private String emlTmpltNm;
    private String emlTmpltCn;
    private String useYn;

    private String emlId;
    private String sndTrgtCnt;

    private String memberId;
    private String memberNmKr;

    private String rgstrId;
    private String rtstDt;
    private String updtrId;
    private String updtDt;


    public String getSndNm() {
        return sndNm;
    }

    public void setSndNm(String sndNm) {
        this.sndNm = sndNm;
    }

    public String getRcvEmlAddr() {
        return rcvEmlAddr;
    }

    public void setRcvEmlAddr(String rcvEmlAddr) {
        this.rcvEmlAddr = rcvEmlAddr;
    }

    public String getSndSttsNm() {
        return sndSttsNm;
    }

    public void setSndSttsNm(String sndSttsNm) {
        this.sndSttsNm = sndSttsNm;
    }

    public String getRcvNo() {
        return rcvNo;
    }

    public void setRcvNo(String rcvNo) {
        this.rcvNo = rcvNo;
    }

    public String getRgstrId() {
        return rgstrId;
    }

    public void setRgstrId(String rgstrId) {
        this.rgstrId = rgstrId;
    }

    public String getRtstDt() {
        return rtstDt;
    }

    public void setRtstDt(String rtstDt) {
        this.rtstDt = rtstDt;
    }

    public String getUpdtrId() {
        return updtrId;
    }

    public void setUpdtrId(String updtrId) {
        this.updtrId = updtrId;
    }

    public String getUpdtDt() {
        return updtDt;
    }

    public void setUpdtDt(String updtDt) {
        this.updtDt = updtDt;
    }

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

    public String getSndTrgtCnt() {
        return sndTrgtCnt;
    }

    public void setSndTrgtCnt(String sndTrgtCnt) {
        this.sndTrgtCnt = sndTrgtCnt;
    }

    public String getDeptNm() {
        return deptNm;
    }

    public void setDeptNm(String deptNm) {
        this.deptNm = deptNm;
    }

    public String getEmlId() {
        return emlId;
    }

    public void setEmlId(String emlId) {
        this.emlId = emlId;
    }

    public String getEmlTmpltId() {
        return emlTmpltId;
    }

    public void setEmlTmpltId(String emlTmpltId) {
        this.emlTmpltId = emlTmpltId;
    }

    public String getEmlTtl() {
        return emlTtl;
    }

    public void setEmlTtl(String emlTtl) {
        this.emlTtl = emlTtl;
    }

    public String getSndCn() {
        return sndCn;
    }

    public void setSndCn(String sndCn) {
        this.sndCn = sndCn;
    }

    public String getAtchFileId() {
        return atchFileId;
    }

    public void setAtchFileId(String atchFileId) {
        this.atchFileId = atchFileId;
    }

    public String getRcvUserId() {
        return rcvUserId;
    }

    public void setRcvUserId(String rcvUserId) {
        this.rcvUserId = rcvUserId;
    }

    public String getRcvUserNm() {
        return rcvUserNm;
    }

    public void setRcvUserNm(String rcvUserNm) {
        this.rcvUserNm = rcvUserNm;
    }

    public String getDeptCd() {
        return deptCd;
    }

    public void setDeptCd(String deptCd) {
        this.deptCd = deptCd;
    }

    public String getEmlAddr() {
        return emlAddr;
    }

    public void setEmlAddr(String emlAddr) {
        this.emlAddr = emlAddr;
    }

    public String getSndDt() {
        return sndDt;
    }

    public void setSndDt(String sndDt) {
        this.sndDt = sndDt;
    }

    public String getSndSttsCd() {
        return sndSttsCd;
    }

    public void setSndSttsCd(String sndSttsCd) {
        this.sndSttsCd = sndSttsCd;
    }

    public String getRcvDt() {
        return rcvDt;
    }

    public void setRcvDt(String rcvDt) {
        this.rcvDt = rcvDt;
    }

    public String getRcvSttsCd() {
        return rcvSttsCd;
    }

    public void setRcvSttsCd(String rcvSttsCd) {
        this.rcvSttsCd = rcvSttsCd;
    }

    public String getEmlTmpltNm() {
        return emlTmpltNm;
    }

    public void setEmlTmpltNm(String emlTmpltNm) {
        this.emlTmpltNm = emlTmpltNm;
    }

    public String getEmlTmpltCn() {
        return emlTmpltCn;
    }

    public void setEmlTmpltCn(String emlTmpltCn) {
        this.emlTmpltCn = emlTmpltCn;
    }

    public String getUseYn() {
        return useYn;
    }

    public void setUseYn(String useYn) {
        this.useYn = useYn;
    }

}
