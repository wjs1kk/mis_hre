(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ROLE_1010M");
            this.set_titletext("권한 관리");
            this.set_cssclass("frm_WF_comp");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,670);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsRole", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"rowCheck\" type=\"STRING\" size=\"256\"/><Column id=\"rowStatus\" type=\"STRING\" size=\"256\"/><Column id=\"roleCode\" type=\"STRING\" size=\"256\"/><Column id=\"sysId\" type=\"STRING\" size=\"256\"/><Column id=\"moduleId\" type=\"STRING\" size=\"256\"/><Column id=\"roleNm\" type=\"STRING\" size=\"256\"/><Column id=\"roleDc\" type=\"STRING\" size=\"256\"/><Column id=\"rolePermit\" type=\"STRING\" size=\"256\"/><Column id=\"workGrpId\" type=\"STRING\" size=\"256\"/><Column id=\"useYmd\" type=\"DATE\" size=\"256\"/><Column id=\"endYmd\" type=\"DATE\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"rgstId\" type=\"STRING\" size=\"256\"/><Column id=\"rgstDt\" type=\"STRING\" size=\"256\"/><Column id=\"rgstIp\" type=\"STRING\" size=\"256\"/><Column id=\"rgstNm\" type=\"STRING\" size=\"256\"/><Column id=\"updtId\" type=\"STRING\" size=\"256\"/><Column id=\"updtIp\" type=\"STRING\" size=\"256\"/><Column id=\"updtDt\" type=\"STRING\" size=\"256\"/><Column id=\"updtNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRoleChild", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"rowCheck\" type=\"STRING\" size=\"256\"/><Column id=\"rowStatus\" type=\"STRING\" size=\"256\"/><Column id=\"rgstId\" type=\"STRING\" size=\"256\"/><Column id=\"rgstDt\" type=\"STRING\" size=\"256\"/><Column id=\"rgstIp\" type=\"STRING\" size=\"256\"/><Column id=\"rgstNm\" type=\"STRING\" size=\"256\"/><Column id=\"updtId\" type=\"STRING\" size=\"256\"/><Column id=\"updtIp\" type=\"STRING\" size=\"256\"/><Column id=\"updtDt\" type=\"STRING\" size=\"256\"/><Column id=\"updtNm\" type=\"STRING\" size=\"256\"/><Column id=\"childRole\" type=\"STRING\" size=\"256\"/><Column id=\"childRoleNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRoleParents", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"rowCheck\" type=\"STRING\" size=\"256\"/><Column id=\"rowStatus\" type=\"STRING\" size=\"256\"/><Column id=\"rgstId\" type=\"STRING\" size=\"256\"/><Column id=\"rgstDt\" type=\"STRING\" size=\"256\"/><Column id=\"rgstIp\" type=\"STRING\" size=\"256\"/><Column id=\"rgstNm\" type=\"STRING\" size=\"256\"/><Column id=\"updtId\" type=\"STRING\" size=\"256\"/><Column id=\"updtIp\" type=\"STRING\" size=\"256\"/><Column id=\"updtDt\" type=\"STRING\" size=\"256\"/><Column id=\"updtNm\" type=\"STRING\" size=\"256\"/><Column id=\"parentRole\" type=\"STRING\" size=\"256\"/><Column id=\"parentRoleNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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


            obj = new Dataset("dsModuleComboSearch", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"value\" type=\"STRING\" size=\"256\"/><Column id=\"text\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btnSave",null,"20","65","28","51",null,null,null,null,null,this);
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Save");
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"20","65","28","btnSave:3",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle","50","0","500","58",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("권한 관리");
            obj.set_cssclass("sta_WF_compTitle01");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","50","58",null,"71","50",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staBg","0","0",null,"56","0",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_bg");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static15_01_00_00","0","56","50",null,null,"39",null,null,null,null,this.divSearch.form);
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

            obj = new Static("sta004","1365","15","100","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_condition01");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboUseYn","sta004:10","15","170","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_innerdataset("dsUseYnSearch");
            obj.set_codecolumn("value");
            obj.set_datacolumn("text");
            obj.set_text("");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta003","910","15","100","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("모듈구분");
            obj.set_cssclass("sta_WF_condition01");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboModuleId","sta003:10","15","170","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_innerdataset("dsModuleComboSearch");
            obj.set_codecolumn("value");
            obj.set_datacolumn("text");
            obj.set_text("Combo00");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta002","455","15","100","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("권한명");
            obj.set_cssclass("sta_WF_condition01");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtRoleNm","sta002:10","15","170","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta001","20","15","100","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("권한코드");
            obj.set_cssclass("sta_WF_condition01");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtRoleCd","sta001:10","15","170","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divRole","50","divSearch:0",null,null,"50","37",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle","0","0","100","45",null,null,null,null,null,null,this.divRole.form);
            obj.set_taborder("0");
            obj.set_text("검색결과");
            obj.set_cssclass("sta_WF_subTitle01");
            obj.set_fittocontents("width");
            this.divRole.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_00_00","110","0","60","45",null,null,null,null,null,null,this.divRole.form);
            obj.set_taborder("1");
            obj.set_text("h 45");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divRole.addChild(obj.name, obj);

            obj = new Static("staGridRowCnt","staTitle:10","0","150","45",null,null,null,null,null,null,this.divRole.form);
            obj.set_taborder("2");
            obj.set_text("(총 0건)");
            obj.set_cssclass("sta_WF_subTxt");
            this.divRole.addChild(obj.name, obj);

            obj = new Grid("grdRole","0","45",null,null,"0","0",null,null,null,null,this.divRole.form);
            obj.set_taborder("3");
            obj.set_binddataset("dsRole");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_autoupdatetype("itemselect");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\" band=\"left\"/><Column size=\"48\" band=\"left\"/><Column size=\"48\" band=\"left\"/><Column size=\"120\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"350\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"34\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"상태\"/><Cell col=\"3\" text=\"권한코드\"/><Cell col=\"4\" text=\"권한명\"/><Cell col=\"5\" text=\"모듈명\"/><Cell col=\"6\" text=\"권한등급\"/><Cell col=\"7\" text=\"사용여부\"/><Cell col=\"8\" text=\"비고\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\" text=\"expr:currow+1\" textAlign=\"center\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" textAlign=\"center\" text=\"bind:rowCheck\"/><Cell col=\"2\" textAlign=\"center\" imagestretch=\"fit\" displaytype=\"normal\" text=\"bind:rowStatus\"/><Cell col=\"3\" text=\"bind:roleCode\" edittype=\"expr:rowStatus == &apos;inserted&apos;? &apos;text&apos; : &apos;none&apos;\" editmaxlength=\"50\" textAlign=\"left\" displaytype=\"expr:rowStatus == &apos;inserted&apos;? &apos;editcontrol&apos; : &apos;normal&apos;\"/><Cell col=\"4\" text=\"bind:roleNm\" edittype=\"text\" editmaxlength=\"300\" textAlign=\"left\" displaytype=\"editcontrol\"/><Cell col=\"5\" text=\"bind:moduleId\" edittype=\"combo\" combodataset=\"dsModuleCombo\" combocodecol=\"value\" combodatacol=\"text\" displaytype=\"combocontrol\" combodisplaynulltype=\"none\"/><Cell col=\"6\" text=\"bind:rolePermit\" edittype=\"combo\" textAlign=\"left\" displaytype=\"combocontrol\" combodisplaynulltype=\"none\" combodataset=\"dsRolePermit\" combocodecol=\"value\" combodatacol=\"text\"/><Cell col=\"7\" text=\"bind:useYn\" edittype=\"combo\" displaytype=\"combocontrol\" combodataset=\"dsUseYn\" combocodecol=\"value\" combodatacol=\"text\"/><Cell col=\"8\" text=\"bind:roleDc\" textAlign=\"left\" edittype=\"text\" editmaxlength=\"3000\" displaytype=\"editcontrol\"/></Band></Format></Formats>");
            this.divRole.addChild(obj.name, obj);

            obj = new Button("btnAddRole",null,"14","73","26","78",null,null,null,null,null,this.divRole.form);
            obj.set_taborder("4");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_Row_Add");
            this.divRole.addChild(obj.name, obj);

            obj = new Button("btnDeleteRowRole",null,"14","73","26","0",null,null,null,null,null,this.divRole.form);
            obj.set_taborder("5");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_Row_Delete");
            this.divRole.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divRole.form
            obj = new Layout("default","",0,0,this.divRole.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staTitle.set_taborder("0");
                p.staTitle.set_text("검색결과");
                p.staTitle.set_cssclass("sta_WF_subTitle01");
                p.staTitle.set_fittocontents("width");
                p.staTitle.move("0","0","100","45",null,null);

                p.Static04_00_00_00_00.set_taborder("1");
                p.Static04_00_00_00_00.set_text("h 45");
                p.Static04_00_00_00_00.set_visible("false");
                p.Static04_00_00_00_00.set_background("aqua");
                p.Static04_00_00_00_00.set_color("blue");
                p.Static04_00_00_00_00.set_textAlign("center");
                p.Static04_00_00_00_00.set_verticalAlign("middle");
                p.Static04_00_00_00_00.set_opacity("0.7");
                p.Static04_00_00_00_00.set_font("normal 12px/normal \"Arial\"");
                p.Static04_00_00_00_00.move("110","0","60","45",null,null);

                p.staGridRowCnt.set_taborder("2");
                p.staGridRowCnt.set_text("(총 0건)");
                p.staGridRowCnt.set_cssclass("sta_WF_subTxt");
                p.staGridRowCnt.move("staTitle:10","0","150","45",null,null);

                p.grdRole.set_taborder("3");
                p.grdRole.set_binddataset("dsRole");
                p.grdRole.set_autofittype("col");
                p.grdRole.set_autoenter("select");
                p.grdRole.set_autoupdatetype("itemselect");
                p.grdRole.move("0","45",null,null,"0","0");

                p.btnAddRole.set_taborder("4");
                p.btnAddRole.set_text("행추가");
                p.btnAddRole.set_cssclass("btn_WF_Row_Add");
                p.btnAddRole.move(null,"14","73","26","78",null);

                p.btnDeleteRowRole.set_taborder("5");
                p.btnDeleteRowRole.set_text("행삭제");
                p.btnDeleteRowRole.set_cssclass("btn_WF_Row_Delete");
                p.btnDeleteRowRole.move(null,"14","73","26","0",null);
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
            obj = new Layout("default","Desktop_screen",1920,670,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("권한 관리");
                p.set_cssclass("frm_WF_comp");

                p.btnSave.set_text("저장");
                p.btnSave.set_cssclass("btn_WF_Save");
                p.btnSave.set_taborder("4");
                p.btnSave.move(null,"20","65","28","51",null);

                p.btnSearch.set_taborder("0");
                p.btnSearch.set_text("조회");
                p.btnSearch.move(null,"20","65","28","btnSave:3",null);

                p.staTitle.set_taborder("1");
                p.staTitle.set_text("권한 관리");
                p.staTitle.set_cssclass("sta_WF_compTitle01");
                p.staTitle.move("50","0","500","58",null,null);

                p.divSearch.set_taborder("2");
                p.divSearch.set_text("");
                p.divSearch.move("50","58",null,"71","50",null);

                p.divRole.set_taborder("3");
                p.divRole.set_text("");
                p.divRole.set_cssclass("div_WF_Area");
                p.divRole.move("50","divSearch:0",null,null,"50","37");
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
            obj = new BindItem("item4","divSearch.form.cboUseYn","value","dsSearch","useYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.cboModuleId","value","dsSearch","moduleId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.edtRoleNm","value","dsSearch","roleNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearch.form.edtRoleCd","value","dsSearch","searchRoleCode");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("ROLE_1010M.xfdl","lib::common.xjs");
        this.registerScript("ROLE_1010M.xfdl", function() {
        /**
        *  roleManage
        *  MenuPath      -
        *  FileName      roleManage.xfdl
        *  Creator 	     cheonsy
        *  CreateDate    2023.02.27
        *  Desction      권한관리
        ************** 소스 수정 이력 ***********************************************
        *  date          Modifier    Description
        *******************************************************************************
        *  2023.02.27    cheonsy 	 최초 생성
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
        	this.fnGetCombo();	// 모듈명 콤보 생성(조회)
        };

        /************************************************************************************************
        * TRANSACTION 서비스 호출 처리
        ************************************************************************************************/

        /**
         * description 모듈명 콤보 생성
         */
        this.fnGetCombo = function()
        {
            this.loadCount = 3;
        	this.gfnTransaction("getModuleCombo", "sm/getModuleCombo.do", "", "dsModuleCombo", "", "fnComboCallback");
        	this.gfnTransaction("getModuleComboSearch", "sm/getModuleCombo.do", "", "dsModuleComboSearch=dsModuleCombo", "type=A", "fnComboCallback");
        	this.gfnLoadCombo("loadCombo", "dsUseYn=SM:USE_YN dsUseYnSearch=SM:USE_YN:A dsRolePermit=SM:ROLE_PERMIT", "fnComboCallback");
        };

        /**
         * description 권한 조회
        */
        this.fnRoleSearch = function()
        {
        	this.gfnTransaction("getRoleSearch", "sm/getRoleSearch.do", "dsSearch", "dsRole", "", "fnCallBack");
        };

        /**
         * description 저장
        */
        this.fnSave = function()
        {
        	this.gfnTransaction("setRoleList", "sm/setRoleList.do", "dsRole", "", "", "fnCallBack");

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
        this.fnCallBack = function (sSvcId, nErrorCode, sErrorMsg)
        {
        	switch (sSvcId) {
        		case "getRoleSearch":
        			//총 건수 계산
        			this.gfnRowCount(this.dsRole, this.divRole.form.staGridRowCnt);
                    break;
        		case "setRoleList":
        			if (this.callbackMsg == "success") {
        				this.gfnAlert("CM_MSG_SAVE_SUCCESS");  // 저장 되었습니다.
        				this.dsSearch.clearData();
        				this.dsSearch.addRow();
        				this.fnRoleSearch();
        			} else {
        				this.gfnAlert("CM_MSG_TEST_3");  // 저장에 실패하였습니다.
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
        	this.dsSearch.setColumn(0, "roleCode", this.dsSearch.getColumn(0, "searchRoleCode"));
        	this.fnRoleSearch();
        };

        /**
         * description 저장버튼 클릭
        */
        this.btnSave_onclick = function(obj,e)
        {
        	if (this.dsRole.rowcount == 0) {
        		this.gfnAlert("CM_MSG_SAVE_NODATA");  // 저장할 데이터가 없습니다.
        		return;
        	}
        	if (!this.gfnDsIsUpdated(this.dsRole)) {
        		this.gfnAlert("CM_MSG_SAVE_NOCHANGE");  // 변경된 내역이 없습니다.
        		return;
        	}

        	if (!this.fnValidation()) {		// 그리드 필수값 체크
        		return;
            }

        	this.gfnAlert("CM_CFM_BEFORE_SAVE", "", "", {trueFunc: "fnSave", falseFunc: ""});  // 변경된 내역을 저장 하시겠습니까?
        	return;
        };

        /**
         * description 권한 행추가 클릭
        */
        this.divRole_divRoleList_btnAddRole_onclick = function(obj,e)
        {
        	this.gfnInsertRow(this.dsRole, "last");
        	this.dsRole.setColumn(this.dsRole.rowposition, "useYn", "Y");
        	this.dsRole.setColumn(this.dsRole.rowposition, "moduleId", this.dsModuleCombo.getColumn(0, "value"));
        	this.dsRole.setColumn(this.dsRole.rowposition, "rolePermit", this.dsRolePermit.getColumn(0, "value"));
        	this.dsSearch.clearData();
        	this.dsSearch.addRow();
        };

        /**
         * description 권한 행삭제 클릭
        */
        this.divRole_divRoleList_btnDeleteRowRole_onclick = function(obj,e)
        {
        	this.gfnDeleteRow(this.dsRole);
        };

        /**
         * description 그리드해드 클릭
        */
        this.divRole_divRoleList_grdRole_onheadclick = function(obj,e)
        {
        	this.gfnSetGridCheckAll(obj, e, "rowCheck");
        };

        /**
         * description 엔터키 조회
        */
        this.divSearch_divSrch_edtRoleCd_onkeyup = function(obj,e)
        {
        	if (e.keycode == 13) {
        		this.btnSearch_onclick();
        	}
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
        	this.gfnGenerateMLExcel();
        };

        /**
         * description 밸리데이션
        */
        this.fnValidation = function ()
        {
            var args = [
                ["roleCode", "NULL|MAX_LEN:50", ""],
                ["roleNm", "NULL|MAX_LEN:300", ""],
                ["moduleId", "NULL", ""],
                ["rolePermit", "NULL", ""],
                ["roleDc", "MAX_LEN:3000", ""]
            ];

            return this.gfnCheckGrid(this.divRole.form.grdRole, args, "");
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
            this.divSearch.form.sta004.addEventHandler("onclick",this.divSearch_sta_01_onclick,this);
            this.divSearch.form.cboUseYn.addEventHandler("onkeyup",this.divSearch_divSrch_edtRoleCd_onkeyup,this);
            this.divSearch.form.sta003.addEventHandler("onclick",this.divSearch_sta_01_onclick,this);
            this.divSearch.form.cboModuleId.addEventHandler("onkeyup",this.divSearch_divSrch_edtRoleCd_onkeyup,this);
            this.divSearch.form.sta002.addEventHandler("onclick",this.divSearch_sta_01_onclick,this);
            this.divSearch.form.edtRoleNm.addEventHandler("onkeyup",this.divSearch_divSrch_edtRoleCd_onkeyup,this);
            this.divSearch.form.sta001.addEventHandler("onclick",this.divSearch_sta_01_onclick,this);
            this.divSearch.form.edtRoleCd.addEventHandler("onkeyup",this.divSearch_divSrch_edtRoleCd_onkeyup,this);
            this.divRole.form.staTitle.addEventHandler("onclick",this.Static09_onclick,this);
            this.divRole.form.Static04_00_00_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.divRole.form.grdRole.addEventHandler("onheadclick",this.divRole_divRoleList_grdRole_onheadclick,this);
            this.divRole.form.btnAddRole.addEventHandler("onclick",this.divRole_divRoleList_btnAddRole_onclick,this);
            this.divRole.form.btnDeleteRowRole.addEventHandler("onclick",this.divRole_divRoleList_btnDeleteRowRole_onclick,this);
            this.dsRole.addEventHandler("onrowposchanged",this.dsRole_onrowposchanged,this);
        };
        this.loadIncludeScript("ROLE_1010M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
