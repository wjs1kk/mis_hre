(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PGM_1010M");
            this.set_titletext("프로그램 관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsProgram", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"progId\" type=\"STRING\" size=\"50\"/><Column id=\"sysNm\" type=\"STRING\" size=\"200\"/><Column id=\"sysId\" type=\"STRING\" size=\"20\"/><Column id=\"progNm\" type=\"STRING\" size=\"300\"/><Column id=\"progTy\" type=\"STRING\" size=\"20\"/><Column id=\"substituteUrl\" type=\"STRING\" size=\"1000\"/><Column id=\"substituteUseYn\" type=\"STRING\" size=\"1\"/><Column id=\"progDc\" type=\"STRING\" size=\"3000\"/><Column id=\"rgstId\" type=\"STRING\" size=\"20\"/><Column id=\"rgstIp\" type=\"STRING\" size=\"40\"/><Column id=\"rgstDt\" type=\"STRING\" size=\"8\"/><Column id=\"rgstUserNmKr\" type=\"STRING\" size=\"20\"/><Column id=\"updtDt\" type=\"STRING\" size=\"40\"/><Column id=\"updtId\" type=\"STRING\" size=\"8\"/><Column id=\"cnt\" type=\"INT\" size=\"256\"/><Column id=\"atchFileId\" type=\"STRING\" size=\"30\"/><Column id=\"progFileNm\" type=\"STRING\" size=\"1000\"/><Column id=\"updtUserNm\" type=\"STRING\" size=\"200\"/><Column id=\"permissionDc\" type=\"STRING\" size=\"3000\"/><Column id=\"progUrl\" type=\"STRING\" size=\"1000\"/><Column id=\"rgstNm\" type=\"STRING\" size=\"300\"/><Column id=\"rowCheck\" type=\"STRING\" size=\"1\"/><Column id=\"rowStatus\" type=\"STRING\" size=\"20\"/><Column id=\"permissionUseYn\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFunction", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"funcId\" type=\"STRING\" size=\"20\"/><Column id=\"progId\" type=\"STRING\" size=\"50\"/><Column id=\"sysId\" type=\"STRING\" size=\"20\"/><Column id=\"progNm\" type=\"STRING\" size=\"300\"/><Column id=\"funcName\" type=\"STRING\" size=\"50\"/><Column id=\"funcDesc\" type=\"STRING\" size=\"300\"/><Column id=\"funcPattern\" type=\"STRING\" size=\"2000\"/><Column id=\"funcPatternType\" type=\"STRING\" size=\"20\"/><Column id=\"funcCode\" type=\"STRING\" size=\"50\"/><Column id=\"funcType\" type=\"STRING\" size=\"20\"/><Column id=\"sortOrdr\" type=\"INT\" size=\"256\"/><Column id=\"displayImgUrl\" type=\"STRING\" size=\"200\"/><Column id=\"rgstId\" type=\"STRING\" size=\"20\"/><Column id=\"rgstIp\" type=\"STRING\" size=\"40\"/><Column id=\"rgstDt\" type=\"STRING\" size=\"8\"/><Column id=\"updtId\" type=\"STRING\" size=\"20\"/><Column id=\"updtIp\" type=\"STRING\" size=\"40\"/><Column id=\"updtDt\" type=\"STRING\" size=\"8\"/><Column id=\"rowCheck\" type=\"STRING\" size=\"1\"/><Column id=\"rowStatus\" type=\"STRING\" size=\"20\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"progId\" type=\"STRING\" size=\"256\"/><Column id=\"progNm\" type=\"STRING\" size=\"256\"/><Column id=\"selectedProgId\" type=\"STRING\" size=\"256\"/><Column id=\"progTy\" type=\"STRING\" size=\"256\"/><Column id=\"progUrl\" type=\"STRING\" size=\"256\"/><Column id=\"sysId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsProgTyCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"text\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFuncTyCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"text\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsProgFuncTyCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"text\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsProgTySearchCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"text\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUseYnCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"text\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSysIdCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"value\" type=\"STRING\" size=\"256\"/><Column id=\"text\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFrontendTyCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"value\" type=\"STRING\" size=\"256\"/><Column id=\"text\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("row0","218","63","100%","58",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Header");
            obj.set_flexgrow("0");
            obj.set_flexshrink("0");
            obj.set_background("transparent");
            this.addChild(obj.name, obj);

            obj = new Static("sta_01","0","0","120","58",null,null,null,null,null,null,this.row0.form);
            obj.set_taborder("0");
            obj.set_text("프로그램 관리");
            obj.set_flexgrow("1");
            obj.set_cssclass("sta_WF_compTitle01");
            this.row0.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"20","65","28","0",null,null,null,null,null,this.row0.form);
            obj.set_taborder("1");
            obj.set_text("조회");
            obj.set_flexgrow("0");
            obj.set_flexshrink("0");
            this.row0.addChild(obj.name, obj);

            obj = new Div("row1","50","58","100%","90",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_flexgrow("0");
            obj.set_flexshrink("0");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","0","0",null,"90","0",null,null,null,null,null,this.row1.form);
            obj.set_taborder("1");
            obj.set_cssclass("div_WF_Transparent");
            obj.set_text("");
            this.row1.addChild(obj.name, obj);

            obj = new Static("Static00_01","0","0",null,"90","0",null,null,null,null,null,this.row1.form.divSearch.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_bg");
            obj.set_text("");
            this.row1.form.divSearch.addChild(obj.name, obj);

            obj = new Static("staProgId","25%","15","100","26",null,null,null,null,null,null,this.row1.form.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("프로그램 ID");
            obj.set_cssclass("sta_WF_condition01");
            this.row1.form.divSearch.addChild(obj.name, obj);

            obj = new Static("staProgNm","50%","15","100","26",null,null,null,null,null,null,this.row1.form.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("프로그램명");
            obj.set_cssclass("sta_WF_condition01");
            this.row1.form.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtProgId","staProgId:10","15","200","26",null,null,null,null,null,null,this.row1.form.divSearch.form);
            obj.set_taborder("1");
            this.row1.form.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtProgNm","staProgNm:10","15","200","26",null,null,null,null,null,null,this.row1.form.divSearch.form);
            obj.set_taborder("3");
            this.row1.form.divSearch.addChild(obj.name, obj);

            obj = new Static("staProgUrl","20","49","100","26",null,null,null,null,null,null,this.row1.form.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("프로그램 URL");
            obj.set_cssclass("sta_WF_condition01");
            this.row1.form.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtProgUrl","staProgUrl:10","49","200","26",null,null,null,null,null,null,this.row1.form.divSearch.form);
            obj.set_taborder("5");
            this.row1.form.divSearch.addChild(obj.name, obj);

            obj = new Static("staProgTy","25%","49","100","26",null,null,null,null,null,null,this.row1.form.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("프로그램 유형");
            obj.set_cssclass("sta_WF_condition01");
            this.row1.form.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboProgTySearch","staProgTy:10","49","150","26",null,null,null,null,null,null,this.row1.form.divSearch.form);
            obj.set_taborder("7");
            obj.set_innerdataset("dsProgTySearchCombo");
            obj.set_codecolumn("value");
            obj.set_datacolumn("text");
            this.row1.form.divSearch.addChild(obj.name, obj);

            obj = new Static("staSysId","20","15","100","26",null,null,null,null,null,null,this.row1.form.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("시스템");
            obj.set_cssclass("sta_WF_condition01");
            this.row1.form.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSysId","staSysId:10","15","200","26",null,null,null,null,null,null,this.row1.form.divSearch.form);
            obj.set_taborder("8");
            obj.set_innerdataset("dsSysIdCombo");
            obj.set_codecolumn("value");
            obj.set_datacolumn("text");
            obj.set_text("Combo00");
            this.row1.form.divSearch.addChild(obj.name, obj);

            obj = new Div("divSpace00","33","167","200","15",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Div("row2","219","217","100%",null,null,"306",null,null,"240",null,this);
            obj.set_taborder("2");
            obj.set_flexgrow("1");
            obj.set_text("");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Static("sta02","0","0","120","45",null,null,null,null,null,null,this.row2.form);
            obj.set_taborder("2");
            obj.set_text("프로그램 목록");
            obj.set_flexgrow("1");
            obj.set_cssclass("sta_WF_subTitle01");
            this.row2.addChild(obj.name, obj);

            obj = new Div("row0",null,"14","240","26","0",null,null,null,null,null,this.row2.form);
            obj.set_taborder("0");
            obj.set_text("Header");
            obj.set_flexgrow("0");
            obj.set_flexshrink("0");
            this.row2.addChild(obj.name, obj);

            obj = new Button("btnAddRow1","460","47","61","100%",null,null,null,null,null,null,this.row2.form.row0.form);
            obj.set_taborder("0");
            obj.set_text("추가");
            obj.set_flexgrow("0");
            obj.set_flexshrink("0");
            obj.set_cssclass("btn_WF_Row_Add");
            this.row2.form.row0.addChild(obj.name, obj);

            obj = new Button("btnDelRow1","460","47","61","100%",null,null,null,null,null,null,this.row2.form.row0.form);
            obj.set_taborder("1");
            obj.set_text("삭제");
            obj.set_flexgrow("0");
            obj.set_flexshrink("0");
            obj.set_cssclass("btn_WF_Row_Delete");
            this.row2.form.row0.addChild(obj.name, obj);

            obj = new Button("btnSave","403","45","61","26",null,null,null,null,null,null,this.row2.form.row0.form);
            obj.set_taborder("3");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_grdSave");
            this.row2.form.row0.addChild(obj.name, obj);

            obj = new Grid("grdProgram","0","45",null,null,"0","0",null,null,null,null,this.row2.form);
            obj.set_taborder("1");
            obj.set_binddataset("dsProgram");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\" band=\"left\"/><Column size=\"48\" band=\"left\"/><Column size=\"48\" band=\"left\"/><Column size=\"128\"/><Column size=\"112\"/><Column size=\"160\"/><Column size=\"96\"/><Column size=\"192\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"72\"/><Column size=\"144\"/><Column size=\"112\"/><Column size=\"112\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"34\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"상태\"/><Cell col=\"3\" text=\"시스템\"/><Cell col=\"4\" text=\"프로그램ID\"/><Cell col=\"5\" text=\"프로그램명\"/><Cell col=\"6\" text=\"프로그램유형\"/><Cell col=\"7\" text=\"URL\"/><Cell col=\"8\" text=\"프로그램 설명\"/><Cell col=\"9\" text=\"프로그램 파일명\"/><Cell col=\"10\" text=\"연관 테이블\"/><Cell col=\"11\" text=\"대체URL\"/><Cell col=\"12\" text=\"대체URL 사용여부\"/><Cell col=\"13\" text=\"권한레벨 사용여부\"/><Cell col=\"14\" text=\"권한레벨 사용설명\"/><Cell col=\"15\" text=\"등록자\"/><Cell col=\"16\" text=\"등록일\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\" text=\"expr:currow+1\" textAlign=\"center\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" textAlign=\"center\" text=\"bind:rowCheck\"/><Cell col=\"2\" text=\"bind:rowStatus\"/><Cell col=\"3\" edittype=\"none\" text=\"bind:sysId\" displaytype=\"combotext\" combodataset=\"dsSysIdCombo\" combocodecol=\"value\" combodatacol=\"text\"/><Cell col=\"4\" textAlign=\"left\" expr=\"rowStatus == &apos;inserted&apos; ? &apos;자동 입력&apos; : progId\" color=\"expr:rowStatus == &apos;inserted&apos; ? &apos;#999999&apos; : &apos;#000000&apos;\" text=\"bind:progId\"/><Cell col=\"5\" text=\"bind:progNm\" edittype=\"text\" textAlign=\"left\" displaytype=\"editcontrol\"/><Cell col=\"6\" text=\"bind:progTy\" edittype=\"combo\" displaytype=\"combocontrol\" combodataset=\"dsProgTyCombo\" combocodecol=\"value\" combodatacol=\"text\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:progUrl\" edittype=\"text\" textAlign=\"left\" editmaxlength=\"1000\" displaytype=\"editcontrol\"/><Cell col=\"8\" text=\"bind:progDc\" edittype=\"text\" textAlign=\"left\" displaytype=\"editcontrol\"/><Cell col=\"9\" text=\"bind:progFileNm\" edittype=\"text\" textAlign=\"left\" displaytype=\"editcontrol\"/><Cell col=\"10\" edittype=\"button\" displaytype=\"buttoncontrol\" text=\"수정\"/><Cell col=\"11\" text=\"bind:substituteUrl\" edittype=\"text\" textAlign=\"left\" displaytype=\"editcontrol\"/><Cell col=\"12\" text=\"bind:substituteUseYn\" edittype=\"combo\" combodataset=\"dsUseYnCombo\" combocodecol=\"value\" combodatacol=\"text\" comboautoselect=\"true\" checkboxfalsevalue=\"N\" checkboxtruevalue=\"Y\" displaytype=\"combocontrol\" textAlign=\"left\"/><Cell col=\"13\" text=\"bind:permissionUseYn\" edittype=\"combo\" displaytype=\"combocontrol\" checkboxfalsevalue=\"N\" checkboxtruevalue=\"Y\" combodataset=\"dsUseYnCombo\" combodatacol=\"text\" combocodecol=\"value\" textAlign=\"left\"/><Cell col=\"14\" text=\"bind:permissionDc\" edittype=\"text\" textAlign=\"left\" displaytype=\"editcontrol\"/><Cell col=\"15\" text=\"bind:rgstNm\" edittype=\"none\" textAlign=\"center\"/><Cell col=\"16\" text=\"bind:rgstDt\" edittype=\"none\" textAlign=\"center\"/></Band></Format></Formats>");
            this.row2.addChild(obj.name, obj);

            obj = new Div("divSpace00_00","33","167","200","10",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Div("row3","219","217","100%",null,null,"30",null,null,"240",null,this);
            obj.set_taborder("3");
            obj.set_flexgrow("1");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Div("row0",null,"14","240","26","0",null,null,null,null,null,this.row3.form);
            obj.set_taborder("0");
            obj.set_text("Header");
            obj.set_flexgrow("0");
            obj.set_flexshrink("0");
            this.row3.addChild(obj.name, obj);

            obj = new Button("btnAddRow1","460","47","61","100%",null,null,null,null,null,null,this.row3.form.row0.form);
            obj.set_taborder("0");
            obj.set_text("추가");
            obj.set_flexgrow("0");
            obj.set_flexshrink("0");
            obj.set_cssclass("btn_WF_Row_Add");
            this.row3.form.row0.addChild(obj.name, obj);

            obj = new Button("btnDelRow1","460","47","61","100%",null,null,null,null,null,null,this.row3.form.row0.form);
            obj.set_taborder("1");
            obj.set_text("삭제");
            obj.set_flexgrow("0");
            obj.set_flexshrink("0");
            obj.set_cssclass("btn_WF_Row_Delete");
            this.row3.form.row0.addChild(obj.name, obj);

            obj = new Button("btnSave","403","45","61","26",null,null,null,null,null,null,this.row3.form.row0.form);
            obj.set_taborder("2");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_grdSave");
            this.row3.form.row0.addChild(obj.name, obj);

            obj = new Grid("grdFunction","0","45",null,null,"0","0",null,null,null,null,this.row3.form);
            obj.set_taborder("1");
            obj.set_binddataset("dsFunction");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\" band=\"left\"/><Column size=\"48\" band=\"left\"/><Column size=\"48\" band=\"left\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"160\"/><Column size=\"120\"/><Column size=\"360\"/><Column size=\"80\"/><Column size=\"560\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"34\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"상태\"/><Cell col=\"3\" text=\"기능 유형\"/><Cell col=\"4\" text=\"기능 코드\"/><Cell col=\"5\" text=\"기능명\"/><Cell col=\"6\" text=\"접근 유형\"/><Cell col=\"7\" text=\"접근 패턴\"/><Cell col=\"8\" text=\"정렬 순서\"/><Cell col=\"9\" text=\"기능 설명\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" edittype=\"checkbox\" text=\"bind:rowCheck\" displaytype=\"checkboxcontrol\"/><Cell col=\"2\" text=\"bind:rowStatus\"/><Cell col=\"3\" text=\"bind:funcType\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"dsFuncTyCombo\" combocodecol=\"value\" combodatacol=\"text\"/><Cell col=\"4\" text=\"bind:funcCode\" edittype=\"text\" textAlign=\"left\" displaytype=\"editcontrol\"/><Cell col=\"5\" text=\"bind:funcName\" edittype=\"text\" textAlign=\"left\" displaytype=\"editcontrol\"/><Cell col=\"6\" text=\"bind:funcPatternType\" edittype=\"combo\" displaytype=\"combocontrol\" combodataset=\"dsProgFuncTyCombo\" combocodecol=\"value\" combodatacol=\"text\"/><Cell col=\"7\" text=\"bind:funcPattern\" edittype=\"text\" textAlign=\"left\" displaytype=\"editcontrol\"/><Cell col=\"8\" text=\"bind:sortOrdr\" edittype=\"text\" editinputtype=\"number\" textAlign=\"right\" displaytype=\"editcontrol\"/><Cell col=\"9\" text=\"bind:funcDesc\" edittype=\"normal\" editmaxlength=\"300\" textAlign=\"left\" displaytype=\"editcontrol\"/></Band></Format></Formats>");
            this.row3.addChild(obj.name, obj);

            obj = new Static("sta_03","0","0",null,"45","1668",null,null,null,null,null,this.row3.form);
            obj.set_taborder("2");
            obj.set_text("프로그램 기능 목록");
            obj.set_flexgrow("1");
            obj.set_cssclass("sta_WF_subTitle01");
            this.row3.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.row0.form
            obj = new Layout("default","",0,0,this.row0.form,function(p){});
            this.row0.form.addLayout(obj.name, obj);

            //-- Default Layout : this.row1.form.divSearch.form
            obj = new Layout("default","",0,0,this.row1.form.divSearch.form,function(p){});
            this.row1.form.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.row1.form
            obj = new Layout("default","",0,0,this.row1.form,function(p){});
            this.row1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divSpace00
            obj = new Layout("default","",0,0,this.divSpace00.form,function(p){});
            this.divSpace00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.row2.form.row0.form
            obj = new Layout("default","",0,0,this.row2.form.row0.form,function(p){});
            obj.set_type("horizontal");
            obj.set_horizontalgap("5");
            obj.set_flexmainaxisalign("end");
            this.row2.form.row0.form.addLayout(obj.name, obj);

            //-- Default Layout : this.row2.form
            obj = new Layout("default","",0,0,this.row2.form,function(p){});
            this.row2.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divSpace00_00
            obj = new Layout("default","",0,0,this.divSpace00_00.form,function(p){});
            this.divSpace00_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.row3.form.row0.form
            obj = new Layout("default","",0,0,this.row3.form.row0.form,function(p){});
            obj.set_type("horizontal");
            obj.set_horizontalgap("5");
            obj.set_flexmainaxisalign("end");
            this.row3.form.row0.form.addLayout(obj.name, obj);

            //-- Default Layout : this.row3.form
            obj = new Layout("default","",0,0,this.row3.form,function(p){});
            this.row3.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1920,800,this,function(p){});
            obj.set_type("vertical");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 50px 30px");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","row1.form.divSearch.form.edtProgId","value","dsSearch","progId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","row1.form.divSearch.form.edtProgNm","value","dsSearch","progNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","row1.form.divSearch.form.cboProgTySearch","value","dsSearch","progTy");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","row1.form.divSearch.form.edtProgUrl","value","dsSearch","progUrl");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","row1.form.divSearch.form.cboSysId","value","dsSearch","sysId");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("PGM_1010M.xfdl","lib::common.xjs");
        this.registerScript("PGM_1010M.xfdl", function() {
        /**
        *  프로그램 관리
        *  MenuPath      시스템 관리 - 기준정보 관리 - 프로그램 관리
        *  FileName      PRG_1010M.xfdl
        *  Creator       parksw
        *  CreateDate    2023.02.13
        *  Desction      프로그램 관리
        ************** 소스 수정 이력 ***********************************************
        *  date          Modifier    Description
        *******************************************************************************
        *  2023.02.13    parksw      최초 생성
        *  2023.04.18    parksw      폼 ID 변경
        *******************************************************************************/

        this.executeIncludeScript("lib::common.xjs"); /*include "lib::common.xjs"*/;

        /***********************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose)
         ***********************************************************************************************/
        this.programManage_oninit = function(obj,e)
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
            this.gfnLoadCombo("loadCombo", "dsProgTySearchCombo=PMS:SM:PROG_TY:A dsProgTyCombo=PMS:SM:PROG_TY:C dsFuncTyCombo=PMS:SM:FUNC_TYPE:C dsProgFuncTyCombo=PMS:SM:PROG_FUNC_TYPE:C dsUseYnCombo=PMS:SM:USE_YN", "fnComboCallback");
        	this.gfnTransaction("loadSysIdCombo","sm/getSystemIdCombo.do","","dsSysIdCombo","","fnComboCallback");
        };

        this.fnSearch = function ()
        {
            var svcId = "getProgramList";
            var svcUrl = "sm/getProgramManageList.do";
            var inDs = "dsSearch";
            var outDs = "dsProgram";
            var strArgs = "";
            var callbackName = "fnCallback";
            this.gfnTransaction(svcId, svcUrl, inDs, outDs, strArgs, callbackName);
        };

        this.fnSearchFuncs = function (sysId, progId)
        {
            var svcId = "getProgramFuncList";
            var svcUrl = "sm/getProgramFunctionManageList.do";
            var inDs = "dsSearch";
            var outDs = "dsFunction";
            var strArgs = "progId=" + progId + " sysId=" + sysId;
            var callbackName = "fnCallback";
            this.gfnTransaction(svcId, svcUrl, inDs, outDs, strArgs, callbackName);
        };

        this.fnSavePrograms = function ()
        {
            var svcId = "saveProgramList";
            var svcUrl = "sm/saveProgramList.do"
            var inDs = "dsProgram";
            var outDs = "";
            var strArgs = "";
            var callbackName = "fnCallback";

            this.gfnTransaction(svcId, svcUrl, inDs, outDs, strArgs, callbackName);
        };

        this.fnSaveFunctions = function ()
        {
            var svcId = "saveFunctionList";
            var svcUrl = "sm/saveProgramFunctionList.do"
            var inDs = "dsFunction";
            var outDs = "";
            var strArgs = "";
            var callbackName = "fnCallback";

            this.gfnTransaction(svcId, svcUrl, inDs, outDs, strArgs, callbackName);
        };

        /************************************************************************************************
         * CALLBACK 콜백 처리부분(Transaction, Popup)
         ************************************************************************************************/

        this.fnComboCallback = function (svcId, errorCode, errorMsg)
        {
            this.comboCnt--;
            if (this.comboCnt == 0) {
                var sysId = nexacro.getApplication().gdsUserInfo.getColumn(0, "sysId");
                this.dsSearch.setColumn(0, "sysId", sysId);
                this.fnSearch();
            }
        };

        this.fnCallback = function (svcId, errorCode, errorMsg)
        {
            switch (svcId) {
                case "getProgramList":
                    if (this.dsProgram.rowcount == 0) {
                        this.dsFunction.clearData();
                    }
                    break;
                case "saveProgramList":
                    if (this.callbackMsg == "success") {
                        this.gfnAlert("CM_MSG_SAVE_SUCCESS");  // 저장 되었습니다.
                        this.fnSearch();
                    }
                    break;
                case "saveFunctionList":
                    if (this.callbackMsg == "success") {
                        this.gfnAlert("CM_MSG_SAVE_SUCCESS");  // 저장 되었습니다.
                        var sysId = this.dsProgram.getColumn(this.dsProgram.rowposition, "sysId");
                        var progId = this.dsProgram.getColumn(this.dsProgram.rowposition, "progId");
                        this.fnSearchFuncs(sysId, progId);
                    }
                    break;
            }
        };

        this.fnPopupCallback = function (popupId, args)
        {
        };

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/

        this.row0_btn_search_onclick = function(obj,e)
        {
            this.fnSearch();
        };

        this.dsProgram_onrowposchanged = function(obj,e)
        {
            var progId = this.dsProgram.getColumn(e.newrow, "progId");
            var sysId = this.dsProgram.getColumn(e.newrow, "sysId");
            this.fnSearchFuncs(sysId, progId);
        };

        this.row2_row0_btnSave_onclick = function(obj,e)
        {
            this.fnBeforeSaveProgram();
        };

        this.row2_row0_btnAddRow1_onclick = function(obj,e)
        {
        	var sysId = this.dsSearch.getColumn(0, "sysId");
            if (Eco.isEmpty(sysId)) {
                return;
            }

            this.gfnInsertRow(this.dsProgram, "last");

        	var rowposition = this.dsProgram.rowposition;

            this.dsProgram.setColumn(rowposition, "sysId", sysId);
            this.dsProgram.setColumn(rowposition, "substituteUseYn", "N");
            this.dsProgram.setColumn(rowposition, "permissionUseYn", "N");
        };

        this.row2_row0_btnDelRow1_onclick = function(obj,e)
        {
            this.gfnDeleteRow(this.dsProgram);
        };

        this.row3_row0_btnSave_onclick = function(obj,e)
        {
        	this.fnBeforeSaveFunction();
        };

        this.row3_row0_btnAddRow1_onclick = function(obj,e)
        {
            var rowpos = this.dsProgram.rowposition;
            if (rowpos < 0) {
                this.gfnAlert("CM_PROG_SELECT_PROGRAM");
                return;
            }

            var rowstat = this.dsProgram.getColumn(rowpos, "rowStatus");
            if (rowstat == "inserted" || rowstat == "updated" || rowstat == "deleted") {
                this.gfnAlert("CM_MSG_CHANGE_DATA");
                return;
            }

            this.gfnInsertRow(this.dsFunction, "last");
            this.dsFunction.setColumn(this.dsFunction.rowposition, "progId", this.dsProgram.getColumn(this.dsProgram.rowposition, "progId"));
            this.dsFunction.setColumn(this.dsFunction.rowposition, "sysId", this.dsProgram.getColumn(this.dsProgram.rowposition, "sysId"));
        };

        this.row3_row0_btnDelRow1_onclick = function(obj,e)
        {
            var rowpos = this.dsProgram.rowposition;
            if (rowpos < 0) {
                this.gfnAlert("CM_PROG_SELECT_PROGRAM");
                return;
            }

            var rowstat = this.dsProgram.getColumn(rowpos, "rowStatus");
            if (rowstat == "inserted" || rowstat == "updated" || rowstat == "deleted") {
                this.gfnAlert("CM_MSG_CHANGE_DATA");
                return;
            }
            this.gfnDeleteRow(this.dsFunction);
        };

        this.dsFunction_oncolumnchanged = function(obj,e)
        {
        	if (e.columnid == "funcType") {
                var i = this.dsFuncTyCombo.findRow("value", e.newvalue);
                this.dsFunction.setColumn(e.row, "funcCode", e.newvalue);
                this.dsFunction.setColumn(e.row, "funcName", this.dsFuncTyCombo.getColumn(i, "text"));
            }
        };

        this.row2_grdProgram_onheadclick = function(obj,e)
        {
        	this.gfnSetGridCheckAll(obj, e, "rowCheck");
        };

        this.row3_grdFunction_onheadclick = function(obj,e)
        {
        	this.gfnSetGridCheckAll(obj, e, "rowCheck");
        };

        this.row1_Div00_edt_prog_id_onkeyup = function(obj,e)
        {
        	if (e.keycode == 13) {
                this.fnSearch();
            }
        };

        this.divSearch_systemIdCombo_onitemchanged = function(obj,e)
        {
        	this.fnSearch();
        };

        this.row2_grdProgram_oncellclick = function(obj,e)
        {
            if (e.cell == 10) {
                // 연관 테이블 관리 팝업
                var sysId = obj.getBindDataset().getColumn(e.row, "sysId");
                var progId = obj.getBindDataset().getColumn(e.row, "progId");
                this.gfnOpenPopup("progTableManage", "sys::pgm/PGM_1010P.xfdl", { sysId, progId }, "fnPopupCallback");
            }
        };

        /************************************************************************************************
        * 사용자 FUNCTION 영역
        ************************************************************************************************/

        this.fnBeforeSaveProgram = function ()
        {
            if (!this.fnValidateProgram()) {
                return;
            }

            this.gfnAlert("CM_CFM_BEFORE_SAVE", "", "", {trueFunc: "fnSavePrograms", falseFunc: ""});  // 변경된 내역을 저장 하시겠습니까?
        };

        this.fnBeforeSaveFunction = function ()
        {
            if (!this.fnValidateFunction()) {
                return;
            }

            this.gfnAlert("CM_CFM_BEFORE_SAVE", "", "", {trueFunc: "fnSaveFunctions", falseFunc: ""});  // 변경된 내역을 저장 하시겠습니까?
        };

        this.fnValidateProgram = function ()
        {
            if (this.dsProgram.rowcount == 0 || !this.gfnDsIsUpdated(this.dsProgram)) {
                this.gfnAlert("CM_MSG_SAVE_NODATA");  // 저장할 데이터가 없습니다.
                return false;
            }

            var args = [
                ["sysId", "NULL|MAX_LEN:20", ""],
                ["progNm", "NULL|MAX_LEN:100", ""],
                ["progTy", "NULL", ""],
                ["progUrl", "MAX_LEN:1000",""]
            ];

            return this.gfnCheckGrid(this.row2.form.grdProgram, args, "");
        };

        this.fnValidateFunction = function ()
        {
            if (this.dsFunction.rowcount == 0 || !this.gfnDsIsUpdated(this.dsFunction)) {
                this.gfnAlert("CM_MSG_SAVE_NODATA");  // 저장할 데이터가 없습니다.
                return false;
            }

            var args = [
                ["funcType", "NULL", ""],
                ["funcCode", "NULL", ""],
                ["funcName", "NULL", ""],
                ["funcPatternType", "NULL", ""],
                ["funcDesc", "MAX_LEN:300", ""]
            ];

            return this.gfnCheckGrid(this.row3.form.grdFunction, args, "");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.programManage_oninit,this);
            this.row0.form.btnSearch.addEventHandler("onclick",this.row0_btn_search_onclick,this);
            this.row1.form.divSearch.form.Static00_01.addEventHandler("onclick",this.div_Search_Static00_onclick,this);
            this.row1.form.divSearch.form.edtProgId.addEventHandler("onkeyup",this.row1_Div00_edt_prog_id_onkeyup,this);
            this.row1.form.divSearch.form.edtProgNm.addEventHandler("onkeyup",this.row1_Div00_edt_prog_id_onkeyup,this);
            this.row1.form.divSearch.form.edtProgUrl.addEventHandler("onkeyup",this.row1_Div00_edt_prog_id_onkeyup,this);
            this.row1.form.divSearch.form.cboProgTySearch.addEventHandler("onkeyup",this.row1_Div00_edt_prog_id_onkeyup,this);
            this.row1.form.divSearch.form.staSysId.addEventHandler("onclick",this.row1_Div00_Static01_onclick,this);
            this.row1.form.divSearch.form.cboSysId.addEventHandler("onitemchanged",this.divSearch_systemIdCombo_onitemchanged,this);
            this.row2.form.row0.form.btnAddRow1.addEventHandler("onclick",this.row2_row0_btnAddRow1_onclick,this);
            this.row2.form.row0.form.btnDelRow1.addEventHandler("onclick",this.row2_row0_btnDelRow1_onclick,this);
            this.row2.form.row0.form.btnSave.addEventHandler("onclick",this.row2_row0_btnSave_onclick,this);
            this.row2.form.grdProgram.addEventHandler("onheadclick",this.row2_grdProgram_onheadclick,this);
            this.row2.form.grdProgram.addEventHandler("oncellclick",this.row2_grdProgram_oncellclick,this);
            this.row3.form.row0.form.btnAddRow1.addEventHandler("onclick",this.row3_row0_btnAddRow1_onclick,this);
            this.row3.form.row0.form.btnDelRow1.addEventHandler("onclick",this.row3_row0_btnDelRow1_onclick,this);
            this.row3.form.row0.form.btnSave.addEventHandler("onclick",this.row3_row0_btnSave_onclick,this);
            this.row3.form.grdFunction.addEventHandler("onheadclick",this.row3_grdFunction_onheadclick,this);
            this.dsProgram.addEventHandler("onrowposchanged",this.dsProgram_onrowposchanged,this);
            this.dsFunction.addEventHandler("oncolumnchanged",this.dsFunction_oncolumnchanged,this);
        };
        this.loadIncludeScript("PGM_1010M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
