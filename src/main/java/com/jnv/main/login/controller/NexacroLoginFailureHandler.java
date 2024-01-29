package com.jnv.main.login.controller;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Stream;
import javax.annotation.Resource;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.jnv.main.login.service.LoginHistoryService;
import com.jnv.main.vo.LoginLogVO;
import com.nexacro.java.xapi.data.DataSet;
import com.nexacro.java.xapi.data.PlatformData;
import com.nexacro.java.xapi.tx.HttpPlatformResponse;
import com.nexacro.java.xapi.tx.PlatformException;
import com.nexacro.uiadapter.spring.core.NexacroConstants;
import com.nexacro.uiadapter.spring.core.context.NexacroContext;
import com.nexacro.uiadapter.spring.core.context.NexacroContextHolder;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;
import org.springframework.security.web.authentication.session.SessionAuthenticationException;

public class NexacroLoginFailureHandler implements AuthenticationFailureHandler {

    private static final Logger LOG = LoggerFactory.getLogger(NexacroLoginFailureHandler.class);

    @Resource(name = "loginHistoryService")
    private LoginHistoryService service;

    @Resource(name = "loginFailureHandler")
    private LoginFailureHandler defaultHandler;

    private String defaultUrl;

    public String getDefaultUrl() {
        return defaultUrl;
    }

    public void setDefaultUrl(String defaultUrl) {
        this.defaultUrl = defaultUrl;
    }

    @Override
    public void onAuthenticationFailure(HttpServletRequest request, HttpServletResponse response,
            AuthenticationException exception) throws IOException, ServletException {
        NexacroContext context = NexacroContextHolder.getNexacroContext();
        if (context != null) {
            handleNexacroRequest(context, exception);
        } else {
            response.setStatus(HttpStatus.UNAUTHORIZED.value());
            defaultHandler.onAuthenticationFailure(request, response, exception);
        }
    }

    private void handleNexacroRequest(NexacroContext context, AuthenticationException exception) {
        PlatformData platformData = new PlatformData();
        if (exception instanceof SessionAuthenticationException) {
            DataSet dataSet = context.getPlatformData().getDataSet("dsLogin");
            String memberId = dataSet.getString(0, "username");

            Map<String, String> map = new HashMap<>();
            map.put("memberId", memberId);

            String userId = service.selectAvailableUserIdForMemberId(map);
            map.put("userId", userId);

            List<LoginLogVO> list = null;
            try {
                list = service.selectLoginLog(map);
            } catch (Exception e) {
                LOG.error(
                        "Cannot get last login IP address for user {}, tried logging in with member id {}",
                        userId,
                        memberId);
            }

            Stream<LoginLogVO> stream = (list == null) ? Stream.empty() : list.stream();

            String message = stream
                    .findFirst()
                    .map(vo -> String.format("IP %s으로 로그인되어 있습니다. ", vo.getUserIp()))
                    .orElse("다른 컴퓨터에서 로그인 중입니다. ");

            platformData.getVariableList().add(NexacroConstants.ERROR.ERROR_MSG, message);
            platformData.getVariableList().add(NexacroConstants.ERROR.ERROR_CODE, -1100);
        } else {
            platformData.getVariableList().add(NexacroConstants.ERROR.ERROR_MSG, exception.getLocalizedMessage());
            platformData.getVariableList().add(NexacroConstants.ERROR.ERROR_CODE, -1000);
        }

        HttpPlatformResponse platformResponse = context.getPlatformResponse();
        platformResponse.setData(platformData);
        try {
            platformResponse.sendData();
        } catch (PlatformException e) {
            LOG.error("Cannot send error message", e);
        }
    }
}
