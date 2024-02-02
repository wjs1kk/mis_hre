(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("HRE_3030M");
            this.set_titletext("진행단계 설정");
            this.set_cssclass("frm_WF_comp");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,670);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsUseYn", this);
            obj._setContents("<ColumnInfo><Column id=\"value\" type=\"STRING\" size=\"256\"/><Column id=\"text\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"evalYear\" type=\"STRING\" size=\"256\"/><Column id=\"evalId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsEvalStep", this);
            obj._setContents("<ColumnInfo><Column id=\"rowCheck\" type=\"STRING\" size=\"256\"/><Column id=\"roeStatus\" type=\"STRING\" size=\"256\"/><Column id=\"evalYear\" type=\"STRING\" size=\"256\"/><Column id=\"evalId\" type=\"STRING\" size=\"256\"/><Column id=\"evalDegree\" type=\"STRING\" size=\"256\"/><Column id=\"evalStepCd\" type=\"STRING\" size=\"256\"/><Column id=\"evalStepStartDate\" type=\"STRING\" size=\"256\"/><Column id=\"evalStepEndDate\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"evalStepDesc\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsEvalYear", this);
            obj._setContents("<ColumnInfo><Column id=\"evalYear\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"evalYear\">2021</Col></Row><Row><Col id=\"evalYear\">2022</Col></Row><Row><Col id=\"evalYear\">2023</Col></Row><Row><Col id=\"evalYear\">2024</Col></Row><Row><Col id=\"evalYear\">2017</Col></Row><Row><Col id=\"evalYear\">2018</Col></Row><Row><Col id=\"evalYear\">2010</Col></Row><Row><Col id=\"evalYear\">2011</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsEvalId", this);
            obj._setContents("<ColumnInfo><Column id=\"evalId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"evalId\">202101</Col></Row><Row><Col id=\"evalId\">202102</Col></Row><Row><Col id=\"evalId\">202103</Col></Row><Row><Col id=\"evalId\">202104</Col></Row><Row><Col id=\"evalId\">202105</Col></Row><Row><Col id=\"evalId\">202106</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btnSave",null,"20","65","28","60",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Save");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","50","0","500","58",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("진행단계 설정");
            obj.set_cssclass("sta_WF_compTitle01");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","50","58",null,"71","50",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staBg00","0","0",null,"56","0",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_bg");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staBg","0","-254",null,"56","0",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_bg");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta_02","280","15","100","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("구분");
            obj.set_cssclass("sta_WF_condition01");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta001","20","15","100","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("기준 연도");
            obj.set_cssclass("sta_WF_condition01");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cbo01","sta001:10","15","120","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsEvalYear");
            obj.set_codecolumn("evalYear");
            obj.set_datacolumn("evalYear");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cbo02","sta_02:10","15","120","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_innerdataset("dsEvalId");
            obj.set_codecolumn("evalId");
            obj.set_datacolumn("evalId");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cbo003","cbo02:5","15","110","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_innerdataset("dsSysIdComboSearch");
            obj.set_codecolumn("value");
            obj.set_datacolumn("text");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divResult","50","divSearch:0",null,null,"50","37",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Button("btnDeleteRow",null,"14","73","26","10",null,null,null,null,null,this.divResult.form);
            obj.set_taborder("1");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_Row_Delete");
            this.divResult.addChild(obj.name, obj);

            obj = new Button("btnAddRow",null,"14","73","26","btnDeleteRow:5",null,null,null,null,null,this.divResult.form);
            obj.set_taborder("0");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_Row_Add");
            this.divResult.addChild(obj.name, obj);

            obj = new Grid("grdEvalStep","0","45",null,null,"0","0",null,null,null,null,this.divResult.form);
            obj.set_taborder("2");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_autoupdatetype("itemselect");
            obj.set_binddataset("dsEvalStep");
            obj.set_selectscrollmode("default");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"48\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"48\"/><Column size=\"240\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"48\"/><Column size=\"240\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"34\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"rowCheck\" suppressalign=\"first\"/><Cell col=\"2\" text=\"기준연도\"/><Cell col=\"3\" text=\"구분\"/><Cell col=\"4\" text=\"차수\"/><Cell col=\"5\" text=\"단계\"/><Cell col=\"6\" text=\"시작\"/><Cell col=\"7\" text=\"종료\"/><Cell col=\"8\" text=\"사용\"/><Cell col=\"9\" text=\"비고\"/></Band><Band id=\"body\"><Cell textAlign=\"right\" expr=\"currow+1\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:rowCheck\"/><Cell col=\"2\" displaytype=\"combocontrol\" textAlign=\"left\" combodataset=\"dsEvalYear\" combocodecol=\"evalYear\" combodatacol=\"evalYear\" text=\"bind:evalYear\" edittype=\"combo\"/><Cell col=\"3\" displaytype=\"combocontrol\" textAlign=\"left\" edittype=\"none\" text=\"bind:evalId\" combodataset=\"dsEvalId\" combocodecol=\"evalId\" combodatacol=\"evalId\"/><Cell col=\"4\" displaytype=\"editcontrol\" textAlign=\"left\" edittype=\"text\" text=\"bind:evalCnt\"/><Cell col=\"5\" displaytype=\"editcontrol\" textAlign=\"left\" edittype=\"none\" text=\"bind:evalStepCd\"/><Cell col=\"6\" edittype=\"date\" displaytype=\"calendarcontrol\" calendardateformat=\"yyyy-MM-dd\" calendardisplaynulltype=\"nullmask\" calendarautoselect=\"true\" textAlign=\"left\" text=\"bind:evalStepStartDate\" calendareditformat=\"yyyy-MM-dd\"/><Cell col=\"7\" edittype=\"date\" displaytype=\"calendarcontrol\" calendardateformat=\"yyyy-MM-dd\" calendardisplaynulltype=\"nullmask\" calendarautoselect=\"true\" textAlign=\"left\" calendardataset=\"dsEvalStep\" calendardatecol=\"endDt\" text=\"bind:evalStepEndDate\"/><Cell col=\"8\" edittype=\"checkbox\" textAlign=\"center\" displaytype=\"checkboxcontrol\" checkboxfalsevalue=\"N\" checkboxtruevalue=\"Y\" text=\"bind:useYn\"/><Cell col=\"9\" edittype=\"text\" textAlign=\"left\" displaytype=\"editcontrol\" text=\"bind:evalStepDesc\"/></Band></Format></Formats>");
            this.divResult.addChild(obj.name, obj);

            obj = new Static("sta004","0","0","180","45",null,null,null,null,null,null,this.divResult.form);
            obj.set_taborder("3");
            obj.set_text("성과관리 단계별 기간");
            obj.set_cssclass("sta_WF_subTitle01");
            this.divResult.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"73","65","28","60",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("조회");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divResult.form
            obj = new Layout("default","",0,0,this.divResult.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btnDeleteRow.set_taborder("1");
                p.btnDeleteRow.set_text("행삭제");
                p.btnDeleteRow.set_cssclass("btn_WF_Row_Delete");
                p.btnDeleteRow.move(null,"14","73","26","10",null);

                p.btnAddRow.set_taborder("0");
                p.btnAddRow.set_text("행추가");
                p.btnAddRow.set_cssclass("btn_WF_Row_Add");
                p.btnAddRow.move(null,"14","73","26","btnDeleteRow:5",null);

                p.grdEvalStep.set_taborder("2");
                p.grdEvalStep.set_autofittype("col");
                p.grdEvalStep.set_autoenter("select");
                p.grdEvalStep.set_autoupdatetype("itemselect");
                p.grdEvalStep.set_binddataset("dsEvalStep");
                p.grdEvalStep.set_selectscrollmode("default");
                p.grdEvalStep.move("0","45",null,null,"0","0");

                p.sta004.set_taborder("3");
                p.sta004.set_text("성과관리 단계별 기간");
                p.sta004.set_cssclass("sta_WF_subTitle01");
                p.sta004.move("0","0","180","45",null,null);
            	}
            );
            this.divResult.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divResult.form
            obj = new Layout("screen00","",0,0,this.divResult.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divResult.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1920,670,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("진행단계 설정");
                p.set_cssclass("frm_WF_comp");

                p.btnSave.set_taborder("0");
                p.btnSave.set_text("저장");
                p.btnSave.set_cssclass("btn_WF_Save");
                p.btnSave.move(null,"20","65","28","60",null);

                p.sta00.set_taborder("1");
                p.sta00.set_text("진행단계 설정");
                p.sta00.set_cssclass("sta_WF_compTitle01");
                p.sta00.move("50","0","500","58",null,null);

                p.divSearch.set_taborder("2");
                p.divSearch.set_text("");
                p.divSearch.move("50","58",null,"71","50",null);

                p.divResult.set_taborder("3");
                p.divResult.set_text("");
                p.divResult.set_cssclass("div_WF_Area");
                p.divResult.move("50","divSearch:0",null,null,"50","37");

                p.btnSearch.set_taborder("4");
                p.btnSearch.set_text("조회");
                p.btnSearch.move(null,"73","65","28","60",null);
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
            obj = new BindItem("item0","divSearch.form.cbo01","value","dsSearch","evalYear");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.cbo02","text","dsSearch","evalId");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("HRE_3030M.xfdl","lib::common.xjs");
        this.registerScript("HRE_3030M.xfdl", function() {
        /**
        *  인사평가 관리
        *  MenuPath       -  -
        *  FileName
        *  Creator 	     parkkr
        *  CreateDate    2024.01.29
        *  Desction      평가유형 관리
        ************** 소스 수정 이력 ***********************************************
        *  date          Modifier    Description
        *******************************************************************************
        *  2024.01.29    parkkr 	 최초 생성
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
        	var strSvcId    = "getEvalStepList";
        	var strSvcUrl   = "mis/getEvalStepList.do";
        	var inData      = "dsSearch";  // input1=dsSearch
        	var outData     = "dsEvalStep";  // dsModuleManage=output1
        	var strArg      = "";
        	var callBackFnc = "";
        	var isAsync   	= true;


        	this.gfnTransaction(strSvcId,strSvcUrl, inData,outData, strArg, callBackFnc, isAsync);
        };


        /**
         * description 저장
        */
        this.fnSave = function()
        {
        	var strSvcId    = "setEvalStepList";
        	var strSvcUrl   = "mis/setEvalStepList.do";
        	var inData      = "dsEvalStep";  // input1=dsSearch
        	var outData     = "";  // dsModuleManage=output1
        	var strArg      = "";
        	var callBackFnc = "fnStepCallBack";
        	var isAsync   	= true;

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

        // 콜백
        this.fnStepCallBack = function (strSvcId, nErrorCode, sErrorMsg)
        {
        	switch (strSvcId) {
        		case "setEvalStepList":
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

        //저장버튼 클릭
        this.btnSave_onclick = function(obj,e)
        {
        	if(this.dsEvalStep.rowcount == 0){
        	this.gfnAlert("CM_MSG_SAVE_NODATA");  // 저장할 데이터가 없습니다.(변경된 내역이 없습니다.)
        	return;
        	}
        	// 변경사항 체크
        	if (!this.gfnDsIsUpdated(this.dsEvalStep)) {
        		this.gfnAlert("CM_MSG_SAVE_NOCHANGE");  // 변경된 내역이 없습니다.
        		return;
        	}
        	// msgId, args(치환), popupId, Confirm Callback Function({확인 trueFunc, 취소: falseFunc})
        	// confirm 이후 스크립트가 실행되기때문에 return; 처리 or 가장 마지막 위치
        	this.gfnAlert("CM_CFM_BEFORE_SAVE", "", "", {trueFunc: "fnSave", falseFunc: ""});  // 변경된 내역을 저장 하시겠습니까?
        	return;
        };

        //조회버튼 클릭
        this.btnSearch_onclick = function(obj,e)
        {
        	this.fnSearch();
        };

        //행추가 버튼 클릭
        this.btnAddRow_onclick = function(obj,e)
        {
            this.gfnInsertRow(this.dsEvalStep, "last");
            var i = this.dsEvalStep.rowposition;
            this.dsEvalStep.setColumn(i, "useYn", "Y");
        };

        //행삭제 버튼 클릭
        this.btnDeleteRow_onclick = function(obj,e)
        {
        	this.gfnDeleteRow(this.dsEvalStep);
        };

        //그리드 해드클릭
        this.divResult_grdEvalStep_onheadclick = function(obj,e)
        {
        	this.gfnSetGridCheckAll(obj, e, "rowCheck");
        };


        /************************************************************************************************
        * 사용자 FUNCTION 영역
        ************************************************************************************************/

        // 차수 출력 함수
        function cntYear() {
            var groupMap = {};

            for (var i = 0; i < dsEvalStep.getRowCount(); i++) {
                var evalYearVal = dsEvalStep.getColumn(i, "evalYear");

                if (!groupMap[evalYearVal]) {
                    groupMap[evalYearVal] = 1;
                } else {
                    groupMap[evalYearVal]++;
                }

                dsEvalStep.setColumn(i, "evalDegree", groupMap[evalYearVal]);
            }
        	// 그리드에 변경된 데이터셋을 반영
            this.grdResult.set_binddataset(dsEvalStep);



        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnSave.addEventHandler("onclick",this.btnSave_onclick,this);
            this.sta00.addEventHandler("onclick",this.sta_01_onclick,this);
            this.divSearch.form.staBg.addEventHandler("onclick",this.div_Search_Static00_onclick,this);
            this.divSearch.form.sta_02.addEventHandler("onclick",this.divSearch_sta_01_onclick,this);
            this.divSearch.form.sta001.addEventHandler("onclick",this.divSearch_sta_01_onclick,this);
            this.divResult.form.btnDeleteRow.addEventHandler("onclick",this.btnDeleteRow_onclick,this);
            this.divResult.form.btnAddRow.addEventHandler("onclick",this.btnAddRow_onclick,this);
            this.divResult.form.grdEvalStep.addEventHandler("onheadclick",this.divResult_grdEvalStep_onheadclick,this);
            this.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
        };
        this.loadIncludeScript("HRE_3030M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
