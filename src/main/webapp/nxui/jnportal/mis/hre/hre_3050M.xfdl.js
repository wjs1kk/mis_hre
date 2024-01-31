(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("hre_3050M");
            this.set_titletext("New Form");
            this.set_background("white");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,961);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("btn_Save","1819","39","63","28",null,null,null,null,null,null,this);
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_icoSave");
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title","10","10","500","58",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("기본화면구성");
            obj.set_cssclass("sta_WF_compTitle01");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","20","115",null,null,"20","796",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("");
            obj.set_cssclass("div_WF_panel");
            this.addChild(obj.name, obj);

            obj = new Static("sta004","11","9","110","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_condition01");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo00","130","11","250","29",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("Combo00");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00","412","11","800","27",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"125","65","28","38",null,null,null,null,null,this);
            obj.set_text("조회");
            obj.set_cssclass("");
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Static("Static14","10","190","200","45",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("평가 유형별 평가비중");
            obj.set_enable("true");
            obj.set_cssclass("sta_WF_subTitle01");
            this.addChild(obj.name, obj);

            obj = new Grid("grdDept","20","230",null,null,"20","38",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("dsList");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_autoupdatetype("itemselect");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("expand,null");
            obj.set_cssclass("grd_WF_tree");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\" band=\"left\"/><Column size=\"150\" band=\"left\"/><Column size=\"400\" band=\"left\"/><Column size=\"400\" band=\"left\"/><Column size=\"300\" band=\"left\"/><Column size=\"300\" band=\"left\"/><Column size=\"200\" band=\"left\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"34\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" edittype=\"normal\" text=\"선택\"/><Cell col=\"1\" text=\"평가 ID\"/><Cell col=\"2\" text=\"평가유형\"/><Cell col=\"3\" text=\"평가그룹\"/><Cell col=\"4\" text=\"평가비중\"/><Cell col=\"5\" text=\"평가가정\"/><Cell col=\"6\" text=\"사용여부\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" textAlign=\"center\" text=\"bind:rowCheck\"/><Cell col=\"1\" textAlign=\"center\" imagestretch=\"fit\" displaytype=\"normal\" text=\"bind:rowStatus\"/><Cell col=\"2\" displaytype=\"combocontrol\"/><Cell col=\"3\" displaytype=\"combocontrol\"/><Cell col=\"4\" displaytype=\"number\"/><Cell col=\"5\" displaytype=\"number\"/><Cell col=\"6\" displaytype=\"checkboxcontrol\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_row_add",null,"190","73","26","127",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_Row_Add");
            this.addChild(obj.name, obj);

            obj = new Button("btn_row_delete",null,"190","73","26","37",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_Row_Delete");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1920,961,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Div00.form.comboAdTySearch","value","dsAdTy","text");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Div00.form.edtAdvtTitle","value","dsSearch","advtTitle");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Div00.form.edtAdvtCont","value","dsSearch","advtCont");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn_Save.addEventHandler("onclick",this.btn_search_onclick,this);
            this.Div00.form.sta004.addEventHandler("onclick",this.div_Search_Static01_onclick,this);
        };
        this.loadIncludeScript("hre_3050M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
