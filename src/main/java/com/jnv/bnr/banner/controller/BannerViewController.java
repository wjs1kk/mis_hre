package com.jnv.bnr.banner.controller;

import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.jnv.bnr.banner.service.BannerViewService;
import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;

@Controller
public class BannerViewController {

    @Resource(name = "bannerViewService")
    private BannerViewService svc;

    /**
     * 배너 리스트 정보 조회
     *
     * @return 조회 결과
     */

    @RequestMapping("bnr/banner/getBannerList.do")
    public NexacroResult getBannerList(@ParamDataSet(name = "dsSearch") Map<String, Object> searchMap) {
        NexacroResult result = new NexacroResult();
        result.addDataSet("dsList", svc.getBannerList(searchMap));
        return result;
    }

}
