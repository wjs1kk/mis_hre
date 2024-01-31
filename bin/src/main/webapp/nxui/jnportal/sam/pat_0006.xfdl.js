(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Pattern06");
            this.set_titletext("Pattern06");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,794);
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
            obj._setContents("<ColumnInfo><Column id=\"NUM\" type=\"STRING\" size=\"256\"/><Column id=\"COMM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COMM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"UP_COMM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"HEAD_STAT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"INS_ID\" type=\"STRING\" size=\"256\"/><Column id=\"INS_DT\" type=\"STRING\" size=\"256\"/><Column id=\"UPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPT_DT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COMM_CD\">000</Col><Col id=\"COMM_NM\">학위</Col><Col id=\"UP_COMM_CD\">0</Col><Col id=\"REF_CD\">01</Col><Col id=\"HEAD_STAT_CD\">I</Col><Col id=\"INS_ID\">ADMIN</Col><Col id=\"INS_DT\">20160101</Col><Col id=\"UPT_ID\">ADMIN</Col><Col id=\"UPT_DT\">20160101</Col><Col id=\"NUM\">1</Col></Row><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_List_Detail", this);
            obj._setContents("<ColumnInfo><Column id=\"NUM\" type=\"STRING\" size=\"256\"/><Column id=\"RQST_NO\" type=\"STRING\" size=\"256\"/><Column id=\"RQST_DT\" type=\"STRING\" size=\"256\"/><Column id=\"RQST_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"SBJ\" type=\"STRING\" size=\"256\"/><Column id=\"HEAD_STAT_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"RQST_NO\">COMM001</Col><Col id=\"RQST_DT\">20160101</Col><Col id=\"RQST_AMT\">10000</Col><Col id=\"SBJ\">신청서1</Col><Col id=\"NUM\">1</Col><Col id=\"HEAD_STAT_CD\">I</Col></Row><Row><Col id=\"RQST_NO\">COMM002</Col><Col id=\"RQST_DT\">20160101</Col><Col id=\"RQST_AMT\">20000</Col><Col id=\"SBJ\">신청서2</Col><Col id=\"NUM\">2</Col><Col id=\"HEAD_STAT_CD\">I</Col></Row><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta_title","50","0","205","58",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Master Detail");
            obj.set_cssclass("sta_WF_compTitle01");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","0","0","50",null,null,"0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("W 50");
            obj.set_visible("false");
            obj.set_background("antiquewhite");
            obj.set_color("blue");
            this.addChild(obj.name, obj);

            obj = new Button("btn_help",null,"20","73","28","322",null,null,null,null,null,this);
            obj.set_text("도움말");
            obj.set_cssclass("btn_WF_icoHelp");
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Button("btn_registration",null,"20","65","28","254",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("신규");
            obj.set_cssclass("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"20","65","28","186",null,null,null,null,null,this);
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Save");
            obj.set_visible("true");
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delete",null,"20","65","28","118",null,null,null,null,null,this);
            obj.set_text(" 삭제");
            obj.set_cssclass("btn_WF_Delete");
            obj.set_visible("true");
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Button("btn_list",null,"20","65","28","50",null,null,null,null,null,this);
            obj.set_text("목록");
            obj.set_cssclass("");
            obj.set_visible("true");
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00",null,"0","50",null,"0","0",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("W 50");
            obj.set_visible("false");
            obj.set_background("antiquewhite");
            obj.set_color("blue");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00","257","0","50","58",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("H 58");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new Div("div_Search00","50","58",null,"71","50",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("div_WF_Transparent");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00","0",null,"44","15",null,"0",null,null,null,null,this.div_Search00.form);
            obj.set_taborder("0");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Static("Static00_01","0","0",null,null,"0","15",null,null,null,null,this.div_Search00.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_bg");
            obj.set_text("");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Static("Static00_00","17","1",null,null,"23","108",null,null,null,null,this.div_Search00.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_bg");
            obj.set_text("");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Static("Static11_00","20","0",null,"15","20",null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("3");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Static("Static15_00","20","41",null,"15","20",null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("4");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Static("Static12_00","0","0","20","56",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("5");
            obj.set_text("w 20");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Static("Static12_00_00",null,"0","20","56","0",null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("6");
            obj.set_text("w 20");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Static("Static12_01","392","0","60","56",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("7");
            obj.set_text("w 60");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Static("Static12_01_00","847","0","60","56",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("8");
            obj.set_text("w 60");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Static("Static12_01_00_00","1302","0","60","56",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("9");
            obj.set_text("w 60");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Static("Static34","120","15","10","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("10");
            obj.set_text("w 10");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Static("Static34_00","552","15","10","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("11");
            obj.set_text("w 10");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Static("Static34_00_00","1007","15","10","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("12");
            obj.set_text("w 10");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Static("Static34_00_00_00","1462","15","10","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("13");
            obj.set_text("w 10");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Static("Static01","20","15","5.44%","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("14");
            obj.set_text("신청번호");
            obj.set_cssclass("sta_WF_condition01");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Static("Static00","25.00%","15","5.44%","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("15");
            obj.set_text("신청일");
            obj.set_cssclass("sta_WF_condition01");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Calendar("Calendar01","Static00:10","15","118","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("16");
            obj.set_daysize("28 28");
            obj.set_headheight("28");
            obj.set_popupsize("220");
            obj.set_weekformat("일 월 화 수 목 금 토");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Static("Static03","50.00%","15","5.44%","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("17");
            obj.set_text("신청자");
            obj.set_cssclass("sta_WF_condition01");
            this.div_Search00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit01","Static03:10","15","118","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("18");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("Button00","MaskEdit01:5","15","24","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("19");
            obj.set_cssclass("btn_WF_frmSearch");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Static("Static05","75.00%","15","5.44%","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("20");
            obj.set_text("결재상태");
            obj.set_cssclass("sta_WF_condition01");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Combo("Combo00","Static05:10","15","118","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("21");
            obj.set_text("Combo00");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Edit("Edit00","Static01:10","15","250","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("22");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Static("Static13_00_00","1135","15","5","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("23");
            obj.set_text("w 5");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Div("Div00","50","124","568","668",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Static("Static37","0","0","375","45",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("Grid Master");
            obj.set_cssclass("sta_WF_subTitle01");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static39","97","0","10","45",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("w 10");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button02","495","14","73","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_Row_Delete");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button01","417","14","73","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_Row_Add");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static44","107","0","68","45",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("(총 4건)");
            obj.set_cssclass("sta_WF_subTxt");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static05","524","0","44","14",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("h 14");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static30","490","14","5","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("w 5");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static05_00","344","40","224","5",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_text("h 5");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.Div00.addChild(obj.name, obj);

            obj = new Grid("Grid01_00","0","45",null,null,"0","0",null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_binddataset("ds_List");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"40\"/><Column size=\"47\"/><Column size=\"99\"/><Column size=\"132\"/><Column size=\"97\"/><Column size=\"55\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"34\"/></Rows><Band id=\"head\"><Cell text=\"NO\"/><Cell col=\"1\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"선택\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"2\" text=\"상태\"/><Cell col=\"3\" text=\"공통코드\"/><Cell col=\"4\" text=\"코드명\"/><Cell col=\"5\" text=\"관련코드\"/><Cell col=\"6\" text=\"상위코드\"/></Band><Band id=\"body\"><Cell text=\"bind:NUM\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:Column0\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"text\" text=\"bind:HEAD_STAT_CD\" editdisplay=\"edit\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"3\" displaytype=\"text\" edittype=\"text\" text=\"bind:COMM_CD\" editdisplay=\"edit\"/><Cell col=\"4\" displaytype=\"text\" edittype=\"text\" text=\"bind:COMM_NM\" editdisplay=\"edit\" calendardisplay=\"display\"/><Cell col=\"5\" displaytype=\"text\" edittype=\"text\" text=\"bind:REF_CD\" editdisplay=\"edit\"/><Cell col=\"6\" displaytype=\"text\" edittype=\"text\" text=\"bind:UP_COMM_CD\" editdisplay=\"edit\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static05_00_00","206","0","44","45",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_text("h 45");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03_00_00",null,"48","50","10","50",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","Div00:15","124",null,"668","50",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("Div01");
            obj.set_cssclass("div_WF_Transparent");
            this.addChild(obj.name, obj);

            obj = new Div("Div02","0","0",null,"269","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("Div02");
            obj.set_cssclass("div_WF_Area");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static13_00","0","0","500","45",null,null,null,null,null,null,this.Div01.form.Div02.form);
            obj.set_taborder("0");
            obj.set_text("상세정보");
            obj.set_cssclass("sta_WF_subTitle01");
            this.Div01.form.Div02.addChild(obj.name, obj);

            obj = new Button("Button03",null,"14","73","26","78",null,null,null,null,null,this.Div01.form.Div02.form);
            obj.set_taborder("1");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_Row_Add");
            this.Div01.form.Div02.addChild(obj.name, obj);

            obj = new Button("Button04",null,"14","73","26","0",null,null,null,null,null,this.Div01.form.Div02.form);
            obj.set_taborder("2");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_Row_Delete");
            this.Div01.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static05_01_00","1185","0","44","14",null,null,null,null,null,null,this.Div01.form.Div02.form);
            obj.set_taborder("3");
            obj.set_text("h 14");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.Div01.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static30_00_00","1164","14","5","26",null,null,null,null,null,null,this.Div01.form.Div02.form);
            obj.set_taborder("4");
            obj.set_text("w 5");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.Div01.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static05_00_00_00",null,"40","364","5","0",null,null,null,null,null,this.Div01.form.Div02.form);
            obj.set_taborder("5");
            obj.set_text("h 5");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.Div01.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static12_01_00","20","45",null,"34","0",null,null,null,null,null,this.Div01.form.Div02.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_condition02box");
            this.Div01.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static20_00_00","22","78",null,"34","0",null,null,null,null,null,this.Div01.form.Div02.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_condition02box");
            this.Div01.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static18_00","22","111",null,"34","0",null,null,null,null,null,this.Div01.form.Div02.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_condition02box");
            this.Div01.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static25_00_00","22","144",null,"125","0",null,null,null,null,null,this.Div01.form.Div02.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_condition02box");
            obj.set_text("");
            this.Div01.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static30_01_00","150","46","10","225",null,null,null,null,null,null,this.Div01.form.Div02.form);
            obj.set_taborder("10");
            obj.set_text("w 10");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.Div01.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static32_00_00","771","47","10","100",null,null,null,null,null,null,this.Div01.form.Div02.form);
            obj.set_taborder("11");
            obj.set_text("w 10");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.Div01.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static11_00","0","45","12.08%","34",null,null,null,null,null,null,this.Div01.form.Div02.form);
            obj.set_taborder("12");
            obj.set_text("수기입력");
            obj.set_cssclass("sta_WF_condition02_L");
            this.Div01.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static21_00","0","78","12.08%","34",null,null,null,null,null,null,this.Div01.form.Div02.form);
            obj.set_taborder("13");
            obj.set_text("라디오버튼입력");
            obj.set_cssclass("sta_WF_condition02_L");
            this.Div01.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static05_02_00","0","111","12.08%","34",null,null,null,null,null,null,this.Div01.form.Div02.form);
            obj.set_taborder("14");
            obj.set_text("일자입력");
            obj.set_cssclass("sta_WF_condition02_L");
            this.Div01.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static19_00","0","144","12.08%","125",null,null,null,null,null,null,this.Div01.form.Div02.form);
            obj.set_taborder("15");
            obj.set_text("textarea입력");
            obj.set_cssclass("sta_WF_condition02_L");
            this.Div01.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static23_00","50.00%","78","12.08%","34",null,null,null,null,null,null,this.Div01.form.Div02.form);
            obj.set_taborder("16");
            obj.set_text("콤보입력");
            obj.set_cssclass("sta_WF_condition02");
            this.Div01.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static25_01","50.00%","111","12.08%","34",null,null,null,null,null,null,this.Div01.form.Div02.form);
            obj.set_taborder("17");
            obj.set_text("readonly");
            obj.set_cssclass("sta_WF_condition02");
            this.Div01.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static22_00","50%","45","12.08%","34",null,null,null,null,null,null,this.Div01.form.Div02.form);
            obj.set_taborder("18");
            obj.set_text("필수입력");
            obj.set_cssclass("sta_WF_condition02");
            this.Div01.form.Div02.addChild(obj.name, obj);

            obj = new Radio("Radio00_00","Static21_00:10","82","136","26",null,null,null,null,null,null,this.Div01.form.Div02.form);
            obj.set_taborder("19");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var Div01_form_Div02_form_Radio00_00_innerdataset = new nexacro.NormalDataset("Div01_form_Div02_form_Radio00_00_innerdataset", obj);
            Div01_form_Div02_form_Radio00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">조건01</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">조건02</Col></Row></Rows>");
            obj.set_innerdataset(Div01_form_Div02_form_Radio00_00_innerdataset);
            obj.set_value("1");
            obj.set_index("0");
            this.Div01.form.Div02.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_00","Static05_02_00:10","115","11.92%","26",null,null,null,null,null,null,this.Div01.form.Div02.form);
            obj.set_taborder("20");
            obj.set_displaynulltext("____-__-__");
            obj.set_cssclass("");
            this.Div01.form.Div02.addChild(obj.name, obj);

            obj = new Combo("Combo00_00","Static23_00:10","82","25.68%","26",null,null,null,null,null,null,this.Div01.form.Div02.form);
            obj.set_taborder("21");
            obj.set_displaynulltext("선택");
            this.Div01.form.Div02.addChild(obj.name, obj);

            obj = new Edit("Edit05_00","Static22_00:10","49","25.76%","26",null,null,null,null,null,null,this.Div01.form.Div02.form);
            obj.set_taborder("22");
            obj.set_cssclass("");
            this.Div01.form.Div02.addChild(obj.name, obj);

            obj = new Edit("Edit02_00","Static25_01:10","115","25.60%","26",null,null,null,null,null,null,this.Div01.form.Div02.form);
            obj.set_taborder("23");
            obj.set_cssclass("");
            this.Div01.form.Div02.addChild(obj.name, obj);

            obj = new Edit("Edit01_00","Static11_00:10","49","25.76%","26",null,null,null,null,null,null,this.Div01.form.Div02.form);
            obj.set_taborder("24");
            this.Div01.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static05",null,"0","44","14","0",null,null,null,null,null,this.Div01.form.Div02.form);
            obj.set_taborder("25");
            obj.set_text("h 14");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.Div01.form.Div02.addChild(obj.name, obj);

            obj = new TextArea("TextArea01","Static19_00:10","148",null,"116","20",null,null,null,null,null,this.Div01.form.Div02.form);
            obj.set_taborder("26");
            this.Div01.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static05_00_00","206","0","44","45",null,null,null,null,null,null,this.Div01.form.Div02.form);
            obj.set_taborder("27");
            obj.set_text("h 45");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.Div01.form.Div02.addChild(obj.name, obj);

            obj = new Div("Div02_00_00","0","544",null,"124","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_text("Div02");
            obj.set_cssclass("div_WF_Area");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static13_00","0","0","500","45",null,null,null,null,null,null,this.Div01.form.Div02_00_00.form);
            obj.set_taborder("0");
            obj.set_text("파일첨부");
            obj.set_cssclass("sta_WF_subTitle01");
            this.Div01.form.Div02_00_00.addChild(obj.name, obj);

            obj = new Button("btn_add00",null,"14","61","26","66",null,null,null,null,null,this.Div01.form.Div02_00_00.form);
            obj.set_taborder("1");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_Row_Add");
            this.Div01.form.Div02_00_00.addChild(obj.name, obj);

            obj = new Button("btn_delete01",null,"14","61","26","0",null,null,null,null,null,this.Div01.form.Div02_00_00.form);
            obj.set_taborder("2");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_Row_Delete");
            this.Div01.form.Div02_00_00.addChild(obj.name, obj);

            obj = new Static("Static05_01_00","1203","0","44","14",null,null,null,null,null,null,this.Div01.form.Div02_00_00.form);
            obj.set_taborder("3");
            obj.set_text("h 14");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.Div01.form.Div02_00_00.addChild(obj.name, obj);

            obj = new Static("Static30_00_00","1181","14","5","26",null,null,null,null,null,null,this.Div01.form.Div02_00_00.form);
            obj.set_taborder("4");
            obj.set_text("w 5");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.Div01.form.Div02_00_00.addChild(obj.name, obj);

            obj = new Static("Static05_00_00_00","883","40","364","5",null,null,null,null,null,null,this.Div01.form.Div02_00_00.form);
            obj.set_taborder("5");
            obj.set_text("h 5");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.Div01.form.Div02_00_00.addChild(obj.name, obj);

            obj = new Grid("Grid05","0","45",null,null,"0","0",null,null,null,null,this.Div01.form.Div02_00_00.form);
            obj.set_taborder("6");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"748\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"파일\"/></Band><Band id=\"body\"><Cell text=\"bind:Column1\"/></Band></Format></Formats>");
            this.Div01.form.Div02_00_00.addChild(obj.name, obj);

            obj = new Div("Div02_00_01","0","279",null,"255","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            obj.set_text("Div02");
            obj.set_cssclass("div_WF_Area");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static13_00","0","0","500","45",null,null,null,null,null,null,this.Div01.form.Div02_00_01.form);
            obj.set_taborder("0");
            obj.set_text("Grid입력");
            obj.set_cssclass("sta_WF_subTitle01");
            this.Div01.form.Div02_00_01.addChild(obj.name, obj);

            obj = new Button("Button05",null,"14","73","26","78",null,null,null,null,null,this.Div01.form.Div02_00_01.form);
            obj.set_taborder("1");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_Row_Add");
            this.Div01.form.Div02_00_01.addChild(obj.name, obj);

            obj = new Button("Button06",null,"14","73","26","0",null,null,null,null,null,this.Div01.form.Div02_00_01.form);
            obj.set_taborder("2");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_Row_Delete");
            this.Div01.form.Div02_00_01.addChild(obj.name, obj);

            obj = new Static("Static05_01_00","1203","0","44","14",null,null,null,null,null,null,this.Div01.form.Div02_00_01.form);
            obj.set_taborder("3");
            obj.set_text("h 14");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.Div01.form.Div02_00_01.addChild(obj.name, obj);

            obj = new Static("Static30_00_00","1169","14","5","26",null,null,null,null,null,null,this.Div01.form.Div02_00_01.form);
            obj.set_taborder("4");
            obj.set_text("w 5");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.Div01.form.Div02_00_01.addChild(obj.name, obj);

            obj = new Static("Static05_00_00_00","883","40","364","5",null,null,null,null,null,null,this.Div01.form.Div02_00_01.form);
            obj.set_taborder("5");
            obj.set_text("h 5");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.Div01.form.Div02_00_01.addChild(obj.name, obj);

            obj = new Grid("Grid02_00","0","45",null,null,"0","0",null,null,null,null,this.Div01.form.Div02_00_01.form);
            obj.set_taborder("6");
            obj.set_binddataset("ds_List_Detail");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"40\"/><Column size=\"47\"/><Column size=\"99\"/><Column size=\"85\"/><Column size=\"95\"/><Column size=\"292\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"34\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"선택\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"2\" text=\"상태\"/><Cell col=\"3\" text=\"신청번호\"/><Cell col=\"4\" text=\"신청일\"/><Cell col=\"5\" text=\"신청금액\"/><Cell col=\"6\" text=\"제목\"/></Band><Band id=\"body\"><Cell text=\"bind:NUM\"/><Cell col=\"1\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:Column0\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"2\" text=\"bind:HEAD_STAT_CD\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"3\" displaytype=\"text\" edittype=\"text\" text=\"bind:RQST_NO\" editdisplay=\"display\"/><Cell col=\"4\" displaytype=\"date\" edittype=\"date\" text=\"bind:RQST_DT\" editdisplay=\"edit\" calendardisplay=\"display\"/><Cell col=\"5\" displaytype=\"number\" edittype=\"text\" text=\"bind:RQST_AMT\" editdisplay=\"display\" textAlign=\"right\" verticalAlign=\"middle\"/><Cell col=\"6\" displaytype=\"text\" edittype=\"text\" text=\"bind:SBJ\" editdisplay=\"display\"/></Band></Format></Formats>");
            this.Div01.form.Div02_00_01.addChild(obj.name, obj);

            obj = new Static("Static04_00","1660","0",null,"20","50",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("h 20");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_Search00.form
            obj = new Layout("default","",1032,72,this.div_Search00.form,function(p){});
            this.div_Search00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01.form.Div02.form
            obj = new Layout("default","",0,0,this.Div01.form.Div02.form,function(p){});
            this.Div01.form.Div02.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01.form.Div02_00_00.form
            obj = new Layout("default","",0,0,this.Div01.form.Div02_00_00.form,function(p){});
            this.Div01.form.Div02_00_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01.form.Div02_00_01.form
            obj = new Layout("default","",0,0,this.Div01.form.Div02_00_01.form,function(p){});
            this.Div01.form.Div02_00_01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01.form
            obj = new Layout("default","",0,0,this.Div01.form,function(p){});
            this.Div01.form.addLayout(obj.name, obj);

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

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.div_Search00.form.Static12_00.addEventHandler("onclick",this.div_Search_Static12_onclick,this);
            this.div_Search00.form.Static12_00_00.addEventHandler("onclick",this.div_Search_Static12_onclick,this);
            this.div_Search00.form.Static12_01.addEventHandler("onclick",this.div_Search_Static12_onclick,this);
            this.div_Search00.form.Static12_01_00.addEventHandler("onclick",this.div_Search_Static12_onclick,this);
            this.div_Search00.form.Static12_01_00_00.addEventHandler("onclick",this.div_Search_Static12_onclick,this);
            this.Div00.form.Static37.addEventHandler("onclick",this.Div00_Static37_onclick,this);
            this.Div00.form.Static39.addEventHandler("onclick",this.Div00_Static39_onclick,this);
            this.Div01.form.Div02.form.Static13_00.addEventHandler("onclick",this.Div00_Static13_onclick,this);
            this.Div01.form.Div02.form.Radio00_00.addEventHandler("onitemclick",this.Div00_Radio00_onitemclick,this);
            this.Div01.form.Div02.form.TextArea01.addEventHandler("oneditclick",this.TextArea01_oneditclick,this);
            this.Div01.form.Div02_00_00.form.Static13_00.addEventHandler("onclick",this.Div00_Static13_onclick,this);
            this.Div01.form.Div02_00_01.form.Static13_00.addEventHandler("onclick",this.Div00_Static13_onclick,this);
        };
        this.loadIncludeScript("pat_0006.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
