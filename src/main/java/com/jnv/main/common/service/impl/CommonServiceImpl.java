package com.jnv.main.common.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.CompletableFuture;
import javax.annotation.Resource;

import com.jnv.jncore.security.UserVO;
import com.jnv.jncore.vo.ComboVO;
import com.jnv.main.common.service.CommonDAO;
import com.jnv.main.common.service.CommonService;
import com.jnv.sm.vo.FunctionVO;
import org.egovframe.rte.fdl.cmmn.exception.EgovBizException;
import org.egovframe.rte.fdl.security.userdetails.util.EgovUserDetailsHelper;
import org.springframework.scheduling.annotation.Async;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.ui.ModelMap;

@Service("commonService")
public class CommonServiceImpl implements CommonService {

    @Resource(name = "commonDAO")
    private CommonDAO dao;

    @Resource
    private PasswordEncoder passwordEncoder;

    @Override
    public List<FunctionVO> selectFuncList(Map<String, Object> param) throws EgovBizException {
        String sessionRoleCode = param.get("sessionRoleCode").toString();
        String[] sessionRoleCodeList = sessionRoleCode.split(",");
        param.put("roleCodeList", sessionRoleCodeList);
        return dao.selectFuncList(param);
    }

    @Override
    public List<Map<String, String>> selectUserList(Map<?, ?> paramMap) throws EgovBizException {
        return dao.selectUserList(paramMap);
    }

    @Override
    public List<Map<String, String>> selectRoleUserList(Map<?, ?> paramMap) throws EgovBizException {
        return dao.selectRoleUserList(paramMap);
    }

    @Override
    public List<ComboVO> selectDeptCdCombo(Map<?, ?> paramMap) throws EgovBizException {
        return dao.selectDeptCdCombo(paramMap);
    }

    @Override
    public List<Map<String, String>> selectLocationList(Map<?, ?> paramMap) throws EgovBizException {
        return dao.selectLocationList(paramMap);
    }

    @Override
    public List<Map<String, String>> selectDeptList(HashMap<?, ?> paramMap) throws EgovBizException {
        return dao.selectDeptList(paramMap);
    }

    @Override
    public List<FunctionVO> selectMenuId(Map<String, Object> param) throws EgovBizException {
        String sessionRoleCode = (String) param.get("sessionRoleCode");
        String[] sessionRoleCodeList = sessionRoleCode.split(",");
        param.put("roleCodeList", sessionRoleCodeList);
        return dao.selectMenuId(param);
    }

    @Override
    public void saveConnectLog(Map<String, String> map, ModelMap model) throws EgovBizException {
        // 민감정보 접근제어 메뉴 여부를 위해 회원관리,회원정보수정 메뉴 진입시 접근제어 메뉴로 저장
        String menuId = map.get("menuId");
        if (menuId.equals("member")
                || menuId.equals("memberDgs")
                || menuId.equals("memberModify")
                || menuId.equals("memberModifyDgs")) {
            map.put("cntnContrYn", "1");
        }
        dao.insertConnectLog(map);
    }

    @Override
    public boolean checkPassword(Map<String, String> paramMap) throws EgovBizException {
        UserVO sessionUser = (UserVO) EgovUserDetailsHelper.getAuthenticatedUser();

        paramMap.put("userId", sessionUser.getUserId());
        String encodedPassword = dao.getPassword(paramMap);
        return passwordEncoder.matches(paramMap.get("password"), encodedPassword);
    }

    @Override
    public List<ComboVO> userComboSearch(Map<?, ?> paramMap) throws EgovBizException {
        return dao.userComboSearch(paramMap);
    }

    @Override
    public int searchPasswordExpiredDays() throws EgovBizException {
        UserVO sessionUser = (UserVO) EgovUserDetailsHelper.getAuthenticatedUser();
        Map<String, String> map = new HashMap<>();
        map.put("userId", sessionUser.getUserId());
        return dao.selectPasswordExpiredDays(map);
    }

    @Override
    public List<ComboVO> selectCommonCodeCombo(Map<String, ? extends Object> params) {
        return dao.selectCommonCodeCombo(params);
    }

    @Async
    public CompletableFuture<List<ComboVO>> selectCommonCodeComboAsync(Map<String, String> params) {
        List<ComboVO> comboList = dao.selectCommonCodeCombo(params);
        return CompletableFuture.completedFuture(comboList);
    }
}
