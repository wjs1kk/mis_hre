(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CODE_1010M");
            this.set_titletext("공통코드 관리");
            this.set_cssclass("frm_WF_comp");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj.set_updatecontrol("true");
            obj._setContents("<ColumnInfo><Column id=\"moduleId\" type=\"STRING\" size=\"256\"/><Column id=\"headerCode\" type=\"STRING\" size=\"256\"/><Column id=\"headerCodeNmKr\" type=\"STRING\" size=\"256\"/><Column id=\"searchHeaderCode\" type=\"STRING\" size=\"256\"/><Column id=\"sysId\" type=\"STRING\" size=\"256\"/><Column id=\"searchSysId\" type=\"STRING\" size=\"256\"/><Column id=\"searchModuleId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCodeHeader", this);
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj._setContents("<ColumnInfo><Column id=\"rowCheck\" type=\"STRING\" size=\"256\"/><Column id=\"rowStatus\" type=\"STRING\" size=\"256\"/><Column id=\"sysId\" type=\"STRING\" size=\"256\"/><Column id=\"moduleId\" type=\"STRING\" size=\"256\"/><Column id=\"headerCode\" type=\"STRING\" size=\"256\"/><Column id=\"headerCodeNmKr\" type=\"STRING\" size=\"256\"/><Column id=\"headerCodeNmEn\" type=\"STRING\" size=\"256\"/><Column id=\"headerCodeDc\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"sortOrdr\" type=\"STRING\" size=\"256\"/><Column id=\"attr1\" type=\"STRING\" size=\"256\"/><Column id=\"attr2\" type=\"STRING\" size=\"256\"/><Column id=\"attr3\" type=\"STRING\" size=\"256\"/><Column id=\"attr4\" type=\"STRING\" size=\"256\"/><Column id=\"attr5\" type=\"STRING\" size=\"256\"/><Column id=\"chkCntSql\" type=\"STRING\" size=\"256\"/><Column id=\"rgstId\" type=\"STRING\" size=\"256\"/><Column id=\"rgstDt\" type=\"STRING\" size=\"256\"/><Column id=\"rgstIp\" type=\"STRING\" size=\"256\"/><Column id=\"rgstNm\" type=\"STRING\" size=\"256\"/><Column id=\"updtId\" type=\"STRING\" size=\"256\"/><Column id=\"updtIp\" type=\"STRING\" size=\"256\"/><Column id=\"updtDt\" type=\"STRING\" size=\"256\"/><Column id=\"updtNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUseYn", this);
            obj._setContents("<ColumnInfo><Column id=\"value\" type=\"STRING\" size=\"256\"/><Column id=\"text\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCodeLine", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"rowCheck\" type=\"STRING\" size=\"256\"/><Column id=\"rowStatus\" type=\"STRING\" size=\"256\"/><Column id=\"sysId\" type=\"STRING\" size=\"256\"/><Column id=\"moduleId\" type=\"STRING\" size=\"256\"/><Column id=\"headerCode\" type=\"STRING\" size=\"256\"/><Column id=\"lineCode\" type=\"STRING\" size=\"256\"/><Column id=\"lineCodeNmKr\" type=\"STRING\" size=\"256\"/><Column id=\"lineCodeNmEn\" type=\"STRING\" size=\"256\"/><Column id=\"lineCodeDc\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"useYmd\" type=\"STRING\" size=\"256\"/><Column id=\"endYmd\" type=\"STRING\" size=\"256\"/><Column id=\"sortOrdr\" type=\"INT\" size=\"256\"/><Column id=\"attr1\" type=\"STRING\" size=\"256\"/><Column id=\"attr2\" type=\"STRING\" size=\"256\"/><Column id=\"attr3\" type=\"STRING\" size=\"256\"/><Column id=\"attr4\" type=\"STRING\" size=\"256\"/><Column id=\"attr5\" type=\"STRING\" size=\"256\"/><Column id=\"headerCodeNmKr\" type=\"STRING\" size=\"256\"/><Column id=\"headerCodeNmEn\" type=\"STRING\" size=\"256\"/><Column id=\"headerCodeDc\" type=\"STRING\" size=\"256\"/><Column id=\"rgstId\" type=\"STRING\" size=\"256\"/><Column id=\"rgstDt\" type=\"STRING\" size=\"256\"/><Column id=\"rgstIp\" type=\"STRING\" size=\"256\"/><Column id=\"rgstNm\" type=\"STRING\" size=\"256\"/><Column id=\"updtId\" type=\"STRING\" size=\"256\"/><Column id=\"updtIp\" type=\"STRING\" size=\"256\"/><Column id=\"updtDt\" type=\"STRING\" size=\"256\"/><Column id=\"updtNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSysIdCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"value\" type=\"STRING\" size=\"256\"/><Column id=\"text\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btnSave",null,"20","65","28","49",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Save");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"20","65","28","btnSave:3",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle","50","0","500","58",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("공통코드 관리");
            obj.set_cssclass("sta_WF_compTitle01");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","50","58",null,"70","50",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staBg","0","0",null,"56","0",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_bg");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static10","0","0","20",null,null,"0",null,null,null,null,this.divSearch.form);
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

            obj = new Static("Static15_01_00_00","20","55","50",null,null,"40",null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta001","455","15","100","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("코드그룹");
            obj.set_cssclass("sta_WF_condition01");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtCodeId","sta001:10","15","200","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta002","910","15","100","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("코드그룹명");
            obj.set_cssclass("sta_WF_condition01");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtCodeNm","sta002:10","15","200","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta003","1365","15","100","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("모듈");
            obj.set_cssclass("sta_WF_condition01");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtModuleId","sta003:10","15","200","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSysId","130","15","200","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_innerdataset("dsSysIdCombo");
            obj.set_codecolumn("value");
            obj.set_datacolumn("text");
            obj.set_text("Combo00");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staSysId","20","15","100","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("시스템");
            obj.set_cssclass("sta_WF_condition01");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divCode","50","138",null,"37.5%","50",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Grid("grdCodeHeader","0","45",null,null,"0","0",null,null,null,null,this.divCode.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsCodeHeader");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_autoupdatetype("itemselect");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\" band=\"left\"/><Column size=\"48\" band=\"left\"/><Column size=\"48\" band=\"left\"/><Column size=\"96\"/><Column size=\"160\"/><Column size=\"240\"/><Column size=\"240\"/><Column size=\"560\"/><Column size=\"96\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"34\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"상태\"/><Cell col=\"3\" text=\"모듈\"/><Cell col=\"4\" text=\"코드그룹\"/><Cell col=\"5\" text=\"코드그룹명(한글)\"/><Cell col=\"6\" text=\"코드그룹명(영문)\"/><Cell col=\"7\" text=\"코드설명\"/><Cell col=\"8\" text=\"사용여부\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\" text=\"expr:currow+1\" textAlign=\"center\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" textAlign=\"center\" text=\"bind:rowCheck\"/><Cell col=\"2\" textAlign=\"center\" imagestretch=\"fit\" displaytype=\"normal\" text=\"bind:rowStatus\"/><Cell col=\"3\" text=\"bind:moduleId\" edittype=\"expr:rowStatus == &apos;inserted&apos;? &apos;text&apos; : &apos;none&apos;\" textAlign=\"center\" editmaxlength=\"20\" displaytype=\"expr:rowStatus == &apos;inserted&apos;? &apos;editcontrol&apos; : &apos;normal&apos;\"/><Cell col=\"4\" text=\"bind:headerCode\" edittype=\"expr:rowStatus == &apos;inserted&apos;? &apos;text&apos; : &apos;none&apos;\" editmaxlength=\"20\" displaytype=\"expr:rowStatus == &apos;inserted&apos;? &apos;editcontrol&apos; : &apos;normal&apos;\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:headerCodeNmKr\" edittype=\"text\" editmaxlength=\"300\" displaytype=\"editcontrol\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:headerCodeNmEn\" edittype=\"text\" editmaxlength=\"300\" displaytype=\"editcontrol\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:headerCodeDc\" edittype=\"text\" textAlign=\"left\" editmaxlength=\"3000\" displaytype=\"editcontrol\"/><Cell col=\"8\" text=\"bind:useYn\" edittype=\"combo\" displaytype=\"combocontrol\" combodataset=\"dsUseYn\" combocodecol=\"value\" combodatacol=\"text\"/></Band></Format></Formats>");
            this.divCode.addChild(obj.name, obj);

            obj = new Button("btnDeleteRowGroup",null,"14","73","26","0",null,null,null,null,null,this.divCode.form);
            obj.set_taborder("2");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_Row_Delete");
            this.divCode.addChild(obj.name, obj);

            obj = new Button("btnAddRowGroup",null,"14","73","26","btnDeleteRowGroup:5",null,null,null,null,null,this.divCode.form);
            obj.set_taborder("1");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_Row_Add");
            this.divCode.addChild(obj.name, obj);

            obj = new Static("staTitle","0","0","80","45",null,null,null,null,null,null,this.divCode.form);
            obj.set_taborder("3");
            obj.set_text("코드그룹");
            obj.set_cssclass("sta_WF_subTitle01");
            obj.set_fittocontents("width");
            this.divCode.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_00_00","90","0","60","45",null,null,null,null,null,null,this.divCode.form);
            obj.set_taborder("4");
            obj.set_text("h 45");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divCode.addChild(obj.name, obj);

            obj = new Static("staGridRowCnt","staTitle:10","0","150","45",null,null,null,null,null,null,this.divCode.form);
            obj.set_taborder("5");
            obj.set_text("(총 0건)");
            obj.set_cssclass("sta_WF_subTxt");
            this.divCode.addChild(obj.name, obj);

            obj = new Div("divLine","50","divCode:10",null,null,"50","37",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle00","0","0","80","45",null,null,null,null,null,null,this.divLine.form);
            obj.set_taborder("0");
            obj.set_text("코드라인");
            obj.set_cssclass("sta_WF_subTitle01");
            obj.set_fittocontents("width");
            this.divLine.addChild(obj.name, obj);

            obj = new Static("staGridRowCnt2","staTitle00:10","0","150","45",null,null,null,null,null,null,this.divLine.form);
            obj.set_taborder("1");
            obj.set_text("(총 0건)");
            obj.set_cssclass("sta_WF_subTxt");
            this.divLine.addChild(obj.name, obj);

            obj = new Grid("grdCodeLine","0","45",null,null,"0","0",null,null,null,null,this.divLine.form);
            obj.set_taborder("2");
            obj.set_binddataset("dsCodeLine");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_autoupdatetype("itemselect");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\" band=\"left\"/><Column size=\"48\" band=\"left\"/><Column size=\"48\" band=\"left\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"240\"/><Column size=\"240\"/><Column size=\"560\"/><Column size=\"96\"/><Column size=\"96\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"34\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"상태\"/><Cell col=\"3\" text=\"코드그룹\"/><Cell col=\"4\" text=\"코드\"/><Cell col=\"5\" text=\"코드명(한글)\"/><Cell col=\"6\" text=\"코드명(영어)\"/><Cell col=\"7\" text=\"코드설명\"/><Cell col=\"8\" text=\"정렬순서\"/><Cell col=\"9\" text=\"사용여부\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\" text=\"expr:currow+1\" textAlign=\"center\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" textAlign=\"center\" text=\"bind:rowCheck\"/><Cell col=\"2\" textAlign=\"center\" imagestretch=\"fit\" displaytype=\"normal\" text=\"bind:rowStatus\"/><Cell col=\"3\" text=\"bind:headerCode\" edittype=\"none\" editmaxlength=\"20\"/><Cell col=\"4\" text=\"bind:lineCode\" edittype=\"expr:rowStatus == &apos;inserted&apos;? &apos;text&apos; : &apos;none&apos;\" editmaxlength=\"20\" textAlign=\"left\" displaytype=\"expr:rowStatus == &apos;inserted&apos;? &apos;editcontrol&apos; : &apos;normal&apos;\"/><Cell col=\"5\" text=\"bind:lineCodeNmKr\" edittype=\"text\" editmaxlength=\"300\" textAlign=\"left\" displaytype=\"editcontrol\"/><Cell col=\"6\" text=\"bind:lineCodeNmEn\" edittype=\"text\" editmaxlength=\"300\" textAlign=\"left\" displaytype=\"editcontrol\"/><Cell col=\"7\" text=\"bind:lineCodeDc\" edittype=\"text\" textAlign=\"left\" editmaxlength=\"3000\" displaytype=\"editcontrol\"/><Cell col=\"8\" text=\"bind:sortOrdr\" edittype=\"text\" textAlign=\"right\" displaytype=\"editcontrol\"/><Cell col=\"9\" text=\"bind:useYn\" edittype=\"combo\" displaytype=\"combocontrol\" combodataset=\"dsUseYn\" combocodecol=\"value\" combodatacol=\"text\"/></Band></Format></Formats>");
            this.divLine.addChild(obj.name, obj);

            obj = new Button("btnDeleteRowLine",null,"14","73","26","0",null,null,null,null,null,this.divLine.form);
            obj.set_taborder("4");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_Row_Delete");
            this.divLine.addChild(obj.name, obj);

            obj = new Button("btnAddRowLine",null,"14","73","26","btnDeleteRowLine:5",null,null,null,null,null,this.divLine.form);
            obj.set_taborder("3");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_Row_Add");
            this.divLine.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divCode.form
            obj = new Layout("default","",0,0,this.divCode.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.grdCodeHeader.set_taborder("0");
                p.grdCodeHeader.set_binddataset("dsCodeHeader");
                p.grdCodeHeader.set_autofittype("col");
                p.grdCodeHeader.set_autoenter("select");
                p.grdCodeHeader.set_autoupdatetype("itemselect");
                p.grdCodeHeader.move("0","45",null,null,"0","0");

                p.btnDeleteRowGroup.set_taborder("2");
                p.btnDeleteRowGroup.set_text("행삭제");
                p.btnDeleteRowGroup.set_cssclass("btn_WF_Row_Delete");
                p.btnDeleteRowGroup.move(null,"14","73","26","0",null);

                p.btnAddRowGroup.set_taborder("1");
                p.btnAddRowGroup.set_text("행추가");
                p.btnAddRowGroup.set_cssclass("btn_WF_Row_Add");
                p.btnAddRowGroup.move(null,"14","73","26","btnDeleteRowGroup:5",null);

                p.staTitle.set_taborder("3");
                p.staTitle.set_text("코드그룹");
                p.staTitle.set_cssclass("sta_WF_subTitle01");
                p.staTitle.set_fittocontents("width");
                p.staTitle.move("0","0","80","45",null,null);

                p.Static04_00_00_00_00.set_taborder("4");
                p.Static04_00_00_00_00.set_text("h 45");
                p.Static04_00_00_00_00.set_visible("false");
                p.Static04_00_00_00_00.set_background("aqua");
                p.Static04_00_00_00_00.set_color("blue");
                p.Static04_00_00_00_00.set_textAlign("center");
                p.Static04_00_00_00_00.set_verticalAlign("middle");
                p.Static04_00_00_00_00.set_opacity("0.7");
                p.Static04_00_00_00_00.set_font("normal 12px/normal \"Arial\"");
                p.Static04_00_00_00_00.move("90","0","60","45",null,null);

                p.staGridRowCnt.set_taborder("5");
                p.staGridRowCnt.set_text("(총 0건)");
                p.staGridRowCnt.set_cssclass("sta_WF_subTxt");
                p.staGridRowCnt.move("staTitle:10","0","150","45",null,null);
            	}
            );
            this.divCode.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divCode.form
            obj = new Layout("screen00","",0,0,this.divCode.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divCode.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divLine.form
            obj = new Layout("default","",0,0,this.divLine.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staTitle00.set_taborder("0");
                p.staTitle00.set_text("코드라인");
                p.staTitle00.set_cssclass("sta_WF_subTitle01");
                p.staTitle00.set_fittocontents("width");
                p.staTitle00.move("0","0","80","45",null,null);

                p.staGridRowCnt2.set_taborder("1");
                p.staGridRowCnt2.set_text("(총 0건)");
                p.staGridRowCnt2.set_cssclass("sta_WF_subTxt");
                p.staGridRowCnt2.move("staTitle00:10","0","150","45",null,null);

                p.grdCodeLine.set_taborder("2");
                p.grdCodeLine.set_binddataset("dsCodeLine");
                p.grdCodeLine.set_autofittype("col");
                p.grdCodeLine.set_autoenter("select");
                p.grdCodeLine.set_autoupdatetype("itemselect");
                p.grdCodeLine.move("0","45",null,null,"0","0");

                p.btnDeleteRowLine.set_taborder("4");
                p.btnDeleteRowLine.set_text("행삭제");
                p.btnDeleteRowLine.set_cssclass("btn_WF_Row_Delete");
                p.btnDeleteRowLine.move(null,"14","73","26","0",null);

                p.btnAddRowLine.set_taborder("3");
                p.btnAddRowLine.set_text("행추가");
                p.btnAddRowLine.set_cssclass("btn_WF_Row_Add");
                p.btnAddRowLine.move(null,"14","73","26","btnDeleteRowLine:5",null);
            	}
            );
            this.divLine.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divLine.form
            obj = new Layout("screen00","",0,0,this.divLine.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divLine.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1920,720,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("공통코드 관리");
                p.set_cssclass("frm_WF_comp");

                p.btnSave.set_taborder("4");
                p.btnSave.set_text("저장");
                p.btnSave.set_cssclass("btn_WF_Save");
                p.btnSave.move(null,"20","65","28","49",null);

                p.btnSearch.set_taborder("0");
                p.btnSearch.set_text("조회");
                p.btnSearch.move(null,"20","65","28","btnSave:3",null);

                p.staTitle.set_taborder("1");
                p.staTitle.set_text("공통코드 관리");
                p.staTitle.set_cssclass("sta_WF_compTitle01");
                p.staTitle.move("50","0","500","58",null,null);

                p.divSearch.set_taborder("2");
                p.divSearch.set_text("");
                p.divSearch.move("50","58",null,"70","50",null);

                p.divCode.set_taborder("3");
                p.divCode.set_text("");
                p.divCode.set_cssclass("div_WF_Area");
                p.divCode.move("50","138",null,"37.5%","50",null);

                p.divLine.set_taborder("5");
                p.divLine.set_text("Div00");
                p.divLine.set_cssclass("div_WF_Area");
                p.divLine.move("50","divCode:10",null,null,"50","37");
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
            obj = new BindItem("item0","divSearch.form.edtCodeId","value","dsSearch","searchHeaderCode");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.edtCodeNm","value","dsSearch","headerCodeNmKr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.edtModuleId","value","dsSearch","searchModuleId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.cboSysId","value","dsSearch","searchSysId");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("CODE_1010M.xfdl","lib::common.xjs");
        this.registerScript("CODE_1010M.xfdl", function() {
        /**
        *  messageManage
        *  MenuPath      -
        *  FileName      commonCodeManage.xfdl
        *  Creator 	     cheonsy
        *  CreateDate    2023.02.23
        *  Desction      공통코드관리
        ************** 소스 수정 이력 ***********************************************
        *  date          Modifier    Description
        *******************************************************************************
        *  2023.02.23    cheonsy 	 최초 생성
        *******************************************************************************/
        this.executeIncludeScript("lib::common.xjs"); /*include "lib::common.xjs"*/;
        var cnt = 0;
        /***********************************************************************************************
        * FORM EVENT 영역(onload, onbeforeclose)
        /***********************************************************************************************/
        /**
         * description 화면 onload
        */
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnLoad(this);
            this.fnLoadCombo();
        };

        /************************************************************************************************
        * TRANSACTION 서비스 호출 처리
        ************************************************************************************************/

        this.fnLoadCombo = function ()
        {
            this.comboCnt = 2;
        	this.gfnLoadCombo("loadCombo", "dsUseYn=SM:USE_YN:C", "fnComboCallback");
        	this.gfnTransaction("loadSysIdCombo","sm/getSystemIdCombo.do","","dsSysIdCombo","","fnComboCallback");
        };

        /**
         * description 코드그룹 조회
        */
        this.fnCodeHeaderSearch = function()
        {
        	this.gfnTransaction("getCodeHeaderList", "sm/getCodeHeaderList.do", "dsSearch", "dsCodeHeader", "", "fnCallBack", true);
        };

        /**
         * description 코드라인 조회
        */
        this.fnCodeLineSearch = function()
        {
        	this.gfnTransaction("getCodeLineList", "sm/getCodeLineList.do", "dsSearch", "dsCodeLine", "", "fnCallBack" , true);
        };

        /**
         * description 저장
        */
        this.fnSave = function()
        {
        	this.gfnTransaction("setCodeList", "sm/setCodeList.do", "dsCodeHeader dsCodeLine", "", "", "fnCallBack" , true);
        };

        /************************************************************************************************
         * CALLBACK 콜백 처리부분(Transaction, Popup)
         ************************************************************************************************/

        this.fnComboCallback = function (svcId, errorCode, errorMsg)
        {
            this.comboCnt--;
            if (this.comboCnt == 0) {
                var sysId = nexacro.getApplication().gdsUserInfo.getColumn(0, "sysId");
                this.dsSearch.setColumn(0, "searchSysId", sysId);
                this.btnSearch.click();
            }
        };

        /**
         * description Transaction CallBack 함수
        */
        this.fnCallBack = function (sSvcId, nErrorCode, sErrorMsg)
        {
        	switch (sSvcId) {
        		case "getCodeHeaderList":
        			//총 건수 계산
        			this.gfnRowCount(this.dsCodeHeader, this.divCode.form.staGridRowCnt);
        			this.fnCodeLineSearch();
        		break;
        		case "getCodeLineList":
        			//총 건수 계산
        			this.gfnRowCount(this.dsCodeLine, this.divLine.form.staGridRowCnt2);
        		break;
        		case "setCodeList":
        			if(this.callbackMsg == "success"){
        				this.gfnAlert("CM_MSG_SAVE_SUCCESS");  // 저장 되었습니다.
        				this.dsSearch.clearData();
        				this.dsSearch.addRow();
        				this.fnCodeHeaderSearch();
        				this.fnBtnControlTrue();
        			}else{
        				this.gfnAlert("CM_MSG_TEST_3");  // 저장에 실패하였습니다.
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

        };

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        /**
         * description 조회버튼 클릭
        */
        this.btnSearch_onclick = function(obj,e)
        {
        	this.fnCodeHeaderSearch();
        	this.fnBtnControlTrue();
        };

        /**
         * description 코드그룹 rowposition change 이벤트
        */
        this.dsCodeHeader_onrowposchanged = function(obj,e)
        {
        	if(this.dsCodeHeader.findRow("rowStatus", "inserted") > -1){
        		this.divCode.form.grdCodeHeader.setCellPos( 3,  this.dsCodeHeader.findRow("rowStatus", "inserted"));
        		this.fnBtnControlFalseInsert();
        		this.gfnAlert("CM_MSG_CHANGE_DATA");  // 변경된 데이터가 있습니다. 저장 후 진행해 주세요.
        	} else if (this.dsCodeHeader.findRow("rowStatus", "updated") > -1){
        		this.divCode.form.grdCodeHeader.setCellPos( 4,  this.dsCodeHeader.findRow("rowStatus", "updated"));
        		this.fnBtnControlFalse();
        		this.gfnAlert("CM_MSG_CHANGE_DATA");  // 변경된 데이터가 있습니다. 저장 후 진행해 주세요.
        	} else if (this.dsCodeHeader.findRowExpr("rowStatus=='deleted'") > -1){
        		this.divCode.form.grdCodeHeader.setCellPos( 4,  this.dsCodeHeader.findRowExpr("rowStatus=='deleted'"));
        		this.fnBtnControlFalse();
        		this.gfnAlert("CM_MSG_CHANGE_DATA");  // 변경된 데이터가 있습니다. 저장 후 진행해 주세요.
        	}

        	this.dsSearch.setColumn(0, "sysId", this.dsCodeHeader.getColumn(this.dsCodeHeader.rowposition, "sysId"));
        	this.dsSearch.setColumn(0, "moduleId", this.dsCodeHeader.getColumn(this.dsCodeHeader.rowposition, "moduleId"));
        	this.dsSearch.setColumn(0, "headerCode", this.dsCodeHeader.getColumn(this.dsCodeHeader.rowposition, "headerCode"));
        	this.fnCodeLineSearch();
        };

        /**
         * description 저장버튼 클릭
        */
        this.btnSave_onclick = function(obj,e)
        {
        	if(this.dsCodeHeader.rowcount == 0 && this.dsCodeLine.rowcount == 0){
        		this.gfnAlert("CM_MSG_SAVE_NODATA");  // 저장할 데이터가 없습니다.
        		return;
        	}
        	if (!this.gfnDsIsUpdated(this.dsCodeHeader) && !this.gfnDsIsUpdated(this.dsCodeLine)) {
        		this.gfnAlert("CM_MSG_SAVE_NOCHANGE");  // 변경된 내역이 없습니다.
        		return;
        	}
        	if (!this.fnValidationHeader()) {		// 그리드 필수값 체크 -> 헤더
        		return;
            }

        	if (!this.fnValidationLine()) {		// 그리드 필수값 체크 -> 라인
        		return;
            }

        	this.gfnAlert("CM_CFM_BEFORE_SAVE", "", "", {trueFunc: "fnSave", falseFunc: ""});  // 변경된 내역을 저장 하시겠습니까?
        	return;
        };

        /**
         * description 그룹 행추가 클릭
        */
        this.divCode_btnAddRowGroup_onclick = function(obj,e)
        {
        	this.gfnInsertRow(this.dsCodeHeader, "last");
        	this.dsCodeHeader.setColumn(this.dsCodeHeader.rowposition, "useYn", "Y");
        	this.dsSearch.clearData();
        	this.dsSearch.addRow();
        	this.fnBtnControlFalseInsert();
        };

        /**
         * description 그룹 행삭제 클릭
        */
        this.divCode_btnDeleteRowGroup_onclick = function(obj,e)
        {
        	this.gfnDeleteRow(this.dsCodeHeader);
        	if(this.dsCodeHeader.findRowExpr("rowStatus=='deleted'") > -1) {
        		this.fnBtnControlFalse();
        	}else{
        		this.fnBtnControlTrue();
        	}

        };

        /**
         * description 라인 행추가 클릭
        */
        this.divCode_btnAddRowLine_onclick = function(obj,e)
        {
        	if(this.dsCodeHeader.getColumn(this.dsCodeHeader.rowposition, "headerCode") != ""){
        		this.gfnInsertRow(this.dsCodeLine, "last");
        		this.dsCodeLine.setColumn(this.dsCodeLine.rowposition, "useYn", "Y");
        		this.dsCodeLine.setColumn(this.dsCodeLine.rowposition, "headerCode",  this.dsCodeHeader.getColumn(this.dsCodeHeader.rowposition, "headerCode"));
        		this.dsCodeLine.setColumn(this.dsCodeLine.rowposition, "moduleId",  this.dsCodeHeader.getColumn(this.dsCodeHeader.rowposition, "moduleId"));
        		this.dsCodeLine.setColumn(this.dsCodeLine.rowposition, "sysId",  this.dsCodeHeader.getColumn(this.dsCodeHeader.rowposition, "sysId"));
        	}else{
        		alert("코드그룹 저장 후 진행해 주세요");
        	}
        };

        /**
         * description 라인 행삭제 클릭
        */
        this.divCode_btnDeleteRowLine_onclick = function(obj,e)
        {
        	this.gfnDeleteRow(this.dsCodeLine);
        };

        /**
         * description 그리드해드 클릭
        */
        this.divCode_grdCodeHeader_onheadclick = function(obj,e)
        {
        	this.gfnSetGridCheckAll(obj, e, "rowCheck");
        };

        /**
         * description 엔터키 이벤트
        */
        this.divSearch_divSrch_edtCodeId_onkeyup = function(obj,e)
        {
        	if(e.keycode==13){
        		this.btnSearch_onclick();
        	}
        };

        /**
         * 시스템 ID 검색조건 변경
         */
        this.divSearch_systemIdCombo_onitemchanged = function(obj,e)
        {
        	this.btnSearch.click();
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
        };

        /**
         * description 버튼컨트롤(disable)
        */
        this.fnBtnControlFalse = function()
        {
        	this.divLine.form.btnAddRowLine.set_enable(false);
        	this.divLine.form.btnDeleteRowLine.set_enable(false);
        	this.divLine.form.grdCodeLine.set_enable(false);
        	this.divCode.form.btnAddRowGroup.set_enable(false);
        	this.divCode.form.btnDeleteRowGroup.set_enable(false);
        }

        /**
         * description 버튼컨트롤(enable)
        */
        this.fnBtnControlTrue = function()
        {
        	this.divLine.form.btnAddRowLine.set_enable(true);
        	this.divLine.form.btnDeleteRowLine.set_enable(true);
        	this.divLine.form.grdCodeLine.set_enable(true);
        	this.divCode.form.btnAddRowGroup.set_enable(true);
        	this.divCode.form.btnDeleteRowGroup.set_enable(true);
        }

        /**
         * description 버튼컨트롤(if disable)
        */
        this.fnBtnControlFalseInsert = function()
        {
        	this.divLine.form.btnAddRowLine.set_enable(false);
        	this.divLine.form.btnDeleteRowLine.set_enable(false);
        	this.divLine.form.grdCodeLine.set_enable(false);
        	this.divCode.form.btnAddRowGroup.set_enable(false);
        	this.divCode.form.btnDeleteRowGroup.set_enable(true);
        }

        /**
         * description Header 밸리데이션
        */
        this.fnValidationHeader = function ()
        {
            var args = [
        		["headerCode", "NULL|MAX_LEN:20", ""],
        		["moduleId", "NULL|MAX_LEN:20", ""],
        		["headerCodeNmKr", "MAX_LEN:300", ""],
        		["headerCodeNmEn", "MAX_LEN:300", ""],
        		["headerCodeDc", "MAX_LEN:3000", ""]
            ];

            return this.gfnCheckGrid(this.divCode.form.grdCodeHeader, args, "");
        };

        /**
         * description Line 밸리데이션
        */
        this.fnValidationLine = function ()
        {
            var args = [
                ["lineCode", "NULL|MAX_LEN:20", ""],
        		["lineCodeNmKr", "MAX_LEN:300", ""],
        		["lineCodeNmEn", "MAX_LEN:300", ""],
        		["lineCodeDc", "MAX_LEN:3000", ""]
            ];
            return this.gfnCheckGrid(this.divLine.form.grdCodeLine, args, "");
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnSave.addEventHandler("onclick",this.btnSave_onclick,this);
            this.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
            this.divSearch.form.staBg.addEventHandler("onclick",this.div_Search_Static00_onclick,this);
            this.divSearch.form.Static15_01_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.divSearch.form.edtCodeId.addEventHandler("onkeyup",this.divSearch_divSrch_edtCodeId_onkeyup,this);
            this.divSearch.form.sta002.addEventHandler("onclick",this.divSearch_sta_01_onclick,this);
            this.divSearch.form.edtCodeNm.addEventHandler("onkeyup",this.divSearch_Div00_edt_03_onkeyup,this);
            this.divSearch.form.sta003.addEventHandler("onclick",this.divSearch_sta_01_onclick,this);
            this.divSearch.form.edtModuleId.addEventHandler("onkeyup",this.divSearch_Div00_edt_03_onkeyup,this);
            this.divSearch.form.cboSysId.addEventHandler("onitemchanged",this.divSearch_systemIdCombo_onitemchanged,this);
            this.divSearch.form.staSysId.addEventHandler("onclick",this.row1_Div00_Static01_onclick,this);
            this.divCode.form.grdCodeHeader.addEventHandler("onheadclick",this.divCode_grdCodeHeader_onheadclick,this);
            this.divCode.form.btnDeleteRowGroup.addEventHandler("onclick",this.divCode_btnDeleteRowGroup_onclick,this);
            this.divCode.form.btnAddRowGroup.addEventHandler("onclick",this.divCode_btnAddRowGroup_onclick,this);
            this.divCode.form.staTitle.addEventHandler("onclick",this.Static09_onclick,this);
            this.divCode.form.Static04_00_00_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.divLine.form.staTitle00.addEventHandler("onclick",this.Static09_onclick,this);
            this.divLine.form.grdCodeLine.addEventHandler("onheadclick",this.divCode_grdCodeHeader_onheadclick,this);
            this.divLine.form.btnDeleteRowLine.addEventHandler("onclick",this.divCode_btnDeleteRowLine_onclick,this);
            this.divLine.form.btnAddRowLine.addEventHandler("onclick",this.divCode_btnAddRowLine_onclick,this);
            this.dsCodeHeader.addEventHandler("onrowposchanged",this.dsCodeHeader_onrowposchanged,this);
        };
        this.loadIncludeScript("CODE_1010M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
