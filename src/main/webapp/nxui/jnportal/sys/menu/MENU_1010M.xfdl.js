(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("menuManage");
            this.set_titletext("메뉴 관리");
            this.set_cssclass("frm_WF_comp");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"menuId\" type=\"STRING\" size=\"256\"/><Column id=\"menuNm\" type=\"STRING\" size=\"256\"/><Column id=\"menuTy\" type=\"STRING\" size=\"256\"/><Column id=\"upperMenuId\" type=\"STRING\" size=\"256\"/><Column id=\"progId\" type=\"STRING\" size=\"256\"/><Column id=\"sysId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"menuId\" type=\"STRING\" size=\"256\"/><Column id=\"upperMenuId\" type=\"STRING\" size=\"256\"/><Column id=\"menuNm\" type=\"STRING\" size=\"256\"/><Column id=\"menuTy\" type=\"STRING\" size=\"256\"/><Column id=\"progId\" type=\"STRING\" size=\"256\"/><Column id=\"progNm\" type=\"STRING\" size=\"256\"/><Column id=\"indctYn\" type=\"STRING\" size=\"256\"/><Column id=\"sortOrdr\" type=\"STRING\" size=\"256\"/><Column id=\"menuDc\" type=\"STRING\" size=\"256\"/><Column id=\"moduleId\" type=\"STRING\" size=\"256\"/><Column id=\"moduleNm\" type=\"STRING\" size=\"256\"/><Column id=\"defaultRowCnt\" type=\"STRING\" size=\"256\"/><Column id=\"oftenUseYn\" type=\"STRING\" size=\"256\"/><Column id=\"mainUrl\" type=\"STRING\" size=\"256\"/><Column id=\"rowCheck\" type=\"STRING\" size=\"256\"/><Column id=\"rowStatus\" type=\"STRING\" size=\"256\"/><Column id=\"level\" type=\"STRING\" size=\"256\"/><Column id=\"sysId\" type=\"STRING\" size=\"256\"/><Column id=\"sysNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMenuTySchCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"text\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMenuTyCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"text\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsModuleCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"text\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSysIdCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"text\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta_01","50","0","500","58",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("메뉴 관리");
            obj.set_cssclass("sta_WF_compTitle01");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"19","65","28","50",null,null,null,null,null,this);
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Save");
            obj.set_visible("true");
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"19","65","28","118",null,null,null,null,null,this);
            obj.set_text("조회");
            obj.set_cssclass("");
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","50","57",null,"117","50",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0",null,"90","0",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_bg");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta_001","25%","15","100","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("메뉴  ID");
            obj.set_cssclass("sta_WF_condition01");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta_002","50%","15","100","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("메뉴명");
            obj.set_cssclass("sta_WF_condition01");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static10","0","-1","20","91",null,null,null,null,null,null,this.divSearch.form);
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

            obj = new Edit("edt_schMenuId","sta_001:10","15","10.99%","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edt_schMenuNm","sta_002:10","15","14.07%","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta_003","75%","15","100","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("메뉴 타입");
            obj.set_cssclass("sta_WF_condition01");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta_004","20","49","100","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("상위 메뉴  ID");
            obj.set_cssclass("sta_WF_condition01");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edt_schUpperMenuId","sta_004:10","49","10.99%","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta_002_00","25%","49","100","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("프로그램 ID");
            obj.set_cssclass("sta_WF_condition01");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edt_schProgId","sta_002_00:10","49","10.99%","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("Combo00","sta_003:10","15","8.24%","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_innerdataset("dsMenuTySchCombo");
            obj.set_codecolumn("value");
            obj.set_datacolumn("text");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta_003_00","20","15","100","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("시스템");
            obj.set_cssclass("sta_WF_condition01");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("systemIdCombo","sta_003_00:10","15","10.99%","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_innerdataset("dsSysIdCombo");
            obj.set_codecolumn("value");
            obj.set_datacolumn("text");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static14","20","41",null,"8","20",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_text("h 8");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divResult","50","divSearch:0",null,null,"50","30",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("");
            obj.set_cssclass("div_WF_Area");
            obj.set_color("aliceblue");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMenu","0","45",null,null,"0","0",null,null,null,null,this.divResult.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsMenu");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_autoupdatetype("itemselect");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("expand,null");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\" band=\"left\"/><Column size=\"48\" band=\"left\"/><Column size=\"48\" band=\"left\"/><Column size=\"200\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"150\"/><Column size=\"120\"/><Column size=\"96\"/><Column size=\"96\"/><Column size=\"200\"/><Column size=\"48\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"34\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"상태\"/><Cell col=\"3\" text=\"메뉴명\"/><Cell col=\"4\" text=\"메뉴 ID\"/><Cell col=\"5\" text=\"시스템\"/><Cell col=\"6\" text=\"프로그램 ID\"/><Cell col=\"7\" text=\"프로그램명\"/><Cell col=\"8\" text=\"상위 메뉴 ID\"/><Cell col=\"9\" text=\"모듈\"/><Cell col=\"10\" text=\"메뉴 타입\"/><Cell col=\"11\" text=\"메뉴 URL\"/><Cell col=\"12\" text=\"표시\"/><Cell col=\"13\" text=\"정렬 순서\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\" text=\"expr:currow+1\" textAlign=\"center\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" textAlign=\"center\" text=\"bind:rowCheck\"/><Cell col=\"2\" textAlign=\"center\" imagestretch=\"fit\" displaytype=\"normal\" text=\"bind:rowStatus\"/><Cell col=\"3\" text=\"bind:menuNm\" edittype=\"tree\" treelevel=\"bind:level\" textAlign=\"left\" displaytype=\"treeitemcontrol\" treecheck=\"bind:rowCheck\"/><Cell col=\"4\" text=\"bind:menuId\" edittype=\"expr:rowStatus == &apos;inserted&apos; ? &apos;normal&apos; : &apos;none&apos;\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:sysId\" displaytype=\"combotext\" textAlign=\"left\" combodataset=\"dsSysIdCombo\" combocodecol=\"value\" combodatacol=\"text\"/><Cell col=\"6\" text=\"bind:progId\" textAlign=\"left\"/><Cell col=\"7\" expandshow=\"show\" expandsize=\"26\" text=\"bind:progNm\" textAlign=\"left\"/><Cell col=\"8\" text=\"bind:upperMenuId\" edittype=\"none\" textAlign=\"left\"/><Cell col=\"9\" edittype=\"combo\" displaytype=\"combocontrol\" combodataset=\"dsModuleCombo\" combocodecol=\"value\" combodatacol=\"text\" text=\"bind:moduleId\" textAlign=\"left\"/><Cell col=\"10\" edittype=\"combo\" displaytype=\"combocontrol\" combodataset=\"dsMenuTyCombo\" combocodecol=\"value\" combodatacol=\"text\" text=\"bind:menuTy\" textAlign=\"left\"/><Cell col=\"11\" text=\"bind:mainUrl\" edittype=\"text\" textAlign=\"left\" displaytype=\"editcontrol\"/><Cell col=\"12\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\" text=\"bind:indctYn\" checkboxfalsevalue=\"N\" checkboxtruevalue=\"Y\"/><Cell col=\"13\" text=\"bind:sortOrdr\" editinputtype=\"number\" edittype=\"text\" textAlign=\"right\" displaytype=\"editcontrol\"/></Band></Format></Formats>");
            this.divResult.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_00","110","0","60","45",null,null,null,null,null,null,this.divResult.form);
            obj.set_taborder("1");
            obj.set_text("h 45");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divResult.addChild(obj.name, obj);

            obj = new Static("staHeader","0","0","81","45",null,null,null,null,null,null,this.divResult.form);
            obj.set_taborder("2");
            obj.set_text("검색결과");
            obj.set_cssclass("sta_WF_subTitle01");
            obj.set_fittocontents("width");
            this.divResult.addChild(obj.name, obj);

            obj = new Static("staGridRowCnt","staHeader:10","0","149","45",null,null,null,null,null,null,this.divResult.form);
            obj.set_taborder("3");
            obj.set_text("(총 0건)");
            obj.set_cssclass("sta_WF_subResult");
            this.divResult.addChild(obj.name, obj);

            obj = new Button("btnDeleteRow",null,"14","61","26","0",null,null,null,null,null,this.divResult.form);
            obj.set_taborder("5");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_Row_Delete");
            obj.set_enable("true");
            this.divResult.addChild(obj.name, obj);

            obj = new Button("btnAddRow",null,"14","121","26","btnDeleteRow:5",null,null,null,null,null,this.divResult.form);
            obj.set_taborder("4");
            obj.set_text("하위 메뉴 추가");
            obj.set_cssclass("btn_WF_Row_Add");
            this.divResult.addChild(obj.name, obj);

            obj = new Button("btnAddSiblingRow",null,"14","151","26","btnAddRow:5",null,null,null,null,null,this.divResult.form);
            obj.set_taborder("6");
            obj.set_text("같은 레벨 메뉴 추가");
            obj.set_cssclass("btn_WF_Row_Add");
            this.divResult.addChild(obj.name, obj);

            obj = new Button("btnCollapse",null,"14","85","26","btnAddSiblingRow:5",null,null,null,null,null,this.divResult.form);
            obj.set_taborder("8");
            obj.set_text("전체닫힘");
            obj.set_cssclass("btn_WF_grdCollapse");
            this.divResult.addChild(obj.name, obj);

            obj = new Button("btnExpand",null,"14","85","26","btnCollapse:5",null,null,null,null,null,this.divResult.form);
            obj.set_taborder("7");
            obj.set_text("전체펼침");
            obj.set_cssclass("btn_WF_grdExpand");
            this.divResult.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_01","70","147","100","15",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",1032,72,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divResult.form
            obj = new Layout("default","",0,0,this.divResult.form,function(p){});
            this.divResult.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1920,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.edt_schMenuId","value","dsSearch","menuId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.edt_schMenuNm","value","dsSearch","menuNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.edt_schUpperMenuId","value","dsSearch","upperMenuId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.edt_schProgId","value","dsSearch","progId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.Combo00","value","dsSearch","menuTy");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.systemIdCombo","value","dsSearch","sysId");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("MENU_1010M.xfdl","lib::common.xjs");
        this.registerScript("MENU_1010M.xfdl", function() {
        /**
         *  메뉴 관리
         *  MenuPath      시스템 관리 - 사용자, 메뉴 및 권한 관리 - 메뉴 관리
         *  FileName      menuManage.xfdl
         *  Creator 	  parksw
         *  CreateDate    2023.03.08
         *  Desction      메뉴 관리
         ************** 소스 수정 이력 ***********************************************
         *  date          Modifier    Description
         *******************************************************************************
         *  2023.03.08    박상욱      최초 생성
         *******************************************************************************/

        this.executeIncludeScript("lib::common.xjs"); /*include "lib::common.xjs"*/;

        /***********************************************************************************************
        * FORM EVENT 영역(onload, onbeforeclose)
        /***********************************************************************************************/

        /**
         * description 화면 onload
        */
        this.menuManage_onload = function(obj,e)
        {
        	this.gfnFormOnLoad(this);
        	this.fnLoadCombo();
        };

        /************************************************************************************************
         * TRANSACTION 서비스 호출 처리
         ************************************************************************************************/

        this.fnLoadCombo = function ()
        {
            this.comboLoadCnt = 3;
            this.gfnLoadCombo("loadCombo", "dsMenuTyCombo=PMS:SM:PROG_TY:C dsMenuTySchCombo=PMS:SM:PROG_TY:A", "fnComboCallback");
            this.gfnTransaction("loadModuleCombo", "sm/getMenuModuleCombo.do", "", "dsModuleCombo", "type=C", "fnComboCallback");
        	this.gfnTransaction("loadSysIdCombo", "sm/getSystemIdCombo.do", "", "dsSysIdCombo", "", "fnComboCallback");
        };

        /**
         * description 조회
         */
        this.fnSearch = function ()
        {
        	var strSvcId    = "getMenuList";
        	var strSvcUrl   = "sm/getMenuManageList.do";
        	var inData      = "dsSearch";
        	var outData     = "dsMenu";
        	var strArg      = "";
        	var callBackFnc = "fnCallBack";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        this.fnSave = function ()
        {
        	var strSvcId    = "saveMenuList";
        	var strSvcUrl   = "sm/saveMenuManageList.do";
        	var inData      = "dsMenu";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallBack";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        /************************************************************************************************
         * CALLBACK 콜백 처리부분(Transaction, Popup)
         ************************************************************************************************/

        this.fnComboCallback = function (sSvcId, nErrorCode, sErrorMsg)
        {
            this.comboLoadCnt--;
            if (this.comboLoadCnt <= 0) {
                var sysId = nexacro.getApplication().gdsUserInfo.getColumn(0, "sysId");
                this.dsSearch.setColumn(0, "sysId", sysId);

                this.fnSearch();
            }
        }

        /**
         * description Transaction CallBack 함수
         */
        this.fnCallBack = function (sSvcId, nErrorCode, sErrorMsg)
        {
        	switch (sSvcId) {
        		case "getMenuList":
        			this.gfnRowCount(this.dsMenu, this.divResult.form.staGridRowCnt);
                    break;
        		case "saveMenuList":
        			if(this.callbackMsg == "success"){
        				this.gfnAlert("CM_MSG_SAVE_SUCCESS");  // 저장 되었습니다.
        				this.fnSearch();
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
        this.fnPopupClosed = function (popupId, args)
        {
            if (popupId == "progSearchPopup") {
                var result = this.gfnGetPopupRtn();
                if (result == null) {
                    return;     // 취소시 항목의 프로그램 ID를 변경하지 않음
                }

                var programs = result.programs;

                if (result == "clear"){
                    this.dsMenu.setColumn(this.dsMenu.rowposition, "progId", "");
                    this.dsMenu.setColumn(this.dsMenu.rowposition, "progNm", "");
                }

                if (programs.length > 0) {
                    var row = this.dsMenu.rowposition;
                    this.dsMenu.setColumn(row, "progId", programs[0].progId);
                    this.dsMenu.setColumn(row, "progNm", programs[0].progNm);
                }
            }
        };

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        this.btnSearch_onclick = function(obj,e)
        {
        	this.fnSearch();
        };

        this.btnSave_onclick = function(obj,e)
        {
            this.fnBeforeSave();
        };

        this.divResult_btnAddRow_onclick = function(obj,e)
        {
        	var p = this.dsMenu.rowposition;

            if (p < 0 || p == null) {
                this.fnAddTopmostRow();
            } else {
                this.fnAddChildRow(p);
            }
        };

        this.divResult_btnAddSiblingRow_onclick = function(obj,e)
        {
            var p = this.dsMenu.rowposition;

            if (p < 0 || p == null) {
                this.fnAddTopmostRow();
            } else {
                this.fnAddSiblingRow(p);
            }
        };


        this.divResult_btnDeleteRow_onclick = function(obj,e)
        {
            var indices = this.gfnGetCheckedRows(this.dsMenu, "rowCheck");
            var thisObj = this;

            if (!indices.every(function (e) { return this.fnCheckDeletable(e); }, this)) {
                return;
            }

            this.gfnDeleteRow(this.dsMenu);
        };

        this.divResult_grdMenu_onheadclick = function(obj,e)
        {
        	this.gfnSetGridCheckAll(obj, e, "rowCheck");
        };

        this.divResult_grdMenu_oncelldblclick = function(obj,e)
        {
        	if (e.col == obj.getBindCellIndex("body", "menuNm")) {
                var pos = obj.currentcell;
                obj.setCellProperty("body", pos, "edittype", "normal");
                obj.setCellPos(pos);
            }
        };

        this.divResult_grdMenu_onselectchanged = function(obj,e)
        {
        	var colIdx = obj.getBindCellIndex("body", "menuNm");
            if (obj.getCellProperty("body", colIdx, "edittype") != "tree") {
                obj.setCellProperty("body", colIdx, "edittype", "tree");
            }
        };

        this.divResult_grdMenu_onexpandup = function(obj,e)
        {
            var type = obj.getBindDataset().getColumn(e.row, "menuTy");

            if (Eco.isEmpty(type)) {
                type = "PAGE";
                obj.getBindDataset().setColumn(e.row, "menuTy", type);
            }

            if (type != "PAGE") {
                this.gfnAlert("CM_MENU_PROG_ONLY_MENU");
                return;
            }

        	this.fnOpenProgSearchPopup();
        };

        this.dsMenu_oncolumnchanged = function(obj,e)
        {
        	if (e.columnid == "menuTy") {
                if (e.newvalue != "PROG") {
                    obj.setColumn(e.row, "progId", null);
                    obj.setColumn(e.row, "progNm", null);
                }
            }
        };

        this.divSearch_edt_schMenuId_onkeyup = function(obj,e)
        {
        	if (e.keycode == 13) {
                this.fnSearch();
            }
        };

        //전체펼침
        this.divResult_btn_expand_onclick = function(obj,e)
        {
            this.divResult.form.grdMenu.set_treeinitstatus("expand,all");
        };

        //전체닫힘
        this.divResult_btn_collapse_onclick = function(obj,e)
        {
            this.divResult.form.grdMenu.set_treeinitstatus("collapse,all");
        };

        //system combobox onchange
        this.divSearch_systemIdCombo_onitemchanged = function(obj,e)
        {
        	this.fnSearch();
        };

        /************************************************************************************************
        * 사용자 FUNCTION 영역
        ************************************************************************************************/

        this.fnCheckCanAddRow = function (row)
        {
            if (Eco.isEmpty(this.dsSearch.getColumn(0, "sysId"))) {
                this.gfnAlert("검색 조건에서 시스템을 선택하세요.");
                return;
            }

            var type = this.dsMenu.getColumn(row, "menuTy");
            if (type != "GROUP") {
                this.gfnAlert("CM_MENU_GROUP_REQUIRED_TO_ADD_CHILD");
                return false;
            }

            if (Eco.isEmpty(this.dsMenu.getColumn(row, "menuId"))) {
                this.gfnAlert("CM_MENU_ID_RQUIRED_TO_ADD_CHILD");
                return false;
            }

            return true;
        };

        this.fnAddChildRow = function (row)
        {
            if (!this.fnCheckCanAddRow(row)) {
                return;
            }

            var i = row;
            var grid = this.divResult.form.grdMenu;
            while (grid.getTreeChildRow(i, -1) >= 0) {
                i = grid.getTreeChildRow(i, -1)
            }

            i++;

            this.dsMenu.insertRow(i);
            this.dsMenu.setColumn(i, "level", parseInt(this.dsMenu.getColumn(row, "level")) + 1);
            this.dsMenu.setColumn(i, "upperMenuId", this.dsMenu.getColumn(row, "menuId"));
            this.dsMenu.setColumn(i, "indctYn", "Y");
        	this.dsMenu.setColumn(i, "sysId", this.dsSearch.getColumn(0, "sysId"));
        };

        this.fnAddTopmostRow = function ()
        {
            if (Eco.isEmpty(this.dsSearch.getColumn(0, "sysId"))) {
                this.gfnAlert("검색 조건에서 시스템을 선택하세요.");
                return;
            }

            this.gfnInsertRow(this.dsMenu, "last");
        	var i = this.dsMenu.rowposition;
            var grid = this.divResult.form.grdMenu;
            this.dsMenu.setColumn(i, "level", 0);
            this.dsMenu.setColumn(i, "indctYn", "Y");
        	this.dsMenu.setColumn(i, "sysId", this.dsSearch.getColumn(0, "sysId"));
        };

        this.fnAddSiblingRow = function (row)
        {
            var grid = this.divResult.form.grdMenu;
            var p = grid.getTreeParentRow(row);
            if (p < 0 || p == null) {
                this.fnAddTopmostRow();
                return;
            }

            var i = grid.getTreeChildRow(p, -1);
            while (grid.getTreeChildRow(i, -1) >= 0) {
                i = grid.getTreeChildRow(i, -1);
            }

            i++;

            this.dsMenu.insertRow(i);
            this.dsMenu.setColumn(i, "level", parseInt(this.dsMenu.getColumn(row, "level")));
            this.dsMenu.setColumn(i, "upperMenuId", this.dsMenu.getColumn(p, "menuId"));
            this.dsMenu.setColumn(i, "indctYn", "Y");
        	this.dsMenu.setColumn(i, "sysId", this.dsSearch.getColumn(0, "sysId"));
        };

        this.fnCheckDeletable = function (row)
        {
            if (!this.divResult.form.grdMenu.isTreeLeafRow(row) ) {
                this.gfnAlert("CM_MENU_CANNOT_DELETE_NOT_LEAF");
                return false;
            }

            return true;
        };

        this.fnOpenProgSearchPopup = function ()
        {
            var args = {
                mode: "single",
                progId: this.dsMenu.getColumn(this.dsMenu.rowposition, "progId"),
        		sysId: this.dsSearch.getColumn(0,"sysId")
            };

        	this.gfnOpenPopup("progSearchPopup", "sys::pgm/PGM_1020P.xfdl", args, "fnPopupClosed", "");
        };

        this.fnToggleTreeRow = function (grid, row, colId)
        {
            var ds = grid.getBindDataset();
            var colIdx = grid.getBindCellIndex(colId);
            var trueValue = grid.getCellProperty("body", colIdx, "checkboxtruevalue");

            if (trueValue == null) {
                trueValue = true;
            }

            if (falseValue == null) {
                falseValue = false;
            }

            var value = (ds.getColumn(row, colId) != trueValue) ? true : false;
            this.fnCheckTreeRow(grid, row, colId, value);
        };

        this.fnCheckTreeRow = function (grid, row, colId, check)
        {
            var ds = grid.getBindDataset();
            var colIdx = grid.getBindCellIndex(colId);
            var descendents = getDescendents(row);
            var value = grid.getCellProperty("body", colIdx, check ? "checkboxtruevalue" : "checkboxfalsevalue");

            if (value == null) {
                value = Number(check).toFixed(0);
            }

            ds.set_enableevent(false);
            ds.setColumn(row, colId, value);
            for (var i = 0; i < descendents.length; i++) {
                ds.setColumn(descendents[i], colId, value);
            }
            ds.set_enableevent(true);

            function getDescendents(row) {
                var arr = [];
                var n = grid.getTreeChildCount(row);
                for (var i = 0; i < n; i++) {
                    var r = grid.getTreeChildRow(row, i);
                    arr.push(r);
                    Array.prototype.push.apply(arr, getDescendents(r))
                }
                return arr;
            }
        };

        this.fnBeforeSave = function ()
        {
            if (!this.fnValidate()) {
                return;
            }

            this.gfnAlert("CM_CFM_BEFORE_SAVE", "", "", {trueFunc: "fnSave", falseFunc: ""});  // 변경된 내역을 저장 하시겠습니까?
        };

        this.fnValidate = function ()
        {
            if (this.dsMenu.rowcount == 0) {
        		this.gfnAlert("CM_MSG_SAVE_NODATA");  // 저장할 데이터가 없습니다.
        		return;
            }

            if (!this.gfnDsIsUpdated(this.dsMenu)) {
        		this.gfnAlert("CM_MSG_SAVE_NOCHANGE");  // 변경된 내역이 없습니다.
        		return;
            }

            var args = [
                ["menuId", "NULL|MAX_LEN:50", ""],
                ["menuNm", "NULL|MAX_LEN:300", ""],
                ["mainUrl", "MAX_LEN:50", ""]
            ];

            return this.gfnCheckGrid(this.divResult.form.grdMenu, args, "");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.menuManage_onload,this);
            this.btnSave.addEventHandler("onclick",this.btnSave_onclick,this);
            this.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
            this.divSearch.form.Static00.addEventHandler("onclick",this.div_Search_Static00_onclick,this);
            this.divSearch.form.sta_001.addEventHandler("onclick",this.div_Search_Static01_onclick,this);
            this.divSearch.form.edt_schMenuId.addEventHandler("onkeyup",this.divSearch_edt_schMenuId_onkeyup,this);
            this.divSearch.form.edt_schMenuNm.addEventHandler("onkeyup",this.divSearch_edt_schMenuId_onkeyup,this);
            this.divSearch.form.sta_004.addEventHandler("onclick",this.div_Search_Static01_onclick,this);
            this.divSearch.form.edt_schUpperMenuId.addEventHandler("onkeyup",this.divSearch_edt_schMenuId_onkeyup,this);
            this.divSearch.form.edt_schProgId.addEventHandler("onkeyup",this.divSearch_edt_schMenuId_onkeyup,this);
            this.divSearch.form.Combo00.addEventHandler("onkeyup",this.divSearch_edt_schMenuId_onkeyup,this);
            this.divSearch.form.sta_003_00.addEventHandler("onclick",this.divSearch_sta_003_00_onclick,this);
            this.divSearch.form.systemIdCombo.addEventHandler("onkeyup",this.divSearch_edt_schMenuId_onkeyup,this);
            this.divSearch.form.systemIdCombo.addEventHandler("onitemchanged",this.divSearch_systemIdCombo_onitemchanged,this);
            this.divSearch.form.Static14.addEventHandler("onclick",this.Static_onclick,this);
            this.divResult.form.grdMenu.addEventHandler("onheadclick",this.divResult_grdMenu_onheadclick,this);
            this.divResult.form.grdMenu.addEventHandler("oncelldblclick",this.divResult_grdMenu_oncelldblclick,this);
            this.divResult.form.grdMenu.addEventHandler("onselectchanged",this.divResult_grdMenu_onselectchanged,this);
            this.divResult.form.grdMenu.addEventHandler("onexpandup",this.divResult_grdMenu_onexpandup,this);
            this.divResult.form.grdMenu.addEventHandler("oncellclick",this.divResult_grdMenu_oncellclick,this);
            this.divResult.form.Static04_00_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.divResult.form.staHeader.addEventHandler("onclick",this.Static09_onclick,this);
            this.divResult.form.btnDeleteRow.addEventHandler("onclick",this.divResult_btnDeleteRow_onclick,this);
            this.divResult.form.btnAddRow.addEventHandler("onclick",this.divResult_btnAddRow_onclick,this);
            this.divResult.form.btnAddSiblingRow.addEventHandler("onclick",this.divResult_btnAddSiblingRow_onclick,this);
            this.divResult.form.btnCollapse.addEventHandler("onclick",this.divResult_btn_collapse_onclick,this);
            this.divResult.form.btnExpand.addEventHandler("onclick",this.divResult_btn_expand_onclick,this);
            this.Static04_00_00_01.addEventHandler("onclick",this.Static31_onclick,this);
            this.dsMenu.addEventHandler("oncolumnchanged",this.dsMenu_oncolumnchanged,this);
        };
        this.loadIncludeScript("MENU_1010M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
