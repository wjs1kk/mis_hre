package com.jnv.bnr.site.service;

import java.util.List;
import java.util.Map;

import org.egovframe.rte.psl.dataaccess.mapper.Mapper;

import com.jnv.bnr.vo.SiteVO;

@Mapper("siteManageDAO")
public interface SiteManageDAO {

    List<SiteVO> selectSiteManageList(Map<String, ?> params);

    void insertSiteManageItem(SiteVO item);

    void updateSiteManageItem(SiteVO item);

    void deleteSiteManageItem(SiteVO item);

}
