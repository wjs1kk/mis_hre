package com.jnv.common.vo;

import org.apache.ibatis.type.Alias;

@Alias("commentVO")
public class CommentVO {
    private String commentId;
    private String infoType;
    private String infoMngId;
    private String eqId;
    private String eqVer;
    private String commentText;
    private String rgstId;
    private String rgstDt;
    private String rgstNm;
    private String updtId;
    private String updtDt;
    private String eqBbsId;

    public String getCommentId() {
        return commentId;
    }

    public void setCommentId(String commentId) {
        this.commentId = commentId;
    }

    public String getInfoType() {
        return infoType;
    }

    public void setInfoType(String infoType) {
        this.infoType = infoType;
    }

    public String getInfoMngId() {
        return infoMngId;
    }

    public void setInfoMngId(String infoMngId) {
        this.infoMngId = infoMngId;
    }

    public String getEqId() {
        return eqId;
    }

    public void setEqId(String eqId) {
        this.eqId = eqId;
    }

    public String getEqVer() {
        return eqVer;
    }

    public void setEqVer(String eqVer) {
        this.eqVer = eqVer;
    }

    public String getCommentText() {
        return commentText;
    }

    public void setCommentText(String commentText) {
        this.commentText = commentText;
    }

    public String getRgstId() {
        return rgstId;
    }

    public void setRgstId(String rgstId) {
        this.rgstId = rgstId;
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

    public String getUpdtDt() {
        return updtDt;
    }

    public void setUpdtDt(String updtDt) {
        this.updtDt = updtDt;
    }

    public String getEqBbsId() {
        return eqBbsId;
    }

    public void setEqBbsId(String eqBbsId) {
        this.eqBbsId = eqBbsId;
    }

    public String getRgstNm() {
        return rgstNm;
    }

    public void setRgstNm(String rgstNm) {
        this.rgstNm = rgstNm;
    }

}
