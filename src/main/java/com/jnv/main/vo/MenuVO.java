package com.jnv.main.vo;

import org.apache.ibatis.type.Alias;

import com.jnv.jncore.vo.CommonVO;

/**
 * 자주사용하는 메뉴 변수 , 메인 최상단 이미지 경로 추가
 * 2019-12-19일 추가
 *
 * @author KIMKT
 */
@Alias("menuVO")
public class MenuVO extends CommonVO {

    private String rowNum;
    private String menuId;
    private String upperMenuId;
    private String menuNm;
    private String menuDc;
    private String menuTy;
    private String progId;
    private String url;
    private String indctYn;
    private String sortOrdr;
    private String menuNmPath;
    private String defaultRowCnt;
    private String moduleId;
    private String dispIconUrl;
    private String id;
    private String parent;
    private String text;
    private String oftenUseYn; // 자주사용하는 메뉴 바로가기
    private String mainImgSrc; // 메인 최상단 메뉴 이미지 경로
    private String mainUrl; // 상단의 메뉴 이미지를 클릭시 home 영역의 내용 바뀔 페이지 url
    private int level;
    private String langId;
    private String sysId;

    private String favoriteYn;

    public String getMainUrl() {
        return mainUrl;
    }

    public void setMainUrl(String mainUrl) {
        this.mainUrl = mainUrl;
    }

    public String getMainImgSrc() {
        return mainImgSrc;
    }

    public void setMainImgSrc(String mainImgSrc) {
        this.mainImgSrc = mainImgSrc;
    }

    public String getOftenUseYn() {
        return oftenUseYn;
    }

    public void setOftenUseYn(String oftenUseYn) {
        this.oftenUseYn = oftenUseYn;
    }

    public String getRowNum() {
        return rowNum;
    }

    public void setRowNum(String rowNum) {
        this.rowNum = rowNum;
    }

    public String getMenuId() {
        return menuId;
    }

    public void setMenuId(String menuId) {
        this.menuId = menuId;
    }

    public String getUpperMenuId() {
        return upperMenuId;
    }

    public void setUpperMenuId(String upperMenuId) {
        this.upperMenuId = upperMenuId;
    }

    public String getMenuNm() {
        return menuNm;
    }

    public void setMenuNm(String menuNm) {
        this.menuNm = menuNm;
    }

    public String getMenuDc() {
        return menuDc;
    }

    public void setMenuDc(String menuDc) {
        this.menuDc = menuDc;
    }

    public String getMenuTy() {
        return menuTy;
    }

    public void setMenuTy(String menuTy) {
        this.menuTy = menuTy;
    }

    public String getProgId() {
        return progId;
    }

    public void setProgId(String progId) {
        this.progId = progId;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getSortOrdr() {
        return sortOrdr;
    }

    public void setSortOrdr(String sortOrdr) {
        this.sortOrdr = sortOrdr;
    }

    public String getMenuNmPath() {
        return menuNmPath;
    }

    public void setMenuNmPath(String menuNmPath) {
        this.menuNmPath = menuNmPath;
    }

    public String getDefaultRowCnt() {
        return defaultRowCnt;
    }

    public void setDefaultRowCnt(String defaultRowCnt) {
        this.defaultRowCnt = defaultRowCnt;
    }

    public String getModuleId() {
        return moduleId;
    }

    public void setModuleId(String moduleId) {
        this.moduleId = moduleId;
    }

    public String getDispIconUrl() {
        return dispIconUrl;
    }

    public void setDispIconUrl(String dispIconUrl) {
        this.dispIconUrl = dispIconUrl;
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

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public String getIndctYn() {
        return indctYn;
    }

    public void setIndctYn(String indctYn) {
        this.indctYn = indctYn;
    }

    public int getLevel() {
        return level;
    }

    public void setLevel(int level) {
        this.level = level;
    }

    public String getLangId() {
        return langId;
    }

    public void setLangId(String langId) {
        this.langId = langId;
    }

    public String getSysId() {
        return sysId;
    }

    public void setSysId(String sysId) {
        this.sysId = sysId;
    }

    public String getFavoriteYn() {
        return favoriteYn;
    }

    public void setFavoriteYn(String favoriteYn) {
        this.favoriteYn = favoriteYn;
    }
}
