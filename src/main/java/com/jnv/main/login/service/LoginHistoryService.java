package com.jnv.main.login.service;

import java.sql.SQLException;
import java.util.List;
import java.util.Map;

import org.springframework.dao.DataAccessException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetails;

import com.jnv.jncore.security.UserVO;
import com.jnv.main.vo.LoginLogVO;

import org.egovframe.rte.fdl.cmmn.exception.EgovBizException;

public interface LoginHistoryService {

    void saveLoginLog(UserDetails userDetails, WebAuthenticationDetails authDetails, String sessionId)
            throws DataAccessException;

    List<LoginLogVO> selectLoginLog(Map<String, String> map) throws SQLException;

    void saveLogoutLog(UserVO userVO, String sessionId) throws EgovBizException;

    String selectAvailableUserIdForMemberId(Map<String, ?> map);

}
