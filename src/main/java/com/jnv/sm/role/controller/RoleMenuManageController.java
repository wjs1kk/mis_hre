package com.jnv.sm.role.controller;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.jnv.jncore.exception.controller.BaseAjaxController;
import com.jnv.sm.role.service.RoleMenuManageService;
import com.jnv.sm.vo.RoleMenuManageVO;
import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;

@Controller
public class RoleMenuManageController extends BaseAjaxController {

    @Resource(name = "roleMenuManageService")
    private RoleMenuManageService svc;

    /**
     * 권한 조회(트리구조)
     *
     * @param param
     * @param searchMap
     * @return
     * @throws Exception
     */
    @RequestMapping("sm/getRole.do")
    public NexacroResult getRole(@ParamDataSet(name = "dsSearch") Map<String, Object> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();
        result.addDataSet("dsRole", svc.getRole(searchMap));
        return result;
    }

    /**
     * 권한별 메뉴 조회
     *
     * @param param
     * @param searchMap
     * @return
     * @throws Exception
     */
    @RequestMapping("sm/getRoleMenuSearch.do")
    public NexacroResult getRoleMenuSearch(@ParamDataSet(name = "dsSearch") Map<String, Object> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();
        result.addDataSet("dsRoleMenu", svc.getRoleMenuSearch(searchMap));
        return result;
    }

    /**
     * 권한별 메뉴 저장
     *
     * @param param
     * @param roleMenuList
     * @return
     * @throws Exception
     **/
    @RequestMapping("sm/setRoleMenu.do")
    public NexacroResult setRoleMenu(@ParamDataSet(name = "dsRoleMenu") List<RoleMenuManageVO> roleMenuList) throws Exception {
        NexacroResult result = new NexacroResult();
        String rmsg = svc.setRoleMenu(roleMenuList);
        result.addVariable("callbackMsg", rmsg);
        return result;
    }
}
