package com.jnv.common.attach.controller;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.jnv.common.attach.service.CmnFileService;
import com.jnv.common.vo.CmnFileVO;
import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;

@Controller
public class CmnFileController {

    @Resource(name = "cmnFileService")
    private CmnFileService service;

    /**
     * 파일 목록을 조회한다.
     *
     * @param params
     * @return
     */
    @RequestMapping("cmn/file/getList.do")
    public NexacroResult getList(@ParamDataSet(name = "dsSearch") Map<String, Object> params) {
        NexacroResult result = new NexacroResult();
        result.addDataSet("dsFileList", service.getList(params));
        return result;
    }

    /**
     * 파일 목록을 저장한다.
     *
     * @param fileVO
     * @return
     */
    @RequestMapping("cmn/file/setList.do")
    public NexacroResult setList(@ParamDataSet(name = "dsFileList") List<CmnFileVO> fileVO) {
        NexacroResult result = new NexacroResult();
        service.setList(fileVO);
        result.addVariable("callbackMsg", "success");
        return result;
    }
}
