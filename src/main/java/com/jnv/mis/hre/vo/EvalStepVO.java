package com.jnv.mis.hre.vo;

import com.jnv.jncore.vo.CommonVO;

public class EvalStepVO extends CommonVO{
	String evalYear;
	String evalStepStepCd;
	String evalStepStartDt;
	String evalStepEndtDt;
	
	public String getEvalYear() {
		return evalYear;
	}
	public void setEvalYear(String evalYear) {
		this.evalYear = evalYear;
	}
	public String getEvalStepStepCd() {
		return evalStepStepCd;
	}
	public void setEvalStepStepCd(String evalStepStepCd) {
		this.evalStepStepCd = evalStepStepCd;
	}
	public String getEvalStepStartDt() {
		return evalStepStartDt;
	}
	public void setEvalStepStartDt(String evalStepStartDt) {
		this.evalStepStartDt = evalStepStartDt;
	}
	public String getEvalStepEndtDt() {
		return evalStepEndtDt;
	}
	public void setEvalStepEndtDt(String evalStepEndtDt) {
		this.evalStepEndtDt = evalStepEndtDt;
	}
}
