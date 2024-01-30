(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PGM_1020P");
            this.set_titletext("프로그램 목록 조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"progId\" type=\"STRING\" size=\"256\"/><Column id=\"progNm\" type=\"STRING\" size=\"256\"/><Column id=\"progTy\" type=\"STRING\" size=\"256\"/><Column id=\"progUrl\" type=\"STRING\" size=\"256\"/><Column id=\"sysId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsProgram", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"progId\" type=\"STRING\" size=\"50\"/><Column id=\"sysId\" type=\"STRING\" size=\"20\"/><Column id=\"progNm\" type=\"STRING\" size=\"300\"/><Column id=\"progTy\" type=\"STRING\" size=\"20\"/><Column id=\"substituteUrl\" type=\"STRING\" size=\"1000\"/><Column id=\"substituteUseYn\" type=\"STRING\" size=\"256\"/><Column id=\"progDc\" type=\"STRING\" size=\"3000\"/><Column id=\"rgstId\" type=\"STRING\" size=\"20\"/><Column id=\"rgstIp\" type=\"STRING\" size=\"40\"/><Column id=\"rgstDt\" type=\"STRING\" size=\"256\"/><Column id=\"rgstUserNmKr\" type=\"STRING\" size=\"300\"/><Column id=\"updtDt\" type=\"STRING\" size=\"256\"/><Column id=\"updtId\" type=\"STRING\" size=\"20\"/><Column id=\"cnt\" type=\"STRING\" size=\"256\"/><Column id=\"atchFileId\" type=\"STRING\" size=\"30\"/><Column id=\"progFileNm\" type=\"STRING\" size=\"500\"/><Column id=\"updtUserNm\" type=\"STRING\" size=\"300\"/><Column id=\"permissionAt\" type=\"STRING\" size=\"1\"/><Column id=\"progUrl\" type=\"STRING\" size=\"1000\"/><Column id=\"progAuthor\" type=\"STRING\" size=\"300\"/><Column id=\"rowCheck\" type=\"STRING\" size=\"1\"/><Column id=\"rowStatus\" type=\"STRING\" size=\"256\"/><Column id=\"permissionUseYn\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsProgTyCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"text\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFuncTyCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"text\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsProgFuncTyCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"text\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsProgTySearchCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"text\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUseYnCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"text\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divPopup","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Static("staPopupTitle","0","0",null,"50","0",null,null,null,null,null,this.divPopup.form);
            obj.set_taborder("0");
            obj.set_text("프로그램 목록 조회");
            obj.set_cssclass("sta_WF_popupTitle");
            this.divPopup.addChild(obj.name, obj);

            obj = new Static("Static10","0","50","30","586",null,null,null,null,null,null,this.divPopup.form);
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

            obj = new Static("Static10_00",null,"50","30","586","0",null,null,null,null,null,this.divPopup.form);
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

            obj = new Div("divSearch","30","70",null,"151","30",null,null,null,null,null,this.divPopup.form);
            obj.set_taborder("4");
            obj.set_cssclass("div_WF_popup");
            obj.set_text("");
            this.divPopup.addChild(obj.name, obj);

            obj = new Static("staBg","20","45",null,"90","20",null,null,null,null,null,this.divPopup.form.divSearch.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_bg");
            this.divPopup.form.divSearch.addChild(obj.name, obj);

            obj = new Static("sta001","40","60","100","26",null,null,null,null,null,null,this.divPopup.form.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("프로그램 ID");
            obj.set_cssclass("sta_WF_condition01");
            this.divPopup.form.divSearch.addChild(obj.name, obj);

            obj = new Static("sta002","40%","60","100","26",null,null,null,null,null,null,this.divPopup.form.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("프로그램명");
            obj.set_cssclass("sta_WF_condition01");
            this.divPopup.form.divSearch.addChild(obj.name, obj);

            obj = new Static("sta004","40%","94","100","26",null,null,null,null,null,null,this.divPopup.form.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("프로그램 URL");
            obj.set_cssclass("sta_WF_condition01");
            this.divPopup.form.divSearch.addChild(obj.name, obj);

            obj = new Static("sta003","40","94","100","26",null,null,null,null,null,null,this.divPopup.form.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("프로그램 유형");
            obj.set_cssclass("sta_WF_condition01");
            this.divPopup.form.divSearch.addChild(obj.name, obj);

            obj = new Static("Static10","0","-1","20","146",null,null,null,null,null,null,this.divPopup.form.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("w20");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divPopup.form.divSearch.addChild(obj.name, obj);

            obj = new Static("staTitle","20","0","169","45",null,null,null,null,null,null,this.divPopup.form.divSearch.form);
            obj.set_taborder("14");
            obj.set_text("검색 조건");
            obj.set_cssclass("sta_WF_subTitle01");
            this.divPopup.form.divSearch.addChild(obj.name, obj);

            obj = new Static("Static15_01_00_00","130","86","50","8",null,null,null,null,null,null,this.divPopup.form.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("h 8");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divPopup.form.divSearch.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_00","110","0","60","45",null,null,null,null,null,null,this.divPopup.form.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("h 45");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divPopup.form.divSearch.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_01","20","135","100","15",null,null,null,null,null,null,this.divPopup.form.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divPopup.form.divSearch.addChild(obj.name, obj);

            obj = new Static("Static10_00","335","45","40","84",null,null,null,null,null,null,this.divPopup.form.divSearch.form);
            obj.set_taborder("15");
            obj.set_text("w40");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divPopup.form.divSearch.addChild(obj.name, obj);

            obj = new Edit("edt_schProgNm","sta002:10","60","320","26",null,null,null,null,null,null,this.divPopup.form.divSearch.form);
            obj.set_taborder("2");
            obj.set_maxlength("100");
            this.divPopup.form.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"14","63","26","20",null,null,null,null,null,this.divPopup.form.divSearch.form);
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_icoSearch");
            obj.set_taborder("5");
            this.divPopup.form.divSearch.addChild(obj.name, obj);

            obj = new Combo("cbo_schProgTy","sta003:10","94","160","26",null,null,null,null,null,null,this.divPopup.form.divSearch.form);
            obj.set_taborder("3");
            obj.set_innerdataset("dsProgTySearchCombo");
            obj.set_codecolumn("value");
            obj.set_datacolumn("text");
            obj.set_text("Combo00");
            this.divPopup.form.divSearch.addChild(obj.name, obj);

            obj = new Edit("edt_schProgId","sta001:10","60","160","26",null,null,null,null,null,null,this.divPopup.form.divSearch.form);
            obj.set_taborder("1");
            obj.set_maxlength("100");
            this.divPopup.form.divSearch.addChild(obj.name, obj);

            obj = new Edit("edt_schProgUrl","sta004:10","94","320","26",null,null,null,null,null,null,this.divPopup.form.divSearch.form);
            obj.set_taborder("4");
            this.divPopup.form.divSearch.addChild(obj.name, obj);

            obj = new Div("divResult","30","divSearch:10",null,null,"30","76",null,null,null,null,this.divPopup.form);
            obj.set_taborder("5");
            obj.set_cssclass("div_WF_popup");
            obj.set_text("");
            this.divPopup.addChild(obj.name, obj);

            obj = new Static("Static10","0","-1","19","132",null,null,null,null,null,null,this.divPopup.form.divResult.form);
            obj.set_taborder("0");
            obj.set_text("w20");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divPopup.form.divResult.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_00","110","0","60","45",null,null,null,null,null,null,this.divPopup.form.divResult.form);
            obj.set_taborder("1");
            obj.set_text("h 45");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divPopup.form.divResult.addChild(obj.name, obj);

            obj = new Static("staTitle","20","0","81","45",null,null,null,null,null,null,this.divPopup.form.divResult.form);
            obj.set_taborder("2");
            obj.set_text("검색결과");
            obj.set_cssclass("sta_WF_subTitle01");
            this.divPopup.form.divResult.addChild(obj.name, obj);

            obj = new Static("staGridRowCnt","staTitle:10","0","149","45",null,null,null,null,null,null,this.divPopup.form.divResult.form);
            obj.set_taborder("3");
            obj.set_text("(총 0건)");
            obj.set_cssclass("sta_WF_subResult");
            this.divPopup.form.divResult.addChild(obj.name, obj);

            obj = new Grid("grdProgram","20","45",null,null,"20","15",null,null,null,null,this.divPopup.form.divResult.form);
            obj.set_taborder("7");
            obj.set_binddataset("dsProgram");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\" band=\"left\"/><Column size=\"48\" band=\"left\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"200\"/><Column size=\"120\"/><Column size=\"240\"/><Column size=\"240\"/><Column size=\"120\"/><Column size=\"240\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"240\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"34\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"시스템ID\"/><Cell col=\"3\" text=\"프로그램ID\"/><Cell col=\"4\" text=\"프로그램명\"/><Cell col=\"5\" text=\"프로그램유형\"/><Cell col=\"6\" text=\"URL\"/><Cell col=\"7\" text=\"프로그램 설명\"/><Cell col=\"8\" text=\"프로그램 파일명\"/><Cell col=\"9\" text=\"대체URL\"/><Cell col=\"10\" text=\"대체URL 사용여부\"/><Cell col=\"11\" text=\"권한레벨 사용여부\"/><Cell col=\"12\" text=\"권한레벨 사용설명\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\" text=\"expr:currow+1\" textAlign=\"center\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" textAlign=\"center\" text=\"bind:rowCheck\"/><Cell col=\"2\" text=\"bind:sysId\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:progId\"/><Cell col=\"4\" text=\"bind:progNm\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:progTy\" combodataset=\"dsProgTyCombo\" combocodecol=\"value\" combodatacol=\"text\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:progUrl\" edittype=\"none\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:progDc\" edittype=\"none\" textAlign=\"left\"/><Cell col=\"8\" text=\"bind:progFileNm\" edittype=\"none\" textAlign=\"left\"/><Cell col=\"9\" text=\"bind:substituteUrl\" edittype=\"none\" textAlign=\"left\"/><Cell col=\"10\" text=\"bind:substituteUseYn\" edittype=\"none\" combodataset=\"dsUseYnCombo\" combocodecol=\"value\" combodatacol=\"text\" comboautoselect=\"true\" checkboxfalsevalue=\"N\" checkboxtruevalue=\"Y\" displaytype=\"combotext\" textAlign=\"left\"/><Cell col=\"11\" text=\"bind:permissionUseYn\" edittype=\"none\" displaytype=\"combotext\" checkboxfalsevalue=\"N\" checkboxtruevalue=\"Y\" combodataset=\"dsUseYnCombo\" combodatacol=\"text\" combocodecol=\"value\" textAlign=\"left\"/><Cell col=\"12\" text=\"bind:permissionDc\" edittype=\"none\" textAlign=\"left\"/></Band></Format></Formats>");
            this.divPopup.form.divResult.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_01_00","449",null,"103","23",null,"0",null,null,null,null,this.divPopup.form);
            obj.set_taborder("6");
            obj.set_text("h 23");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divPopup.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_01_00_00","449",null,"103","25",null,"51",null,null,null,null,this.divPopup.form);
            obj.set_taborder("8");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divPopup.addChild(obj.name, obj);

            obj = new Button("btnClose",null,null,"65","28","392","23",null,null,null,null,this.divPopup.form);
            obj.set_text("닫기");
            obj.set_cssclass("");
            obj.set_visible("true");
            obj.set_taborder("9");
            this.divPopup.addChild(obj.name, obj);

            obj = new Button("btnSelect","393","549","65","28",null,null,null,null,null,null,this.divPopup.form);
            obj.set_text("선택");
            obj.set_cssclass("btn_WF_icoSelect");
            obj.set_taborder("7");
            this.divPopup.addChild(obj.name, obj);

            obj = new Button("btnClear","461","549","79","28",null,null,null,null,null,null,this.divPopup.form);
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_icoReturn");
            obj.set_taborder("10");
            this.divPopup.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divPopup.form.divSearch.form
            obj = new Layout("default","",1032,72,this.divPopup.form.divSearch.form,function(p){});
            this.divPopup.form.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divPopup.form.divResult.form
            obj = new Layout("default","",1032,72,this.divPopup.form.divResult.form,function(p){});
            this.divPopup.form.divResult.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divPopup.form
            obj = new Layout("default","",0,0,this.divPopup.form,function(p){});
            this.divPopup.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1000,600,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divPopup.form.divSearch.form.edt_schProgId","value","dsSearch","progId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divPopup.form.divSearch.form.edt_schProgNm","value","dsSearch","progNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divPopup.form.divSearch.form.edt_schProgUrl","value","dsSearch","progUrl");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divPopup.form.divSearch.form.cbo_schProgTy","value","dsSearch","progTy");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("PGM_1020P.xfdl","lib::common.xjs");
        this.registerScript("PGM_1020P.xfdl", function() {


        this.executeIncludeScript("lib::common.xjs"); /*include "lib::common.xjs"*/;

        /***********************************************************************************************
        * FORM EVENT 영역(onload, onbeforeclose)
        /***********************************************************************************************/

        /**
         * description 화면 onload
        */
        this.programSearchPopup_onload = function(obj,e)
        {
            this.gfnFormOnLoad(this);

            if (this.parent.mode == "single") {
                var grid = this.divPopup.form.divResult.form.grdProgram;
                var checkIdx = grid.getBindCellIndex("body", "rowCheck");
                grid.setCellProperty("head", checkIdx, "displaytype", "none");
                grid.setCellProperty("head", checkIdx, "edittype", "none");
                grid.setCellProperty("head", checkIdx, "text", null);
                grid.setCellProperty("head", checkIdx, "expr", null);
            }
            this.dsSearch.setColumn(0,"sysId",this.parent.sysId);
            this.gfnLoadCombo("loadCombo", "dsProgTySearchCombo=PMS:SM:PROG_TY:A dsProgTyCombo=PMS:SM:PROG_TY:C dsFuncTyCombo=PMS:SM:FUNC_TYPE:C dsProgFuncTyCombo=PMS:SM:PROG_FUNC_TYPE:C dsUseYnCombo=PMS:SM:USE_YN", "fnComboCallback");

        };

        /************************************************************************************************
        * TRANSACTION 서비스 호출 처리
        ************************************************************************************************/

        /**
         * description 조회
         */
        this.fnSearch = function ()
        {
            var svcId = "getProgramList";
            var svcUrl = "sm/getProgramManageList.do";
            var inDs = "dsSearch";
            var outDs = "dsProgram";
            var strArgs = "";
            var callbackName = "fnCallback";
            this.gfnTransaction(svcId, svcUrl, inDs, outDs, strArgs, callbackName);
        };

        /************************************************************************************************
         * CALLBACK 콜백 처리부분(Transaction, Popup)
         ************************************************************************************************/

        this.fnComboCallback = function (svcId, errorCode, errorMsg)
        {
            this.fnSearch();
        };

        /**
         * @description Transaction CallBack 함수
         */
        this.fnCallback = function (svcId, errorCode, errorMsg)
        {
            if (svcId == "getProgramList") {
                this.gfnRowCount(this.dsProgram, this.divPopup.form.divResult.form.staGridRowCnt);

                if (this.parent.progId != null && !Eco.isEmpty(this.parent.progId)) {
                    var i = this.dsProgram.findRow("progId", this.parent.progId);
                    if (i >= 0) {
                        this.dsProgram.setColumn(i, rowCheck, "1");
                    }
                }
            }
        };

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/

        this.btn_search_onclick = function(obj,e)
        {
            this.fnSearch();
        };

        this.divPopup_divResult_grdProgram_oncellclick = function(obj,e)
        {
        	if (this.parent.mode == "single") {
                var ds = this.dsProgram;
                var r = e.row;
                this.dsProgram.set_enableevent(false);

                for (var i = 0; i < ds.rowcount; i++) {
                    if (i != r) {
                        ds.setColumn(i, "rowCheck", 0);
                    } else {
                        ds.setColumn(i, "rowCheck", 1);
                    }
                }

                this.dsProgram.set_enableevent(true);
            }
        };

        this.divPopup_div_Search_edt_schProgId_onkeyup = function(obj,e)
        {
        	if (e.keycode == 13) {
                this.fnSearch();
            }
        };

        this.divPopup_divResult_grdProgram_onheadclick = function(obj,e)
        {
        	if (this.parent.mode != "single") {
                this.gfnSetGridCheckAll(obj, e, "rowCheck");
            }
        };

        this.divPopup_btn_popClose_onclick = function(obj,e)
        {
        	this.close();
        };

        this.divPopup_btnSelect_onclick = function(obj,e)
        {
            this.fnCloseWithResult();
        };

        //초기화버튼
        this.divPopup_div_Search_btn_clear_onclick = function(obj,e)
        {
        	var result = "clear";
            this.gfnPopupClose(result);
        };

        this.divPopup_divResult_grdProgram_oncelldblclick = function(obj,e)
        {
            if (this.parent.mode == "single") {
                this.fnCloseWithResult();
            }
        };

        /************************************************************************************************
        * 사용자 FUNCTION 영역
        ************************************************************************************************/

        this.fnCloseWithResult = function ()
        {
            var indices = this.gfnGetCheckedRows(this.divPopup.form.divResult.form.grdProgram, "rowCheck");
            console.log(indices);
            var thisObj = this;
            var result = {
                programs: indices.map(function (e) {
                    return {
                        progId: thisObj.dsProgram.getColumn(e, "progId"),
                        progNm: thisObj.dsProgram.getColumn(e, "progNm")
                    };
                })
            };

            this.gfnPopupClose(result);
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.programSearchPopup_onload,this);
            this.divPopup.form.Static04_00_00_01.addEventHandler("onclick",this.Static31_onclick,this);
            this.divPopup.form.divSearch.form.staBg.addEventHandler("onclick",this.div_Search_Static00_onclick,this);
            this.divPopup.form.divSearch.form.sta001.addEventHandler("onclick",this.div_Search_Static01_onclick,this);
            this.divPopup.form.divSearch.form.sta004.addEventHandler("onclick",this.div_Search_Static01_onclick,this);
            this.divPopup.form.divSearch.form.staTitle.addEventHandler("onclick",this.div_Search_Static05_onclick,this);
            this.divPopup.form.divSearch.form.Static15_01_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.divPopup.form.divSearch.form.Static04_00_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.divPopup.form.divSearch.form.Static04_00_00_01.addEventHandler("onclick",this.Static31_onclick,this);
            this.divPopup.form.divSearch.form.Static10_00.addEventHandler("onclick",this.div_Search_Static10_00_onclick,this);
            this.divPopup.form.divSearch.form.edt_schProgNm.addEventHandler("onkeyup",this.divPopup_div_Search_edt_schProgId_onkeyup,this);
            this.divPopup.form.divSearch.form.btnSearch.addEventHandler("onclick",this.btn_search_onclick,this);
            this.divPopup.form.divSearch.form.cbo_schProgTy.addEventHandler("onkeyup",this.divPopup_div_Search_edt_schProgId_onkeyup,this);
            this.divPopup.form.divSearch.form.edt_schProgId.addEventHandler("onkeyup",this.divPopup_div_Search_edt_schProgId_onkeyup,this);
            this.divPopup.form.divSearch.form.edt_schProgUrl.addEventHandler("onkeyup",this.divPopup_div_Search_edt_schProgId_onkeyup,this);
            this.divPopup.form.divResult.form.Static04_00_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.divPopup.form.divResult.form.staTitle.addEventHandler("onclick",this.Static09_onclick,this);
            this.divPopup.form.divResult.form.grdProgram.addEventHandler("oncellclick",this.divPopup_divResult_grdProgram_oncellclick,this);
            this.divPopup.form.divResult.form.grdProgram.addEventHandler("onheadclick",this.divPopup_divResult_grdProgram_onheadclick,this);
            this.divPopup.form.divResult.form.grdProgram.addEventHandler("oncelldblclick",this.divPopup_divResult_grdProgram_oncelldblclick,this);
            this.divPopup.form.Static04_00_00_01_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.divPopup.form.Static04_00_00_01_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.divPopup.form.btnClose.addEventHandler("onclick",this.divPopup_btn_popClose_onclick,this);
            this.divPopup.form.btnSelect.addEventHandler("onclick",this.divPopup_btnSelect_onclick,this);
            this.divPopup.form.btnClear.addEventHandler("onclick",this.divPopup_div_Search_btn_clear_onclick,this);
            this.dsProgram.addEventHandler("onrowposchanged",this.dsProgram_onrowposchanged,this);
        };
        this.loadIncludeScript("PGM_1020P.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
