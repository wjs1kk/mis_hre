(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CompGuide03");
            this.set_titletext("여백 및 위치 가이드");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,1910);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Static00");
            obj.set_background("red");
            obj.set_opacity("0.2");
            this.addChild(obj.name, obj);

            obj = new Div("div_Search","50","58",null,"105","50",null,null,null,null,null,this);
            obj.set_taborder("1");
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
            obj.set_taborder("17");
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

            obj = new Static("Static04_00_00_01_00","1800","1","20","9",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_GLineH");
            this.div_Search.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_01_01_00","1138","70","5","9",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_GLineH");
            this.div_Search.addChild(obj.name, obj);

            obj = new Static("Static05_01_00_01_01_00","1131","79","20","14",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("20");
            obj.set_text("W 5");
            obj.set_cssclass("sta_WF_GTxt");
            this.div_Search.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"20","65","28","254",null,null,null,null,null,this);
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Save");
            obj.set_visible("true");
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Button("btn_list",null,"20","65","28","118",null,null,null,null,null,this);
            obj.set_text("목록");
            obj.set_cssclass("");
            obj.set_visible("true");
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delete",null,"20","65","28","186",null,null,null,null,null,this);
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_Delete");
            obj.set_visible("true");
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Button("btn_registration",null,"20","65","28","322",null,null,null,null,null,this);
            obj.set_text("신규");
            obj.set_visible("true");
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title","50","0","500","58",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("기본화면구성");
            obj.set_cssclass("sta_WF_compTitle01");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"20","65","28","50",null,null,null,null,null,this);
            obj.set_text("조회");
            obj.set_cssclass("");
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new Button("btn_mail",null,"20","65","28","554",null,null,null,null,null,this);
            obj.set_text("메일");
            obj.set_cssclass("btn_WF_icoMail");
            obj.set_taborder("8");
            this.addChild(obj.name, obj);

            obj = new Button("btn_print",null,"20","65","28","486",null,null,null,null,null,this);
            obj.set_text("인쇄");
            obj.set_cssclass("btn_WF_icoPrint");
            obj.set_taborder("9");
            this.addChild(obj.name, obj);

            obj = new Button("btn_approval",null,"20","93","28","390",null,null,null,null,null,this);
            obj.set_text("결재상신");
            obj.set_cssclass("btn_WF_icoApproval");
            obj.set_taborder("10");
            this.addChild(obj.name, obj);

            obj = new Static("Static02",null,"0","50",null,"0","-1",null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("W\r\n50");
            obj.set_visible("false");
            obj.set_background("antiquewhite");
            obj.set_color("blue");
            this.addChild(obj.name, obj);

            obj = new Static("Static34","0","0","50",null,null,"-1",null,null,null,null,this);
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

            obj = new Static("Static09","0","0","75","45",null,null,null,null,null,null,this.Div00.form);
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

            obj = new Static("Static44_00","86","0","43","45",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("(총 4건)");
            obj.set_cssclass("sta_WF_subTxt");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_01","75","16","10","9",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_GLineH");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static05_01_00_01","67","0","27","14",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("W 10");
            obj.set_cssclass("sta_WF_GTxt");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static05_00_00_01_01_00_00_00","23","162","186","28",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("조회 영역과 폼 사이 간격은 15px\r\n폼과 폼사이 간격은 10px");
            obj.set_cssclass("sta_WF_GTxt");
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

            obj = new Static("Static06","0","0","75","45",null,null,null,null,null,null,this.Div01.form);
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

            obj = new Static("Static20_00","20","111",null,"34","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_condition02box");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static11","0","45","8.19%","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("6");
            obj.set_text("수기입력");
            obj.set_cssclass("sta_WF_condition02_LEssential");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static22","33.33%","45","8.24%","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("7");
            obj.set_text("필수입력");
            obj.set_cssclass("sta_WF_condition02");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit05","Static22:10","49","17.53%","26",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("8");
            obj.set_cssclass("");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit01","Static11:10","49","17.53%","26",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("9");
            obj.set_cssclass("essential");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01","66.66%","45","8.24%","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("10");
            obj.set_text("년도입력");
            obj.set_cssclass("sta_WF_condition02");
            this.Div01.addChild(obj.name, obj);

            obj = new Spin("Spin00","Static01:10","49","8.08%","26",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("11");
            obj.set_cssclass("");
            obj.set_buttonsize("26");
            obj.set_value("2020");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static21","0","78","8.19%","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("12");
            obj.set_text("라디오버튼입력");
            obj.set_cssclass("sta_WF_condition02_L");
            this.Div01.addChild(obj.name, obj);

            obj = new Radio("Radio00","Static21:10","82","249","26",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("13");
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
            obj.set_taborder("14");
            obj.set_text("콤보입력");
            obj.set_cssclass("sta_WF_condition02");
            this.Div01.addChild(obj.name, obj);

            obj = new Combo("Combo00","Static23:10","82","17.53%","26",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("15");
            obj.set_displaynulltext("선택");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("sta_WF_ItemStatic12","66.66%","78","8.24%","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("16");
            obj.set_text("팝업입력");
            obj.set_cssclass("sta_WF_condition02");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit07","sta_WF_ItemStatic12:10","82","8.08%","26",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("17");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button02","Edit07:0","82","26","26",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("18");
            obj.set_cssclass("btn_WF_frmSearch");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static25","33.334%","111","8.24%","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("19");
            obj.set_text("readonly");
            obj.set_cssclass("sta_WF_condition02");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit02","Static25:10","116","17.53%","26",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("20");
            obj.set_cssclass("");
            obj.set_readonly("true");
            obj.set_value("읽기전용");
            obj.set_text("읽기전용");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static15","0","111","8.19%","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("21");
            obj.set_text("기간입력");
            obj.set_cssclass("sta_WF_condition02_L");
            this.Div01.addChild(obj.name, obj);

            obj = new Calendar("FRM_DT","Static15:10","115","7.97%","26",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("22");
            obj.set_displaynulltext("____-__-__");
            obj.set_cssclass("");
            obj.set_popuptype("none");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_daysize("28 28");
            obj.set_headheight("28");
            obj.set_popupsize("220");
            this.Div01.addChild(obj.name, obj);

            obj = new Calendar("TO_DT","FRM_DT:14","115","8.08%","26",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("23");
            obj.set_displaynulltext("____-__-__");
            obj.set_value("20200101");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("");
            obj.set_daysize("28 28");
            obj.set_headheight("28");
            obj.set_popupsize("220");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static26","FRM_DT:0","115","14","26",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("24");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static35","66.66%","111","8.24%","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("25");
            obj.set_text("체크박스입력");
            obj.set_cssclass("sta_WF_condition02");
            this.Div01.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","Static35:10","116","250","26",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("26");
            obj.set_text("사용여부");
            obj.set_cssclass("");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static19","0","144","8.19%","119",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("27");
            obj.set_text("textarea입력");
            obj.set_cssclass("sta_WF_condition02_L");
            this.Div01.addChild(obj.name, obj);

            obj = new TextArea("TextArea01","Static19:10","148",null,"111","43",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("28");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_01_01","149","45","10","9",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("29");
            obj.set_cssclass("sta_WF_GLineH");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static05_01_00_01_01","141","54","27","14",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("30");
            obj.set_text("W 10");
            obj.set_cssclass("sta_WF_GTxt");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_01","0","37","149","9",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("31");
            obj.set_cssclass("sta_WF_GLineH");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static05_01_00_01","77","23","34","14",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("32");
            obj.set_text("W 150");
            obj.set_cssclass("sta_WF_GTxt");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static04_01_01_00_00_01","478","49","9","26",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("33");
            obj.set_cssclass("sta_WF_GLineV");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static05_00_00_01_00_00_01","488","52","25","18",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("34");
            obj.set_text("H 26");
            obj.set_cssclass("sta_WF_GTxt");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static04_01_01_00_00_01_00","478","46","9","3",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("35");
            obj.set_cssclass("sta_WF_GLineV");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static05_00_00_01_00_00_01_00","488","37","25","18",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("36");
            obj.set_text("H 3");
            obj.set_cssclass("sta_WF_GTxt");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static04_01_01_00_00_01_00_00","478","75","9","3",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("37");
            obj.set_cssclass("sta_WF_GLineV");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static05_00_00_01_00_00_01_00_00","488","66","25","18",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("38");
            obj.set_text("H 3");
            obj.set_cssclass("sta_WF_GTxt");
            this.Div01.addChild(obj.name, obj);

            obj = new Tab("Tab00","50","781",null,"414","50",null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_tabindex("0");
            obj.getSetter("scrollbars").set("autoboth");
            obj.set_cssclass("tab_WF_comp");
            obj.set_tabbuttonheight("34");
            this.addChild(obj.name, obj);

            obj = new Tabpage("tabpage1",this.Tab00);
            obj.set_text("그리드입력");
            this.Tab00.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","45",null,null,"0","0",null,null,null,null,this.Tab00.tabpage1.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_list");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"114\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"385\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"34\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"신청번호\"/><Cell col=\"2\" text=\"신청일\"/><Cell col=\"3\" text=\"결재상태\"/><Cell col=\"4\" text=\"요청부서\"/><Cell col=\"5\" text=\"신청자\"/><Cell col=\"6\" text=\"신청금액\"/><Cell col=\"7\" text=\"제목\"/></Band><Band id=\"body\"><Cell text=\"bind:NUM\"/><Cell col=\"1\" text=\"bind:RQST_NO\" displaytype=\"editcontrol\" edittype=\"text\"/><Cell col=\"2\" text=\"bind:RQST_DT\" displaytype=\"calendarcontrol\" edittype=\"text\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"3\" text=\"bind:APV_STAT_NM\" displaytype=\"editcontrol\" edittype=\"text\"/><Cell col=\"4\" text=\"bind:RQST_DEPT_NM\" displaytype=\"combocontrol\" edittype=\"combo\"/><Cell col=\"5\" text=\"bind:RQST_NM\" displaytype=\"none\" edittype=\"text\"/><Cell col=\"6\" text=\"bind:RQST_AMT\" displaytype=\"editcontrol\" edittype=\"text\"/><Cell col=\"7\" text=\"bind:SBJ\" displaytype=\"editcontrol\" edittype=\"text\"/></Band></Format></Formats>");
            this.Tab00.tabpage1.addChild(obj.name, obj);

            obj = new Static("Static51","0","0",null,"45","40",null,null,null,null,null,this.Tab00.tabpage1.form);
            obj.set_taborder("1");
            obj.set_text("그리드입력");
            obj.set_cssclass("sta_WF_subTitle01");
            this.Tab00.tabpage1.addChild(obj.name, obj);

            obj = new Button("Button16",null,"14","73","26","66",null,null,null,null,null,this.Tab00.tabpage1.form);
            obj.set_taborder("2");
            obj.set_text("업로드");
            obj.set_cssclass("btn_WF_grdUpload");
            this.Tab00.tabpage1.addChild(obj.name, obj);

            obj = new Button("Button15",null,"14","85","26","144",null,null,null,null,null,this.Tab00.tabpage1.form);
            obj.set_taborder("3");
            obj.set_text("다운로드");
            obj.set_cssclass("btn_WF_grdDownload");
            this.Tab00.tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_row_delete",null,"14","73","26","234",null,null,null,null,null,this.Tab00.tabpage1.form);
            obj.set_taborder("4");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_Row_Delete");
            this.Tab00.tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_row_add",null,"14","73","26","312",null,null,null,null,null,this.Tab00.tabpage1.form);
            obj.set_taborder("5");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_Row_Add");
            this.Tab00.tabpage1.addChild(obj.name, obj);

            obj = new Button("Button00",null,"14","61","26","0",null,null,null,null,null,this.Tab00.tabpage1.form);
            obj.set_taborder("6");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_grdSave");
            this.Tab00.tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("tabpage2",this.Tab00);
            obj.set_text("일반입력");
            this.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("tabpage3",this.Tab00);
            obj.set_text("파일첨부");
            this.Tab00.addChild(obj.name, obj);

            obj = new Div("Div01_00","633","1205",null,"668","50",null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("Div01");
            obj.set_cssclass("div_WF_Transparent");
            this.addChild(obj.name, obj);

            obj = new Div("Div02","0","0",null,"269","0",null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("0");
            obj.set_text("Div02");
            obj.set_cssclass("div_WF_Area");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static13_00","0","0","500","45",null,null,null,null,null,null,this.Div01_00.form.Div02.form);
            obj.set_taborder("0");
            obj.set_text("상세정보");
            obj.set_cssclass("sta_WF_subTitle01");
            this.Div01_00.form.Div02.addChild(obj.name, obj);

            obj = new Button("Button03",null,"14","73","26","78",null,null,null,null,null,this.Div01_00.form.Div02.form);
            obj.set_taborder("1");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_Row_Add");
            this.Div01_00.form.Div02.addChild(obj.name, obj);

            obj = new Button("Button04",null,"14","73","26","0",null,null,null,null,null,this.Div01_00.form.Div02.form);
            obj.set_taborder("2");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_Row_Delete");
            this.Div01_00.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static12_01_00","20","45",null,"34","0",null,null,null,null,null,this.Div01_00.form.Div02.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_condition02box");
            this.Div01_00.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static20_00_00","22","78",null,"34","0",null,null,null,null,null,this.Div01_00.form.Div02.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_condition02box");
            this.Div01_00.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static18_00","22","111",null,"34","0",null,null,null,null,null,this.Div01_00.form.Div02.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_condition02box");
            this.Div01_00.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static25_00_00","22","144",null,"125","0",null,null,null,null,null,this.Div01_00.form.Div02.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_condition02box");
            obj.set_text("");
            this.Div01_00.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static11_00","0","45","12.08%","34",null,null,null,null,null,null,this.Div01_00.form.Div02.form);
            obj.set_taborder("7");
            obj.set_text("수기입력");
            obj.set_cssclass("sta_WF_condition02_L");
            this.Div01_00.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static21_00","0","78","12.08%","34",null,null,null,null,null,null,this.Div01_00.form.Div02.form);
            obj.set_taborder("8");
            obj.set_text("라디오버튼입력");
            obj.set_cssclass("sta_WF_condition02_L");
            this.Div01_00.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static05_02_00","0","111","12.08%","34",null,null,null,null,null,null,this.Div01_00.form.Div02.form);
            obj.set_taborder("9");
            obj.set_text("일자입력");
            obj.set_cssclass("sta_WF_condition02_L");
            this.Div01_00.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static19_00","0","144","12.08%","125",null,null,null,null,null,null,this.Div01_00.form.Div02.form);
            obj.set_taborder("10");
            obj.set_text("textarea입력");
            obj.set_cssclass("sta_WF_condition02_L");
            this.Div01_00.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static23_00","50.00%","78","12.08%","34",null,null,null,null,null,null,this.Div01_00.form.Div02.form);
            obj.set_taborder("11");
            obj.set_text("콤보입력");
            obj.set_cssclass("sta_WF_condition02");
            this.Div01_00.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static25_01","50.00%","111","12.08%","34",null,null,null,null,null,null,this.Div01_00.form.Div02.form);
            obj.set_taborder("12");
            obj.set_text("readonly");
            obj.set_cssclass("sta_WF_condition02");
            this.Div01_00.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static22_00","50%","45","12.08%","34",null,null,null,null,null,null,this.Div01_00.form.Div02.form);
            obj.set_taborder("13");
            obj.set_text("필수입력");
            obj.set_cssclass("sta_WF_condition02");
            this.Div01_00.form.Div02.addChild(obj.name, obj);

            obj = new Radio("Radio00_00","Static21_00:10","82","136","26",null,null,null,null,null,null,this.Div01_00.form.Div02.form);
            obj.set_taborder("14");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var Div01_00_form_Div02_form_Radio00_00_innerdataset = new nexacro.NormalDataset("Div01_00_form_Div02_form_Radio00_00_innerdataset", obj);
            Div01_00_form_Div02_form_Radio00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">조건01</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">조건02</Col></Row></Rows>");
            obj.set_innerdataset(Div01_00_form_Div02_form_Radio00_00_innerdataset);
            obj.set_value("1");
            obj.set_index("0");
            this.Div01_00.form.Div02.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_00","Static05_02_00:10","115","11.92%","26",null,null,null,null,null,null,this.Div01_00.form.Div02.form);
            obj.set_taborder("15");
            obj.set_displaynulltext("____-__-__");
            obj.set_cssclass("");
            this.Div01_00.form.Div02.addChild(obj.name, obj);

            obj = new Combo("Combo00_00","Static23_00:10","82","25.68%","26",null,null,null,null,null,null,this.Div01_00.form.Div02.form);
            obj.set_taborder("16");
            obj.set_displaynulltext("선택");
            this.Div01_00.form.Div02.addChild(obj.name, obj);

            obj = new Edit("Edit05_00","Static22_00:10","49","25.76%","26",null,null,null,null,null,null,this.Div01_00.form.Div02.form);
            obj.set_taborder("17");
            obj.set_cssclass("");
            this.Div01_00.form.Div02.addChild(obj.name, obj);

            obj = new Edit("Edit02_00","Static25_01:10","115","25.60%","26",null,null,null,null,null,null,this.Div01_00.form.Div02.form);
            obj.set_taborder("18");
            obj.set_cssclass("");
            this.Div01_00.form.Div02.addChild(obj.name, obj);

            obj = new Edit("Edit01_00","Static11_00:10","49","25.76%","26",null,null,null,null,null,null,this.Div01_00.form.Div02.form);
            obj.set_taborder("19");
            this.Div01_00.form.Div02.addChild(obj.name, obj);

            obj = new TextArea("TextArea01","Static19_00:10","148",null,"116","20",null,null,null,null,null,this.Div01_00.form.Div02.form);
            obj.set_taborder("20");
            this.Div01_00.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static04_01_01_00_00_00_01","76","0","9","45",null,null,null,null,null,null,this.Div01_00.form.Div02.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_GLineV");
            this.Div01_00.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static05_00_00_01_00_00_00_01","85","12","25","18",null,null,null,null,null,null,this.Div01_00.form.Div02.form);
            obj.set_taborder("22");
            obj.set_text("H 45");
            obj.set_cssclass("sta_WF_GTxt");
            this.Div01_00.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_01_01_00","1159","10","5","9",null,null,null,null,null,null,this.Div01_00.form.Div02.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_GLineH");
            this.Div01_00.form.Div02.addChild(obj.name, obj);

            obj = new Div("Div02_00_00","0","544",null,"124","0",null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("1");
            obj.set_text("Div02");
            obj.set_cssclass("div_WF_Area");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static13_00","0","0","500","45",null,null,null,null,null,null,this.Div01_00.form.Div02_00_00.form);
            obj.set_taborder("0");
            obj.set_text("파일첨부");
            obj.set_cssclass("sta_WF_subTitle01");
            this.Div01_00.form.Div02_00_00.addChild(obj.name, obj);

            obj = new Button("btn_add00",null,"14","61","26","66",null,null,null,null,null,this.Div01_00.form.Div02_00_00.form);
            obj.set_taborder("1");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_Row_Add");
            this.Div01_00.form.Div02_00_00.addChild(obj.name, obj);

            obj = new Button("btn_delete01",null,"14","61","26","0",null,null,null,null,null,this.Div01_00.form.Div02_00_00.form);
            obj.set_taborder("2");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_Row_Delete");
            this.Div01_00.form.Div02_00_00.addChild(obj.name, obj);

            obj = new Grid("Grid05","0","45",null,null,"0","0",null,null,null,null,this.Div01_00.form.Div02_00_00.form);
            obj.set_taborder("3");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"748\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"파일\"/></Band><Band id=\"body\"><Cell text=\"bind:Column1\"/></Band></Format></Formats>");
            this.Div01_00.form.Div02_00_00.addChild(obj.name, obj);

            obj = new Static("Static05_00_00_01_00_00_00_01","82","12","25","18",null,null,null,null,null,null,this.Div01_00.form.Div02_00_00.form);
            obj.set_taborder("4");
            obj.set_text("H 45");
            obj.set_cssclass("sta_WF_GTxt");
            this.Div01_00.form.Div02_00_00.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_01_01_00","1171","10","5","9",null,null,null,null,null,null,this.Div01_00.form.Div02_00_00.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_GLineH");
            this.Div01_00.form.Div02_00_00.addChild(obj.name, obj);

            obj = new Div("Div02_00_01","0","279",null,"255","0",null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("2");
            obj.set_text("Div02");
            obj.set_cssclass("div_WF_Area");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static13_00","0","0","500","45",null,null,null,null,null,null,this.Div01_00.form.Div02_00_01.form);
            obj.set_taborder("0");
            obj.set_text("Grid입력");
            obj.set_cssclass("sta_WF_subTitle01");
            this.Div01_00.form.Div02_00_01.addChild(obj.name, obj);

            obj = new Button("Button05",null,"14","73","26","78",null,null,null,null,null,this.Div01_00.form.Div02_00_01.form);
            obj.set_taborder("1");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_Row_Add");
            this.Div01_00.form.Div02_00_01.addChild(obj.name, obj);

            obj = new Button("Button06",null,"14","73","26","0",null,null,null,null,null,this.Div01_00.form.Div02_00_01.form);
            obj.set_taborder("2");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_Row_Delete");
            this.Div01_00.form.Div02_00_01.addChild(obj.name, obj);

            obj = new Grid("Grid02_00","0","45",null,null,"0","0",null,null,null,null,this.Div01_00.form.Div02_00_01.form);
            obj.set_taborder("3");
            obj.set_binddataset("ds_List_Detail");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"40\"/><Column size=\"47\"/><Column size=\"99\"/><Column size=\"85\"/><Column size=\"95\"/><Column size=\"292\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"34\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"선택\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"2\" text=\"상태\"/><Cell col=\"3\" text=\"신청번호\"/><Cell col=\"4\" text=\"신청일\"/><Cell col=\"5\" text=\"신청금액\"/><Cell col=\"6\" text=\"제목\"/></Band><Band id=\"body\"><Cell text=\"bind:NUM\"/><Cell col=\"1\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:Column0\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"2\" text=\"bind:HEAD_STAT_CD\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"3\" displaytype=\"text\" edittype=\"text\" text=\"bind:RQST_NO\" editdisplay=\"display\"/><Cell col=\"4\" displaytype=\"date\" edittype=\"date\" text=\"bind:RQST_DT\" editdisplay=\"edit\" calendardisplay=\"display\"/><Cell col=\"5\" displaytype=\"number\" edittype=\"text\" text=\"bind:RQST_AMT\" editdisplay=\"display\" textAlign=\"right\" verticalAlign=\"middle\"/><Cell col=\"6\" displaytype=\"text\" edittype=\"text\" text=\"bind:SBJ\" editdisplay=\"display\"/></Band></Format></Formats>");
            this.Div01_00.form.Div02_00_01.addChild(obj.name, obj);

            obj = new Static("Static04_01_01_00_00_00_01","75","0","9","45",null,null,null,null,null,null,this.Div01_00.form.Div02_00_01.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_GLineV");
            this.Div01_00.form.Div02_00_01.addChild(obj.name, obj);

            obj = new Static("Static05_00_00_01_00_00_00_01","84","11","25","18",null,null,null,null,null,null,this.Div01_00.form.Div02_00_01.form);
            obj.set_taborder("5");
            obj.set_text("H 45");
            obj.set_cssclass("sta_WF_GTxt");
            this.Div01_00.form.Div02_00_01.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_01_01_00","1159","11","5","9",null,null,null,null,null,null,this.Div01_00.form.Div02_00_01.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_GLineH");
            this.Div01_00.form.Div02_00_01.addChild(obj.name, obj);

            obj = new Static("Static05_01_00_01_01_00_00","1150","-1","20","14",null,null,null,null,null,null,this.Div01_00.form.Div02_00_01.form);
            obj.set_taborder("7");
            obj.set_text("W 5");
            obj.set_cssclass("sta_WF_GTxt");
            this.Div01_00.form.Div02_00_01.addChild(obj.name, obj);

            obj = new Static("Static04_01_01_00_00_00_01","73","544","9","45",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_GLineV");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static05_01_00_01_01_00_00","1162","541","20","14",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("4");
            obj.set_text("W 5");
            obj.set_cssclass("sta_WF_GTxt");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Div("Div00_00","50","1205","568","668",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Static("Static37","0","0","100","45",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("0");
            obj.set_text("Grid Master");
            obj.set_cssclass("sta_WF_subTitle01");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static44","110","0","68","45",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("1");
            obj.set_text("(총 4건)");
            obj.set_cssclass("sta_WF_subTxt");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Grid("Grid01_00","0","45",null,null,"0","0",null,null,null,null,this.Div00_00.form);
            obj.set_taborder("2");
            obj.set_binddataset("ds_List");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"40\"/><Column size=\"47\"/><Column size=\"99\"/><Column size=\"132\"/><Column size=\"97\"/><Column size=\"55\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"34\"/></Rows><Band id=\"head\"><Cell text=\"NO\"/><Cell col=\"1\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"선택\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"2\" text=\"상태\"/><Cell col=\"3\" text=\"공통코드\"/><Cell col=\"4\" text=\"코드명\"/><Cell col=\"5\" text=\"관련코드\"/><Cell col=\"6\" text=\"상위코드\"/></Band><Band id=\"body\"><Cell text=\"bind:NUM\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:Column0\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"text\" text=\"bind:HEAD_STAT_CD\" editdisplay=\"edit\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"3\" displaytype=\"text\" edittype=\"text\" text=\"bind:COMM_CD\" editdisplay=\"edit\"/><Cell col=\"4\" displaytype=\"text\" edittype=\"text\" text=\"bind:COMM_NM\" editdisplay=\"edit\" calendardisplay=\"display\"/><Cell col=\"5\" displaytype=\"text\" edittype=\"text\" text=\"bind:REF_CD\" editdisplay=\"edit\"/><Cell col=\"6\" displaytype=\"text\" edittype=\"text\" text=\"bind:UP_COMM_CD\" editdisplay=\"edit\"/></Band></Format></Formats>");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static04_01_01_01_02_01_00_00_00_01_00","428","0","9","14",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_GLineV");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static05_00_00_01_01_02_01_00_00_00_01_00","403","-3","25","18",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("4");
            obj.set_text("H 14");
            obj.set_cssclass("sta_WF_GTxt");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static04_01_01_01_02_01_00_00_00_00_01_00","428","14","9","26",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_GLineV");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static04_01_01_01_02_01_00_00_00_00_00_00_00","428","40","9","5",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_GLineV");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static05_00_00_01_01_02_01_00_00_00_00_00_00_00","409","35","19","14",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("7");
            obj.set_text("H 5");
            obj.set_cssclass("sta_WF_GTxt");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static05_00_00_01_01_02_01_00_00_00_00_01_00","403","17","25","18",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("8");
            obj.set_text("H 26");
            obj.set_cssclass("sta_WF_GTxt");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_01_01_00_00","500","11","5","9",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_GLineH");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static05_01_00_01_01_00_00_00","490","0","20","14",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("10");
            obj.set_text("W 5");
            obj.set_cssclass("sta_WF_GTxt");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("btn_conclu01","505","14","63","26",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("11");
            obj.set_text("체결");
            obj.set_cssclass("btn_WF_grdConclusion_W");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("btn_grdRep01","437","14","63","26",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("12");
            obj.set_text("보고");
            obj.set_cssclass("btn_WF_grdReport_W");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static05_00_00_01","18","20","25","18",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("H 58");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_01_01","41","0","9","58",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_01_01_00","41","163","9","45",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00_00_01_00","20","176","25","18",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("H 45");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_01","70","62","100","9",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_GLineH");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_01_00_01","101","48","34","14",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("W 100");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_01_01_01","180","58","9","15",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00_00_01_01","189","56","25","18",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("H 15");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_01_01_01_00","1870","48","9","10",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00_00_01_01_00","1879","44","25","18",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("H 10");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_01_01_01_00_00","1870","0","9","20",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00_00_01_01_00_00","1878","1","25","18",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("H 20");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00_00_01_01_01","16","77","25","18",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("H 26");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_01_01_01_01","41","73","9","26",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00_00_01_01_02","189","131","25","18",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("H 15");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_01_01_01_02","180","133","9","15",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00_00_01_01_02_00","189","94","25","18",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("H 8");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_01_01_01_02_00","180","99","9","8",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00_00_01_01_01_00","16","111","25","18",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("H 26");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_01_01_01_01_00","41","107","9","26",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_01_00","50","62","20","9",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_cssclass("sta_WF_GLineH");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_01_00_01_00","47","48","27","14",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("W 20");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_01_00_01_01","162","82","27","14",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_text("W 10");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_01_01","170","73","10","9",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_cssclass("sta_WF_GLineH");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_01_01_01_02_01","41","148","9","15",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00_00_01_01_02_01","16","146","25","18",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_text("H 15");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_01_00_01_00_00","1847","68","27","14",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_text("W 20");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_01_01_00_00","41","508","9","45",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00_00_01_00_00","16","521","25","18",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_text("H 45");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_01_01_01_02_01_00","41","498","9","10",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00_00_01_01_02_01_00","16","494","25","18",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_text("H 10");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_01_01_01_02_01_00_00","41","771","9","10",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_01_01_00_00_00","41","816","9","45",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00_00_01_01_02_01_00_00","16","767","25","18",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_text("H 10");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00_00_01_00_00_00","16","829","25","18",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_text("H 45");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_01_01_00_00_00_00","328","781","9","34",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00_00_01_00_00_00_00","337","789","25","18",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_text("H 34");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_01_01_00_00_00_00_00","41","862","9","30",null,null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00_00_01_00_00_00_00_00","16","868","25","18",null,null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_text("H 30");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_01_01_01_02_01_00_00_00","1870","816","9","14",null,null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00_00_01_01_02_01_00_00_00","1879","814","25","18",null,null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_text("H 14");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_01_01_01_02_01_00_00_00_00","1870","830","9","26",null,null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00_00_01_01_02_01_00_00_00_00","1878","834","25","18",null,null,null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_text("H 26");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_01_01_01_02_01_00_00_00_00_00","1870","856","9","5",null,null,null,null,null,null,this);
            obj.set_taborder("65");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00_00_01_01_02_01_00_00_00_00_00","1879","851","19","14",null,null,null,null,null,null,this);
            obj.set_taborder("66");
            obj.set_text("H 5");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_01_01_00","1804","826","5","9",null,null,null,null,null,null,this);
            obj.set_taborder("67");
            obj.set_cssclass("sta_WF_GLineH");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_01_00_01_01_00","1796","812","20","14",null,null,null,null,null,null,this);
            obj.set_taborder("68");
            obj.set_text("W 5");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_01_01_01_02_01_00_00_01","41","1195","9","10",null,null,null,null,null,null,this);
            obj.set_taborder("69");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00_00_01_01_02_01_00_00_01","16","1190","25","18",null,null,null,null,null,null,this);
            obj.set_taborder("70");
            obj.set_text("H 10");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_01_01_00_00_00_01","41","1205","9","45",null,null,null,null,null,null,this);
            obj.set_taborder("71");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00_00_01_00_00_00_01","16","1217","25","18",null,null,null,null,null,null,this);
            obj.set_taborder("72");
            obj.set_text("H 45");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_01_00_01_02","612","1189","27","14",null,null,null,null,null,null,this);
            obj.set_taborder("73");
            obj.set_text("W 15");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_01_02","618","1205","15","9",null,null,null,null,null,null,this);
            obj.set_taborder("74");
            obj.set_cssclass("sta_WF_GLineH");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_01_01_01_02_01_00_00_01_00","624","1474","9","10",null,null,null,null,null,null,this);
            obj.set_taborder("75");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00_00_01_01_02_01_00_00_01_00","600","1470","25","18",null,null,null,null,null,null,this);
            obj.set_taborder("76");
            obj.set_text("H 10");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_01_01_01_02_01_00_00_01_00_00","624","1738","9","10",null,null,null,null,null,null,this);
            obj.set_taborder("77");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00_00_01_01_02_01_00_00_01_00_00","600","1734","25","18",null,null,null,null,null,null,this);
            obj.set_taborder("78");
            obj.set_text("H 10");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_01_01_01_02_01_00_00_00_01","1870","1205","9","14",null,null,null,null,null,null,this);
            obj.set_taborder("79");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00_00_01_01_02_01_00_00_00_01","1878","1202","25","18",null,null,null,null,null,null,this);
            obj.set_taborder("80");
            obj.set_text("H 14");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_01_01_01_02_01_00_00_00_00_01","1870","1219","9","26",null,null,null,null,null,null,this);
            obj.set_taborder("81");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_01_01_01_02_01_00_00_00_00_00_00","1870","1245","9","5",null,null,null,null,null,null,this);
            obj.set_taborder("82");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00_00_01_01_02_01_00_00_00_00_00_00","1878","1240","19","14",null,null,null,null,null,null,this);
            obj.set_taborder("83");
            obj.set_text("H 5");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_01_00_01_01_00_00","1784","1202","20","14",null,null,null,null,null,null,this);
            obj.set_taborder("84");
            obj.set_text("W 5");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00_00_01_01_02_01_00_00_00_00_01","1877","1221","25","18",null,null,null,null,null,null,this);
            obj.set_taborder("85");
            obj.set_text("H 26");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_01_01_01_02_01_00_00_00_01_00","1869","1484","9","14",null,null,null,null,null,null,this);
            obj.set_taborder("86");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00_00_01_01_02_01_00_00_00_01_00","1877","1481","25","18",null,null,null,null,null,null,this);
            obj.set_taborder("87");
            obj.set_text("H 14");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_01_01_01_02_01_00_00_00_00_01_00","1869","1498","9","26",null,null,null,null,null,null,this);
            obj.set_taborder("88");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_01_01_01_02_01_00_00_00_00_00_00_00","1869","1524","9","5",null,null,null,null,null,null,this);
            obj.set_taborder("89");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00_00_01_01_02_01_00_00_00_00_00_00_00","1877","1519","19","14",null,null,null,null,null,null,this);
            obj.set_taborder("90");
            obj.set_text("H 5");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00_00_01_01_02_01_00_00_00_00_01_00","1876","1500","25","18",null,null,null,null,null,null,this);
            obj.set_taborder("91");
            obj.set_text("H 26");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_01_01_01_02_01_00_00_00_01_00_00","1870","1749","9","14",null,null,null,null,null,null,this);
            obj.set_taborder("92");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00_00_01_01_02_01_00_00_00_01_00_00","1878","1747","25","18",null,null,null,null,null,null,this);
            obj.set_taborder("93");
            obj.set_text("H 14");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_01_01_01_02_01_00_00_00_00_01_00_00","1870","1763","9","26",null,null,null,null,null,null,this);
            obj.set_taborder("94");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_01_01_01_02_01_00_00_00_00_00_00_00_00","1870","1789","9","5",null,null,null,null,null,null,this);
            obj.set_taborder("95");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00_00_01_01_02_01_00_00_00_00_00_00_00_00","1878","1784","19","14",null,null,null,null,null,null,this);
            obj.set_taborder("96");
            obj.set_text("H 5");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00_00_01_01_02_01_00_00_00_00_01_00_00","1877","1765","25","18",null,null,null,null,null,null,this);
            obj.set_taborder("97");
            obj.set_text("H 26");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00_00_01_01_00_00_00","782","20","181","28",null,null,null,null,null,null,this);
            obj.set_taborder("98");
            obj.set_text("CRUD 공통 버튼은 페이지 상단 우측에 위치\r\n- 버튼간 간격은 3px");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_01_00_00","1802","16","3","9",null,null,null,null,null,null,this);
            obj.set_taborder("99");
            obj.set_cssclass("sta_WF_GLineH");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_01_00_01_00_00_00","1793","2","20","14",null,null,null,null,null,null,this);
            obj.set_taborder("100");
            obj.set_text("W 3");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00_00_01_01_00_00_00_00","1334","829","146","28",null,null,null,null,null,null,this);
            obj.set_taborder("101");
            obj.set_text("폼 버튼은 폼 상단 우측에 위치\r\n- 버튼간 간격은 5px");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","57","152","7","7",null,null,null,null,null,null,this);
            obj.set_taborder("102");
            obj.set_background("red");
            obj.set_borderRadius("10px");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","56","500","7","7",null,null,null,null,null,null,this);
            obj.set_taborder("103");
            obj.set_background("red");
            obj.set_borderRadius("10px");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_01_01_00_01","63","155","9","348",null,null,null,null,null,null,this);
            obj.set_taborder("104");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00_00_01_00_00_01","16","560","25","18",null,null,null,null,null,null,this);
            obj.set_taborder("105");
            obj.set_text("H 34");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_01_01_00_00_01","41","553","9","34",null,null,null,null,null,null,this);
            obj.set_taborder("106");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00_00_01_01_00_00_00_00_00","-279","95","146","28",null,null,null,null,null,null,this);
            obj.set_taborder("107");
            obj.set_text("폼 버튼은 폼 상단 우측에 위치\r\n- 버튼간 간격은 5px");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00_00_01_01_00_00_00_00_01","376","1253","247","28",null,null,null,null,null,null,this);
            obj.set_taborder("108");
            obj.set_text("폼 버튼 외 사용되는 버튼으로 상단 우측에 위치\r\n- 버튼간 간격은 5px(폼버튼의 간격과 사이즈 동일)");
            obj.set_cssclass("sta_WF_GTxt");
            obj.set_background("#f7f7f7");
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

            //-- Default Layout : this.Tab00.tabpage1.form
            obj = new Layout("default","",1032,392,this.Tab00.tabpage1.form,function(p){});
            this.Tab00.tabpage1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Tab00.tabpage2
            obj = new Layout("default","",0,0,this.Tab00.tabpage2.form,function(p){});
            this.Tab00.tabpage2.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Tab00.tabpage3
            obj = new Layout("default","",0,0,this.Tab00.tabpage3.form,function(p){});
            this.Tab00.tabpage3.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01_00.form.Div02.form
            obj = new Layout("default","",0,0,this.Div01_00.form.Div02.form,function(p){});
            this.Div01_00.form.Div02.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01_00.form.Div02_00_00.form
            obj = new Layout("default","",0,0,this.Div01_00.form.Div02_00_00.form,function(p){});
            this.Div01_00.form.Div02_00_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01_00.form.Div02_00_01.form
            obj = new Layout("default","",0,0,this.Div01_00.form.Div02_00_01.form,function(p){});
            this.Div01_00.form.Div02_00_01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01_00.form
            obj = new Layout("default","",0,0,this.Div01_00.form,function(p){});
            this.Div01_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00_00.form
            obj = new Layout("default","",0,0,this.Div00_00.form,function(p){});
            this.Div00_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1920,1910,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_Search.form.Combo00","value","Dataset00","key");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Div01.form.FRM_DT","value","ds_main","FRM_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Div01.form.TO_DT","value","ds_main","TO_DT");
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
            this.Div00.form.Static09.addEventHandler("onclick",this.Div00_Static09_onclick,this);
            this.Div00.form.Static05_00_00_01_01_00_00_00.addEventHandler("onclick",this.Static05_00_00_01_01_onclick,this);
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
            this.Tab00.addEventHandler("onchanged",this.Tab00_onchanged,this);
            this.Tab00.tabpage1.form.Static51.addEventHandler("onclick",this.Tab00_tabpage1_Static51_onclick,this);
            this.Div01_00.form.Div02.form.Static13_00.addEventHandler("onclick",this.Div00_Static13_onclick,this);
            this.Div01_00.form.Div02.form.Radio00_00.addEventHandler("onitemclick",this.Div00_Radio00_onitemclick,this);
            this.Div01_00.form.Div02.form.TextArea01.addEventHandler("oneditclick",this.TextArea01_oneditclick,this);
            this.Div01_00.form.Div02_00_00.form.Static13_00.addEventHandler("onclick",this.Div00_Static13_onclick,this);
            this.Div01_00.form.Div02_00_01.form.Static13_00.addEventHandler("onclick",this.Div00_Static13_onclick,this);
            this.Div00_00.form.Static37.addEventHandler("onclick",this.Div00_Static37_onclick,this);
            this.Div00_00.form.Static05_00_00_01_01_02_01_00_00_00_01_00.addEventHandler("onclick",this.Static05_00_00_01_01_onclick,this);
            this.Div00_00.form.Static05_00_00_01_01_02_01_00_00_00_00_00_00_00.addEventHandler("onclick",this.Static05_00_00_01_01_onclick,this);
            this.Div00_00.form.Static05_00_00_01_01_02_01_00_00_00_00_01_00.addEventHandler("onclick",this.Static05_00_00_01_01_onclick,this);
            this.Static05_00_00_01_01.addEventHandler("onclick",this.Static05_00_00_01_01_onclick,this);
            this.Static05_00_00_01_01_00.addEventHandler("onclick",this.Static05_00_00_01_01_onclick,this);
            this.Static05_00_00_01_01_00_00.addEventHandler("onclick",this.Static05_00_00_01_01_onclick,this);
            this.Static05_00_00_01_01_01.addEventHandler("onclick",this.Static05_00_00_01_01_onclick,this);
            this.Static05_00_00_01_01_02.addEventHandler("onclick",this.Static05_00_00_01_01_onclick,this);
            this.Static05_00_00_01_01_02_00.addEventHandler("onclick",this.Static05_00_00_01_01_onclick,this);
            this.Static05_00_00_01_01_01_00.addEventHandler("onclick",this.Static05_00_00_01_01_onclick,this);
            this.Static05_00_00_01_01_02_01.addEventHandler("onclick",this.Static05_00_00_01_01_onclick,this);
            this.Static05_00_00_01_01_02_01_00.addEventHandler("onclick",this.Static05_00_00_01_01_onclick,this);
            this.Static05_00_00_01_01_02_01_00_00.addEventHandler("onclick",this.Static05_00_00_01_01_onclick,this);
            this.Static05_00_00_01_00_00_00_00.addEventHandler("onclick",this.Static05_00_00_01_00_00_00_00_onclick,this);
            this.Static05_00_00_01_00_00_00_00_00.addEventHandler("onclick",this.Static05_00_00_01_00_00_00_00_onclick,this);
            this.Static05_00_00_01_01_02_01_00_00_00.addEventHandler("onclick",this.Static05_00_00_01_01_onclick,this);
            this.Static05_00_00_01_01_02_01_00_00_00_00.addEventHandler("onclick",this.Static05_00_00_01_01_onclick,this);
            this.Static05_00_00_01_01_02_01_00_00_00_00_00.addEventHandler("onclick",this.Static05_00_00_01_01_onclick,this);
            this.Static05_00_00_01_01_02_01_00_00_01.addEventHandler("onclick",this.Static05_00_00_01_01_onclick,this);
            this.Static05_00_00_01_01_02_01_00_00_01_00.addEventHandler("onclick",this.Static05_00_00_01_01_onclick,this);
            this.Static05_00_00_01_01_02_01_00_00_01_00_00.addEventHandler("onclick",this.Static05_00_00_01_01_onclick,this);
            this.Static05_00_00_01_01_02_01_00_00_00_01.addEventHandler("onclick",this.Static05_00_00_01_01_onclick,this);
            this.Static05_00_00_01_01_02_01_00_00_00_00_00_00.addEventHandler("onclick",this.Static05_00_00_01_01_onclick,this);
            this.Static05_00_00_01_01_02_01_00_00_00_00_01.addEventHandler("onclick",this.Static05_00_00_01_01_onclick,this);
            this.Static05_00_00_01_01_02_01_00_00_00_01_00.addEventHandler("onclick",this.Static05_00_00_01_01_onclick,this);
            this.Static05_00_00_01_01_02_01_00_00_00_00_00_00_00.addEventHandler("onclick",this.Static05_00_00_01_01_onclick,this);
            this.Static05_00_00_01_01_02_01_00_00_00_00_01_00.addEventHandler("onclick",this.Static05_00_00_01_01_onclick,this);
            this.Static05_00_00_01_01_02_01_00_00_00_01_00_00.addEventHandler("onclick",this.Static05_00_00_01_01_onclick,this);
            this.Static05_00_00_01_01_02_01_00_00_00_00_00_00_00_00.addEventHandler("onclick",this.Static05_00_00_01_01_onclick,this);
            this.Static05_00_00_01_01_02_01_00_00_00_00_01_00_00.addEventHandler("onclick",this.Static05_00_00_01_01_onclick,this);
            this.Static05_00_00_01_01_00_00_00.addEventHandler("onclick",this.Static05_00_00_01_01_onclick,this);
            this.Static05_00_00_01_01_00_00_00_00.addEventHandler("onclick",this.Static05_00_00_01_01_onclick,this);
            this.Static05_00_00_01_01_00_00_00_00_00.addEventHandler("onclick",this.Static05_00_00_01_01_onclick,this);
            this.Static05_00_00_01_01_00_00_00_00_01.addEventHandler("onclick",this.Static05_00_00_01_01_onclick,this);
        };
        this.loadIncludeScript("CompGuide03.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
