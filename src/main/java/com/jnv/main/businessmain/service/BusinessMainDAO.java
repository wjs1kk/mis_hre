package com.jnv.main.businessmain.service;

import java.util.Map;

import com.jnv.sm.vo.UserManageVO;

import org.egovframe.rte.fdl.cmmn.exception.EgovBizException;
import org.egovframe.rte.psl.dataaccess.mapper.Mapper;

@Mapper("businessMainDAO")
public interface BusinessMainDAO {

    UserManageVO selectUserInfo(Map<String, String> params) throws EgovBizException;
}
