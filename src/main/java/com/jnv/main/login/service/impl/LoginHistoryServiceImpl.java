package com.jnv.main.login.service.impl;

import java.sql.SQLException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.egovframe.rte.fdl.security.userdetails.EgovUserDetails;
import org.springframework.dao.DataAccessException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetails;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import com.jnv.common.util.ClientInfoUtil;
import com.jnv.jncore.security.UserVO;
import com.jnv.main.login.service.LoginHistoryDAO;
import com.jnv.main.login.service.LoginHistoryService;
import com.jnv.main.vo.LoginLogVO;

import org.egovframe.rte.fdl.cmmn.exception.EgovBizException;

/**
 * 프로젝트 생성
 *
 * @author kimkt
 */
@Service("loginHistoryService")
@Transactional
public class LoginHistoryServiceImpl implements LoginHistoryService {

    @Resource(name = "loginHistoryDAO")
    private LoginHistoryDAO dao;

    @Override
    public void saveLoginLog(UserDetails userDetails, WebAuthenticationDetails authDetails, String sessionId)
            throws DataAccessException {
        HttpServletRequest req = ((ServletRequestAttributes) RequestContextHolder.currentRequestAttributes())
            .getRequest();

        Map<String, String> map = new HashMap<>();

        map.put("userId", userDetails.getUsername());
        map.put("userIp", ClientInfoUtil.getRemoteIp(req));
        map.put("userSessionId", sessionId);

        if (userDetails instanceof EgovUserDetails) {
            UserVO userVO = (UserVO) ((EgovUserDetails) userDetails).getEgovUserVO();
            map.put("memberId", userVO.getMemberId());
        }

        dao.saveLoginLog(map);
    }

    @Override
    public void saveLogoutLog(UserVO userVO, String sessionId) throws EgovBizException {
        try {
            Map<String, String> map = new HashMap<>();
            map.put("userId", userVO.getUserId());
            map.put("userSessionId", sessionId);

            dao.saveLogoutLog(map);
        } catch (RuntimeException e) {
            throw new EgovBizException("Cannot save logout log", e);
        }
    }

    @Override
    public List<LoginLogVO> selectLoginLog(Map<String, String> map) {
        return dao.selectLoginLog(map);
    }

    @Override
    public String selectAvailableUserIdForMemberId(Map<String, ?> map) {
        return dao.selectAvailableUserIdForMemberId(map);
    }
}
