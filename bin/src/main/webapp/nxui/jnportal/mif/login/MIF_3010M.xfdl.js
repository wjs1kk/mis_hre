(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("MIF_3010M");
            this.set_titletext("로그인");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsLogin", this);
            obj._setContents("<ColumnInfo><Column id=\"username\" type=\"STRING\" size=\"256\"/><Column id=\"password\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta000","0","0",null,"720","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("divLoginForm","180","37",null,null,"180","40",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_cssclass("portal_div_frmBg_Login");
            this.addChild(obj.name, obj);

            obj = new Static("Static14_00_02","45.83%","111","110","29",null,null,null,null,null,null,this.divLoginForm.form);
            obj.set_taborder("0");
            obj.set_enable("true");
            obj.set_cssclass("portal_sta_frmTitle_login");
            obj.set_font("normal 700 25px/normal \"맑은고딕\"");
            obj.set_text("로그인");
            obj.set_textAlign("center");
            this.divLoginForm.addChild(obj.name, obj);

            obj = new Static("Static14_00_02_00","37.68%","Static14_00_02:15","383","20",null,null,null,null,null,null,this.divLoginForm.form);
            obj.set_taborder("1");
            obj.set_enable("true");
            obj.set_cssclass("portal_sta_frmDescription");
            obj.set_font("normal normal 14px/normal \"맑은고딕\"");
            obj.set_text("로그인 후 과제관리시스템의 서비스를 이용하실 수 있습니다.");
            obj.set_textAlign("center");
            this.divLoginForm.addChild(obj.name, obj);

            obj = new Edit("edtUsername","36.2%","Static14_00_02_00:50",null,"50","36.2%",null,null,null,null,null,this.divLoginForm.form);
            obj.set_taborder("4");
            obj.set_cssclass("portal_edi_login");
            obj.set_font("normal 500 16px/normal \"맑은고딕\"");
            obj.set_text("Edit");
            this.divLoginForm.addChild(obj.name, obj);

            obj = new Edit("edtPassword","36.2%","edtUsername:9",null,"50","36.2%",null,null,null,null,null,this.divLoginForm.form);
            obj.set_taborder("5");
            obj.set_cssclass("portal_edi_login");
            obj.set_font("normal 500 16px/normal \"맑은고딕\"");
            obj.set_password("true");
            obj.set_text("Edit");
            this.divLoginForm.addChild(obj.name, obj);

            obj = new CheckBox("chkSaveId","edtPassword:-100%","edtPassword:10","271","30",null,null,null,null,null,null,this.divLoginForm.form);
            obj.set_taborder("2");
            obj.set_text("아이디 저장");
            obj.set_color("#777777");
            obj.set_font("normal 16px/normal \"맑은고딕\"");
            this.divLoginForm.addChild(obj.name, obj);

            obj = new Button("btnLogin","36.20%","chkSaveId:26",null,"56","36.20%",null,null,null,null,null,this.divLoginForm.form);
            obj.set_taborder("3");
            obj.set_text("로그인");
            obj.set_cssclass("portal_btn_frm");
            this.divLoginForm.addChild(obj.name, obj);

            obj = new Div("divBtnWrap","36.2%","470",null,"16","36.2%",null,null,null,null,null,this.divLoginForm.form);
            obj.set_taborder("6");
            obj.set_text("");
            this.divLoginForm.addChild(obj.name, obj);

            obj = new Button("btnFindId","303","0","115","15",null,null,null,null,null,null,this.divLoginForm.form.divBtnWrap.form);
            obj.set_taborder("0");
            obj.set_text("아이디 찾기");
            obj.set_cssclass("portal_btn_find");
            obj.set_flexshrink("0");
            this.divLoginForm.form.divBtnWrap.addChild(obj.name, obj);

            obj = new Static("Static21_00","779","5","1","13",null,null,null,null,null,null,this.divLoginForm.form.divBtnWrap.form);
            obj.set_taborder("1");
            obj.set_enable("true");
            obj.set_cssclass("portal_sta_btnLine");
            obj.set_textAlign("center");
            this.divLoginForm.form.divBtnWrap.addChild(obj.name, obj);

            obj = new Button("btnFindPassword","781","0","130","15",null,null,null,null,null,null,this.divLoginForm.form.divBtnWrap.form);
            obj.set_taborder("2");
            obj.set_text("비밀번호 찾기");
            obj.set_cssclass("portal_btn_find");
            obj.set_flexshrink("0");
            this.divLoginForm.form.divBtnWrap.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divLoginForm.form.divBtnWrap.form
            obj = new Layout("default","",0,0,this.divLoginForm.form.divBtnWrap.form,function(p){});
            obj.set_type("horizontal");
            obj.set_flexmainaxisalign("center");
            obj.set_flexcrossaxisalign("center");
            this.divLoginForm.form.divBtnWrap.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divLoginForm.form
            obj = new Layout("default","",0,0,this.divLoginForm.form,function(p){});
            this.divLoginForm.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divLoginForm.form.edtUsername","value","dsLogin","username");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divLoginForm.form.edtPassword","value","dsLogin","password");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("MIF_3010M.xfdl","lib::common.xjs");
        this.registerScript("MIF_3010M.xfdl", function() {
        /**
         *  로그인
         *  MenuPath      로그인 - 로그인
         *  FileName      MIF_3010M.xfdl
         *  Creator       parksw
         *  CreateDate    2023.10.30
         *  Desction      로그인 화면
         ************** 소스 수정 이력 ***********************************************
         *  date          Modifier    Description
         *******************************************************************************
         *  2023.10.30    parksw      최초 생성
         *******************************************************************************/

        this.executeIncludeScript("lib::common.xjs"); /*include "lib::common.xjs"*/;

        this.callbackMsg = null;
        this.errorCode = null;
        this.errorMsg = null;

        let objEnv;
        let svcUrl;

        /***********************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose)
         ***********************************************************************************************/

        this.MIF_3010M_onload = function(obj,e)
        {
        	objEnv = nexacro.getEnvironment();
        	svcUrl = objEnv.services["svcurl"].url;

            const id = window.localStorage.getItem("username");
            if (id != null && id != "") {
                this.dsLogin.setColumn(0, "username", id);
            }
        };

        /************************************************************************************************
         * TRANSACTION 서비스 호출 처리
         ************************************************************************************************/

        this.fnLogin = function ()
        {
            if (!this.fnValidate()) {
                return;
            }

            this.transaction("login", svcUrl + "login", "dsLogin=dsLogin", "", "", "fnCallback");
        };

        this.fnInvalidatePreviousSession = function ()
        {
            this.transaction("login", svcUrl + "mi/login/invalidatePreviousSession.do", "dsLogin=dsLogin", "", "", "fnCallback");
        };

        /************************************************************************************************
         * CALLBACK 콜백 처리부분(Transaction, Popup)
         ************************************************************************************************/

        this.fnCallback = function (svcId, errorCode, errorMsg)
        {
            if (svcId === "login") {
                if (this.callbackMsg === "success") {
                    nexacro.getApplication().reloadSessionInfo();
                } else if (errorCode == -1000) {
                    this.gfnAlert("ID 또는 비밀번호가 잘못되었습니다.");
                } else if (errorCode == -1100) {
                    this.gfnAlert(errorMsg, [], "", {}, "C");
                }
            }
        };

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/

        this.divLoginForm_btnLogin_onclick = function(obj,e)
        {
            this.fnLogin();
        };

        this.divLoginForm_btnFindId_onclick = function(obj,e)
        {
        	const sMenuId = "findIdPassword";
        	const url = "mif::login/MIF_3020M.xfdl";
        	nexacro.getApplication().goPage(sMenuId, url);
        };

        this.divLoginForm_btnFindPassword_onclick = function(obj,e)
        {
        	const sMenuId = "findIdPassword";
        	const url = "mif::login/MIF_3020M.xfdl";
        	nexacro.getApplication().goPage(sMenuId, url);
        };

        this.Edit_onkeyup = function(obj,e)
        {
            if (e.keycode == 13) {
                this.fnLogin();
            }
        };

        /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/

        this.fnValidate = function ()
        {
            this.divLoginForm.form.edtUsername.updateToDataset();
            this.divLoginForm.form.edtPassword.updateToDataset();

            const args = [
                ["username", "NULL", "아이디"],
                ["password", "NULL", "비밀번호"],
            ];

            return this.gfnCheckGrid(this.dsLogin, args, "");
        };




        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.MIF_3010M_onload,this);
            this.divLoginForm.form.Static14_00_02.addEventHandler("onclick",this.Static_onclick,this);
            this.divLoginForm.form.Static14_00_02_00.addEventHandler("onclick",this.Static_onclick,this);
            this.divLoginForm.form.edtUsername.addEventHandler("onkeyup",this.Edit_onkeyup,this);
            this.divLoginForm.form.edtPassword.addEventHandler("onkeyup",this.Edit_onkeyup,this);
            this.divLoginForm.form.chkSaveId.addEventHandler("onclick",this.chk_pass_onclick,this);
            this.divLoginForm.form.chkSaveId.addEventHandler("onchanged",this.chk_pass_onchanged,this);
            this.divLoginForm.form.btnLogin.addEventHandler("onclick",this.divLoginForm_btnLogin_onclick,this);
            this.divLoginForm.form.divBtnWrap.form.btnFindId.addEventHandler("onclick",this.divLoginForm_btnFindId_onclick,this);
            this.divLoginForm.form.divBtnWrap.form.Static21_00.addEventHandler("onclick",this.Static_onclick,this);
            this.divLoginForm.form.divBtnWrap.form.btnFindPassword.addEventHandler("onclick",this.divLoginForm_btnFindPassword_onclick,this);
        };
        this.loadIncludeScript("MIF_3010M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
