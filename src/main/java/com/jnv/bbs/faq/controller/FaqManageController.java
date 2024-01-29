package com.jnv.bbs.faq.controller;

import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.jnv.bbs.faq.service.FaqManageService;
import com.jnv.bbs.vo.FaqVO;
import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.spring.core.annotation.ParamVariable;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;

@Controller
public class FaqManageController {

    @Resource(name = "faqManageService")
    private FaqManageService service;

    /**
     * FAQ 상세 조회
     *
     * @param faqVO
     * @return result
     */
    @RequestMapping("bbs/faq/getFaqManage.do")
    public NexacroResult getFaqManage(@ParamDataSet(name = "dsSearch") Map<String, Object> searchMap) {
        NexacroResult result = new NexacroResult();
        result.addDataSet("dsList", service.getFaqManage(searchMap));
        return result;
    }

    /**
     * FAQ 상세 저장
     *
     * @param faqVO
     * @return result
     */
    @RequestMapping("bbs/faq/setFaqManage.do")
    public NexacroResult setFaqManage(@ParamDataSet(name = "dsList") FaqVO faqVO) {
        NexacroResult result = new NexacroResult();
        service.setFaqManage(faqVO);
        result.addVariable("faqId", faqVO.getFaqId());
        result.addVariable("callbackMsg", "success");

        return result;
    }

    /**
     * FAQ 상세 삭제
     *
     * @param faqVO
     * @return result
     */
    @RequestMapping("bbs/faq/deleteFaqManage.do")
    public NexacroResult deleteFaqManage(@ParamDataSet(name = "dsList") FaqVO faqVO) {
        NexacroResult result = new NexacroResult();
        service.deleteFaqManage(faqVO);
        result.addVariable("callbackMsg", "success");

        return result;
    }

    /**
     * FAQ 상태변경
     *
     * @param faqVO, faqSttsCd
     * @return result
     */
    @RequestMapping("bbs/faq/setFaqStts.do")
    public NexacroResult setFaqStts(@ParamDataSet(name = "dsList") FaqVO faqVO,
            @ParamVariable(name = "faqSttsCd") String faqSttsCd) {
        NexacroResult result = new NexacroResult();
        service.setFaqStts(faqVO, faqSttsCd);
        result.addVariable("faqId", faqVO.getFaqId());
        result.addVariable("faqSttsCd", faqVO.getFaqSttsCd());
        result.addVariable("callbackMsg", "success");

        return result;
    }
}
