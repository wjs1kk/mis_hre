(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("BBS_3020M");
            this.set_titletext("게시물 등록");
            this.set_cssclass("btn_WF_Sort");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"rowCheck\" type=\"STRING\" size=\"256\"/><Column id=\"rowStatus\" type=\"STRING\" size=\"256\"/><Column id=\"nttNo\" type=\"STRING\" size=\"256\"/><Column id=\"bbsId\" type=\"STRING\" size=\"256\"/><Column id=\"nttTtl\" type=\"STRING\" size=\"256\"/><Column id=\"nttCn\" type=\"STRING\" size=\"256\"/><Column id=\"answrYn\" type=\"STRING\" size=\"256\"/><Column id=\"upNttNo\" type=\"STRING\" size=\"256\"/><Column id=\"cmntYn\" type=\"STRING\" size=\"256\"/><Column id=\"sortOrdr\" type=\"STRING\" size=\"256\"/><Column id=\"rdcnt\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"ntcBgnYmd\" type=\"STRING\" size=\"256\"/><Column id=\"ntcEndYmd\" type=\"STRING\" size=\"256\"/><Column id=\"ntcrId\" type=\"STRING\" size=\"256\"/><Column id=\"ntcrNm\" type=\"STRING\" size=\"256\"/><Column id=\"passwd\" type=\"STRING\" size=\"256\"/><Column id=\"atchFileId\" type=\"STRING\" size=\"256\"/><Column id=\"noticeYn\" type=\"STRING\" size=\"256\"/><Column id=\"sjBoldYn\" type=\"STRING\" size=\"256\"/><Column id=\"scrtYn\" type=\"STRING\" size=\"256\"/><Column id=\"rgstDt\" type=\"STRING\" size=\"256\"/><Column id=\"rgstrId\" type=\"STRING\" size=\"256\"/><Column id=\"updtDt\" type=\"STRING\" size=\"256\"/><Column id=\"updtrId\" type=\"STRING\" size=\"256\"/><Column id=\"cmntCnt\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"nttNo\" type=\"STRING\" size=\"256\"/><Column id=\"bbsId\" type=\"STRING\" size=\"256\"/><Column id=\"isRead\" type=\"STRING\" size=\"256\"/><Column id=\"ntcrId\" type=\"STRING\" size=\"256\"/><Column id=\"rgstrId\" type=\"STRING\" size=\"256\"/><Column id=\"cmntNo\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsComment", this);
            obj._setContents("<ColumnInfo><Column id=\"bbsId\" type=\"STRING\" size=\"256\"/><Column id=\"nttNo\" type=\"STRING\" size=\"256\"/><Column id=\"cmntNo\" type=\"STRING\" size=\"256\"/><Column id=\"wrtrId\" type=\"STRING\" size=\"256\"/><Column id=\"wrtrNm\" type=\"STRING\" size=\"256\"/><Column id=\"cmntCn\" type=\"STRING\" size=\"256\"/><Column id=\"rgstDt\" type=\"STRING\" size=\"256\"/><Column id=\"rgstrId\" type=\"STRING\" size=\"256\"/><Column id=\"updtDt\" type=\"STRING\" size=\"256\"/><Column id=\"updtrId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("DivResult","50","73",null,"900","50",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div01");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Static("Static10_00","0","0",null,"34","0",null,null,null,null,null,this.DivResult.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_condition02box");
            obj.set_text("");
            this.DivResult.addChild(obj.name, obj);

            obj = new Static("Static10_00_00","0","34",null,"34","0",null,null,null,null,null,this.DivResult.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_condition02box");
            obj.set_text("");
            this.DivResult.addChild(obj.name, obj);

            obj = new Static("Static10_00_00_00_00","0","102",null,"490","0",null,null,null,null,null,this.DivResult.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_condition02box");
            obj.set_text("");
            this.DivResult.addChild(obj.name, obj);

            obj = new Static("staNttTtl","0","0","150","34",null,null,null,null,null,null,this.DivResult.form);
            obj.set_taborder("3");
            obj.set_text("제목");
            obj.set_cssclass("sta_WF_condition02_LEssential");
            this.DivResult.addChild(obj.name, obj);

            obj = new Edit("edtNttTtl","staNttTtl:10","4","550","26",null,null,null,null,null,null,this.DivResult.form);
            obj.set_taborder("4");
            this.DivResult.addChild(obj.name, obj);

            obj = new Static("staScrtYn","0","34","150","34",null,null,null,null,null,null,this.DivResult.form);
            obj.set_taborder("5");
            obj.set_text("비밀글");
            obj.set_cssclass("sta_WF_condition02_L");
            this.DivResult.addChild(obj.name, obj);

            obj = new Static("staQstnCn","0","102","150","490",null,null,null,null,null,null,this.DivResult.form);
            obj.set_taborder("6");
            obj.set_text("내용");
            obj.set_cssclass("sta_WF_condition02_LEssential");
            this.DivResult.addChild(obj.name, obj);

            obj = new TextArea("textQstnCn","staQstnCn:10","107",null,"480","20",null,null,null,null,null,this.DivResult.form);
            obj.set_taborder("7");
            this.DivResult.addChild(obj.name, obj);

            obj = new Static("staPasswd","50%","34","150","34",null,null,null,null,null,null,this.DivResult.form);
            obj.set_taborder("8");
            obj.set_text("비밀번호");
            obj.set_cssclass("sta_WF_condition02");
            this.DivResult.addChild(obj.name, obj);

            obj = new Edit("edtRgstr","staPasswd:10","38","250","26",null,null,null,null,null,null,this.DivResult.form);
            obj.set_taborder("9");
            obj.set_readonly("false");
            obj.set_password("true");
            obj.set_enable("false");
            this.DivResult.addChild(obj.name, obj);

            obj = new Static("staNtcrId","50%","0","150","34",null,null,null,null,null,null,this.DivResult.form);
            obj.set_taborder("10");
            obj.set_text("작성자");
            obj.set_cssclass("sta_WF_condition02");
            this.DivResult.addChild(obj.name, obj);

            obj = new Edit("edtNtcrId","staNtcrId:10","4","250","26",null,null,null,null,null,null,this.DivResult.form);
            obj.set_taborder("11");
            obj.set_readonly("true");
            this.DivResult.addChild(obj.name, obj);

            obj = new CheckBox("chScrtYn","staScrtYn:10","39","100","24",null,null,null,null,null,null,this.DivResult.form);
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            obj.set_taborder("12");
            obj.set_cssclass("");
            this.DivResult.addChild(obj.name, obj);

            obj = new Static("Static10_00_00_00","0","68",null,"34","0",null,null,null,null,null,this.DivResult.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_condition02box");
            obj.set_text("");
            this.DivResult.addChild(obj.name, obj);

            obj = new Static("staNoticeYn","0","68","150","34",null,null,null,null,null,null,this.DivResult.form);
            obj.set_taborder("14");
            obj.set_text("공지사항");
            obj.set_cssclass("sta_WF_condition02_L");
            this.DivResult.addChild(obj.name, obj);

            obj = new CheckBox("chNoticeYn","staNoticeYn:10","73","100","24",null,null,null,null,null,null,this.DivResult.form);
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            obj.set_taborder("15");
            obj.set_cssclass("");
            this.DivResult.addChild(obj.name, obj);

            obj = new Static("staTitle","50","0",null,"58","1420",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("게시물 글쓰기");
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
            // Layout Functions
            //-- Default Layout : this.DivResult.form
            obj = new Layout("default","",0,0,this.DivResult.form,function(p){});
            this.DivResult.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","DivResult.form.edtNttTtl","value","dsList","nttTtl");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","DivResult.form.edtNtcrId","value","dsList","ntcrId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","DivResult.form.chScrtYn","value","dsList","scrtYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","DivResult.form.edtRgstr","value","dsList","passwd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","DivResult.form.textQstnCn","value","dsList","nttCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","DivResult.form.chNoticeYn","value","dsList","noticeYn");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("BBS_3020M.xfdl","lib::common.xjs");
        this.registerScript("BBS_3020M.xfdl", function() {
        /**
        *  게시물 글쓰기
        *  MenuPath      소통광장 - 게시물 목록 - 게시물 등록
        *  FileName      BBS_3020M.xfdl
        *  Creator 	     woohj
        *  CreateDate    2023.12.06
        *  Desction      게시물 글쓰기
        ************** 소스 수정 이력 ***********************************************
        *  date          Modifier    Description
        *******************************************************************************
        *  2023.12.06   woohj	 	 최초 생성
        *******************************************************************************/

        this.executeIncludeScript("lib::common.xjs"); /*include "lib::common.xjs"*/;

        this.nttNo = ""; // 초기화
        this.bbsId = ""; // 초기화

        /***********************************************************************************************
        * FORM EVENT 영역(onload, onbeforeclose)
        /***********************************************************************************************/
        /**
         * description 화면 onload
        */
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnLoad(this);

        	var param = this.getOwnerFrame().tabArgs.param;
        	var nttNo = (param == null || Eco.isEmpty(param.nttNo)) ? null : param.nttNo;
        	// 3. 얘도 똑같이 this. 로 받아와야함 . var로 하면 지역변수, this로 해야 폼의 상태 적용

        	this.bbsId = (param == null || Eco.isEmpty(param.bbsId)) ? null : param.bbsId; // 1.폼 내에서 공유 해야하기 위해

        	// 작성자 id 셋팅
        	var memberId = nexacro.getApplication().gdsUserInfo.getColumn(0, "memberId");   // Application에 있는 로그인한 멤버id
        	this.dsList.setColumn(0, "ntcrId", memberId);

        	// 공지사항을 admin만 할수있게 셋팅
        	//var ntcrId = this.dsList.getColumn(0, "ntcrId");
        	var userId = nexacro.getApplication().gdsUserInfo.getColumn(0, "userId");
        	if(userId != "admin") {
        		this.DivResult.form.chNoticeYn.set_enable(false);
        	} else {
        		this.DivResult.form.chNoticeYn.set_enable(true);
        	}

            if (nttNo != null && nttNo != "") {
                this.dsSearch.setColumn(0, "nttNo", nttNo);
        		this.dsSearch.setColumn(0, "bbsId", this.bbsId);
                this.fnSearch();
        	} else {
        		// 기본값을 설정
        		this.dsList.setColumn(0, "useYn", "Y"); 	// 사용여부 기본값
        		this.dsList.setColumn(0, "scrtYn", "N"); 	// 비밀글 여부 기본값
        		this.dsList.setColumn(0, "noticeYn", "N");  // 공지사항 여부 기본값


        		this.dsList.setColumn(0, "bbsId", this.bbsId);
        	}

        };

        /************************************************************************************************
        * TRANSACTION 서비스 호출 처리
        ************************************************************************************************/

        /**
         * description 상세 조회
         */
        this.fnSearch = function ()
        {
        	var strSvcId    = "getNoticeBoard";
        	var strSvcUrl   = "bbs/noticeBoard/getNoticeBoard.do";
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
        	var strSvcId    = "setNoticeBoard";
        	var strSvcUrl   = "bbs/noticeBoard/setNoticeBoard.do";
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
        	var strSvcId    = "deleteNoticeBoard";
        	var strSvcUrl   = "bbs/noticeBoard/deleteNoticeBoard.do";
        	var inData      = "dsList dsComment";
        	var outData     = "";
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
        this.fnCallback = function (svcId, errorCode, errorMsg)
        {
            switch (svcId) {
                case "getNoticeBoard":
                    break;
        		case "setNoticeBoard":
        			if(this.callbackMsg == "success"){
        				this.gfnAlert("CM_MSG_SAVE_SUCCESS");  	// 저장 되었습니다.
        				// 서버에서 만들어져 받아오는 값 서버 getNtto()로 받아와야함
        				this.dsSearch.setColumn(0, "nttNo", this.nttNo);

        				// 앞 화면에서 받아오는 값
        				this.dsSearch.setColumn(0, "bbsId", this.bbsId);

        				this.fnSearch();
        			}else{
        				this.gfnAlert("CM_MSG_TEST_3");  		// 저장에 실패하였습니다.
        			}
                    break;
        		case "deleteNoticeBoard":
        			if(this.callbackMsg == "success"){
                        this.gfnAlert("CM_MSG_DELETE_SUCCESS");  // 삭제 되었습니다.
        				nexacro.getApplication().closeTab(this.getOwnerFrame().tabArgs.tabId);
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
         * description 비밀글 체크버튼
        */
        this.DivResult_chScrtYn_onchanged = function(obj,e)
        {
        	var scrtYn = this.dsList.getColumn(0, "scrtYn");
        	if(scrtYn == "Y") {
        		this.DivResult.form.edtRgstr.set_enable(true);
        	} else {
        		this.DivResult.form.edtRgstr.set_enable(false);
        	}
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
        		["nttTtl", "NULL|MAX_LEN:100", "제목"],
        		["nttCn", "NULL", "내용"]
            ];

        	if(!this.gfnCheckGrid(this.dsList, args, "")) {
        		return false;
        	}

            return true;
        };








        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.DivResult.form.Static10_00_00_00_00.addEventHandler("onclick",this.Div01_Static10_00_00_00_00_onclick,this);
            this.DivResult.form.staScrtYn.addEventHandler("onclick",this.Div01_Static_comboBox_onclick,this);
            this.DivResult.form.textQstnCn.addEventHandler("oneditclick",this.TextArea01_oneditclick,this);
            this.DivResult.form.textQstnCn.addEventHandler("onchanged",this.Div01_TextArea01_00_onchanged,this);
            this.DivResult.form.chScrtYn.addEventHandler("onchanged",this.DivResult_chScrtYn_onchanged,this);
            this.staTitle.addEventHandler("onclick",this.sta_title_onclick,this);
            this.btnDelete.addEventHandler("onclick",this.btnDelete_onclick,this);
            this.btnSave.addEventHandler("onclick",this.btnSave_onclick,this);
        };
        this.loadIncludeScript("BBS_3020M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
