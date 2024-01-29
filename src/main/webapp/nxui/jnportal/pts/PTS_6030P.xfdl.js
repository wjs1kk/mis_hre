(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PTS_6030P");
            this.set_titletext("일간일정");
            if (Form == this.constructor)
            {
                this._setFormPosition(650,250);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("schedule","0","0",null,"250","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_cssclass("div_WF_Area");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","650","50","0",null,null,null,null,null,this.schedule.form);
            obj.set_taborder("1");
            obj.set_text("일간일정");
            obj.set_cssclass("portal_sta_popTitle");
            this.schedule.addChild(obj.name, obj);

            obj = new Button("btn_popClose",null,"0","50","50","0",null,null,null,null,null,this.schedule.form);
            obj.set_cssclass("portal_btn_close");
            obj.set_visible("true");
            obj.set_taborder("0");
            this.schedule.addChild(obj.name, obj);

            obj = new Static("Static01","30","Static00:0",null,"46","30",null,null,null,null,null,this.schedule.form);
            obj.set_taborder("2");
            obj.set_text("2023.03.22");
            obj.set_cssclass("portal_sta_popSchdule");
            this.schedule.addChild(obj.name, obj);

            obj = new Div("Div00","30","96",null,null,"30","20",null,null,null,null,this.schedule.form);
            obj.set_taborder("3");
            obj.set_text("Div00");
            obj.set_cssclass("portal_popBg");
            this.schedule.addChild(obj.name, obj);

            obj = new Static("Static00","20","9",null,"63","20",null,null,null,null,null,this.schedule.form.Div00.form);
            obj.set_taborder("0");
            obj.set_cssclass("portal_sta_popSchduleBg");
            obj.set_text("");
            this.schedule.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","20","19","191","26",null,null,null,null,null,null,this.schedule.form.Div00.form);
            obj.set_taborder("1");
            obj.set_text("2023.03.05 ~ 2023.03.25");
            obj.set_cssclass("portal_sta_popSchduleDate");
            this.schedule.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00","Static01:15","19","344","42",null,null,null,null,null,null,this.schedule.form.Div00.form);
            obj.set_taborder("2");
            obj.set_text("23-1차 유망수출품목발굴 지원사업 참여기업 모집공고");
            obj.set_cssclass("portal_sta_popSchduleTxt");
            this.schedule.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_01","20","84","191","26",null,null,null,null,null,null,this.schedule.form.Div00.form);
            obj.set_taborder("3");
            obj.set_text("2023.03.05 ~ 2023.03.25");
            obj.set_cssclass("portal_sta_popSchduleDate");
            this.schedule.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","Static01:15","84","344","26",null,null,null,null,null,null,this.schedule.form.Div00.form);
            obj.set_taborder("4");
            obj.set_text("250kW급 고출력밀도 시동/발전기 기술 협약일");
            obj.set_cssclass("portal_sta_popSchduleTxt");
            this.schedule.form.Div00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.schedule.form.Div00.form
            obj = new Layout("default","",0,0,this.schedule.form.Div00.form,function(p){});
            this.schedule.form.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.schedule.form
            obj = new Layout("default","",0,0,this.schedule.form,function(p){});
            this.schedule.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",650,250,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","schedule.form.div_Search.form.Edit01","value","ds_search","SCH_RQST_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","schedule.form.div_Search.form.SCH_RQST_DT","value","ds_search","SCH_RQST_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","schedule.form.div_Search.form.SCH_RQST_ID","value","ds_search","SCH_RQST_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","schedule.form.div_Search.form.SCH_APV_STAT_CD","value","ds_search","SCH_APV_STAT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","schedule.form.div_Search.form.SCH_LAST_UPT_NM","value","ds_search","SCH_LAST_UPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","schedule.form.div_Search.form.SCH_LAST_UPT_DT","value","ds_search","SCH_LAST_UPT_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","schedule.form.div_Search.form.SCH_DEPT_CD","value","ds_search","SCH_RQST_DEPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","schedule.form.div_Search.form.SCH_RQST_NM","value","ds_search","SCH_RQST_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","schedule.form.div_Search.form.SCH_CAL_MON","value","ds_search","SCH_CAL_MON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","schedule.form.div_Search.form.Radio00","value","ds_main","INOUT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","schedule.form.div_Search.form.CheckBox00","value","ds_main","COM_CAR_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","schedule.form.div_Search.form.Spin00","value","ds_main","YY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","schedule.form.div_Search02_00.form.SCH_RQST_NO","value","ds_search","SCH_RQST_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","schedule.form.div_Search02_00.form.SCH_RQST_DT","value","ds_search","SCH_RQST_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","schedule.form.div_Search02_00.form.SCH_RQST_ID","value","ds_search","SCH_RQST_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","schedule.form.div_Search02_00.form.SCH_APV_STAT_CD","value","ds_search","SCH_APV_STAT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","schedule.form.div_Search02_00.form.SCH_LAST_UPT_NM","value","ds_search","SCH_LAST_UPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","schedule.form.div_Search02_00.form.SCH_LAST_UPT_DT","value","ds_search","SCH_LAST_UPT_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","schedule.form.div_Search02_00.form.SCH_DEPT_CD","value","ds_search","SCH_RQST_DEPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","schedule.form.div_Search02_00.form.SCH_RQST_NM","value","ds_search","SCH_RQST_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","schedule.form.div_Search02_00.form.SCH_CAL_MON","value","ds_search","SCH_CAL_MON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","schedule.form.div_Search02_00.form.Radio00","value","ds_main","INOUT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","schedule.form.div_Search02_00.form.CheckBox00","value","ds_main","COM_CAR_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","schedule.form.div_Search02_00.form.Spin00","value","ds_main","YY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","schedule.form.div_Search02_00.form.Combo00","value","ds_main","TP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","schedule.form.div_Search02_00.form.Edit05","value","ds_main","RQST_AMT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","schedule.form.div_Search02_00.form.RQST_NM","value","ds_main","RQST_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","schedule.form.div_Search02_00.form.TextArea01","value","ds_main","CONT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","schedule.form.div_Search02_00.form.SBJ","value","ds_main","SBJ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","schedule.form.div_Search02_00.form.FRM_DT","value","ds_main","FRM_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","schedule.form.div_Search02_00.form.TO_DT","value","ds_main","TO_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","schedule.form.div_Search02_00.form.rqstNo","value","ds_main","RQST_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","schedule.form.div_Search02_00.form.commCd","value","ds_main","COMM_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","schedule.form.Combo00","value","Dataset00","key");
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

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.schedule.form.btn_popClose.addEventHandler("onclick",this.btn_registration_onclick,this);
            this.schedule.form.Static01.addEventHandler("onclick",this.Static_onclick,this);
        };
        this.loadIncludeScript("PTS_6030P.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
