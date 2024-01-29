package com.jnv.sm.log.service;

import java.util.List;

import com.jnv.jncore.argumentresolver.JnParam;
import com.jnv.sm.vo.AccessStatisticsVO;

import org.egovframe.rte.fdl.cmmn.exception.EgovBizException;

public interface ProgAccessStatiService {

    List<AccessStatisticsVO> selectProgAccess(JnParam param) throws EgovBizException;
}
