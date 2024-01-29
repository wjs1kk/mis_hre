<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%-- <%@ page import="com.jnv.jnframe.util.StringUtil"%> --%>
<%@ page import="java.util.Enumeration"%>
<%
//     String _menuId     = StringUtil.null2str(request.getParameter("_MENU_ID_")    , request.getParameter("_NO_LOG_MENU_ID_"));
//     String _resultPage = StringUtil.null2str(request.getParameter("_RESULT_PAGE_"), (String)request.getAttribute("javax.servlet.forward.servlet_path"));

    out.println("<form id='_mockUserForm' action='"+request.getContextPath()+"/setMockUser.do' method='post' target='_self'>");
//     out.println("    <input type='hidden' name='_RESULT_PAGE_'    value='"+_resultPage+"'>");
//     out.println("    <input type='hidden' name='_NO_LOG_MENU_ID_' value='"+_menuId    +"'>");

    Enumeration<String> er = request.getParameterNames();
    while(er.hasMoreElements()){
        String key = (String)er.nextElement();

        if(!key.startsWith("_") && !key.endsWith("_")){
            out.println("    <input type='hidden' name='"+key+"' value='"+request.getParameter(key)+"'/>");
        }
    }
    out.println("</form>");
%>
<script type="text/javascript">
    var mockUserCtrl = {
            keyupHandler : function(e){
                 e = e || window.event;
                 var src = e.srcElement || e.target;

                 var srcValue = src.value+"";
                 var reg = /\d/;

                 if( srcValue.length == 6 &&  reg.test(srcValue)){
                     if(e.keyCode == 13){
                         mockUserCtrl.mockUserSetting(srcValue);
                     }else{
                         mockUserCtrl.findUserInfo(src);
                     }
                 }else if(e.keyCode ==13){
                     mockUserCtrl.findUserInfo(src);
                 }

            },
            findUserInfo : function(elem){
                //base-common.jsp searchData call
                searchData("searchEmp", {"searchWord" : elem.value}, elem, {
                    result : function(rtn){
                        elem.value = rtn["EMP_NO"];
                        elem.focus();
                    },
                    noresult : function(){
                        alert("존재하지 않는 고유번호 입니다.");
                        elem.value = "";
                        elem.focus();
                    }
                });
            },
            mockUserSetting : function(value){
                if(!value || value.length < 2){
                    alert("최소 2글자 이상 입력해 주십시오.");
                    return;
                }
                var form = document.getElementById("_mockUserForm");
                var input   = document.createElement("input");
                input.type  = "hidden";
                input.name  = "_MOCK_USER_ID_";
                input.value = value;
                form.appendChild(input);

                <%--기존 프로그램호환성 유지를 위한 코드--%>
                if(

                        && parent) parent.arguments = pageArg;
                else if(pageArg && opener) opener.arguments = pageArg;

                form.submit();
            },
            clearMockUser : function(){
                var form = document.getElementById("_mockUserForm");

                var checkInput = form.querySelector("[name=_NO_LOG_MENU_ID_]");
                if(!checkInput.value || checkInput.value == "null") return false;

                var inpt = form.querySelector("[name=_MOCK_USER_ID_]");
                if(!!inpt) inpt.value = "";
                form.submit();
            }
    };
</script>
