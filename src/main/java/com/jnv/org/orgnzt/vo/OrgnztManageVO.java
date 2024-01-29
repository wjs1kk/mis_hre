package com.jnv.org.orgnzt.vo;

import org.apache.ibatis.type.Alias;

import com.jnv.jncore.vo.CommonVO;

@Alias("orgnztManageVO")
public class OrgnztManageVO extends CommonVO {

    private String orgnCd; // 조직코드
    private String orgnNm; // 조직명
    private String orgnDc; // 조직설명
    private String orgnStdYmd; // 조직기준일 -> 테이블존재하지만 stdYmd로 사용합니다.

    private String deptCd; // 부서코드
    private String deptNm;
    private String enableYn; // 활성화여부
    private String upOrgnCd; // 상위조직코드
    private String upOrgnNm;

    private String deptLdrId; // 부서장
    private String deptLdrNm;

    private String upDeptCd; // 상위부서코드
    private String upDeptNm;

    private String stdYmd; // 기준일
    private String level; // 트리구조 레벨
    private String ordNo; // 정렬순서

    public String getOrgnCd() {
        return orgnCd;
    }

    public void setOrgnCd(String orgnCd) {
        this.orgnCd = orgnCd;
    }

    public String getOrgnNm() {
        return orgnNm;
    }

    public void setOrgnNm(String orgnNm) {
        this.orgnNm = orgnNm;
    }

    public String getOrgnDc() {
        return orgnDc;
    }

    public void setOrgnDc(String orgnDc) {
        this.orgnDc = orgnDc;
    }

    public String getOrgnStdYmd() {
        return orgnStdYmd;
    }

    public void setOrgnStdYmd(String orgnStdYmd) {
        this.orgnStdYmd = orgnStdYmd;
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

    public String getEnableYn() {
        return enableYn;
    }

    public void setEnableYn(String enableYn) {
        this.enableYn = enableYn;
    }

    public String getUpOrgnCd() {
        return upOrgnCd;
    }

    public void setUpOrgnCd(String upOrgnCd) {
        this.upOrgnCd = upOrgnCd;
    }

    public String getUpOrgnNm() {
        return upOrgnNm;
    }

    public void setUpOrgnNm(String upOrgnNm) {
        this.upOrgnNm = upOrgnNm;
    }

    public String getDeptLdrId() {
        return deptLdrId;
    }

    public void setDeptLdrId(String deptLdrId) {
        this.deptLdrId = deptLdrId;
    }

    public String getDeptLdrNm() {
        return deptLdrNm;
    }

    public void setDeptLdrNm(String deptLdrNm) {
        this.deptLdrNm = deptLdrNm;
    }

    public String getUpDeptCd() {
        return upDeptCd;
    }

    public void setUpDeptCd(String upDeptCd) {
        this.upDeptCd = upDeptCd;
    }

    public String getUpDeptNm() {
        return upDeptNm;
    }

    public void setUpDeptNm(String upDeptNm) {
        this.upDeptNm = upDeptNm;
    }

    public String getStdYmd() {
        return stdYmd;
    }

    public void setStdYmd(String stdYmd) {
        this.stdYmd = stdYmd;
    }

    public String getLevel() {
        return level;
    }

    public void setLevel(String level) {
        this.level = level;
    }

    public String getOrdNo() {
        return ordNo;
    }

    public void setOrdNo(String ordNo) {
        this.ordNo = ordNo;
    }

}
