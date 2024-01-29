package com.jnv.common.log.service;

import javax.servlet.http.HttpServletRequest;

public interface LogService {

    void setExceptionLog(HttpServletRequest request, Exception ex, Object handler) throws Exception;

}
