(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PRM_1010M");
            this.set_titletext("파라미터 관리");
            this.set_cssclass("frm_WF_comp");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,670);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj.set_updatecontrol("true");
            obj._setContents("<ColumnInfo><Column id=\"paramId\" type=\"STRING\" size=\"256\"/><Column id=\"paramNm\" type=\"STRING\" size=\"256\"/><Column id=\"moduleFg\" type=\"STRING\" size=\"256\"/><Column id=\"searchParamId\" type=\"STRING\" size=\"256\"/><Column id=\"sysId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsParam", this);
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj._setContents("<ColumnInfo><Column id=\"rowCheck\" type=\"STRING\" size=\"256\"/><Column id=\"rowStatus\" type=\"STRING\" size=\"256\"/><Column id=\"rgstId\" type=\"STRING\" size=\"256\"/><Column id=\"rgstDt\" type=\"STRING\" size=\"256\"/><Column id=\"rgstIp\" type=\"STRING\" size=\"256\"/><Column id=\"rgstNm\" type=\"STRING\" size=\"256\"/><Column id=\"updtId\" type=\"STRING\" size=\"256\"/><Column id=\"updtIp\" type=\"STRING\" size=\"256\"/><Column id=\"updtDt\" type=\"STRING\" size=\"256\"/><Column id=\"updtNm\" type=\"STRING\" size=\"256\"/><Column id=\"sysId\" type=\"STRING\" size=\"256\"/><Column id=\"paramId\" type=\"STRING\" size=\"256\"/><Column id=\"paramNm\" type=\"STRING\" size=\"256\"/><Column id=\"moduleFg\" type=\"STRING\" size=\"256\"/><Column id=\"targetNm\" type=\"STRING\" size=\"256\"/><Column id=\"paramData\" type=\"STRING\" size=\"256\"/><Column id=\"msg\" type=\"STRING\" size=\"256\"/><Column id=\"rmk\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsModuleCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"value\" type=\"STRING\" size=\"256\"/><Column id=\"text\" type=\"STRING\" size=\"256\"/><Column id=\"sysId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsModuleComboSearch", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"value\" type=\"STRING\" size=\"256\"/><Column id=\"text\" type=\"STRING\" size=\"256\"/><Column id=\"sysId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSysIdCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"text\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj.set_text("파라미터 관리");
            obj.set_cssclass("sta_WF_compTitle01");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","50","58",null,"71","50",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staBg","0","0",null,"56","0",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
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

            obj = new Static("sta003","1365","15","100","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("모듈");
            obj.set_cssclass("sta_WF_condition01");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboModuleId","sta003:10","15","200","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_innerdataset("dsModuleComboSearch");
            obj.set_codecolumn("value");
            obj.set_datacolumn("text");
            obj.set_text("");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta002","910","15","100","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("파라미터명");
            obj.set_cssclass("sta_WF_condition01");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtParamNm","sta002:10","15","200","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta001","455","15","100","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("파라미터 ID");
            obj.set_cssclass("sta_WF_condition01");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtParamId","sta001:10","15","200","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta_003_00","20","15","100","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("시스템");
            obj.set_cssclass("sta_WF_condition01");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("systemIdCombo","130","15","10.99%","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_innerdataset("dsSysIdCombo");
            obj.set_codecolumn("value");
            obj.set_datacolumn("text");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divParam","50","divSearch:0",null,null,"50","37",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Button("btnDeleteRow",null,"14","73","26","0",null,null,null,null,null,this.divParam.form);
            obj.set_taborder("1");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_Row_Delete");
            this.divParam.addChild(obj.name, obj);

            obj = new Button("btnAddRow",null,"14","73","26","btnDeleteRow:5",null,null,null,null,null,this.divParam.form);
            obj.set_taborder("0");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_Row_Add");
            this.divParam.addChild(obj.name, obj);

            obj = new Grid("grdParam","0","45",null,null,"0","0",null,null,null,null,this.divParam.form);
            obj.set_taborder("10");
            obj.set_binddataset("dsParam");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_autoupdatetype("itemselect");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\" band=\"left\"/><Column size=\"48\" band=\"left\"/><Column size=\"48\" band=\"left\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"250\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"34\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"상태\"/><Cell col=\"3\" text=\"시스템\"/><Cell col=\"4\" text=\"파라미터 ID\"/><Cell col=\"5\" text=\"파라미터명\"/><Cell col=\"6\" text=\"모듈구분\"/><Cell col=\"7\" text=\"환경설정대상(경로)\"/><Cell col=\"8\" text=\"파라미터 자료\"/><Cell col=\"9\" text=\"메세지\"/><Cell col=\"10\" text=\"비고\"/><Cell col=\"11\" text=\"수정자\"/><Cell col=\"12\" text=\"수정일시\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\" text=\"expr:currow+1\" textAlign=\"center\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" textAlign=\"center\" text=\"bind:rowCheck\"/><Cell col=\"2\" textAlign=\"center\" imagestretch=\"fit\" displaytype=\"normal\" text=\"bind:rowStatus\"/><Cell col=\"3\" displaytype=\"combotext\" combodataset=\"dsSysIdCombo\" combocodecol=\"value\" combodatacol=\"text\" text=\"bind:sysId\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:paramId\" edittype=\"expr:rowStatus == &apos;inserted&apos;? &apos;text&apos; : &apos;none&apos;\" editmaxlength=\"100\" displaytype=\"expr:rowStatus == &apos;inserted&apos;? &apos;editcontrol&apos; : &apos;normal&apos;\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:paramNm\" edittype=\"text\" editmaxlength=\"1000\" displaytype=\"editcontrol\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:moduleFg\" edittype=\"combo\" displaytype=\"combocontrol\" combodataset=\"dsModuleCombo\" combocodecol=\"value\" combodatacol=\"text\"/><Cell col=\"7\" text=\"bind:targetNm\" edittype=\"text\" textAlign=\"left\" editmaxlength=\"300\" displaytype=\"editcontrol\"/><Cell col=\"8\" text=\"bind:paramData\" edittype=\"text\" editmaxlength=\"4000\" displaytype=\"editcontrol\"/><Cell col=\"9\" text=\"bind:msg\" edittype=\"text\" textAlign=\"left\" editmaxlength=\"1000\" displaytype=\"editcontrol\"/><Cell col=\"10\" text=\"bind:rmk\" edittype=\"text\" textAlign=\"left\" editmaxlength=\"4000\" displaytype=\"editcontrol\"/><Cell col=\"11\" text=\"bind:updtNm\" edittype=\"none\" textAlign=\"center\"/><Cell col=\"12\" text=\"bind:updtDt\" edittype=\"none\" displaytype=\"normal\"/></Band></Format></Formats>");
            this.divParam.addChild(obj.name, obj);

            obj = new Static("staTitle","0","0","81","45",null,null,null,null,null,null,this.divParam.form);
            obj.set_taborder("2");
            obj.set_text("검색결과");
            obj.set_cssclass("sta_WF_subTitle01");
            obj.set_fittocontents("width");
            this.divParam.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_00_00","110","0","60","45",null,null,null,null,null,null,this.divParam.form);
            obj.set_taborder("3");
            obj.set_text("h 45");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divParam.addChild(obj.name, obj);

            obj = new Static("staGridRowCnt","staTitle:10","0","149","45",null,null,null,null,null,null,this.divParam.form);
            obj.set_taborder("4");
            obj.set_text("(총 0건)");
            obj.set_cssclass("sta_WF_subTxt");
            this.divParam.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divParam.form
            obj = new Layout("default","",0,0,this.divParam.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btnDeleteRow.set_taborder("1");
                p.btnDeleteRow.set_text("행삭제");
                p.btnDeleteRow.set_cssclass("btn_WF_Row_Delete");
                p.btnDeleteRow.move(null,"14","73","26","0",null);

                p.btnAddRow.set_taborder("0");
                p.btnAddRow.set_text("행추가");
                p.btnAddRow.set_cssclass("btn_WF_Row_Add");
                p.btnAddRow.move(null,"14","73","26","btnDeleteRow:5",null);

                p.grdParam.set_taborder("10");
                p.grdParam.set_binddataset("dsParam");
                p.grdParam.set_autofittype("col");
                p.grdParam.set_autoenter("select");
                p.grdParam.set_autoupdatetype("itemselect");
                p.grdParam.move("0","45",null,null,"0","0");

                p.staTitle.set_taborder("2");
                p.staTitle.set_text("검색결과");
                p.staTitle.set_cssclass("sta_WF_subTitle01");
                p.staTitle.set_fittocontents("width");
                p.staTitle.move("0","0","81","45",null,null);

                p.Static04_00_00_00_00.set_taborder("3");
                p.Static04_00_00_00_00.set_text("h 45");
                p.Static04_00_00_00_00.set_visible("false");
                p.Static04_00_00_00_00.set_background("aqua");
                p.Static04_00_00_00_00.set_color("blue");
                p.Static04_00_00_00_00.set_textAlign("center");
                p.Static04_00_00_00_00.set_verticalAlign("middle");
                p.Static04_00_00_00_00.set_opacity("0.7");
                p.Static04_00_00_00_00.set_font("normal 12px/normal \"Arial\"");
                p.Static04_00_00_00_00.move("110","0","60","45",null,null);

                p.staGridRowCnt.set_taborder("4");
                p.staGridRowCnt.set_text("(총 0건)");
                p.staGridRowCnt.set_cssclass("sta_WF_subTxt");
                p.staGridRowCnt.move("staTitle:10","0","149","45",null,null);
            	}
            );
            this.divParam.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divParam.form
            obj = new Layout("screen00","",0,0,this.divParam.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divParam.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1920,670,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("파라미터 관리");
                p.set_cssclass("frm_WF_comp");

                p.btnSave.set_taborder("4");
                p.btnSave.set_text("저장");
                p.btnSave.set_cssclass("btn_WF_Save");
                p.btnSave.move(null,"20","65","28","49",null);

                p.btnSearch.set_taborder("0");
                p.btnSearch.set_text("조회");
                p.btnSearch.move(null,"20","65","28","btnSave:3",null);

                p.staTitle.set_taborder("1");
                p.staTitle.set_text("파라미터 관리");
                p.staTitle.set_cssclass("sta_WF_compTitle01");
                p.staTitle.move("50","0","500","58",null,null);

                p.divSearch.set_taborder("2");
                p.divSearch.set_text("");
                p.divSearch.move("50","58",null,"71","50",null);

                p.divParam.set_taborder("3");
                p.divParam.set_text("");
                p.divParam.set_cssclass("div_WF_Area");
                p.divParam.move("50","divSearch:0",null,null,"50","37");
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
            obj = new BindItem("item0","divSearch.form.cboModuleId","value","dsSearch","moduleFg");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.edtParamNm","value","dsSearch","paramNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.edtParamId","value","dsSearch","searchParamId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.systemIdCombo","value","dsSearch","sysId");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("PRM_1010M.xfdl","lib::common.xjs");
        this.registerScript("PRM_1010M.xfdl", function() {
        /**
        *  messageManage
        *  MenuPath      -
        *  FileName      parameterManage.xfdl
        *  Creator 	     cheonsy
        *  CreateDate    2023.03.06
        *  Desction      파라미터관리
        ************** 소스 수정 이력 ***********************************************
        *  date          Modifier    Description
        *******************************************************************************
        *  2023.03.06    cheonsy 	 최초 생성
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
        	this.fnLoadCombo();
        	this.fnParamSearch();
        };

        /************************************************************************************************
        * TRANSACTION 서비스 호출 처리
        ************************************************************************************************/

        this.fnLoadCombo = function ()
        {
            this.loadCount = 3;
        	this.gfnTransaction("loadSysIdCombo", "sm/getSystemIdCombo.do", "", "dsSysIdCombo", "", "fnComboCallback");
        	this.gfnTransaction("getModuleCombo", "sm/getModuleCombo.do", "", "dsModuleCombo", "", "fnComboCallback");
        	this.gfnTransaction("getModuleCombo", "sm/getModuleCombo.do", "", "dsModuleComboSearch=dsModuleCombo", "type=A", "fnComboCallback");
        }

        /**
         * description 파라미터 조회
        */
        this.fnParamSearch = function()
        {
        	this.gfnTransaction("getParam", "sm/getParam.do", "dsSearch", "dsParam", "", "fnCallBack");
        };

        /**
         * description 저장
        */
        this.fnSave = function()
        {
        	this.gfnTransaction("setParam", "sm/setParam.do", "dsParam", "", "", "fnCallBack");
        };

        /************************************************************************************************
         * CALLBACK 콜백 처리부분(Transaction, Popup)
         ************************************************************************************************/

        this.fnComboCallback = function (svcId, errorCode, errorMsg)
        {
            this.loadCount--;
            if (this.loadCount == 0) {
                this.dsSearch.setColumn(0, "sysId", nexacro.getApplication().gdsUserInfo.getColumn(0, "sysId"))
                this.fnParamSearch();
            }
        };

        /**
         * description Transaction CallBack 함수
        */
        this.fnCallBack = function (sSvcId, nErrorCode, sErrorMsg)
        {
        	switch (sSvcId) {
        		case "getParam":
        			this.gfnRowCount(this.dsParam, this.divParam.form.staGridRowCnt);
                    break;
        		case "setParam":
        			if(this.callbackMsg == "success"){
        				this.gfnAlert("CM_MSG_SAVE_SUCCESS");  // 저장 되었습니다.
        				this.fnParamSearch();
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
        	this.dsSearch.setColumn(0, "paramId", this.dsSearch.getColumn(0, "searchParamId"));
        	this.fnParamSearch();
        };

        /**
         * description 저장버튼 클릭
        */
        this.btnSave_onclick = function(obj,e)
        {
        	if(this.dsParam.rowcount == 0){
        		this.gfnAlert("CM_MSG_SAVE_NODATA");  // 저장할 데이터가 없습니다.
        		return;
        	}
        	if (!this.gfnDsIsUpdated(this.dsParam)) {
        		this.gfnAlert("CM_MSG_SAVE_NOCHANGE");  // 변경된 내역이 없습니다.
        		return;
        	}

        	if (!this.fnValidation()) {	// 그리드 필수값 체크
        		return;
            }

        	this.gfnAlert("CM_CFM_BEFORE_SAVE", "", "", {trueFunc: "fnSave", falseFunc: ""});  // 변경된 내역을 저장 하시겠습니까?
        	return;
        };

        /**
         * description 행추가 클릭
        */
        this.divParam_btnAddRow_onclick = function(obj,e)
        {
        	this.gfnInsertRow(this.dsParam, "last");
            this.dsParam.setColumn(this.dsParam.rowposition, "sysId", this.dsSearch.getColumn(0, "sysId"));
        };

        /**
         * description 행삭제 클릭
        */
        this.divParam_btnDeleteRow_onclick = function(obj,e)
        {
        	this.gfnDeleteRow(this.dsParam);
        };

        /**
         * description 그리드 헤드 클릭
        */
        this.divParam_grdParam_onheadclick = function(obj,e)
        {
        	this.gfnSetGridCheckAll(obj, e, "rowCheck");
        };

        /**
         * description 엔터키 검색
        */
        this.divSearch_divSrch_edtParamId_onkeyup = function(obj,e)
        {
        	if(e.keycode==13){
        		this.btnSearch_onclick();
        	}
        };

        this.dsSearch_oncolumnchanged = function(obj,e)
        {
            if (e.columnid === "sysId") {
                this.dsModuleCombo.filter("text == '전체' || sysId == '" + e.newvalue + "'");
                this.dsModuleComboSearch.filter("value == null || value == '' || sysId == '" + e.newvalue + "'");
                this.fnParamSearch();
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


        this.fnValidation = function ()
        {
            var args = [
                ["sysId", "NULL", ""],	// 시스템ID
                ["paramId", "NULL|MAX_LEN:100", ""],	// 파라미터 아이디
        		["paramData", "NULL|MAX_LEN:4000", ""],	// 파라미터 자료
        		["paramNm", "MAX_LEN:1000", ""],	// 파라미터명
        		["targetNm", "MAX_LEN:300", ""],	// 환경설정대상(경로)
        		["msg", "MAX_LEN:1000", ""],		// 메세지
        		["rmk", "MAX_LEN:4000", ""],		// 비고
            ];

            return this.gfnCheckGrid(this.divParam.form.grdParam, args, "");
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
            this.divSearch.form.sta003.addEventHandler("onclick",this.divSearch_sta_01_onclick,this);
            this.divSearch.form.cboModuleId.addEventHandler("onkeyup",this.divSearch_Div00_edt_03_onkeyup,this);
            this.divSearch.form.sta002.addEventHandler("onclick",this.divSearch_sta_01_onclick,this);
            this.divSearch.form.edtParamNm.addEventHandler("onkeyup",this.divSearch_Div00_edt_03_onkeyup,this);
            this.divSearch.form.sta001.addEventHandler("onclick",this.divSearch_sta_01_onclick,this);
            this.divSearch.form.edtParamId.addEventHandler("onkeyup",this.divSearch_divSrch_edtParamId_onkeyup,this);
            this.divSearch.form.sta_003_00.addEventHandler("onclick",this.divSearch_sta_003_00_onclick,this);
            this.divSearch.form.systemIdCombo.addEventHandler("onkeyup",this.divSearch_edt_schMenuId_onkeyup,this);
            this.divSearch.form.systemIdCombo.addEventHandler("onitemchanged",this.divSearch_systemIdCombo_onitemchanged,this);
            this.divParam.form.btnDeleteRow.addEventHandler("onclick",this.divParam_btnDeleteRow_onclick,this);
            this.divParam.form.btnAddRow.addEventHandler("onclick",this.divParam_btnAddRow_onclick,this);
            this.divParam.form.grdParam.addEventHandler("onheadclick",this.divParam_grdParam_onheadclick,this);
            this.divParam.form.staTitle.addEventHandler("onclick",this.Static09_onclick,this);
            this.divParam.form.Static04_00_00_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.dsSearch.addEventHandler("oncolumnchanged",this.dsSearch_oncolumnchanged,this);
        };
        this.loadIncludeScript("PRM_1010M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
