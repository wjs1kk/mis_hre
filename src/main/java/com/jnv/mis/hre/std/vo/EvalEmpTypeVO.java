package com.jnv.mis.hre.std.vo;

import com.jnv.jncore.vo.CommonVO;

public class EvalEmpTypeVO extends CommonVO{
	private String evalId;
	private String evalEmpGrpCd;
	private String evalTypeCd;
	private String evalTypeWgt;
	private String evalPlusPoint;
	private String useYn;
	public String getEvalId() {
		return evalId;
	}
	public void setEvalId(String evalId) {
		this.evalId = evalId;
	}
	public String getEvalEmpGrpCd() {
		return evalEmpGrpCd;
	}
	public void setEvalEmpGrpCd(String evalEmpGrpCd) {
		this.evalEmpGrpCd = evalEmpGrpCd;
	}
	public String getEvalTypeCd() {
		return evalTypeCd;
	}
	public void setEvalTypeCd(String evalTypeCd) {
		this.evalTypeCd = evalTypeCd;
	}
	public String getEvalTypeWgt() {
		return evalTypeWgt;
	}
	public void setEvalTypeWgt(String evalTypeWgt) {
		this.evalTypeWgt = evalTypeWgt;
	}
	public String getEvalPlusPoint() {
		return evalPlusPoint;
	}
	public void setEvalPlusPoint(String evalPlusPoint) {
		this.evalPlusPoint = evalPlusPoint;
	}
	public String getUseYn() {
		return useYn;
	}
	public void setUseYn(String useYn) {
		this.useYn = useYn;
	}
	
}
