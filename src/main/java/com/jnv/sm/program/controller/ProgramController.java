package com.jnv.sm.program.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import com.jnv.common.accesslog.annotation.AccessLogging;
import com.jnv.jncore.annotation.JnRequestDataset;
import com.jnv.jncore.annotation.JnRequestParam;
import com.jnv.jncore.argumentresolver.JnResult;
import com.jnv.sm.program.service.ProgramService;
import com.jnv.sm.vo.ProgramDetailVO;
import com.jnv.sm.vo.ProgramHeaderVO;
import com.jnv.sm.vo.ProgramTableVO;
import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.spring.core.annotation.ParamVariable;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ProgramController {

    @Resource(name = "programService")
    private ProgramService programService;

    /**
     * 시스템관리 > 프로그램 관리 > 프로그램 관리 페이지
     *
     * @param req
     * @param model
     *
     * @return
     */
    @AccessLogging(preferredMenuId = "programManage", actionName = "프로그램 DB 테이블 목록 팝업")
    @RequestMapping("goProgramDbListPopup.do")
    public String proggoProgramDbList(HttpServletRequest req, ModelMap model) {
        return "/sm/sys/popup/programDbListPopup.jn";
    }

    /**
     * 시스템관리 > 프로그램 관리 > 프로그램 관리 > 프로그램 조회
     *
     * @param param
     * @param req
     * @param model
     *
     * @return
     */
    @AccessLogging(preferredMenuId = "programManage", actionName = "조회")
    @RequestMapping("sm/getProgramManageList.do")
    public JnResult programManageSearch(@JnRequestDataset(name = "dsSearch") Map<String, Object> dsSearch) {
        JnResult result = new JnResult();
        List<ProgramHeaderVO> list = programService.selectProgramList(dsSearch);

        result.addDataSet("dsProgram", list);
        return result;
    }

    /**
     * 시스템관리 > 프로그램 관리 > 프로그램 관리 > 프로그램 기능 조회
     *
     * @param param
     * @param req
     * @param model
     *
     * @return
     */
    @AccessLogging(preferredMenuId = "programManage", actionName = "기능 목록 조회")
    @RequestMapping("sm/getProgramFunctionManageList.do")
    public JnResult functionManageSearch(@JnRequestDataset(name = "dsSearch") Map<String, Object> dsSearch,
            @JnRequestParam(name = "progId") String progId,
            @JnRequestParam(name = "sysId") String sysId) {
        JnResult result = new JnResult();
        Map<String, Object> params = new HashMap<>(dsSearch);
        params.put("progId", progId);
        params.put("sysId", sysId);
        List<ProgramDetailVO> list = programService.selectFunctionList(params);
        result.addDataSet("dsFunction", list);
        return result;
    }

    @RequestMapping("sm/saveProgramList.do")
    public NexacroResult saveProgramList(@ParamDataSet(name = "dsProgram") List<ProgramHeaderVO> dsProgram)
            throws Exception {
        NexacroResult result = new NexacroResult();

        programService.saveProgramList(dsProgram);
        result.addVariable("callbackMsg", "success");

        return result;
    }

    @RequestMapping("sm/saveProgramFunctionList.do")
    public NexacroResult saveProgramFunctionList(@ParamDataSet(name = "dsFunction") List<ProgramDetailVO> dsFunction)
            throws Exception {
        NexacroResult result = new NexacroResult();

        programService.saveProgramFuncList(dsFunction);
        result.addVariable("callbackMsg", "success");

        return result;
    }

    @RequestMapping("sm/getProgramTableList.do")
    public NexacroResult getProgramTableList(@ParamDataSet(name = "dsSearch") Map<String, Object> params) {
        NexacroResult result = new NexacroResult();
        result.addDataSet("dsAvailTableList", programService.getAvailableTableList(params));
        result.addDataSet("dsSelectedTableList", programService.getSelectedTableList(params));

        return result;
    }

    @RequestMapping("sm/setProgramTableList.do")
    public NexacroResult setProgramTableList(@ParamDataSet(name = "dsSelectedTableList") List<ProgramTableVO> tables,
            @ParamVariable(name = "sysId") String sysId,
            @ParamVariable(name = "progId") String progId) {
        NexacroResult result = new NexacroResult();
        programService.setSelectedTableList(tables, sysId, progId);
        result.addVariable("callbackMsg", "success");

        return result;
    }
}
