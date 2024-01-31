(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CMS_1020P");
            this.set_titletext("비밀번호 변경");
            if (Form == this.constructor)
            {
                this._setFormPosition(900,313);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsUserInfo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"mbrNo\" type=\"STRING\" size=\"256\"/><Column id=\"memberId\" type=\"STRING\" size=\"256\"/><Column id=\"oldPasswd\" type=\"STRING\" size=\"256\"/><Column id=\"passwd\" type=\"STRING\" size=\"256\"/><Column id=\"passwd2\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divPopup","0","0","900","313",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

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

            obj = new Static("Static04_00_00_01","30","50","103","20",null,null,null,null,null,null,this.divPopup.form);
            obj.set_taborder("3");
            obj.set_text("h 20");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divPopup.addChild(obj.name, obj);

            obj = new Div("divForm","30","70",null,"167","30",null,null,null,null,null,this.divPopup.form);
            obj.set_taborder("4");
            obj.set_cssclass("div_WF_popup");
            obj.set_text("");
            this.divPopup.addChild(obj.name, obj);

            obj = new Static("Static10","0","0","20","132",null,null,null,null,null,null,this.divPopup.form.divForm.form);
            obj.set_taborder("0");
            obj.set_text("w20");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divPopup.form.divForm.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_00","110","0","60","45",null,null,null,null,null,null,this.divPopup.form.divForm.form);
            obj.set_taborder("1");
            obj.set_text("h 45");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divPopup.form.divForm.addChild(obj.name, obj);

            obj = new Static("Static07_01_01_00","20","80",null,"1","22",null,null,null,null,null,this.divPopup.form.divForm.form);
            obj.set_taborder("2");
            obj.set_background("#dddddd");
            obj.set_text("");
            this.divPopup.form.divForm.addChild(obj.name, obj);

            obj = new Static("Static07_01_01_00_00","20","45",null,"1","22",null,null,null,null,null,this.divPopup.form.divForm.form);
            obj.set_taborder("3");
            obj.set_background("#dddddd");
            obj.set_text("");
            this.divPopup.form.divForm.addChild(obj.name, obj);

            obj = new Static("Static07_00_01_00",null,"45","1","36","20",null,null,null,null,null,this.divPopup.form.divForm.form);
            obj.set_taborder("4");
            obj.set_background("#dddddd");
            this.divPopup.form.divForm.addChild(obj.name, obj);

            obj = new Static("staSubTitle","19","11","169","27",null,null,null,null,null,null,this.divPopup.form.divForm.form);
            obj.set_taborder("7");
            obj.set_text("비밀번호 변경");
            obj.set_cssclass("sta_WF_subTitle01");
            this.divPopup.form.divForm.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00","19","45","1","106",null,null,null,null,null,null,this.divPopup.form.divForm.form);
            obj.set_taborder("5");
            obj.set_background("#00388e");
            obj.set_text("");
            this.divPopup.form.divForm.addChild(obj.name, obj);

            obj = new Static("sta001","20","46","150","34",null,null,null,null,null,null,this.divPopup.form.divForm.form);
            obj.set_taborder("8");
            obj.set_text("현재 비밀번호");
            obj.set_cssclass("sta_WF_condition02");
            this.divPopup.form.divForm.addChild(obj.name, obj);

            obj = new Static("Static07_01_02_00","171","46","1","34",null,null,null,null,null,null,this.divPopup.form.divForm.form);
            obj.set_taborder("6");
            obj.set_background("#dddddd");
            this.divPopup.form.divForm.addChild(obj.name, obj);

            obj = new Static("Static10_00","172","46","12","34",null,null,null,null,null,null,this.divPopup.form.divForm.form);
            obj.set_taborder("9");
            obj.set_text("w12");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divPopup.form.divForm.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_00_00","110","151","60","15",null,null,null,null,null,null,this.divPopup.form.divForm.form);
            obj.set_taborder("10");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divPopup.form.divForm.addChild(obj.name, obj);

            obj = new Edit("edtNowPw","184","50","200","26",null,null,null,null,null,null,this.divPopup.form.divForm.form);
            obj.set_taborder("11");
            obj.set_maxlength("100");
            obj.set_cssclass("essential");
            obj.set_password("true");
            this.divPopup.form.divForm.addChild(obj.name, obj);

            obj = new Static("Static10_00_00_01_00","818","0","20",null,null,"0",null,null,null,null,this.divPopup.form.divForm.form);
            obj.set_taborder("12");
            obj.set_text("w20");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divPopup.form.divForm.addChild(obj.name, obj);

            obj = new Static("sta002","20","81","150","34",null,null,null,null,null,null,this.divPopup.form.divForm.form);
            obj.set_taborder("13");
            obj.set_text("새 비밀번호");
            obj.set_cssclass("sta_WF_condition02");
            this.divPopup.form.divForm.addChild(obj.name, obj);

            obj = new Edit("edtNewPw","184","85","200","26",null,null,null,null,null,null,this.divPopup.form.divForm.form);
            obj.set_taborder("14");
            obj.set_maxlength("100");
            obj.set_cssclass("essential");
            obj.set_password("true");
            this.divPopup.form.divForm.addChild(obj.name, obj);

            obj = new Static("Static07_01_01_00_01","20","115",null,"1","22",null,null,null,null,null,this.divPopup.form.divForm.form);
            obj.set_taborder("15");
            obj.set_background("#dddddd");
            obj.set_text("");
            this.divPopup.form.divForm.addChild(obj.name, obj);

            obj = new Static("Static07_01_01_00_00_00","20","80",null,"1","22",null,null,null,null,null,this.divPopup.form.divForm.form);
            obj.set_taborder("16");
            obj.set_background("#dddddd");
            obj.set_text("");
            this.divPopup.form.divForm.addChild(obj.name, obj);

            obj = new Static("Static10_00_01","172","81","12","34",null,null,null,null,null,null,this.divPopup.form.divForm.form);
            obj.set_taborder("17");
            obj.set_text("w12");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divPopup.form.divForm.addChild(obj.name, obj);

            obj = new Static("Static07_01_01_00_00_00_00","20","115",null,"1","22",null,null,null,null,null,this.divPopup.form.divForm.form);
            obj.set_taborder("18");
            obj.set_background("#dddddd");
            obj.set_text("");
            this.divPopup.form.divForm.addChild(obj.name, obj);

            obj = new Static("sta003","20","116","150","34",null,null,null,null,null,null,this.divPopup.form.divForm.form);
            obj.set_taborder("19");
            obj.set_text("새 비밀번호(확인)");
            obj.set_cssclass("sta_WF_condition02");
            this.divPopup.form.divForm.addChild(obj.name, obj);

            obj = new Static("Static07_01_01_00_01_00","20","150",null,"1","22",null,null,null,null,null,this.divPopup.form.divForm.form);
            obj.set_taborder("20");
            obj.set_background("#dddddd");
            obj.set_text("");
            this.divPopup.form.divForm.addChild(obj.name, obj);

            obj = new Edit("edtNewPw2","184","120","200","26",null,null,null,null,null,null,this.divPopup.form.divForm.form);
            obj.set_taborder("21");
            obj.set_maxlength("100");
            obj.set_cssclass("essential");
            obj.set_password("true");
            this.divPopup.form.divForm.addChild(obj.name, obj);

            obj = new Static("Static10_00_01_01","172","116","12","34",null,null,null,null,null,null,this.divPopup.form.divForm.form);
            obj.set_taborder("22");
            obj.set_text("w12");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divPopup.form.divForm.addChild(obj.name, obj);

            obj = new Static("Static07_01_02_00_00_00","171","81","1","34",null,null,null,null,null,null,this.divPopup.form.divForm.form);
            obj.set_taborder("23");
            obj.set_background("#dddddd");
            this.divPopup.form.divForm.addChild(obj.name, obj);

            obj = new Static("Static07_01_02_00_00_00_00","171","116","1","34",null,null,null,null,null,null,this.divPopup.form.divForm.form);
            obj.set_taborder("24");
            obj.set_background("#dddddd");
            this.divPopup.form.divForm.addChild(obj.name, obj);

            obj = new Static("Static07_00_01_00_00",null,"80","1","36","20",null,null,null,null,null,this.divPopup.form.divForm.form);
            obj.set_taborder("25");
            obj.set_background("#dddddd");
            this.divPopup.form.divForm.addChild(obj.name, obj);

            obj = new Static("Static07_00_01_00_00_00",null,"115","1","36","20",null,null,null,null,null,this.divPopup.form.divForm.form);
            obj.set_taborder("26");
            obj.set_background("#dddddd");
            this.divPopup.form.divForm.addChild(obj.name, obj);

            obj = new Static("staText01","395","85","416","26",null,null,null,null,null,null,this.divPopup.form.divForm.form);
            obj.set_taborder("27");
            obj.set_text("8~16자리 영문 대소문자, 숫자, 특수문자 중 3가지 이상 조합으로 만들어주세요.");
            obj.set_color("darkgray");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.divPopup.form.divForm.addChild(obj.name, obj);

            obj = new Static("sta005","24","81","25","34",null,null,null,null,null,null,this.divPopup.form.divForm.form);
            obj.set_taborder("28");
            obj.set_text("*");
            obj.set_cssclass("essential");
            obj.set_tooltiptext("필수입력");
            this.divPopup.form.divForm.addChild(obj.name, obj);

            obj = new Static("sta006","24","116","25","34",null,null,null,null,null,null,this.divPopup.form.divForm.form);
            obj.set_taborder("29");
            obj.set_text("*");
            obj.set_cssclass("essential");
            obj.set_tooltiptext("필수입력");
            this.divPopup.form.divForm.addChild(obj.name, obj);

            obj = new Static("sta004","24","46","25","34",null,null,null,null,null,null,this.divPopup.form.divForm.form);
            obj.set_taborder("30");
            obj.set_text("*");
            obj.set_cssclass("essential");
            obj.set_tooltiptext("필수입력");
            this.divPopup.form.divForm.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_01_00","0",null,null,"23","0","0",null,null,null,null,this.divPopup.form);
            obj.set_taborder("5");
            obj.set_text("h 23");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divPopup.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_01_00_00","0",null,null,"25","0","51",null,null,null,null,this.divPopup.form);
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

            obj = new Button("btnPopupClose","452",null,"65","28",null,"23",null,null,null,null,this.divPopup.form);
            obj.set_text("닫기");
            obj.set_cssclass("");
            obj.set_visible("true");
            obj.set_taborder("7");
            this.divPopup.addChild(obj.name, obj);

            obj = new Button("btnSave","384",null,"65","28",null,"23",null,null,null,null,this.divPopup.form);
            obj.set_taborder("8");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_icoSave");
            this.divPopup.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divPopup.form.divForm.form
            obj = new Layout("default","",1032,72,this.divPopup.form.divForm.form,function(p){});
            this.divPopup.form.divForm.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divPopup.form
            obj = new Layout("default","",0,0,this.divPopup.form,function(p){});
            this.divPopup.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divPopup.form.divForm.form.edtNowPw","value","dsUserInfo","oldPasswd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divPopup.form.divForm.form.edtNewPw","value","dsUserInfo","passwd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divPopup.form.divForm.form.edtNewPw2","value","dsUserInfo","passwd2");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("CMS_1020P.xfdl","lib::common.xjs");
        this.registerScript("CMS_1020P.xfdl", function() {
        /**
        *  Popup Template
        *  MenuPath      -
        *  FileName      myMemberManagePopup.xfdl
        *  Creator 	     cheonsy
        *  CreateDate    2023.03.28
        *  Desction      비밀번호 변경
        ************** 소스 수정 이력 ***********************************************
        *  date          Modifier    Description
        *******************************************************************************
        *  2023.03.28    cheonsy 	 최초 생성
        *******************************************************************************/
        this.executeIncludeScript("lib::common.xjs"); /*include "lib::common.xjs"*/;
        /***********************************************************************************************
        * FORM EVENT 영역(onload, onbeforeclose)
        /***********************************************************************************************/
        /**
         * description 화면 onload
        */
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnLoad(this);
        	this.dsUserInfo.setColumn(0, "memberId", this.parent.memberId);
        	this.dsUserInfo.setColumn(0, "mbrNo", this.parent.mbrNo);
        };

        /************************************************************************************************
        * TRANSACTION 서비스 호출 처리
        ************************************************************************************************/
        /**
         * description 비밀번호 검증
        */
        this.fnConfirm = function(nPageNo)
        {
        	this.gfnTransaction("confirmPw", "cms/confirmPw.do", "dsUserInfo", "", "", "fnCallBack");
        };

        /**
         * description 저장
        */
        this.fnSave = function(nPageNo)
        {
        	this.gfnTransaction("updatePw", "cms/updatePw.do", "dsUserInfo", "", "", "fnCallBack");
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
        		case "confirmPw":
        			if(this.callbackMsg == "success"){
        				if (!this.fnPasswdValidation()) {// 비번 체크
        					return;
        				}
        				this.fnSave();
        			}else{
        				this.gfnAlert("현재 비밀번호가 일치하지 않습니다.");
        			}
        		break;
        		case "updatePw":
        			if(this.callbackMsg == "success"){
        				this.gfnAlert("비밀번호 변경이 완료되었습니다.");
        				this.close();
        			}else{
        				this.gfnAlert("비밀번호 변경이 실패했습니다.");
        			}
        		break;
        		default:
        		break;
        	}
        };

        /**
         * description Popup CallBack 함수
        */
        this.fnPopupAfter = function (sPopupId, vArg)
        {

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
        	if(this.gfnIsNull(this.dsUserInfo.getColumn(0, "oldPasswd"))) {
        		this.gfnAlert("현재 비밀번호를 입력해주세요.");
        		return false;
            }
        	if(this.gfnIsNull(this.dsUserInfo.getColumn(0, "passwd"))) {
        		this.gfnAlert("새 비밀번호를 입력해주세요.");
        		return false;
            }
        	if(this.gfnIsNull(this.dsUserInfo.getColumn(0, "passwd2"))) {
        		this.gfnAlert("새 비밀번호(확인)을 입력해주세요.");
        		return false;
            }
        	// 비밀번호 확인
        	this.fnConfirm();
        };
        /************************************************************************************************
        * 사용자 FUNCTION 영역
        ************************************************************************************************/
        /**
         * description 비밀번호 체크 숫자, 영어, 특수기호 체크
        */
        this.fnPasswdValidation = function ()
        {
        	var oldPasswd = this.dsUserInfo.getColumn(0, "oldPasswd");
        	var pass = this.dsUserInfo.getColumn(0, "passwd");
        	var pass2 = this.dsUserInfo.getColumn(0, "passwd2");
        	var passLength = pass.length;
        	// 비밀번호 값 체크
        	if(oldPasswd == pass){
        		this.gfnAlert("현재 비밀번호와 같은 비밀번호는 사용할 수 없습니다.");
        		return;
        	}
        	if(pass != pass2){
        		this.gfnAlert("비밀번호와 비밀번호 확인 값이 다릅니다.");
        		return;
        	}else{
        		//최소 8 자, 최대16재 최소 하나의 문자, 하나의 숫자 및 하나의 특수 문자
        		var rslt = false;
        		var sRegExp = "[a-zA-Z]";	// 영문
        		var sRegExp2 = "[0-9]";	// 숫자
        		var sRegExp3 = "[$@$!%*#?&]";	// 특수기호
        		var objRegExp = new RegExp(sRegExp, "i");	// i가 대소문자 허용
        		var objRegExp2 = new RegExp(sRegExp2, "i");
        		var objRegExp3 = new RegExp(sRegExp3, "i");
        		var objResult = objRegExp.exec(pass);
        		var objResult2 = objRegExp2.exec(pass);
        		var objResult3 = objRegExp3.exec(pass);

        		if (objResult != null){
        			if (objResult2 != null){
        				if (objResult3 != null){
        					// 길이 8 ~ 16 체크
        					passLength >= 8 ?  (passLength <= 16 ? rslt = true : rslt = false) : rslt = false;
        				}
        			}
        		}else{
        			rslt = false;
        		}
        		if(rslt == false){
        			this.gfnAlert("비밀번호는 8~16자리 영문 대소문자, 숫자,\n 특수문자 중 3가지 이상 조합으로 만들어주세요.");
        		}
        		return rslt;
        	}
        }


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divPopup.form.Static04_00_00_01.addEventHandler("onclick",this.Static31_onclick,this);
            this.divPopup.form.divForm.form.Static04_00_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.divPopup.form.divForm.form.Static07_01_01_00.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.divPopup.form.divForm.form.Static07_01_01_00_00.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.divPopup.form.divForm.form.Static07_00_01_00.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.divPopup.form.divForm.form.staSubTitle.addEventHandler("onclick",this.Static09_onclick,this);
            this.divPopup.form.divForm.form.Static07_00_00_00.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.divPopup.form.divForm.form.Static07_01_02_00.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.divPopup.form.divForm.form.Static04_00_00_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.divPopup.form.divForm.form.edtNowPw.addEventHandler("onkeyup",this.divPopup_divForm_edt_001_onkeyup,this);
            this.divPopup.form.divForm.form.edtNowPw.addEventHandler("onkillfocus",this.divPopup_divForm_edt_001_onkillfocus,this);
            this.divPopup.form.divForm.form.Static10_00_00_01_00.addEventHandler("onclick",this.div_Search_Static10_00_onclick,this);
            this.divPopup.form.divForm.form.edtNewPw.addEventHandler("onkeyup",this.divPopup_divForm_edt_001_onkeyup,this);
            this.divPopup.form.divForm.form.Static07_01_01_00_01.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.divPopup.form.divForm.form.Static07_01_01_00_00_00.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.divPopup.form.divForm.form.Static07_01_01_00_00_00_00.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.divPopup.form.divForm.form.Static07_01_01_00_01_00.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.divPopup.form.divForm.form.edtNewPw2.addEventHandler("onkeyup",this.divPopup_divForm_edt_001_onkeyup,this);
            this.divPopup.form.divForm.form.Static07_01_02_00_00_00.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.divPopup.form.divForm.form.Static07_01_02_00_00_00_00.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.divPopup.form.divForm.form.Static07_00_01_00_00.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.divPopup.form.divForm.form.Static07_00_01_00_00_00.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.divPopup.form.Static04_00_00_01_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.divPopup.form.Static04_00_00_01_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.divPopup.form.btnPopupClose.addEventHandler("onclick",this.divPopup_btnPopupClose_onclick,this);
            this.divPopup.form.btnSave.addEventHandler("onclick",this.divPopup_btnSave_onclick,this);
        };
        this.loadIncludeScript("CMS_1020P.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
