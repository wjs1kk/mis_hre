(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("FAQ_2020M");
            this.set_titletext("FAQ 상세");
            this.set_cssclass("btn_WF_Sort");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"faqId\" type=\"STRING\" size=\"256\"/><Column id=\"clsCd\" type=\"STRING\" size=\"256\"/><Column id=\"clsNm\" type=\"STRING\" size=\"256\"/><Column id=\"qstnTtl\" type=\"STRING\" size=\"256\"/><Column id=\"qstnCn\" type=\"STRING\" size=\"256\"/><Column id=\"answrCn\" type=\"STRING\" size=\"256\"/><Column id=\"rdcnt\" type=\"STRING\" size=\"256\"/><Column id=\"atchFileId\" type=\"STRING\" size=\"256\"/><Column id=\"faqSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"faqSttsNm\" type=\"STRING\" size=\"256\"/><Column id=\"rgstDt\" type=\"STRING\" size=\"256\"/><Column id=\"rgstrId\" type=\"STRING\" size=\"256\"/><Column id=\"updtDt\" type=\"STRING\" size=\"256\"/><Column id=\"updtrId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsClsCombo", this);
            obj.set_updatecontrol("true");
            obj._setContents("<ColumnInfo><Column id=\"value\" type=\"STRING\" size=\"256\"/><Column id=\"text\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"faqId\" type=\"STRING\" size=\"256\"/><Column id=\"isRead\" type=\"STRING\" size=\"256\"/><Column id=\"faqSttsCd\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("DivBnrForm","50","73",null,"617","50",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div01");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Static("Static10_00","0","0",null,"34","0",null,null,null,null,null,this.DivBnrForm.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_condition02box");
            obj.set_text("");
            this.DivBnrForm.addChild(obj.name, obj);

            obj = new Static("Static10_00_00","0","34",null,"34","0",null,null,null,null,null,this.DivBnrForm.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_condition02box");
            obj.set_text("");
            this.DivBnrForm.addChild(obj.name, obj);

            obj = new Static("Static10_00_00_00_00","0","68",null,"245","0",null,null,null,null,null,this.DivBnrForm.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_condition02box");
            obj.set_text("");
            this.DivBnrForm.addChild(obj.name, obj);

            obj = new Static("staQstnTtl","0","0","150","34",null,null,null,null,null,null,this.DivBnrForm.form);
            obj.set_taborder("3");
            obj.set_text("질문제목");
            obj.set_cssclass("sta_WF_condition02_LEssential");
            this.DivBnrForm.addChild(obj.name, obj);

            obj = new Edit("edtQstnTtl","staQstnTtl:10","4","740","26",null,null,null,null,null,null,this.DivBnrForm.form);
            obj.set_taborder("4");
            this.DivBnrForm.addChild(obj.name, obj);

            obj = new Static("staCls","0","34","150","34",null,null,null,null,null,null,this.DivBnrForm.form);
            obj.set_taborder("5");
            obj.set_text("분류");
            obj.set_cssclass("sta_WF_condition02_LEssential");
            this.DivBnrForm.addChild(obj.name, obj);

            obj = new Static("staFaqStts","50%","0","150","34",null,null,null,null,null,null,this.DivBnrForm.form);
            obj.set_taborder("6");
            obj.set_text("상태");
            obj.set_cssclass("sta_WF_condition02");
            this.DivBnrForm.addChild(obj.name, obj);

            obj = new Edit("edtFaqStts","staFaqStts:10","4","250","26",null,null,null,null,null,null,this.DivBnrForm.form);
            obj.set_taborder("7");
            obj.set_readonly("true");
            this.DivBnrForm.addChild(obj.name, obj);

            obj = new Static("staQstnCn","0","68","150","245",null,null,null,null,null,null,this.DivBnrForm.form);
            obj.set_taborder("8");
            obj.set_text("질문내용");
            obj.set_cssclass("sta_WF_condition02_LEssential");
            this.DivBnrForm.addChild(obj.name, obj);

            obj = new TextArea("textQstnCn","staQstnCn:10","73",null,"235","20",null,null,null,null,null,this.DivBnrForm.form);
            obj.set_taborder("9");
            this.DivBnrForm.addChild(obj.name, obj);

            obj = new Static("Static10_00_00_00","0","558",null,"34","0",null,null,null,null,null,this.DivBnrForm.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_condition02box");
            obj.set_text("");
            this.DivBnrForm.addChild(obj.name, obj);

            obj = new Button("ButtonDownload","570","562","85","26",null,null,null,null,null,null,this.DivBnrForm.form);
            obj.set_taborder("12");
            obj.set_text("다운로드");
            obj.set_cssclass("btn_WF_grdArrDown");
            this.DivBnrForm.addChild(obj.name, obj);

            obj = new Button("ButtonUpload","ButtonDownload:5","562","73","26",null,null,null,null,null,null,this.DivBnrForm.form);
            obj.set_taborder("11");
            obj.set_text("업로드");
            obj.set_cssclass("btn_WF_grdUpload");
            this.DivBnrForm.addChild(obj.name, obj);

            obj = new Edit("edtAtchFile","160","562","400","26",null,null,null,null,null,null,this.DivBnrForm.form);
            obj.set_taborder("13");
            obj.set_readonly("true");
            this.DivBnrForm.addChild(obj.name, obj);

            obj = new Static("staAtchFile","0","558","150","34",null,null,null,null,null,null,this.DivBnrForm.form);
            obj.set_taborder("14");
            obj.set_text("첨부파일");
            obj.set_cssclass("sta_WF_condition02_L");
            this.DivBnrForm.addChild(obj.name, obj);

            obj = new Static("staRgstrId","50%","34","150","34",null,null,null,null,null,null,this.DivBnrForm.form);
            obj.set_taborder("15");
            obj.set_text("작성자");
            obj.set_cssclass("sta_WF_condition02");
            this.DivBnrForm.addChild(obj.name, obj);

            obj = new Edit("edtRgstr","staRgstrId:10","38","250","26",null,null,null,null,null,null,this.DivBnrForm.form);
            obj.set_taborder("16");
            obj.set_readonly("true");
            this.DivBnrForm.addChild(obj.name, obj);

            obj = new Static("Static10_00_00_00_00_00","0","313",null,"245","0",null,null,null,null,null,this.DivBnrForm.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_condition02box");
            obj.set_text("");
            this.DivBnrForm.addChild(obj.name, obj);

            obj = new Static("staAnswrCn","0","313","150","245",null,null,null,null,null,null,this.DivBnrForm.form);
            obj.set_taborder("18");
            obj.set_text("답변내용");
            obj.set_cssclass("sta_WF_condition02_LEssential");
            this.DivBnrForm.addChild(obj.name, obj);

            obj = new TextArea("textAnswrCn","staAnswrCn:10","318",null,"235","20",null,null,null,null,null,this.DivBnrForm.form);
            obj.set_taborder("19");
            this.DivBnrForm.addChild(obj.name, obj);

            obj = new Combo("ComboCls","staCls:10","38","250","26",null,null,null,null,null,null,this.DivBnrForm.form);
            obj.set_taborder("20");
            obj.set_codecolumn("value");
            obj.set_datacolumn("text");
            obj.set_innerdataset("dsClsCombo");
            this.DivBnrForm.addChild(obj.name, obj);

            obj = new Static("staTitle","50","0",null,"58","1420",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("FAQ 상세");
            obj.set_cssclass("sta_WF_compTitle01");
            this.addChild(obj.name, obj);

            obj = new Button("btnDelete",null,"20","65","28","50",null,null,null,null,null,this);
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_Delete");
            obj.set_visible("true");
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"20","65","28","btnDelete:3",null,null,null,null,null,this);
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Save");
            obj.set_visible("true");
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Button("btnStart",null,"20","93","28","186",null,null,null,null,null,this);
            obj.set_text("FAQ 게시");
            obj.set_visible("true");
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Button("btnStop",null,"20","93","28","282",null,null,null,null,null,this);
            obj.set_text("FAQ 중지");
            obj.set_visible("true");
            obj.set_taborder("5");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","1103","13","403","42",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"10","65","28","30",null,null,null,null,null,this.Div00.form);
            obj.set_text("1");
            obj.set_cssclass("btn_WF_Save");
            obj.set_visible("true");
            obj.set_taborder("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btnSave00",null,"7","65","28","101",null,null,null,null,null,this.Div00.form);
            obj.set_text("2");
            obj.set_cssclass("btn_WF_Save");
            obj.set_visible("true");
            obj.set_taborder("1");
            this.Div00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.DivBnrForm.form
            obj = new Layout("default","",0,0,this.DivBnrForm.form,function(p){});
            this.DivBnrForm.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","DivBnrForm.form.edtQstnTtl","value","dsList","qstnTtl");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","DivBnrForm.form.edtFaqStts","value","dsList","faqSttsNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","DivBnrForm.form.ComboCls","value","dsList","clsCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","DivBnrForm.form.edtRgstr","value","dsList","rgstrId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","DivBnrForm.form.textQstnCn","value","dsList","qstnCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","DivBnrForm.form.textAnswrCn","value","dsList","answrCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","DivBnrForm.form.edtAtchFile","value","dsList","atchFileId");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("FAQ_2020M.xfdl","lib::common.xjs");
        this.registerScript("FAQ_2020M.xfdl", function() {
        /**
        *  FAQ 상세
        *  MenuPath      소통광장 - 게시물 관리 - FAQ 상세
        *  FileName      FAQ_2020M.xfdl
        *  Creator 	     woohj
        *  CreateDate    2023.11.28
        *  Desction      FAQ 상세
        ************** 소스 수정 이력 ***********************************************
        *  date          Modifier    Description
        *******************************************************************************
        *  2023.11.28   woohj	 	 최초 생성
        *******************************************************************************/

        this.executeIncludeScript("lib::common.xjs"); /*include "lib::common.xjs"*/;

        this.faqId = ""; // 초기화
        this.faqSttsCd = "";
        /***********************************************************************************************
        * FORM EVENT 영역(onload, onbeforeclose)
        /***********************************************************************************************/
        /**
         * description 화면 onload
        */
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnLoad(this);

        	this.dsSearch.setColumn(0 , "isRead" , "Y");

        	// 작성자 id 셋팅
        	var memberId = nexacro.getApplication().gdsUserInfo.getColumn(0, "memberId");   // Application에 있는 로그인한 멤버id
        	this.dsList.setColumn(0, "rgstrId", memberId);

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
        	this.gfnLoadCombo("loadCombo", "dsClsCombo=PTS:WORK_CATEGORY:C", "fnComboCallback");
        };

        /**
         * description 상세 조회
         */
        this.fnSearch = function ()
        {
        	var strSvcId    = "getFaqManage";
        	var strSvcUrl   = "bbs/faq/getFaqManage.do";
        	var inData      = "dsSearch";
        	var outData     = "dsList";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        /**
         * description 저장
        */
        this.fnSave = function ()
        {
        	var strSvcId    = "setFaqManage";
        	var strSvcUrl   = "bbs/faq/setFaqManage.do";
        	var inData      = "dsList";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        /**
         * description 삭제
        */
        this.fnDelete = function ()
        {
        	var strSvcId    = "deleteFaqManage";
        	var strSvcUrl   = "bbs/faq/deleteFaqManage.do";
        	var inData      = "dsList";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        /**
         * description 게시 시작
        */
        this.fnStartStts = function ()
        {
        	var strSvcId    = "setStts";
        	var strSvcUrl   = "bbs/faq/setFaqStts.do";
        	var inData      = "dsList";
        	var outData     = "";
        	var strArg      = "faqSttsCd=POSTED";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        /**
         * description 게시 중지
        */
        this.fnStopStts = function ()
        {
        	var strSvcId    = "setStts";
        	var strSvcUrl   = "bbs/faq/setFaqStts.do";
        	var inData      = "dsList";
        	var outData     = "";
        	var strArg      = "faqSttsCd=STOPPED";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        /************************************************************************************************
         * CALLBACK 콜백 처리부분(Transaction, Popup)
         ************************************************************************************************/
        /**
         * description 콤보 loadCombo
        */

        this.fnComboCallback = function (svcId, errorCode, errorMsg)
        {
        	var param = this.getOwnerFrame().tabArgs.param;
        	var faqId = (param == null || Eco.isEmpty(param.faqId)) ? null : param.faqId;

        	switch(svcId) {
        		case "loadCombo":
        			if(faqId != null && faqId != "") {
        				this.dsSearch.setColumn(0, "faqId", faqId);
        				this.fnSearch();
        			}
        			break;
        		default:
        			break;
        		}
        };

        /**
         * description Transaction CallBack 함수
        */
        this.fnCallback = function (svcId, errorCode, errorMsg)
        {
            switch (svcId) {
                case "getFaqManage":
                    break;
        		case "setFaqManage":
        			if(this.callbackMsg == "success"){
        				this.gfnAlert("CM_MSG_SAVE_SUCCESS");  	// 저장 되었습니다.
        				this.dsSearch.setColumn(0, "faqId", this.faqId);
        				this.dsSearch.setColumn(0, "isRead" , "N");	// 조회수 Cnt X
        				this.dsSearch.setColumn(0, "faqSttsCd", this.faqSttsCd);

        				this.fnSearch();
        			}else{
        				this.gfnAlert("CM_MSG_TEST_3");  		// 저장에 실패하였습니다.
        			}
                    break;
        		case "deleteFaqManage":
        			if(this.callbackMsg == "success"){
                        this.gfnAlert("CM_MSG_DELETE_SUCCESS");  // 삭제 되었습니다.
        				nexacro.getApplication().closeTab(this.getOwnerFrame().tabArgs.tabId); // 탭 닫기
                    }
                    break;
        		case "setStts":
        			if(this.callbackMsg == "success"){
        				this.alert("상태가 변경되었습니다.");
        				this.dsSearch.setColumn(0, "faqId", this.faqId);
        				this.dsSearch.setColumn(0, "isRead" , "N");	// 조회수 Cnt X
        				this.dsSearch.setColumn(0, "faqSttsCd", this.faqSttsCd);

        				this.fnSearch();
        			}else{
        				this.gfnAlert("상태 변경을 실패하였습니다.");  		// 저장에 실패하였습니다.
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
         * description 저장 버튼
        */
        this.btnSave_onclick = function(obj,e)
        {
        	this.fnBeforeSave();
        };

        /**
         * description 삭제 버튼
        */
        this.btnDelete_onclick = function(obj,e)
        {
        	this.gfnAlert("CM_CFM_DELETE", "", "", {trueFunc: "fnDelete", falseFunc: ""}); // 삭제하시겠습니까?
        };

        /**
         * description 게시 시작 버튼 클릭
        */
        this.btnStart_onclick = function(obj,e)
        {
            this.gfnAlert("PTS_CHANGE_STTSCD", "", "", {trueFunc: "fnBeforeStrStts", falseFunc: ""});
        };

        /**
         * description 게시 중지 버튼 클릭
        */
        this.btnStop_onclick = function(obj,e)
        {
            this.gfnAlert("PTS_CHANGE_STTSCD", "", "", {trueFunc: "fnBeforeStopStts", falseFunc: ""});
        };

        /************************************************************************************************
        * 사용자 FUNCTION 영역
        ************************************************************************************************/
        /**
         * description 저장 전 확인
        */
        this.fnBeforeSave = function ()
        {
        	if(this.dsList.rowcount == 0){
        		this.gfnAlert("CM_MSG_SAVE_NODATA");  	// 저장할 데이터가 없습니다.
        		return;
        	}

        	if (!this.gfnDsIsUpdated(this.dsList)) {
        		this.gfnAlert("CM_MSG_SAVE_NOCHANGE");  // 변경된 내역이 없습니다.
        		return;
        	}

            if (!this.fnValidation()) {
                return;
            }

            this.gfnAlert("CM_CFM_BEFORE_SAVE", "", "", {trueFunc: "fnSave", falseFunc: ""});  // 변경된 내역을 저장 하시겠습니까?
        };


        /**
         * description 유효성 체크
        */
        this.fnValidation = function ()
        {
        	var args = [
        		["qstnTtl", "NULL|MAX_LEN:100", "질문제목"],
                ["clsCd", "NULL", "질문 분류"],
        		["qstnCn", "NULL", "질문 내용"],
        		["answrCn", "NULL", "답변 내용"]
            ];

        	if(!this.gfnCheckGrid(this.dsList, args, "")) {
        		return false;
        	}

            return true;
        };

        /**
         * description 게시 시작 버튼 상태
        */
        this.fnBeforeStrStts = function ()
        {
        	var sttsCd = this.dsList.getColumn(0, "faqSttsCd");

        	// 작성중 상태가 맞는가?
        	if (sttsCd == "WRITING" || sttsCd == "STOPPED")
        	{
        		this.fnStartStts(); 	// 작성중이면 게시

        		this.btnStart.set_visible(false);
        		this.btnStop.set_visible(true);

        		this.btnSave.set_enable(false);
        		this.btnDelete.set_enable(false);
        	}
        };

        /**
         * description 게시 중지 버튼 상태
        */
        this.fnBeforeStopStts = function ()
        {
        	var sttsCd = this.dsList.getColumn(0, "faqSttsCd");

        	if (sttsCd == "WRITING" || sttsCd == "POSTED")
        	{
        		this.fnStopStts(); 	// 게시중이면 정지

        		this.btnStart.set_visible(true);
        		this.btnStop.set_visible(false);

        		this.btnSave.set_enable(true);
        		this.btnDelete.set_enable(true);
        	}
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.DivBnrForm.form.Static10_00_00_00_00.addEventHandler("onclick",this.Div01_Static10_00_00_00_00_onclick,this);
            this.DivBnrForm.form.staCls.addEventHandler("onclick",this.Div01_Static_comboBox_onclick,this);
            this.DivBnrForm.form.textQstnCn.addEventHandler("oneditclick",this.TextArea01_oneditclick,this);
            this.DivBnrForm.form.textQstnCn.addEventHandler("onchanged",this.Div01_TextArea01_00_onchanged,this);
            this.DivBnrForm.form.Static10_00_00_00_00_00.addEventHandler("onclick",this.Div01_Static10_00_00_00_00_onclick,this);
            this.DivBnrForm.form.textAnswrCn.addEventHandler("oneditclick",this.TextArea01_oneditclick,this);
            this.DivBnrForm.form.textAnswrCn.addEventHandler("onchanged",this.Div01_TextArea01_00_onchanged,this);
            this.DivBnrForm.form.ComboCls.addEventHandler("onkeyup",this.divSearch_edt_schMenuId_onkeyup,this);
            this.staTitle.addEventHandler("onclick",this.sta_title_onclick,this);
            this.btnDelete.addEventHandler("onclick",this.btnDelete_onclick,this);
            this.btnSave.addEventHandler("onclick",this.btnSave_onclick,this);
            this.btnStart.addEventHandler("onclick",this.btnStart_onclick,this);
            this.btnStop.addEventHandler("onclick",this.btnStop_onclick,this);
            this.Div00.form.btnSave.addEventHandler("onclick",this.btnSave_onclick,this);
            this.Div00.form.btnSave00.addEventHandler("onclick",this.btnSave_onclick,this);
        };
        this.loadIncludeScript("FAQ_2020M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
