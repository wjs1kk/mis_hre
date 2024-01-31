(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Pattern01");
            this.set_titletext("Pattern01");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,781);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NUM\" type=\"STRING\" size=\"256\"/><Column id=\"RQST_NO\" type=\"STRING\" size=\"256\"/><Column id=\"RQST_DT\" type=\"STRING\" size=\"256\"/><Column id=\"APV_STAT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"APV_STAT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RQST_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RQST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RQST_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"SBJ\" type=\"STRING\" size=\"256\"/><Column id=\"FRM_DT\" type=\"STRING\" size=\"256\"/><Column id=\"TO_DT\" type=\"STRING\" size=\"256\"/><Column id=\"isChecked\" type=\"STRING\" size=\"256\"/><Column id=\"HEAD_STAT_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"RQST_NO\">ACT02202001-0001</Col><Col id=\"RQST_DT\">20200101</Col><Col id=\"APV_STAT_NM\">결재중</Col><Col id=\"APV_STAT_CD\"/><Col id=\"RQST_DEPT_NM\">인사총무팀</Col><Col id=\"RQST_NM\">홍길동</Col><Col id=\"RQST_AMT\">100000</Col><Col id=\"SBJ\">연구활동비 지급신청서활동비 지급신청서활동비 지급신청서활동비 지급신청서</Col><Col id=\"NUM\">1</Col><Col id=\"FRM_DT\">20200101</Col><Col id=\"TO_DT\">20200101</Col><Col id=\"isChecked\">D</Col><Col id=\"HEAD_STAT_CD\">I</Col></Row><Row><Col id=\"NUM\">2</Col><Col id=\"RQST_NO\">ACT02202001-0002</Col><Col id=\"RQST_DT\">20200101</Col><Col id=\"HEAD_STAT_CD\">U</Col></Row><Row><Col id=\"NUM\">3</Col><Col id=\"RQST_NO\">ACT02202001-0003</Col><Col id=\"RQST_DT\">20200101</Col></Row><Row><Col id=\"NUM\">4</Col><Col id=\"RQST_NO\">ACT02202001-0004</Col><Col id=\"RQST_DT\">20200101</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_main", this);
            obj._setContents("<ColumnInfo><Column id=\"FRM_DT\" type=\"STRING\" size=\"256\"/><Column id=\"TO_DT\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"key\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"key\">Y</Col><Col id=\"value\">사용</Col></Row><Row><Col id=\"key\">N</Col><Col id=\"value\">미사용</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_Search","50","58",null,"105","50",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("");
            obj.set_cssclass("div_WF_Transparent");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0",null,null,"0","15",null,null,null,null,this.div_Search.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_bg");
            obj.set_text("");
            this.div_Search.addChild(obj.name, obj);

            obj = new Static("Static01","20","15","100","26",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("1");
            obj.set_text("신청번호");
            obj.set_cssclass("sta_WF_condition01Essential");
            obj.set_usedecorate("true");
            this.div_Search.addChild(obj.name, obj);

            obj = new Static("Static00_00","25.00%","15","100","26",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("2");
            obj.set_text("신청일");
            obj.set_cssclass("sta_WF_condition01");
            this.div_Search.addChild(obj.name, obj);

            obj = new Calendar("Calendar01","Static00_00:10","15","118","26",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("3");
            obj.set_headheight("28");
            obj.set_popupsize("220");
            obj.set_daysize("28 28");
            obj.set_weekformat("일 월 화 수 목 금 토");
            this.div_Search.addChild(obj.name, obj);

            obj = new Static("Static03","50.00%","15","100","26",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("4");
            obj.set_text("신청자");
            obj.set_cssclass("sta_WF_condition01");
            this.div_Search.addChild(obj.name, obj);

            obj = new Edit("MaskEdit01","Static03:10","15","118","26",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("5");
            this.div_Search.addChild(obj.name, obj);

            obj = new Button("Button00","MaskEdit01:5","15","26","26",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_frmSearch");
            this.div_Search.addChild(obj.name, obj);

            obj = new Static("Static05","75.00%","15","100","26",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("7");
            obj.set_text("결재상태");
            obj.set_cssclass("sta_WF_condition01");
            this.div_Search.addChild(obj.name, obj);

            obj = new Combo("Combo00","Static05:10","15","118","26",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("8");
            obj.set_innerdataset("Dataset00");
            obj.set_codecolumn("key");
            obj.set_datacolumn("value");
            this.div_Search.addChild(obj.name, obj);

            obj = new Static("Static07","20","49","100","26",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("9");
            obj.set_text("최종수정자");
            obj.set_cssclass("sta_WF_condition01");
            this.div_Search.addChild(obj.name, obj);

            obj = new Static("Static08","25.00%","49","100","26",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("10");
            obj.set_text("최종수정일");
            obj.set_cssclass("sta_WF_condition01");
            this.div_Search.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","Static08:10","49","118","26",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("11");
            obj.set_headheight("28");
            obj.set_popupsize("220");
            obj.set_daysize("28 28");
            obj.set_weekformat("일 월 화 수 목 금 토");
            this.div_Search.addChild(obj.name, obj);

            obj = new Static("Static09","50.00%","49","100","26",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("12");
            obj.set_text("신청부서");
            obj.set_cssclass("sta_WF_condition01");
            this.div_Search.addChild(obj.name, obj);

            obj = new Edit("MaskEdit02","Static09:10","49","118","26",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("22");
            this.div_Search.addChild(obj.name, obj);

            obj = new Button("Button01","MaskEdit02:5","49","26","26",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("14");
            obj.set_cssclass("btn_WF_frmSearch");
            this.div_Search.addChild(obj.name, obj);

            obj = new Edit("MaskEdit00","Button01:5","49","118","26",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("13");
            this.div_Search.addChild(obj.name, obj);

            obj = new Edit("Edit00","Static01:10","15","250","26",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("15");
            obj.set_cssclass("essential");
            this.div_Search.addChild(obj.name, obj);

            obj = new Edit("Edit01","Static07:10","49","250","26",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("16");
            this.div_Search.addChild(obj.name, obj);

            obj = new Static("Static12","120","0","10","84",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("17");
            obj.set_text("w 10");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_Search.addChild(obj.name, obj);

            obj = new Static("Static11","20","0",null,"15","20",null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("18");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_Search.addChild(obj.name, obj);

            obj = new Static("Static14","20","41",null,"8","20",null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("19");
            obj.set_text("h 8");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_Search.addChild(obj.name, obj);

            obj = new Static("Static15","20","75",null,"15","20",null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("20");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_Search.addChild(obj.name, obj);

            obj = new Static("Static13","1010","15","10","54",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("21");
            obj.set_text("w 10");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_Search.addChild(obj.name, obj);

            obj = new Static("Static17","1465","15","10","60",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("23");
            obj.set_text("w 10");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_Search.addChild(obj.name, obj);

            obj = new Static("Static16_00","555","4","10","68",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("24");
            obj.set_text("w 10");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_Search.addChild(obj.name, obj);

            obj = new Static("Static06_00","0",null,"50","15",null,"0",null,null,null,null,this.div_Search.form);
            obj.set_taborder("25");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_Search.addChild(obj.name, obj);

            obj = new Static("Static12_00","0","0","20","90",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("26");
            obj.set_text("w 20");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_Search.addChild(obj.name, obj);

            obj = new Static("Static12_01","395","0","60","90",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("27");
            obj.set_text("w 60");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_Search.addChild(obj.name, obj);

            obj = new Static("Static12_01_00","850","0","60","90",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("28");
            obj.set_text("w 60");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_Search.addChild(obj.name, obj);

            obj = new Static("Static13_00","1138","15","5","60",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("29");
            obj.set_text("w 5");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_Search.addChild(obj.name, obj);

            obj = new Static("Static13_00_00","1169","15","5","60",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("30");
            obj.set_text("w 5");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_Search.addChild(obj.name, obj);

            obj = new Static("Static12_00_00",null,"0","20","90","0",null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("31");
            obj.set_text("w 20");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_Search.addChild(obj.name, obj);

            obj = new Static("Static12_01_00_00","1305","0","60","90",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("32");
            obj.set_text("w 60");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_Search.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"20","65","28","254",null,null,null,null,null,this);
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Save");
            obj.set_visible("true");
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Button("btn_list",null,"20","65","28","118",null,null,null,null,null,this);
            obj.set_text("목록");
            obj.set_cssclass("");
            obj.set_visible("true");
            obj.set_taborder("8");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delete",null,"20","65","28","186",null,null,null,null,null,this);
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_Delete");
            obj.set_visible("true");
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Button("btn_registration",null,"20","65","28","322",null,null,null,null,null,this);
            obj.set_text("신규");
            obj.set_visible("true");
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title","50","0","500","58",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("기본화면구성");
            obj.set_cssclass("sta_WF_compTitle01");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"20","65","28","50",null,null,null,null,null,this);
            obj.set_text("조회");
            obj.set_cssclass("");
            obj.set_taborder("9");
            this.addChild(obj.name, obj);

            obj = new Button("btn_mail",null,"20","65","28","554",null,null,null,null,null,this);
            obj.set_text("메일");
            obj.set_cssclass("btn_WF_icoMail");
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_print",null,"20","65","28","486",null,null,null,null,null,this);
            obj.set_text("인쇄");
            obj.set_cssclass("btn_WF_icoReport");
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_approval",null,"20","93","28","390",null,null,null,null,null,this);
            obj.set_text("결재상신");
            obj.set_cssclass("btn_WF_icoApproval");
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","154","0","50","58",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("h 58");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static02",null,"0","50",null,"0","0",null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("W\r\n50");
            obj.set_visible("false");
            obj.set_background("antiquewhite");
            obj.set_color("blue");
            this.addChild(obj.name, obj);

            obj = new Static("Static34","0","0","50",null,null,"0",null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("W\r\n50");
            obj.set_visible("false");
            obj.set_background("antiquewhite");
            obj.set_color("blue");
            this.addChild(obj.name, obj);

            obj = new Button("btn_help00",null,"20","79","28","869",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("도움말");
            obj.set_cssclass("btn_WF_icoHelp");
            this.addChild(obj.name, obj);

            obj = new Button("btn_sms",null,"20","66","28","800",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("SMS");
            obj.set_cssclass("btn_WF_icoSms");
            this.addChild(obj.name, obj);

            obj = new Button("btn_report",null,"20","79","28","622",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("보고서");
            obj.set_cssclass("btn_WF_icoReport");
            this.addChild(obj.name, obj);

            obj = new Button("btn_exel_dn",null,"20","93","28","704",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("엑셀다운");
            obj.set_cssclass("btn_WF_icoExcel_Dn");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","50","163",null,"335","50",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","0","0","500","45",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("검색결과");
            obj.set_cssclass("sta_WF_subTitle01");
            this.Div00.addChild(obj.name, obj);

            obj = new Grid("Grid01","0","45",null,null,"0","0",null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_binddataset("ds_list");
            obj.set_tooltiptype("default");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"110\" band=\"left\"/><Column size=\"85\"/><Column size=\"83\"/><Column size=\"43\"/><Column size=\"95\"/><Column size=\"88\"/><Column size=\"95\"/><Column size=\"400\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"48\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"34\"/></Rows><Band id=\"head\"><Cell text=\"NO\"/><Cell col=\"1\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"선택\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"2\" text=\"상태\"/><Cell col=\"3\" text=\"신청번호\" autosizerow=\"default\"/><Cell col=\"4\" text=\"신청일\"/><Cell col=\"5\" text=\"결재상태\"/><Cell col=\"6\" text=\"문서\"/><Cell col=\"7\" text=\"신청부서\"/><Cell col=\"8\" text=\"신청자\"/><Cell col=\"9\" text=\"신청금액\"/><Cell col=\"10\" text=\"제목\"/><Cell col=\"11\" colspan=\"2\" text=\"신청기간\"/><Cell col=\"13\" text=\"파일\"/></Band><Band id=\"body\"><Cell text=\"bind:NUM\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:isChecked\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"2\" text=\"bind:HEAD_STAT_CD\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"none\" text=\"bind:RQST_NO\"/><Cell col=\"4\" displaytype=\"date\" edittype=\"none\" text=\"bind:RQST_DT\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"5\" displaytype=\"normal\" edittype=\"none\" text=\"bind:APV_STAT_NM\" cssclass=\"\"/><Cell col=\"6\" text=\"bind:APV_STAT_CD\" cssclass=\"\"/><Cell col=\"7\" displaytype=\"normal\" edittype=\"none\" text=\"bind:RQST_DEPT_NM\"/><Cell col=\"8\" displaytype=\"normal\" edittype=\"none\" text=\"bind:RQST_NM\" cssclass=\"\"/><Cell col=\"9\" displaytype=\"number\" edittype=\"none\" text=\"bind:RQST_AMT\" textAlign=\"right\" verticalAlign=\"middle\"/><Cell col=\"10\" displaytype=\"normal\" edittype=\"none\" text=\"bind:SBJ\" autosizerow=\"default\" autosizecol=\"default\" textAlign=\"right\" verticalAlign=\"middle\" wordWrap=\"none\"/><Cell col=\"11\" displaytype=\"date\" edittype=\"date\" text=\"bind:FRM_DT\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"12\" displaytype=\"date\" edittype=\"date\" text=\"bind:TO_DT\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"13\" cssclass=\"\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00","76","0","10","45",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("w 10");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static44_00","86","0","43","45",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("(총 4건)");
            obj.set_cssclass("sta_WF_subTxt");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static05_00","206","0","44","45",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("h 45");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div01","50","508",null,"263","50",null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Static("Static12",null,"0","136","45","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("체크는 필수항목입니다.");
            obj.set_cssclass("essential_R");
            obj.set_usedecorate("true");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static06","0","0","500","45",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_text("상세정보");
            obj.set_cssclass("sta_WF_subTitle01");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static10","20","45",null,"34","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_condition02box");
            obj.set_text("");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static20","20","78",null,"34","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_condition02box");
            obj.set_text("");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static18","20","144",null,"119","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_condition02box");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static05_00","206","0","44","45",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("5");
            obj.set_text("h 45");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static20_00","20","111",null,"34","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_condition02box");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static11","0","45","8.19%","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("7");
            obj.set_text("수기입력");
            obj.set_cssclass("sta_WF_condition02_LEssential");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static22","33.33%","45","8.24%","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("8");
            obj.set_text("필수입력");
            obj.set_cssclass("sta_WF_condition02");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit05","Static22:10","49","17.53%","26",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("9");
            obj.set_cssclass("");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit01","Static11:10","49","17.53%","26",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("10");
            obj.set_cssclass("essential");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01","66.66%","45","8.24%","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("11");
            obj.set_text("년도입력");
            obj.set_cssclass("sta_WF_condition02");
            this.Div01.addChild(obj.name, obj);

            obj = new Spin("Spin00","Static01:10","49","8.08%","26",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("12");
            obj.set_cssclass("");
            obj.set_buttonsize("26");
            obj.set_value("2020");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static21","0","78","8.19%","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("13");
            obj.set_text("라디오버튼입력");
            obj.set_cssclass("sta_WF_condition02_L");
            this.Div01.addChild(obj.name, obj);

            obj = new Radio("Radio00","Static21:10","82","249","26",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("14");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            var Div01_form_Radio00_innerdataset = new nexacro.NormalDataset("Div01_form_Radio00_innerdataset", obj);
            Div01_form_Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">조건01</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">조건02</Col></Row></Rows>");
            obj.set_innerdataset(Div01_form_Radio00_innerdataset);
            obj.set_value("1");
            obj.set_index("0");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static23","33.334%","78","8.24%","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("15");
            obj.set_text("콤보입력");
            obj.set_cssclass("sta_WF_condition02");
            this.Div01.addChild(obj.name, obj);

            obj = new Combo("Combo00","Static23:10","82","17.53%","26",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("16");
            obj.set_displaynulltext("선택");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("sta_WF_ItemStatic12","66.66%","78","8.24%","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("17");
            obj.set_text("팝업입력");
            obj.set_cssclass("sta_WF_condition02");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit07","sta_WF_ItemStatic12:10","82","8.08%","26",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("18");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button02","Edit07:0","82","26","26",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("19");
            obj.set_cssclass("btn_WF_frmSearch");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static25","33.334%","111","8.24%","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("20");
            obj.set_text("readonly");
            obj.set_cssclass("sta_WF_condition02");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit02","Static25:10","116","17.53%","26",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("21");
            obj.set_cssclass("");
            obj.set_readonly("true");
            obj.set_value("읽기전용");
            obj.set_text("읽기전용");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static15","0","111","8.19%","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("22");
            obj.set_text("기간입력");
            obj.set_cssclass("sta_WF_condition02_L");
            this.Div01.addChild(obj.name, obj);

            obj = new Calendar("FRM_DT","Static15:10","115","7.97%","26",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("23");
            obj.set_displaynulltext("____-__-__");
            obj.set_cssclass("");
            obj.set_popuptype("none");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_daysize("28 28");
            obj.set_headheight("28");
            obj.set_popupsize("220");
            this.Div01.addChild(obj.name, obj);

            obj = new Calendar("TO_DT","FRM_DT:14","115","8.08%","26",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("24");
            obj.set_displaynulltext("____-__-__");
            obj.set_value("20200101");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("");
            obj.set_daysize("28 28");
            obj.set_headheight("28");
            obj.set_popupsize("220");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static26","FRM_DT:0","115","14","26",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("25");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static35","66.66%","111","8.24%","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("26");
            obj.set_text("체크박스입력");
            obj.set_cssclass("sta_WF_condition02");
            this.Div01.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","Static35:10","116","250","26",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("27");
            obj.set_text("사용여부");
            obj.set_cssclass("");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static19","0","144","8.19%","119",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("28");
            obj.set_text("textarea입력");
            obj.set_cssclass("sta_WF_condition02_L");
            this.Div01.addChild(obj.name, obj);

            obj = new TextArea("TextArea01","Static19:10","148",null,"111","43",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("29");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static28","149","45","10","218",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("30");
            obj.set_text("w 10");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static28_01","756","45","10","103",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("31");
            obj.set_text("w 10");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static28_01_00","1363","45","10","103",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("32");
            obj.set_text("w 10");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static03_00_00",null,"48","50","10","50",null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_00_00","50",null,"50","10",null,"668",null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00","1660","0",null,"20","50",null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("h 20");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_Search.form
            obj = new Layout("default","",1032,72,this.div_Search.form,function(p){});
            this.div_Search.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01.form
            obj = new Layout("default","",0,0,this.Div01.form,function(p){});
            this.Div01.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item2","div_Search.form.Combo00","value","Dataset00","key");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","Div01.form.FRM_DT","value","ds_main","FRM_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Div01.form.TO_DT","value","ds_main","TO_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","Div01.form.Combo00","value","Dataset00","key");
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
            this.div_Search.form.Static00.addEventHandler("onclick",this.div_Search_Static00_onclick,this);
            this.div_Search.form.Static12.addEventHandler("onclick",this.div_Search_Static12_onclick,this);
            this.div_Search.form.Static12_00.addEventHandler("onclick",this.div_Search_Static12_onclick,this);
            this.div_Search.form.Static12_01.addEventHandler("onclick",this.div_Search_Static12_onclick,this);
            this.div_Search.form.Static12_01_00.addEventHandler("onclick",this.div_Search_Static12_onclick,this);
            this.div_Search.form.Static12_00_00.addEventHandler("onclick",this.div_Search_Static12_onclick,this);
            this.div_Search.form.Static12_01_00_00.addEventHandler("onclick",this.div_Search_Static12_onclick,this);
            this.Div00.form.Static09.addEventHandler("onclick",this.Div00_Static09_onclick,this);
            this.Div01.form.Static12.addEventHandler("onclick",this.Div01_Static12_onclick,this);
            this.Div01.form.Static06.addEventHandler("onclick",this.Div01_Static06_onclick,this);
            this.Div01.form.Static18.addEventHandler("onclick",this.Div01_Static18_onclick,this);
            this.Div01.form.Static20_00.addEventHandler("onclick",this.Static_onclick,this);
            this.Div01.form.Edit01.addEventHandler("onchanged",this.Div01_Edit01_onchanged,this);
            this.Div01.form.Radio00.addEventHandler("onitemclick",this.Div00_Radio00_onitemclick,this);
            this.Div01.form.Static15.addEventHandler("onclick",this.Static_onclick,this);
            this.Div01.form.FRM_DT.addEventHandler("ondropdown",this.FRM_DT_ondropdown,this);
            this.Div01.form.FRM_DT.addEventHandler("onchanged",this.Div01_FRM_DT_onchanged,this);
            this.Div01.form.TextArea01.addEventHandler("onchanged",this.TextArea01_onchanged,this);
        };
        this.loadIncludeScript("pat_0001.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
