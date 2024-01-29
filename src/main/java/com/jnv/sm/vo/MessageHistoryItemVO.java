package com.jnv.sm.vo;

import org.apache.ibatis.type.Alias;

import com.jnv.jncore.vo.CommonVO;

@Alias("messageHistoryItemVO")
public class MessageHistoryItemVO extends CommonVO {

    private String sndngSeq;
    private String sndngGubun;
    private String sndngGubunName;
    private String userId;
    private String userNameKr;
    private String sndngTitle;
    private String sndngContents;
    private String sndngCount;
    private String sndngYmd;

    public String getSndngSeq() {
        return sndngSeq;
    }

    public void setSndngSeq(String sndngSeq) {
        this.sndngSeq = sndngSeq;
    }

    public String getSndngGubun() {
        return sndngGubun;
    }

    public void setSndngGubun(String sndngGubun) {
        this.sndngGubun = sndngGubun;
    }

    public String getSndngGubunName() {
        return sndngGubunName;
    }

    public void setSndngGubunName(String sndngGubunName) {
        this.sndngGubunName = sndngGubunName;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getUserNameKr() {
        return userNameKr;
    }

    public void setUserNameKr(String userNameKr) {
        this.userNameKr = userNameKr;
    }

    public String getSndngTitle() {
        return sndngTitle;
    }

    public void setSndngTitle(String sndngTitle) {
        this.sndngTitle = sndngTitle;
    }

    public String getSndngContents() {
        return sndngContents;
    }

    public void setSndngContents(String sndngContents) {
        this.sndngContents = sndngContents;
    }

    public String getSndngCount() {
        return sndngCount;
    }

    public void setSndngCount(String sndngCount) {
        this.sndngCount = sndngCount;
    }

    public String getSndngYmd() {
        return sndngYmd;
    }

    public void setSndngYmd(String sndngYmd) {
        this.sndngYmd = sndngYmd;
    }
}
