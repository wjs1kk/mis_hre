(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("MIF_2010P_02");
            this.set_titletext("회원탈퇴 신청");
            if (Form == this.constructor)
            {
                this._setFormPosition(500,355);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsPassword", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"oldPasswd\" type=\"STRING\" size=\"72\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divPopup","0","0","500","355",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_cssclass("div_WF_Area");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta002","30","209",null,"51","30",null,null,null,null,null,this.divPopup.form);
            obj.set_taborder("5");
            obj.set_cssclass("portal_sta_memLabelBg");
            obj.set_text("");
            this.divPopup.addChild(obj.name, obj);

            obj = new Static("staTitle","0","0",null,"50","0",null,null,null,null,null,this.divPopup.form);
            obj.set_taborder("2");
            obj.set_text("회원탈퇴신청");
            obj.set_cssclass("portal_sta_popTitle");
            this.divPopup.addChild(obj.name, obj);

            obj = new Static("sta001","0","staTitle:20","500","74",null,null,null,null,null,null,this.divPopup.form);
            obj.set_taborder("1");
            obj.set_text("회원탈퇴를 원하시는 경우 \r\n아래 비밀번호를 입력하시고 확인버튼을 클릭해주세요.");
            obj.set_cssclass("portal_sta_popTit");
            this.divPopup.addChild(obj.name, obj);

            obj = new Button("btnOk","42.40%","sta002:20",null,"45","42.40%",null,null,null,null,null,this.divPopup.form);
            obj.set_text("확인");
            obj.set_cssclass("portal_btn");
            obj.set_visible("true");
            obj.set_taborder("0");
            this.divPopup.addChild(obj.name, obj);

            obj = new Static("sta003","30","209","150","51",null,null,null,null,null,null,this.divPopup.form);
            obj.set_taborder("3");
            obj.set_text("비밀번호 입력");
            obj.set_enable("true");
            obj.set_cssclass("portal_sta_memLabel_L");
            this.divPopup.addChild(obj.name, obj);

            obj = new Edit("edtPassword","190","218","270","33",null,null,null,null,null,null,this.divPopup.form);
            obj.set_taborder("4");
            obj.set_cssclass("portal_edi");
            obj.set_password("true");
            this.divPopup.addChild(obj.name, obj);

            obj = new Button("btnClose",null,"0","50","50","0",null,null,null,null,null,this.divPopup.form);
            obj.set_cssclass("portal_btn_close");
            obj.set_visible("true");
            obj.set_taborder("6");
            this.divPopup.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divPopup.form
            obj = new Layout("default","",0,0,this.divPopup.form,function(p){});
            this.divPopup.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",500,355,this,function(p){});
            obj.set_mobileorientation("landscape");
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
        this.addIncludeScript("MIF_2010P_02.xfdl","lib::common.xjs");
        this.registerScript("MIF_2010P_02.xfdl", function() {
        /**
         *  회원 탈퇴
         *  MenuPath      마이페이지 - 회원정보 - 회원탈퇴 팝업
         *  FileName      MIF_2010P_02.xfdl
         *  Creator       yuyr
         *  CreateDate    2023.11.03
         *  Desction      회원 탈퇴 팝업
         ************** 소스 수정 이력 ***********************************************
         *  date          Modifier    Description
         *******************************************************************************
         *  2023.11.03    yuyr 	      최초 생성
         *  2023.11.06    parksw      기능 완성
         *******************************************************************************/

        this.executeIncludeScript("lib::common.xjs"); /*include "lib::common.xjs"*/;

        /***********************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose)
         /***********************************************************************************************/

        /**
         * description 화면 onload
         */
        this.MIF_2010P_02_onload = function(obj,e)
        {
        	this.gfnFormOnLoad(this);
        };

        /************************************************************************************************
         * TRANSACTION 서비스 호출 처리
         ************************************************************************************************/

        this.fnCheckPassword = function ()
        {
            this.gfnTransaction("checkPassword", "mi/myPage/checkPassword.do", "dsPassword", "", "", "fnCallback");
        };

        this.fnWithdraw = function ()
        {
            this.gfnTransaction("withdraw", "mi/myPage/withdraw.do", "dsPassword", "", "", "fnCallback");
        };

        /************************************************************************************************
         * CALLBACK 콜백 처리부분(Transaction, Popup)
         ************************************************************************************************/

        this.fnCallback = function (svcId, errorCode, errorMsg)
        {
            switch (svcId) {
                case "checkPassword":
                    if (this.callbackMsg === "success") {
                        this.gfnAlert("정말로 탈퇴하시겠습니까?", [], "", { trueFunc: "fnWithdraw" }, "C");
                    } else {
                        this.gfnAlert("비밀번호가 틀렸습니다.");
                    }
                    break;
                case "withdraw":
                    this.gfnAlert("탈퇴 처리가 완료되었습니다.");
                    nexacro.getApplication().logout();
                    this.close();
                    break;
                default:
                    break;
            }
        };

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/

        this.divPopup_btnClose_onclick = function(obj,e)
        {
        	this.close();
        };

        this.divPopup_btnOk_onclick = function(obj,e)
        {
        	this.fnValidate();
        };

        this.divPopup_edtPassword_onkeyup = function(obj,e)
        {
            if (e.keycode == 13) {
                this.fnValidate();
            }
        };

        /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/

        this.fnValidate = function ()
        {
            this.divPopup.form.edtPassword.updateToDataset();

            const args = [
                ["oldPasswd", "NULL|MAX_LEN:300", "비밀번호"],
            ];

            if (this.gfnCheckGrid(this.dsPassword, args, "")) {
                this.fnCheckPassword();
            }
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.MIF_2010P_02_onload,this);
            this.divPopup.form.staTitle.addEventHandler("onclick",this.out_Static00_onclick,this);
            this.divPopup.form.sta001.addEventHandler("onclick",this.Static_onclick,this);
            this.divPopup.form.btnOk.addEventHandler("onclick",this.divPopup_btnOk_onclick,this);
            this.divPopup.form.sta003.addEventHandler("onclick",this.Static_onclick,this);
            this.divPopup.form.edtPassword.addEventHandler("onkeyup",this.divPopup_edtPassword_onkeyup,this);
            this.divPopup.form.btnClose.addEventHandler("onclick",this.divPopup_btnClose_onclick,this);
            this.dsPassword.addEventHandler("oncolumnchanged",this.dsMemberInfo_oncolumnchanged,this);
        };
        this.loadIncludeScript("MIF_2010P_02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
