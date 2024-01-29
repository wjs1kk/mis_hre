package com.jnv.sm.vo;

import org.apache.ibatis.type.Alias;

import com.jnv.jncore.vo.CommonVO;

@Alias("moduleAdminVO")
public class ModuleAdminVO  extends CommonVO{

    private String sysId;
    private String moduleId;
    private String userId;
    private String userNmKr;
    private String rgstId;
    private String rgstIp;
    private String rgstYmd;
    private String updtId;
    private String updtIp;
    private String updtYmd;
    private String useYn;
    private String useYmd;
    private String endYmd;

    public String getSysId() {
        return sysId;
    }
    public void setSysId(String sysId) {
        this.sysId = sysId;
    }
    public String getModuleId() {
        return moduleId;
    }
    public void setModuleId(String moduleId) {
        this.moduleId = moduleId;
    }
    public String getUserId() {
        return userId;
    }
    public void setUserId(String userId) {
        this.userId = userId;
    }
    public String getUserNmKr() {
        return userNmKr;
    }
    public void setUserNmKr(String userNmKr) {
        this.userNmKr = userNmKr;
    }
    public String getUseYn() {
        return useYn;
    }
    public void setUseYn(String useYn) {
        this.useYn = useYn;
    }
	public String getRgstId() {
		return rgstId;
	}
	public void setRgstId(String rgstId) {
		this.rgstId = rgstId;
	}
	public String getRgstIp() {
		return rgstIp;
	}
	public void setRgstIp(String rgstIp) {
		this.rgstIp = rgstIp;
	}
	public String getRgstYmd() {
		return rgstYmd;
	}
	public void setRgstYmd(String rgstYmd) {
		this.rgstYmd = rgstYmd;
	}
	public String getUpdtId() {
		return updtId;
	}
	public void setUpdtId(String updtId) {
		this.updtId = updtId;
	}
	public String getUpdtIp() {
		return updtIp;
	}
	public void setUpdtIp(String updtIp) {
		this.updtIp = updtIp;
	}
	public String getUpdtYmd() {
		return updtYmd;
	}
	public void setUpdtYmd(String updtYmd) {
		this.updtYmd = updtYmd;
	}
	public String getUseYmd() {
		return useYmd;
	}
	public void setUseYmd(String useYmd) {
		this.useYmd = useYmd;
	}
	public String getEndYmd() {
		return endYmd;
	}
	public void setEndYmd(String endYmd) {
		this.endYmd = endYmd;
	}
   

}
