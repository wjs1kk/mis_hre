package com.jnv.bbs.vo;

import org.apache.ibatis.type.Alias;

import com.jnv.jncore.vo.CommonVO;

@Alias("noticeBoardVO")
public class NoticeBoardVO extends CommonVO {

    private String nttNo; // 게시물 번호
    private String bbsId; // 게시판ID

    private String nttTtl; // 게시물 제목
    private String nttCn; // 게시물 내용
    private String answrYn; // 답글여부
    private String upNttNo; // 상위게시글 번호
    private String cmntYn; // 댓글여부
    private String sortOrdr; // 정렬순서
    private String rdcnt; // 조회수
    private String useYn; // 사용여부
    private String ntcBgnYmd; // 공지 시작일
    private String ntcEndYmd; // 공지 종료일
    private String ntcrId; // 게시자 ID
    private String ntcrNm; // 게시자명
    private String passwd; // 비밀번호
    private String atchFileId; // 첨부파일 ID
    private String noticeYn; // 공지사항 여부
    private String sjBoldYn; // 제목볼드 여뷰
    private String scrtYn; // 비밀글 여부
    private String rgstDt; // 최초등록일
    private String rgstrId; // 최초등장자 ID
    private String updtDt; // 최종수정일
    private String updtrId; // 최종수정자 ID

    private String cmntCnt; // 댓글 개수

    private String cmntNo; // 댓글번호
    private String wrtrId; // 댓글작성자ID

    private String nttNoPrev; // 이전글
    private String nttTtlPrev;
    private String nttNoNext; // 다음글
    private String nttTtlNext;

    private String rcmdCnt; // 추천
    private String dcmdCnt; // 비추천

    private String popYn; // 팝업여부

    private String bbsNm; // mst게시판명
    private String bbsTyCd; // 게시판유형코드
    private String bbsTyNm;

    public String getNttNo() {
        return nttNo;
    }

    public void setNttNo(String nttNo) {
        this.nttNo = nttNo;
    }

    public String getBbsId() {
        return bbsId;
    }

    public void setBbsId(String bbsId) {
        this.bbsId = bbsId;
    }

    public String getNttTtl() {
        return nttTtl;
    }

    public void setNttTtl(String nttTtl) {
        this.nttTtl = nttTtl;
    }

    public String getNttCn() {
        return nttCn;
    }

    public void setNttCn(String nttCn) {
        this.nttCn = nttCn;
    }

    public String getAnswrYn() {
        return answrYn;
    }

    public void setAnswrYn(String answrYn) {
        this.answrYn = answrYn;
    }

    public String getUpNttNo() {
        return upNttNo;
    }

    public void setUpNttNo(String upNttNo) {
        this.upNttNo = upNttNo;
    }

    public String getCmntYn() {
        return cmntYn;
    }

    public void setCmntYn(String cmntYn) {
        this.cmntYn = cmntYn;
    }

    public String getSortOrdr() {
        return sortOrdr;
    }

    public void setSortOrdr(String sortOrdr) {
        this.sortOrdr = sortOrdr;
    }

    public String getRdcnt() {
        return rdcnt;
    }

    public void setRdcnt(String rdcnt) {
        this.rdcnt = rdcnt;
    }

    public String getUseYn() {
        return useYn;
    }

    public void setUseYn(String useYn) {
        this.useYn = useYn;
    }

    public String getNtcBgnYmd() {
        return ntcBgnYmd;
    }

    public void setNtcBgnYmd(String ntcBgnYmd) {
        this.ntcBgnYmd = ntcBgnYmd;
    }

    public String getNtcEndYmd() {
        return ntcEndYmd;
    }

    public void setNtcEndYmd(String ntcEndYmd) {
        this.ntcEndYmd = ntcEndYmd;
    }

    public String getNtcrId() {
        return ntcrId;
    }

    public void setNtcrId(String ntcrId) {
        this.ntcrId = ntcrId;
    }

    public String getNtcrNm() {
        return ntcrNm;
    }

    public void setNtcrNm(String ntcrNm) {
        this.ntcrNm = ntcrNm;
    }

    public String getPasswd() {
        return passwd;
    }

    public void setPasswd(String passwd) {
        this.passwd = passwd;
    }

    public String getAtchFileId() {
        return atchFileId;
    }

    public void setAtchFileId(String atchFileId) {
        this.atchFileId = atchFileId;
    }

    public String getNoticeYn() {
        return noticeYn;
    }

    public void setNoticeYn(String noticeYn) {
        this.noticeYn = noticeYn;
    }

    public String getSjBoldYn() {
        return sjBoldYn;
    }

    public void setSjBoldYn(String sjBoldYn) {
        this.sjBoldYn = sjBoldYn;
    }

    public String getScrtYn() {
        return scrtYn;
    }

    public void setScrtYn(String scrtYn) {
        this.scrtYn = scrtYn;
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

    public String getCmntCnt() {
        return cmntCnt;
    }

    public void setCmntCnt(String cmntCnt) {
        this.cmntCnt = cmntCnt;
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

    public String getNttNoPrev() {
        return nttNoPrev;
    }

    public void setNttNoPrev(String nttNoPrev) {
        this.nttNoPrev = nttNoPrev;
    }

    public String getNttTtlPrev() {
        return nttTtlPrev;
    }

    public void setNttTtlPrev(String nttTtlPrev) {
        this.nttTtlPrev = nttTtlPrev;
    }

    public String getNttNoNext() {
        return nttNoNext;
    }

    public void setNttNoNext(String nttNoNext) {
        this.nttNoNext = nttNoNext;
    }

    public String getNttTtlNext() {
        return nttTtlNext;
    }

    public void setNttTtlNext(String nttTtlNext) {
        this.nttTtlNext = nttTtlNext;
    }

    public String getRcmdCnt() {
        return rcmdCnt;
    }

    public void setRcmdCnt(String rcmdCnt) {
        this.rcmdCnt = rcmdCnt;
    }

    public String getDcmdCnt() {
        return dcmdCnt;
    }

    public void setDcmdCnt(String dcmdCnt) {
        this.dcmdCnt = dcmdCnt;
    }

    public String getPopYn() {
        return popYn;
    }

    public void setPopYn(String popYn) {
        this.popYn = popYn;
    }

    public String getBbsNm() {
        return bbsNm;
    }

    public void setBbsNm(String bbsNm) {
        this.bbsNm = bbsNm;
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

}
