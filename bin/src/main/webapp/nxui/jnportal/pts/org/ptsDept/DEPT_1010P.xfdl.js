(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DEPT_1010P");
            this.set_titletext("사용자 조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(900,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsRoleUser", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"rowCheck\" type=\"STRING\" size=\"256\"/><Column id=\"rowStatus\" type=\"STRING\" size=\"256\"/><Column id=\"rgstId\" type=\"STRING\" size=\"256\"/><Column id=\"rgstDt\" type=\"STRING\" size=\"256\"/><Column id=\"rgstIp\" type=\"STRING\" size=\"256\"/><Column id=\"rgstNm\" type=\"STRING\" size=\"256\"/><Column id=\"updtId\" type=\"STRING\" size=\"256\"/><Column id=\"updtIp\" type=\"STRING\" size=\"256\"/><Column id=\"updtDt\" type=\"STRING\" size=\"256\"/><Column id=\"updtNm\" type=\"STRING\" size=\"256\"/><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"memberId\" type=\"STRING\" size=\"256\"/><Column id=\"userNm\" type=\"STRING\" size=\"256\"/><Column id=\"deptCode\" type=\"STRING\" size=\"256\"/><Column id=\"deptNm\" type=\"STRING\" size=\"256\"/><Column id=\"jobPosition\" type=\"STRING\" size=\"256\"/><Column id=\"updtReason\" type=\"STRING\" size=\"256\"/><Column id=\"roleNm\" type=\"STRING\" size=\"256\"/><Column id=\"telNo\" type=\"STRING\" size=\"256\"/><Column id=\"phoneNo\" type=\"STRING\" size=\"256\"/><Column id=\"emailAddr\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"rowCheck\" type=\"STRING\" size=\"256\"/><Column id=\"rowStatus\" type=\"STRING\" size=\"256\"/><Column id=\"rgstId\" type=\"STRING\" size=\"256\"/><Column id=\"rgstDt\" type=\"STRING\" size=\"256\"/><Column id=\"rgstIp\" type=\"STRING\" size=\"256\"/><Column id=\"rgstNm\" type=\"STRING\" size=\"256\"/><Column id=\"updtId\" type=\"STRING\" size=\"256\"/><Column id=\"updtIp\" type=\"STRING\" size=\"256\"/><Column id=\"updtDt\" type=\"STRING\" size=\"256\"/><Column id=\"updtNm\" type=\"STRING\" size=\"256\"/><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"memberId\" type=\"STRING\" size=\"256\"/><Column id=\"userNm\" type=\"STRING\" size=\"256\"/><Column id=\"deptCode\" type=\"STRING\" size=\"256\"/><Column id=\"deptNm\" type=\"STRING\" size=\"256\"/><Column id=\"jobPosition\" type=\"STRING\" size=\"256\"/><Column id=\"updtReason\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj.set_updatecontrol("true");
            obj._setContents("<ColumnInfo><Column id=\"memberId\" type=\"STRING\" size=\"256\"/><Column id=\"userNm\" type=\"STRING\" size=\"256\"/><Column id=\"deptNm\" type=\"STRING\" size=\"256\"/><Column id=\"jbpsNm\" type=\"STRING\" size=\"256\"/><Column id=\"roleCode\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divPopup","0","0","900","720",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Static("staPopupTitle","0","0",null,"50","0",null,null,null,null,null,this.divPopup.form);
            obj.set_taborder("0");
            obj.set_text("사용자 조회");
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

            obj = new Static("Static00","20","45",null,"90","20",null,null,null,null,null,this.divPopup.form.divSearch.form);
            obj.set_taborder("7");
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

            obj = new Static("sta002","50%","60","100","26",null,null,null,null,null,null,this.divPopup.form.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("사용자명");
            obj.set_cssclass("sta_WF_condition01");
            this.divPopup.form.divSearch.addChild(obj.name, obj);

            obj = new Static("sta001","40","60","100","26",null,null,null,null,null,null,this.divPopup.form.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("회원 ID");
            obj.set_cssclass("sta_WF_condition01");
            this.divPopup.form.divSearch.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_00_00","20","135","60","15",null,null,null,null,null,null,this.divPopup.form.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divPopup.form.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtMemberId","sta001:10","60","160","26",null,null,null,null,null,null,this.divPopup.form.divSearch.form);
            obj.set_taborder("5");
            obj.set_maxlength("100");
            this.divPopup.form.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtMemberNm","sta002:10","60","160","26",null,null,null,null,null,null,this.divPopup.form.divSearch.form);
            obj.set_taborder("6");
            obj.set_maxlength("100");
            this.divPopup.form.divSearch.addChild(obj.name, obj);

            obj = new Button("btn_grdSearch_W",null,"14","63","26","20",null,null,null,null,null,this.divPopup.form.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_grdSearch_W");
            this.divPopup.form.divSearch.addChild(obj.name, obj);

            obj = new Static("sta003","40","94","100","26",null,null,null,null,null,null,this.divPopup.form.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("부서명");
            obj.set_cssclass("sta_WF_condition01");
            this.divPopup.form.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtDeptNm","150","94","160","26",null,null,null,null,null,null,this.divPopup.form.divSearch.form);
            obj.set_taborder("10");
            obj.set_maxlength("100");
            this.divPopup.form.divSearch.addChild(obj.name, obj);

            obj = new Static("sta004","49.88%","94","99","26",null,null,null,null,null,null,this.divPopup.form.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("직급");
            obj.set_cssclass("sta_WF_condition01");
            this.divPopup.form.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtJbpsNm","529","94","160","26",null,null,null,null,null,null,this.divPopup.form.divSearch.form);
            obj.set_taborder("12");
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

            obj = new Grid("grdRoleUser","20","45",null,null,"20","15",null,null,null,null,this.divPopup.form.divResult.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsRoleUser");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_autoupdatetype("itemselect");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\" band=\"left\"/><Column size=\"96\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"160\"/><Column size=\"120\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"34\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"회원 ID\"/><Cell col=\"2\" text=\"사용자명\"/><Cell col=\"3\" text=\"전화번호\"/><Cell col=\"4\" text=\"이메일\"/><Cell col=\"5\" text=\"부서명\"/><Cell col=\"6\" text=\"직급\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" textAlign=\"center\" text=\"bind:rowCheck\"/><Cell col=\"1\" text=\"bind:memberId\" edittype=\"none\"/><Cell col=\"2\" text=\"bind:userNm\" edittype=\"none\"/><Cell col=\"3\" text=\"bind:telNo\"/><Cell col=\"4\" text=\"bind:emailAddr\"/><Cell col=\"5\" text=\"bind:deptNm\"/><Cell col=\"6\" text=\"bind:jobPosition\"/></Band></Format></Formats>");
            this.divPopup.form.divResult.addChild(obj.name, obj);

            obj = new Static("staTitle","20","0","81","45",null,null,null,null,null,null,this.divPopup.form.divResult.form);
            obj.set_taborder("2");
            obj.set_text("검색결과");
            obj.set_cssclass("sta_WF_subTitle01");
            this.divPopup.form.divResult.addChild(obj.name, obj);

            obj = new Static("staGridRowCnt","staTitle:10","0","149","45",null,null,null,null,null,null,this.divPopup.form.divResult.form);
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
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divPopup.form.divSearch.form.edtMemberId","value","dsSearch","memberId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divPopup.form.divSearch.form.edtMemberNm","value","dsSearch","userNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divPopup.form.divSearch.form.edtDeptNm","value","dsSearch","deptNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divPopup.form.divSearch.form.edtJbpsNm","value","dsSearch","jbpsNm");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("DEPT_1010P.xfdl","lib::common.xjs");
        this.registerScript("DEPT_1010P.xfdl", function() {
        /**
         *  Popup Template
         *  MenuPath      부서관리 - 사용자조회 팝업
         *  FileName      DEPT_1010P
         *  Creator 	  woohj
         *  CreateDate    2023.11.20
         *  Desction      사용자 조회 팝업
         ************** 소스 수정 이력 ***********************************************
         *  date          Modifier    Description
         *******************************************************************************
         *  2023.11.20    woohj  	  최초 생성
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
        	this.dsSearch.setColumn(0, "roleCode", this.parent.roleCode);
        	this.fnUserSearch();
        };

        /************************************************************************************************
        * TRANSACTION 서비스 호출 처리
        ************************************************************************************************/

        /**
         * description 조회
        */
        this.fnUserSearch = function()
        {
        	this.gfnTransaction("getUserList", "sm/getUserList.do", "dsSearch", "dsRoleUser", "", "fnCallBack");
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
        		case "getUserList":
        			//총 건수 계산
        			this.gfnRowCount(this.dsRoleUser, this.divPopup.form.divResult.form.staGridRowCnt);
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
        this.divPopup_divSearch_btnSearch_onclick = function(obj,e)
        {
        	this.fnUserSearch();
        };

        /**
         * description 추가버튼
         */
        this.btnAdd_onclick = function(obj,e)
        {
        	if (!this.gfnIsGridChecked(this.dsRoleUser, "rowCheck")) {
        		this.gfnAlert("추가할 사용자를 체크해주세요");
        		return;
        	}

        	if (this.parent.mode == "single") {
        		var indices = this.gfnGetCheckedRows(this.divPopup.form.divResult.form.grdRoleUser, "rowCheck");
        		var sPopUp = this;
        		var result = {
        			sUser: indices.map(function (e) {
        				return {
        					userId: sPopUp.dsRoleUser.getColumn(e, "userId"),
        					userNm: sPopUp.dsRoleUser.getColumn(e, "userNm")
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
        this.divPopup_divSearch_edtMemberId_onkeyup = function(obj,e)
        {
        	if (e.keycode == 13) {
        		this.divPopup_divSearch_btnSearch_onclick();
        	}
        };

        /**
         * description 닫기버튼
        */
        this.divPopup_btnPopupClose_onclick = function(obj,e)
        {
        	this.close();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divPopup.form.Static04_00_00_01.addEventHandler("onclick",this.Static31_onclick,this);
            this.divPopup.form.divSearch.form.Static04_00_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.divPopup.form.divSearch.form.staSubTitle.addEventHandler("onclick",this.Static09_onclick,this);
            this.divPopup.form.divSearch.form.Static04_00_00_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.divPopup.form.divSearch.form.edtMemberId.addEventHandler("onkeyup",this.divPopup_divSearch_edtMemberId_onkeyup,this);
            this.divPopup.form.divSearch.form.edtMemberNm.addEventHandler("onkeyup",this.divPopup_divSearch_edtMemberId_onkeyup,this);
            this.divPopup.form.divSearch.form.edtDeptNm.addEventHandler("onkeyup",this.divPopup_divSearch_edtMemberId_onkeyup,this);
            this.divPopup.form.divSearch.form.edtJbpsNm.addEventHandler("onkeyup",this.divPopup_divSearch_edtMemberId_onkeyup,this);
            this.divPopup.form.Static04_00_00_01_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.divPopup.form.Static04_00_00_01_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.divPopup.form.btnPopupClose.addEventHandler("onclick",this.divPopup_btnPopupClose_onclick,this);
            this.divPopup.form.divResult.form.grdRoleUser.addEventHandler("onheadclick",this.Div00_grdHeader_onheadclick,this);
            this.divPopup.form.divResult.form.staTitle.addEventHandler("onclick",this.Static09_onclick,this);
            this.btnAdd.addEventHandler("onclick",this.btnAdd_onclick,this);
        };
        this.loadIncludeScript("DEPT_1010P.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
