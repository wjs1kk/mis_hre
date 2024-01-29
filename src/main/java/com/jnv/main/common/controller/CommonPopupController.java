package com.jnv.main.common.controller;

import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.jnv.jncore.annotation.JnRequestDataset;
import com.jnv.jncore.argumentresolver.JnResult;
import com.jnv.main.common.service.CommonPopupService;

@Controller
public class CommonPopupController {

    @Resource(name = "commonPopupService")
    private CommonPopupService service;

    /**
     * 사용자 목록을 조회한다.
     *
     * @param dsSearch 조회 조건
     * @return
     */
    @RequestMapping("cmn/popup/userSearch/getUserList.do")
    public JnResult getUserList(@JnRequestDataset("dsSearch") Map<String, Object> dsSearch) {
        JnResult result = new JnResult();
        result.addDataSet("dsUser", service.getUserList(dsSearch));
        return result;
    }

    /**
     * 부서 목록을 조회한다.
     *
     * @param dsSearch 조회 조건
     * @return
     */
    @RequestMapping("cmn/popup/deptSearch/getDeptList.do")
    public JnResult getDeptTree(@JnRequestDataset("dsSearch") Map<String, Object> dsSearch) {
        JnResult result = new JnResult();
        result.addDataSet("dsDept", service.getDeptTree(dsSearch));
        return result;
    }
}
