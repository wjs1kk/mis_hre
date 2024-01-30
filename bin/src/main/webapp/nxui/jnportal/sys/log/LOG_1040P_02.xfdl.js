(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("LOG_1040P_02");
            this.set_titletext("사용자 조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(900,500);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj.set_updatecontrol("true");
            obj._setContents("<ColumnInfo><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"userNm\" type=\"STRING\" size=\"256\"/><Column id=\"searchUserId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUser", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"rowCheck\" type=\"STRING\" size=\"256\"/><Column id=\"rgstId\" type=\"STRING\" size=\"256\"/><Column id=\"rgstDt\" type=\"STRING\" size=\"256\"/><Column id=\"rgstIp\" type=\"STRING\" size=\"256\"/><Column id=\"rgstNm\" type=\"STRING\" size=\"256\"/><Column id=\"updtId\" type=\"STRING\" size=\"256\"/><Column id=\"updtIp\" type=\"STRING\" size=\"256\"/><Column id=\"updtDt\" type=\"STRING\" size=\"256\"/><Column id=\"updtNm\" type=\"STRING\" size=\"256\"/><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"userNm\" type=\"STRING\" size=\"256\"/><Column id=\"deptCode\" type=\"STRING\" size=\"256\"/><Column id=\"deptNm\" type=\"STRING\" size=\"256\"/><Column id=\"jobPosition\" type=\"STRING\" size=\"256\"/><Column id=\"updtReason\" type=\"STRING\" size=\"256\"/><Column id=\"roleNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divPopup","0","0","900","500",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staPopupTitle","0","0",null,"50","0",null,null,null,null,null,this.divPopup.form);
            obj.set_taborder("0");
            obj.set_text("사용자 조회");
            obj.set_cssclass("sta_WF_popupTitle");
            this.divPopup.addChild(obj.name, obj);

            obj = new Static("Static10","0","50","30","586",null,null,null,null,null,null,this.divPopup.form);
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

            obj = new Static("Static10_00",null,"50","30","586","0",null,null,null,null,null,this.divPopup.form);
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

            obj = new Div("divSearch","30","70",null,"94","30",null,null,null,null,null,this.divPopup.form);
            obj.set_taborder("4");
            obj.set_cssclass("div_WF_popup");
            obj.set_text("");
            this.divPopup.addChild(obj.name, obj);

            obj = new Static("Static10","0","-1","19","132",null,null,null,null,null,null,this.divPopup.form.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("w20");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divPopup.form.divSearch.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_00","110","0","60","45",null,null,null,null,null,null,this.divPopup.form.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("h 45");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divPopup.form.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_01_01_00","21","80",null,"1","21",null,null,null,null,null,this.divPopup.form.divSearch.form);
            obj.set_taborder("2");
            obj.set_background("#dddddd");
            obj.set_text("");
            this.divPopup.form.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_01_01_00_00","21","45",null,"1","21",null,null,null,null,null,this.divPopup.form.divSearch.form);
            obj.set_taborder("3");
            obj.set_background("#dddddd");
            obj.set_text("");
            this.divPopup.form.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_01_00",null,"45","1","34","20",null,null,null,null,null,this.divPopup.form.divSearch.form);
            obj.set_taborder("4");
            obj.set_background("#dddddd");
            this.divPopup.form.divSearch.addChild(obj.name, obj);

            obj = new Static("staSubTitle","19","11","169","27",null,null,null,null,null,null,this.divPopup.form.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_subTitle01");
            this.divPopup.form.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00","20","46","1","34",null,null,null,null,null,null,this.divPopup.form.divSearch.form);
            obj.set_taborder("5");
            obj.set_background("#00388e");
            obj.set_text("");
            this.divPopup.form.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_01_02_00","121","45","1","34",null,null,null,null,null,null,this.divPopup.form.divSearch.form);
            obj.set_taborder("6");
            obj.set_background("#dddddd");
            this.divPopup.form.divSearch.addChild(obj.name, obj);

            obj = new Static("sta002","285","46","100","34",null,null,null,null,null,null,this.divPopup.form.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("사용자명");
            obj.set_cssclass("sta_WF_condition02");
            this.divPopup.form.divSearch.addChild(obj.name, obj);

            obj = new Static("sta001","21","46","100","34",null,null,null,null,null,null,this.divPopup.form.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("사용자 ID");
            obj.set_cssclass("sta_WF_condition02");
            this.divPopup.form.divSearch.addChild(obj.name, obj);

            obj = new Static("Static10_00","122","46","12","34",null,null,null,null,null,null,this.divPopup.form.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("w12");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divPopup.form.divSearch.addChild(obj.name, obj);

            obj = new Static("Static10_00_00_00","386","46","12","34",null,null,null,null,null,null,this.divPopup.form.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("w12");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divPopup.form.divSearch.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_00_00","110","81","60","15",null,null,null,null,null,null,this.divPopup.form.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divPopup.form.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtMemberId","134","50","120","26",null,null,null,null,null,null,this.divPopup.form.divSearch.form);
            obj.set_taborder("13");
            obj.set_maxlength("100");
            this.divPopup.form.divSearch.addChild(obj.name, obj);

            obj = new Static("Static10_00_01_00",null,"110","12",null,"21","20",null,null,null,null,this.divPopup.form.divSearch.form);
            obj.set_taborder("14");
            obj.set_text("w12");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divPopup.form.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtMemberNm","398","50","120","26",null,null,null,null,null,null,this.divPopup.form.divSearch.form);
            obj.set_taborder("15");
            obj.set_maxlength("100");
            this.divPopup.form.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00_00","284","46","1","34",null,null,null,null,null,null,this.divPopup.form.divSearch.form);
            obj.set_taborder("16");
            obj.set_background("#00388e");
            obj.set_text("");
            this.divPopup.form.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_01_02_00_00","385","45","1","34",null,null,null,null,null,null,this.divPopup.form.divSearch.form);
            obj.set_taborder("17");
            obj.set_background("#dddddd");
            this.divPopup.form.divSearch.addChild(obj.name, obj);

            obj = new Static("Static10_00_00","254","0","30",null,null,"0",null,null,null,null,this.divPopup.form.divSearch.form);
            obj.set_taborder("18");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divPopup.form.divSearch.addChild(obj.name, obj);

            obj = new Static("Static10_00_00_01","518","0","30",null,null,"0",null,null,null,null,this.divPopup.form.divSearch.form);
            obj.set_taborder("19");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divPopup.form.divSearch.addChild(obj.name, obj);

            obj = new Static("Static10_00_00_01_00","818","8","20","84",null,null,null,null,null,null,this.divPopup.form.divSearch.form);
            obj.set_taborder("20");
            obj.set_text("w20");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divPopup.form.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"9","65","28","20",null,null,null,null,null,this.divPopup.form.divSearch.form);
            obj.set_text("조회");
            obj.set_cssclass("");
            obj.set_taborder("21");
            this.divPopup.form.divSearch.addChild(obj.name, obj);

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

            obj = new Button("btnPopupClose",null,null,"65","28","383","23",null,null,null,null,this.divPopup.form);
            obj.set_text("닫기");
            obj.set_cssclass("");
            obj.set_visible("true");
            obj.set_taborder("7");
            this.divPopup.addChild(obj.name, obj);

            obj = new Static("sta_g001","449","443","3","34",null,null,null,null,null,null,this.divPopup.form);
            obj.set_taborder("8");
            obj.set_text("w12");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divPopup.addChild(obj.name, obj);

            obj = new Static("Static04_00_00","30","164","60","18",null,null,null,null,null,null,this.divPopup.form);
            obj.set_taborder("9");
            obj.set_text("h 18");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divPopup.addChild(obj.name, obj);

            obj = new Static("staGridRowCnt","120","176","149","27",null,null,null,null,null,null,this.divPopup.form);
            obj.set_taborder("10");
            obj.set_text("(총 0건)");
            obj.set_cssclass("sta_WF_subResult");
            this.divPopup.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_00","120","164","60","45",null,null,null,null,null,null,this.divPopup.form);
            obj.set_taborder("11");
            obj.set_text("h 45");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divPopup.addChild(obj.name, obj);

            obj = new Static("staTitle","30","175","169","27",null,null,null,null,null,null,this.divPopup.form);
            obj.set_taborder("12");
            obj.set_text("검색결과");
            obj.set_cssclass("sta_WF_subTitle01");
            this.divPopup.addChild(obj.name, obj);

            obj = new Grid("grdMember","30","209",null,null,"30","76",null,null,null,null,this.divPopup.form);
            obj.set_taborder("13");
            obj.set_binddataset("dsUser");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_autoupdatetype("itemselect");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\" band=\"left\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"80\"/></Columns><Rows><Row size=\"46\" band=\"head\"/><Row size=\"33\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"사용자 ID\"/><Cell col=\"2\" text=\"사용자명\"/><Cell col=\"3\" text=\"부서명\"/><Cell col=\"4\" text=\"직급\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" textAlign=\"center\" text=\"bind:rowCheck\"/><Cell col=\"1\" text=\"bind:userId\" edittype=\"none\"/><Cell col=\"2\" text=\"bind:userNm\" edittype=\"none\"/><Cell col=\"3\" text=\"bind:deptNm\"/><Cell col=\"4\" text=\"bind:jobPosition\"/></Band></Format></Formats>");
            this.divPopup.addChild(obj.name, obj);

            obj = new Button("btnAdd","384","449","65","28",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_icoAdd");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divPopup.form.divSearch.form
            obj = new Layout("default","",1032,72,this.divPopup.form.divSearch.form,function(p){});
            this.divPopup.form.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divPopup.form
            obj = new Layout("default","",0,0,this.divPopup.form,function(p){});
            this.divPopup.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divPopup.form.divSearch.form.edtMemberId","value","dsSearch","searchUserId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divPopup.form.divSearch.form.edtMemberNm","value","dsSearch","userNm");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("LOG_1040P_02.xfdl","lib::common.xjs");
        this.registerScript("LOG_1040P_02.xfdl", function() {
        /**
        *  Popup Template
        *  MenuPath      -
        *  FileName      statisticsUserPopup.xfdl
        *  Creator 	     cheonsy
        *  CreateDate    2023.03.15
        *  Desction      사용자 조회
        ************** 소스 수정 이력 ***********************************************
        *  date          Modifier    Description
        *******************************************************************************
        *  2023.03.15    cheonsy 	 최초 생성
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
        	this.fnUserSearch();
        };

        /************************************************************************************************
        * TRANSACTION 서비스 호출 처리
        ************************************************************************************************/
        /**
         * description 조회
        */
        this.fnUserSearch = function()
        {
        	this.gfnTransaction("getUserList", "cms/getUserList.do", "dsSearch", "dsUser", "", "fnCallBack");
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
        		case "getUserList":
        			// 총 건수 계산
        			this.gfnRowCount(this.dsUser, this.divPopup.form.staGridRowCnt);
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
         * description 조회 버튼
        */
        this.divPopup_divSearch_btnSearch_onclick = function(obj,e)
        {
        	this.dsSearch.setColumn(0, "userId", this.dsSearch.getColumn(0, "searchUserId"));
        	this.fnUserSearch();
        };

        /**
         * description 추가버튼
        */
        this.btnAdd_onclick = function(obj,e)
        {
        	if(!this.gfnIsGridChecked(this.dsUser, "rowCheck")){
        		this.gfnAlert("사용자를 체크해주세요");
        		return;
        	}

        	this.opener.dsSearch.setColumn(0, "userId", this.dsUser.getColumn(this.dsUser.findRow("rowCheck", 1), "userId"));
        	this.opener.dsSearch.setColumn(0, "userNm", this.dsUser.getColumn(this.dsUser.findRow("rowCheck", 1), "userNm"));

        	// pat 3. 임의의 Object Return / dataset 하나의 row는 gfnGetRowObj 이용
        	var oRtn = new Object();
        	oRtn.CONFIRM = "Y";
        	this.gfnPopupClose(oRtn);
        	this.close();
        };

        /**
         * description 행 더블클릭 이벤트
        */
        this.divPopup_grdUser_oncelldblclick = function(obj,e)
        {
        	this.opener.dsSearch.setColumn(0, "userId", this.dsUser.getColumn(this.dsUser.rowposition, "userId"));
        	this.opener.dsSearch.setColumn(0, "userNm", this.dsUser.getColumn(this.dsUser.rowposition, "userNm"));
        	this.close();
        };

        /**
         * description 엔터키 조회
        */
        this.divPopup_divForm_edt_001_onkeyup = function(obj,e)
        {
        	if(e.keycode==13){
        		this.divPopup_divSearch_btnSearch_onclick();
        	}
        };

        /**
         * description 닫기버튼
        */
        this.divPopup_btnPopupClose_onclick = function(obj,e)
        {
        	this.close();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divPopup.form.Static04_00_00_01.addEventHandler("onclick",this.Static31_onclick,this);
            this.divPopup.form.divSearch.form.Static04_00_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.divPopup.form.divSearch.form.Static07_01_01_00.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.divPopup.form.divSearch.form.Static07_01_01_00_00.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.divPopup.form.divSearch.form.Static07_00_01_00.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.divPopup.form.divSearch.form.staSubTitle.addEventHandler("onclick",this.Static09_onclick,this);
            this.divPopup.form.divSearch.form.Static07_00_00_00.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.divPopup.form.divSearch.form.Static07_01_02_00.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.divPopup.form.divSearch.form.sta002.addEventHandler("onclick",this.div_Search02_00_in_YY_onclick,this);
            this.divPopup.form.divSearch.form.Static04_00_00_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.divPopup.form.divSearch.form.edtMemberId.addEventHandler("onkeyup",this.divPopup_divForm_edt_001_onkeyup,this);
            this.divPopup.form.divSearch.form.edtMemberNm.addEventHandler("onkeyup",this.divPopup_divForm_edt_001_onkeyup,this);
            this.divPopup.form.divSearch.form.Static07_00_00_00_00.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.divPopup.form.divSearch.form.Static07_01_02_00_00.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.divPopup.form.divSearch.form.Static10_00_00.addEventHandler("onclick",this.div_Search_Static10_00_onclick,this);
            this.divPopup.form.divSearch.form.Static10_00_00_01.addEventHandler("onclick",this.div_Search_Static10_00_onclick,this);
            this.divPopup.form.divSearch.form.Static10_00_00_01_00.addEventHandler("onclick",this.div_Search_Static10_00_onclick,this);
            this.divPopup.form.divSearch.form.btnSearch.addEventHandler("onclick",this.divPopup_divSearch_btnSearch_onclick,this);
            this.divPopup.form.Static04_00_00_01_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.divPopup.form.Static04_00_00_01_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.divPopup.form.btnPopupClose.addEventHandler("onclick",this.divPopup_btnPopupClose_onclick,this);
            this.divPopup.form.Static04_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.divPopup.form.Static04_00_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.divPopup.form.staTitle.addEventHandler("onclick",this.Static09_onclick,this);
            this.divPopup.form.grdMember.addEventHandler("oncelldblclick",this.divPopup_grdUser_oncelldblclick,this);
            this.btnAdd.addEventHandler("onclick",this.btnAdd_onclick,this);
        };
        this.loadIncludeScript("LOG_1040P_02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
