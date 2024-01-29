package com.jnv.mal.controller;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.jnv.mal.service.EmlSndService;
import com.jnv.mal.vo.EmlSndVO;
import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;

@Controller
public class EmlSndController {

    @Resource(name = "emlSndService")
    private EmlSndService service;

    /**
     * 메일발송관리 - 메일발송 목록 조회
     *
     * @param searchMap
     * @return result
     */
    @RequestMapping("mal/emlSndMaster/getEmlSndList.do")
    public NexacroResult getEmlSndList(@ParamDataSet(name = "dsSearch") Map<String, Object> searchMap) {
        NexacroResult result = new NexacroResult();
        result.addDataSet("dsList", service.getEmlSndList(searchMap));

        return result;
    }

    /**
     * 메일발송관리 - 메일발송 - 발송대상 조회
     *
     * @param searchMap
     * @return result
     */
    @RequestMapping("mal/emlSndMaster/getEmlSndUser.do")
    public NexacroResult getEmlSndUser(@ParamDataSet(name = "dsSearch") Map<String, Object> searchMap) {
        NexacroResult result = new NexacroResult();
        result.addDataSet("dsList2", service.getEmlSndUser(searchMap));

        return result;
    }

    /**
     * 메일발송관리 - 템플릿 목록 조회
     *
     * @param searchMap
     * @return result
     */
    @RequestMapping("mal/emlSndMaster/getTmpltList.do")
    public NexacroResult getTmpltList(@ParamDataSet(name = "dsSearch") Map<String, Object> searchMap) {
        NexacroResult result = new NexacroResult();
        result.addDataSet("dsList", service.getTmpltList(searchMap));

        return result;
    }

    /**
     * 메일발송관리 - 템플릿 저장
     *
     * @param searchMap
     * @return result
     */
    @RequestMapping("mal/emlSndMaster/setTmpltSave.do")
    public NexacroResult setTmpltSave(@ParamDataSet(name = "dsList") List<EmlSndVO> list) {
        NexacroResult result = new NexacroResult();

        String msg = service.setTmpltSave(list);

        if(msg == "success") {
            result.addVariable("callbackMsg", "success");
        } else result.addVariable("callbackMsg", "false");

        return result;
    }

    /**
     * 메일발송관리 - 템플릿 수정
     *
     * @param searchMap
     * @return result
     */
    @RequestMapping("mal/emlSndMaster/setTmpltUpdate.do")
    public NexacroResult setTmpltUpdate(@ParamDataSet(name = "dsList") List<EmlSndVO> list) {
        NexacroResult result = new NexacroResult();

        String msg = service.setTmpltUpdate(list);

        if(msg == "success") {
            result.addVariable("callbackMsg", "success");
        } else result.addVariable("callbackMsg", "false");

        return result;
    }

    /**
     * 메일발송관리 - 템플릿 삭제
     *
     * @param searchMap
     * @return result
     */
    @RequestMapping("mal/emlSndMaster/setTmpltDelete.do")
    public NexacroResult setTmpltDelete(@ParamDataSet(name = "dsList") List<EmlSndVO> list) {
        NexacroResult result = new NexacroResult();

        String msg = service.setTmpltDelete(list);

        if(msg == "success") {
            result.addVariable("callbackMsg", "success");
        } else result.addVariable("callbackMsg", "false");

        return result;
    }

    /**
     * 메일발송관리 - 템플릿 상세 조회
     *
     * @param searchMap
     * @return result
     */
    @RequestMapping("mal/emlSndMaster/setTmpltDtl.do")
    public NexacroResult setTmpltDtl(@ParamDataSet(name = "dsSearch") Map<String, Object> searchMap) {
        NexacroResult result = new NexacroResult();
        result.addDataSet("dsList", service.setTmpltDtl(searchMap));

        return result;
    }

    /**
     * 메일발송관리 - 메일발송 이력 조회
     *
     * @param searchMap
     * @return result
     */
    @RequestMapping("mal/emlSndMaster/getEmlSndDtl.do")
    public NexacroResult getEmlSndDtl(@ParamDataSet(name = "dsSearch") Map<String, Object> searchMap) {
        NexacroResult result = new NexacroResult();
        result.addDataSet("dsList", service.getEmlSndDtl(searchMap));
        result.addDataSet("dsList2", service.getEmlSndDtl2(searchMap));

        return result;
    }
    /**
     * 메일발송관리 - 메일발송
     *
     * @param searchMap
     * @return result
     */
    @RequestMapping("mal/emlSndMaster/getEmlSnd.do")
    public NexacroResult getEmlSnd(@ParamDataSet(name = "dsList") EmlSndVO emlSnd,
                                    @ParamDataSet(name = "dsList3") List<EmlSndVO> rcvList) {
        NexacroResult result = new NexacroResult();

        String msg = service.getEmlSnd(emlSnd, rcvList);

        if(msg == "success") {
            result.addVariable("callbackMsg", "success");
        } else result.addVariable("callbackMsg", "false");

        return result;
    }
}
