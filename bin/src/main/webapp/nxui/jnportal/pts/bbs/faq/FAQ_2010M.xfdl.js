(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("FAQ_2010M");
            this.set_titletext("FAQ 목록");
            this.set_cssclass("frm_WF_comp");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj.set_updatecontrol("true");
            obj._setContents("<ColumnInfo><Column id=\"searchType\" type=\"STRING\" size=\"256\"/><Column id=\"searchKeyword\" type=\"STRING\" size=\"256\"/><Column id=\"faqId\" type=\"STRING\" size=\"256\"/><Column id=\"clsCd\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearchCombo", this);
            obj.set_updatecontrol("true");
            obj._setContents("<ColumnInfo><Column id=\"value\" type=\"STRING\" size=\"256\"/><Column id=\"text\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj.set_updatecontrol("true");
            obj._setContents("<ColumnInfo><Column id=\"rowCheck\" type=\"STRING\" size=\"256\"/><Column id=\"rowStatus\" type=\"STRING\" size=\"256\"/><Column id=\"faqId\" type=\"STRING\" size=\"256\"/><Column id=\"clsCd\" type=\"STRING\" size=\"256\"/><Column id=\"clsNm\" type=\"STRING\" size=\"256\"/><Column id=\"qstnTtl\" type=\"STRING\" size=\"256\"/><Column id=\"qstnCn\" type=\"STRING\" size=\"256\"/><Column id=\"answrCn\" type=\"STRING\" size=\"256\"/><Column id=\"rdcnt\" type=\"STRING\" size=\"256\"/><Column id=\"atchFileId\" type=\"STRING\" size=\"256\"/><Column id=\"faqSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"faqSttsNm\" type=\"STRING\" size=\"256\"/><Column id=\"rgstDt\" type=\"STRING\" size=\"256\"/><Column id=\"rgstrId\" type=\"STRING\" size=\"256\"/><Column id=\"rgstrMemberId\" type=\"STRING\" size=\"256\"/><Column id=\"updtDt\" type=\"STRING\" size=\"256\"/><Column id=\"updtrId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsClsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"value\" type=\"STRING\" size=\"256\"/><Column id=\"text\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btnSearch",null,"20","65","28","50",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle","50","0","500","58",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("FAQ 목록");
            obj.set_cssclass("sta_WF_compTitle01");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","50","58",null,"56","50",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staBg","0","0",null,"56","0",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_bg");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static15_01_00_00","20","55","50",null,null,"40",null,null,null,null,this.divSearch.form);
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

            obj = new Static("staCls","20","15","100","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("분류");
            obj.set_cssclass("sta_WF_condition01");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboCls","staCls:10","15","140","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_innerdataset("dsClsCombo");
            obj.set_codecolumn("value");
            obj.set_datacolumn("text");
            obj.set_value("");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staSearch","20%","15","100","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("검색");
            obj.set_cssclass("sta_WF_condition01");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearch","staSearch:10","15","140","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_innerdataset("dsSearchCombo");
            obj.set_codecolumn("value");
            obj.set_datacolumn("text");
            obj.set_value("");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSearch","cboSearch:10","15","950","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divResult","50","divSearch:15",null,null,"50","37",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList","0","45",null,null,"0","0",null,null,null,null,this.divResult.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsList");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_autoupdatetype("itemselect");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"200\"/><Column size=\"500\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"34\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" edittype=\"none\" text=\"순번\"/><Cell col=\"1\" text=\"분류\"/><Cell col=\"2\" text=\"제목\"/><Cell col=\"3\" text=\"조회수\"/><Cell col=\"4\" text=\"등록일\"/><Cell col=\"5\" text=\"최종수정일\"/><Cell col=\"6\" text=\"작성자\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"expr:currow+1\" expr=\"currow+1\"/><Cell col=\"1\" text=\"bind:clsNm\" textAlign=\"center\" editmaxlength=\"20\" displaytype=\"normal\" edittype=\"none\"/><Cell col=\"2\" text=\"bind:qstnTtl\" editmaxlength=\"20\" textAlign=\"left\" displaytype=\"normal\" edittype=\"none\"/><Cell col=\"3\" text=\"bind:rdcnt\"/><Cell col=\"4\" textAlign=\"center\" editmaxlength=\"3000\" displaytype=\"date\" text=\"bind:rgstDt\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"5\" text=\"bind:updtDt\" edittype=\"none\" displaytype=\"date\" combodataset=\"dsUseYn\" combocodecol=\"value\" combodatacol=\"text\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"6\" text=\"bind:rgstrMemberId\"/></Band></Format></Formats>");
            this.divResult.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_00_00","90","0","60","45",null,null,null,null,null,null,this.divResult.form);
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

            obj = new Static("staGridRowCnt","0","0","150","45",null,null,null,null,null,null,this.divResult.form);
            obj.set_taborder("2");
            obj.set_text("총 0건");
            obj.set_cssclass("sta_WF_subTxt");
            this.divResult.addChild(obj.name, obj);

            obj = new Button("btnRegistration",null,"14","65","28","0",null,null,null,null,null,this.divResult.form);
            obj.set_text("신규");
            obj.set_visible("true");
            obj.set_taborder("3");
            this.divResult.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divResult.form
            obj = new Layout("default","",0,0,this.divResult.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.grdList.set_taborder("0");
                p.grdList.set_binddataset("dsList");
                p.grdList.set_autofittype("col");
                p.grdList.set_autoenter("select");
                p.grdList.set_autoupdatetype("itemselect");
                p.grdList.move("0","45",null,null,"0","0");

                p.Static04_00_00_00_00.set_taborder("1");
                p.Static04_00_00_00_00.set_text("h 45");
                p.Static04_00_00_00_00.set_visible("false");
                p.Static04_00_00_00_00.set_background("aqua");
                p.Static04_00_00_00_00.set_color("blue");
                p.Static04_00_00_00_00.set_textAlign("center");
                p.Static04_00_00_00_00.set_verticalAlign("middle");
                p.Static04_00_00_00_00.set_opacity("0.7");
                p.Static04_00_00_00_00.set_font("normal 12px/normal \"Arial\"");
                p.Static04_00_00_00_00.move("90","0","60","45",null,null);

                p.staGridRowCnt.set_taborder("2");
                p.staGridRowCnt.set_text("총 0건");
                p.staGridRowCnt.set_cssclass("sta_WF_subTxt");
                p.staGridRowCnt.move("0","0","150","45",null,null);

                p.btnRegistration.set_text("신규");
                p.btnRegistration.set_visible("true");
                p.btnRegistration.set_taborder("3");
                p.btnRegistration.move(null,"14","65","28","0",null);
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
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1920,720,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("FAQ 목록");
                p.set_cssclass("frm_WF_comp");

                p.btnSearch.set_taborder("0");
                p.btnSearch.set_text("조회");
                p.btnSearch.move(null,"20","65","28","50",null);

                p.staTitle.set_taborder("1");
                p.staTitle.set_text("FAQ 목록");
                p.staTitle.set_cssclass("sta_WF_compTitle01");
                p.staTitle.move("50","0","500","58",null,null);

                p.divSearch.set_taborder("2");
                p.divSearch.set_text("");
                p.divSearch.move("50","58",null,"56","50",null);

                p.divResult.set_taborder("3");
                p.divResult.set_text("");
                p.divResult.set_cssclass("div_WF_Area");
                p.divResult.move("50","divSearch:15",null,null,"50","37");
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
            obj = new BindItem("item0","divSearch.form.cboCls","value","dsSearch","clsCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.cboSearch","value","dsSearch","searchType");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.edtSearch","value","dsSearch","searchKeyword");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("FAQ_2010M.xfdl","lib::common.xjs");
        this.registerScript("FAQ_2010M.xfdl", function() {
        /**
        *  FAQ 목록
        *  MenuPath      소통광장 - 게시물 관리 - FAQ 목록
        *  FileName      FAQ_2010M.xfdl
        *  Creator 	     woohj
        *  CreateDate    2023.11.28
        *  Desction      FAQ목록
        ************** 소스 수정 이력 ***********************************************
        *  date          Modifier    Description
        *******************************************************************************
        *  2023.11.28    woohj  	 최초 생성
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

        };

        /************************************************************************************************
        * TRANSACTION 서비스 호출 처리
        ************************************************************************************************/
        /**
         * description 콤보 loadCombo
        */
        this.fnLoadCombo = function ()
        {
        	this.gfnLoadCombo("loadCombo", "dsSearchCombo=PTS:SEARCH_TY:A dsClsCombo=PTS:WORK_CATEGORY:C", "fnComboCallback");
        };

        /**
         * description FAQ 목록
        */
        this.fnSearch = function ()
        {
        	var strSvcId    = "getFaqList";
        	var strSvcUrl   = "bbs/faq/getFaqList.do";
        	var inData      = "dsSearch";
        	var outData     = "dsList";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        /************************************************************************************************
         * CALLBACK 콜백 처리부분(Transaction, Popup)
        ************************************************************************************************/
        /**
         * description 콤보 ComboCallback
        */
        this.fnComboCallback = function (svcId, errorCode, errorMsg)
        {
            if (svcId == "loadCombo") {
                this.fnSearch();
            }
        };

        /**
         * description Transaction Callback 함수
        */
        this.fnCallback = function (svcId, errorCode, errorMsg)
        {
            switch (svcId) {
                case "getFaqList":
        			//총 건수 계산
        			this.gfnRowCount(this.dsList, this.divResult.form.staGridRowCnt);
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
         * description 엔터키 이벤트
        */
        this.onkeyup = function(obj,e)
        {
        	if(e.keycode==13){
        		this.btnSearch_onclick();
        	}
        };

        /**
         * description 분류 콤보박스 변경
        */
        this.divSearch_cboCls_onitemchanged = function(obj,e)
        {
        	this.btnSearch_onclick();
        };

        /**
         * description 검색(제목/내용) 콤보박스 변경
        */
        this.divSearch_cboSearch_onitemchanged = function(obj,e)
        {
        	this.btnSearch_onclick();
        };


        /**
         * description 그리드 더블클릭 - 상세페이지 이동
        */
        this.divResult_grdList_oncelldblclick = function(obj,e)
        {
        	var param = {
        		faqId: this.dsList.getColumn(e.row, "faqId")
        	}

        	nexacro.getApplication().openNewTab("FAQ_2020M", "FAQ 상세", "pts::bbs/faq/FAQ_2020M.xfdl", param , "소통광장 > 게시물관리 > FAQ 상세페이지", "");
        };

        /**
         * description 신규 등록 - 상세페이지 이동
        */
        this.divResult_btnRegistration_onclick = function(obj,e)
        {
        	nexacro.getApplication().openNewTab("FAQ_2020M", "FAQ 상세", "pts::bbs/faq/FAQ_2020M.xfdl", "" , "소통광장 > 게시물관리 > FAQ 상세페이지", "");
        };


        /************************************************************************************************
        * 사용자 FUNCTION 영역
        ************************************************************************************************/










        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
            this.staTitle.addEventHandler("onclick",this.staTitle_onclick,this);
            this.divSearch.form.staBg.addEventHandler("onclick",this.div_Search_Static00_onclick,this);
            this.divSearch.form.Static15_01_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.divSearch.form.staCls.addEventHandler("onclick",this.row1_Div00_Static01_onclick,this);
            this.divSearch.form.cboCls.addEventHandler("onkeyup",this.onkeyup,this);
            this.divSearch.form.cboCls.addEventHandler("onitemchanged",this.divSearch_cboCls_onitemchanged,this);
            this.divSearch.form.staSearch.addEventHandler("onclick",this.row1_Div00_Static01_onclick,this);
            this.divSearch.form.cboSearch.addEventHandler("onkeyup",this.divSearch_edtSearchNm_onchanged,this);
            this.divSearch.form.cboSearch.addEventHandler("onitemchanged",this.divSearch_cboSearch_onitemchanged,this);
            this.divSearch.form.edtSearch.addEventHandler("onkeyup",this.onkeyup,this);
            this.divResult.form.grdList.addEventHandler("oncelldblclick",this.divResult_grdList_oncelldblclick,this);
            this.divResult.form.Static04_00_00_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.divResult.form.btnRegistration.addEventHandler("onclick",this.divResult_btnRegistration_onclick,this);
        };
        this.loadIncludeScript("FAQ_2010M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
