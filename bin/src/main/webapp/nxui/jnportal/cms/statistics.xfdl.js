(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("statistics");
            this.set_cssclass("frm_WF_comp");
            this.set_titletext("통계정보");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,670);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj.set_updatecontrol("true");
            obj._setContents("<ColumnInfo><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"userNm\" type=\"STRING\" size=\"256\"/><Column id=\"exceptionNm\" type=\"STRING\" size=\"256\"/><Column id=\"rgstDt\" type=\"STRING\" size=\"256\"/><Column id=\"rgstFromDt\" type=\"STRING\" size=\"256\"/><Column id=\"rgstToDt\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsLogInfo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"logNo\" type=\"STRING\" size=\"256\"/><Column id=\"logDt\" type=\"STRING\" size=\"256\"/><Column id=\"pgmId\" type=\"STRING\" size=\"256\"/><Column id=\"url\" type=\"STRING\" size=\"256\"/><Column id=\"classNm\" type=\"STRING\" size=\"256\"/><Column id=\"cmd\" type=\"STRING\" size=\"256\"/><Column id=\"connIp\" type=\"STRING\" size=\"256\"/><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"userNmKr\" type=\"STRING\" size=\"256\"/><Column id=\"deptCd\" type=\"STRING\" size=\"256\"/><Column id=\"deptNm\" type=\"STRING\" size=\"256\"/><Column id=\"logCont\" type=\"STRING\" size=\"256\"/><Column id=\"exceptionNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAccessLog", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"accessTime\" type=\"STRING\" size=\"256\"/><Column id=\"finishTime\" type=\"STRING\" size=\"256\"/><Column id=\"accessIp\" type=\"STRING\" size=\"256\"/><Column id=\"accessUrl\" type=\"STRING\" size=\"256\"/><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"userNmKr\" type=\"STRING\" size=\"256\"/><Column id=\"menuId\" type=\"STRING\" size=\"256\"/><Column id=\"menuNm\" type=\"STRING\" size=\"256\"/><Column id=\"progId\" type=\"STRING\" size=\"256\"/><Column id=\"progNm\" type=\"STRING\" size=\"256\"/><Column id=\"actionName\" type=\"STRING\" size=\"256\"/><Column id=\"actionResult\" type=\"STRING\" size=\"256\"/><Column id=\"requestBody\" type=\"STRING\" size=\"256\"/><Column id=\"cnt\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCalDate", this);
            obj.set_updatecontrol("true");
            obj._setContents("<ColumnInfo><Column id=\"rgstFromDt\" type=\"DATE\" size=\"256\"/><Column id=\"rgstToDt\" type=\"DATE\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btnSearch",null,"12","65","28","50",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Static("sta_01","50","10","500","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_compTitle01");
            obj.set_expr("comp.parent.getOwnerFrame().tabArgs.title");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","50","57",null,"110","50",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","20","45",null,"50","20",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_cssclass("div_WF_panel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta_msg","414","10","100","30",null,null,null,null,null,null,this.divSearch.form.Div00.form);
            obj.set_taborder("0");
            obj.set_text("사용자");
            obj.set_cssclass("sta_WF_condition01");
            this.divSearch.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_userNm","664","12","220","26",null,null,null,null,null,null,this.divSearch.form.Div00.form);
            obj.set_taborder("2");
            this.divSearch.form.Div00.addChild(obj.name, obj);

            obj = new Calendar("cal_Dt_to","260","12","110","26",null,null,null,null,null,null,this.divSearch.form.Div00.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_weekformat("일 월 화 수 목 금 토");
            obj.set_cssclass("essential");
            this.divSearch.form.Div00.addChild(obj.name, obj);

            obj = new Calendar("cal_Dt_from","130","12","110","26",null,null,null,null,null,null,this.divSearch.form.Div00.form);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            obj.set_readonly("false");
            obj.set_cssclass("essential");
            this.divSearch.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static10_00_00","370","-5","40",null,null,"0",null,null,null,null,this.divSearch.form.Div00.form);
            obj.set_taborder("4");
            obj.set_text("w40");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divSearch.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static10_00_00_01","884","-5","40",null,null,"0",null,null,null,null,this.divSearch.form.Div00.form);
            obj.set_taborder("5");
            obj.set_text("w40");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divSearch.form.Div00.addChild(obj.name, obj);

            obj = new Static("sta_msg00","929","10","100","30",null,null,null,null,null,null,this.divSearch.form.Div00.form);
            obj.set_taborder("6");
            obj.set_text("오류명");
            obj.set_cssclass("sta_WF_condition01");
            this.divSearch.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static26","246","11","15","24",null,null,null,null,null,null,this.divSearch.form.Div00.form);
            obj.set_taborder("7");
            obj.set_text("~");
            this.divSearch.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static16","110","0","20",null,null,"0",null,null,null,null,this.divSearch.form.Div00.form);
            obj.set_taborder("8");
            obj.set_text("w 10");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.divSearch.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static16_00","514","0","20",null,null,"0",null,null,null,null,this.divSearch.form.Div00.form);
            obj.set_taborder("9");
            obj.set_text("w 10");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.divSearch.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static16_00_00","1042","0","20",null,null,"0",null,null,null,null,this.divSearch.form.Div00.form);
            obj.set_taborder("10");
            obj.set_text("w 10");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.divSearch.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_roleNm","534","12","90","26",null,null,null,null,null,null,this.divSearch.form.Div00.form);
            obj.set_taborder("11");
            obj.set_readonly("false");
            this.divSearch.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static10_00_00_01_00","1302","-5","40",null,null,"0",null,null,null,null,this.divSearch.form.Div00.form);
            obj.set_taborder("12");
            obj.set_text("w40");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divSearch.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_userNm01","1062","12","240","26",null,null,null,null,null,null,this.divSearch.form.Div00.form);
            obj.set_taborder("13");
            this.divSearch.form.Div00.addChild(obj.name, obj);

            obj = new Button("btn_rqst_nm","630","12","26","26",null,null,null,null,null,null,this.divSearch.form.Div00.form);
            obj.set_taborder("14");
            obj.set_cssclass("btn_WF_frmSearch");
            this.divSearch.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00","61","8","25","34",null,null,null,null,null,null,this.divSearch.form.Div00.form);
            obj.set_taborder("15");
            obj.set_text("*");
            obj.set_cssclass("essential");
            obj.set_tooltiptext("필수입력");
            this.divSearch.form.Div00.addChild(obj.name, obj);

            obj = new Static("sch_RQST_NO","0","8","110","34",null,null,null,null,null,null,this.divSearch.form.Div00.form);
            obj.set_taborder("16");
            obj.set_text("기간");
            obj.set_cssclass("sta_WF_condition01");
            this.divSearch.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static15_01_00","169","0","50","12",null,null,null,null,null,null,this.divSearch.form.Div00.form);
            obj.set_taborder("17");
            obj.set_text("h 12");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divSearch.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_00","20","0","60","18",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("h 18");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static05_00","20","11","169","27",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_subTitle01");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_00_00","110","0","60","45",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("h 45");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static15_01_00_00","280","95","50",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static10","0","0","20","132",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("w20");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("Div00","50","177",null,null,"50","28",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Tab("Tab00","20","10",null,null,"20","30",null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_tabindex("0");
            obj.getSetter("scrollbars").set("autoboth");
            obj.set_cssclass("tab_WF_comp");
            this.Div00.addChild(obj.name, obj);

            obj = new Tabpage("tabpage1",this.Div00.form.Tab00);
            obj.set_text("시스템 오류");
            this.Div00.form.Tab00.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_00","20","0","60","18",null,null,null,null,null,null,this.Div00.form.Tab00.tabpage1.form);
            obj.set_taborder("0");
            obj.set_text("h 18");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.Div00.form.Tab00.tabpage1.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_00_00","110","0","60","45",null,null,null,null,null,null,this.Div00.form.Tab00.tabpage1.form);
            obj.set_taborder("1");
            obj.set_text("h 45");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.Div00.form.Tab00.tabpage1.addChild(obj.name, obj);

            obj = new Static("Static37_00","20","11","100","27",null,null,null,null,null,null,this.Div00.form.Tab00.tabpage1.form);
            obj.set_taborder("2");
            obj.set_text("검색결과");
            obj.set_cssclass("sta_WF_subTitle01");
            obj.set_fittocontents("width");
            this.Div00.form.Tab00.tabpage1.addChild(obj.name, obj);

            obj = new Static("Static10_00",null,"0","20","173","0",null,null,null,null,null,this.Div00.form.Tab00.tabpage1.form);
            obj.set_taborder("3");
            obj.set_text("w20");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.Div00.form.Tab00.tabpage1.addChild(obj.name, obj);

            obj = new Static("Static10","0","0","20","173",null,null,null,null,null,null,this.Div00.form.Tab00.tabpage1.form);
            obj.set_taborder("4");
            obj.set_text("w20");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.Div00.form.Tab00.tabpage1.addChild(obj.name, obj);

            obj = new Grid("grdParam","20","45",null,null,"20","0",null,null,null,null,this.Div00.form.Tab00.tabpage1.form);
            obj.set_taborder("5");
            obj.set_binddataset("dsLogInfo");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_autoupdatetype("itemselect");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\" band=\"left\"/><Column size=\"150\"/><Column size=\"230\"/><Column size=\"280\"/><Column size=\"150\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"46\" band=\"head\"/><Row size=\"33\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"일시\"/><Cell col=\"2\" text=\"경로\"/><Cell col=\"3\" text=\"클래스명\"/><Cell col=\"4\" text=\"연계 명령어\"/><Cell col=\"5\" text=\"오류명\"/><Cell col=\"6\" text=\"로그 상세\"/><Cell col=\"7\" text=\"접속 IP\"/><Cell col=\"8\" text=\"사용자 ID\"/><Cell col=\"9\" text=\"사용자명\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\" text=\"expr:currow+1\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:logDt\" edittype=\"none\" displaytype=\"normal\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"2\" text=\"bind:url\" edittype=\"none\" editmaxlength=\"1000\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:classNm\" edittype=\"none\" textAlign=\"left\" editmaxlength=\"300\"/><Cell col=\"4\" text=\"bind:cmd\" edittype=\"none\" editmaxlength=\"4000\"/><Cell col=\"5\" text=\"bind:exceptionNm\" edittype=\"none\" textAlign=\"left\" editmaxlength=\"1000\"/><Cell col=\"6\" text=\"더보기\" edittype=\"button\" textAlign=\"center\" editmaxlength=\"4000\" displaytype=\"buttoncontrol\" cssclass=\"btn_WF_Row_Add\"/><Cell col=\"7\" text=\"bind:connIp\"/><Cell col=\"8\" text=\"bind:userId\" edittype=\"none\" editmaxlength=\"100\"/><Cell col=\"9\" text=\"bind:userNmKr\" edittype=\"none\" textAlign=\"center\"/></Band></Format></Formats>");
            this.Div00.form.Tab00.tabpage1.addChild(obj.name, obj);

            obj = new Static("stc_gridRowCnt","Static37_00:20","12","150","27",null,null,null,null,null,null,this.Div00.form.Tab00.tabpage1.form);
            obj.set_taborder("6");
            obj.set_text("(총 0건)");
            obj.set_cssclass("sta_WF_subResult");
            this.Div00.form.Tab00.tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("tabpage2",this.Div00.form.Tab00);
            obj.set_text("프로그램 접속 통계");
            this.Div00.form.Tab00.addChild(obj.name, obj);

            obj = new Static("Static10_00",null,"0","20","173","0",null,null,null,null,null,this.Div00.form.Tab00.tabpage2.form);
            obj.set_taborder("0");
            obj.set_text("w20");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.Div00.form.Tab00.tabpage2.addChild(obj.name, obj);

            obj = new Grid("grdParam","20","45",null,null,"20","0",null,null,null,null,this.Div00.form.Tab00.tabpage2.form);
            obj.set_taborder("1");
            obj.set_binddataset("dsAccessLog");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_autoupdatetype("itemselect");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\" band=\"left\"/><Column size=\"150\"/><Column size=\"300\"/><Column size=\"300\"/><Column size=\"100\"/></Columns><Rows><Row size=\"46\" band=\"head\"/><Row size=\"33\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"일시\"/><Cell col=\"2\" text=\"접근 메뉴 ID\"/><Cell col=\"3\" text=\"접근메뉴명\"/><Cell col=\"4\" text=\"접속건수\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\" text=\"expr:currow+1\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:accessTime\" edittype=\"none\" displaytype=\"normal\"/><Cell col=\"2\" text=\"bind:menuId\" edittype=\"none\" editmaxlength=\"1000\"/><Cell col=\"3\" text=\"bind:menuNm\" edittype=\"none\" textAlign=\"left\" editmaxlength=\"300\"/><Cell col=\"4\" edittype=\"none\" editmaxlength=\"4000\" text=\"bind:cnt\" textAlign=\"right\"/></Band></Format></Formats>");
            this.Div00.form.Tab00.tabpage2.addChild(obj.name, obj);

            obj = new Static("Static10","0","0","20","173",null,null,null,null,null,null,this.Div00.form.Tab00.tabpage2.form);
            obj.set_taborder("2");
            obj.set_text("w20");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.Div00.form.Tab00.tabpage2.addChild(obj.name, obj);

            obj = new Static("Static37","20","11","100","27",null,null,null,null,null,null,this.Div00.form.Tab00.tabpage2.form);
            obj.set_taborder("3");
            obj.set_text("검색결과");
            obj.set_cssclass("sta_WF_subTitle01");
            obj.set_fittocontents("width");
            this.Div00.form.Tab00.tabpage2.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_00_00","110","0","60","45",null,null,null,null,null,null,this.Div00.form.Tab00.tabpage2.form);
            obj.set_taborder("4");
            obj.set_text("h 45");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.Div00.form.Tab00.tabpage2.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_00","20","0","60","18",null,null,null,null,null,null,this.Div00.form.Tab00.tabpage2.form);
            obj.set_taborder("5");
            obj.set_text("h 18");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.Div00.form.Tab00.tabpage2.addChild(obj.name, obj);

            obj = new Static("stc_gridRowCnt","Static37:20","12","150","27",null,null,null,null,null,null,this.Div00.form.Tab00.tabpage2.form);
            obj.set_taborder("6");
            obj.set_text("(총 0건)");
            obj.set_cssclass("sta_WF_subResult");
            this.Div00.form.Tab00.tabpage2.addChild(obj.name, obj);

            obj = new Static("Static08","0","167",null,"10","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new Button("btnExportCompML",null,"12","160","28","121",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Export 컴포넌트 언어 Data");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00","84","45","60","12",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("h 12");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form.Div00.form
            obj = new Layout("default","",0,0,this.divSearch.form.Div00.form,function(p){});
            this.divSearch.form.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form.Tab00.tabpage1.form
            obj = new Layout("default","",1032,392,this.Div00.form.Tab00.tabpage1.form,function(p){});
            this.Div00.form.Tab00.tabpage1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form.Tab00.tabpage2.form
            obj = new Layout("default","",0,0,this.Div00.form.Tab00.tabpage2.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static10_00.set_taborder("0");
                p.Static10_00.set_text("w20");
                p.Static10_00.set_visible("false");
                p.Static10_00.set_background("fuchsia");
                p.Static10_00.set_color("blue");
                p.Static10_00.set_textAlign("center");
                p.Static10_00.set_verticalAlign("middle");
                p.Static10_00.set_opacity("0.7");
                p.Static10_00.set_font("normal 12px/normal \"Arial\"");
                p.Static10_00.move(null,"0","20","173","0",null);

                p.grdParam.set_taborder("1");
                p.grdParam.set_binddataset("dsAccessLog");
                p.grdParam.set_autofittype("col");
                p.grdParam.set_autoenter("select");
                p.grdParam.set_autoupdatetype("itemselect");
                p.grdParam.move("20","45",null,null,"20","0");

                p.Static10.set_taborder("2");
                p.Static10.set_text("w20");
                p.Static10.set_visible("false");
                p.Static10.set_background("fuchsia");
                p.Static10.set_color("blue");
                p.Static10.set_textAlign("center");
                p.Static10.set_verticalAlign("middle");
                p.Static10.set_opacity("0.7");
                p.Static10.set_font("normal 12px/normal \"Arial\"");
                p.Static10.move("0","0","20","173",null,null);

                p.Static37.set_taborder("3");
                p.Static37.set_text("검색결과");
                p.Static37.set_cssclass("sta_WF_subTitle01");
                p.Static37.set_fittocontents("width");
                p.Static37.move("20","11","100","27",null,null);

                p.Static04_00_00_00_00.set_taborder("4");
                p.Static04_00_00_00_00.set_text("h 45");
                p.Static04_00_00_00_00.set_visible("false");
                p.Static04_00_00_00_00.set_background("aqua");
                p.Static04_00_00_00_00.set_color("blue");
                p.Static04_00_00_00_00.set_textAlign("center");
                p.Static04_00_00_00_00.set_verticalAlign("middle");
                p.Static04_00_00_00_00.set_opacity("0.7");
                p.Static04_00_00_00_00.set_font("normal 12px/normal \"Arial\"");
                p.Static04_00_00_00_00.move("110","0","60","45",null,null);

                p.Static04_00_00_00.set_taborder("5");
                p.Static04_00_00_00.set_text("h 18");
                p.Static04_00_00_00.set_visible("false");
                p.Static04_00_00_00.set_background("aqua");
                p.Static04_00_00_00.set_color("blue");
                p.Static04_00_00_00.set_textAlign("center");
                p.Static04_00_00_00.set_verticalAlign("middle");
                p.Static04_00_00_00.set_opacity("0.7");
                p.Static04_00_00_00.set_font("normal 12px/normal \"Arial\"");
                p.Static04_00_00_00.move("20","0","60","18",null,null);

                p.stc_gridRowCnt.set_taborder("6");
                p.stc_gridRowCnt.set_text("(총 0건)");
                p.stc_gridRowCnt.set_cssclass("sta_WF_subResult");
                p.stc_gridRowCnt.move("Static37:20","12","150","27",null,null);
            	}
            );
            this.Div00.form.Tab00.tabpage2.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div00.form.Tab00.tabpage2.form
            obj = new Layout("screen00","",0,0,this.Div00.form.Tab00.tabpage2.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.Div00.form.Tab00.tabpage2.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Tab00.set_taborder("2");
                p.Tab00.set_tabindex("0");
                p.Tab00.getSetter("scrollbars").set("autoboth");
                p.Tab00.set_cssclass("tab_WF_comp");
                p.Tab00.move("20","10",null,null,"20","30");

                p.Tab00.tabpage1.set_text("시스템 오류");

                p.Tab00.tabpage2.set_text("프로그램 접속 통계");
            	}
            );
            this.Div00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div00.form
            obj = new Layout("screen00","",0,0,this.Div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.Div00.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1920,670,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_cssclass("frm_WF_comp");
                p.set_titletext("통계정보");

                p.btnSearch.set_taborder("0");
                p.btnSearch.set_text("조회");
                p.btnSearch.move(null,"12","65","28","50",null);

                p.sta_01.set_taborder("1");
                p.sta_01.set_cssclass("sta_WF_compTitle01");
                p.sta_01.set_expr("comp.parent.getOwnerFrame().tabArgs.title");
                p.sta_01.move("50","10","500","30",null,null);

                p.divSearch.set_taborder("2");
                p.divSearch.set_text("");
                p.divSearch.move("50","57",null,"110","50",null);

                p.Div00.set_taborder("3");
                p.Div00.set_text("");
                p.Div00.move("50","177",null,null,"50","28");

                p.Static08.set_taborder("4");
                p.Static08.set_text("h 10");
                p.Static08.set_visible("false");
                p.Static08.set_background("aqua");
                p.Static08.set_color("blue");
                p.Static08.set_textAlign("center");
                p.Static08.set_verticalAlign("middle");
                p.Static08.move("0","167",null,"10","0",null);

                p.btnExportCompML.set_taborder("5");
                p.btnExportCompML.set_text("Export 컴포넌트 언어 Data");
                p.btnExportCompML.move(null,"12","160","28","121",null);

                p.Static04_00.set_taborder("6");
                p.Static04_00.set_text("h 12");
                p.Static04_00.set_visible("false");
                p.Static04_00.set_background("aqua");
                p.Static04_00.set_color("blue");
                p.Static04_00.set_textAlign("center");
                p.Static04_00.set_verticalAlign("middle");
                p.Static04_00.set_opacity("0.7");
                p.Static04_00.set_font("normal 12px/normal \"Arial\"");
                p.Static04_00.move("84","45","60","12",null,null);
            	}
            );
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("screen00","",1280,670,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.Div00.form.cal_Dt_from","value","dsCalDate","rgstFromDt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.Div00.form.cal_Dt_to","value","dsCalDate","rgstToDt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.Div00.form.edt_roleNm","value","dsSearch","userId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.Div00.form.edt_userNm","value","dsSearch","userNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.Div00.form.edt_userNm01","value","dsSearch","exceptionNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.Div00.form.edt_userNm00","value","dsSearch","menuNm");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("statistics.xfdl","lib::common.xjs");
        this.registerScript("statistics.xfdl", function() {
        /**
        *  messageManage
        *  MenuPath      -
        *  FileName      statistics.xfdl
        *  Creator 	     cheonsy
        *  CreateDate    2023.03.14
        *  Desction      통계정보
        ************** 소스 수정 이력 ***********************************************
        *  date          Modifier    Description
        *******************************************************************************
        *  2023.03.14    cheonsy 	 최초 생성
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

        	// 이달 1일 세팅, 현재날짜 세팅
        	var currDate = new Date();
        	var year = currDate.getFullYear().toString().padLeft(4, "0");
        	var month = (currDate.getMonth()+1).toString().padLeft(2, "0");
        	var day = 1;

        	this.divSearch.form.Div00.form.cal_Dt_from.set_value( year+month+day);
        	this.divSearch.form.Div00.form.cal_Dt_to.set_value( Ex.util.getToday());

        };


        /************************************************************************************************
        * TRANSACTION 서비스 호출 처리
        ************************************************************************************************/
        /**
         * description 시스템 로그 조회
        */
        this.fnSearchSysLog = function()
        {
        	this.gfnTransaction("getSysLog", "cms/getSysLog.do", "dsSearch", "dsLogInfo", "", "fnCallBack");
        };

        /**
         * description 프로그램 접속 통계 조회
        */
        this.fnSearchAccessLog = function()
        {
        	this.gfnTransaction("getAccessLog", "cms/getAccessLog.do", "dsSearch", "dsAccessLog", "", "fnCallBack");
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
        		case "getSysLog":
        			//총 건수 계산
        			this.gfnRowCount(this.dsLogInfo, this.Div00.form.Tab00.tabpage1.form.stc_gridRowCnt);
        			this.fnSearchAccessLog();
        		break;
        		case "getAccessLog":
        			//총 건수 계산
        			this.gfnRowCount(this.dsAccessLog, this.Div00.form.Tab00.tabpage2.form.stc_gridRowCnt);
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
        	switch(sPopupId){
        		case "statisticsUserPopup":	// 사용자 조회 팝업
        			var oRtn = this.gfnGetPopupRtn();
        			if(oRtn){
        				console.log('oRtn : ',  oRtn);
        				console.log('oRtn.CONFIRM : ',  oRtn.CONFIRM);
        			}
        		break;
        		case "statisticsPopup":	// 로그상세 팝업
        			var oRtn = this.gfnGetPopupRtn();
        			if(oRtn){
        				console.log('oRtn : ',  oRtn);
        				console.log('oRtn.CONFIRM : ',  oRtn.CONFIRM);
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
         * description 조회버튼 클릭
        */
        this.btnSearch_onclick = function(obj,e)
        {
        	if (!this.fnValidation()) {
        		this.gfnAlert("CM_MSG_SRCH_DATE");  // 검색 기간은 필수입력값입니다.
        		return;
            }

        	if (!this.fnCalValidation()) {
                this.gfnAlert("CM_MSG_VAL_SRCH_3MONTH");  // 검색 기간을 시작일로부터 3개월 이내로 설정해주세요.
        		return;
            }

        	this.dsSearch.setColumn(0, "rgstFromDt", this.dsCalDate.getColumn(0, "rgstFromDt"));
        	this.dsSearch.setColumn(0, "rgstToDt", this.dsCalDate.getColumn(0, "rgstToDt"));

        	this.fnSearchSysLog();
        };

        /**
         * description 사용자 조회 버튼 클릭
        */
        this.div_Search_btn_rqst_nm_onclick = function(obj,e)
        {
        	this.gfnOpenPopup("statisticsUserPopup", "cms::statisticsUserPopup.xfdl", "", "fnPopupAfter", "");
        };

        /**
         * description 더보기 버튼 클릭
        */
        this.Div00_Tab00_tabpage1_grdParam_oncellclick = function(obj,e)
        {
        	if(e.col == 6){
        		var oArg = {  logNo : this.dsLogInfo.getColumn(this.dsLogInfo.rowposition, "logNo")	};
        		this.gfnOpenPopup("statisticsPopup", "cms::statisticsPopup.xfdl", oArg, "fnPopupAfter", "");
        	}
        };

        /**
         * description 엔터키 검색 이벤트
        */
        this.divSearch_Div00_edt_roleNm_onkeyup = function(obj,e)
        {
        	if(e.keycode==13){
        		this.btnSearch_onclick();
        	}
        };
        /************************************************************************************************
        * 사용자 FUNCTION 영역
        ************************************************************************************************/
        /**
         * description generate multi language Excel
        */
        this.btnExportCompML_onclick = function(obj,e)
        {
        	// generate multi language Excel
        	this.gfnGenerateML(this);
        	this.gfnGenerateMLExcel();
        };

        /**
         * description 유효성 체크
        */
        this.fnValidation = function ()
        {
        	if (this.dsCalDate.getColumn(0, "rgstFromDt") == "" || this.dsCalDate.getColumn(0, "rgstToDt") == "") {
        		return false;
            }else{
        		return true;
        	}
        };

        /**
         * description 기간 유효성 체크( 3개월 )
        */
        this.fnCalValidation = function()
        {
        	var startDay = this.dsCalDate.getColumn(0, "rgstFromDt");
        	var endDay = this.dsCalDate.getColumn(0, "rgstToDt");
        	var addStartday = this.fn_addMonth(startDay, 3);

        	if(endDay > addStartday ){
        		return false;
        	} else{
        		return true;
        	}
        };

        /**
         * description 시작일 + 3개월
        */
        this.fn_addMonth = function(strDate, month)
        {
        	var d = strDate.addMonth(month);

        	var s = (new Date(d)).getFullYear()
                   + (((new Date(d)).getMonth() + 1) + "").padLeft(2, '0')
                   + (((new Date(d)).getDate()) + "").padLeft(2, '0');

        	return (s);
        };

        /**
         * description generate multi language Excel
        */
        this.btnExportCompML_onclick = function(obj,e)
        {
        	// generate multi language Excel
        	this.gfnGenerateML(this);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
            this.divSearch.form.Div00.form.sta_msg.addEventHandler("onclick",this.divSearch_sta_01_onclick,this);
            this.divSearch.form.Div00.form.edt_userNm.addEventHandler("onkeyup",this.divSearch_Div00_edt_roleNm_onkeyup,this);
            this.divSearch.form.Div00.form.cal_Dt_to.addEventHandler("onkeyup",this.divSearch_Div00_edt_roleNm_onkeyup,this);
            this.divSearch.form.Div00.form.cal_Dt_from.addEventHandler("onkeyup",this.divSearch_Div00_edt_roleNm_onkeyup,this);
            this.divSearch.form.Div00.form.Static10_00_00.addEventHandler("onclick",this.div_Search_Static10_00_onclick,this);
            this.divSearch.form.Div00.form.Static10_00_00_01.addEventHandler("onclick",this.div_Search_Static10_00_onclick,this);
            this.divSearch.form.Div00.form.sta_msg00.addEventHandler("onclick",this.divSearch_sta_01_onclick,this);
            this.divSearch.form.Div00.form.edt_roleNm.addEventHandler("onkeyup",this.divSearch_Div00_edt_roleNm_onkeyup,this);
            this.divSearch.form.Div00.form.Static10_00_00_01_00.addEventHandler("onclick",this.div_Search_Static10_00_onclick,this);
            this.divSearch.form.Div00.form.edt_userNm01.addEventHandler("onkeyup",this.divSearch_Div00_edt_roleNm_onkeyup,this);
            this.divSearch.form.Div00.form.btn_rqst_nm.addEventHandler("onclick",this.div_Search_btn_rqst_nm_onclick,this);
            this.divSearch.form.Div00.form.sch_RQST_NO.addEventHandler("onclick",this.div_Search_Static01_onclick,this);
            this.divSearch.form.Div00.form.Static15_01_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.divSearch.form.Static04_00_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.divSearch.form.Static05_00.addEventHandler("onclick",this.div_Search_Static05_onclick,this);
            this.divSearch.form.Static04_00_00_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.divSearch.form.Static15_01_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.Div00.form.Tab00.addEventHandler("onchanged",this.Tab00_onchanged,this);
            this.Div00.form.Tab00.tabpage1.form.Static04_00_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.Div00.form.Tab00.tabpage1.form.Static04_00_00_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.Div00.form.Tab00.tabpage1.form.Static37_00.addEventHandler("onclick",this.Static09_onclick,this);
            this.Div00.form.Tab00.tabpage1.form.grdParam.addEventHandler("oncellclick",this.Div00_Tab00_tabpage1_grdParam_oncellclick,this);
            this.Div00.form.Tab00.tabpage2.form.grdParam.addEventHandler("onheadclick",this.Div00_grdHeader_onheadclick,this);
            this.Div00.form.Tab00.tabpage2.form.Static37.addEventHandler("onclick",this.Static09_onclick,this);
            this.Div00.form.Tab00.tabpage2.form.Static04_00_00_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.Div00.form.Tab00.tabpage2.form.Static04_00_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.btnExportCompML.addEventHandler("onclick",this.btnExportCompML_onclick,this);
            this.Static04_00.addEventHandler("onclick",this.Static31_onclick,this);
        };
        this.loadIncludeScript("statistics.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
