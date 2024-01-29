(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Pattern03");
            this.set_titletext("Pattern03");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,650);
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
            obj._setContents("<ColumnInfo><Column id=\"NUM\" type=\"STRING\" size=\"256\"/><Column id=\"RQST_NO\" type=\"STRING\" size=\"256\"/><Column id=\"RQST_DT\" type=\"STRING\" size=\"256\"/><Column id=\"APV_STAT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"APV_STAT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RQST_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RQST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RQST_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"SBJ\" type=\"STRING\" size=\"256\"/><Column id=\"isChecked\" type=\"STRING\" size=\"256\"/><Column id=\"HEAD_STAT_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"RQST_NO\">ACT02201501-0001</Col><Col id=\"RQST_DT\">20200101</Col><Col id=\"APV_STAT_NM\">결재중</Col><Col id=\"APV_STAT_CD\">020-000-0100</Col><Col id=\"RQST_DEPT_NM\">인사총무팀</Col><Col id=\"RQST_NM\">홍길동</Col><Col id=\"RQST_AMT\">100000</Col><Col id=\"SBJ\">연구활동비 지급신청서</Col><Col id=\"isChecked\">I</Col><Col id=\"NUM\">1</Col><Col id=\"HEAD_STAT_CD\">I</Col></Row><Row><Col id=\"NUM\">2</Col></Row><Row><Col id=\"NUM\">3</Col></Row><Row><Col id=\"NUM\">4</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_save",null,"20","65","28","186",null,null,null,null,null,this);
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Save");
            obj.set_visible("true");
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Button("btn_list",null,"20","65","28","50",null,null,null,null,null,this);
            obj.set_text("목록");
            obj.set_cssclass("btn_WF_List");
            obj.set_visible("true");
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delete",null,"20","65","28","118",null,null,null,null,null,this);
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_Delete");
            obj.set_visible("true");
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title","50","0","205","58",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("일반등록화면");
            obj.set_cssclass("sta_WF_compTitle01");
            this.addChild(obj.name, obj);

            obj = new Button("btn_help",null,"20","79","28","418",null,null,null,null,null,this);
            obj.set_text("도움말");
            obj.set_cssclass("btn_WF_icoHelp");
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_approval",null,"20","93","28","322",null,null,null,null,null,this);
            obj.set_text("결재상신");
            obj.set_cssclass("btn_WF_icoApproval");
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","258","0","50","58",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("h 58");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new Button("btn_registration",null,"20","65","28","254",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("신규");
            this.addChild(obj.name, obj);

            obj = new Static("Static02",null,"0","50",null,"0","0",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("W50");
            obj.set_visible("false");
            obj.set_background("antiquewhite");
            obj.set_color("blue");
            this.addChild(obj.name, obj);

            obj = new Static("Static50","0","0","50",null,null,"0",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("W50");
            obj.set_visible("false");
            obj.set_background("antiquewhite");
            obj.set_color("blue");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","50","58",null,"105","50",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Transparent");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0",null,null,"0","15",null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_bg");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static08","75.00%","15","100","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("신청부서");
            obj.set_cssclass("sta_WF_condition01");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static05","20","15","100","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("신청번호");
            obj.set_cssclass("sta_WF_condition01");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit03","Static08:10","15","13.74%","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_enable("false");
            obj.set_cssclass("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static09","25.00%","15","100","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_text("신청일");
            obj.set_cssclass("sta_WF_condition01");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit08","Static09:10","15","13.74%","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_enable("false");
            obj.set_cssclass("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27","50.00%","15","100","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_text("신청자");
            obj.set_cssclass("sta_WF_condition01");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit06","Static27:10","15","13.74%","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_enable("false");
            obj.set_cssclass("");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit04","Static05:10","15","13.74%","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_enable("false");
            obj.set_cssclass("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static24","20","49","100","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_text("신청자직위");
            obj.set_cssclass("sta_WF_condition01");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static17","25.00%","49","100","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_text("결재상태");
            obj.set_cssclass("sta_WF_condition01");
            this.Div00.addChild(obj.name, obj);

            obj = new Calendar("Calendar02","Static24:10","49","6.43%","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_displaynulltext("____-__-__");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_weekformat("일 월 화 수 목 금 토");
            obj.set_popupsize("220");
            obj.set_headheight("28");
            obj.set_daysize("28 28");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00","Static17:10","49","6.43%","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            obj.set_cssclass("");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button01","Edit00:4.974000000000046","49","26","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("13");
            obj.set_cssclass("btn_WF_frmSearch");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static14_00","20","41",null,"8","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("14");
            obj.set_text("h 8");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static12_00","0","1","20","89",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("15");
            obj.set_text("w 20");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static12_00_00",null,"0","20","89","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("16");
            obj.set_text("w 20");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static12_01","395","1","60","84",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("17");
            obj.set_text("w 60");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static12_01_00","850","1","60","84",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("18");
            obj.set_text("w 60");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static12_01_00_00","1305","1","60","84",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("19");
            obj.set_text("w 60");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static34","120","15","10","60",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("20");
            obj.set_text("w 10");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static34_00","555","15","10","60",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("21");
            obj.set_text("w 10");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static34_00_00","1010","15","10","60",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("22");
            obj.set_text("w 10");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static34_00_00_00","1465","15","10","60",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("23");
            obj.set_text("w 10");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static13_00_00","682","49","5","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("24");
            obj.set_text("w 5");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static06_00","0",null,"50","15",null,"0",null,null,null,null,this.Div00.form);
            obj.set_taborder("25");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static11","20","0",null,"15","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("26");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static15","20","75",null,"15","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("27");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div01","50","163","1820","266",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("Div01");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","0","0","500","45",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("상세정보");
            obj.set_cssclass("sta_WF_subTitle01");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static12","20","45",null,"34","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_condition02box");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static20","20","78",null,"34","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_condition02box");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static18","20","111",null,"34","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_condition02box");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static25","20","144",null,"122","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_condition02box");
            obj.set_text("");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static13","0","45","8.19%","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("5");
            obj.set_text("수기입력");
            obj.set_cssclass("sta_WF_condition02_L");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static21","0","78","8.19%","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("6");
            obj.set_text("라디오버튼입력");
            obj.set_cssclass("sta_WF_condition02_L");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static22","33.33%","45","8.24%","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("7");
            obj.set_text("필수입력");
            obj.set_cssclass("sta_WF_condition02");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static23","33.33%","78","8.24%","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("8");
            obj.set_text("콤보입력");
            obj.set_cssclass("sta_WF_condition02");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static15","66.66%","78","8.24%","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("9");
            obj.set_text("팝업입력");
            obj.set_cssclass("sta_WF_condition02");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static19","0","111","8.19%","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("10");
            obj.set_text("기간입력");
            obj.set_cssclass("sta_WF_condition02_L");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static26","0","144","8.19%","122",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("11");
            obj.set_text("수기입력");
            obj.set_cssclass("sta_WF_condition02_L");
            this.Div01.addChild(obj.name, obj);

            obj = new Combo("Combo00","Static23:10","82","17.53%","26",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("12");
            obj.set_displaynulltext("선택");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit05","Static22:10","49","17.53%","26",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("13");
            obj.set_cssclass("");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit07","Static15:10","82","6.43%","26",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("14");
            obj.set_cssclass("");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button02","Edit07:0","82","26","26",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("15");
            obj.set_cssclass("btn_WF_frmSearch");
            obj.set_text("");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static28","33.33%","111","8.24%","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("16");
            obj.set_text("팝업데이터");
            obj.set_cssclass("sta_WF_condition02");
            this.Div01.addChild(obj.name, obj);

            obj = new TextArea("TextArea01","Static26:10","148",null,"113","45",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("17");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit01","Static13:10","49","17.53%","26",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("18");
            obj.set_cssclass("");
            this.Div01.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","Static19:10","115","8.08%","26",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("19");
            obj.set_displaynulltext("____-__-__");
            obj.set_dateformat("yyyy-MM-dd");
            this.Div01.addChild(obj.name, obj);

            obj = new Calendar("Calendar01","Calendar00:14","115","8.08%","26",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("20");
            obj.set_displaynulltext("____-__-__");
            obj.set_dateformat("yyyy-MM-dd");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static29","Calendar00:0","115","14","26",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("21");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.Div01.addChild(obj.name, obj);

            obj = new Radio("Radio00","Static21:10","82","248","26",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("22");
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

            obj = new Edit("Edit09","Static28:10","115","8.08%","26",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("23");
            obj.set_cssclass("");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static49","66.66%","45","8.24%","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("24");
            obj.set_text("readonly");
            obj.set_cssclass("sta_WF_condition02");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit10","Static49:10","49","17.53%","26",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("25");
            obj.set_readonly("true");
            obj.set_value("읽기전용");
            obj.set_enable("true");
            obj.set_cssclass("");
            obj.set_text("읽기전용");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static51","66.66%","111","8.24%","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("26");
            obj.set_text("체크박스");
            obj.set_cssclass("sta_WF_condition02");
            this.Div01.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","Static51:10","115","250","26",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("27");
            obj.set_text("사용여부");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static30","149","45","10","223",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("28");
            obj.set_text("w 10");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static32","755","46","10","96",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("29");
            obj.set_text("w 10");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static33","1362","44","10","103",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("30");
            obj.set_text("w 10");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button04","Edit09:0","115","26","26",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("32");
            obj.set_cssclass("btn_WF_frmSearch");
            obj.set_text("");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit02","Button04:0","115","8.08%","26",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("31");
            obj.set_cssclass("");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static12_00",null,"0","136","45","20",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("33");
            obj.set_text("체크는 필수항목입니다.");
            obj.set_cssclass("essential_R");
            obj.set_usedecorate("true");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static05_00","206","0","44","45",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("34");
            obj.set_text("h 45");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.Div01.addChild(obj.name, obj);

            obj = new Div("Div02","50","439",null,"211","50",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("Div02");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Static("Static37","0","0","500","45",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("0");
            obj.set_text("Grid입력");
            obj.set_cssclass("sta_WF_subTitle01");
            this.Div02.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","45",null,null,"0","0",null,null,null,null,this.Div02.form);
            obj.set_taborder("1");
            obj.set_binddataset("ds_list");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"40\"/><Column size=\"47\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"83\"/><Column size=\"43\"/><Column size=\"95\"/><Column size=\"120\"/><Column size=\"95\"/><Column size=\"292\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"34\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"선택\"/><Cell col=\"2\" text=\"상태\"/><Cell col=\"3\" text=\"신청번호\"/><Cell col=\"4\" text=\"신청일\"/><Cell col=\"5\" text=\"결재상태\"/><Cell col=\"6\" text=\"문서\"/><Cell col=\"7\" text=\"신청부서\"/><Cell col=\"8\" text=\"신청자\"/><Cell col=\"9\" text=\"신청금액\"/><Cell col=\"10\" text=\"제목\"/></Band><Band id=\"body\"><Cell text=\"bind:NUM\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:isChecked\" border=\"1px solid #cbcbcb,1px solid #cbcbcb,1px solid #cbcbcb,0px none\"/><Cell col=\"2\" text=\"bind:HEAD_STAT_CD\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"3\" displaytype=\"editcontrol\" edittype=\"text\" text=\"bind:RQST_NO\" editdisplay=\"display\"/><Cell col=\"4\" displaytype=\"calendarcontrol\" edittype=\"date\" text=\"bind:RQST_DT\" editdisplay=\"edit\" calendardisplay=\"display\" calendardateformat=\"yyyy-MM-dd\" cssclass=\"\"/><Cell col=\"5\" displaytype=\"combocontrol\" edittype=\"combo\" text=\"bind:APV_STAT_NM\" editdisplay=\"edit\" combodisplay=\"display\"/><Cell col=\"6\" displaytype=\"normal\" edittype=\"button\" editdisplay=\"display\" expandshow=\"hide\" cssclass=\"\"/><Cell col=\"7\" displaytype=\"editcontrol\" edittype=\"text\" text=\"bind:RQST_DEPT_NM\" editdisplay=\"display\" expandimage=\"URL(&apos;image::img_WF_Expand.png&apos;)\" combodisplay=\"edit\"/><Cell col=\"8\" displaytype=\"editcontrol\" edittype=\"text\" text=\"bind:RQST_NM\" cssclass=\"\" expandshow=\"show\" expandsize=\"26\"/><Cell col=\"9\" displaytype=\"editcontrol\" edittype=\"mask\" text=\"bind:RQST_AMT\" textAlign=\"right\" verticalAlign=\"middle\" cssclass=\"\"/><Cell col=\"10\" displaytype=\"editcontrol\" edittype=\"text\" text=\"bind:SBJ\" cssclass=\"\"/></Band></Format></Formats>");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("btn_row_add",null,"14","73","26","98",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("2");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_Row_Add");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("btn_row_delete",null,"14","73","26","20",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("3");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_Row_Delete");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("btn_list00",null,"14","85","26","176",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("4");
            obj.set_text("불러오기");
            obj.set_cssclass("btn_WF_grdUpload");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("btn_row_down",null,"14","73","26","332",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("5");
            obj.set_text("아래로");
            obj.set_cssclass("btn_WF_grdArrDown");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("btn_row_up",null,"14","61","26","266",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("6");
            obj.set_text("위로");
            obj.set_cssclass("btn_WF_grdArrUp");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static05","1756","0","44","14",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("7");
            obj.set_text("h 14");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static05_00","1436","40","364","5",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("8");
            obj.set_text("h 5");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static30","1722","14","5","26",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("9");
            obj.set_text("w 5");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static05_00_00","206","0","44","45",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("10");
            obj.set_text("h 45");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static03_00_00",null,"48","50","10","50",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00_00_00_00",null,"429","50","10","1820",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00","1660","0",null,"20","50",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("h 20");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01.form
            obj = new Layout("default","",0,0,this.Div01.form,function(p){});
            this.Div01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div02.form
            obj = new Layout("default","",0,0,this.Div02.form,function(p){});
            this.Div02.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("pat_0003.xfdl", function() {

        this.Static03_00_00_00_00_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Div00.form.Static00.addEventHandler("onclick",this.Div00_Static00_onclick,this);
            this.Div00.form.Edit08.addEventHandler("onchanged",this.Edit_onchanged,this);
            this.Div00.form.Edit06.addEventHandler("onchanged",this.Edit_onchanged,this);
            this.Div00.form.Calendar02.addEventHandler("onchanged",this.Div00_Calendar02_onchanged,this);
            this.Div00.form.Static12_00.addEventHandler("onclick",this.div_Search_Static12_onclick,this);
            this.Div00.form.Static12_00_00.addEventHandler("onclick",this.div_Search_Static12_onclick,this);
            this.Div00.form.Static12_01.addEventHandler("onclick",this.div_Search_Static12_onclick,this);
            this.Div00.form.Static12_01_00.addEventHandler("onclick",this.div_Search_Static12_onclick,this);
            this.Div00.form.Static12_01_00_00.addEventHandler("onclick",this.div_Search_Static12_onclick,this);
            this.Div01.form.TextArea01.addEventHandler("oneditclick",this.TextArea01_oneditclick,this);
            this.Div01.form.Static29.addEventHandler("onclick",this.Div01_Static29_onclick,this);
            this.Div01.form.Radio00.addEventHandler("onitemclick",this.Div00_Radio00_onitemclick,this);
            this.Div01.form.Static30.addEventHandler("onclick",this.Div01_Static30_onclick,this);
            this.Div01.form.Static12_00.addEventHandler("onclick",this.Div01_Static12_onclick,this);
            this.Div02.form.Static37.addEventHandler("onclick",this.Div02_Static37_onclick,this);
            this.Static03_00_00_00_00.addEventHandler("onclick",this.Static03_00_00_00_00_onclick,this);
        };
        this.loadIncludeScript("pat_0003.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
