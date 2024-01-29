package com.jnv.sm.vo;

import org.apache.ibatis.type.Alias;

import com.jnv.jncore.vo.CommonVO;

@Alias("programFuncUseVO")
public class ProgramFuncUseVO extends CommonVO {

    private String accessDate;
    private String sysId;
    private String sysNm;
    private String progId;
    private String progNm;
    private String menuId;
    private String menuNm;
    private String userId;
    private String memberId;
    private String userNmKr;
    private String actionName;
    private String accessCount;

    public String getAccessDate() {
        return accessDate;
    }

    public void setAccessDate(String accessDate) {
        this.accessDate = accessDate;
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

    public String getMenuId() {
        return menuId;
    }

    public void setMenuId(String menuId) {
        this.menuId = menuId;
    }

    public String getMenuNm() {
        return menuNm;
    }

    public void setMenuNm(String menuNm) {
        this.menuNm = menuNm;
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

    public String getActionName() {
        return actionName;
    }

    public void setActionName(String actionName) {
        this.actionName = actionName;
    }

    public String getAccessCount() {
        return accessCount;
    }

    public void setAccessCount(String accessCount) {
        this.accessCount = accessCount;
    }
}
