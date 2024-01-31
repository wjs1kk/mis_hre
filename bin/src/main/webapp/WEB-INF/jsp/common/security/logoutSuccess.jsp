<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Insert title here</title>
        <script type="text/javascript">
            window.onload=function(){
                alert("로그아웃 되었습니다.");
                var form = document.getElementById("main");
                form.submit();
            };
        </script>
    </head>
    <body>
      <form id="main" method="post" action="<%=request.getContextPath()%>/simpleLogin.do"></form>
    </body>
</html>


