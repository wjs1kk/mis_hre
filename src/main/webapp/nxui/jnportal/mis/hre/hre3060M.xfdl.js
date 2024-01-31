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
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"isChecked\" type=\"STRING\" size=\"256\"/><Column id=\"tmHeader\" type=\"STRING\" size=\"256\"/><Column id=\"EVAL_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"EVAL_ID\" type=\"STRING\" size=\"256\"/><Column id=\"EVAL_GRADE\" type=\"STRING\" size=\"256\"/><Column id=\"EVAL_POINT_RANGE\" type=\"FLOAT\" size=\"256\"/><Column id=\"EVAL_POINT_ROUND_OPTION\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btnSave",null,"20","65","28","51",null,null,null,null,null,this);
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Save");
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle","50","0","500","58",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("평가등급기준 관리");
            obj.set_cssclass("sta_WF_compTitle01");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","50","58",null,"71","50",null,null,null,null,null,this);
            obj.set_taborder("1");
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

            obj = new Combo("cboModuleId","140","15","190","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_innerdataset("dsModuleComboSearch");
            obj.set_codecolumn("value");
            obj.set_datacolumn("text");
            obj.set_text("Combo00");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta001","20","15","100","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_condition01");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtRoleCd","360","15","550","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divRole","50","divSearch:0",null,null,"50","37",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle","0","0","120","45",null,null,null,null,null,null,this.divRole.form);
            obj.set_taborder("0");
            obj.set_text("평가등급 기준");
            obj.set_cssclass("sta_WF_subTitle01");
            obj.set_fittocontents("width");
            this.divRole.addChild(obj.name, obj);

            obj = new Static("staGridRowCnt","staTitle:25","1","150","45",null,null,null,null,null,null,this.divRole.form);
            obj.set_taborder("1");
            obj.set_text("(총 0건)");
            obj.set_cssclass("sta_WF_subTxt");
            this.divRole.addChild(obj.name, obj);

            obj = new Grid("grdRole","0","45",null,null,"0","0",null,null,null,null,this.divRole.form);
            obj.set_taborder("2");
            obj.set_binddataset("dsList");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_autoupdatetype("itemselect");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"40\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"60\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"NO\"/><Cell col=\"1\" text=\"isChecked\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"평가 ID\"/><Cell col=\"3\" text=\"평가등급\"/><Cell col=\"4\" text=\"평가점수 범위\"/><Cell col=\"5\" text=\"평가점수반영옵션\"/><Cell col=\"6\" text=\"반영자리수\"/><Cell col=\"7\" text=\"사용여부\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\" text=\"bind:isChecked\"/><Cell col=\"2\" text=\"bind:EVAL_ID\"/><Cell col=\"3\" text=\"bind:EVAL_GRADE\"/><Cell col=\"4\" text=\"bind:EVAL_POINT_RANGE\"/><Cell col=\"5\" text=\"bind:EVAL_POINT_ROUND_OPTION\"/><Cell col=\"6\"/><Cell col=\"7\" text=\"bind:USE_YN\"/></Band></Format></Formats>");
            this.divRole.addChild(obj.name, obj);

            obj = new Button("btnAddRole",null,"14","73","26","78",null,null,null,null,null,this.divRole.form);
            obj.set_taborder("3");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_Row_Add");
            this.divRole.addChild(obj.name, obj);

            obj = new Button("btnDeleteRowRole",null,"14","73","26","0",null,null,null,null,null,this.divRole.form);
            obj.set_taborder("4");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_Row_Delete");
            this.divRole.addChild(obj.name, obj);

            obj = new Button("btnSearch00",null,"70","65","28","50",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("조회");
            this.addChild(obj.name, obj);
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
                p.staTitle.set_text("평가등급 기준");
                p.staTitle.set_cssclass("sta_WF_subTitle01");
                p.staTitle.set_fittocontents("width");
                p.staTitle.move("0","0","120","45",null,null);

                p.staGridRowCnt.set_taborder("1");
                p.staGridRowCnt.set_text("(총 0건)");
                p.staGridRowCnt.set_cssclass("sta_WF_subTxt");
                p.staGridRowCnt.move("staTitle:25","1","150","45",null,null);

                p.grdRole.set_taborder("2");
                p.grdRole.set_binddataset("dsList");
                p.grdRole.set_autofittype("col");
                p.grdRole.set_autoenter("select");
                p.grdRole.set_autoupdatetype("itemselect");
                p.grdRole.move("0","45",null,null,"0","0");

                p.btnAddRole.set_taborder("3");
                p.btnAddRole.set_text("행추가");
                p.btnAddRole.set_cssclass("btn_WF_Row_Add");
                p.btnAddRole.move(null,"14","73","26","78",null);

                p.btnDeleteRowRole.set_taborder("4");
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
                p.btnSave.set_taborder("3");
                p.btnSave.move(null,"20","65","28","51",null);

                p.staTitle.set_taborder("0");
                p.staTitle.set_text("평가등급기준 관리");
                p.staTitle.set_cssclass("sta_WF_compTitle01");
                p.staTitle.move("50","0","500","58",null,null);

                p.divSearch.set_taborder("1");
                p.divSearch.set_text("");
                p.divSearch.move("50","58",null,"71","50",null);

                p.divRole.set_taborder("2");
                p.divRole.set_text("");
                p.divRole.set_cssclass("div_WF_Area");
                p.divRole.move("50","divSearch:0",null,null,"50","37");

                p.btnSearch00.set_taborder("4");
                p.btnSearch00.set_text("조회");
                p.btnSearch00.move(null,"70","65","28","50",null);
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
        this.addIncludeScript("hre3060M.xfdl","lib::common.xjs");
        this.registerScript("hre3060M.xfdl", function() {
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

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnSave.addEventHandler("onclick",this.btnSave_onclick,this);
            this.divSearch.form.staBg.addEventHandler("onclick",this.div_Search_Static00_onclick,this);
            this.divSearch.form.Static15_01_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.divSearch.form.cboModuleId.addEventHandler("onkeyup",this.divSearch_divSrch_edtRoleCd_onkeyup,this);
            this.divSearch.form.sta001.addEventHandler("onclick",this.divSearch_sta_01_onclick,this);
            this.divSearch.form.edtRoleCd.addEventHandler("onkeyup",this.divSearch_divSrch_edtRoleCd_onkeyup,this);
            this.divRole.form.staTitle.addEventHandler("onclick",this.Static09_onclick,this);
            this.divRole.form.grdRole.addEventHandler("onheadclick",this.divRole_divRoleList_grdRole_onheadclick,this);
            this.divRole.form.btnAddRole.addEventHandler("onclick",this.divRole_divRoleList_btnAddRole_onclick,this);
            this.divRole.form.btnDeleteRowRole.addEventHandler("onclick",this.divRole_divRoleList_btnDeleteRowRole_onclick,this);
            this.btnSearch00.addEventHandler("onclick",this.btnSearch_onclick,this);
        };
        this.loadIncludeScript("hre3060M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
