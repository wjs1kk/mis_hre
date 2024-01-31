(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("alert");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(300,220);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("popupAlert","0","0","300","220",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div02");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","0","0",null,"36","0",null,null,null,null,null,this.popupAlert.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_alertTitle");
            this.popupAlert.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","72","36",null,null,null,null,null,null,this.popupAlert.form.Div00.form);
            obj.set_taborder("0");
            obj.set_text("확인");
            obj.set_cssclass("sta_WF_alertTitle");
            this.popupAlert.form.Div00.addChild(obj.name, obj);

            obj = new Button("btn_00",null,"0","36","36","0",null,null,null,null,null,this.popupAlert.form.Div00.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_alertClose");
            obj.set_tooltiptext("닫기");
            this.popupAlert.form.Div00.addChild(obj.name, obj);

            obj = new Div("Div01","0","36","300","184",null,null,null,null,null,null,this.popupAlert.form);
            obj.set_taborder("1");
            obj.set_text("Div01");
            this.popupAlert.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","120","18",null,"60","120",null,null,null,null,null,this.popupAlert.form.Div01.form);
            obj.set_taborder("0");
            obj.set_image("url(\'theme://images/img_WF_alert.png\')");
            obj.set_cssclass("img_WF_Area");
            this.popupAlert.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static00","10","ImageViewer00:8",null,"42","10",null,null,null,null,null,this.popupAlert.form.Div01.form);
            obj.set_taborder("1");
            obj.set_text("처리에 실패했습니다. \r\n자세한 사항은 처리로그를 확인하세요.");
            obj.set_cssclass("sta_WF_alertText");
            this.popupAlert.form.Div01.addChild(obj.name, obj);

            obj = new Button("confirm_Y","88","140","60","28",null,null,null,null,null,null,this.popupAlert.form.Div01.form);
            obj.set_taborder("2");
            obj.set_text("예");
            obj.set_cssclass("btn_WF_alertConfirm");
            this.popupAlert.form.Div01.addChild(obj.name, obj);

            obj = new Button("confirm_N","confirm_Y:5","140","60","28",null,null,null,null,null,null,this.popupAlert.form.Div01.form);
            obj.set_taborder("3");
            obj.set_text("아니오");
            obj.set_cssclass("btn_WF_alertConfirm");
            this.popupAlert.form.Div01.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.popupAlert.form.Div00.form
            obj = new Layout("default","",0,0,this.popupAlert.form.Div00.form,function(p){});
            this.popupAlert.form.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.popupAlert.form.Div01.form
            obj = new Layout("default","",0,0,this.popupAlert.form.Div01.form,function(p){});
            this.popupAlert.form.Div01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.popupAlert.form
            obj = new Layout("default","",0,0,this.popupAlert.form,function(p){});
            this.popupAlert.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",300,220,this,function(p){});
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
            this.popupAlert.form.Div01.form.ImageViewer00.addEventHandler("onclick",this.PopupDiv00_Div01_ImageViewer00_onclick,this);
        };
        this.loadIncludeScript("alert.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
