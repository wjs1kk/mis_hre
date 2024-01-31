<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import ="java.util.*" %>
<!DOCTYPE html>
<html>
<%
    String target="#";
    String targetParam="";

    Map sessUserInfo = new HashMap();
    if(session.getAttribute("loginUser")!=null){
        sessUserInfo = (Map)session.getAttribute("loginUser");

        if(sessUserInfo.get("SSO_TARGET")!=null){
            target = (String)sessUserInfo.get("SSO_TARGET");
        }

        if(sessUserInfo.get("SSO_PARAM")!=null){
            targetParam = (String)sessUserInfo.get("SSO_PARAM");
        }

        if(sessUserInfo.get("SSO_TYPE")!=null){
            if(sessUserInfo.get("SSO_TYPE").equals("ssochk")){
                //out.println("sso"+sessUserInfo.get("USER_ID"));
                //response.sendRedirect("/nxui/koccais/indexQ.jsp");
            }else if(sessUserInfo.get("SSO_TYPE").equals("mobile") || sessUserInfo.get("SSO_TYPE").equals("quick")){
                response.sendRedirect("/nxui/koccais/indexQ.jsp?target="+target+"&targetParam="+targetParam);
            }else if(sessUserInfo.get("SSO_TYPE").equals("sso") || sessUserInfo.get("SSO_TYPE").equals("dup") ){
                //response.sendRedirect("/eipIndex.do");
                response.sendRedirect("/nxui/koccais/index.jsp?UP_MENU_ID="+target+"&targetParam="+targetParam);
            }else if(sessUserInfo.get("SSO_TYPE").equals("testLogin") ){
                response.sendRedirect("/eipIndex.do");
            }else{
                response.sendRedirect("/nxui/koccais/index.jsp?UP_MENU_ID="+target+"&targetParam="+targetParam);
            }
        }else{
            response.sendRedirect("/nxui/koccais/index.jsp?UP_MENU_ID="+target+"&targetParam="+targetParam);
        }
    }
    else
        response.sendRedirect(request.getContextPath() + "/nxui/jnportal/index.jsp?UP_MENU_ID="+target+"&targetParam="+targetParam);
%>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0"/>
<title>kritpms</title>
</head>
<body>
</body>
</html>
