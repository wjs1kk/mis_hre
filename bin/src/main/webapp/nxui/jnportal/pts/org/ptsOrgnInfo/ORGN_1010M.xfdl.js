(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ORGN_1010M");
            this.set_titletext("조직 관리");
            this.set_cssclass("frm_WF_comp");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsOrgnStdYmdList", this);
            obj._setContents("<ColumnInfo><Column id=\"rowCheck\" type=\"STRING\" size=\"256\"/><Column id=\"rowStatus\" type=\"STRING\" size=\"256\"/><Column id=\"stdYmd\" type=\"STRING\" size=\"256\"/><Column id=\"stdYmddesc\" type=\"STRING\" size=\"256\"/><Column id=\"crrntYn\" type=\"STRING\" size=\"256\"/><Column id=\"orgnCd\" type=\"STRING\" size=\"256\"/><Column id=\"enableYn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"orgnCd\" type=\"STRING\" size=\"256\"/><Column id=\"stdYmd\" type=\"STRING\" size=\"256\"/><Column id=\"deptCd\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOrgnList", this);
            obj._setContents("<ColumnInfo><Column id=\"rowCheck\" type=\"STRING\" size=\"256\"/><Column id=\"rowStatus\" type=\"STRING\" size=\"256\"/><Column id=\"orgnCd\" type=\"STRING\" size=\"256\"/><Column id=\"orgnNm\" type=\"STRING\" size=\"256\"/><Column id=\"stdYmd\" type=\"STRING\" size=\"256\"/><Column id=\"upOrgnCd\" type=\"STRING\" size=\"256\"/><Column id=\"upOrgnNm\" type=\"STRING\" size=\"256\"/><Column id=\"ordNo\" type=\"STRING\" size=\"256\"/><Column id=\"level\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDeptList", this);
            obj._setContents("<ColumnInfo><Column id=\"rowCheck\" type=\"STRING\" size=\"256\"/><Column id=\"rowStatus\" type=\"STRING\" size=\"256\"/><Column id=\"orgnCd\" type=\"STRING\" size=\"256\"/><Column id=\"deptCd\" type=\"STRING\" size=\"256\"/><Column id=\"deptNm\" type=\"STRING\" size=\"256\"/><Column id=\"deptLdrId\" type=\"STRING\" size=\"256\"/><Column id=\"deptLdrNm\" type=\"STRING\" size=\"256\"/><Column id=\"upDeptCd\" type=\"STRING\" size=\"256\"/><Column id=\"upDeptNm\" type=\"STRING\" size=\"256\"/><Column id=\"stdYmd\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCrrntYn", this);
            obj._setContents("<ColumnInfo><Column id=\"value\" type=\"STRING\" size=\"256\"/><Column id=\"text\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("mainTitle","50","0","500","58",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("조직 관리");
            obj.set_cssclass("sta_WF_compTitle01");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"20","65","28","50",null,null,null,null,null,this);
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Save");
            obj.set_visible("true");
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Div("divStdYmdResult","50","73","23.44%","617",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Grid("grdStdYmd","0","45",null,null,"0","25",null,null,null,null,this.divStdYmdResult.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsOrgnStdYmdList");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_autoupdatetype("itemselect");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("expand,null");
            obj.set_cssclass("grd_WF_tree");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"160\"/><Column size=\"160\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"34\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"상태\"/><Cell col=\"3\" text=\"기준일자\"/><Cell col=\"4\" text=\"사용여부\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\" text=\"expr:currow+1\" textAlign=\"center\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" textAlign=\"center\" text=\"bind:rowCheck\"/><Cell col=\"2\" textAlign=\"center\" imagestretch=\"fit\" displaytype=\"normal\" text=\"bind:rowStatus\"/><Cell col=\"3\" text=\"bind:stdYmd\" textAlign=\"center\" calendardateformat=\"yyyy-MM-dd\" edittype=\"expr:rowStatus == &apos;inserted&apos; ? &apos;date&apos; : &apos;none&apos;\" displaytype=\"expr:rowStatus == &apos;inserted&apos; ? &apos;calendarcontrol&apos; : &apos;date&apos;\"/><Cell col=\"4\" displaytype=\"combocontrol\" edittype=\"combo\" text=\"bind:crrntYn\" combodataset=\"dsCrrntYn\" combocodecol=\"value\" combodatacol=\"text\"/></Band></Format></Formats>");
            this.divStdYmdResult.addChild(obj.name, obj);

            obj = new Static("deptList","0","0","81","45",null,null,null,null,null,null,this.divStdYmdResult.form);
            obj.set_taborder("1");
            obj.set_text("기준일자");
            obj.set_cssclass("sta_WF_subTitle01");
            obj.set_fittocontents("width");
            this.divStdYmdResult.addChild(obj.name, obj);

            obj = new Button("btnDelStdYmd",null,"14","61","26","0",null,null,null,null,null,this.divStdYmdResult.form);
            obj.set_taborder("3");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_Row_Delete");
            this.divStdYmdResult.addChild(obj.name, obj);

            obj = new Button("btnAddStdYmd",null,"14","61","26","66",null,null,null,null,null,this.divStdYmdResult.form);
            obj.set_taborder("2");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_Row_Add");
            this.divStdYmdResult.addChild(obj.name, obj);

            obj = new Div("divOrgnResult","divStdYmdResult:10","73","25.42%","617",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Grid("grdOrgn","0","45",null,null,"0","25",null,null,null,null,this.divOrgnResult.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsOrgnList");
            obj.set_autofittype("col");
            obj.set_autoenter("none");
            obj.set_autoupdatetype("itemselect");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("expand,null");
            obj.set_cssclass("grd_WF_tree");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"260\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"34\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"상태\"/><Cell col=\"3\" text=\"조직\"/><Cell col=\"4\" text=\"정렬순서\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\" text=\"expr:currow+1\" textAlign=\"center\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" textAlign=\"center\" text=\"bind:rowCheck\"/><Cell col=\"2\" textAlign=\"center\" imagestretch=\"fit\" displaytype=\"normal\" text=\"bind:rowStatus\"/><Cell col=\"3\" text=\"bind:orgnNm\" edittype=\"tree\" treelevel=\"bind:level\" textAlign=\"left\" displaytype=\"treeitemcontrol\" treecheck=\"bind:rowCheck\" treestartlevel=\"0\"/><Cell col=\"4\" text=\"bind:ordNo\" displaytype=\"editcontrol\" edittype=\"text\" textAlign=\"right\" editinputtype=\"number\"/></Band></Format></Formats>");
            this.divOrgnResult.addChild(obj.name, obj);

            obj = new Static("deptList","0","0","81","45",null,null,null,null,null,null,this.divOrgnResult.form);
            obj.set_taborder("1");
            obj.set_text("조직관리");
            obj.set_cssclass("sta_WF_subTitle01");
            obj.set_fittocontents("width");
            this.divOrgnResult.addChild(obj.name, obj);

            obj = new Button("btnAddSiblingRow",null,"14","125","26","196",null,null,null,null,null,this.divOrgnResult.form);
            obj.set_taborder("2");
            obj.set_text("같은 레벨 추가");
            obj.set_cssclass("btn_WF_Row_Add");
            this.divOrgnResult.addChild(obj.name, obj);

            obj = new Button("btnAddRow","btnAddSiblingRow:5","14","125","26",null,null,null,null,null,null,this.divOrgnResult.form);
            obj.set_taborder("3");
            obj.set_text("하위 레벨 추가");
            obj.set_cssclass("btn_WF_Row_Add");
            this.divOrgnResult.addChild(obj.name, obj);

            obj = new Button("btnDeleteRow","btnAddRow:5","14","61","26",null,null,null,null,null,null,this.divOrgnResult.form);
            obj.set_taborder("4");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_Row_Delete");
            obj.set_enable("true");
            this.divOrgnResult.addChild(obj.name, obj);

            obj = new Div("divDeptResult","divOrgnResult:10","73",null,"617","50",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Grid("grdDept","0","45",null,null,"0","25",null,null,null,null,this.divDeptResult.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsDeptList");
            obj.set_autofittype("col");
            obj.set_autoenter("none");
            obj.set_autoupdatetype("itemselect");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("expand,null");
            obj.set_cssclass("grd_WF_tree");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"190\"/><Column size=\"220\"/><Column size=\"100\"/><Column size=\"220\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"34\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"상태\"/><Cell col=\"3\" text=\"부서코드\"/><Cell col=\"4\" text=\"부서명\"/><Cell col=\"5\" text=\"부서장\"/><Cell col=\"6\" text=\"상위부서명\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\" text=\"expr:currow+1\" textAlign=\"center\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" textAlign=\"center\" text=\"bind:rowCheck\"/><Cell col=\"2\" textAlign=\"center\" imagestretch=\"fit\" displaytype=\"normal\" text=\"bind:rowStatus\"/><Cell col=\"3\" text=\"bind:deptCd\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:deptNm\"/><Cell col=\"5\" text=\"bind:deptLdrNm\"/><Cell col=\"6\" text=\"bind:upDeptNm\"/></Band></Format></Formats>");
            this.divDeptResult.addChild(obj.name, obj);

            obj = new Static("deptList","0","0","81","45",null,null,null,null,null,null,this.divDeptResult.form);
            obj.set_taborder("1");
            obj.set_text("부서목록");
            obj.set_cssclass("sta_WF_subTitle01");
            obj.set_fittocontents("width");
            this.divDeptResult.addChild(obj.name, obj);

            obj = new Static("staGridRowCnt","deptList:10","0","149","45",null,null,null,null,null,null,this.divDeptResult.form);
            obj.set_taborder("2");
            obj.set_text("(총 0건)");
            obj.set_cssclass("sta_WF_subResult");
            this.divDeptResult.addChild(obj.name, obj);

            obj = new Button("btnAddDept",null,"14","61","26","66",null,null,null,null,null,this.divDeptResult.form);
            obj.set_taborder("3");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_Row_Add");
            this.divDeptResult.addChild(obj.name, obj);

            obj = new Button("btnDeleteDept",null,"14","61","26","0",null,null,null,null,null,this.divDeptResult.form);
            obj.set_taborder("4");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_Row_Delete");
            this.divDeptResult.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"20","65","28","btnSave:3",null,null,null,null,null,this);
            obj.set_text("조회");
            obj.set_cssclass("");
            obj.set_taborder("5");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divStdYmdResult.form
            obj = new Layout("default","",0,0,this.divStdYmdResult.form,function(p){});
            this.divStdYmdResult.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divOrgnResult.form
            obj = new Layout("default","",0,0,this.divOrgnResult.form,function(p){});
            this.divOrgnResult.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDeptResult.form
            obj = new Layout("default","",0,0,this.divDeptResult.form,function(p){});
            this.divDeptResult.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1920,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("ORGN_1010M.xfdl","lib::common.xjs");
        this.registerScript("ORGN_1010M.xfdl", function() {
        /**
         *  관리 메뉴
         *  MenuPath      조직정보 - 조직관리
         *  FileName      ORGN_1010M.xfdl
         *  Creator 	  woohj
         *  CreateDate    2023.11.22
         *  Desction      관리 메뉴
         ************** 소스 수정 이력 ***********************************************
         *  date          Modifier    Description
         *******************************************************************************
         *  2023.11.22    woohj      최초 생성
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
        	this.divOrgnResult.form.grdOrgn.set_autoenter('none'); // 트리 더블클릭 적용 하기
        	this.fnLoadCombo();

        	this.fnStdYmdSearch(); //
        };

        /************************************************************************************************
         * TRANSACTION 서비스 호출 처리
         ************************************************************************************************/
         /**
         * description 콤보 러드
        */
         this.fnLoadCombo = function ()
        {
        	this.gfnLoadCombo("loadCombo", "dsCrrntYn=SM:CRRNT_YN:C", "fnComboCallback");
        };

        /**
         * description 조직관리 기준일자 조회
        */
        this.fnStdYmdSearch = function()
        {
        	var strSvcId    = "getOrgnStdYmdList";
        	var strSvcUrl   = "org/orgnztManage/getOrgnStdYmdList.do";
        	var inData      = "dsSearch";
        	var outData     = "dsOrgnStdYmdList";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId,strSvcUrl, inData,outData, strArg, callBackFnc, isAsync);
        };

        /**
         * description 조직관리 트리 조회
        */
        this.fnOrgnSearch = function()
        {
        	var nRow = this.dsOrgnStdYmdList.rowposition;
        	var rowStatus =  this.dsOrgnStdYmdList.getColumn(nRow, "rowStatus");

        	if (rowStatus == "inserted") {
        		this.dsSearch.setColumn(0, "stdYmd", "");
        	} else {
        		 this.dsSearch.setColumn(0, "stdYmd", this.dsOrgnStdYmdList.getColumn(nRow, "stdYmd"));
        	}

        	var strSvcId    = "getOrgnztManageList";
        	var strSvcUrl   = "org/orgnztManage/getOrgnztManageList.do";
        	var inData      = "dsSearch";
        	var outData     = "dsOrgnList";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId,strSvcUrl, inData,outData, strArg, callBackFnc, isAsync);
        };

        /**
         * description 부서관리 조회
        */
        this.fnDeptSearch = function()
        {
            this.dsSearch.setColumn(0, "orgnCd", this.dsOrgnList.getColumn(this.dsOrgnList.rowposition, "orgnCd"));

        	var strSvcId    = "getOrgnztDeptList";
        	var strSvcUrl   = "org/orgnztManage/getOrgnztDeptList.do";
        	var inData      = "dsSearch";
        	var outData     = "dsDeptList";
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
        	var strSvcId    = "saveOrgnztManage";
        	var strSvcUrl   = "org/orgnztManage/saveOrgnztManage.do";
        	var inData      = "dsOrgnStdYmdList dsOrgnList dsDeptList";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId,strSvcUrl, inData,outData, strArg, callBackFnc, isAsync);
        };

        /************************************************************************************************
         * CALLBACK 콜백 처리부분(Transaction, Popup)
         ************************************************************************************************/
        /**
         * description Combo Callback 함수
        */
        this.fnComboCallback = function (svcId, errorCode, errorMsg)
        {
        	this.fnStdYmdSearch();
        };

        /**
         * description Transaction Callback 함수
        */
        this.fnCallback = function (sSvcId, nErrorCode, sErrorMsg)
        {
        	switch (sSvcId) {
        		case "getOrgnStdYmdList":
                    break;
        		case "getOrgnztManageList":
                    break;
        		case "getOrgnztDeptList":
        			this.gfnRowCount(this.dsDeptList, this.divDeptResult.form.staGridRowCnt);
                    break;
        		case "saveOrgnztManage":
        			if(this.callbackMsg == "success"){
        				this.gfnAlert("CM_MSG_SAVE_SUCCESS");  // 저장 되었습니다.
        				this.dsSearch.clearData();
        				this.dsSearch.addRow();
        				this.fnStdYmdSearch();
        				this.fnBtnControlTrue();
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
        this.fnPopupAfter = function (popupId, args)
        {
            if (popupId == "ORGN_1000P") {
                var result = this.gfnGetPopupRtn();
                if (result == null) {
                    return;     // 취소시 항목의 프로그램 ID를 변경하지 않음
                }

                var sDept = result.sDept;

        		for(var i=0; i < sDept.length; i++) {
        			var item = sDept[i];
        			var row = this.dsDeptList.addRow();

        			this.dsDeptList.setColumn(row, "deptCd", item.deptCd); // item["deptId"]
        			this.dsDeptList.setColumn(row, "deptNm", item.deptNm);
        			this.dsDeptList.setColumn(row, "deptLdrId", item.deptLdrId);
        			this.dsDeptList.setColumn(row, "deptLdrNm", item.deptLdrNm);
        			this.dsDeptList.setColumn(row, "upDeptCd", item.upDeptCd);
        			this.dsDeptList.setColumn(row, "upDeptNm", item.upDeptNm);

        			this.dsDeptList.setColumn(row, "orgnCd", this.dsOrgnList.getColumn(this.dsOrgnList.rowposition, "orgnCd")); // 조직관리번호 가져오기
        		}
            }
        };


        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        /**
         * description 조회버튼
        */
        this.btnSearch_onclick = function(obj,e)
        {
        	this.fnStdYmdSearch();
        	this.fnBtnControlTrue();
        };

        /**
         * description 기준일자 변경 - 조직관리 rowposition change 이벤트
        */
        this.dsOrgnStdYmdList_onrowposchanged = function(obj,e)
        {
        	for(var i = 0; i < this.dsOrgnStdYmdList.getRowCount(); i++) {
                this.dsOrgnStdYmdList.setColumn(i, "rowCheck", 0);
            }
            this.dsOrgnStdYmdList.setColumn(e.newrow, "rowCheck", 1);

        	this.dsOrgnList.clearData();
        	this.dsDeptList.clearData();

        	this.fnOrgnSearch();

        };

        /**
         * description 조직 변경 - 부서목록 rowposition change 이벤트
        */
        this.dsOrgnList_onrowposchanged = function(obj,e)
        {
        	for(var i = 0; i < this.dsOrgnList.getRowCount(); i++) {
                this.dsOrgnList.setColumn(i, "rowCheck", 0);
            }
            this.dsOrgnList.setColumn(e.newrow, "rowCheck", 1);

        		// rowStatus에 따라 변경된 데이터가 있는지 확인
        	if(this.dsOrgnList.findRow("rowStatus", "inserted") > -1){
        		this.divOrgnResult.form.grdOrgn.setCellPos( 3,  this.dsOrgnList.findRow("rowStatus", "inserted"));

        		this.gfnAlert("CM_MSG_CHANGE_DATA");
        		return ;
        	} else if (this.dsOrgnList.findRow("rowStatus", "updated") > -1){
        		this.divOrgnResult.form.grdOrgn.setCellPos( 3,  this.dsOrgnList.findRow("rowStatus", "updated"));

        		this.gfnAlert("CM_MSG_CHANGE_DATA");
        		return ;
        	} else if (this.dsOrgnList.findRowExpr("rowStatus=='deleted'") > -1){
        		this.divOrgnResult.form.grdOrgn.setCellPos( 3,  this.dsOrgnList.findRowExpr("rowStatus=='deleted'"));

        		this.gfnAlert("CM_MSG_CHANGE_DATA");
        		return ;
        	}

        	this.fnDeptSearch();
        };

        /**
         * description 저장
        */
        this.btnSave_onclick = function(obj,e)
        {
        	if(this.dsOrgnStdYmdList.rowcount == 0 && this.dsOrgnList.rowcount == 0 && this.dsDeptList.rowcount == 0){
        		this.gfnAlert("CM_MSG_SAVE_NODATA");  	// 저장할 데이터가 없습니다.
        		return;
        	}
        	if (!this.gfnDsIsUpdated(this.dsOrgnStdYmdList) && !this.gfnDsIsUpdated(this.dsOrgnList) && !this.gfnDsIsUpdated(this.dsDeptList)) {
        		this.gfnAlert("CM_MSG_SAVE_NOCHANGE");  // 변경된 내역이 없습니다.
        		return;
        	}

        	if (!this.fnValidationStdYmd()) { 			// 기준일 체크
        		return;
            }

        	if (!this.fnValidationOrgn()) { 			// 조직관리 체크
        		return;
            }

        	this.gfnAlert("CM_CFM_BEFORE_SAVE", "", "", {trueFunc: "fnSave", falseFunc: ""});  // 변경된 내역을 저장 하시겠습니까?
        	return;
        };

        /**
         * description 기준일 행추가
        */
        this.divStdYmdResult_btnAddStdYmd_onclick = function(obj,e)
        {
        	this.gfnInsertRow(this.dsOrgnStdYmdList, "last"); // 새로 추가한 행으로

        	this.dsOrgnStdYmdList.setColumn(this.dsOrgnStdYmdList.rowposition , "stdYmd", new Date)

        	this.dsSearch.clearData();
        	this.dsOrgnList.clearData();

        	this.dsSearch.addRow();
        	this.fnBtnControlFalseInsert();
        };

        /**
         * description 기준일 행삭제
        */
        this.divStdYmdResult_btnDelStdYmd_onclick = function(obj,e)
        {
        	var nCnt = this.dsOrgnList.rowcount;
        	if (nCnt > 0) {
        		alert("조직관리 삭제 후 기준일 삭제 가능합니다.");
        		return;
        	}

        	this.gfnDeleteRow(this.dsOrgnStdYmdList);
        	this.fnBtnControlFalseInsert();
        };

        /**
         * description 같은 레벨 조직 추가버튼
        */
        this.divResult_btnAddSiblingRow_onclick = function(obj,e)
        {
        	var nRow = this.dsOrgnList.rowposition;

        	this.fnOrgnBtnControlFalseInsert(); // 버튼 사용여부

        	// rowStatus에 따라 변경된 데이터가 있는지 확인
        	if(this.dsOrgnList.findRow("rowStatus", "inserted") > -1){
        		this.divOrgnResult.form.grdOrgn.setCellPos( 3,  this.dsOrgnList.findRow("rowStatus", "inserted"));

        		this.gfnAlert("CM_MSG_CHANGE_DATA");
        		return ;
        	} else if (this.dsOrgnList.findRow("rowStatus", "updated") > -1){
        		this.divOrgnResult.form.grdOrgn.setCellPos( 3,  this.dsOrgnList.findRow("rowStatus", "updated"));

        		this.gfnAlert("CM_MSG_CHANGE_DATA");
        		return ;
        	} else if (this.dsOrgnList.findRowExpr("rowStatus=='deleted'") > -1){
        		this.divOrgnResult.form.grdOrgn.setCellPos( 3,  this.dsOrgnList.findRowExpr("rowStatus=='deleted'"));

        		this.gfnAlert("CM_MSG_CHANGE_DATA");
        		return ;
        	}

        	if(nRow < 0 || nRow == null) {
        		this.fnAddTopmostRow();     // 상위레벨 추가
        	} else {
        		this.fnAddSiblingRow(nRow); // 같은레벨 추가
        	}
        };

        /**
         * description 하위 레벨 조직 추가 버튼
        */
        this.divResult_btnAddRow_onclick = function(obj,e)
        {
        	var nRow = this.dsOrgnList.rowposition;
        	this.fnOrgnBtnControlFalseInsert();

        	if(this.dsOrgnList.findRow("rowStatus", "inserted") > -1){
        		this.divOrgnResult.form.grdOrgn.setCellPos( 3,  this.dsOrgnList.findRow("rowStatus", "inserted"));
        		this.gfnAlert("CM_MSG_CHANGE_DATA");
        		return ;
        	} else if (this.dsOrgnList.findRow("rowStatus", "updated") > -1){
        		this.divOrgnResult.form.grdOrgn.setCellPos( 3,  this.dsOrgnList.findRow("rowStatus", "updated"));
        		this.gfnAlert("CM_MSG_CHANGE_DATA");
        		return ;
        	} else if (this.dsOrgnList.findRowExpr("rowStatus=='deleted'") > -1){
        		this.divOrgnResult.form.grdOrgn.setCellPos( 3,  this.dsOrgnList.findRowExpr("rowStatus=='deleted'"));

        		this.gfnAlert("CM_MSG_CHANGE_DATA");
        		return ;
        	}

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
        	var indices = this.gfnGetCheckedRows(this.dsOrgnList, "rowCheck");
            var thisObj = this;

            if (!indices.every(function (e) { return this.fnCheckDeletable(e); }, this)) {
                return;
            }

        	var nCnt = this.dsDeptList.rowcount;
        	if (nCnt > 0) {
        		alert("부서 삭제 후 조직항목 삭제 가능합니다.");
        		return;
        	}

            this.gfnDeleteRow(this.dsOrgnList);
        	this.fnOrgnBtnControlFalseInsert();
        };

        /**
         * description 트리 셀 더블클릭 - orgnNm Edit
        */
        this.divOrgnResult_grdOrgn_oncelldblclick = function(obj,e)
        {
        	if (e.col == obj.getBindCellIndex("body", "orgnNm")) {
                var pos = obj.currentcell;
                obj.setCellProperty("body", pos, "edittype", "normal"); // 셀의 속성값 설정
                obj.setCellPos(pos);
            }
        };

        /**
         * description 부서목록 추가
        */
        this.divDeptResult_btnAddDept_onclick = function(obj,e)
        {
        	if (!this.gfnIsGridChecked(this.dsOrgnList, "rowCheck")) {
        		this.gfnAlert("부서를 추가할 조직을 체크해주세요");
        		return;
        	}

        	this.fnDeptBtnControlFalseInsert();

        	var oArg = {
                deptCd: this.dsDeptList.getColumn(this.dsDeptList.findRow("rowCheck", 1), "deptCd"),
                deptNm: this.dsDeptList.getColumn(this.dsDeptList.findRow("rowCheck", 1), "deptNm"),
        		deptLdrId: this.dsDeptList.getColumn(this.dsDeptList.findRow("rowCheck", 1), "deptLdrId"),
                deptLdrNm: this.dsDeptList.getColumn(this.dsDeptList.findRow("rowCheck", 1), "deptLdrNm"),
                upDeptCd: this.dsDeptList.getColumn(this.dsDeptList.findRow("rowCheck", 1), "upDeptCd"),
                upDeptNm: this.dsDeptList.getColumn(this.dsDeptList.findRow("rowCheck", 1), "upDeptNm"),
            }; // 정보

        	this.gfnOpenPopup("ORGN_1000P", "pts::org/ptsOrgnInfo/ORGN_1000P.xfdl", oArg, "fnPopupAfter", "");
        };


        /**
         * description 부서목록 삭제
        */
        this.divDeptResult_btnDeleteDept_onclick = function(obj,e)
        {
        	if (!this.gfnIsGridChecked(this.dsDeptList, "rowCheck")) {
        		this.gfnAlert("삭제할 부서을 체크해주세요");
        		return;
        	}

        	this.fnDeptBtnControlFalseInsert();

        	this.gfnDeleteRow(this.dsDeptList);
        };



        /************************************************************************************************
        * 사용자 FUNCTION 영역
        ************************************************************************************************/
        /**
         * description 상위 레벨 추가
        */
        this.fnAddTopmostRow = function ()
        {
            this.gfnInsertRow(this.dsOrgnList, "last");
        	var i = this.dsOrgnList.rowposition;
            var grid = this.divOrgnResult.form.grdOrgn;

            this.dsOrgnList.setColumn(i, "level", 0);

        	this.dsOrgnList.setColumn(i, "stdYmd", this.dsSearch.getColumn(0, "stdYmd"));
        };

        /**
         * description 같은 레벨 추가
        */
        this.fnAddSiblingRow = function (row)
        {
            var grid = this.divOrgnResult.form.grdOrgn;
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

            this.dsOrgnList.insertRow(i);
            this.dsOrgnList.setColumn(i, "level", parseInt(this.dsOrgnList.getColumn(row, "level")));
            this.dsOrgnList.setColumn(i, "upOrgnCd", this.dsOrgnList.getColumn(pRow, "orgnCd"));
        	this.dsOrgnList.setColumn(i, "upOrgnNm", this.dsOrgnList.getColumn(pRow, "orgnNm"));

        	this.dsOrgnList.setColumn(i, "stdYmd", this.dsSearch.getColumn(0, "stdYmd"));

        };

        /**
         * description 하위 레벨 추가
        */
        this.fnAddChildRow = function (row)
        {
            var i = row;
            var grid = this.divOrgnResult.form.grdOrgn;
            while (grid.getTreeChildRow(i, -1) >= 0) {
                i = grid.getTreeChildRow(i, -1)
            }

            i++;

            this.dsOrgnList.insertRow(i);
            this.dsOrgnList.setColumn(i, "level", parseInt(this.dsOrgnList.getColumn(row, "level")) + 1);
            this.dsOrgnList.setColumn(i, "upOrgnCd", this.dsOrgnList.getColumn(row, "orgnCd"));
        	this.dsOrgnList.setColumn(i, "upOrgnNm", this.dsOrgnList.getColumn(row, "orgnNm"));

        	this.dsOrgnList.setColumn(i, "stdYmd", this.dsSearch.getColumn(0, "stdYmd"));
        };

        /**
         * description 트리 삭제할 시 확인
        */
        this.fnCheckDeletable = function (row)
        {
            if (!this.divOrgnResult.form.grdOrgn.isTreeLeafRow(row) ) {
                this.gfnAlert("CM_MENU_CANNOT_DELETE_NOT_LEAF");
                return false;
            }

            return true;
        };

        /**
         * description 기준일 추가/삭제 시 버튼컨트롤(if disable)
        */
        this.fnBtnControlFalseInsert = function()
        {
        	this.divOrgnResult.form.btnAddSiblingRow.set_enable(false);
        	this.divOrgnResult.form.btnAddRow.set_enable(false);
        	this.divOrgnResult.form.btnDeleteRow.set_enable(false);
        	this.divDeptResult.form.btnAddDept.set_enable(false);
        	this.divDeptResult.form.btnDeleteDept.set_enable(false);
        }

        /**
         * description 조직 추가/삭제 시 버튼컨트롤(if disable)
        */
        this.fnOrgnBtnControlFalseInsert = function ()
        {
        	this.divStdYmdResult.form.btnAddStdYmd.set_enable(false);
        	this.divStdYmdResult.form.btnDelStdYmd.set_enable(false);
        	this.divDeptResult.form.btnAddDept.set_enable(false);
        	this.divDeptResult.form.btnDeleteDept.set_enable(false);
        	this.divOrgnResult.form.btnDeleteRow.set_enable(false);
        };

        /**
         * description 부서 추가/삭제 시 버튼컨트롤(if disable)
        */
        this.fnDeptBtnControlFalseInsert = function ()
        {
        	this.divStdYmdResult.form.btnAddStdYmd.set_enable(false);
        	this.divStdYmdResult.form.btnDelStdYmd.set_enable(false);
        	this.divOrgnResult.form.btnAddSiblingRow.set_enable(false);
        	this.divOrgnResult.form.btnAddRow.set_enable(false);
        	this.divOrgnResult.form.btnDeleteRow.set_enable(false);
        };

        /**
         * description 버튼컨트롤(enable)
        */
        this.fnBtnControlTrue = function()
        {
        	this.divStdYmdResult.form.btnAddStdYmd.set_enable(true);
        	this.divStdYmdResult.form.btnDelStdYmd.set_enable(true);

        	this.divOrgnResult.form.btnAddSiblingRow.set_enable(true);
        	this.divOrgnResult.form.btnAddRow.set_enable(true);
        	this.divOrgnResult.form.btnDeleteRow.set_enable(true);

        	this.divDeptResult.form.btnAddDept.set_enable(true);
        	this.divDeptResult.form.btnDeleteDept.set_enable(true);
        }


        /**
         * description 기준일 밸리데이션
        */
        this.fnValidationStdYmd = function ()
        {
        	// crrntYn 현재사용여부가 list에 1 이상이면 안됨

        	var yCount = 0;

        	for(var i = 0; i < this.dsOrgnStdYmdList.getRowCount(); i++){

        		var nCrrnYn = this.dsOrgnStdYmdList.getColumn(i, "crrntYn", "Y");

        		if(nCrrnYn === "Y") {
        			yCount++;
        		}

        		if(yCount > 1) {
        			alert("기준일 사용은 1개만 가능합니다.")
        			return;
        		}

        	}


            var args = [
        		["crrntYn", "NULL|MAX_LEN:1", "현재사용여부"]
            ];

            return this.gfnCheckGrid(this.divStdYmdResult.form.grdStdYmd, args, "");
        };


        /**
         * description 조직관리 밸리데이션
        */
        this.fnValidationOrgn = function ()
        {
            var args = [
        		["orgnNm", "NULL|MAX_LEN:150", "조직명"],
        		["ordNo", "NULL", "정렬 순서 번호"]
            ];

            return this.gfnCheckGrid(this.divOrgnResult.form.grdOrgn, args, "");
        };






        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnSave.addEventHandler("onclick",this.btnSave_onclick,this);
            this.divStdYmdResult.form.deptList.addEventHandler("onclick",this.Static09_onclick,this);
            this.divStdYmdResult.form.btnDelStdYmd.addEventHandler("onclick",this.divStdYmdResult_btnDelStdYmd_onclick,this);
            this.divStdYmdResult.form.btnAddStdYmd.addEventHandler("onclick",this.divStdYmdResult_btnAddStdYmd_onclick,this);
            this.divOrgnResult.form.grdOrgn.addEventHandler("oncelldblclick",this.divOrgnResult_grdOrgn_oncelldblclick,this);
            this.divOrgnResult.form.deptList.addEventHandler("onclick",this.Static09_onclick,this);
            this.divOrgnResult.form.btnAddSiblingRow.addEventHandler("onclick",this.divResult_btnAddSiblingRow_onclick,this);
            this.divOrgnResult.form.btnAddRow.addEventHandler("onclick",this.divResult_btnAddRow_onclick,this);
            this.divOrgnResult.form.btnDeleteRow.addEventHandler("onclick",this.divResult_btnDeleteRow_onclick,this);
            this.divDeptResult.form.deptList.addEventHandler("onclick",this.Static09_onclick,this);
            this.divDeptResult.form.btnAddDept.addEventHandler("onclick",this.divDeptResult_btnAddDept_onclick,this);
            this.divDeptResult.form.btnDeleteDept.addEventHandler("onclick",this.divDeptResult_btnDeleteDept_onclick,this);
            this.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
            this.dsOrgnStdYmdList.addEventHandler("onrowposchanged",this.dsOrgnStdYmdList_onrowposchanged,this);
            this.dsOrgnList.addEventHandler("onrowposchanged",this.dsOrgnList_onrowposchanged,this);
        };
        this.loadIncludeScript("ORGN_1010M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
