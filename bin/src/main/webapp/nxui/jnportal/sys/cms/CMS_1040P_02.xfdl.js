(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CMS_1040P_02");
            this.set_titletext("과제검색");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj.set_updatecontrol("true");
            obj._setContents("<ColumnInfo><Column id=\"memberId\" type=\"STRING\" size=\"256\"/><Column id=\"mbrNo\" type=\"STRING\" size=\"256\"/><Column id=\"searchProjectNo\" type=\"STRING\" size=\"256\"/><Column id=\"projectNo\" type=\"STRING\" size=\"256\"/><Column id=\"projectNm\" type=\"STRING\" size=\"256\"/><Column id=\"projectType\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsProject", this);
            obj.set_updatecontrol("true");
            obj._setContents("<ColumnInfo><Column id=\"rowCheck\" type=\"STRING\" size=\"256\"/><Column id=\"rowStatus\" type=\"STRING\" size=\"256\"/><Column id=\"mbrNo\" type=\"STRING\" size=\"256\"/><Column id=\"memberId\" type=\"STRING\" size=\"256\"/><Column id=\"projectNo\" type=\"STRING\" size=\"256\"/><Column id=\"projectNm\" type=\"STRING\" size=\"256\"/><Column id=\"projectType\" type=\"STRING\" size=\"256\"/><Column id=\"projectOverview\" type=\"STRING\" size=\"256\"/><Column id=\"projectStartDt\" type=\"STRING\" size=\"256\"/><Column id=\"projectEndDt\" type=\"STRING\" size=\"256\"/><Column id=\"projectDuration\" type=\"STRING\" size=\"256\"/><Column id=\"projectBudget\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsProjectType", this);
            obj._setContents("<ColumnInfo><Column id=\"value\" type=\"STRING\" size=\"256\"/><Column id=\"text\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divPopup","0","0","1000","600",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staPopupTitle","0","0",null,"50","0",null,null,null,null,null,this.divPopup.form);
            obj.set_taborder("0");
            obj.set_text("과제검색");
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

            obj = new Div("divSearch","30","70",null,"110","30",null,null,null,null,null,this.divPopup.form);
            obj.set_taborder("4");
            obj.set_cssclass("div_WF_popup");
            obj.set_text("");
            this.divPopup.addChild(obj.name, obj);

            obj = new Static("Static10","0","0","20","132",null,null,null,null,null,null,this.divPopup.form.divSearch.form);
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

            obj = new Static("Static04_00_00_00","110","0","60","45",null,null,null,null,null,null,this.divPopup.form.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("h 45");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divPopup.form.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_01_00",null,"45","1","34","20",null,null,null,null,null,this.divPopup.form.divSearch.form);
            obj.set_taborder("2");
            obj.set_background("#dddddd");
            this.divPopup.form.divSearch.addChild(obj.name, obj);

            obj = new Static("staSubTitle","19","11","169","27",null,null,null,null,null,null,this.divPopup.form.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_subTitle01");
            this.divPopup.form.divSearch.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_00_00","110","93","60","15",null,null,null,null,null,null,this.divPopup.form.divSearch.form);
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

            obj = new Static("Static10_00_01_00",null,"110","12",null,"21","20",null,null,null,null,this.divPopup.form.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("w12");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divPopup.form.divSearch.addChild(obj.name, obj);

            obj = new Static("Static10_00_00_01_00","918","0","20",null,null,"0",null,null,null,null,this.divPopup.form.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("w20");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divPopup.form.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"9","65","28","20",null,null,null,null,null,this.divPopup.form.divSearch.form);
            obj.set_text("조회");
            obj.set_cssclass("");
            obj.set_taborder("7");
            this.divPopup.form.divSearch.addChild(obj.name, obj);

            obj = new Div("divSrch","20","45",null,"48","20",null,null,null,null,null,this.divPopup.form.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("");
            obj.set_cssclass("div_WF_panel");
            this.divPopup.form.divSearch.addChild(obj.name, obj);

            obj = new Static("sta001","6","10","100","30",null,null,null,null,null,null,this.divPopup.form.divSearch.form.divSrch.form);
            obj.set_taborder("0");
            obj.set_text("과제 NO");
            obj.set_cssclass("sta_WF_condition01");
            this.divPopup.form.divSearch.form.divSrch.addChild(obj.name, obj);

            obj = new Static("sta002","305","10","100","30",null,null,null,null,null,null,this.divPopup.form.divSearch.form.divSrch.form);
            obj.set_taborder("1");
            obj.set_text("과제명");
            obj.set_cssclass("sta_WF_condition01");
            this.divPopup.form.divSearch.form.divSrch.addChild(obj.name, obj);

            obj = new Static("Static16","110","0","20",null,null,"0",null,null,null,null,this.divPopup.form.divSearch.form.divSrch.form);
            obj.set_taborder("2");
            obj.set_text("w 10");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.divPopup.form.divSearch.form.divSrch.addChild(obj.name, obj);

            obj = new Static("Static10_00_00","260","0","40",null,null,"0",null,null,null,null,this.divPopup.form.divSearch.form.divSrch.form);
            obj.set_taborder("3");
            obj.set_text("w40");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divPopup.form.divSearch.form.divSrch.addChild(obj.name, obj);

            obj = new Static("Static16_00","410","0","20",null,null,"0",null,null,null,null,this.divPopup.form.divSearch.form.divSrch.form);
            obj.set_taborder("4");
            obj.set_text("w 10");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.divPopup.form.divSearch.form.divSrch.addChild(obj.name, obj);

            obj = new Edit("edtProjectNo","130","12","130","26",null,null,null,null,null,null,this.divPopup.form.divSearch.form.divSrch.form);
            obj.set_taborder("5");
            this.divPopup.form.divSearch.form.divSrch.addChild(obj.name, obj);

            obj = new Combo("cboProjectType","728","12","150","26",null,null,null,null,null,null,this.divPopup.form.divSearch.form.divSrch.form);
            obj.set_taborder("6");
            obj.set_innerdataset("dsProjectType");
            obj.set_codecolumn("value");
            obj.set_datacolumn("text");
            obj.set_text("Combo00");
            this.divPopup.form.divSearch.form.divSrch.addChild(obj.name, obj);

            obj = new Edit("edtProjectNm","430","12","130","26",null,null,null,null,null,null,this.divPopup.form.divSearch.form.divSrch.form);
            obj.set_taborder("7");
            this.divPopup.form.divSearch.form.divSrch.addChild(obj.name, obj);

            obj = new Static("sta003","604","10","100","30",null,null,null,null,null,null,this.divPopup.form.divSearch.form.divSrch.form);
            obj.set_taborder("8");
            obj.set_text("사업구분");
            obj.set_cssclass("sta_WF_condition01");
            this.divPopup.form.divSearch.form.divSrch.addChild(obj.name, obj);

            obj = new Static("Static16_00_01","708","0","20",null,null,"0",null,null,null,null,this.divPopup.form.divSearch.form.divSrch.form);
            obj.set_taborder("9");
            obj.set_text("w 10");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.divPopup.form.divSearch.form.divSrch.addChild(obj.name, obj);

            obj = new Static("Static10_00_00_00","560","0","40",null,null,"0",null,null,null,null,this.divPopup.form.divSearch.form.divSrch.form);
            obj.set_taborder("10");
            obj.set_text("w40");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divPopup.form.divSearch.form.divSrch.addChild(obj.name, obj);

            obj = new Static("Static15_01_00","130","0","50","12",null,null,null,null,null,null,this.divPopup.form.divSearch.form.divSrch.form);
            obj.set_taborder("11");
            obj.set_text("h 12");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divPopup.form.divSearch.form.divSrch.addChild(obj.name, obj);

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

            obj = new Button("btnPopupClose",null,null,"65","28","434","23",null,null,null,null,this.divPopup.form);
            obj.set_text("닫기");
            obj.set_cssclass("");
            obj.set_visible("true");
            obj.set_taborder("7");
            this.divPopup.addChild(obj.name, obj);

            obj = new Static("sta_g001","498","543","3","34",null,null,null,null,null,null,this.divPopup.form);
            obj.set_taborder("8");
            obj.set_text("w12");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divPopup.addChild(obj.name, obj);

            obj = new Div("divProject","30","192","940","333",null,null,null,null,null,null,this.divPopup.form);
            obj.set_taborder("9");
            obj.set_cssclass("div_WF_popup");
            obj.set_text("");
            this.divPopup.addChild(obj.name, obj);

            obj = new Static("Static10","0","0","20","132",null,null,null,null,null,null,this.divPopup.form.divProject.form);
            obj.set_taborder("0");
            obj.set_text("w20");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divPopup.form.divProject.addChild(obj.name, obj);

            obj = new Static("staSubTitle","20","5","169","27",null,null,null,null,null,null,this.divPopup.form.divProject.form);
            obj.set_taborder("1");
            obj.set_text("검색결과");
            obj.set_cssclass("sta_WF_subTitle01");
            this.divPopup.form.divProject.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_00_00","109","-6","60","45",null,null,null,null,null,null,this.divPopup.form.divProject.form);
            obj.set_taborder("2");
            obj.set_text("h 45");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divPopup.form.divProject.addChild(obj.name, obj);

            obj = new Grid("grdProject","20","39",null,null,"20","10",null,null,null,null,this.divPopup.form.divProject.form);
            obj.set_taborder("3");
            obj.set_binddataset("dsProject");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_autoupdatetype("itemselect");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\" band=\"left\"/><Column size=\"48\" band=\"left\"/><Column size=\"120\"/><Column size=\"350\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"46\" band=\"head\"/><Row size=\"33\"/></Rows><Band id=\"head\"><Cell text=\"NO\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"과제번호\"/><Cell col=\"3\" text=\"과제명\"/><Cell col=\"4\" text=\"사업구분\"/><Cell col=\"5\" text=\"시작일\"/><Cell col=\"6\" text=\"종료일\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" textAlign=\"center\" text=\"bind:rowCheck\"/><Cell col=\"2\" text=\"bind:projectNo\" edittype=\"none\"/><Cell col=\"3\" text=\"bind:projectNm\" edittype=\"none\"/><Cell col=\"4\" text=\"bind:projectType\" displaytype=\"combotext\" combodataset=\"dsProjectType\" combocodecol=\"value\" combodatacol=\"text\"/><Cell col=\"5\" text=\"bind:projectStartDt\"/><Cell col=\"6\" text=\"bind:projectEndDt\"/></Band></Format></Formats>");
            this.divPopup.form.divProject.addChild(obj.name, obj);

            obj = new Static("staGridRowCnt","120","9","149","27",null,null,null,null,null,null,this.divPopup.form.divProject.form);
            obj.set_taborder("4");
            obj.set_text("(총 0건)");
            obj.set_cssclass("sta_WF_subResult");
            this.divPopup.form.divProject.addChild(obj.name, obj);

            obj = new Static("Static10_00",null,"0","20","132","0",null,null,null,null,null,this.divPopup.form.divProject.form);
            obj.set_taborder("5");
            obj.set_text("w20");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divPopup.form.divProject.addChild(obj.name, obj);

            obj = new Static("Static15_01_00","31","180","50","12",null,null,null,null,null,null,this.divPopup.form);
            obj.set_taborder("10");
            obj.set_text("h 12");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divPopup.addChild(obj.name, obj);

            obj = new Button("btnAdd","433",null,"65","28",null,"23",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_icoAdd");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divPopup.form.divSearch.form.divSrch.form
            obj = new Layout("default","",0,0,this.divPopup.form.divSearch.form.divSrch.form,function(p){});
            this.divPopup.form.divSearch.form.divSrch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divPopup.form.divSearch.form
            obj = new Layout("default","",1032,72,this.divPopup.form.divSearch.form,function(p){});
            this.divPopup.form.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divPopup.form.divProject.form
            obj = new Layout("default","",1032,72,this.divPopup.form.divProject.form,function(p){});
            this.divPopup.form.divProject.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divPopup.form
            obj = new Layout("default","",0,0,this.divPopup.form,function(p){});
            this.divPopup.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item12","divPopup.form.divSearch.form.divSrch.form.edtProjectNo","value","dsSearch","searchProjectNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divPopup.form.divSearch.form.divSrch.form.edtProjectNm","value","dsSearch","projectNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divPopup.form.divSearch.form.divSrch.form.cboProjectType","value","dsSearch","projectType");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("CMS_1040P_02.xfdl","lib::common.xjs");
        this.registerScript("CMS_1040P_02.xfdl", function() {
        /**
        *  Popup Template
        *  MenuPath      -
        *  FileName      memberProjectManagePopup.xfdl
        *  Creator 	     cheonsy
        *  CreateDate    2023.03.30
        *  Desction      과제검색
        ************** 소스 수정 이력 ***********************************************
        *  date          Modifier    Description
        *******************************************************************************
        *  2023.03.30    cheonsy 	 최초 생성
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
        	this.gfnLoadCombo("loadCombo", "dsProjectType=TMP:PROJECT_TY:A", "fnCallBack");
        	this.dsSearch.setColumn(0, "memberId", this.parent.memberId);
        	this.dsSearch.setColumn(0, "mbrNo", this.parent.mbrNo);
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
        	this.gfnTransaction("getProjectList", "cms/getProjectList.do", "dsSearch", "dsProject", "", "fnCallBack");
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
        		case "getProjectList":
        			// 총 건수 계산
        			this.gfnRowCount(this.dsProject, this.divPopup.form.divProject.form.staGridRowCnt);
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

        };

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        /**
         * description 조회 버튼
        */
        this.divPopup_divSearch_btnSearch_onclick = function(obj,e)
        {
        	this.dsSearch.setColumn(0, "projectNo", this.dsSearch.getColumn(0, "searchProjectNo"));
        	this.fnSearch();
        };

        /**
         * description 추가버튼
        */
        this.btnAdd_onclick = function(obj,e)
        {
        	if(!this.gfnIsGridChecked(this.dsProject, "rowCheck")){
        		this.gfnAlert("과제를 체크해주세요");
        		return;
        	}

        	for( var i = 0; i < this.dsProject.rowcount; i++){
        		if(this.dsProject.getColumn(i, "rowCheck") > 0 ){
        			var nRow = this.opener.dsUserProject.addRow();
        			this.opener.dsUserProject.copyRow(nRow ,this.dsProject, i);
        			this.opener.dsUserProject.setColumn(nRow, "mbrNo", this.parent.mbrNo);
        			this.opener.dsUserProject.setColumn(nRow, "memberId", this.parent.memberId);
        		}
        	}
        	// pat 3. 임의의 Object Return / dataset 하나의 row는 gfnGetRowObj 이용
        	var oRtn = new Object();
        	oRtn.CONFIRM = "Y";
        	this.gfnPopupClose(oRtn);
        	this.close();
        };

        /**
         * description 행 더블클릭 이벤트
        */
        this.divPopup_grdUser_oncelldblclick = function(obj,e)
        {
        	this.opener.dsSearch.setColumn(0, "userId", this.dsUser.getColumn(this.dsUser.rowposition, "userId"));
        	this.opener.dsSearch.setColumn(0, "userNm", this.dsUser.getColumn(this.dsUser.rowposition, "userNm"));
        	this.close();
        };

        /**
         * description 엔터키 조회
        */
        this.divPopup_divSearch_divSrch_edtProjectNo_onkeyup = function(obj,e)
        {
        	if(e.keycode==13){
        		this.divPopup_divSearch_btnSearch_onclick();
        	}
        };

        /**
         * description 그리드 헤드 클릭
        */
        this.divPopup_divProject_grdProject_onheadclick = function(obj,e)
        {
        	this.gfnSetGridCheckAll(obj, e, "rowCheck");
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
            this.divPopup.form.divSearch.form.Static07_00_01_00.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.divPopup.form.divSearch.form.staSubTitle.addEventHandler("onclick",this.Static09_onclick,this);
            this.divPopup.form.divSearch.form.Static04_00_00_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.divPopup.form.divSearch.form.Static10_00_00_01_00.addEventHandler("onclick",this.div_Search_Static10_00_onclick,this);
            this.divPopup.form.divSearch.form.btnSearch.addEventHandler("onclick",this.divPopup_divSearch_btnSearch_onclick,this);
            this.divPopup.form.divSearch.form.divSrch.form.sta001.addEventHandler("onclick",this.divSearch_sta_01_onclick,this);
            this.divPopup.form.divSearch.form.divSrch.form.sta002.addEventHandler("onclick",this.divSearch_sta_01_onclick,this);
            this.divPopup.form.divSearch.form.divSrch.form.Static10_00_00.addEventHandler("onclick",this.div_Search_Static10_00_onclick,this);
            this.divPopup.form.divSearch.form.divSrch.form.edtProjectNo.addEventHandler("onkeyup",this.divPopup_divSearch_divSrch_edtProjectNo_onkeyup,this);
            this.divPopup.form.divSearch.form.divSrch.form.cboProjectType.addEventHandler("onkeyup",this.divPopup_divForm_Div00_edt_userNm_onkeyup,this);
            this.divPopup.form.divSearch.form.divSrch.form.edtProjectNm.addEventHandler("onkeyup",this.divPopup_divForm_Div00_edt_userNm_onkeyup,this);
            this.divPopup.form.divSearch.form.divSrch.form.sta003.addEventHandler("onclick",this.divSearch_sta_01_onclick,this);
            this.divPopup.form.divSearch.form.divSrch.form.Static10_00_00_00.addEventHandler("onclick",this.div_Search_Static10_00_onclick,this);
            this.divPopup.form.divSearch.form.divSrch.form.Static15_01_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.divPopup.form.Static04_00_00_01_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.divPopup.form.Static04_00_00_01_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.divPopup.form.btnPopupClose.addEventHandler("onclick",this.divPopup_btnPopupClose_onclick,this);
            this.divPopup.form.divProject.form.staSubTitle.addEventHandler("onclick",this.Static09_onclick,this);
            this.divPopup.form.divProject.form.Static04_00_00_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.divPopup.form.divProject.form.grdProject.addEventHandler("oncelldblclick",this.divPopup_grdUser_oncelldblclick,this);
            this.divPopup.form.divProject.form.grdProject.addEventHandler("onheadclick",this.divPopup_divProject_grdProject_onheadclick,this);
            this.divPopup.form.Static15_01_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.btnAdd.addEventHandler("onclick",this.btnAdd_onclick,this);
        };
        this.loadIncludeScript("CMS_1040P_02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
