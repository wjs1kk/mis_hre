(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("MIF_2010P_03");
            this.set_titletext("비밀번호 확인");
            if (Form == this.constructor)
            {
                this._setFormPosition(480,290);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsPassword", this);
            obj._setContents("<ColumnInfo><Column id=\"oldPasswd\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divPopup","0","0",null,"290","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Static("Static10_00","30","180",null,"34","30",null,null,null,null,null,this.divPopup.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_condition02box");
            obj.set_text("");
            this.divPopup.addChild(obj.name, obj);

            obj = new Static("Static00","0","0",null,"50","0",null,null,null,null,null,this.divPopup.form);
            obj.set_taborder("0");
            obj.set_text("비밀번호 확인");
            obj.set_cssclass("sta_WF_popupTitle");
            this.divPopup.addChild(obj.name, obj);

            obj = new Static("staLabel","30","70",null,"90","30",null,null,null,null,null,this.divPopup.form);
            obj.set_taborder("1");
            obj.set_text("개인 정보를 변경하려면 현재 비밀번호를 입력하세요.");
            obj.set_font("normal 12pt/normal \"Malgun Gothic\"");
            obj.set_background("url(\'theme://images/img_WF_alert.png\') no-repeat center top");
            obj.set_padding("70px 0px 0px");
            obj.set_textAlign("center");
            this.divPopup.addChild(obj.name, obj);

            obj = new Static("Static_basic","30","180","150","34",null,null,null,null,null,null,this.divPopup.form);
            obj.set_taborder("2");
            obj.set_text("현재 비밀번호");
            obj.set_cssclass("sta_WF_condition02_L");
            this.divPopup.addChild(obj.name, obj);

            obj = new Edit("edtPassword","190","184","250","26",null,null,null,null,null,null,this.divPopup.form);
            obj.set_taborder("3");
            obj.set_password("true");
            this.divPopup.addChild(obj.name, obj);

            obj = new Button("btnConfirm","176","239","63","28",null,null,null,null,null,null,this.divPopup.form);
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_icoConfirm");
            obj.set_taborder("5");
            this.divPopup.addChild(obj.name, obj);

            obj = new Button("btnCancel","242","239","63","28",null,null,null,null,null,null,this.divPopup.form);
            obj.set_text("취소");
            obj.set_cssclass("btn_WF_icoCancel");
            obj.set_taborder("6");
            this.divPopup.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divPopup.form
            obj = new Layout("default","",0,0,this.divPopup.form,function(p){});
            this.divPopup.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",480,290,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divPopup.form.edtPassword","value","dsPassword","oldPasswd");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("MIF_2010P_03.xfdl","lib::common.xjs");
        this.registerScript("MIF_2010P_03.xfdl", function() {
        /**
         *  messageManage
         *  MenuPath      마이페이지 - 회원정보
         *  FileName      MIF_2010M.xfdl
         *  Creator 	  박상욱
         *  CreateDate    2023.10.25
         *  Desction      회원정보수정
         ************** 소스 수정 이력 ***********************************************
         *  date          Modifier    Description
         *******************************************************************************
         *  2023.11.03    parksw      최초 생성
         *******************************************************************************/

        this.executeIncludeScript("lib::common.xjs"); /*include "lib::common.xjs"*/;

        this.callbackMsg = null;

        /***********************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose)
         ***********************************************************************************************/

        this.MIF_2010P_03_onload = function(obj,e)
        {
        };

        /************************************************************************************************
         * TRANSACTION 서비스 호출 처리
         ************************************************************************************************/

        this.fnCheckPassword = function ()
        {
            this.divPopup.form.edtPassword.updateToDataset();

            if (!this.fnValidate()) {
                return;
            }

            this.gfnTransaction("checkPassword", "mi/myPage/checkPassword.do", "dsPassword", "", "", "fnCallback");
        };

        /************************************************************************************************
         * CALLBACK 콜백 처리부분(Transaction, Popup)
         ************************************************************************************************/

        this.fnCallback = function (svcId, errorCode, errorMsg)
        {
            switch (svcId) {
                case "checkPassword":
                    if (this.callbackMsg === "success") {
                        this.gfnPopupClose({
                            result: "success"
                        });
                    } else {
                        this.gfnAlert("비밀번호가 틀렸습니다.");
                    }
                    break;
                default:
                    break;
            }
        };

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/

        this.divPopup_btnConfirm_onclick = function(obj,e)
        {
            this.fnCheckPassword();
        };

        this.divPopup_btnCancel_onclick = function(obj,e)
        {
            this.gfnPopupClose({
                result: "canceled"
            });
        };


        this.divPopup_edtPassword_onkeydown = function(obj,e)
        {
            if (e.keycode == 13) {
                this.fnCheckPassword();
            }
        };

        /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/

        this.fnValidate = function ()
        {
            const args = [
                ["oldPasswd", "NULL|MAX_LEN:300", "비밀번호"],
            ];

            return this.gfnCheckGrid(this.dsPassword, args, "");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.MIF_2010P_03_onload,this);
            this.divPopup.form.edtPassword.addEventHandler("onkeydown",this.divPopup_edtPassword_onkeydown,this);
            this.divPopup.form.btnConfirm.addEventHandler("onclick",this.divPopup_btnConfirm_onclick,this);
            this.divPopup.form.btnCancel.addEventHandler("onclick",this.divPopup_btnCancel_onclick,this);
        };
        this.loadIncludeScript("MIF_2010P_03.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
