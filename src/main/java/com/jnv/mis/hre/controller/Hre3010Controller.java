package com.jnv.mis.hre.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutionException;

import javax.annotation.Resource;

import org.apache.commons.lang3.StringUtils;
import org.egovframe.rte.fdl.security.userdetails.util.EgovUserDetailsHelper;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.jnv.jncore.argumentresolver.JnParam;
import com.jnv.jncore.argumentresolver.JnResult;
import com.jnv.jncore.security.UserVO;
import com.jnv.jncore.vo.ComboVO;
import com.jnv.mis.hre.service.Hre3010Service;
import com.jnv.mis.hre.vo.Hre3010VO;
import com.jnv.sam.typetwo.service.TypeTwoService;
import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;

@Controller
public class Hre3010Controller {
	
	@Resource(name = "Hre3010Service")
	private Hre3010Service service;

    @RequestMapping("/mis/hre/hre3010/getCommUpCdList.do")
    public NexacroResult getStdMgt() throws Exception {

        NexacroResult result = new NexacroResult();

        result.addDataSet("ds_commUpcd", service.getStdMgtList());

        return result;
    }
    
    
    @RequestMapping("cm/getHreCodeCombo.do")
    public JnResult getCommonCodeCombo(JnParam param) {
        Map<String, String> variableMap = param.getVariableMap();
        JnResult result = new JnResult();

        @SuppressWarnings("unchecked")
        Map.Entry<String, String>[] paramList = variableMap.entrySet().toArray(new Map.Entry[0]);
        List<CompletableFuture<List<ComboVO>>> futures = new ArrayList<>();

        for (Map.Entry<String, String> entry : paramList) {
            Map<String, String> comboParam = parseComboParam(StringUtils.defaultString(entry.getValue()));

            if (!comboParam.containsKey(SYS_ID) || StringUtils.isEmpty(comboParam.get(SYS_ID))) {
                if (Boolean.TRUE.equals(EgovUserDetailsHelper.isAuthenticated())) {
                    UserVO userVO = (UserVO) EgovUserDetailsHelper.getAuthenticatedUser();
                    comboParam.put(SYS_ID, userVO.getSysId());
                } else {
                    comboParam.put(SYS_ID, sysId);
                }
            }

            futures.add(service.selectCommonCodeComboAsync(comboParam));
        }

        try {
            CompletableFuture<List<ComboVO>>[] futureArray = futures.toArray(new CompletableFuture[0]);
            CompletableFuture.allOf(futureArray).get();

            for (int i = 0; i < paramList.length; i++) {
                result.addDataSet(paramList[i].getKey(), futureArray[i].get());
            }
        } catch (ExecutionException e) {
            LOG.error("공통 코드 콤보 조회 중 오류 발생", e);
        } catch (InterruptedException e) {
            LOG.error("공통 코드 콤보 조회 중 오류 발생", e);
            Thread.currentThread().interrupt();
        }

        return result;
    }

    private Map<String, String> parseComboParam(String params) {
        int offset = 0;
        List<String> list = new ArrayList<>();
        Map<String, String> map = new HashMap<>();
        while (list.size() <= 4) {
            int pos = params.indexOf(":", offset);
            if (pos == -1) {
                list.add(params.substring(offset));
                break;
            }

            if (pos >= 1 && params.charAt(pos - 1) == '\\') {
                continue;
            }

            list.add(params.substring(offset, pos));
            offset = pos + 1;
        }

        if (list.size() == 1) {
            map.put("headerCode", list.get(0).replace("\\:", ":"));
        } else if (list.size() >= 2) {
            String[] keyList = { SYS_ID, "moduleId", "headerCode", "type" };
            String lastItem = list.get(list.size() - 1);
            boolean setType = "".equals(lastItem) || "a".equalsIgnoreCase(lastItem) || "c".equalsIgnoreCase(lastItem);
            int keyOffset = list.size() == 4 || (!setType && list.size() == 3) ? 0 : 1;

            for (int i = 0; i < list.size(); i++) {
                map.put(keyList[i + keyOffset], list.get(i));
            }
        }

        return map;
    }
    
}
