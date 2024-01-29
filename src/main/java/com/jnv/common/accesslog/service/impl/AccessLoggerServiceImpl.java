package com.jnv.common.accesslog.service.impl;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import com.jnv.sm.vo.MenuManageVO;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import com.jnv.common.accesslog.service.AccessLoggerDAO;
import com.jnv.common.accesslog.service.AccessLoggerService;
import com.jnv.common.accesslog.vo.AccessLogVO;
import com.jnv.common.util.ClientInfoUtil;
import com.jnv.jncore.security.UserVO;

import org.egovframe.rte.fdl.security.userdetails.util.EgovUserDetailsHelper;

@Service("accessLoggerService")
@Transactional
public class AccessLoggerServiceImpl implements AccessLoggerService {

    private static final Logger LOG = LoggerFactory.getLogger(AccessLoggerServiceImpl.class);

    @Resource(name = "accessLoggerDAO")
    private AccessLoggerDAO dao;

    private final SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss.SSS");

    @Override
    public String selectMenuIdForUrl(String url, String preferredMenuId) {
        Map<String, String> params = new HashMap<>();
        params.put("url", url);

        List<String> menuIdList = dao.selectMenuIdForUrl(params);
        if (menuIdList == null || menuIdList.isEmpty() || menuIdList.contains(preferredMenuId))
            return preferredMenuId;
        return menuIdList.get(0);
    }

    @Override
    public void insertLog(AccessLogVO vo) {
        if (vo.getAccessDateTime() != null) {
            vo.setAccessTime(dateFormat.format(vo.getAccessDateTime()));
        }
        if (StringUtils.isNotEmpty(vo.getMenuNm())) {
            dao.insertLogUsingMenuNm(vo);
        } else {
            dao.insertLog(vo);
        }
    }

    @Override
    public void insertAccessLog(AccessLogVO vo) {
        dao.insertAccessLog(vo);
    }

    @Override
    public void insertEncryptLog(
            Date startTime, boolean successful, String fileId, String fileSeq, String fileName, String path) {

        UserVO userVO = null;
        HttpServletRequest req = ((ServletRequestAttributes) RequestContextHolder.getRequestAttributes()).getRequest();
        String url = req.getRequestURI();

        Object principal = EgovUserDetailsHelper.getAuthenticatedUser();
        if (principal instanceof UserVO) {
            userVO = (UserVO) principal;
        }

        if (url.startsWith(req.getContextPath())) {
            url = url.substring(req.getContextPath().length());
        }

        String clientIp = ClientInfoUtil.getRemoteIp(req);
        String content = String.format("첨부파일 목록 ID: %s\n첨부파일 번호: %s\n파일명: %s\n경로: %s", fileId, fileSeq, fileName, path);

        AccessLogVO vo = new AccessLogVO();
        vo.setAccessDateTime(startTime);
        if (startTime != null) {
            vo.setAccessTime(dateFormat.format(startTime));
        }
        vo.setAccessIp(clientIp);
        vo.setAccessUrl(url);
        vo.setMenuNm("파일 암/복호화");
        vo.setProgNm("파일 암/복호화");
        vo.setRequestBody(content);
        vo.setActionResult(successful ? "Y" : "N");
        vo.setActionName("암호화");

        if (userVO != null) {
            vo.setUserId(userVO.getUserId());
        }

        try {
            dao.insertLogUsingMenuNm(vo);
        } catch (DataAccessException e) {
            LOG.error("접근 로그를 저장하지 못했습니다. IP: {}, URL: {}, 요청 본문: {}", clientIp, url, content, e);
        }
    }

    private DateFormat DT_FORMAT = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss.SSS");

    @Override
    public void insertDecryptLog(
            Date startTime, boolean successful, String fileId, String fileSeq, String fileName, String path) {

        UserVO userVO = null;
        HttpServletRequest req = ((ServletRequestAttributes) RequestContextHolder.getRequestAttributes()).getRequest();
        String url = req.getRequestURI();

        Object principal = EgovUserDetailsHelper.getAuthenticatedUser();
        if (principal instanceof UserVO) {
            userVO = (UserVO) principal;
        }

        if (url.startsWith(req.getContextPath())) {
            url = url.substring(req.getContextPath().length());
        }

        String clientIp = ClientInfoUtil.getRemoteIp(req);
        String content = String.format("첨부파일 목록 ID: %s\n첨부파일 번호: %s\n파일명: %s\n경로: %s", fileId, fileSeq, fileName, path);

        AccessLogVO vo = new AccessLogVO();
        vo.setAccessDateTime(startTime);
        vo.setAccessTime(DT_FORMAT.format(startTime));
        vo.setAccessIp(clientIp);
        vo.setAccessUrl(url);
        vo.setMenuNm("파일 암/복호화");
        vo.setProgNm("파일 암/복호화");
        vo.setRequestBody(content);
        vo.setActionResult(successful ? "Y" : "N");
        vo.setActionName("복호화");

        if (userVO != null) {
            vo.setUserId(userVO.getUserId());
        }

        try {
            dao.insertLogUsingMenuNm(vo);
        } catch (DataAccessException e) {
            LOG.error("접근 로그를 저장하지 못했습니다. IP: {}, URL: {}, 요청 본문: {}", clientIp, url, content, e);
        }
    }

    @Override
    public List<AccessLogVO> selectAccessLog(Map<String, ?> params) {
        return dao.selectAccessLog(params);
    }
    @Override
    public AccessLogVO selectAccessInfo(AccessLogVO vo) {
        return dao.selectAccessInfo(vo);
    }

    @Override
    public MenuManageVO getMenuInfo(String menuId, String sysId) {
        return dao.selectMenuInfo(menuId, sysId);
    }
}
