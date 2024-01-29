package com.jnv.bbs.faq.controller;

import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.jnv.bbs.faq.service.FaqListService;
import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;


@Controller
public class FaqListController {

    @Resource(name = "faqListService")
    private FaqListService service;

    /**
     * FAQ 목록 조회
     *
     * @param searchMap
     * @return result
     */
    @RequestMapping("bbs/faq/getFaqList.do")
    public NexacroResult getFaqList(@ParamDataSet(name = "dsSearch") Map<String, Object> searchMap) {
        NexacroResult result = new NexacroResult();
        result.addDataSet("dsList", service.getFaqList(searchMap));
        return result;
    }
}
