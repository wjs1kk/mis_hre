package com.jnv.bnr.banner.service.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.jnv.bnr.banner.service.BannerViewDAO;
import com.jnv.bnr.banner.service.BannerViewService;
import com.jnv.bnr.vo.BannerVO;

@Service("bannerViewService")
@Transactional
public class BannerViewServiceImpl implements BannerViewService {

    @Resource(name = "bannerViewDAO")
    private BannerViewDAO dao;

    /**
     * 배너 조회
     */
    @Override
    public List<BannerVO> getBannerList(Map<String, Object> searchMap) {
        return dao.getBannerList(searchMap);
    }

}
