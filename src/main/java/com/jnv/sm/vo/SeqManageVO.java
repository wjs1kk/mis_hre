package com.jnv.sm.vo;

import org.apache.ibatis.type.Alias;

import com.jnv.jncore.vo.CommonVO;

@Alias("seqManageVO")
public class SeqManageVO extends CommonVO {

    private String seqId;
    private String seqPrefix;
    private String seqSuffix;
    private String seqDigits;
    private String seqMin;
    private String seqInc;
    private String useYn;
    private String seqCurr;
    private String seqDesc;

    private String rgstId;
    private String rgstDt;
    private String rgstIp;
    private String updtId;
    private String updtDt;
    private String updtIp;

    public String getSeqId() {
        return seqId;
    }

    public void setSeqId(String seqId) {
        this.seqId = seqId;
    }

    public String getSeqPrefix() {
        return seqPrefix;
    }

    public void setSeqPrefix(String seqPrefix) {
        this.seqPrefix = seqPrefix;
    }

    public String getSeqSuffix() {
        return seqSuffix;
    }

    public void setSeqSuffix(String seqSuffix) {
        this.seqSuffix = seqSuffix;
    }

    public String getSeqDigits() {
        return seqDigits;
    }

    public void setSeqDigits(String seqDigits) {
        this.seqDigits = seqDigits;
    }

    public String getSeqMin() {
        return seqMin;
    }

    public void setSeqMin(String seqMin) {
        this.seqMin = seqMin;
    }

    public String getSeqInc() {
        return seqInc;
    }

    public void setSeqInc(String seqInc) {
        this.seqInc = seqInc;
    }

    public String getUseYn() {
        return useYn;
    }

    public void setUseYn(String useYn) {
        this.useYn = useYn;
    }

    public String getSeqCurr() {
        return seqCurr;
    }

    public void setSeqCurr(String seqCurr) {
        this.seqCurr = seqCurr;
    }

    public String getSeqDesc() {
        return seqDesc;
    }

    public void setSeqDesc(String seqDesc) {
        this.seqDesc = seqDesc;
    }

    public String getRgstId() {
        return rgstId;
    }

    public void setRgstId(String rgstId) {
        this.rgstId = rgstId;
    }

    public String getRgstDt() {
        return rgstDt;
    }

    public void setRgstDt(String rgstDt) {
        this.rgstDt = rgstDt;
    }

    public String getRgstIp() {
        return rgstIp;
    }

    public void setRgstIp(String rgstIp) {
        this.rgstIp = rgstIp;
    }

    public String getUpdtId() {
        return updtId;
    }

    public void setUpdtId(String updtId) {
        this.updtId = updtId;
    }

    public String getUpdtDt() {
        return updtDt;
    }

    public void setUpdtDt(String updtDt) {
        this.updtDt = updtDt;
    }

    public String getUpdtIp() {
        return updtIp;
    }

    public void setUpdtIp(String updtIp) {
        this.updtIp = updtIp;
    }
}
