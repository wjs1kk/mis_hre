(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("hre_3050M");
            this.set_titletext("New Form");
            this.set_background("white");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,961);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"rowCheck\" type=\"STRING\" size=\"256\"/><Column id=\"EVAL_ID\" type=\"STRING\" size=\"256\"/><Column id=\"EVAL_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"EVAL_TYPE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EVAL_EMP_GRP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EVAL_TYPE_WGT\" type=\"STRING\" size=\"256\"/><Column id=\"EVAL_PLUS_POINT\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"rowCheck\">y</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"EVAL_TYPE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EVAL_EMP_GRP_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_Save","1807","40","63","28",null,null,null,null,null,null,this);
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_icoSave");
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title","10","10","500","58",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("평가비중 기준 관리");
            obj.set_cssclass("sta_WF_compTitle01");
            this.addChild(obj.name, obj);

            obj = new Static("Static14","10","190","200","45",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("평가 유형별 평가비중");
            obj.set_enable("true");
            obj.set_cssclass("sta_WF_subTitle01");
            this.addChild(obj.name, obj);

            obj = new Grid("grdDept","20","237",null,null,"50","51",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("dsList");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_autoupdatetype("itemselect");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("expand,null");
            obj.set_cssclass("grd_WF_tree");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"100\" band=\"left\"/><Column size=\"400\" band=\"left\"/><Column size=\"400\" band=\"left\"/><Column size=\"200\" band=\"left\"/><Column size=\"200\" band=\"left\"/><Column size=\"60\" band=\"left\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"34\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" edittype=\"normal\" text=\"선택\"/><Cell col=\"1\" text=\"평가 ID\"/><Cell col=\"2\" text=\"평가유형\"/><Cell col=\"3\" text=\"평가그룹\"/><Cell col=\"4\" text=\"평가비중\"/><Cell col=\"5\" text=\"평가가정\"/><Cell col=\"6\" text=\"사용여부\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" textAlign=\"center\" text=\"bind:roiwCheck\" checkboxfalsevalue=\"n\" checkboxtruevalue=\"y\"/><Cell col=\"1\" textAlign=\"center\" imagestretch=\"fit\" displaytype=\"normal\" text=\"bind:EVAL_ID\"/><Cell col=\"2\" displaytype=\"combocontrol\" text=\"bind:EVAL_TYPE_CD\" edittype=\"combo\"/><Cell col=\"3\" displaytype=\"combocontrol\" text=\"bind:EVAL_EMP_GRP_CD\" edittype=\"combo\"/><Cell col=\"4\" displaytype=\"number\" text=\"bind:EVAL_TYPE_WGT\" edittype=\"normal\"/><Cell col=\"5\" displaytype=\"number\" text=\"bind:EVAL_PLUS_POINT\" edittype=\"normal\"/><Cell col=\"6\" displaytype=\"checkboxcontrol\" checkboxfalsevalue=\"n\" checkboxtruevalue=\"y\" text=\"bind:USE_YN\" edittype=\"checkbox\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_row_add",null,"190","73","26","127",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_Row_Add");
            this.addChild(obj.name, obj);

            obj = new Button("btn_row_delete",null,"190","73","26","37",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_Row_Delete");
            this.addChild(obj.name, obj);

            obj = new Static("staBg","0","80",null,"56","50",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"94","65","28","45",null,null,null,null,null,this);
            obj.set_text("조회");
            obj.set_cssclass("");
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new Static("sta004","10","91","110","34",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_condition01");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00","150","93","140","32",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","314","91","299","32",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1920,961,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("hre_3050M.xfdl","lib::common.xjs");
        this.registerScript("hre_3050M.xfdl", function() {
        /**
         *  메뉴 관리
         *  MenuPath      시스템 관리 - 사용자, 메뉴 및 권한 관리 - 메뉴 관리
         *  FileName      hre_3050M.xfdl
         *  Creator 	  choisw
         *  CreateDate    2024.01.31
         *  Desction      메뉴 관리
         ************** 소스 수정 이력 ***********************************************
         *  date          Modifier    Description
         *******************************************************************************
         *  2024.01.31    최성웅      최초 생성
         *******************************************************************************/

        this.executeIncludeScript("lib::common.xjs"); /*include "lib::common.xjs"*/;


        /***********************************************************************************************
        * FORM EVENT 영역(onload, onbeforeclose)
        /***********************************************************************************************/

        /**
         * description 화면 onload
        */

        /************************************************************************************************
         * TRANSACTION 서비스 호출 처리
         ************************************************************************************************/
         /**
         * description 조회
        */
        this.fnSearch = function()
        {
        	var strSvcId    = "getEvalEmpList";
        	var strSvcUrl   = "mis/hre/hre_3050M/getEvalEmpList.do";
        	var inData      = "dsSearch";
        	var outData     = "dsList";
        	var strArg      = "";
        	var callBackFnc = "fnCallBack";
        	var isAsync   	= true;

        // 	"0" : XML 형식
        // 	"1" : Binary 형식
        // 	"2" : SSV 형식
        // 	"3" : JSON 형식
        //this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync, 3);  // json

        	this.gfnTransaction(strSvcId, 		// transaction을 구분하기 위한 svc id값
        						strSvcUrl, 	    // transaction을 요청할 주소
        						inData, 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData, 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc, 	// transaction의 결과를 받을 Function 이름
        						isAsync); 		// 비동기통신 여부 [생략가능]
        };





        /************************************************************************************************
         * CALLBACK 콜백 처리부분(Transaction, Popup)
         ************************************************************************************************/
        this.fnCallBack = function (sSvcId, nErrorCode, sErrorMsg)
        {
        	switch (sSvcId) {
        		case "getEvalEmpList":
        			this.gfnRowCount(this.dsList, this.grdDept.staGridRowCnt);

        		break;
        		case "setItemList":
        			if(this.callbackMsg == "success"){
        				this.gfnAlert("CM_MSG_SAVE_SUCCESS");  // 저장 되었습니다.
        				this.fnSearch();
        			}
        		break;
        		default:
        		break;
        	}
        };


        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/

        //행추가
        this.btn_row_add_onclick = function(obj,e)
        {
        	var ds = this.dsList;
        	this.gfnInsertRow(ds, "last");
        	this.dsList.setColumn(this.dsList.rowposition, "rowCheck", "y");
        	this.dsList.setColumn(this.dsList.rowposition, "USE_YN", "y");

        //ds.setColumn(nRow, "EVAL_ID",



        };





        //행삭제
        this.btn_row_delete_onclick = function(obj,e)
        {
        	var ds = this.dsList;

        	for(var i = ds.getRowCount() -1; i >=0; i--)
        	{
        		//isChecked y 인 모든 행 삭제
        		var isChecked = ds.getColumn(i, "rowCheck");

        		if(isChecked == "y")
        		ds.deleteRow(i);
        	}

        };

        //조회버튼
        this.btn_search_onclick = function(obj,e)
        {
        	this.fnSearch();
        };


        /************************************************************************************************
        * 사용자 FUNCTION 영역
        ************************************************************************************************/






        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn_Save.addEventHandler("onclick",this.btn_search_onclick,this);
            this.btn_row_add.addEventHandler("onclick",this.btn_row_add_onclick,this);
            this.btn_row_delete.addEventHandler("onclick",this.btn_row_delete_onclick,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
        };
        this.loadIncludeScript("hre_3050M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
