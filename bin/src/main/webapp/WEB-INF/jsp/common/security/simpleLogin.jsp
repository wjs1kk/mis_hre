<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%
session.invalidate();
%>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1">
    <meta name="viewport" content="width=device-width,height=device-height,initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="<c:url value='/resources/abc/css/font.css'/>"/>
    <style>
        html,
        body {
            background-color: #f1f5f9;
            margin: 0;
            padding: 0;
            width: 100%;
            height: 100%;
            font-weight: 400;
        }

        .login-page {
            display: flex;
            flex-direction: column;
        }

        .login-page>* {
            flex: 1 0 0;
        }

        .login-form-container {
            flex: none;
        }

        .login-form {
            width: 480px;
            display: flex;
            flex-direction: column;
            align-items: stretch;
        }

        .input-group {
            padding: 48px;
            background-color: white;
        }

        .input-group>* {
            margin-top: 24px;
        }

        .input-group>*:first-child {
            margin-top: 0;
        }

        .input-box {
            position: relative;
            height: 56px;
            font-size: 1.125rem;
            line-height: 1.5rem;
            background-color: white;
        }

        .input-box>input {
            border: 1px solid #ccc;
            width: 100%;
            height: 100%;
            padding: 27px 13px 3px;
            box-sizing: border-box;
            transition: padding 200ms;
            background: transparent;
            font-size: 1.125rem;
        }

        .input-box>input:autofill,
        .input-box>input:focus {
            padding: 27px 13px 3px;
            font-size: 1.125rem;
        }

        .input-box>input:placeholder-shown:not(:focus) {
            padding: 7px 13px;
        }

        .input-box>input::placeholder {
            color: transparent;
        }

        .input-box>input:focus::placeholder {
            color: transparent;
        }

        .input-box>label {
            position: absolute;
            left: 0;
            top: 0;
            right: 0;
            padding: 4px 12px;
            font-size: 0.75rem;
            color: #333;
            height: 24px;
            transition: height 200ms, padding 200ms, font-size 200ms;
            box-sizing: border-box;
            pointer-events: none;
        }

        .input-box>input:placeholder-shown:not(:-webkit-autofill):not(:focus)+label {
            padding: 16px 12px;
            height: 100%;
            font-size: 1.125rem;
        }

        .input-box>input:placeholder-shown:not(:autofill):not(:focus)+label {
            padding: 16px 12px;
            height: 100%;
            font-size: 1.125rem;
        }

        .button-login {
            background-color: #00388E;
            height: 48px;
            color: white;
            font-size: 1.125rem;
            border: 0px none;
            font-weight: bold;
        }

        .login-title {
            text-align: center;
            font-size: 56px;
            font-family: JejuGothic, NotoSans, InfinitySans, '맑은고딕'!important;
            font-weight: bold;
            line-height: 72px;
            color: #00388e;
        }

        .login-title.small {
            font-size: 40px;
            line-height: 56px;
        }

        @media screen and (max-width: 480px) {
            .login-page>* {
                flex: none;
                margin: 24px 16px;
            }

            .login-form-container {
                width: 100%;
            }

            .input-group {
                padding: 32px;
                background-color: white;
            }

            .login-title {
                font-size: 40px;
                line-height: 56px;
            }

            .login-title.small {
                font-size: 28px;
                line-height: 36px;
            }

            .login-form {
                width: 100%;
            }
        }

        @media screen and (max-width: 320px), screen and (max-height: 480px) {
            .login-title {
                font-size: 36px;
                line-height: 48px;
            }

            .login-title.small {
                font-size: 24px;
                line-height: 32px;
            }
        }

        @media screen and (max-height: 480px) {
            .login-page>* {
                flex: none;
                margin: 8px 16px;
            }
        }
    </style>
</head>
<body class="login-page">
    <div style="display: flex; flex-direction: column; justify-content: center;">
        <div class="login-title"><span class="login-title small">국방기술진흥연구소</span><br>과제관리시스템</div>
    </div>
    <div style="flex: none; display: flex; flex-direction: row; justify-content: center;">
        <div class="login-form-container">
            <form action="<c:url value='/login' />" method="post" class="login-form">
                <div class="input-group">
                    <div class="input-box">
                        <input type="text" id="username" name="username" placeholder="ID" autofocus>
                        <label for="username">ID</label>
                    </div>
                    <div class="input-box">
                        <input type="password" id="password" name="password" placeholder="비밀번호">
                        <label for="password">비밀번호</label>
                    </div>
                </div>
                <button type="submit" class="button-login" style="margin-top: 24px;">로그인</button>
            </form>
        </div>
    </div>
    <div></div>

    <script>
        (function () {
            var isChildFrame = parent != self;

            if (isChildFrame) {
                var p = parent;
                while (p != self && parent != null) {
                    p = parent;
                }

                alert("다른 장소에서 로그인 되었거나 세션이 종료되었습니다.");
                p.location.href = "<c:url value='/simpleLogin.do'/>"
            }
        })();

        function findPassword() {
            window.open("findPassword.do", "비밀번호 찾기", "width=500,height=340,menubar=no,resizable=no");
        }
    </script>
</body>
</html>
