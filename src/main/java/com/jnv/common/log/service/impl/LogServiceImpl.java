package com.jnv.common.log.service.impl;

import java.io.PrintWriter;
import java.io.StringWriter;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.egovframe.rte.fdl.security.userdetails.util.EgovUserDetailsHelper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.context.request.RequestAttributes;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;
import org.springframework.web.method.HandlerMethod;

import com.jnv.common.log.service.LogDAO;
import com.jnv.common.log.service.LogService;
import com.jnv.common.util.ClientInfoUtil;
import com.jnv.common.vo.LogVO;
import com.jnv.jncore.security.UserVO;

@Service("logService")
@Transactional
public class LogServiceImpl implements LogService {

    @Resource(name = "logDAO")
    private LogDAO dao;

    @Override
    public void setExceptionLog(HttpServletRequest request, Exception ex, Object handler) throws Exception {

//        if (request.getServerName().indexOf("localhost") < 0) {
        String className, methodName;
            if (handler instanceof HandlerMethod) {
                Class<?> beanType = ((HandlerMethod) handler).getBeanType();
                className = beanType.getTypeName();
                methodName = ((HandlerMethod) handler).getMethod().getName();
            } else {
                String classInfo = handler.toString();
                String classData1 = classInfo.substring(classInfo.indexOf("com.jnv."));
                String classData2 = classData1.substring(0, classData1.indexOf("("));
                int idx = classData2.lastIndexOf("#");
                className = classData2.substring(0, idx);
                methodName = classData2.substring(idx + 1);
            }

            String servletPath = request.getServletPath();
//            String pgmId = request.getParameter("pgmId");
            String pgmId = ""; //servletPath.substring(1, servletPath.lastIndexOf("/"));
//            String connIp = UserInfoHelper.getClientIpAddr(request);
            String connIp = ClientInfoUtil.getRemoteIp(request);

            StringWriter sb = new StringWriter();
            ex.printStackTrace(new PrintWriter(sb));

            String exceptionInfo = ex.getClass().toString();
            int exIdx = exceptionInfo.lastIndexOf(".");
            String exceptionNm = "";

            if(exIdx > -1)
                exceptionNm = exceptionInfo.substring(exIdx + 1);
            else
                exceptionNm = exceptionInfo;

            LogVO vo = new LogVO();
            vo.setPgmId(pgmId);
            vo.setUrl(servletPath);
            vo.setClassNm(className);
            vo.setCmd(methodName);
            vo.setConnIp(connIp);
            vo.setDeptCd("");
            vo.setDeptNm("");
            vo.setLogCont(sb.toString());
            vo.setExceptionNm(exceptionNm);

            if (Boolean.TRUE.equals(EgovUserDetailsHelper.isAuthenticated())) {
                UserVO user = (UserVO) EgovUserDetailsHelper.getAuthenticatedUser();
                vo.setUserId(user.getUserId());
                vo.setUserNmKr(user.getUserNmKr());
                vo.setMemberId(user.getMemberId());
            }

            dao.insertExceptionLog(vo);

//            HttpSession session = request.getSession();
//            Map map = (Map) session.getAttribute("loginUser");
//            String classInfo = handler.toString();
//            String classData1 = classInfo.substring(classInfo.indexOf("cres."));
//            String classData2 = classData1.substring(0, classData1.indexOf("("));
//            int idx = classData2.lastIndexOf(".");
//            String classNm = classData2.substring(0, idx);
//            String servletPath = request.getServletPath();
//            String pgmId = request.getParameter("pgmId");
//            if (pgmId == null) {
//                pgmId = servletPath.substring(0, servletPath.lastIndexOf("/"));
//            }
//
//            StringWriter sb = new StringWriter();
//            ex.printStackTrace(new PrintWriter(sb));
//            map.put("CLASS_NM", classNm);
//            map.put("PGM_ID", pgmId);
//            map.put("CMD", classData2.substring(idx + 1));
//            map.put("CONN_IP", request.getRemoteAddr());
//            map.put("URL", request.getServletPath());
//            map.put("LOG_CONT", sb.toString());
//            map.put("SESS_USER_ID", map.get("USER_ID"));
//            this.dao.insert("common.log.saveLogInfo", map);
//        }

//        dao.insertExceptionLog(logVO);

    }

    private HttpServletRequest getRequest() {
        RequestAttributes reqAttr = RequestContextHolder.getRequestAttributes();

        if (reqAttr == null)
            return null;

        ServletRequestAttributes servletReqAttr = (ServletRequestAttributes) reqAttr;

        return servletReqAttr.getRequest();
    }
}
