package com.jnv.hlp.helpRequest.controller;

import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.jnv.hlp.helpRequest.service.HelpRequestListService;
import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;

/**
 * 요청 현황 리스트 정보 조회
 *
 * @return 조회 결과
 */

@Controller
public class HelpRequestListController {

    @Resource(name = "helpRequestListService")
    private HelpRequestListService svc;

    @RequestMapping("hlp/helpRequest/getHelpRequestList.do")
    public NexacroResult getHelpRequestList(@ParamDataSet(name = "dsSearch") Map<String, Object> searchMap) {
        NexacroResult result = new NexacroResult();
        result.addDataSet("dsList", svc.getHelpRequestList(searchMap));
        return result;
    }
}
