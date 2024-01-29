(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PTS_5020M_03");
            this.set_titletext("가입양식작성");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,1280);
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
            obj.set_taborder("5");
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
            obj.set_cssclass("portal_sta_joinStep3_S");
            obj.set_text("가입양식작성");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static04","Static03:0","Static00:0",null,"66","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_enable("true");
            obj.set_cssclass("portal_sta_joinStep3_S_step4");
            obj.set_text("가입완료");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div01","180","Div00:30",null,"487","180",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","0","0","88","60",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("기본정보");
            obj.set_enable("true");
            obj.set_cssclass("portal_sta_memTitle");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static100","0","Static10:0",null,"51","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_cssclass("portal_sta_memLabelBg");
            obj.set_text("");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static101","0","Static100:-1",null,"51","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            obj.set_cssclass("portal_sta_memLabelBg");
            obj.set_text("");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static102","0","Static101:-1",null,"51","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_cssclass("portal_sta_memLabelBg");
            obj.set_text("");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static103","0","Static102:-1",null,"51","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("4");
            obj.set_cssclass("portal_sta_memLabelBg");
            obj.set_text("");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static104","0","Static103:-1",null,"51","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("5");
            obj.set_cssclass("portal_sta_memLabelBg");
            obj.set_text("");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static105","0","Static104:-1",null,"127","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("6");
            obj.set_cssclass("portal_sta_memLabelBg");
            obj.set_text("");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static106","0","Static105:-1",null,"51","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("7");
            obj.set_cssclass("portal_sta_memLabelBg");
            obj.set_text("");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static11","0","60","200","51",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("8");
            obj.set_text("아이디");
            obj.set_enable("true");
            obj.set_cssclass("portal_sta_memLabel_L_essential");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static12","49.36%","60","200","51",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("9");
            obj.set_text("이름");
            obj.set_enable("true");
            obj.set_cssclass("portal_sta_memLabel_Essential");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static13","0","110","200","51",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("10");
            obj.set_text("비밀번호");
            obj.set_enable("true");
            obj.set_cssclass("portal_sta_memLabel_L_essential");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static14","0","160","200","51",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("11");
            obj.set_text("비밀번호확인");
            obj.set_enable("true");
            obj.set_cssclass("portal_sta_memLabel_L_essential");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static15","0","210","200","51",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("12");
            obj.set_text("이메일");
            obj.set_enable("true");
            obj.set_cssclass("portal_sta_memLabel_L_essential");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static16","0","260","200","51",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("13");
            obj.set_text("연락처");
            obj.set_enable("true");
            obj.set_cssclass("portal_sta_memLabel_L_essential");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static17","0","310","200","127",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("14");
            obj.set_text("주소");
            obj.set_enable("true");
            obj.set_cssclass("portal_sta_memLabel_L_essential");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static18","0","436","200","51",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("15");
            obj.set_text("국가연구자번호");
            obj.set_enable("true");
            obj.set_cssclass("portal_sta_memLabel_L_essential");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static19","50.00%","436","200","51",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("16");
            obj.set_text("국방과학기술인 \r\n등록번호");
            obj.set_enable("true");
            obj.set_cssclass("portal_sta_memLabel_Essential");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit01","Static11:10","69","148","33",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("17");
            obj.set_cssclass("portal_edi");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit02","Static12:5.984000000000037","69","149","33",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("18");
            obj.set_cssclass("portal_edi");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit03","Static13:10","119","148","33",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("19");
            obj.set_cssclass("portal_edi");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit04","Static14:8","169","148","33",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("20");
            obj.set_cssclass("portal_edi");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit05","Static15:10","219","148","33",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("21");
            obj.set_cssclass("portal_edi");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static20","Edit05:0","219","24","33",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("22");
            obj.set_text("@");
            obj.set_cssclass("portal_frmTxt");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit06","Static20:0","219","146","33",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("23");
            obj.set_cssclass("portal_edi");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static14_00_02_00",null,"0","135","60","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("24");
            obj.set_text("   는 필수항목입니다.");
            obj.set_enable("true");
            obj.set_cssclass("portal_sta_memTopInfo_req");
            obj.set_textAlign("center");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit07","Static16:10","269","148","33",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("25");
            obj.set_cssclass("portal_edi");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit08","Static17:10","319","148","33",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("26");
            obj.set_cssclass("portal_edi");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit09","Static17:10","357","499","33",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("27");
            obj.set_cssclass("portal_edi");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit10","Static17:10","395","499","33",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("28");
            obj.set_cssclass("portal_edi");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit11","Static18:10","445","148","33",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("29");
            obj.set_cssclass("portal_edi");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit12","Static19:10","445","150","33",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("30");
            obj.set_cssclass("portal_edi");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static09","Edit03:12","111","257","49",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("31");
            obj.set_text("* 9~15자 이내 숫자, 문자, 특수문자 조합");
            obj.set_cssclass("portal_sta_memInfo");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button02","Edit01:5","69","96","33",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("32");
            obj.set_text("중복확인");
            obj.set_cssclass("portal_btn_mem");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button03","Edit08:5","319","96","33",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("33");
            obj.set_text("주소검색");
            obj.set_cssclass("portal_btn_mem");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button04","Edit11:5","445","96","33",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("34");
            obj.set_text("번호확인");
            obj.set_cssclass("portal_btn_mem");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button05","Edit12:10","445","96","33",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("35");
            obj.set_text("번호확인");
            obj.set_cssclass("portal_btn_mem");
            this.Div01.addChild(obj.name, obj);

            obj = new Combo("Combo00","Edit06:5","219","155","33",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("36");
            obj.set_cssclass("portal_cmb");
            obj.set_text("직접입력");
            obj.set_value("");
            obj.set_index("-1");
            this.Div01.addChild(obj.name, obj);

            obj = new Div("Div02","180","Div01:20",null,"336","180",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("div_WF_Area");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static21","0","0","142","60",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("0");
            obj.set_text("업체/기관정보");
            obj.set_enable("true");
            obj.set_cssclass("portal_sta_memTitle");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static107","0","Static21:0",null,"51","0",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("1");
            obj.set_cssclass("portal_sta_memLabelBg");
            obj.set_text("");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static108","0","Static107:-1",null,"51","0",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("2");
            obj.set_cssclass("portal_sta_memLabelBg");
            obj.set_text("");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static109","0","Static108:-1",null,"51","0",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("3");
            obj.set_cssclass("portal_sta_memLabelBg");
            obj.set_text("");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static110","0","Static109:-1",null,"126","0",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("4");
            obj.set_cssclass("portal_sta_memLabelBg");
            obj.set_text("");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static14_00_02_00_00",null,"0","384","60","0",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("5");
            obj.set_text("업체/기관 검색이 되지 않을 경우 신규 등록을 진행해 주세요.");
            obj.set_enable("true");
            obj.set_cssclass("portal_sta_memTopInfo");
            obj.set_textAlign("center");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static22","0","60","200","51",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("6");
            obj.set_text("업체/기관명");
            obj.set_enable("true");
            obj.set_cssclass("portal_sta_memLabel_L_essential");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static23","0","110","200","51",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("7");
            obj.set_text("부서");
            obj.set_enable("true");
            obj.set_cssclass("portal_sta_memLabel_L_essential");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static25","0","160","200","51",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("8");
            obj.set_text("사무실연락처");
            obj.set_enable("true");
            obj.set_cssclass("portal_sta_memLabel_L_essential");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static26","50.00%","160","200","51",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("9");
            obj.set_text("사무실팩스번호");
            obj.set_enable("true");
            obj.set_cssclass("portal_sta_memLabel_Essential");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static24","50.00%","110","200","51",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("10");
            obj.set_text("직위");
            obj.set_enable("true");
            obj.set_cssclass("portal_sta_memLabel_Essential");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static27","0","210","200","126",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("11");
            obj.set_text("사무실 주소");
            obj.set_enable("true");
            obj.set_cssclass("portal_sta_memLabel_L_essential");
            this.Div02.addChild(obj.name, obj);

            obj = new Edit("Edit13","Static22:10","69","150","33",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("12");
            obj.set_cssclass("portal_edi");
            this.Div02.addChild(obj.name, obj);

            obj = new Edit("Edit14","Static23:10","119","150","33",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("13");
            obj.set_cssclass("portal_edi");
            this.Div02.addChild(obj.name, obj);

            obj = new Edit("Edit15","Static24:10","119","149","33",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("14");
            obj.set_cssclass("portal_edi");
            this.Div02.addChild(obj.name, obj);

            obj = new Edit("Edit16","Static25:10","169","150","33",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("15");
            obj.set_cssclass("portal_edi");
            this.Div02.addChild(obj.name, obj);

            obj = new Edit("Edit17","Static26:10","169","149","33",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("16");
            obj.set_cssclass("portal_edi");
            this.Div02.addChild(obj.name, obj);

            obj = new Edit("Edit18","Static27:10","219","150","33",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("17");
            obj.set_cssclass("portal_edi");
            this.Div02.addChild(obj.name, obj);

            obj = new Edit("Edit19","Static27:10","256","486","33",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("18");
            obj.set_cssclass("portal_edi");
            this.Div02.addChild(obj.name, obj);

            obj = new Edit("Edit20","Static27:10","294","486","33",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("19");
            obj.set_cssclass("portal_edi");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("Button06","Edit13:5","69","68","33",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("20");
            obj.set_text("검색");
            obj.set_cssclass("portal_btn_mem");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("Button07","Button06:5","69","163","33",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("21");
            obj.set_text("업체/기관 신규등록");
            obj.set_cssclass("portal_btn_mem");
            obj.set_background("#00388e");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("Button08","Button07:5","69","143","33",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("22");
            obj.set_text("총괄담당자 신청");
            obj.set_cssclass("portal_btn_mem");
            obj.set_background("#4464d6");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("Button06_00","Edit18:5","219","96","33",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("23");
            obj.set_text("주소검색");
            obj.set_cssclass("portal_btn_mem");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("Button02","895","Div02:30",null,"45","895",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("다음");
            obj.set_cssclass("portal_btn");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","740","Button02:0","584","42",null,null,null,null,null,null,this);
            obj.set_taborder("6");
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
        this.registerScript("PTS_5020M_03.xfdl", function() {

        this.Button02_onclick = function(obj,e)
        {
        	var sMenuId = "joinComplete";
        	var url = "pts::PTS_5020M_04.xfdl";
        	nexacro.getApplication().goPage(sMenuId, url);
        };

        this.Div00_Button06_onclick = function(obj,e)
        {
        	var objChild = new ChildFrame("PTS_5020P_01", "absolute", 0, 0, 800, 360);
        	objChild.set_formurl("pts::PTS_5020P_01.xfdl");
        	objChild.set_openalign("center middle");
        	objChild.set_dragmovetype("all");
        	objChild.set_showtitlebar(false);

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
        	var objChild = new ChildFrame("PTS_6010P", "absolute", 0, 0, 810, 360);
        	objChild.set_formurl("pts::PTS_6010P.xfdl");
        	objChild.set_openalign("center middle");
        	objChild.set_dragmovetype("all");
        	objChild.set_showtitlebar(false);

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
            this.Div00.form.Static00.addEventHandler("onclick",this.Static_onclick,this);
            this.Div00.form.Static01.addEventHandler("onclick",this.Static_onclick,this);
            this.Div00.form.Static02.addEventHandler("onclick",this.Static_onclick,this);
            this.Div00.form.Static03.addEventHandler("onclick",this.Static_onclick,this);
            this.Div00.form.Static04.addEventHandler("onclick",this.Static_onclick,this);
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
            this.Button02.addEventHandler("onclick",this.Button02_onclick,this);
        };
        this.loadIncludeScript("PTS_5020M_03.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
