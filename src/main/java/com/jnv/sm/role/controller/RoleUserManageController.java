package com.jnv.sm.role.controller;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.jnv.sm.role.service.RoleUserManageService;
import com.jnv.sm.vo.RoleUserManageVO;
import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;

@Controller
public class RoleUserManageController {

    @Resource(name = "roleUserManageService")
    private RoleUserManageService svc;

    /**
     * 권한 목록 조회
     *
     * @param param
     * @param param
     * @param searchMap
     * @return
     * @throws Exception
     */
    @RequestMapping("sm/getRoleList.do")
    public NexacroResult getRoleList(@ParamDataSet(name = "dsSearch") Map<String, Object> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();
        result.addDataSet("dsRole", svc.getRoleSearch(searchMap));
        return result;
    }

    /**
     * 권한별 사용자 조회
     *
     * @param param
     * @param param
     * @param searchMap
     * @return
     * @throws Exception
     */
    @RequestMapping("sm/getRoleUserSearch.do")
    public NexacroResult getRoleUserSearch(@ParamDataSet(name = "dsSearch") Map<String, Object> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();
        result.addDataSet("dsRoleUser", svc.getRoleUserSearch(searchMap));
        return result;
    }

    /**
     * 사용자 조회
     *
     * @param param
     * @param param
     * @param searchMap
     * @return
     * @throws Exception
     */
    @RequestMapping("sm/getUserList.do")
    public NexacroResult getUserList(@ParamDataSet(name = "dsSearch") Map<String, Object> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();
        result.addDataSet("dsRoleUser", svc.getUserList(searchMap));
        return result;
    }

    /**
     * 권한별 사용자 저장
     *
     * @param param
     * @param param
     * @param UserList
     * @return
     * @throws Exception
     */
    @RequestMapping("sm/setRoleUser.do")
    public NexacroResult setRoleUser(@ParamDataSet(name = "dsRoleUser") List<RoleUserManageVO> UserList) throws Exception {
        NexacroResult result = new NexacroResult();
        String rmsg = svc.setRoleUser(UserList);
        result.addVariable("callbackMsg", rmsg);
        return result;
    }
}
