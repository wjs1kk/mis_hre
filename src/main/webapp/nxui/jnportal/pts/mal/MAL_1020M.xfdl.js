(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("MAL_1020M");
            this.set_titletext("메일발송");
            this.set_cssclass("btn_WF_Sort");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,1000);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"emlId\" type=\"STRING\" size=\"256\"/><Column id=\"emlTtl\" type=\"STRING\" size=\"256\"/><Column id=\"emlTmpltNm\" type=\"STRING\" size=\"256\"/><Column id=\"sndCn\" type=\"STRING\" size=\"256\"/><Column id=\"atchFileId\" type=\"STRING\" size=\"256\"/><Column id=\"emlTmpltId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"deptNm\" type=\"STRING\" size=\"256\"/><Column id=\"rcvUserId\" type=\"STRING\" size=\"256\"/><Column id=\"rcvUserNm\" type=\"STRING\" size=\"256\"/><Column id=\"emlAddr\" type=\"STRING\" size=\"256\"/><Column id=\"searchType\" type=\"STRING\" size=\"256\"/><Column id=\"searchKeyword\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList2", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"deptCd\" type=\"STRING\" size=\"256\"/><Column id=\"deptNm\" type=\"STRING\" size=\"256\"/><Column id=\"memberId\" type=\"STRING\" size=\"256\"/><Column id=\"memberNmKr\" type=\"STRING\" size=\"256\"/><Column id=\"emlAddr\" type=\"STRING\" size=\"256\"/><Column id=\"rowCheck\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList3", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"rcvEmlAddr\" type=\"STRING\" size=\"256\"/><Column id=\"emlSvr\" type=\"STRING\" size=\"256\"/><Column id=\"rcvUserNm\" type=\"STRING\" size=\"256\"/><Column id=\"rcvUserId\" type=\"STRING\" size=\"256\"/><Column id=\"rowCheck\" type=\"STRING\" size=\"256\"/><Column id=\"emlId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divTop","50","73",null,"434","50",null,null,null,null,null,this);
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
            obj.set_text("메일 ID");
            obj.set_cssclass("sta_WF_condition02_LEssential");
            this.divTop.addChild(obj.name, obj);

            obj = new Edit("edtEmlId","staEmlId:10","4","200","26",null,null,null,null,null,null,this.divTop.form);
            obj.set_taborder("3");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divTop.addChild(obj.name, obj);

            obj = new Static("staEmlTtl","455","0","150","34",null,null,null,null,null,null,this.divTop.form);
            obj.set_taborder("4");
            obj.set_text("메일제목");
            obj.set_cssclass("sta_WF_condition02");
            this.divTop.addChild(obj.name, obj);

            obj = new Edit("edtEmlTtl","staEmlTtl:10","4","600","26",null,null,null,null,null,null,this.divTop.form);
            obj.set_taborder("5");
            obj.set_readonly("false");
            this.divTop.addChild(obj.name, obj);

            obj = new Static("staSndCn","0","34","150","400",null,null,null,null,null,null,this.divTop.form);
            obj.set_taborder("6");
            obj.set_text("발송내용");
            obj.set_cssclass("sta_WF_condition02_LEssential");
            this.divTop.addChild(obj.name, obj);

            obj = new TextArea("textSndCn","staSndCn:10","38",null,"392","20",null,null,null,null,null,this.divTop.form);
            obj.set_taborder("7");
            this.divTop.addChild(obj.name, obj);

            obj = new Static("staTmpltNm","1284","0","150","34",null,null,null,null,null,null,this.divTop.form);
            obj.set_taborder("8");
            obj.set_text("템플릿 명");
            obj.set_cssclass("sta_WF_condition02");
            this.divTop.addChild(obj.name, obj);

            obj = new Edit("edtTmpltNm","staTmpltNm:10","4","250","26",null,null,null,null,null,null,this.divTop.form);
            obj.set_taborder("9");
            obj.set_readonly("true");
            this.divTop.addChild(obj.name, obj);

            obj = new Button("Button04","edtTmpltNm:5","4","26","26",null,null,null,null,null,null,this.divTop.form);
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_frmSearch");
            obj.set_text("");
            this.divTop.addChild(obj.name, obj);

            obj = new Static("staTitle","50","0",null,"58","1420",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("메일발송");
            obj.set_cssclass("sta_WF_compTitle01");
            this.addChild(obj.name, obj);

            obj = new Button("btnInit",null,"20","65","28","50",null,null,null,null,null,this);
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_Delete");
            obj.set_visible("true");
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Button("btnSnd",null,"20","65","28","btnInit:3",null,null,null,null,null,this);
            obj.set_text("발송");
            obj.set_cssclass("btn_WF_Save");
            obj.set_visible("true");
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Static("staHeading","50","divTop:10","171","45",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_subTitle01");
            obj.set_text("첨부 파일");
            this.addChild(obj.name, obj);

            obj = new Div("divDrop","50","staHeading:0",null,"195","50",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("raonkdropzone");
            obj.set_border("0px none");
            this.addChild(obj.name, obj);

            obj = new Grid("grdFileList","0","0",null,null,"0","34",null,null,null,null,this.divDrop.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsFileList");
            obj.set_autofittype("col");
            obj.set_tooltiptype("default");
            obj.set_autoenter("select");
            obj.set_enable("true");
            obj.set_nodatatext("여기에 파일을 끌어다 놓으세요");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"200\"/><Column size=\"64\" band=\"right\"/><Column size=\"56\" band=\"right\"/><Column size=\"56\" band=\"right\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"34\"/></Rows><Band id=\"head\"><Cell text=\"NO\" autosizecol=\"none\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" textAlign=\"center\" verticalAlign=\"middle\" autosizecol=\"none\"/><Cell col=\"2\" text=\"상태\"/><Cell col=\"3\"/><Cell col=\"4\" text=\"파일명\"/><Cell col=\"5\" text=\"크기\"/><Cell col=\"6\" text=\"다운로드\"/><Cell col=\"7\" text=\"삭제\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" textAlign=\"center\" expandsize=\"16\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:rowCheck\" textAlign=\"center\" verticalAlign=\"middle\" expandsize=\"16\"/><Cell col=\"2\" expr=\"comp.fnRowStatusSymbol(rowStatus)\"/><Cell col=\"3\" expr=\"comp.fnGetFileIcon(orgnlFileNm)\" displaytype=\"imagecontrol\"/><Cell col=\"4\" textAlign=\"left\" text=\"bind:orgnlFileNm\" tooltiptext=\"bind:orgnlFileNm\"/><Cell col=\"5\" textAlign=\"right\" expr=\"comp.fnFormatFileSize(fileSz)\"/><Cell col=\"6\" displaytype=\"imagecontrol\" text=\"theme://images/btn_WF_grdDownload.png\"/><Cell col=\"7\" displaytype=\"imagecontrol\" expr=\"rowStatus == &apos;deleted&apos; ? &apos;theme://images/btn_WF_grdReturn.png&apos; : &apos;theme://images/btn_WF_grdDelete.png&apos;\"/></Band></Format><Format id=\"download\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"240\"/><Column size=\"64\" band=\"right\"/><Column size=\"56\" band=\"right\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"34\"/></Rows><Band id=\"head\"><Cell text=\"NO\" autosizecol=\"none\"/><Cell col=\"1\"/><Cell col=\"2\" text=\"파일명\"/><Cell col=\"3\" text=\"크기\"/><Cell col=\"4\" text=\"다운로드\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" textAlign=\"center\" expandsize=\"16\"/><Cell col=\"1\" expr=\"comp.fnGetFileIcon(orgnlFileNm)\" displaytype=\"imagecontrol\"/><Cell col=\"2\" textAlign=\"left\" text=\"bind:orgnlFileNm\" color=\"expr:rowStatus == &apos;deleted&apos; ? &apos;red&apos; : &apos;black&apos;\" textDecoration=\"expr:rowStatus == &apos;deleted&apos; ? &apos;line-through&apos; : &apos;&apos;\" tooltiptext=\"bind:orgnlFileNm\"/><Cell col=\"3\" textAlign=\"right\" expr=\"comp.fnFormatFileSize(fileSz)\"/><Cell col=\"4\" displaytype=\"imagecontrol\" text=\"theme://images/btn_WF_grdDownload.png\"/></Band></Format></Formats>");
            this.divDrop.addChild(obj.name, obj);

            obj = new Static("staStatus","0",null,null,"34","0","0",null,null,null,null,this.divDrop.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_condition02");
            obj.set_border("0px none,1px solid #dddddd, 1px solid #dddddd, 1px solid #dddddd");
            this.divDrop.addChild(obj.name, obj);

            obj = new Div("divBottom","50","divDrop:0",null,"700","50",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("divBottom");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Static("staHeading00","0","10","171","45",null,null,null,null,null,null,this.divBottom.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_subTitle01");
            obj.set_text("대상검색");
            this.divBottom.addChild(obj.name, obj);

            obj = new Grid("grdList","0","staHeading00:0","1000",null,null,"50",null,null,null,null,this.divBottom.form);
            obj.set_taborder("1");
            obj.set_binddataset("dsList2");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_autoupdatetype("itemselect");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"300\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"150\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"34\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"부서\"/><Cell col=\"2\" text=\"아이디\"/><Cell col=\"3\" text=\"이름\"/><Cell col=\"4\" text=\"이메일주소\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" textAlign=\"center\" text=\"bind:rowCheck\"/><Cell col=\"1\" text=\"bind:deptNm\"/><Cell col=\"2\" text=\"bind:memberId\"/><Cell col=\"3\" text=\"bind:memberNmKr\"/><Cell col=\"4\" text=\"bind:emlAddr\"/></Band></Format></Formats>");
            this.divBottom.addChild(obj.name, obj);

            obj = new Button("btnLeft","grdList:10","293","26","26",null,null,null,null,null,null,this.divBottom.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_frmSearch");
            obj.set_text("");
            this.divBottom.addChild(obj.name, obj);

            obj = new Grid("grdList00","btnLeft:10","55",null,null,"0","50",null,null,null,null,this.divBottom.form);
            obj.set_taborder("2");
            obj.set_binddataset("dsList3");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_autoupdatetype("itemselect");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"300\"/><Column size=\"150\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"34\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" text=\"순번\"/><Cell col=\"2\" text=\"이메일주소\"/><Cell col=\"3\" text=\"메일서버\"/><Cell col=\"4\" text=\"받는사람\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:rowCheck\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"expr:currow+1\" expr=\"currow+1\"/><Cell col=\"2\" text=\"bind:rcvEmlAddr\" displaytype=\"normal\" edittype=\"text\"/><Cell col=\"3\" text=\"bind:emlSvr\" displaytype=\"normal\" edittype=\"text\"/><Cell col=\"4\" text=\"bind:rcvUserNm\" displaytype=\"normal\" edittype=\"text\"/></Band></Format></Formats>");
            this.divBottom.addChild(obj.name, obj);

            obj = new Combo("cboSearch","staHeading00:0",null,"140","26",null,"grdList:5",null,null,null,null,this.divBottom.form);
            obj.set_taborder("4");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divBottom_form_cboSearch_innerdataset = new nexacro.NormalDataset("divBottom_form_cboSearch_innerdataset", obj);
            divBottom_form_cboSearch_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">부서</Col></Row><Row><Col id=\"datacolumn\">아이디</Col><Col id=\"codecolumn\">rcvUserId</Col></Row><Row><Col id=\"datacolumn\">이름</Col><Col id=\"codecolumn\">rcvUserNm</Col></Row><Row><Col id=\"datacolumn\">이메일주소</Col><Col id=\"codecolumn\">emlAddr</Col></Row></Rows>");
            obj.set_innerdataset(divBottom_form_cboSearch_innerdataset);
            obj.set_text("");
            obj.set_index("-1");
            this.divBottom.addChild(obj.name, obj);

            obj = new Edit("edtSearch","cboSearch:5",null,"610","26",null,"grdList:5",null,null,null,null,this.divBottom.form);
            obj.set_taborder("5");
            this.divBottom.addChild(obj.name, obj);

            obj = new Button("btn_search","edtSearch:5",null,"65","28",null,"grdList:5",null,null,null,null,this.divBottom.form);
            obj.set_text("조회");
            obj.set_cssclass("");
            obj.set_taborder("6");
            this.divBottom.addChild(obj.name, obj);

            obj = new Button("btnAddRow",null,null,"73","26","78","grdList00:4",null,null,null,null,this.divBottom.form);
            obj.set_taborder("7");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_Row_Add");
            this.divBottom.addChild(obj.name, obj);

            obj = new Button("btnDeleteRow","btnAddRow:5",null,"73","26",null,"grdList00:5",null,null,null,null,this.divBottom.form);
            obj.set_taborder("8");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_Row_Delete");
            this.divBottom.addChild(obj.name, obj);

            obj = new Static("staHeading00_00","1051","10","171",null,null,"grdList00:0",null,null,null,null,this.divBottom.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_subTitle01");
            obj.set_text("발송대상");
            this.divBottom.addChild(obj.name, obj);

            obj = new Button("Button04_00_00","grdList:10","334","26","26",null,null,null,null,null,null,this.divBottom.form);
            obj.set_taborder("10");
            obj.set_text(">>");
            this.divBottom.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divTop.form
            obj = new Layout("default","",0,0,this.divTop.form,function(p){});
            this.divTop.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDrop.form
            obj = new Layout("default","",0,0,this.divDrop.form,function(p){});
            this.divDrop.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divBottom.form
            obj = new Layout("default","",0,0,this.divBottom.form,function(p){});
            this.divBottom.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item8","divBottom.form.edtSearch","value","dsSearch","searchKeyword");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divBottom.form.cboSearch","value","dsSearch","searchType");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divTop.form.edtEmlId","value","dsList","emlId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divTop.form.edtEmlTtl","value","dsList","emlTtl");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divTop.form.edtTmpltNm","value","dsList","emlTmpltNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divTop.form.textSndCn","value","dsList","sndCn");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("MAL_1020M.xfdl","lib::common.xjs");
        this.registerScript("MAL_1020M.xfdl", function() {
        /**
        *  메일발송
        *  MenuPath      메일발송관리 - 메일발송
        *  FileName      MAL_1020M.xfdl
        *  Creator 	     kangjw
        *  CreateDate    2023.12.12
        *  Desction      메일발송
        ************** 소스 수정 이력 ***********************************************
        *  date          Modifier    Description
        *******************************************************************************
        *  2023.12.12   kangjw	 	 최초 생성
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
        };

        /************************************************************************************************
        * TRANSACTION 서비스 호출 처리
        ************************************************************************************************/
        /**
         * description 검색대상 조회
        */
        this.fnSearch = function ()
        {
        	var strSvcId    = "getEmlSndUser";
        	var strSvcUrl   = "mal/emlSndMaster/getEmlSndUser.do";
        	var inData      = "dsSearch";
        	var outData     = "dsList2";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        /**
         * description 저장
        */
        this.fnSndMal  = function ()
        {
        	var strSvcId    = "getEmlSnd";
        	var strSvcUrl   = "mal/emlSndMaster/getEmlSnd.do";
        	var inData      = "dsList dsList3";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };
        /************************************************************************************************
         * CALLBACK 콜백 처리부분(Transaction, Popup)
         ************************************************************************************************/

        /**
         * description Transaction CallBack
        */
        this.fnCallback = function (svcId, errorCode, errorMsg)
        {
            switch (svcId) {
                case "getEmlSndUser":
                    break;
        		case "getEmlSnd":
        			if(this.callbackMsg == "success"){
        				this.gfnAlert("CM_MSG_SAVE_SUCCESS");
        			} else {
        				this.gfnAlert("CM_MSG_TEST_3");
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
        		case "malTmpltSearch":
        			var oRtn = this.gfnGetPopupRtn();
        		break;
        		default:
        		break;
        	}
        };
        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        this.divBottom_btn_search_onclick = function(obj,e)
        {
        	this.fnSearch();
        };

        this.divBottom_btnRight_onclick = function(obj,e)
        {
        	for( var i = 0; i < this.dsList2.rowcount; i++){
        		for( var j = 0; j < this.dsList3.rowcount; j++){
        			if(this.dsList2.getColumn(i, "rowCheck") > 0 ){
        				if((this.dsList2.getColumn(i, "emlAddr") == this.dsList3.getColumn(j, "rcvEmlAddr"))){
        					this.gfnAlert("CM_MSG_INVALID_DUPLICATION", ["이메일"]);
        					return false;
        				}
        			}
        		}
        	}

        	for( var i = 0; i < this.dsList2.rowcount; i++){
        		if(this.dsList2.getColumn(i, "rowCheck") > 0 ){
        			this.gfnInsertRow(this.dsList3, "last");

        			var nRow = this.dsList3.rowcount-1;
        			var arr = this.dsList2.getColumn(i, "emlAddr").split("@");

        			this.dsList3.setColumn(nRow, "rcvEmlAddr", this.dsList2.getColumn(i, "emlAddr"));
        			this.dsList3.setColumn(nRow, "emlSvr", arr[1]);
        			this.dsList3.setColumn(nRow, "rcvUserNm", this.dsList2.getColumn(i, "memberNmKr"));
        			this.dsList3.setColumn(nRow, "rcvUserId", this.dsList2.getColumn(i, "memberId"));

        			this.dsList2.deleteRow(i);
        		}
        	}
        };

        this.divBottom_btnAddRow_onclick = function(obj,e)
        {
        	this.gfnInsertRow(this.dsList3, "last");
        };

        this.divBottom_btnDeleteRow_onclick = function(obj,e)
        {
        	this.gfnDeleteRow(this.dsList3);
        };

        this.divBottom_grdList_onheadclick = function(obj,e)
        {
        	this.gfnSetGridCheckAll(obj, e, "rowCheck");
        };

        this.btnInit_onclick = function(obj,e)
        {
        	this.divTop.form.edtEmlTtl.set_value("");
        	this.divTop.form.edtTmpltNm.set_value("");
        	this.divTop.form.textSndCn.set_value("");
        	this.divBottom.form.edtSearch.set_value("");
        	this.dsList2.clearData();
        	this.dsList3.clearData();
        };

        this.btnSnd_onclick = function(obj,e)
        {
        	this.fnValidation();
        };

        this.divTop_Button04_onclick = function(obj,e)
        {
        	var oArg = {  };

        	this.gfnOpenPopup("malTmpltSearch", "pts::mal/MAL_1020P.xfdl", oArg, "fnPopupAfter", "");
        };
        /************************************************************************************************
        * 사용자 FUNCTION 영역
        ************************************************************************************************/

        this.fnValidation = function ()
        {
        	if(this.dsList3.rowcount == 0){
        		this.gfnAlert("CM_MSG_SND_NORCV");
        		return false;
        	}
        	for(var i = 0; i < this.dsList3.rowcount; i++){
        		if(this.dsList3.getColumn(i, "rcvEmlAddr") == null){
        			this.gfnAlert("CM_MSG_SAVE_REQUIRE", ["이메일"]);
        			return false;
        		}
        	}

        	this.fnSndMal();
        };

        /**
         * description 엔터키 이벤트
        */
        this.onkeyup = function(obj,e)
        {
        	if(e.keycode==13){
        		this.divBottom_btn_search_onclick();
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divTop.form.staMid.addEventHandler("onclick",this.Div01_Static10_00_00_00_00_onclick,this);
            this.divTop.form.textSndCn.addEventHandler("oneditclick",this.TextArea01_oneditclick,this);
            this.divTop.form.textSndCn.addEventHandler("onchanged",this.Div01_TextArea01_00_onchanged,this);
            this.divTop.form.Button04.addEventHandler("onclick",this.divTop_Button04_onclick,this);
            this.staTitle.addEventHandler("onclick",this.sta_title_onclick,this);
            this.btnInit.addEventHandler("onclick",this.btnInit_onclick,this);
            this.btnSnd.addEventHandler("onclick",this.btnSnd_onclick,this);
            this.staHeading.addEventHandler("onclick",this.Static09_onclick,this);
            this.divDrop.form.grdFileList.addEventHandler("onheadclick",this.grdFileList_onheadclick,this);
            this.divDrop.form.grdFileList.addEventHandler("oncellclick",this.grdFileList_oncellclick,this);
            this.divBottom.form.staHeading00.addEventHandler("onclick",this.Static09_onclick,this);
            this.divBottom.form.grdList.addEventHandler("oncelldblclick",this.divResult_grdList_oncelldblclick,this);
            this.divBottom.form.grdList.addEventHandler("onheadclick",this.divBottom_grdList_onheadclick,this);
            this.divBottom.form.grdList00.addEventHandler("oncelldblclick",this.divResult_grdList_oncelldblclick,this);
            this.divBottom.form.cboSearch.addEventHandler("onkeyup",this.onkeyup,this);
            this.divBottom.form.edtSearch.addEventHandler("onkeyup",this.onkeyup,this);
            this.divBottom.form.btn_search.addEventHandler("onclick",this.divBottom_btn_search_onclick,this);
            this.divBottom.form.btnAddRow.addEventHandler("onclick",this.divBottom_btnAddRow_onclick,this);
            this.divBottom.form.btnDeleteRow.addEventHandler("onclick",this.divBottom_btnDeleteRow_onclick,this);
            this.divBottom.form.staHeading00_00.addEventHandler("onclick",this.Static09_onclick,this);
            this.divBottom.form.Button04_00_00.addEventHandler("onclick",this.divBottom_btnRight_onclick,this);
        };
        this.loadIncludeScript("MAL_1020M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
