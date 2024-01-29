package com.jnv.bbs.scrp.controller;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.jnv.bbs.scrp.service.BoardScrpService;
import com.jnv.bbs.vo.BoardScrpVO;
import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;

@Controller
public class BoardScrpController {

    @Resource(name = "boardScrpService")
    private BoardScrpService service;

    /**
     * 소통광장 - 게시판 - 스크랩 목록
     *
     * @param searchMap
     * @return result
     */
    @RequestMapping("bbs/boardScrap/getBoardScrapList.do")
    public NexacroResult getBoardScrapList(@ParamDataSet(name = "dsSearch") Map<String, Object> searchMap) {
        NexacroResult result = new NexacroResult();
        result.addDataSet("dsScrpList", service.getBoardScrapList(searchMap));

        return result;
    }

    /**
     * 소통광장 - 게시판 - 스크랩 목록 추가
     *
     * @param boardScrpVO
     * @return result
     */
    @RequestMapping("bbs/boardScrap/setBoardScrapManage.do")
    public NexacroResult setBoardScrapManage(@ParamDataSet(name = "dsScrpList") List<BoardScrpVO> boardScrpVO) {
        NexacroResult result = new NexacroResult();
        service.setBoardScrapManage(boardScrpVO);

//        result.addVariable("scrpId", boardScrpVO.getScrpId());
        result.addVariable("callbackMsg", "success");

        return result;
    }

    /**
     * 소통광장 - 게시판 - 스크랩 목록 삭제
     *
     * @param boardScrpVO
     * @return result
     */
    @RequestMapping("bbs/boardScrap/deleteBoardScrapManage.do")
    public NexacroResult deleteBoardScrapManage(@ParamDataSet(name = "dsScrpList") BoardScrpVO boardScrpVO) {
        NexacroResult result = new NexacroResult();
        service.deleteBoardScrapManage(boardScrpVO);

        result.addVariable("callbackMsg", "success");

        return result;
    }

}
