package com.jnv.sm.role.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import com.nexacro.uiadapter.spring.core.annotation.ParamVariable;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.jnv.sm.role.service.RoleManageService;
import com.jnv.sm.vo.RoleManageVO;
import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;

@Controller
public class RoleManageController {
    @Resource(name = "roleManageService")
    private RoleManageService svc;

    /**
     * 권한 목록 조회
     *
     * @param param
     * @param param
     * @param searchMap
     * @return
     * @throws Exception
     */
    @RequestMapping("sm/getRoleSearch.do")
    public NexacroResult getRoleSearch(@ParamDataSet(name = "dsSearch") Map<String, Object> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();
        result.addDataSet("dsRole", svc.getRoleSearch(searchMap));
        return result;
    }

    /**
     * 모듈명 조회(콤보박스 생성)
     *
     * @param type
     * @param sysId
     * @param distinct
     * @return
     * @throws Exception
     */
    @RequestMapping("sm/getModuleCombo.do")
    public NexacroResult getModuleCombo(@ParamVariable(name = "type", required = false) String type,
            @ParamVariable(name = "sysId", required = false) String sysId,
            @ParamVariable(name = "distinct", required = false) String distinct) throws Exception {
        NexacroResult result = new NexacroResult();
        Map<String, Object> searchMap = new HashMap<>();
        searchMap.put("type", type);
        searchMap.put("sysId", sysId);
        searchMap.put("distinct", distinct);
        result.addDataSet("dsModuleCombo", svc.getModuleCombo(searchMap));
        return result;
    }

    /**
     * 권한 저장
     *
     * @param param
     * @param param
     * @param RoleList
     * @return
     * @throws Exception
     */
    @RequestMapping("sm/setRoleList.do")
    public NexacroResult setRoleList(@ParamDataSet(name = "dsRole") List<RoleManageVO> roleList) throws Exception {
        NexacroResult result = new NexacroResult();
        String rmsg = svc.setRoleList(roleList);
        result.addVariable("callbackMsg", rmsg);
        return result;
    }

    /**
     * 상위, 하위권한 조회
     *
     * @param param
     * @param param
     * @param searchMap
     * @return
     * @throws Exception
     */
    /*@RequestMapping("sm/getRoleFamilySearch.do")
    public NexacroResult getRoleFamilySearch(@ParamDataSet(name = "dsSearch") Map<String, Object> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();
        result.addDataSet("dsRoleChild", svc.getChildRoleSearch(searchMap));
        result.addDataSet("dsRoleParents", svc.getParentsRoleSearch(searchMap));
        return result;
    }*/

    /**
     * 팝업 권한 조회
     *
     * @param param
     * @param param
     * @param searchMap
     * @return
     * @throws Exception
     */
    /*@RequestMapping("sm/getRolePopupSearch.do")
    public NexacroResult getRolePopupSearch(@ParamDataSet(name = "dsSearch") Map<String, Object> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();
        result.addDataSet("dsRole", svc.getRolePopupSearch(searchMap));
        return result;
    }*/

    /**
     * 상속 권한 저장(HIERARCHY)
     *
     * @param param
     * @param param
     * @param searchMap
     * @return
     * @throws Exception
     */
    /*@RequestMapping("sm/setRolePopupInfo.do")
    public NexacroResult setRolePopupInfo(@ParamDataSet(name = "dsRole") List<RoleManageVO> RoleList) throws Exception {
        NexacroResult result = new NexacroResult();
        String rmsg = svc.setRolePopupInfo(RoleList);
        result.addVariable("callbackMsg", rmsg);
        return result;
    }*/

    /**
     * 하위권한 삭제
     *
     * @param param
     * @param param
     * @param searchMap
     * @return
     * @throws Exception
     */
    /*@RequestMapping("sm/deleteChildRole.do")
    public NexacroResult deleteChildRole(@ParamDataSet(name = "dsRoleChild") List<RoleManageVO> RoleList) throws Exception {
        NexacroResult result = new NexacroResult();
        String rmsg = svc.deleteChildRole(RoleList);
        result.addVariable("callbackMsg", rmsg);
        return result;
    }*/

    /**
     * 상위권한 삭제
     *
     * @param param
     * @param param
     * @param searchMap
     * @return
     * @throws Exception
     */
    /*@RequestMapping("sm/deleteParentsRole.do")
    public NexacroResult deleteParentsRole(@ParamDataSet(name = "dsRoleParents") List<RoleManageVO> RoleList) throws Exception {
        NexacroResult result = new NexacroResult();
        String rmsg = svc.deleteParentsRole(RoleList);
        result.addVariable("callbackMsg", rmsg);
        return result;
    }*/

}
