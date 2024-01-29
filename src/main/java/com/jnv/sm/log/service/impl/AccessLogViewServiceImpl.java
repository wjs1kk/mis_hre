package com.jnv.sm.log.service.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.jnv.sm.log.service.AccessLogViewDAO;
import com.jnv.sm.log.service.AccessLogViewService;
import com.jnv.sm.vo.AccessLogViewVO;

@Service("accessLogViewService")
@Transactional
public class AccessLogViewServiceImpl implements AccessLogViewService {

    @Resource(name = "accessLogViewDAO")
    private AccessLogViewDAO dao;

    @Override
    public List<AccessLogViewVO> getAccessLogView(Map<String, Object> paramMap) throws Exception {
        return dao.getAccessLogView(paramMap);
    }

}
