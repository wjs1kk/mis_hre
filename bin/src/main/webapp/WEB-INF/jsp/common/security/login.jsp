<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html lang="ko">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1">
<title>Login</title>
    <!-- BXI Common CSS / JS -->
    <link rel="stylesheet" type="text/css" href='<c:url value="/css/base/xi-base.css"/>'/>

<script type="text/javascript">

</script>
</head>
<body class="xi-bg-default">
<div class="xi-layout-login">
<%--
    <div class="xi-layout-login-box">

        <form name="login" action="j_spring_security_check" method="post">
            <div class="xi-w20 xi-txt-color-e xi-disp-inline-block xi-txt-bold">ID</div>
            <input type="text" name="j_username" class="xi-w50 xi-disp-inline-block" style="margin-bottom: 6px;" autofocus="autofocus"/>
            <br/>
            <div class="xi-w20 xi-txt-color-e xi-disp-inline-block xi-txt-bold">PW</div>
            <input type="password" name="j_password"  class="xi-w50 xi-disp-inline-block" style="margin-right:4px;"/>
            <input type="submit" value="Login" class=" xi-disp-inline-block xi-btn xi-btn-style-gray"/>
        </form>

    </div>
--%>
</div>
</body>
</html>