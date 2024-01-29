package com.jnv.hlp.vo;

import org.apache.ibatis.type.Alias;

import com.jnv.jncore.vo.CommonVO;

@Alias("helpRequestVO")
public class HelpRequestVO extends CommonVO {

    private String hlpRqstNo; // 요청번호
    private String hlpRqstTtl; // 요청제목
    private String hlpRqstCn; // 요청내용
    private String hlpWkClsCd; // 업무분류 코드
    private String hlpPicId; // 헬프담당자 userID
    private String hlpPicIdNm; // 헬프담당자이름
    private String hlpSttsCd; // 헬프상태코드
    private String hlpSttsCdNm; // 헬프상태
    private String hlpRqstRsnCd; // 요청사유
    private String hlpRqstRsnCdNm; // 요청사유
    private String hlpWkClsCdNm; // 업무분류
    private String hlpRqstrId; // 요청자 ID
    private String hlpRqstrIdNm; // 요청자 이름
    private String hlpRqstrMemberId; // 요청자 memberId
    private String hlpRqstDt; // 요청일시
    private String hlpWkCpltDt; // 완료일
    private String hlpRqstTypeCd; // 요청분류 코드
    private String hlpRqstTypeCdNm; // 요청분류
    private String hlpRqstAtchFileId; // 요청첨부파일
    private String hlpWkAtchFileId; // 처리첨부파일
    private String hlpWkPicId; // 처리담당자
    private String hlpWkPicIdNm; // 처리담당자 id
    private String hlpWkTypeCd; // 처리 유형
    private String hlpWkCpltYmd; // 완료 예정일
    private String hlpWkCn; // 처리 내용
    private String hlpPicIdMember; // 헬프 담당자 id
    private String hlpWkPicIdMember; // 담당자 검색 id
    private String hlpRqstrIdMember; // 요청자 memberId

    public String getHlpRqstNo() {
        return hlpRqstNo;
    }

    public void setHlpRqstNo(String hlpRqstNo) {
        this.hlpRqstNo = hlpRqstNo;
    }

    public String getHlpRqstTtl() {
        return hlpRqstTtl;
    }

    public void setHlpRqstTtl(String hlpRqstTtl) {
        this.hlpRqstTtl = hlpRqstTtl;
    }

    public String getHlpWkPicId() {
        return hlpWkPicId;
    }

    public void setHlpWkPicId(String hlpWkPicId) {
        this.hlpWkPicId = hlpWkPicId;
    }

    public String getHlpRqstCn() {
        return hlpRqstCn;
    }

    public void setHlpRqstCn(String hlpRqstCn) {
        this.hlpRqstCn = hlpRqstCn;
    }

    public String getHlpWkClsCd() {
        return hlpWkClsCd;
    }

    public void setHlpWkClsCd(String hlpWkClsCd) {
        this.hlpWkClsCd = hlpWkClsCd;
    }

    public String getHlpPicId() {
        return hlpPicId;
    }

    public void setHlpPicId(String hlpPicId) {
        this.hlpPicId = hlpPicId;
    }

    public String getHlpSttsCd() {
        return hlpSttsCd;
    }

    public void setHlpSttsCd(String hlpSttsCd) {
        this.hlpSttsCd = hlpSttsCd;
    }

    public String getHlpRqstRsnCd() {
        return hlpRqstRsnCd;
    }

    public void setHlpRqstRsnCd(String hlpRqstRsnCd) {
        this.hlpRqstRsnCd = hlpRqstRsnCd;
    }

    public String getHlpSttsCdNm() {
        return hlpSttsCdNm;
    }

    public void setHlpSttsCdNm(String hlpSttsCdNm) {
        this.hlpSttsCdNm = hlpSttsCdNm;
    }

    public String getHlpWkClsCdNm() {
        return hlpWkClsCdNm;
    }

    public void setHlpWkClsCdNm(String hlpWkClsCdNm) {
        this.hlpWkClsCdNm = hlpWkClsCdNm;
    }

    public String getHlpPicIdNm() {
        return hlpPicIdNm;
    }

    public void setHlpPicIdNm(String hlpPicIdNm) {
        this.hlpPicIdNm = hlpPicIdNm;
    }

    public String getHlpRqstrId() {
        return hlpRqstrId;
    }

    public void setHlpRqstrId(String hlpRqstrId) {
        this.hlpRqstrId = hlpRqstrId;
    }

    public String getHlpRqstDt() {
        return hlpRqstDt;
    }

    public void setHlpRqstDt(String hlpRqstDt) {
        this.hlpRqstDt = hlpRqstDt;
    }

    public String getHlpWkCpltDt() {
        return hlpWkCpltDt;
    }

    public void setHlpWkCpltDt(String hlpWkCpltDt) {
        this.hlpWkCpltDt = hlpWkCpltDt;
    }

    public String getHlpRqstrIdNm() {
        return hlpRqstrIdNm;
    }

    public void setHlpRqstrIdNm(String hlpRqstrIdNm) {
        this.hlpRqstrIdNm = hlpRqstrIdNm;
    }

    public String getHlpRqstTypeCd() {
        return hlpRqstTypeCd;
    }

    public void setHlpRqstTypeCd(String hlpRqstTypeCd) {
        this.hlpRqstTypeCd = hlpRqstTypeCd;
    }

    public String getHlpRqstTypeCdNm() {
        return hlpRqstTypeCdNm;
    }

    public void setHlpRqstTypeCdNm(String hlpRqstTypeCdNm) {
        this.hlpRqstTypeCdNm = hlpRqstTypeCdNm;
    }

    public String getHlpRqstAtchFileId() {
        return hlpRqstAtchFileId;
    }

    public void setHlpRqstAtchFileId(String hlpRqstAtchFileId) {
        this.hlpRqstAtchFileId = hlpRqstAtchFileId;
    }

    public String getHlpWkAtchFileId() {
        return hlpWkAtchFileId;
    }

    public void setHlpWkAtchFileId(String hlpWkAtchFileId) {
        this.hlpWkAtchFileId = hlpWkAtchFileId;
    }

    public String getHlpWkPicIdNm() {
        return hlpWkPicIdNm;
    }

    public void setHlpWkPicIdNm(String hlpWkPicIdNm) {
        this.hlpWkPicIdNm = hlpWkPicIdNm;
    }

    public String getHlpRqstRsnCdNm() {
        return hlpRqstRsnCdNm;
    }

    public void setHlpRqstRsnCdNm(String hlpRqstRsnCdNm) {
        this.hlpRqstRsnCdNm = hlpRqstRsnCdNm;
    }

    public String getHlpRqstrMemberId() {
        return hlpRqstrMemberId;
    }

    public void setHlpRqstrMemberId(String hlpRqstrMemberId) {
        this.hlpRqstrMemberId = hlpRqstrMemberId;
    }

    public String getHlpWkTypeCd() {
        return hlpWkTypeCd;
    }

    public void setHlpWkTypeCd(String hlpWkTypeCd) {
        this.hlpWkTypeCd = hlpWkTypeCd;
    }

    public String getHlpWkCpltYmd() {
        return hlpWkCpltYmd;
    }

    public void setHlpWkCpltYmd(String hlpWkCpltYmd) {
        this.hlpWkCpltYmd = hlpWkCpltYmd;
    }

    public String getHlpWkCn() {
        return hlpWkCn;
    }

    public void setHlpWkCn(String hlpWkCn) {
        this.hlpWkCn = hlpWkCn;
    }

    public String getHlpPicIdMember() {
        return hlpPicIdMember;
    }

    public void setHlpPicIdMember(String hlpPicIdMember) {
        this.hlpPicIdMember = hlpPicIdMember;
    }

    public String getHlpWkPicIdMember() {
        return hlpWkPicIdMember;
    }

    public void setHlpWkPicIdMember(String hlpWkPicIdMember) {
        this.hlpWkPicIdMember = hlpWkPicIdMember;
    }

    public String getHlpRqstrIdMember() {
        return hlpRqstrIdMember;
    }

    public void setHlpRqstrIdMember(String hlpRqstrIdMember) {
        this.hlpRqstrIdMember = hlpRqstrIdMember;
    }

}
