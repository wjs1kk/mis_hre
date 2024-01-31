(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PTS_0000M_03");
            this.set_titletext("퀵메뉴");
            if (Form == this.constructor)
            {
                this._setFormPosition(80,497);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("Div00","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("portal_main_quick");
            this.addChild(obj.name, obj);

            obj = new Button("btn_00_00","13","42","55","55",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("과제\r\n신청");
            obj.set_cssclass("portal_quick_btn");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_00","13","btn_00_00:15","55","55",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("협약\r\n신청");
            obj.set_cssclass("portal_quick_btn");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","0","0",null,"42","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("맞춤서비스");
            obj.set_cssclass("portal_quick_tit");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_00_01","13","btn_00:15","55","55",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("사업비\r\n관리");
            obj.set_cssclass("portal_quick_btn");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_00_01_00","13","btn_00_01:15","55","55",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("평가\r\n관리");
            obj.set_cssclass("portal_quick_btn");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_00_01_00_00","13","btn_00_01_00:15","55","55",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("이용\r\n매뉴얼");
            obj.set_cssclass("portal_quick_btn");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_00_01_00_00_00","13","btn_00_01_00_00:15","55","55",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("QnA");
            obj.set_cssclass("portal_quick_btn");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_01","13","btn_00_01_00_00_00:12","55","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_text("설정");
            obj.set_cssclass("portal_quick_setting");
            this.Div00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",80,497,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("PTS_0000M_03.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
