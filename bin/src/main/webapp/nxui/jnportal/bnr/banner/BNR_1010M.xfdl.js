(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("BNR_1010M");
            this.set_titletext("컴포넌트");
            this.set_cssclass("btn_WF_Sort");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,530);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"bnrNm\" type=\"STRING\" size=\"256\"/><Column id=\"bnrUrl\" type=\"STRING\" size=\"256\"/><Column id=\"bnrId\" type=\"STRING\" size=\"256\"/><Column id=\"rgstDt\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"bnrOrd\" type=\"STRING\" size=\"256\"/><Column id=\"rowNum\" type=\"STRING\" size=\"256\"/><Column id=\"rgstId\" type=\"STRING\" size=\"256\"/><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"memberId\" type=\"STRING\" size=\"256\"/><Column id=\"bnrImg\" type=\"STRING\" size=\"256\"/><Column id=\"bnrDesc\" type=\"STRING\" size=\"256\"/><Column id=\"updtrDt\" type=\"STRING\" size=\"256\"/><Column id=\"bnrImgFile\" type=\"STRING\" size=\"256\"/><Column id=\"rgstrId\" type=\"STRING\" size=\"256\"/><Column id=\"rowStatus\" type=\"STRING\" size=\"256\"/><Column id=\"rowCheck\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUseCbo", this);
            obj.set_updatecontrol("true");
            obj._setContents("<ColumnInfo><Column id=\"text\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"bnrId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static04","1810","0","60","20",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("h 20");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static02",null,"0","50","3275","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("W\r\n 50");
            obj.set_visible("false");
            obj.set_background("antiquewhite");
            obj.set_color("blue");
            this.addChild(obj.name, obj);

            obj = new Static("Static34","0","-2","50","400",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("W 50");
            obj.set_visible("false");
            obj.set_background("antiquewhite");
            obj.set_color("blue");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_02","45","379","60","10",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Div("DivBnrForm","50","29",null,"369","50",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Div01");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Static("Static10_00","0","44",null,"34","0",null,null,null,null,null,this.DivBnrForm.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_condition02box");
            obj.set_text("");
            this.DivBnrForm.addChild(obj.name, obj);

            obj = new Static("Static10_00_00","0","77",null,"34","0",null,null,null,null,null,this.DivBnrForm.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_condition02box");
            obj.set_text("");
            this.DivBnrForm.addChild(obj.name, obj);

            obj = new Static("Static10_00_00_00_00","0","110",null,"143","0",null,null,null,null,null,this.DivBnrForm.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_condition02box");
            obj.set_text("");
            this.DivBnrForm.addChild(obj.name, obj);

            obj = new Static("Static_basic","0","44","150","34",null,null,null,null,null,null,this.DivBnrForm.form);
            obj.set_taborder("3");
            obj.set_text("배너 ID");
            obj.set_cssclass("sta_WF_condition02_LEssential");
            this.DivBnrForm.addChild(obj.name, obj);

            obj = new Edit("edtBnrId","Static_basic:10","48","159","26",null,null,null,null,null,null,this.DivBnrForm.form);
            obj.set_taborder("4");
            this.DivBnrForm.addChild(obj.name, obj);

            obj = new Static("Static_comboBox","0","77","150","34",null,null,null,null,null,null,this.DivBnrForm.form);
            obj.set_taborder("5");
            obj.set_text("배너링크 URL");
            obj.set_cssclass("sta_WF_condition02_LEssential");
            this.DivBnrForm.addChild(obj.name, obj);

            obj = new Static("Static_essential","40%","44","150","34",null,null,null,null,null,null,this.DivBnrForm.form);
            obj.set_taborder("6");
            obj.set_text("배너명");
            obj.set_cssclass("sta_WF_condition02");
            this.DivBnrForm.addChild(obj.name, obj);

            obj = new Edit("edtBnrNm","Static_essential:9","48",null,"26","290",null,null,null,null,null,this.DivBnrForm.form);
            obj.set_taborder("7");
            this.DivBnrForm.addChild(obj.name, obj);

            obj = new Static("Static07_01_01_00_01_00_00",null,"19.55%","570","1","20",null,null,null,null,null,this.DivBnrForm.form);
            obj.set_taborder("8");
            obj.set_text("");
            obj.set_cssclass("sta_WF_borCondition02");
            this.DivBnrForm.addChild(obj.name, obj);

            obj = new Static("Static_textarea","0","110","150","143",null,null,null,null,null,null,this.DivBnrForm.form);
            obj.set_taborder("9");
            obj.set_text("배너설명");
            obj.set_cssclass("sta_WF_condition02_LEssential");
            this.DivBnrForm.addChild(obj.name, obj);

            obj = new TextArea("textBnr","Static_textarea:10","112",null,"137","10",null,null,null,null,null,this.DivBnrForm.form);
            obj.set_taborder("10");
            this.DivBnrForm.addChild(obj.name, obj);

            obj = new Edit("edtBnrUrl","Static_comboBox:10","81",null,"26","290",null,null,null,null,null,this.DivBnrForm.form);
            obj.set_taborder("11");
            this.DivBnrForm.addChild(obj.name, obj);

            obj = new Static("Static10_00_00_00","6","252",null,"34","0",null,null,null,null,null,this.DivBnrForm.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_condition02box");
            obj.set_text("");
            this.DivBnrForm.addChild(obj.name, obj);

            obj = new Button("Button16","562","255","73","26",null,null,null,null,null,null,this.DivBnrForm.form);
            obj.set_taborder("13");
            obj.set_text("업로드");
            obj.set_cssclass("btn_WF_grdUpload");
            this.DivBnrForm.addChild(obj.name, obj);

            obj = new Button("Button15","472","255","85","26",null,null,null,null,null,null,this.DivBnrForm.form);
            obj.set_taborder("14");
            obj.set_text("다운로드");
            obj.set_cssclass("btn_WF_grdArrDown");
            this.DivBnrForm.addChild(obj.name, obj);

            obj = new Edit("edtBnrImg","160","255","302","26",null,null,null,null,null,null,this.DivBnrForm.form);
            obj.set_taborder("15");
            obj.set_readonly("true");
            this.DivBnrForm.addChild(obj.name, obj);

            obj = new Static("Static_basic00_00","0","252","150","34",null,null,null,null,null,null,this.DivBnrForm.form);
            obj.set_taborder("16");
            obj.set_text("배너 이미지");
            obj.set_cssclass("sta_WF_condition02_L");
            this.DivBnrForm.addChild(obj.name, obj);

            obj = new Static("Static10_00_01","0","285",null,"34","0",null,null,null,null,null,this.DivBnrForm.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_condition02box");
            obj.set_text("");
            this.DivBnrForm.addChild(obj.name, obj);

            obj = new Static("Static_basic00","0","285","150","34",null,null,null,null,null,null,this.DivBnrForm.form);
            obj.set_taborder("17");
            obj.set_text("순서");
            obj.set_cssclass("sta_WF_condition02_LEssential");
            this.DivBnrForm.addChild(obj.name, obj);

            obj = new Edit("edtOrg","160","290","302","26",null,null,null,null,null,null,this.DivBnrForm.form);
            obj.set_taborder("19");
            this.DivBnrForm.addChild(obj.name, obj);

            obj = new Static("Static_essential00","39.58%","285","150","34",null,null,null,null,null,null,this.DivBnrForm.form);
            obj.set_taborder("20");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_condition02");
            this.DivBnrForm.addChild(obj.name, obj);

            obj = new Combo("Combo00","Static_essential00:10","289","215","26",null,null,null,null,null,null,this.DivBnrForm.form);
            obj.set_taborder("21");
            obj.set_innerdataset("dsUseCbo");
            obj.set_codecolumn("value");
            obj.set_datacolumn("text");
            obj.set_value("");
            obj.set_index("-1");
            this.DivBnrForm.addChild(obj.name, obj);

            obj = new Static("staTitle","0","-27",null,"58","Static10_00:-500",null,null,null,null,null,this.DivBnrForm.form);
            obj.set_taborder("22");
            obj.set_text("배너등록");
            obj.set_cssclass("sta_WF_compTitle01");
            this.DivBnrForm.addChild(obj.name, obj);

            obj = new Button("btnDelete",null,"4","65","28","0",null,null,null,null,null,this.DivBnrForm.form);
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_Delete");
            obj.set_visible("true");
            obj.set_taborder("24");
            this.DivBnrForm.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"4","65","28","btnDelete:5",null,null,null,null,null,this.DivBnrForm.form);
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Save");
            obj.set_visible("true");
            obj.set_taborder("23");
            this.DivBnrForm.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.DivBnrForm.form
            obj = new Layout("default","",0,0,this.DivBnrForm.form,function(p){});
            this.DivBnrForm.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","DivBnrForm.form.edtBnrId","value","dsList","bnrId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","DivBnrForm.form.edtBnrNm","value","dsList","bnrNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","DivBnrForm.form.edtBnrUrl","value","dsList","bnrUrl");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","DivBnrForm.form.textBnr","value","dsList","bnrDesc");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","DivBnrForm.form.edtBnrImg","value","dsList","bnrImg");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","DivBnrForm.form.edtOrg","value","dsList","bnrOrd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","DivBnrForm.form.Combo00","value","dsList","useYn");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("BNR_1010M.xfdl","lib::common.xjs");
        this.registerScript("BNR_1010M.xfdl", function() {
        /**
        *  배너 등록
        *  MenuPath      관리 메뉴 > 배너 및 팝업관리
        *  FileName      BNR_1010M.xfdl
        *  Creator 	     yuyr
        *  CreateDate    2023.11.22
        *  Desction      배너 조회 및 등록
        ************** 소스 수정 이력 ***********************************************
        *  date          Modifier    Description
        *******************************************************************************
        *  2023.11.22   yuyr 	 최초 생성
        *******************************************************************************/

        this.executeIncludeScript("lib::common.xjs"); /*include "lib::common.xjs"*/;
        this.bnrId = "";

        /***********************************************************************************************
        * FORM EVENT 영역(onload, onbeforeclose)
        /***********************************************************************************************/
        /**
         * description 화면 onload
        */
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnLoad(this);
        	var param = this.getOwnerFrame().tabArgs.param;
        	var bnrId = (param == null || Eco.isEmpty(param.bnrId)) ? null : param.bnrId;
            if (bnrId != null && bnrId != "") {
        		this.DivBnrForm.form.staTitle.set_text("배너 상세 조회");
        		this.dsList.setColumn(0, "rowStatus", "updated");
        		this.DivBnrForm.form.btnDelete.set_visible(true);
        	} else {                // 신규화면
        		this.dsList.setColumn(0, "rowStatus", "inserted");
        		this.DivBnrForm.form.btnDelete.set_visible(false);
        	}
            this.gfnLoadCombo("loadCombo", "dsUseCbo=PMS:SM:USE_YN", "fnComboCallback");
        };

        /************************************************************************************************
        * TRANSACTION 서비스 호출 처리
        ************************************************************************************************/

        /**
         * description 상세 조회
         */

        this.fnSearch = function()
        {
        	this.gfnTransaction("getBannerManageItem", "bnr/banner/getBannerManageItem.do", "dsSearch", "dsList", "", "fnCallback");
        };

        /**
         * description 저장
         */
         this.fnSave = function()
        {
        	this.gfnTransaction("setBannerManageItem", "bnr/banner/setBannerManageItem.do", "dsList", "", "", "fnCallback");
        };


        /**
         * description 삭제
         */
         this.fnDelete = function()
        {
        	this.dsList.setColumn(0, "rowStatus", "deleted");
        	this.gfnTransaction("deleteBannerManageItem", "bnr/banner/deleteBannerManageItem.do", "dsList", "", "", "fnCallback");
        };

        /************************************************************************************************
         * CALLBACK 콜백 처리부분(Transaction, Popup)
         ************************************************************************************************/
         /**
         * description 콤보 loadCombo
        */

        this.fnComboCallback = function (svcId, errorCode, errorMsg)
        {
        	var param = this.getOwnerFrame().tabArgs.param;
        	var bnrId = (param == null || Eco.isEmpty(param.bnrId)) ? null : param.bnrId;

            if (bnrId != null && bnrId != "") {
                this.dsSearch.setColumn(0, "bnrId", bnrId);
                this.fnSearch();
        	} else {
        		// 기본값을 설정
        		this.dsList.setColumn(0, "useYn", "Y");
        	}
        };

        /**
         * description Transaction CallBack 함수
        */
        this.fnCallback = function (svcId, errorCode, errorMsg)
        {
            switch (svcId) {
                case "getBannerManageItem":
                    break;
                case "setBannerManageItem":
                    if(this.callbackMsg == "success"){
                        this.gfnAlert("CM_MSG_SAVE_SUCCESS");  // 저장 되었습니다.

        				if(this.bnrId){
        					this.dsSearch.setColumn(0, "bnrId", this.bnrId);
        					this.fnSearch();
        				}else{
        					alert("배너ID가 없습니다.");
        				}
                    }
                    break;
                case "deleteBannerManageItem":
                    if(this.callbackMsg == "success"){
                        this.gfnAlert("CM_MSG_DELETE_SUCCESS");  // 삭제 되었습니다.
        				this.dsList.clearData();
         			    this.dsList.addRow();
                    }
        		default:
                    break;
            }
        };

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        /**
         * description 저장 버튼 클릭
        */

        this.btn_save_onclick = function(obj,e)
        {
        	if (!this.fnValidate()) {		// 그리드 필수값 체크
        		return;
            }

        	this.gfnAlert("CM_CFM_BEFORE_SAVE", "", "", {trueFunc: "fnSave", falseFunc: ""});  // 변경된 내역을 저장 하시겠습니까?
        	return;
        };

        /**
         * description 삭제 버튼 클릭
        */
        this.btn_delete_onclick = function(obj,e)
        {
        	// 행 갯수 count
        	var cnt = 0;
        	for(var i = 0; i < this.dsList.rowcount; i++){
        		if(this.dsList.getColumn(i, "rowCheck") == 1){
        			cnt++;
        		}
        	}
        	this.gfnAlert("CM_CFM_DELETE", "", "", {trueFunc: "fnDelete", falseFunc: ""}); // 삭제하시겠습니까?
        };

        // 	var param = this.getOwnerFrame().tabArgs.param;
        // 	var bnrId = (param == null || Eco.isEmpty(param.bnrId)) ? null : param.bnrId;
        //
        //     if (bnrId) {
        //         this.fnDelete();
        //     }

        /************************************************************************************************
        * 사용자 FUNCTION 영역
        ************************************************************************************************/
        this.fnValidate = function ()
        {
        	this.DivBnrForm.form.edtBnrId.updateToDataset();
        	this.DivBnrForm.form.edtBnrNm.updateToDataset();
        	this.DivBnrForm.form.edtBnrUrl.updateToDataset();
        	this.DivBnrForm.form.textBnr.updateToDataset();
        	this.DivBnrForm.form.edtBnrImg.updateToDataset();
        	this.DivBnrForm.form.edtOrg.updateToDataset();

             if (!this.gfnDsIsUpdated(this.dsList)) {
         		this.gfnAlert("CM_MSG_SAVE_NOCHANGE");  // 변경된 내역이 없습니다.
         		return false;
             }

             var args = [
         		["bnrId","MAX_LEN:20","배너ID"],
        		["bnrNm", "MAX_LEN:50", "배너명"],
        		["bnrUrl", "MAX_LEN:2000", "배너 URL"],
         		["bnrOrd", "NULL", "정렬 순서"]
            ];

        	if (!this.gfnCheckGrid(this.dsList, args, "")) {
                return false;
            }

        	return true;
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.Static04.addEventHandler("onclick",this.Static31_onclick,this);
            this.Static02.addEventHandler("onclick",this.Static02_onclick,this);
            this.Static34.addEventHandler("onclick",this.Static02_onclick,this);
            this.Static04_00_00_02.addEventHandler("onclick",this.Static31_onclick,this);
            this.DivBnrForm.form.Static10_00_00_00_00.addEventHandler("onclick",this.Div01_Static10_00_00_00_00_onclick,this);
            this.DivBnrForm.form.Static_comboBox.addEventHandler("onclick",this.Div01_Static_comboBox_onclick,this);
            this.DivBnrForm.form.Static07_01_01_00_01_00_00.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.DivBnrForm.form.textBnr.addEventHandler("oneditclick",this.TextArea01_oneditclick,this);
            this.DivBnrForm.form.textBnr.addEventHandler("onchanged",this.Div01_TextArea01_00_onchanged,this);
            this.DivBnrForm.form.staTitle.addEventHandler("onclick",this.sta_title_onclick,this);
            this.DivBnrForm.form.btnDelete.addEventHandler("onclick",this.btn_delete_onclick,this);
            this.DivBnrForm.form.btnSave.addEventHandler("onclick",this.btn_save_onclick,this);
        };
        this.loadIncludeScript("BNR_1010M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
