(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("erp_hre_ui_3050m");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("staTitle","50","0","500","58",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("평가비중 기준 관리");
            obj.set_cssclass("sta_WF_compTitle01");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","68",null,"50","120",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_bg");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
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
            this.staTitle.addEventHandler("onclick",this.staTitle_onclick,this);
            this.Static00.addEventHandler("onclick",this.div_Search_Static00_onclick,this);
        };
        this.loadIncludeScript("erp_hre_ui_3050m.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
