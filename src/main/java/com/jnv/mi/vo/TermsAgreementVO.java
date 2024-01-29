package com.jnv.mi.vo;

import java.io.Serializable;

import com.jnv.jncore.vo.CommonVO;
import org.apache.ibatis.type.Alias;

@Alias("termsAgreementVO")
public class TermsAgreementVO extends CommonVO implements Serializable {

    private String sysId;
    private String trmsId;
    private String userId;
    private String agrmYn;
    private String agrmDt;

    public String getSysId() {
        return sysId;
    }

    public void setSysId(String sysId) {
        this.sysId = sysId;
    }

    public String getTrmsId() {
        return trmsId;
    }

    public void setTrmsId(String trmsId) {
        this.trmsId = trmsId;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getAgrmYn() {
        return agrmYn;
    }

    public void setAgrmYn(String agrmYn) {
        this.agrmYn = agrmYn;
    }

    public String getAgrmDt() {
        return agrmDt;
    }

    public void setAgrmDt(String agrmDt) {
        this.agrmDt = agrmDt;
    }
}
