package com.jnv.sm.code.controller;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.jnv.sm.code.service.CommonCodeManageService;
import com.jnv.sm.vo.CommonCodeHeaderVO;
import com.jnv.sm.vo.CommonCodeLineVO;
import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;

@Controller
public class CommonCodeManageController {

    @Resource(name = "commonCodeManageService")
    private CommonCodeManageService service;

    /**
     * 공통코드 Header 목록 조회
     *
     * @param param
     * @param param
     * @param searchMap
     * @return
     * @throws Exception
     */
    @RequestMapping("sm/getCodeHeaderList.do")
    public NexacroResult getCodeHeaderList(@ParamDataSet(name = "dsSearch") Map<String, Object> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();
        result.addDataSet("dsCodeHeader", service.getCodeHeaderList(searchMap));
        return result;
    }

    /**
     * 공통코드 Line 목록 조회
     *
     * @param param
     * @param param
     * @param searchMap
     * @return
     * @throws Exception
     */
    @RequestMapping("sm/getCodeLineList.do")
    public NexacroResult getCodeLineList(@ParamDataSet(name = "dsSearch") Map<String, Object> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();
        result.addDataSet("dsCodeLine", service.getCodeLineList(searchMap));
        return result;
    }

    /**
     * 공통코드 저장
     *
     * @param param
     * @param CommonCodeLineList
     * @param CommonCodeHeaderList
     * @return
     * @throws Exception
     */
    @RequestMapping("sm/setCodeList.do")
    public NexacroResult setCodeList(@ParamDataSet(name = "dsCodeHeader") List<CommonCodeHeaderVO> CommonCodeHeaderList, @ParamDataSet(name = "dsCodeLine") List<CommonCodeLineVO> CommonCodeLineList) throws Exception {
        NexacroResult result = new NexacroResult();
        String rmsg = service.setCodeHeaderList(CommonCodeHeaderList);
        String rmsg2 = service.setCodeLineList(CommonCodeLineList);
        if ("success".equals(rmsg) || "success".equals(rmsg2)) {
            result.addVariable("callbackMsg", "success");
        } else {
            result.addVariable("callbackMsg", "failure");
        }
        return result;
    }

}
