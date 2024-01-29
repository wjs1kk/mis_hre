package com.jnv.sm.log.service;

import java.util.List;
import java.util.Map;

import com.jnv.sm.vo.AccessLogViewVO;

import org.egovframe.rte.psl.dataaccess.mapper.Mapper;

@Mapper("accessLogViewDAO")
public interface AccessLogViewDAO {

    List<AccessLogViewVO> getAccessLogView(Map<String, Object> paramMap);
}
