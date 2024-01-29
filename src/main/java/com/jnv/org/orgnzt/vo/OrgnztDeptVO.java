package com.jnv.org.orgnzt.vo;

import org.apache.ibatis.type.Alias;

import com.jnv.jncore.vo.CommonVO;

@Alias("orgnztDeptVO")
public class OrgnztDeptVO extends CommonVO{

    private String orgnCd;
    private String deptCd;
    private String deptNm;
    private String deptLdrId;
    private String deptLdrNm;
    private String deptMngrId;
    private String deptMngrNm;
    private String upDeptCd;
    private String upDeptNm;

    private String stdYmd;

    public String getOrgnCd() {
        return orgnCd;
    }

    public void setOrgnCd(String orgnCd) {
        this.orgnCd = orgnCd;
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

    public String getDeptMngrId() {
        return deptMngrId;
    }

    public void setDeptMngrId(String deptMngrId) {
        this.deptMngrId = deptMngrId;
    }

    public String getDeptMngrNm() {
        return deptMngrNm;
    }

    public void setDeptMngrNm(String deptMngrNm) {
        this.deptMngrNm = deptMngrNm;
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

}
