package com.jnv.sm.vo;

import org.apache.ibatis.type.Alias;

import com.jnv.jncore.vo.CommonVO;
/**
최초 개발 작성
**************************************************************************************
년월 : 2020-01-02 KIMKT
버전 : 0.1
* 부서정보 VO
**************************************************************************************
**/
@Alias("deptVO")
public class DeptVO extends CommonVO{

    private String rowNum;

    private String deptCode;
    private String beforeDeptCode;
    private String deptNameKr;
    private String deptFullNameKr;
    private String deptNameEn;
    private String upperDeptCode;
    private String workplaceName;
    private String workplaceAddressKr;
    private String workplaceAddressEn;
    private String sortInteger;
    private String useYn;
    private String activeStartDate;
    private String activeEndDate;
    private String leaderUserId;
    private String deptLevel;
    private String docNumId;
    private String regUserId;
    private String regUserIp;
    private String regYmd;
    private String mdfcnUserId;
    private String mdfcnUserIp;
    private String mdfcnYmd;
    private String inDeptDegree;
    private String inDeptSeq;

    private String sortOrdr        ;
    private String useYmd          ;
    private String endYmd          ;
    private String deptMngUserId ;
    private String rgstId          ;
    private String rgstIp          ;
    private String rgstDt          ;
    private String updtId          ;
    private String updtIp          ;
    private String updtDt          ;

    public String getInDeptDegree() {
        return inDeptDegree;
    }
    public void setInDeptDegree(String inDeptDegree) {
        this.inDeptDegree = inDeptDegree;
    }
    public String getInDeptSeq() {
        return inDeptSeq;
    }
    public void setInDeptSeq(String inDeptSeq) {
        this.inDeptSeq = inDeptSeq;
    }
    public String getBeforeDeptCode() {
        return beforeDeptCode;
    }
    public void setBeforeDeptCode(String beforeDeptCode) {
        this.beforeDeptCode = beforeDeptCode;
    }
    public String getRowNum() {
        return rowNum;
    }
    public void setRowNum(String rowNum) {
        this.rowNum = rowNum;
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
    public String getDeptFullNameKr() {
        return deptFullNameKr;
    }
    public void setDeptFullNameKr(String deptFullNameKr) {
        this.deptFullNameKr = deptFullNameKr;
    }
    public String getDeptNameEn() {
        return deptNameEn;
    }
    public void setDeptNameEn(String deptNameEn) {
        this.deptNameEn = deptNameEn;
    }
    public String getUpperDeptCode() {
        return upperDeptCode;
    }
    public void setUpperDeptCode(String upperDeptCode) {
        this.upperDeptCode = upperDeptCode;
    }
    public String getWorkplaceName() {
        return workplaceName;
    }
    public void setWorkplaceName(String workplaceName) {
        this.workplaceName = workplaceName;
    }
    public String getWorkplaceAddressKr() {
        return workplaceAddressKr;
    }
    public void setWorkplaceAddressKr(String workplaceAddressKr) {
        this.workplaceAddressKr = workplaceAddressKr;
    }
    public String getWorkplaceAddressEn() {
        return workplaceAddressEn;
    }
    public void setWorkplaceAddressEn(String workplaceAddressEn) {
        this.workplaceAddressEn = workplaceAddressEn;
    }
    public String getSortInteger() {
        return sortInteger;
    }
    public void setSortInteger(String sortInteger) {
        this.sortInteger = sortInteger;
    }
    public String getActiveStartDate() {
        return activeStartDate;
    }
    public void setActiveStartDate(String activeStartDate) {
        this.activeStartDate = activeStartDate;
    }
    public String getActiveEndDate() {
        return activeEndDate;
    }
    public void setActiveEndDate(String activeEndDate) {
        this.activeEndDate = activeEndDate;
    }
    public String getLeaderUserId() {
        return leaderUserId;
    }
    public void setLeaderUserId(String leaderUserId) {
        this.leaderUserId = leaderUserId;
    }
    public String getDeptLevel() {
        return deptLevel;
    }
    public void setDeptLevel(String deptLevel) {
        this.deptLevel = deptLevel;
    }
    public String getDocNumId() {
        return docNumId;
    }
    public void setDocNumId(String docNumId) {
        this.docNumId = docNumId;
    }
    public String getUseYn() {
        return useYn;
    }
    public void setUseYn(String useYn) {
        this.useYn = useYn;
    }
    public String getRegUserId() {
        return regUserId;
    }
    public void setRegUserId(String regUserId) {
        this.regUserId = regUserId;
    }
    public String getRegUserIp() {
        return regUserIp;
    }
    public void setRegUserIp(String regUserIp) {
        this.regUserIp = regUserIp;
    }
    public String getRegYmd() {
        return regYmd;
    }
    public void setRegYmd(String regYmd) {
        this.regYmd = regYmd;
    }
    public String getMdfcnUserId() {
        return mdfcnUserId;
    }
    public void setMdfcnUserId(String mdfcnUserId) {
        this.mdfcnUserId = mdfcnUserId;
    }
    public String getMdfcnUserIp() {
        return mdfcnUserIp;
    }
    public void setMdfcnUserIp(String mdfcnUserIp) {
        this.mdfcnUserIp = mdfcnUserIp;
    }
    public String getMdfcnYmd() {
        return mdfcnYmd;
    }
    public void setMdfcnYmd(String mdfcnYmd) {
        this.mdfcnYmd = mdfcnYmd;
    }
    public String getSortOrdr() {
        return sortOrdr;
    }
    public void setSortOrdr(String sortOrdr) {
        this.sortOrdr = sortOrdr;
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
    public String getDeptMngUserId() {
        return deptMngUserId;
    }
    public void setDeptMngUserId(String deptMngUserId) {
        this.deptMngUserId = deptMngUserId;
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
}