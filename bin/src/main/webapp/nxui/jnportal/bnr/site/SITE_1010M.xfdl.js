(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SITE_1010M");
            this.set_titletext("공통코드 관리");
            this.set_cssclass("frm_WF_comp");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsUseYn", this);
            obj._setContents("<ColumnInfo><Column id=\"value\" type=\"STRING\" size=\"256\"/><Column id=\"text\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj.set_updatecontrol("true");
            obj._setContents("<ColumnInfo><Column id=\"searchType\" type=\"STRING\" size=\"256\"/><Column id=\"searchKeyword\" type=\"STRING\" size=\"256\"/><Column id=\"siteId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearchCbo", this);
            obj.set_updatecontrol("true");
            obj._setContents("<ColumnInfo><Column id=\"text\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj.set_updatecontrol("true");
            obj._setContents("<ColumnInfo><Column id=\"rowCheck\" type=\"STRING\" size=\"256\"/><Column id=\"rowStatus\" type=\"STRING\" size=\"256\"/><Column id=\"siteId\" type=\"STRING\" size=\"256\"/><Column id=\"siteNm\" type=\"STRING\" size=\"256\"/><Column id=\"siteUrl\" type=\"STRING\" size=\"256\"/><Column id=\"siteDesc\" type=\"STRING\" size=\"256\"/><Column id=\"siteClsCd\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"rgstrId\" type=\"STRING\" size=\"256\"/><Column id=\"rgstDt\" type=\"STRING\" size=\"256\"/><Column id=\"updtrId\" type=\"STRING\" size=\"256\"/><Column id=\"updtDt\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj.set_text("사이트 관리");
            obj.set_cssclass("sta_WF_compTitle01");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","50","58",null,"70","50",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staBg","0","0",null,"56","0",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
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

            obj = new Static("staSearch","20","15","100","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("검색");
            obj.set_cssclass("sta_WF_condition01");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchId","staSearch:10","15","140","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_innerdataset("dsSearchCbo");
            obj.set_codecolumn("value");
            obj.set_datacolumn("text");
            obj.set_text("Combo00");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSearchNm","cboSearchId:10","15","1400","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divSiteResult","50","divSearch:0",null,null,"50","37",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Grid("grdSiteList","0","45",null,null,"0","0",null,null,null,null,this.divSiteResult.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsList");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_autoupdatetype("itemselect");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\" band=\"left\"/><Column size=\"48\" band=\"left\"/><Column size=\"48\" band=\"left\"/><Column size=\"201\"/><Column size=\"343\"/><Column size=\"107\"/><Column size=\"126\"/><Column size=\"96\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"34\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"순번\"/><Cell col=\"2\" text=\"상태\"/><Cell col=\"3\" text=\"사이트명\"/><Cell col=\"4\" text=\"사이트URL\"/><Cell col=\"5\" text=\"등록자\"/><Cell col=\"6\" text=\"등록일\"/><Cell col=\"7\" text=\"사용여부\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" textAlign=\"center\" text=\"bind:rowCheck\"/><Cell col=\"1\" expr=\"currow+1\" text=\"expr:currow+1\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:rowStatus\"/><Cell col=\"3\" text=\"bind:siteNm\" textAlign=\"left\" editmaxlength=\"20\" displaytype=\"editcontrol\" edittype=\"text\"/><Cell col=\"4\" text=\"bind:siteUrl\" editmaxlength=\"20\" textAlign=\"left\" displaytype=\"editcontrol\" edittype=\"text\"/><Cell col=\"5\" text=\"bind:rgstrId\"/><Cell col=\"6\" textAlign=\"center\" editmaxlength=\"3000\" displaytype=\"normal\" text=\"bind:updtDt\"/><Cell col=\"7\" text=\"bind:useYn\" edittype=\"combo\" displaytype=\"combocontrol\" combodataset=\"dsUseYn\" combocodecol=\"value\" combodatacol=\"text\"/></Band></Format></Formats>");
            this.divSiteResult.addChild(obj.name, obj);

            obj = new Button("btnDeleteRowGroup",null,"14","73","26","0",null,null,null,null,null,this.divSiteResult.form);
            obj.set_taborder("2");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_Row_Delete");
            this.divSiteResult.addChild(obj.name, obj);

            obj = new Button("btnAddRowGroup",null,"14","73","26","btnDeleteRowGroup:5",null,null,null,null,null,this.divSiteResult.form);
            obj.set_taborder("1");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_Row_Add");
            this.divSiteResult.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_00_00","90","0","60","45",null,null,null,null,null,null,this.divSiteResult.form);
            obj.set_taborder("3");
            obj.set_text("h 45");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divSiteResult.addChild(obj.name, obj);

            obj = new Static("staGridRowCnt","0","0","150","45",null,null,null,null,null,null,this.divSiteResult.form);
            obj.set_taborder("4");
            obj.set_text("총 0건");
            obj.set_cssclass("sta_WF_subTxt");
            this.divSiteResult.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divSiteResult.form
            obj = new Layout("default","",0,0,this.divSiteResult.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.grdSiteList.set_taborder("0");
                p.grdSiteList.set_binddataset("dsList");
                p.grdSiteList.set_autofittype("col");
                p.grdSiteList.set_autoenter("select");
                p.grdSiteList.set_autoupdatetype("itemselect");
                p.grdSiteList.move("0","45",null,null,"0","0");

                p.btnDeleteRowGroup.set_taborder("2");
                p.btnDeleteRowGroup.set_text("행삭제");
                p.btnDeleteRowGroup.set_cssclass("btn_WF_Row_Delete");
                p.btnDeleteRowGroup.move(null,"14","73","26","0",null);

                p.btnAddRowGroup.set_taborder("1");
                p.btnAddRowGroup.set_text("행추가");
                p.btnAddRowGroup.set_cssclass("btn_WF_Row_Add");
                p.btnAddRowGroup.move(null,"14","73","26","btnDeleteRowGroup:5",null);

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

                p.staGridRowCnt.set_taborder("4");
                p.staGridRowCnt.set_text("총 0건");
                p.staGridRowCnt.set_cssclass("sta_WF_subTxt");
                p.staGridRowCnt.move("0","0","150","45",null,null);
            	}
            );
            this.divSiteResult.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divSiteResult.form
            obj = new Layout("screen00","",0,0,this.divSiteResult.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divSiteResult.form.addLayout(obj.name, obj);
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
                p.staTitle.set_text("사이트 관리");
                p.staTitle.set_cssclass("sta_WF_compTitle01");
                p.staTitle.move("50","0","500","58",null,null);

                p.divSearch.set_taborder("2");
                p.divSearch.set_text("");
                p.divSearch.move("50","58",null,"70","50",null);

                p.divSiteResult.set_taborder("3");
                p.divSiteResult.set_text("");
                p.divSiteResult.set_cssclass("div_WF_Area");
                p.divSiteResult.move("50","divSearch:0",null,null,"50","37");
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
            obj = new BindItem("item0","divSearch.form.cboSearchId","value","dsSearch","searchType");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.edtSearchNm","value","dsSearch","searchKeyword");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SITE_1010M.xfdl","lib::common.xjs");
        this.registerScript("SITE_1010M.xfdl", function() {
        /**
        *  사이트 관리
        *  MenuPath      관리 메뉴 > 사이트 관리
        *  FileName      SITE_1010M.xfdl
        *  Creator 	     yuyr
        *  CreateDate    2023.11.24
        *  Desction      그리드 엑셀 업로드
        ************** 소스 수정 이력 ***********************************************
        *  date          Modifier    Description
        *******************************************************************************
        *  2023.11.24    yuyr 	 최초 생성
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
        	this.gfnLoadCombo("loadCombo", "dsSearchCbo=BNR:SITE_SEARCH_TY:A dsUseYn=SM:USE_YN:A", "fnComboCallback");
        };

        /************************************************************************************************
        * TRANSACTION 서비스 호출 처리
        ************************************************************************************************/
        /**
         * description 사이트 관리 조회
        */
        this.fnSearch = function ()
        {
        	var strSvcId    = "getSiteManageList";
        	var strSvcUrl   = "bnr/site/getSiteManageList.do";
        	var inData      = "dsSearch";
        	var outData     = "dsList";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        /**
         * description 사이트 관리 저장
        */
        this.fnSave = function ()
        {
        	var strSvcId    = "saveSiteManageList";
        	var strSvcUrl   = "bnr/site/saveSiteManageList.do";
        	var inData      = "dsList";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        /************************************************************************************************
         * CALLBACK 콜백 처리부분(Transaction, Popup)
        ************************************************************************************************/

        this.fnComboCallback = function (svcId, errorCode, errorMsg)
        {
            if (svcId == "loadCombo") {
                this.fnSearch();
            }
        };

        this.fnCallback = function (svcId, errorCode, errorMsg)
        {
            switch (svcId) {
                case "getSiteManageList":
        			//총 건수 계산
        			this.gfnRowCount(this.dsList, this.divSiteResult.form.staGridRowCnt);
                    break;
                case "saveSiteManageList":
                    if (this.callbackMsg == "success") {
                        this.gfnAlert("CM_MSG_SAVE_SUCCESS");  // 저장 되었습니다.
        				this.gfnRowCount(this.dsList, this.divSiteResult.form.staGridRowCnt);
                        this.fnSearch();
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
         * description 그룹 행추가 클릭
        */
        this.divCode_btnAddRowGroup_onclick = function(obj,e)
        {
        	this.fnAddRow();
        };

        /**
         * description 그룹 행삭제 클릭
        */
        this.divCode_btnDeleteRowGroup_onclick = function(obj,e)
        {
        	this.fnDeleteRow();
        };


        /**
         * description 조회버튼 클릭
        */
        this.btnSearch_onclick = function(obj,e)
        {
            this.fnSearch();
        };

        /**
         * description 그리드해드 클릭
        */
        this.divCode_grdCodeHeader_onheadclick = function(obj,e)
        {
        	this.gfnSetGridCheckAll(obj, e, "rowCheck");
        };

        /**
         * description 저장버튼 클릭
        */
        this.btnSave_onclick = function(obj,e)
        {
        	this.fnBeforeSave();
        };

        /**
         * description 엔터키 이벤트
        */
        this.divSearch_edtSearchNm_onchanged = function(obj,e)
        {
        	if(e.keycode==13){
        		this.btnSearch_onclick();
        	}
        };

        /************************************************************************************************
        * 사용자 FUNCTION 영역
        ************************************************************************************************/
        this.fnAddRow = function ()
        {
            this.gfnInsertRow(this.dsList, "last");
            var i = this.dsList.rowposition;
            this.dsList.setColumn(i, "useYn", "Y");
        	this.dsSearch.clearData();
        	this.dsSearch.addRow();
        };


        this.fnDeleteRow = function ()
        {
        	this.gfnDeleteRow(this.dsList);
        };


        this.fnBeforeSave = function ()
        {
        	// 유효성 검사
            if (!this.fnValidate()) {
                return;
            }

            this.gfnAlert("CM_CFM_BEFORE_SAVE", "", "", {trueFunc: "fnSave", falseFunc: ""});  // 변경된 내역을 저장 하시겠습니까?
        };


        this.fnValidate = function ()
        {
            if (this.dsList.rowcount == 0 || !this.gfnDsIsUpdated(this.dsList)) {
                this.gfnAlert("CM_MSG_SAVE_NODATA");  // 저장할 데이터가 없습니다.
                return false;
            }

        	if (!this.gfnDsIsUpdated(this.dsList)) {
        		this.gfnAlert("CM_MSG_SAVE_NOCHANGE");  // 변경된 내역이 없습니다.
        		return false;
        	}

            var args = [
                ["siteNm", "NULL|MAX_LEN:100", ""],
                ["siteUrl", "NULL|MAX_LEN:2000", ""],
                ["useYn", "NULL|MAX_LEN:1", ""],
            ];

            return this.gfnCheckGrid(this.divSiteResult.form.grdSiteList, args, "");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnSave.addEventHandler("onclick",this.btnSave_onclick,this);
            this.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
            this.staTitle.addEventHandler("onclick",this.staTitle_onclick,this);
            this.divSearch.form.staBg.addEventHandler("onclick",this.div_Search_Static00_onclick,this);
            this.divSearch.form.Static15_01_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.divSearch.form.staSearch.addEventHandler("onclick",this.row1_Div00_Static01_onclick,this);
            this.divSearch.form.cboSearchId.addEventHandler("onitemchanged",this.divSearch_systemIdCombo_onitemchanged,this);
            this.divSearch.form.cboSearchId.addEventHandler("onkeyup",this.divSearch_edtSearchNm_onchanged,this);
            this.divSearch.form.edtSearchNm.addEventHandler("onkeyup",this.divSearch_Div00_edt_03_onkeyup,this);
            this.divSearch.form.edtSearchNm.addEventHandler("onchanged",this.divSearch_edtSearchNm_onchanged,this);
            this.divSiteResult.form.grdSiteList.addEventHandler("onheadclick",this.divCode_grdCodeHeader_onheadclick,this);
            this.divSiteResult.form.btnDeleteRowGroup.addEventHandler("onclick",this.divCode_btnDeleteRowGroup_onclick,this);
            this.divSiteResult.form.btnAddRowGroup.addEventHandler("onclick",this.divCode_btnAddRowGroup_onclick,this);
            this.divSiteResult.form.Static04_00_00_00_00.addEventHandler("onclick",this.Static31_onclick,this);
        };
        this.loadIncludeScript("SITE_1010M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
