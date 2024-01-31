<%-- 최초 개발 작성
**************************************************************************************
년월 : 2020-12-04 PARKSW
공통 > 비밀번호 기한 만료 안내 팝업
버전 : 0.1
**************************************************************************************
--%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="c"      uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page import="egovframework.rte.fdl.security.userdetails.util.EgovUserDetailsHelper" %>
<%@ page import="com.jnv.jncore.security.UserVO" %>
<%@ page import="java.util.*"%>
<%
    String pageId = request.getParameter("pageId");
    // 로그인　정보　가져오기
    Boolean isAuthenticated = EgovUserDetailsHelper.isAuthenticated();
    UserVO userInfo = new UserVO();
    String userNm = "";
    String userId = "";
    String roleCode = "";
    String seq = "";
    if(isAuthenticated){
        userInfo = (UserVO)EgovUserDetailsHelper.getAuthenticatedUser();
        userNm = (String)userInfo.getUserNmKr();
        userId = (String)userInfo.getUserId();
        roleCode = userInfo.getRoleCode();
    } else {
        response.sendRedirect(request.getContextPath() + "/login.ex");
    }
%>
<script type="text/javascript">
    var userId   = "<%=userId%>";
    var userSeq = "0";
    var expired = "${param.expired}";
    var type = "${param.type}";

    window.onload = function () {
        doOnLoad();
    }

    function doOnLoad() {
    }

    function changeDqs() {
        var url = "goMemberModify.do";
        var menuId = "memberModify";
        var menuNm = "회원정보수정(DQS)";
        var params = { seq: userSeq };
        parent.parent.openNewTab(url, menuId, menuNm, params);
    }

    function changeDgs() {
        var url = "goMemberModifyDgs.do";
        var menuId = "memberModifyDgs";
        var menuNm = "회원정보수정(DGS)";
        var params = { seq: userSeq };
        parent.parent.openNewTab(url, menuId, menuNm, params);
    }

    function change() {
        if (type == "DGS")
            changeDgs();
        else
            changeDqs();
        onClose();
    }

    function onClose() {
        parent.myWins.window("passwordExpiredPopup").close();
    }
</script>
<div class="jn-page-popup">
    마지막 비밀번호 변경 이후 ${param.expired}일 경과하였습니다.<br>
    보안을 위해 비밀번호를 변경하시기 바랍니다.
    <div class="jn-clear jn-space"></div>
    <div class="jn-comp-toolbox" style="position: absolute; right: 20px; bottom: 20px;">
       <div class="jn-btn-box type01" id="feButton">
            <a href="javascript:;" onclick="onClose();" class="btn_s_01">다음에 변경</a>
       </div>
       <div class="jn-btn-box type01" id="feButton">
            <a href="javascript:;" onclick="change();" class="btn_s_01">지금 변경</a>
       </div>
    </div>
</div>
