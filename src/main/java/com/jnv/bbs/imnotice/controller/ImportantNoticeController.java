package com.jnv.bbs.imnotice.controller;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.jnv.bbs.imnotice.service.ImportantNoticeService;
import com.jnv.bbs.vo.NoticeBoardVO;
import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;

@Controller
public class ImportantNoticeController {

    @Resource(name = "importantNoticeService")
    private ImportantNoticeService service;

    /**
     * 관리메뉴 - 게시판 관리 - 공지사항관리 조회
     *
     * @param searchMap
     * @return result
     */
    @RequestMapping("bbs/imnotice/getImportNoticeManage.do")
    public NexacroResult getImportNoticeManage(@ParamDataSet(name = "dsSearch") Map<String, Object> searchMap) {
        NexacroResult result = new NexacroResult();
        result.addDataSet("dsList", service.getImportNoticeManage(searchMap));

        return result;
    }

    /**
     * 관리메뉴 - 게시판 관리 - 공지사항관리 저장
     *
     * @param
     * @return result
     */
    @RequestMapping("bbs/imnotice/setImportNoticeManage.do")
    public NexacroResult setImportNoticeManage(@ParamDataSet(name = "dsList") List<NoticeBoardVO> noticeBoardVO) {
        NexacroResult result = new NexacroResult();
        service.setImportNoticeManage(noticeBoardVO);
        result.addVariable("callbackMsg", "success");
        return result;
    }

}
