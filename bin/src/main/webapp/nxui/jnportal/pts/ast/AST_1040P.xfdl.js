(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("AST_1040P");
            this.set_titletext("자원번호 조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(900,780);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj.set_updatecontrol("true");
            obj._setContents("<ColumnInfo><Column id=\"astDivCd\" type=\"STRING\" size=\"256\"/><Column id=\"searchType\" type=\"STRING\" size=\"256\"/><Column id=\"searchKeyword\" type=\"STRING\" size=\"256\"/><Column id=\"astNo\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearchCbo", this);
            obj.set_updatecontrol("true");
            obj._setContents("<ColumnInfo><Column id=\"text\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj.set_updatecontrol("true");
            obj._setContents("<ColumnInfo><Column id=\"rowCheck\" type=\"STRING\" size=\"256\"/><Column id=\"rowStatus\" type=\"STRING\" size=\"256\"/><Column id=\"astDivCd\" type=\"STRING\" size=\"256\"/><Column id=\"astDivCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"astNo\" type=\"STRING\" size=\"256\"/><Column id=\"astNm\" type=\"STRING\" size=\"256\"/><Column id=\"astQty\" type=\"STRING\" size=\"256\"/><Column id=\"astMngDeptCd\" type=\"STRING\" size=\"256\"/><Column id=\"astMngDeptCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"astMngPicId\" type=\"STRING\" size=\"256\"/><Column id=\"astMngPicIdNm\" type=\"STRING\" size=\"256\"/><Column id=\"rgstDt\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divPopup","0","0","900","780",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Static("staPopupTitle","0","0",null,"50","0",null,null,null,null,null,this.divPopup.form);
            obj.set_taborder("0");
            obj.set_text("자원번호 조회");
            obj.set_cssclass("sta_WF_popupTitle");
            this.divPopup.addChild(obj.name, obj);

            obj = new Div("divSearch","30","140",null,"97","30",null,null,null,null,null,this.divPopup.form);
            obj.set_taborder("1");
            obj.set_cssclass("div_WF_popup");
            obj.set_text("");
            this.divPopup.addChild(obj.name, obj);

            obj = new Static("staSubTitle","20",null,"169","39",null,"46",null,null,null,null,this.divPopup.form.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_subTitle01");
            this.divPopup.form.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"9","65","28","20",null,null,null,null,null,this.divPopup.form.divSearch.form);
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_icoSearch");
            obj.set_taborder("1");
            this.divPopup.form.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboAstDiv","10","49","140","26",null,null,null,null,null,null,this.divPopup.form.divSearch.form);
            obj.set_taborder("2");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divPopup_form_divSearch_form_cboAstDiv_innerdataset = new nexacro.NormalDataset("divPopup_form_divSearch_form_cboAstDiv_innerdataset", obj);
            divPopup_form_divSearch_form_cboAstDiv_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"datacolumn\">회의실</Col><Col id=\"codecolumn\">AST-020-010</Col></Row><Row><Col id=\"datacolumn\">서버</Col><Col id=\"codecolumn\">AST-020-020</Col></Row><Row><Col id=\"codecolumn\">AST-020-030</Col><Col id=\"datacolumn\">컴퓨터</Col></Row><Row><Col id=\"codecolumn\">AST-020-040</Col><Col id=\"datacolumn\">사무실비품</Col></Row></Rows>");
            obj.set_innerdataset(divPopup_form_divSearch_form_cboAstDiv_innerdataset);
            obj.set_text("Combo00");
            this.divPopup.form.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboAstSearch","cboAstDiv:5","49","140","26",null,null,null,null,null,null,this.divPopup.form.divSearch.form);
            obj.set_taborder("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divPopup_form_divSearch_form_cboAstSearch_innerdataset = new nexacro.NormalDataset("divPopup_form_divSearch_form_cboAstSearch_innerdataset", obj);
            divPopup_form_divSearch_form_cboAstSearch_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"datacolumn\">자원명</Col><Col id=\"codecolumn\">AST_NM</Col></Row><Row><Col id=\"datacolumn\">관리부서</Col><Col id=\"codecolumn\">AST_MNG_DEPT_CD</Col></Row><Row><Col id=\"datacolumn\">관리담당자</Col><Col id=\"codecolumn\">AST_MNG_PIC_ID</Col></Row></Rows>");
            obj.set_innerdataset(divPopup_form_divSearch_form_cboAstSearch_innerdataset);
            obj.set_text("Combo00");
            this.divPopup.form.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSearchNm","cboAstSearch:5","49","518","26",null,null,null,null,null,null,this.divPopup.form.divSearch.form);
            obj.set_taborder("4");
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

            obj = new Div("divResult","30","247",null,null,"30","76",null,null,null,null,this.divPopup.form);
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

            obj = new Grid("grdDirectorList","0","45",null,null,"0","0",null,null,null,null,this.divPopup.form.divResult.form);
            obj.set_taborder("2");
            obj.set_binddataset("dsList");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_autoupdatetype("itemselect");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\" band=\"left\"/><Column size=\"58\" band=\"left\"/><Column size=\"121\"/><Column size=\"150\"/><Column size=\"195\"/><Column size=\"98\"/><Column size=\"85\"/><Column size=\"89\"/><Column size=\"101\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"34\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"순번\"/><Cell col=\"2\" text=\"구분\"/><Cell col=\"3\" text=\"자원번호\"/><Cell col=\"4\" text=\"자원명\"/><Cell col=\"5\" text=\"최초등록일\"/><Cell col=\"6\" text=\"수량\"/><Cell col=\"7\" text=\"관리부서\"/><Cell col=\"8\" text=\"관리담당자\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" textAlign=\"center\" text=\"bind:rowCheck\"/><Cell col=\"1\" expr=\"currow+1\" text=\"expr:currow+1\" textAlign=\"center\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"none\" text=\"bind:astDivCdNm\" combodataset=\"dsWorkKindListCbo\" combodatacol=\"text\" textAlign=\"center\" combocodecol=\"value\"/><Cell col=\"3\" text=\"bind:astNo\" textAlign=\"center\" editmaxlength=\"-1\" displaytype=\"normal\" edittype=\"none\" expandshow=\"hide\" expandsize=\"16\"/><Cell col=\"4\" text=\"bind:astNm\" editmaxlength=\"20\" textAlign=\"center\" displaytype=\"normal\"/><Cell col=\"5\" text=\"bind:rgstDt\" edittype=\"none\" displaytype=\"normal\" combodataset=\"dsPowCbo\" combodatacol=\"text\" textAlign=\"center\" combocodecol=\"value\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"6\" text=\"bind:astQty\" edittype=\"none\" displaytype=\"normal\" combodataset=\"dsUseYn\" combocodecol=\"value\" combodatacol=\"text\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:astMngDeptCdNm\"/><Cell col=\"8\" text=\"bind:astMngPicIdNm\"/></Band></Format></Formats>");
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
            obj = new BindItem("item0","divPopup.form.divSearch.form.cboAstDiv","value","dsSearch","astDivCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divPopup.form.divSearch.form.cboAstSearch","value","dsSearch","searchType");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divPopup.form.divSearch.form.edtSearchNm","value","dsSearch","searchKeyword");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("AST_1040P.xfdl","lib::common.xjs");
        this.registerScript("AST_1040P.xfdl", function() {
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
         * description 자원 목록 조회
        */
        this.fnSearch = function ()
        {
        	var strSvcId    = "getResourcesList";
        	var strSvcUrl   = "ast/resources/getResourcesList.do";
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
        		case "getAstRqst":
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
         * description 조회 버튼 클릭
        */

        /**
         * description
        */

        this.divPopup_btnAdd_onclick = function(obj,e)
        {
        	this.opener.dsSearch.setColumn(0, "astNo", this.dsList.getColumn(this.dsList.rowposition, "astNo"));

        	var oRtn = new Object();
        	this.gfnPopupClose(oRtn);
        	this.close();
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

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divPopup.form.divSearch.form.staSubTitle.addEventHandler("onclick",this.Static09_onclick,this);
            this.divPopup.form.divSearch.form.btnSearch.addEventHandler("onclick",this.btn_search_onclick,this);
            this.divPopup.form.divSearch.form.cboAstDiv.addEventHandler("onitemchanged",this.divSearch_systemIdCombo_onitemchanged,this);
            this.divPopup.form.divSearch.form.cboAstDiv.addEventHandler("onkeyup",this.divSearch_edtSearchNm_onchanged,this);
            this.divPopup.form.divSearch.form.cboAstSearch.addEventHandler("onkeyup",this.divSearch_edtSearchNm_onchanged,this);
            this.divPopup.form.divSearch.form.cboAstSearch.addEventHandler("onitemchanged",this.divSearch_cboAstSearch_onitemchanged,this);
            this.divPopup.form.divSearch.form.edtSearchNm.addEventHandler("onkeyup",this.divSearch_edtSearchNm_onchanged,this);
            this.divPopup.form.divSearch.form.edtSearchNm.addEventHandler("onchanged",this.divSearch_edtSearchNm_onchanged,this);
            this.divPopup.form.btnPopupClose.addEventHandler("onclick",this.divPopup_btnPopupClose_onclick,this);
            this.divPopup.form.btnAdd.addEventHandler("onclick",this.divPopup_btnAdd_onclick,this);
            this.divPopup.form.divResult.form.Static09.addEventHandler("onclick",this.Static09_onclick,this);
            this.divPopup.form.divResult.form.grdDirectorList.addEventHandler("onexpandup",this.divSiteResult_grdSiteList_onexpandup,this);
            this.divPopup.form.divResult.form.grdDirectorList.addEventHandler("oncelldblclick",this.divDirectorResult_grdDirectorList_oncelldblclick,this);
        };
        this.loadIncludeScript("AST_1040P.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
