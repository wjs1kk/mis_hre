(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CMS_1040M");
            this.set_cssclass("frm_WF_comp");
            this.set_titletext("회원가입 승인 및 담당과제 관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,1050);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj.set_updatecontrol("true");
            obj._setContents("<ColumnInfo><Column id=\"memberNmKr\" type=\"STRING\" size=\"256\"/><Column id=\"inOrOutFlag\" type=\"STRING\" size=\"256\"/><Column id=\"joinAprvStts\" type=\"STRING\" size=\"256\"/><Column id=\"whdwlYn\" type=\"STRING\" size=\"256\"/><Column id=\"applyDt\" type=\"STRING\" size=\"256\"/><Column id=\"applyFromDt\" type=\"STRING\" size=\"256\"/><Column id=\"applyToDt\" type=\"STRING\" size=\"256\"/><Column id=\"memberId\" type=\"STRING\" size=\"256\"/><Column id=\"mbrNo\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsInOut", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"value\" type=\"STRING\" size=\"256\"/><Column id=\"text\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUserInfo", this);
            obj.set_updatecontrol("true");
            obj._setContents("<ColumnInfo><Column id=\"memberId\" type=\"STRING\" size=\"256\"/><Column id=\"memberNmKr\" type=\"STRING\" size=\"256\"/><Column id=\"memberNmEn\" type=\"STRING\" size=\"256\"/><Column id=\"ogdpInstCd\" type=\"STRING\" size=\"256\"/><Column id=\"ogdpInstNm\" type=\"STRING\" size=\"256\"/><Column id=\"emlAddr\" type=\"STRING\" size=\"256\"/><Column id=\"ofcTelno\" type=\"STRING\" size=\"256\"/><Column id=\"mblTelno\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"prvcClctAgreYn\" type=\"STRING\" size=\"256\"/><Column id=\"prvcPvsnAgreYn\" type=\"STRING\" size=\"256\"/><Column id=\"applyDt\" type=\"STRING\" size=\"256\"/><Column id=\"corpYn\" type=\"STRING\" size=\"256\"/><Column id=\"applyCont\" type=\"STRING\" size=\"256\"/><Column id=\"joinAprvStts\" type=\"STRING\" size=\"256\"/><Column id=\"whdwlYn\" type=\"STRING\" size=\"256\"/><Column id=\"inOrOutFlag\" type=\"STRING\" size=\"256\"/><Column id=\"mbrNo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUserProject", this);
            obj.set_updatecontrol("true");
            obj._setContents("<ColumnInfo><Column id=\"rowCheck\" type=\"STRING\" size=\"256\"/><Column id=\"rowStatus\" type=\"STRING\" size=\"256\"/><Column id=\"mbrNo\" type=\"STRING\" size=\"256\"/><Column id=\"memberId\" type=\"STRING\" size=\"256\"/><Column id=\"projectNo\" type=\"STRING\" size=\"256\"/><Column id=\"projectNm\" type=\"STRING\" size=\"256\"/><Column id=\"projectType\" type=\"STRING\" size=\"256\"/><Column id=\"projectOverview\" type=\"STRING\" size=\"256\"/><Column id=\"projectStartDt\" type=\"STRING\" size=\"256\"/><Column id=\"projectEndDt\" type=\"STRING\" size=\"256\"/><Column id=\"projectDuration\" type=\"STRING\" size=\"256\"/><Column id=\"projectBudget\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAprvStts", this);
            obj._setContents("<ColumnInfo><Column id=\"value\" type=\"STRING\" size=\"256\"/><Column id=\"text\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsProjectType", this);
            obj._setContents("<ColumnInfo><Column id=\"value\" type=\"STRING\" size=\"256\"/><Column id=\"text\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCorpYn", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"value\" type=\"STRING\" size=\"256\"/><Column id=\"text\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"text\"/><Col id=\"value\"/></Row><Row><Col id=\"text\">예</Col><Col id=\"value\">Y</Col></Row><Row><Col id=\"text\">아니오</Col><Col id=\"value\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btnSearch",null,"12","65","28","120",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle","50","10","500","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("회원가입 승인 및 담당과제 관리");
            obj.set_cssclass("sta_WF_compTitle01");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","50","50",null,"110","50",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("divSrch","20","45",null,null,"20","15",null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_cssclass("div_WF_panel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta001","39","10","100","30",null,null,null,null,null,null,this.divSearch.form.divSrch.form);
            obj.set_taborder("0");
            obj.set_text("신청일");
            obj.set_cssclass("sta_WF_condition01");
            this.divSearch.form.divSrch.addChild(obj.name, obj);

            obj = new Static("sta002","452","10","100","30",null,null,null,null,null,null,this.divSearch.form.divSrch.form);
            obj.set_taborder("1");
            obj.set_text("신청자명");
            obj.set_cssclass("sta_WF_condition01");
            this.divSearch.form.divSrch.addChild(obj.name, obj);

            obj = new Edit("edtMemberNm","585","12","220","26",null,null,null,null,null,null,this.divSearch.form.divSrch.form);
            obj.set_taborder("3");
            this.divSearch.form.divSrch.addChild(obj.name, obj);

            obj = new Calendar("calDtTo","301","12","110","26",null,null,null,null,null,null,this.divSearch.form.divSrch.form);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_weekformat("일 월 화 수 목 금 토");
            obj.set_cssclass("essential");
            this.divSearch.form.divSrch.addChild(obj.name, obj);

            obj = new Calendar("calDtFrom","171","12","110","26",null,null,null,null,null,null,this.divSearch.form.divSrch.form);
            obj.set_taborder("4");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            obj.set_readonly("false");
            obj.set_cssclass("essential");
            this.divSearch.form.divSrch.addChild(obj.name, obj);

            obj = new Static("Static10_00_00","411","-5","40",null,null,"0",null,null,null,null,this.divSearch.form.divSrch.form);
            obj.set_taborder("5");
            obj.set_text("w40");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divSearch.form.divSrch.addChild(obj.name, obj);

            obj = new Static("Static10_00_00_01","805","-5","40",null,null,"0",null,null,null,null,this.divSearch.form.divSrch.form);
            obj.set_taborder("6");
            obj.set_text("w40");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divSearch.form.divSrch.addChild(obj.name, obj);

            obj = new Static("sta003","847","10","100","30",null,null,null,null,null,null,this.divSearch.form.divSrch.form);
            obj.set_taborder("7");
            obj.set_text("망구분");
            obj.set_cssclass("sta_WF_condition01");
            this.divSearch.form.divSrch.addChild(obj.name, obj);

            obj = new Static("sta006","287","11","15","24",null,null,null,null,null,null,this.divSearch.form.divSrch.form);
            obj.set_taborder("8");
            obj.set_text("~");
            this.divSearch.form.divSrch.addChild(obj.name, obj);

            obj = new Static("Static16","151","0","20",null,null,"0",null,null,null,null,this.divSearch.form.divSrch.form);
            obj.set_taborder("9");
            obj.set_text("w 10");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.divSearch.form.divSrch.addChild(obj.name, obj);

            obj = new Static("Static16_00","565","0","20",null,null,"0",null,null,null,null,this.divSearch.form.divSrch.form);
            obj.set_taborder("10");
            obj.set_text("w 10");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.divSearch.form.divSrch.addChild(obj.name, obj);

            obj = new Static("Static16_00_00","960","0","20",null,null,"0",null,null,null,null,this.divSearch.form.divSrch.form);
            obj.set_taborder("11");
            obj.set_text("w 10");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.divSearch.form.divSrch.addChild(obj.name, obj);

            obj = new Static("sta004","1172","10","100","30",null,null,null,null,null,null,this.divSearch.form.divSrch.form);
            obj.set_taborder("12");
            obj.set_text("승인상태");
            obj.set_cssclass("sta_WF_condition01");
            this.divSearch.form.divSrch.addChild(obj.name, obj);

            obj = new Static("Static10_00_00_01_00","1130","-5","40",null,null,"0",null,null,null,null,this.divSearch.form.divSrch.form);
            obj.set_taborder("13");
            obj.set_text("w40");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divSearch.form.divSrch.addChild(obj.name, obj);

            obj = new Static("Static16_00_00_00","1285","0","20",null,null,"0",null,null,null,null,this.divSearch.form.divSrch.form);
            obj.set_taborder("14");
            obj.set_text("w 10");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.divSearch.form.divSrch.addChild(obj.name, obj);

            obj = new Static("Static10_00_00_01_00_00","1455","-5","40",null,null,"0",null,null,null,null,this.divSearch.form.divSrch.form);
            obj.set_taborder("15");
            obj.set_text("w40");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divSearch.form.divSrch.addChild(obj.name, obj);

            obj = new Static("sta005","1497","10","100","30",null,null,null,null,null,null,this.divSearch.form.divSrch.form);
            obj.set_taborder("16");
            obj.set_text("탈퇴여부");
            obj.set_cssclass("sta_WF_condition01");
            this.divSearch.form.divSrch.addChild(obj.name, obj);

            obj = new Static("Static16_00_00_00_00","1610","0","20",null,null,"0",null,null,null,null,this.divSearch.form.divSrch.form);
            obj.set_taborder("17");
            obj.set_text("w 10");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.divSearch.form.divSrch.addChild(obj.name, obj);

            obj = new CheckBox("chWhdwlYn","1630","13","100","24",null,null,null,null,null,null,this.divSearch.form.divSrch.form);
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            obj.set_taborder("18");
            obj.set_cssclass("");
            this.divSearch.form.divSrch.addChild(obj.name, obj);

            obj = new Combo("cboJoinAprvStts","1305","12","150","26",null,null,null,null,null,null,this.divSearch.form.divSrch.form);
            obj.set_taborder("19");
            obj.set_innerdataset("dsAprvStts");
            obj.set_codecolumn("value");
            obj.set_datacolumn("text");
            obj.set_text("");
            obj.set_index("-1");
            this.divSearch.form.divSrch.addChild(obj.name, obj);

            obj = new Combo("cboInOutFlag","980","12","150","26",null,null,null,null,null,null,this.divSearch.form.divSrch.form);
            obj.set_taborder("20");
            obj.set_innerdataset("dsInOut");
            obj.set_codecolumn("value");
            obj.set_datacolumn("text");
            obj.set_value("");
            obj.set_index("0");
            this.divSearch.form.divSrch.addChild(obj.name, obj);

            obj = new Static("Static10","0","0","20","173",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("w20");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_00","20","0","60","18",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("h 18");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTitle","20","11","250","27",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_subTitle01");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_00_00","110","0","60","45",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("h 45");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divJoinList","50","205",null,"400","50",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_00","20","0","60","18",null,null,null,null,null,null,this.divJoinList.form);
            obj.set_taborder("0");
            obj.set_text("h 18");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divJoinList.addChild(obj.name, obj);

            obj = new Grid("grdMember","20","45",null,null,"20","20",null,null,null,null,this.divJoinList.form);
            obj.set_taborder("2");
            obj.set_binddataset("dsUserInfo");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_autoupdatetype("itemselect");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\" band=\"left\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"350\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"46\" band=\"head\"/><Row size=\"33\"/></Rows><Band id=\"head\"><Cell text=\"NO\"/><Cell col=\"1\" text=\"망구분\"/><Cell col=\"2\" text=\"신청일시\"/><Cell col=\"3\" text=\"신청자명(법인명)\"/><Cell col=\"4\" text=\"신청자 ID\"/><Cell col=\"5\" text=\"법인여부\"/><Cell col=\"6\" text=\"신청내용\"/><Cell col=\"7\" text=\"승인상태\"/><Cell col=\"8\" text=\"탈퇴여부\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\" text=\"expr:currow+1\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:inOrOutFlag\" combodataset=\"dsInOut\" combocodecol=\"value\" combodatacol=\"text\" displaytype=\"combotext\"/><Cell col=\"2\" text=\"bind:applyDt\" edittype=\"none\" displaytype=\"normal\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"3\" text=\"bind:memberNmKr\" edittype=\"none\" editmaxlength=\"1000\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:memberId\" edittype=\"none\" textAlign=\"center\" editmaxlength=\"300\"/><Cell col=\"5\" text=\"bind:corpYn\" edittype=\"none\" editmaxlength=\"4000\" displaytype=\"combotext\" combodataset=\"dsCorpYn\" combocodecol=\"value\" combodatacol=\"text\"/><Cell col=\"6\" text=\"bind:applyCont\" edittype=\"none\" textAlign=\"left\" editmaxlength=\"1000\"/><Cell col=\"7\" text=\"bind:joinAprvStts\" combodataset=\"dsAprvStts\" combocodecol=\"value\" combodatacol=\"text\" displaytype=\"combotext\"/><Cell col=\"8\" text=\"bind:whdwlYn\" edittype=\"none\" editmaxlength=\"100\"/></Band></Format></Formats>");
            this.divJoinList.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_00_00","140","0","60","45",null,null,null,null,null,null,this.divJoinList.form);
            obj.set_taborder("3");
            obj.set_text("h 45");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divJoinList.addChild(obj.name, obj);

            obj = new Static("Static10","0","0","20","173",null,null,null,null,null,null,this.divJoinList.form);
            obj.set_taborder("4");
            obj.set_text("w20");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divJoinList.addChild(obj.name, obj);

            obj = new Static("staTitle","20","11","250","27",null,null,null,null,null,null,this.divJoinList.form);
            obj.set_taborder("1");
            obj.set_text("회원가입 승인 목록");
            obj.set_cssclass("sta_WF_subTitle01");
            this.divJoinList.addChild(obj.name, obj);

            obj = new Static("staGridRowCnt","199","12","149","27",null,null,null,null,null,null,this.divJoinList.form);
            obj.set_taborder("5");
            obj.set_text("(총 0건)");
            obj.set_cssclass("sta_WF_subResult");
            this.divJoinList.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"12","65","28","50",null,null,null,null,null,this);
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Save");
            obj.set_taborder("4");
            obj.set_enable("true");
            obj.set_escapebutton("false");
            this.addChild(obj.name, obj);

            obj = new Div("divProjectList","50","619",null,"400","50",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_00","20","0","60","18",null,null,null,null,null,null,this.divProjectList.form);
            obj.set_taborder("0");
            obj.set_text("h 18");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divProjectList.addChild(obj.name, obj);

            obj = new Grid("grdProject","20","45",null,null,"20","20",null,null,null,null,this.divProjectList.form);
            obj.set_taborder("2");
            obj.set_binddataset("dsUserProject");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_autoupdatetype("itemselect");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\" band=\"left\"/><Column size=\"48\" band=\"left\"/><Column size=\"48\" band=\"left\"/><Column size=\"120\"/><Column size=\"350\"/><Column size=\"130\"/><Column size=\"400\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"46\" band=\"head\"/><Row size=\"33\"/></Rows><Band id=\"head\"><Cell text=\"NO\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\"/><Cell col=\"2\" text=\"상태\"/><Cell col=\"3\" text=\"과제번호\"/><Cell col=\"4\" text=\"과제명\"/><Cell col=\"5\" text=\"사업구분\"/><Cell col=\"6\" text=\"과제개요\"/><Cell col=\"7\" text=\"시작일\"/><Cell col=\"8\" text=\"종료일\"/><Cell col=\"9\" text=\"기간\"/><Cell col=\"10\" text=\"예산\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\" text=\"expr:currow+1\" textAlign=\"center\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" text=\"bind:rowCheck\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"bind:rowStatus\"/><Cell col=\"3\" text=\"bind:projectNo\"/><Cell col=\"4\" text=\"bind:projectNm\" edittype=\"none\" displaytype=\"normal\" calendardateformat=\"yyyy-MM-dd\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:projectType\" edittype=\"none\" editmaxlength=\"1000\" textAlign=\"center\" displaytype=\"combotext\" combodataset=\"dsProjectType\" combocodecol=\"value\" combodatacol=\"text\"/><Cell col=\"6\" text=\"bind:projectOverview\" edittype=\"none\" textAlign=\"left\" editmaxlength=\"300\" tooltiptext=\"bind:projectOverview\"/><Cell col=\"7\" text=\"bind:projectStartDt\" edittype=\"none\" editmaxlength=\"4000\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"8\" text=\"bind:projectEndDt\" edittype=\"none\" textAlign=\"center\" editmaxlength=\"1000\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"9\" text=\"bind:projectDuration\"/><Cell col=\"10\" text=\"bind:projectBudget\" edittype=\"none\" editmaxlength=\"100\" textAlign=\"right\"/></Band></Format></Formats>");
            this.divProjectList.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_00_00","140","0","60","45",null,null,null,null,null,null,this.divProjectList.form);
            obj.set_taborder("3");
            obj.set_text("h 45");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divProjectList.addChild(obj.name, obj);

            obj = new Static("Static10","0","0","20","173",null,null,null,null,null,null,this.divProjectList.form);
            obj.set_taborder("4");
            obj.set_text("w20");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divProjectList.addChild(obj.name, obj);

            obj = new Static("staTitle","20","11","250","27",null,null,null,null,null,null,this.divProjectList.form);
            obj.set_taborder("1");
            obj.set_text("담당과제 목록");
            obj.set_cssclass("sta_WF_subTitle01");
            this.divProjectList.addChild(obj.name, obj);

            obj = new Static("staGridRowCnt","169","12","149","27",null,null,null,null,null,null,this.divProjectList.form);
            obj.set_taborder("5");
            obj.set_text("(총 0건)");
            obj.set_cssclass("sta_WF_subResult");
            this.divProjectList.addChild(obj.name, obj);

            obj = new Button("btnAdd",null,"14","100","26","125",null,null,null,null,null,this.divProjectList.form);
            obj.set_taborder("6");
            obj.set_text("과제 추가");
            obj.set_cssclass("btn_WF_icoAdd");
            this.divProjectList.addChild(obj.name, obj);

            obj = new Button("btnDeleteRow",null,"14","100","26","20",null,null,null,null,null,this.divProjectList.form);
            obj.set_taborder("7");
            obj.set_text("과제 삭제");
            obj.set_cssclass("btn_WF_icoCancel");
            this.divProjectList.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form.divSrch.form
            obj = new Layout("default","",0,0,this.divSearch.form.divSrch.form,function(p){});
            this.divSearch.form.divSrch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divJoinList.form
            obj = new Layout("default","",0,0,this.divJoinList.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static04_00_00_00.set_taborder("0");
                p.Static04_00_00_00.set_text("h 18");
                p.Static04_00_00_00.set_visible("false");
                p.Static04_00_00_00.set_background("aqua");
                p.Static04_00_00_00.set_color("blue");
                p.Static04_00_00_00.set_textAlign("center");
                p.Static04_00_00_00.set_verticalAlign("middle");
                p.Static04_00_00_00.set_opacity("0.7");
                p.Static04_00_00_00.set_font("normal 12px/normal \"Arial\"");
                p.Static04_00_00_00.move("20","0","60","18",null,null);

                p.grdMember.set_taborder("2");
                p.grdMember.set_binddataset("dsUserInfo");
                p.grdMember.set_autofittype("col");
                p.grdMember.set_autoenter("select");
                p.grdMember.set_autoupdatetype("itemselect");
                p.grdMember.move("20","45",null,null,"20","20");

                p.Static04_00_00_00_00.set_taborder("3");
                p.Static04_00_00_00_00.set_text("h 45");
                p.Static04_00_00_00_00.set_visible("false");
                p.Static04_00_00_00_00.set_background("aqua");
                p.Static04_00_00_00_00.set_color("blue");
                p.Static04_00_00_00_00.set_textAlign("center");
                p.Static04_00_00_00_00.set_verticalAlign("middle");
                p.Static04_00_00_00_00.set_opacity("0.7");
                p.Static04_00_00_00_00.set_font("normal 12px/normal \"Arial\"");
                p.Static04_00_00_00_00.move("140","0","60","45",null,null);

                p.Static10.set_taborder("4");
                p.Static10.set_text("w20");
                p.Static10.set_visible("false");
                p.Static10.set_background("fuchsia");
                p.Static10.set_color("blue");
                p.Static10.set_textAlign("center");
                p.Static10.set_verticalAlign("middle");
                p.Static10.set_opacity("0.7");
                p.Static10.set_font("normal 12px/normal \"Arial\"");
                p.Static10.move("0","0","20","173",null,null);

                p.staTitle.set_taborder("1");
                p.staTitle.set_text("회원가입 승인 목록");
                p.staTitle.set_cssclass("sta_WF_subTitle01");
                p.staTitle.move("20","11","250","27",null,null);

                p.staGridRowCnt.set_taborder("5");
                p.staGridRowCnt.set_text("(총 0건)");
                p.staGridRowCnt.set_cssclass("sta_WF_subResult");
                p.staGridRowCnt.move("199","12","149","27",null,null);
            	}
            );
            this.divJoinList.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divJoinList.form
            obj = new Layout("screen00","",0,0,this.divJoinList.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divJoinList.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divProjectList.form
            obj = new Layout("default","",0,0,this.divProjectList.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static04_00_00_00.set_taborder("0");
                p.Static04_00_00_00.set_text("h 18");
                p.Static04_00_00_00.set_visible("false");
                p.Static04_00_00_00.set_background("aqua");
                p.Static04_00_00_00.set_color("blue");
                p.Static04_00_00_00.set_textAlign("center");
                p.Static04_00_00_00.set_verticalAlign("middle");
                p.Static04_00_00_00.set_opacity("0.7");
                p.Static04_00_00_00.set_font("normal 12px/normal \"Arial\"");
                p.Static04_00_00_00.move("20","0","60","18",null,null);

                p.grdProject.set_taborder("2");
                p.grdProject.set_binddataset("dsUserProject");
                p.grdProject.set_autofittype("col");
                p.grdProject.set_autoenter("select");
                p.grdProject.set_autoupdatetype("itemselect");
                p.grdProject.move("20","45",null,null,"20","20");

                p.Static04_00_00_00_00.set_taborder("3");
                p.Static04_00_00_00_00.set_text("h 45");
                p.Static04_00_00_00_00.set_visible("false");
                p.Static04_00_00_00_00.set_background("aqua");
                p.Static04_00_00_00_00.set_color("blue");
                p.Static04_00_00_00_00.set_textAlign("center");
                p.Static04_00_00_00_00.set_verticalAlign("middle");
                p.Static04_00_00_00_00.set_opacity("0.7");
                p.Static04_00_00_00_00.set_font("normal 12px/normal \"Arial\"");
                p.Static04_00_00_00_00.move("140","0","60","45",null,null);

                p.Static10.set_taborder("4");
                p.Static10.set_text("w20");
                p.Static10.set_visible("false");
                p.Static10.set_background("fuchsia");
                p.Static10.set_color("blue");
                p.Static10.set_textAlign("center");
                p.Static10.set_verticalAlign("middle");
                p.Static10.set_opacity("0.7");
                p.Static10.set_font("normal 12px/normal \"Arial\"");
                p.Static10.move("0","0","20","173",null,null);

                p.staTitle.set_taborder("1");
                p.staTitle.set_text("담당과제 목록");
                p.staTitle.set_cssclass("sta_WF_subTitle01");
                p.staTitle.move("20","11","250","27",null,null);

                p.staGridRowCnt.set_taborder("5");
                p.staGridRowCnt.set_text("(총 0건)");
                p.staGridRowCnt.set_cssclass("sta_WF_subResult");
                p.staGridRowCnt.move("169","12","149","27",null,null);

                p.btnAdd.set_taborder("6");
                p.btnAdd.set_text("과제 추가");
                p.btnAdd.set_cssclass("btn_WF_icoAdd");
                p.btnAdd.move(null,"14","100","26","125",null);

                p.btnDeleteRow.set_taborder("7");
                p.btnDeleteRow.set_text("과제 삭제");
                p.btnDeleteRow.set_cssclass("btn_WF_icoCancel");
                p.btnDeleteRow.move(null,"14","100","26","20",null);
            	}
            );
            this.divProjectList.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divProjectList.form
            obj = new Layout("screen00","",0,0,this.divProjectList.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divProjectList.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1920,1050,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_cssclass("frm_WF_comp");
                p.set_titletext("회원가입 승인 및 담당과제 관리");

                p.btnSearch.set_taborder("0");
                p.btnSearch.set_text("조회");
                p.btnSearch.move(null,"12","65","28","120",null);

                p.staTitle.set_taborder("1");
                p.staTitle.set_text("회원가입 승인 및 담당과제 관리");
                p.staTitle.set_cssclass("sta_WF_compTitle01");
                p.staTitle.move("50","10","500","30",null,null);

                p.divSearch.set_taborder("2");
                p.divSearch.set_text("");
                p.divSearch.move("50","50",null,"110","50",null);

                p.divJoinList.set_taborder("3");
                p.divJoinList.set_text("");
                p.divJoinList.move("50","205",null,"400","50",null);

                p.btnSave.set_text("저장");
                p.btnSave.set_cssclass("btn_WF_Save");
                p.btnSave.set_taborder("4");
                p.btnSave.set_enable("true");
                p.btnSave.set_escapebutton("false");
                p.btnSave.move(null,"12","65","28","50",null);

                p.divProjectList.set_taborder("5");
                p.divProjectList.set_text("");
                p.divProjectList.move("50","619",null,"400","50",null);
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
            obj = new BindItem("item0","divSearch.form.divSrch.form.calDtFrom","value","dsSearch","applyFromDt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.divSrch.form.calDtTo","value","dsSearch","applyToDt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.divSrch.form.edtMemberNm","value","dsSearch","memberNmKr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.divSrch.form.cboInOutFlag","value","dsSearch","inOrOutFlag");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.divSrch.form.cboJoinAprvStts","value","dsSearch","joinAprvStts");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.divSrch.form.chWhdwlYn","value","dsSearch","whdwlYn");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("CMS_1040M.xfdl","lib::common.xjs");
        this.registerScript("CMS_1040M.xfdl", function() {
        /**
        *  messageManage
        *  MenuPath      -
        *  FileName      memberAprProjectManage.xfdl
        *  Creator 	     cheonsy
        *  CreateDate    2023.03.29
        *  Desction      회원가입 승인 및 담당과제 관리
        ************** 소스 수정 이력 ***********************************************
        *  date          Modifier    Description
        *******************************************************************************
        *  2023.03.29    cheonsy 	 최초 생성
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
        	this.gfnLoadCombo("loadCombo", "dsAprvStts=CMS:APRV_STTS:A dsProjectType=TMP:PROJECT_TY:C dsInOut=CMS:IN_OUT_FLAG:A", "fnCallBack");
        	this.fnSearch();
        };

        /************************************************************************************************
        * TRANSACTION 서비스 호출 처리
        ************************************************************************************************/
        /**
         * description 회원가입 승인 목록 조회
        */
        this.fnSearch = function()
        {
        	this.gfnTransaction("getAprUserList", "cms/getAprUserList.do", "dsSearch", "dsUserInfo", "", "fnCallBack");
        };

        /**
         * description 담당과제 목록 조회
        */
        this.fnSearchProject = function()
        {
        	this.gfnTransaction("getUserProject", "cms/getUserProject.do", "dsSearch", "dsUserProject", "", "fnCallBack");
        };

        /**
         * description 사용자 담당과제 저장
        */
        this.fnSave = function()
        {
        	this.gfnTransaction("saveUserProject", "cms/saveUserProject.do", "dsUserProject", "", "", "fnCallBack");
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
        		case "getAprUserList":
        			//총 건수 계산
        			this.gfnRowCount(this.dsUserInfo, this.divJoinList.form.staGridRowCnt);
        		break;
        		case "getUserProject":
        			//총 건수 계산
        			this.gfnRowCount(this.dsUserProject, this.divProjectList.form.staGridRowCnt);
        		break;
        		case "saveUserProject":
        			if(this.callbackMsg == "success"){
        				this.gfnAlert("CM_MSG_SAVE_SUCCESS");  // 저장 되었습니다.
        				this.dsSearch.clearData();
        				this.dsSearch.addRow();
        				this.fnSearch();
        			}else{
        				this.gfnAlert("CM_MSG_TEST_3");  // 저장에 실패하였습니다.
        			}
        			//총 건수 계산
        			this.gfnRowCount(this.dsUserProject, this.divProjectList.form.staGridRowCnt);
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
        	console.log('fnPopupAfter: ', sPopupId, ' || ', vArg);
        	switch(sPopupId){
        		case "memberAprManagePopup":	// 사용자 조회 팝업
        			this.fnSearch();
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
        	this.fnSearch();
        };

        /**
         * description 저장버튼 클릭
        */
        this.Div00_btnSave_onclick = function(obj,e)
        {
        	if (!this.gfnIsUpdated(this.dsUserProject)) {
        		this.gfnAlert("CM_MSG_SAVE_NOCHANGE");  // 변경된 내역이 없습니다.
        		return;
        	}

        	this.gfnAlert("CM_CFM_BEFORE_SAVE", "", "", {trueFunc: "fnSave", falseFunc: ""});  // 변경된 내역을 저장 하시겠습니까?
        	return;
        };

        /**
         * description 승인목록 그리드 행 더블클릭
        */
        this.divJoinList_grdMember_oncelldblclick = function(obj,e)
        {
        	var oArg = {  memberId : this.dsUserInfo.getColumn(this.dsUserInfo.rowposition, "memberId")
        				, mbrNo: this.dsUserInfo.getColumn(this.dsUserInfo.rowposition, "mbrNo")
        				, inOrOutFlag: this.dsUserInfo.getColumn(this.dsUserInfo.rowposition, "inOrOutFlag")};
        	this.gfnOpenPopup("memberAprManagePopup", "sys::cms/CMS_1040P_01.xfdl", oArg, "fnPopupAfter", "");
        };

        /**
         * description 과제 추가버튼 클릭
        */
        this.divProjectList_btnAdd_onclick = function(obj,e)
        {
        	if(this.dsUserInfo.getColumn(this.dsUserInfo.rowposition, "joinAprvStts") == "APPROVAL"){
        		var oArg = {  memberId : this.dsUserInfo.getColumn(this.dsUserInfo.rowposition, "memberId")
        					, mbrNo: this.dsUserInfo.getColumn(this.dsUserInfo.rowposition, "mbrNo")};
        		this.gfnOpenPopup("memberProjectManagePopup", "sys::cms/CMS_1040P_02.xfdl", oArg, "fnPopupAfter", "");
        	}else{
        		this.gfnAlert("회원가입 승인상태가 승인인 회원에게만\n 과제를 추가할 수 있습니다.");
        		return;
        	}
        };

        /**
         * description 과제 삭제버튼 클릭
        */
        this.divProjectList_btnDeleteRow_onclick = function(obj,e)
        {
        	this.gfnDeleteRow(this.dsUserProject);
        };

        /**
         * description 엔터키 검색 이벤트
        */
        this.divSearch_divSrch_calDtFrom_onkeyup = function(obj,e)
        {
        	if(e.keycode==13){
        		this.btnSearch_onclick();
        	}
        };

        /**
         * description 승인목록 rowposition 변경 이벤트
        */
        this.dsUserInfo_onrowposchanged = function(obj,e)
        {
        	if(this.dsUserInfo.getColumn(this.dsUserInfo.rowposition, "joinAprvStts") == "APPROVAL"){
        		this.dsSearch.setColumn(0, "memberId", this.dsUserInfo.getColumn(this.dsUserInfo.rowposition, "memberId"));
        		this.dsSearch.setColumn(0, "mbrNo", this.dsUserInfo.getColumn(this.dsUserInfo.rowposition, "mbrNo"));
        		this.fnSearchProject();
        	} else{
        		this.dsUserProject.clearData();
        		this.gfnRowCount(this.dsUserProject, this.Div00_00.form.sta_gridRowCnt);
        	}
        };

        /**
         * description 그리드해드 클릭
        */
        this.divProjectList_grdProject_onheadclick = function(obj,e)
        {
        	this.gfnSetGridCheckAll(obj, e, "rowCheck");
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


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
            this.divSearch.form.divSrch.form.sta001.addEventHandler("onclick",this.divSearch_sta_01_onclick,this);
            this.divSearch.form.divSrch.form.sta002.addEventHandler("onclick",this.divSearch_sta_01_onclick,this);
            this.divSearch.form.divSrch.form.edtMemberNm.addEventHandler("onkeyup",this.divSearch_divSrch_calDtFrom_onkeyup,this);
            this.divSearch.form.divSrch.form.calDtTo.addEventHandler("onkeyup",this.divSearch_divSrch_calDtFrom_onkeyup,this);
            this.divSearch.form.divSrch.form.calDtFrom.addEventHandler("onkeyup",this.divSearch_divSrch_calDtFrom_onkeyup,this);
            this.divSearch.form.divSrch.form.Static10_00_00.addEventHandler("onclick",this.div_Search_Static10_00_onclick,this);
            this.divSearch.form.divSrch.form.Static10_00_00_01.addEventHandler("onclick",this.div_Search_Static10_00_onclick,this);
            this.divSearch.form.divSrch.form.sta003.addEventHandler("onclick",this.divSearch_sta_01_onclick,this);
            this.divSearch.form.divSrch.form.sta004.addEventHandler("onclick",this.divSearch_sta_01_onclick,this);
            this.divSearch.form.divSrch.form.Static10_00_00_01_00.addEventHandler("onclick",this.div_Search_Static10_00_onclick,this);
            this.divSearch.form.divSrch.form.Static10_00_00_01_00_00.addEventHandler("onclick",this.div_Search_Static10_00_onclick,this);
            this.divSearch.form.divSrch.form.sta005.addEventHandler("onclick",this.divSearch_sta_01_onclick,this);
            this.divSearch.form.divSrch.form.chWhdwlYn.addEventHandler("onkeyup",this.divSearch_divSrch_calDtFrom_onkeyup,this);
            this.divSearch.form.divSrch.form.cboJoinAprvStts.addEventHandler("onkeyup",this.divSearch_divSrch_calDtFrom_onkeyup,this);
            this.divSearch.form.divSrch.form.cboInOutFlag.addEventHandler("onkeyup",this.divSearch_divSrch_calDtFrom_onkeyup,this);
            this.divSearch.form.Static04_00_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.divSearch.form.staTitle.addEventHandler("onclick",this.Static09_onclick,this);
            this.divSearch.form.Static04_00_00_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.divJoinList.form.Static04_00_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.divJoinList.form.grdMember.addEventHandler("oncelldblclick",this.divJoinList_grdMember_oncelldblclick,this);
            this.divJoinList.form.Static04_00_00_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.divJoinList.form.staTitle.addEventHandler("onclick",this.Static09_onclick,this);
            this.btnSave.addEventHandler("onclick",this.Div00_btnSave_onclick,this);
            this.divProjectList.form.Static04_00_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.divProjectList.form.grdProject.addEventHandler("onheadclick",this.divProjectList_grdProject_onheadclick,this);
            this.divProjectList.form.Static04_00_00_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.divProjectList.form.staTitle.addEventHandler("onclick",this.Static09_onclick,this);
            this.divProjectList.form.btnAdd.addEventHandler("onclick",this.divProjectList_btnAdd_onclick,this);
            this.divProjectList.form.btnDeleteRow.addEventHandler("onclick",this.divProjectList_btnDeleteRow_onclick,this);
            this.dsUserInfo.addEventHandler("onrowposchanged",this.dsUserInfo_onrowposchanged,this);
        };
        this.loadIncludeScript("CMS_1040M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
