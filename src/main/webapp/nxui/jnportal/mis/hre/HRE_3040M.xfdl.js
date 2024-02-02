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
            this.set_titletext("평가유형 관리");
            this.set_cssclass("frm_WF_comp");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,670);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsUseYn", this);
            obj._setContents("<ColumnInfo><Column id=\"value\" type=\"STRING\" size=\"256\"/><Column id=\"text\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"evalId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsEvalType", this);
            obj._setContents("<ColumnInfo><Column id=\"rowCheck\" type=\"STRING\" size=\"256\"/><Column id=\"rowStatus\" type=\"STRING\" size=\"256\"/><Column id=\"evalId\" type=\"STRING\" size=\"256\"/><Column id=\"evalTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"evalTypeName\" type=\"STRING\" size=\"256\"/><Column id=\"evalMethodCd\" type=\"STRING\" size=\"256\"/><Column id=\"evalAdjustMethod\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btnSave",null,"20","65","28","60",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Save");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","50","0","500","58",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("평가유형 관리");
            obj.set_cssclass("sta_WF_compTitle01");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","50","58",null,"71","50",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staBg00","0","0",null,"56","0",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_bg");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staBg","0","-254",null,"56","0",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_bg");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta001","20","15","100","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("평가ID");
            obj.set_cssclass("sta_WF_condition01");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cbo01","sta001:10","15","120","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_innerdataset("dsEvalType");
            obj.set_codecolumn("evalId");
            obj.set_datacolumn("evalId");
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

            obj = new Grid("grdEvalType","0","45",null,null,"0","0",null,null,null,null,this.divResult.form);
            obj.set_taborder("2");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_autoupdatetype("itemselect");
            obj.set_binddataset("dsEvalType");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"240\"/><Column size=\"120\"/><Column size=\"160\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"34\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"평가ID\"/><Cell col=\"2\" text=\"평가유형ID\"/><Cell col=\"3\" text=\"평가유형 명\"/><Cell col=\"4\" text=\"평가방식\"/><Cell col=\"5\" text=\"평가보정 방식\"/><Cell col=\"6\" text=\"사용\"/></Band><Band id=\"body\"><Cell textAlign=\"center\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:rowCheck\"/><Cell col=\"1\" displaytype=\"text\" textAlign=\"left\" edittype=\"text\" text=\"bind:evalId\"/><Cell col=\"2\" displaytype=\"text\" textAlign=\"left\" edittype=\"text\" text=\"bind:evalTypeCd\"/><Cell col=\"3\" displaytype=\"text\" textAlign=\"left\" edittype=\"text\" text=\"bind:evalTypeName\"/><Cell col=\"4\" displaytype=\"text\" textAlign=\"left\" edittype=\"text\" text=\"bind:evalMethodCd\"/><Cell col=\"5\" edittype=\"text\" displaytype=\"text\" calendardateformat=\"yyyy-MM-dd\" calendardisplaynulltype=\"nullmask\" calendarautoselect=\"true\" textAlign=\"left\" text=\"bind:evalAdjustMethod\"/><Cell col=\"6\" edittype=\"checkbox\" textAlign=\"center\" displaytype=\"checkboxcontrol\" text=\"bind:useYn\"/></Band></Format></Formats>");
            this.divResult.addChild(obj.name, obj);

            obj = new Static("sta004","0","0","180","45",null,null,null,null,null,null,this.divResult.form);
            obj.set_taborder("3");
            obj.set_text("평가유형");
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

                p.grdEvalType.set_taborder("2");
                p.grdEvalType.set_autofittype("col");
                p.grdEvalType.set_autoenter("select");
                p.grdEvalType.set_autoupdatetype("itemselect");
                p.grdEvalType.set_binddataset("dsEvalType");
                p.grdEvalType.move("0","45",null,null,"0","0");

                p.sta004.set_taborder("3");
                p.sta004.set_text("평가유형");
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
                p.set_titletext("평가유형 관리");
                p.set_cssclass("frm_WF_comp");

                p.btnSave.set_taborder("0");
                p.btnSave.set_text("저장");
                p.btnSave.set_cssclass("btn_WF_Save");
                p.btnSave.move(null,"20","65","28","60",null);

                p.sta00.set_taborder("1");
                p.sta00.set_text("평가유형 관리");
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
            obj = new BindItem("item0","divSearch.form.cbo01","value","dsSearch","evalId");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("HRE_3040M.xfdl","lib::common.xjs");
        this.registerScript("HRE_3040M.xfdl", function() {
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



        /************************************************************************************************
         * CALLBACK 콜백 처리부분(Transaction, Popup)
         ************************************************************************************************/


        /**
         * description 조회
        */
        this.fnSearch = function()
        {
        	var strSvcId    = "getEvalTypeList";
        	var strSvcUrl   = "mis/getEvalTypeList.do";
        	var inData      = "dsSearch";  // input1=dsSearch
        	var outData     = "dsEvalType";  // dsModuleManage=output1
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
        	var strSvcId    = "setEvalTypeList";
        	var strSvcUrl   = "mis/setEvalTypeList.do";
        	var inData      = "dsEvalType";  // input1=dsSearch
        	var outData     = "";  // dsModuleManage=output1
        	var strArg      = "";
        	var callBackFnc = "";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId,strSvcUrl, inData,outData, strArg, callBackFnc, isAsync);
        };





        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *************************************************************************************************/

        //저장버튼 클릭

        this.btnSave_onclick = function(obj,e)
        {
        	if(this.dsEvalType.rowcount == 0){
        	this.gfnAlert("CM_MSG_SAVE_NODATA");  // 저장할 데이터가 없습니다.(변경된 내역이 없습니다.)
        	return;
        	}
        	// 변경사항 체크
        	if (!this.gfnDsIsUpdated(this.dsEvalType)) {
        		this.gfnAlert("CM_MSG_SAVE_NOCHANGE");  // 변경된 내역이 없습니다.
        		return;
        	}
        	// msgId, args(치환), popupId, Confirm Callback Function({확인 trueFunc, 취소: falseFunc})
        	// confirm 이후 스크립트가 실행되기때문에 return; 처리 or 가장 마지막 위치
        	this.gfnAlert("CM_CFM_BEFORE_SAVE", "", "", {trueFunc: "fnSave", falseFunc: ""});  // 변경된 내역을 저장 하시겠습니까?
        	return;
        };

        //조회 버튼 클릭
        this.btnSearch_onclick = function(obj,e)
        {
        	this.fnSearch();
        };


        //행추가 버튼 클릭
        this.divResult_btnAddRow_onclick = function(obj,e)
        {
            this.gfnInsertRow(this.dsEvalType, "last");
            var i = this.dsEvalType.rowposition;
            this.dsEvalType.setColumn(i, "useYn", "Y");
        };

        //행삭제 버튼 클릭
        this.divResult_btnDeleteRow_onclick = function(obj,e)
        {
        	this.gfnDeleteRow(this.dsEvalType);
        };

        /**
         * description 그리드해드 클릭
        */
        this.divCode_grdCodeHeader_onheadclick = function(obj,e)
        {
        	this.gfnSetGridCheckAll(obj, e, "rowCheck");
        };


        /************************************************************************************************
        * 사용자 FUNCTION 영역
        ************************************************************************************************/


        // 유효성 검사
        this.fnValidate = function ()
        {
            if (this.dsEvalType.rowcount == 0 || !this.gfnDsIsUpdated(this.dsEvalType)) {
                this.gfnAlert("CM_MSG_SAVE_NODATA");  // 저장할 데이터가 없습니다.
                return false;
            }

        	if (!this.gfnDsIsUpdated(this.dsEvalType)) {
        		this.gfnAlert("CM_MSG_SAVE_NOCHANGE");  // 변경된 내역이 없습니다.
        		return false;
        	}

            var args = [
                ["evalId", "NULL|MAX_LEN:6", ""],
                ["evalTypeCd", "NULL|MAX_LEN:20", ""]
            ];

            return this.gfnCheckGrid(this.divResult.form.grdEvalType, args, "");
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnSave.addEventHandler("onclick",this.btnSave_onclick,this);
            this.divSearch.form.staBg.addEventHandler("onclick",this.div_Search_Static00_onclick,this);
            this.divResult.form.btnDeleteRow.addEventHandler("onclick",this.divResult_btnDeleteRow_onclick,this);
            this.divResult.form.btnAddRow.addEventHandler("onclick",this.divResult_btnAddRow_onclick,this);
            this.divResult.form.grdEvalType.addEventHandler("onheadclick",this.divCode_grdCodeHeader_onheadclick,this);
            this.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
        };
        this.loadIncludeScript("HRE_3040M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
