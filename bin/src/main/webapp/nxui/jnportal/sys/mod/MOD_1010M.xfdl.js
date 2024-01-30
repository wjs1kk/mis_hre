(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("MOD_1010M");
            this.set_titletext("시스템모듈관리");
            this.set_cssclass("frm_WF_comp");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,670);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj.set_updatecontrol("true");
            obj._setContents("<ColumnInfo><Column id=\"sysId\" type=\"STRING\" size=\"256\"/><Column id=\"moduleId\" type=\"STRING\" size=\"256\"/><Column id=\"moduleNm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsModuleManage", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"rowCheck\" type=\"STRING\" size=\"256\"/><Column id=\"rowStatus\" type=\"STRING\" size=\"256\"/><Column id=\"sysId\" type=\"STRING\" size=\"256\"/><Column id=\"moduleId\" type=\"STRING\" size=\"256\"/><Column id=\"moduleNm\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"useYmd\" type=\"STRING\" size=\"8\"/><Column id=\"endYmd\" type=\"STRING\" size=\"8\"/><Column id=\"sortOrdr\" type=\"STRING\" size=\"256\"/><Column id=\"rgstId\" type=\"STRING\" size=\"256\"/><Column id=\"rgstIp\" type=\"STRING\" size=\"256\"/><Column id=\"rgstDt\" type=\"STRING\" size=\"256\"/><Column id=\"updtId\" type=\"STRING\" size=\"256\"/><Column id=\"updtIp\" type=\"STRING\" size=\"256\"/><Column id=\"updtDt\" type=\"STRING\" size=\"256\"/><Column id=\"rgstNm\" type=\"STRING\" size=\"256\"/><Column id=\"updtNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUseYn", this);
            obj._setContents("<ColumnInfo><Column id=\"value\" type=\"STRING\" size=\"256\"/><Column id=\"text\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSysIdCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"value\" type=\"STRING\" size=\"256\"/><Column id=\"text\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSysIdComboSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"value\" type=\"STRING\" size=\"256\"/><Column id=\"text\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btnSave",null,"20","65","28","50",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Save");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"20","65","28","btnSave:3",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","50","0","500","58",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("시스템 모듈 관리");
            obj.set_cssclass("sta_WF_compTitle01");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","50","58",null,"71","50",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staBg00","0","0",null,"56","0",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_bg");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staBg","0","-254",null,"56","0",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_bg");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta_03","910","15","100","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("모듈명");
            obj.set_cssclass("sta_WF_condition01");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edt003","sta_03:10","15","250","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta_02","455","15","100","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("모듈ID");
            obj.set_cssclass("sta_WF_condition01");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edt002","sta_02:10","15","250","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta001","20","15","100","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("시스템");
            obj.set_cssclass("sta_WF_condition01");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cbo001","sta001:10","15","250","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_innerdataset("dsSysIdComboSearch");
            obj.set_codecolumn("value");
            obj.set_datacolumn("text");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divResult","50","divSearch:0",null,null,"50","37",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Button("btnDeleteRow",null,"14","73","26","0",null,null,null,null,null,this.divResult.form);
            obj.set_taborder("1");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_Row_Delete");
            this.divResult.addChild(obj.name, obj);

            obj = new Button("btnAddRow",null,"14","73","26","btnDeleteRow:5",null,null,null,null,null,this.divResult.form);
            obj.set_taborder("0");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_Row_Add");
            this.divResult.addChild(obj.name, obj);

            obj = new Grid("grdModuleManage","0","45",null,null,"0","0",null,null,null,null,this.divResult.form);
            obj.set_taborder("2");
            obj.set_binddataset("dsModuleManage");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_autoupdatetype("itemselect");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\" band=\"left\"/><Column size=\"48\" band=\"left\"/><Column size=\"48\" band=\"left\"/><Column size=\"144\"/><Column size=\"112\"/><Column size=\"320\"/><Column size=\"96\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"96\"/><Column size=\"96\"/><Column size=\"96\"/><Column size=\"96\"/><Column size=\"96\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"34\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"상태\"/><Cell col=\"3\" text=\"시스템\"/><Cell col=\"4\" text=\"모듈 ID\"/><Cell col=\"5\" text=\"모듈명\"/><Cell col=\"6\" text=\"사용여부\"/><Cell col=\"7\" text=\"사용시작일\"/><Cell col=\"8\" text=\"사용종료일\"/><Cell col=\"9\" text=\"정렬순서\"/><Cell col=\"10\" text=\"작성자\"/><Cell col=\"11\" text=\"작성일\"/><Cell col=\"12\" text=\"수정자\"/><Cell col=\"13\" text=\"수정일\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\" text=\"expr:currow+1\" textAlign=\"center\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" textAlign=\"center\" text=\"bind:rowCheck\"/><Cell col=\"2\" textAlign=\"center\" imagestretch=\"fit\" displaytype=\"normal\" text=\"bind:rowStatus\"/><Cell col=\"3\" text=\"bind:sysId\" edittype=\"expr:rowStatus == &apos;inserted&apos; ? &apos;combo&apos; : &apos;none&apos;\" textAlign=\"center\" displaytype=\"expr:rowStatus == &apos;inserted&apos; ? &apos;combocontrol&apos; : &apos;combotext&apos;\" combodataset=\"dsSysIdCombo\" combocodecol=\"value\" combodatacol=\"text\"/><Cell col=\"4\" text=\"bind:moduleId\" edittype=\"expr:rowStatus == &apos;inserted&apos; ? &apos;text&apos; : &apos;none&apos;\" displaytype=\"expr:rowStatus == &apos;inserted&apos; ? &apos;editcontrol&apos; : &apos;normal&apos;\"/><Cell col=\"5\" text=\"bind:moduleNm\" edittype=\"text\" textAlign=\"left\" displaytype=\"editcontrol\"/><Cell col=\"6\" text=\"bind:useYn\" edittype=\"combo\" displaytype=\"combocontrol\" combocodecol=\"value\" combodataset=\"dsUseYn\" combodatacol=\"text\"/><Cell col=\"7\" text=\"bind:useYmd\" edittype=\"date\" displaytype=\"calendarcontrol\" calendardateformat=\"yyyy-MM-dd\" calendardisplaynulltype=\"nullmask\" calendarautoselect=\"true\"/><Cell col=\"8\" text=\"bind:endYmd\" edittype=\"date\" displaytype=\"calendarcontrol\" calendardateformat=\"yyyy-MM-dd\" calendardisplaynulltype=\"nullmask\" calendarautoselect=\"true\"/><Cell col=\"9\" text=\"bind:sortOrdr\" edittype=\"text\" textAlign=\"right\" displaytype=\"editcontrol\"/><Cell col=\"10\" text=\"bind:rgstNm\" edittype=\"none\"/><Cell col=\"11\" text=\"bind:rgstDt\" edittype=\"none\" textAlign=\"center\"/><Cell col=\"12\" text=\"bind:updtNm\" edittype=\"none\" textAlign=\"center\"/><Cell col=\"13\" text=\"bind:updtDt\" edittype=\"none\" textAlign=\"center\"/></Band></Format></Formats>");
            this.divResult.addChild(obj.name, obj);

            obj = new Static("sta004","0","0","137","45",null,null,null,null,null,null,this.divResult.form);
            obj.set_taborder("4");
            obj.set_text("시스템 모듈 목록");
            obj.set_cssclass("sta_WF_subTitle01");
            this.divResult.addChild(obj.name, obj);

            obj = new Static("staGridRowCnt","sta004:10","0","149","45",null,null,null,null,null,null,this.divResult.form);
            obj.set_taborder("3");
            obj.set_text("(총 0건)");
            obj.set_cssclass("sta_WF_subTxt");
            this.divResult.addChild(obj.name, obj);

            obj = new Button("btnExportCompML",null,"20","184","28","btnSearch:3",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Export 컴포넌트 언어 Data");
            obj.set_visible("false");
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
                p.btnDeleteRow.set_taborder("1");
                p.btnDeleteRow.set_text("행삭제");
                p.btnDeleteRow.set_cssclass("btn_WF_Row_Delete");
                p.btnDeleteRow.move(null,"14","73","26","0",null);

                p.btnAddRow.set_taborder("0");
                p.btnAddRow.set_text("행추가");
                p.btnAddRow.set_cssclass("btn_WF_Row_Add");
                p.btnAddRow.move(null,"14","73","26","btnDeleteRow:5",null);

                p.grdModuleManage.set_taborder("2");
                p.grdModuleManage.set_binddataset("dsModuleManage");
                p.grdModuleManage.set_autofittype("col");
                p.grdModuleManage.set_autoenter("select");
                p.grdModuleManage.set_autoupdatetype("itemselect");
                p.grdModuleManage.move("0","45",null,null,"0","0");

                p.sta004.set_taborder("4");
                p.sta004.set_text("시스템 모듈 목록");
                p.sta004.set_cssclass("sta_WF_subTitle01");
                p.sta004.move("0","0","137","45",null,null);

                p.staGridRowCnt.set_taborder("3");
                p.staGridRowCnt.set_text("(총 0건)");
                p.staGridRowCnt.set_cssclass("sta_WF_subTxt");
                p.staGridRowCnt.move("sta004:10","0","149","45",null,null);
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
            obj = new Layout("default","Desktop_screen",1920,670,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("시스템모듈관리");
                p.set_cssclass("frm_WF_comp");

                p.btnSave.set_taborder("1");
                p.btnSave.set_text("저장");
                p.btnSave.set_cssclass("btn_WF_Save");
                p.btnSave.move(null,"20","65","28","50",null);

                p.btnSearch.set_taborder("0");
                p.btnSearch.set_text("조회");
                p.btnSearch.move(null,"20","65","28","btnSave:3",null);

                p.sta00.set_taborder("2");
                p.sta00.set_text("시스템 모듈 관리");
                p.sta00.set_cssclass("sta_WF_compTitle01");
                p.sta00.move("50","0","500","58",null,null);

                p.divSearch.set_taborder("3");
                p.divSearch.set_text("");
                p.divSearch.move("50","58",null,"71","50",null);

                p.divResult.set_taborder("4");
                p.divResult.set_text("");
                p.divResult.set_cssclass("div_WF_Area");
                p.divResult.move("50","divSearch:0",null,null,"50","37");

                p.btnExportCompML.set_taborder("5");
                p.btnExportCompML.set_text("Export 컴포넌트 언어 Data");
                p.btnExportCompML.set_visible("false");
                p.btnExportCompML.move(null,"20","184","28","btnSearch:3",null);
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
            obj = new BindItem("item0","divSearch.form.edt003","value","dsSearch","moduleNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.edt002","value","dsSearch","moduleId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.cbo001","value","dsSearch","sysId");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("MOD_1010M.xfdl","lib::common.xjs");
        this.registerScript("MOD_1010M.xfdl", function() {
        /**
        *  시스템 모듈 관리
        *  MenuPath      시스템 관리 - 기준정보 관리 - 시스템 모듈 관리
        *  FileName      moduleManage.xfdl
        *  Creator 	     moonsj
        *  CreateDate    2023.02.22
        *  Desction      시스템 모듈 관리
        ************** 소스 수정 이력 ***********************************************
        *  date          Modifier    Description
        *******************************************************************************
        *  2023.02.22    moonsj 	 최초 생성
        *  2023.03.14    moonsj      수정일 데이터 시분초 제거
        							 작성자ID, 수정자ID 를 작성자, 수정자(Name) 로 변경
        							 검색조건 모듈명 edit box 위치 middle
        							 날짜 칼럼 display: date 형식화
        							 검색조건 모듈명 edit box 위치 middle
        							 모듈ID, 모듈명 검색조건 처리
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

        this.fnLoadCombo = function ()
        {
            this.loadCnt = 3;
            this.gfnLoadCombo("loadCombo", "dsUseYn=SM:USE_YN", "fnComboCallback");
        	this.gfnTransaction("getSysIdCombo", "sm/getSystemIdCombo.do", "", "dsSysIdCombo", "", "fnComboCallback");
        	this.gfnTransaction("getSysIdSearchCombo", "sm/getSystemIdCombo.do", "", "dsSysIdComboSearch=dsSysIdCombo", "type=A", "fnComboCallback");
        };

        /**
         * description 조회
        */
        this.fnSearch = function()
        {
        	var strSvcId    = "getModuleManageList";
        	var strSvcUrl   = "sm/getModuleManageList.do";
        	var inData      = "dsSearch";  // input1=dsSearch
        	var outData     = "dsModuleManage";  // dsModuleManage=output1
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;


        	this.gfnTransaction(strSvcId,strSvcUrl, inData,outData, strArg, callBackFnc, isAsync);
        };

        /**
         * description 저장
        */
        this.fnSave = function()
        {
        	var strSvcId    = "setModuleManageList";
        	var strSvcUrl   = "sm/setModuleManageList.do";
        	var inData      = "dsModuleManage";  // input1=dsSearch
        	var outData     = "";  // dsModuleManage=output1
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId,strSvcUrl, inData,outData, strArg, callBackFnc, isAsync);
        };

        /************************************************************************************************
         * CALLBACK 콜백 처리부분(Transaction, Popup)
         ************************************************************************************************/

        this.fnComboCallback = function (svcId, errorCode, errorMsg)
        {
            this.loadCnt--;
            if (this.loadCnt == 0) {
                this.fnSearch();
            }
        };

        /**
         * description Transaction CallBack 함수
        */
        this.fnCallback = function (sSvcId, nErrorCode, sErrorMsg)
        {
        	switch (sSvcId) {
        		case "getModuleManageList":
        		    //총 건수계산
        			  this.gfnRowCount(this.dsModuleManage, this.divResult.form.staGridRowCnt);
                      this.dsProjectAlert.clearData();

        			break;
        		case "setModuleManageList":
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

        };

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ****************************************************
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
            if(this.dsModuleManage.rowcount == 0){
        		this.gfnAlert("CM_MSG_SAVE_NODATA");  // 저장할 데이터가 없습니다.(변경된 내역이 없습니다.)
        		return;
        	}
        	// 변경사항 체크
        	if (!this.gfnDsIsUpdated(this.dsModuleManage)) {
        		this.gfnAlert("CM_MSG_SAVE_NOCHANGE");  // 변경된 내역이 없습니다.
        		return;
        	}
        	// msgId, args(치환), popupId, Confirm Callback Function({확인 trueFunc, 취소: falseFunc})
        	// confirm 이후 스크립트가 실행되기때문에 return; 처리 or 가장 마지막 위치
        	this.gfnAlert("CM_CFM_BEFORE_SAVE", "", "", {trueFunc: "fnSave", falseFunc: ""});  // 변경된 내역을 저장 하시겠습니까?
        	return;
        };

        /**
         * description 행추가 클릭
        */
        this.btnAddRow_onclick = function(obj,e)
        {
            const sysId = nexacro.getApplication().gdsUserInfo.getColumn(0, "sysId");
        	this.gfnInsertRow(this.dsModuleManage, "last");
            this.dsModuleManage.setColumn(this.dsModuleManage.rowposition, "sysId", sysId);
        	this.dsModuleManage.setColumn(this.dsModuleManage.rowposition, "useYn", "Y");
        };

        /**
         * description 행삭제 클릭
        */
        this.btnDeleteRow_onclick = function(obj,e)
        {
        	this.gfnDeleteRow(this.dsModuleManage);
        };

        /**
         * description 그리드헤드 클릭
        */
        this.Div00_grdModuleManage_onheadclick= function(obj,e)
        {
        	this.gfnSetGridCheckAll(obj, e, "rowCheck");
        };

        /**
         * @description 그리드 값 변경 이벤트
         */
        this.dsModuleManage_oncolumnchanged = function(obj,e)
        {
        	if (e.columnid == "useYmd") {
        		var from = e.newvalue;
        		var to = obj.getColumn(e.row, "endYmd");
        		console.log({ from, to });

        		if (from == null || to == null) {
        			return;
        		}

        		if (from.getTime() > to.getTime()) {
        			this.gfnAlert("CM_MODULE_DATECHK");
        			e.set_newvalue(e.oldvalue);
        		}
        	} else if (e.columnid == "endYmd") {
        		var from = obj.getColumn(e.row, "useYmd");
        		var to = e.newvalue;
        		console.log({ from, to });

        		if (from == null || to == null) {
        			return;
        		}

        		if (from.getTime() > to.getTime()) {
        			this.gfnAlert("CM_MODULE_DATECHK");
        			e.set_newvalue(e.oldvalue);
        		}
        	}
        };

        this.Edit_onkeyup = function(obj,e)
        {
            if (e.keycode == 13) {
                this.fnSearch();
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

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnSave.addEventHandler("onclick",this.btnSave_onclick,this);
            this.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
            this.sta00.addEventHandler("onclick",this.sta_01_onclick,this);
            this.divSearch.form.staBg00.addEventHandler("onclick",this.div_Search_Static00_onclick,this);
            this.divSearch.form.staBg.addEventHandler("onclick",this.div_Search_Static00_onclick,this);
            this.divSearch.form.sta_03.addEventHandler("onclick",this.divSearch_sta_01_onclick,this);
            this.divSearch.form.edt003.addEventHandler("onkeyup",this.Edit_onkeyup,this);
            this.divSearch.form.sta_02.addEventHandler("onclick",this.divSearch_sta_01_onclick,this);
            this.divSearch.form.edt002.addEventHandler("onkeyup",this.Edit_onkeyup,this);
            this.divSearch.form.sta001.addEventHandler("onclick",this.divSearch_sta_01_onclick,this);
            this.divResult.form.btnDeleteRow.addEventHandler("onclick",this.btnDeleteRow_onclick,this);
            this.divResult.form.btnAddRow.addEventHandler("onclick",this.btnAddRow_onclick,this);
            this.divResult.form.grdModuleManage.addEventHandler("onheadclick",this.Div00_grdModuleManage_onheadclick,this);
            this.divResult.form.sta004.addEventHandler("onclick",this.Static09_onclick,this);
            this.btnExportCompML.addEventHandler("onclick",this.btnExportCompML_onclick,this);
            this.dsModuleManage.addEventHandler("oncolumnchanged",this.dsModuleManage_oncolumnchanged,this);
        };
        this.loadIncludeScript("MOD_1010M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
