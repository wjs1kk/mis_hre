(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PTS_5020P_02");
            this.set_titletext("업체/기관명 신규등록");
            this.set_scrolltype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,490);
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
            obj = new Div("register","0","0","800","490",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_cssclass("div_WF_Area");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static100_00_00_00_00","30","220",null,"51","30",null,null,null,null,null,this.register.form);
            obj.set_taborder("10");
            obj.set_cssclass("portal_sta_memLabelBg");
            obj.set_text("");
            this.register.addChild(obj.name, obj);

            obj = new Static("Static105","30","Static100_00_00_00_00:-1",null,"127","30",null,null,null,null,null,this.register.form);
            obj.set_taborder("24");
            obj.set_cssclass("portal_sta_memLabelBg");
            obj.set_text("");
            this.register.addChild(obj.name, obj);

            obj = new Static("Static100","30","70",null,"51","30",null,null,null,null,null,this.register.form);
            obj.set_taborder("2");
            obj.set_cssclass("portal_sta_memLabelBg");
            obj.set_text("");
            this.register.addChild(obj.name, obj);

            obj = new Static("Static100_00_00","30","Static100:-1",null,"51","30",null,null,null,null,null,this.register.form);
            obj.set_taborder("4");
            obj.set_cssclass("portal_sta_memLabelBg");
            obj.set_text("");
            this.register.addChild(obj.name, obj);

            obj = new Static("Static100_00_00_00","30","Static100_00_00:-1",null,"51","30",null,null,null,null,null,this.register.form);
            obj.set_taborder("9");
            obj.set_cssclass("portal_sta_memLabelBg");
            obj.set_text("");
            this.register.addChild(obj.name, obj);

            obj = new Static("Static00","0","0",null,"50","0",null,null,null,null,null,this.register.form);
            obj.set_taborder("1");
            obj.set_text("업체/기관 신규등록");
            obj.set_cssclass("portal_sta_popTitle");
            this.register.addChild(obj.name, obj);

            obj = new Button("btn_popClose","42.50%","Static105:20",null,"45","42.50%",null,null,null,null,null,this.register.form);
            obj.set_text("등록");
            obj.set_cssclass("portal_btn");
            obj.set_visible("true");
            obj.set_taborder("0");
            this.register.addChild(obj.name, obj);

            obj = new Static("Static11","30","70","150","51",null,null,null,null,null,null,this.register.form);
            obj.set_taborder("3");
            obj.set_text("사업자등록증");
            obj.set_enable("true");
            obj.set_cssclass("portal_sta_memLabel_L_essential");
            this.register.addChild(obj.name, obj);

            obj = new Static("Static11_00_00","30","120","150","51",null,null,null,null,null,null,this.register.form);
            obj.set_taborder("6");
            obj.set_text("소속기관");
            obj.set_enable("true");
            obj.set_cssclass("portal_sta_memLabel_L_essential");
            this.register.addChild(obj.name, obj);

            obj = new Edit("Edit01_00_00","Static11_00_00:10","129","200","33",null,null,null,null,null,null,this.register.form);
            obj.set_taborder("5");
            obj.set_cssclass("portal_edi");
            this.register.addChild(obj.name, obj);

            obj = new Static("Static11_00_00_00","30","170","150","51",null,null,null,null,null,null,this.register.form);
            obj.set_taborder("8");
            obj.set_text("소속부서");
            obj.set_enable("true");
            obj.set_cssclass("portal_sta_memLabel_L_essential");
            this.register.addChild(obj.name, obj);

            obj = new Edit("Edit01_00_00_00","Static11_00_00_00:10","180","200","33",null,null,null,null,null,null,this.register.form);
            obj.set_taborder("7");
            obj.set_cssclass("portal_edi");
            this.register.addChild(obj.name, obj);

            obj = new Static("Static11_00_00_01","400","120","150","51",null,null,null,null,null,null,this.register.form);
            obj.set_taborder("11");
            obj.set_text("대표자");
            obj.set_enable("true");
            obj.set_cssclass("portal_sta_memLabel");
            this.register.addChild(obj.name, obj);

            obj = new Edit("Edit01_00_00_01","Static11_00_00_01:10","129","200","33",null,null,null,null,null,null,this.register.form);
            obj.set_taborder("12");
            obj.set_cssclass("portal_edi");
            this.register.addChild(obj.name, obj);

            obj = new Static("Static11_00_00_01_00","400","170","150","51",null,null,null,null,null,null,this.register.form);
            obj.set_taborder("13");
            obj.set_text("직위");
            obj.set_enable("true");
            obj.set_cssclass("portal_sta_memLabel");
            this.register.addChild(obj.name, obj);

            obj = new Edit("Edit01_00_00_01_00","Static11_00_00_01:10","179","200","33",null,null,null,null,null,null,this.register.form);
            obj.set_taborder("14");
            obj.set_cssclass("portal_edi");
            this.register.addChild(obj.name, obj);

            obj = new Edit("Edit01_00_00_01_00_00","Static11_00_00_01:10","229","200","33",null,null,null,null,null,null,this.register.form);
            obj.set_taborder("15");
            obj.set_cssclass("portal_edi");
            this.register.addChild(obj.name, obj);

            obj = new Static("Static11_00_00_01_00_00","400","220","150","51",null,null,null,null,null,null,this.register.form);
            obj.set_taborder("16");
            obj.set_text("사무실 팩스번호");
            obj.set_enable("true");
            obj.set_cssclass("portal_sta_memLabel_Essential");
            this.register.addChild(obj.name, obj);

            obj = new Edit("Edit01_00_00_00_00","Static11_00_00_00:10","230","200","33",null,null,null,null,null,null,this.register.form);
            obj.set_taborder("17");
            obj.set_cssclass("portal_edi");
            this.register.addChild(obj.name, obj);

            obj = new Static("Static11_00_00_00_00","30","220","150","51",null,null,null,null,null,null,this.register.form);
            obj.set_taborder("18");
            obj.set_text("사무실 연락처");
            obj.set_enable("true");
            obj.set_cssclass("portal_sta_memLabel_L_essential");
            this.register.addChild(obj.name, obj);

            obj = new Static("Static17","30","270","150","127",null,null,null,null,null,null,this.register.form);
            obj.set_taborder("19");
            obj.set_text("사무실 주소");
            obj.set_enable("true");
            obj.set_cssclass("portal_sta_memLabel_L_essential");
            this.register.addChild(obj.name, obj);

            obj = new Edit("Edit08","Static17:10","279","148","33",null,null,null,null,null,null,this.register.form);
            obj.set_taborder("20");
            obj.set_displaynulltext("우편번호");
            obj.set_cssclass("portal_edi");
            this.register.addChild(obj.name, obj);

            obj = new Edit("Edit09","Static17:10","317","570","33",null,null,null,null,null,null,this.register.form);
            obj.set_taborder("21");
            obj.set_displaynulltext("기본주소");
            obj.set_cssclass("portal_edi");
            this.register.addChild(obj.name, obj);

            obj = new Edit("Edit10","Static17:10","355","570","33",null,null,null,null,null,null,this.register.form);
            obj.set_taborder("22");
            obj.set_displaynulltext("상세주소");
            obj.set_cssclass("portal_edi");
            this.register.addChild(obj.name, obj);

            obj = new Button("Button03","Edit08:5","279","96","33",null,null,null,null,null,null,this.register.form);
            obj.set_taborder("23");
            obj.set_text("주소검색");
            obj.set_cssclass("portal_btn_mem");
            this.register.addChild(obj.name, obj);

            obj = new FileUpload("FileUpload00","Static11:10","79","400","33",null,null,null,null,null,null,this.register.form);
            obj.set_taborder("25");
            obj.set_itemheight("33");
            obj.set_buttontext("업로드");
            obj.set_cssclass("portal_fileUpload");
            obj.set_buttonsize("100");
            this.register.addChild(obj.name, obj);

            obj = new Button("btn_popClose00",null,"0","50","50","0",null,null,null,null,null,this.register.form);
            obj.set_cssclass("portal_btn_close");
            obj.set_visible("true");
            obj.set_taborder("26");
            this.register.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.register.form
            obj = new Layout("default","",0,0,this.register.form,function(p){});
            this.register.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item33","register.form.div_Search.form.Edit01","value","ds_search","SCH_RQST_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","register.form.div_Search.form.SCH_RQST_DT","value","ds_search","SCH_RQST_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","register.form.div_Search.form.SCH_RQST_ID","value","ds_search","SCH_RQST_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","register.form.div_Search.form.SCH_APV_STAT_CD","value","ds_search","SCH_APV_STAT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","register.form.div_Search.form.SCH_LAST_UPT_NM","value","ds_search","SCH_LAST_UPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","register.form.div_Search.form.SCH_LAST_UPT_DT","value","ds_search","SCH_LAST_UPT_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","register.form.div_Search.form.SCH_DEPT_CD","value","ds_search","SCH_RQST_DEPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item40","register.form.div_Search.form.SCH_RQST_NM","value","ds_search","SCH_RQST_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item41","register.form.div_Search.form.SCH_CAL_MON","value","ds_search","SCH_CAL_MON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item42","register.form.div_Search.form.Radio00","value","ds_main","INOUT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item43","register.form.div_Search.form.CheckBox00","value","ds_main","COM_CAR_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item44","register.form.div_Search.form.Spin00","value","ds_main","YY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item45","register.form.div_Search02_00.form.SCH_RQST_NO","value","ds_search","SCH_RQST_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item46","register.form.div_Search02_00.form.SCH_RQST_DT","value","ds_search","SCH_RQST_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item47","register.form.div_Search02_00.form.SCH_RQST_ID","value","ds_search","SCH_RQST_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item48","register.form.div_Search02_00.form.SCH_APV_STAT_CD","value","ds_search","SCH_APV_STAT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item49","register.form.div_Search02_00.form.SCH_LAST_UPT_NM","value","ds_search","SCH_LAST_UPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item50","register.form.div_Search02_00.form.SCH_LAST_UPT_DT","value","ds_search","SCH_LAST_UPT_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item51","register.form.div_Search02_00.form.SCH_DEPT_CD","value","ds_search","SCH_RQST_DEPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item52","register.form.div_Search02_00.form.SCH_RQST_NM","value","ds_search","SCH_RQST_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item53","register.form.div_Search02_00.form.SCH_CAL_MON","value","ds_search","SCH_CAL_MON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item54","register.form.div_Search02_00.form.Radio00","value","ds_main","INOUT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item55","register.form.div_Search02_00.form.CheckBox00","value","ds_main","COM_CAR_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item56","register.form.div_Search02_00.form.Spin00","value","ds_main","YY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item57","register.form.div_Search02_00.form.Combo00","value","ds_main","TP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item58","register.form.div_Search02_00.form.Edit05","value","ds_main","RQST_AMT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item59","register.form.div_Search02_00.form.RQST_NM","value","ds_main","RQST_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item60","register.form.div_Search02_00.form.TextArea01","value","ds_main","CONT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item61","register.form.div_Search02_00.form.SBJ","value","ds_main","SBJ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item62","register.form.div_Search02_00.form.FRM_DT","value","ds_main","FRM_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item63","register.form.div_Search02_00.form.TO_DT","value","ds_main","TO_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item64","register.form.div_Search02_00.form.rqstNo","value","ds_main","RQST_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item65","register.form.div_Search02_00.form.commCd","value","ds_main","COMM_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("PTS_5020P_02.xfdl", function() {

        this.register_btn_popClose_onclick = function(obj,e)
        {
        	this.close();
        };

        this.register_btn_popClose00_onclick = function(obj,e)
        {
        	this.close();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.register.form.btn_popClose.addEventHandler("onclick",this.register_btn_popClose_onclick,this);
            this.register.form.Static11.addEventHandler("onclick",this.Static_onclick,this);
            this.register.form.Static11_00_00.addEventHandler("onclick",this.Static_onclick,this);
            this.register.form.Static11_00_00_00.addEventHandler("onclick",this.Static_onclick,this);
            this.register.form.Static11_00_00_01.addEventHandler("onclick",this.Static_onclick,this);
            this.register.form.Static11_00_00_01_00.addEventHandler("onclick",this.Static_onclick,this);
            this.register.form.Static11_00_00_01_00_00.addEventHandler("onclick",this.Static_onclick,this);
            this.register.form.Static11_00_00_00_00.addEventHandler("onclick",this.Static_onclick,this);
            this.register.form.Static17.addEventHandler("onclick",this.Static_onclick,this);
            this.register.form.FileUpload00.addEventHandler("onitemchanged",this.FileUpload00_onitemchanged,this);
            this.register.form.btn_popClose00.addEventHandler("onclick",this.register_btn_popClose00_onclick,this);
        };
        this.loadIncludeScript("PTS_5020P_02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
