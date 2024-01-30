(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Main");
            this.set_titletext("");
            this.set_background("#ffffff");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("divWork","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_async("true");
            obj.set_url("pts::PTS_0000M.xfdl");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divWork
            obj = new Layout("default","",0,0,this.divWork.form,function(p){});
            this.divWork.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1920,700,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","pts::PTS_0000M.xfdl");
        };
        
        // User Script
        this.registerScript("Form_Main.xfdl", function() {

        this.Form_Main_onload = function(obj,e)
        {

        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Main_onload,this);
            this.divWork.addEventHandler("onvscroll",this.divWork_onvscroll,this);
        };
        this.loadIncludeScript("Form_Main.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
