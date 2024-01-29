package com.jnv.bbs.controller;

import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.jnv.bbs.service.NoticeBoardListService;
import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;

@Controller
public class NoticeBoardListController {

    @Resource(name = "noticeBoardListService")
    private NoticeBoardListService service;

    /**
     * 소통광장 - 게시물 목록 조회
     *
     * @param searchMap
     * @return result
     */
    @RequestMapping("bbs/noticeBoard/getNoticeBoardList.do")
    public NexacroResult getNoticeBoardList(@ParamDataSet(name = "dsSearch") Map<String, Object> searchMap) {
        NexacroResult result = new NexacroResult();
        result.addDataSet("dsList", service.getNoticeBoardList(searchMap));

        return result;
    }

}
