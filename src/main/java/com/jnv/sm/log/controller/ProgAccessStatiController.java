package com.jnv.sm.log.controller;

import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;

import com.jnv.common.accesslog.annotation.AccessLogging;
import com.jnv.jncore.argumentresolver.JnParam;
import com.jnv.jncore.exception.controller.BaseAjaxController;
import com.jnv.sm.log.service.impl.ProgAccessStatiServiceImpl;
import com.jnv.sm.vo.AccessStatisticsVO;

import org.egovframe.rte.fdl.cmmn.exception.EgovBizException;

@Controller
public class ProgAccessStatiController extends BaseAjaxController {

    @Resource(name = "progAccessStatiService")
    private ProgAccessStatiServiceImpl service;

    /**
     * 시스템관리 > 프로그램접속통계화면
     *
     * @param req
     * @param model
     * @return
     * @throws EgovBizException
     */
    @AccessLogging
    @RequestMapping("goProgAccessStati.do")
    public String progAccessStati(HttpServletRequest req, ModelMap model) throws EgovBizException {
        return "/sm/log/progAccessStati.jn";
    }

    /**
     * 포털 > 프로그램접속통계화면 > 조회
     *
     * @param param
     * @param commandMap
     * @param req
     * @param model
     * @return
     * @throws EgovBizException
     */
    @AccessLogging(preferredMenuId = "progAccess", actionName = "조회")
    @RequestMapping("/selectProgAccess.do")
    public String selectProgAccess(JnParam param, ModelMap model) throws EgovBizException {
        List<AccessStatisticsVO> list = service.selectProgAccess(param);
        model.addAttribute("data", list);
        return "ResultView";
    }
}
