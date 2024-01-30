(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("QNA_2050M");
            this.set_titletext("QNA 답변등록");
            this.set_cssclass("btn_WF_Sort");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"qnaId\" type=\"STRING\" size=\"256\"/><Column id=\"qstnTtl\" type=\"STRING\" size=\"256\"/><Column id=\"qstnCn\" type=\"STRING\" size=\"256\"/><Column id=\"rdcnt\" type=\"STRING\" size=\"256\"/><Column id=\"emlAddr\" type=\"STRING\" size=\"256\"/><Column id=\"rgstDt\" type=\"STRING\" size=\"256\"/><Column id=\"rgstrId\" type=\"STRING\" size=\"256\"/><Column id=\"rgstrMemberId\" type=\"STRING\" size=\"256\"/><Column id=\"updtDt\" type=\"STRING\" size=\"256\"/><Column id=\"updtrId\" type=\"STRING\" size=\"256\"/><Column id=\"qnaPrcSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"qnaPrcSttsNm\" type=\"STRING\" size=\"256\"/><Column id=\"answrId\" type=\"STRING\" size=\"256\"/><Column id=\"answrMemberId\" type=\"STRING\" size=\"256\"/><Column id=\"answrCn\" type=\"STRING\" size=\"256\"/><Column id=\"wrtePasswd\" type=\"STRING\" size=\"256\"/><Column id=\"answrDt\" type=\"STRING\" size=\"256\"/><Column id=\"emlAnswrYn\" type=\"STRING\" size=\"256\"/><Column id=\"clsCd\" type=\"STRING\" size=\"256\"/><Column id=\"clsNm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsClsCombo", this);
            obj.set_updatecontrol("true");
            obj._setContents("<ColumnInfo><Column id=\"value\" type=\"STRING\" size=\"256\"/><Column id=\"text\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"qnaId\" type=\"STRING\" size=\"256\"/><Column id=\"clsCd\" type=\"STRING\" size=\"256\"/><Column id=\"isRead\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("DivBnrForm","50","73",null,"750","50",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div01");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Static("Static10_00","0","45",null,"34","0",null,null,null,null,null,this.DivBnrForm.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_condition02box");
            obj.set_text("");
            this.DivBnrForm.addChild(obj.name, obj);

            obj = new Static("Static10_00_00","0","79",null,"34","0",null,null,null,null,null,this.DivBnrForm.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_condition02box");
            obj.set_text("");
            this.DivBnrForm.addChild(obj.name, obj);

            obj = new Static("Static10_00_00_00_00","0","113",null,"245","0",null,null,null,null,null,this.DivBnrForm.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_condition02box");
            obj.set_text("");
            this.DivBnrForm.addChild(obj.name, obj);

            obj = new Static("staQstnTtl","0","45","150","34",null,null,null,null,null,null,this.DivBnrForm.form);
            obj.set_taborder("3");
            obj.set_text("질문제목");
            obj.set_cssclass("sta_WF_condition02_LEssential");
            this.DivBnrForm.addChild(obj.name, obj);

            obj = new Edit("edtQstnTtl","staQstnTtl:10","49","740","26",null,null,null,null,null,null,this.DivBnrForm.form);
            obj.set_taborder("4");
            obj.set_enable("false");
            this.DivBnrForm.addChild(obj.name, obj);

            obj = new Static("staCls","0","79","150","34",null,null,null,null,null,null,this.DivBnrForm.form);
            obj.set_taborder("5");
            obj.set_text("분류");
            obj.set_cssclass("sta_WF_condition02_LEssential");
            this.DivBnrForm.addChild(obj.name, obj);

            obj = new Static("staQnaPrcSttsCd","50.00%","45","150","34",null,null,null,null,null,null,this.DivBnrForm.form);
            obj.set_taborder("6");
            obj.set_text("상태");
            obj.set_cssclass("sta_WF_condition02");
            this.DivBnrForm.addChild(obj.name, obj);

            obj = new Edit("edtFaqStts","staQnaPrcSttsCd:10","49","250","26",null,null,null,null,null,null,this.DivBnrForm.form);
            obj.set_taborder("7");
            obj.set_readonly("true");
            this.DivBnrForm.addChild(obj.name, obj);

            obj = new Static("staQstnCn","0","113","150","245",null,null,null,null,null,null,this.DivBnrForm.form);
            obj.set_taborder("8");
            obj.set_text("질문내용");
            obj.set_cssclass("sta_WF_condition02_LEssential");
            this.DivBnrForm.addChild(obj.name, obj);

            obj = new TextArea("textQstnCn","staQstnCn:10","118",null,"235","20",null,null,null,null,null,this.DivBnrForm.form);
            obj.set_taborder("9");
            obj.set_enable("false");
            this.DivBnrForm.addChild(obj.name, obj);

            obj = new Static("staRgstrId","50.00%","79","150","34",null,null,null,null,null,null,this.DivBnrForm.form);
            obj.set_taborder("10");
            obj.set_text("작성자");
            obj.set_cssclass("sta_WF_condition02");
            this.DivBnrForm.addChild(obj.name, obj);

            obj = new Edit("edtRgstr","staRgstrId:10","83","250","26",null,null,null,null,null,null,this.DivBnrForm.form);
            obj.set_taborder("11");
            obj.set_readonly("true");
            this.DivBnrForm.addChild(obj.name, obj);

            obj = new Static("Static10_00_00_00_00_00","0","437",null,"245","0",null,null,null,null,null,this.DivBnrForm.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_condition02box");
            obj.set_text("");
            this.DivBnrForm.addChild(obj.name, obj);

            obj = new Static("staAnswrCn","0","437","150","245",null,null,null,null,null,null,this.DivBnrForm.form);
            obj.set_taborder("13");
            obj.set_text("답변내용");
            obj.set_cssclass("sta_WF_condition02_LEssential");
            this.DivBnrForm.addChild(obj.name, obj);

            obj = new TextArea("textAnswrCn","staAnswrCn:10","442",null,"235","20",null,null,null,null,null,this.DivBnrForm.form);
            obj.set_taborder("14");
            this.DivBnrForm.addChild(obj.name, obj);

            obj = new Static("Static10_00_00_00_01_00","0","403",null,"34","0",null,null,null,null,null,this.DivBnrForm.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_condition02box");
            obj.set_text("");
            this.DivBnrForm.addChild(obj.name, obj);

            obj = new Static("staAnswr","0","403","150","34",null,null,null,null,null,null,this.DivBnrForm.form);
            obj.set_taborder("16");
            obj.set_text("답변 작성자");
            obj.set_cssclass("sta_WF_condition02_L");
            this.DivBnrForm.addChild(obj.name, obj);

            obj = new Edit("edtAnswrId","staAnswr:10","407","250","26",null,null,null,null,null,null,this.DivBnrForm.form);
            obj.set_taborder("17");
            obj.set_readonly("true");
            this.DivBnrForm.addChild(obj.name, obj);

            obj = new Static("staQna","0","0","150","45",null,null,null,null,null,null,this.DivBnrForm.form);
            obj.set_taborder("18");
            obj.set_text("질문");
            obj.set_cssclass("sta_WF_subTitle01");
            this.DivBnrForm.addChild(obj.name, obj);

            obj = new Static("staQna00","0","358","150","45",null,null,null,null,null,null,this.DivBnrForm.form);
            obj.set_taborder("19");
            obj.set_text("답변");
            obj.set_cssclass("sta_WF_subTitle01");
            this.DivBnrForm.addChild(obj.name, obj);

            obj = new Combo("ComboCls","160","83","250","26",null,null,null,null,null,null,this.DivBnrForm.form);
            obj.set_taborder("20");
            obj.set_codecolumn("value");
            obj.set_datacolumn("text");
            obj.set_innerdataset("dsClsCombo");
            obj.set_readonly("true");
            this.DivBnrForm.addChild(obj.name, obj);

            obj = new Button("btnDelete",null,"370","65","28","0",null,null,null,null,null,this.DivBnrForm.form);
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_Delete");
            obj.set_visible("true");
            obj.set_taborder("22");
            this.DivBnrForm.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"370","65","28","btnDelete:5",null,null,null,null,null,this.DivBnrForm.form);
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Save");
            obj.set_visible("true");
            obj.set_taborder("21");
            this.DivBnrForm.addChild(obj.name, obj);

            obj = new Button("btnModify",null,"14","63","28","0",null,null,null,null,null,this.DivBnrForm.form);
            obj.set_text("수정");
            obj.set_cssclass("btn_WF_icoModify");
            obj.set_taborder("23");
            this.DivBnrForm.addChild(obj.name, obj);

            obj = new Static("staTitle","50","0",null,"58","1420",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("QNA 답변등록");
            obj.set_cssclass("sta_WF_compTitle01");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.DivBnrForm.form
            obj = new Layout("default","",0,0,this.DivBnrForm.form,function(p){});
            this.DivBnrForm.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","DivBnrForm.form.edtQstnTtl","value","dsList","qstnTtl");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","DivBnrForm.form.edtFaqStts","value","dsList","qnaPrcSttsCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","DivBnrForm.form.edtRgstr","value","dsList","rgstrMemberId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","DivBnrForm.form.textQstnCn","value","dsList","qstnCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","DivBnrForm.form.edtAnswrId","value","dsList","answrMemberId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","DivBnrForm.form.textAnswrCn","value","dsList","answrCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","DivBnrForm.form.ComboCls","value","dsList","clsCd");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("QNA_2050M.xfdl","lib::common.xjs");
        this.registerScript("QNA_2050M.xfdl", function() {
        /**
        *  QNA 답볌등록
        *  MenuPath      소통광장 - 게시물 관리 - QNA 답볌등록
        *  FileName      QNA_2050M.xfdl
        *  Creator 	     woohj
        *  CreateDate    2023.11.29
        *  Desction      QNA 답볌등록
        ************** 소스 수정 이력 ***********************************************
        *  date          Modifier    Description
        *******************************************************************************
        *  2023.11.29   woohj	 	 최초 생성
        *******************************************************************************/

        this.executeIncludeScript("lib::common.xjs"); /*include "lib::common.xjs"*/;

        this.qnaId = "";

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
        	this.qnaId = (param == null || Eco.isEmpty(param.qnaId)) ? null : param.qnaId;

        	this.dsSearch.setColumn(0 , "isRead" , "Y");
        	this.dsSearch.setColumn(0, "qnaId", this.qnaId);

        		// 답변자 id 셋팅
        	var memberId = nexacro.getApplication().gdsUserInfo.getColumn(0, "memberId");   // Application에 있는 로그인한 멤버id
        	this.dsList.setColumn(0, "answrMemberId", memberId);

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
        	var strSvcId    = "getQnaManage";
        	var strSvcUrl   = "bbs/qna/getQnaManage.do";
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
        	var strSvcId    = "setQnaAnswrManage";
        	var strSvcUrl   = "bbs/qna/setQnaAnswrManage.do";
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
        	var strSvcId    = "delUpdateQnaAnswr";
        	var strSvcUrl   = "bbs/qna/delUpdateQnaAnswr.do";
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
         /**
         * description 콤보 loadCombo
        */

        this.fnComboCallback = function (svcId, errorCode, errorMsg)
        {
        	switch(svcId) {
        		case "loadCombo":
        			if(this.qnaId != null && this.qnaId != "") {
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
                case "getQnaManage":
                    break;
        		case "setQnaAnswrManage":
        			if(this.callbackMsg == "success"){
        				this.gfnAlert("CM_MSG_SAVE_SUCCESS");  	// 저장 되었습니다.
        				this.dsSearch.setColumn(0, "qnaId", this.qnaId);
        				this.dsSearch.setColumn(0, "isRead", "N");

        				this.fnSearch();
        			}else{
        				this.gfnAlert("CM_MSG_TEST_3");  		// 저장에 실패하였습니다.
        			}
                    break;
        		case "delUpdateQnaAnswr":
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
         * description 질문 수정버튼
        */
        this.btnModify_onclick  = function(obj,e)
        {
        	var param = {
        			qnaId: this.dsList.getColumn(e.row, "qnaId")
        	}

        	var rgstrId = this.dsList.getColumn(e.row, "rgstrId");
        	var answrId = this.dsList.getColumn(e.row, "answrId");

        	var userId = nexacro.getApplication().gdsUserInfo.getColumn(0, "userId");

        		// 확인중
        	if(rgstrId === userId) {
        		nexacro.getApplication().openNewTab("QNA_2040M", "QNA 질문등록", "pts::bbs/qna/QNA_2040M.xfdl", param , "소통광장 > 게시물관리 > QNA 질문등록", "");
        	} else {
        		alert("본인이 등록한 게시물이 아닙니다.");
        		this.DivForm.form.btnModify.set_enable(false);

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
        		["answrCn", "NULL", "답변 내용"]
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
            this.DivBnrForm.form.Static10_00_00_00_00.addEventHandler("onclick",this.Div01_Static10_00_00_00_00_onclick,this);
            this.DivBnrForm.form.staCls.addEventHandler("onclick",this.Div01_Static_comboBox_onclick,this);
            this.DivBnrForm.form.textQstnCn.addEventHandler("oneditclick",this.TextArea01_oneditclick,this);
            this.DivBnrForm.form.textQstnCn.addEventHandler("onchanged",this.Div01_TextArea01_00_onchanged,this);
            this.DivBnrForm.form.Static10_00_00_00_00_00.addEventHandler("onclick",this.Div01_Static10_00_00_00_00_onclick,this);
            this.DivBnrForm.form.textAnswrCn.addEventHandler("oneditclick",this.TextArea01_oneditclick,this);
            this.DivBnrForm.form.textAnswrCn.addEventHandler("onchanged",this.Div01_TextArea01_00_onchanged,this);
            this.DivBnrForm.form.ComboCls.addEventHandler("onkeyup",this.divSearch_edt_schMenuId_onkeyup,this);
            this.DivBnrForm.form.btnDelete.addEventHandler("onclick",this.btnDelete_onclick,this);
            this.DivBnrForm.form.btnSave.addEventHandler("onclick",this.btnSave_onclick,this);
            this.DivBnrForm.form.btnModify.addEventHandler("onclick",this.btnModify_onclick,this);
            this.staTitle.addEventHandler("onclick",this.sta_title_onclick,this);
        };
        this.loadIncludeScript("QNA_2050M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
