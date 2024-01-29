package com.jnv.sm.vo;

import org.apache.ibatis.type.Alias;

import com.jnv.jncore.vo.CommonVO;

@Alias("roleMenuManageVO")
public class RoleMenuManageVO extends CommonVO {

    private String rowNum;
    private String roleCode;
    private String roleNm;
    private String parentRole;
    private String permission;
    private String moduleId;
    private String useYn;
    private String useYmd;
    private String endYmd;
    private String roleDc;
    private String lineCodeNmKr;
    private String moduleNm;

    private String treeKey;
    private String treeUpper;
    private String treeText;
    private String description;
    private String sortOrdr;
    private String funcAt;
    private String authYn;
    private String level;

    private String rolePermit;
    private String sysId;
    private String indctYn;
    private String menuId;
    private String funcId;
    private String funcCnt;
    private String authCnt;

    private String id;
    private String parent;

    public String getSysId() {
        return sysId;
    }

    public void setSysId(String sysId) {
        this.sysId = sysId;
    }

    public String getLevel() {
        return level;
    }

    public void setLevel(String level) {
        this.level = level;
    }

    public String getRowNum() {
        return rowNum;
    }

    public void setRowNum(String rowNum) {
        this.rowNum = rowNum;
    }

    public String getAuthYn() {
        return authYn;
    }

    public void setAuthYn(String authYn) {
        this.authYn = authYn;
    }

    public String getTreeKey() {
        return treeKey;
    }

    public void setTreeKey(String treeKey) {
        this.treeKey = treeKey;
    }

    public String getTreeUpper() {
        return treeUpper;
    }

    public void setTreeUpper(String treeUpper) {
        this.treeUpper = treeUpper;
    }

    public String getTreeText() {
        return treeText;
    }

    public void setTreeText(String treeText) {
        this.treeText = treeText;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getSortOrdr() {
        return sortOrdr;
    }

    public void setSortOrdr(String sortOrdr) {
        this.sortOrdr = sortOrdr;
    }

    public String getFuncAt() {
        return funcAt;
    }

    public void setFuncAt(String funcAt) {
        this.funcAt = funcAt;
    }

    public String getRoleCode() {
        return roleCode;
    }

    public void setRoleCode(String roleCode) {
        this.roleCode = roleCode;
    }

    public String getRoleNm() {
        return roleNm;
    }

    public void setRoleNm(String roleNm) {
        this.roleNm = roleNm;
    }

    public String getParentRole() {
        return parentRole;
    }

    public void setParentRole(String parentRole) {
        this.parentRole = parentRole;
    }

    public String getPermission() {
        return permission;
    }

    public void setPermission(String permission) {
        this.permission = permission;
    }

    public String getModuleId() {
        return moduleId;
    }

    public void setModuleId(String moduleId) {
        this.moduleId = moduleId;
    }

    public String getRoleDc() {
        return roleDc;
    }

    public void setRoleDc(String roleDc) {
        this.roleDc = roleDc;
    }

    public String getLineCodeNmKr() {
        return lineCodeNmKr;
    }

    public void setLineCodeNmKr(String lineCodeNmKr) {
        this.lineCodeNmKr = lineCodeNmKr;
    }

    public String getModuleNm() {
        return moduleNm;
    }

    public void setModuleNm(String moduleNm) {
        this.moduleNm = moduleNm;
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

    public String getRolePermit() {
        return rolePermit;
    }

    public void setRolePermit(String rolePermit) {
        this.rolePermit = rolePermit;
    }

    public String getIndctYn() {
        return indctYn;
    }

    public void setIndctYn(String indctYn) {
        this.indctYn = indctYn;
    }

    public String getMenuId() {
        return menuId;
    }

    public void setMenuId(String menuId) {
        this.menuId = menuId;
    }

    public String getFuncId() {
        return funcId;
    }

    public void setFuncId(String funcId) {
        this.funcId = funcId;
    }

    public String getFuncCnt() {
        return funcCnt;
    }

    public void setFuncCnt(String funcCnt) {
        this.funcCnt = funcCnt;
    }

    public String getAuthCnt() {
        return authCnt;
    }

    public void setAuthCnt(String authCnt) {
        this.authCnt = authCnt;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getParent() {
        return parent;
    }

    public void setParent(String parent) {
        this.parent = parent;
    }
}
