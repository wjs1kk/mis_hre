package com.jnv.sm.log.service;

import java.util.List;
import java.util.Map;

import com.jnv.sm.vo.AccessLogViewVO;

import org.egovframe.rte.psl.dataaccess.mapper.Mapper;

@Mapper("accessLogDAO")
public interface AccessLogDAO {

    List<AccessLogViewVO> getAccessLog(Map<String, Object> paramMap);
}
