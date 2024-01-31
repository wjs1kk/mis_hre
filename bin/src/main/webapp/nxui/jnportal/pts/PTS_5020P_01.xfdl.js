(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PTS_5020P_01");
            this.set_titletext("업체/기관명 검색");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,680);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_List", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NUM\" type=\"STRING\" size=\"256\"/><Column id=\"RQST_NO\" type=\"STRING\" size=\"256\"/><Column id=\"RQST_DT\" type=\"STRING\" size=\"256\"/><Column id=\"APV_STAT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"APV_STAT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RQST_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RQST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RQST_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"SBJ\" type=\"STRING\" size=\"256\"/><Column id=\"FRM_DT\" type=\"STRING\" size=\"256\"/><Column id=\"TO_DT\" type=\"STRING\" size=\"256\"/><Column id=\"HEAD_STAT_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"RQST_NO\">ACT02202001-0001</Col><Col id=\"RQST_DT\">20200101</Col><Col id=\"APV_STAT_NM\">결재중</Col><Col id=\"APV_STAT_CD\">020-000-0100</Col><Col id=\"RQST_DEPT_NM\">인사총무팀</Col><Col id=\"RQST_NM\">홍길동</Col><Col id=\"RQST_AMT\">100000</Col><Col id=\"SBJ\">연구활동비 지급신청서활동비 지급신청서활동비 지급신청서활동비 지급신청서</Col><Col id=\"NUM\">1</Col><Col id=\"FRM_DT\">20160101</Col><Col id=\"TO_DT\">20160101</Col><Col id=\"HEAD_STAT_CD\">D</Col></Row><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("findCorp","0","0","800","680",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_cssclass("div_WF_Area");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0",null,"50","0",null,null,null,null,null,this.findCorp.form);
            obj.set_taborder("2");
            obj.set_text("업체/기관 검색");
            obj.set_cssclass("portal_sta_popTitle");
            this.findCorp.addChild(obj.name, obj);

            obj = new Static("Static03","30","Static00:20",null,"98","30",null,null,null,null,null,this.findCorp.form);
            obj.set_taborder("6");
            obj.set_cssclass("portal_systemBg");
            this.findCorp.addChild(obj.name, obj);

            obj = new Edit("Edit07",null,"Static00:50","240","38","310",null,null,null,null,null,this.findCorp.form);
            obj.set_taborder("4");
            obj.set_displaynulltext("업체명 입력");
            obj.set_cssclass("portal_edi");
            this.findCorp.addChild(obj.name, obj);

            obj = new Static("Static01","0","Static03:10","500","53",null,null,null,null,null,null,this.findCorp.form);
            obj.set_taborder("1");
            obj.set_text("검색결과");
            obj.set_cssclass("portal_sta_popTit");
            this.findCorp.addChild(obj.name, obj);

            obj = new Grid("Grid00","30","Static01:0",null,null,"30","95",null,null,null,null,this.findCorp.form);
            obj.set_taborder("3");
            obj.set_binddataset("ds_list");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_cssclass("portal_grd_bdList");
            obj.set_nodatatext("기업명을 검색해주세요");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"385\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"기업명\"/></Band><Band id=\"body\"><Cell text=\"bind:NUM\"/><Cell col=\"1\" text=\"bind:SBJ\" displaytype=\"editcontrol\" edittype=\"text\"/></Band></Format></Formats>");
            this.findCorp.addChild(obj.name, obj);

            obj = new Button("btn_popClose","42.50%","Grid00:20",null,"45","42.50%",null,null,null,null,null,this.findCorp.form);
            obj.set_text("확인");
            obj.set_cssclass("portal_btn");
            obj.set_visible("true");
            obj.set_taborder("0");
            this.findCorp.addChild(obj.name, obj);

            obj = new Button("btnSearch","Edit07:10","Static00:50","60","38",null,null,null,null,null,null,this.findCorp.form);
            obj.set_taborder("5");
            obj.set_cssclass("portal_btn");
            obj.set_text("검색");
            this.findCorp.addChild(obj.name, obj);

            obj = new Button("btn_popClose00",null,"0","50","50","0",null,null,null,null,null,this.findCorp.form);
            obj.set_cssclass("portal_btn_close");
            obj.set_visible("true");
            obj.set_taborder("7");
            this.findCorp.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.findCorp.form
            obj = new Layout("default","",0,0,this.findCorp.form,function(p){});
            this.findCorp.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item33","findCorp.form.div_Search.form.Edit01","value","ds_search","SCH_RQST_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","findCorp.form.div_Search.form.SCH_RQST_DT","value","ds_search","SCH_RQST_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","findCorp.form.div_Search.form.SCH_RQST_ID","value","ds_search","SCH_RQST_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","findCorp.form.div_Search.form.SCH_APV_STAT_CD","value","ds_search","SCH_APV_STAT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","findCorp.form.div_Search.form.SCH_LAST_UPT_NM","value","ds_search","SCH_LAST_UPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","findCorp.form.div_Search.form.SCH_LAST_UPT_DT","value","ds_search","SCH_LAST_UPT_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","findCorp.form.div_Search.form.SCH_DEPT_CD","value","ds_search","SCH_RQST_DEPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item40","findCorp.form.div_Search.form.SCH_RQST_NM","value","ds_search","SCH_RQST_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item41","findCorp.form.div_Search.form.SCH_CAL_MON","value","ds_search","SCH_CAL_MON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item42","findCorp.form.div_Search.form.Radio00","value","ds_main","INOUT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item43","findCorp.form.div_Search.form.CheckBox00","value","ds_main","COM_CAR_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item44","findCorp.form.div_Search.form.Spin00","value","ds_main","YY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item45","findCorp.form.div_Search02_00.form.SCH_RQST_NO","value","ds_search","SCH_RQST_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item46","findCorp.form.div_Search02_00.form.SCH_RQST_DT","value","ds_search","SCH_RQST_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item47","findCorp.form.div_Search02_00.form.SCH_RQST_ID","value","ds_search","SCH_RQST_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item48","findCorp.form.div_Search02_00.form.SCH_APV_STAT_CD","value","ds_search","SCH_APV_STAT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item49","findCorp.form.div_Search02_00.form.SCH_LAST_UPT_NM","value","ds_search","SCH_LAST_UPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item50","findCorp.form.div_Search02_00.form.SCH_LAST_UPT_DT","value","ds_search","SCH_LAST_UPT_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item51","findCorp.form.div_Search02_00.form.SCH_DEPT_CD","value","ds_search","SCH_RQST_DEPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item52","findCorp.form.div_Search02_00.form.SCH_RQST_NM","value","ds_search","SCH_RQST_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item53","findCorp.form.div_Search02_00.form.SCH_CAL_MON","value","ds_search","SCH_CAL_MON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item54","findCorp.form.div_Search02_00.form.Radio00","value","ds_main","INOUT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item55","findCorp.form.div_Search02_00.form.CheckBox00","value","ds_main","COM_CAR_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item56","findCorp.form.div_Search02_00.form.Spin00","value","ds_main","YY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item57","findCorp.form.div_Search02_00.form.Combo00","value","ds_main","TP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item58","findCorp.form.div_Search02_00.form.Edit05","value","ds_main","RQST_AMT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item59","findCorp.form.div_Search02_00.form.RQST_NM","value","ds_main","RQST_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item60","findCorp.form.div_Search02_00.form.TextArea01","value","ds_main","CONT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item61","findCorp.form.div_Search02_00.form.SBJ","value","ds_main","SBJ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item62","findCorp.form.div_Search02_00.form.FRM_DT","value","ds_main","FRM_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item63","findCorp.form.div_Search02_00.form.TO_DT","value","ds_main","TO_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item64","findCorp.form.div_Search02_00.form.rqstNo","value","ds_main","RQST_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item65","findCorp.form.div_Search02_00.form.commCd","value","ds_main","COMM_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("PTS_5020P_01.xfdl", function() {

        this.findCorp_btn_popClose_onclick = function(obj,e)
        {
        	this.close();
        };

        this.findCorp_btn_popClose00_onclick = function(obj,e)
        {
        	this.close();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.findCorp.form.Static01.addEventHandler("onclick",this.Static_onclick,this);
            this.findCorp.form.btn_popClose.addEventHandler("onclick",this.findCorp_btn_popClose_onclick,this);
            this.findCorp.form.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
            this.findCorp.form.btn_popClose00.addEventHandler("onclick",this.findCorp_btn_popClose00_onclick,this);
        };
        this.loadIncludeScript("PTS_5020P_01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
