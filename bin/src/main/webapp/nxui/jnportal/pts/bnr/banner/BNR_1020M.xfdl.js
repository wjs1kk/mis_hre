(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("BNR_1020M");
            this.set_titletext("배너 조회");
            this.set_cssclass("frm_WF_comp");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj.set_updatecontrol("true");
            obj._setContents("<ColumnInfo><Column id=\"searchType\" type=\"STRING\" size=\"256\"/><Column id=\"searchKeyword\" type=\"STRING\" size=\"256\"/><Column id=\"bnrId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"rowCheck\" type=\"STRING\" size=\"256\"/><Column id=\"bnrNm\" type=\"STRING\" size=\"256\"/><Column id=\"bnrUrl\" type=\"STRING\" size=\"256\"/><Column id=\"bnrId\" type=\"STRING\" size=\"256\"/><Column id=\"rgstDt\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"bnrOrd\" type=\"STRING\" size=\"256\"/><Column id=\"rowNum\" type=\"STRING\" size=\"256\"/><Column id=\"rgstId\" type=\"STRING\" size=\"256\"/><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"memberId\" type=\"STRING\" size=\"256\"/><Column id=\"bnrImg\" type=\"STRING\" size=\"256\"/><Column id=\"bnrDesc\" type=\"STRING\" size=\"256\"/><Column id=\"updtrDt\" type=\"STRING\" size=\"256\"/><Column id=\"bnrImgFile\" type=\"STRING\" size=\"256\"/><Column id=\"rgstrId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUseYn", this);
            obj._setContents("<ColumnInfo><Column id=\"LINE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"LINE_CODE_NM_KR\" type=\"STRING\" size=\"256\"/><Column id=\"LINE_CODE_NM_EN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"LINE_CODE\">Y</Col><Col id=\"LINE_CODE_NM_KR\">사용</Col><Col id=\"LINE_CODE_NM_EN\">use</Col></Row><Row><Col id=\"LINE_CODE\">N</Col><Col id=\"LINE_CODE_NM_KR\">미사용</Col><Col id=\"LINE_CODE_NM_EN\">unused</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearchCbo", this);
            obj.set_updatecontrol("true");
            obj._setContents("<ColumnInfo><Column id=\"text\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","50","58",null,"60","50",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0",null,"50","0",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_bg");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta_001","25","8","110","34",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("검색");
            obj.set_cssclass("sta_WF_condition01");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboType","sta_001:0","11","8.90%","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_codecolumn("value");
            obj.set_datacolumn("text");
            obj.set_innerdataset("dsSearchCbo");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtKeyword","cboType:4.9809999999999945","11",null,"26","50",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static15_01_00_00","230","56","50","12",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("h 12");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divResult","50","divSearch:0",null,"510","50",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList","0","37",null,null,"0","34",null,null,null,null,this.divResult.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsList");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\" band=\"left\"/><Column size=\"220\"/><Column size=\"444\"/><Column size=\"99\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"100\"/></Columns><Rows><Row size=\"23\" band=\"head\"/><Row size=\"23\" band=\"head\"/><Row size=\"33\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"순번\"/><Cell col=\"1\" rowspan=\"2\" text=\"배너명\"/><Cell col=\"2\" rowspan=\"2\" text=\"배너URL\"/><Cell col=\"3\" rowspan=\"2\" text=\"등록자\"/><Cell col=\"4\" rowspan=\"2\" text=\"등록일\"/><Cell col=\"5\" rowspan=\"2\" text=\"우선순위\"/><Cell col=\"6\" rowspan=\"2\" text=\"사용여부\" edittype=\"none\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\" text=\"expr:currow+1\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:bnrNm\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:bnrUrl\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:rgstrId\"/><Cell col=\"4\" text=\"bind:rgstDt\"/><Cell col=\"5\" text=\"bind:bnrOrd\" displaytype=\"normal\" edittype=\"none\"/><Cell col=\"6\" text=\"bind:useYn\" displaytype=\"checkboxcontrol\" checkboxfalsevalue=\"N\" checkboxtruevalue=\"Y\"/></Band></Format></Formats>");
            this.divResult.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_00","110","-8","60","45",null,null,null,null,null,null,this.divResult.form);
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

            obj = new Static("Static09","0","0","100",null,null,"478",null,null,null,null,this.divResult.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_subTitle01");
            obj.set_text("검색결과");
            this.divResult.addChild(obj.name, obj);

            obj = new Static("staGridRowCnt","Static09:5","3","100","27",null,null,null,null,null,null,this.divResult.form);
            obj.set_taborder("3");
            obj.set_text("(총 0건)");
            obj.set_cssclass("sta_WF_subResult");
            this.divResult.addChild(obj.name, obj);

            obj = new Button("btn_grdAdd",null,"6","100","26","0",null,null,null,null,null,this.divResult.form);
            obj.set_taborder("4");
            obj.set_text("배너추가");
            obj.set_cssclass("btn_WF_grdAdd");
            this.divResult.addChild(obj.name, obj);

            obj = new Static("Static02",null,"0","50","753","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("W\r\n 50");
            obj.set_visible("false");
            obj.set_background("antiquewhite");
            obj.set_color("blue");
            this.addChild(obj.name, obj);

            obj = new Static("Static34","0","0","50","594",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("W 50");
            obj.set_visible("false");
            obj.set_background("antiquewhite");
            obj.set_color("blue");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"20","65","28","50",null,null,null,null,null,this);
            obj.set_text("조회");
            obj.set_cssclass("");
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle","50","0","500","58",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("배너 조회");
            obj.set_cssclass("sta_WF_compTitle01");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",1032,72,this.divSearch.form,function(p){});
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
                p.grdList.move("0","37",null,null,"0","34");

                p.Static04_00_00_00.set_taborder("1");
                p.Static04_00_00_00.set_text("h 45");
                p.Static04_00_00_00.set_visible("false");
                p.Static04_00_00_00.set_background("aqua");
                p.Static04_00_00_00.set_color("blue");
                p.Static04_00_00_00.set_textAlign("center");
                p.Static04_00_00_00.set_verticalAlign("middle");
                p.Static04_00_00_00.set_opacity("0.7");
                p.Static04_00_00_00.set_font("normal 12px/normal \"Arial\"");
                p.Static04_00_00_00.move("110","-8","60","45",null,null);

                p.Static09.set_taborder("2");
                p.Static09.set_cssclass("sta_WF_subTitle01");
                p.Static09.set_text("검색결과");
                p.Static09.move("0","0","100",null,null,"478");

                p.staGridRowCnt.set_taborder("3");
                p.staGridRowCnt.set_text("(총 0건)");
                p.staGridRowCnt.set_cssclass("sta_WF_subResult");
                p.staGridRowCnt.move("Static09:5","3","100","27",null,null);

                p.btn_grdAdd.set_taborder("4");
                p.btn_grdAdd.set_text("배너추가");
                p.btn_grdAdd.set_cssclass("btn_WF_grdAdd");
                p.btn_grdAdd.move(null,"6","100","26","0",null);
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
            obj = new Layout("default","Desktop_screen",1280,700,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("배너 조회");
                p.set_cssclass("frm_WF_comp");

                p.divSearch.set_taborder("1");
                p.divSearch.set_cssclass("");
                p.divSearch.set_text("");
                p.divSearch.move("50","58",null,"60","50",null);

                p.divResult.set_taborder("0");
                p.divResult.set_text("");
                p.divResult.move("50","divSearch:0",null,"510","50",null);

                p.Static02.set_taborder("2");
                p.Static02.set_text("W\r\n 50");
                p.Static02.set_visible("false");
                p.Static02.set_background("antiquewhite");
                p.Static02.set_color("blue");
                p.Static02.move(null,"0","50","753","0",null);

                p.Static34.set_taborder("3");
                p.Static34.set_text("W 50");
                p.Static34.set_visible("false");
                p.Static34.set_background("antiquewhite");
                p.Static34.set_color("blue");
                p.Static34.move("0","0","50","594",null,null);

                p.btnSearch.set_text("조회");
                p.btnSearch.set_cssclass("");
                p.btnSearch.set_taborder("4");
                p.btnSearch.move(null,"20","65","28","50",null);

                p.staTitle.set_taborder("5");
                p.staTitle.set_text("배너 조회");
                p.staTitle.set_cssclass("sta_WF_compTitle01");
                p.staTitle.move("50","0","500","58",null,null);
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
            obj = new BindItem("item0","divSearch.form.cboType","value","dsSearch","searchType");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.edtKeyword","value","dsSearch","searchKeyword");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("BNR_1020M.xfdl","lib::common.xjs");
        this.registerScript("BNR_1020M.xfdl", function() {
        /**
        *  배너 조회
        *  MenuPath      관리 메뉴 > 배너 및 팝업관리
        *  FileName      BNR_1020M.xfdl
        *  Creator 	     yuyr
        *  CreateDate    2023.11.20
        *  Desction      배너 조회
        ************** 소스 수정 이력 ***********************************************
        *  date          Modifier    Description
        *******************************************************************************
        *  2023.11.20    yuyr 	 최초 생성
        *******************************************************************************/

        this.executeIncludeScript("lib::common.xjs"); /*include "lib::common.xjs"*/;
        this.bnrId = "";

        /***********************************************************************************************
        * FORM EVENT 영역(onload, onbeforeclose)
        /***********************************************************************************************/
        /**
         * description 화면 onload
        */
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnLoad(this);
        	this.gfnLoadCombo("loadCombo", "dsSearchCbo=BNR:BNR_SEARCH_TY:A" , "fnCallback");
        	this.fnSearch();
        };

        /************************************************************************************************
        * TRANSACTION 서비스 호출 처리
        ************************************************************************************************/
        /**
         * description 조회
         */
        this.fnSearch = function()
        {
        	this.gfnTransaction("getBannerList", "bnr/banner/getBannerList.do", "dsSearch", "dsList", "", "fnCallback");
        };


        /************************************************************************************************
         * CALLBACK 콜백 처리부분(Transaction, Popup)
         ************************************************************************************************/
        /**
         * description Transaction CallBack 함수
        */

        this.fnCallback = function (sSvcId, nErrorCode, sErrorMsg)
        {

        	switch (sSvcId) {
        	   case "getBannerList":
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
         * description 그리드 행 더블클릭 상세조회
        */

        this.divResult_grdList_oncelldblclick = function(obj,e)
        {
        	var param = {
        		bnrId: this.dsList.getColumn(e.row, "bnrId"),
        	};

        	nexacro.getApplication().openNewTab("BNR_1010M", "배너 상세조회", "pts::bnr/banner/BNR_1010M.xfdl", param , "관리메뉴 > 관리자 > 배너 상세조회", "advtManage");
        };

        /************************************************************************************************
        * 사용자 FUNCTION 영역
        ************************************************************************************************/
        /**
         * description 엔터키 검색 이벤트
        */
        this.divSearch_onkeyup = function(obj,e)
        {
        	if(e.keycode==13){
        		this.btnSearch_onclick();
        	}
        };

        /**
         * description 배너추가 이동 이벤트
        */
        this.divResult_btn_grdAdd_onclick = function(obj,e)
        {
        	var sMenuId = "BNR_1010M";
        	var url = "pts::bnr/banner/BNR_1010M.xfdl";
        	nexacro.getApplication().openNewTab(sMenuId, "배너 추가", url , "", "관리메뉴 > 관리자 > 배너 및 팝업관리", "advtManage");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.addEventHandler("onkeyup",this.divSearch_onkeyup,this);
            this.divSearch.form.Static00.addEventHandler("onclick",this.div_Search_Static00_onclick,this);
            this.divSearch.form.sta_001.addEventHandler("onclick",this.div_Search_Static01_onclick,this);
            this.divSearch.form.edtKeyword.addEventHandler("onchanged",this.div_Search_SCH_RQST_ID_onchanged,this);
            this.divSearch.form.Static15_01_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.divResult.form.grdList.addEventHandler("oncelldblclick",this.divResult_grdList_oncelldblclick,this);
            this.divResult.form.Static04_00_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.divResult.form.Static09.addEventHandler("onclick",this.Static09_onclick,this);
            this.divResult.form.btn_grdAdd.addEventHandler("onclick",this.divResult_btn_grdAdd_onclick,this);
            this.Static02.addEventHandler("onclick",this.Static02_onclick,this);
            this.Static34.addEventHandler("onclick",this.Static02_onclick,this);
            this.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
            this.staTitle.addEventHandler("onclick",this.sta_title_onclick,this);
        };
        this.loadIncludeScript("BNR_1020M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
