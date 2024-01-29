package com.jnv.bbs.controller;

import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.jnv.bbs.service.NoticeBoardCommentService;
import com.jnv.bbs.vo.NoticeBoardCommentVO;
import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;

@Controller
public class NoticeBoardCommentController {

    @Resource(name = "noticeBoardCommentService")
    private NoticeBoardCommentService service;

    /**
     * 소통광장 - 게시물 상세조회 내용 -댓글내용 조회
     *
     * @param searchMap
     * @return result
     */
    @RequestMapping("bbs/noticeBoard/comment/getNBDetailComment.do")
    public NexacroResult getNBDetailComment(@ParamDataSet(name = "dsSearch") Map<String, Object> searchMap) {
        NexacroResult result = new NexacroResult();

        result.addDataSet("dsComment", service.getNBDetailComment(searchMap));
        return result;
    }

    /**
     * 소통광장 - 게시물 상세조회 내용 -댓글내용 입력
     *
     * @param commentVO
     * @return result
     */
    @RequestMapping("bbs/noticeBoard/comment/setNBDetailComment.do")
    public NexacroResult setNBDetailComment(@ParamDataSet(name = "dsCommentRgst") NoticeBoardCommentVO commentVO) {
        NexacroResult result = new NexacroResult();

        service.setNBDetailComment(commentVO);

        result.addVariable("cmntNo", commentVO.getCmntNo());
        result.addVariable("callbackMsg", "success");

        return result;
    }

    /**
     * 소통광장 - 게시물 상세조회 내용 -댓글내용 삭제
     *
     * @param commentVO
     * @return result
     */
    @RequestMapping("bbs/noticeBoard/comment/deleteNBDetailComment.do")
    public NexacroResult deleteNBDetailComment(@ParamDataSet(name = "dsCommentDel") NoticeBoardCommentVO commentVO) {
        NexacroResult result = new NexacroResult();

        service.deleteNBDetailComment(commentVO);

        result.addVariable("callbackMsg", "success");

        return result;
    }

}
