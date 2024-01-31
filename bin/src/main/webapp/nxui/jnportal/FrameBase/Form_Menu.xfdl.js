(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Menu");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,235);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new PopupDiv("divMenu","0","0","1920","235",null,null,null,null,null,null,this);
            obj.set_text("PopupDiv00");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("staMenuSample2","50","15","280","40",null,null,null,null,null,null,this.divMenu.form);
            obj.set_taborder("0");
            obj.set_text("2차 메뉴명");
            obj.set_cssclass("sta_TF_navTitle2");
            obj.set_visible("false");
            this.divMenu.addChild(obj.name, obj);

            obj = new Static("staMenuSample3","50","61","85","24",null,null,null,null,null,null,this.divMenu.form);
            obj.set_taborder("1");
            obj.set_text("3차 메뉴명");
            obj.set_cssclass("sta_TF_navText");
            obj.set_visible("false");
            this.divMenu.addChild(obj.name, obj);

            obj = new Static("Static28","0","0","50",null,null,"80",null,null,null,null,this.divMenu.form);
            obj.set_taborder("2");
            obj.set_text("W 50");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.divMenu.addChild(obj.name, obj);

            obj = new Static("Static11","50","0",null,"15","10",null,null,null,null,null,this.divMenu.form);
            obj.set_taborder("3");
            obj.set_text("H 15");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.divMenu.addChild(obj.name, obj);

            obj = new Static("Static28_00","1870","0","50",null,null,"80",null,null,null,null,this.divMenu.form);
            obj.set_taborder("4");
            obj.set_text("W 50");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.divMenu.addChild(obj.name, obj);

            obj = new Static("Static28_01","330","15","20",null,null,"110",null,null,null,null,this.divMenu.form);
            obj.set_taborder("5");
            obj.set_text("W 20");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.divMenu.addChild(obj.name, obj);

            obj = new Static("Static11_00","50","55","280","6",null,null,null,null,null,null,this.divMenu.form);
            obj.set_taborder("6");
            obj.set_text("H 6");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.divMenu.addChild(obj.name, obj);

            obj = new Static("Static11_01","50","205",null,"30","25",null,null,null,null,null,this.divMenu.form);
            obj.set_taborder("7");
            obj.set_text("H 30");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.divMenu.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divMenu.form
            obj = new Layout("default","",0,0,this.divMenu.form,function(p){});
            this.divMenu.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1920,235,this,function(p){});
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
            this.addEventHandler("onclose",this.Form_Men_onclose,this);
            this.divMenu.form.staMenuSample3.addEventHandler("onclick",this.sta_TF_navText_onclick,this);
        };
        this.loadIncludeScript("Form_Menu.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
