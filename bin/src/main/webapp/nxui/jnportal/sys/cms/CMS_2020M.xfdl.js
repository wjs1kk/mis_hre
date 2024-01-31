(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CMS_2020M");
            this.set_titletext("게시글 목록");
            this.set_cssclass("frm_WF_comp");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,701);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"searchType\" type=\"STRING\" size=\"256\"/><Column id=\"keyword\" type=\"STRING\" size=\"256\"/><Column id=\"rgstDtBgn\" type=\"DATE\" size=\"256\"/><Column id=\"rgstDtEnd\" type=\"DATE\" size=\"256\"/><Column id=\"rowCount\" type=\"INT\" size=\"256\"/><Column id=\"boardId\" type=\"STRING\" size=\"256\"/><Column id=\"sysId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"rowCount\">10</Col><Col id=\"searchType\">TITLE_CONTENT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsArticle", this);
            obj._setContents("<ColumnInfo><Column id=\"rowCheck\" type=\"STRING\" size=\"256\"/><Column id=\"itemRowNum\" type=\"STRING\" size=\"256\"/><Column id=\"sysId\" type=\"STRING\" size=\"256\"/><Column id=\"boardId\" type=\"STRING\" size=\"256\"/><Column id=\"artclId\" type=\"STRING\" size=\"256\"/><Column id=\"artclTitle\" type=\"STRING\" size=\"256\"/><Column id=\"showYn\" type=\"STRING\" size=\"256\"/><Column id=\"showStartDt\" type=\"STRING\" size=\"256\"/><Column id=\"showEndDt\" type=\"STRING\" size=\"256\"/><Column id=\"atchFileId\" type=\"STRING\" size=\"256\"/><Column id=\"inOutDiv\" type=\"STRING\" size=\"256\"/><Column id=\"upArtclId\" type=\"STRING\" size=\"256\"/><Column id=\"rgstId\" type=\"STRING\" size=\"256\"/><Column id=\"rgstNm\" type=\"STRING\" size=\"256\"/><Column id=\"rgstDt\" type=\"DATETIME\" size=\"256\"/><Column id=\"rgstIp\" type=\"STRING\" size=\"256\"/><Column id=\"updtId\" type=\"STRING\" size=\"256\"/><Column id=\"updtNm\" type=\"STRING\" size=\"256\"/><Column id=\"updtDt\" type=\"DATETIME\" size=\"256\"/><Column id=\"updtIp\" type=\"STRING\" size=\"256\"/><Column id=\"level\" type=\"INT\" size=\"256\"/><Column id=\"viewCount\" type=\"INT\" size=\"256\"/><Column id=\"atchFileCnt\" type=\"INT\" size=\"256\"/><Column id=\"cmntCnt\" type=\"INT\" size=\"256\"/><Column id=\"noticeYn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBoard", this);
            obj._setContents("<ColumnInfo><Column id=\"sysId\" type=\"STRING\" size=\"256\"/><Column id=\"boardId\" type=\"STRING\" size=\"256\"/><Column id=\"boardIntro\" type=\"STRING\" size=\"256\"/><Column id=\"boardNm\" type=\"STRING\" size=\"256\"/><Column id=\"boardType\" type=\"STRING\" size=\"256\"/><Column id=\"boardAttr\" type=\"STRING\" size=\"256\"/><Column id=\"replyPosblYn\" type=\"STRING\" size=\"256\"/><Column id=\"fileAtchPosblYn\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"rgstDt\" type=\"DATE\" size=\"256\"/><Column id=\"rsgtId\" type=\"STRING\" size=\"256\"/><Column id=\"rgstIp\" type=\"STRING\" size=\"256\"/><Column id=\"updtId\" type=\"DATE\" size=\"256\"/><Column id=\"updtDt\" type=\"STRING\" size=\"256\"/><Column id=\"updtIp\" type=\"STRING\" size=\"256\"/><Column id=\"upperMenuId\" type=\"STRING\" size=\"256\"/><Column id=\"upperMenuNm\" type=\"STRING\" size=\"256\"/><Column id=\"sortOrdr\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBoardRoles", this);
            obj._setContents("<ColumnInfo><Column id=\"sysId\" type=\"STRING\" size=\"256\"/><Column id=\"boardId\" type=\"STRING\" size=\"256\"/><Column id=\"roleCode\" type=\"STRING\" size=\"256\"/><Column id=\"boardFuncId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPeriodCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"text\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearchTypeCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"text\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new View("vwTitle","197","97","100%","28",null,null,null,"1024",null,null,this);
            obj.set_taborder("0");
            obj.set_text("View00");
            obj.set_viewdataset("viewdataset");
            obj.set_formscrolltype("none");
            obj.set_formscrollbartype("none none");
            obj.set_flexgrow("0");
            obj.set_flexshrink("0");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title","0",null,"100%","37",null,"-9",null,null,null,null,this.vwTitle.form);
            obj.set_taborder("0");
            obj.set_text("게시판 관리");
            obj.set_cssclass("sta_WF_compTitle01");
            obj.set_expr("comp.parent.getOwnerFrame().tabArgs.title");
            this.vwTitle.addChild(obj.name, obj);

            obj = new Div("divSearch","448","46","100%","117",null,null,null,"1024","117","117",this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_flexshrink("0");
            obj.set_flexgrow("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","15",null,"87","20",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_bg");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static02_00","40","58",null,"1","40",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_borCondition01");
            obj.set_background("#B3C9DF");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"26","65","28","40",null,null,null,null,null,this.divSearch.form);
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_icoSearch");
            obj.set_taborder("6");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCond","20","23","110","34",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("검색 조건");
            obj.set_cssclass("sta_WF_condition01");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchType","staCond:0","27","117","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_codecolumn("value");
            obj.set_datacolumn("text");
            obj.set_innerdataset("dsSearchTypeCombo");
            obj.set_text("");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSearchKeyword","cboSearchType:5","27",null,"26","btnSearch:100",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staSearchDur","20","59","110","34",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("검색 기간");
            obj.set_cssclass("sta_WF_condition01");
            this.divSearch.addChild(obj.name, obj);

            obj = new Radio("rdDuration","staSearchDur:0","65","336","25",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_innerdataset("dsPeriodCombo");
            obj.set_codecolumn("value");
            obj.set_datacolumn("text");
            obj.set_direction("vertical");
            obj.set_text("1개월");
            obj.set_value("1m");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calRgstDtBgn","rdDuration:40","64","118","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_weekformat("일 월 화 수 목 금 토");
            obj.set_daysize("29 29");
            obj.set_headheight("28");
            obj.set_enable("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTilde","calRgstDtBgn:0","65","25","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calRgstDtEnd","staTilde:0","64","112","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            obj.set_backgroundcolumn("disabled");
            obj.set_readonly("false");
            obj.set_enable("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static10_00","0","0","20",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("w20");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divList","448","183","100%","828",null,null,null,"1024","488",null,this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            obj.set_flexshrink("0");
            obj.set_flexgrow("0");
            obj.set_formscrollbartype("none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staListCount","20","11","465","27",null,null,null,null,null,null,this.divList.form);
            obj.set_taborder("0");
            obj.set_text("총 0건");
            obj.set_cssclass("sta_WF_subResult");
            obj.set_fittocontents("width");
            this.divList.addChild(obj.name, obj);

            obj = new ListView("lvArticles","20","45",null,"680","20",null,null,null,"340",null,this.divList.form);
            obj.set_taborder("1");
            obj.set_binddataset("dsArticle");
            obj.set_background("transparent");
            obj.set_border("0px none");
            obj.set_bandinitstatus("expand");
            obj._setContents("<Formats><Format id=\"default\"><Band id=\"body\" width=\"100%\" height=\"68\" background=\"expr: noticeYn == &apos;Y&apos; ? &apos;#00000007&apos; : &apos;#ffffffff&apos;\" cursor=\"pointer\"><Cell id=\"Cell03\" left=\"16\" top=\"24\" width=\"52\" height=\"20\" text=\"expr:noticeYn == &apos;Y&apos; ? &apos;공지&apos; : itemRowNum\" color=\"black\" border=\"0px none\"/><Cell id=\"Cell11\" left=\"expr: &apos;Cell03:&apos; + (level * 32 - 24)\" top=\"4\" height=\"28\" text=\"bind:artclTitle\" right=\"16\" color=\"black\" border=\"0px none\" font=\"normal 18px/normal &quot;Malgun Gothic&quot;\"/><Cell id=\"Cell26\" left=\"expr: &apos;Cell03:&apos; + (level * 32 - 24)\" top=\"Cell11:4\" width=\"48\" height=\"24\" text=\"작성자\" color=\"#000c5490\" border=\"0px none\"/><Cell id=\"Cell27\" left=\"Cell26:0\" top=\"Cell11:4\" height=\"24\" text=\"bind:rgstNm\" border=\"0px none\" minwidth=\"1\" maxwidth=\"200\" width=\"80\" color=\"#000000\"/><Cell id=\"Cell28\" left=\"Cell27:16\" top=\"Cell11:4\" width=\"48\" height=\"24\" text=\"작성일\" border=\"0px none\" color=\"#000c5490\"/><Cell id=\"Cell29\" left=\"Cell28:0\" top=\"Cell11:4\" width=\"120\" height=\"24\" text=\"bind:rgstDt\" minwidth=\"1\" maxwidth=\"200\" border=\"0px none\" color=\"#000000\" calendardateformat=\"yyyy-MM-dd HH:mm\"/><Cell id=\"Cell00\" left=\"Cell29:16\" top=\"Cell11:4\" width=\"48\" height=\"24\" text=\"조회수\" border=\"0px none\" color=\"#000c5490\"/><Cell id=\"Cell02\" left=\"Cell00:0\" top=\"Cell11:4\" width=\"108\" height=\"24\" text=\"bind:viewCount\" minwidth=\"1\" maxwidth=\"200\" border=\"0px none\" color=\"#000000\" displaytype=\"text\" textAlign=\"left\"/><Cell id=\"Cell04\" top=\"12\" height=\"9\" border=\"expr: level &gt; 1 ? &apos;1px none,1px none,1px dotted #000000,1px dotted #000000&apos; : &apos;0px none&apos;\" width=\"9\" right=\"Cell11:8\" displaytype=\"expr:level &gt; 1 ? &apos;normal&apos; : &apos;none&apos;\" text=\" \"/><Cell id=\"Cell05\" left=\"Cell02:16\" top=\"Cell11:4\" width=\"32\" height=\"24\" text=\"댓글\" border=\"0px none\" color=\"#000c5490\"/><Cell id=\"Cell06\" left=\"Cell05:0\" top=\"36\" width=\"108\" height=\"24\" text=\"bind:cmntCnt\" minwidth=\"1\" maxwidth=\"200\" border=\"0px none\" color=\"#000000\" displaytype=\"text\" textAlign=\"left\"/><Cell id=\"Cell07\" top=\"Cell11:8\" width=\"16\" height=\"16\" background=\"expr: atchFileCnt &gt; 0 ? &apos;url(&quot;theme://images/btn_WF_grdDownload.png&quot;) no-repeat center&apos; : &apos;&apos;\" border=\"0px none\" right=\"16\"/></Band></Format></Formats>");
            this.divList.addChild(obj.name, obj);

            obj = new Static("Static04_00_00","20","0","60","18",null,null,null,null,null,null,this.divList.form);
            obj.set_taborder("2");
            obj.set_text("h 18");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divList.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_00","326","0","60","45",null,null,null,null,null,null,this.divList.form);
            obj.set_taborder("3");
            obj.set_text("h 45");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divList.addChild(obj.name, obj);

            obj = new Static("Static10","0","-1","20","295",null,null,null,null,null,null,this.divList.form);
            obj.set_taborder("4");
            obj.set_text("w20");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divList.addChild(obj.name, obj);

            obj = new Static("Static10_00",null,"0","20","295","0",null,null,null,null,null,this.divList.form);
            obj.set_taborder("5");
            obj.set_text("w20");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divList.addChild(obj.name, obj);

            obj = new Div("divPaging","112","lvArticles:15",null,"30","112.606",null,null,null,null,null,this.divList.form);
            obj.set_taborder("6");
            obj.set_text("divPaging");
            this.divList.addChild(obj.name, obj);

            obj = new Button("btnWrite","472","divPaging:15","80","28",null,null,null,null,null,null,this.divList.form);
            obj.set_text("글쓰기");
            obj.set_cssclass("btn_WF_icoModify");
            obj.set_taborder("7");
            this.divList.addChild(obj.name, obj);

            obj = new Static("sta001","462","btnWrite:0","100","15",null,null,null,null,null,null,this.divList.form);
            obj.set_taborder("8");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divList.addChild(obj.name, obj);

            obj = new Static("Static00","816","1025","120","20",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_flexshrink("0");
            obj.set_flexgrow("0");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.vwTitle.form
            obj = new Layout("default","",0,0,this.vwTitle.form,function(p){});
            this.vwTitle.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divList.form.divPaging
            obj = new Layout("default","",0,0,this.divList.form.divPaging.form,function(p){});
            this.divList.form.divPaging.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divList.form
            obj = new Layout("default","",0,0,this.divList.form,function(p){});
            this.divList.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1920,701,this,function(p){});
            obj.set_type("vertical");
            obj.set_flexcrossaxisalign("center");
            obj.set_spacing("18px 50px 0 ");
            obj.set_verticalgap("10");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.cboSearchType","value","dsSearch","searchType");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.edtSearchKeyword","value","dsSearch","keyword");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.calRgstDtBgn","value","dsSearch","rgstDtBgn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.calRgstDtEnd","value","dsSearch","rgstDtEnd");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("CMS_2020M.xfdl","lib::common.xjs");
        this.addIncludeScript("CMS_2020M.xfdl","lib::paging.xjs");
        this.registerScript("CMS_2020M.xfdl", function() {
        /**
        *  게시글 목록
        *  MenuPath      게시판 - 게시글 목록
        *  FileName      CMS_2020M.xfdl
        *  Creator 	     parksw
        *  CreateDate    2023.04.03
        *  Desction      게시판의 게시글 목록을 보여준다.
        ************** 소스 수정 이력 ***********************************************
        *  date          Modifier    Description
        *******************************************************************************
        *  2023.04.03    parksw 	 최초 생성
        *  2023.04.18    parksw      폼 ID 변경
        *******************************************************************************/

        this.executeIncludeScript("lib::common.xjs"); /*include "lib::common.xjs"*/;
        this.executeIncludeScript("lib::paging.xjs"); /*include "lib::paging.xjs"*/;

        this.totRowCount = 0;

        /***********************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose)
         ***********************************************************************************************/

        /**
         * @description 화면 onload
         */
        this.boardArticleList_onload = function(obj,e)
        {
        	this.gfnFormOnLoad(this);
            this.currentPage = 1;

            var app = nexacro.getApplication();
            var boardId = this.getOwnerFrame().tabArgs.menuId;
            var sysId = app.gdsUserInfo.getColumn(0, "sysId");
            this.dsSearch.setColumn(0, "boardId", boardId);
            this.dsSearch.setColumn(0, "sysId", sysId);

        	var objDivPaging = this.divList.form.divPaging;

        	var objConfig = {
        		nPageCount: 10,
        		nPageRowCount: 10,
        		bPageViewActive: true,
        		objPageSearchFunction: this.fnSearchpaging,
        		objSearchButton: this.divSearch.form.btnSearch
        	}

        	this.fnInitPageSet(objDivPaging, objConfig);
            this.gfnLoadCombo("loadCombo", "dsPeriodCombo=PMS:CMS:BOARD_SEARCH_PERIOD dsSearchTypeCombo=PMS:CMS:BOARD_SEARCH_TYPE", "fnComboCallback");
        };


        /************************************************************************************************
         * TRANSACTION 서비스 호출 처리
         ************************************************************************************************/

        this.fnSearchpaging = function (page)
        {
            var rgstDtBgn = this.dsSearch.getColumn(0, "rgstDtBgn");
            var rgstDtEnd = this.dsSearch.getColumn(0, "rgstDtEnd");

            if (!this.fnValidateDateRange(rgstDtBgn, rgstDtEnd)) {
                return;
            }

        	this.gfnTransaction("getArticleList", "cms/getBoardArticleList.do", "dsSearch", "dsArticle", "pageNo=" + page, "fnCallback");
        };


        /************************************************************************************************
         * CALLBACK 콜백 처리부분(Transaction, Popup)
         ************************************************************************************************/

        this.fnComboCallback = function (svcId, errorCode, errorMsg)
        {
            if (svcId == "loadCombo") {
                var app = nexacro.getApplication();
                var boardId = this.getOwnerFrame().tabArgs.menuId;
                var sysId = app.gdsUserInfo.getColumn(0, "sysId");

                this.divSearch.form.rdDuration.set_value("1MON");
                this.fnUpdateSearchDateRange("1MON");
                this.gfnTransaction("getBoardInfo", "cms/getBoardInfo.do", "", "dsBoard dsBoardRoles", "boardId=" + boardId + " sysId=" + sysId, "fnCallback");
                this.fnSearchpaging(1);
            }
        };

        this.fnCallback = function (svcId, errorCode, errorMsg)
        {
            switch (svcId) {
                case "getArticleList":
                    this.gfnAllRowCount(this.totRowCount, this.divList.form.staListCount);
                    this.fnAdjustHeight(this.dsArticle.rowcount);
                    this.divList.form.staListCount.set_text(this.fnFormatRowCount(this.totRowCount));
                    this.divList.form.divPaging.nTotalRowCount = this.totRowCount;
                    this.fnCallAfter(this.divList.form.divPaging);
                    break;
                case "getBoardInfo":
                    if (this.dsBoardRoles.findRow("boardFuncId", "WRITE") < 0) {
                        this.divList.form.btnWrite.set_visible(false);
                        this.fnAdjustHeight(this.dsArticle.rowcount);
                    }
                    break;
            }
        };

        this.fnPopupCallback = function (popupId, args)
        {
            var result = this.gfnGetPopupRtn();
            switch (popupId) {
                case "boardDetailPopup":
                    if (result)
                        this.fnSearchpaging(this.currentPage);
                    break;
                case "boardRegistPopup":
                    if (result)
                        this.fnSearchpaging(this.currentPage);
                    break;
                default:
                    break;
            }
        };

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/

        this.divSearch_btnSearch_onclick = function(obj,e)
        {
            this.fnSearchpaging(1);
        };

        this.divSearch_rdDuration_onitemchanged = function(obj,e)
        {
            this.fnUpdateSearchDateRange(e.postvalue);
        };

        this.divList_btnWrite_onclick = function(obj,e)
        {
            var args = {
                boardId: this.getOwnerFrame().tabArgs.menuId,
                boardNm: this.getOwnerFrame().tabArgs.title,
                sysId: nexacro.getApplication().gdsUserInfo.getColumn(0, "sysId")
            };
            this.gfnOpenPopup("boardRegistPopup", "sys::cms/CMS_2020P_02.xfdl", args, "fnPopupCallback", "");
        };

        this.divList_lvArticles_onbandclick = function(obj,e)
        {
        	this.fnOpenArticlePopup(e.row);
        };

        this.divList_lvArticles_oncellclick = function(obj,e)
        {
        	this.fnOpenArticlePopup(e.row);
        };

        this.Common_onkeyup = function(obj,e)
        {
        	if (e.keycode == 13) {
                this.fnSearchpaging(1);
            }
        };

        this.divSearch_calRgstDtBgn_canchange = function(obj,e)
        {
            var to = this.divSearch.form.calRgstDtEnd.value;
            if (!this.fnValidateDateRange(e.postvalue, to)) {
                return false;
            }
            return true;
        };

        this.divSearch_calRgstDtEnd_canchange = function(obj,e)
        {
            var from = this.divSearch.form.calRgstDtBgn.value;
            if (!this.fnValidateDateRange(from, e.postvalue)) {
                return false;
            }
            return true;
        };

        /************************************************************************************************
        * 사용자 FUNCTION 영역
        ************************************************************************************************/

        this.fnAdjustHeight = function (count)
        {
            var listHeight = count * 68;
            var divHeight = 148 + listHeight + count;

            if (this.dsBoardRoles.findRow("boardFuncId", "WRITE") < 0) {
                divHeight -= 43;
            }

            this.divList.set_height(divHeight);
            this.divList.form.lvArticles.set_height(listHeight);
            this.divList.form.divPaging.set_top("lvArticles:15");
            this.divList.form.btnWrite.set_top("divPaging:15");
            this.divList.form.sta001.set_top("btnWrite:0");
            this.divList.form.resetScroll();
            this.resetScroll();
        };

        this.fnFormatRowCount = function (count)
        {
            if (count == null) {
                return "총 0건";
            } else {
                return "총 " + count + "건";
            }
        };

        this.fnOpenArticlePopup = function (index)
        {
            var args = {
                sysId: this.dsArticle.getColumn(index, "sysId"),
                boardId: this.dsArticle.getColumn(index, "boardId"),
                articleId: this.dsArticle.getColumn(index, "artclId"),
                boardNm: this.dsBoard.getColumn(0, "boardNm")
            }

            this.gfnOpenPopup("boardDetailPopup", "sys::cms/CMS_2020P_01.xfdl", args, "fnPopupCallback", "");
        };

        this.fnUpdateSearchDateRange = function (type)
        {
            var enable = type == "CUSTOM";
            var today = new Date();
            today.setHours(0);
            today.setMinutes(0);
            today.setSeconds(0);
            today.setMilliseconds(0);

        	if (type == "1MON") {
                var begin = new Date(today.getTime());
                begin.setMonth(begin.getMonth() - 1);
                this.dsSearch.setColumn(0, "rgstDtBgn", begin);
                this.dsSearch.setColumn(0, "rgstDtEnd", today);
            } else if (type == "3MON") {
                var begin = new Date(today.getTime());
                begin.setMonth(begin.getMonth() - 3);
                this.dsSearch.setColumn(0, "rgstDtBgn", begin);
                this.dsSearch.setColumn(0, "rgstDtEnd", today);
            } else if (type == "ALL") {
                this.dsSearch.setColumn(0, "rgstDtBgn", "");
                this.dsSearch.setColumn(0, "rgstDtEnd", "");
            }

            this.divSearch.form.calRgstDtBgn.set_enable(enable);
            this.divSearch.form.calRgstDtEnd.set_enable(enable);
        }

        /**
         * @summary 날짜 범위가 올바른지 확인한다.
         * @param {string | Date | nexacro.Date} from 날짜 범위의 시작
         * @param {string | Date | nexacro.Date} to 날짜 범위의 끝
         * @param {boolean} [exclusive=false] 범위의 끝이 범위에 포함되는지 여부
         * @returns {boolean} 범위의 끝이 시작보다 빠르면 false를, 아니면 true를 반환한다.
         */
        this.fnValidateDateRange = function (from, to, exclusive)
        {
            if (typeof from !== "string") {
                from = this.fnToJsDate(from);
            }

            if (typeof to !== "string") {
                to = this.fnToJsDate(to);
            }

            if (Eco.isEmpty(from) || Eco.isEmpty(to)) {
                return true;
            }

            var result = exclusive ? Eco.date.getDiffDay(from, to) > 0 : Eco.date.getDiffDay(from, to) >= 0;
            if (!result) {
                this.gfnAlert("CM_MSG_DATE_CHK");
            }

            return result;
        };

        /**
         * @summary {@link nexacro.Date}를 자바스크립트 {@link Date}로 변환한다.
         * @param {nexacro.Date} nexacroDate 자바스크립트 Date로 변환할 nexacro.Date 객체
         * @returns {Date} 주어진 nexacro.Date 객체가 나타내는 일시와 동일한 자바스크립트 Date 객체
         */
        this.fnToJsDate = function (nexacroDate) {
            if (Eco.isEmpty(nexacroDate)) {
                return (void 0);
            } else if (Object.prototype.toString(nexacroDate) === "[object Date]") {
                return nexacroDate;
            } else {
                return new Date(nexacroDate.getTime());
            }
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.boardArticleList_onload,this);
            this.divSearch.form.Static00.addEventHandler("onclick",this.div_Search_Static00_onclick,this);
            this.divSearch.form.btnSearch.addEventHandler("onclick",this.divSearch_btnSearch_onclick,this);
            this.divSearch.form.staCond.addEventHandler("onclick",this.div_Search_Static01_onclick,this);
            this.divSearch.form.edtSearchKeyword.addEventHandler("onkeyup",this.Common_onkeyup,this);
            this.divSearch.form.staSearchDur.addEventHandler("onclick",this.div_Search_Static01_onclick,this);
            this.divSearch.form.rdDuration.addEventHandler("onitemchanged",this.divSearch_rdDuration_onitemchanged,this);
            this.divSearch.form.calRgstDtBgn.addEventHandler("onkeyup",this.Common_onkeyup,this);
            this.divSearch.form.calRgstDtBgn.addEventHandler("canchange",this.divSearch_calRgstDtBgn_canchange,this);
            this.divSearch.form.calRgstDtEnd.addEventHandler("onkeyup",this.Common_onkeyup,this);
            this.divSearch.form.calRgstDtEnd.addEventHandler("canchange",this.divSearch_calRgstDtEnd_canchange,this);
            this.divList.form.lvArticles.addEventHandler("onbandclick",this.divList_lvArticles_onbandclick,this);
            this.divList.form.lvArticles.addEventHandler("oncellclick",this.divList_lvArticles_oncellclick,this);
            this.divList.form.Static04_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.divList.form.Static04_00_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.divList.form.btnWrite.addEventHandler("onclick",this.divList_btnWrite_onclick,this);
            this.divList.form.sta001.addEventHandler("onclick",this.Static31_onclick,this);
        };
        this.loadIncludeScript("CMS_2020M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
