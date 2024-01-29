package com.jnv.bbs.vo;

import org.apache.ibatis.type.Alias;

import com.jnv.jncore.vo.CommonVO;

@Alias("boardMasterVO")
public class BoardMasterVO extends CommonVO {

    private String bbsId;
    private String bbsNm;
    private String bbsIntrcn;
    private String bbsTyCd;
    private String bbsTyNm;

    private String replyYn;
    private String fileAtchYn;
    private String useYn;
    private String rgstrId;
    private String rgstDt;
    private String updtrId;
    private String updtDt;

    private String answrYn;
    private String rcmdYn;

    public String getBbsId() {
        return bbsId;
    }

    public void setBbsId(String bbsId) {
        this.bbsId = bbsId;
    }

    public String getBbsNm() {
        return bbsNm;
    }

    public void setBbsNm(String bbsNm) {
        this.bbsNm = bbsNm;
    }

    public String getBbsIntrcn() {
        return bbsIntrcn;
    }

    public void setBbsIntrcn(String bbsIntrcn) {
        this.bbsIntrcn = bbsIntrcn;
    }

    public String getBbsTyCd() {
        return bbsTyCd;
    }

    public void setBbsTyCd(String bbsTyCd) {
        this.bbsTyCd = bbsTyCd;
    }

    public String getBbsTyNm() {
        return bbsTyNm;
    }

    public void setBbsTyNm(String bbsTyNm) {
        this.bbsTyNm = bbsTyNm;
    }

    public String getReplyYn() {
        return replyYn;
    }

    public void setReplyYn(String replyYn) {
        this.replyYn = replyYn;
    }

    public String getFileAtchYn() {
        return fileAtchYn;
    }

    public void setFileAtchYn(String fileAtchYn) {
        this.fileAtchYn = fileAtchYn;
    }

    public String getUseYn() {
        return useYn;
    }

    public void setUseYn(String useYn) {
        this.useYn = useYn;
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

    public String getAnswrYn() {
        return answrYn;
    }

    public void setAnswrYn(String answrYn) {
        this.answrYn = answrYn;
    }

    public String getRcmdYn() {
        return rcmdYn;
    }

    public void setRcmdYn(String rcmdYn) {
        this.rcmdYn = rcmdYn;
    }

}
