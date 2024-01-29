package com.jnv.main.businessmain.service.impl;

import java.util.Map;

import javax.annotation.Resource;

import org.egovframe.rte.fdl.cmmn.exception.EgovBizException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.jnv.main.businessmain.service.BusinessMainDAO;
import com.jnv.main.businessmain.service.BusinessMainService;
import com.jnv.sm.vo.UserManageVO;

@Service("businessMainService")
@Transactional
public class BusinessMainServiceImpl implements BusinessMainService {

    @Resource(name = "businessMainDAO")
    private BusinessMainDAO dao;

    @Override
    public UserManageVO selectUserInfo(Map<String, String> params) throws EgovBizException {
        return dao.selectUserInfo(params);
    }
}
