(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Pattern05");
            this.set_titletext("Pattern05");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,704);
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
            obj._setContents("<ColumnInfo><Column id=\"NUM\" type=\"STRING\" size=\"256\"/><Column id=\"COMM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COMM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"UP_COMM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"HEAD_STAT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REF_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COMM_CD\">000-001</Col><Col id=\"COMM_NM\">박사</Col><Col id=\"UP_COMM_CD\">000</Col><Col id=\"HEAD_STAT_CD\">U</Col><Col id=\"NUM\">1</Col><Col id=\"REF_CD\">01</Col></Row><Row><Col id=\"COMM_CD\">000-002</Col><Col id=\"COMM_NM\">석사</Col><Col id=\"UP_COMM_CD\">000</Col><Col id=\"HEAD_STAT_CD\">U</Col><Col id=\"NUM\">2</Col><Col id=\"REF_CD\">02</Col></Row><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta_title","50","0","205","58",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Master Detail(N대 N)");
            obj.set_cssclass("sta_WF_compTitle01");
            this.addChild(obj.name, obj);

            obj = new Div("div_Search","50","58",null,"71","50",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("div_WF_Transparent");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00","0",null,"44","15",null,"0",null,null,null,null,this.div_Search.form);
            obj.set_taborder("0");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_Search.addChild(obj.name, obj);

            obj = new Static("Static00_01","0","0",null,null,"0","15",null,null,null,null,this.div_Search.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_bg");
            obj.set_text("");
            this.div_Search.addChild(obj.name, obj);

            obj = new Static("Static11_00","20","0",null,"15","20",null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("2");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_Search.addChild(obj.name, obj);

            obj = new Static("Static15_00","20","41",null,"15","20",null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("3");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_Search.addChild(obj.name, obj);

            obj = new Static("Static12_00","0","0","20","55",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("4");
            obj.set_text("w 20");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_Search.addChild(obj.name, obj);

            obj = new Static("Static12_00_00",null,"0","20",null,"0","0",null,null,null,null,this.div_Search.form);
            obj.set_taborder("5");
            obj.set_text("w 20");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_Search.addChild(obj.name, obj);

            obj = new Static("Static12_01","394","3","60","50",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("6");
            obj.set_text("w 60");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_Search.addChild(obj.name, obj);

            obj = new Static("Static12_01_00","849","3","60","50",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("7");
            obj.set_text("w 60");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_Search.addChild(obj.name, obj);

            obj = new Static("Static12_01_00_00","1304","3","60","50",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("8");
            obj.set_text("w 60");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_Search.addChild(obj.name, obj);

            obj = new Static("Static34","120","15","10","26",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("9");
            obj.set_text("w 10");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_Search.addChild(obj.name, obj);

            obj = new Static("Static34_00","554","15","10","26",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("10");
            obj.set_text("w 10");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_Search.addChild(obj.name, obj);

            obj = new Static("Static34_00_00","1009","15","10","26",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("11");
            obj.set_text("w 10");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_Search.addChild(obj.name, obj);

            obj = new Static("Static34_00_00_00","1464","15","10","26",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("12");
            obj.set_text("w 10");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_Search.addChild(obj.name, obj);

            obj = new Static("Static01","20","15","5.44%","26",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("13");
            obj.set_text("신청번호");
            obj.set_cssclass("sta_WF_condition01");
            this.div_Search.addChild(obj.name, obj);

            obj = new Static("Static00","24.95%","15","5.44%","26",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("14");
            obj.set_text("신청일");
            obj.set_cssclass("sta_WF_condition01");
            this.div_Search.addChild(obj.name, obj);

            obj = new Calendar("Calendar01","Static00:10","15","118","26",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("15");
            obj.set_weekformat("일 월 화 수 목 금 토");
            obj.set_popupsize("220");
            obj.set_headheight("28");
            obj.set_daysize("28 28");
            this.div_Search.addChild(obj.name, obj);

            obj = new Static("Static03","49.95%","15","5.44%","26",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("16");
            obj.set_text("신청자");
            obj.set_cssclass("sta_WF_condition01");
            this.div_Search.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit01","Static03:10","15","118","26",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("17");
            this.div_Search.addChild(obj.name, obj);

            obj = new Button("Button00","MaskEdit01:5","15","24","26",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("18");
            obj.set_cssclass("btn_WF_frmSearch");
            this.div_Search.addChild(obj.name, obj);

            obj = new Static("Static05","74.95%","15","5.44%","26",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("19");
            obj.set_text("결재상태");
            obj.set_cssclass("sta_WF_condition01");
            this.div_Search.addChild(obj.name, obj);

            obj = new Combo("Combo00","Static05:10","15","118","26",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("20");
            obj.set_text("Combo00");
            this.div_Search.addChild(obj.name, obj);

            obj = new Edit("Edit00","Static01:10","15","250","26",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("21");
            this.div_Search.addChild(obj.name, obj);

            obj = new Static("Static13_00_00","1137","15","5","26",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("22");
            obj.set_text("w 5");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_Search.addChild(obj.name, obj);

            obj = new Static("Static02",null,"0","50",null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("W 50");
            obj.set_visible("false");
            obj.set_background("antiquewhite");
            obj.set_color("blue");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0","50",null,null,"0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("W 50");
            obj.set_visible("false");
            obj.set_background("antiquewhite");
            obj.set_color("blue");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"20","65","28","186",null,null,null,null,null,this);
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Save");
            obj.set_visible("true");
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Button("btn_list",null,"20","65","28","50",null,null,null,null,null,this);
            obj.set_text("목록");
            obj.set_cssclass("");
            obj.set_visible("true");
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delete",null,"20","65","28","118",null,null,null,null,null,this);
            obj.set_text(" 삭제");
            obj.set_cssclass("btn_WF_Delete");
            obj.set_visible("true");
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Button("btn_help",null,"20","79","28","418",null,null,null,null,null,this);
            obj.set_text("도움말");
            obj.set_cssclass("btn_WF_icoHelp");
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new Button("btn_approval",null,"20","93","28","322",null,null,null,null,null,this);
            obj.set_text("결재상신");
            obj.set_cssclass("btn_WF_icoApproval");
            obj.set_taborder("8");
            this.addChild(obj.name, obj);

            obj = new Button("btn_registration",null,"20","65","28","254",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("신규");
            obj.set_cssclass("");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00","1660","0",null,"20","50",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("h 20");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00","255","0","50","58",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("h 58");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","50","129","564","575",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Static("Static37","0","0","320","45",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("Grid Master");
            obj.set_cssclass("sta_WF_subTitle01");
            this.Div00.addChild(obj.name, obj);

            obj = new Grid("Grid01","0","45",null,null,"0","0",null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_binddataset("ds_List");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"40\"/><Column size=\"47\"/><Column size=\"99\"/><Column size=\"132\"/><Column size=\"97\"/><Column size=\"55\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"34\"/></Rows><Band id=\"head\"><Cell text=\"NO\"/><Cell col=\"1\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"선택\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"2\" text=\"상태\"/><Cell col=\"3\" text=\"공통코드\"/><Cell col=\"4\" text=\"코드명\"/><Cell col=\"5\" text=\"관련코드\"/><Cell col=\"6\" text=\"상위코드\"/></Band><Band id=\"body\"><Cell text=\"bind:NUM\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:Column0\" textAlign=\"center\" verticalAlign=\"middle\" cssclass=\"\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"text\" text=\"bind:HEAD_STAT_CD\" editdisplay=\"display\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"3\" displaytype=\"editcontrol\" edittype=\"text\" text=\"bind:COMM_CD\" editdisplay=\"display\"/><Cell col=\"4\" displaytype=\"editcontrol\" edittype=\"text\" text=\"bind:COMM_NM\" editdisplay=\"display\" calendardisplay=\"display\" cssclass=\"\"/><Cell col=\"5\" displaytype=\"editcontrol\" edittype=\"text\" text=\"bind:REF_CD\" editdisplay=\"display\"/><Cell col=\"6\" displaytype=\"combocontrol\" edittype=\"combo\" text=\"bind:UP_COMM_CD\" editdisplay=\"display\" cssclass=\"\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static39","97","0","10","45",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("w 10");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button02","491","14","73","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_Row_Delete");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button04","413","14","73","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_Row_Add");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static44","107","0","68","45",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("(총 4건)");
            obj.set_cssclass("sta_WF_subTxt");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static05","520","0","44","14",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("h 14");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static30","486","14","5","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_text("w 5");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static05_00","290","40","274","5",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_text("h 5");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
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

            obj = new Div("Div02","Div00:15","129",null,"575","50",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("Div02");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Static("Static13","0","0","500","45",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("0");
            obj.set_text("Grid Detail");
            obj.set_cssclass("sta_WF_subTitle01");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("Button00",null,"14","73","26","78",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("1");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_Row_Add");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("Button03_00",null,"14","73","26","0",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("2");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_Row_Delete");
            this.Div02.addChild(obj.name, obj);

            obj = new Grid("Grid02","0","45",null,null,"0","0",null,null,null,null,this.Div02.form);
            obj.set_taborder("3");
            obj.set_binddataset("ds_List_Detail");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"99\"/><Column size=\"83\"/><Column size=\"71\"/><Column size=\"123\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"34\"/></Rows><Band id=\"head\"><Cell text=\"NO\"/><Cell col=\"1\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"선택\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"2\" text=\"상태\"/><Cell col=\"3\" text=\"공통코드\"/><Cell col=\"4\" text=\"코드명\"/><Cell col=\"5\" text=\"관련코드\"/><Cell col=\"6\" text=\"상위코드\"/></Band><Band id=\"body\"><Cell text=\"bind:NUM\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:Column0\" textAlign=\"center\" verticalAlign=\"middle\" cssclass=\"\"/><Cell col=\"2\" text=\"bind:HEAD_STAT_CD\"/><Cell col=\"3\" displaytype=\"editcontrol\" edittype=\"text\" text=\"bind:COMM_CD\" editdisplay=\"display\"/><Cell col=\"4\" displaytype=\"editcontrol\" edittype=\"text\" text=\"bind:COMM_NM\" editdisplay=\"display\"/><Cell col=\"5\" displaytype=\"editcontrol\" edittype=\"text\" text=\"bind:REF_CD\" editdisplay=\"display\" expandimage=\"URL(&apos;image::img_WF_Expand.png&apos;)\"/><Cell col=\"6\" displaytype=\"combocontrol\" edittype=\"combo\" text=\"bind:UP_COMM_CD\" combodataset=\"ds_List\" combocodecol=\"COMM_CD\" combodatacol=\"COMM_NM\" combodisplay=\"display\"/></Band></Format></Formats>");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static18","101","0","68","45",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("4");
            obj.set_text("(총 4건)");
            obj.set_cssclass("sta_WF_subTxt");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static00_01","91","0","10","45",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("5");
            obj.set_text("w 10");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static05_01","1202","0",null,"14","0",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("6");
            obj.set_text("h 14");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static30_00","1148","14","5","26",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("7");
            obj.set_text("w 5");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static05_00_00","884","40",null,"5","0",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("8");
            obj.set_text("h 5");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static05_00_00_00","206","0","44","45",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("9");
            obj.set_text("h 45");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static03_00_00",null,"48","50","10","50",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("h 10");
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

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.div_Search.form.Static12_00.addEventHandler("onclick",this.div_Search_Static12_onclick,this);
            this.div_Search.form.Static12_00_00.addEventHandler("onclick",this.div_Search_Static12_onclick,this);
            this.div_Search.form.Static12_01.addEventHandler("onclick",this.div_Search_Static12_onclick,this);
            this.div_Search.form.Static12_01_00.addEventHandler("onclick",this.div_Search_Static12_onclick,this);
            this.div_Search.form.Static12_01_00_00.addEventHandler("onclick",this.div_Search_Static12_onclick,this);
            this.Div00.form.Static37.addEventHandler("onclick",this.Div00_Static37_onclick,this);
            this.Div02.form.Static13.addEventHandler("onclick",this.Div00_Static13_onclick,this);
        };
        this.loadIncludeScript("pat_0005.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
