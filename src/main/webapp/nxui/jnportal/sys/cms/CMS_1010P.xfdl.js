(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CMS_1010P");
            this.set_titletext("기관코드 조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(900,780);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj.set_updatecontrol("true");
            obj._setContents("<ColumnInfo><Column id=\"searchInsttCode\" type=\"STRING\" size=\"256\"/><Column id=\"insttCode\" type=\"STRING\" size=\"256\"/><Column id=\"allInsttNm\" type=\"STRING\" size=\"256\"/><Column id=\"lowestInsttNm\" type=\"STRING\" size=\"256\"/><Column id=\"pageNo\" type=\"STRING\" size=\"256\"/><Column id=\"rowCount\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsInstt", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"insttNo\" type=\"STRING\" size=\"256\"/><Column id=\"rowCheck\" type=\"STRING\" size=\"256\"/><Column id=\"insttCode\" type=\"STRING\" size=\"256\"/><Column id=\"allInsttNm\" type=\"STRING\" size=\"256\"/><Column id=\"lowestInsttNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divPopup","0","0","900","780",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staPopupTitle","0","0",null,"50","0",null,null,null,null,null,this.divPopup.form);
            obj.set_taborder("0");
            obj.set_text("기관코드 조회");
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

            obj = new Div("divSearch","30","70",null,"167","30",null,null,null,null,null,this.divPopup.form);
            obj.set_taborder("4");
            obj.set_cssclass("div_WF_popup");
            obj.set_text("");
            this.divPopup.addChild(obj.name, obj);

            obj = new Static("Static10","0","0","20","132",null,null,null,null,null,null,this.divPopup.form.divSearch.form);
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

            obj = new Static("Static07_00_01_00",null,"45","1","36","20",null,null,null,null,null,this.divPopup.form.divSearch.form);
            obj.set_taborder("4");
            obj.set_background("#dddddd");
            this.divPopup.form.divSearch.addChild(obj.name, obj);

            obj = new Static("staSubTitle","19","11","169","27",null,null,null,null,null,null,this.divPopup.form.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_subTitle01");
            this.divPopup.form.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00","20","45","1","106",null,null,null,null,null,null,this.divPopup.form.divSearch.form);
            obj.set_taborder("5");
            obj.set_background("#00388e");
            obj.set_text("");
            this.divPopup.form.divSearch.addChild(obj.name, obj);

            obj = new Static("sta001","21","46","150","34",null,null,null,null,null,null,this.divPopup.form.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("기관코드");
            obj.set_cssclass("sta_WF_condition02");
            this.divPopup.form.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_01_02_00","171","46","1","34",null,null,null,null,null,null,this.divPopup.form.divSearch.form);
            obj.set_taborder("6");
            obj.set_background("#dddddd");
            this.divPopup.form.divSearch.addChild(obj.name, obj);

            obj = new Static("Static10_00","172","46","12","34",null,null,null,null,null,null,this.divPopup.form.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("w12");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divPopup.form.divSearch.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_00_00","110","151","60","15",null,null,null,null,null,null,this.divPopup.form.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divPopup.form.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtInsttCd","184","50","200","26",null,null,null,null,null,null,this.divPopup.form.divSearch.form);
            obj.set_taborder("11");
            obj.set_maxlength("100");
            this.divPopup.form.divSearch.addChild(obj.name, obj);

            obj = new Static("Static10_00_00_01_00","818","0","20",null,null,"0",null,null,null,null,this.divPopup.form.divSearch.form);
            obj.set_taborder("12");
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
            obj.set_cssclass("btn_WF_icoSearch");
            obj.set_taborder("13");
            this.divPopup.form.divSearch.addChild(obj.name, obj);

            obj = new Static("sta002","21","81","150","34",null,null,null,null,null,null,this.divPopup.form.divSearch.form);
            obj.set_taborder("14");
            obj.set_text("전체기관명");
            obj.set_cssclass("sta_WF_condition02");
            this.divPopup.form.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtAllInsttNm","184","85","200","26",null,null,null,null,null,null,this.divPopup.form.divSearch.form);
            obj.set_taborder("15");
            obj.set_maxlength("100");
            this.divPopup.form.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_01_01_00_01","21","115",null,"1","21",null,null,null,null,null,this.divPopup.form.divSearch.form);
            obj.set_taborder("16");
            obj.set_background("#dddddd");
            obj.set_text("");
            this.divPopup.form.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_01_01_00_00_00","21","80",null,"1","21",null,null,null,null,null,this.divPopup.form.divSearch.form);
            obj.set_taborder("17");
            obj.set_background("#dddddd");
            obj.set_text("");
            this.divPopup.form.divSearch.addChild(obj.name, obj);

            obj = new Static("Static10_00_01","172","81","12","34",null,null,null,null,null,null,this.divPopup.form.divSearch.form);
            obj.set_taborder("18");
            obj.set_text("w12");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divPopup.form.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_01_01_00_00_00_00","21","115",null,"1","21",null,null,null,null,null,this.divPopup.form.divSearch.form);
            obj.set_taborder("19");
            obj.set_background("#dddddd");
            obj.set_text("");
            this.divPopup.form.divSearch.addChild(obj.name, obj);

            obj = new Static("sta003","21","116","150","34",null,null,null,null,null,null,this.divPopup.form.divSearch.form);
            obj.set_taborder("20");
            obj.set_text("최하위기관명");
            obj.set_cssclass("sta_WF_condition02");
            this.divPopup.form.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_01_01_00_01_00","21","150",null,"1","21",null,null,null,null,null,this.divPopup.form.divSearch.form);
            obj.set_taborder("21");
            obj.set_background("#dddddd");
            obj.set_text("");
            this.divPopup.form.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtLowestInsttNm","184","120","200","26",null,null,null,null,null,null,this.divPopup.form.divSearch.form);
            obj.set_taborder("22");
            obj.set_maxlength("100");
            this.divPopup.form.divSearch.addChild(obj.name, obj);

            obj = new Static("Static10_00_01_01","172","116","12","34",null,null,null,null,null,null,this.divPopup.form.divSearch.form);
            obj.set_taborder("23");
            obj.set_text("w12");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divPopup.form.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_01_02_00_00_00","171","81","1","34",null,null,null,null,null,null,this.divPopup.form.divSearch.form);
            obj.set_taborder("24");
            obj.set_background("#dddddd");
            this.divPopup.form.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_01_02_00_00_00_00","171","116","1","34",null,null,null,null,null,null,this.divPopup.form.divSearch.form);
            obj.set_taborder("25");
            obj.set_background("#dddddd");
            this.divPopup.form.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_01_00_00",null,"80","1","36","20",null,null,null,null,null,this.divPopup.form.divSearch.form);
            obj.set_taborder("26");
            obj.set_background("#dddddd");
            this.divPopup.form.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_01_00_00_00",null,"115","1","36","20",null,null,null,null,null,this.divPopup.form.divSearch.form);
            obj.set_taborder("27");
            obj.set_background("#dddddd");
            this.divPopup.form.divSearch.addChild(obj.name, obj);

            obj = new Static("staText01","405","85","416","26",null,null,null,null,null,null,this.divPopup.form.divSearch.form);
            obj.set_taborder("28");
            obj.set_text("입력하신 기관에 속하는 전체 기관명으로 검색이 됩니다.");
            obj.set_color("darkgray");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.divPopup.form.divSearch.addChild(obj.name, obj);

            obj = new Static("staText02","405","120","416","26",null,null,null,null,null,null,this.divPopup.form.divSearch.form);
            obj.set_taborder("29");
            obj.set_text("입력하신 기관에 속하는 최하위 기관명만 검색이 됩니다.");
            obj.set_color("darkgray");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.divPopup.form.divSearch.addChild(obj.name, obj);

            obj = new Button("btnReset",null,"9","65","28","90",null,null,null,null,null,this.divPopup.form.divSearch.form);
            obj.set_text("초기화");
            obj.set_taborder("30");
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

            obj = new Button("btnPopupClose","452",null,"65","28",null,"23",null,null,null,null,this.divPopup.form);
            obj.set_text("닫기");
            obj.set_cssclass("");
            obj.set_visible("true");
            obj.set_taborder("7");
            this.divPopup.addChild(obj.name, obj);

            obj = new Button("btnAdd","384",null,"65","28",null,"23",null,null,null,null,this.divPopup.form);
            obj.set_taborder("8");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_icoSelect");
            this.divPopup.addChild(obj.name, obj);

            obj = new Div("divResult","30","247",null,null,"30","76",null,null,null,null,this.divPopup.form);
            obj.set_taborder("9");
            obj.set_text("");
            obj.set_cssclass("div_WF_popup");
            this.divPopup.addChild(obj.name, obj);

            obj = new Static("Static09","20","8","169","27",null,null,null,null,null,null,this.divPopup.form.divResult.form);
            obj.set_taborder("0");
            obj.set_text("검색결과");
            obj.set_cssclass("sta_WF_subTitle01");
            this.divPopup.form.divResult.addChild(obj.name, obj);

            obj = new Grid("grdInstt","20","42",null,"362","20",null,null,null,null,null,this.divPopup.form.divResult.form);
            obj.set_taborder("2");
            obj.set_binddataset("dsInstt");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_autoupdatetype("itemselect");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"100\"/><Column size=\"350\"/><Column size=\"200\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"33\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"기관코드\"/><Cell col=\"2\" text=\"전체기관명\"/><Cell col=\"3\" text=\"최하위기관명\"/></Band><Band id=\"body\"><Cell text=\"bind:insttNo\"/><Cell col=\"1\" text=\"bind:insttCode\" edittype=\"none\"/><Cell col=\"2\" text=\"bind:allInsttNm\" edittype=\"none\"/><Cell col=\"3\" text=\"bind:lowestInsttNm\"/></Band></Format></Formats>");
            this.divPopup.form.divResult.addChild(obj.name, obj);

            obj = new Static("Static04_00_00","20","0","60","18",null,null,null,null,null,null,this.divPopup.form.divResult.form);
            obj.set_taborder("3");
            obj.set_text("h 18");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divPopup.form.divResult.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_00","97","-2","60","45",null,null,null,null,null,null,this.divPopup.form.divResult.form);
            obj.set_taborder("4");
            obj.set_text("h 45");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divPopup.form.divResult.addChild(obj.name, obj);

            obj = new Static("staGridRowCnt","120","7","149","27",null,null,null,null,null,null,this.divPopup.form.divResult.form);
            obj.set_taborder("1");
            obj.set_text("(총 0건)");
            obj.set_cssclass("sta_WF_subResult");
            this.divPopup.form.divResult.addChild(obj.name, obj);

            obj = new Div("divPaging","20",null,null,"30","20","10",null,null,null,null,this.divPopup.form.divResult.form);
            obj.set_taborder("5");
            obj.set_text("divPaging");
            this.divPopup.form.divResult.addChild(obj.name, obj);

            obj = new Static("Static10","0","0","20",null,null,"0",null,null,null,null,this.divPopup.form.divResult.form);
            obj.set_taborder("6");
            obj.set_text("w20");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divPopup.form.divResult.addChild(obj.name, obj);

            obj = new Static("Static10_00_00_01_00","818","0","20",null,null,"0",null,null,null,null,this.divPopup.form.divResult.form);
            obj.set_taborder("7");
            obj.set_text("w20");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divPopup.form.divResult.addChild(obj.name, obj);

            obj = new Static("Static04_00_00","30","237","60","10",null,null,null,null,null,null,this.divPopup.form);
            obj.set_taborder("10");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divPopup.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divPopup.form.divSearch.form
            obj = new Layout("default","",1032,72,this.divPopup.form.divSearch.form,function(p){});
            this.divPopup.form.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divPopup.form.divResult.form.divPaging.form
            obj = new Layout("default","",0,0,this.divPopup.form.divResult.form.divPaging.form,function(p){});
            this.divPopup.form.divResult.form.divPaging.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divPopup.form.divResult.form
            obj = new Layout("default","",0,0,this.divPopup.form.divResult.form,function(p){});
            this.divPopup.form.divResult.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divPopup.form
            obj = new Layout("default","",0,0,this.divPopup.form,function(p){});
            this.divPopup.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divPopup.form.divSearch.form.edtInsttCd","value","dsSearch","searchInsttCode");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divPopup.form.divSearch.form.edtAllInsttNm","value","dsSearch","allInsttNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divPopup.form.divSearch.form.edtLowestInsttNm","value","dsSearch","lowestInsttNm");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("CMS_1010P.xfdl","lib::common.xjs");
        this.addIncludeScript("CMS_1010P.xfdl","lib::paging.xjs");
        this.registerScript("CMS_1010P.xfdl", function() {
        /**
        *  Popup Template
        *  MenuPath      -
        *  FileName      memberInsttPopup.xfdl
        *  Creator 	     cheonsy
        *  CreateDate    2023.03.22
        *  Desction      기관코드 조회
        ************** 소스 수정 이력 ***********************************************
        *  date          Modifier    Description
        *******************************************************************************
        *  2023.03.22    cheonsy 	 최초 생성
        *******************************************************************************/
        this.executeIncludeScript("lib::common.xjs"); /*include "lib::common.xjs"*/;
        this.executeIncludeScript("lib::paging.xjs"); /*include "lib::paging.xjs"*/;

        this.totRowCount = 0;  // paging 전체 건수

        /***********************************************************************************************
        * FORM EVENT 영역(onload, onbeforeclose)
        /***********************************************************************************************/
        /**
         * description 화면 onload
        */
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnLoad(this);

        	/*
        	 페이징 처리 값 세팅 함수 호출
        	 1. 페이지 처리 갯수
        	 2. 한번에 출력될 row 갯수
        	 3. 총계및 페이징 이동 활성화 여부
        	 4. transaction 함수
        	*/
        	var objdivPaging = this.divPopup.form.divResult.form.divPaging;

        	var objConfig = {
        						nPageCount : 10,
        						nPageRowCount : 10,
        						bPageViewActive : true,
        						objPageSearchFunction : this.fnSearchpaging,
        						objSearchButton	: this.divPopup.form.divSearch.form.btnSearch
        					}

        	this.fnInitPageSet(objdivPaging, objConfig);

        	this.btnSearch_onclick(this.divPopup.form.divSearch.form.btnSearch);  // 조회버튼 object 반드시 지정
        };

        /************************************************************************************************
        * TRANSACTION 서비스 호출 처리
        ************************************************************************************************/
        /**
         * description 조회
        */
        this.fnSearchpaging = function(nPageNo)
        {
        	this.dsInstt.clearData();

        	this.dsSearch.setColumn(0, "pageNo", nPageNo);
        	this.dsSearch.setColumn(0, "rowCount", this.divPopup.form.divResult.form.divPaging.config.nSelRowCount);

        	this.gfnTransaction("getInsttList", "cms/getInsttList.do", "dsSearch", "dsInstt", "", "fnCallBack");
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
        		case "getInsttList":
        			this.totRowCount = this.gfnChangeNumber(this.totRowCount);
        			this.gfnAllRowCount(this.totRowCount, this.divPopup.form.divResult.form.staGridRowCnt);

        			this.divPopup.form.divResult.form.divPaging.nTotalRowCount = this.totRowCount;
        			this.fnCallAfter(this.divPopup.form.divResult.form.divPaging);
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
         * description 조회 버튼 클릭
        */
        // paging.xjs 에서 처리


        /**
         * description 추가버튼
        */

        this.divPopup_btnAdd_onclick = function(obj,e)
        {
        	/*if(!this.gfnIsGridChecked(this.dsInstt, "rowCheck")){
        		this.gfnAlert("기관코드를 체크해주세요");
        		return;
        	}

        	// 체크된 행 갯수 count
        	var cnt = 0;
        	for( var i = 0; i < this.dsInstt.rowcount; i++){
         		if(this.dsInstt.getColumn(i, "rowCheck") == 1){
        			cnt++;
        		}
        	}

        	if(cnt > 1){
        		this.gfnAlert("한개의 기관코드만 체크해주세요");
        		return;
        	}*/

        	this.opener.dsUserInfo.setColumn(0, "ogdpInstCd", this.dsInstt.getColumn(this.dsInstt.rowposition, "insttCode"));
        	this.opener.dsUserInfo.setColumn(0, "ogdpInstNm", this.dsInstt.getColumn(this.dsInstt.rowposition, "lowestInsttNm"));

        	var oRtn = new Object();
        	oRtn.CONFIRM = "Y";
        	this.gfnPopupClose(oRtn);
        	this.close();
        };

        /**
         * description 행 더블클릭 이벤트
        */
        this.divPopup_grdInstt_oncelldblclick = function(obj,e)
        {
        	this.opener.dsUserInfo.setColumn(0, "ogdpInstCd", this.dsInstt.getColumn(this.dsInstt.rowposition, "insttCode"));
        	this.opener.dsUserInfo.setColumn(0, "ogdpInstNm", this.dsInstt.getColumn(this.dsInstt.rowposition, "lowestInsttNm"));
        	this.close();
        };


        /**
         * description 기관코드 searchInsttCode -> insttCode 세팅
        */
        this.divPopup_divSearch_edtInsttCd_onkillfocus = function(obj,e)
        {
        	this.dsSearch.setColumn(0, "insttCode", this.dsSearch.getColumn(0, "searchInsttCode"));
        };

        /**
         * description 엔터키 조회
        */

        this.divPopup_divSearch_edtInsttCd_onkeyup = function(obj,e)
        {
        	if(e.keycode==13){
        		this.dsSearch.setColumn(0, "insttCode", this.dsSearch.getColumn(0, "searchInsttCode"));
        		this.btnSearch_onclick(this.divPopup.form.divSearch.form.btnSearch);  // 조회버튼 object 반드시 지정
        	}
        };

        /**
         * description 닫기버튼
        */
        this.divPopup_btnPopupClose_onclick = function(obj,e)
        {
        	this.close();
        };

        /**
         * description 초기화 버튼
        */
        this.divPopup_divSearch_btnReset_onclick = function(obj,e)
        {
        	this.opener.dsUserInfo.setColumn(0, "ogdpInstCd", "");
        	this.opener.dsUserInfo.setColumn(0, "ogdpInstNm", "");
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
            this.divPopup.form.divSearch.form.Static04_00_00_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.divPopup.form.divSearch.form.edtInsttCd.addEventHandler("onkeyup",this.divPopup_divSearch_edtInsttCd_onkeyup,this);
            this.divPopup.form.divSearch.form.edtInsttCd.addEventHandler("onkillfocus",this.divPopup_divSearch_edtInsttCd_onkillfocus,this);
            this.divPopup.form.divSearch.form.Static10_00_00_01_00.addEventHandler("onclick",this.div_Search_Static10_00_onclick,this);
            this.divPopup.form.divSearch.form.btnSearch.addEventHandler("onclick",this.btn_search_onclick,this);
            this.divPopup.form.divSearch.form.edtAllInsttNm.addEventHandler("onkeyup",this.divPopup_divSearch_edtInsttCd_onkeyup,this);
            this.divPopup.form.divSearch.form.Static07_01_01_00_01.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.divPopup.form.divSearch.form.Static07_01_01_00_00_00.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.divPopup.form.divSearch.form.Static07_01_01_00_00_00_00.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.divPopup.form.divSearch.form.Static07_01_01_00_01_00.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.divPopup.form.divSearch.form.edtLowestInsttNm.addEventHandler("onkeyup",this.divPopup_divSearch_edtInsttCd_onkeyup,this);
            this.divPopup.form.divSearch.form.Static07_01_02_00_00_00.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.divPopup.form.divSearch.form.Static07_01_02_00_00_00_00.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.divPopup.form.divSearch.form.Static07_00_01_00_00.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.divPopup.form.divSearch.form.Static07_00_01_00_00_00.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.divPopup.form.divSearch.form.btnReset.addEventHandler("onclick",this.divPopup_divSearch_btnReset_onclick,this);
            this.divPopup.form.Static04_00_00_01_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.divPopup.form.Static04_00_00_01_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.divPopup.form.btnPopupClose.addEventHandler("onclick",this.divPopup_btnPopupClose_onclick,this);
            this.divPopup.form.btnAdd.addEventHandler("onclick",this.divPopup_btnAdd_onclick,this);
            this.divPopup.form.divResult.form.Static09.addEventHandler("onclick",this.Static09_onclick,this);
            this.divPopup.form.divResult.form.grdInstt.addEventHandler("oncelldblclick",this.divPopup_grdInstt_oncelldblclick,this);
            this.divPopup.form.divResult.form.Static04_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.divPopup.form.divResult.form.Static04_00_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.divPopup.form.divResult.form.Static10_00_00_01_00.addEventHandler("onclick",this.div_Search_Static10_00_onclick,this);
            this.divPopup.form.Static04_00_00.addEventHandler("onclick",this.Static31_onclick,this);
        };
        this.loadIncludeScript("CMS_1010P.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
