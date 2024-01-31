(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PTS_6020U_02P");
            this.set_titletext("관심키워드 설정");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,580);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("keyword","0","0",null,"580","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_cssclass("div_WF_Area");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","800","50",null,null,null,null,null,null,this.keyword.form);
            obj.set_taborder("1");
            obj.set_text("관심키워드 설정");
            obj.set_cssclass("portal_sta_popTitle");
            this.keyword.addChild(obj.name, obj);

            obj = new Static("Static03","30","Static00:20","740","118","30",null,null,null,null,null,this.keyword.form);
            obj.set_taborder("8");
            obj.set_cssclass("portal_systemBg");
            obj.set_text("* 설정한 관심리스트 내 관심키워드만 표시됩니다.\r\n* 관심키워드를 설정하지 않을 경우 게시물이 노출되지 않습니다.");
            this.keyword.addChild(obj.name, obj);

            obj = new Button("btn_popClose","42.38%",null,null,"45","42.50%","30",null,null,null,null,this.keyword.form);
            obj.set_text("확인");
            obj.set_cssclass("portal_btn");
            obj.set_visible("true");
            obj.set_taborder("0");
            this.keyword.addChild(obj.name, obj);

            obj = new Static("Static01","0","Static03:20","500","53",null,null,null,null,null,null,this.keyword.form);
            obj.set_taborder("2");
            obj.set_text("관심리스트 설정");
            obj.set_cssclass("portal_sta_popTit");
            this.keyword.addChild(obj.name, obj);

            obj = new Button("btn_list1","31","Static01:0","158","33",null,null,null,null,null,null,this.keyword.form);
            obj.set_taborder("3");
            obj.set_text("핵심기술/과제공고");
            obj.set_cssclass("portal_btn_interest_on");
            this.keyword.addChild(obj.name, obj);

            obj = new Button("btn_list2","btn_list1:10","Static01:0","158","33",null,null,null,null,null,null,this.keyword.form);
            obj.set_taborder("4");
            obj.set_text("핵심기술/과제기획");
            obj.set_cssclass("portal_btn_interest");
            this.keyword.addChild(obj.name, obj);

            obj = new Button("btn_list3","btn_list2:10","Static01:0","158","33",null,null,null,null,null,null,this.keyword.form);
            obj.set_taborder("5");
            obj.set_text("방산진흥/과제기획");
            obj.set_cssclass("portal_btn_interest");
            this.keyword.addChild(obj.name, obj);

            obj = new Button("btn_list4","btn_list3:10","Static01:0","158","33",null,null,null,null,null,null,this.keyword.form);
            obj.set_taborder("6");
            obj.set_text("핵심기술/과제공고");
            obj.set_cssclass("portal_btn_interest");
            this.keyword.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","btn_list1:20","500","53",null,null,null,null,null,null,this.keyword.form);
            obj.set_taborder("7");
            obj.set_text("관심코드 설정");
            obj.set_cssclass("portal_sta_popTit");
            this.keyword.addChild(obj.name, obj);

            obj = new Combo("Combo00",null,"Static01_00:0","150","38","619",null,null,null,null,null,this.keyword.form);
            obj.set_taborder("9");
            obj.set_displaynulltext("선택");
            obj.set_innerdataset("dsCombo02");
            obj.set_codecolumn("value");
            obj.set_datacolumn("text");
            obj.set_cssclass("portal_cmb_bd");
            obj.set_text("선택");
            obj.set_value("0");
            obj.set_index("-1");
            this.keyword.addChild(obj.name, obj);

            obj = new Button("btnSearch","Combo00:5","367","60","38",null,null,null,null,null,null,this.keyword.form);
            obj.set_taborder("10");
            obj.set_cssclass("portal_btn");
            obj.set_text("검색");
            this.keyword.addChild(obj.name, obj);

            obj = new Button("btn_code1","30","Combo00:10","91","33",null,null,null,null,null,null,this.keyword.form);
            obj.set_taborder("11");
            obj.set_text("선택1");
            obj.set_cssclass("portal_btn_interestCode");
            this.keyword.addChild(obj.name, obj);

            obj = new Button("btn_code2","btn_code1:10","Combo00:10","91","33",null,null,null,null,null,null,this.keyword.form);
            obj.set_taborder("12");
            obj.set_text("선택2");
            obj.set_cssclass("portal_btn_interestCode");
            this.keyword.addChild(obj.name, obj);

            obj = new Button("btn_code3","btn_code2:10","Combo00:10","91","33",null,null,null,null,null,null,this.keyword.form);
            obj.set_taborder("13");
            obj.set_text("선택3");
            obj.set_cssclass("portal_btn_interestCode");
            this.keyword.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.keyword.form
            obj = new Layout("default","",0,0,this.keyword.form,function(p){});
            this.keyword.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",800,580,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","keyword.form.div_Search.form.Edit01","value","ds_search","SCH_RQST_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","keyword.form.div_Search.form.SCH_RQST_DT","value","ds_search","SCH_RQST_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","keyword.form.div_Search.form.SCH_RQST_ID","value","ds_search","SCH_RQST_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","keyword.form.div_Search.form.SCH_APV_STAT_CD","value","ds_search","SCH_APV_STAT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","keyword.form.div_Search.form.SCH_LAST_UPT_NM","value","ds_search","SCH_LAST_UPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","keyword.form.div_Search.form.SCH_LAST_UPT_DT","value","ds_search","SCH_LAST_UPT_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","keyword.form.div_Search.form.SCH_DEPT_CD","value","ds_search","SCH_RQST_DEPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","keyword.form.div_Search.form.SCH_RQST_NM","value","ds_search","SCH_RQST_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","keyword.form.div_Search.form.SCH_CAL_MON","value","ds_search","SCH_CAL_MON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","keyword.form.div_Search.form.Radio00","value","ds_main","INOUT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","keyword.form.div_Search.form.CheckBox00","value","ds_main","COM_CAR_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","keyword.form.div_Search.form.Spin00","value","ds_main","YY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","keyword.form.div_Search02_00.form.SCH_RQST_NO","value","ds_search","SCH_RQST_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","keyword.form.div_Search02_00.form.SCH_RQST_DT","value","ds_search","SCH_RQST_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","keyword.form.div_Search02_00.form.SCH_RQST_ID","value","ds_search","SCH_RQST_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","keyword.form.div_Search02_00.form.SCH_APV_STAT_CD","value","ds_search","SCH_APV_STAT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","keyword.form.div_Search02_00.form.SCH_LAST_UPT_NM","value","ds_search","SCH_LAST_UPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","keyword.form.div_Search02_00.form.SCH_LAST_UPT_DT","value","ds_search","SCH_LAST_UPT_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","keyword.form.div_Search02_00.form.SCH_DEPT_CD","value","ds_search","SCH_RQST_DEPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","keyword.form.div_Search02_00.form.SCH_RQST_NM","value","ds_search","SCH_RQST_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","keyword.form.div_Search02_00.form.SCH_CAL_MON","value","ds_search","SCH_CAL_MON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","keyword.form.div_Search02_00.form.Radio00","value","ds_main","INOUT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","keyword.form.div_Search02_00.form.CheckBox00","value","ds_main","COM_CAR_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","keyword.form.div_Search02_00.form.Spin00","value","ds_main","YY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","keyword.form.div_Search02_00.form.Combo00","value","ds_main","TP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","keyword.form.div_Search02_00.form.Edit05","value","ds_main","RQST_AMT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","keyword.form.div_Search02_00.form.RQST_NM","value","ds_main","RQST_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","keyword.form.div_Search02_00.form.TextArea01","value","ds_main","CONT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","keyword.form.div_Search02_00.form.SBJ","value","ds_main","SBJ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","keyword.form.div_Search02_00.form.FRM_DT","value","ds_main","FRM_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","keyword.form.div_Search02_00.form.TO_DT","value","ds_main","TO_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","keyword.form.div_Search02_00.form.rqstNo","value","ds_main","RQST_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","keyword.form.div_Search02_00.form.commCd","value","ds_main","COMM_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","keyword.form.Combo00","value","Dataset00","key");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","Div00.form.Combo00_00","value","Dataset00","key");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("PTS_6020U_02P.xfdl", function() {

        this.keyword_btn_popClose_onclick = function(obj,e)
        {
        	this.close();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.keyword.form.btn_popClose.addEventHandler("onclick",this.keyword_btn_popClose_onclick,this);
            this.keyword.form.Static01.addEventHandler("onclick",this.Static_onclick,this);
            this.keyword.form.Static01_00.addEventHandler("onclick",this.Static_onclick,this);
            this.keyword.form.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
        };
        this.loadIncludeScript("PTS_6020U_02P.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
