package com.jnv.main.common.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutionException;
import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import static com.jnv.common.util.Constants.FIELD_DATA;
import static com.jnv.common.util.Constants.FIELD_OPTIONS;
import static com.jnv.common.util.Constants.PARAM_MAP;
import static com.jnv.common.util.Constants.RESULT_VIEW;
import com.jnv.jncore.argumentresolver.JnParam;
import com.jnv.jncore.argumentresolver.JnResult;
import com.jnv.jncore.exception.controller.BaseAjaxController;
import com.jnv.jncore.security.UserVO;
import com.jnv.jncore.vo.ComboVO;
import com.jnv.main.common.service.CommonService;
import com.jnv.sm.vo.FunctionVO;
import org.apache.commons.lang3.StringUtils;
import org.egovframe.rte.fdl.cmmn.exception.EgovBizException;
import org.egovframe.rte.fdl.security.userdetails.util.EgovUserDetailsHelper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@SuppressWarnings("rawtypes")
public class CommonController extends BaseAjaxController {

    public static final String SYS_ID = "sysId";
    private static final Logger LOG = LoggerFactory.getLogger(CommonController.class);

    @Value("#{jnframeProp['sysId']}")
    private String sysId;

    @Value("#{jnframeProp['frontendType']}")
    private String frontendType;

    @Resource(name = "commonService")
    private CommonService service; // NOPMD by JNV on 17. 11. 16 오후 3:29

    // 메뉴 트리 조회
    @RequestMapping("selectFuncList.do")
    public String programManageSearch(@RequestParam Map<String, Object> param, HttpServletRequest req, ModelMap model)
            throws EgovBizException {
        List<FunctionVO> list = null;
        String roleCode = (String) param.get("roleCode");
        String[] roleCodeList = null;
        if (StringUtils.isNotEmpty(roleCode) && roleCode.contains(",")) {
            roleCodeList = roleCode.split(",");
        }
        param.put("roleCodeList", roleCodeList);
        list = service.selectFuncList(param);
        model.addAttribute(FIELD_DATA, list);
        return RESULT_VIEW;
    }

    @RequestMapping("goCommonSearch.do")
    public String searchDivPopup(
            JnParam param,
            @RequestParam Map<String, String> commandMap,
            HttpServletRequest req,
            ModelMap model)
            throws EgovBizException {

        List<Map<String, String>> searchResult = null;
        HashMap<String, String> paramMap = jsonToHashMap(commandMap.get(PARAM_MAP));

        String searchData = paramMap.get("searchData");
        switch (searchData) {
            case "searchUser":
                searchResult = service.selectUserList(paramMap);
                break;
            case "selectRoleUser":
                searchResult = service.selectRoleUserList(paramMap);
                break;
            case "searchDeptUser":
                searchResult = service.selectUserList(paramMap);
                break;
            case "searchDept":
                searchResult = service.selectDeptList(paramMap);
                break;
            default:
                break;
        }
        model.addAttribute(FIELD_DATA, searchResult);
        return RESULT_VIEW;
    }

    // 메뉴 트리 조회
    @RequestMapping("selectDeptCdCombo.do")
    public String selectDeptCdCombo(
            @RequestParam Map<String, String> commandMap,
            HttpServletRequest req,
            ModelMap model)
            throws EgovBizException {

        List<ComboVO> list = service.selectDeptCdCombo(commandMap);
        model.addAttribute(FIELD_OPTIONS, list);
        return RESULT_VIEW;
    }

    private HashMap<String, String> jsonToHashMap(String jsonStr) {
        HashMap<String, String> returnMap = new HashMap<>();
        String str = jsonStr.replace("\"", "");
        str = str.replace("{", "");
        str = str.replace("}", "");
        String[] strArray = str.split(",");

        for (String obj : strArray) {
            String[] objArray = obj.split(":");
            String key = objArray[0];
            String value = null;

            if (!obj.substring(obj.indexOf(":") + 1).isEmpty()) {
                value = objArray[1];
            } else {
                value = null;
            }
            returnMap.put(key, value);
        }
        return returnMap;
    }

    // 메뉴id조회
    @RequestMapping("selectMenuId.do")
    public String selectMenuId(@RequestParam Map<String, Object> param, HttpServletRequest req, ModelMap model)
            throws EgovBizException {

        List<FunctionVO> list = null;
        String roleCode = (String) param.get("roleCode");
        String[] roleCodeList = null;
        if (StringUtils.isNotEmpty(roleCode) && roleCode.contains(",")) {
            roleCodeList = roleCode.split(",");
        }
        param.put("roleCodeList", roleCodeList);
        list = service.selectMenuId(param);
        model.addAttribute(FIELD_DATA, list);
        return RESULT_VIEW;
    }

    /**
     * 접속로그 저장
     *
     * @param param
     * @param commandMap
     * @param req
     * @param model
     *
     * @return
     *
     * @throws EgovBizException
     */
    @SuppressWarnings("unchecked")
    @RequestMapping("/saveConnectLog.do")
    public String saveConnectLog(
            JnParam param,
            @RequestParam Map<String, String> commandMap,
            HttpServletRequest req,
            ModelMap model)
            throws EgovBizException {

        Map<String, String> saveMap = (Map<String, String>) param.getDatasetFirstItem(PARAM_MAP);
        service.saveConnectLog(saveMap, model);
        return RESULT_VIEW;
    }

    /**
     * 공통 비밀번호 확인 팝업
     *
     * @param param
     * @param req
     * @param model
     *
     * @return
     */
    @RequestMapping("/goCheckPasswordPopup.do")
    public String goCheckPasswordPopup(JnParam param, HttpServletRequest req, ModelMap model) {
        return "/common/checkPasswordPopup.jn";
    }

    /**
     * 비밀번호 확인
     *
     * @param param
     * @param req
     * @param model
     *
     * @return
     *
     * @throws EgovBizException
     */
    @RequestMapping("/checkPassword.do")
    public String checkPassword(JnParam param, HttpServletRequest req, ModelMap model) throws EgovBizException {
        @SuppressWarnings("unchecked")
        Map<String, String> paramMap = (Map<String, String>) param.getDatasetFirstItem(PARAM_MAP);
        boolean result = service.checkPassword(paramMap);
        model.addAttribute(FIELD_DATA, result);
        return RESULT_VIEW;
    }

    /**
     * 사용자 콤보 조회
     *
     * @param commandMap
     * @param req
     * @param model
     *
     * @return
     *
     * @throws EgovBizException
     */
    @RequestMapping("userComboSearch.do")
    public String userComboSearch(@RequestParam Map commandMap, HttpServletRequest req, ModelMap model)
            throws EgovBizException {
        List<ComboVO> list = service.userComboSearch(commandMap);
        model.addAttribute(FIELD_OPTIONS, list);
        return RESULT_VIEW;
    }

    /**
     * 공통 비밀번호 변경 안내 팝업
     *
     * @param param
     * @param req
     * @param model
     *
     * @return
     */
    @RequestMapping("/goPasswordExpiredPopup.do")
    public String goPasswordExpiredPopup(JnParam param, HttpServletRequest req, ModelMap model) {
        return "/common/passwordExpiredPopup.jn";
    }

    /**
     * 마지막 비밀번호 변경 후 지난 날 수 계산
     *
     * @param param
     * @param req
     * @param model
     *
     * @return
     *
     * @throws EgovBizException
     */
    @RequestMapping("/searchPasswordExpired.do")
    public String searchPasswordExpired(JnParam param, HttpServletRequest req, ModelMap model) {
        /**
         * 2021.01.05 songym CMTN_USER 에서 CM_USER 로 테이블이 변경되면서 USER_PW_MDFCN_DT 컬럼이
         * 삭제되었습니다. 기능 구현이 필요하다면 재개발을 요합니다.
         */
        return RESULT_VIEW;
    }

    @RequestMapping("/cmm/goPostalSearch.do")
    public String goPostalCodeSearch() {
        return "/common/daumpost";
    }

    @RequestMapping("cm/getCommonCodeCombo.do")
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
