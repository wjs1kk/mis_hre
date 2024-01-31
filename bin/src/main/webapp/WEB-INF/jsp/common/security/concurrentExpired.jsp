<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang = "ko">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Insert title here</title>
        <script type="text/javascript">
            window.onload=function(){
                alert("다른 장소에서 로그인 되었거나 세션이 종료되었습니다.");
                var checkForm = parent.document.body;
                var formCreate = document.createElement("FORM");
                formCreate.method = "POST";
                formCreate.action = "<%=request.getContextPath()%>/simpleLogin.do";
                if(checkForm != null){
                    checkForm.appendChild(formCreate);
                    formCreate.submit();
                    checkForm.removeChild(formCreate);
                }else{
                    document.body.appendChild(formCreate);
                    formCreate.submit();
                    document.body.removeChild(formCreate);
                }
            };
        </script>
    </head>
    <body>
    </body>
</html>


