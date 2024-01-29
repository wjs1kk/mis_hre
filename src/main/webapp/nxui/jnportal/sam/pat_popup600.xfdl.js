(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Popup600");
            this.set_titletext("Popup600");
            if (Form == this.constructor)
            {
                this._setFormPosition(600,687);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_List", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NUM\" type=\"STRING\" size=\"256\"/><Column id=\"RQST_NO\" type=\"STRING\" size=\"256\"/><Column id=\"RQST_DT\" type=\"STRING\" size=\"256\"/><Column id=\"APV_STAT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"APV_STAT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RQST_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RQST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RQST_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"SBJ\" type=\"STRING\" size=\"256\"/><Column id=\"FRM_DT\" type=\"STRING\" size=\"256\"/><Column id=\"TO_DT\" type=\"STRING\" size=\"256\"/><Column id=\"HEAD_STAT_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"RQST_NO\">ACT02202001-0001</Col><Col id=\"RQST_DT\">20200101</Col><Col id=\"APV_STAT_NM\">결재중</Col><Col id=\"APV_STAT_CD\">020-000-0100</Col><Col id=\"RQST_DEPT_NM\">인사총무팀</Col><Col id=\"RQST_NM\">홍길동</Col><Col id=\"RQST_AMT\">100000</Col><Col id=\"SBJ\">연구활동비 지급신청서활동비 지급신청서활동비 지급신청서활동비 지급신청서</Col><Col id=\"NUM\">1</Col><Col id=\"FRM_DT\">20160101</Col><Col id=\"TO_DT\">20160101</Col><Col id=\"HEAD_STAT_CD\">D</Col></Row><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","0","0","600","687",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0",null,"50","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("레이어 팝업 제목");
            obj.set_cssclass("sta_WF_popupTitle");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static10","0","50","30",null,null,"0",null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static10_00",null,"50","30",null,"0","0",null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_01","30","50","103","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("h 20");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_01_00","249",null,"103","23",null,"0",null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("h 23");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("div_Search","30","70",null,"172","30",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_cssclass("div_WF_Transparent");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","0","0",null,null,"0","15",null,null,null,null,this.Div00.form.div_Search.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_bg");
            this.Div00.form.div_Search.addChild(obj.name, obj);

            obj = new Static("sch_RQST_NO","20","15","18.52%","26",null,null,null,null,null,null,this.Div00.form.div_Search.form);
            obj.set_taborder("3");
            obj.set_text("<fs v=\'13\'><fc v=\'#ef4343\'>*</fc></fs>신청번호");
            obj.set_cssclass("sta_WF_condition01");
            obj.set_usedecorate("true");
            this.Div00.form.div_Search.addChild(obj.name, obj);

            obj = new Static("sch_RQST_DT","20","82","18.52%","26",null,null,null,null,null,null,this.Div00.form.div_Search.form);
            obj.set_taborder("5");
            obj.set_text("신청일");
            obj.set_cssclass("sta_WF_condition01");
            this.Div00.form.div_Search.addChild(obj.name, obj);

            obj = new Calendar("SCH_RQST_DT","sch_RQST_DT:10","82","297","26",null,null,null,null,null,null,this.Div00.form.div_Search.form);
            obj.set_taborder("6");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_popuptype("center");
            obj.set_weekformat("일 월 화 수 목 금 토");
            obj.set_daysize("29 29");
            obj.set_headheight("28");
            this.Div00.form.div_Search.addChild(obj.name, obj);

            obj = new Static("sch_LAST_UPT_NM","20","48","18.52%","26",null,null,null,null,null,null,this.Div00.form.div_Search.form);
            obj.set_taborder("9");
            obj.set_text("<fs v=\'13\'><fc v=\'#ef4343\'>*</fc></fs>최종수정자");
            obj.set_cssclass("sta_WF_condition01");
            obj.set_usedecorate("true");
            this.Div00.form.div_Search.addChild(obj.name, obj);

            obj = new Static("sch_LAST_UPT_DT","20","116","18.52%","26",null,null,null,null,null,null,this.Div00.form.div_Search.form);
            obj.set_taborder("10");
            obj.set_text("최종수정일");
            obj.set_cssclass("sta_WF_condition01");
            this.Div00.form.div_Search.addChild(obj.name, obj);

            obj = new Calendar("SCH_LAST_UPT_DT","sch_LAST_UPT_DT:10","116","297","26",null,null,null,null,null,null,this.Div00.form.div_Search.form);
            obj.set_taborder("8");
            obj.set_dateformat("yyyy-MM");
            obj.set_value("null");
            obj.set_editformat("yyyy-MM");
            obj.set_backgroundcolumn("disabled");
            obj.set_readonly("false");
            this.Div00.form.div_Search.addChild(obj.name, obj);

            obj = new Edit("SCH_RQST_NO","sch_RQST_NO:10","15","359","26",null,null,null,null,null,null,this.Div00.form.div_Search.form);
            obj.set_taborder("4");
            obj.set_maxlength("100");
            obj.set_cssclass("essential");
            this.Div00.form.div_Search.addChild(obj.name, obj);

            obj = new Edit("SCH_LAST_UPT_NM","sch_LAST_UPT_NM:10","49","359","26",null,null,null,null,null,null,this.Div00.form.div_Search.form);
            obj.set_taborder("7");
            obj.set_cssclass("essential");
            this.Div00.form.div_Search.addChild(obj.name, obj);

            obj = new Static("Static10","0","0","20",null,null,"0",null,null,null,null,this.Div00.form.div_Search.form);
            obj.set_taborder("0");
            obj.set_text("w20");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.Div00.form.div_Search.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_01","20",null,"100","15",null,"0",null,null,null,null,this.Div00.form.div_Search.form);
            obj.set_taborder("1");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.Div00.form.div_Search.addChild(obj.name, obj);

            obj = new Static("Static11","0","0",null,"15","0",null,null,null,null,null,this.Div00.form.div_Search.form);
            obj.set_taborder("11");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.Div00.form.div_Search.addChild(obj.name, obj);

            obj = new Static("Static14","0","41",null,"8","0",null,null,null,null,null,this.Div00.form.div_Search.form);
            obj.set_taborder("12");
            obj.set_text("h 8");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.Div00.form.div_Search.addChild(obj.name, obj);

            obj = new Static("Static15","0","142",null,"15","0",null,null,null,null,null,this.Div00.form.div_Search.form);
            obj.set_taborder("13");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.Div00.form.div_Search.addChild(obj.name, obj);

            obj = new Static("Static14_00","0","74",null,"8","0",null,null,null,null,null,this.Div00.form.div_Search.form);
            obj.set_taborder("14");
            obj.set_text("h 8");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.Div00.form.div_Search.addChild(obj.name, obj);

            obj = new Static("Static14_00_00","0","108",null,"8","0",null,null,null,null,null,this.Div00.form.div_Search.form);
            obj.set_taborder("15");
            obj.set_text("h 8");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.Div00.form.div_Search.addChild(obj.name, obj);

            obj = new Static("Static12","120","15","10","127",null,null,null,null,null,null,this.Div00.form.div_Search.form);
            obj.set_taborder("16");
            obj.set_text("w 10");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.Div00.form.div_Search.addChild(obj.name, obj);

            obj = new Static("Static10_01",null,"0","20",null,"0","0",null,null,null,null,this.Div00.form.div_Search.form);
            obj.set_taborder("17");
            obj.set_text("w20");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.Div00.form.div_Search.addChild(obj.name, obj);

            obj = new Div("div_Search02_00","30","242",null,"162","30",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_cssclass("div_WF_popup");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static10","0","0","20",null,null,"0",null,null,null,null,this.Div00.form.div_Search02_00.form);
            obj.set_taborder("0");
            obj.set_text("w20");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.Div00.form.div_Search02_00.addChild(obj.name, obj);

            obj = new Static("sta_dtlInfo","19","0","169","45",null,null,null,null,null,null,this.Div00.form.div_Search02_00.form);
            obj.set_taborder("1");
            obj.set_text("과제 정보");
            obj.set_cssclass("sta_WF_subTitle01");
            this.Div00.form.div_Search02_00.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_00_00","110",null,"60","15",null,"0",null,null,null,null,this.Div00.form.div_Search02_00.form);
            obj.set_taborder("2");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.Div00.form.div_Search02_00.addChild(obj.name, obj);

            obj = new Static("Static10_00","20","45",null,"34","20",null,null,null,null,null,this.Div00.form.div_Search02_00.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_condition02box");
            obj.set_text("");
            this.Div00.form.div_Search02_00.addChild(obj.name, obj);

            obj = new Static("Static20","20","78",null,"34","20",null,null,null,null,null,this.Div00.form.div_Search02_00.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_condition02box");
            this.Div00.form.div_Search02_00.addChild(obj.name, obj);

            obj = new Static("Static20_00","20","111",null,"34","20",null,null,null,null,null,this.Div00.form.div_Search02_00.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_condition02box");
            this.Div00.form.div_Search02_00.addChild(obj.name, obj);

            obj = new Static("in_YY","20","111","27.88%","34",null,null,null,null,null,null,this.Div00.form.div_Search02_00.form);
            obj.set_taborder("6");
            obj.set_text("Spinner");
            obj.set_cssclass("sta_WF_condition02_L");
            this.Div00.form.div_Search02_00.addChild(obj.name, obj);

            obj = new Static("Static11_00","20","45","27.88%","34",null,null,null,null,null,null,this.Div00.form.div_Search02_00.form);
            obj.set_taborder("7");
            obj.set_text("신청번호");
            obj.set_cssclass("sta_WF_condition02_L");
            this.Div00.form.div_Search02_00.addChild(obj.name, obj);

            obj = new Static("Static23","20","78","27.88%","34",null,null,null,null,null,null,this.Div00.form.div_Search02_00.form);
            obj.set_taborder("8");
            obj.set_text("콤보입력");
            obj.set_cssclass("sta_WF_condition02_L");
            this.Div00.form.div_Search02_00.addChild(obj.name, obj);

            obj = new Static("Static00","Static11_00:10","45","323","34",null,null,null,null,null,null,this.Div00.form.div_Search02_00.form);
            obj.set_taborder("9");
            obj.set_text("ACT02202001-00");
            this.Div00.form.div_Search02_00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","in_YY:10","111","323","34",null,null,null,null,null,null,this.Div00.form.div_Search02_00.form);
            obj.set_taborder("10");
            obj.set_text("ACT02202001-00");
            this.Div00.form.div_Search02_00.addChild(obj.name, obj);

            obj = new Static("Static00_01","Static23:10","78","323","34",null,null,null,null,null,null,this.Div00.form.div_Search02_00.form);
            obj.set_taborder("11");
            obj.set_text("ACT02202001-00");
            this.Div00.form.div_Search02_00.addChild(obj.name, obj);

            obj = new Static("Static10_01",null,"0","20",null,"0","0",null,null,null,null,this.Div00.form.div_Search02_00.form);
            obj.set_taborder("12");
            obj.set_text("w20");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.Div00.form.div_Search02_00.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_00","110","0","60","45",null,null,null,null,null,null,this.Div00.form.div_Search02_00.form);
            obj.set_taborder("13");
            obj.set_text("h 45");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.Div00.form.div_Search02_00.addChild(obj.name, obj);

            obj = new Div("div_Search02_00_00","30","414",null,"197","30",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_cssclass("div_WF_popup");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static10","0","0","20",null,null,"0",null,null,null,null,this.Div00.form.div_Search02_00_00.form);
            obj.set_taborder("0");
            obj.set_text("w20");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.Div00.form.div_Search02_00_00.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_00","110","0","60","22",null,null,null,null,null,null,this.Div00.form.div_Search02_00_00.form);
            obj.set_taborder("1");
            obj.set_text("h 22");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.Div00.form.div_Search02_00_00.addChild(obj.name, obj);

            obj = new Tab("Tab00","20","22",null,null,"20","15",null,null,null,null,this.Div00.form.div_Search02_00_00.form);
            obj.set_taborder("2");
            obj.set_tabindex("0");
            obj.getSetter("scrollbars").set("autoboth");
            obj.set_cssclass("tab_WF_comp");
            obj.set_tabbuttonheight("34");
            this.Div00.form.div_Search02_00_00.addChild(obj.name, obj);

            obj = new Tabpage("tabpage1",this.Div00.form.div_Search02_00_00.form.Tab00);
            obj.set_text("그리드입력");
            this.Div00.form.div_Search02_00_00.form.Tab00.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","0",null,null,"0","0",null,null,null,null,this.Div00.form.div_Search02_00_00.form.Tab00.tabpage1.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_list");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"114\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"385\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"34\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"신청번호\"/><Cell col=\"2\" text=\"신청일\"/><Cell col=\"3\" text=\"결재상태\"/><Cell col=\"4\" text=\"요청부서\"/><Cell col=\"5\" text=\"신청자\"/><Cell col=\"6\" text=\"신청금액\"/><Cell col=\"7\" text=\"제목\"/></Band><Band id=\"body\"><Cell text=\"bind:NUM\"/><Cell col=\"1\" text=\"bind:RQST_NO\" displaytype=\"editcontrol\" edittype=\"text\"/><Cell col=\"2\" text=\"bind:RQST_DT\" displaytype=\"calendarcontrol\" edittype=\"text\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"3\" text=\"bind:APV_STAT_NM\" displaytype=\"editcontrol\" edittype=\"text\"/><Cell col=\"4\" text=\"bind:RQST_DEPT_NM\" displaytype=\"combocontrol\" edittype=\"combo\"/><Cell col=\"5\" text=\"bind:RQST_NM\" displaytype=\"none\" edittype=\"text\"/><Cell col=\"6\" text=\"bind:RQST_AMT\" displaytype=\"editcontrol\" edittype=\"text\"/><Cell col=\"7\" text=\"bind:SBJ\" displaytype=\"editcontrol\" edittype=\"text\"/></Band></Format></Formats>");
            this.Div00.form.div_Search02_00_00.form.Tab00.tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("tabpage2",this.Div00.form.div_Search02_00_00.form.Tab00);
            obj.set_text("일반입력");
            this.Div00.form.div_Search02_00_00.form.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("tabpage3",this.Div00.form.div_Search02_00_00.form.Tab00);
            obj.set_text("파일첨부");
            this.Div00.form.div_Search02_00_00.form.Tab00.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_00_01","70",null,"60","15",null,"0",null,null,null,null,this.Div00.form.div_Search02_00_00.form);
            obj.set_taborder("3");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.Div00.form.div_Search02_00_00.addChild(obj.name, obj);

            obj = new Static("Static07_00","20","23","1","42",null,null,null,null,null,null,this.Div00.form.div_Search02_00_00.form);
            obj.set_taborder("4");
            obj.set_background("#dddddd");
            this.Div00.form.div_Search02_00_00.addChild(obj.name, obj);

            obj = new Static("Static10_00",null,"0","20",null,"0","0",null,null,null,null,this.Div00.form.div_Search02_00_00.form);
            obj.set_taborder("5");
            obj.set_text("w20");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.Div00.form.div_Search02_00_00.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_01_00_00","249",null,"103","25",null,"51",null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_popClose",null,null,"65","28","267","23",null,null,null,null,this.Div00.form);
            obj.set_text("닫기");
            obj.set_cssclass("");
            obj.set_visible("true");
            obj.set_taborder("9");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static07_00","30","404","80","10",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form.div_Search.form
            obj = new Layout("default","",1032,72,this.Div00.form.div_Search.form,function(p){});
            this.Div00.form.div_Search.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form.div_Search02_00.form
            obj = new Layout("default","",1032,72,this.Div00.form.div_Search02_00.form,function(p){});
            this.Div00.form.div_Search02_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form.div_Search02_00_00.form.Tab00.tabpage1.form
            obj = new Layout("default","",1032,392,this.Div00.form.div_Search02_00_00.form.Tab00.tabpage1.form,function(p){});
            this.Div00.form.div_Search02_00_00.form.Tab00.tabpage1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form.div_Search02_00_00.form.Tab00.tabpage2
            obj = new Layout("default","",0,0,this.Div00.form.div_Search02_00_00.form.Tab00.tabpage2.form,function(p){});
            this.Div00.form.div_Search02_00_00.form.Tab00.tabpage2.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form.div_Search02_00_00.form.Tab00.tabpage3
            obj = new Layout("default","",0,0,this.Div00.form.div_Search02_00_00.form.Tab00.tabpage3.form,function(p){});
            this.Div00.form.div_Search02_00_00.form.Tab00.tabpage3.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form.div_Search02_00_00.form
            obj = new Layout("default","",1032,72,this.Div00.form.div_Search02_00_00.form,function(p){});
            this.Div00.form.div_Search02_00_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Div00.form.div_Search.form.SCH_RQST_NO","value","ds_search","SCH_RQST_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Div00.form.div_Search.form.SCH_RQST_DT","value","ds_search","SCH_RQST_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Div00.form.div_Search.form.SCH_RQST_ID","value","ds_search","SCH_RQST_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","Div00.form.div_Search.form.SCH_APV_STAT_CD","value","ds_search","SCH_APV_STAT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","Div00.form.div_Search.form.SCH_LAST_UPT_NM","value","ds_search","SCH_LAST_UPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","Div00.form.div_Search.form.SCH_LAST_UPT_DT","value","ds_search","SCH_LAST_UPT_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","Div00.form.div_Search.form.SCH_DEPT_CD","value","ds_search","SCH_RQST_DEPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","Div00.form.div_Search.form.SCH_RQST_NM","value","ds_search","SCH_RQST_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","Div00.form.div_Search.form.SCH_CAL_MON","value","ds_search","SCH_CAL_MON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","Div00.form.div_Search.form.Radio00","value","ds_main","INOUT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","Div00.form.div_Search.form.CheckBox00","value","ds_main","COM_CAR_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","Div00.form.div_Search.form.Spin00","value","ds_main","YY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","Div00.form.div_Search02_00.form.SCH_RQST_NO","value","ds_search","SCH_RQST_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","Div00.form.div_Search02_00.form.SCH_RQST_DT","value","ds_search","SCH_RQST_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","Div00.form.div_Search02_00.form.SCH_RQST_ID","value","ds_search","SCH_RQST_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","Div00.form.div_Search02_00.form.SCH_APV_STAT_CD","value","ds_search","SCH_APV_STAT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","Div00.form.div_Search02_00.form.SCH_LAST_UPT_NM","value","ds_search","SCH_LAST_UPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","Div00.form.div_Search02_00.form.SCH_LAST_UPT_DT","value","ds_search","SCH_LAST_UPT_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","Div00.form.div_Search02_00.form.SCH_DEPT_CD","value","ds_search","SCH_RQST_DEPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","Div00.form.div_Search02_00.form.SCH_RQST_NM","value","ds_search","SCH_RQST_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","Div00.form.div_Search02_00.form.SCH_CAL_MON","value","ds_search","SCH_CAL_MON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","Div00.form.div_Search02_00.form.Radio00","value","ds_main","INOUT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","Div00.form.div_Search02_00.form.CheckBox00","value","ds_main","COM_CAR_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","Div00.form.div_Search02_00.form.Spin00","value","ds_main","YY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","Div00.form.div_Search02_00.form.Combo00","value","ds_main","TP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","Div00.form.div_Search02_00.form.Edit05","value","ds_main","RQST_AMT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","Div00.form.div_Search02_00.form.RQST_NM","value","ds_main","RQST_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","Div00.form.div_Search02_00.form.TextArea01","value","ds_main","CONT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","Div00.form.div_Search02_00.form.SBJ","value","ds_main","SBJ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","Div00.form.div_Search02_00.form.FRM_DT","value","ds_main","FRM_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","Div00.form.div_Search02_00.form.TO_DT","value","ds_main","TO_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","Div00.form.div_Search02_00.form.rqstNo","value","ds_main","RQST_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","Div00.form.div_Search02_00.form.commCd","value","ds_main","COMM_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Div00.form.Static04_00_00_01.addEventHandler("onclick",this.Static31_onclick,this);
            this.Div00.form.Static04_00_00_01_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.Div00.form.div_Search.form.Static00.addEventHandler("onclick",this.div_Search_Static00_onclick,this);
            this.Div00.form.div_Search.form.sch_RQST_NO.addEventHandler("onclick",this.div_Search_Static01_onclick,this);
            this.Div00.form.div_Search.form.sch_LAST_UPT_NM.addEventHandler("onclick",this.div_Search_Static01_onclick,this);
            this.Div00.form.div_Search.form.SCH_RQST_NO.addEventHandler("oneditclick",this.div_Search_SCH_RQST_NO_oneditclick,this);
            this.Div00.form.div_Search.form.Static04_00_00_01.addEventHandler("onclick",this.Static31_onclick,this);
            this.Div00.form.div_Search.form.Static12.addEventHandler("onclick",this.div_Search_Static12_onclick,this);
            this.Div00.form.div_Search02_00.form.sta_dtlInfo.addEventHandler("onclick",this.Static09_onclick,this);
            this.Div00.form.div_Search02_00.form.Static04_00_00_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.Div00.form.div_Search02_00.form.in_YY.addEventHandler("onclick",this.div_Search02_00_in_YY_onclick,this);
            this.Div00.form.div_Search02_00.form.Static04_00_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.Div00.form.div_Search02_00_00.form.Static04_00_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.Div00.form.div_Search02_00_00.form.Tab00.addEventHandler("onchanged",this.Tab00_onchanged,this);
            this.Div00.form.div_Search02_00_00.form.Static04_00_00_00_01.addEventHandler("onclick",this.Static31_onclick,this);
            this.Div00.form.div_Search02_00_00.form.Static07_00.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.Div00.form.Static04_00_00_01_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.Div00.form.btn_popClose.addEventHandler("onclick",this.btn_registration_onclick,this);
        };
        this.loadIncludeScript("pat_popup600.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
