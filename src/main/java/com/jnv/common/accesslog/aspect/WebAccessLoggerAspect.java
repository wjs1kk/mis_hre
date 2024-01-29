package com.jnv.common.accesslog.aspect;

import com.jnv.common.accesslog.service.AccessLoggerService;
import org.apache.commons.lang3.ArrayUtils;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.aspectj.lang.reflect.MethodSignature;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Profile;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;
import org.springframework.web.servlet.ModelAndView;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.lang.reflect.Method;
import java.time.Duration;
import java.time.Instant;

@Component
@Profile("web")
@Aspect
public class WebAccessLoggerAspect {
    
    private static final Logger LOG = LoggerFactory.getLogger(WebAccessLoggerAspect.class);
    
    @Resource(name = "accessLoggerService")
    private AccessLoggerService service;
    
    @Pointcut("@within(org.springframework.stereotype.Controller)" +
            " || @within(org.springframework.web.bind.annotation.RestController)")
    private void controllerClass() {
        // no-op
    }

    @Pointcut("@annotation(org.springframework.web.bind.annotation.RequestMapping)"
            + " || @annotation(org.springframework.web.bind.annotation.GetMapping)"
            + " || @annotation(org.springframework.web.bind.annotation.PostMapping)"
            + " || @annotation(org.springframework.web.bind.annotation.PutMapping)")
    public void requestMappedMethod() {
    }
    
    @Around("controllerClass() && requestMappedMethod()")
    public Object accessLog(ProceedingJoinPoint joinPoint) throws Throwable {
        Instant start = Instant.now();
        Object ret = null;
        Exception exception = null;
        
        try {
            ret = joinPoint.proceed();
            return ret;
        } catch (Exception e) {
            exception = e;
            throw e;
        } finally {
            Instant end = Instant.now();
            Duration duration = Duration.between(start, end);

            Method method = getMethodOf(joinPoint);
            String url;
            ServletRequestAttributes requestAttributes = (ServletRequestAttributes) RequestContextHolder.getRequestAttributes();
            if (requestAttributes != null) {
                HttpServletRequest request = requestAttributes.getRequest();
                url = getUrlFromRequest(request);
            } else {
                RequestMapping mapping = method.getAnnotation(RequestMapping.class);
                url = getUrlFromRequestMapping(mapping);
            }
            
            if (url != null) {
                boolean successful = isSuccessful(ret) && (exception != null);

                if (!successful) {
                    Logger targetLogger = LoggerFactory.getLogger(joinPoint.getTarget().getClass());
                    targetLogger.error("Error occured", exception);
                }
            }
        }
    }

    private static String getUrlFromRequestMapping(RequestMapping mapping) {
        if (ArrayUtils.isNotEmpty(mapping.value())) {
            return mapping.value()[0];
        } else if (ArrayUtils.isNotEmpty(mapping.path())) {
            return mapping.path()[0];
        } else {
            return null;
        }
    }

    private static String getUrlFromRequest(HttpServletRequest request) {
        String url;
        url = request.getRequestURI();
        if (url.startsWith(request.getContextPath())) {
            url = url.substring(request.getContextPath().length());
        }
        return url;
    }

    private Method getMethodOf(JoinPoint joinPoint) {
        MethodSignature signature = (MethodSignature) joinPoint.getSignature();
        return signature.getMethod();
    }

    private boolean isSuccessful(Object result) {
        if (result instanceof ModelAndView) {
            ModelAndView modelAndView = (ModelAndView) result;
            HttpStatus httpStatus = modelAndView.getStatus();

            return httpStatus != null && !httpStatus.isError();
        } else {
            ServletRequestAttributes requestAttributes = (ServletRequestAttributes) RequestContextHolder.getRequestAttributes();
            if (requestAttributes == null) {
                return true;
            }
            HttpServletResponse response = requestAttributes.getResponse();
            if (response == null) {
                return true;
            }

            HttpStatus.Series series = HttpStatus.Series.valueOf(response.getStatus());
            return series == HttpStatus.Series.CLIENT_ERROR || series == HttpStatus.Series.SERVER_ERROR;
        }
    }
}
