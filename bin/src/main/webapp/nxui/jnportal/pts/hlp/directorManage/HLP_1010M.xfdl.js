(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("HLP_1010M");
            this.set_titletext("담당자 관리");
            this.set_cssclass("frm_WF_comp");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsUseYn", this);
            obj._setContents("<ColumnInfo><Column id=\"value\" type=\"STRING\" size=\"256\"/><Column id=\"text\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj.set_updatecontrol("true");
            obj._setContents("<ColumnInfo><Column id=\"searchType\" type=\"STRING\" size=\"256\"/><Column id=\"searchKeyword\" type=\"STRING\" size=\"256\"/><Column id=\"hlpPicId\" type=\"STRING\" size=\"256\"/><Column id=\"hlpWkClsCd\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsWorkKindCbo", this);
            obj.set_updatecontrol("true");
            obj._setContents("<ColumnInfo><Column id=\"text\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj.set_updatecontrol("true");
            obj._setContents("<ColumnInfo><Column id=\"rowCheck\" type=\"STRING\" size=\"256\"/><Column id=\"rowStatus\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"hlpPicId\" type=\"STRING\" size=\"256\"/><Column id=\"hlpWkClsCd\" type=\"STRING\" size=\"256\"/><Column id=\"powCd\" type=\"STRING\" size=\"256\"/><Column id=\"hlpWkClsCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"powCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"hlpPicIdNm\" type=\"STRING\" size=\"256\"/><Column id=\"memberId\" type=\"STRING\" size=\"256\"/><Column id=\"hlpPicIdMember\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearchCbo", this);
            obj.set_updatecontrol("true");
            obj._setContents("<ColumnInfo><Column id=\"text\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsWorkKindListCbo", this);
            obj._setContents("<ColumnInfo><Column id=\"value\" type=\"STRING\" size=\"256\"/><Column id=\"text\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPowCbo", this);
            obj._setContents("<ColumnInfo><Column id=\"value\" type=\"STRING\" size=\"256\"/><Column id=\"text\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"value\">0</Col><Col id=\"text\">선택</Col></Row><Row><Col id=\"value\">CMW-020-010</Col><Col id=\"text\">인프라관리</Col></Row><Row><Col id=\"value\">CMW-020-020</Col><Col id=\"text\">네트워크관리</Col></Row><Row><Col id=\"value\">CMW-020-030</Col><Col id=\"text\">데이터베이스관리</Col></Row><Row><Col id=\"value\">CMW-020-040</Col><Col id=\"text\">포털관리</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btnSave",null,"20","65","28","49",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Save");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"20","65","28","btnSave:3",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle","50","0","500","58",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("담당자 관리");
            obj.set_cssclass("sta_WF_compTitle01");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","50","58",null,"70","50",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staBg","0","0",null,"56","0",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_bg");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static10","0","0","20",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("w20");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static15_01_00_00","20","55","50",null,null,"40",null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staSearch","20","15","100","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("분류");
            obj.set_cssclass("sta_WF_condition01");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboAll","staSearch:10","15","140","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_innerdataset("dsWorkKindCbo");
            obj.set_codecolumn("value");
            obj.set_datacolumn("text");
            obj.set_text("Combo00");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchId00","cboAll:5","15","140","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_innerdataset("dsSearchCbo");
            obj.set_codecolumn("value");
            obj.set_datacolumn("text");
            obj.set_text("Combo00");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSearchNm","cboSearchId00:5","15","1250","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divDirectorResult","50","divSearch:0",null,null,"50","37",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Grid("grdDirectorList","0","45",null,null,"0","0",null,null,null,null,this.divDirectorResult.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsList");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_autoupdatetype("itemselect");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\" band=\"left\"/><Column size=\"48\" band=\"left\"/><Column size=\"48\" band=\"left\"/><Column size=\"145\"/><Column size=\"177\"/><Column size=\"195\"/><Column size=\"219\"/><Column size=\"96\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"34\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"순번\"/><Cell col=\"2\" text=\"상태\"/><Cell col=\"3\" text=\"분류\"/><Cell col=\"4\" text=\"담당자 ID\"/><Cell col=\"5\" text=\"담당자\"/><Cell col=\"6\" text=\"담당분야\"/><Cell col=\"7\" text=\"사용여부\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" textAlign=\"center\" text=\"bind:rowCheck\"/><Cell col=\"1\" expr=\"currow+1\" text=\"expr:currow+1\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:rowStatus\"/><Cell col=\"3\" displaytype=\"combocontrol\" edittype=\"combo\" text=\"bind:hlpWkClsCd\" combodataset=\"dsWorkKindListCbo\" combodatacol=\"text\" textAlign=\"center\" combocodecol=\"value\"/><Cell col=\"4\" text=\"bind:hlpPicIdMember\" textAlign=\"center\" editmaxlength=\"-1\" displaytype=\"normal\" edittype=\"none\" expandshow=\"hide\" expandsize=\"16\"/><Cell col=\"5\" text=\"bind:hlpPicIdNm\" editmaxlength=\"20\" textAlign=\"center\" displaytype=\"normal\"/><Cell col=\"6\" text=\"bind:powCd\" edittype=\"combo\" displaytype=\"combocontrol\" combodataset=\"dsPowCbo\" combodatacol=\"text\" textAlign=\"center\" combocodecol=\"value\"/><Cell col=\"7\" text=\"bind:useYn\" edittype=\"combo\" displaytype=\"combocontrol\" combodataset=\"dsUseYn\" combocodecol=\"value\" combodatacol=\"text\" textAlign=\"left\"/></Band></Format></Formats>");
            this.divDirectorResult.addChild(obj.name, obj);

            obj = new Button("btnDeleteRowGroup",null,"14","73","26","0",null,null,null,null,null,this.divDirectorResult.form);
            obj.set_taborder("2");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_Row_Delete");
            this.divDirectorResult.addChild(obj.name, obj);

            obj = new Button("btnAddRowGroup",null,"14","73","26","btnDeleteRowGroup:5",null,null,null,null,null,this.divDirectorResult.form);
            obj.set_taborder("1");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_Row_Add");
            this.divDirectorResult.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_00_00","90","0","60","45",null,null,null,null,null,null,this.divDirectorResult.form);
            obj.set_taborder("3");
            obj.set_text("h 45");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divDirectorResult.addChild(obj.name, obj);

            obj = new Static("staGridRowCnt","0","0","150","45",null,null,null,null,null,null,this.divDirectorResult.form);
            obj.set_taborder("4");
            obj.set_text("총 0건");
            obj.set_cssclass("sta_WF_subTxt");
            this.divDirectorResult.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDirectorResult.form
            obj = new Layout("default","",0,0,this.divDirectorResult.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.grdDirectorList.set_taborder("0");
                p.grdDirectorList.set_binddataset("dsList");
                p.grdDirectorList.set_autofittype("col");
                p.grdDirectorList.set_autoenter("select");
                p.grdDirectorList.set_autoupdatetype("itemselect");
                p.grdDirectorList.move("0","45",null,null,"0","0");

                p.btnDeleteRowGroup.set_taborder("2");
                p.btnDeleteRowGroup.set_text("행삭제");
                p.btnDeleteRowGroup.set_cssclass("btn_WF_Row_Delete");
                p.btnDeleteRowGroup.move(null,"14","73","26","0",null);

                p.btnAddRowGroup.set_taborder("1");
                p.btnAddRowGroup.set_text("행추가");
                p.btnAddRowGroup.set_cssclass("btn_WF_Row_Add");
                p.btnAddRowGroup.move(null,"14","73","26","btnDeleteRowGroup:5",null);

                p.Static04_00_00_00_00.set_taborder("3");
                p.Static04_00_00_00_00.set_text("h 45");
                p.Static04_00_00_00_00.set_visible("false");
                p.Static04_00_00_00_00.set_background("aqua");
                p.Static04_00_00_00_00.set_color("blue");
                p.Static04_00_00_00_00.set_textAlign("center");
                p.Static04_00_00_00_00.set_verticalAlign("middle");
                p.Static04_00_00_00_00.set_opacity("0.7");
                p.Static04_00_00_00_00.set_font("normal 12px/normal \"Arial\"");
                p.Static04_00_00_00_00.move("90","0","60","45",null,null);

                p.staGridRowCnt.set_taborder("4");
                p.staGridRowCnt.set_text("총 0건");
                p.staGridRowCnt.set_cssclass("sta_WF_subTxt");
                p.staGridRowCnt.move("0","0","150","45",null,null);
            	}
            );
            this.divDirectorResult.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divDirectorResult.form
            obj = new Layout("screen00","",0,0,this.divDirectorResult.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divDirectorResult.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1920,720,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("담당자 관리");
                p.set_cssclass("frm_WF_comp");

                p.btnSave.set_taborder("4");
                p.btnSave.set_text("저장");
                p.btnSave.set_cssclass("btn_WF_Save");
                p.btnSave.move(null,"20","65","28","49",null);

                p.btnSearch.set_taborder("0");
                p.btnSearch.set_text("조회");
                p.btnSearch.move(null,"20","65","28","btnSave:3",null);

                p.staTitle.set_taborder("1");
                p.staTitle.set_text("담당자 관리");
                p.staTitle.set_cssclass("sta_WF_compTitle01");
                p.staTitle.move("50","0","500","58",null,null);

                p.divSearch.set_taborder("2");
                p.divSearch.set_text("");
                p.divSearch.move("50","58",null,"70","50",null);

                p.divDirectorResult.set_taborder("3");
                p.divDirectorResult.set_text("");
                p.divDirectorResult.set_cssclass("div_WF_Area");
                p.divDirectorResult.move("50","divSearch:0",null,null,"50","37");
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
            obj = new BindItem("item1","divSearch.form.cboSearchId00","value","dsSearch","searchType");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.edtSearchNm","value","dsSearch","searchKeyword");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divSearch.form.cboAll","value","dsSearch","hlpWkClsCd");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("HLP_1010M.xfdl","lib::common.xjs");
        this.registerScript("HLP_1010M.xfdl", function() {
        /**
        *  사이트 관리
        *  MenuPath      온라인 헬프 > 담당자 관리
        *  FileName      HLP_1010M.xfdl
        *  Creator 	     yuyr
        *  CreateDate    2023.11.30
        *  Desction      그리드 엑셀 업로드
        ************** 소스 수정 이력 ***********************************************
        *  date          Modifier    Description
        *******************************************************************************
        *  2023.11.24    yuyr 	 최초 생성
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
         * description 콤보 조회
        */

        this.fnLoadCombo = function ()
        {
            this.gfnLoadCombo("loadCombo", "dsWorkKindCbo=PTS:WORK_CATEGORY:A dsSearchCbo=PTS:HLP_SEARCH_TY:A dsWorkKindListCbo=PTS:WORK_CATEGORY:A dsUseYn=SM:USE_YN:C", "fnComboCallback");
        };

        /**
         * description 담당자 관리 조회
        */
        this.fnSearch = function ()
        {
        	var strSvcId    = "getDirectorManageList";
        	var strSvcUrl   = "hlp/directorManage/getDirectorManageList.do";
        	var inData      = "dsSearch";
        	var outData     = "dsList";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        /**
         * description 담당자 관리 저장
        */
        this.fnSave = function ()
        {
        	var strSvcId    = "saveDirectorManageList";
        	var strSvcUrl   = "hlp/directorManage/saveDirectorManageList.do";
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
            if (svcId == "loadCombo") {
                this.fnSearch();
            }
        };

        this.fnCallback = function (svcId, errorCode, errorMsg)
        {
            switch (svcId) {
                case "getDirectorManageList":
        			//총 건수 계산
        			this.gfnRowCount(this.dsList, this.divDirectorResult.form.staGridRowCnt);
                    break;
                case "saveDirectorManageList":
                    if (this.callbackMsg == "success") {
                        this.gfnAlert("CM_MSG_SAVE_SUCCESS");  // 저장 되었습니다.
        				// 그리드 행 수 다시 계산
        				this.gfnRowCount(this.dsList, this.divDirectorResult.form.staGridRowCnt);
        				// 계산 후 검색 함수 호출
                        this.fnSearch();
                    }
                    break;
        		default:
        		break;
            }
        };

        this.fnPopupClosed = function (popupId, args)
        {
        	// 팝업에서 반환된 결과를 가져오는 함수
            const result = this.gfnGetPopupRtn();
        	// 팝업에서 반환된 결과를 저장할 변수 선언
            let user;

            switch (popupId) {
                case "selectUser":
                    if (result.canceled) {
                        this.gfnAlert("취소됨");
                        return;
                    }
                    user = result.user;

        			// 새로운 행을 마지막에 추가하는 함수
                    this.gfnInsertRow(this.dsList, "last");

        			// dataSet의 현재 행에 사용자 정보를 설정
                    this.dsList.setColumn(this.dsList.rowposition, "hlpPicId", user.userId);
        			this.dsList.setColumn(this.dsList.rowposition, "hlpPicIdMember", user.memberId);
                    this.dsList.setColumn(this.dsList.rowposition, "hlpPicIdNm", user.userNmKr);
                    break;
        		 default:
                    break;
        	}
        };

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        /**
         * description 그룹 행추가 클릭
        */
        this.divCode_btnAddRowGroup_onclick = function(obj,e)
        {
        	this.fnAddPic("single");
        //	this.fnAddRow();
        };

        /**
         * description 그룹 행삭제 클릭
        */
        this.divCode_btnDeleteRowGroup_onclick = function(obj,e)
        {
        	this.fnDeleteRow();
        };


        /**
         * description 조회버튼 클릭
        */
        this.btnSearch_onclick = function(obj,e)
        {
            this.fnSearch();
        };

        /**
         * description 그리드해드 클릭
        */
        this.divCode_grdCodeHeader_onheadclick = function(obj,e)
        {
        	this.gfnSetGridCheckAll(obj, e, "rowCheck");
        };

        /**
         * description 저장버튼 클릭
        */
        this.btnSave_onclick = function(obj,e)
        {
        	this.fnBeforeSave();
        };

        this.divSiteResult_grdSiteList_onexpandup = function(obj,e)
        {
        	this.fnOpenPicSearchPopup();
        };


        /**
         * description 엔터키 이벤트
        */
        this.divSearch_edtSearchNm_onchanged = function(obj,e)
        {
        	if(e.keycode==13){
        		this.btnSearch_onclick();
        	}
        };

        /************************************************************************************************
        * 사용자 FUNCTION 영역
        ************************************************************************************************/
        // this.fnAddRow = function ()
        // {
        //     this.gfnInsertRow(this.dsList, "last");
        //     var i = this.dsList.rowposition;
        //     this.dsList.setColumn(i, "useYn", "Y");
        // 	this.dsSearch.clearData();
        // 	this.dsSearch.addRow();
        // };

        /**
         * 담당자를 추가한다.
         *
         * @param {"single" | "multiple"} mode 부서선택 모드(single: 단일, multiple: 다중)
         */
        this.fnAddPic = function (mode)
        {
            const args = {
                mode: "single",
        		// 초기화 할건지
                enableReset: false
            };

            this.gfnOpenPopup("selectUser", "cmm::userSearchPopup.xfdl", args, "fnPopupClosed", "");
        };


        this.fnDeleteRow = function ()
        {
        	this.gfnDeleteRow(this.dsList);
        };


        this.fnBeforeSave = function ()
        {
        	// 유효성 검사
             if (!this.fnValidate()) {
                 return;
        	}

            this.gfnAlert("CM_CFM_BEFORE_SAVE", "", "", {trueFunc: "fnSave", falseFunc: ""});  // 변경된 내역을 저장 하시겠습니까?
        };

        //this.fnOpenPicSearchPopup = function ()
        //{
        //     var args = {
        //         mode: "single",
        //         hlpPicId: this.dsList.getColumn(this.dsList.rowposition, "hlpPicId"),
        //     };
        //     const args = {
        //         mode: "single",
        // 		// 초기화 할건지
        //         enableReset: false
        //     };
        //
        //     this.gfnOpenPopup("selectUser", "cmm::userSearchPopup.xfdl", args, "fnPopupClosed", "");
        // };

        this.fnValidate = function ()
        {
            if (this.dsList.rowcount == 0 || !this.gfnDsIsUpdated(this.dsList)) {
                this.gfnAlert("CM_MSG_SAVE_NODATA");  // 저장할 데이터가 없습니다.
                return false;
            }

        	if (!this.gfnDsIsUpdated(this.dsList)) {
        		this.gfnAlert("CM_MSG_SAVE_NOCHANGE");  // 변경된 내역이 없습니다.
        		return false;
        	}

            var args = [
                ["hlpPicId", "NULL|MAX_LEN:10", "헬프담당자ID"],
        		["hlpWkClsCd", "MAX_LEN:20", "업무분류"],
        		["powCd", "MAX_LEN:20", "담당분야코드"]
            ];

            return this.gfnCheckGrid(this.divDirectorResult.form.grdDirectorList, args, "");
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnSave.addEventHandler("onclick",this.btnSave_onclick,this);
            this.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
            this.staTitle.addEventHandler("onclick",this.staTitle_onclick,this);
            this.divSearch.form.staBg.addEventHandler("onclick",this.div_Search_Static00_onclick,this);
            this.divSearch.form.Static15_01_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.divSearch.form.staSearch.addEventHandler("onclick",this.row1_Div00_Static01_onclick,this);
            this.divSearch.form.cboAll.addEventHandler("onitemchanged",this.divSearch_systemIdCombo_onitemchanged,this);
            this.divSearch.form.cboAll.addEventHandler("onkeyup",this.divSearch_edtSearchNm_onchanged,this);
            this.divSearch.form.cboSearchId00.addEventHandler("onitemchanged",this.divSearch_systemIdCombo_onitemchanged,this);
            this.divSearch.form.cboSearchId00.addEventHandler("onkeyup",this.divSearch_edtSearchNm_onchanged,this);
            this.divSearch.form.edtSearchNm.addEventHandler("onkeyup",this.divSearch_edtSearchNm_onchanged,this);
            this.divDirectorResult.form.grdDirectorList.addEventHandler("onexpandup",this.divSiteResult_grdSiteList_onexpandup,this);
            this.divDirectorResult.form.btnDeleteRowGroup.addEventHandler("onclick",this.divCode_btnDeleteRowGroup_onclick,this);
            this.divDirectorResult.form.btnAddRowGroup.addEventHandler("onclick",this.divCode_btnAddRowGroup_onclick,this);
            this.divDirectorResult.form.Static04_00_00_00_00.addEventHandler("onclick",this.Static31_onclick,this);
        };
        this.loadIncludeScript("HLP_1010M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
