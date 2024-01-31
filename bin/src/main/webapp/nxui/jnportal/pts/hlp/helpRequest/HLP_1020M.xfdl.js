(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("HLP_1020M");
            this.set_titletext("요청 등록");
            this.set_cssclass("btn_WF_Sort");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,530);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"hlpRqstTtl\" type=\"STRING\" size=\"256\"/><Column id=\"hlpRqstrId\" type=\"STRING\" size=\"256\"/><Column id=\"hlpRqstrIdNm\" type=\"STRING\" size=\"256\"/><Column id=\"hlpRqstTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"hlpRqstTypeCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"hlpRqstDt\" type=\"STRING\" size=\"256\"/><Column id=\"hlpRqstRsnCd\" type=\"STRING\" size=\"256\"/><Column id=\"hlpSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"hlpSttsCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"hlpRqstCn\" type=\"STRING\" size=\"256\"/><Column id=\"hlpRqstAtchFileId\" type=\"STRING\" size=\"256\"/><Column id=\"hlpRqstNo\" type=\"STRING\" size=\"256\"/><Column id=\"hlpRqstrIdMember\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAskKindCbo", this);
            obj.set_updatecontrol("true");
            obj._setContents("<ColumnInfo><Column id=\"text\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"hlpRqstNo\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAskReasonCbo", this);
            obj.set_updatecontrol("true");
            obj._setContents("<ColumnInfo><Column id=\"text\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Static("Static34","0","-2","50","512",null,null,null,null,null,null,this);
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

            obj = new Div("DivRequestForm","50","29",null,"481","50",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Div01");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Static("Static10_00","0","44",null,"34","0",null,null,null,null,null,this.DivRequestForm.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_condition02box");
            obj.set_text("");
            this.DivRequestForm.addChild(obj.name, obj);

            obj = new Static("Static10_00_00","0","77",null,"34","0",null,null,null,null,null,this.DivRequestForm.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_condition02box");
            obj.set_text("");
            this.DivRequestForm.addChild(obj.name, obj);

            obj = new Static("Static10_00_00_00_00","0","110",null,"268","0",null,null,null,null,null,this.DivRequestForm.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_condition02box");
            obj.set_text("");
            this.DivRequestForm.addChild(obj.name, obj);

            obj = new Static("staTitle","0","44","150","34",null,null,null,null,null,null,this.DivRequestForm.form);
            obj.set_taborder("3");
            obj.set_text("제목");
            obj.set_cssclass("sta_WF_condition02_LEssential");
            this.DivRequestForm.addChild(obj.name, obj);

            obj = new Static("Static_essential","75%","44","150","34",null,null,null,null,null,null,this.DivRequestForm.form);
            obj.set_taborder("6");
            obj.set_text("요청자");
            obj.set_cssclass("sta_WF_condition02");
            this.DivRequestForm.addChild(obj.name, obj);

            obj = new Edit("edttitle","staTitle:10","48",null,"26","Static_essential:76",null,null,null,null,null,this.DivRequestForm.form);
            obj.set_taborder("4");
            obj.set_readonly("false");
            this.DivRequestForm.addChild(obj.name, obj);

            obj = new Static("Static_comboBox","0","77","150","34",null,null,null,null,null,null,this.DivRequestForm.form);
            obj.set_taborder("5");
            obj.set_text("요청분류");
            obj.set_cssclass("sta_WF_condition02_LEssential");
            this.DivRequestForm.addChild(obj.name, obj);

            obj = new Static("Static07_01_01_00_01_00_00",null,"19.55%","570","1","20",null,null,null,null,null,this.DivRequestForm.form);
            obj.set_taborder("7");
            obj.set_text("");
            obj.set_cssclass("sta_WF_borCondition02");
            this.DivRequestForm.addChild(obj.name, obj);

            obj = new Static("Static_textarea","0","109","150","268",null,null,null,null,null,null,this.DivRequestForm.form);
            obj.set_taborder("8");
            obj.set_text("요청내용");
            obj.set_cssclass("sta_WF_condition02_LEssential");
            this.DivRequestForm.addChild(obj.name, obj);

            obj = new TextArea("areaRqstCn","Static_textarea:10","114",null,"259","10",null,null,null,null,null,this.DivRequestForm.form);
            obj.set_taborder("9");
            this.DivRequestForm.addChild(obj.name, obj);

            obj = new Static("Static_essential03","75.00%","77","150","34",null,null,null,null,null,null,this.DivRequestForm.form);
            obj.set_taborder("24");
            obj.set_text("상태");
            obj.set_cssclass("sta_WF_condition02");
            this.DivRequestForm.addChild(obj.name, obj);

            obj = new Edit("edtStts","Static_essential03:10","81","125","26",null,null,null,null,null,null,this.DivRequestForm.form);
            obj.set_taborder("10");
            obj.set_inputtype("english,dot,alpha,number");
            obj.set_readonly("true");
            this.DivRequestForm.addChild(obj.name, obj);

            obj = new Static("Static10_00_00_00","6","376",null,"34","0",null,null,null,null,null,this.DivRequestForm.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_condition02box");
            obj.set_text("");
            this.DivRequestForm.addChild(obj.name, obj);

            obj = new Static("staFile","0","376","150","34",null,null,null,null,null,null,this.DivRequestForm.form);
            obj.set_taborder("15");
            obj.set_text("첨부파일");
            obj.set_cssclass("sta_WF_condition02_L");
            this.DivRequestForm.addChild(obj.name, obj);

            obj = new Edit("edtFile","staFile:10","380","302","26",null,null,null,null,null,null,this.DivRequestForm.form);
            obj.set_taborder("14");
            obj.set_readonly("true");
            this.DivRequestForm.addChild(obj.name, obj);

            obj = new Button("btnDownload","edtFile:10","380","85","26",null,null,null,null,null,null,this.DivRequestForm.form);
            obj.set_taborder("13");
            obj.set_text("다운로드");
            obj.set_cssclass("btn_WF_grdArrDown");
            this.DivRequestForm.addChild(obj.name, obj);

            obj = new Button("btnUpload","btnDownload:5","380","73","26",null,null,null,null,null,null,this.DivRequestForm.form);
            obj.set_taborder("12");
            obj.set_text("업로드");
            obj.set_cssclass("btn_WF_grdUpload");
            this.DivRequestForm.addChild(obj.name, obj);

            obj = new Static("staEnrollTitle","0","-27",null,"58","Static10_00:-500",null,null,null,null,null,this.DivRequestForm.form);
            obj.set_taborder("16");
            obj.set_text("요청등록");
            obj.set_cssclass("sta_WF_compTitle01");
            this.DivRequestForm.addChild(obj.name, obj);

            obj = new Button("btnDelete",null,"4","65","28","0",null,null,null,null,null,this.DivRequestForm.form);
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_Delete");
            obj.set_visible("true");
            obj.set_taborder("18");
            this.DivRequestForm.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"4","65","28","btnDelete:5",null,null,null,null,null,this.DivRequestForm.form);
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Save");
            obj.set_visible("true");
            obj.set_taborder("17");
            this.DivRequestForm.addChild(obj.name, obj);

            obj = new Combo("cboAskKind","Static_comboBox:10","81","215","26",null,null,null,null,null,null,this.DivRequestForm.form);
            obj.set_taborder("19");
            obj.set_innerdataset("dsAskKindCbo");
            obj.set_codecolumn("value");
            obj.set_datacolumn("text");
            obj.set_value("");
            obj.set_index("-1");
            this.DivRequestForm.addChild(obj.name, obj);

            obj = new Static("Static_essential01","25%","77","143","34",null,null,null,null,null,null,this.DivRequestForm.form);
            obj.set_taborder("20");
            obj.set_text("요청일");
            obj.set_cssclass("sta_WF_condition02");
            this.DivRequestForm.addChild(obj.name, obj);

            obj = new Edit("edtRqstDt","Static_essential01:10","81","182","26",null,null,null,null,null,null,this.DivRequestForm.form);
            obj.set_taborder("21");
            obj.set_readonly("true");
            this.DivRequestForm.addChild(obj.name, obj);

            obj = new Static("Static_essential02","50.00%","77","150","34",null,null,null,null,null,null,this.DivRequestForm.form);
            obj.set_taborder("22");
            obj.set_text("요청사유");
            obj.set_cssclass("sta_WF_condition02Essential");
            this.DivRequestForm.addChild(obj.name, obj);

            obj = new Combo("cboRqstRsn","Static_essential02:10","81","220","26",null,null,null,null,null,null,this.DivRequestForm.form);
            obj.set_taborder("23");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var DivRequestForm_form_cboRqstRsn_innerdataset = new nexacro.NormalDataset("DivRequestForm_form_cboRqstRsn_innerdataset", obj);
            DivRequestForm_form_cboRqstRsn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"codecolumn\">HLP-020-010</Col><Col id=\"datacolumn\">단순문의</Col></Row><Row><Col id=\"codecolumn\">HLP-020-020</Col><Col id=\"datacolumn\">업무문의</Col></Row><Row><Col id=\"codecolumn\">HLP-020-030</Col><Col id=\"datacolumn\">에러처리</Col></Row><Row><Col id=\"codecolumn\">HLP-020-040</Col><Col id=\"datacolumn\">데이터분석</Col></Row><Row><Col id=\"codecolumn\">HLP-020-050</Col><Col id=\"datacolumn\">데이터처리</Col></Row><Row><Col id=\"codecolumn\">HLP-020-060</Col><Col id=\"datacolumn\">프로세스개선</Col></Row><Row><Col id=\"codecolumn\">HLP-020-070</Col><Col id=\"datacolumn\">시스템분석</Col></Row><Row><Col id=\"codecolumn\">HLP-020-080</Col><Col id=\"datacolumn\">시스템개선</Col></Row></Rows>");
            obj.set_innerdataset(DivRequestForm_form_cboRqstRsn_innerdataset);
            obj.set_value("");
            obj.set_index("-1");
            this.DivRequestForm.addChild(obj.name, obj);

            obj = new Edit("edtrequestorId","Static_essential:10","48",null,"26","170",null,null,null,null,null,this.DivRequestForm.form);
            obj.set_taborder("25");
            obj.set_inputtype("english,dot,alpha,number");
            obj.set_readonly("true");
            this.DivRequestForm.addChild(obj.name, obj);

            obj = new Edit("edtrequestor","edtrequestorId:5","48",null,"26","37",null,null,null,null,null,this.DivRequestForm.form);
            obj.set_taborder("26");
            obj.set_inputtype("english,dot,alpha,number");
            obj.set_readonly("true");
            this.DivRequestForm.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.DivRequestForm.form
            obj = new Layout("default","",0,0,this.DivRequestForm.form,function(p){});
            this.DivRequestForm.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","DivRequestForm.form.edttitle","value","dsList","hlpRqstTtl");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","DivRequestForm.form.edtrequestorId","value","dsList","hlpRqstrIdMember");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","DivRequestForm.form.edtrequestor","value","dsList","hlpRqstrIdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","DivRequestForm.form.cboAskKind","value","dsList","hlpRqstTypeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","DivRequestForm.form.edtRqstDt","value","dsList","hlpRqstDt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","DivRequestForm.form.cboRqstRsn","value","dsList","hlpRqstRsnCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","DivRequestForm.form.edtStts","value","dsList","hlpSttsCdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","DivRequestForm.form.areaRqstCn","value","dsList","hlpRqstCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","DivRequestForm.form.edtFile","value","dsList","hlpRqstAtchFileId");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("HLP_1020M.xfdl","lib::common.xjs");
        this.registerScript("HLP_1020M.xfdl", function() {
        /**
        *  배너 등록
        *  MenuPath      온라인 헬프 > 요청 등록
        *  FileName      HLP_1020M.xfdl
        *  Creator 	     yuyr
        *  CreateDate    2023.12.05
        *  Desction      배너 조회 및 등록
        ************** 소스 수정 이력 ***********************************************
        *  date          Modifier    Description
        *******************************************************************************
        *  2023.12.06   yuyr 	 최초 생성
        *******************************************************************************/

        this.executeIncludeScript("lib::common.xjs"); /*include "lib::common.xjs"*/;

        this.hlpRqstNo = "";

        /***********************************************************************************************
        * FORM EVENT 영역(onload, onbeforeclose)
        /***********************************************************************************************/
        /**
         * description 화면 onload
        */
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnLoad(this);
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
        	this.gfnLoadCombo("loadCombo", "dsAskKindCbo=PTS:WORK_CATEGORY:C", "fnComboCallback");
        };

        /**
         * description 상세 조회
         */
        this.fnSearch = function()
        {
        	this.gfnTransaction("getHelpRequestManage", "hlp/helpRequest/getHelpRequestManage.do", "dsSearch", "dsList", "", "fnCallback");
        };

        /**
         * description 저장
         */
         this.fnSave = function()
        {
            if (!this.fnValidation()) {
                return;
            }
        	this.gfnTransaction("setHelpRequestManage", "hlp/helpRequest/setHelpRequestManage.do", "dsList", "", "", "fnCallback");
        };

        /**
         * description 삭제
         */
         this.fnDelete = function()
        {
        	this.gfnTransaction("deleteHelpRequestManage", "hlp/helpRequest/deleteHelpRequestManage", "dsList", "", "", "fnCallback");
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
        	var hlpRqstNo = (param == null || Eco.isEmpty(param.hlpRqstNo)) ? null : param.hlpRqstNo;

        	switch(svcId) {
        		case "loadCombo":
        			if(hlpRqstNo != null && hlpRqstNo != "") {
        				this.dsSearch.setColumn(0, "hlpRqstNo", hlpRqstNo);
        				this.fnSearch();
        			}
        			break;
        		default:
        			break;
        		}
        };

        /**
         * description Transaction CallBack 함수
        */
        this.fnCallback = function (svcId, errorCode, errorMsg)
        {
            switch (svcId) {
                case "getHelpRequestManage":
                    break;
                case "setHelpRequestManage":
                    if(this.callbackMsg == "success"){
                        this.gfnAlert("CM_MSG_SAVE_SUCCESS");  // 저장 되었습니다.
        				this.dsSearch.setColumn(0, "hlpRqstNo", this.hlpRqstNo);
        				this.fnSearch();
                    }else{
        				this.gfnAlert("CM_MSG_TEST_3");  		// 저장에 실패하였습니다.
        			}
                    break;
                case "deleteHelpRequestManage":
                    if(this.callbackMsg == "success"){
                        this.gfnAlert("CM_MSG_DELETE_SUCCESS");  // 삭제 되었습니다.
        				nexacro.getApplication().closeTab(this.getOwnerFrame().tabArgs.tabId); // 탭 닫기
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
        	this.fnBeforeSave();
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

        /************************************************************************************************
        * 사용자 FUNCTION 영역
        ************************************************************************************************/
        /**
         * description 저장 전 확인
        */
        this.fnBeforeSave = function ()
        {
        	if(this.dsList.rowcount == 0){
        		this.gfnAlert("CM_MSG_SAVE_NODATA");  	// 저장할 데이터가 없습니다.
        		return;
        	}

        	if (!this.gfnDsIsUpdated(this.dsList)) {
        		this.gfnAlert("CM_MSG_SAVE_NOCHANGE");  // 변경된 내역이 없습니다.
        		return;
        	}

            if (!this.fnValidation()) {
                return;
            }

            this.gfnAlert("CM_CFM_BEFORE_SAVE", "", "", {trueFunc: "fnSave", falseFunc: ""});  // 변경된 내역을 저장 하시겠습니까?
        };

        /**
         * description 유효성 체크
        */
         this.fnValidation = function ()
         {
            var args = [
         		["hlpRqstTtl","NULL|MAX_LEN:100","요청제목"],
        		["hlpRqstTypeCd", "NULL|MAX_LEN:20", "요청분류"],
        		["hlpRqstRsnCd", "NULL|MAX_LEN:20", "요청사유"],
        		["hlpRqstCn","NULL|MAX_LEN:2000","요청내용"],
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
            this.DivRequestForm.form.Static10_00_00_00_00.addEventHandler("onclick",this.Div01_Static10_00_00_00_00_onclick,this);
            this.DivRequestForm.form.Static_comboBox.addEventHandler("onclick",this.Div01_Static_comboBox_onclick,this);
            this.DivRequestForm.form.Static07_01_01_00_01_00_00.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.DivRequestForm.form.areaRqstCn.addEventHandler("oneditclick",this.TextArea01_oneditclick,this);
            this.DivRequestForm.form.areaRqstCn.addEventHandler("onchanged",this.Div01_TextArea01_00_onchanged,this);
            this.DivRequestForm.form.staEnrollTitle.addEventHandler("onclick",this.sta_title_onclick,this);
            this.DivRequestForm.form.btnDelete.addEventHandler("onclick",this.btn_delete_onclick,this);
            this.DivRequestForm.form.btnSave.addEventHandler("onclick",this.btn_save_onclick,this);
        };
        this.loadIncludeScript("HLP_1020M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
