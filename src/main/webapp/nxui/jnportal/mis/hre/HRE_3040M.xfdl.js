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
            this.set_titletext("시스템모듈관리");
            this.set_cssclass("frm_WF_comp");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,670);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsUseYn", this);
            obj._setContents("<ColumnInfo><Column id=\"value\" type=\"STRING\" size=\"256\"/><Column id=\"text\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSysIdComboSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"value\" type=\"STRING\" size=\"256\"/><Column id=\"text\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_codeE03", this);
            obj._setContents("");
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

            obj = new Static("sta001","20","15","70","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("평가ID");
            obj.set_cssclass("sta_WF_condition01");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cbo01","sta001:10","15","110","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
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

            obj = new Grid("grdEvaluationStageManage","0","45",null,null,"0","0",null,null,null,null,this.divResult.form);
            obj.set_taborder("2");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_autoupdatetype("itemselect");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"240\"/><Column size=\"120\"/><Column size=\"160\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"34\"/></Rows><Band id=\"head\"><Cell text=\"선택\"/><Cell col=\"1\" text=\"평가ID\"/><Cell col=\"2\" text=\"평가유형ID\"/><Cell col=\"3\" text=\"평가유형 명\"/><Cell col=\"4\" text=\"평가방식\"/><Cell col=\"5\" text=\"평가보정 방식\"/><Cell col=\"6\" text=\"사용\"/></Band><Band id=\"body\"><Cell textAlign=\"right\" displaytype=\"checkboxcontrol\"/><Cell col=\"1\" displaytype=\"editcontrol\" textAlign=\"left\"/><Cell col=\"2\" displaytype=\"editcontrol\" textAlign=\"left\"/><Cell col=\"3\" displaytype=\"editcontrol\" textAlign=\"left\"/><Cell col=\"4\" displaytype=\"combocontrol\" textAlign=\"left\"/><Cell col=\"5\" edittype=\"date\" displaytype=\"combocontrol\" calendardateformat=\"yyyy-MM-dd\" calendardisplaynulltype=\"nullmask\" calendarautoselect=\"true\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:rgstDt\" edittype=\"none\" textAlign=\"center\" displaytype=\"checkboxcontrol\"/></Band></Format></Formats>");
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

                p.grdEvaluationStageManage.set_taborder("2");
                p.grdEvaluationStageManage.set_autofittype("col");
                p.grdEvaluationStageManage.set_autoenter("select");
                p.grdEvaluationStageManage.set_autoupdatetype("itemselect");
                p.grdEvaluationStageManage.move("0","45",null,null,"0","0");

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
                p.set_titletext("시스템모듈관리");
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

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("HRE_3040M.xfdl","lib::common.xjs");
        this.registerScript("HRE_3040M.xfdl", function() {
        /**
        *  시스템 모듈 관리
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
        	this.fnLoadCombo();
        };

        /************************************************************************************************
        * TRANSACTION 서비스 호출 처리
        ************************************************************************************************/



        /************************************************************************************************
         * CALLBACK 콜백 처리부분(Transaction, Popup)
         ************************************************************************************************/



        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ****************************************************

        /************************************************************************************************
        * 사용자 FUNCTION 영역
        ************************************************************************************************/

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnSave.addEventHandler("onclick",this.btnSave_onclick,this);
            this.sta00.addEventHandler("onclick",this.sta_01_onclick,this);
            this.divSearch.form.staBg00.addEventHandler("onclick",this.div_Search_Static00_onclick,this);
            this.divSearch.form.staBg.addEventHandler("onclick",this.div_Search_Static00_onclick,this);
            this.divSearch.form.sta001.addEventHandler("onclick",this.divSearch_sta_01_onclick,this);
            this.divSearch.form.cbo01.addEventHandler("onitemchanged",this.divSearch_cbo01_onitemchanged,this);
            this.divResult.form.btnDeleteRow.addEventHandler("onclick",this.btnDeleteRow_onclick,this);
            this.divResult.form.btnAddRow.addEventHandler("onclick",this.btnAddRow_onclick,this);
            this.divResult.form.grdEvaluationStageManage.addEventHandler("onheadclick",this.Div00_grdModuleManage_onheadclick,this);
            this.divResult.form.sta004.addEventHandler("onclick",this.Static09_onclick,this);
        };
        this.loadIncludeScript("HRE_3040M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
