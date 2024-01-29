package com.jnv.bbs.controller;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.jnv.bbs.service.BoardMasterService;
import com.jnv.bbs.vo.BoardMasterVO;
import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;

@Controller
public class BoardMasterController {

    @Resource(name = "boardMasterService")
    private BoardMasterService service;

    /**
     * 게시판관리 - 게시판 MST 목록 조회
     *
     * @param searchMap
     * @return result
     */
    @RequestMapping("bbs/boardMaster/getBoardMasterList.do")
    public NexacroResult getBoardMasterList(@ParamDataSet(name = "dsSearch") Map<String, Object> searchMap) {
        NexacroResult result = new NexacroResult();
        result.addDataSet("dsList", service.getBoardMasterList(searchMap));

        return result;
    }

    /**
     * 게시판관리 - 게시판 MST 저장
     *
     * @param searchMap
     * @return result
     */
    @RequestMapping("bbs/boardMaster/setBoardMasterList.do")
    public NexacroResult setBoardMasterList(@ParamDataSet(name = "dsList") List<BoardMasterVO> voList) {
        NexacroResult result = new NexacroResult();
        service.saveBoardMasterList(voList);
        result.addVariable("callbackMsg", "success");

        return result;
    }
}
