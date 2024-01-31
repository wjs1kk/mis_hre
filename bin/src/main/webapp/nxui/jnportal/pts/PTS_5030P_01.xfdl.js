(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PTS_5030P_01");
            this.set_titletext("아이디찾기");
            if (Form == this.constructor)
            {
                this._setFormPosition(500,348);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("pFindID","0","0","500","348",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_cssclass("div_WF_Area");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0",null,"50","0",null,null,null,null,null,this.pFindID.form);
            obj.set_taborder("4");
            obj.set_text("아이디 찾기");
            obj.set_cssclass("portal_sta_popTitle");
            this.pFindID.addChild(obj.name, obj);

            obj = new Static("Static01","0","Static00:10","500","53",null,null,null,null,null,null,this.pFindID.form);
            obj.set_taborder("1");
            obj.set_text("회원님의 아이디는 아래와 같습니다.");
            obj.set_cssclass("portal_sta_popTit");
            this.pFindID.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","30","Static01:10",null,"65","30",null,null,null,null,null,this.pFindID.form);
            obj.set_taborder("2");
            obj.set_value("id");
            obj.set_cssclass("portal_txt_login");
            this.pFindID.addChild(obj.name, obj);

            obj = new Static("Static02","30","TextArea00:10",null,"48","30",null,null,null,null,null,this.pFindID.form);
            obj.set_taborder("3");
            obj.set_text("개인정보 보호를 위해 앞 3자리, 끝 3자리를 제외한 문자는 \r\n*로 표시됩니다.");
            obj.set_cssclass("portal_sta_frmDescription");
            this.pFindID.addChild(obj.name, obj);

            obj = new Button("btn_login",null,"Static02:29","75","45","42.40%",null,null,null,null,null,this.pFindID.form);
            obj.set_text("로그인");
            obj.set_cssclass("portal_btn");
            obj.set_visible("true");
            obj.set_taborder("0");
            this.pFindID.addChild(obj.name, obj);

            obj = new Button("btn_popClose00",null,"0","50","50","0",null,null,null,null,null,this.pFindID.form);
            obj.set_cssclass("portal_btn_close");
            obj.set_visible("true");
            obj.set_taborder("5");
            this.pFindID.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.pFindID.form
            obj = new Layout("default","",0,0,this.pFindID.form,function(p){});
            this.pFindID.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",500,348,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","pFindID.form.div_Search.form.Edit01","value","ds_search","SCH_RQST_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","pFindID.form.div_Search.form.SCH_RQST_DT","value","ds_search","SCH_RQST_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","pFindID.form.div_Search.form.SCH_RQST_ID","value","ds_search","SCH_RQST_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","pFindID.form.div_Search.form.SCH_APV_STAT_CD","value","ds_search","SCH_APV_STAT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","pFindID.form.div_Search.form.SCH_LAST_UPT_NM","value","ds_search","SCH_LAST_UPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","pFindID.form.div_Search.form.SCH_LAST_UPT_DT","value","ds_search","SCH_LAST_UPT_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","pFindID.form.div_Search.form.SCH_DEPT_CD","value","ds_search","SCH_RQST_DEPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","pFindID.form.div_Search.form.SCH_RQST_NM","value","ds_search","SCH_RQST_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","pFindID.form.div_Search.form.SCH_CAL_MON","value","ds_search","SCH_CAL_MON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","pFindID.form.div_Search.form.Radio00","value","ds_main","INOUT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","pFindID.form.div_Search.form.CheckBox00","value","ds_main","COM_CAR_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","pFindID.form.div_Search.form.Spin00","value","ds_main","YY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","pFindID.form.div_Search02_00.form.SCH_RQST_NO","value","ds_search","SCH_RQST_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","pFindID.form.div_Search02_00.form.SCH_RQST_DT","value","ds_search","SCH_RQST_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","pFindID.form.div_Search02_00.form.SCH_RQST_ID","value","ds_search","SCH_RQST_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","pFindID.form.div_Search02_00.form.SCH_APV_STAT_CD","value","ds_search","SCH_APV_STAT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","pFindID.form.div_Search02_00.form.SCH_LAST_UPT_NM","value","ds_search","SCH_LAST_UPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","pFindID.form.div_Search02_00.form.SCH_LAST_UPT_DT","value","ds_search","SCH_LAST_UPT_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","pFindID.form.div_Search02_00.form.SCH_DEPT_CD","value","ds_search","SCH_RQST_DEPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","pFindID.form.div_Search02_00.form.SCH_RQST_NM","value","ds_search","SCH_RQST_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","pFindID.form.div_Search02_00.form.SCH_CAL_MON","value","ds_search","SCH_CAL_MON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","pFindID.form.div_Search02_00.form.Radio00","value","ds_main","INOUT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","pFindID.form.div_Search02_00.form.CheckBox00","value","ds_main","COM_CAR_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","pFindID.form.div_Search02_00.form.Spin00","value","ds_main","YY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","pFindID.form.div_Search02_00.form.Combo00","value","ds_main","TP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","pFindID.form.div_Search02_00.form.Edit05","value","ds_main","RQST_AMT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","pFindID.form.div_Search02_00.form.RQST_NM","value","ds_main","RQST_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","pFindID.form.div_Search02_00.form.TextArea01","value","ds_main","CONT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","pFindID.form.div_Search02_00.form.SBJ","value","ds_main","SBJ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","pFindID.form.div_Search02_00.form.FRM_DT","value","ds_main","FRM_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","pFindID.form.div_Search02_00.form.TO_DT","value","ds_main","TO_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","pFindID.form.div_Search02_00.form.rqstNo","value","ds_main","RQST_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","pFindID.form.div_Search02_00.form.commCd","value","ds_main","COMM_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("PTS_5030P_01.xfdl", function() {

        this.pFindID_btn_login_onclick = function(obj,e)
        {
        	this.close();
        	var sMenuId = "login";
        	var url = "pts::PTS_5010M.xfdl";
        	nexacro.getApplication().goPage(sMenuId, url);
        };

        this.pFindID_btn_popClose00_onclick = function(obj,e)
        {
        	this.close();
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.pFindID.form.Static01.addEventHandler("onclick",this.Static_onclick,this);
            this.pFindID.form.TextArea00.addEventHandler("onchanged",this.Div00_TextArea00_onchanged,this);
            this.pFindID.form.Static02.addEventHandler("onclick",this.Static_onclick,this);
            this.pFindID.form.btn_login.addEventHandler("onclick",this.pFindID_btn_login_onclick,this);
            this.pFindID.form.btn_popClose00.addEventHandler("onclick",this.pFindID_btn_popClose00_onclick,this);
        };
        this.loadIncludeScript("PTS_5030P_01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
