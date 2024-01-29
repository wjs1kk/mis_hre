package com.jnv.sm.vo;

import org.apache.ibatis.type.Alias;

import com.jnv.jncore.vo.CommonVO;

@Alias("accessStatisticsVO")
public class AccessStatisticsVO extends CommonVO {

    private String url;
    private String menuId;
    private String menuNm;
    private String progId;
    private String progNm;
    private String actionName;
    private String accessCount;
    private String accessDate;

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
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

    public String getAccessCount() {
        return accessCount;
    }

    public void setAccessCount(String accessCount) {
        this.accessCount = accessCount;
    }

    public String getAccessDate() {
        return accessDate;
    }

    public void setAccessDate(String accessDate) {
        this.accessDate = accessDate;
    }
}
