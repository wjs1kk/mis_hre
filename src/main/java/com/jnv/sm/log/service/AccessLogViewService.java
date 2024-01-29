package com.jnv.sm.log.service;

import java.util.List;
import java.util.Map;

import com.jnv.sm.vo.AccessLogViewVO;

public interface AccessLogViewService {

    List<AccessLogViewVO> getAccessLogView(Map<String, Object> searchMap) throws Exception;

}
