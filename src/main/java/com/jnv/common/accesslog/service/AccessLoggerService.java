package com.jnv.common.accesslog.service;

import java.util.Date;
import java.util.List;
import java.util.Map;

import com.jnv.common.accesslog.vo.AccessLogVO;
import com.jnv.sm.vo.MenuManageVO;

public interface AccessLoggerService {

    String selectMenuIdForUrl(String url, String preferredMenuId);

    void insertLog(AccessLogVO vo);
    void insertAccessLog(AccessLogVO vo);

    void insertEncryptLog(
            Date startTime, boolean successful, String fileId, String fileSeq, String fileName, String path);

    void insertDecryptLog(
            Date startTime, boolean successful, String fileId, String fileSeq, String fileName, String path);

    List<AccessLogVO> selectAccessLog(Map<String, ?> params);

    AccessLogVO selectAccessInfo(AccessLogVO vo);

    MenuManageVO getMenuInfo(String menuId, String sysId);
}
