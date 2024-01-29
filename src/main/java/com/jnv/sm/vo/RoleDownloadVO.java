package com.jnv.sm.vo;

import org.apache.ibatis.type.Alias;

import com.jnv.jncore.vo.CommonVO;

@Alias("roleDownloadVO")
public class RoleDownloadVO extends CommonVO {
    private String downloadNo;
    private String eqDownFlag;
    private String chkDownFlag;
    private String eqViewerFlag;
    private String chkViewerFlag;
    private String saveType;

    public String getEqDownFlag() {
        return eqDownFlag;
    }

    public void setEqDownFlag(String eqDownFlag) {
        this.eqDownFlag = eqDownFlag;
    }

    public String getEqViewerFlag() {
        return eqViewerFlag;
    }

    public void setEqViewerFlag(String eqViewerFlag) {
        this.eqViewerFlag = eqViewerFlag;
    }

    public String getChkDownFlag() {
        return chkDownFlag;
    }

    public void setChkDownFlag(String chkDownFlag) {
        this.chkDownFlag = chkDownFlag;
    }

    public String getChkViewerFlag() {
        return chkViewerFlag;
    }

    public void setChkViewerFlag(String chkViewerFlag) {
        this.chkViewerFlag = chkViewerFlag;
    }

    public String getDownloadNo() {
        return downloadNo;
    }

    public void setDownloadNo(String downloadNo) {
        this.downloadNo = downloadNo;
    }

    public String getSaveType() {
        return saveType;
    }

    public void setSaveType(String saveType) {
        this.saveType = saveType;
    }
}
