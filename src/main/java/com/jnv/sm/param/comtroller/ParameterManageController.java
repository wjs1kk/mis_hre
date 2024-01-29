package com.jnv.sm.param.comtroller;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.jnv.sm.param.service.ParameterManageService;
import com.jnv.sm.vo.ParameterManageVO;
import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;

@Controller
public class ParameterManageController {

    @Resource(name = "parameterManageService")
    private ParameterManageService svc;

    /**
     * 파라미터 목록 조회
     *
     * @param param
     * @param param
     * @param searchMap
     * @return
     * @throws Exception
     */
    @RequestMapping("sm/getParam.do")
    public NexacroResult getParam(@ParamDataSet(name = "dsSearch") Map<String, Object> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();
        result.addDataSet("dsParam", svc.getParam(searchMap));
        return result;
    }

    /**
     * 파라미터 저장
     *
     * @param param
     * @param param
     * @param ParamList
     * @return
     * @throws Exception
     */
    @RequestMapping("sm/setParam.do")
    public NexacroResult setParam(@ParamDataSet(name = "dsParam") List<ParameterManageVO> ParamList) throws Exception {
        NexacroResult result = new NexacroResult();
        String rmsg = svc.setParam(ParamList);
        result.addVariable("callbackMsg", rmsg);
        return result;
    }

}
