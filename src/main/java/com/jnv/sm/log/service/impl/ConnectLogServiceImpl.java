package com.jnv.sm.log.service.impl;

import java.util.List;
import java.util.Map;
import javax.annotation.Resource;

import com.jnv.jncore.argumentresolver.JnParam;
import com.jnv.sm.log.service.ConnectLogDAO;
import com.jnv.sm.log.service.ConnectLogService;
import com.jnv.sm.vo.ConnectLogVO;
import org.springframework.stereotype.Service;

@Service("connectLogService")
public class ConnectLogServiceImpl implements ConnectLogService {

    @Resource(name = "connectLogDAO")
    private ConnectLogDAO dao;

    @Override
    public List<ConnectLogVO> selectConnectLog(JnParam param) {
        return dao.selectConnectLog((Map<String, ?>) param.getDatasetFirstItem("paramMap"));
    }
}
