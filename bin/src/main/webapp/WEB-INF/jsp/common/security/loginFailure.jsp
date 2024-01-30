<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Insert title here</title>
        <script type="text/javascript">
            window.onload=function(){
                alert("로그인에 실패하였습니다.\nID 또는 PW가 잘못 입력되었는지, 접근할 수 있는 IP인지 확인하세요.");
                var form = document.getElementById("main");
                form.submit();
            };
        </script>
    </head>
    <body>
        <form id="main" method="post" action="<%=request.getContextPath()%>/simpleLogin.do">
            <input type="hidden" name="redirectTo" value="${param.redirectTo}">
        </form>
    </body>
</html>
