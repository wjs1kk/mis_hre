(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CMS_2030P_01");
            this.set_titletext("게시판목록 조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(900,440);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsBoard", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"rowCheck\" type=\"STRING\" size=\"256\"/><Column id=\"boardNm\" type=\"STRING\" size=\"256\"/><Column id=\"boardType\" type=\"STRING\" size=\"256\"/><Column id=\"boardId\" type=\"STRING\" size=\"256\"/><Column id=\"sysNm\" type=\"STRING\" size=\"256\"/><Column id=\"sysId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divPopup","0","0","900","440",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staPopupTitle","0","0",null,"50","0",null,null,null,null,null,this.divPopup.form);
            obj.set_taborder("0");
            obj.set_text("게시판 목록 조회");
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

            obj = new Static("Static04_00_00_01_00","0",null,null,"23","0","60",null,null,null,null,this.divPopup.form);
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

            obj = new Static("Static04_00_00_01_00_00","0",null,null,"25","0","0",null,null,null,null,this.divPopup.form);
            obj.set_taborder("5");
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
            obj.set_taborder("6");
            this.divPopup.addChild(obj.name, obj);

            obj = new Static("sta_g001","449","393","3","34",null,null,null,null,null,null,this.divPopup.form);
            obj.set_taborder("7");
            obj.set_text("w12");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divPopup.addChild(obj.name, obj);

            obj = new Static("Static04_00_00","30","97","60","18",null,null,null,null,null,null,this.divPopup.form);
            obj.set_taborder("8");
            obj.set_text("h 18");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divPopup.addChild(obj.name, obj);

            obj = new Static("staGridRowCnt","120","86","149","27",null,null,null,null,null,null,this.divPopup.form);
            obj.set_taborder("9");
            obj.set_text("(총 0건)");
            obj.set_cssclass("sta_WF_subResult");
            this.divPopup.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_00","130","50","60","45",null,null,null,null,null,null,this.divPopup.form);
            obj.set_taborder("10");
            obj.set_text("h 45");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divPopup.addChild(obj.name, obj);

            obj = new Static("Static09","30","75","169","27",null,null,null,null,null,null,this.divPopup.form);
            obj.set_taborder("11");
            obj.set_text("검색결과");
            obj.set_cssclass("sta_WF_subTitle01");
            this.divPopup.addChild(obj.name, obj);

            obj = new Grid("grdBoard","30","119",null,null,"30","166",null,null,null,null,this.divPopup.form);
            obj.set_taborder("12");
            obj.set_binddataset("dsBoard");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_autoupdatetype("itemselect");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\" band=\"left\"/><Column size=\"200\"/><Column size=\"200\"/></Columns><Rows><Row size=\"46\" band=\"head\"/><Row size=\"33\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"게시판명\"/><Cell col=\"2\" text=\"게시판 유형\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" textAlign=\"center\" text=\"bind:rowCheck\"/><Cell col=\"1\" text=\"bind:boardNm\" edittype=\"none\"/><Cell col=\"2\" text=\"bind:boardType\"/></Band></Format></Formats>");
            this.divPopup.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"76","65","28","40",null,null,null,null,null,this.divPopup.form);
            obj.set_text("조회");
            obj.set_cssclass("");
            obj.set_taborder("13");
            this.divPopup.addChild(obj.name, obj);

            obj = new Button("btn_add","384","389","65","28",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_icoAdd");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divPopup.form
            obj = new Layout("default","",0,0,this.divPopup.form,function(p){});
            this.divPopup.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divPopup.form.divForm.form.edt_001","value","dsSearch","searchUserId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divPopup.form.divForm.form.edt_003","value","dsSearch","userNm");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("CMS_2030P_01.xfdl","lib::common.xjs");
        this.registerScript("CMS_2030P_01.xfdl", function() {
        /**
        *  게시글목록 조회 팝업
        *  MenuPath      시스템 관리 - 관리메뉴 - 금지 단어 관리 팝업
        *  FileName      CMS_2030P_01.xfdl
        *  Creator 	     moonsj
        *  CreateDate    2023.04.07
        *  Desction      사용자 조회
        ************** 소스 수정 이력 ***********************************************
        *  date          Modifier    Description
        *******************************************************************************
        *  2023.04.07    moonsj 	 최초 생성
        *  2023.04.21    parksw      폼 ID 변경(2030M_01 -> 2030P_01)
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
        	this.fnBoardSearch();
        };

        /************************************************************************************************
        * TRANSACTION 서비스 호출 처리
        ************************************************************************************************/
        /**
         * description 조회
        */
        this.fnBoardSearch = function()
        {
        	this.gfnTransaction("getBoardList", "cms/getBoardList.do", "dsBoard", "dsBoard", "", "fnCallBack");
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
        		case "getBoardList":
        			// 총 건수 계산
        			this.gfnRowCount(this.dsBoard, this.divPopup.form.stc_gridRowCnt);
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
        this.btn_search_onclick = function(obj,e)
        {
        	this.fnBoardSearch();
        };

        /**
         * description 추가버튼
        */
        this.btn_add_onclick = function(obj,e)
        {
        	if(!this.gfnIsGridChecked(this.dsBoard, "rowCheck")){
        		this.gfnAlert("목록을 체크해주세요");
        		return;
        	}
        	this.opener.dsForbiddenWord.setColumn(this.opener.dsForbiddenWord.rowposition, "sysId", this.dsBoard.getColumn(this.dsBoard.rowposition, "sysId"));
        	this.opener.dsForbiddenWord.setColumn(this.opener.dsForbiddenWord.rowposition, "boardId", this.dsBoard.getColumn(this.dsBoard.rowposition, "boardId"));
        	this.opener.dsForbiddenWord.setColumn(this.opener.dsForbiddenWord.rowposition, "sysNm", this.dsBoard.getColumn(this.dsBoard.rowposition, "sysNm"));
        	this.opener.dsForbiddenWord.setColumn(this.opener.dsForbiddenWord.rowposition, "boardNm", this.dsBoard.getColumn(this.dsBoard.rowposition, "boardNm"));

        	// pat 3. 임의의 Object Return / dataset 하나의 row는 gfnGetRowObj 이용
        	var oRtn = new Object();
        	oRtn.CONFIRM = "Y";
        	this.gfnPopupClose(oRtn);
        	this.close();
        };

        /**
         * description 행 더블클릭 이벤트
        */
        this.divPopup_grdBoard_oncelldblclick = function(obj,e)
        {
            {
        	this.opener.dsForbiddenWord.setColumn(this.opener.dsForbiddenWord.rowposition, "sysId", this.dsBoard.getColumn(this.dsBoard.rowposition, "sysId"));
        	this.opener.dsForbiddenWord.setColumn(this.opener.dsForbiddenWord.rowposition, "boardId", this.dsBoard.getColumn(this.dsBoard.rowposition, "boardId"));
        	this.opener.dsForbiddenWord.setColumn(this.opener.dsForbiddenWord.rowposition, "sysNm", this.dsBoard.getColumn(this.dsBoard.rowposition, "sysNm"));
        	this.opener.dsForbiddenWord.setColumn(this.opener.dsForbiddenWord.rowposition, "boardNm", this.dsBoard.getColumn(this.dsBoard.rowposition, "boardNm"));
        	this.close();
            };

        };

        /**
         * description 닫기버튼
        */
        this.divPopup_btnPopupClose_onclick = function(obj,e)
        {
        	this.close();
        };

        /************************************************************************************************
        * 사용자 FUNCTION 영역
        ************************************************************************************************/


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divPopup.form.Static04_00_00_01.addEventHandler("onclick",this.Static31_onclick,this);
            this.divPopup.form.Static04_00_00_01_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.divPopup.form.Static04_00_00_01_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.divPopup.form.btnPopupClose.addEventHandler("onclick",this.divPopup_btnPopupClose_onclick,this);
            this.divPopup.form.Static04_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.divPopup.form.Static04_00_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.divPopup.form.Static09.addEventHandler("onclick",this.Static09_onclick,this);
            this.divPopup.form.grdBoard.addEventHandler("oncelldblclick",this.divPopup_grdBoard_oncelldblclick,this);
            this.divPopup.form.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.btn_add.addEventHandler("onclick",this.btn_add_onclick,this);
        };
        this.loadIncludeScript("CMS_2030P_01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
