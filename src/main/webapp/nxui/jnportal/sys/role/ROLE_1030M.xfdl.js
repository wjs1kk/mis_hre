(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ROLE_1030M");
            this.set_titletext("권한별 사용자관리");
            this.set_cssclass("frm_WF_comp");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,1000);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj.set_updatecontrol("true");
            obj._setContents("<ColumnInfo><Column id=\"roleCode\" type=\"STRING\" size=\"256\"/><Column id=\"roleNm\" type=\"STRING\" size=\"256\"/><Column id=\"moduleId\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"searchRoleCode\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRole", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"rowCheck\" type=\"STRING\" size=\"256\"/><Column id=\"rowStatus\" type=\"STRING\" size=\"256\"/><Column id=\"roleCode\" type=\"STRING\" size=\"256\"/><Column id=\"sysId\" type=\"STRING\" size=\"256\"/><Column id=\"moduleId\" type=\"STRING\" size=\"256\"/><Column id=\"roleNm\" type=\"STRING\" size=\"256\"/><Column id=\"roleDc\" type=\"STRING\" size=\"256\"/><Column id=\"rolePermit\" type=\"STRING\" size=\"256\"/><Column id=\"workGrpId\" type=\"STRING\" size=\"256\"/><Column id=\"useYmd\" type=\"DATE\" size=\"256\"/><Column id=\"endYmd\" type=\"DATE\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"rgstId\" type=\"STRING\" size=\"256\"/><Column id=\"rgstDt\" type=\"STRING\" size=\"256\"/><Column id=\"rgstIp\" type=\"STRING\" size=\"256\"/><Column id=\"rgstNm\" type=\"STRING\" size=\"256\"/><Column id=\"updtId\" type=\"STRING\" size=\"256\"/><Column id=\"updtIp\" type=\"STRING\" size=\"256\"/><Column id=\"updtDt\" type=\"STRING\" size=\"256\"/><Column id=\"updtNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRoleUser", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"rowCheck\" type=\"STRING\" size=\"256\"/><Column id=\"rowStatus\" type=\"STRING\" size=\"256\"/><Column id=\"rgstId\" type=\"STRING\" size=\"256\"/><Column id=\"rgstDt\" type=\"STRING\" size=\"256\"/><Column id=\"rgstIp\" type=\"STRING\" size=\"256\"/><Column id=\"rgstNm\" type=\"STRING\" size=\"256\"/><Column id=\"updtId\" type=\"STRING\" size=\"256\"/><Column id=\"updtIp\" type=\"STRING\" size=\"256\"/><Column id=\"updtDt\" type=\"STRING\" size=\"256\"/><Column id=\"updtNm\" type=\"STRING\" size=\"256\"/><Column id=\"userId\" type=\"STRING\" size=\"20\"/><Column id=\"memberId\" type=\"STRING\" size=\"20\"/><Column id=\"userNm\" type=\"STRING\" size=\"300\"/><Column id=\"deptCode\" type=\"STRING\" size=\"20\"/><Column id=\"deptNm\" type=\"STRING\" size=\"300\"/><Column id=\"jobPosition\" type=\"STRING\" size=\"300\"/><Column id=\"updtReason\" type=\"STRING\" size=\"256\"/><Column id=\"roleCode\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"useYmd\" type=\"STRING\" size=\"256\"/><Column id=\"endYmd\" type=\"STRING\" size=\"256\"/><Column id=\"roleNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsModuleCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"value\" type=\"STRING\" size=\"256\"/><Column id=\"text\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUseYn", this);
            obj._setContents("<ColumnInfo><Column id=\"value\" type=\"STRING\" size=\"256\"/><Column id=\"text\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRolePermit", this);
            obj._setContents("<ColumnInfo><Column id=\"value\" type=\"STRING\" size=\"256\"/><Column id=\"text\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUseYnSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"value\" type=\"STRING\" size=\"256\"/><Column id=\"text\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSysIdCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"text\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btnSave",null,"20","65","28","50",null,null,null,null,null,this);
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Save");
            obj.set_taborder("4");
            obj.set_enable("true");
            obj.set_escapebutton("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"20","65","28","btnSave:3",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle","50","0","500","58",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("권한별 사용자관리");
            obj.set_cssclass("sta_WF_compTitle01");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","50","58",null,"70","50",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staBg","0","0",null,"56","0",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_bg");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static15_01_00_00","0","55","50",null,null,"40",null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta001","20","15","100","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("권한코드");
            obj.set_cssclass("sta_WF_condition01");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtRoleCd","sta001:10","15","200","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta002","455","15","100","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("권한명");
            obj.set_cssclass("sta_WF_condition01");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtRoleNm","sta002:10","15","200","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta003","910","15","100","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_condition01");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboUseYn","sta003:10","15","120","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_innerdataset("dsUseYnSearch");
            obj.set_codecolumn("value");
            obj.set_datacolumn("text");
            obj.set_text("");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divRole","50","divSearch:0",null,null,"50","30",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("divRoleList","0","0","56.25%",null,null,"0",null,null,null,null,this.divRole.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Area");
            this.divRole.addChild(obj.name, obj);

            obj = new Grid("grdRole","0","45",null,null,"0","0",null,null,null,null,this.divRole.form.divRoleList.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsRole");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_autoupdatetype("itemselect");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\" band=\"left\"/><Column size=\"48\" band=\"left\"/><Column size=\"150\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"34\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" displaytype=\"none\"/><Cell col=\"2\" text=\"권한코드\"/><Cell col=\"3\" text=\"권한명\"/><Cell col=\"4\" text=\"권한등급\"/><Cell col=\"5\" text=\"모듈명\"/><Cell col=\"6\" text=\"사용여부\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\" text=\"expr:currow+1\" textAlign=\"center\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" text=\"bind:rowCheck\"/><Cell col=\"2\" text=\"bind:roleCode\" edittype=\"none\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:roleNm\" edittype=\"none\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:rolePermit\" edittype=\"none\" textAlign=\"left\" displaytype=\"combotext\" combodisplaynulltype=\"none\" combodataset=\"dsRolePermit\" combocodecol=\"value\" combodatacol=\"text\"/><Cell col=\"5\" text=\"bind:moduleId\" edittype=\"none\" combodataset=\"dsModuleCombo\" combocodecol=\"value\" combodatacol=\"text\" displaytype=\"combotext\" combodisplaynulltype=\"none\"/><Cell col=\"6\" text=\"bind:useYn\" edittype=\"none\" displaytype=\"combotext\" combodataset=\"dsUseYn\" combocodecol=\"value\" combodatacol=\"text\"/></Band></Format></Formats>");
            this.divRole.form.divRoleList.addChild(obj.name, obj);

            obj = new Static("staTitle","0","0","51","45",null,null,null,null,null,null,this.divRole.form.divRoleList.form);
            obj.set_taborder("1");
            obj.set_text("권한");
            obj.set_cssclass("sta_WF_subTitle01");
            obj.set_fittocontents("width");
            this.divRole.form.divRoleList.addChild(obj.name, obj);

            obj = new Static("staGridRowCnt","staTitle:10","0","150","45",null,null,null,null,null,null,this.divRole.form.divRoleList.form);
            obj.set_taborder("2");
            obj.set_text("(총 0건)");
            obj.set_cssclass("sta_WF_subTxt");
            this.divRole.form.divRoleList.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_00_00","90","0","60","45",null,null,null,null,null,null,this.divRole.form.divRoleList.form);
            obj.set_taborder("3");
            obj.set_text("h 45");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divRole.form.divRoleList.addChild(obj.name, obj);

            obj = new Div("divMember","divRoleList:15","0",null,null,"0","0",null,null,null,null,this.divRole.form);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_cssclass("div_WF_Area");
            this.divRole.addChild(obj.name, obj);

            obj = new Grid("grdRoleUser","0","45",null,null,"0.39999999999997726","0",null,null,null,null,this.divRole.form.divMember.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsRoleUser");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_autoupdatetype("itemselect");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\" band=\"left\"/><Column size=\"48\" band=\"left\"/><Column size=\"48\" band=\"left\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"150\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"34\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"상태\"/><Cell col=\"3\" text=\"회원 ID\"/><Cell col=\"4\" text=\"사용자명\"/><Cell col=\"5\" text=\"부서명\"/><Cell col=\"6\" text=\"직위\"/><Cell col=\"7\" text=\"수정사유\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\" text=\"expr:currow+1\" textAlign=\"center\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" textAlign=\"center\" text=\"bind:rowCheck\"/><Cell col=\"2\" text=\"bind:rowStatus\"/><Cell col=\"3\" text=\"bind:memberId\" edittype=\"none\"/><Cell col=\"4\" text=\"bind:userNm\" edittype=\"none\"/><Cell col=\"5\" text=\"bind:deptNm\"/><Cell col=\"6\" text=\"bind:jobPosition\"/><Cell col=\"7\" edittype=\"expr:rowStatus == &apos;inserted&apos;? &apos;text&apos; : &apos;none&apos;\" text=\"bind:updtReason\" editmaxlength=\"1000\" displaytype=\"expr:rowStatus == &apos;inserted&apos;? &apos;editcontrol&apos; : &apos;none&apos;\"/></Band></Format></Formats>");
            this.divRole.form.divMember.addChild(obj.name, obj);

            obj = new Button("btnDeleteUser",null,"14","61","26","0",null,null,null,null,null,this.divRole.form.divMember.form);
            obj.set_taborder("2");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_Row_Delete");
            this.divRole.form.divMember.addChild(obj.name, obj);

            obj = new Button("btnAddUser",null,"14","61","26","btnDeleteUser:5",null,null,null,null,null,this.divRole.form.divMember.form);
            obj.set_taborder("1");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_Row_Add");
            this.divRole.form.divMember.addChild(obj.name, obj);

            obj = new Static("staTitle","0","0","117","45",null,null,null,null,null,null,this.divRole.form.divMember.form);
            obj.set_taborder("3");
            obj.set_text("권한별 사용자");
            obj.set_cssclass("sta_WF_subTitle01");
            obj.set_fittocontents("width");
            this.divRole.form.divMember.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_00_00","366","0","60","45",null,null,null,null,null,null,this.divRole.form.divMember.form);
            obj.set_taborder("4");
            obj.set_text("h 45");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divRole.form.divMember.addChild(obj.name, obj);

            obj = new Static("staGridRowCnt","staTitle:10","0","150","45",null,null,null,null,null,null,this.divRole.form.divMember.form);
            obj.set_taborder("5");
            obj.set_text("(총 0건)");
            obj.set_cssclass("sta_WF_subTxt");
            this.divRole.form.divMember.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divRole.form.divRoleList.form
            obj = new Layout("default","",0,0,this.divRole.form.divRoleList.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.grdRole.set_taborder("0");
                p.grdRole.set_binddataset("dsRole");
                p.grdRole.set_autofittype("col");
                p.grdRole.set_autoenter("select");
                p.grdRole.set_autoupdatetype("itemselect");
                p.grdRole.move("0","45",null,null,"0","0");

                p.staTitle.set_taborder("1");
                p.staTitle.set_text("권한");
                p.staTitle.set_cssclass("sta_WF_subTitle01");
                p.staTitle.set_fittocontents("width");
                p.staTitle.move("0","0","51","45",null,null);

                p.staGridRowCnt.set_taborder("2");
                p.staGridRowCnt.set_text("(총 0건)");
                p.staGridRowCnt.set_cssclass("sta_WF_subTxt");
                p.staGridRowCnt.move("staTitle:10","0","150","45",null,null);

                p.Static04_00_00_00_00.set_taborder("3");
                p.Static04_00_00_00_00.set_text("h 45");
                p.Static04_00_00_00_00.set_visible("false");
                p.Static04_00_00_00_00.set_background("aqua");
                p.Static04_00_00_00_00.set_color("blue");
                p.Static04_00_00_00_00.set_textAlign("center");
                p.Static04_00_00_00_00.set_verticalAlign("middle");
                p.Static04_00_00_00_00.set_opacity("0.7");
                p.Static04_00_00_00_00.set_font("normal 12px/normal \"Arial\"");
                p.Static04_00_00_00_00.move("90","0","60","45",null,null);
            	}
            );
            this.divRole.form.divRoleList.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divRole.form.divRoleList.form
            obj = new Layout("screen00","",0,0,this.divRole.form.divRoleList.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divRole.form.divRoleList.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divRole.form.divMember.form
            obj = new Layout("default","",0,0,this.divRole.form.divMember.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.grdRoleUser.set_taborder("0");
                p.grdRoleUser.set_binddataset("dsRoleUser");
                p.grdRoleUser.set_autofittype("col");
                p.grdRoleUser.set_autoenter("select");
                p.grdRoleUser.set_autoupdatetype("itemselect");
                p.grdRoleUser.move("0","45",null,null,"0.39999999999997726","0");

                p.btnDeleteUser.set_taborder("2");
                p.btnDeleteUser.set_text("삭제");
                p.btnDeleteUser.set_cssclass("btn_WF_Row_Delete");
                p.btnDeleteUser.move(null,"14","61","26","0",null);

                p.btnAddUser.set_taborder("1");
                p.btnAddUser.set_text("추가");
                p.btnAddUser.set_cssclass("btn_WF_Row_Add");
                p.btnAddUser.move(null,"14","61","26","btnDeleteUser:5",null);

                p.staTitle.set_taborder("3");
                p.staTitle.set_text("권한별 사용자");
                p.staTitle.set_cssclass("sta_WF_subTitle01");
                p.staTitle.set_fittocontents("width");
                p.staTitle.move("0","0","117","45",null,null);

                p.Static04_00_00_00_00.set_taborder("4");
                p.Static04_00_00_00_00.set_text("h 45");
                p.Static04_00_00_00_00.set_visible("false");
                p.Static04_00_00_00_00.set_background("aqua");
                p.Static04_00_00_00_00.set_color("blue");
                p.Static04_00_00_00_00.set_textAlign("center");
                p.Static04_00_00_00_00.set_verticalAlign("middle");
                p.Static04_00_00_00_00.set_opacity("0.7");
                p.Static04_00_00_00_00.set_font("normal 12px/normal \"Arial\"");
                p.Static04_00_00_00_00.move("366","0","60","45",null,null);

                p.staGridRowCnt.set_taborder("5");
                p.staGridRowCnt.set_text("(총 0건)");
                p.staGridRowCnt.set_cssclass("sta_WF_subTxt");
                p.staGridRowCnt.move("staTitle:10","0","150","45",null,null);
            	}
            );
            this.divRole.form.divMember.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divRole.form.divMember.form
            obj = new Layout("screen00","",0,0,this.divRole.form.divMember.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divRole.form.divMember.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divRole.form
            obj = new Layout("default","",0,0,this.divRole.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divRoleList.set_taborder("0");
                p.divRoleList.set_text("Div00");
                p.divRoleList.set_cssclass("div_WF_Area");
                p.divRoleList.move("0","0","56.25%",null,null,"0");

                p.divMember.set_taborder("1");
                p.divMember.set_text("Div01");
                p.divMember.set_cssclass("div_WF_Area");
                p.divMember.move("divRoleList:15","0",null,null,"0","0");
            	}
            );
            this.divRole.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divRole.form
            obj = new Layout("screen00","",0,0,this.divRole.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divRole.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1920,1000,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item2","divSearch.form.edtRoleCd","value","dsSearch","roleCode");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.edtRoleNm","value","dsSearch","roleNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.cboUseYn","value","dsSearch","useYn");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("ROLE_1030M.xfdl","lib::common.xjs");
        this.registerScript("ROLE_1030M.xfdl", function() {
        /**
         *  roleManage
         *  MenuPath      -
         *  FileName      roleUserManage.xfdl
         *  Creator 	     cheonsy
         *  CreateDate    2023.03.03
         *  Desction      스크립트 표준 및 주석 표준 정의
         ************** 소스 수정 이력 *************************************************
         *  date          Modifier    Description
         *******************************************************************************
         *  2023.03.03    cheonsy 	  최초 생성
         *  2023.08.25    parksw      화면 기능 수정(회원ID, 권한 단일 항목 선택)
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

        /**
         * description 콤보 통합 조회
         */
        this.fnLoadCombo = function()
        {
            this.loadCount = 3;
        	this.gfnLoadCombo("loadCombo", "dsUseYnSearch=SM:USE_YN:A dsUseYn=SM:USE_YN dsRolePermit=SM:ROLE_PERMIT", "fnComboCallback");
        	this.gfnTransaction("getModuleCombo", "sm/getModuleCombo.do", "", "dsModuleCombo", "", "fnComboCallback");
        	this.gfnTransaction("getModuleCombo", "sm/getModuleCombo.do", "", "dsModuleCombo", "", "fnComboCallback");
        }

        /**
         * description 권한 조회
         */
        this.fnRoleSearch = function()
        {
        	this.gfnTransaction("getRoleList", "sm/getRoleList.do", "dsSearch", "dsRole", "", "fnCallback");
        };

        /**
         * description 권한별 사용자 조회
         */
        this.fnRoleUserSearch = function()
        {
        	this.gfnTransaction("getRoleUserSearch", "sm/getRoleUserSearch.do", "dsSearch", "dsRoleUser", "", "fnCallback");
        };

        /**
         * description 사용자 저장
         */
        this.fnSave = function()
        {
        	this.gfnTransaction("setRoleUser", "sm/setRoleUser.do", "dsRoleUser ", "", "", "fnCallback");
        };

        /************************************************************************************************
         * CALLBACK 콜백 처리부분(Transaction, Popup)
         ************************************************************************************************/

        this.fnComboCallback = function (svcId, errorCode, errorMsg)
        {
            this.loadCount--;
            if (this.loadCount == 0) {
                this.fnRoleSearch();
            }
        }

        /**
         * description Transaction CallBack 함수
         */
        this.fnCallback = function (sSvcId, nErrorCode, sErrorMsg)
        {
        	switch (sSvcId) {
        		case "getRoleList":
        			//총 건수 계산
        			this.gfnRowCount(this.dsRole, this.divRole.form.divRoleList.form.staGridRowCnt);
        			this.fnRoleUserSearch();
                    break;
        		case "getRoleUserSearch":
        			//총 건수 계산
        			this.gfnRowCount(this.dsRoleUser, this.divRole.form.divMember.form.staGridRowCnt);
                    break;
        		case "setRoleUser":
        			if (this.callbackMsg == "success") {
        				this.gfnAlert("CM_MSG_SAVE_SUCCESS");  // 저장 되었습니다.
        				this.fnRoleSearch();
        			} else {
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
        	console.log('fnPopupAfter: ', sPopupId, ' || ', vArg);
        	switch(sPopupId){
        		case "roleUserPopup":
        			var oRtn = this.gfnGetPopupRtn();
        			if (oRtn) {
        				console.log('oRtn : ',  oRtn);
        				console.log('oRtn.CONFIRM : ',  oRtn.CONFIRM);
        			}
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
        	this.fnRoleSearch();
        };

        /**
         * description role rowposition change 이벤트
         */
        this.dsRole_onrowposchanged = function(obj,e)
        {
        	this.dsSearch.setColumn(0, "searchRoleCode", this.dsRole.getColumn(this.dsRole.rowposition, "roleCode"));

        	for (var i = 0; i < this.dsRole.getRowCount(); i++) {
        		this.dsRole.setColumn(i,"rowCheck", 0);
        	}
        	this.dsRole.setColumn(e.newrow,"rowCheck", 1);

        	this.fnRoleUserSearch();
        };

        /**
         * description 저장버튼 클릭
         */
        this.btnSave_onclick = function(obj,e)
        {
        	if (this.dsRoleUser.rowcount == 0) {
        		this.gfnAlert("CM_MSG_SAVE_NODATA");  // 저장할 데이터가 없습니다.
        		return;
        	}

        	if (!this.gfnDsIsUpdated(this.dsRoleUser)) {
        		this.gfnAlert("CM_MSG_SAVE_NOCHANGE");  // 변경된 내역이 없습니다.
        		return;
        	}

        	if (!this.fnValidation()) {		// 그리드 필수값 체크
        		return;
            }

        	for (var i = 0; i < this.dsRoleUser.rowcount; i++) {
        		if (this.dsRoleUser.getColumn(i,"rowCheck") > 0) {
        			this.dsRoleUser.setColumn(i, "roleCode", this.dsRole.getColumn(this.dsRole.rowposition, "roleCode"));
        			this.dsRoleUser.setColumn(i, "roleNm", this.dsRole.getColumn(this.dsRole.rowposition, "roleNm"));
        		}
        	}

        	this.gfnAlert("CM_CFM_BEFORE_SAVE", "", "", { trueFunc: "fnSave", falseFunc: "" });  // 변경된 내역을 저장 하시겠습니까?
        	return;
        };

        /**
         * description 사용자 추가 클릭
         */
        this.divRole_divMember_btnAddUser_onclick = function(obj,e)
        {
        	if (!this.gfnIsGridChecked(this.dsRole, "rowCheck")) {
        		this.gfnAlert("권한을 체크해주세요");
        		return;
        	}

        	var oArg = {
                roleCode: this.dsRole.getColumn(this.dsRole.findRow("rowCheck", 1), "roleCode"),
                useYn: this.dsRole.getColumn(this.dsRole.findRow("rowCheck", 1), "useYn"),
                useYmd: this.dsRole.getColumn(this.dsRole.findRow("rowCheck", 1), "useYmd"),
                endYmd: this.dsRole.getColumn(this.dsRole.findRow("rowCheck", 1), "endYmd"),
                roleNm: this.dsRole.getColumn(this.dsRole.findRow("rowCheck", 1), "roleNm")
            };

        	this.gfnOpenPopup("roleUserPopup", "sys::role/ROLE_1030P.xfdl", oArg, "fnPopupAfter", "");
        };

        /**
         * description 사용자 삭제 클릭
         */
        this.divRole_divMember_btnDeleteUser_onclick = function(obj,e)
        {
        	if (!this.gfnIsGridChecked(this.dsRoleUser, "rowCheck")) {
        		this.gfnAlert("삭제할 권한을 체크해주세요");
        		return;
        	}
        	this.gfnDeleteRow(this.dsRoleUser);
        };

        /**
         * description 엔터키 이벤트
         */
        this.divSearch_divSrch_edtRoleCd_onkeyup = function(obj,e)
        {
        	if(e.keycode == 13){
        		this.btnSearch_onclick();
        	}
        };

        /**
         * description generate multi language Excel
         */
        this.btnExportCompML_onclick = function(obj,e)
        {
        	// generate multi language Excel
        	this.gfnGenerateML(this);
        	this.gfnGenerateMLExcel();
        };

        /************************************************************************************************
        * 사용자 FUNCTION 영역
        ************************************************************************************************/

        /**
         * description 밸리데이션
         */
        this.fnValidation = function ()
        {
            var args = [
                ["updtReason", "MAX_LEN:1000", ""]
            ];

            return this.gfnCheckGrid(this.divRole.form.divMember.form.grdRoleUser, args, "");
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
            this.divSearch.form.sta001.addEventHandler("onclick",this.divSearch_sta_01_onclick,this);
            this.divSearch.form.edtRoleCd.addEventHandler("onkeyup",this.divSearch_divSrch_edtRoleCd_onkeyup,this);
            this.divSearch.form.sta002.addEventHandler("onclick",this.divSearch_sta_01_onclick,this);
            this.divSearch.form.edtRoleNm.addEventHandler("onkeyup",this.divSearch_divSrch_edtRoleCd_onkeyup,this);
            this.divSearch.form.sta003.addEventHandler("onclick",this.divSearch_sta_01_onclick,this);
            this.divSearch.form.cboUseYn.addEventHandler("onkeyup",this.divSearch_divSrch_edtRoleCd_onkeyup,this);
            this.divRole.form.divRoleList.form.staTitle.addEventHandler("onclick",this.Static09_onclick,this);
            this.divRole.form.divRoleList.form.Static04_00_00_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.divRole.form.divMember.form.grdRoleUser.addEventHandler("onheadclick",this.divRole_divRoleList_grdRole_onheadclick,this);
            this.divRole.form.divMember.form.btnDeleteUser.addEventHandler("onclick",this.divRole_divMember_btnDeleteUser_onclick,this);
            this.divRole.form.divMember.form.btnAddUser.addEventHandler("onclick",this.divRole_divMember_btnAddUser_onclick,this);
            this.divRole.form.divMember.form.staTitle.addEventHandler("onclick",this.Static09_onclick,this);
            this.divRole.form.divMember.form.Static04_00_00_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.dsRole.addEventHandler("onrowposchanged",this.dsRole_onrowposchanged,this);
        };
        this.loadIncludeScript("ROLE_1030M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
