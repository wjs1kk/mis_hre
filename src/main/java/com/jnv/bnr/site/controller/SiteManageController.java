package com.jnv.bnr.site.controller;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.jnv.bnr.site.service.SiteManageService;
import com.jnv.bnr.vo.SiteVO;
import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;

@Controller
public class SiteManageController {

    @Resource(name = "siteManageService")
    private SiteManageService svc;

    /**
     * 사이트 관리 목록을 조회한다.
     *
     * @param params
     * @return
     */
    @RequestMapping("bnr/site/getSiteManageList.do")
    public NexacroResult getSiteManageList(@ParamDataSet(name = "dsSearch") Map<String, Object> params) {
        NexacroResult result = new NexacroResult();
        List<SiteVO> list = svc.selectSiteManageList(params);
        result.addDataSet("dsList", list);
        return result;
    }

    /**
     * 사이트 관리 목록을 저장한다.
     *
     * @param data
     * @return
     */
    @RequestMapping("bnr/site/saveSiteManageList.do")
    public NexacroResult saveSiteManageList(@ParamDataSet(name = "dsList") List<SiteVO> data) {
        NexacroResult result = new NexacroResult();
        svc.saveSiteManageList(data);
        result.addVariable("callbackMsg", "success");
        return result;
    }
}
