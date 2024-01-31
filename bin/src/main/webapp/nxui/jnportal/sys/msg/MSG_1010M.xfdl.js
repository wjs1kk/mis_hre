(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("MSG_1010M");
            this.set_titletext("메시지관리");
            this.set_cssclass("frm_WF_comp");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,670);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj.set_updatecontrol("true");
            obj._setContents("<ColumnInfo><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"msg\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMessage", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"rowCheck\" type=\"STRING\" size=\"256\"/><Column id=\"rowStatus\" type=\"STRING\" size=\"256\"/><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"msg\" type=\"STRING\" size=\"256\"/><Column id=\"engMsg\" type=\"STRING\" size=\"256\"/><Column id=\"msgType\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"rmk\" type=\"STRING\" size=\"256\"/><Column id=\"rgstId\" type=\"STRING\" size=\"256\"/><Column id=\"rgstDt\" type=\"STRING\" size=\"256\"/><Column id=\"rgstIp\" type=\"STRING\" size=\"256\"/><Column id=\"rgstNm\" type=\"STRING\" size=\"256\"/><Column id=\"updtId\" type=\"STRING\" size=\"256\"/><Column id=\"updtIp\" type=\"STRING\" size=\"256\"/><Column id=\"updtDt\" type=\"STRING\" size=\"256\"/><Column id=\"updtNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMsgType", this);
            obj._setContents("<ColumnInfo><Column id=\"text\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUseYn", this);
            obj._setContents("<ColumnInfo><Column id=\"text\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btnSearch",null,"20","65","28","118",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("조회");
            obj.set_defaultbutton("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"20","65","28","50",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Save");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle","50","0","500","58",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("메시지 관리");
            obj.set_cssclass("sta_WF_compTitle01");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","50","58",null,"71","50",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staBg","0","0",null,"56","0",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_bg");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static15_01_00_00","0","56","50","15",null,null,null,null,null,null,this.divSearch.form);
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

            obj = new Static("sta001","20","15","100","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("메시지 ID");
            obj.set_cssclass("sta_WF_condition01");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtMessageId","sta001:10","15","250","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta002","455","15","100","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("메시지명");
            obj.set_cssclass("sta_WF_condition01");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtMessageNm","sta002:10","15","250","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divMessage","50","divSearch:0",null,null,"50","37",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Button("btnDeleteRow",null,"14","73","26","0",null,null,null,null,null,this.divMessage.form);
            obj.set_taborder("1");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_Row_Delete");
            this.divMessage.addChild(obj.name, obj);

            obj = new Button("btnAddRow",null,"14","73","26","btnDeleteRow:5",null,null,null,null,null,this.divMessage.form);
            obj.set_taborder("0");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_Row_Add");
            this.divMessage.addChild(obj.name, obj);

            obj = new Grid("grdMsgManage","0","45",null,null,"0","0",null,null,null,null,this.divMessage.form);
            obj.set_taborder("2");
            obj.set_binddataset("dsMessage");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_autoupdatetype("itemselect");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\" band=\"left\"/><Column size=\"48\" band=\"left\"/><Column size=\"48\" band=\"left\"/><Column size=\"200\"/><Column size=\"320\"/><Column size=\"320\"/><Column size=\"96\"/><Column size=\"96\"/><Column size=\"240\"/><Column size=\"96\"/><Column size=\"96\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"34\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"상태\"/><Cell col=\"3\" text=\"메시지 ID\"/><Cell col=\"4\" text=\"한글 메시지\"/><Cell col=\"5\" text=\"영문 메시지\"/><Cell col=\"6\" text=\"메시지 유형\"/><Cell col=\"7\" text=\"사용여부\"/><Cell col=\"8\" text=\"비고\"/><Cell col=\"9\" text=\" 수정자\"/><Cell col=\"10\" text=\"수정일\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\" text=\"expr:currow+1\" textAlign=\"center\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" textAlign=\"center\" text=\"bind:rowCheck\"/><Cell col=\"2\" textAlign=\"center\" imagestretch=\"fit\" displaytype=\"normal\" text=\"bind:rowStatus\"/><Cell col=\"3\" text=\"bind:msgId\" edittype=\"expr:rowStatus == &apos;inserted&apos;? &apos;text&apos; : &apos;none&apos;\" editmaxlength=\"50\" textAlign=\"left\" displaytype=\"expr:rowStatus == &apos;inserted&apos;? &apos;editcontrol&apos; : &apos;normal&apos;\"/><Cell col=\"4\" text=\"bind:msg\" edittype=\"text\" editmaxlength=\"1000\" textAlign=\"left\" displaytype=\"editcontrol\"/><Cell col=\"5\" text=\"bind:engMsg\" edittype=\"text\" editmaxlength=\"1000\" textAlign=\"left\" displaytype=\"editcontrol\"/><Cell col=\"6\" text=\"bind:msgType\" edittype=\"combo\" displaytype=\"combocontrol\" combodataset=\"dsMsgType\" combocodecol=\"value\" combodatacol=\"text\"/><Cell col=\"7\" text=\"bind:useYn\" edittype=\"combo\" displaytype=\"combocontrol\" combodataset=\"dsUseYn\" combocodecol=\"value\" combodatacol=\"text\"/><Cell col=\"8\" text=\"bind:rmk\" edittype=\"text\" editmaxlength=\"4000\" textAlign=\"left\" displaytype=\"editcontrol\"/><Cell col=\"9\" text=\"bind:updtNm\" edittype=\"none\" textAlign=\"center\"/><Cell col=\"10\" text=\"bind:updtDt\" edittype=\"none\" textAlign=\"center\"/></Band></Format></Formats>");
            this.divMessage.addChild(obj.name, obj);

            obj = new Static("staTitle","0","0","81","45",null,null,null,null,null,null,this.divMessage.form);
            obj.set_taborder("3");
            obj.set_text("검색결과");
            obj.set_cssclass("sta_WF_subTitle01");
            obj.set_fittocontents("width");
            this.divMessage.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_00","0","0","60","18",null,null,null,null,null,null,this.divMessage.form);
            obj.set_taborder("4");
            obj.set_text("h 18");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divMessage.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_00_00","90","0","60","45",null,null,null,null,null,null,this.divMessage.form);
            obj.set_taborder("5");
            obj.set_text("h 45");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divMessage.addChild(obj.name, obj);

            obj = new Static("staGridRowCnt","staTitle:10","0","150","45",null,null,null,null,null,null,this.divMessage.form);
            obj.set_taborder("6");
            obj.set_text("(총 0건)");
            obj.set_cssclass("sta_WF_subTxt");
            this.divMessage.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMessage.form
            obj = new Layout("default","",0,0,this.divMessage.form,
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

                p.grdMsgManage.set_taborder("2");
                p.grdMsgManage.set_binddataset("dsMessage");
                p.grdMsgManage.set_autofittype("col");
                p.grdMsgManage.set_autoenter("select");
                p.grdMsgManage.set_autoupdatetype("itemselect");
                p.grdMsgManage.move("0","45",null,null,"0","0");

                p.staTitle.set_taborder("3");
                p.staTitle.set_text("검색결과");
                p.staTitle.set_cssclass("sta_WF_subTitle01");
                p.staTitle.set_fittocontents("width");
                p.staTitle.move("0","0","81","45",null,null);

                p.Static04_00_00_00.set_taborder("4");
                p.Static04_00_00_00.set_text("h 18");
                p.Static04_00_00_00.set_visible("false");
                p.Static04_00_00_00.set_background("aqua");
                p.Static04_00_00_00.set_color("blue");
                p.Static04_00_00_00.set_textAlign("center");
                p.Static04_00_00_00.set_verticalAlign("middle");
                p.Static04_00_00_00.set_opacity("0.7");
                p.Static04_00_00_00.set_font("normal 12px/normal \"Arial\"");
                p.Static04_00_00_00.move("0","0","60","18",null,null);

                p.Static04_00_00_00_00.set_taborder("5");
                p.Static04_00_00_00_00.set_text("h 45");
                p.Static04_00_00_00_00.set_visible("false");
                p.Static04_00_00_00_00.set_background("aqua");
                p.Static04_00_00_00_00.set_color("blue");
                p.Static04_00_00_00_00.set_textAlign("center");
                p.Static04_00_00_00_00.set_verticalAlign("middle");
                p.Static04_00_00_00_00.set_opacity("0.7");
                p.Static04_00_00_00_00.set_font("normal 12px/normal \"Arial\"");
                p.Static04_00_00_00_00.move("90","0","60","45",null,null);

                p.staGridRowCnt.set_taborder("6");
                p.staGridRowCnt.set_text("(총 0건)");
                p.staGridRowCnt.set_cssclass("sta_WF_subTxt");
                p.staGridRowCnt.move("staTitle:10","0","150","45",null,null);
            	}
            );
            this.divMessage.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divMessage.form
            obj = new Layout("screen00","",0,0,this.divMessage.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divMessage.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1920,670,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("메시지관리");
                p.set_cssclass("frm_WF_comp");

                p.btnSearch.set_taborder("0");
                p.btnSearch.set_text("조회");
                p.btnSearch.set_defaultbutton("true");
                p.btnSearch.move(null,"20","65","28","118",null);

                p.btnSave.set_taborder("1");
                p.btnSave.set_text("저장");
                p.btnSave.set_cssclass("btn_WF_Save");
                p.btnSave.move(null,"20","65","28","50",null);

                p.staTitle.set_taborder("2");
                p.staTitle.set_text("메시지 관리");
                p.staTitle.set_cssclass("sta_WF_compTitle01");
                p.staTitle.move("50","0","500","58",null,null);

                p.divSearch.set_taborder("3");
                p.divSearch.set_text("");
                p.divSearch.move("50","58",null,"71","50",null);

                p.divMessage.set_taborder("4");
                p.divMessage.set_text("");
                p.divMessage.set_cssclass("div_WF_Area");
                p.divMessage.move("50","divSearch:0",null,null,"50","37");
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
            obj = new BindItem("item0","divSearch.form.edtMessageId","value","dsSearch","msgId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.edtMessageNm","value","dsSearch","msg");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("MSG_1010M.xfdl","lib::common.xjs");
        this.registerScript("MSG_1010M.xfdl", function() {
        /**
        *  messageManage
        *  MenuPath      -
        *  FileName      messageManage.xfdl
        *  Creator 	     cheonsy
        *  CreateDate    2023.02.22
        *  Desction      메시지 관리
        ************** 소스 수정 이력 ***********************************************
        *  date          Modifier    Description
        *******************************************************************************
        *  2023.02.22    cheonsy 	 최초 생성
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
        	this.gfnLoadCombo("loadCombo", "dsUseYn=SM:USE_YN:C dsMsgType=SM:MSG_TYPE:C", "fnCallBack");

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
        	var strSvcId    = "getMessageList";
        	var strSvcUrl   = "sm/getMessageList.do";
        	var inData      = "dsSearch";
        	var outData     = "dsMessage";
        	var strArg      = "";
        	var callBackFnc = "fnCallBack";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        /**
         * description 저장
        */
        this.fnSave = function()
        {
        	var strSvcId    = "setMessageList";
        	var strSvcUrl   = "sm/setMessageList.do";
        	var inData      = "dsMessage";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallBack";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        /************************************************************************************************
         * CALLBACK 콜백 처리부분(Transaction, Popup)
         ************************************************************************************************/
        /**
         * description Transaction CallBack 함수
        */
        this.fnCallBack = function (sSvcId, nErrorCode, sErrorMsg)
        {
        	switch (sSvcId) {
        		case "getMessageList":
        			//총 건수 계산
        			this.gfnRowCount(this.dsMessage, this.divMessage.form.staGridRowCnt);
        		break;
        		case "setMessageList":
        			if(this.callbackMsg == "success"){
        				this.gfnAlert("CM_MSG_SAVE_SUCCESS");  // 저장 되었습니다.
        				this.fnSearch();
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
        	this.fnSearch();
        };

        /**
         * description 저장버튼 클릭
        */
        this.btnSave_onclick = function(obj,e)
        {
        	if(this.dsMessage.rowcount == 0){
        		this.gfnAlert("CM_MSG_SAVE_NODATA");  // 저장할 데이터가 없습니다.
        		return;
        	}
        	if (!this.gfnDsIsUpdated(this.dsMessage)) {
        		this.gfnAlert("CM_MSG_SAVE_NOCHANGE");  // 변경된 내역이 없습니다.
        		return;
        	}

        	if (!this.fnValidation()) {		// 그리드 필수값 체크 및 밸리데이션
        		return;
            }

        	this.gfnAlert("CM_CFM_BEFORE_SAVE", "", "", {trueFunc: "fnSave", falseFunc: ""});  // 변경된 내역을 저장 하시겠습니까?
        	return;
        };

        /**
         * description 행추가 클릭
        */
        this.btnAddRow_onclick = function(obj,e)
        {
        	this.gfnInsertRow(this.dsMessage, "last");
        	this.dsMessage.setColumn(this.dsMessage.rowposition, "msgType", "A");
        	this.dsMessage.setColumn(this.dsMessage.rowposition, "useYn", "Y");
        };

        /**
         * description 행삭제 클릭
        */
        this.btnDeleteRow_onclick = function(obj,e)
        {
        	this.gfnDeleteRow(this.dsMessage);
        };

        /**
         * description 그리드해드 클릭
        */
        this.divMessage_grdMsgManage_onheadclick = function(obj,e)
        {
        	this.gfnSetGridCheckAll(obj, e, "rowCheck");
        };

        /**
         * description 엔터키 이벤트
        */
        this.divSearch_divSrch_edtMessageId_onkeyup = function(obj,e)
        {
        	if(e.keycode==13){
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
         * description 유효성 체크
        */
        this.fnValidation = function ()
        {
            var args = [
                ["msgId", "NULL|MAX_LEN:50", ""],	// 세번째가 메세지 -> 필드명에서 가져옴
        		["msg", "NULL|MAX_LEN:1000", ""],
        		["engMsg", "MAX_LEN:1000", ""],
        		["rmk", "MAX_LEN:4000", ""]
            ];

            return this.gfnCheckGrid(this.divMessage.form.grdMsgManage, args, "");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
            this.btnSave.addEventHandler("onclick",this.btnSave_onclick,this);
            this.divSearch.form.staBg.addEventHandler("onclick",this.div_Search_Static00_onclick,this);
            this.divSearch.form.Static15_01_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.divSearch.form.edtMessageId.addEventHandler("onkeyup",this.divSearch_divSrch_edtMessageId_onkeyup,this);
            this.divSearch.form.sta002.addEventHandler("onclick",this.divSearch_sta_01_onclick,this);
            this.divSearch.form.edtMessageNm.addEventHandler("onkeyup",this.divSearch_divSrch_edtMessageId_onkeyup,this);
            this.divMessage.form.btnDeleteRow.addEventHandler("onclick",this.btnDeleteRow_onclick,this);
            this.divMessage.form.btnAddRow.addEventHandler("onclick",this.btnAddRow_onclick,this);
            this.divMessage.form.grdMsgManage.addEventHandler("onheadclick",this.divMessage_grdMsgManage_onheadclick,this);
            this.divMessage.form.staTitle.addEventHandler("onclick",this.Static09_onclick,this);
            this.divMessage.form.Static04_00_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.divMessage.form.Static04_00_00_00_00.addEventHandler("onclick",this.Static31_onclick,this);
        };
        this.loadIncludeScript("MSG_1010M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
