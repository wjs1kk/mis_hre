package com.jnv.main.common.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.CompletableFuture;

import org.springframework.ui.ModelMap;

import com.jnv.jncore.vo.ComboVO;
import com.jnv.sm.vo.FunctionVO;

import org.egovframe.rte.fdl.cmmn.exception.EgovBizException;

public interface CommonService {

    List<FunctionVO> selectFuncList(Map<String, Object> param) throws EgovBizException;

    List<Map<String, String>> selectUserList(Map<?, ?> paramMap) throws EgovBizException;

    List<Map<String, String>> selectLocationList(Map<?, ?> paramMap) throws EgovBizException;

    List<ComboVO> selectDeptCdCombo(Map<?, ?> paramMap) throws EgovBizException;

    List<Map<String, String>> selectDeptList(HashMap<?, ?> paramMap) throws EgovBizException;

    List<Map<String, String>> selectRoleUserList(Map<?, ?> paramMap) throws EgovBizException;

    List<FunctionVO> selectMenuId(Map<String, Object> param) throws EgovBizException;

    void saveConnectLog(Map<String, String> map, ModelMap model) throws EgovBizException;

    boolean checkPassword(Map<String, String> paramMap) throws EgovBizException;

    List<ComboVO> userComboSearch(Map<?, ?> paramMap) throws EgovBizException;

    int searchPasswordExpiredDays() throws EgovBizException;

    List<ComboVO> selectCommonCodeCombo(Map<String, ? extends Object> params);

    CompletableFuture<List<ComboVO>> selectCommonCodeComboAsync(Map<String, String> params);

}
