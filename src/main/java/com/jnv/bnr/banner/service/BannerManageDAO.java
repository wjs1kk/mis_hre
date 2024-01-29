package com.jnv.bnr.banner.service;

import org.egovframe.rte.psl.dataaccess.mapper.Mapper;

import com.jnv.bnr.vo.BannerVO;

@Mapper("bannerManageDAO")
public interface BannerManageDAO {

    BannerVO getBannerManageItem(BannerVO banner);

    void updateBannerManageItem(BannerVO banner);

    void insertBannerManageItem(BannerVO banner);

    void deleteBannerManageItem(BannerVO banner);

}
