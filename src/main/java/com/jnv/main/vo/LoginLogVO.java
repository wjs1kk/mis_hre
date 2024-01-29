package com.jnv.main.vo;

import org.apache.ibatis.type.Alias;

import com.jnv.jncore.vo.CommonVO;

@Alias("loginLogVO")
public class LoginLogVO extends CommonVO {

    private String userId;
    private String userIp;
    private String userLoginDate;
    private String userLogoutDate;

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getUserIp() {
        return userIp;
    }

    public void setUserIp(String userIp) {
        this.userIp = userIp;
    }

    public String getUserLoginDate() {
        return userLoginDate;
    }

    public void setUserLoginDate(String userLoginDate) {
        this.userLoginDate = userLoginDate;
    }

    public String getUserLogoutDate() {
        return userLogoutDate;
    }

    public void setUserLogoutDate(String userLogoutDate) {
        this.userLogoutDate = userLogoutDate;
    }
}
