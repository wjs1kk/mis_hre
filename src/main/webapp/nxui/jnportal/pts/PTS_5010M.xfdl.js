(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PTS_5010M");
            this.set_titletext("로그인");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00","0","0",null,"720","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","180","37",null,null,"180","40",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_cssclass("portal_div_frmBg_Login");
            this.addChild(obj.name, obj);

            obj = new Static("Static14_00_02","45.83%","111","110","29",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_enable("true");
            obj.set_cssclass("portal_sta_frmTitle_login");
            obj.set_font("normal 700 25px/normal \"맑은고딕\"");
            obj.set_text("로그인");
            obj.set_textAlign("center");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static14_00_02_00","37.68%","Static14_00_02:15","383","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_enable("true");
            obj.set_cssclass("portal_sta_frmDescription");
            obj.set_font("normal normal 14px/normal \"맑은고딕\"");
            obj.set_text("로그인 후 과제관리시스템의 서비스를 이용하실 수 있습니다.");
            obj.set_textAlign("center");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit01","36.2%","Static14_00_02_00:50",null,"50","36.2%",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_cssclass("portal_edi_login");
            obj.set_font("normal 500 16px/normal \"맑은고딕\"");
            obj.set_text("Edit");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit02","36.2%","Edit01:9",null,"50","36.2%",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_cssclass("portal_edi_login");
            obj.set_font("normal 500 16px/normal \"맑은고딕\"");
            obj.set_password("true");
            obj.set_text("Edit");
            this.Div00.addChild(obj.name, obj);

            obj = new CheckBox("save_id","Edit02:-100%","Edit02:10","271","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("아이디 저장");
            obj.set_color("#777777");
            obj.set_font("normal 16px/normal \"맑은고딕\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_login","36.20%","save_id:26",null,"56","36.20%",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("로그인");
            obj.set_cssclass("portal_btn_frm");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_id","42.68%","470","115","15",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("아이디 찾기");
            obj.set_cssclass("portal_btn_find");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static21_00","btn_id:0","btn_login:19",null,"13","777",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_enable("true");
            obj.set_cssclass("portal_sta_btnLine");
            obj.set_textAlign("center");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_password","Static21_00:0","470","130","15",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_text("비밀번호 찾기");
            obj.set_cssclass("portal_btn_find");
            this.Div00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("PTS_5010M.xfdl", function() {

        this.Div00_btn_login_onclick = function(obj,e)
        {
        	var objChild = new ChildFrame("PTS_5010P", "absolute", 0, 0, 640, 300);
        	objChild.set_formurl("pts::PTS_5010P.xfdl");
        	objChild.set_openalign("center middle");
        	objChild.set_dragmovetype("all");
        	objChild.set_showtitlebar(false);

            objChild.showModal(this.getOwnerFrame()
                             , {}
                             , this
                             , "fn_callback_pop");
        };

        this.fn_callback_pop = function(sPopupId, sReturn)
        {

        }

        this.Div00_btn_id_onclick = function(obj,e)
        {
        	var sMenuId = "PTS_5030M";
        	var url = "pts::PTS_5030M.xfdl";
        	nexacro.getApplication().goPage(sMenuId, url);
        };

        this.Div00_btn_password_onclick = function(obj,e)
        {
        	var sMenuId = "PTS_5030M";
        	var url = "pts::PTS_5030M.xfdl";
        	nexacro.getApplication().goPage(sMenuId, url);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Div00.form.Static14_00_02.addEventHandler("onclick",this.Static_onclick,this);
            this.Div00.form.Static14_00_02_00.addEventHandler("onclick",this.Static_onclick,this);
            this.Div00.form.save_id.addEventHandler("onclick",this.chk_pass_onclick,this);
            this.Div00.form.save_id.addEventHandler("onchanged",this.chk_pass_onchanged,this);
            this.Div00.form.btn_login.addEventHandler("onclick",this.Div00_btn_login_onclick,this);
            this.Div00.form.btn_id.addEventHandler("onclick",this.Div00_btn_id_onclick,this);
            this.Div00.form.Static21_00.addEventHandler("onclick",this.Static_onclick,this);
            this.Div00.form.btn_password.addEventHandler("onclick",this.Div00_btn_password_onclick,this);
        };
        this.loadIncludeScript("PTS_5010M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
