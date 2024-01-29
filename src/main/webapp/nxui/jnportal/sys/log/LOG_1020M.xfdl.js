(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("LOG_1020M");
            this.set_titletext("접속로그조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsAccessLog", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"accessTime\" type=\"STRING\" size=\"28\"/><Column id=\"finishTime\" type=\"STRING\" size=\"28\"/><Column id=\"accessIp\" type=\"STRING\" size=\"40\"/><Column id=\"accessUrl\" type=\"STRING\" size=\"2000\"/><Column id=\"userId\" type=\"STRING\" size=\"20\"/><Column id=\"memberId\" type=\"STRING\" size=\"20\"/><Column id=\"userNmKr\" type=\"STRING\" size=\"300\"/><Column id=\"menuId\" type=\"STRING\" size=\"50\"/><Column id=\"menuNm\" type=\"STRING\" size=\"300\"/><Column id=\"progId\" type=\"STRING\" size=\"50\"/><Column id=\"progNm\" type=\"STRING\" size=\"300\"/><Column id=\"actionName\" type=\"STRING\" size=\"300\"/><Column id=\"actionResult\" type=\"STRING\" size=\"1\"/><Column id=\"requestBody\" type=\"STRING\" size=\"4000\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsActionRslt", this);
            obj._setContents("<ColumnInfo><Column id=\"value\" type=\"STRING\" size=\"256\"/><Column id=\"text\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"accessTime\" type=\"STRING\" size=\"256\"/><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"userNmKr\" type=\"STRING\" size=\"256\"/><Column id=\"menuNm\" type=\"STRING\" size=\"256\"/><Column id=\"actionResult\" type=\"STRING\" size=\"256\"/><Column id=\"accessFromDt\" type=\"STRING\" size=\"256\"/><Column id=\"accessToDt\" type=\"STRING\" size=\"256\"/><Column id=\"sysId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCalDate", this);
            obj.set_updatecontrol("true");
            obj._setContents("<ColumnInfo><Column id=\"accessFromDt\" type=\"DATE\" size=\"256\"/><Column id=\"accessToDt\" type=\"DATE\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSysIdCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"value\" type=\"STRING\" size=\"256\"/><Column id=\"text\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta_01","50","0","500","58",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("접속 로그 조회");
            obj.set_cssclass("sta_WF_compTitle01");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","50","58",null,"105","50",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staBg","0","0",null,"90","0",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_bg");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta004","1365","15","100","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("접근메뉴명");
            obj.set_cssclass("sta_WF_condition01");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtMenuNm","sta004:10","15","165","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta003","910","15","100","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("사용자명");
            obj.set_cssclass("sta_WF_condition01");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtUserNm","sta003:10","15","120","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta006","455","49","100","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("기간");
            obj.set_cssclass("sta_WF_condition01");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calAccessFromDt","sta006:10","49","110","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            obj.set_readonly("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta007","calAccessFromDt:0","49","14","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_condition01");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calAccessToDt","sta007:0","49","110","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_popuptype("normal");
            obj.set_weekformat("일 월 화 수 목 금 토");
            obj.set_daysize("29 29");
            obj.set_headheight("28");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta002","455","15","100","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("사용자ID");
            obj.set_cssclass("sta_WF_condition01");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtUserId","sta002:10","15","190","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta005","20","49","100","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("실행 결과");
            obj.set_cssclass("sta_WF_condition01");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboResult","sta005:10","49","170","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_innerdataset("dsActionRslt");
            obj.set_codecolumn("value");
            obj.set_datacolumn("text");
            obj.set_text("");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta001","20","15","100","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("시스템");
            obj.set_cssclass("sta_WF_condition01");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSysId","sta001:10","15","170","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_innerdataset("dsSysIdCombo");
            obj.set_codecolumn("value");
            obj.set_datacolumn("text");
            obj.set_text("Combo00");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divResult","50","divSearch:0",null,null,"50","37",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Static("staHeader","0","0","82","45",null,null,null,null,null,null,this.divResult.form);
            obj.set_taborder("0");
            obj.set_text("검색결과");
            obj.set_cssclass("sta_WF_subTitle01");
            this.divResult.addChild(obj.name, obj);

            obj = new Static("staGridRowCnt","staHeader:10","0","149","45",null,null,null,null,null,null,this.divResult.form);
            obj.set_taborder("1");
            obj.set_text("(총 0건)");
            obj.set_cssclass("sta_WF_subTxt");
            this.divResult.addChild(obj.name, obj);

            obj = new Grid("grdAccessLog","0","45",null,null,"0","0",null,null,null,null,this.divResult.form);
            obj.set_taborder("2");
            obj.set_binddataset("dsAccessLog");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_autoupdatetype("itemselect");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"160\"/><Column size=\"192\"/><Column size=\"96\"/><Column size=\"80\"/><Column size=\"240\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"800\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"34\"/></Rows><Band id=\"head\"><Cell text=\"일시\"/><Cell col=\"1\" text=\"접속 IP\"/><Cell col=\"2\" text=\"ID\"/><Cell col=\"3\" text=\"사용자명\"/><Cell col=\"4\" text=\"접근 메뉴\"/><Cell col=\"5\" text=\"수행 업무\"/><Cell col=\"6\" text=\"실행 결과\"/><Cell col=\"7\" text=\"요청 본문\"/></Band><Band id=\"body\"><Cell text=\"bind:accessTime\" edittype=\"none\"/><Cell col=\"1\" text=\"bind:accessIp\" edittype=\"none\"/><Cell col=\"2\" text=\"bind:memberId\" edittype=\"none\"/><Cell col=\"3\" text=\"bind:userNmKr\"/><Cell col=\"4\" text=\"bind:menuNm\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:actionName\"/><Cell col=\"6\" text=\"bind:actionResult\" edittype=\"none\" displaytype=\"combotext\" combodataset=\"dsActionRslt\" combocodecol=\"value\" combodatacol=\"text\"/><Cell col=\"7\" text=\"bind:requestBody\" edittype=\"none\" textAlign=\"left\"/></Band></Format></Formats>");
            this.divResult.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"20","65","28","50",null,null,null,null,null,this);
            obj.set_text("조회");
            obj.set_cssclass("");
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new Button("btnExportCompML",null,"20","185","28","btnSearch:3",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Export 컴포넌트 언어 Data");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02",null,"0","50","753","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("W\r\n 50");
            obj.set_visible("false");
            obj.set_background("antiquewhite");
            obj.set_color("blue");
            this.addChild(obj.name, obj);

            obj = new Static("Static34","0","0","50","752",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("W 50");
            obj.set_visible("false");
            obj.set_background("antiquewhite");
            obj.set_color("blue");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_01","70","148","100","15",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",1032,72,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divResult.form
            obj = new Layout("default","",0,0,this.divResult.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staHeader.set_taborder("0");
                p.staHeader.set_text("검색결과");
                p.staHeader.set_cssclass("sta_WF_subTitle01");
                p.staHeader.move("0","0","82","45",null,null);

                p.staGridRowCnt.set_taborder("1");
                p.staGridRowCnt.set_text("(총 0건)");
                p.staGridRowCnt.set_cssclass("sta_WF_subTxt");
                p.staGridRowCnt.move("staHeader:10","0","149","45",null,null);

                p.grdAccessLog.set_taborder("2");
                p.grdAccessLog.set_binddataset("dsAccessLog");
                p.grdAccessLog.set_autofittype("col");
                p.grdAccessLog.set_autoenter("select");
                p.grdAccessLog.set_autoupdatetype("itemselect");
                p.grdAccessLog.move("0","45",null,null,"0","0");
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
            obj = new Layout("default","",1920,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.edtMenuNm","value","dsSearch","menuNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.edtUserNm","value","dsSearch","userNmKr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.calAccessToDt","value","dsSearch","accessToDt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.calAccessFromDt","value","dsSearch","accessFromDt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.edtUserId","value","dsSearch","userId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.cboResult","value","dsSearch","actionResult");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.cboSysId","value","dsSearch","sysId");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("LOG_1020M.xfdl","lib::common.xjs");
        this.registerScript("LOG_1020M.xfdl", function() {
        /**
        *  접속 로그 조회
        *  MenuPath      시스템 관리 - 기준정보 관리 - 접속로그조회
        *  FileName      accessLog.xfdl
        *  Creator 	     moonsj
        *  CreateDate    2023.03.07
        *  Desction      접속 로그 조회
        ************** 소스 수정 이력 ***********************************************
        *  date          Modifier    Description
        *******************************************************************************
        *  2023.03.07    moonsj 	 최초 생성
        *  2023.03.20    moonsj      통합 테스트 내용 수정
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

            const today = Ex.util.getToday();
            this.dsSearch.setColumn(0, "accessToDt", today);
            this.dsSearch.setColumn(0, "accessFromDt", Eco.date.getFirstDate(today));
            this.fnLoadCombo();
        };

        /************************************************************************************************
        * TRANSACTION 서비스 호출 처리
        ************************************************************************************************/

        this.fnLoadCombo = function ()
        {
            this.loadCnt = 2;
        	this.gfnLoadCombo("loadCombo", "dsActionRslt=SM:ACTION_RSLT:A", "fnComboCallback");
        	this.gfnTransaction("loadSysIdCombo","sm/getSystemIdCombo.do","","dsSysIdCombo","","fnComboCallback");
        };

        /**
         * description 조회
        */
        this.fnSearch = function()
        {
        	var strSvcId    = "getAccessLog";
        	var strSvcUrl   = "sm/getAccessLog.do";
        	var inData      = "dsSearch";
        	var outData     = "dsAccessLog";
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
            this.loadCnt--;
            if (this.loadCnt == 0) {
                this.dsSearch.setColumn(0, "sysId", nexacro.getApplication().gdsUserInfo.getColumn(0, "sysId"));
                this.fnSearch();
            }
        }

        /**
         * description Transaction CallBack 함수
         */
        this.fnCallback = function (sSvcId, nErrorCode, sErrorMsg)
        {
        	switch (sSvcId) {
        		case "getAccessLog":
        			this.gfnRowCount(this.dsAccessLog, this.divResult.form.staGridRowCnt);
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
        	 if (!this.fnValidate()) {
        		return;
            }

        	this.fnSearch();
        };

        /**
         * description 엔터키 검색 이벤트
        */
        this.divSearch_Div00_edt_roleNm_onkeyup = function(obj,e)
        {
        	if (e.keycode == 13) {
        		this.btnSearch_onclick();
        	}
        };

        this.dsSearch_oncolumnchanged = function(obj,e)
        {
            switch (e.columnid) {
                case "sysId":
                    this.btnSearch_onclick();
                    break;
                default:
                    break;
            }
        };

        this.dsSearch_cancolumnchange = function(obj,e)
        {
            let from, to;

            switch (e.columnid) {
                case "accessFromDt":
                    from = e.newvalue;
                    to = obj.getColumn(e.row, "accessToDt");

                    if (!Eco.isEmpty(from) && Eco.isEmpty(to)) {
                        return true;
                    }

                    return this.fnValidateDateRange(from, to);
                case "accessToDt":
                    from = obj.getColumn(e.row, "accessFromDt");
                    to = e.newvalue;

                    if (Eco.isEmpty(from) && !Eco.isEmpty(to)) {
                        return true;
                    }

                    return this.fnValidateDateRange(from, to);
                default:
                    return true;
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
         * 검색조건 유효성 체크
         */
        this.fnValidate = function ()
        {
            if (Eco.isEmpty(this.dsSearch.getColumn(0, "sysId"))) {
                this.gfnAlert("시스템을 선택하세요");
                return false;
            }

            const from = this.dsSearch.getColumn(0, "accessFromDt");
            const to = this.dsSearch.getColumn(0, "accessToDt");

            return this.fnValidateDateRange(from, to);
        };

        this.fnValidateDateRange = function (from, to)
        {
            if (Eco.isEmpty(from)) {
                this.gfnAlert("시작일을 입력하세요.");
                return false;
            }

            if (Eco.isEmpty(to)) {
                this.gfnAlert("종료일을 입력하세요.");
                return false;
            }

            if (Eco.date.getDiffDay(Eco.date.strToDate(from), Eco.date.strToDate(to)) < 0) {
                this.gfnAlert("CM_MSG_DATE_CHK");
                return false;
            }

            if (Eco.date.getDiffDay(Eco.date.strToDate(to), Eco.date.addMonth(Eco.date.strToDate(from), 3)) < 0) {
                this.gfnAlert("시작일로부터 3개월 이내까지만 조회할 수 있습니다.");
                return false;
            }

            return true;
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.staBg.addEventHandler("onclick",this.div_Search_Static00_onclick,this);
            this.divSearch.form.sta004.addEventHandler("onclick",this.divSearch_sch_RQST_DT00_onclick,this);
            this.divSearch.form.edtMenuNm.addEventHandler("onkeyup",this.divSearch_Div00_edt_roleNm_onkeyup,this);
            this.divSearch.form.edtUserNm.addEventHandler("onchanged",this.div_Search_SCH_RQST_ID_onchanged,this);
            this.divSearch.form.edtUserNm.addEventHandler("onkeyup",this.divSearch_Div00_edt_roleNm_onkeyup,this);
            this.divSearch.form.sta006.addEventHandler("onclick",this.div_Search_Static01_onclick,this);
            this.divSearch.form.calAccessFromDt.addEventHandler("onkeyup",this.divSearch_Div00_edt_roleNm_onkeyup,this);
            this.divSearch.form.sta007.addEventHandler("onclick",this.div_Search_Static01_onclick,this);
            this.divSearch.form.calAccessToDt.addEventHandler("onkeyup",this.divSearch_Div00_edt_roleNm_onkeyup,this);
            this.divSearch.form.sta002.addEventHandler("onclick",this.div_Search_Static01_onclick,this);
            this.divSearch.form.edtUserId.addEventHandler("onchanged",this.div_Search_SCH_RQST_ID_onchanged,this);
            this.divSearch.form.edtUserId.addEventHandler("onkeyup",this.divSearch_Div00_edt_roleNm_onkeyup,this);
            this.divSearch.form.sta005.addEventHandler("onclick",this.divSearch_sch_RQST_DT00_onclick,this);
            this.divSearch.form.cboResult.addEventHandler("onkeyup",this.divSearch_Div00_edt_roleNm_onkeyup,this);
            this.divResult.form.staHeader.addEventHandler("onclick",this.Static09_onclick,this);
            this.divResult.form.grdAccessLog.addEventHandler("onheadclick",this.Div00_grdMsgManage_onheadclick,this);
            this.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
            this.btnExportCompML.addEventHandler("onclick",this.btnExportCompML_onclick,this);
            this.Static02.addEventHandler("onclick",this.Static02_onclick,this);
            this.Static34.addEventHandler("onclick",this.Static02_onclick,this);
            this.Static04_00_00_01.addEventHandler("onclick",this.Static31_onclick,this);
            this.dsSearch.addEventHandler("oncolumnchanged",this.dsSearch_oncolumnchanged,this);
            this.dsSearch.addEventHandler("cancolumnchange",this.dsSearch_cancolumnchange,this);
        };
        this.loadIncludeScript("LOG_1020M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
