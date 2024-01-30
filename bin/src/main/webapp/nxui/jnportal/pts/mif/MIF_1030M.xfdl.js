(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PTS_5020M_04");
            this.set_titletext("가입완료");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,510);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_radio", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">Y</Col><Col id=\"data\">동의</Col></Row><Row><Col id=\"code\">N</Col><Col id=\"data\">동의하지않음</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div01","180","189",null,"161","180",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("portal_div_frmBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","0","48",null,"30","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("회원가입신청이 완료되었습니다.");
            obj.set_enable("true");
            obj.set_cssclass("portal_sta_frmTitle2");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00","641","78","298","60",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_text("* 관리자 승인후 로그인 가능합니다.\r\n* 승인까지 최대 00일이 소요될 수 있습니다.");
            obj.set_cssclass("portal_sta_joinInfo2");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button01","895","Div01:83",null,"45","895",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("확인");
            obj.set_font("normal 700 16px/normal \"맑은고딕\"");
            obj.set_cssclass("portal_btn");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","180","0",null,"191","180",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0",null,"125","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_enable("true");
            obj.set_cssclass("portal_sta_frmTitle");
            obj.set_text("회원가입");
            obj.set_textAlign("center");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","0","Static00:0","390","66",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_enable("true");
            obj.set_cssclass("portal_sta_joinStep1");
            obj.set_text("약관동의");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","Static01:0","Static00:0","390","66",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_enable("true");
            obj.set_cssclass("portal_sta_joinStep2");
            obj.set_text("본인확인");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03","Static02:0","Static00:0","390","66",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_enable("true");
            obj.set_cssclass("portal_sta_joinStep3");
            obj.set_text("가입양식작성");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static04","Static03:0","Static00:0",null,"66","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_enable("true");
            obj.set_cssclass("portal_sta_joinStep4_S");
            obj.set_text("가입완료");
            this.Div00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div01.form
            obj = new Layout("default","",0,0,this.Div01.form,function(p){});
            this.Div01.form.addLayout(obj.name, obj);

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
        this.registerScript("MIF_1030M.xfdl", function() {
        this.Div00_Button01_onclick = function(obj,e)
        {
        	var sMenuId = "joinComplete";
        	var url = "pts::PTS_0000M.xfdl";
        	nexacro.getApplication().goPage(sMenuId, url);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Div01.form.Static10.addEventHandler("onclick",this.Static_onclick,this);
            this.Button01.addEventHandler("onclick",this.Div00_Button01_onclick,this);
            this.Div00.form.Static00.addEventHandler("onclick",this.Static_onclick,this);
            this.Div00.form.Static01.addEventHandler("onclick",this.Static_onclick,this);
            this.Div00.form.Static02.addEventHandler("onclick",this.Static_onclick,this);
            this.Div00.form.Static03.addEventHandler("onclick",this.Static_onclick,this);
            this.Div00.form.Static04.addEventHandler("onclick",this.Static_onclick,this);
        };
        this.loadIncludeScript("MIF_1030M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
