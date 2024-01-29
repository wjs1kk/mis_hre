package com.jnv.common.accesslog.service;

import java.util.List;
import java.util.Map;

import com.jnv.common.accesslog.vo.AccessLogVO;

import com.jnv.sm.vo.MenuManageVO;
import org.apache.ibatis.annotations.Param;
import org.egovframe.rte.psl.dataaccess.mapper.Mapper;

@Mapper("accessLoggerDAO")
public interface AccessLoggerDAO {

    List<String> selectMenuIdForUrl(Map<String, ?> url);

    void insertLog(AccessLogVO vo);
    void insertAccessLog(AccessLogVO vo);

    void insertLogUsingMenuNm(AccessLogVO vo);

    List<AccessLogVO> selectAccessLog(Map<String, ?> params);

    AccessLogVO selectAccessInfo(AccessLogVO vo);

    MenuManageVO selectMenuInfo(@Param("menuId") String menuId, @Param("sysId") String sysId);
}
