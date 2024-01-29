package com.jnv.ast.vo;

import org.apache.ibatis.type.Alias;

import com.jnv.jncore.vo.CommonVO;

@Alias("resourcesDetailAddVO")
public class ResourcesDetailAddVO extends CommonVO {

    private String astNo;
    private String astSrlNo;
    private String astAqstnYmd;
    private String astUseDeptCd;
    private String astUseDeptCdNm;
    private String astUseUserId;
    private String astUseUserIdNm;
    private String astSttsCd;
    private String astSttsCdNm;
    private String astUseDeptCdMember;
    private String astRtnDueYmd;
    private String useYn;

    public String getAstNo() {
        return astNo;
    }

    public void setAstNo(String astNo) {
        this.astNo = astNo;
    }

    public String getAstSrlNo() {
        return astSrlNo;
    }

    public void setAstSrlNo(String astSrlNo) {
        this.astSrlNo = astSrlNo;
    }

    public String getAstAqstnYmd() {
        return astAqstnYmd;
    }

    public void setAstAqstnYmd(String astAqstnYmd) {
        this.astAqstnYmd = astAqstnYmd;
    }

    public String getAstUseDeptCd() {
        return astUseDeptCd;
    }

    public void setAstUseDeptCd(String astUseDeptCd) {
        this.astUseDeptCd = astUseDeptCd;
    }

    public String getAstUseDeptCdNm() {
        return astUseDeptCdNm;
    }

    public void setAstUseDeptCdNm(String astUseDeptCdNm) {
        this.astUseDeptCdNm = astUseDeptCdNm;
    }

    public String getAstUseUserId() {
        return astUseUserId;
    }

    public void setAstUseUserId(String astUseUserId) {
        this.astUseUserId = astUseUserId;
    }

    public String getAstUseUserIdNm() {
        return astUseUserIdNm;
    }

    public void setAstUseUserIdNm(String astUseUserIdNm) {
        this.astUseUserIdNm = astUseUserIdNm;
    }

    public String getAstSttsCd() {
        return astSttsCd;
    }

    public void setAstSttsCd(String astSttsCd) {
        this.astSttsCd = astSttsCd;
    }

    public String getAstSttsCdNm() {
        return astSttsCdNm;
    }

    public void setAstSttsCdNm(String astSttsCdNm) {
        this.astSttsCdNm = astSttsCdNm;
    }

    public String getAstRtnDueYmd() {
        return astRtnDueYmd;
    }

    public void setAstRtnDueYmd(String astRtnDueYmd) {
        this.astRtnDueYmd = astRtnDueYmd;
    }

    public String getUseYn() {
        return useYn;
    }

    public void setUseYn(String useYn) {
        this.useYn = useYn;
    }

    public String getAstUseDeptCdMember() {
        return astUseDeptCdMember;
    }

    public void setAstUseDeptCdMember(String astUseDeptCdMember) {
        this.astUseDeptCdMember = astUseDeptCdMember;
    }

}
