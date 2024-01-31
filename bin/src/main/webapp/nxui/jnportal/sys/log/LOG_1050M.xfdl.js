(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("LOG_1050M");
            this.set_cssclass("frm_WF_comp");
            this.set_titletext("사용자 로그");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,670);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj.set_updatecontrol("true");
            obj._setContents("<ColumnInfo><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"userNm\" type=\"STRING\" size=\"256\"/><Column id=\"exceptionNm\" type=\"STRING\" size=\"256\"/><Column id=\"menuNm\" type=\"STRING\" size=\"256\"/><Column id=\"userLoginDate\" type=\"STRING\" size=\"256\"/><Column id=\"userLoginDateFrom\" type=\"STRING\" size=\"256\"/><Column id=\"userLoginDateTo\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUserLog", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"userLoginDate\" type=\"STRING\" size=\"256\"/><Column id=\"userLogoutDate\" type=\"STRING\" size=\"256\"/><Column id=\"userIp\" type=\"STRING\" size=\"256\"/><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"memberId\" type=\"STRING\" size=\"256\"/><Column id=\"userNmKr\" type=\"STRING\" size=\"256\"/><Column id=\"userSessionId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCalDate", this);
            obj.set_updatecontrol("true");
            obj._setContents("<ColumnInfo><Column id=\"userLoginDateFrom\" type=\"STRING\" size=\"256\"/><Column id=\"userLoginDateTo\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btnSearch",null,"20","65","28","50",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Static("sta_01","50","0","500","58",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("메시지관리");
            obj.set_cssclass("sta_WF_compTitle01");
            obj.set_expr("comp.parent.getOwnerFrame().tabArgs.title");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","50","58",null,"71","50",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0",null,"56","0",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_bg");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta_msg","455","15","100","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("사용자");
            obj.set_cssclass("sta_WF_condition01");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edt_roleNm","sta_msg:10","15","90","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btn_rqst_nm","edt_roleNm:5","15","26","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_frmSearch");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edt_userNm","btn_rqst_nm:5","15","160","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta_msgId","39","15","100","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("기간");
            obj.set_cssclass("sta_WF_condition01Essential");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("cal_Dt_from","sta_msgId:10","15","110","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            obj.set_readonly("false");
            obj.set_cssclass("essential");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static26","cal_Dt_from:0","15","14","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("cal_Dt_to","Static26:0","15","110","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_weekformat("일 월 화 수 목 금 토");
            obj.set_cssclass("essential");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("div_Search01","50","divSearch:0",null,null,"50","37",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("div_WF_Area");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_00","129","0","60","45",null,null,null,null,null,null,this.div_Search01.form);
            obj.set_taborder("0");
            obj.set_text("h 45");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.div_Search01.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_01","20","281","60","13",null,null,null,null,null,null,this.div_Search01.form);
            obj.set_taborder("1");
            obj.set_text("h 13");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.div_Search01.addChild(obj.name, obj);

            obj = new Static("Static09","0","0","81","45",null,null,null,null,null,null,this.div_Search01.form);
            obj.set_taborder("3");
            obj.set_text("검색결과");
            obj.set_cssclass("sta_WF_subTitle01");
            this.div_Search01.addChild(obj.name, obj);

            obj = new Static("stc_gridRowCnt","Static09:10","0","149","45",null,null,null,null,null,null,this.div_Search01.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_subResult");
            obj.set_text("(총 0건)");
            this.div_Search01.addChild(obj.name, obj);

            obj = new Grid("grd_list","0","45",null,null,"0","0",null,null,null,null,this.div_Search01.form);
            obj.set_taborder("2");
            obj.set_binddataset("dsUserLog");
            obj.set_autofittype("col");
            obj.set_tooltiptype("default");
            obj.set_autoenter("select");
            obj.set_enable("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"33\"/></Rows><Band id=\"head\"><Cell text=\"NO\"/><Cell col=\"1\" text=\"로그인 일시\" calendareditformat=\"yyyy-MM-dd ddd\"/><Cell col=\"2\" text=\"로그아웃 일시\" calendareditformat=\"yyyy-MM-dd ddd\"/><Cell col=\"3\" text=\"사용자명\"/><Cell col=\"4\" text=\"사용자 ID\"/><Cell col=\"5\" text=\"접속 IP\"/><Cell col=\"6\" text=\"세션 ID\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" textAlign=\"center\" expandsize=\"16\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" text=\"bind:userLoginDate\" calendardateformat=\"yyyy-MM-dd\" expandsize=\"16\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"none\" text=\"bind:userLogoutDate\" calendardateformat=\"yyyy-MM-dd\" expandsize=\"16\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"none\" text=\"bind:userNmKr\" cssclass=\"\" expandsize=\"16\"/><Cell col=\"4\" displaytype=\"normal\" edittype=\"none\" text=\"bind:memberId\" mask=\"!#,###,###\" cssclass=\" cellLink\" expandsize=\"16\"/><Cell col=\"5\" text=\"bind:userIp\"/><Cell col=\"6\" text=\"bind:userSessionId\"/></Band></Format><Format id=\"format_copy\"/></Formats>");
            this.div_Search01.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_Search01.form
            obj = new Layout("default","",1032,72,this.div_Search01.form,function(p){});
            this.div_Search01.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1920,670,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_cssclass("frm_WF_comp");
                p.set_titletext("사용자 로그");

                p.btnSearch.set_taborder("0");
                p.btnSearch.set_text("조회");
                p.btnSearch.move(null,"20","65","28","50",null);

                p.sta_01.set_taborder("1");
                p.sta_01.set_text("메시지관리");
                p.sta_01.set_cssclass("sta_WF_compTitle01");
                p.sta_01.set_expr("comp.parent.getOwnerFrame().tabArgs.title");
                p.sta_01.move("50","0","500","58",null,null);

                p.divSearch.set_taborder("2");
                p.divSearch.set_text("");
                p.divSearch.move("50","58",null,"71","50",null);

                p.div_Search01.set_taborder("3");
                p.div_Search01.set_cssclass("div_WF_Area");
                p.div_Search01.set_text("");
                p.div_Search01.move("50","divSearch:0",null,null,"50","37");
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
            obj = new BindItem("item4","divSearch.form.edt_userNm","value","dsSearch","userNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.edt_roleNm","value","dsSearch","userId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.cal_Dt_to","value","dsSearch","userLoginDateTo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearch.form.cal_Dt_from","value","dsSearch","userLoginDateFrom");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("LOG_1050M.xfdl","lib::common.xjs");
        this.registerScript("LOG_1050M.xfdl", function() {
        /**
        *  사용자로그
        *  MenuPath      관리메뉴-관리자-사용자 로그
        *  FileName      userLog.xfdl
        *  Creator 	     moonsj
        *  CreateDate    2023.03.14
        *  Desction      사용자 로그
        ************** 소스 수정 이력 ***********************************************
        *  date          Modifier    Description
        *******************************************************************************
        *  2023.03.22    moonsj 	 최초 생성
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

        	this.divSearch.form.cal_Dt_from.set_value(year + month + day);
        	this.divSearch.form.cal_Dt_to.set_value(Ex.util.getToday());
            this.fnSearchUserLog();
        };

        /************************************************************************************************
        * TRANSACTION 서비스 호출 처리
        ************************************************************************************************/
        /**
         * description 시스템 로그 조회
        */
        this.fnSearchUserLog = function()
        {
        	this.gfnTransaction("getUserLog", "cms/getUserLog.do", "dsSearch", "dsUserLog", "", "fnCallBack");
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
        		case "getUserLog":
        			//총 건수 계산
        			this.gfnRowCount(this.dsUserLog, this.Div00.form.div_Search01.form.stc_gridRowCnt);
        		break;
         		case "loadCombo":
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

        	this.fnSearchUserLog();
        };

        /**
         * description 사용자 조회 버튼 클릭
        */
        this.div_Search_btn_rqst_nm_onclick = function(obj,e)
        {
        	this.gfnOpenPopup("statisticsUserPopup", "cms::statisticsUserPopup.xfdl", "", "fnPopupAfter", "");
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
         * description 유효성 체크
        */
        this.fnValidation = function ()
        {
            if (this.dsSearch.getColumn(0, "userLoginDateFrom") == "" || this.dsSearch.getColumn(0, "userLoginDateTo") == "") {
        		return false;
            }else{
        		return true;
        	}
        };


        /**
         * description 기간 유효성 체크( 3개월 )
        */
        this.fnCalValidation = function()
        {
        	var startDay = this.dsSearch.getColumn(0, "userLoginDateFrom");
        	var endDay = this.dsSearch.getColumn(0, "userLoginDateTo");
        	var addStartday = this.fn_addMonth(startDay, 3);

        	if (endDay > addStartday) {
        		return false;
        	} else {
        		return true;
        	}
        };

        /**
         * description 시작일 + 3개월
        */
        this.fn_addMonth = function(strDate, month)
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
            this.divSearch.form.sta_msg.addEventHandler("onclick",this.divSearch_sta_01_onclick,this);
            this.divSearch.form.edt_roleNm.addEventHandler("onkeyup",this.divSearch_Div00_edt_roleNm_onkeyup,this);
            this.divSearch.form.btn_rqst_nm.addEventHandler("onclick",this.div_Search_btn_rqst_nm_onclick,this);
            this.divSearch.form.edt_userNm.addEventHandler("onkeyup",this.divSearch_Div00_edt_roleNm_onkeyup,this);
            this.divSearch.form.sta_msgId.addEventHandler("onclick",this.divSearch_sta_01_onclick,this);
            this.divSearch.form.cal_Dt_from.addEventHandler("onkeyup",this.divSearch_Div00_edt_roleNm_onkeyup,this);
            this.divSearch.form.cal_Dt_to.addEventHandler("onkeyup",this.divSearch_Div00_edt_roleNm_onkeyup,this);
            this.div_Search01.form.Static04_00_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.div_Search01.form.Static04_00_00_01.addEventHandler("onclick",this.Static31_onclick,this);
            this.div_Search01.form.grd_list.addEventHandler("oncellclick",this.grd_list_oncellclick,this);
            this.div_Search01.form.grd_list.addEventHandler("onheadclick",this.grd_list_onheadclick,this);
            this.div_Search01.form.grd_list.addEventHandler("onclick",this.grd_list_onclick,this);
        };
        this.loadIncludeScript("LOG_1050M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
