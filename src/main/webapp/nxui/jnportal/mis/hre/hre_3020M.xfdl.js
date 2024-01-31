(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("hre_3020M");
            this.set_titletext("New Form");
            this.set_background("white");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,961);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"isChecked\" type=\"STRING\" size=\"256\"/><Column id=\"tmHeader\" type=\"STRING\" size=\"256\"/><Column id=\"EVAL_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"EVAL_ID\" type=\"STRING\" size=\"256\"/><Column id=\"EVAL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EVAL_TERM\" type=\"STRING\" size=\"256\"/><Column id=\"EVAL_OP_START_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"EVAL_OP_END_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"EVAL_YEAR\">2022</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"text\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_evalid", this);
            obj._setContents("<ColumnInfo><Column id=\"COMM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COMM_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_useYn", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD\">Y</Col><Col id=\"NM\">사용</Col></Row><Row><Col id=\"CD\">N</Col><Col id=\"NM\">미사용</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static14","50","15","290","58",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("평가 ID 관리");
            obj.set_enable("true");
            obj.set_cssclass("sta_WF_compTitle01");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"20","65","28","60",null,null,null,null,null,this);
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Save");
            obj.set_visible("true");
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Div("divSrch","50","125",null,null,"50","786",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("");
            obj.set_cssclass("div_WF_panel");
            this.addChild(obj.name, obj);

            obj = new Static("sta001","10","10","120","30",null,null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("0");
            obj.set_text("평가연도");
            obj.set_cssclass("sta_WF_condition01");
            this.divSrch.addChild(obj.name, obj);

            obj = new Static("sta002","452","10","100","30",null,null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("1");
            obj.set_text("평가ID");
            obj.set_cssclass("sta_WF_condition01");
            this.divSrch.addChild(obj.name, obj);

            obj = new Edit("edtMemberNm","1160","13","290","26",null,null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("2");
            this.divSrch.addChild(obj.name, obj);

            obj = new Static("Static16_00","562","-3","20",null,null,"3",null,null,null,null,this.divSrch.form);
            obj.set_taborder("3");
            obj.set_text("w 10");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.divSrch.addChild(obj.name, obj);

            obj = new Combo("combo_EVAL_ID","582","13","150","26",null,null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("4");
            obj.set_innerdataset("ds_evalid");
            obj.set_codecolumn("COMM_CD");
            obj.set_datacolumn("COMM_NM");
            obj.set_value("");
            obj.set_index("0");
            this.divSrch.addChild(obj.name, obj);

            obj = new Spin("Spin","114","6","283","37",null,null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("5");
            obj.set_min("1900");
            obj.set_max("9999");
            obj.set_value("");
            this.divSrch.addChild(obj.name, obj);

            obj = new Combo("cboInOutFlag00","1000","13","150","26",null,null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("6");
            obj.set_innerdataset("ds_search");
            obj.set_codecolumn("value");
            obj.set_datacolumn("text");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("0");
            this.divSrch.addChild(obj.name, obj);

            obj = new Static("sta002_00","880","13","100","30",null,null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("7");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_condition01");
            this.divSrch.addChild(obj.name, obj);

            obj = new Static("Static14_00_00_00","50","205","290","45",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("검색조건");
            obj.set_enable("true");
            obj.set_cssclass("sta_WF_subTitle01");
            this.addChild(obj.name, obj);

            obj = new Static("staGridRowCnt","140","214","149","27",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("(총 0건)");
            obj.set_cssclass("sta_WF_subResult");
            this.addChild(obj.name, obj);

            obj = new Button("btn_row_add",null,"227","73","26","140",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_Row_Add");
            this.addChild(obj.name, obj);

            obj = new Button("btn_row_delete",null,"227","73","26","60",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_Row_Delete");
            this.addChild(obj.name, obj);

            obj = new Grid("grdDept","35","263",null,null,"80","20",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_binddataset("");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_autoupdatetype("itemselect");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("expand,null");
            obj.set_cssclass("grd_WF_tree");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"100\" band=\"left\"/><Column size=\"100\" band=\"left\"/><Column size=\"100\" band=\"left\"/><Column size=\"450\" band=\"left\"/><Column size=\"300\" band=\"left\"/><Column size=\"300\" band=\"left\"/><Column size=\"300\" band=\"left\"/><Column size=\"100\" band=\"left\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"34\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"상태\"/><Cell col=\"2\" text=\"평가연도\"/><Cell col=\"3\" text=\"평가ID\"/><Cell col=\"4\" text=\"평가명\"/><Cell col=\"5\" text=\"펑가대상 기간\"/><Cell col=\"6\" text=\"평가 시작 일자\"/><Cell col=\"7\" text=\"평가종료 일자\"/><Cell col=\"8\" text=\"사용여부\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" textAlign=\"center\" text=\"bind:rowCheck\"/><Cell col=\"1\" textAlign=\"center\" imagestretch=\"fit\" displaytype=\"normal\" text=\"bind:tmHeader\"/><Cell col=\"2\" displaytype=\"editcontrol\" text=\"bind:EVAL_YEAR\"/><Cell col=\"3\" text=\"bind:EVAL_ID\"/><Cell col=\"4\" displaytype=\"editcontrol\" text=\"bind:EVAL_NM\" edittype=\"text\"/><Cell col=\"5\" displaytype=\"editcontrol\" text=\"bind:EVAL_TERM\" edittype=\"normal\"/><Cell col=\"6\" displaytype=\"calendarcontrol\" text=\"bind:EVAL_OP_START_DATE\"/><Cell col=\"7\" displaytype=\"calendarcontrol\" text=\"bind:EVAL_OP_END_DATE\"/><Cell col=\"8\" displaytype=\"checkboxcontrol\" text=\"bind:USE_YN\" edittype=\"checkbox\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"138","65","28","60",null,null,null,null,null,this);
            obj.set_text("조회");
            obj.set_cssclass("");
            obj.set_taborder("8");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSrch.form
            obj = new Layout("default","",0,0,this.divSrch.form,function(p){});
            this.divSrch.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1920,961,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSrch.form.calDtFrom","value","dsSearch","applyFromDt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSrch.form.calDtTo","value","dsSearch","applyToDt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSrch.form.edtMemberNm","value","dsSearch","memberNmKr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSrch.form.combo_EVAL_ID","value","dsSearch","inOrOutFlag");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSrch.form.cboJoinAprvStts","value","dsSearch","joinAprvStts");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSrch.form.chWhdwlYn","value","dsSearch","whdwlYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSrch.form.edtMemberNm00","value","dsSearch","memberNmKr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSrch.form.cboInOutFlag00","value","dsSearch","inOrOutFlag");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("hre_3020M.xfdl","lib::common.xjs");
        this.registerScript("hre_3020M.xfdl", function() {
        /**
        *  OOO
        *  MenuPath      OOO
        *  FileName      OOO.xfdl
        *  Creator 	     OOO
        *  CreateDate    0000.00.00
        *  Desction      OOO
        ************** 소스 수정 이력 ***********************************************
        *  date          Modifier    Description
        *******************************************************************************
        *  0000.00.00    OOO 	     최초 생성
        *******************************************************************************/
        this.executeIncludeScript("lib::common.xjs"); /*include "lib::common.xjs"*/;

        /***********************************************************************************************
        * FORM EVENT 영역(onload, onbeforeclose)
        /***********************************************************************************************/



        /************************************************************************************************
        * TRANSACTION 서비스 호출 처리
        ************************************************************************************************/





        /************************************************************************************************
         * CALLBACK 콜백 처리부분(Transaction, Popup)
         ************************************************************************************************/





        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/

        this.btn_search_onclick = function(obj,e)
        {
        	this.fn_save();
        };


        //저장버튼
        this.btn_save_onclick = function(obj,e)
        {

        };




        /************************************************************************************************
        * 사용자 FUNCTION 영역
        ************************************************************************************************/




        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.divSrch.form.sta001.addEventHandler("onclick",this.divSearch_sta_01_onclick,this);
            this.divSrch.form.sta002.addEventHandler("onclick",this.divSearch_sta_01_onclick,this);
            this.divSrch.form.edtMemberNm.addEventHandler("onkeyup",this.divSearch_divSrch_calDtFrom_onkeyup,this);
            this.divSrch.form.combo_EVAL_ID.addEventHandler("onkeyup",this.divSearch_divSrch_calDtFrom_onkeyup,this);
            this.divSrch.form.cboInOutFlag00.addEventHandler("onitemchanged",this.divSrch_cboInOutFlag00_onitemchanged,this);
            this.divSrch.form.sta002_00.addEventHandler("onclick",this.divSrch_sta002_00_onclick,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
        };
        this.loadIncludeScript("hre_3020M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
