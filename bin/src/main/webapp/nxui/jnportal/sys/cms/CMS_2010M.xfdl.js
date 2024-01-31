(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CMS_2010M");
            this.set_titletext("게시판 관리");
            this.set_cssclass("frm_WF_comp");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"boardNm\" type=\"STRING\" size=\"256\"/><Column id=\"boardType\" type=\"STRING\" size=\"256\"/><Column id=\"rgstDtBgn\" type=\"STRING\" size=\"256\"/><Column id=\"rgstDtEnd\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBoard", this);
            obj._setContents("<ColumnInfo><Column id=\"sysId\" type=\"STRING\" size=\"256\"/><Column id=\"boardId\" type=\"STRING\" size=\"256\"/><Column id=\"boardIntro\" type=\"STRING\" size=\"256\"/><Column id=\"boardNm\" type=\"STRING\" size=\"256\"/><Column id=\"boardType\" type=\"STRING\" size=\"256\"/><Column id=\"boardAttr\" type=\"STRING\" size=\"256\"/><Column id=\"replyPosblYn\" type=\"STRING\" size=\"256\"/><Column id=\"fileAtchPosblYn\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"rgstDt\" type=\"DATE\" size=\"256\"/><Column id=\"rsgtId\" type=\"STRING\" size=\"256\"/><Column id=\"rgstIp\" type=\"STRING\" size=\"256\"/><Column id=\"updtId\" type=\"DATE\" size=\"256\"/><Column id=\"updtDt\" type=\"STRING\" size=\"256\"/><Column id=\"updtIp\" type=\"STRING\" size=\"256\"/><Column id=\"upperMenuId\" type=\"STRING\" size=\"256\"/><Column id=\"upperMenuNm\" type=\"STRING\" size=\"256\"/><Column id=\"sortOrdr\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTypeCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"text\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAttrCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"text\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAvailCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"text\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUseYnCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"text\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static02",null,"0","50","690","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("W\r\n 50");
            obj.set_visible("false");
            obj.set_background("antiquewhite");
            obj.set_color("blue");
            this.addChild(obj.name, obj);

            obj = new Static("Static34","0","51","50","639",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("W 50");
            obj.set_visible("false");
            obj.set_background("antiquewhite");
            obj.set_color("blue");
            this.addChild(obj.name, obj);

            obj = new Button("btnNew",null,"19","65","28","118",null,null,null,null,null,this);
            obj.set_text("신규");
            obj.set_cssclass("");
            obj.set_visible("true");
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title","50","18","205","37",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("게시판 관리");
            obj.set_cssclass("sta_WF_compTitle01");
            obj.set_expr("comp.parent.getOwnerFrame().tabArgs.title");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"19","65","28","50",null,null,null,null,null,this);
            obj.set_text("조회");
            obj.set_cssclass("");
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","940","0","60","19",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("h 19");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","50","0","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("h 30");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00","50","45","60","12",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("h 12");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_00","50","167","60","10",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","50","57",null,"110","50",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_bgWhite");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_01","893","47","60","10",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","70","102",null,"50","70",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sch_RQST_NO","70","110","110","34",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("게시판명");
            obj.set_cssclass("sta_WF_condition01");
            this.addChild(obj.name, obj);

            obj = new Static("edt_schBoardType","534","110","110","34",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("게시판 유형");
            obj.set_cssclass("sta_WF_condition01");
            this.addChild(obj.name, obj);

            obj = new Static("sch_APV_STAT_CD","1348","110","110","34",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("사용 여부");
            obj.set_cssclass("sta_WF_condition01");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_schBoardNm","180","114","12.97%","26",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_maxlength("100");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00","70","68","169","27",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_subTitle01");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_00","70","57","60","18",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("h 18");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static15_01","239","140","50","12",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("h 12");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_00_00","160","57","60","45",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("h 45");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Combo("combo_useYn","1458","114","12.97%","26",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_codecolumn("value");
            obj.set_datacolumn("text");
            obj.set_innerdataset("dsUseYnCombo");
            obj.set_text("");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_01","70","152","100","15",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("sch_RQST_DT00","948","110","110","34",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("등록일");
            obj.set_cssclass("sta_WF_condition01");
            this.addChild(obj.name, obj);

            obj = new Static("Static10_00_00","495","102","40",null,null,"568",null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("w40");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static15_01_00","280","102","50","12",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("h 12");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static10_00","50","57","20",null,null,"553",null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("w20");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Combo("combo_schBoardType","644","114","12.97%","26",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_codecolumn("value");
            obj.set_datacolumn("text");
            obj.set_innerdataset("dsTypeCombo");
            obj.set_text("");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Calendar("edt_schRgstDtBgn","1058","114","112","26",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            obj.set_backgroundcolumn("disabled");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static10_00_00_00","1309","102","40",null,null,"568",null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("w40");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Calendar("edt_schRgstDtEnd","1197","114","112","26",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            obj.set_backgroundcolumn("disabled");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static26","1170","115","25","24",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Div("divResult","50","177",null,"513","50",null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_cssclass("");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","0","-1","20","295",null,null,null,null,null,null,this.divResult.form);
            obj.set_taborder("1");
            obj.set_text("w20");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divResult.addChild(obj.name, obj);

            obj = new Static("Static04_00_00","20","0","60","18",null,null,null,null,null,null,this.divResult.form);
            obj.set_taborder("2");
            obj.set_text("h 18");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divResult.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_00","280","0","60","45",null,null,null,null,null,null,this.divResult.form);
            obj.set_taborder("3");
            obj.set_text("h 45");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divResult.addChild(obj.name, obj);

            obj = new Static("Static09","20","11","169","27",null,null,null,null,null,null,this.divResult.form);
            obj.set_taborder("4");
            obj.set_text("게시판 목록");
            obj.set_cssclass("sta_WF_subTitle01");
            this.divResult.addChild(obj.name, obj);

            obj = new Static("stc_gridRowCnt","120","11","149","27",null,null,null,null,null,null,this.divResult.form);
            obj.set_taborder("5");
            obj.set_text("(총 0건)");
            obj.set_cssclass("sta_WF_subResult");
            this.divResult.addChild(obj.name, obj);

            obj = new Static("Static10_00",null,"0","20","295","0",null,null,null,null,null,this.divResult.form);
            obj.set_taborder("0");
            obj.set_text("w20");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divResult.addChild(obj.name, obj);

            obj = new Grid("grdBoard","20","45",null,null,"20","19",null,null,null,null,this.divResult.form);
            obj.set_taborder("6");
            obj.set_binddataset("dsBoard");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_autoupdatetype("itemselect");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\" band=\"left\"/><Column size=\"240\"/><Column size=\"640\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"128\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"46\" band=\"head\"/><Row size=\"33\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"게시판명\"/><Cell col=\"2\" text=\"게시판 설명\"/><Cell col=\"3\" text=\"게시판 유형\"/><Cell col=\"4\" text=\"게시판 속성\"/><Cell col=\"5\" text=\"댓글 가능 여부\"/><Cell col=\"6\" text=\"파일 첨부 가능 여부\"/><Cell col=\"7\" text=\"사용 여부\"/><Cell col=\"8\" text=\"등록일\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\" text=\"expr:currow+1\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:boardNm\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:boardIntro\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:boardType\" displaytype=\"combotext\" combodataset=\"dsTypeCombo\" combocodecol=\"value\" combodatacol=\"text\"/><Cell col=\"4\" combodataset=\"dsAttrCombo\" displaytype=\"combotext\" text=\"bind:boardAttr\" combocodecol=\"value\" combodatacol=\"text\"/><Cell col=\"5\" displaytype=\"combotext\" text=\"bind:replyPosblYn\" combodataset=\"dsAvailCombo\" combocodecol=\"value\" combodatacol=\"text\"/><Cell col=\"6\" displaytype=\"combotext\" text=\"bind:fileAtchPosblYn\" combodataset=\"dsAvailCombo\" combocodecol=\"value\" combodatacol=\"text\"/><Cell col=\"7\" displaytype=\"combotext\" text=\"bind:useYn\" combodataset=\"dsUseYnCombo\" combocodecol=\"value\" combodatacol=\"text\"/><Cell col=\"8\" text=\"bind:rgstDt\"/></Band></Format></Formats>");
            this.divResult.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divResult.form
            obj = new Layout("default","",1032,72,this.divResult.form,function(p){});
            this.divResult.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1920,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item4","edt_schBoardNm","value","dsSearch","boardNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","combo_schBoardType","value","dsSearch","boardType");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edt_schRgstDtBgn","value","dsSearch","rgstDtBgn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","edt_schRgstDtEnd","value","dsSearch","rgstDtEnd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","combo_useYn","value","dsSearch","useYn");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("CMS_2010M.xfdl","lib::common.xjs");
        this.registerScript("CMS_2010M.xfdl", function() {
        /**
        *  게시판 관리
        *  MenuPath      관리 메뉴 - 관리자 - 게시판 관리
        *  FileName      CMS_2010M.xfdl
        *  Creator 	     parksw
        *  CreateDate    2023.03.27
        *  Desction      게시판 목록 관리
        ************** 소스 수정 이력 ***********************************************
        *  date          Modifier    Description
        *******************************************************************************
        *  2023.03.27    parksw 	 최초 생성
        *  2023.04.18    parksw      폼 ID 변경
        *******************************************************************************/

        this.executeIncludeScript("lib::common.xjs"); /*include "lib::common.xjs"*/;

        /***********************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose)
         ***********************************************************************************************/

        /**
         * @description 화면 onload
         */
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnLoad(this);
            this.gfnLoadCombo("loadCombo", "dsTypeCombo=PMS:CMS:BOARD_TYPE:A dsAttrCombo=PMS:CMS:BOARD_ATTR:A dsAvailCombo=PMS:CMS:BOARD_AVAIL:A dsUseYnCombo=PMS:SM:USE_YN:A", "fnComboCallback");
        };

        /************************************************************************************************
         * TRANSACTION 서비스 호출 처리
         ************************************************************************************************/

        this.fnSearch = function ()
        {
        	var strSvcId    = "getBoardList";
        	var strSvcUrl   = "cms/getBoardManageList.do";
        	var inData      = "dsSearch";
        	var outData     = "dsBoard";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        this.fnSave = function ()
        {
            this.fnSearch();
        };

        /************************************************************************************************
         * CALLBACK 콜백 처리부분(Transaction, Popup)
         ************************************************************************************************/

        this.fnComboCallback = function (svcId, errorCode, errorMsg)
        {
            if (svcId == "loadCombo") {
                this.fnSearch();
            }
        }

        this.fnCallback = function (svcId, errorCode, errorMsg)
        {
        };

        this.fnPopupCallback = function (popupId, args)
        {
            var result = this.gfnGetPopupRtn();
            if (popupId == "boardRegistPopup" && result) {
                this.fnSearch();
            }
        };

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/

        this.btnNew_onclick = function(obj,e)
        {
        	this.fnOpenRegistPopup();
        };

        this.btnSearch_onclick = function(obj,e)
        {
        	this.fnSearch();
        };

        this.divResult_grdBoard_oncelldblclick = function(obj,e)
        {
        	var sysId = this.dsBoard.getColumn(e.row, "sysId");
            var boardId = this.dsBoard.getColumn(e.row, "boardId");

            this.fnOpenRegistPopup(sysId, boardId);
        };

        this.divResult_grdBoard_onkeyup = function(obj,e)
        {
        	if (e.keycode == 13) {
                var row = this.dsBoard.rowposition;
                var sysId = this.dsBoard.getColumn(row, "sysId");
                var boardId = this.dsBoard.getColumn(row, "boardId");

                this.fnOpenRegistPopup(sysId, boardId);
            }
        };

        /************************************************************************************************
        * 사용자 FUNCTION 영역
        ************************************************************************************************/

        /**
         * @description 게시판 등록/수정 팝업을 연다.
         * @param {string} boardId
         *     (수정 시) 게시판 ID
         * @returns {void}
         */
        this.fnOpenRegistPopup = function (sysId, boardId) {
            var args = {};

            if (sysId != null && sysId != "") {
                args.sysId = sysId;
            } else {
                var app = nexacro.getApplication();
                args.sysId = app.gdsUserInfo.getColumn(0, "sysId");
            }

            if (boardId != null && boardId != "") {
                args.boardId = boardId;
            }

            this.gfnOpenPopup("boardRegistPopup", "sys::cms/CMS_2010P.xfdl", args, "fnPopupCallback", "");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.Static02.addEventHandler("onclick",this.Static02_onclick,this);
            this.Static34.addEventHandler("onclick",this.Static02_onclick,this);
            this.btnNew.addEventHandler("onclick",this.btnNew_onclick,this);
            this.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
            this.Static04.addEventHandler("onclick",this.Static31_onclick,this);
            this.Static05.addEventHandler("onclick",this.Static31_onclick,this);
            this.Static04_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.Static04_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.Static04_01.addEventHandler("onclick",this.Static31_onclick,this);
            this.Static00.addEventHandler("onclick",this.div_Search_Static00_onclick,this);
            this.sch_RQST_NO.addEventHandler("onclick",this.div_Search_Static01_onclick,this);
            this.Static05_00.addEventHandler("onclick",this.div_Search_Static05_onclick,this);
            this.Static04_00_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.Static15_01.addEventHandler("onclick",this.Static31_onclick,this);
            this.Static04_00_00_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.Static04_00_00_01.addEventHandler("onclick",this.Static31_onclick,this);
            this.Static10_00_00.addEventHandler("onclick",this.div_Search_Static10_00_onclick,this);
            this.Static15_01_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.Static10_00_00_00.addEventHandler("onclick",this.div_Search_Static10_00_onclick,this);
            this.divResult.form.Static04_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.divResult.form.Static04_00_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.divResult.form.Static09.addEventHandler("onclick",this.Static09_onclick,this);
            this.divResult.form.grdBoard.addEventHandler("oncelldblclick",this.divResult_grdBoard_oncelldblclick,this);
            this.divResult.form.grdBoard.addEventHandler("onkeyup",this.divResult_grdBoard_onkeyup,this);
        };
        this.loadIncludeScript("CMS_2010M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
