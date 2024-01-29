package com.jnv.bbs.vo;

import org.apache.ibatis.type.Alias;

import com.jnv.jncore.vo.CommonVO;

@Alias("faqVO")
public class FaqVO extends CommonVO {

    private String faqId; // FAQ ID
    private String clsCd; // 분류코드
    private String clsNm;

    private String qstnTtl; // 질문제목
    private String qstnCn; // 질문내용
    private String answrCn; // 답변내용
    private String rdcnt; // 조회수
    private String atchFileId; // 첨부파일 ID
    private String faqSttsCd; // FAQ 진행상태
    private String faqSttsNm;

    private String rgstDt; // 등록일시
    private String rgstrId; // 등록자 ID
    private String rgstrMemberId;

    private String updtDt; // 수정일시
    private String updtrId; // 수정자 ID

    public String getFaqId() {
        return faqId;
    }

    public void setFaqId(String faqId) {
        this.faqId = faqId;
    }

    public String getClsCd() {
        return clsCd;
    }

    public void setClsCd(String clsCd) {
        this.clsCd = clsCd;
    }

    public String getClsNm() {
        return clsNm;
    }

    public void setClsNm(String clsNm) {
        this.clsNm = clsNm;
    }

    public String getQstnTtl() {
        return qstnTtl;
    }

    public void setQstnTtl(String qstnTtl) {
        this.qstnTtl = qstnTtl;
    }

    public String getQstnCn() {
        return qstnCn;
    }

    public void setQstnCn(String qstnCn) {
        this.qstnCn = qstnCn;
    }

    public String getAnswrCn() {
        return answrCn;
    }

    public void setAnswrCn(String answrCn) {
        this.answrCn = answrCn;
    }

    public String getRdcnt() {
        return rdcnt;
    }

    public void setRdcnt(String rdcnt) {
        this.rdcnt = rdcnt;
    }

    public String getAtchFileId() {
        return atchFileId;
    }

    public void setAtchFileId(String atchFileId) {
        this.atchFileId = atchFileId;
    }

    public String getFaqSttsCd() {
        return faqSttsCd;
    }

    public void setFaqSttsCd(String faqSttsCd) {
        this.faqSttsCd = faqSttsCd;
    }

    public String getFaqSttsNm() {
        return faqSttsNm;
    }

    public void setFaqSttsNm(String faqSttsNm) {
        this.faqSttsNm = faqSttsNm;
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

    public String getRgstrMemberId() {
        return rgstrMemberId;
    }

    public void setRgstrMemberId(String rgstrMemberId) {
        this.rgstrMemberId = rgstrMemberId;
    }

}
