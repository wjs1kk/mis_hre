package com.jnv.main.login.service;

import java.util.List;
import java.util.Map;

import com.jnv.main.vo.LoginLogVO;

import org.egovframe.rte.psl.dataaccess.mapper.Mapper;

@Mapper("loginHistoryDAO")
public interface LoginHistoryDAO {

    void saveLoginLog(Map<String, String> map);

    void saveLogoutLog(Map<String, String> map);

    List<LoginLogVO> selectLoginLog(Map<String, String> map);

    List<String> selectAccessibleIP(Map<String, String> map);

    String selectAvailableUserIdForMemberId(Map<String, ?> map);
}
