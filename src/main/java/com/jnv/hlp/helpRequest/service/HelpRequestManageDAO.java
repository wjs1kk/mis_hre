package com.jnv.hlp.helpRequest.service;

import java.util.Map;

import org.egovframe.rte.psl.dataaccess.mapper.Mapper;

import com.jnv.hlp.vo.HelpRequestVO;

@Mapper("helpRequestManageDAO")
public interface HelpRequestManageDAO {

    HelpRequestVO getHelpRequestManage(Map<String, Object> searchMap);

    void insertHelpRequestManage(HelpRequestVO helpVO); // 요청 입력

    void updateHelpRequestManage(HelpRequestVO helpVO); // 요청 수정

    void deleteHelpRequestManage(HelpRequestVO helpVO); // 요청 삭제

    void updateHelpRequestAnswer(HelpRequestVO helpVO); // 답변 수정

    void delUpdateHelpRequestAnswer(HelpRequestVO helpVO); // 답변 삭제

}
