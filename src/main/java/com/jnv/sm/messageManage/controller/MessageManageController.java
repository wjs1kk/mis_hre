package com.jnv.sm.messageManage.controller;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.jnv.sm.messageManage.service.MessageManageService;
import com.jnv.sm.vo.MessageManageVO;
import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;

@Controller
public class MessageManageController {

    @Resource(name = "messageManageService")
    private MessageManageService service;

    /**
     * 메시지 목록 조회
     *
     * @param param
     * @param param
     * @param searchMap
     * @return
     * @throws Exception
     */
    @RequestMapping("sm/getMessageList.do")
    public NexacroResult getMessageList(@ParamDataSet(name = "dsSearch") Map<String, Object> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();
        result.addDataSet("dsMessage", service.getMessageList(searchMap));
        return result;
    }

    /**
     * 메시지 저장
     *
     * @param param
     * @param messageManageList
     * @return
     * @throws Exception
     */
    @RequestMapping("sm/setMessageList.do")
    public NexacroResult setMessageList(@ParamDataSet(name = "dsMessage") List<MessageManageVO> messageManageList) throws Exception {
        NexacroResult result = new NexacroResult();
        String rmsg = service.setMessageList(messageManageList);
        result.addVariable("callbackMsg", rmsg);
        return result;
    }

}
