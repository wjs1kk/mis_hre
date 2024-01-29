package com.jnv.sm.log.service.impl;

import java.util.List;
import java.util.Map;
import javax.annotation.Resource;

import com.jnv.jncore.argumentresolver.JnParam;
import com.jnv.sm.log.service.ProgAccessStatiDAO;
import com.jnv.sm.log.service.ProgAccessStatiService;
import com.jnv.sm.vo.AccessStatisticsVO;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service("progAccessStatiService")
@Transactional
public class ProgAccessStatiServiceImpl implements ProgAccessStatiService {

    @Resource(name = "progAccessStatiDAO")
    private ProgAccessStatiDAO dao;

    @Override
    public List<AccessStatisticsVO> selectProgAccess(JnParam param) {
        return dao.selectProgAccess((Map<String, ?>) param.getDatasetFirstItem("paramMap"));
    }

}
