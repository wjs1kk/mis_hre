package com.jnv.ast.vo;

import org.apache.ibatis.type.Alias;

import com.jnv.jncore.vo.CommonVO;

@Alias("resourcesAddVO")
public class ResourcesAddVO extends CommonVO {

    private String astNo;
    private String astNm;
    private String astAlias;
    private String astDivCd;
    private String astDivCdNm;
    private String rgstDt;
    private String astUseUserIdNm;
    private String astUseUserId;
    private String astMngDeptCd;
    private String astMngDeptCdNm;
    private String astMngPicId;
    private String astMngPicIdNm;
    private String astMftrNm;
    private String astQty;
    private String astUom;
    private String astDesc;
    private String astRmk;
    private String atchFileId;
    private String astMngPicIdNember;

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

    public String getAstAlias() {
        return astAlias;
    }

    public void setAstAlias(String astAlias) {
        this.astAlias = astAlias;
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

    public String getAstMftrNm() {
        return astMftrNm;
    }

    public void setAstMftrNm(String astMftrNm) {
        this.astMftrNm = astMftrNm;
    }

    public String getAstQty() {
        return astQty;
    }

    public void setAstQty(String astQty) {
        this.astQty = astQty;
    }

    public String getAstUom() {
        return astUom;
    }

    public void setAstUom(String astUom) {
        this.astUom = astUom;
    }

    public String getAstDesc() {
        return astDesc;
    }

    public void setAstDesc(String astDesc) {
        this.astDesc = astDesc;
    }

    public String getAstRmk() {
        return astRmk;
    }

    public void setAstRmk(String astRmk) {
        this.astRmk = astRmk;
    }

    public String getAtchFileId() {
        return atchFileId;
    }

    public void setAtchFileId(String atchFileId) {
        this.atchFileId = atchFileId;
    }

    public String getAstMngPicIdNember() {
        return astMngPicIdNember;
    }

    public void setAstMngPicIdNember(String astMngPicIdNember) {
        this.astMngPicIdNember = astMngPicIdNember;
    }

    public String getAstUseUserIdNm() {
        return astUseUserIdNm;
    }

    public void setAstUseUserIdNm(String astUseUserIdNm) {
        this.astUseUserIdNm = astUseUserIdNm;
    }

    public String getAstUseUserId() {
        return astUseUserId;
    }

    public void setAstUseUserId(String astUseUserId) {
        this.astUseUserId = astUseUserId;
    }

}
