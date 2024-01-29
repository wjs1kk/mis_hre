package com.jnv.org.dept.vo;

import org.apache.ibatis.type.Alias;

import com.jnv.jncore.vo.CommonVO;

@Alias("deptManageVO")
public class DeptManageVO extends CommonVO{
	
	private String deptCd; 		// 부서코드
	private String deptNm; 		// 부서명
	private String deptLdrId; 	// 부서장 아이디
	private String deptLdrNm;
	private String deptMngrId;	// 부서담당자 아이디
	private String deptMngrNm;
	private String deptDesc;	// 부서설명
	private String useYn;		// 사용여부
	private String ordSn;		// 정렬순서
	private String upDeptCd;	// 상위부서코드
	private String upDeptNm;
	
	private String level; 		// 트리구조 레벨 
	
	public String getDeptCd() {
		return deptCd;
	}
	public void setDeptCd(String deptCd) {
		this.deptCd = deptCd;
	}
	public String getDeptNm() {
		return deptNm;
	}
	public void setDeptNm(String deptNm) {
		this.deptNm = deptNm;
	}
	public String getDeptLdrId() {
		return deptLdrId;
	}
	public void setDeptLdrId(String deptLdrId) {
		this.deptLdrId = deptLdrId;
	}
	public String getDeptLdrNm() {
		return deptLdrNm;
	}
	public void setDeptLdrNm(String deptLdrNm) {
		this.deptLdrNm = deptLdrNm;
	}
	public String getDeptMngrId() {
		return deptMngrId;
	}
	public void setDeptMngrId(String deptMngrId) {
		this.deptMngrId = deptMngrId;
	}
	public String getDeptMngrNm() {
		return deptMngrNm;
	}
	public void setDeptMngrNm(String deptMngrNm) {
		this.deptMngrNm = deptMngrNm;
	}
	public String getDeptDesc() {
		return deptDesc;
	}
	public void setDeptDesc(String deptDesc) {
		this.deptDesc = deptDesc;
	}
	public String getUseYn() {
		return useYn;
	}
	public void setUseYn(String useYn) {
		this.useYn = useYn;
	}
	public String getOrdSn() {
		return ordSn;
	}
	public void setOrdSn(String ordSn) {
		this.ordSn = ordSn;
	}
	public String getUpDeptCd() {
		return upDeptCd;
	}
	public void setUpDeptCd(String upDeptCd) {
		this.upDeptCd = upDeptCd;
	}
	public String getUpDeptNm() {
		return upDeptNm;
	}
	public void setUpDeptNm(String upDeptNm) {
		this.upDeptNm = upDeptNm;
	}
	public String getLevel() {
		return level;
	}
	public void setLevel(String level) {
		this.level = level;
	}
	
	
}
