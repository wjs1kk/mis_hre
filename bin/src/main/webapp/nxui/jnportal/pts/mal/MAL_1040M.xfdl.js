(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("MAL_1040M");
            this.set_titletext("메일 템플릿 등록");
            this.set_cssclass("btn_WF_Sort");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,580);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj.set_updatecontrol("true");
            obj._setContents("<ColumnInfo><Column id=\"emlTmpltId\" type=\"STRING\" size=\"256\"/><Column id=\"emlTmpltNm\" type=\"STRING\" size=\"256\"/><Column id=\"emlTmpltCn\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"rowCheck\" type=\"STRING\" size=\"256\"/><Column id=\"rowStatus\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj.set_updatecontrol("true");
            obj._setContents("<ColumnInfo><Column id=\"emlTmpltId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divTop","50","73",null,"468","50",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div01");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Static("staTop","0","0",null,"34","0",null,null,null,null,null,this.divTop.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_condition02box");
            obj.set_text("");
            this.divTop.addChild(obj.name, obj);

            obj = new Static("staMid","0","staTop:0",null,"400","0",null,null,null,null,null,this.divTop.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_condition02box");
            obj.set_text("");
            this.divTop.addChild(obj.name, obj);

            obj = new Static("staEmlId","0","0","150","34",null,null,null,null,null,null,this.divTop.form);
            obj.set_taborder("2");
            obj.set_text("템플릿 ID");
            obj.set_cssclass("sta_WF_condition02_LEssential");
            this.divTop.addChild(obj.name, obj);

            obj = new Edit("edtEmlId","staEmlId:10","4","200","26",null,null,null,null,null,null,this.divTop.form);
            obj.set_taborder("3");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divTop.addChild(obj.name, obj);

            obj = new Static("staEmlTtl","455","0","150","34",null,null,null,null,null,null,this.divTop.form);
            obj.set_taborder("4");
            obj.set_text("템플릿 명");
            obj.set_cssclass("sta_WF_condition02");
            this.divTop.addChild(obj.name, obj);

            obj = new Edit("edtEmlTtl","staEmlTtl:10","4","600","26",null,null,null,null,null,null,this.divTop.form);
            obj.set_taborder("5");
            obj.set_readonly("false");
            this.divTop.addChild(obj.name, obj);

            obj = new Static("staSndCn","0","34","150","400",null,null,null,null,null,null,this.divTop.form);
            obj.set_taborder("6");
            obj.set_text("메일 발송 내용");
            obj.set_cssclass("sta_WF_condition02_LEssential");
            this.divTop.addChild(obj.name, obj);

            obj = new TextArea("textSndCn","staSndCn:10","38",null,"392","20",null,null,null,null,null,this.divTop.form);
            obj.set_taborder("7");
            this.divTop.addChild(obj.name, obj);

            obj = new Static("staTop00","0",null,null,"34","0","0",null,null,null,null,this.divTop.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_condition02box");
            obj.set_text("");
            this.divTop.addChild(obj.name, obj);

            obj = new Combo("cboSearch","160",null,"200","26",null,"4",null,null,null,null,this.divTop.form);
            obj.set_taborder("9");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divTop_form_cboSearch_innerdataset = new nexacro.NormalDataset("divTop_form_cboSearch_innerdataset", obj);
            divTop_form_cboSearch_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">사용</Col><Col id=\"codecolumn\">Y</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(divTop_form_cboSearch_innerdataset);
            obj.set_text("사용");
            obj.set_value("Y");
            obj.set_index("0");
            this.divTop.addChild(obj.name, obj);

            obj = new Static("staEmlId00","0","434","150","34",null,null,null,null,null,null,this.divTop.form);
            obj.set_taborder("10");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_condition02_LEssential");
            this.divTop.addChild(obj.name, obj);

            obj = new Static("staTitle","50","0",null,"58","1420",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("메일 템플릿 등록");
            obj.set_cssclass("sta_WF_compTitle01");
            this.addChild(obj.name, obj);

            obj = new Button("btnDelete",null,null,"65","28","50","divTop:5",null,null,null,null,this);
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_Delete");
            obj.set_visible("true");
            obj.set_taborder("3");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave",null,null,"65","28","btnDelete:5","divTop:5",null,null,null,null,this);
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Save");
            obj.set_visible("true");
            obj.set_taborder("2");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divTop.form
            obj = new Layout("default","",0,0,this.divTop.form,function(p){});
            this.divTop.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","divTop.form.edtEmlId","value","dsList","emlTmpltId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divTop.form.edtEmlTtl","value","dsList","emlTmpltNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divTop.form.cboSearch","value","dsList","useYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divTop.form.textSndCn","value","dsList","emlTmpltCn");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("MAL_1040M.xfdl","lib::common.xjs");
        this.registerScript("MAL_1040M.xfdl", function() {
        /**
        *  메일템플릿 등록
        *  MenuPath      메일발송관리 - 메일템플릿 등록
        *  FileName      MAL_1040M.xfdl
        *  Creator 	     kangjw
        *  CreateDate    2023.12.12
        *  Desction      메일템플릿 등록
        ************** 소스 수정 이력 ***********************************************
        *  date          Modifier    Description
        *******************************************************************************
        *  2023.12.12   kangjw	 	 최초 생성
        *******************************************************************************/

        this.executeIncludeScript("lib::common.xjs"); /*include "lib::common.xjs"*/;

        var emlTmpltId = this.getOwnerFrame().tabArgs.param.emlTmpltId;
        /***********************************************************************************************
        * FORM EVENT 영역(onload, onbeforeclose)
        /***********************************************************************************************/
        /**
         * description 화면 onload
        */
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnLoad(this);
        	this.dsList.setColumn(0, "useYn", 'Y');
        	if(emlTmpltId != null){
        		this.dsSearch.setColumn(0, "emlTmpltId", emlTmpltId);
        		this.btnDelete.set_enable(true);
        		this.fnSearch();
        	}
        };

        /************************************************************************************************
        * TRANSACTION 서비스 호출 처리
        ************************************************************************************************/
        /**
         * description 저장
        */
        this.fnSave = function ()
        {
        	var strSvcId    = "setTmpltSave";
        	var strSvcUrl   = "mal/emlSndMaster/setTmpltSave.do";
        	var inData      = "dsList";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        /**
         * description 수정
        */
        this.fnUpdate = function ()
        {
        	var strSvcId    = "setTmpltUpdate";
        	var strSvcUrl   = "mal/emlSndMaster/setTmpltUpdate.do";
        	var inData      = "dsList";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        /**
         * description 삭제
        */
        this.fnDelete = function ()
        {
        	var strSvcId    = "setTmpltDelete";
        	var strSvcUrl   = "mal/emlSndMaster/setTmpltDelete.do";
        	var inData      = "dsList";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        /**
         * description 조회
        */
        this.fnSearch = function ()
        {
        	var strSvcId    = "setTmpltDtl";
        	var strSvcUrl   = "mal/emlSndMaster/setTmpltDtl.do";
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
        this.fnCallback = function (svcId, errorCode, errorMsg)
        {
        	var param = this.getOwnerFrame().tabArgs.param;
        	emlTmpltId = (param == null || Eco.isEmpty(param.emlTmpltId)) ? null : param.emlTmpltId;

            switch (svcId) {
                case "setTmpltSave":
        			if(this.callbackMsg == "success"){
        				this.gfnAlert("CM_MSG_SAVE_SUCCESS");  	// 저장 되었습니다.
        				this.dsSearch.setColumn(0, "emlTmpltId", emlTmpltId);
        				this.dsSearch();
        			} else {
        				this.gfnAlert("CM_MSG_TEST_3");  		// 저장에 실패하였습니다.
        			}
                    break;
        		case "setTmpltDtl":
        			break;
        		case "setTmpltUpdate":
        			if(this.callbackMsg == "success"){
        				this.gfnAlert("CM_MSG_SAVE_SUCCESS");  	// 저장 되었습니다.
        			} else {
        				this.gfnAlert("CM_MSG_TEST_3");  		// 저장에 실패하였습니다.
        			}
        			break;
        		case "setTmpltDelete":
        			if(this.callbackMsg == "success"){
        				this.gfnAlert("CM_MSG_DELETE_SUCCESS");  	// 삭제
        			}
        			break;
        		default:
                    break;
            }
        };

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        this.btnSave_onclick = function(obj,e)
        {
        	this.fnValidation();
        };

        this.btnDelete_onclick = function(obj,e)
        {
        	this.gfnAlert("CM_CFM_DELETE", "", "", {trueFunc: "fnDelete", falseFunc: ""});
        };
        /************************************************************************************************
        * 사용자 FUNCTION 영역
        ************************************************************************************************/
        this.fnValidation = function() {

        	if(this.dsList.getColumn(0,"emlTmpltNm") == ""){
        		this.gfnAlert("CM_MSG_SAVE_REQUIRE", ["템플릿 명"]);
        		return false;
        	} else if(this.dsList.getColumn(0,"emlTmpltCn") == ""){
        		this.gfnAlert("CM_MSG_SAVE_REQUIRE", ["메일 발송 내용"]);
        		return false;
        	} else if(this.dsList.getColumn(0,"useYn") == ""){
        		this.gfnAlert("CM_MSG_SAVE_REQUIRE", ["사용여부"]);
        		return false;
        	} else if(this.dsList.getColumn(0,"emlTmpltNm") == ""
        				&& this.dsList.getColumn(0,"emlTmpltCn") == ""
        				&& this.dsList.getColumn(0,"useYn") == ""){
        		this.gfnAlert("CM_MSG_SAVE_NODATA");
        		return false;
        	} else if (!this.gfnIsUpdated(this.dsList)){
        		this.gfnAlert("CM_MSG_SAVE_NOCHANGE");
        		return false;
        	} else {
        		if(emlTmpltId == null){
        			this.gfnAlert("CM_CFM_BEFORE_SAVE", "", "", {trueFunc: "fnSave", falseFunc: ""});  // 변경된 내역을 저장 하시겠습니까?
        		} else this.gfnAlert("CM_CFM_BEFORE_SAVE", "", "", {trueFunc: "fnUpdate", falseFunc: ""});  // 변경된 내역을 저장 하시겠습니까?
        	}

        }



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divTop.form.staMid.addEventHandler("onclick",this.Div01_Static10_00_00_00_00_onclick,this);
            this.divTop.form.textSndCn.addEventHandler("oneditclick",this.TextArea01_oneditclick,this);
            this.divTop.form.textSndCn.addEventHandler("onchanged",this.Div01_TextArea01_00_onchanged,this);
            this.staTitle.addEventHandler("onclick",this.sta_title_onclick,this);
            this.btnDelete.addEventHandler("onclick",this.btnDelete_onclick,this);
            this.btnSave.addEventHandler("onclick",this.btnSave_onclick,this);
        };
        this.loadIncludeScript("MAL_1040M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
