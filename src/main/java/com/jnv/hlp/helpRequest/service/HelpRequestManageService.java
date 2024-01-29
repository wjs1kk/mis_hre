package com.jnv.hlp.helpRequest.service;

import java.util.Map;

import com.jnv.hlp.vo.HelpRequestVO;

public interface HelpRequestManageService {

    HelpRequestVO getHelpRequestManageMap(Map<String, Object> searchMap);

    void setHelpRequestManage(HelpRequestVO helpVO);

    void deleteHelpRequestManage(HelpRequestVO helpVO);

    void setHelpRequestAnswer(HelpRequestVO helpVO);

    void delUpdateHelpRequestAnswer(HelpRequestVO helpVO);
}
