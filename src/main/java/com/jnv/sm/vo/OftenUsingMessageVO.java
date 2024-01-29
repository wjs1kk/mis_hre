package com.jnv.sm.vo;

import org.apache.ibatis.type.Alias;

import com.jnv.jncore.vo.CommonVO;

@Alias("oftenUsingMessageVO")
public class OftenUsingMessageVO extends CommonVO {

    private String mngId;
    private String mngGubun;
    private String msgGubun;
    private String msg;
    private String regYmd;
    private String regBy;
    private String mdfcnYmd;
    private String mdfcnBy;
    private String regUserNameKr;
    private String title;

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getMngId() {
        return mngId;
    }

    public void setMngId(String mngId) {
        this.mngId = mngId;
    }

    public String getMngGubun() {
        return mngGubun;
    }

    public void setMngGubun(String mngGubun) {
        this.mngGubun = mngGubun;
    }

    public String getMsgGubun() {
        return msgGubun;
    }

    public void setMsgGubun(String msgGubun) {
        this.msgGubun = msgGubun;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }

    public String getRegYmd() {
        return regYmd;
    }

    public void setRegYmd(String regYmd) {
        this.regYmd = regYmd;
    }

    public String getRegBy() {
        return regBy;
    }

    public void setRegBy(String regBy) {
        this.regBy = regBy;
    }

    public String getMdfcnYmd() {
        return mdfcnYmd;
    }

    public void setMdfcnYmd(String mdfcnYmd) {
        this.mdfcnYmd = mdfcnYmd;
    }

    public String getMdfcnBy() {
        return mdfcnBy;
    }

    public void setMdfcnBy(String mdfcnBy) {
        this.mdfcnBy = mdfcnBy;
    }

    public String getRegUserNameKr() {
        return regUserNameKr;
    }

    public void setRegUserNameKr(String regUserNameKr) {
        this.regUserNameKr = regUserNameKr;
    }
}
