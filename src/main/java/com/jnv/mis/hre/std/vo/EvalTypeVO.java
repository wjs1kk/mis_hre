package com.jnv.mis.hre.std.vo;

import com.jnv.jncore.vo.CommonVO;

public class EvalTypeVO extends CommonVO{
	String evalId;
	String evalTypeCd;
	String evalMethodCd;
	String evalAdjustMethod;
	String evalAdjustProceduer;
	String evalAdjustAvg;
	String evalAdjustStdevp;
	String useYn;
	
	public String getEvalId() {
		return evalId;
	}
	public void setEvalId(String evalId) {
		this.evalId = evalId;
	}
	public String getEvalTypeCd() {
		return evalTypeCd;
	}
	public void setEvalTypeCd(String evalTypeCd) {
		this.evalTypeCd = evalTypeCd;
	}
	public String getEvalMethodCd() {
		return evalMethodCd;
	}
	public void setEvalMethodCd(String evalMethodCd) {
		this.evalMethodCd = evalMethodCd;
	}
	public String getEvalAdjustMethod() {
		return evalAdjustMethod;
	}
	public void setEvalAdjustMethod(String evalAdjustMethod) {
		this.evalAdjustMethod = evalAdjustMethod;
	}
	public String getEvalAdjustProceduer() {
		return evalAdjustProceduer;
	}
	public void setEvalAdjustProceduer(String evalAdjustProceduer) {
		this.evalAdjustProceduer = evalAdjustProceduer;
	}
	public String getEvalAdjustAvg() {
		return evalAdjustAvg;
	}
	public void setEvalAdjustAvg(String evalAdjustAvg) {
		this.evalAdjustAvg = evalAdjustAvg;
	}
	public String getEvalAdjustStdevp() {
		return evalAdjustStdevp;
	}
	public void setEvalAdjustStdevp(String evalAdjustStdevp) {
		this.evalAdjustStdevp = evalAdjustStdevp;
	}
	
	public String getUseYn() {
		return useYn;
	}
	public void setUseYn(String useYn) {
		this.useYn = useYn;
	}

}