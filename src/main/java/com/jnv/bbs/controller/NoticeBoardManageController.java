package com.jnv.bbs.controller;

import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.jnv.bbs.service.NoticeBoardManageService;
import com.jnv.bbs.vo.NoticeBoardCommentVO;
import com.jnv.bbs.vo.NoticeBoardVO;
import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;

@Controller
public class NoticeBoardManageController {

    @Resource(name = "noticeBoardManageService")
    private NoticeBoardManageService service;

    /**
     * 소통광장 - 게시물 목록 - 게시물(입력/수정) 조회
     *
     * @param searchMap
     * @return result
     */
    @RequestMapping("bbs/noticeBoard/getNoticeBoard.do")
    public NexacroResult getNoticeBoard(@ParamDataSet(name = "dsSearch") Map<String, Object> searchMap) {
        NexacroResult result = new NexacroResult();
        result.addDataSet("dsList", service.getNoticeBoard(searchMap));

        return result;
    }

    /**
     * 소통광장 - 게시물 등록
     *
     * @param noticeBoardVO
     * @return result
     */
    @RequestMapping("bbs/noticeBoard/setNoticeBoard.do")
    public NexacroResult setNoticeBoard(@ParamDataSet(name = "dsList") NoticeBoardVO noticeBoardVO) {
        NexacroResult result = new NexacroResult();
        service.setNoticeBoard(noticeBoardVO);
        result.addVariable("nttNo", noticeBoardVO.getNttNo()); // 서버에서 만들어서 화면으로 보내주는 값
        result.addVariable("callbackMsg", "success");

        return result;
    }

    /**
     * 소통광장 - 게시물 삭제
     *
     * @param noticeBoardVO
     * @return result
     */
    @RequestMapping("bbs/noticeBoard/deleteNoticeBoard.do")
    public NexacroResult deleteNoticeBoard(@ParamDataSet(name = "dsList") NoticeBoardVO noticeBoardVO,
            @ParamDataSet(name = "dsComment") NoticeBoardCommentVO noticeBoardCommentVO) {
        NexacroResult result = new NexacroResult();
        service.deleteNoticeBoard(noticeBoardVO);
        service.deleteNoticeBoardComment(noticeBoardCommentVO);
        result.addVariable("callbackMsg", "success");

        return result;
    }

    /**
     * 소통광장 - 게시물 상세조회 (내용)
     *
     * @param searchMap
     * @return result
     */
    @RequestMapping("bbs/noticeBoard/getNoticeBoardDetail.do")
    public NexacroResult getNoticeBoardDetail(@ParamDataSet(name = "dsSearch") Map<String, Object> searchMap) {
        NexacroResult result = new NexacroResult();

        result.addDataSet("dsList", service.getNoticeBoardDetail(searchMap));
        return result;
    }

    /**
     * 소통광장 - 게시물 상세조회 - 추천
     *
     * @param noticeBoardVO
     * @param rcmdCnt
     * @return result
     */
    @RequestMapping("bbs/noticeBoard/setNBRecommend.do")
    public NexacroResult setNBRecommend(@ParamDataSet(name = "dsList") NoticeBoardVO noticeBoardVO) {
        NexacroResult result = new NexacroResult();
        service.setNBRecommend(noticeBoardVO);

        result.addVariable("callbackMsg", "success");

        return result;
    }

    /**
     * 소통광장 - 게시물 상세조회 - 비추천
     *
     * @param noticeBoardVO
     * @param rcmdCnt
     * @return result
     */
    @RequestMapping("bbs/noticeBoard/setNBDisrecommend.do")
    public NexacroResult setNBDisrecommend(@ParamDataSet(name = "dsList") NoticeBoardVO noticeBoardVO) {
        NexacroResult result = new NexacroResult();
        service.setNBDisrecommend(noticeBoardVO);

        result.addVariable("callbackMsg", "success");

        return result;
    }

    /**
     * 소통광장 - 게시물 상세조회 - 비밀번호 검증
     *
     * @param searchMap
     * @return result
     */
    @RequestMapping("bbs/noticeBoard/scrtBBSCheckPassword.do")
    public NexacroResult checkPassword(@ParamDataSet(name = "dsPassword") Map<String, Object> searchMap) {
        NexacroResult result = new NexacroResult();
        service.checkPassword(searchMap);
        result.addVariable("callbackMsg", "success");
        return result;
    }

}
