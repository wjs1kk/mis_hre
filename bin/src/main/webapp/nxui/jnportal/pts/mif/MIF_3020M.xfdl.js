(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("MIF_3020M");
            this.set_titletext("ID/PW 찾기");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsFindId", this);
            obj._setContents("<ColumnInfo><Column id=\"userNmKr\" type=\"STRING\" size=\"256\"/><Column id=\"mblTelno\" type=\"STRING\" size=\"256\"/><Column id=\"emlAddr\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFindPasswd", this);
            obj._setContents("<ColumnInfo><Column id=\"userNmKr\" type=\"STRING\" size=\"256\"/><Column id=\"mblTelno\" type=\"STRING\" size=\"256\"/><Column id=\"emlAddr\" type=\"STRING\" size=\"256\"/><Column id=\"memberId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","180","39","1560","643",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_cssclass("portal_div_frmBg_Login");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","50%","90","1",null,null,"90",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_background("#cccccc");
            this.addChild(obj.name, obj);

            obj = new Div("findID","365","120",null,"320","Static00:185",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Edit("edtEmlAddr","0","195",null,"50","0",null,null,null,null,null,this.findID.form);
            obj.set_taborder("3");
            obj.set_password("false");
            obj.set_cssclass("portal_edi_login");
            obj.set_displaynulltext("이메일");
            this.findID.addChild(obj.name, obj);

            obj = new Button("btn_findId","155","edtEmlAddr:20","130","45",null,null,null,null,null,null,this.findID.form);
            obj.set_text("확인");
            obj.set_cssclass("portal_btn");
            obj.set_visible("true");
            obj.set_taborder("0");
            this.findID.addChild(obj.name, obj);

            obj = new Static("Static00","153","0","134","37",null,null,null,null,null,null,this.findID.form);
            obj.set_taborder("4");
            obj.set_enable("true");
            obj.set_cssclass("portal_sta_frmTitle2");
            obj.set_font("normal 700 25px/normal \"맑은고딕\"");
            obj.set_text("아이디 찾기");
            obj.set_textAlign("center");
            this.findID.addChild(obj.name, obj);

            obj = new Edit("edtUserNm","0","Static00:40",null,"50","0",null,null,null,null,null,this.findID.form);
            obj.set_taborder("1");
            obj.set_password("false");
            obj.set_cssclass("portal_edi_login");
            obj.set_displaynulltext("이름");
            this.findID.addChild(obj.name, obj);

            obj = new Edit("edtMblTelno","0","edtUserNm:9",null,"50","0",null,null,null,null,null,this.findID.form);
            obj.set_taborder("2");
            obj.set_password("false");
            obj.set_cssclass("portal_edi_login");
            obj.set_displaynulltext("연락처");
            this.findID.addChild(obj.name, obj);

            obj = new Div("findPW","Static00:174","120","430","460",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Edit("edtMblTelno","0","195",null,"50","0",null,null,null,null,null,this.findPW.form);
            obj.set_taborder("3");
            obj.set_password("false");
            obj.set_displaynulltext("연락처");
            obj.set_cssclass("portal_edi_login");
            this.findPW.addChild(obj.name, obj);

            obj = new Edit("mblEmailAddr","0","edtMblTelno:9",null,"50","0",null,null,null,null,null,this.findPW.form);
            obj.set_taborder("4");
            obj.set_password("false");
            obj.set_displaynulltext("이메일");
            obj.set_cssclass("portal_edi_login");
            this.findPW.addChild(obj.name, obj);

            obj = new Static("Static20","30","mblEmailAddr:30",null,"50","30",null,null,null,null,null,this.findPW.form);
            obj.set_taborder("5");
            obj.set_text("*입력하신 이메일주소로 비밀번호변경 메일이 전송되며,\r\n해당메일의 링크를 통해 비밀번호 변경이 가능합니다.\r\n");
            obj.set_enable("true");
            obj.set_cssclass("sta_WF_GTxt");
            obj.set_textAlign("center");
            obj.set_font("normal 14px/normal \"맑은고딕\"");
            this.findPW.addChild(obj.name, obj);

            obj = new Button("btn_findPw",null,"Static20:20","130","45","155",null,null,null,null,null,this.findPW.form);
            obj.set_text("확인");
            obj.set_cssclass("portal_btn");
            obj.set_visible("true");
            obj.set_taborder("0");
            this.findPW.addChild(obj.name, obj);

            obj = new Static("Static00","141","0","159","37",null,null,null,null,null,null,this.findPW.form);
            obj.set_taborder("6");
            obj.set_enable("true");
            obj.set_cssclass("portal_sta_frmTitle2");
            obj.set_font("normal 700 25px/normal \"맑은고딕\"");
            obj.set_text("비밀번호 찾기");
            obj.set_textAlign("center");
            this.findPW.addChild(obj.name, obj);

            obj = new Edit("edtMemberId","0","Static00:40",null,"50","0",null,null,null,null,null,this.findPW.form);
            obj.set_taborder("1");
            obj.set_password("false");
            obj.set_displaynulltext("아이디");
            obj.set_cssclass("portal_edi_login");
            this.findPW.addChild(obj.name, obj);

            obj = new Edit("edtUserNmKr","0","edtMemberId:9",null,"50","0",null,null,null,null,null,this.findPW.form);
            obj.set_taborder("2");
            obj.set_password("false");
            obj.set_displaynulltext("이름");
            obj.set_cssclass("portal_edi_login");
            this.findPW.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.findID.form
            obj = new Layout("default","",0,0,this.findID.form,function(p){});
            this.findID.form.addLayout(obj.name, obj);

            //-- Default Layout : this.findPW.form
            obj = new Layout("default","",0,0,this.findPW.form,function(p){});
            this.findPW.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1920,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","findID.form.edtUserNm","value","dsFindId","userNmKr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","findID.form.edtMblTelno","value","dsFindId","mblTelno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","findID.form.edtEmlAddr","value","dsFindId","emlAddr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","findPW.form.edtMemberId","value","dsFindPasswd","memberId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","findPW.form.edtUserNmKr","value","dsFindPasswd","userNmKr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","findPW.form.edtMblTelno","value","dsFindPasswd","mblTelno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","findPW.form.mblEmailAddr","value","dsFindPasswd","emlAddr");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("MIF_3020M.xfdl","lib::common.xjs");
        this.registerScript("MIF_3020M.xfdl", function() {
        /**
         *  ID/PW찾기
         *  MenuPath      로그인 - ID/PW찾기
         *  FileName      MIF_3010M.xfdl
         *  Creator       parksw
         *  CreateDate    2023.10.31
         *  Desction      ID/PW찾기
         ************** 소스 수정 이력 ***********************************************
         *  date          Modifier    Description
         *******************************************************************************
         *  2023.10.31    parksw      최초 생성
         *******************************************************************************/

        this.executeIncludeScript("lib::common.xjs"); /*include "lib::common.xjs"*/;

        this.foundMemberId = null;
        this.emlAddr = null;

        /***********************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose)
         ***********************************************************************************************/



        /************************************************************************************************
         * TRANSACTION 서비스 호출 처리
         ************************************************************************************************/

        this.fnFindId = function ()
        {
            this.foundUserId = null;
            this.gfnTransaction("findId", "mi/login/findId.do", "dsFindId", "", "", "fnCallback");
        };

        this.fnFindPassword = function ()
        {
            this.emlAddr = null;
            this.gfnTransaction("findPassword", "mi/login/findPassword.do", "dsFindPasswd", "", "", "fnCallback");
        };

        /************************************************************************************************
         * CALLBACK 콜백 처리부분(Transaction, Popup)
         ************************************************************************************************/

        this.fnCallback = function (svcId, errorCode, errorMsg)
        {
            switch (svcId) {
                case "findId":
                    this.gfnOpenPopup("findIdResult", "pts::mif/MIF_3020P_01.xfdl", { memberId: this.foundMemberId }, "fnPopupCallback");
                    break;
                case "findPassword":
                    this.gfnOpenPopup("findIdResult", "pts::mif/MIF_3020P_02.xfdl", { emlAddr: this.emlAddr }, "fnPopupCallback");
                    break;
                default:
                    break;
            }
        };

        this.fnPopupCallback = function (popupid, args)
        {
        };

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/

        this.findPW_btn_findPw_onclick = function(obj,e)
        {
        	this.fnFindPassword();
        };

        this.findID_btn_findId_onclick = function(obj,e)
        {
        	this.fnFindId();
        };

        this.findID_edtMblTelno_oninput = function(obj,e)
        {
            var value = obj.value;
            var formatted = this.fnFormatTelno(obj.value);
            obj.set_value(formatted);
            console.log({ oldValue: value, formatted, newValue: obj.value });
        };

        this.findPW_edtMblTelno_oninput = function(obj,e)
        {
            var value = obj.value;
            var formatted = this.fnFormatTelno(obj.value);
            obj.set_value(formatted);
            console.log({ oldValue: value, formatted, newValue: obj.value });
        };

        /************************************************************************************************
        * 사용자 FUNCTION 영역
        ************************************************************************************************/

        this.fnValidateFindId = function ()
        {
            var args = [
                ["userNmKr", "NULL", "이름"],
                ["mblTelno", "NULL", "연락처"],
                ["emlAddr", "NULL", "이메일"],
            ];

            return this.gfnCheckGrid(this.dsFindId, args, "");
        };

        this.fnValidateFindPassword = function ()
        {
            var args = [
                ["memberId", "NULL", "아이디"],
                ["userNmKr", "NULL", "이름"],
                ["mblTelno", "NULL", "연락처"],
                ["emlAddr", "NULL", "이메일"],
            ];

            return this.gfnCheckGrid(this.dsFindPasswd, args, "");
        };

        this.fnFormatTelno = function (input) {
            if (Eco.isEmpty(input)) {
                return "";
            }

            var regex = /^(?:(1[568]\d{2})(\d{0,4}?)|(010)(\d{4})?(\d{0,4})|(0(?:2|[3456]\d|1[15-9]))(\d{3,4}?)?(\d{0,4}))$/;
            var i = input.replace(/(-|[^\d])/g, '');
            var match = regex.exec(i);

            console.log({ input, i, match });

            if (match == null) {
                return i;
            } else {
                return Array.from(match).slice(1)
                    .filter(s => !Eco.isEmpty(s))
                    .join('-');
            }
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.findID.form.btn_findId.addEventHandler("onclick",this.findID_btn_findId_onclick,this);
            this.findID.form.Static00.addEventHandler("onclick",this.Static_onclick,this);
            this.findID.form.edtMblTelno.addEventHandler("oninput",this.findID_edtMblTelno_oninput,this);
            this.findPW.form.edtMblTelno.addEventHandler("oninput",this.findPW_edtMblTelno_oninput,this);
            this.findPW.form.Static20.addEventHandler("onclick",this.Static_onclick,this);
            this.findPW.form.btn_findPw.addEventHandler("onclick",this.findPW_btn_findPw_onclick,this);
            this.findPW.form.Static00.addEventHandler("onclick",this.Static_onclick,this);
        };
        this.loadIncludeScript("MIF_3020M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
