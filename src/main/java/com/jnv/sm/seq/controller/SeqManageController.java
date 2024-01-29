package com.jnv.sm.seq.controller;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.jnv.jncore.annotation.JnRequestDataset;
import com.jnv.jncore.argumentresolver.JnResult;
import com.jnv.sm.seq.service.SeqManageService;
import com.jnv.sm.vo.SeqManageVO;

/**
 * 채번기준 관리
 *
 * @author 박상욱
 * @since 2023.03.17
 */
@Controller
public class SeqManageController {

    @Resource(name = "seqManageService")
    private SeqManageService service;

    /**
     * 채번기준 목록을 조회한다.
     *
     * @param params
     * @return
     */
    @RequestMapping("sm/getSeqManageList.do")
    public JnResult getSeqManageList(@JnRequestDataset(name = "dsSchSeq") Map<String, Object> params) {
        JnResult result = new JnResult();
        List<SeqManageVO> list = service.selectSeqManageList(params);
        result.addDataSet("dsSeqMng", list);
        return result;
    }

    /**
     * 채번기준 목록을 저장한다.
     *
     * @param data
     * @return
     */
    @RequestMapping("sm/saveSeqManageList.do")
    public JnResult saveSeqManageList(@JnRequestDataset(name = "dsSeqMng") List<SeqManageVO> data) {
        JnResult result = new JnResult();
        service.saveSeqManageList(data);
        result.addVariable("callbackMsg", "success");
        return result;
    }
}
