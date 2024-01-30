<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<%@ page import ="java.util.*" %>
<%
//     Map sessUserInfo = new HashMap();
//     String domain = CommonUtil.getDomain(request);
//     String lang="KOR";
//     if(session.getAttribute("loginUser")!=null){
//         sessUserInfo = (Map)session.getAttribute("loginUser");
//         lang = (String)sessUserInfo.get("SESS_LANG");
//     }else{
//         out.println("<script>alert('Your session has expired.');if(window.opener!=null){window.close();}else{window.opener.location.replace('"+domain+"');} </script>");
//     }

//     String upMenuId = CommonUtil.getParam(request, "UP_MENU_ID");
//     String targetParam = CommonUtil.getParam(request, "targetParam");
    String domain = "";
    String upMenuId = "";
    String targetParam = "";
    String lang = "";
%>
<head>
    <link rel="icon" href="data:;base64,iVBORw0KGgo="/>
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <meta charset="UTF-8">
    <meta name="viewport" content="user-scalable=1, initial-scale=0.1, width=device-width, target-densitydpi=device-dpi">
    <!-- META_CHECKVERSION : Add if value of checkversion property in Envrionment is true -->


    <!-- FAVICON : favion setting (value of icon property in Environment. add to value of icon property in Environment) -->


    <!-- USERFONT_STYLE : userfont style setting (value of userfontid property in Environment. crate contents contained in xfont file specified userfontid property in Environment) -->


    <!-- FRAMEWORK_LIBRARY : framework lodaing path (list of scripts files in the Framework.json file) -->
    <script src="./nexacrolib/framework/Framework.js"></script>

    <!-- COMPONENTS_LIBRARY : commonent lodaing path (list of script file in json file specified in the TypeDefinition module) -->
    <script src="./nexacrolib/component/CompBase.js"></script>
    <script src="./nexacrolib/component/ComComp.js"></script>
    <script src="./nexacrolib/component/Grid.js"></script>
    <script src="./nexacrolib/component/ListView.js"></script>
    <script src="./nexacrolib/component/DeviceAPI.js"></script>
    <script src="./nexacrolib/component/TutorialActions/TutorialAlertAction.js"></script>
    <script src="./nexacrolib/component/TutorialActions/TutorialQueryAction.js"></script>
    <script src="./nexacrolib/component/ActionAsset/TranAction.js"></script>
    <script src="./nexacrolib/component/ActionAsset/MessageAction.js"></script>
    <script src="./nexacrolib/component/ActionAsset/PopupAction.js"></script>
    <script src="./nexacrolib/component/extPrototype/Frame.js"></script>
    <script src="./nexacrolib/component/extPrototype/Util.js"></script>
    <script src="./nexacrolib/component/extPrototype/Transaction.js"></script>
    <script src="./nexacrolib/component/extPrototype/Popup.js"></script>
    <script src="./nexacrolib/component/extPrototype/File.js"></script>
    <script src="./nexacrolib/component/extPrototype/Message.js"></script>
    <script src="./nexacrolib/component/extPrototype/Excel.js"></script>
    <script src="./nexacrolib/component/EcoLibrary/Namespace.js"></script>
    <script src="./nexacrolib/component/EcoLibrary/Eco.js"></script>
    <script src="./nexacrolib/component/EcoLibrary/array.js"></script>
    <script src="./nexacrolib/component/EcoLibrary/date.js"></script>
    <script src="./nexacrolib/component/EcoLibrary/number.js"></script>
    <script src="./nexacrolib/component/EcoLibrary/string.js"></script>
    <script src="./nexacrolib/component/EcoLibrary/object.js"></script>
    <script src="./nexacrolib/component/EcoLibrary/Style.js"></script>
    <script src="./nexacrolib/component/EcoLibrary/Logger.js"></script>
    <script src="./nexacrolib/component/EcoLibrary/Color.js"></script>
    <script src="./nexacrolib/component/EcoLibrary/XComp.js"></script>
    <script src="./nexacrolib/component/EcoLibrary/PositionSize.js"></script>
    <script src="./nexacrolib/component/EcoLibrary/Json.js"></script>
    <script src="./nexacrolib/component/EcoLibrary/Event.js"></script>
    <script src="./nexacrolib/component/EcoLibrary/LocalStorage.js"></script>
    <script src="./nexacrolib/component/EcoLibrary/Factory.js"></script>
    <script src="./nexacrolib/component/EcoLibrary/util.js"></script>
    <script src="./nexacrolib/component/ExLib/comm/core.js"></script>
    <script src="./nexacrolib/component/ExLib/comm/vali.js"></script>
    <script src="./nexacrolib/component/ExLib/comm/util.js"></script>
    <script src="./nexacrolib/component/raonkupload/js/raonkupload.js"></script>
    <script src="./nexacrolib/component/raonkupload/plugin/nexacro/21/raonkupload.nexacro21.js"></script>

    <!-- ENVIRONMENT_LIBRARY : application environment path (path of Environment.xml.js) -->
    <script src="./environment.xml.js"></script>

    <!-- SPLASH_DEFINE_STYLE : Defines the style of the splash screen that is visible while modules are loading -->
    <style>.loader { position: absolute; left: 50%; top: 50%; z-index: 1; width: 150px; height: 150px; margin: -75px 0 0 -75px; border: 16px solid #f3f3f3; border-radius: 50%; border-top: 16px solid #3498db; -webkit-animation: spin 2s linear infinite; animation: spin 2s linear infinite; } @-webkit-keyframes spin { 0% { -webkit-transform: rotate(0deg); } 100% { -webkit-transform: rotate(360deg); } } @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }</style>

    <title></title>
</head>
<body style="margin:0;border:none;-ms-touch-action:none;" onload="oninitframework()">
    <!-- SPLASH_SHOW_STYLE : Adds the splash screen that is visible while modules are loading -->
    <div class="loader" id="loader"/>

    <script>
        function oninitframework()
        {
            /* SPLASH_HIDE_STYLE : Hides the splash screen when modules finish loading */
            var loader = document.getElementById("loader");
            if (loader) loader.style.display="none";


            /* SCREEN_INFORMATION : create screen information defined in Environment > ScreenDefinition */
            var screeninfo = [
                {"id":"Desktop_screen","type":"desktop","themeid":"theme::krit","xadl":"jnportal.xadl.js"}
            ];
            nexacro._initHTMLSysEvent(window, document);
            nexacro._initEnvironment(screeninfo);
            /* create internal iframe */
            /* USERFONT_INFORMATION : userfontid property is specified in the Environment */
            nexacro._prepareManagerFrame(onloadframework);
        }
        function onloadframework()
        {
            /* application loading */
            nexacro.setInitialVariable("application", "gv_domain", "<%=domain%>");
            nexacro.setInitialVariable("application", "gv_upMenuId", "<%=upMenuId%>");
            nexacro.setInitialVariable("application", "gv_targetParam", "<%=targetParam%>");
            nexacro.setInitialVariable("application", "gv_lang", "<%=lang%>");
            nexacro.setInitialVariable("application", "gv_pni_token", "<%=session.getAttribute("pni_token")%>");

            nexacro._loadADL();
        }
        function onfinalframework()
        {
            /* application exit */
        }

        /* 뒤로가기 차단 */
        history.pushState(null, null, location.href);

        window.onpopstate = function(event) {
            history.go(1);
        };
    </script>
</body>
</html>
