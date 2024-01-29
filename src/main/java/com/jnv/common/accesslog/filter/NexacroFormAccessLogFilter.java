package com.jnv.common.accesslog.filter;

import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
import javax.annotation.Resource;
import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;

import com.jnv.common.accesslog.service.AccessLoggerService;
import com.jnv.common.accesslog.vo.AccessLogVO;
import com.jnv.jncore.security.UserVO;
import com.jnv.sm.vo.MenuManageVO;
import org.egovframe.rte.fdl.security.userdetails.util.EgovUserDetailsHelper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;
import org.springframework.stereotype.Component;

@Component("nexacroFormAccessLogFilter")
public class NexacroFormAccessLogFilter implements Filter {

    private static final Logger LOG = LoggerFactory.getLogger(NexacroFormAccessLogFilter.class);
    public static final String PARAM_MENU_ID = "__menuId__";

    private final AntPathRequestMatcher matcher = new AntPathRequestMatcher("/nxui/**/*.xfdl.js");

    @Resource(name = "accessLoggerService")
    private AccessLoggerService service;

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
        // no-op
    }

    @Override
    public void doFilter(ServletRequest request, ServletResponse response,
            FilterChain chain) throws IOException, ServletException {
        HttpServletRequest req = (HttpServletRequest) request;
        if (!matcher.matches(req) || !req.getParameterMap().containsKey(PARAM_MENU_ID)) {
            chain.doFilter(request, response);
            return;
        }

        String menuId = req.getParameter(PARAM_MENU_ID);

        String requestUri = req.getRequestURI();
        String contextPath = req.getContextPath();
        String path = requestUri.startsWith(contextPath) ? requestUri.substring(contextPath.length()) : requestUri;
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss.SSS");
        AccessLogVO logVO = new AccessLogVO();
        UserVO user = (UserVO) EgovUserDetailsHelper.getAuthenticatedUser();

        LOG.debug("Form requested: {}", path);

        if (user != null) {
            MenuManageVO menuInfo = service.getMenuInfo(menuId, user.getSysId());
            logVO.setUserId(user.getUserId());
            logVO.setMemberId(user.getMemberId());
            logVO.setUserNmKr(user.getUserNmKr());
            logVO.setSysId(user.getSysId());

            if (menuInfo != null) {
                logVO.setMenuNm(menuInfo.getMenuNm());
                logVO.setProgId(menuInfo.getProgId());
                logVO.setProgNm(menuInfo.getProgNm());
            }
        }
        logVO.setAccessIp(req.getRemoteAddr());
        logVO.setAccessTime(dateFormat.format(new Date()));
        logVO.setAccessUrl(path);
        logVO.setMenuId(menuId);

        chain.doFilter(req, response);

        logVO.setActionResult("");
        logVO.setFinishTime(dateFormat.format(new Date()));
        service.insertAccessLog(logVO);
    }

    @Override
    public void destroy() {
        // no-op
    }
}
