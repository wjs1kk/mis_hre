(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("USER_1010P");
            this.set_titletext("사용자 관리 등록 팝업");
            if (Form == this.constructor)
            {
                this._setFormPosition(600,472);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsUserManage", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"userId\" type=\"STRING\" size=\"20\"/><Column id=\"memberId\" type=\"STRING\" size=\"20\"/><Column id=\"userNmKr\" type=\"STRING\" size=\"300\"/><Column id=\"userNmEn\" type=\"STRING\" size=\"300\"/><Column id=\"passwd\" type=\"STRING\" size=\"72\"/><Column id=\"emailAddr\" type=\"STRING\" size=\"320\"/><Column id=\"telNo\" type=\"STRING\" size=\"20\"/><Column id=\"phoneNo\" type=\"STRING\" size=\"20\"/><Column id=\"useYn\" type=\"STRING\" size=\"1\"/><Column id=\"rgstId\" type=\"STRING\" size=\"20\"/><Column id=\"rgstIp\" type=\"STRING\" size=\"40\"/><Column id=\"rgstDt\" type=\"STRING\" size=\"256\"/><Column id=\"updtId\" type=\"STRING\" size=\"20\"/><Column id=\"updtIp\" type=\"STRING\" size=\"40\"/><Column id=\"updtDt\" type=\"STRING\" size=\"256\"/><Column id=\"deptCd\" type=\"STRING\" size=\"20\"/><Column id=\"jobPosition\" type=\"STRING\" size=\"300\"/><Column id=\"passwdCheck\" type=\"STRING\" size=\"72\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"rowStatus\" type=\"STRING\" size=\"256\"/><Column id=\"origPasswd\" type=\"STRING\" size=\"100\"/><Column id=\"joinAprvStts\" type=\"STRING\" size=\"256\"/><Column id=\"joinAprvSttsNm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUseYn", this);
            obj._setContents("<ColumnInfo><Column id=\"value\" type=\"STRING\" size=\"256\"/><Column id=\"text\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divPopup","0","0","600","472",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Static("staPopupTitle","0","0",null,"50","0",null,null,null,null,null,this.divPopup.form);
            obj.set_taborder("0");
            obj.set_text("사용자 등록");
            obj.set_cssclass("sta_WF_popupTitle");
            this.divPopup.addChild(obj.name, obj);

            obj = new Static("Static10","0","50","30","379",null,null,null,null,null,null,this.divPopup.form);
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

            obj = new Static("Static10_00",null,"50","30","379","0",null,null,null,null,null,this.divPopup.form);
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

            obj = new Div("divForm","30","70",null,"325","30",null,null,null,null,null,this.divPopup.form);
            obj.set_taborder("4");
            obj.set_cssclass("div_WF_popup");
            obj.set_text("");
            this.divPopup.addChild(obj.name, obj);

            obj = new Static("sta017","20","243",null,"34","20",null,null,null,null,null,this.divPopup.form.divForm.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_condition02box");
            this.divPopup.form.divForm.addChild(obj.name, obj);

            obj = new Static("staRowUseYn","20","276",null,"34","20",null,null,null,null,null,this.divPopup.form.divForm.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_condition02box");
            obj.set_visible("false");
            this.divPopup.form.divForm.addChild(obj.name, obj);

            obj = new Static("sta016","20","210",null,"34","20",null,null,null,null,null,this.divPopup.form.divForm.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_condition02box");
            this.divPopup.form.divForm.addChild(obj.name, obj);

            obj = new Static("sta013","20","144",null,"34","20",null,null,null,null,null,this.divPopup.form.divForm.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_condition02box");
            this.divPopup.form.divForm.addChild(obj.name, obj);

            obj = new Static("sta014","20","177",null,"34","20",null,null,null,null,null,this.divPopup.form.divForm.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_condition02box");
            this.divPopup.form.divForm.addChild(obj.name, obj);

            obj = new Static("sta010","20","45",null,"34","20",null,null,null,null,null,this.divPopup.form.divForm.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_condition02box");
            this.divPopup.form.divForm.addChild(obj.name, obj);

            obj = new Static("sta011","20","78",null,"34","20",null,null,null,null,null,this.divPopup.form.divForm.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_condition02box");
            this.divPopup.form.divForm.addChild(obj.name, obj);

            obj = new Static("sta012","20","111",null,"34","20",null,null,null,null,null,this.divPopup.form.divForm.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_condition02box");
            this.divPopup.form.divForm.addChild(obj.name, obj);

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
            obj.set_taborder("9");
            obj.set_text("h 45");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divPopup.form.divForm.addChild(obj.name, obj);

            obj = new Static("staSubTitle","20","0","169","45",null,null,null,null,null,null,this.divPopup.form.divForm.form);
            obj.set_taborder("10");
            obj.set_text("사용자 정보");
            obj.set_cssclass("sta_WF_subTitle01");
            this.divPopup.form.divForm.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_00_00","20","309","60","15",null,null,null,null,null,null,this.divPopup.form.divForm.form);
            obj.set_taborder("13");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divPopup.form.divForm.addChild(obj.name, obj);

            obj = new Edit("edtUserNmKr","180","82","327","26",null,null,null,null,null,null,this.divPopup.form.divForm.form);
            obj.set_taborder("2");
            obj.set_maxlength("100");
            obj.set_cssclass("essential");
            this.divPopup.form.divForm.addChild(obj.name, obj);

            obj = new Edit("edtPasswd","180","115","327","26",null,null,null,null,null,null,this.divPopup.form.divForm.form);
            obj.set_taborder("3");
            obj.set_maxlength("100");
            obj.set_cssclass("essential");
            obj.set_password("true");
            this.divPopup.form.divForm.addChild(obj.name, obj);

            obj = new Edit("edtPasswdCheck","180","148","327","26",null,null,null,null,null,null,this.divPopup.form.divForm.form);
            obj.set_taborder("4");
            obj.set_maxlength("100");
            obj.set_cssclass("essential");
            obj.set_password("true");
            this.divPopup.form.divForm.addChild(obj.name, obj);

            obj = new Edit("edtMblTelno","180","181","327","26",null,null,null,null,null,null,this.divPopup.form.divForm.form);
            obj.set_taborder("5");
            obj.set_maxlength("100");
            obj.set_inputtype("digit");
            this.divPopup.form.divForm.addChild(obj.name, obj);

            obj = new Edit("edtEmlAddr","180","214","327","26",null,null,null,null,null,null,this.divPopup.form.divForm.form);
            obj.set_taborder("6");
            obj.set_maxlength("100");
            obj.set_readonly("true");
            this.divPopup.form.divForm.addChild(obj.name, obj);

            obj = new Edit("edtJbps","180","247","327","26",null,null,null,null,null,null,this.divPopup.form.divForm.form);
            obj.set_taborder("7");
            obj.set_maxlength("100");
            this.divPopup.form.divForm.addChild(obj.name, obj);

            obj = new Static("staUseYn","20","276","150","34",null,null,null,null,null,null,this.divPopup.form.divForm.form);
            obj.set_taborder("18");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_condition02_L");
            obj.set_visible("false");
            this.divPopup.form.divForm.addChild(obj.name, obj);

            obj = new Combo("cboUseYn","180","280","327","26",null,null,null,null,null,null,this.divPopup.form.divForm.form);
            obj.set_taborder("8");
            obj.set_innerdataset("dsUseYn");
            obj.set_codecolumn("value");
            obj.set_datacolumn("text");
            obj.set_visible("false");
            this.divPopup.form.divForm.addChild(obj.name, obj);

            obj = new Edit("edtMemberId","180","49","327","26",null,null,null,null,null,null,this.divPopup.form.divForm.form);
            obj.set_taborder("1");
            obj.set_maxlength("100");
            obj.set_cssclass("essential");
            this.divPopup.form.divForm.addChild(obj.name, obj);

            obj = new Static("sta008","20","243","150","34",null,null,null,null,null,null,this.divPopup.form.divForm.form);
            obj.set_taborder("16");
            obj.set_text("직위");
            obj.set_cssclass("sta_WF_condition02_L");
            this.divPopup.form.divForm.addChild(obj.name, obj);

            obj = new Static("sta007","20","210","150","34",null,null,null,null,null,null,this.divPopup.form.divForm.form);
            obj.set_taborder("15");
            obj.set_text("E-mail");
            obj.set_cssclass("sta_WF_condition02_L");
            this.divPopup.form.divForm.addChild(obj.name, obj);

            obj = new Static("sta005","20","177","150","34",null,null,null,null,null,null,this.divPopup.form.divForm.form);
            obj.set_taborder("14");
            obj.set_text("연락처");
            obj.set_cssclass("sta_WF_condition02_L");
            this.divPopup.form.divForm.addChild(obj.name, obj);

            obj = new Static("staPasswdCheck","20","144","150","34",null,null,null,null,null,null,this.divPopup.form.divForm.form);
            obj.set_taborder("11");
            obj.set_text("비밀번호확인");
            obj.set_cssclass("sta_WF_condition02_LEssential");
            this.divPopup.form.divForm.addChild(obj.name, obj);

            obj = new Static("staPasswd","20","111","150","34",null,null,null,null,null,null,this.divPopup.form.divForm.form);
            obj.set_taborder("12");
            obj.set_text("비밀번호");
            obj.set_cssclass("sta_WF_condition02_LEssential");
            this.divPopup.form.divForm.addChild(obj.name, obj);

            obj = new Static("sta002","20","78","150","34",null,null,null,null,null,null,this.divPopup.form.divForm.form);
            obj.set_taborder("17");
            obj.set_text("이름");
            obj.set_cssclass("sta_WF_condition02_LEssential");
            this.divPopup.form.divForm.addChild(obj.name, obj);

            obj = new Static("sta001","20","45","150","34",null,null,null,null,null,null,this.divPopup.form.divForm.form);
            obj.set_taborder("19");
            obj.set_text("회원ID");
            obj.set_cssclass("sta_WF_condition02_LEssential");
            this.divPopup.form.divForm.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_01_00","260","449","103","23",null,null,null,null,null,null,this.divPopup.form);
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

            obj = new Static("Static04_00_00_01_00_00","261","395","103","25",null,null,null,null,null,null,this.divPopup.form);
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

            obj = new Button("btnPopupClose",null,"420","65","28","226",null,null,null,null,null,this.divPopup.form);
            obj.set_text("닫기");
            obj.set_cssclass("");
            obj.set_visible("true");
            obj.set_taborder("11");
            this.divPopup.addChild(obj.name, obj);

            obj = new Button("btnPopupSave","242","420","65","28",null,null,null,null,null,null,this.divPopup.form);
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_icoSave");
            obj.set_taborder("8");
            this.divPopup.addChild(obj.name, obj);

            obj = new Static("sta_g001","308","415",null,"34","289",null,null,null,null,null,this.divPopup.form);
            obj.set_taborder("7");
            obj.set_text("w12");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divPopup.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divPopup.form.divForm.form
            obj = new Layout("default","",0,0,this.divPopup.form.divForm.form,function(p){});
            this.divPopup.form.divForm.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divPopup.form
            obj = new Layout("default","",0,0,this.divPopup.form,function(p){});
            this.divPopup.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","divPopup.form.divForm.form.edtUserNmKr","value","dsUserManage","userNmKr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divPopup.form.divForm.form.edtMblTelno","value","dsUserManage","phoneNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divPopup.form.divForm.form.edtOfcTelno","value","dsUserManage","telNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divPopup.form.divForm.form.edtEmlAddr","value","dsUserManage","emailAddr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divPopup.form.divForm.form.edtJbps","value","dsUserManage","jobPosition");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divPopup.form.divForm.form.cboUseYn","value","dsUserManage","useYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divPopup.form.divForm.form.edtPasswdCheck","value","dsUserManage","passwdCheck");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divPopup.form.divForm.form.edtPasswd","value","dsUserManage","passwd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divPopup.form.divForm.form.edtMemberId","value","dsUserManage","memberId");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("USER_1010P.xfdl","lib::common.xjs");
        this.registerScript("USER_1010P.xfdl", function() {
        /**
        *  사용자관리 팝업
        *  MenuPath      시스템 관리 - 기준정보 관리 - 사용자관리 팝업
        *  FileName      userManagePopup.xfdl
        *  Creator 	     moonsj
        *  CreateDate    2023.02.27
        *  Desction      사용자관리 신규 팝업
        ************** 소스 수정 이력 ***********************************************
        *  date          Modifier    Description
        *******************************************************************************
        *  2023.02.27    moonsj 	 최초 생성
        *******************************************************************************/
        this.executeIncludeScript("lib::common.xjs"); /*include "lib::common.xjs"*/;
        var min = 5;
        var max = 19;
        var isNewData = false;
        /***********************************************************************************************
        * FORM EVENT 영역(onload, onbeforeclose)
        /***********************************************************************************************/
        /**
         * description 화면 onload
        */
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnLoad(this);

        	if (Eco.isEmpty(this.parent.userId)) {  //신규화면
        		this.dsUserManage.setColumn(0, "rowStatus", "inserted");
        		this.dsUserManage.setColumn(0, "passwd", "");
                this.dsUserManage.setColumn(0, "useYn", "Y");
        		this.divPopup.form.divForm.form.edtMemberId.set_enable(true);
        		this.isNewData = true;
        	} else {                // 수정화면
        		this.dsUserManage.setColumn(0, "userId", this.parent.userId);
        		this.fnSearch();
        	}
        	this.gfnLoadCombo("loadCombo", "dsUseYn=SM:USE_YN:C", "fnCallback");
        };

        /************************************************************************************************
        * TRANSACTION 서비스 호출 처리
        ************************************************************************************************/
        /**
         * description 조회
        */
        this.fnSearch = function()
        {
        	var strSvcId    = "getUserManageList";
        	var strSvcUrl   = "sm/getUserManageItem.do";
        	var inData      = "dsUserManage";
        	var outData     = "dsUserManage";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync); 		// 비동기통신 여부 [생략가능]
        };

        /**
         * description 저장
        */
        this.fnSave = function()
        {
        	var strSvcId    = "setUserManageList";
        	var strSvcUrl   = "sm/setUserManageItem.do";
        	var inData      = "dsUserManage";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync); 		// 비동기통신 여부 [생략가능]
        };

        /**
         * description 수정
        */
        this.fnUpdate = function(obj,e)
        {
            if (this.dsUserManage.rowcount == 0) {
        		this.gfnAlert("CM_MSG_SAVE_NODATA");  // 저장할 데이터가 없습니다.
        		return;
        	}
        	// 변경사항 체크
        	if (!this.gfnDsIsUpdated(this.dsUserManage)) {
        		this.gfnAlert("CM_MSG_SAVE_NOCHANGE");  // 변경된 내역이 없습니다.
        		return;
        	}
        	// msgId, args(치환), popupId, Confirm Callback Function({확인 trueFunc, 취소: falseFunc})
        	// confirm 이후 스크립트가 실행되기때문에 return; 처리 or 가장 마지막 위치
        	this.gfnAlert("CM_CFM_BEFORE_SAVE", "", "", {trueFunc: "fnUpdate", falseFunc: ""});  // 변경된 내역을 저장 하시겠습니까?
        	return;
        };

        /************************************************************************************************
         * CALLBACK 콜백 처리부분(Transaction, Popup)
         ************************************************************************************************/

        /**
         * description Transaction CallBack 함수
        */
        this.fnCallback = function (sSvcId, nErrorCode, sErrorMsg)
        {
        	switch (sSvcId) {
        		case "getUserManageList":
                    if (this.dsUserManage.rowcount > 0) {
                        this.isNewData = false;
                        this.divPopup.form.divForm.form.staUseYn.set_visible(true);
                        this.divPopup.form.divForm.form.cboUseYn.set_visible(true);
                        this.divPopup.form.divForm.form.staRowUseYn.set_visible(true);

                        this.divPopup.form.divForm.form.edtMemberId.set_enable(false);
                        this.divPopup.form.divForm.form.staPasswd.set_cssclass("sta_WF_condition02_L");
                        this.divPopup.form.divForm.form.staPasswdCheck.set_cssclass("sta_WF_condition02_L");
                        this.divPopup.form.divForm.form.edtPasswd.set_cssclass("");
                        this.divPopup.form.divForm.form.edtPasswdCheck.set_cssclass("");

                        this.dsUserManage.setColumn(0, "rowStatus", "updated");
                    }
                    break;
        		case "setUserManageList":
        			if (this.callbackMsg == "success") {
        				this.gfnAlert("CM_MSG_SAVE_SUCCESS");  // 저장 되었습니다.

                        var oRtn = {
                            result: "Y"
                        }

        				this.gfnPopupClose(oRtn);
        			} else if (this.callbackMsg == "memberIdExists") {
                        this.gfnAlert("회원 ID가 중복되었습니다.");
                    } else {
        				console.log(sSvcId, nErrorCode, sErrorMsg);
        			}
        			break;
        		case "loadCombo":

        			break;
        		default:
        			break;
        	}
        };

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/

        /**
         * description 저장
         */
        this.divPopup_btnPopupSave_onclick = function(obj,e)
        {
            if (this.isNewData == true ) {
                this.dsUserManage.setColumn(0,"rowStatus","inserted");

            } else {
                this.dsUserManage.setColumn(0,"rowStatus","updated");
            }

            if (!this.fnValidate()) {
                return;
            }

            this.gfnAlert("CM_CFM_BEFORE_SAVE", "", "", {trueFunc: "fnSave", falseFunc: ""});  // 변경된 내역을 저장 하시겠습니까?
        };

        /**
         * description close
        */
        this.divPopup_btnPopupClose_onclick = function(obj,e)
        {
        	this.close();
        };

        this.divPopup_divForm_edtMblTelno_oninput = function(obj,e)
        {
            var value = obj.value;
            var formatted = this.fnFormatTelno(obj.value);
            obj.set_value(formatted);
            console.log({ oldValue: value, formatted, newValue: obj.value });
        };

        /************************************************************************************************
        * 사용자 FUNCTION 영역
        ************************************************************************************************/

        this.fnValidate = function ()
        {
            this.divPopup.form.divForm.form.edtPasswd.updateToDataset();

            var memberId = this.dsUserManage.getColumn(0, "memberId");
            var passwd = this.dsUserManage.getColumn(0, "passwd");
            var passwdCheck = this.dsUserManage.getColumn(0, "passwdCheck");
            var emailAddr = this.dsUserManage.getColumn(0, "emailAddr");
            var phoneNo = this.dsUserManage.getColumn(0, "phoneNo");

            var args = [
                ["memberId", "NULL|MAX_LEN:20|MIN_LEN:4", "회원 ID"],
                ["userNmKr", "NULL|MAX_LEN:20", "회원 ID"],
                ["emailAddr", "MAX_LEN:254", "이메일"]     // SMTP 메시지 제약으로 최대 길이는 254
            ];

            if (this.dsUserManage.getColumn(0, "rowStatus") == "inserted") {
                args.push(["passwd", "NULL|MAX_LEN:72|MIN_LEN:8", "비밀번호"]);
                args.push(["passwdCheck", "NULL|MAX_LEN:72|MIN_LEN:8", "비밀번호 확인"]);
            } else if (this.dsUserManage.getColumn(0, "rowStatus") == "updated"
                    && !Eco.isEmpty(passwd)) {
                args.push(["passwd", "MAX_LEN:72|MIN_LEN:8", "비밀번호 확인"]);
                args.push(["passwdCheck", "NULL|MAX_LEN:72|MIN_LEN:8", "비밀번호 확인"]);
            }

            if (!this.gfnCheckGrid(this.dsUserManage, args, 0)) {
                return false;
            }

            if (!/^[\da-z]+$/.test(memberId)) {
                this.gfnAlert("사용할 수 없는 ID입니다.");
                return false;
            }

            if (!Eco.isEmpty(passwd)) {
                if (!this.fnCheckPassword(passwd)) {
                    return false;
                }

                if (passwd != passwdCheck) {
                    this.gfnAlert("비밀번호 확인에 입력한 비밀번호가 일치하지 않습니다.");
                    return false;
                }
            }

            if (!Eco.isEmpty(emailAddr) && !this.fnCheckEmail(emailAddr)) {
                this.gfnAlert("이메일 주소의 형식이 올바르지 않습니다.");
                return false;
            }

            if (!Eco.isEmpty(phoneNo)) {
                phoneNo = phoneNo.replace(/-/g, "");
                if (!/^(0(?:2|1\d|[3-9]\d))(\d{3,4})(\d{4})$/.test(phoneNo)) {
                    this.gfnAlert("휴대전화 번호가 올바르지 않습니다.");
                    return false;
                }
            }

            return true;
        };

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

        this.fnCheckEmail = function (email)
        {
            // from RFC 5322 section 3.4.2:
            // addr-spec      = local-part "@" domain
            // local-part     = dot-atom / quoated-string / obs-local-part
            // domain         = dot-atom / domain-liteeral / obs-domain
            // domain-literal = [CFWS] "[" *([FWS] dtext) [FWS] "]" [CFWS]

            // RFC 2821의 SMTP 메시지 제약으로 인해 주소가 254자를 넘을 수 없다.
            if (Eco.isEmpty(email) || email.length > 254) {
                return false;
            }

            // Local part의 quoted-string과 comment, 도메인 자리의 IP 주소, 각 파트의 코멘트는 배제
            // Local part에 사용 가능한 문자: 영문자, 숫자, !#$%&'*+-/=?^_`{|}~, .
    // 도메인의 각 파트는 .으로 구분되고, 영문자, 숫자(최상위 레벨 제외), - 사용 가능
            // Local part의 최대 길이: 64바이트, 도메인 각 파트의 최대 길이: 63바이트
            var regex = /^([\da-zA-Z!#$%&'*+\-\/=?^_`{|}~]{1,64})@((?:[a-zA-Z\d\-]{1,63}\.)*[a-zA-Z\-]{1,63})$/;
    var matches = regex.exec(email);

            // 파트별 사용 가능한 문자의 예외 경우를 고려하지 않았을 때도 형식에 맞지 않으면 false
            if (matches == null) {
                return false;
            }

            var localPart = matches[1];
            var domain = matches[2];

            // Local part에 '.'이 맨 앞/뒤에 있거나 연속으로 나올 수 없음
            if (localPart[0] == "." || localPart[localPart.length - 1] == "." || /\.\./.test(localPart)) {
                return false;
            }

            // 도메인 각 파트의 시작과 끝은 '-'일 수 없음
            var domainParts = domain.split(".");
            return !domainParts.some(part => part[0] == "-" || part[part.length] == "-");
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
            this.addEventHandler("onload",this.form_onload,this);
            this.divPopup.form.staPopupTitle.addEventHandler("onclick",this.divPopup_staPopupTitle_onclick,this);
            this.divPopup.form.Static04_00_00_01.addEventHandler("onclick",this.Static31_onclick,this);
            this.divPopup.form.divForm.form.Static04_00_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.divPopup.form.divForm.form.staSubTitle.addEventHandler("onclick",this.Static09_onclick,this);
            this.divPopup.form.divForm.form.Static04_00_00_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.divPopup.form.divForm.form.edtMblTelno.addEventHandler("oninput",this.divPopup_divForm_edtMblTelno_oninput,this);
            this.divPopup.form.divForm.form.staPasswd.addEventHandler("onclick",this.divPopup_divForm_Static23_onclick,this);
            this.divPopup.form.divForm.form.sta001.addEventHandler("onclick",this.divPopup_divForm_sta_001_01_onclick,this);
            this.divPopup.form.Static04_00_00_01_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.divPopup.form.Static04_00_00_01_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.divPopup.form.btnPopupClose.addEventHandler("onclick",this.divPopup_btnPopupClose_onclick,this);
            this.divPopup.form.btnPopupSave.addEventHandler("onclick",this.divPopup_btnPopupSave_onclick,this);
            this.divPopup.form.sta_g001.addEventHandler("onclick",this.divPopup_sta_g001_onclick,this);
        };
        this.loadIncludeScript("USER_1010P.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
