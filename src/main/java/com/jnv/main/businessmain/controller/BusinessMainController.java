package com.jnv.main.businessmain.controller;

import java.util.Arrays;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import javax.annotation.Resource;

import com.jnv.jncore.argumentresolver.JnResult;
import com.jnv.jncore.security.UserVO;
import com.jnv.main.businessmain.service.BusinessMainService;
import org.egovframe.rte.fdl.security.userdetails.util.EgovUserDetailsHelper;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class BusinessMainController {

    @Resource(name = "businessMainService")
    private BusinessMainService service;

    @RequestMapping("/getCurrentSessionInfo.do")
    public JnResult getCurrentSessionInfo() {
        JnResult result = new JnResult();

        if (Boolean.TRUE.equals(EgovUserDetailsHelper.isAuthenticated())) {
            UserVO user = (UserVO) EgovUserDetailsHelper.getAuthenticatedUser();
            List<String> roles = EgovUserDetailsHelper.getAuthorities();

            result.addDataSet("dsUserInfo", Arrays.asList(user));
            result.addDataSet("dsRoleCodeList", roles.stream().map(e -> {
                Map<String, String> m = new HashMap<>();
                m.put("ROLE_CODE", e);
                return m;
            }));
        } else {
            result.addDataSet("dsUserInfo", Collections.emptyList());
            result.addDataSet("dsRoleCodeList", Collections.emptyList());
        }

        return result;
    }

}
