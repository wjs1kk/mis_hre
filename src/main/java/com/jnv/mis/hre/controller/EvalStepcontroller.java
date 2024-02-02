package com.jnv.mis.hre.controller;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.jnv.mis.hre.service.EvalStepService;
import com.jnv.mis.hre.vo.EvalStepVO;
import com.jnv.sam.vo.TypeTwoVO;
import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;

@Controller
public class EvalStepcontroller {

	@Resource(name = "evalStepService")
    private EvalStepService service;

	//리스트 조회
    @RequestMapping("mis/getEvalStepList.do")
    public NexacroResult getEvalStepList(@ParamDataSet(name="dsSearch") Map<String, Object> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();
        result.addDataSet("dsEvalStep", service.getEvalStepList(searchMap));

        return result;
    }

    //행 추가, 삭제, 수정
    @RequestMapping("mis/setEvalStepList.do")
    public NexacroResult setEvalStepList(@ParamDataSet(name="dsEvalStep") List<EvalStepVO> evalStepList) throws Exception {
        NexacroResult result = new NexacroResult();
        String rmsg = service.setEvalStepList(evalStepList);
        result.addVariable("callbackMsg", rmsg);

        return result;
    }
}
