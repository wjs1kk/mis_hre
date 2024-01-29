package com.jnv.bbs.vo;

import org.apache.ibatis.type.Alias;

import com.jnv.jncore.vo.CommonVO;

@Alias("boardScrpVO")
public class BoardScrpVO extends CommonVO {

    private String scrpId; // 스크랩id
    private String bbsId; // 게시판id
    private String nttNo; // 게시물번호
    private String scrpNm; // 스크랩명
    private String scrpDt; // 스크랩일시
    private String scrpUserId; // 스크랩사용자

    public String getScrpId() {
        return scrpId;
    }

    public void setScrpId(String scrpId) {
        this.scrpId = scrpId;
    }

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

    public String getScrpNm() {
        return scrpNm;
    }

    public void setScrpNm(String scrpNm) {
        this.scrpNm = scrpNm;
    }

    public String getScrpDt() {
        return scrpDt;
    }

    public void setScrpDt(String scrpDt) {
        this.scrpDt = scrpDt;
    }

    public String getScrpUserId() {
        return scrpUserId;
    }

    public void setScrpUserId(String scrpUserId) {
        this.scrpUserId = scrpUserId;
    }

}
