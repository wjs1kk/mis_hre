(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("MAL_1010M");
            this.set_titletext(" 메일발송 목록");
            this.set_cssclass("frm_WF_comp");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj.set_updatecontrol("true");
            obj._setContents("<ColumnInfo><Column id=\"emlTtl\" type=\"STRING\" size=\"256\"/><Column id=\"sndDt\" type=\"STRING\" size=\"256\"/><Column id=\"sndTrgtCnt\" type=\"STRING\" size=\"256\"/><Column id=\"sndSttsNm\" type=\"STRING\" size=\"256\"/><Column id=\"emlId\" type=\"STRING\" size=\"256\"/><Column id=\"sndNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj.set_updatecontrol("true");
            obj._setContents("<ColumnInfo><Column id=\"searchType\" type=\"STRING\" size=\"256\"/><Column id=\"searchKeyword\" type=\"STRING\" size=\"256\"/><Column id=\"sndStrDt\" type=\"STRING\" size=\"256\"/><Column id=\"sndEndDt\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btnSearch",null,"20","65","28","50",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle","50","0","500","58",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("메일발송 목록");
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

            obj = new Static("staSearch","20","15","100","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("검색");
            obj.set_cssclass("sta_WF_condition01");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearch","staSearch:10","15","140","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divSearch_form_cboSearch_innerdataset = new nexacro.NormalDataset("divSearch_form_cboSearch_innerdataset", obj);
            divSearch_form_cboSearch_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">제목</Col></Row><Row><Col id=\"datacolumn\">발송자</Col><Col id=\"codecolumn\">sndMembNm</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_cboSearch_innerdataset);
            obj.set_value("");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSearch","cboSearch:10","15","950","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staSearch00","1365","15","100","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("발송일");
            obj.set_cssclass("sta_WF_condition01");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calStrYmd","staSearch00:10","15","118","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_weekformat("일 월 화 수 목 금 토");
            obj.set_daysize("29 29");
            obj.set_headheight("28");
            obj.set_enable("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calEndYmd","calStrYmd:25","15","112","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            obj.set_backgroundcolumn("disabled");
            obj.set_readonly("false");
            obj.set_enable("true");
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
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"500\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"34\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" edittype=\"none\" text=\"순번\"/><Cell col=\"1\" text=\"제목\"/><Cell col=\"2\" text=\"발송일\"/><Cell col=\"3\" text=\"발송자\"/><Cell col=\"4\" text=\"발송대상 수\"/><Cell col=\"5\" text=\"상태\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"expr:currow+1\" expr=\"currow+1\"/><Cell col=\"1\" text=\"bind:emlTtl\"/><Cell col=\"2\" text=\"bind:sndDt\"/><Cell col=\"3\" text=\"bind:sndNm\"/><Cell col=\"4\" text=\"bind:sndTrgtCnt\"/><Cell col=\"5\" text=\"bind:sndSttsNm\"/></Band></Format></Formats>");
            this.divResult.addChild(obj.name, obj);

            obj = new Static("staGridRowCnt","0","0","150","45",null,null,null,null,null,null,this.divResult.form);
            obj.set_taborder("1");
            obj.set_text("총 0건");
            obj.set_cssclass("sta_WF_subTxt");
            this.divResult.addChild(obj.name, obj);

            obj = new Button("btnSms",null,null,"90","28","0","grdList:9",null,null,null,null,this.divResult.form);
            obj.set_taborder("2");
            obj.set_text("메일발송");
            obj.set_cssclass("btn_WF_icoSms");
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

                p.staGridRowCnt.set_taborder("1");
                p.staGridRowCnt.set_text("총 0건");
                p.staGridRowCnt.set_cssclass("sta_WF_subTxt");
                p.staGridRowCnt.move("0","0","150","45",null,null);

                p.btnSms.set_taborder("2");
                p.btnSms.set_text("메일발송");
                p.btnSms.set_cssclass("btn_WF_icoSms");
                p.btnSms.move(null,null,"90","28","0","grdList:9");
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
                p.set_titletext(" 메일발송 목록");
                p.set_cssclass("frm_WF_comp");

                p.btnSearch.set_taborder("0");
                p.btnSearch.set_text("조회");
                p.btnSearch.move(null,"20","65","28","50",null);

                p.staTitle.set_taborder("1");
                p.staTitle.set_text("메일발송 목록");
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
            obj = new BindItem("item0","divSearch.form.cboSearch","value","dsSearch","searchType");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.edtSearch","value","dsSearch","searchKeyword");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.calStrYmd","value","dsSearch","sndStrDt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.calEndYmd","value","dsSearch","sndEndDt");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("MAL_1010M.xfdl","lib::common.xjs");
        this.registerScript("MAL_1010M.xfdl", function() {
        /**
        *  메일발송 목록
        *  MenuPath      메일발송 관리 - 메일발송 목록
        *  FileName      MAL_1010M.xfdl
        *  Creator 	     kangjw
        *  CreateDate    2023.12.11
        *  Desction      메일발송 목록
        ************** 소스 수정 이력 ***********************************************
        *  date          Modifier    Description
        *******************************************************************************
        *  2023.12.11    kangjw  	 최초 생성
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

        	// 이달 1일 세팅, 현재날짜 세팅
        	var currDate = new Date();
        	var year = currDate.getFullYear().toString().padLeft(4, "0");
        	var month = (currDate.getMonth() + 1).toString().padLeft(2, "0");
        	var day = 1;

        	this.dsSearch.setColumn(0,"sndStrDt",(year + month + day));
        	this.dsSearch.setColumn(0,"sndEndDt",(new Date()).getFullYear() + "1231");

        	this.btnSearch_onclick();
        };

        /************************************************************************************************
        * TRANSACTION 서비스 호출 처리
        ************************************************************************************************/


        /**
         * description 메일발송관리 목록
        */
        this.fnSearch = function ()
        {
        	var strSvcId    = "getEmlSndList";
        	var strSvcUrl   = "mal/emlSndMaster/getEmlSndList.do";
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
         * description Transaction Callback 함수
        */
        this.fnCallback = function (svcId, errorCode, errorMsg)
        {
            switch (svcId) {
                case "getEmlSndList":
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

        this.divResult_grdList_oncelldblclick = function(obj,e)
        {
        	var param = { emlId:  this.dsList.getColumn(e.row, "emlId") }
        		nexacro.getApplication().openNewTab("MAL_1030M", "메일발송 이력", "pts::mal/MAL_1030M.xfdl", param, "메일발송 관리 > 메일발송 이력", "");
        };

        this.divResult_btnSms_onclick = function(obj,e)
        {
        	nexacro.getApplication().openNewTab("MAL_1020M", "메일발송", "pts::mal/MAL_1020M.xfdl", "메일발송 관리 > 메일발송", "");
        };
        /************************************************************************************************
        * 사용자 FUNCTION 영역
        ************************************************************************************************/

        this.onkeyup = function(obj,e)
        {

        	if(e.keycode==13){
        		this.btnSearch_onclick()();
        	}
        };





        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
            this.staTitle.addEventHandler("onclick",this.staTitle_onclick,this);
            this.divSearch.form.staBg.addEventHandler("onclick",this.div_Search_Static00_onclick,this);
            this.divSearch.form.Static15_01_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.divSearch.form.staSearch.addEventHandler("onclick",this.row1_Div00_Static01_onclick,this);
            this.divSearch.form.cboSearch.addEventHandler("onkeyup",this.onkeyup,this);
            this.divSearch.form.edtSearch.addEventHandler("onkeyup",this.onkeyup,this);
            this.divSearch.form.staSearch00.addEventHandler("onclick",this.row1_Div00_Static01_onclick,this);
            this.divSearch.form.calEndYmd.addEventHandler("onkeyup",this.onkeyup,this);
            this.divResult.form.grdList.addEventHandler("oncelldblclick",this.divResult_grdList_oncelldblclick,this);
            this.divResult.form.btnSms.addEventHandler("onclick",this.divResult_btnSms_onclick,this);
        };
        this.loadIncludeScript("MAL_1010M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
