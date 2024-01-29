package com.jnv.sm.vo;

import org.apache.ibatis.type.Alias;

import com.jnv.jncore.vo.CommonVO;

@Alias("accessLogViewVO")
public class AccessLogViewVO extends CommonVO{

	private String sysId;
	private String sysNm;
	private String accessTime;
    private String accessFromDt;
    private String accessToDt;
    private String accessIp;
    private String accessUrl;
    private String userId;
    private String memberId;
    private String userNmKr;
    private String menuNm;
    private String progId;
    private String progNm;
    private String actionName;
    private String actionResult;
    private String requestBody;
    public String getAccessTime() {
        return accessTime;
    }
    public void setAccessTime(String accessTime) {
        this.accessTime = accessTime;
    }
    public String getAccessFromDt() {
        return accessFromDt;
    }
    public void setAccessFromDt(String accessFromDt) {
        this.accessFromDt = accessFromDt;
    }
    public String getAccessToDt() {
        return accessToDt;
    }
    public void setAccessToDt(String accessToDt) {
        this.accessToDt = accessToDt;
    }
    public String getAccessIp() {
        return accessIp;
    }
    public void setAccessIp(String accessIp) {
        this.accessIp = accessIp;
    }
    public String getAccessUrl() {
        return accessUrl;
    }
    public void setAccessUrl(String accessUrl) {
        this.accessUrl = accessUrl;
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
    public String getUserNmKr() {
        return userNmKr;
    }
    public void setUserNmKr(String userNmKr) {
        this.userNmKr = userNmKr;
    }
    public String getMenuNm() {
        return menuNm;
    }
    public void setMenuNm(String menuNm) {
        this.menuNm = menuNm;
    }
    public String getProgId() {
        return progId;
    }
    public void setProgId(String progId) {
        this.progId = progId;
    }
    public String getProgNm() {
        return progNm;
    }
    public void setProgNm(String progNm) {
        this.progNm = progNm;
    }
    public String getActionName() {
        return actionName;
    }
    public void setActionName(String actionName) {
        this.actionName = actionName;
    }
    public String getActionResult() {
        return actionResult;
    }
    public void setActionResult(String actionResult) {
        this.actionResult = actionResult;
    }
    public String getRequestBody() {
        return requestBody;
    }
    public void setRequestBody(String requestBody) {
        this.requestBody = requestBody;
    }
    public String getSysId() {
		return sysId;
	}
	public void setSysId(String sysId) {
		this.sysId = sysId;
	}
	public String getSysNm() {
		return sysNm;
	}
	public void setSysNm(String sysNm) {
		this.sysNm = sysNm;
	}


}