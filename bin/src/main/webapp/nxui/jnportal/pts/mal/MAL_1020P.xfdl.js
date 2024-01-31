(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("MAL_1020P");
            this.set_titletext("메일 템플릿 조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(900,780);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj.set_updatecontrol("true");
            obj._setContents("<ColumnInfo><Column id=\"emlTmpltId\" type=\"STRING\" size=\"256\"/><Column id=\"emlTmpltNm\" type=\"STRING\" size=\"256\"/><Column id=\"emlTmpltCn\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"rgstrId\" type=\"STRING\" size=\"256\"/><Column id=\"rtstDt\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj.set_updatecontrol("true");
            obj._setContents("<ColumnInfo><Column id=\"searchType\" type=\"STRING\" size=\"256\"/><Column id=\"searchKeyword\" type=\"STRING\" size=\"256\"/><Column id=\"sndStrDtF\" type=\"STRING\" size=\"256\"/><Column id=\"sndStrDtT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divPopup","0","0","900","780",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Static("staPopupTitle","0","0",null,"50","0",null,null,null,null,null,this.divPopup.form);
            obj.set_taborder("0");
            obj.set_text("메일 템플릿 조회");
            obj.set_cssclass("sta_WF_popupTitle");
            this.divPopup.addChild(obj.name, obj);

            obj = new Div("divSearch","32","80",null,"97","28",null,null,null,null,null,this.divPopup.form);
            obj.set_taborder("1");
            obj.set_cssclass("div_WF_popup");
            obj.set_text("");
            this.divPopup.addChild(obj.name, obj);

            obj = new Combo("cboSearch","10","49","140","26",null,null,null,null,null,null,this.divPopup.form.divSearch.form);
            obj.set_taborder("2");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divPopup_form_divSearch_form_cboSearch_innerdataset = new nexacro.NormalDataset("divPopup_form_divSearch_form_cboSearch_innerdataset", obj);
            divPopup_form_divSearch_form_cboSearch_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">템플릿 명</Col></Row><Row><Col id=\"datacolumn\">템플릿 ID</Col><Col id=\"codecolumn\">emlTmpltId</Col></Row></Rows>");
            obj.set_innerdataset(divPopup_form_divSearch_form_cboSearch_innerdataset);
            obj.set_value("");
            obj.set_index("-1");
            this.divPopup.form.divSearch.addChild(obj.name, obj);

            obj = new Static("staSubTitle","20",null,"169","39",null,"cboSearch:0",null,null,null,null,this.divPopup.form.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_subTitle01");
            this.divPopup.form.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"9","65","28","20",null,null,null,null,null,this.divPopup.form.divSearch.form);
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_icoSearch");
            obj.set_taborder("1");
            this.divPopup.form.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSearch","cboSearch:10","49","658","26",null,null,null,null,null,null,this.divPopup.form.divSearch.form);
            obj.set_taborder("3");
            this.divPopup.form.divSearch.addChild(obj.name, obj);

            obj = new Button("btnPopupClose","452",null,"65","28",null,"23",null,null,null,null,this.divPopup.form);
            obj.set_text("닫기");
            obj.set_cssclass("");
            obj.set_visible("true");
            obj.set_taborder("2");
            this.divPopup.addChild(obj.name, obj);

            obj = new Button("btnAdd","384",null,"65","28",null,"23",null,null,null,null,this.divPopup.form);
            obj.set_taborder("3");
            obj.set_text("선택");
            obj.set_cssclass("btn_WF_icoSelect");
            this.divPopup.addChild(obj.name, obj);

            obj = new Div("divResult","30","203",null,null,"30","120",null,null,null,null,this.divPopup.form);
            obj.set_taborder("4");
            obj.set_text("");
            obj.set_cssclass("div_WF_popup");
            this.divPopup.addChild(obj.name, obj);

            obj = new Static("Static09","20","8","169",null,null,"413",null,null,null,null,this.divPopup.form.divResult.form);
            obj.set_taborder("0");
            obj.set_text("검색결과");
            obj.set_cssclass("sta_WF_subTitle01");
            this.divPopup.form.divResult.addChild(obj.name, obj);

            obj = new Static("staGridRowCnt","120","7","149",null,null,"413",null,null,null,null,this.divPopup.form.divResult.form);
            obj.set_taborder("1");
            obj.set_text("(총 0건)");
            obj.set_cssclass("sta_WF_subResult");
            this.divPopup.form.divResult.addChild(obj.name, obj);

            obj = new Grid("grdList","0","44",null,null,"0","0",null,null,null,null,this.divPopup.form.divResult.form);
            obj.set_taborder("2");
            obj.set_binddataset("dsList");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_autoupdatetype("itemselect");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"150\"/><Column size=\"400\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"34\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" edittype=\"none\" text=\"순번\"/><Cell col=\"1\" text=\"템플릿 ID\"/><Cell col=\"2\" text=\"템플릿 명\"/><Cell col=\"3\" text=\"작성일\"/><Cell col=\"4\" text=\"작성자\"/><Cell col=\"5\" text=\"사용여부\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"expr:currow+1\" expr=\"currow+1\"/><Cell col=\"1\" text=\"bind:emlTmpltId\"/><Cell col=\"2\" text=\"bind:emlTmpltNm\"/><Cell col=\"3\" text=\"bind:rtstDt\"/><Cell col=\"4\" text=\"bind:rgstrId\"/><Cell col=\"5\" text=\"bind:useYn\"/></Band></Format></Formats>");
            this.divPopup.form.divResult.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divPopup.form.divSearch.form
            obj = new Layout("default","",1032,72,this.divPopup.form.divSearch.form,function(p){});
            this.divPopup.form.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divPopup.form.divResult.form
            obj = new Layout("default","",0,0,this.divPopup.form.divResult.form,function(p){});
            this.divPopup.form.divResult.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divPopup.form
            obj = new Layout("default","",0,0,this.divPopup.form,function(p){});
            this.divPopup.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item3","divPopup.form.divSearch.form.cboSearch","value","dsSearch","searchType");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divPopup.form.divSearch.form.edtSearch","value","dsSearch","searchKeyword");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("MAL_1020P.xfdl","lib::common.xjs");
        this.registerScript("MAL_1020P.xfdl", function() {
        /**
        *  Popup Template
        *  MenuPath      -
        *  FileName      MAL_1020P.xfdl
        *  Creator 	     kangjw
        *  CreateDate    2023.12.13
        *  Desction      기관코드 조회
        ************** 소스 수정 이력 ***********************************************
        *  date          Modifier    Description
        *******************************************************************************
        *  2023.12.13    kangjw 	 최초 생성
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

        	this.btn_search_onclick();
        };

        /************************************************************************************************
        * TRANSACTION 서비스 호출 처리
        ************************************************************************************************/
        /**
         * description 템플릿 목록 조회
        */
        this.fnSearch = function ()
        {
        	var strSvcId    = "getTmpltList";
        	var strSvcUrl   = "mal/emlSndMaster/getTmpltList.do";
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
         * description Transaction CallBack 함수
        */
        this.fnCallback = function (sSvcId, nErrorCode, sErrorMsg)
        {
        	switch (sSvcId) {
        		case "getTmpltList":
        			//총 건수 계산
        			this.gfnRowCount(this.dsList, this.divPopup.form.divResult.form.staGridRowCnt);
        		break;
        		default:
        		break;
        	}
        };

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/

        /**
         * description 선택버튼
        */

        this.divPopup_btnAdd_onclick = function(obj,e)
        {
        	this.fnValidation();
        };

        /**
         * description 닫기버튼
        */
        this.divPopup_btnPopupClose_onclick = function(obj,e)
        {
        	this.close();
        };

        this.btn_search_onclick = function(obj,e)
        {
        	this.fnSearch();
        };

        this.fnValidation = function ()
        {
        	if(this.dsList.getColumn(this.dsList.rowposition, "useYn") == 'N'){
        		this.gfnAlert("CM_MSG_NOT_USED");
        	} else {
        		this.opener.dsList.setColumn(0, "emlTmpltId", this.dsList.getColumn(this.dsList.rowposition, "emlTmpltId"));
        		this.opener.dsList.setColumn(0, "emlTmpltNm", this.dsList.getColumn(this.dsList.rowposition, "emlTmpltNm"));
        		this.opener.dsList.setColumn(0, "sndCn", this.dsList.getColumn(this.dsList.rowposition, "emlTmpltCn"));

        		var oRtn = new Object();
        		this.gfnPopupClose(oRtn);
        		this.close();
        	}
        };


        /**
         * description 엔터키 이벤트
        */
        this.onkeyup = function(obj,e)
        {
        	if(e.keycode==13){
        		this.btn_search_onclick();
        	}
        };

        this.divResult_grdList_oncelldblclick = function(obj,e)
        {
        	if(this.dsList.getColumn(this.dsList.rowposition, "useYn") == 'N'){
        		this.gfnAlert("CM_MSG_NOT_USED");
        	} else {
        		this.opener.dsList.setColumn(0, "emlTmpltId", this.dsList.getColumn(this.dsList.rowposition, "emlTmpltId"));
        		this.opener.dsList.setColumn(0, "emlTmpltNm", this.dsList.getColumn(this.dsList.rowposition, "emlTmpltNm"));
        		this.opener.dsList.setColumn(0, "sndCn", this.dsList.getColumn(this.dsList.rowposition, "emlTmpltCn"));

        		var oRtn = new Object();
        		this.gfnPopupClose(oRtn);
        		this.close();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divPopup.form.divSearch.form.cboSearch.addEventHandler("onkeyup",this.onkeyup,this);
            this.divPopup.form.divSearch.form.staSubTitle.addEventHandler("onclick",this.Static09_onclick,this);
            this.divPopup.form.divSearch.form.btnSearch.addEventHandler("onclick",this.btn_search_onclick,this);
            this.divPopup.form.divSearch.form.edtSearch.addEventHandler("onkeyup",this.onkeyup,this);
            this.divPopup.form.btnPopupClose.addEventHandler("onclick",this.divPopup_btnPopupClose_onclick,this);
            this.divPopup.form.btnAdd.addEventHandler("onclick",this.divPopup_btnAdd_onclick,this);
            this.divPopup.form.divResult.form.Static09.addEventHandler("onclick",this.Static09_onclick,this);
            this.divPopup.form.divResult.form.grdList.addEventHandler("oncelldblclick",this.divResult_grdList_oncelldblclick,this);
        };
        this.loadIncludeScript("MAL_1020P.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
