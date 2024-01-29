package com.jnv.sam.typetwo.controller;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.jnv.sam.typetwo.service.TypeTwoService;
import com.jnv.sam.vo.TypeTwoVO;
import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;

@Controller
public class TypeTwoController {

    @Resource(name = "typeTwoService")
    private TypeTwoService service;

    @RequestMapping("sam/getTypeTwoList.do")
    public NexacroResult getTypeTwoList(@ParamDataSet(name="dsSearch") Map<String, Object> searchMap) throws Exception {

        NexacroResult result = new NexacroResult();

        result.addDataSet("dsTypeTwo", service.getTypeTwoList(searchMap));

        return result;
    }

    @RequestMapping("sam/setTypeTwoList.do")
    public NexacroResult setTypeTwoList(@ParamDataSet(name="dsTypeTwo") List<TypeTwoVO> typeTwoList) throws Exception {

        NexacroResult result = new NexacroResult();

        String rmsg = service.setTypeTwoList(typeTwoList);

        result.addVariable("callbackMsg", rmsg);

        return result;
    }

    @RequestMapping("sam/genNullPointExcpetion.do")
    public NexacroResult genNullPointExcpetion(@ParamDataSet(name="dsSearch") Map<String, Object> searchMap) throws Exception {

        NexacroResult result = new NexacroResult();

        searchMap.get("test").toString();

        return result;
    }

}
