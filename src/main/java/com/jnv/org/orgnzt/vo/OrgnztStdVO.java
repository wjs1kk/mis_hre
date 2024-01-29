package com.jnv.org.orgnzt.vo;

import org.apache.ibatis.type.Alias;

import com.jnv.jncore.vo.CommonVO;

@Alias("orgnztStdVO")
public class OrgnztStdVO extends CommonVO{

    private String stdYmd;      // 기준일자
    private String stdYmddesc;  // 기준일자 설명
    private String crrntYn;     // 현재기준 여부

    private String orgnCd;      // 조직코드
    private String enableYn;    // 활성화여부

    public String getStdYmd() {
        return stdYmd;
    }
    public void setStdYmd(String stdYmd) {
        this.stdYmd = stdYmd;
    }
    public String getStdYmddesc() {
        return stdYmddesc;
    }
    public void setStdYmddesc(String stdYmddesc) {
        this.stdYmddesc = stdYmddesc;
    }
    public String getCrrntYn() {
        return crrntYn;
    }
    public void setCrrntYn(String crrntYn) {
        this.crrntYn = crrntYn;
    }
    public String getOrgnCd() {
        return orgnCd;
    }
    public void setOrgnCd(String orgnCd) {
        this.orgnCd = orgnCd;
    }
    public String getEnableYn() {
        return enableYn;
    }
    public void setEnableYn(String enableYn) {
        this.enableYn = enableYn;
    }


}
