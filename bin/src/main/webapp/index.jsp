<%@ page import="com.jnv.common.config.JnFrameProperties" %>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" trimDirectiveWhitespaces="true" %>
<%
    String frontendType = JnFrameProperties.getProperty("frontendType", "web");
    pageContext.setAttribute("type", frontendType);
%>
<jsp:forward page="/WEB-INF/jsp/index-${type}.jsp" />
