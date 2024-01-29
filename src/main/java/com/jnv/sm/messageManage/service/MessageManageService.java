package com.jnv.sm.messageManage.service;

import java.util.List;
import java.util.Map;

import org.egovframe.rte.fdl.cmmn.exception.EgovBizException;

import com.jnv.jncore.argumentresolver.JnParam;
import com.jnv.sm.vo.MessageManageVO;
import com.jnv.sm.vo.ProgramVO;

public interface MessageManageService {

    List<MessageManageVO> getMessageList(Map<String, Object> paramMap) throws Exception;

    String setMessageList(List<MessageManageVO> messageManageList) throws Exception;

    // 팝업 조회
//    List<ProgramVO> selectProgramSearchPopup(JnParam param) throws EgovBizException;

}
