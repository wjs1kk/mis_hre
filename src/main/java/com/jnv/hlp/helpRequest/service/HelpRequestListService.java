package com.jnv.hlp.helpRequest.service;

import java.util.List;
import java.util.Map;

import com.jnv.hlp.vo.HelpRequestVO;

public interface HelpRequestListService {

    List<HelpRequestVO> getHelpRequestList(Map<String, Object> searchMap);

}
