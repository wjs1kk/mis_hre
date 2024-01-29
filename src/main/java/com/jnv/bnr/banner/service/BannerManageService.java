package com.jnv.bnr.banner.service;

import com.jnv.bnr.vo.BannerVO;

public interface BannerManageService {

    BannerVO getBannerManageInfo(BannerVO banner);

    void setBannerManageInfo(BannerVO banner);

    void deleteBannerManageInfo(BannerVO banner);

//    String generateFileId();

}
