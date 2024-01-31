(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_TabContent");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new View("headerView","44","5","100%","56",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_viewdataset("viewdataset");
            this.addChild(obj.name, obj);

            obj = new Static("labelMenuNm","10","10","120","56",null,null,"0",null,null,null,this.headerView.form);
            obj.set_taborder("0");
            obj.set_fittocontents("none");
            obj.set_flexgrow("1");
            obj.set_flexshrink("0");
            obj.set_padding("0px 0px 0px 32px");
            obj.set_font("normal 21px/normal \"Arial\"");
            this.headerView.addChild(obj.name, obj);

            obj = new Static("labelPath",null,"0","48","56","0",null,"0",null,null,null,this.headerView.form);
            obj.set_taborder("1");
            obj.set_flexgrow("0");
            obj.set_flexshrink("0");
            obj.set_fittocontents("width");
            obj.set_padding("0px 32px");
            this.headerView.addChild(obj.name, obj);

            obj = new Div("divWrap","0","0","100%","500",null,null,"20",null,"20",null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_flexgrow("1");
            obj.set_flexshrink("0");
            this.addChild(obj.name, obj);

            obj = new Div("contentDiv","10","10",null,null,"10","10",null,null,null,null,this.divWrap.form);
            obj.set_taborder("0");
            obj.set_url("FrameBase::Form_Main.xfdl");
            this.divWrap.addChild(obj.name, obj);

            obj = new Button("btn_toggle","0","30","20","50",null,null,null,null,null,null,this.divWrap.form);
            obj.set_taborder("1");
            obj.set_text(">");
            this.divWrap.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.headerView.form
            obj = new Layout("default","",0,0,this.headerView.form,function(p){});
            obj.set_type("horizontal");
            this.headerView.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divWrap.form.contentDiv
            obj = new Layout("default","",0,0,this.divWrap.form.contentDiv.form,function(p){});
            this.divWrap.form.contentDiv.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divWrap.form
            obj = new Layout("default","",0,0,this.divWrap.form,function(p){});
            this.divWrap.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",20,20,this,function(p){});
            obj.set_type("vertical");
            obj.set_verticalgap("0");
            obj.set_horizontalgap("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","FrameBase::Form_Main.xfdl");
        };
        
        // User Script
        this.registerScript("Form_TabContent_copy0.xfdl", function() {

        this.Form_TabContent_oninit = function(obj,e)
        {
        	var args = this.getOwnerFrame().tabArgs;
        	this.set_titletext(args.title);
        	this.headerView.form.labelMenuNm.set_text(args.title);
        	if (args.menuPath != null && Array.isArray(args.menuPath)) {
        		this.headerView.form.labelPath.set_text(args.menuPath.join(" > "));
        	} else if (typeof args.menuPath === "string") {
        		this.headerView.form.labelPath.set_text(args.menuPath.split("\n").join(" > "))
        	} else {
        		this.headerView.form.labelPath.set_text("");
        	}

        	if (args.showHeader) {
        		this.headerView.set_visible(true);
        	} else if (args.showHeader != null && !args.showHeader) {
        		this.headerView.set_visible(false);
        	}

        	this.divWrap.form.contentDiv.set_url(args.url);

        	nexacro.getApplication().gdsUiStat.addEventHandler("oncolumnchanged", this.gdsUiStat_oncolumnchanged, this);
        };

        this.gdsUiStat_oncolumnchanged = function(obj,e)
        {
        	if (nexacro.getApplication().gdsUiStat.getColumn(0, "isLeftFrameVisible") == "true")
        		this.divWrap.form.btn_toggle.set_text("<");
        	else
        		this.divWrap.form.btn_toggle.set_text(">");
        };

        this.divWrap_btn_toggle_onclick = function(obj,e)
        {
        	if (nexacro.getApplication().gdsUiStat.getColumn(0, "isLeftFrameVisible") == "true") {
        		nexacro.getApplication().gdsUiStat.setColumn(0, "isLeftFrameVisible", false);
        	} else {
        		nexacro.getApplication().gdsUiStat.setColumn(0, "isLeftFrameVisible", true);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.Form_TabContent_oninit,this);
            this.divWrap.form.btn_toggle.addEventHandler("onclick",this.divWrap_btn_toggle_onclick,this);
        };
        this.loadIncludeScript("Form_TabContent_copy0.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
