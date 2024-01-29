package com.jnv.common.vo;

import org.apache.ibatis.type.Alias;

import com.jnv.jncore.vo.CommonFileVO;

@Alias("thumbnailedFileVO")
public class ThumbnailedFileVO extends CommonFileVO {

    private String preview;
    private String type;
    private String status;
    private boolean encrypted;

    public String getPreview() {
        return preview;
    }

    public void setPreview(String image) {
        this.preview = image;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public boolean isEncrypted() {
        return encrypted;
    }

    public void setEncrypted(boolean encrypted) {
        this.encrypted = encrypted;
    }
}
