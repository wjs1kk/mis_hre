<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko">
    <head>
        <meta charset="UTF-8">
        <title> </title>
    </head>
    <body>
        <form id="form" action="j_security_user_check" method="post">
            <input name="j_username" type="hidden" value="${param.j_username}">
            <input name="j_password" type="hidden" value="${param.j_password}">
        </form>

        <script type="text/javascript">
            window.onload = function () {
                document.querySelector("#form").submit();
            }
        </script>
    </body>
</html>



