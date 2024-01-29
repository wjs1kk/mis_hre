package com.jnv.bnr.banner.service;

import java.util.List;
import java.util.Map;

import com.jnv.bnr.vo.BannerVO;

public interface BannerViewService {

    List<BannerVO> getBannerList(Map<String, Object> searchMap);

}
