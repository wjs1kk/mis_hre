package com.jnv.sm.log.service;

import java.util.List;
import java.util.Map;

import com.jnv.sm.vo.RoleUserLogVO;

public interface RoleUserLogService {

    List<RoleUserLogVO> getRoleLog(Map<String, Object> searchMap) throws Exception;

}
