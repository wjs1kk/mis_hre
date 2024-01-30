(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CMS_1050P");
            this.set_titletext("배너 및 팝업 등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,595);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsAdvtManage", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"advtId\" type=\"STRING\" size=\"256\"/><Column id=\"advtType\" type=\"STRING\" size=\"256\"/><Column id=\"advtTitle\" type=\"STRING\" size=\"256\"/><Column id=\"advtCont\" type=\"STRING\" size=\"256\"/><Column id=\"advtStartDt\" type=\"STRING\" size=\"256\"/><Column id=\"advtEndDt\" type=\"STRING\" size=\"256\"/><Column id=\"sortOrdr\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"attachFileId\" type=\"STRING\" size=\"256\"/><Column id=\"rowStatus\" type=\"STRING\" size=\"256\"/><Column id=\"rowCheck\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAdTyCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"text\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUseYn", this);
            obj._setContents("<ColumnInfo><Column id=\"text\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","0","0","1000","595",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","1000","50",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("배너 및 팝업 등록");
            obj.set_cssclass("sta_WF_popupTitle");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static10","0","50","30","586",null,null,null,null,null,null,this.Div00.form);
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

            obj = new Static("Static10_00",null,"50","30","586","0",null,null,null,null,null,this.Div00.form);
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

            obj = new Static("Static04_00_00_01_00","449",null,"103","23",null,"0",null,null,null,null,this.Div00.form);
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

            obj = new Div("div_Search02_00","30","70","940","450",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_cssclass("div_WF_popup");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static10","0","-1","19","132",null,null,null,null,null,null,this.Div00.form.div_Search02_00.form);
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

            obj = new Static("Static04_00_00_00","110","0","60","45",null,null,null,null,null,null,this.Div00.form.div_Search02_00.form);
            obj.set_taborder("2");
            obj.set_text("h 45");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.Div00.form.div_Search02_00.addChild(obj.name, obj);

            obj = new Static("Static07_01_01_00","21","80",null,"1","21",null,null,null,null,null,this.Div00.form.div_Search02_00.form);
            obj.set_taborder("3");
            obj.set_background("#dddddd");
            obj.set_text("");
            this.Div00.form.div_Search02_00.addChild(obj.name, obj);

            obj = new Static("Static07_01_01_00_00","21","45",null,"1","21",null,null,null,null,null,this.Div00.form.div_Search02_00.form);
            obj.set_taborder("4");
            obj.set_background("#dddddd");
            obj.set_text("");
            this.Div00.form.div_Search02_00.addChild(obj.name, obj);

            obj = new Static("Static07_01_01_00_01","21","115",null,"1","21",null,null,null,null,null,this.Div00.form.div_Search02_00.form);
            obj.set_taborder("5");
            obj.set_background("#dddddd");
            obj.set_text("");
            this.Div00.form.div_Search02_00.addChild(obj.name, obj);

            obj = new Static("sta_dtlInfo","19","11","169","27",null,null,null,null,null,null,this.Div00.form.div_Search02_00.form);
            obj.set_taborder("8");
            obj.set_text("배너 & 팝업");
            obj.set_cssclass("sta_WF_subTitle01");
            this.Div00.form.div_Search02_00.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00","20","45","1",null,null,"20",null,null,null,null,this.Div00.form.div_Search02_00.form);
            obj.set_taborder("6");
            obj.set_background("#00388e");
            obj.set_text("");
            this.Div00.form.div_Search02_00.addChild(obj.name, obj);

            obj = new Static("Static07_01_02_00","171","45","1",null,null,"20",null,null,null,null,this.Div00.form.div_Search02_00.form);
            obj.set_taborder("7");
            obj.set_background("#dddddd");
            this.Div00.form.div_Search02_00.addChild(obj.name, obj);

            obj = new Static("sta008","21","290","150","104",null,null,null,null,null,null,this.Div00.form.div_Search02_00.form);
            obj.set_taborder("9");
            obj.set_text("내용");
            obj.set_cssclass("sta_WF_condition02");
            this.Div00.form.div_Search02_00.addChild(obj.name, obj);

            obj = new Static("sta001","21","46","150","34",null,null,null,null,null,null,this.Div00.form.div_Search02_00.form);
            obj.set_taborder("10");
            obj.set_text("유형");
            obj.set_cssclass("sta_WF_condition02");
            this.Div00.form.div_Search02_00.addChild(obj.name, obj);

            obj = new Static("sta002","21","81","150","34",null,null,null,null,null,null,this.Div00.form.div_Search02_00.form);
            obj.set_taborder("11");
            obj.set_text("제목");
            obj.set_cssclass("sta_WF_condition02");
            this.Div00.form.div_Search02_00.addChild(obj.name, obj);

            obj = new Static("Static10_00","172","46","12","34",null,null,null,null,null,null,this.Div00.form.div_Search02_00.form);
            obj.set_taborder("12");
            obj.set_text("w12");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.Div00.form.div_Search02_00.addChild(obj.name, obj);

            obj = new Static("Static10_00_00_00","172","116","12","464",null,null,null,null,null,null,this.Div00.form.div_Search02_00.form);
            obj.set_taborder("13");
            obj.set_text("w12");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.Div00.form.div_Search02_00.addChild(obj.name, obj);

            obj = new Static("Static10_00_01","172","81","12","34",null,null,null,null,null,null,this.Div00.form.div_Search02_00.form);
            obj.set_taborder("14");
            obj.set_text("w12");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.Div00.form.div_Search02_00.addChild(obj.name, obj);

            obj = new Calendar("edtRqstDt","184","225","118","26",null,null,null,null,null,null,this.Div00.form.div_Search02_00.form);
            obj.set_taborder("15");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_weekformat("일 월 화 수 목 금 토");
            obj.set_daysize("29 29");
            obj.set_headheight("28");
            obj.set_cssclass("essential");
            obj.set_enable("false");
            this.Div00.form.div_Search02_00.addChild(obj.name, obj);

            obj = new Edit("edtAdvtTitle","184","85","78.04%","26",null,null,null,null,null,null,this.Div00.form.div_Search02_00.form);
            obj.set_taborder("16");
            obj.set_maxlength("100");
            obj.set_cssclass("essential");
            obj.set_text("\'23-1차 글로벌 방위사업 지원과제 모집 공고");
            this.Div00.form.div_Search02_00.addChild(obj.name, obj);

            obj = new Static("sta009","21","393","150","34",null,null,null,null,null,null,this.Div00.form.div_Search02_00.form);
            obj.set_taborder("17");
            obj.set_text("첨부파일");
            obj.set_cssclass("sta_WF_condition02");
            this.Div00.form.div_Search02_00.addChild(obj.name, obj);

            obj = new Static("Static07_01_01_00_01_00_00","20","426",null,"1","22",null,null,null,null,null,this.Div00.form.div_Search02_00.form);
            obj.set_taborder("18");
            obj.set_background("#dddddd");
            obj.set_text("");
            this.Div00.form.div_Search02_00.addChild(obj.name, obj);

            obj = new Static("Static07_01_01_00_01_00","20","394",null,"1","22",null,null,null,null,null,this.Div00.form.div_Search02_00.form);
            obj.set_taborder("19");
            obj.set_background("#dddddd");
            obj.set_text("");
            this.Div00.form.div_Search02_00.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","184","301","732","83",null,null,null,null,null,null,this.Div00.form.div_Search02_00.form);
            obj.set_taborder("20");
            obj.set_scrolltype("vertical");
            this.Div00.form.div_Search02_00.addChild(obj.name, obj);

            obj = new Static("Static07_01_01_00_01_01","21","150",null,"1","21",null,null,null,null,null,this.Div00.form.div_Search02_00.form);
            obj.set_taborder("21");
            obj.set_background("#dddddd");
            obj.set_text("");
            this.Div00.form.div_Search02_00.addChild(obj.name, obj);

            obj = new Static("sta003","21","116","150","34",null,null,null,null,null,null,this.Div00.form.div_Search02_00.form);
            obj.set_taborder("22");
            obj.set_text("순번");
            obj.set_cssclass("sta_WF_condition02");
            this.Div00.form.div_Search02_00.addChild(obj.name, obj);

            obj = new Static("Static10_00_01_00","172","116","12","34",null,null,null,null,null,null,this.Div00.form.div_Search02_00.form);
            obj.set_taborder("23");
            obj.set_text("w12");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.Div00.form.div_Search02_00.addChild(obj.name, obj);

            obj = new Static("Static01_00","71","80","25","34",null,null,null,null,null,null,this.Div00.form.div_Search02_00.form);
            obj.set_taborder("24");
            obj.set_text("*");
            obj.set_cssclass("essential");
            obj.set_tooltiptext("필수입력");
            this.Div00.form.div_Search02_00.addChild(obj.name, obj);

            obj = new Combo("comboAdTyPopup","184","50","115","26",null,null,null,null,null,null,this.Div00.form.div_Search02_00.form);
            obj.set_taborder("1");
            obj.set_datacolumn("text");
            obj.set_codecolumn("value");
            obj.set_innerdataset("dsAdTyCombo");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.Div00.form.div_Search02_00.addChild(obj.name, obj);

            obj = new Static("Static07_01_01_00_01_01_00","21","220",null,"1","21",null,null,null,null,null,this.Div00.form.div_Search02_00.form);
            obj.set_taborder("25");
            obj.set_background("#dddddd");
            obj.set_text("");
            this.Div00.form.div_Search02_00.addChild(obj.name, obj);

            obj = new Static("sta004","21","151","150","34",null,null,null,null,null,null,this.Div00.form.div_Search02_00.form);
            obj.set_taborder("26");
            obj.set_text("게시 기간");
            obj.set_cssclass("sta_WF_condition02");
            this.Div00.form.div_Search02_00.addChild(obj.name, obj);

            obj = new Static("Static10_00_01_00_00","172","151","12","34",null,null,null,null,null,null,this.Div00.form.div_Search02_00.form);
            obj.set_taborder("27");
            obj.set_text("w12");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.Div00.form.div_Search02_00.addChild(obj.name, obj);

            obj = new Calendar("edtFromDt","184","155","118","26",null,null,null,null,null,null,this.Div00.form.div_Search02_00.form);
            obj.set_taborder("28");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_weekformat("일 월 화 수 목 금 토");
            obj.set_daysize("29 29");
            obj.set_headheight("28");
            obj.set_cssclass("essential");
            this.Div00.form.div_Search02_00.addChild(obj.name, obj);

            obj = new Static("Static07_01_01_00_01_01_00_00","19","255",null,"1","23",null,null,null,null,null,this.Div00.form.div_Search02_00.form);
            obj.set_taborder("29");
            obj.set_background("#dddddd");
            obj.set_text("");
            this.Div00.form.div_Search02_00.addChild(obj.name, obj);

            obj = new Static("sta006","21","221","150","34",null,null,null,null,null,null,this.Div00.form.div_Search02_00.form);
            obj.set_taborder("30");
            obj.set_text("작성일");
            obj.set_cssclass("sta_WF_condition02");
            this.Div00.form.div_Search02_00.addChild(obj.name, obj);

            obj = new Static("Static10_00_01_00_00_00","172","221","12","34",null,null,null,null,null,null,this.Div00.form.div_Search02_00.form);
            obj.set_taborder("31");
            obj.set_text("w12");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.Div00.form.div_Search02_00.addChild(obj.name, obj);

            obj = new Calendar("edtToDt","335","155","118","26",null,null,null,null,null,null,this.Div00.form.div_Search02_00.form);
            obj.set_taborder("32");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_weekformat("일 월 화 수 목 금 토");
            obj.set_daysize("29 29");
            obj.set_headheight("28");
            obj.set_cssclass("essential");
            this.Div00.form.div_Search02_00.addChild(obj.name, obj);

            obj = new Static("Static01","302","155","33","26",null,null,null,null,null,null,this.Div00.form.div_Search02_00.form);
            obj.set_taborder("33");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.Div00.form.div_Search02_00.addChild(obj.name, obj);

            obj = new Static("Static07_01_01_00_01_01_00_00_00","21","290",null,"1","21",null,null,null,null,null,this.Div00.form.div_Search02_00.form);
            obj.set_taborder("34");
            obj.set_background("#dddddd");
            obj.set_text("");
            this.Div00.form.div_Search02_00.addChild(obj.name, obj);

            obj = new Static("sta007","21","256","150","34",null,null,null,null,null,null,this.Div00.form.div_Search02_00.form);
            obj.set_taborder("35");
            obj.set_text("작성자");
            obj.set_cssclass("sta_WF_condition02");
            this.Div00.form.div_Search02_00.addChild(obj.name, obj);

            obj = new Static("Static10_00_01_00_00_00_00","172","256","12","34",null,null,null,null,null,null,this.Div00.form.div_Search02_00.form);
            obj.set_taborder("36");
            obj.set_text("w12");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.Div00.form.div_Search02_00.addChild(obj.name, obj);

            obj = new Edit("RqstNm","184","260","80","26",null,null,null,null,null,null,this.Div00.form.div_Search02_00.form);
            obj.set_taborder("37");
            obj.set_cssclass("");
            obj.set_enable("false");
            obj.set_text("admin");
            this.Div00.form.div_Search02_00.addChild(obj.name, obj);

            obj = new Edit("RqstNm2","270","260","11.09%","26",null,null,null,null,null,null,this.Div00.form.div_Search02_00.form);
            obj.set_taborder("38");
            obj.set_cssclass("");
            obj.set_enable("false");
            obj.set_text("관리자");
            this.Div00.form.div_Search02_00.addChild(obj.name, obj);

            obj = new Edit("edtCont","184","120","80","26",null,null,null,null,null,null,this.Div00.form.div_Search02_00.form);
            obj.set_taborder("39");
            obj.set_cssclass("");
            obj.set_enable("true");
            obj.set_text("100");
            this.Div00.form.div_Search02_00.addChild(obj.name, obj);

            obj = new Static("sta005","21","186","150","34",null,null,null,null,null,null,this.Div00.form.div_Search02_00.form);
            obj.set_taborder("40");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_condition02");
            this.Div00.form.div_Search02_00.addChild(obj.name, obj);

            obj = new Combo("ComboUseYn","184","190","115","26",null,null,null,null,null,null,this.Div00.form.div_Search02_00.form);
            obj.set_taborder("41");
            obj.set_innerdataset("dsUseYn");
            obj.set_datacolumn("text");
            obj.set_codecolumn("value");
            obj.set_value("");
            obj.set_index("-1");
            this.Div00.form.div_Search02_00.addChild(obj.name, obj);

            obj = new Static("Static07_01_01_00_01_01_00_01","21","185",null,"1","21",null,null,null,null,null,this.Div00.form.div_Search02_00.form);
            obj.set_taborder("42");
            obj.set_background("#dddddd");
            obj.set_text("");
            this.Div00.form.div_Search02_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","71","46","25","34",null,null,null,null,null,null,this.Div00.form.div_Search02_00.form);
            obj.set_taborder("43");
            obj.set_text("*");
            obj.set_cssclass("essential");
            obj.set_tooltiptext("필수입력");
            this.Div00.form.div_Search02_00.addChild(obj.name, obj);

            obj = new FileUpload("FileUpload01","189","398","136","89",null,null,null,null,null,null,this.Div00.form.div_Search02_00.form);
            obj.set_taborder("44");
            this.Div00.form.div_Search02_00.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_01_00_00","450",null,"103","25",null,"51",null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btnPopClose",null,null,"65","28","400","23",null,null,null,null,this.Div00.form);
            obj.set_text("닫기");
            obj.set_cssclass("");
            obj.set_visible("true");
            obj.set_taborder("7");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btnSave","400",null,"65","28",null,"23",null,null,null,null,this.Div00.form);
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_icoSave");
            obj.set_taborder("8");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btnDelete","468",null,"64","28",null,"23",null,null,null,null,this.Div00.form);
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_icoDelete");
            obj.set_taborder("9");
            obj.set_visible("true");
            this.Div00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form.div_Search02_00.form
            obj = new Layout("default","",1032,72,this.Div00.form.div_Search02_00.form,function(p){});
            this.Div00.form.div_Search02_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Div00.form.div_Search02_00.form.comboAdTyPopup","value","dsAdvtManage","advtType");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Div00.form.div_Search02_00.form.edtAdvtTitle","value","dsAdvtManage","advtTitle");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Div00.form.div_Search02_00.form.edtCont","value","dsAdvtManage","sortOrdr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","Div00.form.div_Search02_00.form.RqstNm","value","dsAdvtManage","advtId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","Div00.form.div_Search02_00.form.TextArea00","value","dsAdvtManage","advtCont");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","Div00.form.div_Search02_00.form.edtFromDt","value","dsAdvtManage","advtStartDt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","Div00.form.div_Search02_00.form.edtToDt","value","dsAdvtManage","advtEndDt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","Div00.form.div_Search02_00.form.ComboUseYn","value","dsAdvtManage","useYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","Div00.form.div_Search02_00.form.edtRqstDt","value","dsAdvtManage","advtStartDt");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("CMS_1050P.xfdl","lib::common.xjs");
        this.registerScript("CMS_1050P.xfdl", function() {
        /**
        *  배너 및 팝업 등록
        *  MenuPath      관리메뉴-관리자-배너 및 팝업 관리
        *  FileName      advtManagePopup.xfdl
        *  Creator 	     moonsj
        *  CreateDate    2023.03.15
        *  Desction      배너 및 팝업 등록
        ************** 소스 수정 이력 ***********************************************
        *  date          Modifier    Description
        *******************************************************************************
        *  2023.03.15    moonsj 	 최초 생성
        *******************************************************************************/
        this.executeIncludeScript("lib::common.xjs"); /*include "lib::common.xjs"*/;
        /***********************************************************************************************
        * FORM EVENT 영역(onload, onbeforeclose)
        /***********************************************************************************************/
        /**
         * description 화면 onload
        */

        var isNewData = false;

        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnLoad(this);
        	this.gfnLoadCombo("loadCombo", "dsAdTyCombo=CMS:ADVT_TYPE:C dsUseYn=SM:USE_YN:C", "fnCallBack");
        	var nRowObj = this.parent.sRowObj;

        	if(nRowObj == null){	//신규화면
        		this.dsAdvtManage.setColumn(0, "rowStatus", "inserted");
        		this.Div00.form.btnDelete.set_enable(false);
        		this.isNewData = true;
        	}else{			// 수정화면
        	    this.isNewData = false;
        		this.Div00.form.btnDelete.set_enable(true);

        		for (const obj in nRowObj) {
        			this.dsAdvtManage.set_updatecontrol(false);
        			if(this.dsAdvtManage.getColumnInfo(obj)){
        				this.dsAdvtManage.setColumn(0, obj, nRowObj[obj])
        			}
        			this.dsAdvtManage.set_updatecontrol(true);
        		}

        		this.dsAdvtManage.setColumn(0, "rowStatus", "updated");
        	}
        };

        /************************************************************************************************
        * TRANSACTION 서비스 호출 처리
        ************************************************************************************************/
        /**
         * description 저장
        */
        this.fnSave = function()
        {
        	var strSvcId    = "setAdvtManageList";
        	var strSvcUrl   = "cms/setAdvtManageList.do";
        	var inData      = "dsAdvtManage";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallBack";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync); 		// 비동기통신 여부 [생략가능]
        };

        /**
         * description 삭제
        */

        this.fnDelete = function ()
        {
        	var strSvcId	= "deleteAdvtManageList";
        	var strSvcUrl	= "cms/deleteAdvtManageList.do";
        	var inData		= "dsAdvtManage";
        	var outData		= "";
        	var strArg		= "";
        	var callBackFnc = "fnCallBack";
        	var isAsync     = true;

        	this.gfnTransaction(strSvcId,strSvcUrl, inData,outData, strArg, callBackFnc, isAsync);
        };

        /**
         * description 수정
        */
        this.fnUpdate = function(obj,e)
        {
            if(this.dsAdvtManage.rowcount == 0){
        		this.gfnAlert("CM_MSG_SAVE_NODATA");  // 저장할 데이터가 없습니다.
        		return;
        	}
        	// 변경사항 체크
        	if (!this.gfnDsIsUpdated(this.dsAdvtManage)) {
        		this.gfnAlert("CM_MSG_SAVE_NOCHANGE");  // 변경된 내역이 없습니다.
        		return;
        	}
        	this.gfnAlert("CM_CFM_BEFORE_SAVE", "", "", {trueFunc: "fnUpdate", falseFunc: ""});  // 변경된 내역을 저장 하시겠습니까?
        	return;
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
        		case "getAdvtManageList":

        		break;
        		case "setAdvtManageList":
        			if(this.callbackMsg == "success"){
        				this.gfnAlert("CM_MSG_SAVE_SUCCESS");  // 저장 되었습니다.
        				// pat 3. 임의의 Object Return / dataset 하나의 row는 gfnGetRowObj 이용
        				var oRtn = new Object();
        				oRtn.CONFIRM = "Y";
        				oRtn.popDS = this.dsAdvtManage;
        				this.gfnPopupClose(oRtn);
        			}else{
        				console.log(sSvcId, nErrorCode, sErrorMsg);
        			}
        			break;

        		case "deleteAdvtManageList":
        			if(this.callbackMsg == "success"){
        			     this.gfnAlert("CM_MSG_DELETE_SUCCESS"); //삭제되었습니다.
        				 this.close();

        			 }else{
        			       console.log(sSvcId, nErrorCode, sErrorMsg);
        			}
        			break;

        		case "loadCombo":
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
        		case "advtManagePopup":

        			break;
        	}
        };

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        /**
         * description close
        */
        this.divPopup_btnPopupClose_onclick = function(obj,e)
        {
        	this.close();
        };

        this.btn_registration_onclick = function(obj,e)
        {
        	this.close();
        };

        /**
         * description 삭제 버튼 클릭시
        */

        this.Div00_btnDelete_onclick = function(obj,e)
        {
        	// 행 갯수 count
        	var cnt = 0;
        	for(var i = 0; i < this.dsAdvtManage.rowcount; i++){
        		if(this.dsAdvtManage.getColumn(i, "rowCheck") == 1){
        			cnt++;
        		}
        	}

        	this.gfnAlert("CM_CFM_DELETE", "", "", {trueFunc: "fnDelete", falseFunc: ""}); // 삭제하시겠습니까?

        };
        /**
         * description 등록, 수정 저장 확인
        */

        this.Div00_btnSave_onclick = function(obj,e)
        {
            if ( this.isNewData == true ) {
        		if(!this.fnNullValidation()){
        		return;
        		}
        // 		if (!this.fnValidation()) {		// 그리드 필수값 체크
        // 		return;
        //     }
        	   this.dsAdvtManage.setColumn(0,"rowStatus","inserted");

        	}else {
        	   this.dsAdvtManage.setColumn(0,"rowStatus","updated");

        	}
        // 	!this.fnNullValidation(); // null 체크
        // 		return;

            this.gfnAlert("CM_CFM_BEFORE_SAVE", "", "", {trueFunc: "fnSave", falseFunc: ""});  // 변경된 내역을 저장 하시겠습니까?


        };

        /************************************************************************************************
        * 사용자 FUNCTION 영역
        ************************************************************************************************/

        this.fnNullValidation = function ()
        {
        	// null값 체크
        	if(this.gfnIsNull(this.dsAdvtManage.getColumn(0, "advtType"))) {
        		this.gfnAlert("유형을 선택해주세요.");
        		return false;
            }
        	if(this.gfnIsNull(this.dsAdvtManage.getColumn(0, "advtTitle"))) {
        		this.gfnAlert("제목을 입력해주세요.");
        		return false;
            }

        	if(this.gfnIsNull(this.dsAdvtManage.getColumn(0, "sortOrdr"))) {
        		this.gfnAlert("순번을 입력해주세요.");
        		return false;
            }

        	if(this.gfnIsNull(this.dsAdvtManage.getColumn(0, "advtStartDt"))) {
        		this.gfnAlert("게시기간을 선택해주세요.");
        		return false;
            }


        	if(this.gfnIsNull(this.dsAdvtManage.getColumn(0, "useYn"))) {
        		this.gfnAlert("사용여부를 선택해주세요.");
        		return false;
            }


        // 	if(this.gfnIsNull(this.dsAdvtManage.getColumn(0, "advt"))) {
        // 		this.gfnAlert("첨부파일을 선택해주세요.");
        // 		return false;
        //     }

        	return true;
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.Div00.form.Static04_00_00_01.addEventHandler("onclick",this.Static31_onclick,this);
            this.Div00.form.Static04_00_00_01_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.Div00.form.div_Search02_00.form.Static04_00_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.Div00.form.div_Search02_00.form.Static07_01_01_00.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.Div00.form.div_Search02_00.form.Static07_01_01_00_00.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.Div00.form.div_Search02_00.form.Static07_01_01_00_01.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.Div00.form.div_Search02_00.form.sta_dtlInfo.addEventHandler("onclick",this.Static09_onclick,this);
            this.Div00.form.div_Search02_00.form.Static07_00_00_00.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.Div00.form.div_Search02_00.form.Static07_01_02_00.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.Div00.form.div_Search02_00.form.sta008.addEventHandler("onclick",this.div_Search02_00_in_YY_onclick,this);
            this.Div00.form.div_Search02_00.form.edtAdvtTitle.addEventHandler("oneditclick",this.div_Search_SCH_RQST_NO_oneditclick,this);
            this.Div00.form.div_Search02_00.form.sta009.addEventHandler("onclick",this.div_Search02_00_in_YY_onclick,this);
            this.Div00.form.div_Search02_00.form.Static07_01_01_00_01_00_00.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.Div00.form.div_Search02_00.form.Static07_01_01_00_01_00.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.Div00.form.div_Search02_00.form.Static07_01_01_00_01_01.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.Div00.form.div_Search02_00.form.Static07_01_01_00_01_01_00.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.Div00.form.div_Search02_00.form.Static07_01_01_00_01_01_00_00.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.Div00.form.div_Search02_00.form.Static07_01_01_00_01_01_00_00_00.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.Div00.form.div_Search02_00.form.Static07_01_01_00_01_01_00_01.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.Div00.form.div_Search02_00.form.FileUpload01.addEventHandler("onitemchanged",this.Div00_div_Search02_00_FileUpload01_onitemchanged,this);
            this.Div00.form.Static04_00_00_01_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.Div00.form.btnPopClose.addEventHandler("onclick",this.btn_registration_onclick,this);
            this.Div00.form.btnSave.addEventHandler("onclick",this.Div00_btnSave_onclick,this);
            this.Div00.form.btnDelete.addEventHandler("onclick",this.Div00_btnDelete_onclick,this);
        };
        this.loadIncludeScript("CMS_1050P.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
