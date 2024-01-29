package com.jnv.common.exception;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.MessageSource;
import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.View;
import org.springframework.web.servlet.handler.AbstractHandlerExceptionResolver;

import com.jnv.common.log.service.LogService;
import com.jnv.common.util.ClientInfoUtil;
import com.jnv.jncore.argumentresolver.JnResult;
import com.jnv.jncore.exception.BusinessException;
import com.jnv.jncore.exception.service.MessageUtil;
import com.jnv.jncore.util.RequestUtil;
import com.jnv.jncore.view.JnResultView;
import com.nexacro.uiadapter.spring.core.NexacroException;
import com.nexacro.uiadapter.spring.core.view.NexacroModelAndView;
import com.nexacro.uiadapter.spring.core.view.NexacroView;

public class JnExceptionResolver extends AbstractHandlerExceptionResolver {

    @Resource(name = "logService")
    private LogService service;

    @Value("#{jnframeProp['frontendType'] ?: 'web'}")
    private String frontendType;

    private final Logger logger = LoggerFactory.getLogger(JnExceptionResolver.class);
    private MessageSource messageSource;
    private String defaultErrorMsg = "An Error Occured. check the ErrorCode for detail of error infomation.";
    private boolean shouldSendStackTrace = false;
    private boolean shouldLogStackTrace = false;
    private View view;

    public View getView() {
        if (this.view != null) {
            return this.view;
        }
        if ("nexacro".equals(frontendType)) {
            return new NexacroView();
        } else {
            return new JnResultView();
        }
    }

    public void setView(View view) {
        this.view = view;
    }

    public void setDefaultErrorMsg(String defaultErrorMsg) {
        this.defaultErrorMsg = defaultErrorMsg;
    }

    public void setShouldSendStackTrace(boolean shouldSendStackTrace) {
        this.shouldSendStackTrace = shouldSendStackTrace;
    }

    public void setShouldLogStackTrace(boolean shouldLogStackTrace) {
        this.shouldLogStackTrace = shouldLogStackTrace;
    }

    public void setMessageSource(MessageSource messageSource) {
        this.messageSource = messageSource;
    }

    protected ModelAndView doResolveException(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) {
        this.prepareResolveException(request, response, handler, ex);
        ModelAndView mav = null;

        if (RequestUtil.isNexacroRequest(request)) {
            NexacroModelAndView nexacroMav = new NexacroModelAndView(this.getView());
            if (ex instanceof NexacroException) {
                NexacroException nexaExp = (NexacroException) ex;
                nexacroMav.setErrorCode(nexaExp.getErrorCode());
                nexacroMav.setErrorMsg(this.getExceptionSendMessage(ex));
            } else {
                if (ex instanceof BusinessException) {
                    nexacroMav.setErrorCode(-2);
                    nexacroMav.setErrorMsg(this.getExceptionSendMessage(ex));
                } else {
                    nexacroMav.setErrorCode(-1);
                    nexacroMav.setErrorMsg(ex.toString());
                }
            }

            mav = nexacroMav;
        } else {
            JnResult result = new JnResult();

            if (ex instanceof BusinessException) {
                result.setErrorCode(-2);
                result.setErrorMessage(this.getExceptionSendMessage(ex));
            } else {
                result.setErrorCode(-1);
                result.setErrorMessage(ex.toString());
            }

            mav = new ModelAndView(getView());
            mav.addObject(JnResultView.JN_RESULT, result);
        }

        try {
            if (!(ex instanceof BusinessException)) {
                service.setExceptionLog(request, ex, handler);
            }
        } catch (Exception e) {
            logger.error("Exception Log 를 저장하지 못했습니다. IP: {}, URL: {}", ClientInfoUtil.getRemoteIp(request), request.getRequestURI(), e);
        }

        return mav;
    }

    private void prepareResolveException(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) {
        if (this.shouldLogStackTrace) {
            String exceptionMessage = this.getExceptionLogMessage(ex);
            this.logger.error(exceptionMessage, ex);
        }
    }

    private String getExceptionLogMessage(Exception e) {
        String exceptionMessage = this.getLocalizedMessage(e.getMessage());
        if (e instanceof NexacroException) {
            String userErrorMsg = this.getLocalizedMessage(((NexacroException) e).getErrorMsg());
            exceptionMessage = "errorMsg=" + userErrorMsg + ", stackMessage=" + exceptionMessage;
        }
        return exceptionMessage;
    }

    private String getExceptionSendMessage(Exception e) {
        String userErrorMsg = null;
        if (e instanceof NexacroException) {
            userErrorMsg = this.getLocalizedMessage(((NexacroException) e).getErrorMsg());
        }

        String exceptionMessage = null;
        if (this.shouldSendStackTrace) {
            exceptionMessage = this.getLocalizedMessage(e.getMessage());
            if (userErrorMsg != null) {
                exceptionMessage = "errorMsg=" + userErrorMsg + ", stackMessage=" + exceptionMessage;
            }
        } else if (userErrorMsg != null) {
            exceptionMessage = userErrorMsg;
        } else {
            String localizedMessage = null;
            if(e instanceof BusinessException) {
                localizedMessage = this.getLocalizedMessageBusinessException((BusinessException) e);
            }else {
                localizedMessage = this.getLocalizedMessage(this.defaultErrorMsg);
            }
            exceptionMessage = localizedMessage;
        }

        return exceptionMessage;
    }

    private String getLocalizedMessage(String reason) {
        if (reason == null) {
            return null;
        } else {
            if (this.messageSource != null) {
                reason = this.messageSource.getMessage(reason, (Object[]) null, reason, LocaleContextHolder.getLocale());
            }
            return reason;
        }
    }

    private String getLocalizedMessageBusinessException(BusinessException ex) {
        String reason = ex.getErrorCode();
        if (reason == null) {
            return null;
        } else {
            if (this.messageSource != null) {
                reason = MessageUtil.getMessageArgs(this.messageSource, reason, ex.getArgs(), reason, LocaleContextHolder.getLocale());
            }
            return reason;
        }
    }
}
