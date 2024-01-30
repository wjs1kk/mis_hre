(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("LOG_1030M");
            this.set_titletext("프로그램 사용 통계");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"menuNm\" type=\"STRING\" size=\"256\"/><Column id=\"accessFromDt\" type=\"STRING\" size=\"256\"/><Column id=\"accessToDt\" type=\"STRING\" size=\"256\"/><Column id=\"sysId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUserByMenu", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"accessDate\" type=\"STRING\" size=\"16\"/><Column id=\"sysId\" type=\"STRING\" size=\"20\"/><Column id=\"sysNm\" type=\"STRING\" size=\"30\"/><Column id=\"progId\" type=\"STRING\" size=\"50\"/><Column id=\"progNm\" type=\"STRING\" size=\"300\"/><Column id=\"menuId\" type=\"STRING\" size=\"50\"/><Column id=\"menuNm\" type=\"STRING\" size=\"300\"/><Column id=\"userId\" type=\"STRING\" size=\"20\"/><Column id=\"memberId\" type=\"STRING\" size=\"20\"/><Column id=\"userNmKr\" type=\"STRING\" size=\"300\"/><Column id=\"actionName\" type=\"STRING\" size=\"300\"/><Column id=\"accessCount\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTxByMenu", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"accessDate\" type=\"STRING\" size=\"16\"/><Column id=\"sysId\" type=\"STRING\" size=\"20\"/><Column id=\"sysNm\" type=\"STRING\" size=\"30\"/><Column id=\"progId\" type=\"STRING\" size=\"50\"/><Column id=\"progNm\" type=\"STRING\" size=\"300\"/><Column id=\"menuId\" type=\"STRING\" size=\"50\"/><Column id=\"menuNm\" type=\"STRING\" size=\"300\"/><Column id=\"userId\" type=\"STRING\" size=\"20\"/><Column id=\"memberId\" type=\"STRING\" size=\"20\"/><Column id=\"userNmKr\" type=\"STRING\" size=\"300\"/><Column id=\"actionName\" type=\"STRING\" size=\"300\"/><Column id=\"accessCount\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMenuByUser", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"accessDate\" type=\"STRING\" size=\"16\"/><Column id=\"sysId\" type=\"STRING\" size=\"20\"/><Column id=\"sysNm\" type=\"STRING\" size=\"30\"/><Column id=\"progId\" type=\"STRING\" size=\"50\"/><Column id=\"progNm\" type=\"STRING\" size=\"300\"/><Column id=\"menuId\" type=\"STRING\" size=\"50\"/><Column id=\"menuNm\" type=\"STRING\" size=\"300\"/><Column id=\"userId\" type=\"STRING\" size=\"20\"/><Column id=\"memberId\" type=\"STRING\" size=\"20\"/><Column id=\"userNmKr\" type=\"STRING\" size=\"300\"/><Column id=\"actionName\" type=\"STRING\" size=\"300\"/><Column id=\"accessCount\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTxByUser", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"accessDate\" type=\"STRING\" size=\"16\"/><Column id=\"sysId\" type=\"STRING\" size=\"20\"/><Column id=\"sysNm\" type=\"STRING\" size=\"30\"/><Column id=\"progId\" type=\"STRING\" size=\"50\"/><Column id=\"progNm\" type=\"STRING\" size=\"300\"/><Column id=\"menuId\" type=\"STRING\" size=\"50\"/><Column id=\"menuNm\" type=\"STRING\" size=\"300\"/><Column id=\"userId\" type=\"STRING\" size=\"20\"/><Column id=\"memberId\" type=\"STRING\" size=\"20\"/><Column id=\"userNmKr\" type=\"STRING\" size=\"300\"/><Column id=\"actionName\" type=\"STRING\" size=\"300\"/><Column id=\"accessCount\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSysIdCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"value\" type=\"STRING\" size=\"256\"/><Column id=\"text\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta001","50","0","500","58",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("프로그램 사용 통계");
            obj.set_cssclass("sta_WF_compTitle01");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","50","58",null,"71","50",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0",null,"56","0",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_bg");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta002","455","15","100","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("접근메뉴명");
            obj.set_cssclass("sta_WF_condition01");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtMenuNm","sta002:10","15","165","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta003","910","15","100","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("기간");
            obj.set_cssclass("sta_WF_condition01");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calFrom","sta003:10","15","110","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            obj.set_readonly("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta005","calFrom:0","15","14","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_condition01");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calTo","sta005:0","15","110","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_popuptype("normal");
            obj.set_weekformat("일 월 화 수 목 금 토");
            obj.set_daysize("29 29");
            obj.set_headheight("28");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta004","20","15","100","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("시스템");
            obj.set_cssclass("sta_WF_condition01");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSysId","sta004:10","15","170","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsSysIdCombo");
            obj.set_codecolumn("value");
            obj.set_datacolumn("text");
            obj.set_text("Combo00");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"20","65","28","50",null,null,null,null,null,this);
            obj.set_text("조회");
            obj.set_cssclass("");
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Button("btnExportCompML",null,"20","190","28","btnSearch:3",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Export 컴포넌트 언어 Data");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02",null,"0","50","753","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("W\r\n 50");
            obj.set_visible("false");
            obj.set_background("antiquewhite");
            obj.set_color("blue");
            this.addChild(obj.name, obj);

            obj = new Static("Static34","-449","1","50","752",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("W 50");
            obj.set_visible("false");
            obj.set_background("antiquewhite");
            obj.set_color("blue");
            this.addChild(obj.name, obj);

            obj = new Tab("tabStat","50","divSearch:0",null,null,"50","37",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_tabindex("0");
            obj.set_tabbuttonheight("34");
            obj.set_cssclass("tab_WF_comp");
            this.addChild(obj.name, obj);

            obj = new Tabpage("tabpageUserByMenu",this.tabStat);
            obj.set_text("메뉴별 사용자");
            this.tabStat.addChild(obj.name, obj);

            obj = new Static("staHeader","0","0","82","45",null,null,null,null,null,null,this.tabStat.tabpageUserByMenu.form);
            obj.set_taborder("0");
            obj.set_text("검색결과");
            obj.set_cssclass("sta_WF_subTitle01");
            this.tabStat.tabpageUserByMenu.addChild(obj.name, obj);

            obj = new Static("staGridRowCnt","92","0","149","45",null,null,null,null,null,null,this.tabStat.tabpageUserByMenu.form);
            obj.set_taborder("1");
            obj.set_text("(총 0건)");
            obj.set_cssclass("sta_WF_subTxt");
            this.tabStat.tabpageUserByMenu.addChild(obj.name, obj);

            obj = new Grid("grdResult","0","45",null,null,"0","0",null,null,null,null,this.tabStat.tabpageUserByMenu.form);
            obj.set_taborder("7");
            obj.set_autofittype("col");
            obj.set_binddataset("dsUserByMenu");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"120\"/><Column size=\"200\"/><Column size=\"120\"/><Column size=\"200\"/><Column size=\"120\"/><Column size=\"200\"/><Column size=\"120\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"34\"/></Rows><Band id=\"head\"><Cell text=\"요청일자\"/><Cell col=\"1\" text=\"시스템 ID\"/><Cell col=\"2\" text=\"시스템명\"/><Cell col=\"3\" text=\"프로그램 ID\"/><Cell col=\"4\" text=\"프로그램명\"/><Cell col=\"5\" text=\"메뉴 ID\"/><Cell col=\"6\" text=\"메뉴명\"/><Cell col=\"7\" text=\"접근 횟수\"/></Band><Band id=\"body\"><Cell text=\"bind:accessDate\"/><Cell col=\"1\" text=\"bind:sysId\"/><Cell col=\"2\" text=\"bind:sysNm\"/><Cell col=\"3\" textAlign=\"left\" text=\"bind:progId\"/><Cell col=\"4\" textAlign=\"left\" text=\"bind:progNm\"/><Cell col=\"5\" textAlign=\"left\" text=\"bind:menuId\"/><Cell col=\"6\" textAlign=\"left\" text=\"bind:menuNm\"/><Cell col=\"7\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,##9\" text=\"bind:accessCount\"/></Band></Format></Formats>");
            this.tabStat.tabpageUserByMenu.addChild(obj.name, obj);

            obj = new Tabpage("tabpageTxByMenu",this.tabStat);
            obj.set_text("메뉴별 트랜잭션");
            this.tabStat.addChild(obj.name, obj);

            obj = new Static("staHeader","0","0","82","45",null,null,null,null,null,null,this.tabStat.tabpageTxByMenu.form);
            obj.set_taborder("0");
            obj.set_text("검색결과");
            obj.set_cssclass("sta_WF_subTitle01");
            this.tabStat.tabpageTxByMenu.addChild(obj.name, obj);

            obj = new Static("staGridRowCnt","92","0","149","45",null,null,null,null,null,null,this.tabStat.tabpageTxByMenu.form);
            obj.set_taborder("1");
            obj.set_text("(총 0건)");
            obj.set_cssclass("sta_WF_subTxt");
            this.tabStat.tabpageTxByMenu.addChild(obj.name, obj);

            obj = new Grid("grdResult","0","45",null,null,"0","0",null,null,null,null,this.tabStat.tabpageTxByMenu.form);
            obj.set_taborder("8");
            obj.set_autofittype("col");
            obj.set_binddataset("dsTxByMenu");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"120\"/><Column size=\"200\"/><Column size=\"120\"/><Column size=\"200\"/><Column size=\"120\"/><Column size=\"200\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"34\"/></Rows><Band id=\"head\"><Cell text=\"요청일자\"/><Cell col=\"1\" text=\"시스템 ID\"/><Cell col=\"2\" text=\"시스템명\"/><Cell col=\"3\" text=\"프로그램 ID\"/><Cell col=\"4\" text=\"프로그램명\"/><Cell col=\"5\" text=\"메뉴 ID\"/><Cell col=\"6\" text=\"메뉴명\"/><Cell col=\"7\" text=\"수행 업무\"/><Cell col=\"8\" text=\"접근 횟수\"/></Band><Band id=\"body\"><Cell text=\"bind:accessDate\"/><Cell col=\"1\" text=\"bind:sysId\"/><Cell col=\"2\" text=\"bind:sysNm\"/><Cell col=\"3\" textAlign=\"left\" text=\"bind:progId\"/><Cell col=\"4\" textAlign=\"left\" text=\"bind:progNm\"/><Cell col=\"5\" textAlign=\"left\" text=\"bind:menuId\"/><Cell col=\"6\" textAlign=\"left\" text=\"bind:menuNm\"/><Cell col=\"7\" textAlign=\"left\" text=\"bind:actionName\"/><Cell col=\"8\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,##9\" text=\"bind:accessCount\"/></Band></Format></Formats>");
            this.tabStat.tabpageTxByMenu.addChild(obj.name, obj);

            obj = new Tabpage("tabpageMenuByUser",this.tabStat);
            obj.set_text("사용자별 메뉴 접근");
            this.tabStat.addChild(obj.name, obj);

            obj = new Static("staHeader","0","0","82","45",null,null,null,null,null,null,this.tabStat.tabpageMenuByUser.form);
            obj.set_taborder("0");
            obj.set_text("검색결과");
            obj.set_cssclass("sta_WF_subTitle01");
            this.tabStat.tabpageMenuByUser.addChild(obj.name, obj);

            obj = new Static("staGridRowCnt","92","0","149","45",null,null,null,null,null,null,this.tabStat.tabpageMenuByUser.form);
            obj.set_taborder("1");
            obj.set_text("(총 0건)");
            obj.set_cssclass("sta_WF_subTxt");
            this.tabStat.tabpageMenuByUser.addChild(obj.name, obj);

            obj = new Grid("grdResult","0","45",null,null,"0","0",null,null,null,null,this.tabStat.tabpageMenuByUser.form);
            obj.set_taborder("9");
            obj.set_autofittype("col");
            obj.set_binddataset("dsMenuByUser");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"120\"/><Column size=\"200\"/><Column size=\"96\"/><Column size=\"96\"/><Column size=\"120\"/><Column size=\"200\"/><Column size=\"120\"/><Column size=\"200\"/><Column size=\"120\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"34\"/></Rows><Band id=\"head\"><Cell text=\"요청일자\"/><Cell col=\"1\" text=\"시스템 ID\"/><Cell col=\"2\" text=\"시스템명\"/><Cell col=\"3\" text=\"회원 ID\"/><Cell col=\"4\" text=\"사용자명\"/><Cell col=\"5\" text=\"프로그램 ID\"/><Cell col=\"6\" text=\"프로그램명\"/><Cell col=\"7\" text=\"메뉴 ID\"/><Cell col=\"8\" text=\"메뉴명\"/><Cell col=\"9\" text=\"접근 횟수\"/></Band><Band id=\"body\"><Cell text=\"bind:accessDate\"/><Cell col=\"1\" text=\"bind:sysId\"/><Cell col=\"2\" text=\"bind:sysNm\"/><Cell col=\"3\" text=\"bind:memberId\"/><Cell col=\"4\" text=\"bind:userNmKr\"/><Cell col=\"5\" textAlign=\"left\" text=\"bind:progId\"/><Cell col=\"6\" textAlign=\"left\" text=\"bind:progNm\"/><Cell col=\"7\" textAlign=\"left\" text=\"bind:menuId\"/><Cell col=\"8\" textAlign=\"left\" text=\"bind:menuNm\"/><Cell col=\"9\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,##9\" text=\"bind:accessCount\"/></Band></Format></Formats>");
            this.tabStat.tabpageMenuByUser.addChild(obj.name, obj);

            obj = new Tabpage("tabpageTxByUser",this.tabStat);
            obj.set_text("사용자별 트랜잭션");
            this.tabStat.addChild(obj.name, obj);

            obj = new Static("staHeader","0","0","82","45",null,null,null,null,null,null,this.tabStat.tabpageTxByUser.form);
            obj.set_taborder("0");
            obj.set_text("검색결과");
            obj.set_cssclass("sta_WF_subTitle01");
            this.tabStat.tabpageTxByUser.addChild(obj.name, obj);

            obj = new Static("staGridRowCnt","92","0","149","45",null,null,null,null,null,null,this.tabStat.tabpageTxByUser.form);
            obj.set_taborder("1");
            obj.set_text("(총 0건)");
            obj.set_cssclass("sta_WF_subTxt");
            this.tabStat.tabpageTxByUser.addChild(obj.name, obj);

            obj = new Grid("grdResult","0","45",null,null,"0","0",null,null,null,null,this.tabStat.tabpageTxByUser.form);
            obj.set_taborder("10");
            obj.set_autofittype("col");
            obj.set_binddataset("dsTxByUser");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"120\"/><Column size=\"200\"/><Column size=\"96\"/><Column size=\"96\"/><Column size=\"120\"/><Column size=\"200\"/><Column size=\"120\"/><Column size=\"200\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"34\"/></Rows><Band id=\"head\"><Cell text=\"요청일자\"/><Cell col=\"1\" text=\"시스템 ID\"/><Cell col=\"2\" text=\"시스템명\"/><Cell col=\"3\" text=\"회원 ID\"/><Cell col=\"4\" text=\"사용자명\"/><Cell col=\"5\" text=\"프로그램 ID\"/><Cell col=\"6\" text=\"프로그램명\"/><Cell col=\"7\" text=\"메뉴 ID\"/><Cell col=\"8\" text=\"메뉴명\"/><Cell col=\"9\" text=\"수행 업무\"/><Cell col=\"10\" text=\"접근 횟수\"/></Band><Band id=\"body\"><Cell text=\"bind:accessDate\"/><Cell col=\"1\" text=\"bind:sysId\"/><Cell col=\"2\" text=\"bind:sysNm\"/><Cell col=\"3\" text=\"bind:memberId\"/><Cell col=\"4\" text=\"bind:userNmKr\"/><Cell col=\"5\" textAlign=\"left\" text=\"bind:progId\"/><Cell col=\"6\" textAlign=\"left\" text=\"bind:progNm\"/><Cell col=\"7\" textAlign=\"left\" text=\"bind:menuId\"/><Cell col=\"8\" textAlign=\"left\" text=\"bind:menuNm\"/><Cell col=\"9\" textAlign=\"left\" text=\"bind:actionName\"/><Cell col=\"10\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,##9\" text=\"bind:accessCount\"/></Band></Format></Formats>");
            this.tabStat.tabpageTxByUser.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",1032,72,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tabStat.tabpageUserByMenu.form
            obj = new Layout("default","",0,0,this.tabStat.tabpageUserByMenu.form,function(p){});
            this.tabStat.tabpageUserByMenu.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tabStat.tabpageTxByMenu.form
            obj = new Layout("default","",0,0,this.tabStat.tabpageTxByMenu.form,function(p){});
            this.tabStat.tabpageTxByMenu.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tabStat.tabpageMenuByUser.form
            obj = new Layout("default","",0,0,this.tabStat.tabpageMenuByUser.form,function(p){});
            this.tabStat.tabpageMenuByUser.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tabStat.tabpageTxByUser.form
            obj = new Layout("default","",0,0,this.tabStat.tabpageTxByUser.form,function(p){});
            this.tabStat.tabpageTxByUser.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1920,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.edtMenuNm","value","dsSearch","menuNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.calFrom","value","dsSearch","accessFromDt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.calTo","value","dsSearch","accessToDt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.cboSysId","value","dsSearch","sysId");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("LOG_1030M.xfdl","lib::common.xjs");
        this.registerScript("LOG_1030M.xfdl", function() {
        /**
        *  programFuncUse
        *  MenuPath
        *  FileName      programFuncUse.xfdl
        *  Creator 	     moonsj
        *  CreateDate    2023.03.09
        *  Desction      프로그램 사용 통계
        ********* ***** 소스 수정 이력 ***********************************************
        *  date          Modifier    Description
        *******************************************************************************
        *  2023.03.09    moonsj 	 최초 생성
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

        this.fnSearchUserByMenuStat = function ()
        {
            this.gfnTransaction("getUserByMenuStat", "sm/progStat/getUserByMenuStat.do", "dsSearch", "dsUserByMenu", "", "fnCallback");
        };

        this.fnSearchTxByMenuStat = function ()
        {
            this.gfnTransaction("getTxByMenuStat", "sm/progStat/getTxByMenuStat.do", "dsSearch", "dsTxByMenu", "", "fnCallback");
        };

        this.fnSearchMenuByUserStat = function ()
        {
            this.gfnTransaction("getMenuByUserStat", "sm/progStat/getMenuByUserStat.do", "dsSearch", "dsMenuByUser", "", "fnCallback");
        };

        this.fnSearchTxByUserStat = function ()
        {
            this.gfnTransaction("getTxByUserStat", "sm/progStat/getTxByUserStat.do", "dsSearch", "dsTxByUser", "", "fnCallback");
        };

        /************************************************************************************************
         * CALLBACK 콜백 처리부분(Transaction, Popup)
         ************************************************************************************************/

        this.fnComboCallback = function (svcId, errorCode, errorMsg)
        {
            this.loadCnt--;
            if (this.loadCnt === 0) {
                this.dsSearch.setColumn(0, "sysId", nexacro.getApplication().gdsUserInfo.getColumn(0, "sysId"));
                this.fnSearch(this.tabStat.tabindex);
            }
        }

        /**
         * @description Transaction CallBack 함수
         */
        this.fnCallback = function (sSvcId, nErrorCode, sErrorMsg)
        {
        	switch (sSvcId) {
        		case "getUserByMenuStat":
        			this.gfnRowCount(this.dsUserByMenu, this.tabStat.tabpageUserByMenu.form.staGridRowCnt);
                    break;
                case "getTxByMenuStat":
                    this.gfnRowCount(this.dsTxByMenu, this.tabStat.tabpageTxByMenu.form.staGridRowCnt);
                    break;
                case "getMenuByUserStat":
                    this.gfnRowCount(this.dsMenuByUser, this.tabStat.tabpageMenuByUser.form.staGridRowCnt);
                    break;
                case "getTxByUserStat":
                    this.gfnRowCount(this.dsTxByUser, this.tabStat.tabpageTxByUser.form.staGridRowCnt);
                    break;
        		default:
                    break;
        	}
        };

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        /**
         * @description 조회버튼 클릭
         */
        this.btnSearch_onclick = function(obj,e)
        {
            this.fnSearch(this.tabStat.tabindex);
        };

        this.tabStat_onchanged = function(obj,e)
        {
            this.fnSearch(e.postindex);
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

        /************************************************************************************************
         * 사용자 FUNCTION 영역
        ************************************************************************************************/

        this.fnSearch = function (tabindex)
        {
            switch(tabindex) {
                case 0:
                    this.fnSearchUserByMenuStat();
                    break;
                case 1:
                    this.fnSearchTxByMenuStat();
                    break;
                case 2:
                    this.fnSearchMenuByUserStat();
                    break;
                case 3:
                    this.fnSearchTxByUserStat();
                    break;
                default:
                    break;
            }
        }

        /**
         * @description generate multi language Excel
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
            this.divSearch.form.Static00.addEventHandler("onclick",this.div_Search_Static00_onclick,this);
            this.divSearch.form.sta002.addEventHandler("onclick",this.divSearch_sch_RQST_DT00_onclick,this);
            this.divSearch.form.edtMenuNm.addEventHandler("onchanged",this.div_Search_SCH_RQST_ID_onchanged,this);
            this.divSearch.form.sta003.addEventHandler("onclick",this.div_Search_Static01_onclick,this);
            this.divSearch.form.calFrom.addEventHandler("onchanged",this.divSearch_Div00_cal_processDt_from_onchanged,this);
            this.divSearch.form.sta005.addEventHandler("onclick",this.div_Search_Static01_onclick,this);
            this.divSearch.form.sta004.addEventHandler("onclick",this.divSearch_sch_RQST_DT00_onclick,this);
            this.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
            this.btnExportCompML.addEventHandler("onclick",this.btnExportCompML_onclick,this);
            this.Static02.addEventHandler("onclick",this.Static02_onclick,this);
            this.Static34.addEventHandler("onclick",this.Static02_onclick,this);
            this.tabStat.addEventHandler("onchanged",this.tabStat_onchanged,this);
            this.tabStat.tabpageUserByMenu.form.staHeader.addEventHandler("onclick",this.Static09_onclick,this);
            this.tabStat.tabpageTxByMenu.form.staHeader.addEventHandler("onclick",this.Static09_onclick,this);
            this.tabStat.tabpageMenuByUser.form.staHeader.addEventHandler("onclick",this.Static09_onclick,this);
            this.tabStat.tabpageTxByUser.form.staHeader.addEventHandler("onclick",this.Static09_onclick,this);
            this.dsSearch.addEventHandler("cancolumnchange",this.dsSearch_cancolumnchange,this);
            this.dsSearch.addEventHandler("oncolumnchanged",this.dsSearch_oncolumnchanged,this);
        };
        this.loadIncludeScript("LOG_1030M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
