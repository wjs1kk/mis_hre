package com.jnv.bbs.qna.controller;

import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.jnv.bbs.qna.service.QnaManageService;
import com.jnv.bbs.vo.QnaVO;
import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;

@Controller
public class QnaManageController {

    @Resource(name = "qnaManageService")
    private QnaManageService service;

    /**
     * QNA 신규 - QNA질문등록 조회
     *
     * @param searchMap
     * @return result
     */
    @RequestMapping("bbs/qna/getQnaManage.do")
    public NexacroResult getQnaManage(@ParamDataSet(name = "dsSearch") Map<String, Object> searchMap) {
        NexacroResult result = new NexacroResult();

        result.addDataSet("dsList", service.getQnaManage(searchMap));
        return result;
    }

    /**
     * QNA질문등록 저장
     *
     * @param qnaVO
     * @return result
     */
    @RequestMapping("bbs/qna/setQnaManage.do")
    public NexacroResult setQnaManage(@ParamDataSet(name = "dsList") QnaVO qnaVO) {
        NexacroResult result = new NexacroResult();
        service.setQnaManage(qnaVO);
        result.addVariable("qnaId", qnaVO.getQnaId());
        result.addVariable("callbackMsg", "success");

        return result;
    }

    /**
     * QNA 답변등록
     *
     * @param qnaVO
     * @return result
     */
    @RequestMapping("bbs/qna/setQnaAnswrManage.do")
    public NexacroResult setQnaAnswrManage(@ParamDataSet(name = "dsList") QnaVO qnaVO) {
        NexacroResult result = new NexacroResult();
        service.setQnaAnswrManage(qnaVO);
        result.addVariable("callbackMsg", "success");

        return result;
    }

    /**
     * QNA 답변삭제
     *
     * @param qnaVO
     * @return result
     */
    @RequestMapping("bbs/qna/delUpdateQnaAnswr.do")
    public NexacroResult delUpdateQnaAnswr(@ParamDataSet(name = "dsList") QnaVO qnaVO) {
        NexacroResult result = new NexacroResult();
        service.delUpdateQnaAnswr(qnaVO);
        result.addVariable("callbackMsg", "success");

        return result;
    }

    /**
     * QNA질문등록 삭제
     *
     * @param qnaVO
     * @return result
     */
    @RequestMapping("bbs/qna/deleteQnaManage.do")
    public NexacroResult deleteQnaManage(@ParamDataSet(name = "dsList") QnaVO qnaVO) {
        NexacroResult result = new NexacroResult();
        service.deleteQnaManage(qnaVO);
        result.addVariable("callbackMsg", "success");

        return result;
    }

}
