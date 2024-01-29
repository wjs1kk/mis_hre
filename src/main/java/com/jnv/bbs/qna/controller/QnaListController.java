package com.jnv.bbs.qna.controller;

import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.jnv.bbs.qna.service.QnaListService;
import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;

@Controller
public class QnaListController {

    @Resource(name = "qnaListService")
    private QnaListService service;

    /**
     * QNA 목록 조회
     *
     * @param
     * @return result
     */
    @RequestMapping("bbs/qna/getQnaList.do")
    public NexacroResult getQnaList(@ParamDataSet(name = "dsSearch") Map<String, Object> searchMap) {
        NexacroResult result = new NexacroResult();
        result.addDataSet("dsList", service.getQnaList(searchMap));
        return result;
    }
}
