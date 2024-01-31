(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("testform1Popup");
            this.set_titletext("팝업 템플릿");
            if (Form == this.constructor)
            {
                this._setFormPosition(600,312);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTypeTwo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"rowCheck\" type=\"STRING\" size=\"256\"/><Column id=\"rowStatus\" type=\"STRING\" size=\"256\"/><Column id=\"sysId\" type=\"STRING\" size=\"256\"/><Column id=\"progId\" type=\"STRING\" size=\"256\"/><Column id=\"progNm\" type=\"STRING\" size=\"256\"/><Column id=\"progTy\" type=\"STRING\" size=\"256\"/><Column id=\"progUrl\" type=\"STRING\" size=\"256\"/><Column id=\"progDc\" type=\"STRING\" size=\"256\"/><Column id=\"progFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"progAuthor\" type=\"STRING\" size=\"256\"/><Column id=\"substituteUrl\" type=\"STRING\" size=\"256\"/><Column id=\"substituteUseYn\" type=\"STRING\" size=\"256\"/><Column id=\"atchFileId\" type=\"STRING\" size=\"256\"/><Column id=\"permissionUseYn\" type=\"STRING\" size=\"256\"/><Column id=\"permissionDc\" type=\"STRING\" size=\"256\"/><Column id=\"radioUseYn\" type=\"STRING\" size=\"256\"/><Column id=\"rgstId\" type=\"STRING\" size=\"256\"/><Column id=\"rgstNm\" type=\"STRING\" size=\"256\"/><Column id=\"rgstIp\" type=\"STRING\" size=\"256\"/><Column id=\"rgstDt\" type=\"STRING\" size=\"256\"/><Column id=\"updtId\" type=\"STRING\" size=\"256\"/><Column id=\"updtIp\" type=\"STRING\" size=\"256\"/><Column id=\"updtDt\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divPopup","0","0","600","312",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staPopupTitle","0","0",null,"50","0",null,null,null,null,null,this.divPopup.form);
            obj.set_taborder("0");
            obj.set_text("프로그램 등록");
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

            obj = new Div("divForm","30","70",null,"166","30",null,null,null,null,null,this.divPopup.form);
            obj.set_taborder("4");
            obj.set_cssclass("div_WF_popup");
            obj.set_text("");
            this.divPopup.addChild(obj.name, obj);

            obj = new Static("Static10","0","-1","19","132",null,null,null,null,null,null,this.divPopup.form.divForm.form);
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

            obj = new Static("Static07_01_01_00","21","80",null,"1","21",null,null,null,null,null,this.divPopup.form.divForm.form);
            obj.set_taborder("2");
            obj.set_background("#dddddd");
            obj.set_text("");
            this.divPopup.form.divForm.addChild(obj.name, obj);

            obj = new Static("Static07_01_01_00_00","21","45",null,"1","21",null,null,null,null,null,this.divPopup.form.divForm.form);
            obj.set_taborder("3");
            obj.set_background("#dddddd");
            obj.set_text("");
            this.divPopup.form.divForm.addChild(obj.name, obj);

            obj = new Static("Static07_01_01_00_01","21","115",null,"1","21",null,null,null,null,null,this.divPopup.form.divForm.form);
            obj.set_taborder("4");
            obj.set_background("#dddddd");
            obj.set_text("");
            this.divPopup.form.divForm.addChild(obj.name, obj);

            obj = new Static("Static07_00_01_00",null,"45","1","105","20",null,null,null,null,null,this.divPopup.form.divForm.form);
            obj.set_taborder("5");
            obj.set_background("#dddddd");
            this.divPopup.form.divForm.addChild(obj.name, obj);

            obj = new Static("staSubTitle","19","11","169","27",null,null,null,null,null,null,this.divPopup.form.divForm.form);
            obj.set_taborder("8");
            obj.set_text("과제 정보");
            obj.set_cssclass("sta_WF_subTitle01");
            this.divPopup.form.divForm.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00","20","45","1","105",null,null,null,null,null,null,this.divPopup.form.divForm.form);
            obj.set_taborder("6");
            obj.set_background("#00388e");
            obj.set_text("");
            this.divPopup.form.divForm.addChild(obj.name, obj);

            obj = new Static("Static07_01_02_00","171","45","1","105",null,null,null,null,null,null,this.divPopup.form.divForm.form);
            obj.set_taborder("7");
            obj.set_background("#dddddd");
            this.divPopup.form.divForm.addChild(obj.name, obj);

            obj = new Static("in_YY","21","116","150","34",null,null,null,null,null,null,this.divPopup.form.divForm.form);
            obj.set_taborder("9");
            obj.set_text("프로그램명");
            obj.set_cssclass("sta_WF_condition02");
            this.divPopup.form.divForm.addChild(obj.name, obj);

            obj = new Static("sta_001","21","46","150","34",null,null,null,null,null,null,this.divPopup.form.divForm.form);
            obj.set_taborder("10");
            obj.set_text("시스템ID");
            obj.set_cssclass("sta_WF_condition02");
            this.divPopup.form.divForm.addChild(obj.name, obj);

            obj = new Static("Static23","21","81","150","34",null,null,null,null,null,null,this.divPopup.form.divForm.form);
            obj.set_taborder("11");
            obj.set_text("프로그램ID");
            obj.set_cssclass("sta_WF_condition02");
            this.divPopup.form.divForm.addChild(obj.name, obj);

            obj = new Static("Static10_00","172","46","12","34",null,null,null,null,null,null,this.divPopup.form.divForm.form);
            obj.set_taborder("12");
            obj.set_text("w12");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divPopup.form.divForm.addChild(obj.name, obj);

            obj = new Static("Static10_00_00_00","172","116","12","34",null,null,null,null,null,null,this.divPopup.form.divForm.form);
            obj.set_taborder("13");
            obj.set_text("w12");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divPopup.form.divForm.addChild(obj.name, obj);

            obj = new Static("Static10_00_01","172","81","12","34",null,null,null,null,null,null,this.divPopup.form.divForm.form);
            obj.set_taborder("14");
            obj.set_text("w12");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divPopup.form.divForm.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_00_00","110","150","60","15",null,null,null,null,null,null,this.divPopup.form.divForm.form);
            obj.set_taborder("15");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divPopup.form.divForm.addChild(obj.name, obj);

            obj = new Static("Static07_01_01_00_01_00","20","150",null,"1","22",null,null,null,null,null,this.divPopup.form.divForm.form);
            obj.set_taborder("16");
            obj.set_background("#dddddd");
            obj.set_text("");
            this.divPopup.form.divForm.addChild(obj.name, obj);

            obj = new Edit("edt_001","184","50","321","26",null,null,null,null,null,null,this.divPopup.form.divForm.form);
            obj.set_taborder("17");
            obj.set_maxlength("100");
            obj.set_cssclass("essential");
            this.divPopup.form.divForm.addChild(obj.name, obj);

            obj = new Static("Static10_00_01_00",null,"110","12",null,"21","20",null,null,null,null,this.divPopup.form.divForm.form);
            obj.set_taborder("18");
            obj.set_text("w12");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divPopup.form.divForm.addChild(obj.name, obj);

            obj = new Edit("edt_002","184","85","321","26",null,null,null,null,null,null,this.divPopup.form.divForm.form);
            obj.set_taborder("19");
            obj.set_maxlength("100");
            obj.set_cssclass("essential");
            this.divPopup.form.divForm.addChild(obj.name, obj);

            obj = new Edit("edt_003","184","120","321","26",null,null,null,null,null,null,this.divPopup.form.divForm.form);
            obj.set_taborder("20");
            obj.set_maxlength("100");
            this.divPopup.form.divForm.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_01_00","249",null,"103","23",null,"0",null,null,null,null,this.divPopup.form);
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

            obj = new Static("Static04_00_00_01_00_00","249",null,"103","25",null,"51",null,null,null,null,this.divPopup.form);
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

            obj = new Button("btnPopupClose",null,null,"65","28","233","23",null,null,null,null,this.divPopup.form);
            obj.set_text("닫기");
            obj.set_cssclass("");
            obj.set_visible("true");
            obj.set_taborder("7");
            this.divPopup.addChild(obj.name, obj);

            obj = new Button("btnPopupSave","234","261","65","28",null,null,null,null,null,null,this.divPopup.form);
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_icoSave");
            obj.set_taborder("8");
            this.divPopup.addChild(obj.name, obj);

            obj = new Static("sta_g001","299","253","3","34",null,null,null,null,null,null,this.divPopup.form);
            obj.set_taborder("9");
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
            obj = new Layout("default","",1032,72,this.divPopup.form.divForm.form,function(p){});
            this.divPopup.form.divForm.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divPopup.form
            obj = new Layout("default","",0,0,this.divPopup.form,function(p){});
            this.divPopup.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divPopup.form.div_Search.form.SCH_RQST_NO","value","ds_search","SCH_RQST_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divPopup.form.div_Search.form.SCH_RQST_DT","value","ds_search","SCH_RQST_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divPopup.form.div_Search.form.SCH_RQST_ID","value","ds_search","SCH_RQST_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divPopup.form.div_Search.form.SCH_APV_STAT_CD","value","ds_search","SCH_APV_STAT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divPopup.form.div_Search.form.SCH_LAST_UPT_NM","value","ds_search","SCH_LAST_UPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divPopup.form.div_Search.form.SCH_LAST_UPT_DT","value","ds_search","SCH_LAST_UPT_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divPopup.form.div_Search.form.SCH_DEPT_CD","value","ds_search","SCH_RQST_DEPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divPopup.form.div_Search.form.SCH_RQST_NM","value","ds_search","SCH_RQST_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divPopup.form.div_Search.form.SCH_CAL_MON","value","ds_search","SCH_CAL_MON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divPopup.form.div_Search.form.Radio00","value","ds_main","INOUT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divPopup.form.div_Search.form.CheckBox00","value","ds_main","COM_CAR_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divPopup.form.div_Search.form.Spin00","value","ds_main","YY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divPopup.form.divForm.form.edt_001","value","dsTypeTwo","sysId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divPopup.form.divForm.form.SCH_RQST_DT","value","ds_search","SCH_RQST_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divPopup.form.divForm.form.SCH_RQST_ID","value","ds_search","SCH_RQST_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divPopup.form.divForm.form.SCH_APV_STAT_CD","value","ds_search","SCH_APV_STAT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divPopup.form.divForm.form.SCH_LAST_UPT_NM","value","ds_search","SCH_LAST_UPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divPopup.form.divForm.form.SCH_LAST_UPT_DT","value","ds_search","SCH_LAST_UPT_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divPopup.form.divForm.form.SCH_DEPT_CD","value","ds_search","SCH_RQST_DEPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divPopup.form.divForm.form.SCH_RQST_NM","value","ds_search","SCH_RQST_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divPopup.form.divForm.form.SCH_CAL_MON","value","ds_search","SCH_CAL_MON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divPopup.form.divForm.form.Radio00","value","ds_main","INOUT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divPopup.form.divForm.form.CheckBox00","value","ds_main","COM_CAR_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divPopup.form.divForm.form.Spin00","value","ds_main","YY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divPopup.form.divForm.form.Combo00","value","ds_main","TP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","divPopup.form.divForm.form.Edit05","value","ds_main","RQST_AMT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","divPopup.form.divForm.form.RQST_NM","value","ds_main","RQST_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","divPopup.form.divForm.form.TextArea01","value","ds_main","CONT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","divPopup.form.divForm.form.SBJ","value","ds_main","SBJ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","divPopup.form.divForm.form.FRM_DT","value","ds_main","FRM_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","divPopup.form.divForm.form.TO_DT","value","ds_main","TO_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","divPopup.form.divForm.form.rqstNo","value","ds_main","RQST_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","divPopup.form.divForm.form.commCd","value","ds_main","COMM_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","divPopup.form.divForm.form.edt_002","value","dsTypeTwo","progId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","divPopup.form.divForm.form.edt_003","value","dsTypeTwo","progNm");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("testform1Popup.xfdl","lib::common.xjs");
        this.registerScript("testform1Popup.xfdl", function() {
        /**
        *  Popup Template
        *  MenuPath      -
        *  FileName      testform1Popup.xfdl
        *  Creator 	     parkmg
        *  CreateDate    2023.02.27
        *  Desction      팝업 샘플
        ************** 소스 수정 이력 ***********************************************
        *  date          Modifier    Description
        *******************************************************************************
        *  2023.02.27    parkmg 	 최초 생성
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

        	this.dsTypeTwo.setColumn(0, "sysId", this.parent.sysId);
        	this.dsTypeTwo.setColumn(0, "progId", this.parent.progId);
        	this.dsTypeTwo.setColumn(0, "progNm", this.parent.progNm);

        	//this.fnSearch();
        };

        /************************************************************************************************
        * TRANSACTION 서비스 호출 처리
        ************************************************************************************************/


        /************************************************************************************************
         * CALLBACK 콜백 처리부분(Transaction, Popup)
         ************************************************************************************************/


        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        /**
         * description 저장
        */
        this.divPopup_btnPopupSave_onclick = function(obj,e)
        {
        	// pat 1. variable one
        	// pat 2. Array
        	// pat 3. Object

        	// pat 1. return string
        // 	var oRtn = "variable one";
        // 	this.gfnPopupClose(oRtn);

        	// pat 2. Return Array
        // 	var oRtn = new Array();
        // 	oRtn[0] = "arr 1";
        // 	oRtn[1] = "arr 2";
        // 	oRtn[2] = "arr 3";
        // 	this.gfnPopupClose(oRtn);

        	// pat 3. 임의의 Object Return / dataset 하나의 row는 gfnGetRowObj 이용
        	var oRtn = new Object();
        	oRtn.CONFIRM = "Y";
        	oRtn.popDS = this.dsTypeTwo;
        	this.gfnPopupClose(oRtn);
        };

        /**
         * description close
        */
        this.divPopup_btnPopupClose_onclick = function(obj,e)
        {
        	this.close();
        };



        /************************************************************************************************
        * 사용자 FUNCTION 영역
        ************************************************************************************************/



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divPopup.form.Static04_00_00_01.addEventHandler("onclick",this.Static31_onclick,this);
            this.divPopup.form.divForm.form.Static04_00_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.divPopup.form.divForm.form.Static07_01_01_00.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.divPopup.form.divForm.form.Static07_01_01_00_00.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.divPopup.form.divForm.form.Static07_01_01_00_01.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.divPopup.form.divForm.form.Static07_00_01_00.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.divPopup.form.divForm.form.staSubTitle.addEventHandler("onclick",this.Static09_onclick,this);
            this.divPopup.form.divForm.form.Static07_00_00_00.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.divPopup.form.divForm.form.Static07_01_02_00.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.divPopup.form.divForm.form.in_YY.addEventHandler("onclick",this.div_Search02_00_in_YY_onclick,this);
            this.divPopup.form.divForm.form.Static04_00_00_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.divPopup.form.divForm.form.Static07_01_01_00_01_00.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.divPopup.form.divForm.form.edt_001.addEventHandler("oneditclick",this.div_Search_SCH_RQST_NO_oneditclick,this);
            this.divPopup.form.divForm.form.edt_002.addEventHandler("oneditclick",this.div_Search_SCH_RQST_NO_oneditclick,this);
            this.divPopup.form.divForm.form.edt_003.addEventHandler("oneditclick",this.div_Search_SCH_RQST_NO_oneditclick,this);
            this.divPopup.form.Static04_00_00_01_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.divPopup.form.Static04_00_00_01_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.divPopup.form.btnPopupClose.addEventHandler("onclick",this.divPopup_btnPopupClose_onclick,this);
            this.divPopup.form.btnPopupSave.addEventHandler("onclick",this.divPopup_btnPopupSave_onclick,this);
        };
        this.loadIncludeScript("testform1Popup.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
