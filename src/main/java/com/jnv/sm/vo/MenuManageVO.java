package com.jnv.sm.vo;

import org.apache.ibatis.type.Alias;

import com.jnv.jncore.vo.CommonVO;

@Alias("menuManageVO")
public class MenuManageVO extends CommonVO {

    private String defaultRowCnt;
    private String indctYn;
    private String menuDc;
    private String menuId;
    private String menuNm;
    private String menuTy;
    private String menuType;
    private String moduleId;
    private String progId;
    private String progNm;
    private String sortOrdr;
    private String upperMenuId;
    private String rowNum;
    private String link;
    private String cnt;
    private String oftenUseYn;
    private String rgstId;
    private String rgstIp;
    private String rgstDt;
    private String updtId;
    private String updtIp;
    private String updtDt;

    private String treeKey;
    private String treeUpper;
    private String treeText;
    private String author;
    private String progUrl;
    private String progFileNm;
    private String menuFullNm;
    private String funcFullNm;
    private String mainUrl;

    private String level;

    private String sysNm;
    private String sysId;

    private String id;
    private String parent;

    public String getDefaultRowCnt() {
        return defaultRowCnt;
    }

    public String getMainUrl() {
        return mainUrl;
    }

    public void setMainUrl(String mainUrl) {
        this.mainUrl = mainUrl;
    }

    public String getMenuFullNm() {
        return menuFullNm;
    }

    public void setMenuFullNm(String menuFullNm) {
        this.menuFullNm = menuFullNm;
    }

    public String getFuncFullNm() {
        return funcFullNm;
    }

    public void setFuncFullNm(String funcFullNm) {
        this.funcFullNm = funcFullNm;
    }

    public String getProgFileNm() {
        return progFileNm;
    }

    public void setProgFileNm(String progFileNm) {
        this.progFileNm = progFileNm;
    }

    public String getProgUrl() {
        return progUrl;
    }

    public void setProgUrl(String progUrl) {
        this.progUrl = progUrl;
    }

    public void setDefaultRowCnt(String defaultRowCnt) {
        this.defaultRowCnt = defaultRowCnt;
    }

    public String getMenuDc() {
        return menuDc;
    }

    public void setMenuDc(String menuDc) {
        this.menuDc = menuDc;
    }

    public String getMenuId() {
        return menuId;
    }

    public void setMenuId(String menuId) {
        this.menuId = menuId;
    }

    public String getMenuNm() {
        return menuNm;
    }

    public void setMenuNm(String menuNm) {
        this.menuNm = menuNm;
    }

    public String getMenuTy() {
        return menuTy;
    }

    public void setMenuTy(String menuTy) {
        this.menuTy = menuTy;
    }

    public String getMenuType() {
        return menuType;
    }

    public void setMenuType(String menuType) {
        this.menuType = menuType;
    }

    public String getModuleId() {
        return moduleId;
    }

    public void setModuleId(String moduleId) {
        this.moduleId = moduleId;
    }

    public String getProgId() {
        return progId;
    }

    public void setProgId(String progId) {
        this.progId = progId;
    }

    public String getProgNm() {
        return progNm;
    }

    public void setProgNm(String progNm) {
        this.progNm = progNm;
    }

    public String getSortOrdr() {
        return sortOrdr;
    }

    public void setSortOrdr(String sortOrdr) {
        this.sortOrdr = sortOrdr;
    }

    public String getUpperMenuId() {
        return upperMenuId;
    }

    public void setUpperMenuId(String upperMenuId) {
        this.upperMenuId = upperMenuId;
    }

    public String getRowNum() {
        return rowNum;
    }

    public void setRowNum(String rowNum) {
        this.rowNum = rowNum;
    }

    public String getLink() {
        return link;
    }

    public void setLink(String link) {
        this.link = link;
    }

    public String getCnt() {
        return cnt;
    }

    public void setCnt(String cnt) {
        this.cnt = cnt;
    }

    public String getOftenUseYn() {
        return oftenUseYn;
    }

    public void setOftenUseYn(String oftenUseYn) {
        this.oftenUseYn = oftenUseYn;
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

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getIndctYn() {
        return indctYn;
    }

    public void setIndctYn(String indctYn) {
        this.indctYn = indctYn;
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

    public String getLevel() {
        return level;
    }

    public void setLevel(String level) {
        this.level = level;
    }

    public String getSysNm() {
        return sysNm;
    }

    public void setSysNm(String sysNm) {
        this.sysNm = sysNm;
    }

    public String getSysId() {
        return sysId;
    }

    public void setSysId(String sysId) {
        this.sysId = sysId;
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
