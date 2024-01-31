(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Footer");
            this.set_titletext("New Form");
            this.set_cssclass("footer_cmb");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,100);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo01", this);
            obj._setContents("<ColumnInfo><Column id=\"country\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"value\"/><Col id=\"country\">업무시스템</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCombo02", this);
            obj._setContents("<ColumnInfo><Column id=\"country\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"value\"/><Col id=\"country\">관련사이트</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("footerBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","180","42","281","51",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_font("normal bold 20pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_background("url(\'theme://images/footer_logo.png\') no-repeat left center");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","Static00_00:45","40","300","25",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("(52815) 경상남도 진주시 사들로 123번길 40");
            obj.set_enable("true");
            obj.set_font("normal 14px/normal \"맑은고딕\"");
            obj.set_textAlign("left");
            obj.set_color("#afafaf");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","Static05:10","40","150","25",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("팩스 055-751-5266");
            obj.set_enable("true");
            obj.set_font("normal 14px/normal \"맑은고딕\"");
            obj.set_textAlign("left");
            obj.set_color("#afafaf");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","Static00_00:45","Static05:0","800","25",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Korea Research Institute for defense Technology planning and advancement all rights reserved.");
            obj.set_enable("true");
            obj.set_font("normal 14px/normal \"맑은고딕\"");
            obj.set_textAlign("left");
            obj.set_color("#afafaf");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00",null,"10","200","40","180",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_innerdataset("\\");
            obj.set_codecolumn("value");
            obj.set_datacolumn("country");
            obj.set_displaynulltext("관련사이트");
            obj.set_cssclass("footer_cmb");
            obj.set_text("관련사이트");
            obj.set_value("");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","Static00_00:-281","13","128","16",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("개인정보처리방침");
            obj.set_enable("true");
            obj.set_font("normal 14px/normal 맑은고딕");
            obj.set_color("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","Static01:15","13","4","16",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("|");
            obj.set_enable("true");
            obj.set_textAlign("center");
            obj.set_font("normal 14px/normal \"맑은고딕\"");
            obj.set_color("#878787");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","Static10:15","13","64","16",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("이용약관");
            obj.set_enable("true");
            obj.set_font("normal 14px/normal 맑은고딕");
            obj.set_color("#afafaf");
            this.addChild(obj.name, obj);

            obj = new Static("Static11","Static02:15","13","4","16",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("|");
            obj.set_enable("true");
            obj.set_textAlign("center");
            obj.set_font("normal 14px/normal \"맑은고딕\"");
            obj.set_color("#878787");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","Static11:15","13","80","16",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("연구소소개");
            obj.set_enable("true");
            obj.set_font("normal 14px/normal 맑은고딕");
            obj.set_color("#afafaf");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00_00",null,"10","200","40","Combo00:10",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_innerdataset("dsCombo01");
            obj.set_codecolumn("value");
            obj.set_datacolumn("country");
            obj.set_displaynulltext("업무시스템");
            obj.set_cssclass("footer_cmb");
            obj.set_text("관련사이트");
            obj.set_value("");
            obj.set_index("0");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1920,100,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Footer.xfdl", function() {

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Static00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static05.addEventHandler("onclick",this.Static_onclick,this);
            this.Static06.addEventHandler("onclick",this.Static_onclick,this);
            this.Static07.addEventHandler("onclick",this.Static_onclick,this);
            this.Static01.addEventHandler("onclick",this.Static_onclick,this);
            this.Static10.addEventHandler("onclick",this.Static_onclick,this);
            this.Static02.addEventHandler("onclick",this.Static_onclick,this);
            this.Static11.addEventHandler("onclick",this.Static_onclick,this);
            this.Static03.addEventHandler("onclick",this.Static_onclick,this);
        };
        this.loadIncludeScript("Form_Footer.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
