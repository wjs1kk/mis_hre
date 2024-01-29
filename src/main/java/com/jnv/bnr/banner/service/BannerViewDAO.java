package com.jnv.bnr.banner.service;


import java.util.List;
import java.util.Map;

import org.egovframe.rte.psl.dataaccess.mapper.Mapper;

import com.jnv.bnr.vo.BannerVO;

@Mapper("bannerViewDAO")
public interface BannerViewDAO {

    List<BannerVO> getBannerList(Map<String, Object> searchMap);


}
