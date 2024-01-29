(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Pattern01");
            this.set_titletext("Pattern01");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,792);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_radio", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">Y</Col><Col id=\"data\">동의</Col></Row><Row><Col id=\"code\">N</Col><Col id=\"data\">동의하지않음</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static34","0","0","50",null,null,"0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("W 50");
            obj.set_visible("false");
            obj.set_background("antiquewhite");
            obj.set_color("blue");
            this.addChild(obj.name, obj);

            obj = new Static("Static02",null,"0","50",null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("W\r\n 50");
            obj.set_visible("false");
            obj.set_background("antiquewhite");
            obj.set_color("blue");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","50","0",null,"32","50",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("네비게이션 바 위치입니다.");
            obj.set_color("#ffffff");
            obj.set_background("red");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","50","32",null,"373","50",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","0","0","200","45",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("기본정보");
            obj.set_enable("true");
            obj.set_cssclass("sta_WF_subTitle01");
            obj.set_font("normal 700 16px/normal \"맑은고딕\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static100","0","Static10:0",null,"38","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_condition02box");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static101","0","Static100:-1",null,"38","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_condition02box");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static102","0","Static101:-1",null,"38","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_condition02box");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static103","0","Static102:-1",null,"38","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_condition02box");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static104","0","Static103:-1",null,"38","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_condition02box");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static105","0","Static104:-1",null,"106","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_condition02box");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static106","0","Static105:-1",null,"38","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_condition02box");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static11","0","45","9%","38",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_text("아이디");
            obj.set_enable("true");
            obj.set_cssclass("sta_WF_condition02_LEssential");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static12","50.00%","45","9%","38",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_text("이름");
            obj.set_enable("true");
            obj.set_cssclass("sta_WF_condition02Essential");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static13","0","82","9%","38",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_text("비밀번호");
            obj.set_enable("true");
            obj.set_cssclass("sta_WF_condition02_LEssential");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static14","0","119","9%","38",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_text("비밀번호확인");
            obj.set_enable("true");
            obj.set_cssclass("sta_WF_condition02_LEssential");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static15","0","156","9%","38",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            obj.set_text("이메일");
            obj.set_enable("true");
            obj.set_cssclass("sta_WF_condition02_LEssential");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static16","0","193","9%","38",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("13");
            obj.set_text("연락처");
            obj.set_enable("true");
            obj.set_cssclass("sta_WF_condition02_LEssential");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static17","0","230","9%","106",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("14");
            obj.set_text("주소");
            obj.set_enable("true");
            obj.set_cssclass("sta_WF_condition02_LEssential");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static18","0","335","9%","38",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("15");
            obj.set_text("국가연구자번호");
            obj.set_enable("true");
            obj.set_cssclass("sta_WF_condition02_LEssential");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static19","50.00%","335","9%","38",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("16");
            obj.set_text("국방과학기술인 \r\n등록번호");
            obj.set_enable("true");
            obj.set_cssclass("sta_WF_condition02Essential");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit01","Static11:10","50","150","28",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("17");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit02","Static12:10","50","8.19%","28",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("18");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit03","Static13:10","87","150","28",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("19");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit04","Static14:10","124","150","28",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("20");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit05","Static15:10","161","150","28",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("21");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static20","Edit05:10","163","15","25",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("22");
            obj.set_text("@");
            obj.set_cssclass("sta_WF_GStatus");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit06","Static20:10","161","140","28",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("23");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit07","Static16:10","198","150","28",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("24");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit08","Static17:10","235","150","28",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("25");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit09","Static17:10","269","500","28",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("26");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit10","Static17:10","303","500","28",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("27");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit11","Static18:10","340","150","28",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("28");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit12","Static19:10","340","150","28",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("29");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static09","Edit03:10","88","243","25",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("30");
            obj.set_text("*9~15자 이내 숫자, 문자, 특수문자 조합");
            obj.set_cssclass("sta_WF_GStatus");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button03","Edit08:10.930000000000007","235","72","28",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("31");
            obj.set_text("주소검색");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button04","Edit11:10","340","72","28",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("32");
            obj.set_text("번호확인");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button05","Edit12:10.928000000000111","340","72","28",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("33");
            obj.set_text("번호확인");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00","256","0","44","45",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("34");
            obj.set_text("H 38");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static34","163","45","10",null,null,"0",null,null,null,null,this.Div00.form);
            obj.set_taborder("35");
            obj.set_text("w 10");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static34_00","323","45","10",null,null,"0",null,null,null,null,this.Div00.form);
            obj.set_taborder("36");
            obj.set_text("w 10");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static34_00_00","348","156","10","38",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("37");
            obj.set_text("w 10");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static34_00_00_00","1233","335","10","38",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("38");
            obj.set_text("w 10");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static34_00_01","1073","45","10",null,null,"0",null,null,null,null,this.Div00.form);
            obj.set_taborder("39");
            obj.set_text("w 10");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div01","50","408",null,"310","50",null,null,null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Static("Static21","0%","0","200","45",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("업체/기관정보");
            obj.set_enable("true");
            obj.set_cssclass("sta_WF_subTitle01");
            obj.set_font("normal 700 16px/normal \"맑은고딕\"");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static107","0","Static21:0",null,"38","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_condition02box");
            obj.set_text("");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static108","0","Static107:-1",null,"38","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_condition02box");
            obj.set_text("");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static109","0","Static108:-1",null,"38","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_condition02box");
            obj.set_text("");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static110","0","Static109:-1",null,"106","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_condition02box");
            obj.set_text("");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static22","0","45","9%","38",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("5");
            obj.set_text("업체/기관명");
            obj.set_enable("true");
            obj.set_cssclass("sta_WF_condition02_LEssential");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static23","0.00%","82","9%","38",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("6");
            obj.set_text("부서");
            obj.set_enable("true");
            obj.set_cssclass("sta_WF_condition02_LEssential");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static25","0.00%","119","9%","38",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("7");
            obj.set_text("사무실연락처");
            obj.set_enable("true");
            obj.set_cssclass("sta_WF_condition02_LEssential");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static26","50.00%","119","9%","38",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("8");
            obj.set_text("사무실팩스번호");
            obj.set_enable("true");
            obj.set_cssclass("sta_WF_condition02Essential");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static24","50.00%","82","9%","38",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("9");
            obj.set_text("직위");
            obj.set_enable("true");
            obj.set_cssclass("sta_WF_condition02Essential");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static27","0.00%","156","9%","106",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("10");
            obj.set_text("사무실 주소");
            obj.set_enable("true");
            obj.set_cssclass("sta_WF_condition02_LEssential");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit13","Static22:10","50","147","28",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("11");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit14","Static23:10","87","147","28",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("12");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit15","Static24:10","87","150","28",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("13");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit16","Static25:10","124","147","28",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("14");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit17","Static26:10","124","150","28",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("15");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit18","Static27:10","161","147","28",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("16");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit19","Static27:10","195","500","28",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("17");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit20","Static27:10","229","500","28",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("18");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button08","Edit13:10.927999999999997","50","125","28",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("19");
            obj.set_text("총괄담당자 신청");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button06_00","Edit18:9.927999999999997","161","72","28",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("20");
            obj.set_text("주소검색");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static111","0","Static110:10",null,"38","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_condition02box");
            obj.set_text("");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static28","0.00%","272","9%","38",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("22");
            obj.set_text("업체/기관명");
            obj.set_enable("true");
            obj.set_cssclass("sta_WF_condition02_LEssential");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button08_00","Static28:10","277","110","28",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("23");
            obj.set_text("회원탈퇴 신청");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static34","163","38","10",null,null,"0",null,null,null,null,this.Div01.form);
            obj.set_taborder("24");
            obj.set_text("w 10");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static34_00","320","38","10",null,null,"0",null,null,null,null,this.Div01.form);
            obj.set_taborder("25");
            obj.set_text("w 10");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static34_00_00","1073","82","10","75",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("26");
            obj.set_text("w 10");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static06_00_00_00_00_00","0","Static27:0","50","10",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("27");
            obj.set_text("H 10");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button01","47.97%","732","136","45",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("저장");
            obj.set_font("normal 700 16px/normal \"맑은고딕\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_00_00_00_00_00","50","Div00:0","50","10",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("H 10");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_00_00_00_00_00_00_00","915",null,"50","15",null,"0",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("H 15");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_00_00_00_00_00_00_00_00","915",null,"50","15",null,"60",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("H 15");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01.form
            obj = new Layout("default","",0,0,this.Div01.form,function(p){});
            this.Div01.form.addLayout(obj.name, obj);

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
        this.registerScript("myInfo_1010M.xfdl", function() {

        this.Div00_Button01_onclick = function(obj,e)
        {
        /*
            var sMenuId = "joinComplete";
        	var url = "Login::join_complete.xfdl";
        	nexacro.getApplication().goPage(sMenuId, url);
        */
        };

        this.Div00_Button06_onclick = function(obj,e)
        {
        	var objChild = new ChildFrame("popupCompany", "absolute", 0, 0, 800, 640);
        	objChild.set_formurl("Login::popup_company.xfdl");
        	objChild.set_openalign("center middle");
        	objChild.set_dragmovetype("all");

            objChild.showModal(this.getOwnerFrame()
                             , {}
                             , this
                             , "fn_callback_pop");
        };

        this.fn_callback_pop = function(sPopupId, sReturn)
        {

        }

        this.Div00_Button07_onclick = function(obj,e)
        {
        	var objChild = new ChildFrame("popupCompanyRegist", "absolute", 0, 0, 810, 360);
        	objChild.set_formurl("Login::popup_companyRegist.xfdl");
        	objChild.set_openalign("center middle");
        	objChild.set_dragmovetype("all");

            objChild.showModal(this.getOwnerFrame()
                             , {}
                             , this
                             , "fn_callback_pop");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Static34.addEventHandler("onclick",this.Static02_onclick,this);
            this.Static02.addEventHandler("onclick",this.Static02_onclick,this);
            this.Div00.form.Static10.addEventHandler("onclick",this.Static_onclick,this);
            this.Div00.form.Static11.addEventHandler("onclick",this.Static_onclick,this);
            this.Div00.form.Static12.addEventHandler("onclick",this.Static_onclick,this);
            this.Div00.form.Static13.addEventHandler("onclick",this.Static_onclick,this);
            this.Div00.form.Static14.addEventHandler("onclick",this.Static_onclick,this);
            this.Div00.form.Static15.addEventHandler("onclick",this.Static_onclick,this);
            this.Div00.form.Static16.addEventHandler("onclick",this.Static_onclick,this);
            this.Div00.form.Static17.addEventHandler("onclick",this.Static_onclick,this);
            this.Div00.form.Static18.addEventHandler("onclick",this.Static_onclick,this);
            this.Div00.form.Static19.addEventHandler("onclick",this.Static_onclick,this);
            this.Div00.form.Static09.addEventHandler("onclick",this.Static_onclick,this);
            this.Div01.form.Static21.addEventHandler("onclick",this.Static_onclick,this);
            this.Div01.form.Static22.addEventHandler("onclick",this.Static_onclick,this);
            this.Div01.form.Static23.addEventHandler("onclick",this.Static_onclick,this);
            this.Div01.form.Static25.addEventHandler("onclick",this.Static_onclick,this);
            this.Div01.form.Static26.addEventHandler("onclick",this.Static_onclick,this);
            this.Div01.form.Static24.addEventHandler("onclick",this.Static_onclick,this);
            this.Div01.form.Static27.addEventHandler("onclick",this.Static_onclick,this);
            this.Div01.form.Static28.addEventHandler("onclick",this.Static_onclick,this);
            this.Button01.addEventHandler("onclick",this.Div00_Button01_onclick,this);
            this.Static06_00_00_00_00_00_00_00.addEventHandler("onclick",this.Static06_00_00_00_00_00_00_00_onclick,this);
            this.Static06_00_00_00_00_00_00_00_00.addEventHandler("onclick",this.Static06_00_00_00_00_00_00_00_onclick,this);
        };
        this.loadIncludeScript("myInfo_1010M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
