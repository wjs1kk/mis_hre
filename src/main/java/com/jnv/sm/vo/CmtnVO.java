
package com.jnv.sm.vo;

import org.apache.ibatis.type.Alias;

import com.jnv.jncore.vo.CommonVO;

@Alias("cmtnVO")
public class CmtnVO extends CommonVO{

    private String addr;
    private String age;
    private String birthDe;
    private String eml;
    private String faxNo;
    private String fileId;
    private String gend;
    private String lotAddr1;
    private String lotAddr2;
    private String mblTelno;
    private String regionCd;
    private String rrno;
    private String regYmd;
    private String regUserId;
    private String regUserIp;
    private String roadAddr1;
    private String roadAddr2;
    private String mdfcnYmd;
    private String mdfcnUserId;
    private String mdfcnUserIp;
    private String userId;
    private String userNmEn;
    private String userNmKr;
    private String userPw;
    private String zip;
    private String deptCode;
    private String organCode;
    private String empNo;
    private String groupCode;
    private String deptDegree;           // 차수
    private String upperUserId;
    private String parentDeptCode;  // 트리 구조생성시 상위(부모)
    private String childDeptCode;   // 트리 구조생성시 하위(자식)
    private String deptNameKr;      // 부서명
    private String userDeptNameKr;  // 조직과 사원 관계 맵핑
    private String displayNm;       // 결재 구분(기안 , 결재)
    private String sanctionerId;
    private String sanctionerNmKr;
    private String docNumName;
    private String deptNmKr;
    // 직위 직책 직급
    private String jobCode;
    private String jobNmKr;
    private String posiCode;
    private String posiNmKr;
    private String postCode;
    private String postNmKr;
    private String rspCode;
    private String rspNmKr;

    private String jobGroupCode;        // 직종
    private String jobGroupNmKr;
    private String jobGroupNmEn;
    private String jobGroupSortNum;
    private String jobPositionCode;     // 직위
    private String jobPositionNmKr;
    private String jobPositionNmEn;
    private String jobPositionSortNum;
    private String jobClassCode;        // 직급
    private String jobClassNmKr;
    private String jobClassNmEn;
    private String jobClassSortNum;
    private String jobRspCode;          //직책
    private String jobRspNmKr;
    private String jobRspNmEn;
    private String jobRspSortNum;
    private String userNameKr;
    private String joinYmd;

    private String memberId;
    private String passwd;
    private String emailAddr;
    private String telNo;
    private String phoneNo;
    private String useYn;
    private String rgstId;
    private String rgstIp;
    private String rgstDt;
    private String updtId;
    private String updtIp;
    private String updtDt;
    private String memberNmKr;
    private String memberNmEn;
    private String sexDstn;
    private String brthYmd;
    private String zipNo;
    private String jibunAddr;
    private String roadCd;
    private String roadAddrPart1;
    private String roadAddrPart2;
    private String addrDetail;
    private String roadFullAddr;
    private String insttCd;
    private String organName;
    private String memberClass;
    private String memberPosition;
    private String lastLogin;
    private String smsRcptnAgreYn;
    private String emlRcptnAgreYn;

    public String getMemberId() {
        return memberId;
    }
    public void setMemberId(String memberId) {
        this.memberId = memberId;
    }
    public String getPasswd() {
        return passwd;
    }
    public void setPasswd(String passwd) {
        this.passwd = passwd;
    }
    public String getEmailAddr() {
        return emailAddr;
    }
    public void setEmailAddr(String emailAddr) {
        this.emailAddr = emailAddr;
    }
    public String getTelNo() {
        return telNo;
    }
    public void setTelNo(String telNo) {
        this.telNo = telNo;
    }
    public String getPhoneNo() {
        return phoneNo;
    }
    public void setPhoneNo(String phoneNo) {
        this.phoneNo = phoneNo;
    }
    public String getUseYn() {
        return useYn;
    }
    public void setUseYn(String useYn) {
        this.useYn = useYn;
    }
    public String getRgstId() {
        return rgstId;
    }
    public void setRgstId(String rgstId) {
        this.rgstId = rgstId;
    }
    public String getRgstIp() {
        return rgstIp;
    }
    public void setRgstIp(String rgstIp) {
        this.rgstIp = rgstIp;
    }
    public String getRgstDt() {
        return rgstDt;
    }
    public void setRgstDt(String rgstDt) {
        this.rgstDt = rgstDt;
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
    public String getMemberNmKr() {
        return memberNmKr;
    }
    public void setMemberNmKr(String memberNmKr) {
        this.memberNmKr = memberNmKr;
    }
    public String getMemberNmEn() {
        return memberNmEn;
    }
    public void setMemberNmEn(String memberNmEn) {
        this.memberNmEn = memberNmEn;
    }
    public String getSexDstn() {
        return sexDstn;
    }
    public void setSexDstn(String sexDstn) {
        this.sexDstn = sexDstn;
    }
    public String getBrthYmd() {
        return brthYmd;
    }
    public void setBrthYmd(String brthYmd) {
        this.brthYmd = brthYmd;
    }
    public String getZipNo() {
        return zipNo;
    }
    public void setZipNo(String zipNo) {
        this.zipNo = zipNo;
    }
    public String getJibunAddr() {
        return jibunAddr;
    }
    public void setJibunAddr(String jibunAddr) {
        this.jibunAddr = jibunAddr;
    }
    public String getRoadCd() {
        return roadCd;
    }
    public void setRoadCd(String roadCd) {
        this.roadCd = roadCd;
    }
    public String getRoadAddrPart1() {
        return roadAddrPart1;
    }
    public void setRoadAddrPart1(String roadAddrPart1) {
        this.roadAddrPart1 = roadAddrPart1;
    }
    public String getRoadAddrPart2() {
        return roadAddrPart2;
    }
    public void setRoadAddrPart2(String roadAddrPart2) {
        this.roadAddrPart2 = roadAddrPart2;
    }
    public String getAddrDetail() {
        return addrDetail;
    }
    public void setAddrDetail(String addrDetail) {
        this.addrDetail = addrDetail;
    }
    public String getRoadFullAddr() {
        return roadFullAddr;
    }
    public void setRoadFullAddr(String roadFullAddr) {
        this.roadFullAddr = roadFullAddr;
    }
    public String getInsttCd() {
        return insttCd;
    }
    public void setInsttCd(String insttCd) {
        this.insttCd = insttCd;
    }
    public String getOrganName() {
        return organName;
    }
    public void setOrganName(String organName) {
        this.organName = organName;
    }
    public String getMemberClass() {
        return memberClass;
    }
    public void setMemberClass(String memberClass) {
        this.memberClass = memberClass;
    }
    public String getMemberPosition() {
        return memberPosition;
    }
    public void setMemberPosition(String memberPosition) {
        this.memberPosition = memberPosition;
    }
    public String getLastLogin() {
        return lastLogin;
    }
    public void setLastLogin(String lastLogin) {
        this.lastLogin = lastLogin;
    }
    public String getSmsRcptnAgreYn() {
        return smsRcptnAgreYn;
    }
    public void setSmsRcptnAgreYn(String smsRcptnAgreYn) {
        this.smsRcptnAgreYn = smsRcptnAgreYn;
    }
    public String getEmlRcptnAgreYn() {
        return emlRcptnAgreYn;
    }
    public void setEmlRcptnAgreYn(String emlRcptnAgreYn) {
        this.emlRcptnAgreYn = emlRcptnAgreYn;
    }
    public String getAddr() {
        return addr;
    }
    public void setAddr(String addr) {
        this.addr = addr;
    }
    public String getAge() {
        return age;
    }
    public void setAge(String age) {
        this.age = age;
    }
    public String getBirthDe() {
        return birthDe;
    }
    public void setBirthDe(String birthDe) {
        this.birthDe = birthDe;
    }
    public String getEml() {
        return eml;
    }
    public void setEml(String eml) {
        this.eml = eml;
    }
    public String getFaxNo() {
        return faxNo;
    }
    public void setFaxNo(String faxNo) {
        this.faxNo = faxNo;
    }
    public String getFileId() {
        return fileId;
    }
    public void setFileId(String fileId) {
        this.fileId = fileId;
    }
    public String getGend() {
        return gend;
    }
    public void setGend(String gend) {
        this.gend = gend;
    }
    public String getLotAddr1() {
        return lotAddr1;
    }
    public void setLotAddr1(String lotAddr1) {
        this.lotAddr1 = lotAddr1;
    }
    public String getLotAddr2() {
        return lotAddr2;
    }
    public void setLotAddr2(String lotAddr2) {
        this.lotAddr2 = lotAddr2;
    }
    public String getRegionCd() {
        return regionCd;
    }
    public void setRegionCd(String regionCd) {
        this.regionCd = regionCd;
    }
    public String getRoadAddr1() {
        return roadAddr1;
    }
    public void setRoadAddr1(String roadAddr1) {
        this.roadAddr1 = roadAddr1;
    }
    public String getRoadAddr2() {
        return roadAddr2;
    }
    public void setRoadAddr2(String roadAddr2) {
        this.roadAddr2 = roadAddr2;
    }
    public String getUserId() {
        return userId;
    }
    public void setUserId(String userId) {
        this.userId = userId;
    }
    public String getUserNmEn() {
        return userNmEn;
    }
    public void setUserNmEn(String userNmEn) {
        this.userNmEn = userNmEn;
    }
    public String getUserNmKr() {
        return userNmKr;
    }
    public void setUserNmKr(String userNmKr) {
        this.userNmKr = userNmKr;
    }
    public String getUserPw() {
        return userPw;
    }
    public void setUserPw(String userPw) {
        this.userPw = userPw;
    }
    public String getZip() {
        return zip;
    }
    public void setZip(String zip) {
        this.zip = zip;
    }
    public String getDeptCode() {
        return deptCode;
    }
    public void setDeptCode(String deptCode) {
        this.deptCode = deptCode;
    }
    public String getOrganCode() {
        return organCode;
    }
    public void setOrganCode(String organCode) {
        this.organCode = organCode;
    }
    public String getEmpNo() {
        return empNo;
    }
    public void setEmpNo(String empNo) {
        this.empNo = empNo;
    }
    public String getGroupCode() {
        return groupCode;
    }
    public void setGroupCode(String groupCode) {
        this.groupCode = groupCode;
    }
    public String getDeptDegree() {
        return deptDegree;
    }
    public void setDeptDegree(String deptDegree) {
        this.deptDegree = deptDegree;
    }
    public String getUpperUserId() {
        return upperUserId;
    }
    public void setUpperUserId(String upperUserId) {
        this.upperUserId = upperUserId;
    }
    public String getParentDeptCode() {
        return parentDeptCode;
    }
    public void setParentDeptCode(String parentDeptCode) {
        this.parentDeptCode = parentDeptCode;
    }
    public String getChildDeptCode() {
        return childDeptCode;
    }
    public void setChildDeptCode(String childDeptCode) {
        this.childDeptCode = childDeptCode;
    }
    public String getDeptNameKr() {
        return deptNameKr;
    }
    public void setDeptNameKr(String deptNameKr) {
        this.deptNameKr = deptNameKr;
    }
    public String getUserDeptNameKr() {
        return userDeptNameKr;
    }
    public void setUserDeptNameKr(String userDeptNameKr) {
        this.userDeptNameKr = userDeptNameKr;
    }
    public String getDisplayNm() {
        return displayNm;
    }
    public void setDisplayNm(String displayNm) {
        this.displayNm = displayNm;
    }
    public String getSanctionerId() {
        return sanctionerId;
    }
    public void setSanctionerId(String sanctionerId) {
        this.sanctionerId = sanctionerId;
    }
    public String getSanctionerNmKr() {
        return sanctionerNmKr;
    }
    public void setSanctionerNmKr(String sanctionerNmKr) {
        this.sanctionerNmKr = sanctionerNmKr;
    }
    public String getDocNumName() {
        return docNumName;
    }
    public void setDocNumName(String docNumName) {
        this.docNumName = docNumName;
    }
    public String getDeptNmKr() {
        return deptNmKr;
    }
    public void setDeptNmKr(String deptNmKr) {
        this.deptNmKr = deptNmKr;
    }
    public String getJobCode() {
        return jobCode;
    }
    public void setJobCode(String jobCode) {
        this.jobCode = jobCode;
    }
    public String getJobNmKr() {
        return jobNmKr;
    }
    public void setJobNmKr(String jobNmKr) {
        this.jobNmKr = jobNmKr;
    }
    public String getPosiCode() {
        return posiCode;
    }
    public void setPosiCode(String posiCode) {
        this.posiCode = posiCode;
    }
    public String getPosiNmKr() {
        return posiNmKr;
    }
    public void setPosiNmKr(String posiNmKr) {
        this.posiNmKr = posiNmKr;
    }
    public String getPostCode() {
        return postCode;
    }
    public void setPostCode(String postCode) {
        this.postCode = postCode;
    }
    public String getPostNmKr() {
        return postNmKr;
    }
    public void setPostNmKr(String postNmKr) {
        this.postNmKr = postNmKr;
    }
    public String getRspCode() {
        return rspCode;
    }
    public void setRspCode(String rspCode) {
        this.rspCode = rspCode;
    }
    public String getRspNmKr() {
        return rspNmKr;
    }
    public void setRspNmKr(String rspNmKr) {
        this.rspNmKr = rspNmKr;
    }
    public String getJobGroupCode() {
        return jobGroupCode;
    }
    public void setJobGroupCode(String jobGroupCode) {
        this.jobGroupCode = jobGroupCode;
    }
    public String getJobGroupNmKr() {
        return jobGroupNmKr;
    }
    public void setJobGroupNmKr(String jobGroupNmKr) {
        this.jobGroupNmKr = jobGroupNmKr;
    }
    public String getJobGroupNmEn() {
        return jobGroupNmEn;
    }
    public void setJobGroupNmEn(String jobGroupNmEn) {
        this.jobGroupNmEn = jobGroupNmEn;
    }
    public String getJobGroupSortNum() {
        return jobGroupSortNum;
    }
    public void setJobGroupSortNum(String jobGroupSortNum) {
        this.jobGroupSortNum = jobGroupSortNum;
    }
    public String getJobPositionCode() {
        return jobPositionCode;
    }
    public void setJobPositionCode(String jobPositionCode) {
        this.jobPositionCode = jobPositionCode;
    }
    public String getJobPositionNmKr() {
        return jobPositionNmKr;
    }
    public void setJobPositionNmKr(String jobPositionNmKr) {
        this.jobPositionNmKr = jobPositionNmKr;
    }
    public String getJobPositionNmEn() {
        return jobPositionNmEn;
    }
    public void setJobPositionNmEn(String jobPositionNmEn) {
        this.jobPositionNmEn = jobPositionNmEn;
    }
    public String getJobPositionSortNum() {
        return jobPositionSortNum;
    }
    public void setJobPositionSortNum(String jobPositionSortNum) {
        this.jobPositionSortNum = jobPositionSortNum;
    }
    public String getJobClassCode() {
        return jobClassCode;
    }
    public void setJobClassCode(String jobClassCode) {
        this.jobClassCode = jobClassCode;
    }
    public String getJobClassNmKr() {
        return jobClassNmKr;
    }
    public void setJobClassNmKr(String jobClassNmKr) {
        this.jobClassNmKr = jobClassNmKr;
    }
    public String getJobClassNmEn() {
        return jobClassNmEn;
    }
    public void setJobClassNmEn(String jobClassNmEn) {
        this.jobClassNmEn = jobClassNmEn;
    }
    public String getJobClassSortNum() {
        return jobClassSortNum;
    }
    public void setJobClassSortNum(String jobClassSortNum) {
        this.jobClassSortNum = jobClassSortNum;
    }
    public String getJobRspCode() {
        return jobRspCode;
    }
    public void setJobRspCode(String jobRspCode) {
        this.jobRspCode = jobRspCode;
    }
    public String getJobRspNmKr() {
        return jobRspNmKr;
    }
    public void setJobRspNmKr(String jobRspNmKr) {
        this.jobRspNmKr = jobRspNmKr;
    }
    public String getJobRspNmEn() {
        return jobRspNmEn;
    }
    public void setJobRspNmEn(String jobRspNmEn) {
        this.jobRspNmEn = jobRspNmEn;
    }
    public String getJobRspSortNum() {
        return jobRspSortNum;
    }
    public void setJobRspSortNum(String jobRspSortNum) {
        this.jobRspSortNum = jobRspSortNum;
    }
    public String getUserNameKr() {
        return userNameKr;
    }
    public void setUserNameKr(String userNameKr) {
        this.userNameKr = userNameKr;
    }
    public String getMblTelno() {
        return mblTelno;
    }
    public void setMblTelno(String mblTelno) {
        this.mblTelno = mblTelno;
    }
    public String getRegYmd() {
        return regYmd;
    }
    public void setRegYmd(String regYmd) {
        this.regYmd = regYmd;
    }
    public String getRegUserId() {
        return regUserId;
    }
    public void setRegUserId(String regUserId) {
        this.regUserId = regUserId;
    }
    public String getRegUserIp() {
        return regUserIp;
    }
    public void setRegUserIp(String regUserIp) {
        this.regUserIp = regUserIp;
    }
    public String getMdfcnYmd() {
        return mdfcnYmd;
    }
    public void setMdfcnYmd(String mdfcnYmd) {
        this.mdfcnYmd = mdfcnYmd;
    }
    public String getMdfcnUserId() {
        return mdfcnUserId;
    }
    public void setMdfcnUserId(String mdfcnUserId) {
        this.mdfcnUserId = mdfcnUserId;
    }
    public String getMdfcnUserIp() {
        return mdfcnUserIp;
    }
    public void setMdfcnUserIp(String mdfcnUserIp) {
        this.mdfcnUserIp = mdfcnUserIp;
    }
    public String getRrno() {
        return rrno;
    }
    public void setRrno(String rrno) {
        this.rrno = rrno;
    }
    public String getJoinYmd() {
        return joinYmd;
    }
    public void setJoinYmd(String joinYmd) {
        this.joinYmd = joinYmd;
    }
}
