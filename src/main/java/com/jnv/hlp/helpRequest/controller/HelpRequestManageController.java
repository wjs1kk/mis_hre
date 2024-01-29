package com.jnv.hlp.helpRequest.controller;

import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.jnv.hlp.helpRequest.service.HelpRequestManageService;
import com.jnv.hlp.vo.HelpRequestVO;
import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;

@Controller
public class HelpRequestManageController {

    @Resource(name = "helpRequestManageService")
    private HelpRequestManageService svc;

    /**
     * 요청 현황 상세 조회
     *
     * @param HelpRequestVO
     * @return result
     */
    @RequestMapping("hlp/helpRequest/getHelpRequestManage.do")
    public NexacroResult getHelpRequestManage(@ParamDataSet(name = "dsSearch") Map<String, Object> searchMap) {
        NexacroResult result = new NexacroResult();
        result.addDataSet("dsList", svc.getHelpRequestManageMap(searchMap));
        return result;
    }

    /**
     * 요청 현황 상세 저장
     *
     * @return 처리 결과
     */
    @RequestMapping("hlp/helpRequest/setHelpRequestManage.do")
    public NexacroResult setHelpRequestManage(@ParamDataSet(name = "dsList") HelpRequestVO helpVO) {
        NexacroResult result = new NexacroResult();
        svc.setHelpRequestManage(helpVO);
        // 변수 추가
        result.addVariable("hlpRqstNo", helpVO.getHlpRqstNo());
        result.addVariable("callbackMsg", "success");
        return result;
    }

    /**
     * 처리 내용 답변 등록 / 수정 저장
     *
     * @param helpVO
     * @return result
     */
    @RequestMapping("hlp/helpRequest/setHelpRequestAnswer.do")
    public NexacroResult setHelpRequestAnswer(@ParamDataSet(name = "dsList") HelpRequestVO helpVO) {
        NexacroResult result = new NexacroResult();
        svc.setHelpRequestAnswer(helpVO);
        result.addVariable("callbackMsg", "success");
        return result;
    }

    /**
     * 처리 내용 답변 삭제
     *
     * @param helpVO
     * @return result
     */
    @RequestMapping("hlp/helpRequest/delUpdateHelpRequestAnswer.do")
    public NexacroResult delUpdateHelpRequestAnswer(@ParamDataSet(name = "dsList") HelpRequestVO helpVO) {
        NexacroResult result = new NexacroResult();
        svc.delUpdateHelpRequestAnswer(helpVO);
        result.addVariable("callbackMsg", "success");
        return result;
    }

    /**
     * 요청 현황 삭제
     *
     * @return 처리 결과
     */
    @RequestMapping("hlp/helpRequest/deleteHelpRequestManage.do")
    public NexacroResult deleteHelpRequestManage(@ParamDataSet(name = "dsList") HelpRequestVO helpVO) {
        NexacroResult result = new NexacroResult();
        svc.deleteHelpRequestManage(helpVO);
        result.addVariable("callbackMsg", "success");
        return result;
    }

}
