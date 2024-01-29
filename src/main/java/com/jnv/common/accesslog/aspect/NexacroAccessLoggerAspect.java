package com.jnv.common.accesslog.aspect;

import com.jnv.common.accesslog.annotation.AccessLogging;
import com.jnv.common.accesslog.annotation.ParamInfo;
import com.jnv.common.accesslog.service.AccessLoggerService;
import com.jnv.common.accesslog.vo.AccessLogVO;
import com.jnv.common.util.ClientInfoUtil;
import com.jnv.jncore.security.UserVO;
import com.nexacro.java.xapi.data.PlatformData;
import com.nexacro.java.xapi.data.VariableList;
import com.nexacro.uiadapter.spring.core.context.NexacroContext;
import com.nexacro.uiadapter.spring.core.context.NexacroContextHolder;
import org.apache.commons.lang3.ArrayUtils;
import org.apache.commons.lang3.StringUtils;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.aspectj.lang.reflect.MethodSignature;
import org.egovframe.rte.fdl.security.userdetails.util.EgovUserDetailsHelper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Profile;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.ui.ModelMap;
import org.springframework.util.StopWatch;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import org.springframework.web.servlet.ModelAndView;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.lang.reflect.Method;
import java.text.SimpleDateFormat;
import java.util.*;
import java.util.stream.Collectors;

@Component
@Profile("nexacro")
@Aspect
public class NexacroAccessLoggerAspect {

    private static final Logger LOG = LoggerFactory.getLogger(NexacroAccessLoggerAspect.class);

    public NexacroAccessLoggerAspect() {
        LOG.debug("Initialized");
    }

    @Resource(name = "accessLoggerService")
    private AccessLoggerService service;

    @Pointcut("execution(@com.jnv.common.accesslog.annotation.AccessLogging * *(..))")
    public void accessLogging() {
        // dummy
    }

    @Pointcut("@within(org.springframework.stereotype.Controller)"
            + " || @within(org.springframework.web.bind.annotation.RestController)")
    public void controllerClass() {
    }

    @Pointcut("@annotation(org.springframework.web.bind.annotation.RequestMapping)"
        + " || @annotation(org.springframework.web.bind.annotation.GetMapping)"
        + " || @annotation(org.springframework.web.bind.annotation.PostMapping)"
        + " || @annotation(org.springframework.web.bind.annotation.PutMapping)")
    public void requestMappedMethod() {
    }

    @Around("controllerClass() && requestMappedMethod()")
    public Object accessLog(ProceedingJoinPoint joinPoint) throws Throwable {

        Date startTime = new Date();
        StopWatch stopWatch = new StopWatch();
        Object retValue = null;

        try {
            stopWatch.start();

            retValue = joinPoint.proceed();

            return retValue;
        } finally {
            stopWatch.stop();

            Method method = getMethodOf(joinPoint);
            RequestMapping reqMapping = method.getAnnotation(RequestMapping.class);
            String[] reqMappedValues = reqMapping.value();

            if(ArrayUtils.isNotEmpty(reqMappedValues)) {
                String reqUrl = reqMappedValues[0];

                Date endTime = new Date();
                boolean successful = isSuccessful(joinPoint, retValue);

                HttpServletRequest req = ((ServletRequestAttributes) RequestContextHolder.getRequestAttributes()).getRequest();
                NexacroContext ctx = NexacroContextHolder.getNexacroContext();

                String sysId = "";
                String userId = "";
                String menuId = "";
                String memberId = "";
                String userNmKr = "";

                if (ctx != null) {
                    PlatformData reqData = ctx.getPlatformRequest().getData();
                    VariableList varList = reqData.getVariableList();
                    if (varList.contains("__menuId__")) {
                        menuId = reqData.getVariable("__menuId__").getString();
                    }
                }

//              /* Authenticated  */
                Boolean isAuthenticated = EgovUserDetailsHelper.isAuthenticated();

                if (Boolean.TRUE.equals(isAuthenticated)) {
                    UserVO user = (UserVO)EgovUserDetailsHelper.getAuthenticatedUser();
                    sysId = user.getSysId();
                    userId = user.getUserId();
                    memberId = user.getMemberId();
                    userNmKr = user.getUserNmKr();
                }

                AccessLogVO vo = new AccessLogVO();
                vo.setAccessUrl(reqUrl);
                vo.setSessionSysId(sysId);
                vo.setMenuId(menuId);

                // requestMapping으로 accesslog info 조회 func code, func pattern type, func id, menu
                AccessLogVO accessInfo = service.selectAccessInfo(vo);

                if(accessInfo != null) {
                    String clientIp = ClientInfoUtil.getRemoteIp(req);
//                    String requestBody = formatRequestBody(req, joinPoint, method);  // 필요시 활성화
                    String requestBody = "";  // 필요시 활성화
                    SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss.SSS");

                    accessInfo.setAccessTime(dateFormat.format(startTime));
                    accessInfo.setFinishTime(dateFormat.format(endTime));
                    accessInfo.setAccessIp(clientIp);
                    accessInfo.setAccessUrl(reqUrl);
                    accessInfo.setUserId(userId);
                    accessInfo.setMemberId(memberId);
                    accessInfo.setUserNmKr(userNmKr);
                    accessInfo.setSysId(sysId);
                    accessInfo.setActionName(accessInfo.getFuncName());
                    accessInfo.setActionResult(successful ? "Y" : "N");
                    accessInfo.setRequestBody(requestBody);
                    accessInfo.setElapsedTime(stopWatch.getTotalTimeMillis());

                    try {
                        service.insertAccessLog(accessInfo);
                    } catch (DataAccessException e) {
                        LOG.error("ACCESS LOG를 저장하지 못했습니다. IP: {}, URL: {}, 요청 본문: {}", clientIp, reqUrl, requestBody, e);
                    }
                }
            }
        }
    }

    @Around("com.jnv.common.accesslog.aspect.NexacroAccessLoggerAspect.accessLogging()")
    public Object saveLog(ProceedingJoinPoint joinPoint) throws Throwable {
        LOG.debug("around");
        Method method = getMethodOf(joinPoint);
        AccessLogging annotation = method.getAnnotation(AccessLogging.class);

        Date now = new Date();
        try {
            Object proceed = joinPoint.proceed();
            boolean successful = isSuccessful(joinPoint, proceed);
            saveLog(now, annotation, successful);

            return proceed;
        } catch (Throwable e) {
            saveLog(now, annotation, false);
            throw e;
        }
    }

    private void saveLog(Date startTime, AccessLogging annotation, boolean successful) {
        HttpServletRequest req = ((ServletRequestAttributes) RequestContextHolder.getRequestAttributes()).getRequest();
        UserVO userVO = null;
        String url = req.getRequestURI();

        Object principal = EgovUserDetailsHelper.getAuthenticatedUser();
        if (principal instanceof UserVO) {
            userVO = (UserVO) principal;
        }

        if (url.startsWith(req.getContextPath())) {
            url = url.substring(req.getContextPath().length());
        }

        String menuId = service.selectMenuIdForUrl(url, annotation.preferredMenuId());
        String clientIp = ClientInfoUtil.getRemoteIp(req);
        String requestBody = formatRequestBody(req, annotation);

        AccessLogVO vo = new AccessLogVO();
        vo.setAccessDateTime(startTime);
        vo.setMenuId(menuId);
        vo.setAccessIp(clientIp);
        vo.setAccessUrl(url);
        vo.setRequestBody(requestBody);
        vo.setActionResult(successful ? "Y" : "N");
        vo.setActionName(annotation.actionName());

        if (StringUtils.isNotBlank(annotation.menuNm())) {
            vo.setMenuNm(annotation.menuNm());
        }

        if (StringUtils.isNotBlank(annotation.progNm())) {
            vo.setProgNm(annotation.progNm());
        }

        if (userVO != null) {
            vo.setUserId(userVO.getUserId());
        }

        try {
            service.insertLog(vo);
        } catch (DataAccessException e) {
            LOG.error("접근로그를 저장하지 못했습니다. IP: {}, URL: {}, 요청 본문: {}", clientIp, url, requestBody, e);
        }
    }

    private Method getMethodOf(JoinPoint joinPoint) {
        MethodSignature signature = (MethodSignature) joinPoint.getSignature();
        return signature.getMethod();
    }

    private String formatRequestBody(HttpServletRequest req, AccessLogging annotation) {
        Map<String, String> nameMap = new HashMap<>();
        Map<String, String[]> params = req.getParameterMap();
        Map<String, String> result = new HashMap<>();
        Set<String> hideSet = new HashSet<>();

        if (annotation.hideRequestBody())
            return "";

        if (req instanceof MultipartHttpServletRequest) {
            MultipartHttpServletRequest multipartReq = (MultipartHttpServletRequest) req;
            MultipartFile file = multipartReq.getFile("file");
            result.put("파일명", file.getOriginalFilename());
            result.put("유형", file.getContentType());
            result.put("크기", String.format("%d바이트", file.getSize()));
        } else {
            for (ParamInfo paramInfo : annotation.paramInfo()) {
                if (nameMap.containsKey(paramInfo.paramName())) {
                    String existing = nameMap.get(paramInfo.paramName());
                    LOG.warn(
                            "파라미터 이름 정의 [\"{}\": \"{}\"]를 무시합니다. \"{}\"가 이미 매핑으로 등록되어 있습니다.",
                            paramInfo.paramName(),
                            paramInfo.displayName(),
                            existing);
                } else {
                    nameMap.put(paramInfo.paramName(), paramInfo.displayName());

                    if (paramInfo.hideValue()) {
                        hideSet.add(paramInfo.paramName());
                    }
                }
            }

            Enumeration<String> paramNames = req.getParameterNames();
            while (paramNames.hasMoreElements()) {
                String paramName = paramNames.nextElement();
                String displayName = nameMap.get(paramName);
                if (StringUtils.isEmpty(displayName)) {
                    displayName = paramName;
                }

                result.put(displayName, hideSet.contains(paramName) ? "(숨김)" : String.join("\n", params.get(paramName)));
            }
        }

        return result.entrySet()
                .stream()
                .map(e -> String.format("%s: %s", e.getKey(), e.getValue()))
                .collect(Collectors.joining("\n"));
    }

    private boolean isSuccessful(JoinPoint joinPoint, Object result) {
        HttpServletResponse response = ((ServletRequestAttributes) RequestContextHolder.getRequestAttributes())
            .getResponse();

        if (result instanceof ModelAndView) {
            ModelAndView modelAndView = (ModelAndView) result;
            HttpStatus status = modelAndView.getStatus();

            try {
                if (status != null && (status.is4xxClientError() || status.is5xxServerError()))
                    return false;
            } catch (Exception e) {
                LOG.error("HttpStatus 확인 실패", e);
            }

            Map<String, Object> model = modelAndView.getModel();
            if (model.containsKey("success")) {
                Object success = model.get("success");
                if (success instanceof Boolean && !((boolean) success))
                    return false;
            }
        }

        Object[] args = joinPoint.getArgs();

        for (Object object : args) {
            if (object instanceof ModelMap) {
                Object success = ((ModelMap) object).get("success");
                if (success instanceof Boolean && !((boolean) success))
                    return false;
            }
        }

        return response.getStatus() < 400;
    }
}
