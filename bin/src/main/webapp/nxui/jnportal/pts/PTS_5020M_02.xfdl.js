(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PTS_5020M_02");
            this.set_titletext("본인동의");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,895);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_radio", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">Y</Col><Col id=\"data\">동의</Col></Row><Row><Col id=\"code\">N</Col><Col id=\"data\">동의하지않음</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static34","0","0","180",null,null,"0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("W 180");
            obj.set_visible("false");
            obj.set_background("antiquewhite");
            obj.set_color("blue");
            this.addChild(obj.name, obj);

            obj = new Static("Static02",null,"0","180",null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("W 180");
            obj.set_visible("false");
            obj.set_background("antiquewhite");
            obj.set_color("blue");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","180","0",null,"191","180",null,null,null,null,null,this);
            obj.set_taborder("2");
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
            obj.set_background("#f5f5f5");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","Static01:0","Static00:0","390","66",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_enable("true");
            obj.set_cssclass("portal_sta_joinStep2_S");
            obj.set_text("본인확인");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03","Static02:0","Static00:0","390","66",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_enable("true");
            obj.set_cssclass("portal_sta_joinStep2_S_step3");
            obj.set_text("가입양식작성");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static04","Static03:0","Static00:0",null,"66","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_enable("true");
            obj.set_cssclass("portal_sta_joinStep4");
            obj.set_text("가입완료");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div01","180","Div00:0",null,"161","180",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("portal_div_frmBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","0","48",null,"30","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("본인인증");
            obj.set_enable("true");
            obj.set_cssclass("portal_sta_frmTitle2");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00","576","78","407","60",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_text("* 휴대폰 본인인증은 본인 명의 휴대폰으로 진행 가능합니다.\r\n* 본인인증 오류 문의처 NICE평가정보(1600-1522)");
            obj.set_cssclass("portal_sta_joinInfo2");
            this.Div01.addChild(obj.name, obj);

            obj = new Div("Div02","180","411",null,"281","180",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Div02");
            obj.set_cssclass("div_WF_Area");
            obj.set_border("1px solid #d4d4d4");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00_00","731","32","136","140",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("1");
            obj.set_cssclass("portal_img_certi");
            obj.set_image("url(\'theme://images/portal/portal_img_certi.png\')");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("Button20","715","ImageViewer00_00:30","130","45",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("0");
            obj.set_text("인증하기");
            obj.set_cssclass("portal_btn");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static00_00","740","Div02:0","584","50",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01.form
            obj = new Layout("default","",0,0,this.Div01.form,function(p){});
            this.Div01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div02.form
            obj = new Layout("default","",0,0,this.Div02.form,function(p){});
            this.Div02.form.addLayout(obj.name, obj);

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
        this.registerScript("PTS_5020M_02.xfdl", function() {

        this.Div00_Button02_onclick = function(obj,e)
        {
        	var sMenuId = "joinForm";
        	var url = "pts::PTS_5020M_03.xfdl";
        	nexacro.getApplication().goPage(sMenuId, url);
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Static34.addEventHandler("onclick",this.Static02_onclick,this);
            this.Static02.addEventHandler("onclick",this.Static02_onclick,this);
            this.Div00.form.Static00.addEventHandler("onclick",this.Static_onclick,this);
            this.Div00.form.Static01.addEventHandler("onclick",this.Static_onclick,this);
            this.Div00.form.Static02.addEventHandler("onclick",this.Static_onclick,this);
            this.Div00.form.Static03.addEventHandler("onclick",this.Static_onclick,this);
            this.Div00.form.Static04.addEventHandler("onclick",this.Static_onclick,this);
            this.Div01.form.Static10.addEventHandler("onclick",this.Static_onclick,this);
            this.Div02.form.Button20.addEventHandler("onclick",this.Div00_Button02_onclick,this);
        };
        this.loadIncludeScript("PTS_5020M_02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
