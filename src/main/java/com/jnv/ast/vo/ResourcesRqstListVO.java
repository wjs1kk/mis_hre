package com.jnv.ast.vo;

import org.apache.ibatis.type.Alias;

import com.jnv.jncore.vo.CommonVO;

@Alias("resourcesRqstListVO")
public class ResourcesRqstListVO extends CommonVO {

    private String astRqstId; // 자원번호
    private String astSrlNo; // 자원명
    private String astNo; // 자원구분코드
    private String astRqstDeptCd;
    private String astRqstUserId; // 관리담당자ID
    private String astRqstUserIdNm;
    private String astUseBgnYmd;
    private String astRtnDueYmd;
    private String astRtnYmd;
    private String astSttsCd;
    private String rgstrId; // 등록자 id
    private String rgstDt; // 등록일시
    private String updtrId;
    private String updtDt;
    private String astQty;
    private String astUseYmd;
    private String astNm;
    private String rgstrIdNm;
    private String astRtnDueStrYmd;
    private String astRtnDueEndYmd;
    private String astDivCd;
    private String astDivCdNm;

    public String getAstQty() {
        return astQty;
    }

    public void setAstQty(String astQty) {
        this.astQty = astQty;
    }

    public String getAstUseYmd() {
        return astUseYmd;
    }

    public void setAstUseYmd(String astUseYmd) {
        this.astUseYmd = astUseYmd;
    }

    public String getAstNm() {
        return astNm;
    }

    public void setAstNm(String astNm) {
        this.astNm = astNm;
    }

    public String getAstRqstId() {
        return astRqstId;
    }

    public void setAstRqstId(String astRqstId) {
        this.astRqstId = astRqstId;
    }

    public String getAstSrlNo() {
        return astSrlNo;
    }

    public void setAstSrlNo(String astSrlNo) {
        this.astSrlNo = astSrlNo;
    }

    public String getAstNo() {
        return astNo;
    }

    public void setAstNo(String astNo) {
        this.astNo = astNo;
    }

    public String getAstRqstDeptCd() {
        return astRqstDeptCd;
    }

    public void setAstRqstDeptCd(String astRqstDeptCd) {
        this.astRqstDeptCd = astRqstDeptCd;
    }

    public String getAstRqstUserId() {
        return astRqstUserId;
    }

    public void setAstRqstUserId(String astRqstUserId) {
        this.astRqstUserId = astRqstUserId;
    }

    public String getAstUseBgnYmd() {
        return astUseBgnYmd;
    }

    public void setAstUseBgnYmd(String astUseBgnYmd) {
        this.astUseBgnYmd = astUseBgnYmd;
    }

    public String getAstRtnDueYmd() {
        return astRtnDueYmd;
    }

    public void setAstRtnDueYmd(String astRtnDueYmd) {
        this.astRtnDueYmd = astRtnDueYmd;
    }

    public String getAstRtnYmd() {
        return astRtnYmd;
    }

    public void setAstRtnYmd(String astRtnYmd) {
        this.astRtnYmd = astRtnYmd;
    }

    public String getAstSttsCd() {
        return astSttsCd;
    }

    public void setAstSttsCd(String astSttsCd) {
        this.astSttsCd = astSttsCd;
    }

    public String getRgstrId() {
        return rgstrId;
    }

    public void setRgstrId(String rgstrId) {
        this.rgstrId = rgstrId;
    }

    public String getRgstDt() {
        return rgstDt;
    }

    public void setRgstDt(String rgstDt) {
        this.rgstDt = rgstDt;
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

    public String getRgstrIdNm() {
        return rgstrIdNm;
    }

    public void setRgstrIdNm(String rgstrIdNm) {
        this.rgstrIdNm = rgstrIdNm;
    }

    public String getAstRtnDueStrYmd() {
        return astRtnDueStrYmd;
    }

    public void setAstRtnDueStrYmd(String astRtnDueStrYmd) {
        this.astRtnDueStrYmd = astRtnDueStrYmd;
    }

    public String getAstRtnDueEndYmd() {
        return astRtnDueEndYmd;
    }

    public void setAstRtnDueEndYmd(String astRtnDueEndYmd) {
        this.astRtnDueEndYmd = astRtnDueEndYmd;
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

    public String getAstRqstUserIdNm() {
        return astRqstUserIdNm;
    }

    public void setAstRqstUserIdNm(String astRqstUserIdNm) {
        this.astRqstUserIdNm = astRqstUserIdNm;
    }

}
