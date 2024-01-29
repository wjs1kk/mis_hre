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
import com.jnv.sm.log.service.impl.ConnectLogServiceImpl;
import com.jnv.sm.vo.ConnectLogVO;

import org.egovframe.rte.fdl.cmmn.exception.EgovBizException;

@Controller
public class ConnectLogController extends BaseAjaxController {

    @Resource(name = "connectLogService")
    private ConnectLogServiceImpl service;

    /**
     * 시스템관리 > 감사로그조회 화면
     *
     * @param req
     * @param model
     * @return
     * @throws EgovBizException
     */
    @AccessLogging
    @RequestMapping("goConnectLog.do")
    public String connectLog(HttpServletRequest req, ModelMap model) throws EgovBizException {
        return "/sm/log/connectLog.jn";
    }

    /**
     * 시스템관리 > 감사로그조회 화면
     *
     * @param req
     * @param model
     * @return
     * @throws EgovBizException
     */
    @AccessLogging
    @RequestMapping("goConnectLog2.do")
    public String connectLog2(HttpServletRequest req, ModelMap model) throws EgovBizException {
        return "/sm/log/connectLog2.jn";
    }

    /**
     * 포털 > 감사로그조회 > 조회
     *
     * @param param
     * @param commandMap
     * @param req
     * @param model
     * @return
     * @throws EgovBizException
     */
    @AccessLogging(preferredMenuId = "connectLog2", actionName = "조회")
    @RequestMapping("/selectConnectLog.do")
    public String selectConnectLog(JnParam param, ModelMap model) throws EgovBizException {
        List<ConnectLogVO> list = service.selectConnectLog(param);
        model.addAttribute("data", list);
        return "ResultView";
    }

}
