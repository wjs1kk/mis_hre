package com.jnv.sm.vo;

import org.apache.ibatis.type.Alias;

import com.jnv.jncore.vo.CommonVO;

@Alias("roleManageVO")
public class RoleManageVO extends CommonVO {

    private String roleCode;
    private String sysId;
    private String moduleId;
    private String moduleNm;
    private String roleNm;
    private String roleDc;
    private String rolePermit;
    private String workGrpId;
    private String useYn;
    private String useYmd;
    private String endYmd;
    private String rgstId;
    private String rgstIp;
    private String rgstDt;
    private String updtId;
    private String updtIp;
    private String updtDt;
    private String parentRole;
    private String parentRoleNm;
    private String childRole;
    private String childRoleNm;

    public String getModuleNm() {
        return moduleNm;
    }

    public void setModuleNm(String moduleNm) {
        this.moduleNm = moduleNm;
    }

    public String getParentRoleNm() {
        return parentRoleNm;
    }

    public void setParentRoleNm(String parentRoleNm) {
        this.parentRoleNm = parentRoleNm;
    }

    public String getChildRoleNm() {
        return childRoleNm;
    }

    public void setChildRoleNm(String childRoleNm) {
        this.childRoleNm = childRoleNm;
    }

    public String getParentRole() {
        return parentRole;
    }

    public void setParentRole(String parentRole) {
        this.parentRole = parentRole;
    }

    public String getChildRole() {
        return childRole;
    }

    public void setChildRole(String childRole) {
        this.childRole = childRole;
    }

    public String getRoleCode() {
        return roleCode;
    }

    public void setRoleCode(String roleCode) {
        this.roleCode = roleCode;
    }

    public String getSysId() {
        return sysId;
    }

    public void setSysId(String sysId) {
        this.sysId = sysId;
    }

    public String getModuleId() {
        return moduleId;
    }

    public void setModuleId(String moduleId) {
        this.moduleId = moduleId;
    }

    public String getRoleNm() {
        return roleNm;
    }

    public void setRoleNm(String roleNm) {
        this.roleNm = roleNm;
    }

    public String getRoleDc() {
        return roleDc;
    }

    public void setRoleDc(String roleDc) {
        this.roleDc = roleDc;
    }

    public String getRolePermit() {
        return rolePermit;
    }

    public void setRolePermit(String rolePermit) {
        this.rolePermit = rolePermit;
    }

    public String getWorkGrpId() {
        return workGrpId;
    }

    public void setWorkGrpId(String workGrpId) {
        this.workGrpId = workGrpId;
    }

    public String getUseYn() {
        return useYn;
    }

    public void setUseYn(String useYn) {
        this.useYn = useYn;
    }

    public String getUseYmd() {
        return useYmd;
    }

    public void setUseYmd(String useYmd) {
        this.useYmd = useYmd;
    }

    public String getEndYmd() {
        return endYmd;
    }

    public void setEndYmd(String endYmd) {
        this.endYmd = endYmd;
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

}
