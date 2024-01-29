package com.jnv.sm.user.controller;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import com.jnv.sm.vo.MemberRegistrationApprovalVO;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.jnv.sm.user.service.UserManageService;
import com.jnv.sm.vo.UserManageVO;
import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;

@Controller
public class UserManageController {

    @Resource(name = "userManageService")
    private UserManageService service;

    @RequestMapping("sm/getUserManage.do")
    public NexacroResult getUserManageList(@ParamDataSet(name = "dsSearch") Map<String, Object> searchMap)
        throws Exception {

        NexacroResult result = new NexacroResult();

        result.addDataSet("dsUserManage", service.getUserManageList(searchMap));

        return result;
    }

    @RequestMapping("sm/getUserManageItem.do")
    public NexacroResult getUserManageItem(@ParamDataSet(name = "dsUserManage") Map<String, Object> dsUserManage) {
        NexacroResult result = new NexacroResult();
        result.addDataSet("dsUserManage", service.getUser(dsUserManage));
        return result;
    }

    @RequestMapping("sm/setUserManageItem.do")
    public NexacroResult setUserManageItem(@ParamDataSet(name = "dsUserManage") UserManageVO userManageList)
        throws Exception {

        NexacroResult result = new NexacroResult();

        String rmsg = service.setUser(userManageList);

        result.addVariable("callbackMsg", rmsg);

        return result;
    }

    @RequestMapping("sm/deleteUserManageList.do")
    public NexacroResult deleteUserList(@ParamDataSet(name = "dsUserManage") List<UserManageVO> userManageList)
        throws Exception {
        NexacroResult result = new NexacroResult();
        String rmsg = service.deleteUserList(userManageList);
        result.addVariable("callbackMsg", rmsg);
        return result;
    }

    @RequestMapping("sm/user/getRegisterInfo.do")
    public NexacroResult getRegisterInfo(@ParamDataSet(name = "dsSearch") Map<String, Object> params) {
        NexacroResult result = new NexacroResult();
        result.addDataSet("dsMemberInfo", service.getRegistInfo(params));
        return result;
    }

    @RequestMapping("sm/user/approveRegistration.do")
    public NexacroResult approveRegistration(@ParamDataSet(name = "dsMemberInfo") MemberRegistrationApprovalVO params) {
        NexacroResult result = new NexacroResult();
        service.updateRegistApprovalStatus(params, "APPROVAL");
        result.addVariable("callbackMsg", "success");
        return result;
    }

    @RequestMapping("sm/user/denyRegistration.do")
    public NexacroResult denyRegistration(@ParamDataSet(name = "dsMemberInfo") MemberRegistrationApprovalVO params) {
        NexacroResult result = new NexacroResult();
        service.updateRegistApprovalStatus(params, "REJECT");
        result.addVariable("callbackMsg", "success");
        return result;
    }
}
