package com.jnv.mis.hre.controller;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.jnv.mis.hre.service.Hre3040Service;
import com.jnv.mis.hre.vo.EvalTypeVO;
import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;

@Controller
public class Hre3040Controller {

	@Resource(name = "hre3040Service")
    private Hre3040Service service;

	//리스트 조회
    @RequestMapping("mis/getEvalTypeList.do")
    public NexacroResult getEvalTypeList(@ParamDataSet(name="dsSearch") Map<String, Object> searchMap) throws Exception {

        NexacroResult result = new NexacroResult();

        result.addDataSet("dsEvalType", service.getEvalTypeList(searchMap));

        return result;
    }

    //행 추가, 삭제, 수정
    @RequestMapping("mis/setEvalTypeList.do")
    public NexacroResult setEvalTypeList(@ParamDataSet(name="dsEvalType") List<EvalTypeVO> evalTypeList) throws Exception {

        NexacroResult result = new NexacroResult();

        String rmsg = service.setEvalTypeList(evalTypeList);

        result.addVariable("callbackMsg", rmsg);

        return result;
    }
}
