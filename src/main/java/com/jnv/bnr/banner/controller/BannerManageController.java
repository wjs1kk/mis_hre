package com.jnv.bnr.banner.controller;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.jnv.bnr.banner.service.BannerManageService;
import com.jnv.bnr.vo.BannerVO;
import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;

@Controller
public class BannerManageController {

    public static final String CALLBACK_MSG = "callbackMsg";

    @Resource(name = "bannerManageService")
    private BannerManageService svc;

    /**
     * 배너 상세 조회
     *
     * @return 상세 조회 결과
     */
    @RequestMapping("bnr/banner/getBannerManageItem.do")
    public NexacroResult getBannerManageItem(@ParamDataSet(name = "dsSearch") BannerVO banner) {
        NexacroResult result = new NexacroResult();
        result.addDataSet("dsList", svc.getBannerManageInfo(banner));
        return result;
    }

    /**
     * 배너 상세 수정 후 저장
     *
     * @return 처리 결과
     */
    @RequestMapping("bnr/banner/setBannerManageItem.do")
    public NexacroResult setBannerManageInfo(@ParamDataSet(name = "dsList") BannerVO banner) {
        NexacroResult result = new NexacroResult();
        svc.setBannerManageInfo(banner);
        result.addVariable("bnrId", banner.getBnrId());
//        result.addVariable("fildId", banner.getBnrImgFile());
        result.addVariable(CALLBACK_MSG, "success");
        return result;
    }

    /**
     * 배너 삭제
     *
     * @return 처리 결과
     */
    @RequestMapping("bnr/banner/deleteBannerManageItem.do")
    public NexacroResult deleteBannerInfo(@ParamDataSet(name = "dsList") BannerVO banner) {
        NexacroResult result = new NexacroResult();
        svc.deleteBannerManageInfo(banner);
        result.addVariable(CALLBACK_MSG, "success");
        return result;
    }

    /**
     * 파일 ID 생성
     *
     * @return 생성 결과
     */
//    @RequestMapping("bnr/banner/generateFileId.do")
//    public NexacroResult generateFileId() {
//        NexacroResult result = new NexacroResult();
//        result.addVariable("fileId", svc.generateFileId());
//        return result;
//    }

}