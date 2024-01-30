(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SEQ_1010M");
            this.set_titletext("채번기준 관리");
            this.set_cssclass("frm_WF_comp");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSeqMng", this);
            obj._setContents("<ColumnInfo><Column id=\"seqId\" type=\"STRING\" size=\"20\"/><Column id=\"seqPrefix\" type=\"STRING\" size=\"50\"/><Column id=\"seqSuffix\" type=\"STRING\" size=\"50\"/><Column id=\"seqDigits\" type=\"INT\" size=\"256\"/><Column id=\"seqMin\" type=\"INT\" size=\"256\"/><Column id=\"seqInc\" type=\"INT\" size=\"256\"/><Column id=\"seqCurr\" type=\"STRING\" size=\"150\"/><Column id=\"seqDesc\" type=\"STRING\" size=\"1000\"/><Column id=\"useYn\" type=\"STRING\" size=\"1\"/><Column id=\"rgstId\" type=\"STRING\" size=\"20\"/><Column id=\"rgstDt\" type=\"DATETIME\" size=\"256\"/><Column id=\"rgstIp\" type=\"STRING\" size=\"40\"/><Column id=\"updtId\" type=\"STRING\" size=\"20\"/><Column id=\"updtDt\" type=\"DATETIME\" size=\"256\"/><Column id=\"updtIp\" type=\"STRING\" size=\"40\"/><Column id=\"rowCheck\" type=\"STRING\" size=\"256\"/><Column id=\"rowStatus\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSchSeq", this);
            obj._setContents("<ColumnInfo><Column id=\"seqId\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"seqDesc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUseYn", this);
            obj._setContents("<ColumnInfo><Column id=\"text\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUseYnSch", this);
            obj._setContents("<ColumnInfo><Column id=\"text\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta_01","50","0","500","58",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_compTitle01");
            obj.set_expr("comp.parent.getOwnerFrame().tabArgs.title");
            obj.set_text("채번기준 관리");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","50","58",null,"71","50",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staBg","0","0",null,"56","0",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_bg");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta001","20","15","100","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("채번 ID");
            obj.set_cssclass("sta_WF_condition01");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta002","25%","15","100","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("설명");
            obj.set_cssclass("sta_WF_condition01");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSchSeqId","sta001:10","15","250","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSchSeqDesc","sta002:10","15","250","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta003","910","15","100","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("사용 여부");
            obj.set_cssclass("sta_WF_condition01");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("edtSchUseYn","sta003:10","15","96","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_innerdataset("dsUseYnSch");
            obj.set_codecolumn("value");
            obj.set_datacolumn("text");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divResult","50","divSearch:0",null,null,"50","38",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Grid("grdSeq","0","45",null,null,"0","0",null,null,null,null,this.divResult.form);
            obj.set_taborder("1");
            obj.set_binddataset("dsSeqMng");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_autoupdatetype("itemselect");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\" band=\"left\"/><Column size=\"48\" band=\"left\"/><Column size=\"48\" band=\"left\"/><Column size=\"120\"/><Column size=\"160\"/><Column size=\"72\"/><Column size=\"72\"/><Column size=\"72\"/><Column size=\"160\"/><Column size=\"96\"/><Column size=\"120\"/><Column size=\"440\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"34\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"순번\"/><Cell col=\"1\" rowspan=\"2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" rowspan=\"2\" text=\"상태\"/><Cell col=\"3\" rowspan=\"2\" text=\"채번 ID\"/><Cell col=\"4\" rowspan=\"2\" text=\"접두어\"/><Cell col=\"5\" colspan=\"3\" text=\"채번 정보\"/><Cell col=\"8\" rowspan=\"2\" text=\"접미어\"/><Cell col=\"9\" rowspan=\"2\" text=\"사용 여부\"/><Cell col=\"10\" rowspan=\"2\" text=\"현재값\"/><Cell col=\"11\" rowspan=\"2\" text=\"설명\"/><Cell row=\"1\" col=\"5\" text=\"자릿수\"/><Cell row=\"1\" col=\"6\" text=\"증가\"/><Cell row=\"1\" col=\"7\" text=\"초기값\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\" text=\"expr:currow+1\" textAlign=\"center\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" textAlign=\"center\" text=\"bind:rowCheck\"/><Cell col=\"2\" textAlign=\"center\" imagestretch=\"fit\" displaytype=\"normal\" text=\"bind:rowStatus\"/><Cell col=\"3\" edittype=\"expr:rowStatus == &quot;inserted&quot; ? &quot;text&quot; : &quot;none&quot;\" text=\"bind:seqId\" textAlign=\"left\" displaytype=\"expr:rowStatus == &quot;inserted&quot; ? &quot;editcontrol&quot; : &quot;normal&quot;\"/><Cell col=\"4\" edittype=\"text\" text=\"bind:seqPrefix\" textAlign=\"left\" displaytype=\"editcontrol\"/><Cell col=\"5\" edittype=\"normal\" text=\"bind:seqDigits\" displaytype=\"editcontrol\"/><Cell col=\"6\" edittype=\"normal\" text=\"bind:seqInc\" displaytype=\"editcontrol\"/><Cell col=\"7\" edittype=\"normal\" text=\"bind:seqMin\" displaytype=\"editcontrol\"/><Cell col=\"8\" edittype=\"text\" text=\"bind:seqSuffix\" textAlign=\"left\" displaytype=\"editcontrol\"/><Cell col=\"9\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"dsUseYn\" combocodecol=\"value\" combodatacol=\"text\" text=\"bind:useYn\"/><Cell col=\"10\" textAlign=\"left\" text=\"bind:seqCurr\"/><Cell col=\"11\" edittype=\"text\" text=\"bind:seqDesc\" textAlign=\"left\" displaytype=\"editcontrol\"/></Band></Format></Formats>");
            this.divResult.addChild(obj.name, obj);

            obj = new Static("Static04_00_00","20","0","60","18",null,null,null,null,null,null,this.divResult.form);
            obj.set_taborder("0");
            obj.set_text("h 18");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divResult.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_00","110","0","60","45",null,null,null,null,null,null,this.divResult.form);
            obj.set_taborder("2");
            obj.set_text("h 45");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divResult.addChild(obj.name, obj);

            obj = new Static("Static09","0","0","82","45",null,null,null,null,null,null,this.divResult.form);
            obj.set_taborder("3");
            obj.set_text("검색결과");
            obj.set_cssclass("sta_WF_subTitle01");
            obj.set_fittocontents("width");
            this.divResult.addChild(obj.name, obj);

            obj = new Static("staGridRowCnt","Static09:10","0","149","45",null,null,null,null,null,null,this.divResult.form);
            obj.set_taborder("4");
            obj.set_text("(총 0건)");
            obj.set_cssclass("sta_WF_subTxt");
            this.divResult.addChild(obj.name, obj);

            obj = new Button("btnDeleteRow",null,"14","73","26","0",null,null,null,null,null,this.divResult.form);
            obj.set_taborder("6");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_Row_Delete");
            obj.set_enable("true");
            this.divResult.addChild(obj.name, obj);

            obj = new Button("btnAddRow",null,"14","73","26","btnDeleteRow:5",null,null,null,null,null,this.divResult.form);
            obj.set_taborder("5");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_Row_Add");
            this.divResult.addChild(obj.name, obj);

            obj = new Static("Static02",null,"0","50","720","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("W\r\n 50");
            obj.set_visible("false");
            obj.set_background("antiquewhite");
            obj.set_color("blue");
            this.addChild(obj.name, obj);

            obj = new Static("Static34","0","0","50","720",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("W 50");
            obj.set_visible("false");
            obj.set_background("antiquewhite");
            obj.set_color("blue");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_01","60","113","100","15",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"20","65","28","50",null,null,null,null,null,this);
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Save");
            obj.set_visible("true");
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"20","65","28","btnSave:3",null,null,null,null,null,this);
            obj.set_text("조회");
            obj.set_cssclass("");
            obj.set_taborder("7");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",1032,72,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divResult.form
            obj = new Layout("default","",0,0,this.divResult.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.grdSeq.set_taborder("1");
                p.grdSeq.set_binddataset("dsSeqMng");
                p.grdSeq.set_autofittype("col");
                p.grdSeq.set_autoenter("select");
                p.grdSeq.set_autoupdatetype("itemselect");
                p.grdSeq.move("0","45",null,null,"0","0");

                p.Static04_00_00.set_taborder("0");
                p.Static04_00_00.set_text("h 18");
                p.Static04_00_00.set_visible("false");
                p.Static04_00_00.set_background("aqua");
                p.Static04_00_00.set_color("blue");
                p.Static04_00_00.set_textAlign("center");
                p.Static04_00_00.set_verticalAlign("middle");
                p.Static04_00_00.set_opacity("0.7");
                p.Static04_00_00.set_font("normal 12px/normal \"Arial\"");
                p.Static04_00_00.move("20","0","60","18",null,null);

                p.Static04_00_00_00.set_taborder("2");
                p.Static04_00_00_00.set_text("h 45");
                p.Static04_00_00_00.set_visible("false");
                p.Static04_00_00_00.set_background("aqua");
                p.Static04_00_00_00.set_color("blue");
                p.Static04_00_00_00.set_textAlign("center");
                p.Static04_00_00_00.set_verticalAlign("middle");
                p.Static04_00_00_00.set_opacity("0.7");
                p.Static04_00_00_00.set_font("normal 12px/normal \"Arial\"");
                p.Static04_00_00_00.move("110","0","60","45",null,null);

                p.Static09.set_taborder("3");
                p.Static09.set_text("검색결과");
                p.Static09.set_cssclass("sta_WF_subTitle01");
                p.Static09.set_fittocontents("width");
                p.Static09.move("0","0","82","45",null,null);

                p.staGridRowCnt.set_taborder("4");
                p.staGridRowCnt.set_text("(총 0건)");
                p.staGridRowCnt.set_cssclass("sta_WF_subTxt");
                p.staGridRowCnt.move("Static09:10","0","149","45",null,null);

                p.btnDeleteRow.set_taborder("6");
                p.btnDeleteRow.set_text("행삭제");
                p.btnDeleteRow.set_cssclass("btn_WF_Row_Delete");
                p.btnDeleteRow.set_enable("true");
                p.btnDeleteRow.move(null,"14","73","26","0",null);

                p.btnAddRow.set_taborder("5");
                p.btnAddRow.set_text("행추가");
                p.btnAddRow.set_cssclass("btn_WF_Row_Add");
                p.btnAddRow.move(null,"14","73","26","btnDeleteRow:5",null);
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
            obj = new Layout("default","",1920,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.edtSchSeqId","value","dsSchSeq","seqId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.edtSchSeqDesc","value","dsSchSeq","seqDesc");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.edtSchUseYn","value","dsSchSeq","useYn");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SEQ_1010M.xfdl","lib::common.xjs");
        this.registerScript("SEQ_1010M.xfdl", function() {
        /**
        *  채번기준 관리
        *  MenuPath      시스템 관리 - 기준정보 관리 - 채번기준 관리
        *  FileName      SEQ_1010M.xfdl
        *  Creator       parksw
        *  CreateDate    2023.03.14
        *  Desction      채번기준 관리
        ************** 소스 수정 이력 ***********************************************
        *  date          Modifier    Description
        *******************************************************************************
        *  2023.03.14    parksw      최초 생성
        *  2023.04.18    parksw      폼 ID 변경
        *******************************************************************************/

        this.executeIncludeScript("lib::common.xjs"); /*include "lib::common.xjs"*/;

        /***********************************************************************************************
        * FORM EVENT 영역(onload, onbeforeclose)
        /***********************************************************************************************/

        this.seqManage_onload = function(obj,e)
        {
            this.gfnFormOnLoad(this);
            this.gfnLoadCombo("loadCombo", "dsUseYn=PMS:SM:USE_YN dsUseYnSch=PMS:SM:USE_YN:A", "fnComboCallback");
        };

        /************************************************************************************************
        * TRANSACTION 서비스 호출 처리
        ************************************************************************************************/

        this.fnSearch = function ()
        {
        	var strSvcId    = "getSeqManageList";
        	var strSvcUrl   = "sm/getSeqManageList.do";
        	var inData      = "dsSchSeq";
        	var outData     = "dsSeqMng";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        this.fnSave = function ()
        {
        	var strSvcId    = "saveSeqManageList";
        	var strSvcUrl   = "sm/saveSeqManageList.do";
        	var inData      = "dsSeqMng";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        /************************************************************************************************
         * CALLBACK 콜백 처리부분(Transaction, Popup)
         ************************************************************************************************/

        this.fnComboCallback = function (svcId, errorCode, errorMsg)
        {
            if (svcId == "loadCombo") {
                this.fnSearch();
            }
        };

        this.fnCallback = function (svcId, errorCode, errorMsg)
        {
            switch (svcId) {
                case "getSeqManageList":
        			this.gfnRowCount(this.dsSeqMng, this.divResult.form.staGridRowCnt);
                    break;
                case "saveSeqManageList":
                    if (this.callbackMsg == "success") {
                        this.gfnAlert("CM_MSG_SAVE_SUCCESS");  // 저장 되었습니다.
                        this.fnSearch();
                    }
                    break;
            }
        };

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/

        this.divResult_btnAddRow_onclick = function(obj,e)
        {
        	this.fnAddRow();
        };

        this.divResult_btnDeleteRow_onclick = function(obj,e)
        {
        	this.fnDeleteRow();
        };

        this.btnSearch_onclick = function(obj,e)
        {
            this.fnSearch();
        };

        this.btnSave_onclick = function(obj,e)
        {
        	this.fnBeforeSave();
        };

        this.divSearch_schSeqId_onkeyup = function(obj,e)
        {
        	if (e.keycode == 13) {
                this.fnSearch();
            }
        };

        /************************************************************************************************
        * 사용자 FUNCTION 영역
        ************************************************************************************************/

        this.fnAddRow = function ()
        {
            this.gfnInsertRow(this.dsSeqMng, "last");
            var i = this.dsSeqMng.rowposition;
            this.dsSeqMng.setColumn(i, "seqDigits", 4);
            this.dsSeqMng.setColumn(i, "seqMin", 1);
            this.dsSeqMng.setColumn(i, "seqInc", 1);
            this.dsSeqMng.setColumn(i, "useYn", "Y");
        };

        this.fnDeleteRow = function ()
        {
        	this.gfnDeleteRow(this.dsSeqMng);
        };

        this.fnBeforeSave = function ()
        {
            if (!this.fnValidate()) {
                return;
            }

            this.gfnAlert("CM_CFM_BEFORE_SAVE", "", "", {trueFunc: "fnSave", falseFunc: ""});  // 변경된 내역을 저장 하시겠습니까?
        };

        this.fnValidate = function ()
        {
            if (this.dsSeqMng.rowcount == 0 || !this.gfnDsIsUpdated(this.dsSeqMng)) {
                this.gfnAlert("CM_MSG_SAVE_NODATA");  // 저장할 데이터가 없습니다.
                return false;
            }

        	if (!this.gfnDsIsUpdated(this.dsSeqMng)) {
        		this.gfnAlert("CM_MSG_SAVE_NOCHANGE");  // 변경된 내역이 없습니다.
        		return false;
        	}

            var args = [
                ["seqId", "NULL|MAX_LEN:20", ""],
                ["seqPrefix", "MAX_LEN:50", ""],
                ["seqSuffix", "MAX_LEN:50", ""],
                ["seqDigits", "NULL|MIN:0", ""],
                ["seqMin", "NULL|MIN:0", ""],
                ["seqInc", "NULL|MIN:1", ""],
                ["useYn", "NULL", ""],
                ["seqDesc", "MAX_LEN:1000", ""]
            ];

            return this.gfnCheckGrid(this.divResult.form.grdSeq, args, "");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.seqManage_onload,this);
            this.divSearch.form.staBg.addEventHandler("onclick",this.div_Search_Static00_onclick,this);
            this.divSearch.form.sta001.addEventHandler("onclick",this.div_Search_Static01_onclick,this);
            this.divSearch.form.edtSchSeqId.addEventHandler("onkeyup",this.divSearch_schSeqId_onkeyup,this);
            this.divSearch.form.edtSchSeqDesc.addEventHandler("onkeyup",this.divSearch_schSeqId_onkeyup,this);
            this.divSearch.form.edtSchUseYn.addEventHandler("onkeyup",this.divSearch_schSeqId_onkeyup,this);
            this.divResult.form.grdSeq.addEventHandler("onheadclick",this.grdTypeTwo_onheadclick,this);
            this.divResult.form.Static04_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.divResult.form.Static04_00_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.divResult.form.Static09.addEventHandler("onclick",this.Static09_onclick,this);
            this.divResult.form.btnDeleteRow.addEventHandler("onclick",this.divResult_btnDeleteRow_onclick,this);
            this.divResult.form.btnAddRow.addEventHandler("onclick",this.divResult_btnAddRow_onclick,this);
            this.Static02.addEventHandler("onclick",this.Static02_onclick,this);
            this.Static34.addEventHandler("onclick",this.Static02_onclick,this);
            this.Static04_00_00_01.addEventHandler("onclick",this.Static31_onclick,this);
            this.btnSave.addEventHandler("onclick",this.btnSave_onclick,this);
            this.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
        };
        this.loadIncludeScript("SEQ_1010M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
