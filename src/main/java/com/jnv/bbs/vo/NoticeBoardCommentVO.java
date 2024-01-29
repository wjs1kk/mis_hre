package com.jnv.bbs.vo;

import org.apache.ibatis.type.Alias;

import com.jnv.jncore.vo.CommonVO;

@Alias("noticeBoardCommentVO")
public class NoticeBoardCommentVO extends CommonVO {

    private String bbsId;
    private String nttNo;
    private String cmntNo;
    private String wrtrId;
    private String wrtrNm;
    private String cmntCn;
    private String passwd;
    private String rgstDt;
    private String rgstrId;
    private String updtDt;
    private String updtrId;

    public String getBbsId() {
        return bbsId;
    }

    public void setBbsId(String bbsId) {
        this.bbsId = bbsId;
    }

    public String getNttNo() {
        return nttNo;
    }

    public void setNttNo(String nttNo) {
        this.nttNo = nttNo;
    }

    public String getCmntNo() {
        return cmntNo;
    }

    public void setCmntNo(String cmntNo) {
        this.cmntNo = cmntNo;
    }

    public String getWrtrId() {
        return wrtrId;
    }

    public void setWrtrId(String wrtrId) {
        this.wrtrId = wrtrId;
    }

    public String getWrtrNm() {
        return wrtrNm;
    }

    public void setWrtrNm(String wrtrNm) {
        this.wrtrNm = wrtrNm;
    }

    public String getCmntCn() {
        return cmntCn;
    }

    public void setCmntCn(String cmntCn) {
        this.cmntCn = cmntCn;
    }

    public String getPasswd() {
        return passwd;
    }

    public void setPasswd(String passwd) {
        this.passwd = passwd;
    }

    public String getRgstDt() {
        return rgstDt;
    }

    public void setRgstDt(String rgstDt) {
        this.rgstDt = rgstDt;
    }

    public String getRgstrId() {
        return rgstrId;
    }

    public void setRgstrId(String rgstrId) {
        this.rgstrId = rgstrId;
    }

    public String getUpdtDt() {
        return updtDt;
    }

    public void setUpdtDt(String updtDt) {
        this.updtDt = updtDt;
    }

    public String getUpdtrId() {
        return updtrId;
    }

    public void setUpdtrId(String updtrId) {
        this.updtrId = updtrId;
    }

}
