<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1">
    <title>비밀번호 찾기</title>
    <link rel="stylesheet" type="text/css" href="<c:url value='/css/jnframe/jnframe-dhtmlx.css'/>"/>
    <link rel="stylesheet" type="text/css" href="<c:url value='/css/jnframe/jnframe.css'/>"/>
    <link rel="stylesheet" type="text/css" href="<c:url value='/css/jnframe/jnframe-jn-base.css'/>"/>
    <link rel="stylesheet" type="text/css" href="<c:url value='/css/jnframe/jnframe-jn-dhtmlx.css'/>"/>
    <link rel="stylesheet" type="text/css" href="<c:url value='/css/jnframe/jnframe-jn-elements.css'/>"/>
    <link rel="stylesheet" type="text/css" href="<c:url value='/css/jnframe/jnframe-jn-layout.css'/>"/>
    <link rel="stylesheet" type="text/css" href="<c:url value='/css/jnframe/jnframe-jn-tab.css'/>"/>
    <link rel="stylesheet" type="text/css" href='<c:url value="/css/jnframe/dhtmlxscheduler.css"/>'/>
    <script src="js/dhtmlx5.2/dhtmlx5.2_formatted.js"></script>
    <script src="js/dhtmlx5.2/jnFrame-ext-dhtmlx.js"></script>
    <script src="js/jn-property.js"></script>
    <script src="js/base/base-common.js"></script>
    <script src="js/dhtmlxscheduler-formatted.js"></script>
    <script src="js/dhtmlxscheduler_tooltip.js"></script>
    <script type="text/javascript" src="<c:url value="js/jquery/jquery-1.8.3.min.js" />"></script>
</head>
<body style="margin: 0; padding: 0;">
    <div class="jn-page-popup" style="height: calc(100% - 60px);">
        <div id="search_container" style="height: 100%;"></div>
        <div class="jn-comp-toolbox" style="position: absolute; right: 20px; bottom: 20px;">
           <div class="jn-btn-box type01" id="feButton">
                <a href="javascript:;" onclick="onSave();" class="btn_s_01"><i class="xi-plus-min"></i>비밀번호 변경</a>
           </div>
        </div>
    </div>
    <script type="text/javascript">
        var searchForm;
        var searchData;
        var searchDataStore = new dhtmlXDataStore();

        window.onload = doOnLoad;

        function doOnLoad() {
            searchData = [
                { type: "settings", position: "label-left", labelWidth: "auto", inputWidth: "auto" },
                { type: "fieldset", list: [
                    { type: "block", list: [
                        { type: "input", name: "userId", label: "ID", labelWidth: 100, inputWidth: 150 }
                    ] },
                    { type: "block", list: [
                        { type: "label", label: "본인확인 방법", labelWidth: 100 },
                        { type: "newcolumn", offset: 10 },
                        { type: "radio", name: "checkMethod", label: "휴대전화", value: "telno" },
                        { type: "newcolumn", offset: 10 },
                        { type: "radio", name: "checkMethod", label: "Email", value: "email" },
                    ] },
                    { type: "block", name: "telnoCheckBlock", list: [
                        { type: "input", label: "휴대전화 번호", name: "telno", labelWidth: 100, inputWidth: 150 },
                        { type: "newcolumn", offset: 10 },
                        { type: "button", value: "확인", name: "checkTelno" }
                    ] },
                    { type: "block", name: "emailCheckBlock", list: [
                        { type: "input", label: "Email", name: "eml", labelWidth: 100, inputWidth: 150 },
                        { type: "newcolumn", offset: 10 },
                        { type: "button", value: "확인", name: "checkEml" }
                    ] },
                    { type: "block", name: "changePasswordBlock", list: [
                        { type: "password", name: "password", label: "비밀번호", labelWidth: 100, inputWidth: 150 }
                    ] },
                    { type: "block", name: "changePasswordCheckBlock", list: [
                        { type: "password", name: "passwordCheck", label: "비밀번호 확인", labelWidth: 100, inputWidth: 150 }
                    ] }
                ] }
            ];

            searchForm = new dhtmlXForm("search_container", searchData);
            searchDataStore.add({});
            searchDataStore.setCursor(searchDataStore.idByIndex(0));
            searchForm.bind(searchDataStore);

            searchForm.hideItem("telnoCheckBlock");
            searchForm.hideItem("emailCheckBlock");
            searchForm.hideItem("changePasswordBlock");
            searchForm.hideItem("changePasswordCheckBlock");

            setEvent();
        }

        function setEvent() {
            searchForm.attachEvent("onButtonClick", function (name) {
                switch (name) {
                case "checkTelno":
                    checkTelno();
                    break;
                case "checkEml":
                    checkEml();
                    break;
                }
            });

            searchForm.attachEvent("onChange", function (name, value, state) {
                if (name === "checkMethod" && state) {
                    if (value == "telno") {
                        searchForm.showItem("telnoCheckBlock");
                        searchForm.hideItem("emailCheckBlock");
                    } else if (value == "email") {
                        searchForm.hideItem("telnoCheckBlock");
                        searchForm.showItem("emailCheckBlock");
                    }
                }
            });

            searchForm.attachEvent("onKeyup", function (input, e, name, value) {
                var key = e.Key;
                if (key != "Enter")
                    return;
                if (name == "telno")
                    checkTelno();
                if (name == "eml")
                    checkEml();
                if (name == "password" || name == "passwordCheck")
                    onSave();
            })
        }

        function checkTelno() {
            searchForm.updateValues();
            var params = {
                paramMap: searchDataStore.serialize()[0]
            };

            if (("telno" in params.paramMap) && params.paramMap.telno != null && params.paramMap.telno != "") {
                if (/^\d{3}-\d{3,4}-\d{4}$/.test(params.paramMap.telno)) {
                    params.paramMap.telno = params.paramMap.telno.replace(/-/g, "");
                } else if (/^\d{10,11}$/.test(params.paramMap.telno)) {
                    // do nothing
                } else {
                    alert("전화번호가 올바른 형식이 아닙니다.");
                    return;
                }
            } else {
                alert("전화번호를 입력하세요");
                return;
            }

            var r3 = sendDatasSync("checkUserTelno.do", params);
            var t3 = dhx4.s2j(r3.xmlDoc.responseText);
            if (t3 != null && t3.data) {
                searchForm.disableItem("userId");
                searchForm.disableItem("checkMethod", "telno");
                searchForm.disableItem("checkMethod", "email");
                searchForm.disableItem("telnoCheckBlock");
                searchForm.disableItem("emailCheckBlock");
                searchForm.showItem("changePasswordBlock");
                searchForm.showItem("changePasswordCheckBlock");
            } else if (t3 != null && !t3.data) {
                alert("등록된 전화번호와 일치하지 않습니다.");
            }
        }

        function checkEml() {
            searchForm.updateValues();
            var params = {
                paramMap: searchDataStore.serialize()[0]
            };
            if (("eml" in params.paramMap) && params.paramMap.eml != null && params.paramMap.eml != "") {
                var regex = /^(?:[a-zA-Z0-9!-_]+(?:\.[a-zA-Z0-9!-_])*)@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])\.)+(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9]))$/;
                if (!regex.test(params.paramMap.eml)) {
                    alert("올바른 이메일 형식이 아닙니다.");
                    return;
                }
            } else {
                alert("이메일을 입력하세요.");
                return;
            }
            var r3 = sendDatasSync("checkUserEml.do", params);
            var t3 = dhx4.s2j(r3.xmlDoc.responseText);
            if (t3 != null && t3.data) {
                searchForm.disableItem("userId");
                searchForm.disableItem("checkMethod", "telno");
                searchForm.disableItem("checkMethod", "email");
                searchForm.disableItem("telnoCheckBlock");
                searchForm.disableItem("emailCheckBlock");
                searchForm.showItem("changePasswordBlock");
                searchForm.showItem("changePasswordCheckBlock");
            } else if (t3 != null && !t3.data) {
                alert("등록된 이메일 주소와 일치하지 않습니다.");
            }
        }

        function onSave() {
            searchForm.updateValues();
            var params = {
                paramMap: searchDataStore.serialize()[0]
            };

            if (params.paramMap.password == null || params.paramMap.password == "") {
                alert("비밀번호를 입력하세요.");
                return;
            } else if (params.paramMap.passwordCheck == null || params.paramMap.passwordCheck == "") {
                alert("비밀번호 확인을 입력하세요.");
                return;
            } else if (params.paramMap.password != params.paramMap.passwordCheck) {
                alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
                return;
            }

            var r3 = sendDatasSync("updateNewPassword.do", params);
            var t3 = dhx4.s2j(r3.xmlDoc.responseText);
            if (t3 != null) {
                alert("비밀번호를 변경하였습니다.\n변경한 비밀번호로 로그인하세요.");
                window.close();
            }
        }
    </script>
</body>
</html>
