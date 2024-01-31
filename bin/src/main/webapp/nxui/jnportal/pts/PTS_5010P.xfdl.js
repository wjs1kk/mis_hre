(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PTS_5010P");
            this.set_titletext("비밀번호 변경");
            this.set_scrolltype("none");
            this.set_visible("true");
            if (Form == this.constructor)
            {
                this._setFormPosition(500,459);
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
            obj = new Div("pModifyPW","0","0","500","459",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_cssclass("div_WF_Area");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0",null,"50","0",null,null,null,null,null,this.pModifyPW.form);
            obj.set_taborder("3");
            obj.set_text("비밀변호 변경");
            obj.set_cssclass("portal_sta_popTitle");
            this.pModifyPW.addChild(obj.name, obj);

            obj = new Static("Static01","0","Static00:20","500","53",null,null,null,null,null,null,this.pModifyPW.form);
            obj.set_taborder("1");
            obj.set_text("지금 비밀번호를 변경해 주세요.");
            obj.set_cssclass("portal_sta_popTit");
            this.pModifyPW.addChild(obj.name, obj);

            obj = new Static("Static02","30","Static01:0","440","48",null,null,null,null,null,null,this.pModifyPW.form);
            obj.set_taborder("2");
            obj.set_text("현재 사용 중이신 비밀번호가 90일간 동일하여 \r\n새로운 비밀번호로 변경이 필요합니다.");
            obj.set_cssclass("portal_sta_frmDescription");
            this.pModifyPW.addChild(obj.name, obj);

            obj = new Static("Static100_00_00","30","313",null,"51","30",null,null,null,null,null,this.pModifyPW.form);
            obj.set_taborder("10");
            obj.set_cssclass("portal_sta_memLabelBg");
            obj.set_text("");
            this.pModifyPW.addChild(obj.name, obj);

            obj = new Button("btn_popClose","42.40%","Static100_00_00:20",null,"45","42.40%",null,null,null,null,null,this.pModifyPW.form);
            obj.set_text("변경");
            obj.set_cssclass("portal_btn");
            obj.set_visible("true");
            obj.set_taborder("0");
            this.pModifyPW.addChild(obj.name, obj);

            obj = new Static("Static100","30","Static02:17",null,"51","30",null,null,null,null,null,this.pModifyPW.form);
            obj.set_taborder("4");
            obj.set_cssclass("portal_sta_memLabelBg");
            obj.set_text("");
            this.pModifyPW.addChild(obj.name, obj);

            obj = new Static("Static11","30","188","150","51",null,null,null,null,null,null,this.pModifyPW.form);
            obj.set_taborder("5");
            obj.set_text("기존 비밀번호");
            obj.set_enable("true");
            obj.set_cssclass("portal_sta_memLabel_L_essential");
            this.pModifyPW.addChild(obj.name, obj);

            obj = new Edit("Edit01","190","197","270","33",null,null,null,null,null,null,this.pModifyPW.form);
            obj.set_taborder("6");
            obj.set_cssclass("portal_edi");
            this.pModifyPW.addChild(obj.name, obj);

            obj = new Static("Static100_00","30","238",null,"76","30",null,null,null,null,null,this.pModifyPW.form);
            obj.set_taborder("7");
            obj.set_cssclass("portal_sta_memLabelBg");
            obj.set_text("");
            this.pModifyPW.addChild(obj.name, obj);

            obj = new Edit("Edit01_00","190","247","270","33",null,null,null,null,null,null,this.pModifyPW.form);
            obj.set_taborder("8");
            obj.set_cssclass("portal_edi");
            this.pModifyPW.addChild(obj.name, obj);

            obj = new Static("Static11_00","30","238","150","76",null,null,null,null,null,null,this.pModifyPW.form);
            obj.set_taborder("9");
            obj.set_text("신규 비밀번호");
            obj.set_enable("true");
            obj.set_cssclass("portal_sta_memLabel_L_essential");
            this.pModifyPW.addChild(obj.name, obj);

            obj = new Edit("Edit01_00_00","190","322","270","33",null,null,null,null,null,null,this.pModifyPW.form);
            obj.set_taborder("11");
            obj.set_cssclass("portal_edi");
            this.pModifyPW.addChild(obj.name, obj);

            obj = new Static("Static11_00_00","30","313","150","51",null,null,null,null,null,null,this.pModifyPW.form);
            obj.set_taborder("12");
            obj.set_text("비밀번호 확인");
            obj.set_enable("true");
            obj.set_cssclass("portal_sta_memLabel_L_essential");
            this.pModifyPW.addChild(obj.name, obj);

            obj = new Static("Static09","190","Edit01_00:0","252","31",null,null,null,null,null,null,this.pModifyPW.form);
            obj.set_taborder("13");
            obj.set_text("*9~15자 이내 숫자, 문자, 특수문자 조합");
            obj.set_cssclass("portal_sta_memInfoPop");
            this.pModifyPW.addChild(obj.name, obj);

            obj = new Button("btn_popClose00",null,"0","50","50","0",null,null,null,null,null,this.pModifyPW.form);
            obj.set_cssclass("portal_btn_close");
            obj.set_visible("true");
            obj.set_taborder("14");
            this.pModifyPW.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.pModifyPW.form
            obj = new Layout("default","",0,0,this.pModifyPW.form,function(p){});
            this.pModifyPW.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item33","pModifyPW.form.div_Search.form.Edit01","value","ds_search","SCH_RQST_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","pModifyPW.form.div_Search.form.SCH_RQST_DT","value","ds_search","SCH_RQST_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","pModifyPW.form.div_Search.form.SCH_RQST_ID","value","ds_search","SCH_RQST_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","pModifyPW.form.div_Search.form.SCH_APV_STAT_CD","value","ds_search","SCH_APV_STAT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","pModifyPW.form.div_Search.form.SCH_LAST_UPT_NM","value","ds_search","SCH_LAST_UPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","pModifyPW.form.div_Search.form.SCH_LAST_UPT_DT","value","ds_search","SCH_LAST_UPT_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","pModifyPW.form.div_Search.form.SCH_DEPT_CD","value","ds_search","SCH_RQST_DEPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item40","pModifyPW.form.div_Search.form.SCH_RQST_NM","value","ds_search","SCH_RQST_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item41","pModifyPW.form.div_Search.form.SCH_CAL_MON","value","ds_search","SCH_CAL_MON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item42","pModifyPW.form.div_Search.form.Radio00","value","ds_main","INOUT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item43","pModifyPW.form.div_Search.form.CheckBox00","value","ds_main","COM_CAR_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item44","pModifyPW.form.div_Search.form.Spin00","value","ds_main","YY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item45","pModifyPW.form.div_Search02_00.form.SCH_RQST_NO","value","ds_search","SCH_RQST_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item46","pModifyPW.form.div_Search02_00.form.SCH_RQST_DT","value","ds_search","SCH_RQST_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item47","pModifyPW.form.div_Search02_00.form.SCH_RQST_ID","value","ds_search","SCH_RQST_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item48","pModifyPW.form.div_Search02_00.form.SCH_APV_STAT_CD","value","ds_search","SCH_APV_STAT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item49","pModifyPW.form.div_Search02_00.form.SCH_LAST_UPT_NM","value","ds_search","SCH_LAST_UPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item50","pModifyPW.form.div_Search02_00.form.SCH_LAST_UPT_DT","value","ds_search","SCH_LAST_UPT_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item51","pModifyPW.form.div_Search02_00.form.SCH_DEPT_CD","value","ds_search","SCH_RQST_DEPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item52","pModifyPW.form.div_Search02_00.form.SCH_RQST_NM","value","ds_search","SCH_RQST_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item53","pModifyPW.form.div_Search02_00.form.SCH_CAL_MON","value","ds_search","SCH_CAL_MON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item54","pModifyPW.form.div_Search02_00.form.Radio00","value","ds_main","INOUT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item55","pModifyPW.form.div_Search02_00.form.CheckBox00","value","ds_main","COM_CAR_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item56","pModifyPW.form.div_Search02_00.form.Spin00","value","ds_main","YY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item57","pModifyPW.form.div_Search02_00.form.Combo00","value","ds_main","TP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item58","pModifyPW.form.div_Search02_00.form.Edit05","value","ds_main","RQST_AMT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item59","pModifyPW.form.div_Search02_00.form.RQST_NM","value","ds_main","RQST_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item60","pModifyPW.form.div_Search02_00.form.TextArea01","value","ds_main","CONT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item61","pModifyPW.form.div_Search02_00.form.SBJ","value","ds_main","SBJ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item62","pModifyPW.form.div_Search02_00.form.FRM_DT","value","ds_main","FRM_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item63","pModifyPW.form.div_Search02_00.form.TO_DT","value","ds_main","TO_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item64","pModifyPW.form.div_Search02_00.form.rqstNo","value","ds_main","RQST_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item65","pModifyPW.form.div_Search02_00.form.commCd","value","ds_main","COMM_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("PTS_5010P.xfdl", function() {

        this.pModifyPW_btn_popClose_onclick = function(obj,e)
        {
        	this.close();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.pModifyPW.form.Static01.addEventHandler("onclick",this.Static_onclick,this);
            this.pModifyPW.form.Static02.addEventHandler("onclick",this.Static_onclick,this);
            this.pModifyPW.form.btn_popClose.addEventHandler("onclick",this.pModifyPW_btn_popClose_onclick,this);
            this.pModifyPW.form.Static11.addEventHandler("onclick",this.Static_onclick,this);
            this.pModifyPW.form.Static11_00.addEventHandler("onclick",this.Static_onclick,this);
            this.pModifyPW.form.Static11_00_00.addEventHandler("onclick",this.Static_onclick,this);
            this.pModifyPW.form.Static09.addEventHandler("onclick",this.Static_onclick,this);
            this.pModifyPW.form.btn_popClose00.addEventHandler("onclick",this.btn_registration_onclick,this);
        };
        this.loadIncludeScript("PTS_5010P.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
