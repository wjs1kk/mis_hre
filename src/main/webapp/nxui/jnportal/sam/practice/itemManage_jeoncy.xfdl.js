(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("itemManage_jeoncy");
            this.set_titletext("제품관리 - 전창용");
            this.set_cssclass("frm_WF_comp");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,670);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj.set_updatecontrol("true");
            obj._setContents("<ColumnInfo><Column id=\"itemCode\" type=\"STRING\" size=\"256\"/><Column id=\"itemName\" type=\"STRING\" size=\"256\"/><Column id=\"itemType\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"itemCost\" type=\"INT\" size=\"256\"/><Column id=\"itemCount\" type=\"INT\" size=\"256\"/><Column id=\"itemDesc\" type=\"STRING\" size=\"3000\"/><Column id=\"rgstDt\" type=\"STRING\" size=\"256\"/><Column id=\"rgstId\" type=\"STRING\" size=\"256\"/><Column id=\"updtDt\" type=\"STRING\" size=\"256\"/><Column id=\"updtId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"itemCode\" type=\"STRING\" size=\"256\"/><Column id=\"itemName\" type=\"STRING\" size=\"256\"/><Column id=\"itemType\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"itemCost\" type=\"INT\" size=\"256\"/><Column id=\"itemCount\" type=\"INT\" size=\"256\"/><Column id=\"itemDesc\" type=\"STRING\" size=\"3000\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsItemType", this);
            obj._setContents("<ColumnInfo><Column id=\"text\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUseYn", this);
            obj._setContents("<ColumnInfo><Column id=\"LINE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"LINE_CODE_NM_KR\" type=\"STRING\" size=\"256\"/><Column id=\"LINE_CODE_NM_EN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"LINE_CODE_NM_KR\">전체</Col><Col id=\"LINE_CODE_NM_EN\">all</Col></Row><Row><Col id=\"LINE_CODE\">Y</Col><Col id=\"LINE_CODE_NM_KR\">사용</Col><Col id=\"LINE_CODE_NM_EN\">use</Col></Row><Row><Col id=\"LINE_CODE_NM_KR\">미사용</Col><Col id=\"LINE_CODE_NM_EN\">unused</Col><Col id=\"LINE_CODE\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btnSearch",null,"20","65","28","49",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle","50","0","500","58",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("제품목록 - 전창용");
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
            obj.set_innerdataset("dsUseYn");
            obj.set_datacolumn("LINE_CODE_NM_KR");
            obj.set_codecolumn("LINE_CODE");
            obj.set_text("");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta003","910","15","100","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("제품분류");
            obj.set_cssclass("sta_WF_condition01");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboItemType","sta003:10","15","170","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_innerdataset("dsItemType");
            obj.set_codecolumn("value");
            obj.set_datacolumn("text");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta002","455","15","100","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("제품명");
            obj.set_cssclass("sta_WF_condition01");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtItemName","sta002:10","15","170","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta001","20","15","100","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("제품코드");
            obj.set_cssclass("sta_WF_condition01");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtItemCode","sta001:10","15","170","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divList","50","divSearch:0",null,null,"50","37",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle","0","0","100","45",null,null,null,null,null,null,this.divList.form);
            obj.set_taborder("0");
            obj.set_text("검색결과");
            obj.set_cssclass("sta_WF_subTitle01");
            obj.set_fittocontents("width");
            this.divList.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_00_00","110","0","60","45",null,null,null,null,null,null,this.divList.form);
            obj.set_taborder("1");
            obj.set_text("h 45");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divList.addChild(obj.name, obj);

            obj = new Static("staGridRowCnt","staTitle:10","0","150","45",null,null,null,null,null,null,this.divList.form);
            obj.set_taborder("2");
            obj.set_text("(총 0건)");
            obj.set_cssclass("sta_WF_subTxt");
            this.divList.addChild(obj.name, obj);

            obj = new Grid("grdList","0","45",null,null,"0","0",null,null,null,null,this.divList.form);
            obj.set_taborder("3");
            obj.set_binddataset("dsList");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_autoupdatetype("itemselect");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"100\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"500\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"제품코드\"/><Cell col=\"2\" text=\"제품명\"/><Cell col=\"3\" text=\"제품분류\"/><Cell col=\"4\" text=\"단가\"/><Cell col=\"5\" text=\"수량\"/><Cell col=\"6\" text=\"제품설명\"/><Cell col=\"7\" text=\"사용여부\"/><Cell col=\"8\" text=\"등록일자\"/><Cell col=\"9\" text=\"등록자\"/><Cell col=\"10\" text=\"수정일자\"/><Cell col=\"11\" text=\"수정자\"/></Band><Band id=\"body\"><Cell expr=\"currow + 1\"/><Cell col=\"1\" text=\"bind:itemCode\"/><Cell col=\"2\" text=\"bind:itemName\" textAlign=\"left\" tooltiptext=\"bind:itemName\"/><Cell col=\"3\" text=\"bind:itemType\" displaytype=\"combotext\" edittype=\"none\" combodataset=\"dsItemType\" combodatacol=\"text\" combocodecol=\"value\" accessibilityenable=\"false\"/><Cell col=\"4\" text=\"bind:itemCost\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"5\" text=\"bind:itemCount\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"6\" text=\"bind:itemDesc\" textAlign=\"left\" tooltiptext=\"bind:itemDesc\" tooltiptype=\"default\"/><Cell col=\"7\" text=\"bind:useYn\" displaytype=\"combotext\" edittype=\"none\" combodataset=\"dsUseYn\" combocodecol=\"LINE_CODE\" combodatacol=\"LINE_CODE_NM_KR\" accessibilityenable=\"false\"/><Cell col=\"8\" text=\"bind:rgstDt\"/><Cell col=\"9\" text=\"bind:rgstId\"/><Cell col=\"10\" text=\"bind:updtDt\"/><Cell col=\"11\" text=\"bind:updtId\"/></Band></Format></Formats>");
            this.divList.addChild(obj.name, obj);

            obj = new Button("btnAdd",null,"14","73","26","0",null,null,null,null,null,this.divList.form);
            obj.set_taborder("4");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_Row_Add");
            this.divList.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divList.form
            obj = new Layout("default","",0,0,this.divList.form,
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

                p.grdList.set_taborder("3");
                p.grdList.set_binddataset("dsList");
                p.grdList.set_autofittype("col");
                p.grdList.set_autoenter("select");
                p.grdList.set_autoupdatetype("itemselect");
                p.grdList.move("0","45",null,null,"0","0");

                p.btnAdd.set_taborder("4");
                p.btnAdd.set_text("추가");
                p.btnAdd.set_cssclass("btn_WF_Row_Add");
                p.btnAdd.move(null,"14","73","26","0",null);
            	}
            );
            this.divList.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divList.form
            obj = new Layout("screen00","",0,0,this.divList.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divList.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1920,670,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("제품관리 - 전창용");
                p.set_cssclass("frm_WF_comp");

                p.btnSearch.set_taborder("0");
                p.btnSearch.set_text("조회");
                p.btnSearch.move(null,"20","65","28","49",null);

                p.staTitle.set_taborder("1");
                p.staTitle.set_text("제품목록 - 전창용");
                p.staTitle.set_cssclass("sta_WF_compTitle01");
                p.staTitle.move("50","0","500","58",null,null);

                p.divSearch.set_taborder("2");
                p.divSearch.set_text("");
                p.divSearch.move("50","58",null,"71","50",null);

                p.divList.set_taborder("3");
                p.divList.set_text("");
                p.divList.set_cssclass("div_WF_Area");
                p.divList.move("50","divSearch:0",null,null,"50","37");
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
            obj = new BindItem("item0","divSearch.form.edtItemCode","value","dsSearch","itemCode");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.edtItemName","value","dsSearch","itemName");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.cboUseYn","text","dsUseYn","LINE_CODE_NM_KR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.cboItemType","value","dsSearch","itemType");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.cboUseYn","tooltiptype","dsUseYn","LINE_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.cboUseYn","value","dsSearch","useYn");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("itemManage_jeoncy.xfdl","lib::common.xjs");
        this.registerScript("itemManage_jeoncy.xfdl", function() {
        /**
        *  OOO
        *  MenuPath      OOO
        *  FileName      OOO.xfdl
        *  Creator 	     OOO
        *  CreateDate    0000.00.00
        *  Desction      OOO
        ************** 소스 수정 이력 ***********************************************
        *  date          Modifier    Description
        *******************************************************************************
        *  0000.00.00    OOO 	     최초 생성
        *******************************************************************************/
        this.executeIncludeScript("lib::common.xjs"); /*include "lib::common.xjs"*/;

        var sessionUserName = nexacro.getApplication().gdsUserInfo.getColumn(0, "userNmKr");
        /***********************************************************************************************
        * FORM EVENT 영역(onload, onbeforeclose)
        /***********************************************************************************************/
        /**
         * description 화면 onload
        */
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnLoad(this);
        	this.gfnLoadCombo("loadCombo", "dsItemType=SMP:ITEM_TYPE:A", "fnCallBack");
        	this.fnSearch();

        };

        /************************************************************************************************
        * TRANSACTION 서비스 호출 처리
        ************************************************************************************************/
        this.fnSearch = function()
        {
        	var strSvcId    = "getItemList";
        	var strSvcUrl   = "sam/practice/getItemListJcy.do";
        	var inData      = "dsSearch";
        	var outData     = "dsList";
        	var strArg      = "";
        	var callBackFnc = "fnCallBack";
        	var isAsync   	= true;

        // 	"0" : XML 형식
        // 	"1" : Binary 형식
        // 	"2" : SSV 형식
        // 	"3" : JSON 형식
        	//this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync, 3);  // json
        	this.gfnTransaction(strSvcId, 		// transaction을 구분하기 위한 svc id값
        						strSvcUrl, 	    // transaction을 요청할 주소
        						inData, 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData, 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc, 	// transaction의 결과를 받을 Function 이름
        						isAsync); 		// 비동기통신 여부 [생략가능]
        };
        /************************************************************************************************
         * CALLBACK 콜백 처리부분(Transaction, Popup)
         ************************************************************************************************/
        this.fnCallBack = function (sSvcId, nErrorCode, sErrorMsg)
        {
        	switch (sSvcId) {
        		case "getItemList":
        			this.gfnRowCount(this.dsList, this.divList.form.staGridRowCnt);
        			trace(this.dsList.rgstDt);
        		break;
        		case "setItemList":
        			if(this.callbackMsg == "success"){
        				this.gfnAlert("CM_MSG_SAVE_SUCCESS");  // 저장 되었습니다.
        				this.fnSearch();
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
        	console.log('fnPopupAfter: ', sPopupId, ' || ', vArg);
        	switch(sPopupId){
        		case "itemDetailPopup":
        			var oRtn = this.gfnGetPopupRtn();
        			this.fnSearch();
        			if(oRtn){
        				console.log('oRtn : ',  oRtn);
        				console.log('oRtn.CONFIRM : ',  oRtn.CONFIRM);
        				console.log('oRtn.popDS : ',  oRtn.popDS);
        			}
        		break;
        	}
        };
        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        this.btnSearch_onclick = function(obj,e)
        {
        	this.fnSearch();
        };
        this.divList_btnAdd_onclick = function(obj,e)
        {
        	var oArg = {
        				title : "제품등록",
        				rowStatus : "inserted"
        				};
        //  gfnOpenPopup
        //  * @param {String} sPopupId	- 팝업ID
        //  * @param {String} sUrl	 - 팝업URL
        //  * @param {String} [oArg] - 전달값
        //  * @param {String} [sPopupCallback] - 팝업콜백. 없으면 confirm message 로 간주.
        //  * @param {Object} [oOption] - 팝업옵션 <br>
        	this.gfnOpenPopup("itemDetailPopup", "sam::practice/itemDetailPopup_jeoncy.xfdl", oArg, "fnPopupAfter", "");
        };

        /************************************************************************************************
        * 사용자 FUNCTION 영역
        ************************************************************************************************/

        this.divList_grdList_oncellclick = function(obj,e)
        {
        	var oArg = {
        				title : "제품상세",
        				rowStatus : "updated",
        				itemCode : obj.getBindDataset().getColumn(e.row, "itemCode"),
        	            itemName : obj.getBindDataset().getColumn(e.row, "itemName"),
        				itemType : obj.getBindDataset().getColumn(e.row, "itemType"),
        				useYn : obj.getBindDataset().getColumn(e.row, "useYn"),
        				itemCost : obj.getBindDataset().getColumn(e.row, "itemCost"),
        				itemCount : obj.getBindDataset().getColumn(e.row, "itemCount"),
        				itemDesc : obj.getBindDataset().getColumn(e.row, "itemDesc")
        				};
        	this.gfnOpenPopup("itemDetailPopup", "sam::practice/itemDetailPopup_jeoncy.xfdl", oArg, "fnPopupAfter", "");
        };

        this.divSearch_cboItemType_oncloseup = function(obj,e)
        {
        	this.fnSearch();
        };

        this.divSearch_cboUseYn_oncloseup = function(obj,e)
        {
        	this.fnSearch();
        };

        this.divSearch_onkeyup = function(obj,e)
        {
        	if(e.keycode == 13){
        		this.btnSearch_onclick();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
            this.divSearch.addEventHandler("onkeyup",this.divSearch_onkeyup,this);
            this.divSearch.form.staBg.addEventHandler("onclick",this.div_Search_Static00_onclick,this);
            this.divSearch.form.Static15_01_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.divSearch.form.sta004.addEventHandler("onclick",this.divSearch_sta_01_onclick,this);
            this.divSearch.form.cboUseYn.addEventHandler("oncloseup",this.divSearch_cboUseYn_oncloseup,this);
            this.divSearch.form.sta003.addEventHandler("onclick",this.divSearch_sta_01_onclick,this);
            this.divSearch.form.cboItemType.addEventHandler("oncloseup",this.divSearch_cboItemType_oncloseup,this);
            this.divSearch.form.sta002.addEventHandler("onclick",this.divSearch_sta_01_onclick,this);
            this.divSearch.form.sta001.addEventHandler("onclick",this.divSearch_sta_01_onclick,this);
            this.divSearch.form.edtItemCode.addEventHandler("onchanged",this.divSearch_edtItemCode_onchanged,this);
            this.divList.form.staTitle.addEventHandler("onclick",this.Static09_onclick,this);
            this.divList.form.Static04_00_00_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.divList.form.grdList.addEventHandler("oncelldblclick",this.divList_grdList_oncellclick,this);
            this.divList.form.btnAdd.addEventHandler("onclick",this.divList_btnAdd_onclick,this);
            this.dsSearch.addEventHandler("onrowposchanged",this.dsRole_onrowposchanged,this);
        };
        this.loadIncludeScript("itemManage_jeoncy.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
