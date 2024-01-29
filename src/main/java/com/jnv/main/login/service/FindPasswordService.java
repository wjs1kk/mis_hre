package com.jnv.main.login.service;

import java.util.Map;

import org.egovframe.rte.fdl.cmmn.exception.EgovBizException;

public interface FindPasswordService {

    boolean isValidTelno(Map<String, String> params) throws EgovBizException;

    boolean isValidEml(Map<String, String> params) throws EgovBizException;

    void updatePassword(Map<String, String> params) throws EgovBizException;
}
