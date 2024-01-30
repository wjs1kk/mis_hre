(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("advtManage");
            this.set_titletext("배너 및 팝업 관리");
            this.set_cssclass("frm_WF_comp");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,670);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsUser", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"memberId\" type=\"STRING\" size=\"256\"/><Column id=\"userNmKr\" type=\"STRING\" size=\"256\"/><Column id=\"userNmEn\" type=\"STRING\" size=\"256\"/><Column id=\"applyDt\" type=\"STRING\" size=\"256\"/><Column id=\"applyStatus\" type=\"STRING\" size=\"256\"/><Column id=\"applyCont\" type=\"STRING\" size=\"256\"/><Column id=\"legalYn\" type=\"STRING\" size=\"256\"/><Column id=\"emailAddr\" type=\"STRING\" size=\"256\"/><Column id=\"telNo\" type=\"STRING\" size=\"256\"/><Column id=\"phoneNo\" type=\"STRING\" size=\"256\"/><Column id=\"UnsubscribeYn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAdvtManage", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"advtId\" type=\"STRING\" size=\"256\"/><Column id=\"advtType\" type=\"STRING\" size=\"256\"/><Column id=\"advtTitle\" type=\"STRING\" size=\"256\"/><Column id=\"advtCont\" type=\"STRING\" size=\"256\"/><Column id=\"advtStartDt\" type=\"STRING\" size=\"256\"/><Column id=\"advtEndDt\" type=\"STRING\" size=\"256\"/><Column id=\"sortOrdr\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"attachFileId\" type=\"STRING\" size=\"256\"/><Column id=\"rowCheck\" type=\"STRING\" size=\"256\"/><Column id=\"rowStatus\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAdTy", this);
            obj._setContents("<ColumnInfo><Column id=\"text\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"advtId\" type=\"STRING\" size=\"256\"/><Column id=\"advtType\" type=\"STRING\" size=\"256\"/><Column id=\"advtTitle\" type=\"STRING\" size=\"256\"/><Column id=\"advtCont\" type=\"STRING\" size=\"256\"/><Column id=\"advtStartDt\" type=\"STRING\" size=\"256\"/><Column id=\"advtEndDt\" type=\"STRING\" size=\"256\"/><Column id=\"ordNo\" type=\"STRING\" size=\"256\"/><Column id=\"advtUseYn\" type=\"STRING\" size=\"256\"/><Column id=\"attachFileId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUseYn", this);
            obj._setContents("<ColumnInfo><Column id=\"text\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btnSearch",null,"12","65","28","50",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Static("sta_01","50","10","500","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("배너 및 팝업 관리");
            obj.set_cssclass("sta_WF_compTitle01");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00","50","45","60","12",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("h 12");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00","50","53","169","27",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_subTitle01");
            this.addChild(obj.name, obj);

            obj = new Static("Static10_00","30","107","20",null,null,"416",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("w20");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Div("div_Search01","50","177",null,"400","50",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","-20","26","20","295",null,null,null,null,null,null,this.div_Search01.form);
            obj.set_taborder("1");
            obj.set_text("w20");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.div_Search01.addChild(obj.name, obj);

            obj = new Static("Static04_00_00","20","0","60","18",null,null,null,null,null,null,this.div_Search01.form);
            obj.set_taborder("2");
            obj.set_text("h 18");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.div_Search01.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_00","129","0","60","45",null,null,null,null,null,null,this.div_Search01.form);
            obj.set_taborder("3");
            obj.set_text("h 45");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.div_Search01.addChild(obj.name, obj);

            obj = new Static("Static09","20","11","169","27",null,null,null,null,null,null,this.div_Search01.form);
            obj.set_taborder("5");
            obj.set_text("검색결과");
            obj.set_cssclass("sta_WF_subTitle01");
            this.div_Search01.addChild(obj.name, obj);

            obj = new Grid("grdAdvtManage","20","45",null,null,"20","13",null,null,null,null,this.div_Search01.form);
            obj.set_taborder("4");
            obj.set_binddataset("dsAdvtManage");
            obj.set_autofittype("col");
            obj.set_tooltiptype("default");
            obj.set_autoenter("select");
            obj.set_enable("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"100\"/><Column size=\"300\"/><Column size=\"400\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"33\"/></Rows><Band id=\"head\"><Cell text=\"NO\"/><Cell col=\"1\" text=\"유형\" autosizerow=\"default\"/><Cell col=\"2\" text=\"제목\"/><Cell col=\"3\" text=\"내용\"/><Cell col=\"4\" text=\"표시순서\"/><Cell col=\"5\" text=\"게시 시작일\"/><Cell col=\"6\" text=\"게시 종료일\"/><Cell col=\"7\" text=\"사용여부\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" textAlign=\"center\" expandsize=\"16\" edittype=\"none\"/><Cell col=\"1\" displaytype=\"combotext\" edittype=\"none\" text=\"bind:advtType\" expandsize=\"16\" textAlign=\"center\" combodataset=\"dsAdTy\" combocodecol=\"value\" combodatacol=\"text\"/><Cell col=\"2\" text=\"bind:advtTitle\" displaytype=\"normal\" expandsize=\"16\" edittype=\"none\" textAlign=\"center\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"none\" text=\"bind:advtCont\" calendardateformat=\"yyyy-MM-dd\" expandsize=\"16\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:sortOrdr\" textAlign=\"center\" edittype=\"none\"/><Cell col=\"5\" text=\"bind:advtStartDt\" textAlign=\"center\" edittype=\"none\"/><Cell col=\"6\" text=\"bind:advtEndDt\" textAlign=\"center\" edittype=\"none\"/><Cell col=\"7\" text=\"bind:useYn\" textAlign=\"center\" displaytype=\"combotext\" combodataset=\"dsUseYn\" combodatacol=\"text\" combocodecol=\"value\"/></Band></Format><Format id=\"format_copy\"/></Formats>");
            this.div_Search01.addChild(obj.name, obj);

            obj = new Static("Static10_00",null,"0","20","295","0",null,null,null,null,null,this.div_Search01.form);
            obj.set_taborder("0");
            obj.set_text("w20");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.div_Search01.addChild(obj.name, obj);

            obj = new Static("stc_gridRowCnt","109","12","149","27",null,null,null,null,null,null,this.div_Search01.form);
            obj.set_taborder("6");
            obj.set_text("(총 0건)");
            obj.set_cssclass("sta_WF_subResult");
            this.div_Search01.addChild(obj.name, obj);

            obj = new Static("Static04_00_00","70","167","60","10",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_registration",null,"12","90","28","118",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("신규등록");
            obj.set_cssclass("btn_WF_icoRegistration");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","51","82",null,"80","49",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","20","15",null,null,"20","15",null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_cssclass("div_WF_panel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sch_RQST_NO00","11","9","110","34",null,null,null,null,null,null,this.divSearch.form.Div00.form);
            obj.set_taborder("0");
            obj.set_text("유형");
            obj.set_cssclass("sta_WF_condition01");
            this.divSearch.form.Div00.addChild(obj.name, obj);

            obj = new Static("sch_RQST_DT","305","9","110","34",null,null,null,null,null,null,this.divSearch.form.Div00.form);
            obj.set_taborder("1");
            obj.set_text("제목");
            obj.set_cssclass("sta_WF_condition01");
            this.divSearch.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_advtTitle","414","13","8.43%","26",null,null,null,null,null,null,this.divSearch.form.Div00.form);
            obj.set_taborder("2");
            this.divSearch.form.Div00.addChild(obj.name, obj);

            obj = new Static("sch_RQST_DT00","621","9","110","34",null,null,null,null,null,null,this.divSearch.form.Div00.form);
            obj.set_taborder("3");
            obj.set_text("내용");
            obj.set_cssclass("sta_WF_condition01");
            this.divSearch.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_advtCont","730","13","8.43%","26",null,null,null,null,null,null,this.divSearch.form.Div00.form);
            obj.set_taborder("4");
            this.divSearch.form.Div00.addChild(obj.name, obj);

            obj = new Combo("comboAdTy","163","110","115","26",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_datacolumn("text");
            obj.set_codecolumn("value");
            obj.set_innerdataset("dsAdTy");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_Search01.form
            obj = new Layout("default","",1032,72,this.div_Search01.form,function(p){});
            this.div_Search01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divSearch.form.Div00.form
            obj = new Layout("default","",0,0,this.divSearch.form.Div00.form,function(p){});
            this.divSearch.form.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1920,670,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("배너 및 팝업 관리");
                p.set_cssclass("frm_WF_comp");

                p.btnSearch.set_taborder("0");
                p.btnSearch.set_text("조회");
                p.btnSearch.move(null,"12","65","28","50",null);

                p.sta_01.set_taborder("1");
                p.sta_01.set_text("배너 및 팝업 관리");
                p.sta_01.set_cssclass("sta_WF_compTitle01");
                p.sta_01.move("50","10","500","30",null,null);

                p.Static04_00.set_taborder("2");
                p.Static04_00.set_text("h 12");
                p.Static04_00.set_visible("false");
                p.Static04_00.set_background("aqua");
                p.Static04_00.set_color("blue");
                p.Static04_00.set_textAlign("center");
                p.Static04_00.set_verticalAlign("middle");
                p.Static04_00.set_opacity("0.7");
                p.Static04_00.set_font("normal 12px/normal \"Arial\"");
                p.Static04_00.move("50","45","60","12",null,null);

                p.Static05_00.set_taborder("3");
                p.Static05_00.set_text("검색조건");
                p.Static05_00.set_cssclass("sta_WF_subTitle01");
                p.Static05_00.move("50","53","169","27",null,null);

                p.Static10_00.set_taborder("4");
                p.Static10_00.set_text("w20");
                p.Static10_00.set_visible("false");
                p.Static10_00.set_background("fuchsia");
                p.Static10_00.set_color("blue");
                p.Static10_00.set_textAlign("center");
                p.Static10_00.set_verticalAlign("middle");
                p.Static10_00.set_opacity("0.7");
                p.Static10_00.set_font("normal 12px/normal \"Arial\"");
                p.Static10_00.move("30","107","20",null,null,"416");

                p.div_Search01.set_taborder("5");
                p.div_Search01.set_cssclass("");
                p.div_Search01.set_text("");
                p.div_Search01.move("50","177",null,"400","50",null);

                p.Static04_00_00.set_taborder("6");
                p.Static04_00_00.set_text("h 10");
                p.Static04_00_00.set_visible("false");
                p.Static04_00_00.set_background("aqua");
                p.Static04_00_00.set_color("blue");
                p.Static04_00_00.set_textAlign("center");
                p.Static04_00_00.set_verticalAlign("middle");
                p.Static04_00_00.set_opacity("0.7");
                p.Static04_00_00.set_font("normal 12px/normal \"Arial\"");
                p.Static04_00_00.move("70","167","60","10",null,null);

                p.btn_registration.set_taborder("7");
                p.btn_registration.set_text("신규등록");
                p.btn_registration.set_cssclass("btn_WF_icoRegistration");
                p.btn_registration.move(null,"12","90","28","118",null);

                p.divSearch.set_taborder("8");
                p.divSearch.set_text("");
                p.divSearch.move("51","82",null,"80","49",null);

                p.comboAdTy.set_taborder("9");
                p.comboAdTy.set_datacolumn("text");
                p.comboAdTy.set_codecolumn("value");
                p.comboAdTy.set_innerdataset("dsAdTy");
                p.comboAdTy.set_text("");
                p.comboAdTy.set_value("");
                p.comboAdTy.set_index("-1");
                p.comboAdTy.move("163","110","115","26",null,null);
            	}
            );
            obj.set_stepcount("0");
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
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.Div00.form.comboAdTySearch","value","dsAdTy","text");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.Div00.form.edt_advtTitle","value","dsSearch","advtTitle");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.Div00.form.edt_advtCont","value","dsSearch","advtCont");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","comboAdTy","value","dsSearch","advtType");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("advtManage.xfdl","lib::common.xjs");
        this.registerScript("advtManage.xfdl", function() {
        /**
        *  배너 및 팝업 관리
        *  MenuPath      관리 메뉴 - 관리자 - 배너 및 팝업 관리
        *  FileName      advtManage.xfdl
        *  Creator 	     moonsj
        *  CreateDate    2023.02.22
        *  Desction      배너 및 팝업 관리
        ************** 소스 수정 이력 ***********************************************
        *  date          Modifier    Description
        *******************************************************************************
        *  2023.03.15    moonsj 	 최초 생성
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
        	this.gfnLoadCombo("loadCombo", "dsAdTy=CMS:ADVT_TYPE:A dsUseYn=SM:USE_YN:", "fnCallBack");
        	var nRowObj = this.parent.sRowObj;
        	console.log('this.parent.sRowObj: ', this.parent.sRowObj);
        	this.fnSearch();
        };

        /************************************************************************************************
        * TRANSACTION 서비스 호출 처리
        ************************************************************************************************/
        /**
         * description 삭제
        */

        this.fnDelete = function ()
        {
        	var strSvcId	= "deleteAdvtManageList";
        	var strSvcUrl	= "cms/deleteAdvtManageList.do";
        	var inData		= "dsAdvtManage";
        	var outData		= "";
        	var strArg		= "";
        	var callBackFnc = "fnCallBack";
        	var isAsync     = true;

        	this.gfnTransaction(strSvcId,strSvcUrl, inData,outData, strArg, callBackFnc, isAsync);
        };

        /**
         * description 조회
        */
        this.fnSearch = function()
        {
        	var strSvcId    = "getAdvtManageList";
        	var strSvcUrl   = "cms/getAdvtManageList.do";
        	var inData      = "dsSearch";  // input1=dsSearch
        	var outData     = "dsAdvtManage";  // dsAdvtManage
        	var strArg      = "";
        	var callBackFnc = "fnCallBack";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId,strSvcUrl, inData,outData, strArg, callBackFnc, isAsync);
        };

        /**
         * description 저장
        */
        this.fnSave = function()
        {
        	var strSvcId    = "setAdvtManageList";
        	var strSvcUrl   = "cms/setAdvtManageList.do";
        	var inData      = "dsAdvtManage";  // input1=dsSearch
        	var outData     = "";  // dsAdvtManage=output1
        	var strArg      = "";
        	var callBackFnc = "fnCallBack";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId,strSvcUrl, inData,outData, strArg, callBackFnc, isAsync);
        };

        /************************************************************************************************
         * CALLBACK 콜백 처리부분(Transaction, Popup)
         ************************************************************************************************
        /**
         * description Transaction CallBack 함수
        */

        this.fnCallBack = function (sSvcId, nErrorCode, sErrorMsg)
        {
        	switch (sSvcId) {
        	   case "setAdvtManageList":
        			if(this.callbackMsg == "success"){
        				this.gfnAlert("CM_MSG_SAVE_SUCCESS");  // 저장 되었습니다.
        				this.fnSearch();
        			}else{
        				this.gfnAlert("저장 실패");
        			}
        			break;
        		case "deleteAdvtManageList":
        			if(this.callbackMsg == "success"){
        				 this.gfnAlert("CM_MSG_DELETE_SUCCESS"); //삭제되었습니다.
        				 this.dsAdvtManage.clearData();
        				 this.dsAdvtManage.addRow();
        				 this.fnSearch();
        			}else{
        				this.gfnAlert("삭제 실패");
        			}
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
        	this.fnSearch();
        };

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *************************************************************************************************
        /**
         * description 조회버튼 클릭
        */
        this.btnSearch_onclick = function(obj,e)
        {
        	this.fnSearch();
        };


        /**
         * description 저장버튼 클릭
        */
        this.btnSave_onclick = function(obj,e)
        {
            if(this.dsAdvtManage.rowcount == 0){
        		this.gfnAlert("CM_MSG_SAVE_NODATA");  // 저장할 데이터가 없습니다.
        		return;
        	}
        	// 변경사항 체크
        	if (!this.gfnDsIsUpdated(this.dsUserManage)) {
        		this.gfnAlert("CM_MSG_SAVE_NOCHANGE");  // 변경된 내역이 없습니다.
        		return;
        	}
        	// msgId, args(치환), popupId, Confirm Callback Function({확인 trueFunc, 취소: falseFunc})
        	// confirm 이후 스크립트가 실행되기때문에 return; 처리 or 가장 마지막 위치
        	this.gfnAlert("CM_CFM_BEFORE_SAVE", "", "", {trueFunc: "fnSave", falseFunc: ""});  // 변경된 내역을 저장 하시겠습니까?
        	return;
        };

        /**
         * description 삭제버튼 클릭
        */
        this.btn_delete_onclick = function(obj,e)
        {
        	var cCnt = this.dsAdvtManage.getCaseCount("rowCheck==1");

        	if(cCnt == 0){
        		this.gfnAlert("삭제할 데이터를 선택해주세요.");
        		return;
        	}

        	this.gfnAlert("CM_CFM_DELETE", "", "", {trueFunc: "fnDelete", falseFunc: ""});  // 변경된 내역을 삭제 하시겠습니까?
        };

        /**
         * description 그리드헤드 클릭
        */
        this.Div00_grdAdvtManage_onheadclick= function(obj,e)
        {
        	this.gfnSetGridCheckAll(obj, e, "rowCheck");
        };

        /**
         * description 사용자관리 신규등록 Popup
        */
        this.btn_registration_onclick = function(obj,e)
        {

        	this.gfnOpenPopup("advtManagePopup", "cms::advtManagePopup.xfdl", "", "fnPopupAfter", "");

        };

        /**
         * description 그리드에 선택된 데이터를 수정팝업창 오픈
        */
        this.btnUpdate_onclick = function(obj,e)
        {
        	//체크된 행 갯수 count
        	var cnt = 0;
        	for(var i = 0; i < this.dsAdvtManage.rowcount; i++){
        		if(this.dsAdvtManage.getColumn(i, "rowCheck") == 1){
        			cnt++;
        		}
        	}

        	if(cnt > 1){
        	this.gfnAlert("수정 할 데이터를 한 개만 선택하세요.");
        	return;
        	}
        	this.fnUpdateAdvtInfo(this.dsAdvtManage.rowposition);
        };

        /**
         * description 그리드 셀 더블클릭 시 수정팝업창 오픈
        */
        this.div_Search01_grdAdvtManage_oncelldblclick = function(obj,e)
        {
        	this.fnUpdateAdvtInfo(e.row);
        };

        /**
         * description 팝업창 내용 저장 후 팝업창 닫기
        */


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
         * description 수정팝업창 오픈
        */
        this.fnUpdateAdvtInfo = function(sRow)
        {
        	var sRowObj = this.gfnGetRowObj(this.dsAdvtManage, sRow);
        	var args = {sRowObj: sRowObj};
        	this.gfnOpenPopup("advtManagePopup", "cms::advtManagePopup.xfdl", args, "fnPopupAfter", "");
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
            this.sta_01.addEventHandler("onclick",this.sta_01_onclick,this);
            this.Static04_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.Static05_00.addEventHandler("onclick",this.div_Search_Static05_onclick,this);
            this.Static10_00.addEventHandler("onclick",this.Static10_00_onclick,this);
            this.div_Search01.form.Static04_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.div_Search01.form.Static04_00_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.div_Search01.form.Static09.addEventHandler("onclick",this.Static09_onclick,this);
            this.div_Search01.form.grdAdvtManage.addEventHandler("onheadclick",this.grd_list_onheadclick,this);
            this.div_Search01.form.grdAdvtManage.addEventHandler("oncelldblclick",this.div_Search01_grdAdvtManage_oncelldblclick,this);
            this.Static04_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.btn_registration.addEventHandler("onclick",this.btn_registration_onclick,this);
            this.divSearch.form.Div00.form.sch_RQST_NO00.addEventHandler("onclick",this.div_Search_Static01_onclick,this);
        };
        this.loadIncludeScript("advtManage.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
