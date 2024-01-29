package com.jnv.main.businessmain.service;

import java.util.Map;

import com.jnv.sm.vo.UserManageVO;

import org.egovframe.rte.fdl.cmmn.exception.EgovBizException;

public interface BusinessMainService {

    UserManageVO selectUserInfo(Map<String, String> params) throws EgovBizException;
}
