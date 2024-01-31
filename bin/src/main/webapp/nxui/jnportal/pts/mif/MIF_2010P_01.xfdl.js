(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("MIF_2010P_01");
            this.set_titletext("비밀번호 변경");
            if (Form == this.constructor)
            {
                this._setFormPosition(660,272);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsPasswd", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"oldPasswd\" type=\"STRING\" size=\"256\"/><Column id=\"passwd\" type=\"STRING\" size=\"256\"/><Column id=\"passwdCheck\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divPopup","0","0",null,"272","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Static("sta000","30","96",null,"34","30",null,null,null,null,null,this.divPopup.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_condition02box");
            obj.set_text("");
            this.divPopup.addChild(obj.name, obj);

            obj = new Static("staPopupTitle","0","0",null,"50","0",null,null,null,null,null,this.divPopup.form);
            obj.set_taborder("0");
            obj.set_text("비밀번호 변경");
            obj.set_cssclass("sta_WF_popupTitle");
            this.divPopup.addChild(obj.name, obj);

            obj = new Static("Static10","0","50","30",null,null,"0",null,null,null,null,this.divPopup.form);
            obj.set_taborder("1");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divPopup.addChild(obj.name, obj);

            obj = new Static("Static10_00",null,"50","30",null,"0","0",null,null,null,null,this.divPopup.form);
            obj.set_taborder("2");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divPopup.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_01_00","0","249",null,"23","0",null,null,null,null,null,this.divPopup.form);
            obj.set_taborder("3");
            obj.set_text("h 23");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divPopup.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_01_00_00","0","196",null,"25","0",null,null,null,null,null,this.divPopup.form);
            obj.set_taborder("6");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divPopup.addChild(obj.name, obj);

            obj = new Button("btnPopupClose","332","221","65","28",null,null,null,null,null,null,this.divPopup.form);
            obj.set_text("닫기");
            obj.set_cssclass("");
            obj.set_visible("true");
            obj.set_taborder("5");
            this.divPopup.addChild(obj.name, obj);

            obj = new Button("btnSave","264","221","65","28",null,null,null,null,null,null,this.divPopup.form);
            obj.set_taborder("4");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_icoSave");
            this.divPopup.addChild(obj.name, obj);

            obj = new Static("sta000_00","30","129",null,"34","30",null,null,null,null,null,this.divPopup.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_condition02box");
            obj.set_text("");
            this.divPopup.addChild(obj.name, obj);

            obj = new Static("sta000_00_00","30","162",null,"34","30",null,null,null,null,null,this.divPopup.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_condition02box");
            obj.set_text("");
            this.divPopup.addChild(obj.name, obj);

            obj = new Static("staSubTitle","30","50","169","45",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("비밀번호 변경");
            obj.set_cssclass("sta_WF_subTitle01");
            this.addChild(obj.name, obj);

            obj = new Edit("edtOldPasswd","194","100","200","26",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_maxlength("100");
            obj.set_cssclass("essential");
            obj.set_password("true");
            this.addChild(obj.name, obj);

            obj = new Static("staText01","405","133","197","26",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("* 9~15자 이내 숫자, 문자, 특수문자 조합");
            obj.set_color("darkgray");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edtPasswd","194","133","200","26",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_maxlength("100");
            obj.set_cssclass("essential");
            obj.set_password("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtPasswdCheck","194","166","200","26",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_maxlength("100");
            obj.set_cssclass("essential");
            obj.set_password("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta003","30","162","150","34",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("새 비밀번호(확인)");
            obj.set_cssclass("sta_WF_condition02_LEssential");
            this.addChild(obj.name, obj);

            obj = new Static("sta002","30","129","150","34",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("새 비밀번호");
            obj.set_cssclass("sta_WF_condition02_LEssential");
            this.addChild(obj.name, obj);

            obj = new Static("sta001","30","96","150","34",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("현재 비밀번호");
            obj.set_cssclass("sta_WF_condition02_LEssential");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divPopup.form
            obj = new Layout("default","",0,0,this.divPopup.form,function(p){});
            this.divPopup.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edtOldPasswd","value","dsPasswd","oldPasswd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edtPasswd","value","dsPasswd","passwd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","edtPasswdCheck","value","dsPasswd","passwdCheck");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("MIF_2010P_01.xfdl","lib::common.xjs");
        this.registerScript("MIF_2010P_01.xfdl", function() {
        /**
        *  Popup Template
        /**
        *  messageManage
        *  MenuPath      마이페이지 - 회원정보 - 비밀번호변경 팝업
        *  FileName      MIF_2010P.xfdl
        *  Creator 	     yuyr
        *  CreateDate    2023.11.03
        *  Desction      비밀번호 변경
        ************** 소스 수정 이력 ***********************************************
        *  date          Modifier    Description
        *******************************************************************************
        *  2023.11.03    yuyr 	 최초 생성
        *******************************************************************************/

        this.executeIncludeScript("lib::common.xjs"); /*include "lib::common.xjs"*/;

        /***********************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose)
         ***********************************************************************************************/
        /**
         * description 화면 onload
         */
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnLoad(this);
        };

        /************************************************************************************************
         * TRANSACTION 서비스 호출 처리
         ************************************************************************************************/

        /**
         * description 저장
         */
        this.fnSave = function()
        {
        	this.gfnTransaction("updatePw", "mi/myPage/changePassword.do", "dsPasswd", "", "", "fnCallBack");
        };

        /************************************************************************************************
         * CALLBACK 콜백 처리부분(Transaction, Popup)
         ************************************************************************************************/

        /**
         * description Transaction CallBack 함수
        */
        this.fnCallBack = function (sSvcId, nErrorCode, sErrorMsg)
        {
        	switch (sSvcId) {
        		case "updatePw":
        			if (this.callbackMsg === "success") {
        				this.gfnAlert("비밀번호 변경이 완료되었습니다.");
        				this.close();
        			} else if (this.callbackMsg === "oldPasswordNotMatched") {
        				this.gfnAlert("현재 비밀번호가 일치하지 않습니다.");
                    } else {
        				this.gfnAlert("비밀번호 변경이 실패했습니다.");
        			}
                    break;
        		default:
                    break;
        	}
        };

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/

        /**
         * description 닫기버튼
         */
        this.divPopup_btnPopupClose_onclick = function(obj,e)
        {
        	this.close();
        };

        /**
         * description 저장버튼
         */
        this.divPopup_btnSave_onclick = function(obj,e)
        {
            this.fnBeforeSave();
        };

        /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/

        this.fnBeforeSave = function ()
        {
            this.edtOldPasswd.updateToDataset();
            this.edtPasswd.updateToDataset();
            this.edtPasswdCheck.updateToDataset();

        	if (!this.fnValidate()) {
                return;
            }

            this.fnSave();
        };

        this.fnValidate = function ()
        {
            const args = [
                ["oldPasswd", "NULL|MAX_LEN:16|MIN_LEN:9", "현재 비밀번호"],
                ["passwd", "NULL|MAX_LEN:16|MIN_LEN:9", "새 비밀번호"],
                ["passwdCheck", "NULL|MAX_LEN:16|MIN_LEN:9", "새 비밀번호(확인)"]
            ];

            if (!this.gfnCheckGrid(this.dsPasswd, args, "")) {
                return false;
            }

            const passwd = this.dsPasswd.getColumn(0, "passwd");
            const passwdCheck = this.dsPasswd.getColumn(0, "passwdCheck");

            if (!this.fnCheckPassword(passwd)) {
                return false;
            }

            return passwd === passwdCheck;
        };

        /**
         * description 비밀번호 체크 숫자, 영어, 특수기호 체크
         */
        this.fnCheckPassword = function (password)
        {
            var counts = {
                alpha: 0,
                digits: 0,
                symbols: 0
            };

            for (const ch of password) {
                var cp = ch.codePointAt(0);
                if (cp >= 0x0030 && cp <= 0x0039) {
                    counts.digits++;
                } else if ((cp >= 0x0041 && cp <= 0x005a) || (cp >= 0x0061 && cp <= 0x007a)) {
                    counts.alpha++;
                } else if ((cp >= 0x0021 && cp <= 0x002f) || (cp >= 0x003a && cp <= 0x0040) || (cp >= 0x005B && cp <= 0x0060) || (cp >= 0x007b && cp <= 0x007e)) {
                    counts.symbols++;
                } else if (cp == 0x0009 || cp == 0x000a || cp == 0x000b || cp == 0x000c || cp == 0x000d || cp == 0x0020) {
                    this.gfnAlert("공백 문자는 비밀번호에 사용할 수 없습니다.");
                    return false;
                } else if (cp <= 0x001f || cp == 0x007f) {
                    this.gfnAlert("비밀번호에 올바르지 않은 문자가 포함되어 있습니다.");
                    return false;
                } else {
                    this.gfnAlert("문자 '" + ch + "'는 비밀번호에 사용할 수 없습니다.");
                    return false;
                }
            }

            if (counts.alpha == 0 || counts.digits == 0 || counts.symbols == 0) {
                this.gfnAlert("비밀번호는 영문자, 숫자, 특수문자를 각각 하나 이상 사용해야 합니다.");
                return false;
            } else {
                return true;
            }
        };

        this.Edit_onkeydown = function(obj,e)
        {
        	if (e.keycode == 13) {
                this.fnBeforeSave();
            }
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divPopup.form.Static04_00_00_01_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.divPopup.form.Static04_00_00_01_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.divPopup.form.btnPopupClose.addEventHandler("onclick",this.divPopup_btnPopupClose_onclick,this);
            this.divPopup.form.btnSave.addEventHandler("onclick",this.divPopup_btnSave_onclick,this);
            this.staSubTitle.addEventHandler("onclick",this.Static09_onclick,this);
            this.edtOldPasswd.addEventHandler("onkeydown",this.Edit_onkeydown,this);
            this.edtPasswd.addEventHandler("onkeyup",this.divPopup_divForm_edt_001_onkeyup,this);
            this.edtPasswd.addEventHandler("onkeydown",this.Edit_onkeydown,this);
            this.edtPasswdCheck.addEventHandler("onkeyup",this.divPopup_divForm_edt_001_onkeyup,this);
            this.edtPasswdCheck.addEventHandler("onkeydown",this.Edit_onkeydown,this);
        };
        this.loadIncludeScript("MIF_2010P_01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
