package com.jnv.hlp.helpRequest.service;

import java.util.List;
import java.util.Map;

import org.egovframe.rte.psl.dataaccess.mapper.Mapper;

import com.jnv.hlp.vo.HelpRequestVO;

@Mapper("helpRequestListDAO")
public interface HelpRequestListDAO {

    List<HelpRequestVO> getHelpRequestList(Map<String, Object> searchMap);

}
