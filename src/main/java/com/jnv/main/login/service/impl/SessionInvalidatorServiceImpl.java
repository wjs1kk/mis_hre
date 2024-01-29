package com.jnv.main.login.service.impl;

import java.util.HashSet;
import java.util.Objects;
import java.util.Set;

import javax.annotation.Resource;

import org.springframework.security.core.session.SessionInformation;
import org.springframework.security.core.session.SessionRegistry;
import org.springframework.stereotype.Service;

import com.jnv.jncore.security.UserVO;
import com.jnv.main.login.service.SessionInvalidatorService;

import org.egovframe.rte.fdl.security.userdetails.EgovUserDetails;

@Service("sessionInvalidatorService")
public class SessionInvalidatorServiceImpl implements SessionInvalidatorService {

    @Resource
    private SessionRegistry sessionRegistry;

    @Override
    public boolean invalidate(String username) {
        boolean expiredAtLeastOne = false;
        Set<String> ids = new HashSet<>();

        for (Object p : sessionRegistry.getAllPrincipals()) {
            if (p instanceof EgovUserDetails
                && Objects.equals(username, ((UserVO) ((EgovUserDetails) p).getEgovUserVO()).getMemberId())) {
                for (SessionInformation session : sessionRegistry.getAllSessions(p, false)) {
                    session.expireNow();
                    ids.add(session.getSessionId());
                    expiredAtLeastOne = true;
                }
            }
        }

        return expiredAtLeastOne;
    }

}
