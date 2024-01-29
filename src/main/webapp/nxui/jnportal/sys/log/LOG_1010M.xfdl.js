(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("LOG_1010M");
            this.set_cssclass("frm_WF_comp");
            this.set_titletext("권한 변경 이력 조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,670);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj.set_updatecontrol("true");
            obj._setContents("<ColumnInfo><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"userNmKr\" type=\"STRING\" size=\"256\"/><Column id=\"processTy\" type=\"STRING\" size=\"256\"/><Column id=\"roleCode\" type=\"STRING\" size=\"256\"/><Column id=\"roleNm\" type=\"STRING\" size=\"256\"/><Column id=\"processDt\" type=\"STRING\" size=\"256\"/><Column id=\"processFromDt\" type=\"STRING\" size=\"256\"/><Column id=\"processToDt\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRoleLog", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"memberId\" type=\"STRING\" size=\"256\"/><Column id=\"userNmKr\" type=\"STRING\" size=\"256\"/><Column id=\"organCd\" type=\"STRING\" size=\"256\"/><Column id=\"organNm\" type=\"STRING\" size=\"256\"/><Column id=\"roleCode\" type=\"STRING\" size=\"256\"/><Column id=\"roleNm\" type=\"STRING\" size=\"256\"/><Column id=\"processTy\" type=\"STRING\" size=\"256\"/><Column id=\"processDt\" type=\"STRING\" size=\"256\"/><Column id=\"processById\" type=\"STRING\" size=\"256\"/><Column id=\"processByMemberId\" type=\"STRING\" size=\"256\"/><Column id=\"processByNmKr\" type=\"STRING\" size=\"256\"/><Column id=\"processReason\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsProcessType", this);
            obj._setContents("<ColumnInfo><Column id=\"text\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btnSearch",null,"20","65","28","50",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle","50","0","500","58",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("권한 변경 이력 조회");
            obj.set_cssclass("sta_WF_compTitle01");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","50","58",null,"105","50",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0",null,"90","0",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_bg");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static15_01_00_00","0","90","50",null,null,"55",null,null,null,null,this.divSearch.form);
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

            obj = new Static("sta001","20","15","100","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("사용자 ID");
            obj.set_cssclass("sta_WF_condition01");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtMemberId","sta001:10","15","240","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta002","455","15","100","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("사용자명");
            obj.set_cssclass("sta_WF_condition01");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtMemberNm","sta002:10","15","240","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta006","910","49","100","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("처리일자");
            obj.set_cssclass("sta_WF_condition01");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calProcessDtFrom","sta006:10","49","110","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            obj.set_readonly("false");
            obj.set_displaynulltext("____-__-__");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta007","calProcessDtFrom:0","49","14","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calProcessDtTo","sta007:0","49","110","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_displaynulltext("____-__-__");
            obj.set_weekformat("일 월 화 수 목 금 토");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta003","910","15","100","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("유형");
            obj.set_cssclass("sta_WF_condition01");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta004","20","49","100","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_text("접근권한 코드");
            obj.set_cssclass("sta_WF_condition01");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtRoleCode","sta004:10","49","240","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta005","455","49","100","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("접근권한명");
            obj.set_cssclass("sta_WF_condition01");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtRoleNm","sta005:10","49","240","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboProcessTy","sta003:10","15","234","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_innerdataset("dsProcessType");
            obj.set_codecolumn("value");
            obj.set_datacolumn("text");
            obj.set_text("");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divRole","50","divSearch:0",null,null,"50","37",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Grid("grdRoleLog","0","45",null,null,"0","0",null,null,null,null,this.divRole.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsRoleLog");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_autoupdatetype("itemselect");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\" band=\"left\"/><Column size=\"96\"/><Column size=\"96\"/><Column size=\"160\"/><Column size=\"120\"/><Column size=\"200\"/><Column size=\"64\"/><Column size=\"96\"/><Column size=\"96\"/><Column size=\"120\"/><Column size=\"400\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"34\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"사용자 ID\"/><Cell col=\"2\" text=\"사용자명\"/><Cell col=\"3\" text=\"소속\"/><Cell col=\"4\" text=\"접근권한 코드\"/><Cell col=\"5\" text=\"접근권한명\"/><Cell col=\"6\" text=\"유형\"/><Cell col=\"7\" text=\"처리자 ID\"/><Cell col=\"8\" text=\"처리자명\"/><Cell col=\"9\" text=\"처리일시\"/><Cell col=\"10\" text=\"수정사유\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\" text=\"expr:currow+1\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:memberId\" edittype=\"none\"/><Cell col=\"2\" text=\"bind:userNmKr\" edittype=\"none\"/><Cell col=\"3\" text=\"bind:organNm\" edittype=\"none\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:roleCode\" edittype=\"none\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:roleNm\" edittype=\"none\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:processTy\" edittype=\"none\" combodataset=\"dsProcessType\" combocodecol=\"value\" combodatacol=\"text\" displaytype=\"combotext\"/><Cell col=\"7\" text=\"bind:processByMemberId\" edittype=\"none\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:processByNmKr\"/><Cell col=\"9\" text=\"bind:processDt\" edittype=\"none\" textAlign=\"center\"/><Cell col=\"10\" text=\"bind:processReason\" edittype=\"none\" textAlign=\"left\"/></Band></Format></Formats>");
            this.divRole.addChild(obj.name, obj);

            obj = new Static("staTitle","0","0","81","45",null,null,null,null,null,null,this.divRole.form);
            obj.set_taborder("1");
            obj.set_text("검색결과");
            obj.set_cssclass("sta_WF_subTitle01");
            this.divRole.addChild(obj.name, obj);

            obj = new Static("staGridRowCnt","staTitle:10","0","149","45",null,null,null,null,null,null,this.divRole.form);
            obj.set_taborder("2");
            obj.set_text("(총 0건)");
            obj.set_cssclass("sta_WF_subTxt");
            this.divRole.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_00_00","110","0","60","45",null,null,null,null,null,null,this.divRole.form);
            obj.set_taborder("3");
            obj.set_text("h 45");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divRole.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divRole.form
            obj = new Layout("default","",0,0,this.divRole.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.grdRoleLog.set_taborder("0");
                p.grdRoleLog.set_binddataset("dsRoleLog");
                p.grdRoleLog.set_autofittype("col");
                p.grdRoleLog.set_autoenter("select");
                p.grdRoleLog.set_autoupdatetype("itemselect");
                p.grdRoleLog.move("0","45",null,null,"0","0");

                p.staTitle.set_taborder("1");
                p.staTitle.set_text("검색결과");
                p.staTitle.set_cssclass("sta_WF_subTitle01");
                p.staTitle.move("0","0","81","45",null,null);

                p.staGridRowCnt.set_taborder("2");
                p.staGridRowCnt.set_text("(총 0건)");
                p.staGridRowCnt.set_cssclass("sta_WF_subTxt");
                p.staGridRowCnt.move("staTitle:10","0","149","45",null,null);

                p.Static04_00_00_00_00.set_taborder("3");
                p.Static04_00_00_00_00.set_text("h 45");
                p.Static04_00_00_00_00.set_visible("false");
                p.Static04_00_00_00_00.set_background("aqua");
                p.Static04_00_00_00_00.set_color("blue");
                p.Static04_00_00_00_00.set_textAlign("center");
                p.Static04_00_00_00_00.set_verticalAlign("middle");
                p.Static04_00_00_00_00.set_opacity("0.7");
                p.Static04_00_00_00_00.set_font("normal 12px/normal \"Arial\"");
                p.Static04_00_00_00_00.move("110","0","60","45",null,null);
            	}
            );
            this.divRole.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divRole.form
            obj = new Layout("screen00","",0,0,this.divRole.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divRole.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1920,670,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_cssclass("frm_WF_comp");
                p.set_titletext("권한 변경 이력 조회");

                p.btnSearch.set_taborder("0");
                p.btnSearch.set_text("조회");
                p.btnSearch.move(null,"20","65","28","50",null);

                p.staTitle.set_taborder("1");
                p.staTitle.set_text("권한 변경 이력 조회");
                p.staTitle.set_cssclass("sta_WF_compTitle01");
                p.staTitle.move("50","0","500","58",null,null);

                p.divSearch.set_taborder("2");
                p.divSearch.set_text("");
                p.divSearch.move("50","58",null,"105","50",null);

                p.divRole.set_taborder("3");
                p.divRole.set_text("");
                p.divRole.set_cssclass("div_WF_Area");
                p.divRole.move("50","divSearch:0",null,null,"50","37");
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
            obj = new BindItem("item0","divSearch.form.edtMemberId","value","dsSearch","userId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.edtMemberNm","value","dsSearch","userNmKr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.calProcessDtTo","value","dsSearch","processToDt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.calProcessDtFrom","value","dsSearch","processFromDt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.edtRoleCode","value","dsSearch","roleCode");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.edtRoleNm","value","dsSearch","roleNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.cboProcessTy","value","dsSearch","processTy");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("LOG_1010M.xfdl","lib::common.xjs");
        this.registerScript("LOG_1010M.xfdl", function() {
        /**
        *  messageManage
        *  MenuPath      -
        *  FileName      messageManage.xfdl
        *  Creator 	     cheonsy
        *  CreateDate    2023.03.06
        *  Desction      권한 변경 이력 조회
        ************** 소스 수정 이력 ***********************************************
        *  date          Modifier    Description
        *******************************************************************************
        *  2023.03.06    cheonsy 	 최초 생성
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
        	this.gfnLoadCombo("loadCombo", "dsProcessType=SM:PROCESS_TY:A", "fnCallBack");

            const today = Ex.util.getToday();
            this.dsSearch.setColumn(0, "processFromDt", Eco.date.getFirstDate(today));
            this.dsSearch.setColumn(0, "processToDt", today);

        	this.fnSearch();
        };

        /************************************************************************************************
        * TRANSACTION 서비스 호출 처리
        ************************************************************************************************/
        /**
         * description 조회
        */
        this.fnSearch = function()
        {
        	this.gfnTransaction("getRoleLog", "sm/getRoleLog.do", "dsSearch", "dsRoleLog", "", "fnCallBack");
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
        		case "getRoleLog":
        			//총 건수 계산
        			this.gfnRowCount(this.dsRoleLog, this.divRole.form.staGridRowCnt);
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
         * description 엔터키 조회
        */
        this.divSearch_divSrch_edtMemberId_onkeyup = function(obj,e)
        {
        	if(e.keycode==13){
        		this.btnSearch_onclick();
        	}
        };

        /**
         * 검색조건 값 변경 이벤트
         */
        this.dsSearch_cancolumnchange = function(obj,e)
        {
            let from, to;

            switch (e.columnid) {
                case "processFromDt":
                    from = e.newvalue;
                    to = obj.getColumn(e.row, "processToDt");

                    if (!Eco.isEmpty(from) && Eco.isEmpty(to)) {
                        return true;
                    }

                    return this.fnValidateDateRange(from, to);
                case "processToDt":
                    from = obj.getColumn(e.row, "processFromDt");
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

            if (!this.gfnDateCheck(this.dsSearch.getColumn(0, "processFromDt"))
                    || !this.gfnDateCheck(this.dsSearch.getColumn(0, "processToDt"))) {
                this.gfnAlert("날짜의 형식을 확인하세요");
                return;
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
            this.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
            this.divSearch.form.Static00.addEventHandler("onclick",this.div_Search_Static00_onclick,this);
            this.divSearch.form.Static15_01_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.divSearch.form.sta001.addEventHandler("onclick",this.divSearch_sta_01_onclick,this);
            this.divSearch.form.edtMemberId.addEventHandler("onkeyup",this.divSearch_divSrch_edtMemberId_onkeyup,this);
            this.divSearch.form.sta002.addEventHandler("onclick",this.divSearch_sta_01_onclick,this);
            this.divSearch.form.edtMemberNm.addEventHandler("onkeyup",this.divSearch_Div00_edt_userId_onkeyup,this);
            this.divSearch.form.sta006.addEventHandler("onclick",this.divSearch_Div00_sch_DEPT_CD_onclick,this);
            this.divSearch.form.calProcessDtFrom.addEventHandler("onkeyup",this.divSearch_Div00_edt_userId_onkeyup,this);
            this.divSearch.form.calProcessDtTo.addEventHandler("onkeyup",this.divSearch_Div00_edt_userId_onkeyup,this);
            this.divSearch.form.sta003.addEventHandler("onclick",this.divSearch_sta_01_onclick,this);
            this.divSearch.form.sta004.addEventHandler("onclick",this.divSearch_Div00_sch_DEPT_CD_onclick,this);
            this.divSearch.form.edtRoleCode.addEventHandler("onkeyup",this.divSearch_Div00_edt_userId_onkeyup,this);
            this.divSearch.form.sta005.addEventHandler("onclick",this.divSearch_Div00_sch_DEPT_CD_onclick,this);
            this.divSearch.form.edtRoleNm.addEventHandler("onkeyup",this.divSearch_Div00_edt_userId_onkeyup,this);
            this.divSearch.form.cboProcessTy.addEventHandler("onkeyup",this.divSearch_Div00_edt_userId_onkeyup,this);
            this.divRole.form.grdRoleLog.addEventHandler("onheadclick",this.Div00_grdMsgManage_onheadclick,this);
            this.divRole.form.staTitle.addEventHandler("onclick",this.Static09_onclick,this);
            this.divRole.form.Static04_00_00_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.dsSearch.addEventHandler("cancolumnchange",this.dsSearch_cancolumnchange,this);
        };
        this.loadIncludeScript("LOG_1010M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
