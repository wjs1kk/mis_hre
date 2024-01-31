(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PGM_1010P");
            this.set_titletext("프로그램 연관 테이블 관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1200,585);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"sysId\" type=\"STRING\" size=\"256\"/><Column id=\"progId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAvailTableList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"sysId\" type=\"STRING\" size=\"20\"/><Column id=\"progId\" type=\"STRING\" size=\"50\"/><Column id=\"tableOwner\" type=\"STRING\" size=\"128\"/><Column id=\"tableName\" type=\"STRING\" size=\"128\"/><Column id=\"tableComment\" type=\"STRING\" size=\"4000\"/><Column id=\"tableType\" type=\"STRING\" size=\"256\"/><Column id=\"rowSelected\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSelectedTableList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"sysId\" type=\"STRING\" size=\"20\"/><Column id=\"progId\" type=\"STRING\" size=\"50\"/><Column id=\"tableOwner\" type=\"STRING\" size=\"128\"/><Column id=\"tableName\" type=\"STRING\" size=\"128\"/><Column id=\"tableComment\" type=\"STRING\" size=\"4000\"/><Column id=\"tableType\" type=\"STRING\" size=\"256\"/><Column id=\"rowSelected\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divPopup","0","0",null,"585","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Static("staPopupTitle","0","0",null,"50","0",null,null,null,null,null,this.divPopup.form);
            obj.set_taborder("0");
            obj.set_text("연관 테이블 관리");
            obj.set_cssclass("sta_WF_popupTitle");
            this.divPopup.addChild(obj.name, obj);

            obj = new Static("Static10","0","50","30",null,null,"0",null,null,null,null,this.divPopup.form);
            obj.set_taborder("1");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divPopup.addChild(obj.name, obj);

            obj = new Static("Static10_00",null,"50","30",null,"0","0",null,null,null,null,this.divPopup.form);
            obj.set_taborder("2");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divPopup.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_01","30","50","103","20",null,null,null,null,null,null,this.divPopup.form);
            obj.set_taborder("3");
            obj.set_text("h 20");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divPopup.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_01_00","549",null,"103","23",null,"-1",null,null,null,null,this.divPopup.form);
            obj.set_taborder("4");
            obj.set_text("h 23");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divPopup.addChild(obj.name, obj);

            obj = new Div("divAvail","30","70","546","440",null,null,null,null,null,null,this.divPopup.form);
            obj.set_taborder("5");
            obj.set_cssclass("div_WF_popup");
            obj.set_text("");
            this.divPopup.addChild(obj.name, obj);

            obj = new Static("Static10","0","0","20",null,null,"0",null,null,null,null,this.divPopup.form.divAvail.form);
            obj.set_taborder("0");
            obj.set_text("w20");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divPopup.form.divAvail.addChild(obj.name, obj);

            obj = new Static("staTitle","20","0","169","45",null,null,null,null,null,null,this.divPopup.form.divAvail.form);
            obj.set_taborder("1");
            obj.set_text("선택 가능한 테이블");
            obj.set_cssclass("sta_WF_subTitle01");
            this.divPopup.form.divAvail.addChild(obj.name, obj);

            obj = new Static("Static10_01",null,"0","20",null,"0","0",null,null,null,null,this.divPopup.form.divAvail.form);
            obj.set_taborder("2");
            obj.set_text("w20");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divPopup.form.divAvail.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_01","20",null,"100","15",null,"0",null,null,null,null,this.divPopup.form.divAvail.form);
            obj.set_taborder("3");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divPopup.form.divAvail.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_00","111","0","60","45",null,null,null,null,null,null,this.divPopup.form.divAvail.form);
            obj.set_taborder("4");
            obj.set_text("h 45");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divPopup.form.divAvail.addChild(obj.name, obj);

            obj = new Grid("grdAvail","20","44",null,null,"20","15",null,null,null,null,this.divPopup.form.divAvail.form);
            obj.set_taborder("5");
            obj.set_autofittype("col");
            obj.set_binddataset("dsAvailTableList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\" band=\"left\"/><Column size=\"64\"/><Column size=\"144\"/><Column size=\"200\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"34\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"스키마\"/><Cell col=\"2\" text=\"테이블명\"/><Cell col=\"3\" text=\"설명\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:rowSelected\"/><Cell col=\"1\" text=\"bind:tableOwner\"/><Cell col=\"2\" text=\"bind:tableName\"/><Cell col=\"3\" text=\"bind:tableComment\"/></Band></Format></Formats>");
            this.divPopup.form.divAvail.addChild(obj.name, obj);

            obj = new Div("divSelected",null,"70","546","440","30",null,null,null,null,null,this.divPopup.form);
            obj.set_taborder("6");
            obj.set_cssclass("div_WF_popup");
            obj.set_text("");
            this.divPopup.addChild(obj.name, obj);

            obj = new Static("Static10","0","0","20",null,null,"0",null,null,null,null,this.divPopup.form.divSelected.form);
            obj.set_taborder("0");
            obj.set_text("w20");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divPopup.form.divSelected.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_00_01","70",null,"60","15",null,"0",null,null,null,null,this.divPopup.form.divSelected.form);
            obj.set_taborder("1");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divPopup.form.divSelected.addChild(obj.name, obj);

            obj = new Static("Static10_00",null,"0","20",null,"0","0",null,null,null,null,this.divPopup.form.divSelected.form);
            obj.set_taborder("2");
            obj.set_text("w20");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divPopup.form.divSelected.addChild(obj.name, obj);

            obj = new Static("staTitle","20","0","169","45",null,null,null,null,null,null,this.divPopup.form.divSelected.form);
            obj.set_taborder("3");
            obj.set_text("연관 테이블");
            obj.set_cssclass("sta_WF_subTitle01");
            this.divPopup.form.divSelected.addChild(obj.name, obj);

            obj = new Grid("grdSelected","20","44",null,null,"20","15",null,null,null,null,this.divPopup.form.divSelected.form);
            obj.set_taborder("4");
            obj.set_autofittype("col");
            obj.set_binddataset("dsSelectedTableList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\" band=\"left\"/><Column size=\"64\"/><Column size=\"144\"/><Column size=\"200\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"34\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"스키마\"/><Cell col=\"2\" text=\"테이블명\"/><Cell col=\"3\" text=\"설명\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:rowSelected\"/><Cell col=\"1\" text=\"bind:tableOwner\"/><Cell col=\"2\" text=\"bind:tableName\"/><Cell col=\"3\" text=\"bind:tableComment\"/></Band></Format></Formats>");
            this.divPopup.form.divSelected.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_01_00_00","549",null,"103","25",null,"50",null,null,null,null,this.divPopup.form);
            obj.set_taborder("7");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divPopup.addChild(obj.name, obj);

            obj = new Button("btnAdd","586","262","28","28",null,null,null,null,null,null,this.divPopup.form);
            obj.set_cssclass("btn_WF_ArrRight");
            obj.set_taborder("8");
            obj.set_tooltiptext("추가");
            this.divPopup.addChild(obj.name, obj);

            obj = new Button("btnRemove","586","295","28","28",null,null,null,null,null,null,this.divPopup.form);
            obj.set_cssclass("btn_WF_ArrLeft");
            obj.set_taborder("9");
            obj.set_text("");
            obj.set_tooltiptext("제거");
            this.divPopup.addChild(obj.name, obj);

            obj = new Button("btnSave","536","535","63","28",null,null,null,null,null,null,this.divPopup.form);
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_icoSave");
            obj.set_taborder("10");
            this.divPopup.addChild(obj.name, obj);

            obj = new Button("btnClose","602","535","65","28",null,null,null,null,null,null,this.divPopup.form);
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_icoExit");
            obj.set_taborder("11");
            this.divPopup.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divPopup.form.divAvail.form
            obj = new Layout("default","",1032,72,this.divPopup.form.divAvail.form,function(p){});
            this.divPopup.form.divAvail.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divPopup.form.divSelected.form
            obj = new Layout("default","",1032,72,this.divPopup.form.divSelected.form,function(p){});
            this.divPopup.form.divSelected.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divPopup.form
            obj = new Layout("default","",0,0,this.divPopup.form,function(p){});
            this.divPopup.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1200,585,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divPopup.form.div_Search.form.SCH_RQST_NO","value","ds_search","SCH_RQST_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divPopup.form.div_Search.form.SCH_RQST_DT","value","ds_search","SCH_RQST_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divPopup.form.div_Search.form.SCH_RQST_ID","value","ds_search","SCH_RQST_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divPopup.form.div_Search.form.SCH_APV_STAT_CD","value","ds_search","SCH_APV_STAT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divPopup.form.div_Search.form.SCH_LAST_UPT_NM","value","ds_search","SCH_LAST_UPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divPopup.form.div_Search.form.SCH_LAST_UPT_DT","value","ds_search","SCH_LAST_UPT_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divPopup.form.div_Search.form.SCH_DEPT_CD","value","ds_search","SCH_RQST_DEPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divPopup.form.div_Search.form.SCH_RQST_NM","value","ds_search","SCH_RQST_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divPopup.form.div_Search.form.SCH_CAL_MON","value","ds_search","SCH_CAL_MON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divPopup.form.div_Search.form.Radio00","value","ds_main","INOUT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divPopup.form.div_Search.form.CheckBox00","value","ds_main","COM_CAR_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divPopup.form.div_Search.form.Spin00","value","ds_main","YY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divPopup.form.divAvail.form.SCH_RQST_NO","value","ds_search","SCH_RQST_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divPopup.form.divAvail.form.SCH_RQST_DT","value","ds_search","SCH_RQST_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divPopup.form.divAvail.form.SCH_RQST_ID","value","ds_search","SCH_RQST_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divPopup.form.divAvail.form.SCH_APV_STAT_CD","value","ds_search","SCH_APV_STAT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divPopup.form.divAvail.form.SCH_LAST_UPT_NM","value","ds_search","SCH_LAST_UPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divPopup.form.divAvail.form.SCH_LAST_UPT_DT","value","ds_search","SCH_LAST_UPT_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divPopup.form.divAvail.form.SCH_DEPT_CD","value","ds_search","SCH_RQST_DEPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divPopup.form.divAvail.form.SCH_RQST_NM","value","ds_search","SCH_RQST_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divPopup.form.divAvail.form.SCH_CAL_MON","value","ds_search","SCH_CAL_MON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divPopup.form.divAvail.form.Radio00","value","ds_main","INOUT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divPopup.form.divAvail.form.CheckBox00","value","ds_main","COM_CAR_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divPopup.form.divAvail.form.Spin00","value","ds_main","YY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divPopup.form.divAvail.form.Combo00","value","ds_main","TP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","divPopup.form.divAvail.form.Edit05","value","ds_main","RQST_AMT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","divPopup.form.divAvail.form.RQST_NM","value","ds_main","RQST_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","divPopup.form.divAvail.form.TextArea01","value","ds_main","CONT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","divPopup.form.divAvail.form.SBJ","value","ds_main","SBJ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","divPopup.form.divAvail.form.FRM_DT","value","ds_main","FRM_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","divPopup.form.divAvail.form.TO_DT","value","ds_main","TO_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","divPopup.form.divAvail.form.rqstNo","value","ds_main","RQST_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","divPopup.form.divAvail.form.commCd","value","ds_main","COMM_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("PGM_1010P.xfdl","lib::common.xjs");
        this.registerScript("PGM_1010P.xfdl", function() {
        /**
         *  프로그램 관리
         *  MenuPath      시스템 관리 - 기준정보 관리 - 프로그램 관리
         *  FileName      PRG_1010M.xfdl
         *  Creator       parksw
         *  CreateDate    2023.02.13
         *  Desction      프로그램 관리
         ************** 소스 수정 이력 *************************************************
         *  date          Modifier    Description
         *******************************************************************************
         *  2023.02.13    parksw      최초 생성
         *  2023.04.18    parksw      폼 ID 변경
         *******************************************************************************/

        this.executeIncludeScript("lib::common.xjs"); /*include "lib::common.xjs"*/;

        this.callbackMsg = null;

        /***********************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose)
         ***********************************************************************************************/

        this.PGM_1010P_onload = function(obj,e)
        {
            this.sysId = this.parent.sysId;
            this.progId = this.parent.progId;

            if (Eco.isEmpty(this.sysId) || Eco.isEmpty(this.progId)) {
                this.gfnAlert("잘못된 접근입니다.");
                this.gfnPopupClose();
            }

            this.dsSearch.setColumn(0, "sysId", this.sysId);
            this.dsSearch.setColumn(0, "progId", this.progId);

            this.fnSearch();
        };

        /************************************************************************************************
         * TRANSACTION 서비스 호출 처리
         ************************************************************************************************/

        this.fnSearch = function ()
        {
            var svcId = "getTableList";
            var svcUrl = "sm/getProgramTableList.do";
            var inDs = "dsSearch";
            var outDs = "dsAvailTableList dsSelectedTableList";
            var strArgs = "";
            var callbackName = "fnCallback";
            this.gfnTransaction(svcId, svcUrl, inDs, outDs, strArgs, callbackName);
        };

        this.fnSave = function ()
        {
            var svcId = "setTableList";
            var svcUrl = "sm/setProgramTableList.do";
            var inDs = "dsSelectedTableList=dsSelectedTableList:N";
            var outDs = "";
            var strArgs = "sysId=" + this.sysId + " progId=" + this.progId;
            var callbackName = "fnCallback";
            this.gfnTransaction(svcId, svcUrl, inDs, outDs, strArgs, callbackName);
        };

        /************************************************************************************************
         * CALLBACK 콜백 처리부분(Transaction, Popup)
         ************************************************************************************************/

        this.fnCallback = function (svcId, errorCode, errorMsg)
        {
            switch (svcId) {
                case "getTableList":
                    break;
                case "setTableList":
                    this.gfnAlert("CM_MSG_SAVE_SUCCESS");
                    this.fnSearch();
                    break;
                default:
                    break;
            }
        };

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/

        this.divPopup_btnAdd_onclick = function(obj,e)
        {
            this.fnAdd();
        };

        this.divPopup_btnRemove_onclick = function(obj,e)
        {
            this.fnRemove();
        };

        this.divPopup_btnSave_onclick = function(obj,e)
        {
            this.gfnAlert("CM_CFM_BEFORE_SAVE", [], "", { trueFunc: "fnSave", falseFunc: "" });
        };

        this.divPopup_btnClose_onclick = function(obj,e)
        {
            this.gfnPopupClose();
        };

        this.divPopup_divAvail_grdAvail_onheadclick = function(obj,e)
        {
        	this.gfnSetGridCheckAll(obj, e, "rowSelected");
        };

        this.divPopup_divSelected_grdSelected_onheadclick = function(obj,e)
        {
        	this.gfnSetGridCheckAll(obj, e, "rowSelected");
        };

        /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/

        this.fnAdd = function ()
        {
            var indices = this.gfnGetCheckedRows(this.dsAvailTableList, "rowSelected");
            this.fnMoveRows(this.dsAvailTableList, this.dsSelectedTableList, indices);
        };

        this.fnRemove = function ()
        {
            var indices = this.gfnGetCheckedRows(this.dsSelectedTableList, "rowSelected");
            this.fnMoveRows(this.dsSelectedTableList, this.dsAvailTableList, indices);
        }

        this.fnMoveRows = function (from, to, indices)
        {
            if (indices.length == 0) {
                return;
            }

            var sortedIndices = Array.from(indices).sort((a, b) => a < b ? -1 : (a > b ? 1 : 0));

            while (sortedIndices.length > 0) {
                var sourceIdx = sortedIndices.pop();

                var targetIdx = to.addRow();
                to.copyRow(targetIdx, from, sourceIdx, "sysId=sysId,progId=progId,tableOwner=tableOwner,tableName=tableName,tableComment=tableComment,tableType=tableType");
                from.deleteRow(sourceIdx);
            }

            to.updateSortGroup("S:+tableOwner+tableName")
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.PGM_1010P_onload,this);
            this.divPopup.form.divAvail.form.Static04_00_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.divPopup.form.divAvail.form.grdAvail.addEventHandler("onheadclick",this.divPopup_divAvail_grdAvail_onheadclick,this);
            this.divPopup.form.divSelected.form.grdSelected.addEventHandler("onheadclick",this.divPopup_divSelected_grdSelected_onheadclick,this);
            this.divPopup.form.btnAdd.addEventHandler("onclick",this.divPopup_btnAdd_onclick,this);
            this.divPopup.form.btnRemove.addEventHandler("onclick",this.divPopup_btnRemove_onclick,this);
            this.divPopup.form.btnSave.addEventHandler("onclick",this.divPopup_btnSave_onclick,this);
            this.divPopup.form.btnClose.addEventHandler("onclick",this.divPopup_btnClose_onclick,this);
        };
        this.loadIncludeScript("PGM_1010P.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
