<%-- 최초 개발 작성
**************************************************************************************
년월 : 2020-12-04 PARKSW
공통 > 패스워드 확인 팝업
버전 : 0.1
**************************************************************************************
--%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="c"      uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page import="egovframework.rte.fdl.security.userdetails.util.EgovUserDetailsHelper" %>
<%@ page import="com.jnv.jncore.util.WhiteListUtil"%>
<%
    Boolean isAuthenticated = EgovUserDetailsHelper.isAuthenticated();
    if(!isAuthenticated){
        response.sendRedirect(request.getContextPath() + "/login.ex");
    }
    String projectCode = WhiteListUtil.getWhiteValue(request.getParameter("projectCode"));
%>
<script type="text/javascript">
    window.onload = doOnLoad;

    var searchForm;
    var searchData;
    var searchDataStore = new dhtmlXDataStore();

    var result = null;

    function doOnLoad() {
        searchData = [
            { type: "settings", position: "label-left", labelWidth: "auto", inputWidth: "auto" },
            { type: "fieldset", list: [
                { type: "block", list: [
                    { type: "label", label: "비밀번호를 입력하세요." }
                ] },
                { type: "block", list: [
                    { type: "password", name: "password", inputWidth: "200" },
                    { type: "newcolumn", offset: 10 },
                    { type: "button", name: "btn", value: "확인" }
                ] }
            ] }
        ];

        searchForm = new dhtmlXForm("search_container", searchData);
        searchDataStore.add({});
        searchDataStore.setCursor(searchDataStore.idByIndex(0));
        searchForm.bind(searchDataStore);

        setEvent();
    }

    function setEvent() {
        searchForm.attachEvent("onButtonClick", function (name) {
            checkPassword();
        });

        searchForm.attachEvent("onKeyup", function (input, e, name, value) {
            if (e.key == "Enter")
                checkPassword();
        });
    }

    function checkPassword() {
        searchForm.updateValues();

        var data = searchForm.getFormData();
        if (!("password" in data) || data.password == null) {
            dhtmlx.alert("비밀번호를 입력하세요.");
            return;
        }

        var params = {
            paramMap: data
        };

        var r = sendDatasSync("checkPassword.do", params);
        var t = dhx4.s2j(r.xmlDoc.responseText);
        if (t != null) {
            result = t.data;
            parent.myWins.window("checkPasswordPopup").close();
        }
    }
</script>
<div class="jn-page-popup">
    <div id="search_container"></div>
</div>
