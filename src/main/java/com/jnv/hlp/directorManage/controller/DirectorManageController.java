package com.jnv.hlp.directorManage.controller;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.jnv.hlp.directorManage.service.DirectorManageService;
import com.jnv.hlp.vo.DirectorManageVO;
import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;

@Controller
public class DirectorManageController {

    @Resource(name = "directorManageService")
    private DirectorManageService svc;

    /**
     * 담당자 관리 - 조회
     *
     * @param params
     * @return
     */
    @RequestMapping("hlp/directorManage/getDirectorManageList.do")
    public NexacroResult getDirectorManageList(@ParamDataSet(name = "dsSearch") Map<String, Object> params) {
        NexacroResult result = new NexacroResult();
        List<DirectorManageVO> list = svc.getDirectorManageList(params);
        result.addDataSet("dsList", list);
        return result;
    }

    /**
     * 담당자 관리 저장
     *
     * @param params
     * @return
     */
    @RequestMapping("hlp/directorManage/saveDirectorManageList.do")
    public NexacroResult saveDirectorManageList(@ParamDataSet(name = "dsList") List<DirectorManageVO> params) {
        NexacroResult result = new NexacroResult();
        svc.saveDirectorManageList(params);
        result.addVariable("callbackMsg", "success");
        return result;
    }

}
