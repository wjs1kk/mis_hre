(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DEPT_1010M");
            this.set_titletext("부서 관리");
            this.set_cssclass("frm_WF_comp");
            this.set_enable("true");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"rowCheck\" type=\"STRING\" size=\"256\"/><Column id=\"rowStatus\" type=\"STRING\" size=\"256\"/><Column id=\"deptCd\" type=\"STRING\" size=\"20\"/><Column id=\"deptNm\" type=\"STRING\" size=\"50\"/><Column id=\"deptLdrId\" type=\"STRING\" size=\"10\"/><Column id=\"deptLdrNm\" type=\"STRING\" size=\"50\"/><Column id=\"deptMngrId\" type=\"STRING\" size=\"10\"/><Column id=\"deptMngrNm\" type=\"STRING\" size=\"50\"/><Column id=\"deptDesc\" type=\"STRING\" size=\"300\"/><Column id=\"useYn\" type=\"STRING\" size=\"1\"/><Column id=\"ordSn\" type=\"INT\" size=\"256\"/><Column id=\"upDeptCd\" type=\"STRING\" size=\"20\"/><Column id=\"upDeptNm\" type=\"STRING\" size=\"50\"/><Column id=\"level\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"deptCd\" type=\"STRING\" size=\"256\"/><Column id=\"deptNm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUseYnCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"value\" type=\"STRING\" size=\"256\"/><Column id=\"text\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("mainTitle","50","0","500","58",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("부서 관리");
            obj.set_cssclass("sta_WF_compTitle01");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"20","65","28","50",null,null,null,null,null,this);
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Save");
            obj.set_visible("true");
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Div("divResult","50","73","650","617",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Grid("grdDept","0","116",null,null,"0","25",null,null,null,null,this.divResult.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsList");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_autoupdatetype("itemselect");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("expand,null");
            obj.set_cssclass("grd_WF_tree");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"200\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"34\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"상태\"/><Cell col=\"3\" text=\"부서\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\" text=\"expr:currow+1\" textAlign=\"center\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" textAlign=\"center\" text=\"bind:rowCheck\"/><Cell col=\"2\" textAlign=\"center\" imagestretch=\"fit\" displaytype=\"normal\" text=\"bind:rowStatus\"/><Cell col=\"3\" text=\"bind:deptNm\" edittype=\"tree\" treelevel=\"bind:level\" textAlign=\"left\" displaytype=\"treeitemcontrol\" treecheck=\"bind:rowCheck\"/></Band></Format></Formats>");
            this.divResult.addChild(obj.name, obj);

            obj = new Static("deptList","9","56","81","45",null,null,null,null,null,null,this.divResult.form);
            obj.set_taborder("1");
            obj.set_text("부서목록");
            obj.set_cssclass("sta_WF_subTitle01");
            obj.set_fittocontents("width");
            this.divResult.addChild(obj.name, obj);

            obj = new Static("staGridRowCnt","deptList:10","56","149","45",null,null,null,null,null,null,this.divResult.form);
            obj.set_taborder("2");
            obj.set_text("(총 0건)");
            obj.set_cssclass("sta_WF_subResult");
            this.divResult.addChild(obj.name, obj);

            obj = new Static("sta001","0","0",null,"56","0",null,null,null,null,null,this.divResult.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_bg");
            obj.set_text("");
            this.divResult.addChild(obj.name, obj);

            obj = new Static("staDeptNm","20","15","100","26",null,null,null,null,null,null,this.divResult.form);
            obj.set_taborder("6");
            obj.set_text("부서명");
            obj.set_cssclass("sta_WF_condition01");
            this.divResult.addChild(obj.name, obj);

            obj = new Edit("editDeptNm","staDeptNm:10","15","300","26",null,null,null,null,null,null,this.divResult.form);
            obj.set_taborder("4");
            this.divResult.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"14","65","28","20",null,null,null,null,null,this.divResult.form);
            obj.set_text("조회");
            obj.set_cssclass("");
            obj.set_taborder("5");
            this.divResult.addChild(obj.name, obj);

            obj = new Button("btnAddSiblingRow",null,"85","151","26","196",null,null,null,null,null,this.divResult.form);
            obj.set_taborder("7");
            obj.set_text("같은 레벨 부서 추가");
            obj.set_cssclass("btn_WF_Row_Add");
            this.divResult.addChild(obj.name, obj);

            obj = new Button("btnAddRow","459","85","125","26",null,null,null,null,null,null,this.divResult.form);
            obj.set_taborder("8");
            obj.set_text("하위 부서 추가");
            obj.set_cssclass("btn_WF_Row_Add");
            this.divResult.addChild(obj.name, obj);

            obj = new Button("btnDeleteRow",null,"85","61","26","0",null,null,null,null,null,this.divResult.form);
            obj.set_taborder("9");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_Row_Delete");
            obj.set_enable("true");
            this.divResult.addChild(obj.name, obj);

            obj = new Div("divDetail","715","73",null,"617","50",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div02");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Static("deptDetail","0","0","500","45",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("0");
            obj.set_text("부서 상세정보");
            obj.set_cssclass("sta_WF_subTitle01");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static12_01_00","0","45",null,"34","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_condition02box");
            obj.set_text("");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static20_00_00","0","79",null,"34","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_condition02box");
            obj.set_text("");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static18_00","0","113",null,"34","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_condition02box");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static25_00_00","0","181",null,null,"0","25",null,null,null,null,this.divDetail.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_condition02box");
            obj.set_text("");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staUpDeptCd","0","45","151","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("5");
            obj.set_text("상위부서코드");
            obj.set_cssclass("sta_WF_condition02_LEssential");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staDeptCd","0","79","151","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("6");
            obj.set_text("부서코드");
            obj.set_cssclass("sta_WF_condition02_LEssential");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staOrdSn","0","113","151","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("7");
            obj.set_text("정렬순서");
            obj.set_cssclass("sta_WF_condition02_LEssential");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staDeptDesc","0","181","151",null,null,"30",null,null,null,null,this.divDetail.form);
            obj.set_taborder("8");
            obj.set_text("설명");
            obj.set_cssclass("sta_WF_condition02_L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staDeptNm","600","79","151","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("9");
            obj.set_text("부서명");
            obj.set_cssclass("sta_WF_condition02Essential");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("stauUseYn","600","113","151","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("10");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_condition02Essential");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staUpDeptNm","600","45","151","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("11");
            obj.set_text("상위부서명");
            obj.set_cssclass("sta_WF_condition02");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("editUpDeptNm","staUpDeptNm:10","49","300","26",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("12");
            obj.set_cssclass("");
            obj.set_enable("false");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("editUpDeptCd","staUpDeptCd:10","49","271","26",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("13");
            obj.set_enable("false");
            this.divDetail.addChild(obj.name, obj);

            obj = new TextArea("editDeptDesc","staDeptDesc:10","185",null,null,"10","30",null,null,null,null,this.divDetail.form);
            obj.set_taborder("14");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static12_01_00_00","0","147",null,"34","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_condition02box");
            obj.set_text("");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staDeptLdr","0","147","151","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("16");
            obj.set_text("부서장");
            obj.set_cssclass("sta_WF_condition02_LEssential");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staDeptMngr","600","147","151","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("17");
            obj.set_text("부서 관리자");
            obj.set_cssclass("sta_WF_condition02");
            this.divDetail.addChild(obj.name, obj);

            obj = new Combo("comboUseYn","stauUseYn:10","117","300","26",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("18");
            obj.set_displaynulltext("선택");
            obj.set_innerdataset("dsUseYnCombo");
            obj.set_codecolumn("value");
            obj.set_datacolumn("text");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("editDeptCd","staDeptCd:10","83","300","26",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("19");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("editOrdSn","staOrdSn:10","117","300","26",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("20");
            obj.set_inputtype("number");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("editDeptLdrNm","staDeptLdr:10","151","271","26",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("21");
            obj.set_enable("false");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("editDeptNm","staDeptNm:10","83","300","26",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("22");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("editDeptMngrNm","staDeptMngr:10","151","271","26",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("23");
            obj.set_enable("false");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnUpDeptCd","editUpDeptCd:5","49","26","26",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("24");
            obj.set_cssclass("btn_WF_frmSearch");
            obj.set_text("");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnDeptLdr","editDeptLdrNm:5","151","26","26",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("25");
            obj.set_cssclass("btn_WF_frmSearch");
            obj.set_text("");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnDeptMngr","editDeptMngrNm:5","151","26","26",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("26");
            obj.set_cssclass("btn_WF_frmSearch");
            obj.set_text("");
            this.divDetail.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divResult.form
            obj = new Layout("default","",0,0,this.divResult.form,function(p){});
            this.divResult.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDetail.form
            obj = new Layout("default","",0,0,this.divDetail.form,function(p){});
            this.divDetail.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1920,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divResult.form.editDeptNm","value","dsSearch","deptNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divDetail.form.editUpDeptCd","value","dsList","upDeptCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divDetail.form.editUpDeptNm","value","dsList","upDeptNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divDetail.form.editDeptCd","value","dsList","deptCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divDetail.form.editOrdSn","value","dsList","ordSn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divDetail.form.editDeptLdrNm","value","dsList","deptLdrNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divDetail.form.editDeptNm","value","dsList","deptNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divDetail.form.comboUseYn","value","dsList","useYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divDetail.form.editDeptMngrNm","value","dsList","deptMngrNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divDetail.form.editDeptDesc","value","dsList","deptDesc");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("DEPT_1010M.xfdl","lib::common.xjs");
        this.registerScript("DEPT_1010M.xfdl", function() {
        /**
         *  관리 메뉴
         *  MenuPath      조직정보 - 부서관리
         *  FileName      DEPT_1010M.xfdl
         *  Creator 	  woohj
         *  CreateDate    2023.11.20
         *  Desction      관리 메뉴
         ************** 소스 수정 이력 ***********************************************
         *  date          Modifier    Description
         *******************************************************************************
         *  2023.11.20    woohj      최초 생성
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
        };

        /************************************************************************************************
         * TRANSACTION 서비스 호출 처리
         ************************************************************************************************/

        /**
         * description 콤보 loadCombo
        */
        this.fnLoadCombo = function ()
        {
        	this.gfnLoadCombo("loadCombo", "dsUseYnCombo=SM:USE_YN:C", "fnComboCallback");
        };

        /**
         * description 조회
        */
        this.fnSearch = function()
        {
        	var strSvcId    = "getDeptManageList";
        	var strSvcUrl   = "org/deptManage/getDeptManageList.do";
        	var inData      = "dsSearch";
        	var outData     = "dsList";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId,strSvcUrl, inData,outData, strArg, callBackFnc, isAsync);
        };

        /**
         * description 저장
        */
        this.fnSave = function ()
        {
        	var strSvcId    = "saveDeptManageList";
        	var strSvcUrl   = "org/deptManage/saveDeptManageList.do";
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

        this.fnComboCallback = function (svcId, errorCode, errorMsg)
        {
        	this.fnSearch();
        };

        /**
         * description Transaction Callback 함수
        */
        this.fnCallback = function (sSvcId, nErrorCode, sErrorMsg)
        {
        	switch (sSvcId) {
        		case "getDeptManageList":
        			//총 건수 계산
        			this.gfnRowCount(this.dsList, this.divResult.form.staGridRowCnt);
                    break;
        		case "saveDeptManageList":
        			if(this.callbackMsg == "success"){
        				this.gfnAlert("CM_MSG_SAVE_SUCCESS");  	// 저장 되었습니다.
        				this.fnSearch();
        			}else{
        				this.gfnAlert("CM_MSG_TEST_3");  		// 저장에 실패하였습니다.
        			}
                    break;
        		default:
                    break;
        	}
        };

        /**
         * description Popup Callback 함수
         */
        this.fnPopupAfter = function (sPopupId, vArg)
        {
            switch (sPopupId) {
                case "DEPT_1000P":
        				var result = this.gfnGetPopupRtn();
        				if (result == null) {
        					return;     // 취소시 항목의 프로그램 ID를 변경하지 않음
        					}

        				var sDept = result.sDept;

        				if (sDept.length > 0) {
        					var row = this.dsList.rowposition;
        					this.dsList.setColumn(row, "upDeptCd", sDept[0].deptCd);  //  팝업창 sDept[0].deptCd를 "upDeptCd"에 담음
        					this.dsList.setColumn(row, "upDeptNm", sDept[0].deptNm);

        					}
                    break;
        			case "DEPT_1010P":
        				var result = this.gfnGetPopupRtn();
        				if (result == null) {
        					return;     // 취소시 항목의 ID를 변경하지 않음
        					}

        				var sUser = result.sUser;

        				if (sUser.length > 0) {
        					var row = this.dsList.rowposition;
        					this.dsList.setColumn(row, "deptLdrId", sUser[0].userId);  //  팝업창 sUser[0].userId를 "deptLdrId"에 담음
        					this.dsList.setColumn(row, "deptLdrNm", sUser[0].userNm);

        					}
                    break;
        			case "DeptMngr":
        				var result = this.gfnGetPopupRtn();
        				if (result == null) {
        					return;     // 취소시 항목의 ID를 변경하지 않음
        					}

        				var sUser = result.sUser;

        				if (sUser.length > 0) {
        					var row = this.dsList.rowposition;
        					this.dsList.setColumn(row, "deptMngrId", sUser[0].userId);
        					this.dsList.setColumn(row, "deptMngrNm", sUser[0].userNm);

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
         * description 조회 버튼
        */
        this.btnSearch_onclick = function(obj,e)
        {
        	this.fnSearch();
        };

        /**
         * description 저장 버튼
        */
        this.btnSave_onclick = function(obj,e)
        {
        	this.fnBeforeSave();
        };

        /**
         * description 부서선택시-상세정보 변경 이벤트 (rowposition change 이벤트)
        */
        this.dsList_onrowposchanged = function(obj,e)
        {
        	this.dsSearch.setColumn(0, "deptCd", this.dsList.getColumn(this.dsList.rowposition, "upDeptCd"));

        	for (var i = 0; i < this.dsList.getRowCount(); i++) {
        		this.dsList.setColumn(i, "rowCheck", 0);
        	}
        	this.dsList.setColumn(e.newrow, "rowCheck", 1);
        };

        /**
         * description 같은 레벨 부서 추가 버튼
        */
        this.divResult_btnAddSiblingRow_onclick = function(obj,e)
        {
        	var nRow = this.dsList.rowposition;

        	if(nRow < 0 || nRow == null) {
        		this.fnAddTopmostRow();     // 상위레벨 추가
        	} else {
        		this.fnAddSiblingRow(nRow); // 같은레벨 추가
        	}

        };

        /**
         * description 하위 레벨 부서 추가 버튼
        */
        this.divResult_btnAddRow_onclick = function(obj,e)
        {
        	var nRow = this.dsList.rowposition;

            if (nRow < 0 || nRow == null) {
                this.fnAddTopmostRow();
            } else {
                this.fnAddChildRow(nRow);
            }
        };

        /**
         * description 트리 삭제
        */
        this.divResult_btnDeleteRow_onclick = function(obj,e)
        {
        	var indices = this.gfnGetCheckedRows(this.dsList, "rowCheck");
            var thisObj = this;

            if (!indices.every(function (e) { return this.fnCheckDeletable(e); }, this)) {
                return;
            }

            this.gfnDeleteRow(this.dsList);
        };

        /**
         * description 엔터키 검색
        */
        this.onkeyup = function(obj,e)
        {
        	if (e.keycode == 13) {
        		this.btnSearch_onclick();
        	}
        };

        /**
         * description 상위부서코드 추가 버튼
        */
        this.divDetail_btnUpDeptCd_onclick = function(obj,e)
        {
        	if (!this.gfnIsGridChecked(this.dsList, "rowCheck")) {
        		this.gfnAlert("부서를 체크해주세요"); // 자기
        		return;
        	}

        	var args = {
                mode: "single",
                upDeptCd: this.dsList.getColumn(this.dsList.rowposition, "upDeptCd")
            };

        	this.gfnOpenPopup("DEPT_1000P", "org::ptsDept/DEPT_1000P.xfdl", args, "fnPopupAfter", "");
        };

        /**
         * description 부서장 추가 버튼 		- 일단 입려되고 나서 할 것
        */
        this.divDetail_btnDeptLdr_onclick = function(obj,e)
        {
        	if (!this.gfnIsGridChecked(this.dsList, "rowCheck")) {
        		this.gfnAlert("부서장를 체크해주세요"); // 자기
        		return;
        	}

        	var args = {
                mode: "single",
                deptLdrId: this.dsList.getColumn(this.dsList.rowposition, "deptLdrId"),
        		deptLdrNm: this.dsList.getColumn(this.dsList.rowposition, "deptLdrNm")
            };

        	this.gfnOpenPopup("DEPT_1010P", "org::ptsDept/DEPT_1010P.xfdl", args, "fnPopupAfter", "");
        };

        /**
         * description 부서관리자 추가 버튼 	- 일단 입려되고 나서 할 것
        */
        this.divDetail_btnDeptMngr_onclick = function(obj,e)
        {
        	var args = {
                mode: "single",
                deptMngrId: this.dsList.getColumn(this.dsList.rowposition, "deptMngrId"),
        		deptMngrNm: this.dsList.getColumn(this.dsList.rowposition, "deptMngrNm")
            };

        	this.gfnOpenPopup("DeptMngr", "org::ptsDept/DEPT_1010P.xfdl", args, "fnPopupAfter", "");
        };

        /************************************************************************************************
        * 사용자 FUNCTION 영역
        ************************************************************************************************/
        /**
         * description 저장 전 확인
        */
        this.fnBeforeSave = function ()
        {
            if (!this.fnValidation()) {
                return;
            }

            this.gfnAlert("CM_CFM_BEFORE_SAVE", "", "", {trueFunc: "fnSave", falseFunc: ""});  // 변경된 내역을 저장 하시겠습니까?
        };

        /**
         * description 상위 레벨 추가
        */
        this.fnAddTopmostRow = function ()
        {
            this.gfnInsertRow(this.dsList, "last");
        	var i = this.dsList.rowposition;
            var grid = this.divResult.form.grdDept;

            this.dsList.setColumn(i, "level", 0);
        };

        /**
         * description 같은 레벨 추가
        */
        this.fnAddSiblingRow = function (row)
        {
            var grid = this.divResult.form.grdDept;
            var pRow = grid.getTreeParentRow(row);
            if (pRow < 0 || pRow == null) {
                this.fnAddTopmostRow();
                return;
            }

            var i = grid.getTreeChildRow(pRow, -1);
            while (grid.getTreeChildRow(i, -1) >= 0) {
                i = grid.getTreeChildRow(i, -1);
            }

            i++;

            this.dsList.insertRow(i);
            this.dsList.setColumn(i, "level", parseInt(this.dsList.getColumn(row, "level")));
            this.dsList.setColumn(i, "upDeptCd", this.dsList.getColumn(pRow, "deptCd"));
        	this.dsList.setColumn(i, "upDeptNm", this.dsList.getColumn(pRow, "deptNm"));

        };

        /**
         * description 하위 레벨 추가
        */
        this.fnAddChildRow = function (row)
        {
            var i = row;
            var grid = this.divResult.form.grdDept;
            while (grid.getTreeChildRow(i, -1) >= 0) {
                i = grid.getTreeChildRow(i, -1)
            }

            i++;

            this.dsList.insertRow(i);
            this.dsList.setColumn(i, "level", parseInt(this.dsList.getColumn(row, "level")) + 1);
            this.dsList.setColumn(i, "upDeptCd", this.dsList.getColumn(row, "deptCd"));
        	this.dsList.setColumn(i, "upDeptNm", this.dsList.getColumn(row, "deptNm"));
        };

        /**
         * description 트리 삭제할 시 확인
        */
        this.fnCheckDeletable = function (row)
        {
            if (!this.divResult.form.grdDept.isTreeLeafRow(row) ) {
                this.gfnAlert("CM_MENU_CANNOT_DELETE_NOT_LEAF");
                return false;
            }

            return true;
        };

        /**
         * description 유효성 체크
        */
        this.fnValidation = function ()
        {
        	var args = [
        		["upDeptCd", "NULL|MAX_LEN:20", "상위부서코드"],
                ["deptCd", "NULL|MAX_LEN:20", "부서코드"],
        		["deptNm", "NULL|MAX_LEN:50", "부서명"],
        		["deptLdrId", "NULL|MAX_LEN:10", "부서장"],
        		["useYn", "NULL|MAX_LEN:1", "사용여부"],
        		["ordSn", "NULL", "정렬순서"]

            ];

        	if(!this.gfnCheckGrid(this.divResult.form.grdDept, args, "")) {
        		return false;
        	}

            return true;
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnSave.addEventHandler("onclick",this.btnSave_onclick,this);
            this.divResult.form.deptList.addEventHandler("onclick",this.Static09_onclick,this);
            this.divResult.form.sta001.addEventHandler("onclick",this.div_Search_Static00_onclick,this);
            this.divResult.form.staDeptNm.addEventHandler("onclick",this.divSearch_sta_01_onclick,this);
            this.divResult.form.editDeptNm.addEventHandler("onkeyup",this.onkeyup,this);
            this.divResult.form.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
            this.divResult.form.btnAddSiblingRow.addEventHandler("onclick",this.divResult_btnAddSiblingRow_onclick,this);
            this.divResult.form.btnAddRow.addEventHandler("onclick",this.divResult_btnAddRow_onclick,this);
            this.divResult.form.btnDeleteRow.addEventHandler("onclick",this.divResult_btnDeleteRow_onclick,this);
            this.divDetail.form.deptDetail.addEventHandler("onclick",this.Div00_Static13_onclick,this);
            this.divDetail.form.btnUpDeptCd.addEventHandler("onclick",this.divDetail_btnUpDeptCd_onclick,this);
            this.divDetail.form.btnDeptLdr.addEventHandler("onclick",this.divDetail_btnDeptLdr_onclick,this);
            this.divDetail.form.btnDeptMngr.addEventHandler("onclick",this.divDetail_btnDeptMngr_onclick,this);
            this.dsList.addEventHandler("onrowposchanged",this.dsList_onrowposchanged,this);
        };
        this.loadIncludeScript("DEPT_1010M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
