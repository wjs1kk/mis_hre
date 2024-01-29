package com.jnv.bnr.site.service;

import java.util.List;
import java.util.Map;

import com.jnv.bnr.vo.SiteVO;

public interface SiteManageService {

    List<SiteVO> selectSiteManageList(Map<String, ?> params);

    void saveSiteManageList(List<SiteVO> list);

}
