(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CMS_2030M");
            this.set_titletext("금지단어 관리");
            this.set_cssclass("frm_WF_comp");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,670);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj.set_updatecontrol("true");
            obj._setContents("<ColumnInfo><Column id=\"sysId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsForbiddenWord", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"rowCheck\" type=\"STRING\" size=\"256\"/><Column id=\"rowStatus\" type=\"STRING\" size=\"256\"/><Column id=\"sysId\" type=\"STRING\" size=\"256\"/><Column id=\"sysNm\" type=\"STRING\" size=\"256\"/><Column id=\"boardId\" type=\"STRING\" size=\"256\"/><Column id=\"boardNm\" type=\"STRING\" size=\"256\"/><Column id=\"fbddnId\" type=\"STRING\" size=\"256\"/><Column id=\"fbddnTitle\" type=\"STRING\" size=\"256\"/><Column id=\"fbddnCont\" type=\"STRING\" size=\"256\"/><Column id=\"userNmKr\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"rgstId\" type=\"STRING\" size=\"256\"/><Column id=\"rgstIp\" type=\"STRING\" size=\"256\"/><Column id=\"rgstDt\" type=\"STRING\" size=\"256\"/><Column id=\"updtId\" type=\"STRING\" size=\"256\"/><Column id=\"updtIp\" type=\"STRING\" size=\"256\"/><Column id=\"updtDt\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUseYn", this);
            obj._setContents("<ColumnInfo><Column id=\"LINE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"LINE_CODE_NM_KR\" type=\"STRING\" size=\"256\"/><Column id=\"LINE_CODE_NM_EN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"LINE_CODE\">Y</Col><Col id=\"LINE_CODE_NM_KR\">사용</Col><Col id=\"LINE_CODE_NM_EN\"/></Row><Row><Col id=\"LINE_CODE\">N</Col><Col id=\"LINE_CODE_NM_KR\">미사용</Col><Col id=\"LINE_CODE_NM_EN\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btnSearch",null,"12","65","28","118",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"12","65","28","50",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Save");
            this.addChild(obj.name, obj);

            obj = new Static("sta001","53","10","500","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("금지 단어 관리");
            obj.set_cssclass("sta_WF_compTitle01");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","50","50",null,"120","50",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","20","46",null,"64","20",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_cssclass("div_WF_panel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta003","40","18","100","30",null,null,null,null,null,null,this.divSearch.form.Div00.form);
            obj.set_taborder("0");
            obj.set_text("금지단어");
            obj.set_cssclass("sta_WF_frmTitle");
            this.divSearch.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edt001","115","22","250","26",null,null,null,null,null,null,this.divSearch.form.Div00.form);
            obj.set_taborder("1");
            this.divSearch.form.Div00.addChild(obj.name, obj);

            obj = new Static("sta002","20","13","250","27",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_subTitle01");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("Div00","50","190",null,null,"50","30",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnAddRow",null,"14","55","26","79",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_Row_Add");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btnDeleteRow",null,"14","55","26","19",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_Row_Delete");
            this.Div00.addChild(obj.name, obj);

            obj = new Grid("grdForbiddenWord","20","45",null,null,"20","26",null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_binddataset("dsForbiddenWord");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_autoupdatetype("itemselect");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\" band=\"left\"/><Column size=\"48\" band=\"left\"/><Column size=\"48\" band=\"left\"/><Column size=\"80\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"46\" band=\"head\"/><Row size=\"99\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"상태\"/><Cell col=\"3\" text=\"시스템명\"/><Cell col=\"4\" text=\"게시판명\"/><Cell col=\"5\" text=\"제목\"/><Cell col=\"6\" text=\"금지단어 내용(구분자 띄어쓰기)\"/><Cell col=\"7\" text=\"사용여부\"/><Cell col=\"8\" text=\"등록자\"/><Cell col=\"9\" text=\"등록일시\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\" text=\"expr:currow+1\" textAlign=\"center\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" textAlign=\"center\" text=\"bind:rowCheck\"/><Cell col=\"2\" textAlign=\"center\" imagestretch=\"fit\" displaytype=\"normal\" text=\"bind:rowStatus\"/><Cell col=\"3\" text=\"bind:sysNm\" edittype=\"none\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:boardNm\" edittype=\"none\" textAlign=\"left\" expandshow=\"show\" expandsize=\"25\"/><Cell col=\"5\" text=\"bind:fbddnTitle\" edittype=\"text\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:fbddnCont\" edittype=\"textarea\" textAlign=\"left\" displaytype=\"textareacontrol\"/><Cell col=\"7\" text=\"bind:useYn\" edittype=\"combo\" displaytype=\"combocontrol\" combocodecol=\"LINE_CODE\" combodataset=\"dsUseYn\" combodatacol=\"LINE_CODE_NM_KR\"/><Cell col=\"8\" text=\"bind:userNmKr\" edittype=\"none\"/><Cell col=\"9\" text=\"bind:rgstDt\" edittype=\"none\" textAlign=\"center\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta004","20","11","250","27",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("금지 단어 관리 목록");
            obj.set_cssclass("sta_WF_subTitle01");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("staGridRowCnt","191","11","149","27",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("(총 0건)");
            obj.set_cssclass("sta_WF_subResult");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btnExportCompML",null,"12","184","28","186",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Export 컴포넌트 언어 Data");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form.Div00.form
            obj = new Layout("default","",0,0,this.divSearch.form.Div00.form,function(p){});
            this.divSearch.form.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btnAddRow.set_taborder("0");
                p.btnAddRow.set_text("추가");
                p.btnAddRow.set_cssclass("btn_WF_Row_Add");
                p.btnAddRow.move(null,"14","55","26","79",null);

                p.btnDeleteRow.set_taborder("1");
                p.btnDeleteRow.set_text("삭제");
                p.btnDeleteRow.set_cssclass("btn_WF_Row_Delete");
                p.btnDeleteRow.move(null,"14","55","26","19",null);

                p.grdForbiddenWord.set_taborder("2");
                p.grdForbiddenWord.set_binddataset("dsForbiddenWord");
                p.grdForbiddenWord.set_autofittype("col");
                p.grdForbiddenWord.set_autoenter("select");
                p.grdForbiddenWord.set_autoupdatetype("itemselect");
                p.grdForbiddenWord.move("20","45",null,null,"20","26");

                p.sta004.set_taborder("3");
                p.sta004.set_text("금지 단어 관리 목록");
                p.sta004.set_cssclass("sta_WF_subTitle01");
                p.sta004.move("20","11","250","27",null,null);

                p.staGridRowCnt.set_taborder("4");
                p.staGridRowCnt.set_text("(총 0건)");
                p.staGridRowCnt.set_cssclass("sta_WF_subResult");
                p.staGridRowCnt.move("191","11","149","27",null,null);
            	}
            );
            this.Div00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div00.form
            obj = new Layout("screen00","",0,0,this.Div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.Div00.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1920,670,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("금지단어 관리");
                p.set_cssclass("frm_WF_comp");

                p.btnSearch.set_taborder("0");
                p.btnSearch.set_text("조회");
                p.btnSearch.move(null,"12","65","28","118",null);

                p.btnSave.set_taborder("1");
                p.btnSave.set_text("저장");
                p.btnSave.set_cssclass("btn_WF_Save");
                p.btnSave.move(null,"12","65","28","50",null);

                p.sta001.set_taborder("2");
                p.sta001.set_text("금지 단어 관리");
                p.sta001.set_cssclass("sta_WF_compTitle01");
                p.sta001.move("53","10","500","30",null,null);

                p.divSearch.set_taborder("3");
                p.divSearch.set_text("");
                p.divSearch.move("50","50",null,"120","50",null);

                p.Div00.set_taborder("4");
                p.Div00.set_text("");
                p.Div00.move("50","190",null,null,"50","30");

                p.btnExportCompML.set_taborder("5");
                p.btnExportCompML.set_text("Export 컴포넌트 언어 Data");
                p.btnExportCompML.move(null,"12","184","28","186",null);
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
            obj = new BindItem("item0","divSearch.form.Div00.form.edt001","value","dsSearch","sysId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.Div00.form.edt_02","value","dsSearch","moduleId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.Div00.form.edt_03","value","dsSearch","moduleNm");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("CMS_2030M.xfdl","lib::common.xjs");
        this.registerScript("CMS_2030M.xfdl", function() {
        /**
        *  금지 단어 관리
        *  MenuPath      시스템 관리 - 관리메뉴 - 금지 단어 관리
        *  FileName      CMS_2030M.xfdl
        *  Creator 	     moonsj
        *  CreateDate    2023.04.05
        *  Desction      금지 단어 관리
        ************** 소스 수정 이력 ***********************************************
        *  date          Modifier    Description
        *******************************************************************************
        *  2023.04.05    moonsj 	 최초 생성
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
        	var strSvcId    = "getForbiddenWordList";
        	var strSvcUrl   = "cms/getForbiddenWordList.do";
        	var inData      = "dsSearch";  // input1=dsSearch
        	var outData     = "dsForbiddenWord";  // dsgetForbiddenWord=output1
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
        	var strSvcId    = "setForbiddenWordList";
        	var strSvcUrl   = "cms/setForbiddenWordList.do";
        	var inData      = "dsForbiddenWord";  // input1=dsSearch
        	var outData     = "";  // dsForbiddenWord=output1
        	var strArg      = "";
        	var callBackFnc = "fnCallBack";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId,strSvcUrl, inData,outData, strArg, callBackFnc, isAsync);
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
        		case "getForbiddenWordList":
        			this.gfnRowCount(this.dsForbiddenWord, this.Div00.form.staGridRowCnt);
        			break;
        		case "setForbiddenWordList":
        			if(this.callbackMsg == "success"){
        				this.gfnAlert("CM_MSG_SAVE_SUCCESS");  // 저장 되었습니다.
        				this.gfnRowCount(this.dsForbiddenWord, this.Div00.form.staGridRowCnt);
        				this.fnSearch();
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
        	switch(sPopupId){
        		case "CMS_2030P_01":	// 게시판목록 팝업
        			var oRtn = this.gfnGetPopupRtn();
        			if(oRtn){
        				console.log('oRtn : ',  oRtn);
        				console.log('oRtn.CONFIRM : ',  oRtn.CONFIRM);
        			}
        		break;
        		default:
        		break;
        	}
        };


        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ****************************************************
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
            if(this.dsForbiddenWord.rowcount == 0){
        		this.gfnAlert("CM_MSG_SAVE_NODATA");  // 저장할 데이터가 없습니다.(변경된 내역이 없습니다.)
        		return;
        	}
        	// 변경사항 체크
        	if (!this.gfnDsIsUpdated(this.dsForbiddenWord)) {
        		this.gfnAlert("CM_MSG_SAVE_NOCHANGE");  // 변경된 내역이 없습니다.
        		return;
        	}
        	// msgId, args(치환), popupId, Confirm Callback Function({확인 trueFunc, 취소: falseFunc})
        	// confirm 이후 스크립트가 실행되기때문에 return; 처리 or 가장 마지막 위치
        	this.gfnAlert("CM_CFM_BEFORE_SAVE", "", "", {trueFunc: "fnSave", falseFunc: ""});  // 변경된 내역을 저장 하시겠습니까?
        	return;
        };

        /**
         * description 행추가 클릭
        */
        this.btnAddRow_onclick = function(obj,e)
        {
        	this.gfnInsertRow(this.dsForbiddenWord, "last");
        	this.dsForbiddenWord.setColumn(this.dsForbiddenWord.rowposition, "useYn", "Y");
        };

        /**
         * description 행삭제 클릭
        */
        this.btnDeleteRow_onclick = function(obj,e)
        {
        	this.gfnDeleteRow(this.dsForbiddenWord);
        };


        /**
         * @description 그리드 값 변경 이벤트
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

        this.Div00_grdForbiddenWord_onexpandup = function(obj,e)
        {
        	 if(e.col == 4){
        		var oArg = {  boardNm : this.dsForbiddenWord.getColumn(this.dsForbiddenWord.rowposition, "boardNm")	};
         		this.gfnOpenPopup("CMS_2030P_01", "sys::cms/CMS_2030P_01.xfdl", oArg, "fnPopupAfter", "");
        		}
        };

        this.Div00_grdForbiddenWord_oncellclick = function(obj,e)
        {
        	this.gfnSetGridCheckAll(obj, e, "rowCheck");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
            this.btnSave.addEventHandler("onclick",this.btnSave_onclick,this);
            this.sta001.addEventHandler("onclick",this.sta_01_onclick,this);
            this.divSearch.form.Div00.form.sta003.addEventHandler("onclick",this.divSearch_sta_01_onclick,this);
            this.divSearch.form.Div00.form.edt001.addEventHandler("onchanged",this.divSearch_Div00_edt_01_onchanged,this);
            this.divSearch.form.sta002.addEventHandler("onclick",this.Static09_onclick,this);
            this.Div00.form.btnAddRow.addEventHandler("onclick",this.btnAddRow_onclick,this);
            this.Div00.form.btnDeleteRow.addEventHandler("onclick",this.btnDeleteRow_onclick,this);
            this.Div00.form.grdForbiddenWord.addEventHandler("oncellclick",this.Div00_grdForbiddenWord_oncellclick,this);
            this.Div00.form.grdForbiddenWord.addEventHandler("onexpandup",this.Div00_grdForbiddenWord_onexpandup,this);
            this.Div00.form.sta004.addEventHandler("onclick",this.Static09_onclick,this);
            this.btnExportCompML.addEventHandler("onclick",this.btnExportCompML_onclick,this);
            this.dsForbiddenWord.addEventHandler("oncolumnchanged",this.dsModuleManage_oncolumnchanged,this);
        };
        this.loadIncludeScript("CMS_2030M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
