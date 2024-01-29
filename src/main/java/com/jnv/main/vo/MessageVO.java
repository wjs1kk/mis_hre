package com.jnv.main.vo;

import org.apache.ibatis.type.Alias;

import com.jnv.jncore.vo.CommonVO;

/**
 *
 * @author parkmg
 */
@Alias("messageVO")
public class MessageVO extends CommonVO{

    private String msgId;
    private String msg;
    private String engMsg;
    private String msgType;
    private String useYn;

    public String getMsgType() {
        return msgType;
    }
    public void setMsgType(String msgType) {
        this.msgType = msgType;
    }
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
    public String getUseYn() {
        return useYn;
    }
    public void setUseYn(String useYn) {
        this.useYn = useYn;
    }


}
