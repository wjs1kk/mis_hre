package com.jnv.bbs.vo;

import org.apache.ibatis.type.Alias;

import com.jnv.jncore.vo.CommonVO;

@Alias("qnaVO")
public class QnaVO extends CommonVO {

    private String qnaId; // QNA ID
    private String qstnTtl; // 질문제목
    private String qstnCn; // 질문내용
    private String rdcnt; // 조회수
    private String emlAddr; // 이메일주소
    private String rgstDt; // 등록일시(질문일시)
    private String rgstrId; // 등록자ID(질문자)
    private String rgstrMemberId;
    private String updtDt; // 최종수정시점
    private String updtrId; // 최종수정자ID
    private String qnaPrcSttsCd; // 질의응답처리상태코드
    private String qnaPrcSttsNm;

    private String answrId; // 답변자ID
    private String answrMemberId;
    private String answrCn; // 답변내용
    private String wrtePasswd; // 작성비밀번호
    private String answrDt; // 답변일시
    private String emlAnswrYn; // 메일답변여부
    private String clsCd; // 분류코드
    private String clsNm;

    public String getQnaId() {
        return qnaId;
    }

    public void setQnaId(String qnaId) {
        this.qnaId = qnaId;
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

    public String getRdcnt() {
        return rdcnt;
    }

    public void setRdcnt(String rdcnt) {
        this.rdcnt = rdcnt;
    }

    public String getEmlAddr() {
        return emlAddr;
    }

    public void setEmlAddr(String emlAddr) {
        this.emlAddr = emlAddr;
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

    public String getRgstrMemberId() {
        return rgstrMemberId;
    }

    public void setRgstrMemberId(String rgstrMemberId) {
        this.rgstrMemberId = rgstrMemberId;
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

    public String getQnaPrcSttsCd() {
        return qnaPrcSttsCd;
    }

    public void setQnaPrcSttsCd(String qnaPrcSttsCd) {
        this.qnaPrcSttsCd = qnaPrcSttsCd;
    }

    public String getQnaPrcSttsNm() {
        return qnaPrcSttsNm;
    }

    public void setQnaPrcSttsNm(String qnaPrcSttsNm) {
        this.qnaPrcSttsNm = qnaPrcSttsNm;
    }

    public String getAnswrId() {
        return answrId;
    }

    public void setAnswrId(String answrId) {
        this.answrId = answrId;
    }

    public String getAnswrMemberId() {
        return answrMemberId;
    }

    public void setAnswrMemberId(String answrMemberId) {
        this.answrMemberId = answrMemberId;
    }

    public String getAnswrCn() {
        return answrCn;
    }

    public void setAnswrCn(String answrCn) {
        this.answrCn = answrCn;
    }

    public String getWrtePasswd() {
        return wrtePasswd;
    }

    public void setWrtePasswd(String wrtePasswd) {
        this.wrtePasswd = wrtePasswd;
    }

    public String getAnswrDt() {
        return answrDt;
    }

    public void setAnswrDt(String answrDt) {
        this.answrDt = answrDt;
    }

    public String getEmlAnswrYn() {
        return emlAnswrYn;
    }

    public void setEmlAnswrYn(String emlAnswrYn) {
        this.emlAnswrYn = emlAnswrYn;
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

}
