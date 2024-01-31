(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("cmMyProjectInfoPopup");
            this.set_titletext("과제정보 상세");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,870);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsUser", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"projectNo\" type=\"STRING\" size=\"256\"/><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"memberId\" type=\"STRING\" size=\"256\"/><Column id=\"userNmKr\" type=\"STRING\" size=\"256\"/><Column id=\"emailAddr\" type=\"STRING\" size=\"256\"/><Column id=\"telNo\" type=\"STRING\" size=\"256\"/><Column id=\"phoneNo\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj.set_updatecontrol("true");
            obj._setContents("<ColumnInfo><Column id=\"projectNo\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsProject", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"projectNo\" type=\"STRING\" size=\"256\"/><Column id=\"projectNm\" type=\"STRING\" size=\"256\"/><Column id=\"projectType\" type=\"STRING\" size=\"256\"/><Column id=\"projectOverview\" type=\"STRING\" size=\"256\"/><Column id=\"projectStartDt\" type=\"STRING\" size=\"256\"/><Column id=\"projectEndDt\" type=\"STRING\" size=\"256\"/><Column id=\"projectDuration\" type=\"STRING\" size=\"256\"/><Column id=\"projectBudget\" type=\"STRING\" size=\"256\"/><Column id=\"rgstId\" type=\"STRING\" size=\"256\"/><Column id=\"RGST_IP\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsProjType", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"text\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","0","0","1000","870",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","1000","50",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("과제정보 상세");
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

            obj = new Div("div_Search02_00","30","70","940","382",null,null,null,null,null,null,this.Div00.form);
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
            obj.set_taborder("1");
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
            obj.set_taborder("2");
            obj.set_background("#dddddd");
            obj.set_text("");
            this.Div00.form.div_Search02_00.addChild(obj.name, obj);

            obj = new Static("Static07_01_01_00_00","21","45",null,"1","21",null,null,null,null,null,this.Div00.form.div_Search02_00.form);
            obj.set_taborder("3");
            obj.set_background("#dddddd");
            obj.set_text("");
            this.Div00.form.div_Search02_00.addChild(obj.name, obj);

            obj = new Static("Static07_01_01_00_01","21","150",null,"1","21",null,null,null,null,null,this.Div00.form.div_Search02_00.form);
            obj.set_taborder("4");
            obj.set_background("#dddddd");
            obj.set_text("");
            this.Div00.form.div_Search02_00.addChild(obj.name, obj);

            obj = new Static("sta_dtlInfo","19","11","169","27",null,null,null,null,null,null,this.Div00.form.div_Search02_00.form);
            obj.set_taborder("7");
            obj.set_text("과제정보");
            obj.set_cssclass("sta_WF_subTitle01");
            this.Div00.form.div_Search02_00.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00","20","45","1",null,null,"20",null,null,null,null,this.Div00.form.div_Search02_00.form);
            obj.set_taborder("5");
            obj.set_background("#00388e");
            obj.set_text("");
            this.Div00.form.div_Search02_00.addChild(obj.name, obj);

            obj = new Static("Static07_01_02_00","171","45","1",null,null,"20",null,null,null,null,this.Div00.form.div_Search02_00.form);
            obj.set_taborder("6");
            obj.set_background("#dddddd");
            this.Div00.form.div_Search02_00.addChild(obj.name, obj);

            obj = new Static("Static11_00","21","46","150","34",null,null,null,null,null,null,this.Div00.form.div_Search02_00.form);
            obj.set_taborder("8");
            obj.set_text("과제NO");
            obj.set_cssclass("sta_WF_condition02");
            this.Div00.form.div_Search02_00.addChild(obj.name, obj);

            obj = new Static("Static23","21","116","150","34",null,null,null,null,null,null,this.Div00.form.div_Search02_00.form);
            obj.set_taborder("9");
            obj.set_text("시작일/종료일");
            obj.set_cssclass("sta_WF_condition02");
            this.Div00.form.div_Search02_00.addChild(obj.name, obj);

            obj = new Static("Static10_00","172","46","12","34",null,null,null,null,null,null,this.Div00.form.div_Search02_00.form);
            obj.set_taborder("10");
            obj.set_text("w12");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.Div00.form.div_Search02_00.addChild(obj.name, obj);

            obj = new Static("Static10_00_00_00","172","116","12",null,null,"20",null,null,null,null,this.Div00.form.div_Search02_00.form);
            obj.set_taborder("11");
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

            obj = new Static("Static07_01_01_00_01_00_00","20","220",null,"1","22",null,null,null,null,null,this.Div00.form.div_Search02_00.form);
            obj.set_taborder("13");
            obj.set_background("#dddddd");
            obj.set_text("");
            this.Div00.form.div_Search02_00.addChild(obj.name, obj);

            obj = new Static("Static07_01_01_00_01_01","21","185",null,"1","21",null,null,null,null,null,this.Div00.form.div_Search02_00.form);
            obj.set_taborder("14");
            obj.set_background("#dddddd");
            obj.set_text("");
            this.Div00.form.div_Search02_00.addChild(obj.name, obj);

            obj = new Static("Static23_00","21","151","150","34",null,null,null,null,null,null,this.Div00.form.div_Search02_00.form);
            obj.set_taborder("15");
            obj.set_text("예산");
            obj.set_cssclass("sta_WF_condition02");
            this.Div00.form.div_Search02_00.addChild(obj.name, obj);

            obj = new Static("Static10_00_01_00","172","151","12","34",null,null,null,null,null,null,this.Div00.form.div_Search02_00.form);
            obj.set_taborder("16");
            obj.set_text("w12");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.Div00.form.div_Search02_00.addChild(obj.name, obj);

            obj = new Static("Static07_01_01_00_01_01_00_00","21","359",null,"1","21",null,null,null,null,null,this.Div00.form.div_Search02_00.form);
            obj.set_taborder("17");
            obj.set_background("#dddddd");
            obj.set_text("");
            this.Div00.form.div_Search02_00.addChild(obj.name, obj);

            obj = new Static("Static23_00_00_00","21","221","150","138",null,null,null,null,null,null,this.Div00.form.div_Search02_00.form);
            obj.set_taborder("18");
            obj.set_text("과제목표");
            obj.set_cssclass("sta_WF_condition02");
            this.Div00.form.div_Search02_00.addChild(obj.name, obj);

            obj = new Static("Static10_00_01_00_00_00","172","266","12","34",null,null,null,null,null,null,this.Div00.form.div_Search02_00.form);
            obj.set_taborder("19");
            obj.set_text("w12");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.Div00.form.div_Search02_00.addChild(obj.name, obj);

            obj = new Static("Static10_00_01_00_00_00_00","172","301","12","34",null,null,null,null,null,null,this.Div00.form.div_Search02_00.form);
            obj.set_taborder("20");
            obj.set_text("w12");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.Div00.form.div_Search02_00.addChild(obj.name, obj);

            obj = new Edit("RQST_NM00_00","184","50","29.00%","26",null,null,null,null,null,null,this.Div00.form.div_Search02_00.form);
            obj.set_taborder("21");
            obj.set_cssclass("");
            obj.set_enable("false");
            obj.set_text("PJC00000001");
            this.Div00.form.div_Search02_00.addChild(obj.name, obj);

            obj = new Static("Static_essential","500","46","148","34",null,null,null,null,null,null,this.Div00.form.div_Search02_00.form);
            obj.set_taborder("22");
            obj.set_text("사업구분");
            obj.set_cssclass("sta_WF_condition02");
            obj.set_border("0px none, 1px solid #dddddd");
            this.Div00.form.div_Search02_00.addChild(obj.name, obj);

            obj = new Static("Static10_00_01_01","648","46","12",null,null,"20",null,null,null,null,this.Div00.form.div_Search02_00.form);
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

            obj = new Calendar("SCH_RQST_DT00","184","120","118","26",null,null,null,null,null,null,this.Div00.form.div_Search02_00.form);
            obj.set_taborder("24");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_weekformat("일 월 화 수 목 금 토");
            obj.set_daysize("29 29");
            obj.set_headheight("28");
            obj.set_cssclass("essential");
            obj.set_enable("false");
            this.Div00.form.div_Search02_00.addChild(obj.name, obj);

            obj = new Static("Static_essential00","500","116","148","34",null,null,null,null,null,null,this.Div00.form.div_Search02_00.form);
            obj.set_taborder("25");
            obj.set_text("기간");
            obj.set_cssclass("sta_WF_condition02");
            obj.set_border("0px none, 1px solid #dddddd");
            this.Div00.form.div_Search02_00.addChild(obj.name, obj);

            obj = new Static("Static10_00_01_01_00","648","80","12","34",null,null,null,null,null,null,this.Div00.form.div_Search02_00.form);
            obj.set_taborder("26");
            obj.set_text("w12");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.Div00.form.div_Search02_00.addChild(obj.name, obj);

            obj = new Edit("RQST_NM00_00_01","184","155","29.00%","26",null,null,null,null,null,null,this.Div00.form.div_Search02_00.form);
            obj.set_taborder("27");
            obj.set_cssclass("");
            obj.set_enable("false");
            obj.set_text("113.3억원");
            this.Div00.form.div_Search02_00.addChild(obj.name, obj);

            obj = new Static("Static_essential00_00","500","151","148","34",null,null,null,null,null,null,this.Div00.form.div_Search02_00.form);
            obj.set_taborder("28");
            obj.set_text("진행상태");
            obj.set_cssclass("sta_WF_condition02");
            obj.set_border("0px none, 1px solid #dddddd");
            this.Div00.form.div_Search02_00.addChild(obj.name, obj);

            obj = new Edit("RQST_NM00_00_00_00","660","155","25.48%","26",null,null,null,null,null,null,this.Div00.form.div_Search02_00.form);
            obj.set_taborder("29");
            obj.set_cssclass("");
            obj.set_enable("false");
            obj.set_value("-");
            obj.set_text("-");
            this.Div00.form.div_Search02_00.addChild(obj.name, obj);

            obj = new Static("Static10_00_01_01_00_00","648","151","12","34",null,null,null,null,null,null,this.Div00.form.div_Search02_00.form);
            obj.set_taborder("30");
            obj.set_text("w12");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.Div00.form.div_Search02_00.addChild(obj.name, obj);

            obj = new Static("Static23_00_00_00_00","21","186","150","34",null,null,null,null,null,null,this.Div00.form.div_Search02_00.form);
            obj.set_taborder("31");
            obj.set_text("과제개요");
            obj.set_cssclass("sta_WF_condition02");
            this.Div00.form.div_Search02_00.addChild(obj.name, obj);

            obj = new Edit("RQST_NM00_00_01_00_00","184","190","76.23%","26",null,null,null,null,null,null,this.Div00.form.div_Search02_00.form);
            obj.set_taborder("32");
            obj.set_cssclass("");
            obj.set_enable("false");
            obj.set_text("「국방과학기술혁신 촉진법」에 의거 산학연주관 응용연구 과제");
            this.Div00.form.div_Search02_00.addChild(obj.name, obj);

            obj = new Static("Static23_00_00_00_00_00","21","81","150","34",null,null,null,null,null,null,this.Div00.form.div_Search02_00.form);
            obj.set_taborder("33");
            obj.set_text("과제명");
            obj.set_cssclass("sta_WF_condition02");
            this.Div00.form.div_Search02_00.addChild(obj.name, obj);

            obj = new Edit("RQST_NM00_00_01_00_00_00","184","85","76.23%","26",null,null,null,null,null,null,this.Div00.form.div_Search02_00.form);
            obj.set_taborder("34");
            obj.set_cssclass("");
            obj.set_enable("false");
            obj.set_text("250kW급 고출력밀도 기술(응용연구)");
            this.Div00.form.div_Search02_00.addChild(obj.name, obj);

            obj = new Static("Static07_01_01_00_01_00","21","115",null,"1","21",null,null,null,null,null,this.Div00.form.div_Search02_00.form);
            obj.set_taborder("35");
            obj.set_background("#dddddd");
            obj.set_text("");
            this.Div00.form.div_Search02_00.addChild(obj.name, obj);

            obj = new Calendar("SCH_RQST_DT00_00","340","120","118","26",null,null,null,null,null,null,this.Div00.form.div_Search02_00.form);
            obj.set_taborder("36");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_weekformat("일 월 화 수 목 금 토");
            obj.set_daysize("29 29");
            obj.set_headheight("28");
            obj.set_cssclass("essential");
            obj.set_enable("false");
            this.Div00.form.div_Search02_00.addChild(obj.name, obj);

            obj = new Static("Static00","309","121","24","26",null,null,null,null,null,null,this.Div00.form.div_Search02_00.form);
            obj.set_taborder("37");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.Div00.form.div_Search02_00.addChild(obj.name, obj);

            obj = new Edit("RQST_NM00_00_02","660","120","25.48%","26",null,null,null,null,null,null,this.Div00.form.div_Search02_00.form);
            obj.set_taborder("38");
            obj.set_cssclass("");
            obj.set_enable("false");
            obj.set_text("72개월");
            this.Div00.form.div_Search02_00.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","184","225","715","129",null,null,null,null,null,null,this.Div00.form.div_Search02_00.form);
            obj.set_taborder("39");
            obj.set_wordWrap("english");
            obj.set_readonly("true");
            this.Div00.form.div_Search02_00.addChild(obj.name, obj);

            obj = new Combo("SCH_APV_STAT_CD00_00","660","50","25.48%","26",null,null,null,null,null,null,this.Div00.form.div_Search02_00.form);
            obj.set_taborder("40");
            obj.set_codecolumn("value");
            obj.set_datacolumn("text");
            obj.set_innerdataset("dsProjType");
            obj.set_enable("false");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("-1");
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

            obj = new Button("btn_popClose",null,null,"65","28","467","23",null,null,null,null,this.Div00.form);
            obj.set_text("닫기");
            obj.set_cssclass("");
            obj.set_visible("true");
            obj.set_taborder("7");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("div_Search02_00_00","30","462","940","333",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_cssclass("div_WF_popup");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static10","0","-1","19","132",null,null,null,null,null,null,this.Div00.form.div_Search02_00_00.form);
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

            obj = new Static("Static09","20","11","169","27",null,null,null,null,null,null,this.Div00.form.div_Search02_00_00.form);
            obj.set_taborder("2");
            obj.set_text("담당자 목록");
            obj.set_cssclass("sta_WF_subTitle01");
            this.Div00.form.div_Search02_00_00.addChild(obj.name, obj);

            obj = new Static("stc_gridRowCnt","149","12","149","27",null,null,null,null,null,null,this.Div00.form.div_Search02_00_00.form);
            obj.set_taborder("3");
            obj.set_text("(총 5건)");
            obj.set_cssclass("sta_WF_subResult");
            this.Div00.form.div_Search02_00_00.addChild(obj.name, obj);

            obj = new Grid("grd_list","20","45",null,null,"20","10",null,null,null,null,this.Div00.form.div_Search02_00_00.form);
            obj.set_taborder("4");
            obj.set_binddataset("dsUser");
            obj.set_autofittype("col");
            obj.set_tooltiptype("default");
            obj.set_autoenter("select");
            obj.set_enable("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"33\"/></Rows><Band id=\"head\"><Cell text=\"NO\"/><Cell col=\"1\" text=\"담당자명 (법인명)\"/><Cell col=\"2\" text=\"담당자ID\"/><Cell col=\"3\" text=\"법인여부\"/><Cell col=\"4\" text=\"사무실 전화번호\"/><Cell col=\"5\" text=\"휴대폰 번호\"/><Cell col=\"6\" text=\"탈퇴여부\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" textAlign=\"center\" expandsize=\"16\" edittype=\"none\"/><Cell col=\"1\" text=\"bind:userNmKr\" displaytype=\"normal\" expandsize=\"16\" edittype=\"none\" textAlign=\"center\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"none\" text=\"bind:userId\" calendardateformat=\"yyyy-MM-dd\" expandsize=\"16\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:legalYn\" textAlign=\"center\" edittype=\"none\"/><Cell col=\"4\" text=\"bind:telNo\" textAlign=\"center\" edittype=\"none\"/><Cell col=\"5\" text=\"bind:phoneNo\" textAlign=\"center\" edittype=\"none\"/><Cell col=\"6\" text=\"bind:useYn\" textAlign=\"center\"/></Band></Format><Format id=\"format_copy\"/></Formats>");
            this.Div00.form.div_Search02_00_00.addChild(obj.name, obj);

            obj = new Static("Static15_01_00","32","451","50","12",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_text("h 12");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.Div00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form.div_Search02_00.form
            obj = new Layout("default","",1032,72,this.Div00.form.div_Search02_00.form,function(p){});
            this.Div00.form.div_Search02_00.form.addLayout(obj.name, obj);

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
            obj = new BindItem("item12","PopupDiv.form.div_Search02_00.form.SCH_RQST_NO","value","ds_search","SCH_RQST_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","PopupDiv.form.div_Search02_00.form.SCH_RQST_DT","value","ds_search","SCH_RQST_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","PopupDiv.form.div_Search02_00.form.SCH_RQST_ID","value","ds_search","SCH_RQST_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","PopupDiv.form.div_Search02_00.form.SCH_APV_STAT_CD","value","ds_search","SCH_APV_STAT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","PopupDiv.form.div_Search02_00.form.SCH_LAST_UPT_NM","value","ds_search","SCH_LAST_UPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","PopupDiv.form.div_Search02_00.form.SCH_LAST_UPT_DT","value","ds_search","SCH_LAST_UPT_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","PopupDiv.form.div_Search02_00.form.SCH_DEPT_CD","value","ds_search","SCH_RQST_DEPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","PopupDiv.form.div_Search02_00.form.SCH_RQST_NM","value","ds_search","SCH_RQST_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","PopupDiv.form.div_Search02_00.form.SCH_CAL_MON","value","ds_search","SCH_CAL_MON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","PopupDiv.form.div_Search02_00.form.Radio00","value","ds_main","INOUT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","PopupDiv.form.div_Search02_00.form.CheckBox00","value","ds_main","COM_CAR_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","PopupDiv.form.div_Search02_00.form.Spin00","value","ds_main","YY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","PopupDiv.form.div_Search02_00.form.Combo00","value","ds_main","TP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","PopupDiv.form.div_Search02_00.form.Edit05","value","ds_main","RQST_AMT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","PopupDiv.form.div_Search02_00.form.RQST_NM","value","ds_main","RQST_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","PopupDiv.form.div_Search02_00.form.TextArea01","value","ds_main","CONT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","PopupDiv.form.div_Search02_00.form.SBJ","value","ds_main","SBJ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","PopupDiv.form.div_Search02_00.form.FRM_DT","value","ds_main","FRM_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","PopupDiv.form.div_Search02_00.form.TO_DT","value","ds_main","TO_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","PopupDiv.form.div_Search02_00.form.rqstNo","value","ds_main","RQST_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","PopupDiv.form.div_Search02_00.form.commCd","value","ds_main","COMM_CD");
            this.addChild(obj.name, obj);
            obj.bind();

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

            obj = new BindItem("item33","div_Search02_00.form.SCH_RQST_NO","value","ds_search","SCH_RQST_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","div_Search02_00.form.SCH_RQST_DT","value","ds_search","SCH_RQST_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","div_Search02_00.form.SCH_RQST_ID","value","ds_search","SCH_RQST_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","div_Search02_00.form.SCH_APV_STAT_CD","value","ds_search","SCH_APV_STAT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","div_Search02_00.form.SCH_LAST_UPT_NM","value","ds_search","SCH_LAST_UPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","div_Search02_00.form.SCH_LAST_UPT_DT","value","ds_search","SCH_LAST_UPT_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","div_Search02_00.form.SCH_DEPT_CD","value","ds_search","SCH_RQST_DEPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item40","div_Search02_00.form.SCH_RQST_NM","value","ds_search","SCH_RQST_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item41","div_Search02_00.form.SCH_CAL_MON","value","ds_search","SCH_CAL_MON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item42","div_Search02_00.form.Radio00","value","ds_main","INOUT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item43","div_Search02_00.form.CheckBox00","value","ds_main","COM_CAR_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item44","div_Search02_00.form.Spin00","value","ds_main","YY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item45","div_Search02_00.form.Combo00","value","ds_main","TP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item46","div_Search02_00.form.Edit05","value","ds_main","RQST_AMT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item47","div_Search02_00.form.RQST_NM","value","ds_main","RQST_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item48","div_Search02_00.form.TextArea01","value","ds_main","CONT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item49","div_Search02_00.form.SBJ","value","ds_main","SBJ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item50","div_Search02_00.form.FRM_DT","value","ds_main","FRM_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item51","div_Search02_00.form.TO_DT","value","ds_main","TO_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item52","div_Search02_00.form.rqstNo","value","ds_main","RQST_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item53","div_Search02_00.form.commCd","value","ds_main","COMM_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item54","Div00.form.div_Search02_00.form.SCH_RQST_NO","value","ds_search","SCH_RQST_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item55","Div00.form.div_Search02_00.form.SCH_RQST_DT","value","ds_search","SCH_RQST_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item56","Div00.form.div_Search02_00.form.SCH_RQST_ID","value","ds_search","SCH_RQST_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item57","Div00.form.div_Search02_00.form.SCH_APV_STAT_CD","value","ds_search","SCH_APV_STAT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item58","Div00.form.div_Search02_00.form.SCH_LAST_UPT_NM","value","ds_search","SCH_LAST_UPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item59","Div00.form.div_Search02_00.form.SCH_LAST_UPT_DT","value","ds_search","SCH_LAST_UPT_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item60","Div00.form.div_Search02_00.form.SCH_DEPT_CD","value","ds_search","SCH_RQST_DEPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item61","Div00.form.div_Search02_00.form.SCH_RQST_NM","value","ds_search","SCH_RQST_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item62","Div00.form.div_Search02_00.form.SCH_CAL_MON","value","ds_search","SCH_CAL_MON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item63","Div00.form.div_Search02_00.form.Radio00","value","ds_main","INOUT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item64","Div00.form.div_Search02_00.form.CheckBox00","value","ds_main","COM_CAR_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item65","Div00.form.div_Search02_00.form.Spin00","value","ds_main","YY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item66","Div00.form.div_Search02_00.form.Combo00","value","ds_main","TP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item67","Div00.form.div_Search02_00.form.Edit05","value","ds_main","RQST_AMT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item68","Div00.form.div_Search02_00.form.RQST_NM","value","ds_main","RQST_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item69","Div00.form.div_Search02_00.form.TextArea01","value","ds_main","CONT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item70","Div00.form.div_Search02_00.form.SBJ","value","ds_main","SBJ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item71","Div00.form.div_Search02_00.form.FRM_DT","value","ds_main","FRM_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item72","Div00.form.div_Search02_00.form.TO_DT","value","ds_main","TO_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item73","Div00.form.div_Search02_00.form.rqstNo","value","ds_main","RQST_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item74","Div00.form.div_Search02_00.form.commCd","value","ds_main","COMM_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item75","Div00.form.div_Search02_00.form.SCH_RQST_DT00","value","dsProject","projectStartDt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item76","Div00.form.div_Search02_00.form.SCH_RQST_DT00_00","value","dsProject","projectEndDt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item77","Div00.form.div_Search02_00.form.SCH_RQST_DT00_00_00","value","ds_search","SCH_RQST_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item78","Div00.form.div_Search02_00.form.SCH_RQST_DT00_00_01","value","ds_search","SCH_RQST_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item79","Div00.form.div_Search02_00.form.SCH_RQST_DT00_00_00_00","value","ds_search","SCH_RQST_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item80","Div00.form.div_Search02_00.form.RQST_NM00","value","ds_main","RQST_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item81","Div00.form.div_Search02_00.form.RQST_NM00_00","value","dsProject","projectNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item82","Div00.form.div_Search02_00.form.RQST_NM00_00_00","value","ds_main","RQST_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item83","Div00.form.div_Search02_00.form.RQST_NM00_00_01","value","dsProject","projectBudget");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item84","Div00.form.div_Search02_00.form.RQST_NM00_00_01_00","value","ds_main","RQST_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item85","Div00.form.div_Search02_00.form.RQST_NM00_00_00_00","value","ds_main","RQST_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item86","Div00.form.div_Search02_00.form.RQST_NM00_00_01_00_00","value","dsProject","projectOverview");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item87","Div00.form.div_Search02_00.form.RQST_NM00_00_01_00_01","value","ds_main","RQST_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item88","Div00.form.div_Search02_00.form.RQST_NM00_00_00_00_00","value","ds_main","RQST_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item89","Div00.form.div_Search02_00.form.RQST_NM00_00_01_00_00_00","value","dsProject","projectNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item90","Div00.form.div_Search02_00.form.RQST_NM00_00_02","value","dsProject","projectDuration");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item91","Div00.form.div_Search02_00.form.SCH_APV_STAT_CD00_00","value","dsProject","projectType");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("cmMyProjectInfoPopup.xfdl","lib::common.xjs");
        this.registerScript("cmMyProjectInfoPopup.xfdl", function() {
        /**
        *  Popup Template
        *  MenuPath      -
        *  FileName      cmMyProjectInfoPopup.xfdl
        *  Creator 	     Kimjs
        *  CreateDate    2023.03.23
        *  Descrption    담당과제 상세조회
        ************** 소스 수정 이력 ***********************************************
        *  date          Modifier    Description
        *******************************************************************************
        *  2023.03.23    Kimjs  	 최초 생성
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
            this.gfnLoadCombo("loadCombo", "dsProjType=PMS:TMP:PROJECT_TY", "fnCallBack");

        };

        /************************************************************************************************
        * TRANSACTION 서비스 호출 처리
        ************************************************************************************************/
        /**
         * description 담당과제 조회
        */
        this.fn_search = function()
        {
        	this.gfnTransaction("getSubjectDtl", "cms/getSubjectDtl.do", "dsSearch", "dsProject dsUser", "", "fnCallBack");
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
                case "loadCombo":
                    this.dsSearch.setColumn(0, "projectNo", this.parent.projectId);
                    this.fn_search();
                break;
        		case "getSubjectDtl":
        			//총 건수 계산
        			this.gfnRowCount(this.dsUser, this.Div00.form.div_Search02_00_00.form.stc_gridRowCnt);
        		break;
        		default:
        		break;
        	}
        };

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/

        this.btn_registration_onclick = function(obj,e)
        {
        	this.close();
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
            this.Div00.form.div_Search02_00.form.Static07_01_01_00_01_00_00.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.Div00.form.div_Search02_00.form.Static07_01_01_00_01_01.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.Div00.form.div_Search02_00.form.Static07_01_01_00_01_01_00_00.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.Div00.form.div_Search02_00.form.Static07_01_01_00_01_00.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.Div00.form.div_Search02_00.form.SCH_APV_STAT_CD00_00.addEventHandler("ondropdown",this.div_Search_sch_apv_stat_cd_ondropdown,this);
            this.Div00.form.div_Search02_00.form.SCH_APV_STAT_CD00_00.addEventHandler("oncloseup",this.div_Search_sch_apv_stat_cd_oncloseup,this);
            this.Div00.form.div_Search02_00.form.SCH_APV_STAT_CD00_00.addEventHandler("onitemchanged",this.div_Search_sch_apv_stat_cd_onitemchanged,this);
            this.Div00.form.Static04_00_00_01_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.Div00.form.btn_popClose.addEventHandler("onclick",this.btn_registration_onclick,this);
            this.Div00.form.div_Search02_00_00.form.Static04_00_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.Div00.form.div_Search02_00_00.form.Static09.addEventHandler("onclick",this.Static09_onclick,this);
            this.Div00.form.div_Search02_00_00.form.grd_list.addEventHandler("onheadclick",this.grd_list_onheadclick,this);
            this.Div00.form.div_Search02_00_00.form.grd_list.addEventHandler("oncelldblclick",this.div_Search01_grd_list_oncelldblclick,this);
            this.Div00.form.Static15_01_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.dsProject.addEventHandler("onrowposchanged",this.dsProject_onrowposchanged,this);
        };
        this.loadIncludeScript("cmMyProjectInfoPopup.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
