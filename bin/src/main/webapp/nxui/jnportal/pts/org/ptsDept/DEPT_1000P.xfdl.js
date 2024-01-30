(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DEPT_1000P");
            this.set_titletext("상위 부서코드");
            if (Form == this.constructor)
            {
                this._setFormPosition(900,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"rowCheck\" type=\"STRING\" size=\"256\"/><Column id=\"rowStatus\" type=\"STRING\" size=\"256\"/><Column id=\"deptCd\" type=\"STRING\" size=\"256\"/><Column id=\"deptNm\" type=\"STRING\" size=\"256\"/><Column id=\"ordSn\" type=\"STRING\" size=\"256\"/><Column id=\"upDeptCd\" type=\"STRING\" size=\"256\"/><Column id=\"upDeptNm\" type=\"STRING\" size=\"256\"/><Column id=\"level\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj.set_updatecontrol("true");
            obj._setContents("<ColumnInfo><Column id=\"deptCd\" type=\"STRING\" size=\"256\"/><Column id=\"deptNm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divPopup","0","0","900","720",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Static("staPopupTitle","0","0",null,"50","0",null,null,null,null,null,this.divPopup.form);
            obj.set_taborder("0");
            obj.set_text("상위 부서코드");
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

            obj = new Div("divSearch","30","70",null,"116","30",null,null,null,null,null,this.divPopup.form);
            obj.set_taborder("4");
            obj.set_cssclass("div_WF_popup");
            obj.set_text("");
            this.divPopup.addChild(obj.name, obj);

            obj = new Static("sta001","20","45",null,"56","20",null,null,null,null,null,this.divPopup.form.divSearch.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_bg");
            this.divPopup.form.divSearch.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_00","110","0","60","45",null,null,null,null,null,null,this.divPopup.form.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("h 45");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divPopup.form.divSearch.addChild(obj.name, obj);

            obj = new Static("staSubTitle","19","0","169","45",null,null,null,null,null,null,this.divPopup.form.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_subTitle01");
            this.divPopup.form.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"14","63","26","20",null,null,null,null,null,this.divPopup.form.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_grdSearch_W");
            this.divPopup.form.divSearch.addChild(obj.name, obj);

            obj = new Static("staDeptNm","40","60","100","26",null,null,null,null,null,null,this.divPopup.form.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("부서명");
            obj.set_cssclass("sta_WF_condition01");
            this.divPopup.form.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtDeptNm","150","60","550","26",null,null,null,null,null,null,this.divPopup.form.divSearch.form);
            obj.set_taborder("5");
            obj.set_maxlength("100");
            this.divPopup.form.divSearch.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_01_00","0",null,null,"23","0","0",null,null,null,null,this.divPopup.form);
            obj.set_taborder("5");
            obj.set_text("h 23");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divPopup.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_01_00_00","0",null,null,"25","0","51",null,null,null,null,this.divPopup.form);
            obj.set_taborder("6");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divPopup.addChild(obj.name, obj);

            obj = new Button("btnPopupClose",null,null,"65","28","383","23",null,null,null,null,this.divPopup.form);
            obj.set_text("닫기");
            obj.set_cssclass("");
            obj.set_visible("true");
            obj.set_taborder("7");
            this.divPopup.addChild(obj.name, obj);

            obj = new Div("divResult","30","divSearch:10","840",null,null,"76",null,null,null,null,this.divPopup.form);
            obj.set_taborder("8");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_popup");
            this.divPopup.addChild(obj.name, obj);

            obj = new Grid("grdDept","20","45",null,null,"20","15",null,null,null,null,this.divPopup.form.divResult.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsList");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_autoupdatetype("itemselect");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("expand,all");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"204\"/><Column size=\"173\"/></Columns><Rows><Row size=\"34\" band=\"head\"/><Row size=\"34\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" edittype=\"none\" text=\"순번\"/><Cell col=\"1\" text=\"선택\"/><Cell col=\"2\" text=\"부서명\"/><Cell col=\"3\" text=\"부서코드\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"expr:currow+1\" expr=\"currow+1\"/><Cell col=\"1\" edittype=\"checkbox\" text=\"bind:rowCheck\" displaytype=\"checkboxcontrol\"/><Cell col=\"2\" text=\"bind:deptNm\" controlautosizingtype=\"both\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treestartlevel=\"1\" treelevel=\"bind:level\" treecheck=\"bind:rowCheck\"/><Cell col=\"3\" text=\"bind:deptCd\"/></Band></Format></Formats>");
            this.divPopup.form.divResult.addChild(obj.name, obj);

            obj = new Static("staResultTitle","20","0","81","45",null,null,null,null,null,null,this.divPopup.form.divResult.form);
            obj.set_taborder("2");
            obj.set_text("검색결과");
            obj.set_cssclass("sta_WF_subTitle01");
            this.divPopup.form.divResult.addChild(obj.name, obj);

            obj = new Static("staGridRowCnt","staResultTitle:10","0","149","45",null,null,null,null,null,null,this.divPopup.form.divResult.form);
            obj.set_taborder("1");
            obj.set_text("(총 0건)");
            obj.set_cssclass("sta_WF_subResult");
            this.divPopup.form.divResult.addChild(obj.name, obj);

            obj = new Button("btnAdd","384",null,"65","28",null,"23",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_icoAdd");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divPopup.form.divSearch.form
            obj = new Layout("default","",1032,72,this.divPopup.form.divSearch.form,function(p){});
            this.divPopup.form.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divPopup.form.divResult.form
            obj = new Layout("default","",0,0,this.divPopup.form.divResult.form,function(p){});
            this.divPopup.form.divResult.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divPopup.form
            obj = new Layout("default","",0,0,this.divPopup.form,function(p){});
            this.divPopup.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            obj.set_description("");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divPopup.form.divSearch.form.edtDeptNm","value","dsSearch","deptNm");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("DEPT_1000P.xfdl","lib::common.xjs");
        this.registerScript("DEPT_1000P.xfdl", function() {
        /**
         *  Popup Template
         *  MenuPath      조직정보 - 부서관리 - 상위부서코드
         *  FileName      DEPT_1000P.xfdl
         *  Creator 	  woohj
         *  CreateDate    2023.11.21
         *  Desction      상위부서코드 팝업
         ************** 소스 수정 이력 ***********************************************
         *  date          Modifier    Description
         *******************************************************************************
         *  2023.11.20    woohj 	 최초 생성
         *******************************************************************************/

        this.executeIncludeScript("lib::common.xjs"); /*include "lib::common.xjs"*/;

        /***********************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose)
         ***********************************************************************************************/

        /**
         * description 화면 onload
         */
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnLoad(this);
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
        	var strSvcId    = "getUpDeptPopupList";
        	var strSvcUrl   = "org/deptManage/getUpDeptPopupList.do";
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
         * description Transaction CallBack 함수
         */
        this.fnCallback = function (sSvcId, nErrorCode, sErrorMsg)
        {
        	switch (sSvcId) {
        		case "getUpDeptPopupList":
        			//총 건수 계산
        			this.gfnRowCount(this.dsList, this.divPopup.form.divResult.form.staGridRowCnt);
                    break;
        		default:
                    break;
        	}
        };

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        /**
         * description 조회 버튼
         */
         this.btnSearch = function(obj,e)
        {
        	this.fnSearch();
        };


        /**
         * description 추가버튼
         */
        this.btnAdd_onclick = function(obj,e)
        {

        	if (this.parent.mode == "single") {
        		var indices = this.gfnGetCheckedRows(this.divPopup.form.divResult.form.grdDept, "rowCheck");
        		var sPopUp = this;
        		var result = {
        			sDept: indices.map(function (e) {
        				return {
        					deptCd: sPopUp.dsList.getColumn(e, "deptCd"),
        					deptNm: sPopUp.dsList.getColumn(e, "deptNm")
        									//팝업창에서 선택한 것을 결과 담음
        				};
        			})
        		};
            }
            this.gfnPopupClose(result);

        };

        /**
         * description 엔터키 검색
         */
        this.onkeyup = function(obj,e)
        {
        	if (e.keycode == 13) {
        		this.btnSearch();
        	}
        };

        /**
         * description 닫기버튼
        */
        this.divPopup_btnPopupClose_onclick = function(obj,e)
        {
        	this.close();
        };

        /**
         * description 그리드 한개 선택
        */
        this.divPopup_divResult_grdRoleUser_oncellclick = function(obj,e)
        {
        	if (this.parent.mode == "single") {
                var ds = this.dsList;
                var r = e.row;
                this.dsList.set_enableevent(false);

                for (var i = 0; i < ds.rowcount; i++) {
                    if (i != r) {
                        ds.setColumn(i, "rowCheck", 0);
                    } else {
                        ds.setColumn(i, "rowCheck", 1);
                    }
                }

                this.dsList.set_enableevent(true);
            }
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divPopup.form.Static04_00_00_01.addEventHandler("onclick",this.Static31_onclick,this);
            this.divPopup.form.divSearch.form.Static04_00_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.divPopup.form.divSearch.form.staSubTitle.addEventHandler("onclick",this.Static09_onclick,this);
            this.divPopup.form.divSearch.form.btnSearch.addEventHandler("onclick",this.btnSearch,this);
            this.divPopup.form.divSearch.form.edtDeptNm.addEventHandler("onkeyup",this.onkeyup,this);
            this.divPopup.form.Static04_00_00_01_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.divPopup.form.Static04_00_00_01_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.divPopup.form.btnPopupClose.addEventHandler("onclick",this.divPopup_btnPopupClose_onclick,this);
            this.divPopup.form.divResult.form.grdDept.addEventHandler("oncellclick",this.divPopup_divResult_grdRoleUser_oncellclick,this);
            this.divPopup.form.divResult.form.staResultTitle.addEventHandler("onclick",this.Static09_onclick,this);
            this.btnAdd.addEventHandler("onclick",this.btnAdd_onclick,this);
        };
        this.loadIncludeScript("DEPT_1000P.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
