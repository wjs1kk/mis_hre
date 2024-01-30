(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("MIF_3020P_02");
            this.set_titletext("비밀번호 찾기");
            if (Form == this.constructor)
            {
                this._setFormPosition(500,362);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("divFindPw","0","0","500","362",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_cssclass("div_WF_Area");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","500","50",null,null,null,null,null,null,this.divFindPw.form);
            obj.set_taborder("4");
            obj.set_text("비밀번호 찾기");
            obj.set_cssclass("portal_sta_popTitle");
            this.divFindPw.addChild(obj.name, obj);

            obj = new Static("Static01","0","Static00:20","500","74",null,null,null,null,null,null,this.divFindPw.form);
            obj.set_taborder("1");
            obj.set_text("회원가입시 입력하신 아래 메일로 임시 비밀번호가\r\n발송되었습니다.");
            obj.set_cssclass("portal_sta_popTit");
            this.divFindPw.addChild(obj.name, obj);

            obj = new TextArea("taEmlAddr","30","Static01:10",null,"63","30",null,null,null,null,null,this.divFindPw.form);
            obj.set_taborder("2");
            obj.set_value("id@mail.com");
            obj.set_cssclass("portal_txt_login");
            this.divFindPw.addChild(obj.name, obj);

            obj = new Static("Static02","30","taEmlAddr:10",null,"40","30",null,null,null,null,null,this.divFindPw.form);
            obj.set_taborder("3");
            obj.set_text("메일 수신이 되지 않을 경우 스팸함을 확인해 주세요.");
            obj.set_cssclass("portal_sta_frmDescription");
            this.divFindPw.addChild(obj.name, obj);

            obj = new Button("btn_popClose",null,"Static02:20","75","45","41.20%",null,null,null,null,null,this.divFindPw.form);
            obj.set_text("확인");
            obj.set_cssclass("portal_btn");
            obj.set_visible("true");
            obj.set_taborder("0");
            this.divFindPw.addChild(obj.name, obj);

            obj = new Button("btn_popClose00",null,"0","50","50","0",null,null,null,null,null,this.divFindPw.form);
            obj.set_cssclass("portal_btn_close");
            obj.set_visible("true");
            obj.set_taborder("5");
            this.divFindPw.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divFindPw.form
            obj = new Layout("default","",0,0,this.divFindPw.form,function(p){});
            this.divFindPw.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",500,362,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divFindPw.form.div_Search.form.Edit01","value","ds_search","SCH_RQST_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divFindPw.form.div_Search.form.SCH_RQST_DT","value","ds_search","SCH_RQST_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divFindPw.form.div_Search.form.SCH_RQST_ID","value","ds_search","SCH_RQST_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divFindPw.form.div_Search.form.SCH_APV_STAT_CD","value","ds_search","SCH_APV_STAT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divFindPw.form.div_Search.form.SCH_LAST_UPT_NM","value","ds_search","SCH_LAST_UPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divFindPw.form.div_Search.form.SCH_LAST_UPT_DT","value","ds_search","SCH_LAST_UPT_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divFindPw.form.div_Search.form.SCH_DEPT_CD","value","ds_search","SCH_RQST_DEPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divFindPw.form.div_Search.form.SCH_RQST_NM","value","ds_search","SCH_RQST_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divFindPw.form.div_Search.form.SCH_CAL_MON","value","ds_search","SCH_CAL_MON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divFindPw.form.div_Search.form.Radio00","value","ds_main","INOUT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divFindPw.form.div_Search.form.CheckBox00","value","ds_main","COM_CAR_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divFindPw.form.div_Search.form.Spin00","value","ds_main","YY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divFindPw.form.div_Search02_00.form.SCH_RQST_NO","value","ds_search","SCH_RQST_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divFindPw.form.div_Search02_00.form.SCH_RQST_DT","value","ds_search","SCH_RQST_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divFindPw.form.div_Search02_00.form.SCH_RQST_ID","value","ds_search","SCH_RQST_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divFindPw.form.div_Search02_00.form.SCH_APV_STAT_CD","value","ds_search","SCH_APV_STAT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divFindPw.form.div_Search02_00.form.SCH_LAST_UPT_NM","value","ds_search","SCH_LAST_UPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divFindPw.form.div_Search02_00.form.SCH_LAST_UPT_DT","value","ds_search","SCH_LAST_UPT_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divFindPw.form.div_Search02_00.form.SCH_DEPT_CD","value","ds_search","SCH_RQST_DEPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divFindPw.form.div_Search02_00.form.SCH_RQST_NM","value","ds_search","SCH_RQST_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divFindPw.form.div_Search02_00.form.SCH_CAL_MON","value","ds_search","SCH_CAL_MON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divFindPw.form.div_Search02_00.form.Radio00","value","ds_main","INOUT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divFindPw.form.div_Search02_00.form.CheckBox00","value","ds_main","COM_CAR_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divFindPw.form.div_Search02_00.form.Spin00","value","ds_main","YY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divFindPw.form.div_Search02_00.form.Combo00","value","ds_main","TP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","divFindPw.form.div_Search02_00.form.Edit05","value","ds_main","RQST_AMT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","divFindPw.form.div_Search02_00.form.RQST_NM","value","ds_main","RQST_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","divFindPw.form.div_Search02_00.form.TextArea01","value","ds_main","CONT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","divFindPw.form.div_Search02_00.form.SBJ","value","ds_main","SBJ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","divFindPw.form.div_Search02_00.form.FRM_DT","value","ds_main","FRM_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","divFindPw.form.div_Search02_00.form.TO_DT","value","ds_main","TO_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","divFindPw.form.div_Search02_00.form.rqstNo","value","ds_main","RQST_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","divFindPw.form.div_Search02_00.form.commCd","value","ds_main","COMM_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("MIF_3020P_02.xfdl","lib::common.xjs");
        this.registerScript("MIF_3020P_02.xfdl", function() {
        /**
         *  비밀번호 찾기 결과
         *  MenuPath      로그인 - ID/PW찾기
         *  FileName      MIF_3010M.xfdl
         *  Creator       parksw
         *  CreateDate    2023.10.31
         *  Desction      비밀번호 찾기 결과
         ************** 소스 수정 이력 ***********************************************
         *  date          Modifier    Description
         *******************************************************************************
         *  2023.10.31    parksw      최초 생성
         *******************************************************************************/

        this.executeIncludeScript("lib::common.xjs"); /*include "lib::common.xjs"*/;

        /***********************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose)
         ***********************************************************************************************/

        this.MIF_3020P_02_onload = function(obj,e)
        {
            this.divFindPw.form.taEmlAddr.set_value(this.parent.emlAddr);
        };

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/

        this.pfindPW_btn_popClose_onclick = function(obj,e)
        {
        	this.close();
        };

        this.pfindPW_btn_popClose00_onclick = function(obj,e)
        {
        	this.close();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.MIF_3020P_02_onload,this);
            this.divFindPw.form.Static01.addEventHandler("onclick",this.Static_onclick,this);
            this.divFindPw.form.taEmlAddr.addEventHandler("onchanged",this.Div00_TextArea00_onchanged,this);
            this.divFindPw.form.Static02.addEventHandler("onclick",this.Static_onclick,this);
            this.divFindPw.form.btn_popClose.addEventHandler("onclick",this.pfindPW_btn_popClose_onclick,this);
            this.divFindPw.form.btn_popClose00.addEventHandler("onclick",this.pfindPW_btn_popClose00_onclick,this);
        };
        this.loadIncludeScript("MIF_3020P_02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
