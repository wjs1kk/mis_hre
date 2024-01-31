(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PTS_6010P");
            this.set_titletext("회원탈퇴신청");
            if (Form == this.constructor)
            {
                this._setFormPosition(500,355);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("out","0","0","500","355",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_cssclass("div_WF_Area");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00","30","141","440","48",null,null,null,null,null,null,this.out.form);
            obj.set_taborder("3");
            obj.set_text("관리자 승인 후 회원탈퇴가 완료되며, \r\n최대 1~2일이 소요됩니다.");
            obj.set_cssclass("portal_sta_frmDescription");
            this.out.addChild(obj.name, obj);

            obj = new Static("Static100","30","Static02_00:20",null,"51","30",null,null,null,null,null,this.out.form);
            obj.set_taborder("6");
            obj.set_cssclass("portal_sta_memLabelBg");
            obj.set_text("");
            this.out.addChild(obj.name, obj);

            obj = new Static("Static00","0","0",null,"50","0",null,null,null,null,null,this.out.form);
            obj.set_taborder("2");
            obj.set_text("회원탈퇴신청");
            obj.set_cssclass("portal_sta_popTitle");
            this.out.addChild(obj.name, obj);

            obj = new Static("Static01","0","Static00:20","500","74",null,null,null,null,null,null,this.out.form);
            obj.set_taborder("1");
            obj.set_text("회원탈퇴를 원하시는 경우 \r\n아래 비밀번호를 입력하시고 확인버튼을 클릭해주세요.");
            obj.set_cssclass("portal_sta_popTit");
            this.out.addChild(obj.name, obj);

            obj = new Button("btn_popClose","42.40%","Static100:20",null,"45","42.40%",null,null,null,null,null,this.out.form);
            obj.set_text("확인");
            obj.set_cssclass("portal_btn");
            obj.set_visible("true");
            obj.set_taborder("0");
            this.out.addChild(obj.name, obj);

            obj = new Static("Static11","30","209","150","51",null,null,null,null,null,null,this.out.form);
            obj.set_taborder("4");
            obj.set_text("비밀번호 입력");
            obj.set_enable("true");
            obj.set_cssclass("portal_sta_memLabel_L");
            this.out.addChild(obj.name, obj);

            obj = new Edit("Edit01","190","218","270","33",null,null,null,null,null,null,this.out.form);
            obj.set_taborder("5");
            obj.set_cssclass("portal_edi");
            this.out.addChild(obj.name, obj);

            obj = new Button("btn_popClose00",null,"0","50","50","0",null,null,null,null,null,this.out.form);
            obj.set_cssclass("portal_btn_close");
            obj.set_visible("true");
            obj.set_taborder("7");
            this.out.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.out.form
            obj = new Layout("default","",0,0,this.out.form,function(p){});
            this.out.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",500,355,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","out.form.div_Search.form.Edit01","value","ds_search","SCH_RQST_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","out.form.div_Search.form.SCH_RQST_DT","value","ds_search","SCH_RQST_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","out.form.div_Search.form.SCH_RQST_ID","value","ds_search","SCH_RQST_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","out.form.div_Search.form.SCH_APV_STAT_CD","value","ds_search","SCH_APV_STAT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","out.form.div_Search.form.SCH_LAST_UPT_NM","value","ds_search","SCH_LAST_UPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","out.form.div_Search.form.SCH_LAST_UPT_DT","value","ds_search","SCH_LAST_UPT_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","out.form.div_Search.form.SCH_DEPT_CD","value","ds_search","SCH_RQST_DEPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","out.form.div_Search.form.SCH_RQST_NM","value","ds_search","SCH_RQST_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","out.form.div_Search.form.SCH_CAL_MON","value","ds_search","SCH_CAL_MON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","out.form.div_Search.form.Radio00","value","ds_main","INOUT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","out.form.div_Search.form.CheckBox00","value","ds_main","COM_CAR_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","out.form.div_Search.form.Spin00","value","ds_main","YY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","out.form.div_Search02_00.form.SCH_RQST_NO","value","ds_search","SCH_RQST_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","out.form.div_Search02_00.form.SCH_RQST_DT","value","ds_search","SCH_RQST_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","out.form.div_Search02_00.form.SCH_RQST_ID","value","ds_search","SCH_RQST_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","out.form.div_Search02_00.form.SCH_APV_STAT_CD","value","ds_search","SCH_APV_STAT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","out.form.div_Search02_00.form.SCH_LAST_UPT_NM","value","ds_search","SCH_LAST_UPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","out.form.div_Search02_00.form.SCH_LAST_UPT_DT","value","ds_search","SCH_LAST_UPT_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","out.form.div_Search02_00.form.SCH_DEPT_CD","value","ds_search","SCH_RQST_DEPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","out.form.div_Search02_00.form.SCH_RQST_NM","value","ds_search","SCH_RQST_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","out.form.div_Search02_00.form.SCH_CAL_MON","value","ds_search","SCH_CAL_MON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","out.form.div_Search02_00.form.Radio00","value","ds_main","INOUT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","out.form.div_Search02_00.form.CheckBox00","value","ds_main","COM_CAR_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","out.form.div_Search02_00.form.Spin00","value","ds_main","YY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","out.form.div_Search02_00.form.Combo00","value","ds_main","TP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","out.form.div_Search02_00.form.Edit05","value","ds_main","RQST_AMT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","out.form.div_Search02_00.form.RQST_NM","value","ds_main","RQST_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","out.form.div_Search02_00.form.TextArea01","value","ds_main","CONT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","out.form.div_Search02_00.form.SBJ","value","ds_main","SBJ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","out.form.div_Search02_00.form.FRM_DT","value","ds_main","FRM_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","out.form.div_Search02_00.form.TO_DT","value","ds_main","TO_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","out.form.div_Search02_00.form.rqstNo","value","ds_main","RQST_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","out.form.div_Search02_00.form.commCd","value","ds_main","COMM_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("PTS_6010P.xfdl", function() {

        this.out_btn_popClose00_onclick = function(obj,e)
        {
        	this.close();
        };

        this.out_btn_popClose_onclick = function(obj,e)
        {
        	this.close();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.out.form.Static02_00.addEventHandler("onclick",this.Static_onclick,this);
            this.out.form.Static01.addEventHandler("onclick",this.Static_onclick,this);
            this.out.form.btn_popClose.addEventHandler("onclick",this.out_btn_popClose_onclick,this);
            this.out.form.Static11.addEventHandler("onclick",this.Static_onclick,this);
            this.out.form.btn_popClose00.addEventHandler("onclick",this.out_btn_popClose00_onclick,this);
        };
        this.loadIncludeScript("PTS_6010P.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
