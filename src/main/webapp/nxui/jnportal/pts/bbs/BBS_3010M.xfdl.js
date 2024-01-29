(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("BBS_3010M");
            this.set_titletext("게시물 목록");
            this.set_cssclass("frm_WF_comp");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj.set_updatecontrol("true");
            obj._setContents("<ColumnInfo><Column id=\"searchType\" type=\"STRING\" size=\"256\"/><Column id=\"searchKeyword\" type=\"STRING\" size=\"256\"/><Column id=\"nttNo\" type=\"STRING\" size=\"256\"/><Column id=\"bbsId\" type=\"STRING\" size=\"256\"/><Column id=\"strYmd\" type=\"STRING\" size=\"256\"/><Column id=\"endYmd\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearchCombo", this);
            obj.set_updatecontrol("true");
            obj._setContents("<ColumnInfo><Column id=\"value\" type=\"STRING\" size=\"256\"/><Column id=\"text\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj.set_updatecontrol("true");
            obj._setContents("<ColumnInfo><Column id=\"nttNo\" type=\"STRING\" size=\"256\"/><Column id=\"bbsId\" type=\"STRING\" size=\"256\"/><Column id=\"nttTtl\" type=\"STRING\" size=\"256\"/><Column id=\"nttCn\" type=\"STRING\" size=\"256\"/><Column id=\"answrYn\" type=\"STRING\" size=\"256\"/><Column id=\"upNttNo\" type=\"STRING\" size=\"256\"/><Column id=\"cmntYn\" type=\"STRING\" size=\"256\"/><Column id=\"sortOrdr\" type=\"STRING\" size=\"256\"/><Column id=\"rdcnt\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"ntcBgnYmd\" type=\"STRING\" size=\"256\"/><Column id=\"ntcEndYmd\" type=\"STRING\" size=\"256\"/><Column id=\"ntcrId\" type=\"STRING\" size=\"256\"/><Column id=\"ntcrNm\" type=\"STRING\" size=\"256\"/><Column id=\"passwd\" type=\"STRING\" size=\"256\"/><Column id=\"atchFileId\" type=\"STRING\" size=\"256\"/><Column id=\"noticeYn\" type=\"STRING\" size=\"256\"/><Column id=\"sjBoldYn\" type=\"STRING\" size=\"256\"/><Column id=\"scrtYn\" type=\"STRING\" size=\"256\"/><Column id=\"rgstDt\" type=\"STRING\" size=\"256\"/><Column id=\"rgstrId\" type=\"STRING\" size=\"256\"/><Column id=\"updtDt\" type=\"STRING\" size=\"256\"/><Column id=\"updtrId\" type=\"STRING\" size=\"256\"/><Column id=\"cmntCnt\" type=\"STRING\" size=\"256\"/><Column id=\"cmntNo\" type=\"STRING\" size=\"256\"/><Column id=\"wrtrId\" type=\"STRING\" size=\"256\"/><Column id=\"rcmdCnt\" type=\"STRING\" size=\"256\"/><Column id=\"dcmdCnt\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCalDate", this);
            obj._setContents("<ColumnInfo><Column id=\"strYmd\" type=\"STRING\" size=\"256\"/><Column id=\"endYmd\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btnSearch",null,"20","65","28","50",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle","50","0","500","58",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("게시물 목록");
            obj.set_cssclass("sta_WF_compTitle01");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","50","58",null,"56","50",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staBg","0","0",null,"56","0",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_bg");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static15_01_00_00","20","55","50",null,null,"40",null,null,null,null,this.divSearch.form);
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

            obj = new Static("staCls","20","15","100","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("검색");
            obj.set_cssclass("sta_WF_condition01");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearch","staCls:10","15","140","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_innerdataset("dsSearchCombo");
            obj.set_codecolumn("value");
            obj.set_datacolumn("text");
            obj.set_value("");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSearch","cboSearch:10","15","52%","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCls00","75%","15","100","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("작성일");
            obj.set_cssclass("sta_WF_condition01");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calStrYmd","staCls00:10","15","118","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_weekformat("일 월 화 수 목 금 토");
            obj.set_daysize("29 29");
            obj.set_headheight("28");
            obj.set_enable("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTilde","calStrYmd:0","16","25","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calEndYmd","staTilde:0","15","112","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            obj.set_backgroundcolumn("disabled");
            obj.set_readonly("false");
            obj.set_enable("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divResult","50","divSearch:15",null,null,"50","37",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList","0","45",null,null,"0","0",null,null,null,null,this.divResult.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsList");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_autoupdatetype("itemselect");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\" band=\"left\"/><Column size=\"500\"/><Column size=\"48\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"34\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" edittype=\"none\" text=\"순번\"/><Cell col=\"1\" text=\"제목\"/><Cell col=\"2\" text=\"비밀글\"/><Cell col=\"3\" text=\"작성자\"/><Cell col=\"4\" text=\"작성일\"/><Cell col=\"5\" text=\"추천\"/><Cell col=\"6\" text=\"비추천\"/><Cell col=\"7\" text=\"조회수\"/><Cell col=\"8\" text=\"댓글수\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:nttNo\"/><Cell col=\"1\" text=\"bind:nttTtl\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:scrtYn\"/><Cell col=\"3\" text=\"bind:ntcrId\"/><Cell col=\"4\" textAlign=\"center\" editmaxlength=\"3000\" displaytype=\"normal\" text=\"bind:rgstDt\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"5\" edittype=\"none\" displaytype=\"normal\" combodataset=\"dsUseYn\" combocodecol=\"value\" combodatacol=\"text\" calendardateformat=\"yyyy-MM-dd\" text=\"bind:rcmdCnt\"/><Cell col=\"6\" text=\"bind:dcmdCnt\"/><Cell col=\"7\" text=\"bind:rdcnt\"/><Cell col=\"8\" text=\"bind:cmntCnt\"/></Band></Format></Formats>");
            this.divResult.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_00_00","90","0","60","45",null,null,null,null,null,null,this.divResult.form);
            obj.set_taborder("1");
            obj.set_text("h 45");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divResult.addChild(obj.name, obj);

            obj = new Static("staGridRowCnt","0","0","150","45",null,null,null,null,null,null,this.divResult.form);
            obj.set_taborder("2");
            obj.set_text("총 0건");
            obj.set_cssclass("sta_WF_subTxt");
            this.divResult.addChild(obj.name, obj);

            obj = new Button("btnRegistration",null,"14","65","28","0",null,null,null,null,null,this.divResult.form);
            obj.set_text("글쓰기");
            obj.set_visible("true");
            obj.set_taborder("3");
            this.divResult.addChild(obj.name, obj);
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
                p.grdList.set_taborder("0");
                p.grdList.set_binddataset("dsList");
                p.grdList.set_autofittype("col");
                p.grdList.set_autoenter("select");
                p.grdList.set_autoupdatetype("itemselect");
                p.grdList.move("0","45",null,null,"0","0");

                p.Static04_00_00_00_00.set_taborder("1");
                p.Static04_00_00_00_00.set_text("h 45");
                p.Static04_00_00_00_00.set_visible("false");
                p.Static04_00_00_00_00.set_background("aqua");
                p.Static04_00_00_00_00.set_color("blue");
                p.Static04_00_00_00_00.set_textAlign("center");
                p.Static04_00_00_00_00.set_verticalAlign("middle");
                p.Static04_00_00_00_00.set_opacity("0.7");
                p.Static04_00_00_00_00.set_font("normal 12px/normal \"Arial\"");
                p.Static04_00_00_00_00.move("90","0","60","45",null,null);

                p.staGridRowCnt.set_taborder("2");
                p.staGridRowCnt.set_text("총 0건");
                p.staGridRowCnt.set_cssclass("sta_WF_subTxt");
                p.staGridRowCnt.move("0","0","150","45",null,null);

                p.btnRegistration.set_text("글쓰기");
                p.btnRegistration.set_visible("true");
                p.btnRegistration.set_taborder("3");
                p.btnRegistration.move(null,"14","65","28","0",null);
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
            obj = new Layout("default","Desktop_screen",1920,720,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("게시물 목록");
                p.set_cssclass("frm_WF_comp");

                p.btnSearch.set_taborder("0");
                p.btnSearch.set_text("조회");
                p.btnSearch.move(null,"20","65","28","50",null);

                p.staTitle.set_taborder("1");
                p.staTitle.set_text("게시물 목록");
                p.staTitle.set_cssclass("sta_WF_compTitle01");
                p.staTitle.move("50","0","500","58",null,null);

                p.divSearch.set_taborder("2");
                p.divSearch.set_text("");
                p.divSearch.move("50","58",null,"56","50",null);

                p.divResult.set_taborder("3");
                p.divResult.set_text("");
                p.divResult.set_cssclass("div_WF_Area");
                p.divResult.move("50","divSearch:15",null,null,"50","37");
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
            obj = new BindItem("item1","divSearch.form.cboSearch","value","dsSearch","searchType");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.edtSearch","value","dsSearch","searchKeyword");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.calEndYmd","value","dsSearch","endYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.calStrYmd","value","dsSearch","strYmd");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("BBS_3010M.xfdl","lib::common.xjs");
        this.registerScript("BBS_3010M.xfdl", function() {
        /**
        *  게시물 목록
        *  MenuPath      소통광장 - 게시물 목록
        *  FileName      BBS_3010M.xfdl
        *  Creator 	     woohj
        *  CreateDate    2023.12.05
        *  Desction      게시물 목록
        ************** 소스 수정 이력 ***********************************************
        *  date          Modifier    Description
        *******************************************************************************
        *  2023.12.05    woohj  	 최초 생성
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

        	this.dsSearch.setColumn(0,"strYmd",(year + month + day));
        	this.dsSearch.setColumn(0,"endYmd",(new Date()).getFullYear() + "1231");

        	this.fnLoadCombo();

        };

        /************************************************************************************************
        * TRANSACTION 서비스 호출 처리
        ************************************************************************************************/
        /**
         * description 콤보 loadCombo
        */
        this.fnLoadCombo = function ()
        {
        	this.gfnLoadCombo("loadCombo", "dsSearchCombo=PTS:SEARCH_TY:A", "fnComboCallback");
        };

        /**
         * description 게시물 목록
        */
        this.fnSearch = function ()
        {
        	var strSvcId    = "getNoticeBoardList";
        	var strSvcUrl   = "bbs/noticeBoard/getNoticeBoardList.do";
        	var inData      = "dsSearch";
        	var outData     = "dsList";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        /************************************************************************************************
         * CALLBACK 콜백 처리부분(Transaction, Popup)
        ************************************************************************************************/
        /**
         * description 콤보 ComboCallback
        */
        this.fnComboCallback = function (svcId, errorCode, errorMsg)
        {
            if (svcId == "loadCombo") {
                this.fnSearch();
            }
        };

        /**
         * description Transaction Callback 함수
        */
        this.fnCallback = function (svcId, errorCode, errorMsg)
        {
            switch (svcId) {
                case "getNoticeBoardList":
        			//총 건수 계산
        			this.gfnRowCount(this.dsList, this.divResult.form.staGridRowCnt);
                    break;
        		default:
        		break;
            }
        };

        this.fnPopupCallback = function (popupId, args)
        {
            const result = this.gfnGetPopupRtn();
            switch (popupId) {
                case "checkPassword":
                    if (result && result.result === "success") {
        				// 비밀번호가 맞으면. 해당페이지로
        				var param = {
        						nttNo: this.dsList.getColumn(0, "nttNo"),
        						bbsId:  this.dsList.getColumn(0, "bbsId")
        					}
        				nexacro.getApplication().openNewTab("BBS_3030M", "게시물 상세", "pts::bbs/BBS_3030M.xfdl", param , "소통광장 > 게시물 > 게시물 상세", "");
                    } else {
        				alert("비밀번호가 다릅니다.")
        			}
                    break;
                default:
                    break;
            };
        };

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/

        /**
         * description 조회버튼 클릭
        */
        this.btnSearch_onclick = function(obj,e)
        {
            this.fnSearch();
        };

        /**
         * description 엔터키 이벤트
        */
        this.onkeyup = function(obj,e)
        {
        	if(e.keycode==13){
        		this.btnSearch_onclick();
        	}
        };

        /**
         * description 검색(제목/내용/ID) 콤보박스 변경
        */
        this.divSearch_cboSearch_onitemchanged = function(obj,e)
        {
        	this.btnSearch_onclick();
        };


        /**
         * description 그리드 더블클릭 - 상세페이지 이동
        */
        this.divResult_grdList_oncelldblclick = function(obj,e)
        {
        	var scrtYn = this.dsList.getColumn(e.row, "scrtYn")

        	if(scrtYn === "N") {
        		var param = {
        				nttNo: this.dsList.getColumn(e.row, "nttNo"),
        				bbsId:  this.dsList.getColumn(e.row, "bbsId")
        			}
        		nexacro.getApplication().openNewTab("BBS_3030M", "게시물 상세", "pts::bbs/BBS_3030M.xfdl", param , "소통광장 > 게시물 > 게시물 상세", "");
        	} else if (scrtYn === "Y") {
        		this.fnCheckPassword();
        	}
        };

        /**
         * description 신규 등록 - 상세페이지 이동
        */
        this.divResult_btnRegistration_onclick = function(obj,e)
        {
        	var param = {
        			bbsId:  this.dsList.getColumn(e.row, "bbsId")
        		}

        	nexacro.getApplication().openNewTab("BBS_3020M", "게시물 글쓰기", "pts::bbs/BBS_3020M.xfdl", param , "소통광장 > 게시물 > 게시물 등록", "");
        };


        /************************************************************************************************
        * 사용자 FUNCTION 영역
        ************************************************************************************************/


        this.fnCheckPassword = function ()
        {
            const args = {
            };

        	this.gfnOpenPopup("checkPassword", "pts::bbs/BBS_3020P.xfdl", args, "fnPopupCallback");
        };

        this.fnScrtBBS = function ()
        {
        	var param = {
        			nttNo: this.dsList.getColumn(e.row, "nttNo"),
        			bbsId:  this.dsList.getColumn(e.row, "bbsId")
        		}
        		// 확인중
        	nexacro.getApplication().openNewTab("BBS_3030M", "게시물 상세", "pts::bbs/BBS_3030M.xfdl", param , "소통광장 > 게시물 > 게시물 상세", "");
        };







        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
            this.staTitle.addEventHandler("onclick",this.staTitle_onclick,this);
            this.divSearch.form.staBg.addEventHandler("onclick",this.div_Search_Static00_onclick,this);
            this.divSearch.form.Static15_01_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.divSearch.form.staCls.addEventHandler("onclick",this.row1_Div00_Static01_onclick,this);
            this.divSearch.form.cboSearch.addEventHandler("onkeyup",this.onkeyup,this);
            this.divSearch.form.cboSearch.addEventHandler("onitemchanged",this.divSearch_cboSearch_onitemchanged,this);
            this.divSearch.form.edtSearch.addEventHandler("onkeyup",this.onkeyup,this);
            this.divSearch.form.staCls00.addEventHandler("onclick",this.row1_Div00_Static01_onclick,this);
            this.divSearch.form.calStrYmd.addEventHandler("onkeyup",this.onkeyup,this);
            this.divSearch.form.calEndYmd.addEventHandler("onkeyup",this.onkeyup,this);
            this.divResult.form.grdList.addEventHandler("oncelldblclick",this.divResult_grdList_oncelldblclick,this);
            this.divResult.form.Static04_00_00_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.divResult.form.btnRegistration.addEventHandler("onclick",this.divResult_btnRegistration_onclick,this);
        };
        this.loadIncludeScript("BBS_3010M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
