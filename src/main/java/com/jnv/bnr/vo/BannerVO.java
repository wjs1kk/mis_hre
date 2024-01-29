package com.jnv.bnr.vo;

import org.apache.ibatis.type.Alias;

import com.jnv.jncore.vo.CommonVO;

@Alias("bannerVO")
public class BannerVO extends CommonVO {
    private String rowNum;
    private String bnrNm;
    private String bnrUrl;
    private String bnrId;
    private String rgstDt;
    private String useYn;
    private String bnrOrd;
    private String userId;
    private String memberId;
    private String bnrImg;
    private String bnrDesc;
    private String updtrDt;
    private String rgstrId;
    private String bnrImgFile;

    public String getRowNum() {
        return rowNum;
    }
    public void setRowNum(String rowNum) {
        this.rowNum = rowNum;
    }
    public String getBnrNm() {
        return bnrNm;
    }
    public void setBnrNm(String bnrNm) {
        this.bnrNm = bnrNm;
    }
    public String getBnrUrl() {
        return bnrUrl;
    }
    public void setBnrUrl(String bnrUrl) {
        this.bnrUrl = bnrUrl;
    }
    public String getBnrId() {
        return bnrId;
    }
    public void setBnrId(String bnrId) {
        this.bnrId = bnrId;
    }
    public String getRgstDt() {
        return rgstDt;
    }
    public void setRgstDt(String rgstDt) {
        this.rgstDt = rgstDt;
    }
    public String getUseYn() {
        return useYn;
    }
    public void setUseYn(String useYn) {
        this.useYn = useYn;
    }
    public String getBnrOrd() {
        return bnrOrd;
    }
    public void setBnrOrd(String bnrOrd) {
        this.bnrOrd = bnrOrd;
    }
    public String getUserId() {
        return userId;
    }
    public void setUserId(String userId) {
        this.userId = userId;
    }
    public String getMemberId() {
        return memberId;
    }
    public void setMemberId(String memberId) {
        this.memberId = memberId;
    }
    public String getBnrImg() {
        return bnrImg;
    }
    public void setBnrImg(String bnrImg) {
        this.bnrImg = bnrImg;
    }
    public String getBnrDesc() {
        return bnrDesc;
    }
    public void setBnrDesc(String bnrDesc) {
        this.bnrDesc = bnrDesc;
    }
    public String getUpdtDt() {
        return updtrDt;
    }
    public void setUpdtDt(String updtDt) {
        this.updtrDt = updtDt;
    }
    public String getBnrImgFile() {
        return bnrImgFile;
    }
    public void setBnrImgFile(String bnrImgFile) {
        this.bnrImgFile = bnrImgFile;
    }
    public String getRgstrId() {
        return rgstrId;
    }
    public void setRgstrId(String rgstrId) {
        this.rgstrId = rgstrId;
    }

}
