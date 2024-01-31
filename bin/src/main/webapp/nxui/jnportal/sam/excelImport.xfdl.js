(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("excelImport");
            this.set_titletext("excelImport");
            this.set_cssclass("frm_WF_comp");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,670);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj.set_updatecontrol("true");
            obj._setContents("<ColumnInfo><Column id=\"sysId\" type=\"STRING\" size=\"256\"/><Column id=\"progId\" type=\"STRING\" size=\"256\"/><Column id=\"progNm\" type=\"STRING\" size=\"256\"/><Column id=\"progTy\" type=\"STRING\" size=\"256\"/><Column id=\"progUrl\" type=\"STRING\" size=\"256\"/><Column id=\"progDc\" type=\"STRING\" size=\"256\"/><Column id=\"progFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"progAuthor\" type=\"STRING\" size=\"256\"/><Column id=\"substituteUrl\" type=\"STRING\" size=\"256\"/><Column id=\"substituteUseYn\" type=\"STRING\" size=\"256\"/><Column id=\"atchFileId\" type=\"STRING\" size=\"256\"/><Column id=\"permissionUseYn\" type=\"STRING\" size=\"256\"/><Column id=\"permissionDc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTypeTwo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"sysId\" type=\"STRING\" size=\"256\"/><Column id=\"progId\" type=\"STRING\" size=\"256\"/><Column id=\"progNm\" type=\"STRING\" size=\"256\"/><Column id=\"progTy\" type=\"STRING\" size=\"256\"/><Column id=\"progUrl\" type=\"STRING\" size=\"256\"/><Column id=\"progDc\" type=\"STRING\" size=\"256\"/><Column id=\"progFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"progAuthor\" type=\"STRING\" size=\"256\"/><Column id=\"substituteUrl\" type=\"STRING\" size=\"256\"/><Column id=\"substituteUseYn\" type=\"STRING\" size=\"256\"/><Column id=\"atchFileId\" type=\"STRING\" size=\"256\"/><Column id=\"permissionUseYn\" type=\"STRING\" size=\"256\"/><Column id=\"permissionDc\" type=\"STRING\" size=\"256\"/><Column id=\"radioUseYn\" type=\"STRING\" size=\"256\"/><Column id=\"rgstId\" type=\"STRING\" size=\"256\"/><Column id=\"rgstNm\" type=\"STRING\" size=\"256\"/><Column id=\"rgstIp\" type=\"STRING\" size=\"256\"/><Column id=\"rgstDt\" type=\"STRING\" size=\"256\"/><Column id=\"updtId\" type=\"STRING\" size=\"256\"/><Column id=\"updtIp\" type=\"STRING\" size=\"256\"/><Column id=\"updtDt\" type=\"STRING\" size=\"256\"/><Column id=\"rowCheck\" type=\"STRING\" size=\"256\"/><Column id=\"rowStatus\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUseYn", this);
            obj._setContents("<ColumnInfo><Column id=\"LINE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"LINE_CODE_NM_KR\" type=\"STRING\" size=\"256\"/><Column id=\"LINE_CODE_NM_EN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"LINE_CODE\">Y</Col><Col id=\"LINE_CODE_NM_KR\">사용</Col><Col id=\"LINE_CODE_NM_EN\">use</Col></Row><Row><Col id=\"LINE_CODE\">N</Col><Col id=\"LINE_CODE_NM_KR\">미사용</Col><Col id=\"LINE_CODE_NM_EN\">unused</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUseYnSch", this);
            obj._setContents("<ColumnInfo><Column id=\"LINE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"LINE_CODE_NM_KR\" type=\"STRING\" size=\"256\"/><Column id=\"LINE_CODE_NM_EN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"LINE_CODE_NM_KR\">전체</Col><Col id=\"LINE_CODE_NM_EN\">ALL</Col></Row><Row><Col id=\"LINE_CODE\">Y</Col><Col id=\"LINE_CODE_NM_KR\">사용</Col><Col id=\"LINE_CODE_NM_EN\">USE</Col></Row><Row><Col id=\"LINE_CODE\">N</Col><Col id=\"LINE_CODE_NM_KR\">미사용</Col><Col id=\"LINE_CODE_NM_EN\">UNUSED</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new FileDialog("FileDialog00", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta_01","50","10","500","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Type 2 템플릿");
            obj.set_cssclass("sta_WF_compTitle01");
            this.addChild(obj.name, obj);

            obj = new Div("divResult","50","150",null,"520","50",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTypeTwo","20","45",null,null,"20","26",null,null,null,null,this.divResult.form);
            obj.set_taborder("2");
            obj.set_binddataset("dsTypeTwo");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\" band=\"left\"/><Column size=\"48\" band=\"left\"/><Column size=\"48\" band=\"left\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"23\" band=\"head\"/><Row size=\"23\" band=\"head\"/><Row size=\"33\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"순번\"/><Cell col=\"1\" rowspan=\"2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" rowspan=\"2\" text=\"상태\"/><Cell col=\"3\" colspan=\"2\" text=\"아이디\"/><Cell col=\"5\" rowspan=\"2\" text=\"프로그램명\"/><Cell col=\"6\" rowspan=\"2\" text=\"프로그램유형\"/><Cell col=\"7\" rowspan=\"2\" text=\"URL\"/><Cell col=\"8\" rowspan=\"2\" text=\"프로그램 설명\"/><Cell col=\"9\" rowspan=\"2\" text=\"프로그램 파일명\"/><Cell col=\"10\" colspan=\"2\" text=\"대체URL\"/><Cell col=\"12\" rowspan=\"2\" text=\"첨부파일\"/><Cell col=\"13\" colspan=\"2\" text=\"권한레벨\"/><Cell col=\"15\" colspan=\"2\" text=\"라디오\"/><Cell col=\"17\" rowspan=\"2\" text=\"등록자\"/><Cell col=\"18\" rowspan=\"2\" text=\"등록일\"/><Cell row=\"1\" col=\"3\" text=\"시스템ID\"/><Cell row=\"1\" col=\"4\" text=\"프로그램ID\"/><Cell row=\"1\" col=\"10\" text=\"URL\"/><Cell row=\"1\" col=\"11\" text=\"사용여부\"/><Cell row=\"1\" col=\"13\" text=\"사용여부\"/><Cell row=\"1\" col=\"14\" text=\"사용설명\"/><Cell row=\"1\" col=\"15\" text=\"사용\"/><Cell row=\"1\" col=\"16\" text=\"미사용\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\" text=\"expr:currow+1\" textAlign=\"center\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" textAlign=\"center\" text=\"bind:rowCheck\"/><Cell col=\"2\" textAlign=\"center\" imagestretch=\"fit\" displaytype=\"normal\" text=\"bind:rowStatus\"/><Cell col=\"3\" text=\"bind:sysId\" edittype=\"text\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:progId\" edittype=\"text\"/><Cell col=\"5\" text=\"bind:progNm\" edittype=\"text\"/><Cell col=\"6\" text=\"bind:progTy\" edittype=\"combo\" displaytype=\"combocontrol\"/><Cell col=\"7\" text=\"bind:progUrl\" edittype=\"text\"/><Cell col=\"8\" text=\"bind:progDc\" edittype=\"text\"/><Cell col=\"9\" text=\"bind:progFileNm\" edittype=\"text\"/><Cell col=\"10\" text=\"bind:substituteUrl\" edittype=\"text\"/><Cell col=\"11\" text=\"bind:substituteUseYn\" edittype=\"combo\" displaytype=\"combocontrol\" combodataset=\"dsUseYn\" combocodecol=\"LINE_CODE\" combodatacol=\"LINE_CODE_NM_KR\" comboautoselect=\"true\"/><Cell col=\"12\" text=\"bind:atchFileId\" edittype=\"text\"/><Cell col=\"13\" text=\"bind:permissionUseYn\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\" checkboxfalsevalue=\"N\" checkboxtruevalue=\"Y\"/><Cell col=\"14\" text=\"bind:permissionDc\" edittype=\"text\"/><Cell col=\"15\" displaytype=\"radioitemcontrol\" edittype=\"radioitem\" radioitemcodevalue=\"Y\" text=\"bind:radioUseYn\"/><Cell col=\"16\" text=\"bind:radioUseYn\" displaytype=\"radioitemcontrol\" edittype=\"radioitem\" radioitemcodevalue=\"N\"/><Cell col=\"17\" text=\"bind:rgstNm\" edittype=\"none\" textAlign=\"center\"/><Cell col=\"18\" text=\"bind:rgstDt\" edittype=\"none\" textAlign=\"center\"/></Band></Format></Formats>");
            this.divResult.addChild(obj.name, obj);

            obj = new Static("Static10","0","-1","20","295",null,null,null,null,null,null,this.divResult.form);
            obj.set_taborder("1");
            obj.set_text("w20");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divResult.addChild(obj.name, obj);

            obj = new Static("Static04_00_00","20","0","60","18",null,null,null,null,null,null,this.divResult.form);
            obj.set_taborder("2");
            obj.set_text("h 18");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divResult.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_00","110","0","60","45",null,null,null,null,null,null,this.divResult.form);
            obj.set_taborder("3");
            obj.set_text("h 45");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divResult.addChild(obj.name, obj);

            obj = new Static("Static09","20","11","100","27",null,null,null,null,null,null,this.divResult.form);
            obj.set_taborder("4");
            obj.set_text("검색결과");
            obj.set_cssclass("sta_WF_subTitle01");
            this.divResult.addChild(obj.name, obj);

            obj = new Static("staGridRowCnt","Static09:20","11","100","27",null,null,null,null,null,null,this.divResult.form);
            obj.set_taborder("5");
            obj.set_text("(총 0건)");
            obj.set_cssclass("sta_WF_subResult");
            this.divResult.addChild(obj.name, obj);

            obj = new Button("btnAddRow",null,"14","66","26","91",null,null,null,null,null,this.divResult.form);
            obj.set_taborder("6");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_Row_Add");
            this.divResult.addChild(obj.name, obj);

            obj = new Button("btnDeleteRow",null,"14","66","26","20",null,null,null,null,null,this.divResult.form);
            obj.set_taborder("7");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_Row_Delete");
            obj.set_enable("true");
            this.divResult.addChild(obj.name, obj);

            obj = new Div("divSearch","50","57",null,"83","50",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","18",null,"50","20",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_bg");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta_001","20","26","110","34",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("프로그램ID");
            obj.set_cssclass("sta_WF_condition01");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sch_RQST_DT","440","26","110","34",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("프로그램명");
            obj.set_cssclass("sta_WF_condition01");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static10","0","-1","20","146",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("w20");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static04_00_00","20","0","60","18",null,null,null,null,null,null,this.divSearch.form);
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

            obj = new Static("Static04_00_00_00","110","0","60","45",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("h 45");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static10_00","380","12","60","71",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("w60");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static15_01_00","230","18","50","12",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("h 12");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("SCH_RQST_ID00","130","30","250","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("SCH_RQST_ID00_00","550","30","250","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static15_01_00_00","230","56","50","12",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("h 12");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sch_RQST_DT00","805","26","110","34",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_condition01");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cbo001","898","30","8.90%","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_codecolumn("LINE_CODE");
            obj.set_datacolumn("LINE_CODE_NM_KR");
            obj.set_innerdataset("dsUseYnSch");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static02",null,"0","50","753","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("W\r\n 50");
            obj.set_visible("false");
            obj.set_background("antiquewhite");
            obj.set_color("blue");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_00","50","140","60","10",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static34","0","0","50","752",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("W 50");
            obj.set_visible("false");
            obj.set_background("antiquewhite");
            obj.set_color("blue");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_01","70","125","100","15",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"19","65","28","50",null,null,null,null,null,this);
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Save");
            obj.set_visible("true");
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"19","65","28","118",null,null,null,null,null,this);
            obj.set_text("조회");
            obj.set_cssclass("");
            obj.set_taborder("8");
            this.addChild(obj.name, obj);

            obj = new Button("btnExcelUplod",null,"19","100","28","btnSearch:5",null,null,null,null,null,this);
            obj.set_text("엑셀업로드");
            obj.set_cssclass("btn_WF_icoExcel_Up");
            obj.set_taborder("9");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divResult.form
            obj = new Layout("default","",0,0,this.divResult.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.grdTypeTwo.set_taborder("2");
                p.grdTypeTwo.set_binddataset("dsTypeTwo");
                p.grdTypeTwo.set_autofittype("col");
                p.grdTypeTwo.set_autoenter("select");
                p.grdTypeTwo.move("20","45",null,null,"20","26");

                p.Static10.set_taborder("1");
                p.Static10.set_text("w20");
                p.Static10.set_visible("false");
                p.Static10.set_background("fuchsia");
                p.Static10.set_color("blue");
                p.Static10.set_textAlign("center");
                p.Static10.set_verticalAlign("middle");
                p.Static10.set_opacity("0.7");
                p.Static10.set_font("normal 12px/normal \"Arial\"");
                p.Static10.move("0","-1","20","295",null,null);

                p.Static04_00_00.set_taborder("2");
                p.Static04_00_00.set_text("h 18");
                p.Static04_00_00.set_visible("false");
                p.Static04_00_00.set_background("aqua");
                p.Static04_00_00.set_color("blue");
                p.Static04_00_00.set_textAlign("center");
                p.Static04_00_00.set_verticalAlign("middle");
                p.Static04_00_00.set_opacity("0.7");
                p.Static04_00_00.set_font("normal 12px/normal \"Arial\"");
                p.Static04_00_00.move("20","0","60","18",null,null);

                p.Static04_00_00_00.set_taborder("3");
                p.Static04_00_00_00.set_text("h 45");
                p.Static04_00_00_00.set_visible("false");
                p.Static04_00_00_00.set_background("aqua");
                p.Static04_00_00_00.set_color("blue");
                p.Static04_00_00_00.set_textAlign("center");
                p.Static04_00_00_00.set_verticalAlign("middle");
                p.Static04_00_00_00.set_opacity("0.7");
                p.Static04_00_00_00.set_font("normal 12px/normal \"Arial\"");
                p.Static04_00_00_00.move("110","0","60","45",null,null);

                p.Static09.set_taborder("4");
                p.Static09.set_text("검색결과");
                p.Static09.set_cssclass("sta_WF_subTitle01");
                p.Static09.move("20","11","100","27",null,null);

                p.staGridRowCnt.set_taborder("5");
                p.staGridRowCnt.set_text("(총 0건)");
                p.staGridRowCnt.set_cssclass("sta_WF_subResult");
                p.staGridRowCnt.move("Static09:20","11","100","27",null,null);

                p.btnAddRow.set_taborder("6");
                p.btnAddRow.set_text("행추가");
                p.btnAddRow.set_cssclass("btn_WF_Row_Add");
                p.btnAddRow.move(null,"14","66","26","91",null);

                p.btnDeleteRow.set_taborder("7");
                p.btnDeleteRow.set_text("행삭제");
                p.btnDeleteRow.set_cssclass("btn_WF_Row_Delete");
                p.btnDeleteRow.set_enable("true");
                p.btnDeleteRow.move(null,"14","66","26","20",null);
            	}
            );
            this.divResult.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divResult.form
            obj = new Layout("screen00","",0,0,this.divResult.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divResult.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",1032,72,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1280,670,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("excelImport");
                p.set_cssclass("frm_WF_comp");

                p.sta_01.set_taborder("0");
                p.sta_01.set_text("Type 2 템플릿");
                p.sta_01.set_cssclass("sta_WF_compTitle01");
                p.sta_01.move("50","10","500","30",null,null);

                p.divResult.set_taborder("1");
                p.divResult.set_text("");
                p.divResult.move("50","150",null,"520","50",null);

                p.divSearch.set_taborder("2");
                p.divSearch.set_cssclass("");
                p.divSearch.set_text("");
                p.divSearch.move("50","57",null,"83","50",null);

                p.Static02.set_taborder("3");
                p.Static02.set_text("W\r\n 50");
                p.Static02.set_visible("false");
                p.Static02.set_background("antiquewhite");
                p.Static02.set_color("blue");
                p.Static02.move(null,"0","50","753","0",null);

                p.Static04_00_00.set_taborder("4");
                p.Static04_00_00.set_text("h 10");
                p.Static04_00_00.set_visible("false");
                p.Static04_00_00.set_background("aqua");
                p.Static04_00_00.set_color("blue");
                p.Static04_00_00.set_textAlign("center");
                p.Static04_00_00.set_verticalAlign("middle");
                p.Static04_00_00.set_opacity("0.7");
                p.Static04_00_00.set_font("normal 12px/normal \"Arial\"");
                p.Static04_00_00.move("50","140","60","10",null,null);

                p.Static34.set_taborder("5");
                p.Static34.set_text("W 50");
                p.Static34.set_visible("false");
                p.Static34.set_background("antiquewhite");
                p.Static34.set_color("blue");
                p.Static34.move("0","0","50","752",null,null);

                p.Static04_00_00_01.set_taborder("6");
                p.Static04_00_00_01.set_text("h 15");
                p.Static04_00_00_01.set_visible("false");
                p.Static04_00_00_01.set_background("aqua");
                p.Static04_00_00_01.set_color("blue");
                p.Static04_00_00_01.set_textAlign("center");
                p.Static04_00_00_01.set_verticalAlign("middle");
                p.Static04_00_00_01.set_opacity("0.7");
                p.Static04_00_00_01.set_font("normal 12px/normal \"Arial\"");
                p.Static04_00_00_01.move("70","125","100","15",null,null);

                p.btnSave.set_text("저장");
                p.btnSave.set_cssclass("btn_WF_Save");
                p.btnSave.set_visible("true");
                p.btnSave.set_taborder("7");
                p.btnSave.move(null,"19","65","28","50",null);

                p.btnSearch.set_text("조회");
                p.btnSearch.set_cssclass("");
                p.btnSearch.set_taborder("8");
                p.btnSearch.move(null,"19","65","28","118",null);

                p.btnExcelUplod.set_text("엑셀업로드");
                p.btnExcelUplod.set_cssclass("btn_WF_icoExcel_Up");
                p.btnExcelUplod.set_taborder("9");
                p.btnExcelUplod.move(null,"19","100","28","btnSearch:5",null);
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
            obj = new BindItem("item0","divSearch.form.SCH_RQST_ID00","value","dsSearch","progId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.SCH_RQST_ID00_00","value","dsSearch","progNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.cbo001","value","dsSearch","substituteUseYn");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("excelImport.xfdl","lib::common.xjs");
        this.registerScript("excelImport.xfdl", function() {
        /**
        *  Excel Upload Template
        *  MenuPath      -
        *  FileName      excelImport.xfdl
        *  Creator 	     parkmg
        *  CreateDate    2023.08.01
        *  Desction      그리드 엑셀 업로드
        ************** 소스 수정 이력 ***********************************************
        *  date          Modifier    Description
        *******************************************************************************
        *  2023.08.01    parkmg 	 최초 생성
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
        };

        /************************************************************************************************
        * TRANSACTION 서비스 호출 처리
        ************************************************************************************************/
        /**
         * description 조회
        */
        this.fnSearch = function()
        {
        	var strSvcId    = "getTypeTwoList";
        	var strSvcUrl   = "sam/getTypeTwoList.do";
        	var inData      = "dsSearch";
        	var outData     = "dsTypeTwo";
        	var strArg      = "";
        	var callBackFnc = "fnCallBack";
        	var isAsync   	= true;

        // 	"0" : XML 형식
        // 	"1" : Binary 형식
        // 	"2" : SSV 형식
        // 	"3" : JSON 형식

        	//this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync, 3);  // json

        	this.gfnTransaction(strSvcId, 		// transaction을 구분하기 위한 svc id값
        						strSvcUrl, 	    // transaction을 요청할 주소
        						inData, 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData, 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc, 	// transaction의 결과를 받을 Function 이름
        						isAsync); 		// 비동기통신 여부 [생략가능]
        };

        /**
         * description 저장
        */
        this.fnSave = function()
        {
        	var strSvcId    = "setTypeTwoList";
        	var strSvcUrl   = "sam/setTypeTwoList.do";
        	var inData      = "dsTypeTwo";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallBack";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId, 		// transaction을 구분하기 위한 svc id값
        						strSvcUrl, 	    // transaction을 요청할 주소
        						inData, 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData, 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc, 	// transaction의 결과를 받을 Function 이름
        						isAsync); 		// 비동기통신 여부 [생략가능]
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
        		case "getTypeTwoList":

        		break;
        		case "setTypeTwoList":
        			if(this.callbackMsg == "success"){
        				this.gfnAlert("CM_MSG_SAVE_SUCCESS");  // 저장 되었습니다.
        				this.fnSearch();
        			}
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
        		case "testPopup":
        			var oRtn = this.gfnGetPopupRtn();

        			// pat 1. variable one
        // 			this.gfnAlert(oRtn);

        			// pat 2. Array
        // 			if(oRtn){
        // 				for(var i = 0; i < oRtn.length; i++){
        // 					console.log('oRtn Array: ', i, ' : ', oRtn[i]);
        // 				}
        // 			}

        			// pat 3. Object
        			if(oRtn){
        				console.log('oRtn : ',  oRtn);
        				console.log('oRtn.CONFIRM : ',  oRtn.CONFIRM);
        				console.log('oRtn.popDS : ',  oRtn.popDS);
        			}
        		break;
        	}
        };

        this.fnImportCallback = function(objForm, sImportId)
        {
        	switch(sImportId){
        		case "sampleImport":

        // 			for(var i = 0; i < this.dsTypeTwo_outds.colcount; i++){
        // 				this.dsTypeTwo_outds.updateColID(i, this.dsTypeTwo.getColID(i));
        //
        // 			}
        //
        // 			this.dsTypeTwo.clearData();
        //
        // 			for(var i = 0; i < this.dsTypeTwo_outds.rowcount; i++){
        // 				var nRowId = this.dsTypeTwo.addRow();
        // 				this.dsTypeTwo.copyRow(nRowId, this.dsTypeTwo_outds, i);
        // 			}
        // 			console.log(this.dsTypeTwo);
        // 			console.log(this.dsTypeTwo_outds);
        //
        // 			var oOutds = this.removeChild("dsTypeTwo_outds");
        // 			oOutds.destroy();
        			console.log(this.dsTypeTwo);
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
        this.btnSave_onclick = function(obj,e)
        {
        	if(this.dsTypeTwo.rowcount == 0){
        		this.gfnAlert("CM_MSG_SAVE_NODATA");  // 저장할 데이터가 없습니다.
        		return;
        	}
        	if (!this.gfnDsIsUpdated(this.dsTypeTwo)) {
        		this.gfnAlert("CM_MSG_SAVE_NOCHANGE");  // 변경된 내역이 없습니다.
        		return;
        	}
        	// msgId, args(치환), popupId, Confirm Callback Function({확인 trueFunc, 취소: falseFunc})
        	// confirm 이후 스크립트가 실행되기때문에 return; 처리 or 가장 마지막 위치
        	this.gfnAlert("CM_CFM_BEFORE_SAVE", "", "", {trueFunc: "fnSave", falseFunc: ""});  // 변경된 내역을 저장 하시겠습니까?
        	return;
        };

        /**
         * description 행추가 클릭
        */
        this.btnAddRow_onclick = function(obj,e)
        {
        	this.gfnInsertRow(this.dsTypeTwo, "last");
        	this.dsTypeTwo.setColumn(this.dsTypeTwo.rowposition, "substituteUseYn", "Y");
        	this.dsTypeTwo.setColumn(this.dsTypeTwo.rowposition, "radioUseYn", "N");
        };

        /**
         * description 행삭제 클릭
        */
        this.btnDeleteRow_onclick = function(obj,e)
        {
        	this.gfnDeleteRow(this.dsTypeTwo);
        };

        /**
         * description 그리드해드 클릭
        */
        this.grdTypeTwo_onheadclick = function(obj,e)
        {
        	this.gfnSetGridCheckAll(obj, e, "rowCheck");
        };

        /**
        * @description 엑셀 업로드
        */
        this.btnExcelUplod_onclick = function(obj,e)
        {
        	/*
        	 *	엑셀 업로드
        	 *	1. 기존 dataset row는 삭제됨
        	 *  2. 두 가지 방식 : gfnExcelImport (사용자에게 제공되는 경우) / gfnExcelImportAll (시스템 내부적으로 사용)
        	 *	3. gfnExcelImport : Excel Column 순서와 Dataset Column 순서가 동일하게 import
        	 *	4. gfnExcelImportAll : Excel Header 와 dataset ColID가 동일한 경우 (ex - excel header: sysId, dataset ColID: sysId)
        	 *  5. 후처리는 지정한 callback, importID를 사용
        	 *  6. 업로드 성공 시 내부 onsuccess event(lib 내에 존재) 에서 내부로직 처리
        	 *  7. 업로드 실패 시 onerror event(lib 내에 존재) 에서 alert error message
        	 *	8. gfnExcelImportAll 를 사용할 경우 사용자에게 제공되는 Import 용 Excel 에 Column ID가 공개되기에 사용하지 않는다.
        	 *  9. gfnExcelImport 사용법
        			 * @param {String} sDataset - dataset
        			 * @param {String} [sSheet]	- sheet name
        			 * @param {String} [sBody] - body 영역지정
        			 * @param {String} [sCallback] - callback 함수
        			 * @param {String} [sImportId] - import id(callback호출시 필수)
        			 * @param {Object} [objForm] - form object(callback호출시 필수)
        			this.gfnExcelImport("dsTypeTwo", "Sheet1", "A2", "fnImportCallback", "sampleImport", this);
        	 *  10. gfnExcelImportAll 사용법
        				extlib/exPrototype/Excel.js 참조
        	 */

        	this.gfnExcelImport("dsTypeTwo", "Sheet1", "A2", "fnImportCallback", "sampleImport", this);
        };



        /************************************************************************************************
        * 사용자 FUNCTION 영역
        ************************************************************************************************/


        /**
         * description 엑셀 업로드
        */
        // this.gfnExcelImport = function()
        // {
        //     //excel import object
        //     var objImport = this.gfnCreateImportObject();
        //
        //     var sRange  = "[Command=getsheetdata;Output=output;Head=!A1:C1;Body=Sheet1!A2]";
        //     var sOutDatasets = "dsTypeTwo=output";
        //     objImport.importData("", sRange, sOutDatasets);
        // };




        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divResult.form.grdTypeTwo.addEventHandler("onheadclick",this.grdTypeTwo_onheadclick,this);
            this.divResult.form.Static04_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.divResult.form.Static04_00_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.divResult.form.Static09.addEventHandler("onclick",this.Static09_onclick,this);
            this.divResult.form.btnAddRow.addEventHandler("onclick",this.btnAddRow_onclick,this);
            this.divResult.form.btnDeleteRow.addEventHandler("onclick",this.btnDeleteRow_onclick,this);
            this.divSearch.form.Static00.addEventHandler("onclick",this.div_Search_Static00_onclick,this);
            this.divSearch.form.sta_001.addEventHandler("onclick",this.div_Search_Static01_onclick,this);
            this.divSearch.form.Static04_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.divSearch.form.Static04_00_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.divSearch.form.Static10_00.addEventHandler("onclick",this.div_Search_Static10_00_onclick,this);
            this.divSearch.form.Static15_01_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.divSearch.form.SCH_RQST_ID00.addEventHandler("onchanged",this.div_Search_SCH_RQST_ID_onchanged,this);
            this.divSearch.form.SCH_RQST_ID00_00.addEventHandler("onchanged",this.div_Search_SCH_RQST_ID_onchanged,this);
            this.divSearch.form.Static15_01_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.divSearch.form.cbo001.addEventHandler("ondropdown",this.div_Search_sch_apv_stat_cd_ondropdown,this);
            this.divSearch.form.cbo001.addEventHandler("oncloseup",this.div_Search_sch_apv_stat_cd_oncloseup,this);
            this.divSearch.form.cbo001.addEventHandler("onitemchanged",this.div_Search_sch_apv_stat_cd_onitemchanged,this);
            this.Static02.addEventHandler("onclick",this.Static02_onclick,this);
            this.Static04_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.Static34.addEventHandler("onclick",this.Static02_onclick,this);
            this.Static04_00_00_01.addEventHandler("onclick",this.Static31_onclick,this);
            this.btnSave.addEventHandler("onclick",this.btnSave_onclick,this);
            this.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
            this.btnExcelUplod.addEventHandler("onclick",this.btnExcelUplod_onclick,this);
        };
        this.loadIncludeScript("excelImport.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
