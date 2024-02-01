package com.jnv.mis.hre.std.vo;

import com.jnv.jncore.vo.CommonVO;

public class EvalGradeVO extends CommonVO{
	private String evalId;
	private String evalGrade;
	private int evalPointRange;
	private String evalPointRoundOption;
	private String useYn;
	public String getEvalId() {
		return evalId;
	}
	public void setEvalId(String evalId) {
		this.evalId = evalId;
	}
	public String getEvalGrade() {
		return evalGrade;
	}
	public void setEvalGrade(String evalGrade) {
		this.evalGrade = evalGrade;
	}
	public int getEvalPointRange() {
		return evalPointRange;
	}
	public void setEvalPointRange(int evalPointRange) {
		this.evalPointRange = evalPointRange;
	}
	public String getEvalPointRoundOption() {
		return evalPointRoundOption;
	}
	public void setEvalPointRoundOption(String evalPointRoundOption) {
		this.evalPointRoundOption = evalPointRoundOption;
	}
	public String getUseYn() {
		return useYn;
	}
	public void setUseYn(String useYn) {
		this.useYn = useYn;
	}
	
}
