package com.jnv.sm.vo;

import org.apache.ibatis.type.Alias;

import com.jnv.jncore.vo.CommonVO;

@Alias("equipItemFieldInfoVO")
public class EquipItemFieldInfoVO extends CommonVO {

    private String tplNo;
    private String eqTypeId;
    private String eqItemId;
    private String eqItemNm;
    private String locOrder;
    private String useFlag;
    private String eqItemPlaceholder;
    private String defItemFlag;
    private String rgstId;
    private String rgstDt;
    private String rgstIp;
    private String updtId;
    private String updtDt;
    private String updtIp;

    public String getTplNo() {
        return tplNo;
    }

    public void setTplNo(String tplNo) {
        this.tplNo = tplNo;
    }

    public String getEqTypeId() {
        return eqTypeId;
    }

    public void setEqTypeId(String eqTypeId) {
        this.eqTypeId = eqTypeId;
    }

    public String getEqItemId() {
        return eqItemId;
    }

    public void setEqItemId(String eqItemId) {
        this.eqItemId = eqItemId;
    }

    public String getEqItemNm() {
        return eqItemNm;
    }

    public void setEqItemNm(String eqItemNm) {
        this.eqItemNm = eqItemNm;
    }

    public String getLocOrder() {
        return locOrder;
    }

    public void setLocOrder(String locOrder) {
        this.locOrder = locOrder;
    }

    public String getUseFlag() {
        return useFlag;
    }

    public void setUseFlag(String useFlag) {
        this.useFlag = useFlag;
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

    public String getEqItemPlaceholder() {
        return eqItemPlaceholder;
    }

    public void setEqItemPlaceholder(String eqItemPlaceholder) {
        this.eqItemPlaceholder = eqItemPlaceholder;
    }

    public String getDefItemFlag() {
        return defItemFlag;
    }

    public void setDefItemFlag(String defItemFlag) {
        this.defItemFlag = defItemFlag;
    }
}
