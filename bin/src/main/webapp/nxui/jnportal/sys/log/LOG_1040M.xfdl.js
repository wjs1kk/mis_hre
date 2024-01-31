(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("LOG_1040M");
            this.set_cssclass("frm_WF_comp");
            this.set_titletext("통계정보");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,670);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj.set_updatecontrol("true");
            obj._setContents("<ColumnInfo><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"userNm\" type=\"STRING\" size=\"256\"/><Column id=\"exceptionNm\" type=\"STRING\" size=\"256\"/><Column id=\"rgstDt\" type=\"STRING\" size=\"256\"/><Column id=\"rgstFromDt\" type=\"STRING\" size=\"256\"/><Column id=\"rgstToDt\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsLogInfo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"logNo\" type=\"STRING\" size=\"256\"/><Column id=\"logDt\" type=\"STRING\" size=\"256\"/><Column id=\"pgmId\" type=\"STRING\" size=\"256\"/><Column id=\"url\" type=\"STRING\" size=\"256\"/><Column id=\"classNm\" type=\"STRING\" size=\"256\"/><Column id=\"cmd\" type=\"STRING\" size=\"256\"/><Column id=\"connIp\" type=\"STRING\" size=\"256\"/><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"memberId\" type=\"STRING\" size=\"256\"/><Column id=\"userNmKr\" type=\"STRING\" size=\"256\"/><Column id=\"deptCd\" type=\"STRING\" size=\"256\"/><Column id=\"deptNm\" type=\"STRING\" size=\"256\"/><Column id=\"logCont\" type=\"STRING\" size=\"256\"/><Column id=\"exceptionNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAccessLog", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"accessTime\" type=\"STRING\" size=\"256\"/><Column id=\"finishTime\" type=\"STRING\" size=\"256\"/><Column id=\"accessIp\" type=\"STRING\" size=\"256\"/><Column id=\"accessUrl\" type=\"STRING\" size=\"256\"/><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"userNmKr\" type=\"STRING\" size=\"256\"/><Column id=\"menuId\" type=\"STRING\" size=\"256\"/><Column id=\"menuNm\" type=\"STRING\" size=\"256\"/><Column id=\"progId\" type=\"STRING\" size=\"256\"/><Column id=\"progNm\" type=\"STRING\" size=\"256\"/><Column id=\"actionName\" type=\"STRING\" size=\"256\"/><Column id=\"actionResult\" type=\"STRING\" size=\"256\"/><Column id=\"requestBody\" type=\"STRING\" size=\"256\"/><Column id=\"cnt\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCalDate", this);
            obj.set_updatecontrol("true");
            obj._setContents("<ColumnInfo><Column id=\"rgstFromDt\" type=\"STRING\" size=\"256\"/><Column id=\"rgstToDt\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btnSearch",null,"20","65","28","50",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle","50","0","500","58",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_compTitle01");
            obj.set_text("통계정보");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","50","57",null,"70","50",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0",null,"56","0",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_bg");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static15_01_00_00","0","55","50",null,null,"40",null,null,null,null,this.divSearch.form);
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

            obj = new Static("sta001","20","15","100","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("기간");
            obj.set_cssclass("sta_WF_condition01Essential");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calDtFrom","sta001:10","15","110","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            obj.set_readonly("false");
            obj.set_cssclass("essential");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta004","calDtFrom:0","15","14","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calDtTo","sta004:0","15","110","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_weekformat("일 월 화 수 목 금 토");
            obj.set_cssclass("essential");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta002","455","15","100","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("사용자");
            obj.set_cssclass("sta_WF_condition01");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtMemberId","sta002:10","15","90","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_readonly("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnMemberSrch","edtMemberId:5","15","26","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_frmSearch");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtMemberNm","btnMemberSrch:5","15","160","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta003","910","15","100","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("오류명");
            obj.set_cssclass("sta_WF_condition01");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtExceptionNm","sta003:10","15","240","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divLog","50","divSearch:0",null,null,"50","37",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Tab("tabLog","0","0",null,null,"0","0",null,null,null,null,this.divLog.form);
            obj.set_taborder("2");
            obj.set_tabindex("0");
            obj.getSetter("scrollbars").set("autoboth");
            obj.set_cssclass("tab_WF_comp");
            obj.set_tabbuttonheight("34");
            this.divLog.addChild(obj.name, obj);

            obj = new Tabpage("tabpageSysLog",this.divLog.form.tabLog);
            obj.set_text("시스템 오류");
            this.divLog.form.tabLog.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_00_00","110","0","60","45",null,null,null,null,null,null,this.divLog.form.tabLog.tabpageSysLog.form);
            obj.set_taborder("0");
            obj.set_text("h 45");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divLog.form.tabLog.tabpageSysLog.addChild(obj.name, obj);

            obj = new Static("staTitle","0","0","82","45",null,null,null,null,null,null,this.divLog.form.tabLog.tabpageSysLog.form);
            obj.set_taborder("1");
            obj.set_text("검색결과");
            obj.set_cssclass("sta_WF_subTitle01");
            obj.set_fittocontents("width");
            this.divLog.form.tabLog.tabpageSysLog.addChild(obj.name, obj);

            obj = new Grid("grdSysLog","0","45",null,null,"0","0",null,null,null,null,this.divLog.form.tabLog.tabpageSysLog.form);
            obj.set_taborder("2");
            obj.set_binddataset("dsLogInfo");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_autoupdatetype("itemselect");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\" band=\"left\"/><Column size=\"150\"/><Column size=\"200\"/><Column size=\"320\"/><Column size=\"150\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"34\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"일시\"/><Cell col=\"2\" text=\"경로\"/><Cell col=\"3\" text=\"클래스명\"/><Cell col=\"4\" text=\"연계 명령어\"/><Cell col=\"5\" text=\"오류명\"/><Cell col=\"6\" text=\"로그 상세\"/><Cell col=\"7\" text=\"접속 IP\"/><Cell col=\"8\" text=\"사용자 ID\"/><Cell col=\"9\" text=\"사용자명\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\" text=\"expr:currow+1\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:logDt\" edittype=\"none\" displaytype=\"normal\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"2\" text=\"bind:url\" edittype=\"none\" editmaxlength=\"1000\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:classNm\" edittype=\"none\" textAlign=\"left\" editmaxlength=\"300\" tooltiptext=\"bind:classNm\"/><Cell col=\"4\" text=\"bind:cmd\" edittype=\"none\" editmaxlength=\"4000\"/><Cell col=\"5\" text=\"bind:exceptionNm\" edittype=\"none\" textAlign=\"left\" editmaxlength=\"1000\"/><Cell col=\"6\" text=\"더보기\" edittype=\"button\" textAlign=\"center\" editmaxlength=\"4000\" displaytype=\"buttoncontrol\" cssclass=\"btn_WF_Row_Add\"/><Cell col=\"7\" text=\"bind:connIp\"/><Cell col=\"8\" text=\"bind:memberId\" edittype=\"none\" editmaxlength=\"100\"/><Cell col=\"9\" text=\"bind:userNmKr\" edittype=\"none\" textAlign=\"center\"/></Band></Format></Formats>");
            this.divLog.form.tabLog.tabpageSysLog.addChild(obj.name, obj);

            obj = new Static("staGridRowCnt","staTitle:10","0","150","45",null,null,null,null,null,null,this.divLog.form.tabLog.tabpageSysLog.form);
            obj.set_taborder("3");
            obj.set_text("(총 0건)");
            obj.set_cssclass("sta_WF_subResult");
            this.divLog.form.tabLog.tabpageSysLog.addChild(obj.name, obj);

            obj = new Tabpage("tabpageProg",this.divLog.form.tabLog);
            obj.set_text("프로그램 접속 통계");
            this.divLog.form.tabLog.addChild(obj.name, obj);

            obj = new Grid("grdProgram","0","45",null,null,"0","0",null,null,null,null,this.divLog.form.tabLog.tabpageProg.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsAccessLog");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_autoupdatetype("itemselect");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\" band=\"left\"/><Column size=\"150\"/><Column size=\"300\"/><Column size=\"300\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"34\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"일시\"/><Cell col=\"2\" text=\"접근 메뉴 ID\"/><Cell col=\"3\" text=\"접근메뉴명\"/><Cell col=\"4\" text=\"접속건수\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\" text=\"expr:currow+1\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:accessTime\" edittype=\"none\" displaytype=\"normal\"/><Cell col=\"2\" text=\"bind:menuId\" edittype=\"none\" editmaxlength=\"1000\"/><Cell col=\"3\" text=\"bind:menuNm\" edittype=\"none\" textAlign=\"left\" editmaxlength=\"300\"/><Cell col=\"4\" edittype=\"none\" editmaxlength=\"4000\" text=\"bind:cnt\" textAlign=\"right\"/></Band></Format></Formats>");
            this.divLog.form.tabLog.tabpageProg.addChild(obj.name, obj);

            obj = new Static("staTitle","0","0","82","45",null,null,null,null,null,null,this.divLog.form.tabLog.tabpageProg.form);
            obj.set_taborder("1");
            obj.set_text("검색결과");
            obj.set_cssclass("sta_WF_subTitle01");
            obj.set_fittocontents("width");
            this.divLog.form.tabLog.tabpageProg.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_00_00","110","0","60","45",null,null,null,null,null,null,this.divLog.form.tabLog.tabpageProg.form);
            obj.set_taborder("2");
            obj.set_text("h 45");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divLog.form.tabLog.tabpageProg.addChild(obj.name, obj);

            obj = new Static("staGridRowCnt","staTitle:10","0","150","45",null,null,null,null,null,null,this.divLog.form.tabLog.tabpageProg.form);
            obj.set_taborder("3");
            obj.set_text("(총 0건)");
            obj.set_cssclass("sta_WF_subResult");
            this.divLog.form.tabLog.tabpageProg.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divLog.form.tabLog.tabpageSysLog.form
            obj = new Layout("default","",1032,392,this.divLog.form.tabLog.tabpageSysLog.form,function(p){});
            this.divLog.form.tabLog.tabpageSysLog.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divLog.form.tabLog.tabpageProg.form
            obj = new Layout("default","",0,0,this.divLog.form.tabLog.tabpageProg.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.grdProgram.set_taborder("0");
                p.grdProgram.set_binddataset("dsAccessLog");
                p.grdProgram.set_autofittype("col");
                p.grdProgram.set_autoenter("select");
                p.grdProgram.set_autoupdatetype("itemselect");
                p.grdProgram.move("0","45",null,null,"0","0");

                p.staTitle.set_taborder("1");
                p.staTitle.set_text("검색결과");
                p.staTitle.set_cssclass("sta_WF_subTitle01");
                p.staTitle.set_fittocontents("width");
                p.staTitle.move("0","0","82","45",null,null);

                p.Static04_00_00_00_00.set_taborder("2");
                p.Static04_00_00_00_00.set_text("h 45");
                p.Static04_00_00_00_00.set_visible("false");
                p.Static04_00_00_00_00.set_background("aqua");
                p.Static04_00_00_00_00.set_color("blue");
                p.Static04_00_00_00_00.set_textAlign("center");
                p.Static04_00_00_00_00.set_verticalAlign("middle");
                p.Static04_00_00_00_00.set_opacity("0.7");
                p.Static04_00_00_00_00.set_font("normal 12px/normal \"Arial\"");
                p.Static04_00_00_00_00.move("110","0","60","45",null,null);

                p.staGridRowCnt.set_taborder("3");
                p.staGridRowCnt.set_text("(총 0건)");
                p.staGridRowCnt.set_cssclass("sta_WF_subResult");
                p.staGridRowCnt.move("staTitle:10","0","150","45",null,null);
            	}
            );
            this.divLog.form.tabLog.tabpageProg.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divLog.form.tabLog.tabpageProg.form
            obj = new Layout("screen00","",0,0,this.divLog.form.tabLog.tabpageProg.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divLog.form.tabLog.tabpageProg.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divLog.form
            obj = new Layout("default","",0,0,this.divLog.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.tabLog.set_taborder("2");
                p.tabLog.set_tabindex("0");
                p.tabLog.getSetter("scrollbars").set("autoboth");
                p.tabLog.set_cssclass("tab_WF_comp");
                p.tabLog.set_tabbuttonheight("34");
                p.tabLog.move("0","0",null,null,"0","0");

                p.tabLog.tabpageSysLog.set_text("시스템 오류");

                p.tabLog.tabpageProg.set_text("프로그램 접속 통계");
            	}
            );
            this.divLog.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divLog.form
            obj = new Layout("screen00","",0,0,this.divLog.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divLog.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1920,670,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_cssclass("frm_WF_comp");
                p.set_titletext("통계정보");

                p.btnSearch.set_taborder("0");
                p.btnSearch.set_text("조회");
                p.btnSearch.move(null,"20","65","28","50",null);

                p.staTitle.set_taborder("1");
                p.staTitle.set_cssclass("sta_WF_compTitle01");
                p.staTitle.set_text("통계정보");
                p.staTitle.move("50","0","500","58",null,null);

                p.divSearch.set_taborder("2");
                p.divSearch.set_text("");
                p.divSearch.move("50","57",null,"70","50",null);

                p.divLog.set_taborder("3");
                p.divLog.set_text("");
                p.divLog.move("50","divSearch:0",null,null,"50","37");
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
            obj = new BindItem("item6","divSearch.form.calDtFrom","value","dsSearch","rgstFromDt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearch.form.calDtTo","value","dsSearch","rgstToDt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divSearch.form.edtMemberId","value","dsSearch","userId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divSearch.form.edtMemberNm","value","dsSearch","userNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divSearch.form.edtExceptionNm","value","dsSearch","exceptionNm");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("LOG_1040M.xfdl","lib::common.xjs");
        this.registerScript("LOG_1040M.xfdl", function() {
         /**
        *  messageManage
        *  MenuPath      -
        *  FileName      statistics.xfdl
        *  Creator 	     cheonsy
        *  CreateDate    2023.03.14
        *  Desction      통계정보
        ************** 소스 수정 이력 ***********************************************
        *  date          Modifier    Description
        *******************************************************************************
        *  2023.03.14    cheonsy 	 최초 생성
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

        	// 이달 1일 세팅, 현재날짜 세팅
        	var currDate = new Date();
        	var year = currDate.getFullYear().toString().padLeft(4, "0");
        	var month = (currDate.getMonth() + 1).toString().padLeft(2, "0");
        	var day = 1;

        	this.divSearch.form.calDtFrom.set_value(year + month + day);
        	this.divSearch.form.calDtTo.set_value(Ex.util.getToday());
            this.fnSearch();
        };


        /************************************************************************************************
        * TRANSACTION 서비스 호출 처리
        ************************************************************************************************/

        /**
         * description 시스템 로그 조회
         */
        this.fnSearchSysLog = function()
        {
        	this.gfnTransaction("getSysLog", "cms/getSysLog.do", "dsSearch", "dsLogInfo", "", "fnCallBack");
        };

        /**
         * description 프로그램 접속 통계 조회
         */
        this.fnSearchAccessLog = function()
        {
        	this.gfnTransaction("getAccessLog", "cms/getAccessLog.do", "dsSearch", "dsAccessLog", "", "fnCallBack");
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
        		case "getSysLog":
        			//총 건수 계산
        			this.gfnRowCount(this.dsLogInfo, this.divLog.form.tabLog.tabpageSysLog.form.staGridRowCnt);
                    break;
        		case "getAccessLog":
        			//총 건수 계산
        			this.gfnRowCount(this.dsAccessLog, this.divLog.form.tabLog.tabpageProg.form.staGridRowCnt);
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
        	switch (sPopupId) {
        		case "statisticsUserPopup":	// 사용자 조회 팝업
        			var oRtn = this.gfnGetPopupRtn();
        			if (oRtn) {
        				console.log('oRtn : ',  oRtn);
        				console.log('oRtn.CONFIRM : ',  oRtn.CONFIRM);
        			}
                    break;
        		case "statisticsPopup":	// 로그상세 팝업
        			var oRtn = this.gfnGetPopupRtn();
        			if (oRtn) {
        				console.log('oRtn : ',  oRtn);
        				console.log('oRtn.CONFIRM : ',  oRtn.CONFIRM);
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
        	if (!this.fnValidation()) {
        		this.gfnAlert("CM_MSG_SRCH_DATE");  // 검색 기간은 필수입력값입니다.
        		return;
            }

        	if (!this.fnCalValidation()) {
                this.gfnAlert("CM_MSG_VAL_SRCH_3MONTH");  // 검색 기간을 시작일로부터 3개월 이내로 설정해주세요.
        		return;
            }

        	this.fnSearch();
        };

        /**
         * description 사용자 조회 버튼 클릭
        */
        this.divSearch_divSrch_btnMemberSrch_onclick = function(obj,e)
        {
        	this.gfnOpenPopup("statisticsUserPopup", "sys::log/LOG_1040P_02.xfdl", "", "fnPopupAfter", "");
        };

        /**
         * description 더보기 버튼 클릭
        */
        this.divLog_tabLog_tabpageSysLog_grdSysLog_oncellclick = function(obj,e)
        {
        	if (e.col == 6) {
        		var oArg = { logNo: this.dsLogInfo.getColumn(this.dsLogInfo.rowposition, "logNo") };
        		this.gfnOpenPopup("statisticsPopup", "sys::log/LOG_1040P_01.xfdl", oArg, "fnPopupAfter", "");
        	}
        };

        /**
         * description 엔터키 검색 이벤트
        */

        this.divSearch_divSrch_calDtFrom_onkeyup = function(obj,e)
        {
        	if (e.keycode == 13) {
        		this.btnSearch_onclick();
        	}
        };

        /************************************************************************************************
        * 사용자 FUNCTION 영역
        ************************************************************************************************/

        this.fnSearch = function ()
        {
            this.fnSearchSysLog();
            this.fnSearchAccessLog();
        };

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
        	if (this.dsSearch.getColumn(0, "rgstFromDt") == "" || this.dsSearch.getColumn(0, "rgstToDt") == "") {
        		return false;
            } else {
        		return true;
        	}
        };

        /**
         * description 기간 유효성 체크( 3개월 )
        */
        this.fnCalValidation = function()
        {
        	var startDay = this.dsSearch.getColumn(0, "rgstFromDt");
        	var endDay = this.dsSearch.getColumn(0, "rgstToDt");
        	var addStartday = this.fnAddMonth(startDay, 3);

        	if (endDay > addStartday) {
        		return false;
        	} else{
        		return true;
        	}
        };

        /**
         * description 시작일 + 3개월
        */
        this.fnAddMonth = function(strDate, month)
        {
            return Eco.date.addMonth(strDate, month);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
            this.divSearch.form.Static00.addEventHandler("onclick",this.div_Search_Static00_onclick,this);
            this.divSearch.form.Static15_01_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.divSearch.form.sta001.addEventHandler("onclick",this.div_Search_Static01_onclick,this);
            this.divSearch.form.calDtFrom.addEventHandler("onkeyup",this.divSearch_divSrch_calDtFrom_onkeyup,this);
            this.divSearch.form.calDtTo.addEventHandler("onkeyup",this.divSearch_divSrch_calDtFrom_onkeyup,this);
            this.divSearch.form.sta002.addEventHandler("onclick",this.divSearch_sta_01_onclick,this);
            this.divSearch.form.edtMemberId.addEventHandler("onkeyup",this.divSearch_divSrch_calDtFrom_onkeyup,this);
            this.divSearch.form.btnMemberSrch.addEventHandler("onclick",this.divSearch_divSrch_btnMemberSrch_onclick,this);
            this.divSearch.form.edtMemberNm.addEventHandler("onkeyup",this.divSearch_divSrch_calDtFrom_onkeyup,this);
            this.divSearch.form.sta003.addEventHandler("onclick",this.divSearch_sta_01_onclick,this);
            this.divSearch.form.edtExceptionNm.addEventHandler("onkeyup",this.divSearch_divSrch_calDtFrom_onkeyup,this);
            this.divLog.form.tabLog.tabpageSysLog.form.Static04_00_00_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.divLog.form.tabLog.tabpageSysLog.form.staTitle.addEventHandler("onclick",this.Static09_onclick,this);
            this.divLog.form.tabLog.tabpageSysLog.form.grdSysLog.addEventHandler("oncellclick",this.divLog_tabLog_tabpageSysLog_grdSysLog_oncellclick,this);
            this.divLog.form.tabLog.tabpageProg.form.grdProgram.addEventHandler("onheadclick",this.Div00_grdHeader_onheadclick,this);
            this.divLog.form.tabLog.tabpageProg.form.staTitle.addEventHandler("onclick",this.Static09_onclick,this);
            this.divLog.form.tabLog.tabpageProg.form.Static04_00_00_00_00.addEventHandler("onclick",this.Static31_onclick,this);
        };
        this.loadIncludeScript("LOG_1040M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
