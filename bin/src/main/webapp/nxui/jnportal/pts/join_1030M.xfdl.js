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
                this._setFormPosition(1920,843);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_radio", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">Y</Col><Col id=\"data\">동의</Col></Row><Row><Col id=\"code\">N</Col><Col id=\"data\">동의하지않음</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","50","32",null,"98","50",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_WF_Area");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","80","58",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_enable("true");
            obj.set_cssclass("sta_WF_compTitle01");
            obj.set_text("회원가입");
            obj.set_textAlign("center");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03_00","180","0","50","58",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("H 44");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","0","Static00:0","250","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_enable("true");
            obj.set_cssclass("sta_WF_condition01");
            obj.set_text("약관동의");
            obj.set_textAlign("center");
            obj.set_border("1px solid #333333");
            obj.set_background("#dee7f1");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","Static01:0","Static00:0","250","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_enable("true");
            obj.set_cssclass("sta_WF_condition01");
            obj.set_text("본인동의");
            obj.set_textAlign("center");
            obj.set_border("1px solid #333333");
            obj.set_background("#dee7f1");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03","Static01:250","Static00:0","250","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_enable("true");
            obj.set_cssclass("sta_WF_condition01");
            obj.set_text("가입양식작성");
            obj.set_textAlign("center");
            obj.set_border("1px solid #333333");
            obj.set_background("#00388e");
            obj.set_color("#ffffff");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static04","Static01:500","Static00:0","250","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_enable("true");
            obj.set_cssclass("sta_WF_condition01");
            obj.set_text("가입완료");
            obj.set_textAlign("center");
            obj.set_border("1px solid #333333");
            obj.set_background("#dee7f1");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static34","0","0","50",null,null,"0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("W 50");
            obj.set_visible("false");
            obj.set_background("antiquewhite");
            obj.set_color("blue");
            this.addChild(obj.name, obj);

            obj = new Static("Static02",null,"0","50",null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("W\r\n 50");
            obj.set_visible("false");
            obj.set_background("antiquewhite");
            obj.set_color("blue");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","50","0",null,"32","50",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("네비게이션 바 위치입니다.");
            obj.set_color("#ffffff");
            obj.set_background("red");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","50","140",null,"373","50",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Static("Static30","0","0","10",null,null,"0",null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("w 10");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static30_00",null,"0","10",null,"0","0",null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_text("w 10");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static10","10","0","500","45",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            obj.set_text("기본정보");
            obj.set_enable("true");
            obj.set_cssclass("sta_WF_subTitle01");
            obj.set_font("normal 700 16px/normal \"맑은고딕\"");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static05_00_01","256","0","44","45",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_text("H 45");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static100","10","Static10:0",null,"38","10",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_condition02box");
            obj.set_text("");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static101","10","Static100:-1",null,"38","10",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_condition02box");
            obj.set_text("");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static102","10","Static101:-1",null,"38","10",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_condition02box");
            obj.set_text("");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static103","10","Static102:-1",null,"38","10",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_condition02box");
            obj.set_text("");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static104","10","Static103:-1",null,"38","10",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_condition02box");
            obj.set_text("");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static105","10","Static104:-1",null,"106","10",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_condition02box");
            obj.set_text("");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static106","10","Static105:-1",null,"38","10",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_condition02box");
            obj.set_text("");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static11","10","45","9%","38",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("11");
            obj.set_text("아이디");
            obj.set_enable("true");
            obj.set_cssclass("sta_WF_condition02_LEssential");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static12","50.00%","45","8.96%","38",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("12");
            obj.set_text("이름");
            obj.set_enable("true");
            obj.set_cssclass("sta_WF_condition02Essential");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static13","10","82","9%","38",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("13");
            obj.set_text("비밀번호");
            obj.set_enable("true");
            obj.set_cssclass("sta_WF_condition02_LEssential");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static14","10","119","9%","38",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("14");
            obj.set_text("비밀번호확인");
            obj.set_enable("true");
            obj.set_cssclass("sta_WF_condition02_LEssential");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static15","10","156","9%","38",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("15");
            obj.set_text("이메일");
            obj.set_enable("true");
            obj.set_cssclass("sta_WF_condition02_LEssential");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static16","10","193","9%","38",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("16");
            obj.set_text("연락처");
            obj.set_enable("true");
            obj.set_cssclass("sta_WF_condition02_LEssential");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static17","10","230","9%","106",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("17");
            obj.set_text("주소");
            obj.set_enable("true");
            obj.set_cssclass("sta_WF_condition02_LEssential");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static18","10","335","9%","38",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("18");
            obj.set_text("국가연구자번호");
            obj.set_enable("true");
            obj.set_cssclass("sta_WF_condition02_LEssential");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static19","50.00%","335","8.96%","38",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("19");
            obj.set_text("국방과학기술인 \r\n등록번호");
            obj.set_enable("true");
            obj.set_cssclass("sta_WF_condition02Essential");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit01","Static11:10","50","150","28",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("20");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit02","Static12:10","50","150","28",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("21");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit03","Static13:10","88","150","28",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("22");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit04","Static14:10","124","150","28",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("23");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit05","Static15:10","161","150","28",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("24");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static20","Edit05:10","163","15","25",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("25");
            obj.set_text("@");
            obj.set_cssclass("sta_WF_GStatus");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit06","Static20:10","161","146","28",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("26");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static14_00_02_00",null,"0","150","45","10",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("27");
            obj.set_text(" 는 필수항목입니다.");
            obj.set_enable("true");
            obj.set_cssclass("sta_WF_condition01Essential sta_WF_GTxt");
            obj.set_textAlign("center");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit07","Static16:10","198","150","28",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("28");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit08","Static17:10","235","150","28",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("29");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit09","Static17:10","268","500","28",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("30");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit10","Static17:10","302","500","28",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("31");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit11","Static18:10","340","150","28",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("32");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit12","Static19:10","340","150","28",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("33");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static09","Edit03:10","88","241","25",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("34");
            obj.set_text("*9~15자 이내 숫자, 문자, 특수문자 조합");
            obj.set_cssclass("sta_WF_GStatus");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button02","Edit01:10.199999999999989","50","72","28",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("35");
            obj.set_text("중복확인");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button03","Edit08:10.199999999999989","235","72","28",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("36");
            obj.set_text("주소검색");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button04","Edit11:10.199999999999989","340","72","28",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("37");
            obj.set_text("번호확인");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button05","Edit12:10.928000000000111","340","72","28",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("38");
            obj.set_text("번호확인");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static30_01","Static11:0","45","10",null,null,"0",null,null,null,null,this.Div01.form);
            obj.set_taborder("39");
            obj.set_text("w 10");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static30_01_00","333","45","10",null,null,"0",null,null,null,null,this.Div01.form);
            obj.set_taborder("40");
            obj.set_text("w 10");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static30_01_00_00","1073","45","10",null,null,"0",null,null,null,null,this.Div01.form);
            obj.set_taborder("41");
            obj.set_text("w 10");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static34_00_00","358","156","10","38",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("42");
            obj.set_text("w 10");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static34_00_00_00","1233","335","10","38",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("43");
            obj.set_text("w 10");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static06_00_00_00","60","130","50","10",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("H 10");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","935","800","65","28",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("다음");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_00_00_00_00_00_00_00","945",null,"50","15",null,"0",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("H 15");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_00_00_00_00_00_00_00_00","945",null,"50","15",null,"43",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("H 15");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new Div("Div02","50","Div01:10",null,"262","50",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("div_WF_Area");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static30","0","0","10",null,null,"0",null,null,null,null,this.Div02.form);
            obj.set_taborder("0");
            obj.set_text("w 10");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static30_00",null,"0","10",null,"0","0",null,null,null,null,this.Div02.form);
            obj.set_taborder("1");
            obj.set_text("w 10");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static21","10","0","200","45",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("2");
            obj.set_text("업체/기관정보");
            obj.set_enable("true");
            obj.set_cssclass("sta_WF_subTitle01");
            obj.set_font("normal 700 16px/normal \"맑은고딕\"");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static107","10","Static21:0",null,"38","10",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_condition02box");
            obj.set_text("");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static108","10","Static107:-1",null,"38","10",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_condition02box");
            obj.set_text("");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static109","10","Static108:-1",null,"38","10",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_condition02box");
            obj.set_text("");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static110","10","Static109:-1",null,"106","10",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_condition02box");
            obj.set_text("");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static14_00_02_00_00",null,"0","360","45","10",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("7");
            obj.set_text("업체/기관 검색이 되지 않을 경우 신규 등록을 진행해 주세요.");
            obj.set_enable("true");
            obj.set_cssclass("sta_WF_GTxt");
            obj.set_textAlign("center");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static22","10","45","8.85%","38",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("8");
            obj.set_text("업체/기관명");
            obj.set_enable("true");
            obj.set_cssclass("sta_WF_condition02_LEssential");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static23","10","82","8.85%","38",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("9");
            obj.set_text("부서");
            obj.set_enable("true");
            obj.set_cssclass("sta_WF_condition02_LEssential");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static25","10","119","8.85%","38",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("10");
            obj.set_text("사무실연락처");
            obj.set_enable("true");
            obj.set_cssclass("sta_WF_condition02_LEssential");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static26","50.00%","119","8.96%","38",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("11");
            obj.set_text("사무실팩스번호");
            obj.set_enable("true");
            obj.set_cssclass("sta_WF_condition02Essential");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static24","50.00%","82","8.96%","38",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("12");
            obj.set_text("직위");
            obj.set_enable("true");
            obj.set_cssclass("sta_WF_condition02Essential");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static27","10","156","8.85%","106",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("13");
            obj.set_text("사무실 주소");
            obj.set_enable("true");
            obj.set_cssclass("sta_WF_condition02_LEssential");
            this.Div02.addChild(obj.name, obj);

            obj = new Edit("Edit13","Static22:10","50","150","28",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("14");
            this.Div02.addChild(obj.name, obj);

            obj = new Edit("Edit14","Static23:10","87","150","28",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("15");
            this.Div02.addChild(obj.name, obj);

            obj = new Edit("Edit15","Static24:10","87","150","28",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("16");
            this.Div02.addChild(obj.name, obj);

            obj = new Edit("Edit16","Static25:10","124","150","28",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("17");
            this.Div02.addChild(obj.name, obj);

            obj = new Edit("Edit17","Static26:10","124","150","28",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("18");
            this.Div02.addChild(obj.name, obj);

            obj = new Edit("Edit18","Static27:10","161","150","28",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("19");
            this.Div02.addChild(obj.name, obj);

            obj = new Edit("Edit19","Static27:10","195","493","28",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("20");
            this.Div02.addChild(obj.name, obj);

            obj = new Edit("Edit20","Static27:10","229","493","28",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("21");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("Button06","Edit13:10","50","72","28",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("22");
            obj.set_text("검색");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("Button07","Button06:10","50","133","28",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("23");
            obj.set_text("업체/기관 신규등록");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("Button08","Button07:10","50","120","28",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("24");
            obj.set_text("총괄담당자 신청");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("Button06_00","Edit18:10.930000000000007","161","72","28",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("25");
            obj.set_text("주소검색");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static30_01","Static22:0","45","10",null,null,"0",null,null,null,null,this.Div02.form);
            obj.set_taborder("26");
            obj.set_text("w 10");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static30_01_00","Edit13:-0.06999999999999318","45","10","150",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("27");
            obj.set_text("w 10");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static34_00_00","413","45","10","38",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("28");
            obj.set_text("w 10");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static34_00_00_00","556","52","10","38",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("29");
            obj.set_text("w 10");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static34_00_00_00_00","Static24:-0.07200000000011642","81","10","75",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("30");
            obj.set_text("w 10");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.Div02.addChild(obj.name, obj);
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
        this.registerScript("join_1030M.xfdl", function() {

        this.Button02_onclick = function(obj,e)
        {
        	var sMenuId = "joinComplete";
        	var url = "Login::join_complete.xfdl";
        	nexacro.getApplication().goPage(sMenuId, url);
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
            this.Div00.form.Static00.addEventHandler("onclick",this.Static_onclick,this);
            this.Div00.form.Static01.addEventHandler("onclick",this.Static_onclick,this);
            this.Div00.form.Static02.addEventHandler("onclick",this.Static_onclick,this);
            this.Div00.form.Static03.addEventHandler("onclick",this.Static_onclick,this);
            this.Div00.form.Static04.addEventHandler("onclick",this.Static_onclick,this);
            this.Static34.addEventHandler("onclick",this.Static02_onclick,this);
            this.Static02.addEventHandler("onclick",this.Static02_onclick,this);
            this.Div01.form.Static30.addEventHandler("onclick",this.Div01_Static30_onclick,this);
            this.Div01.form.Static30_00.addEventHandler("onclick",this.Div01_Static30_onclick,this);
            this.Div01.form.Static10.addEventHandler("onclick",this.Static_onclick,this);
            this.Div01.form.Static11.addEventHandler("onclick",this.Static_onclick,this);
            this.Div01.form.Static12.addEventHandler("onclick",this.Static_onclick,this);
            this.Div01.form.Static13.addEventHandler("onclick",this.Static_onclick,this);
            this.Div01.form.Static14.addEventHandler("onclick",this.Static_onclick,this);
            this.Div01.form.Static15.addEventHandler("onclick",this.Static_onclick,this);
            this.Div01.form.Static16.addEventHandler("onclick",this.Static_onclick,this);
            this.Div01.form.Static17.addEventHandler("onclick",this.Static_onclick,this);
            this.Div01.form.Static18.addEventHandler("onclick",this.Static_onclick,this);
            this.Div01.form.Static19.addEventHandler("onclick",this.Static_onclick,this);
            this.Div01.form.Static14_00_02_00.addEventHandler("onclick",this.Static_onclick,this);
            this.Div01.form.Static09.addEventHandler("onclick",this.Static_onclick,this);
            this.Div01.form.Static30_01.addEventHandler("onclick",this.Div01_Static30_onclick,this);
            this.Div01.form.Static30_01_00.addEventHandler("onclick",this.Div01_Static30_onclick,this);
            this.Div01.form.Static30_01_00_00.addEventHandler("onclick",this.Div01_Static30_onclick,this);
            this.Button02.addEventHandler("onclick",this.Button02_onclick,this);
            this.Static06_00_00_00_00_00_00_00.addEventHandler("onclick",this.Static06_00_00_00_00_00_00_00_onclick,this);
            this.Static06_00_00_00_00_00_00_00_00.addEventHandler("onclick",this.Static06_00_00_00_00_00_00_00_onclick,this);
            this.Div02.form.Static30.addEventHandler("onclick",this.Div01_Static30_onclick,this);
            this.Div02.form.Static30_00.addEventHandler("onclick",this.Div01_Static30_onclick,this);
            this.Div02.form.Static21.addEventHandler("onclick",this.Static_onclick,this);
            this.Div02.form.Static14_00_02_00_00.addEventHandler("onclick",this.Static_onclick,this);
            this.Div02.form.Static22.addEventHandler("onclick",this.Static_onclick,this);
            this.Div02.form.Static23.addEventHandler("onclick",this.Static_onclick,this);
            this.Div02.form.Static25.addEventHandler("onclick",this.Static_onclick,this);
            this.Div02.form.Static26.addEventHandler("onclick",this.Static_onclick,this);
            this.Div02.form.Static24.addEventHandler("onclick",this.Static_onclick,this);
            this.Div02.form.Static27.addEventHandler("onclick",this.Static_onclick,this);
            this.Div02.form.Button06.addEventHandler("onclick",this.Div00_Button06_onclick,this);
            this.Div02.form.Button07.addEventHandler("onclick",this.Div00_Button07_onclick,this);
            this.Div02.form.Static30_01.addEventHandler("onclick",this.Div01_Static30_onclick,this);
            this.Div02.form.Static30_01_00.addEventHandler("onclick",this.Div01_Static30_onclick,this);
        };
        this.loadIncludeScript("join_1030M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
