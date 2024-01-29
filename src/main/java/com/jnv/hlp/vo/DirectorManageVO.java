package com.jnv.hlp.vo;

import org.apache.ibatis.type.Alias;

import com.jnv.jncore.vo.CommonVO;

@Alias("directorManageVO")
public class DirectorManageVO extends CommonVO {

    private String useYn;
    private String hlpPicId;
    private String hlpWkClsCd;
    private String powCd;
    private String memberId;

    private String hlpWkClsCdNm;
    private String powCdNm;
    private String hlpPicIdNm;
    private String hlpPicIdMember; // 헬프 담당자 id

    public String getUseYn() {
        return useYn;
    }

    public void setUseYn(String useYn) {
        this.useYn = useYn;
    }

    public String getHlpPicId() {
        return hlpPicId;
    }

    public void setHlpPicId(String hlpPicId) {
        this.hlpPicId = hlpPicId;
    }

    public String getHlpWkClsCd() {
        return hlpWkClsCd;
    }

    public void setHlpWkClsCd(String hlpWkClsCd) {
        this.hlpWkClsCd = hlpWkClsCd;
    }

    public String getPowCd() {
        return powCd;
    }

    public void setPowCd(String powCd) {
        this.powCd = powCd;
    }

    public String getHlpWkClsCdNm() {
        return hlpWkClsCdNm;
    }

    public void setHlpWkClsCdNm(String hlpWkClsCdNm) {
        this.hlpWkClsCdNm = hlpWkClsCdNm;
    }

    public String getPowCdNm() {
        return powCdNm;
    }

    public void setPowCdNm(String powCdNm) {
        this.powCdNm = powCdNm;
    }

    public String getHlpPicIdNm() {
        return hlpPicIdNm;
    }

    public void setHlpPicIdNm(String hlpPicIdNm) {
        this.hlpPicIdNm = hlpPicIdNm;
    }

    public String getMemberId() {
        return memberId;
    }

    public void setMemberId(String memberId) {
        this.memberId = memberId;
    }

    public String getHlpPicIdMember() {
        return hlpPicIdMember;
    }

    public void setHlpPicIdMember(String hlpPicIdMember) {
        this.hlpPicIdMember = hlpPicIdMember;
    }

}
