(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("BBS_1010M");
            this.set_titletext("게시판MST목록");
            this.set_cssclass("frm_WF_comp");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj.set_updatecontrol("true");
            obj._setContents("<ColumnInfo><Column id=\"searchType\" type=\"STRING\" size=\"256\"/><Column id=\"searchKeyword\" type=\"STRING\" size=\"256\"/><Column id=\"bbsId\" type=\"STRING\" size=\"256\"/><Column id=\"bbsTyCd\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearchCombo", this);
            obj.set_updatecontrol("true");
            obj._setContents("<ColumnInfo><Column id=\"value\" type=\"STRING\" size=\"256\"/><Column id=\"text\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj.set_updatecontrol("true");
            obj._setContents("<ColumnInfo><Column id=\"rowCheck\" type=\"STRING\" size=\"256\"/><Column id=\"rowStatus\" type=\"STRING\" size=\"256\"/><Column id=\"bbsId\" type=\"STRING\" size=\"256\"/><Column id=\"bbsNm\" type=\"STRING\" size=\"256\"/><Column id=\"bbsIntrcn\" type=\"STRING\" size=\"256\"/><Column id=\"bbsTyCd\" type=\"STRING\" size=\"256\"/><Column id=\"bbsTyNm\" type=\"STRING\" size=\"256\"/><Column id=\"replyYn\" type=\"STRING\" size=\"256\"/><Column id=\"fileAtchYn\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"rgstrId\" type=\"STRING\" size=\"256\"/><Column id=\"rgstDt\" type=\"STRING\" size=\"256\"/><Column id=\"updtrId\" type=\"STRING\" size=\"256\"/><Column id=\"updtDt\" type=\"STRING\" size=\"256\"/><Column id=\"answrYn\" type=\"STRING\" size=\"256\"/><Column id=\"rcmdYn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBbsTyCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"value\" type=\"STRING\" size=\"256\"/><Column id=\"text\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"text\">선택</Col></Row><Row><Col id=\"value\">BRD-010-010</Col><Col id=\"text\">일반게시판</Col></Row><Row><Col id=\"value\">BRD-010-020</Col><Col id=\"text\">자료게시판</Col></Row><Row><Col id=\"value\">BRD-010-030</Col><Col id=\"text\">이미지게시판</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearchBbsTyCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"value\" type=\"STRING\" size=\"256\"/><Column id=\"text\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUseYn", this);
            obj._setContents("<ColumnInfo><Column id=\"value\" type=\"STRING\" size=\"256\"/><Column id=\"text\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btnSearch",null,"20","65","28","50",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle","50","0","500","58",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("게시판 목록");
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

            obj = new Static("staBbsTy","20","15","100","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("게시판 그룹");
            obj.set_cssclass("sta_WF_condition01");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboBbsTy","staBbsTy:10","15","140","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divSearch_form_cboBbsTy_innerdataset = new nexacro.NormalDataset("divSearch_form_cboBbsTy_innerdataset", obj);
            divSearch_form_cboBbsTy_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">BRD-010-010</Col><Col id=\"datacolumn\">일반게시판</Col></Row><Row><Col id=\"codecolumn\">BRD-010-020</Col><Col id=\"datacolumn\">자료게시판</Col></Row><Row><Col id=\"codecolumn\">BRD-010-030</Col><Col id=\"datacolumn\">이미지게시판</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_cboBbsTy_innerdataset);
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
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divSearch_form_cboSearch_innerdataset = new nexacro.NormalDataset("divSearch_form_cboSearch_innerdataset", obj);
            divSearch_form_cboSearch_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">TITLE</Col><Col id=\"datacolumn\">게시판 제목</Col></Row><Row><Col id=\"codecolumn\">ID</Col><Col id=\"datacolumn\">게시판 ID</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_cboSearch_innerdataset);
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
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"200\"/><Column size=\"150\"/><Column size=\"500\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"150\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"34\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" edittype=\"none\" text=\"순번\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"상태\"/><Cell col=\"3\" text=\"게시판 그룹\"/><Cell col=\"4\" text=\"게시판 ID\"/><Cell col=\"5\" text=\"게시판 제목\"/><Cell col=\"6\" text=\"답변\"/><Cell col=\"7\" text=\"댓글\"/><Cell col=\"8\" text=\"파일첨부\"/><Cell col=\"9\" text=\"비밀글\"/><Cell col=\"10\" text=\"추천\"/><Cell col=\"11\" text=\"사용여부\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"expr:currow+1\" expr=\"currow+1\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:rowCheck\"/><Cell col=\"2\" text=\"bind:rowStatus\"/><Cell col=\"3\" textAlign=\"left\" editmaxlength=\"20\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"dsBbsTyCombo\" combocodecol=\"value\" combodatacol=\"text\" text=\"bind:bbsTyCd\" cssclass=\"essential\"/><Cell col=\"4\" text=\"bind:bbsId\" editmaxlength=\"20\" textAlign=\"left\" displaytype=\"expr:rowStatus == &apos;inserted&apos;? &apos;editcontrol&apos; : &apos;normal&apos;\" edittype=\"expr:rowStatus == &apos;inserted&apos;? &apos;text&apos; : &apos;none&apos;\" cssclass=\"essential\"/><Cell col=\"5\" edittype=\"expr:rowStatus == &apos;inserted&apos;? &apos;text&apos; : &apos;none&apos;\" text=\"bind:bbsNm\" textAlign=\"left\" cssclass=\"essential\" displaytype=\"expr:rowStatus == &apos;inserted&apos;? &apos;editcontrol&apos; : &apos;normal&apos;\"/><Cell col=\"6\" text=\"bind:replyYn\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxfalsevalue=\"N\" checkboxtruevalue=\"Y\"/><Cell col=\"7\" textAlign=\"center\" editmaxlength=\"3000\" displaytype=\"checkboxcontrol\" text=\"bind:answrYn\" calendardateformat=\"yyyy-MM-dd\" edittype=\"checkbox\" checkboxfalsevalue=\"N\" checkboxtruevalue=\"Y\"/><Cell col=\"8\" text=\"bind:fileAtchYn\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\" combodataset=\"dsUseYn\" combocodecol=\"value\" combodatacol=\"text\" calendardateformat=\"yyyy-MM-dd\" checkboxfalsevalue=\"N\" checkboxtruevalue=\"Y\"/><Cell col=\"9\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxfalsevalue=\"N\" checkboxtruevalue=\"Y\"/><Cell col=\"10\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:rcmdYn\" checkboxfalsevalue=\"N\" checkboxtruevalue=\"Y\"/><Cell col=\"11\" displaytype=\"combocontrol\" edittype=\"combo\" cssclass=\"essential\" text=\"bind:useYn\" combodataset=\"dsUseYn\" combocodecol=\"value\" combodatacol=\"text\"/></Band></Format></Formats>");
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

            obj = new Button("btnDeleteRow",null,"14","73","26","0",null,null,null,null,null,this.divResult.form);
            obj.set_taborder("4");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_Row_Delete");
            this.divResult.addChild(obj.name, obj);

            obj = new Button("btnAddRow",null,"14","73","26","btnDeleteRow:5",null,null,null,null,null,this.divResult.form);
            obj.set_taborder("3");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_Row_Add");
            this.divResult.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"20","65","28","btnSearch:3",null,null,null,null,null,this);
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Save");
            obj.set_visible("true");
            obj.set_taborder("4");
            this.addChild(obj.name, obj);
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

                p.btnDeleteRow.set_taborder("4");
                p.btnDeleteRow.set_text("행삭제");
                p.btnDeleteRow.set_cssclass("btn_WF_Row_Delete");
                p.btnDeleteRow.move(null,"14","73","26","0",null);

                p.btnAddRow.set_taborder("3");
                p.btnAddRow.set_text("행추가");
                p.btnAddRow.set_cssclass("btn_WF_Row_Add");
                p.btnAddRow.move(null,"14","73","26","btnDeleteRow:5",null);
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
                p.set_titletext("게시판MST목록");
                p.set_cssclass("frm_WF_comp");

                p.btnSearch.set_taborder("0");
                p.btnSearch.set_text("조회");
                p.btnSearch.move(null,"20","65","28","50",null);

                p.staTitle.set_taborder("1");
                p.staTitle.set_text("게시판 목록");
                p.staTitle.set_cssclass("sta_WF_compTitle01");
                p.staTitle.move("50","0","500","58",null,null);

                p.divSearch.set_taborder("2");
                p.divSearch.set_text("");
                p.divSearch.move("50","58",null,"56","50",null);

                p.divResult.set_taborder("3");
                p.divResult.set_text("");
                p.divResult.set_cssclass("div_WF_Area");
                p.divResult.move("50","divSearch:15",null,null,"50","37");

                p.btnSave.set_text("저장");
                p.btnSave.set_cssclass("btn_WF_Save");
                p.btnSave.set_visible("true");
                p.btnSave.set_taborder("4");
                p.btnSave.move(null,"20","65","28","btnSearch:3",null);
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
            obj = new BindItem("item0","divSearch.form.cboBbsTy","value","dsSearch","bbsTyCd");
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
        this.addIncludeScript("BBS_1010M.xfdl","lib::common.xjs");
        this.registerScript("BBS_1010M.xfdl", function() {
        /**
        *  게시판 MST 목록
        *  MenuPath      관리메뉴 - 게시판 관리 - 게시판MST
        *  FileName      BBS_1010M.xfdl
        *  Creator 	     woohj
        *  CreateDate    2023.12.01
        *  Desction      게시판 MST 목록
        ************** 소스 수정 이력 ***********************************************
        *  date          Modifier    Description
        *******************************************************************************
        *  2023.12.01    woohj  	 최초 생성
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
        	// 수정
        };

        /************************************************************************************************
        * TRANSACTION 서비스 호출 처리
        ************************************************************************************************/
        /**
         * description 콤보 loadCombo
        */
        this.fnLoadCombo = function ()
        {
        	this.gfnLoadCombo("loadCombo", "dsUseYn=SM:USE_YN:C", "fnComboCallback");
        };

        /**
         * description 게시판 MST 목록
        */
        this.fnSearch = function ()
        {
        	var strSvcId    = "getBoardMasterList";
        	var strSvcUrl   = "bbs/boardMaster/getBoardMasterList.do";
        	var inData      = "dsSearch";
        	var outData     = "dsList";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        /**
         * description 게시판 MST 저장
        */
        this.fnSave = function ()
        {
        	var strSvcId    = "setBoardMasterList";
        	var strSvcUrl   = "bbs/boardMaster/setBoardMasterList.do";
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
                case "getBoardMasterList":
        			//총 건수 계산
        			this.gfnRowCount(this.dsList, this.divResult.form.staGridRowCnt);
                    break;
        		case "setBoardMasterList":
        			if(this.callbackMsg == "success"){
        				this.gfnAlert("CM_MSG_SAVE_SUCCESS");  // 저장 되었습니다.
        				this.dsSearch.clearData();
        				this.dsSearch.addRow();
        				this.fnSearch();
        			}else{
        				this.gfnAlert("CM_MSG_TEST_3");  // 저장에 실패하였습니다.
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
         * description 게시판유형 콤보박스 변경
        */
        this.divSearch_cboBbsTy_onitemchanged = function(obj,e)
        {
        	this.btnSearch_onclick();
        };

        /**
         * description 검색(ID/내용) 콤보박스 변경
        */
        this.divSearch_cboSearch_onitemchanged = function(obj,e)
        {
        	this.btnSearch_onclick();
        };

        /**
         * description 행추가
        */
        this.divResult_btnAddRow_onclick = function(obj,e)
        {
        	this.gfnInsertRow(this.dsList, "last");

        	this.dsList.setColumn(this.dsList.rowposition, "replyYn", "N");
        	this.dsList.setColumn(this.dsList.rowposition, "fileAtchYn", "N");
        	this.dsList.setColumn(this.dsList.rowposition, "useYn", "Y");

        	this.dsList.setColumn(this.dsList.rowposition, "answrYn", "N");
        	this.dsList.setColumn(this.dsList.rowposition, "rcmdYn", "N");

        	this.dsSearch.clearData();
        	this.dsSearch.addRow();
        };

        /**
         * description 행삭제
        */
        this.divResult_btnDeleteRow_onclick = function(obj,e)
        {
        	this.gfnDeleteRow(this.dsList);
        };

        /**
         * description 저장 버튼 클릭
        */
        this.btnSave_onclick = function(obj,e)
        {
        	if(this.dsList.rowcount == 0){
        		this.gfnAlert("CM_MSG_SAVE_NODATA");  // 저장할 데이터가 없습니다.
        		return;
        	}
        	if (!this.gfnDsIsUpdated(this.dsList)) {
        		this.gfnAlert("CM_MSG_SAVE_NOCHANGE");  // 변경된 내역이 없습니다.
        		return;
        	}

        	if (!this.fnValidation()) {		// 그리드 필수값 체크 -> 라인
        		return;
            }

        	this.gfnAlert("CM_CFM_BEFORE_SAVE", "", "", {trueFunc: "fnSave", falseFunc: ""});  // 변경된 내역을 저장 하시겠습니까?
        	return;
        };

        /************************************************************************************************
        * 사용자 FUNCTION 영역
        ************************************************************************************************/



        this.fnValidation = function ()
        {
            var args = [
                ["bbsId", "NULL|MAX_LEN:20", "게시판 ID"],
                ["bbsNm", "NULL|MAX_LEN:100", "게시판 제목"]
            ];

            return this.gfnCheckGrid(this.divResult.form.grdList, args, "");
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
            this.divSearch.form.staBbsTy.addEventHandler("onclick",this.row1_Div00_Static01_onclick,this);
            this.divSearch.form.cboBbsTy.addEventHandler("onkeyup",this.onkeyup,this);
            this.divSearch.form.cboBbsTy.addEventHandler("onitemchanged",this.divSearch_cboBbsTy_onitemchanged,this);
            this.divSearch.form.staSearch.addEventHandler("onclick",this.row1_Div00_Static01_onclick,this);
            this.divSearch.form.cboSearch.addEventHandler("onitemchanged",this.divSearch_cboSearch_onitemchanged,this);
            this.divSearch.form.cboSearch.addEventHandler("onkeyup",this.onkeyup,this);
            this.divSearch.form.edtSearch.addEventHandler("onkeyup",this.onkeyup,this);
            this.divResult.form.Static04_00_00_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.divResult.form.btnDeleteRow.addEventHandler("onclick",this.divResult_btnDeleteRow_onclick,this);
            this.divResult.form.btnAddRow.addEventHandler("onclick",this.divResult_btnAddRow_onclick,this);
            this.btnSave.addEventHandler("onclick",this.btnSave_onclick,this);
        };
        this.loadIncludeScript("BBS_1010M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
