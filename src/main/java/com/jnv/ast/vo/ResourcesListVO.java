package com.jnv.ast.vo;

import org.apache.ibatis.type.Alias;

import com.jnv.jncore.vo.CommonVO;

@Alias("resourcesListVO")
public class ResourcesListVO extends CommonVO {

    private String astNo; // 자원번호
    private String astNm; // 자원명
    private String astDivCd; // 자원구분코드
    private String astDivCdNm;
    private String astMngPicId; // 관리담당자ID
    private String astMngPicIdNm;
    private String astQty; // 수량
    private String rgstrId; // 등록자 id
    private String rgstrIdNm;
    private String rgstDt; // 등록일시
    private String astMngDeptCd;
    private String astMngDeptCdNm;

    public String getAstNo() {
        return astNo;
    }

    public void setAstNo(String astNo) {
        this.astNo = astNo;
    }

    public String getAstNm() {
        return astNm;
    }

    public void setAstNm(String astNm) {
        this.astNm = astNm;
    }

    public String getAstDivCd() {
        return astDivCd;
    }

    public void setAstDivCd(String astDivCd) {
        this.astDivCd = astDivCd;
    }

    public String getAstDivCdNm() {
        return astDivCdNm;
    }

    public void setAstDivCdNm(String astDivCdNm) {
        this.astDivCdNm = astDivCdNm;
    }

    public String getAstMngPicId() {
        return astMngPicId;
    }

    public void setAstMngPicId(String astMngPicId) {
        this.astMngPicId = astMngPicId;
    }

    public String getAstMngPicIdNm() {
        return astMngPicIdNm;
    }

    public void setAstMngPicIdNm(String astMngPicIdNm) {
        this.astMngPicIdNm = astMngPicIdNm;
    }

    public String getAstQty() {
        return astQty;
    }

    public void setAstQty(String astQty) {
        this.astQty = astQty;
    }

    public String getRgstrId() {
        return rgstrId;
    }

    public void setRgstrId(String rgstrId) {
        this.rgstrId = rgstrId;
    }

    public String getRgstrIdNm() {
        return rgstrIdNm;
    }

    public void setRgstrIdNm(String rgstrIdNm) {
        this.rgstrIdNm = rgstrIdNm;
    }

    public String getRgstDt() {
        return rgstDt;
    }

    public void setRgstDt(String rgstDt) {
        this.rgstDt = rgstDt;
    }

    public String getAstMngDeptCd() {
        return astMngDeptCd;
    }

    public void setAstMngDeptCd(String astMngDeptCd) {
        this.astMngDeptCd = astMngDeptCd;
    }

    public String getAstMngDeptCdNm() {
        return astMngDeptCdNm;
    }

    public void setAstMngDeptCdNm(String astMngDeptCdNm) {
        this.astMngDeptCdNm = astMngDeptCdNm;
    }

}
