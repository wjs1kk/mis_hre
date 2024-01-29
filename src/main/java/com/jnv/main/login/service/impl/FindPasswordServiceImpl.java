package com.jnv.main.login.service.impl;

import java.util.Map;
import javax.annotation.Resource;

import com.jnv.main.login.service.FindPasswordDAO;
import com.jnv.main.login.service.FindPasswordService;
import org.egovframe.rte.fdl.cmmn.exception.EgovBizException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service("findPasswordService")
@Transactional
public class FindPasswordServiceImpl implements FindPasswordService {

    @Resource(name = "findPasswordDAO")
    private FindPasswordDAO dao;

    @Resource
    private PasswordEncoder passwordEncoder;

    @Override
    public boolean isValidTelno(Map<String, String> params) throws EgovBizException {
        return dao.isValidTelno(params);
    }

    @Override
    public boolean isValidEml(Map<String, String> params) throws EgovBizException {
        return dao.isValidEml(params);
    }

    @Override
    public void updatePassword(Map<String, String> params) throws EgovBizException {
        String originalPassword = params.get("password");
        String encoded = passwordEncoder.encode(originalPassword);
        params.put("password", encoded);
        dao.updatePassword(params);
    }
}
