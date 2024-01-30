(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_TabBar");
            this.set_titletext("Tab Bar");
            this.set_cssclass("frm_MDI_tabbar");
            this.set_scrolltype("both");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,35);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Tab("tabBar","0","5",null,null,"125","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_MDI_menu");
            obj.set_multiline("false");
            obj.set_tabbuttongap("2");
            obj.set_tabposition("top");
            obj.set_tabbuttonstartgap("50");
            obj.set_tabbuttonheight("30");
            obj.set_showextrabutton("true");
            obj.set_extrabuttonsize("10 10");
            this.addChild(obj.name, obj);

            obj = new Button("btnCloseAll",null,"0","38","35","49",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("");
            obj.set_icon("url(\'theme://images/btn_MDI_tabClose.png\')");
            obj.set_cssclass("tabbar-button");
            obj.set_tooltiptext("모든 탭 닫기");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnHome",null,"0","38","35","86",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("tabbar-button");
            obj.set_tooltiptext("홈");
            obj.set_tooltiptype("inplace");
            obj.set_icon("url(\'theme://images/btn_MDI_menu.png\')");
            this.addChild(obj.name, obj);

            obj = new Button("btn_MdiPrev",null,"0","35","36","157",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("btn_MDI_tabprev");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_MdiNext",null,"0","35","36","123",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_MDI_tabnext");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1920,35,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_TabBar.xfdl", function() {

        this.Form_TabBar_oninit = function(obj,e)
        {
        	nexacro.getApplication().openHomeTab();
        };
        this.tabBar_onlbuttonup = function(obj,e)
        {
        	var index = this.tabBar.getIndex(e.canvasx, e.canvasy);

        	if (index >= 0 && this.tabBar.tabindex == index) {
        		nexacro.getApplication().changeTab(this.tabBar.tabpages[index].id);
        	}

        	return true;
        };

        this.tabBar_onextrabuttonclick = function(obj,e)
        {
        	var index = this.tabBar.getIndex(e.canvasx, e.canvasy);
        	var tabId = obj.tabpages[index].id;
        	nexacro.getApplication().closeTab(tabId);
        };

        this.btnCloseAll_onclick = function(obj,e)
        {
        	nexacro.getApplication().closeAllTab();
        };
        this.btnHome_onclick = function(obj,e)
        {
        /*
        	if(tabBar.tabpages.length > 0){
        		objApp.closeAllTab();
        	}
        */
        	nexacro.getApplication().openHomeTab();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.Form_TabBar_oninit,this);
            this.tabBar.addEventHandler("onlbuttonup",this.tabBar_onlbuttonup,this);
            this.tabBar.addEventHandler("onextrabuttonclick",this.tabBar_onextrabuttonclick,this);
            this.btnCloseAll.addEventHandler("onclick",this.btnCloseAll_onclick,this);
            this.btnHome.addEventHandler("onclick",this.btnHome_onclick,this);
        };
        this.loadIncludeScript("Form_TabBar.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
