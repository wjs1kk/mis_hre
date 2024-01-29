package com.jnv.sm.log.service;

import java.util.List;

import com.jnv.jncore.argumentresolver.JnParam;
import com.jnv.sm.vo.ConnectLogVO;

import org.egovframe.rte.fdl.cmmn.exception.EgovBizException;

public interface ConnectLogService {

    List<ConnectLogVO> selectConnectLog(JnParam param) throws EgovBizException;

}
