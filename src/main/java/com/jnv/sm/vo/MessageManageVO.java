package com.jnv.sm.vo;

import org.apache.ibatis.type.Alias;

import com.jnv.jncore.vo.CommonVO;

@Alias("messageManageVO")
public class MessageManageVO extends CommonVO {

    private String msgId;
    private String msg;
    private String engMsg;
    private String msgType;
    private String useYn;
    private String rmk;
    private String rgstId;
    private String rgstDt;
    private String rgstIp;
    private String rgstNm;
    private String updtId;
    private String updtIp;
    private String updtDt;
    private String updtNm;

    public String getMsgId() {
        return msgId;
    }

    public void setMsgId(String msgId) {
        this.msgId = msgId;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }

    public String getEngMsg() {
        return engMsg;
    }

    public void setEngMsg(String engMsg) {
        this.engMsg = engMsg;
    }

    public String getMsgType() {
        return msgType;
    }

    public void setMsgType(String msgType) {
        this.msgType = msgType;
    }

    public String getUseYn() {
        return useYn;
    }

    public void setUseYn(String useYn) {
        this.useYn = useYn;
    }

    public String getRmk() {
        return rmk;
    }

    public void setRmk(String rmk) {
        this.rmk = rmk;
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

    public String getRgstNm() {
        return rgstNm;
    }

    public void setRgstNm(String rgstNm) {
        this.rgstNm = rgstNm;
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

    public String getUpdtDt() {
        return updtDt;
    }

    public void setUpdtDt(String updtDt) {
        this.updtDt = updtDt;
    }

    public String getUpdtNm() {
        return updtNm;
    }

    public void setUpdtNm(String updtNm) {
        this.updtNm = updtNm;
    }

}
