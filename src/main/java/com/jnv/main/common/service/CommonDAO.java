package com.jnv.main.common.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.jnv.jncore.vo.ComboVO;
import com.jnv.sm.vo.FunctionVO;
import org.egovframe.rte.fdl.cmmn.exception.EgovBizException;
import org.egovframe.rte.psl.dataaccess.mapper.Mapper;

@Mapper("commonDAO")
public interface CommonDAO {

    /**
     * 툴바 기능조회
     *
     * @param param
     *
     * @return
     *
     * @throws EgovBizException
     */
    List<FunctionVO> selectFuncList(Map<?, ?> param) throws EgovBizException;

    List<Map<String, String>> selectUserList(Map<?, ?> paramMap) throws EgovBizException;

    List<Map<String, String>> selectRoleUserList(Map<?, ?> paramMap) throws EgovBizException;

    List<Map<String, String>> selectLocationList(Map<?, ?> paramMap) throws EgovBizException;

    List<ComboVO> selectDeptCdCombo(Map<?, ?> paramMap) throws EgovBizException;

    List<Map<String, String>> selectDeptList(HashMap<?, ?> paramMap) throws EgovBizException;

    List<FunctionVO> selectMenuId(Map<?, ?> param) throws EgovBizException;

    void insertConnectLog(Map<?, ?> param) throws EgovBizException;

    String getPassword(Map<String, ?> paramMap);

    List<ComboVO> userComboSearch(Map<?, ?> paramMap) throws EgovBizException;

    int selectPasswordExpiredDays(Map<String, ?> paramMap) throws EgovBizException;

    List<ComboVO> selectCommonCodeCombo(Map<String, ?> params);
}
