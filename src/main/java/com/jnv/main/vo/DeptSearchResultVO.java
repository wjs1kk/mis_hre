package com.jnv.main.vo;

import org.apache.ibatis.type.Alias;

import com.jnv.jncore.vo.CommonVO;

@Alias("deptSearchResultVO")
public class DeptSearchResultVO extends CommonVO {

    private String id;
    private String parent;
    private String deptCd;
    private String deptNm;
    private String deptLdrId;
    private String deptLdrNm;
    private String deptMngrId;
    private String deptMngrNm;
    private String deptDesc;
    private String useYn;
    private String ordSn;
    private String upDeptCd;
    private String upDeptNm;
    private String level;
    private String matched;
    private String deptNmPath;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getParent() {
        return parent;
    }

    public void setParent(String parent) {
        this.parent = parent;
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

    public String getDeptDesc() {
        return deptDesc;
    }

    public void setDeptDesc(String deptDesc) {
        this.deptDesc = deptDesc;
    }

    public String getUseYn() {
        return useYn;
    }

    public void setUseYn(String useYn) {
        this.useYn = useYn;
    }

    public String getOrdSn() {
        return ordSn;
    }

    public void setOrdSn(String ordSn) {
        this.ordSn = ordSn;
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

    public String getLevel() {
        return level;
    }

    public void setLevel(String level) {
        this.level = level;
    }

    public String getMatched() {
        return matched;
    }

    public void setMatched(String matched) {
        this.matched = matched;
    }

    public String getDeptNmPath() {
        return deptNmPath;
    }

    public void setDeptNmPath(String deptNmPath) {
        this.deptNmPath = deptNmPath;
    }
}
