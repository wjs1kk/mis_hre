(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PTS_6010M");
            this.set_titletext("회원정보수정");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,1040);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsUserInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"memberId\" type=\"STRING\" size=\"256\"/><Column id=\"memberNmKr\" type=\"STRING\" size=\"256\"/><Column id=\"memberNmEn\" type=\"STRING\" size=\"256\"/><Column id=\"passwd\" type=\"STRING\" size=\"256\"/><Column id=\"emlAddr\" type=\"STRING\" size=\"256\"/><Column id=\"mblTelno\" type=\"STRING\" size=\"256\"/><Column id=\"mbrAddr\" type=\"STRING\" size=\"256\"/><Column id=\"mbrDaddr\" type=\"STRING\" size=\"256\"/><Column id=\"ogdpInstNm\" type=\"STRING\" size=\"256\"/><Column id=\"ogdpInstCd\" type=\"STRING\" size=\"256\"/><Column id=\"jbpsCd\" type=\"STRING\" size=\"256\"/><Column id=\"jbpsNm\" type=\"STRING\" size=\"256\"/><Column id=\"ogdpDeptCd\" type=\"STRING\" size=\"256\"/><Column id=\"ogdpDeptNm\" type=\"STRING\" size=\"256\"/><Column id=\"ofcTelno\" type=\"STRING\" size=\"256\"/><Column id=\"ofcFxno\" type=\"STRING\" size=\"256\"/><Column id=\"ofcAddr\" type=\"STRING\" size=\"256\"/><Column id=\"ofcDaddr\" type=\"STRING\" size=\"256\"/><Column id=\"updtId\" type=\"STRING\" size=\"256\"/><Column id=\"updtDt\" type=\"STRING\" size=\"256\"/><Column id=\"updtIp\" type=\"STRING\" size=\"256\"/><Column id=\"whdwlYn\" type=\"STRING\" size=\"256\"/><Column id=\"pwExpireDt\" type=\"STRING\" size=\"256\"/><Column id=\"newRepasswd\" type=\"STRING\" size=\"256\"/><Column id=\"mbrZip\" type=\"STRING\" size=\"256\"/><Column id=\"ofcZip\" type=\"STRING\" size=\"256\"/><Column id=\"newPasswd\" type=\"STRING\" size=\"256\"/><Column id=\"checkCode\" type=\"STRING\" size=\"256\"/><Column id=\"emailVerified\" type=\"STRING\" size=\"256\"/><Column id=\"oldPasswd\" type=\"STRING\" size=\"256\"/><Column id=\"passwdCheck\" type=\"STRING\" size=\"256\"/><Column id=\"emlAddrLocal\" type=\"STRING\" size=\"256\"/><Column id=\"emlAddrDomain\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsEmailCbo", this);
            obj._setContents("<ColumnInfo><Column id=\"value\" type=\"STRING\" size=\"256\"/><Column id=\"text\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsEmailVerification", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"userId\" type=\"STRING\" size=\"20\"/><Column id=\"userName\" type=\"STRING\" size=\"300\"/><Column id=\"emailAddr\" type=\"STRING\" size=\"320\"/><Column id=\"rqstId\" type=\"STRING\" size=\"256\"/><Column id=\"verificationCode\" type=\"STRING\" size=\"256\"/><Column id=\"expireDt\" type=\"INT\" size=\"256\"/><Column id=\"verifiedToken\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static34","0","0","180",null,null,"0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("W 180");
            obj.set_visible("false");
            obj.set_background("antiquewhite");
            obj.set_color("blue");
            this.addChild(obj.name, obj);

            obj = new Div("divMain","180","0","1560","487",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("staNoramlTitle","0","0","88","60",null,null,null,null,null,null,this.divMain.form);
            obj.set_taborder("0");
            obj.set_text("기본정보");
            obj.set_enable("true");
            obj.set_cssclass("portal_sta_memTitle");
            this.divMain.addChild(obj.name, obj);

            obj = new Static("Static100","0","staNoramlTitle:0",null,"51","0",null,null,null,null,null,this.divMain.form);
            obj.set_taborder("1");
            obj.set_cssclass("portal_sta_memLabelBg");
            obj.set_text("");
            this.divMain.addChild(obj.name, obj);

            obj = new Static("Static101","0","Static100:-1",null,"51","0",null,null,null,null,null,this.divMain.form);
            obj.set_taborder("2");
            obj.set_cssclass("portal_sta_memLabelBg");
            obj.set_text("");
            this.divMain.addChild(obj.name, obj);

            obj = new Static("Static102","0","Static101:-1",null,"51","0",null,null,null,null,null,this.divMain.form);
            obj.set_taborder("3");
            obj.set_cssclass("portal_sta_memLabelBg");
            obj.set_text("");
            this.divMain.addChild(obj.name, obj);

            obj = new Static("Static103","0","Static102:-1",null,"51","0",null,null,null,null,null,this.divMain.form);
            obj.set_taborder("4");
            obj.set_cssclass("portal_sta_memLabelBg");
            obj.set_text("");
            this.divMain.addChild(obj.name, obj);

            obj = new Static("Static104","0","Static103:-1",null,"51","0",null,null,null,null,null,this.divMain.form);
            obj.set_taborder("5");
            obj.set_cssclass("portal_sta_memLabelBg");
            obj.set_text("");
            this.divMain.addChild(obj.name, obj);

            obj = new Static("Static105","0","Static104:-1",null,"127","0",null,null,null,null,null,this.divMain.form);
            obj.set_taborder("6");
            obj.set_cssclass("portal_sta_memLabelBg");
            obj.set_text("");
            this.divMain.addChild(obj.name, obj);

            obj = new Static("Static11","0","60","200","51",null,null,null,null,null,null,this.divMain.form);
            obj.set_taborder("7");
            obj.set_text("아이디");
            obj.set_enable("true");
            obj.set_cssclass("portal_sta_memLabel_L");
            this.divMain.addChild(obj.name, obj);

            obj = new Static("Static12","53%","60","200","51",null,null,null,null,null,null,this.divMain.form);
            obj.set_taborder("8");
            obj.set_text("이름");
            obj.set_enable("true");
            obj.set_cssclass("portal_sta_memLabel");
            this.divMain.addChild(obj.name, obj);

            obj = new Static("Static13","0","110","200","51",null,null,null,null,null,null,this.divMain.form);
            obj.set_taborder("9");
            obj.set_text("기존 비밀번호");
            obj.set_enable("true");
            obj.set_cssclass("portal_sta_memLabel_L_essential");
            this.divMain.addChild(obj.name, obj);

            obj = new Static("Static14","0","160","200","51",null,null,null,null,null,null,this.divMain.form);
            obj.set_taborder("10");
            obj.set_text("새 비밀번호");
            obj.set_enable("true");
            obj.set_cssclass("portal_sta_memLabel_L");
            this.divMain.addChild(obj.name, obj);

            obj = new Static("Static15","0","210","200","51",null,null,null,null,null,null,this.divMain.form);
            obj.set_taborder("11");
            obj.set_text("이메일");
            obj.set_enable("true");
            obj.set_cssclass("portal_sta_memLabel_L_essential");
            this.divMain.addChild(obj.name, obj);

            obj = new Static("Static16","0","260","200","51",null,null,null,null,null,null,this.divMain.form);
            obj.set_taborder("12");
            obj.set_text("연락처");
            obj.set_enable("true");
            obj.set_cssclass("portal_sta_memLabel_L_essential");
            this.divMain.addChild(obj.name, obj);

            obj = new Static("Static17","0","310","200","127",null,null,null,null,null,null,this.divMain.form);
            obj.set_taborder("13");
            obj.set_text("주소");
            obj.set_enable("true");
            obj.set_cssclass("portal_sta_memLabel_L_essential");
            this.divMain.addChild(obj.name, obj);

            obj = new Edit("edtUserId","Static11:10","69","150","33",null,null,null,null,null,null,this.divMain.form);
            obj.set_taborder("14");
            obj.set_cssclass("portal_edi");
            obj.set_enable("false");
            this.divMain.addChild(obj.name, obj);

            obj = new Edit("edutUserNm","Static12:10","69","10%","33",null,null,null,null,null,null,this.divMain.form);
            obj.set_taborder("15");
            this.divMain.addChild(obj.name, obj);

            obj = new Edit("editUserPw","Static13:10","119","150","33",null,null,null,null,null,null,this.divMain.form);
            obj.set_taborder("16");
            obj.set_cssclass("portal_edi");
            obj.set_password("true");
            this.divMain.addChild(obj.name, obj);

            obj = new Edit("editUserRePw","Static14:10","169","150","33",null,null,null,null,null,null,this.divMain.form);
            obj.set_taborder("17");
            obj.set_cssclass("portal_edi");
            obj.set_password("true");
            this.divMain.addChild(obj.name, obj);

            obj = new Edit("edtEmlAddrLocal","Static15:10","219","150","33",null,null,null,null,null,null,this.divMain.form);
            obj.set_taborder("18");
            obj.set_cssclass("portal_edi");
            this.divMain.addChild(obj.name, obj);

            obj = new Static("Static20","edtEmlAddrLocal:0","219","24","33",null,null,null,null,null,null,this.divMain.form);
            obj.set_taborder("19");
            obj.set_text("@");
            obj.set_cssclass("portal_frmTxt");
            this.divMain.addChild(obj.name, obj);

            obj = new Edit("edtEmlAddrDomain","Static20:0","219","140","33",null,null,null,null,null,null,this.divMain.form);
            obj.set_taborder("20");
            obj.set_cssclass("portal_edi");
            this.divMain.addChild(obj.name, obj);

            obj = new Edit("edtNum","Static16:10","269","150","33",null,null,null,null,null,null,this.divMain.form);
            obj.set_taborder("21");
            obj.set_cssclass("portal_edi");
            this.divMain.addChild(obj.name, obj);

            obj = new Edit("edtAddress","Static17:10","319","150","33",null,null,null,null,null,null,this.divMain.form);
            obj.set_taborder("22");
            obj.set_cssclass("portal_edi");
            obj.set_readonly("true");
            this.divMain.addChild(obj.name, obj);

            obj = new Edit("edtAddressOne","Static17:10","357","500","33",null,null,null,null,null,null,this.divMain.form);
            obj.set_taborder("23");
            obj.set_cssclass("portal_edi");
            obj.set_readonly("true");
            this.divMain.addChild(obj.name, obj);

            obj = new Edit("edtAddressTwo","Static17:10","395","500","33",null,null,null,null,null,null,this.divMain.form);
            obj.set_taborder("24");
            obj.set_cssclass("portal_edi");
            this.divMain.addChild(obj.name, obj);

            obj = new Static("Static09","editUserPw:10","Static101:0","252","51",null,null,null,null,null,null,this.divMain.form);
            obj.set_taborder("25");
            obj.set_text("*9~15자 이내 숫자, 문자, 특수문자 조합");
            obj.set_cssclass("portal_sta_memInfo");
            this.divMain.addChild(obj.name, obj);

            obj = new Button("btnSearchAddr","edtAddress:5","319","96","33",null,null,null,null,null,null,this.divMain.form);
            obj.set_taborder("26");
            obj.set_text("주소검색");
            obj.set_cssclass("portal_btn_mem");
            this.divMain.addChild(obj.name, obj);

            obj = new Combo("cboEmlAddrDomain","edtEmlAddrDomain:5","219","155","33",null,null,null,null,null,null,this.divMain.form);
            obj.set_taborder("27");
            obj.set_cssclass("portal_cmb");
            obj.set_innerdataset("dsEmailCbo");
            obj.set_codecolumn("value");
            obj.set_datacolumn("text");
            obj.set_text("직접입력");
            obj.set_value("");
            obj.set_index("-1");
            this.divMain.addChild(obj.name, obj);

            obj = new Button("btnAskCode","cboEmlAddrDomain:5","219","96","33",null,null,null,null,null,null,this.divMain.form);
            obj.set_taborder("28");
            obj.set_text("인증요청");
            obj.set_cssclass("portal_btn_mem");
            this.divMain.addChild(obj.name, obj);

            obj = new Static("Static14_00","53%","160","200","51",null,null,null,null,null,null,this.divMain.form);
            obj.set_taborder("30");
            obj.set_text("비밀번호 확인");
            obj.set_enable("true");
            obj.set_cssclass("portal_sta_memLabel");
            this.divMain.addChild(obj.name, obj);

            obj = new Edit("editUserRePw00","Static14_00:10","168","150","33",null,null,null,null,null,null,this.divMain.form);
            obj.set_taborder("29");
            obj.set_cssclass("portal_edi");
            obj.set_password("true");
            this.divMain.addChild(obj.name, obj);

            obj = new Static("Static02",null,"-93","180",null,"-381","-460",null,null,null,null,this.divMain.form);
            obj.set_taborder("31");
            obj.set_text("W 180");
            obj.set_visible("false");
            obj.set_background("antiquewhite");
            obj.set_color("blue");
            this.divMain.addChild(obj.name, obj);

            obj = new Div("divEmlVerify","780","210","780","51",null,null,null,null,null,null,this.divMain.form);
            obj.set_taborder("32");
            obj.set_visible("false");
            this.divMain.addChild(obj.name, obj);

            obj = new Static("staVerificationCode","5.90%","0","200","51",null,null,null,null,null,null,this.divMain.form.divEmlVerify.form);
            obj.set_taborder("3");
            obj.set_text("인증번호");
            obj.set_enable("true");
            obj.set_cssclass("portal_sta_memLabel_Essential");
            this.divMain.form.divEmlVerify.addChild(obj.name, obj);

            obj = new Edit("edtVerificationCode","staVerificationCode:10","8","149","33",null,null,null,null,null,null,this.divMain.form.divEmlVerify.form);
            obj.set_taborder("0");
            obj.set_cssclass("portal_edi");
            this.divMain.form.divEmlVerify.addChild(obj.name, obj);

            obj = new Button("btnCheckCode","edtVerificationCode:10","8","96","33",null,null,null,null,null,null,this.divMain.form.divEmlVerify.form);
            obj.set_taborder("1");
            obj.set_text("확인");
            obj.set_cssclass("portal_btn_mem");
            this.divMain.form.divEmlVerify.addChild(obj.name, obj);

            obj = new Static("staTimer","523","0","87","49",null,null,null,null,null,null,this.divMain.form.divEmlVerify.form);
            obj.set_taborder("2");
            obj.set_text("(0:00 남음)");
            obj.set_cssclass("portal_sta_memInfo");
            this.divMain.form.divEmlVerify.addChild(obj.name, obj);

            obj = new Div("divInstInfo","180","divMain:-30",null,"338","180",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Static("Static21","0%","0","142","60",null,null,null,null,null,null,this.divInstInfo.form);
            obj.set_taborder("0");
            obj.set_text("업체/기관정보");
            obj.set_enable("true");
            obj.set_cssclass("portal_sta_memTitle");
            this.divInstInfo.addChild(obj.name, obj);

            obj = new Static("Static107","0","Static21:0",null,"51","0",null,null,null,null,null,this.divInstInfo.form);
            obj.set_taborder("1");
            obj.set_cssclass("portal_sta_memLabelBg");
            obj.set_text("");
            this.divInstInfo.addChild(obj.name, obj);

            obj = new Static("Static108","0","Static107:-1",null,"51","0",null,null,null,null,null,this.divInstInfo.form);
            obj.set_taborder("2");
            obj.set_cssclass("portal_sta_memLabelBg");
            obj.set_text("");
            this.divInstInfo.addChild(obj.name, obj);

            obj = new Static("Static109","0","Static108:-1",null,"51","0",null,null,null,null,null,this.divInstInfo.form);
            obj.set_taborder("3");
            obj.set_cssclass("portal_sta_memLabelBg");
            obj.set_text("");
            this.divInstInfo.addChild(obj.name, obj);

            obj = new Static("Static110","0","Static109:-1",null,"127","0",null,null,null,null,null,this.divInstInfo.form);
            obj.set_taborder("4");
            obj.set_cssclass("portal_sta_memLabelBg");
            obj.set_text("");
            this.divInstInfo.addChild(obj.name, obj);

            obj = new Static("Static22","0","60","200","51",null,null,null,null,null,null,this.divInstInfo.form);
            obj.set_taborder("5");
            obj.set_text("업체/기관명");
            obj.set_enable("true");
            obj.set_cssclass("portal_sta_memLabel_L");
            this.divInstInfo.addChild(obj.name, obj);

            obj = new Static("Static23","0.00%","110","200","51",null,null,null,null,null,null,this.divInstInfo.form);
            obj.set_taborder("6");
            obj.set_text("부서");
            obj.set_enable("true");
            obj.set_cssclass("portal_sta_memLabel_L");
            this.divInstInfo.addChild(obj.name, obj);

            obj = new Static("Static25","0.00%","160","200","51",null,null,null,null,null,null,this.divInstInfo.form);
            obj.set_taborder("7");
            obj.set_text("사무실연락처");
            obj.set_enable("true");
            obj.set_cssclass("portal_sta_memLabel_L");
            this.divInstInfo.addChild(obj.name, obj);

            obj = new Static("Static26","50.00%","160","200","51",null,null,null,null,null,null,this.divInstInfo.form);
            obj.set_taborder("8");
            obj.set_text("사무실팩스번호");
            obj.set_enable("true");
            obj.set_cssclass("portal_sta_memLabel");
            this.divInstInfo.addChild(obj.name, obj);

            obj = new Static("Static24","50.00%","110","200","51",null,null,null,null,null,null,this.divInstInfo.form);
            obj.set_taborder("9");
            obj.set_text("직위");
            obj.set_enable("true");
            obj.set_cssclass("portal_sta_memLabel");
            this.divInstInfo.addChild(obj.name, obj);

            obj = new Static("Static27","0.00%","210","200","127",null,null,null,null,null,null,this.divInstInfo.form);
            obj.set_taborder("10");
            obj.set_text("사무실 주소");
            obj.set_enable("true");
            obj.set_cssclass("portal_sta_memLabel_L");
            this.divInstInfo.addChild(obj.name, obj);

            obj = new Edit("edtInstNm","Static22:10","69","147","33",null,null,null,null,null,null,this.divInstInfo.form);
            obj.set_taborder("11");
            obj.set_cssclass("portal_edi");
            obj.set_readonly("true");
            this.divInstInfo.addChild(obj.name, obj);

            obj = new Edit("edtDept","Static23:10","119","147","33",null,null,null,null,null,null,this.divInstInfo.form);
            obj.set_taborder("12");
            obj.set_cssclass("portal_edi");
            this.divInstInfo.addChild(obj.name, obj);

            obj = new Edit("edtJbps","Static24:10","119","150","33",null,null,null,null,null,null,this.divInstInfo.form);
            obj.set_taborder("13");
            obj.set_cssclass("portal_edi");
            this.divInstInfo.addChild(obj.name, obj);

            obj = new Edit("edtOfcNum","Static25:10","169","147","33",null,null,null,null,null,null,this.divInstInfo.form);
            obj.set_taborder("14");
            obj.set_cssclass("portal_edi");
            this.divInstInfo.addChild(obj.name, obj);

            obj = new Edit("edtOfcFaxNm","Static26:10","169","150","33",null,null,null,null,null,null,this.divInstInfo.form);
            obj.set_taborder("15");
            obj.set_cssclass("portal_edi");
            this.divInstInfo.addChild(obj.name, obj);

            obj = new Edit("edtOfcAddr","Static27:10","218","147","33",null,null,null,null,null,null,this.divInstInfo.form);
            obj.set_taborder("16");
            obj.set_cssclass("portal_edi");
            obj.set_readonly("true");
            this.divInstInfo.addChild(obj.name, obj);

            obj = new Edit("edtOffAddrOne","Static27:10","257","500","33",null,null,null,null,null,null,this.divInstInfo.form);
            obj.set_taborder("17");
            obj.set_cssclass("portal_edi");
            obj.set_readonly("true");
            this.divInstInfo.addChild(obj.name, obj);

            obj = new Edit("edtOffAddrTwo","Static27:10","295","500","33",null,null,null,null,null,null,this.divInstInfo.form);
            obj.set_taborder("18");
            obj.set_cssclass("portal_edi");
            this.divInstInfo.addChild(obj.name, obj);

            obj = new Button("btnOfcSearchAddr","edtOfcAddr:5","218","96","33",null,null,null,null,null,null,this.divInstInfo.form);
            obj.set_taborder("19");
            obj.set_text("주소검색");
            obj.set_cssclass("portal_btn_mem");
            this.divInstInfo.addChild(obj.name, obj);

            obj = new Button("BtnSave","895","divInstInfo:30",null,"45","895",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("저장");
            obj.set_font("normal 700 16px/normal \"맑은고딕\"");
            obj.set_cssclass("portal_btn");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_00_00_00_00_00","50","divMain:0","50","10",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("H 10");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","180","BtnSave:14","166","26",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("회원탈퇴를 원하신다면");
            obj.set_cssclass("portal_sta_memOut");
            this.addChild(obj.name, obj);

            obj = new Button("btnDropMember","Static00:5","884","134","27",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("회원탈퇴 바로가기");
            obj.set_cssclass("portal_btn_memOut");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","180","btnDropMember:0","160","45",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divMain.form.divEmlVerify.form
            obj = new Layout("default","",0,0,this.divMain.form.divEmlVerify.form,function(p){});
            this.divMain.form.divEmlVerify.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMain.form
            obj = new Layout("default","",0,0,this.divMain.form,function(p){});
            this.divMain.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divInstInfo.form
            obj = new Layout("default","",0,0,this.divInstInfo.form,function(p){});
            this.divInstInfo.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","divMain.form.edtUserId","value","dsUserInfo","memberId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divMain.form.edutUserNm","value","dsUserInfo","memberNmKr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divMain.form.edtNum","value","dsUserInfo","mblTelno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divMain.form.edtAddress","value","dsUserInfo","mbrZip");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divMain.form.edtAddressOne","value","dsUserInfo","mbrAddr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divMain.form.edtAddressTwo","value","dsUserInfo","mbrDaddr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divInstInfo.form.edtJbps","value","dsUserInfo","jbpsNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divInstInfo.form.edtOfcNum","value","dsUserInfo","ofcTelno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divInstInfo.form.edtOfcFaxNm","value","dsUserInfo","ofcFxno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divInstInfo.form.edtDept","value","dsUserInfo","ogdpDeptNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divInstInfo.form.edtInstNm","value","dsUserInfo","ogdpInstNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divInstInfo.form.edtOfcAddr","value","dsUserInfo","ofcZip");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divInstInfo.form.edtOffAddrOne","value","dsUserInfo","ofcAddr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divInstInfo.form.edtOffAddrTwo","value","dsUserInfo","ofcDaddr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divMain.form.edtEmlAddrLocal","value","dsUserInfo","emlAddrLocal");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divMain.form.edtEmlAddrDomain","value","dsUserInfo","emlAddrDomain");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divMain.form.editUserPw","value","dsUserInfo","oldPasswd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divMain.form.editUserRePw","value","dsUserInfo","passwd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divMain.form.editUserRePw00","value","dsUserInfo","passwdCheck");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divMain.form.editMailCode","value","dsEmailVerification","verificationCode");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divMain.form.divEmlVerify.form.edtVerificationCode","value","dsEmailVerification","verificationCode");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divMain.form.divEmlVerify00.form.edtVerificationCode","value","dsEmailVerification","verificationCode");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("PTS_6010M.xfdl","lib::common.xjs");
        this.registerScript("PTS_6010M.xfdl", function() {
        /**
        *  messageManage
        *  MenuPath      마이페이지 - 회원정보
        *  FileName      PTS_6010M.xfdl
        *  Creator 	     yuyr
        *  CreateDate    2023.10.25
        *  Desction      회원정보수정
        ************** 소스 수정 이력 ***********************************************
        *  date          Modifier    Description
        *******************************************************************************
        *  2023.10.25    yuyr 	 최초 생성
        *******************************************************************************/
        this.executeIncludeScript("lib::common.xjs"); /*include "lib::common.xjs"*/;

        this.isEmailVerified = "N";
        this.timer = null;
        this.callbackMsg = null;
        /***********************************************************************************************
        * FORM EVENT 영역(onload, onbeforeclose)
        /***********************************************************************************************/
        /**
         * description 화면 onload
        */
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnLoad(this);
        	this.gfnLoadCombo("loadEmlCombo", "dsEmailCbo=PMS:MI:EML_DOMAIN:", "fnComboCallback");
        	this.fnSearch();
        };
        /************************************************************************************************
         * TRANSACTION 서비스 호출 처리
         ************************************************************************************************/
        /**
         * description 조회
        */
        this.fnSearch = function()
        {
        	this.gfnTransaction("getMyPageInfo", "mi/myPage/getMemberInfo.do", "", "dsUserInfo", "", "fnCallback");
        };

        /**
         * description 이메일 인증
        */
        this.fnRequestEmailVerification = function ()
        {
            this.dsEmailVerification.setColumn(0, "emailAddr", this.dsUserInfo.getColumn(0, "emlAddr"));
            this.gfnTransaction("requestEmailVerification", "mi/common/mailVerification/sendMail.do", "dsEmailVerification", "dsEmailVerification", "", "fnCallback");
        };

        /**
         * description 이메일 인증코드
        */
        this.fnCheckVerificationCode = function ()
        {
            this.dsEmailVerification.setColumn(0, "emailAddr", this.dsUserInfo.getColumn(0, "emlAddr"));
            this.gfnTransaction("checkVerificationCode", "mi/common/mailVerification/checkVerificationCode.do", "dsEmailVerification", "dsEmailVerification", "", "fnCallback");
        };

        /**
         * description 비밀번호 검증
        */
        this.fnCheckVerificationPw = function ()
        {
            this.gfnTransaction("confirmPw", "mi/myPage/confirmPw.do", "dsUserInfo", "", "", "fnCallback");
        };

        /**
         * description 저장
        */
        this.fnSave = function()
        {
        	this.gfnTransaction("updateMemberInfo", "mi/myPage/setMyPageInfo.do", "dsUserInfo", "", "", "fnCallback");
        };

        /************************************************************************************************
         * CALLBACK 콜백 처리부분(Transaction, Popup)
         ************************************************************************************************/
         /**
         * description Transaction CallBack 함수
        */

        this.fnCallback = function (sSvcId, nErrorCode, sErrorMsg)
        {
        	switch (sSvcId) {
        		case "getMyPageInfo":
        			this.fnChangeFomat();
        		break;
        		case "updateMemberInfo":
        			if(this.callbackMsg == "success") {
        				this.gfnAlert("회원정보 수정이 완료되었습니다.");
        				this.dsUserInfo.clearData();
        				this.dsUserInfo.addRow();
        			}else{
        				this.gfnAlert("CM_MSG_TEST_3");  // 저장에 실패하였습니다.
        			}
        		break;
        		case "requestEmailVerification":
        			if (this.callbackMsg === "success") {
        				this.gfnAlert("인증번호가 메일로 전송되었습니다.");
        				this.divMain.form.divEmlVerify.set_visible(true);
        				let expire = this.dsEmailVerification.getColumn(0, "expireDt");
        				this.fnStartTimer();
        			}
        			break;
        		case "checkVerificationCode":
        			if (this.callbackMsg === "success") {
        				this.gfnAlert("이메일 인증이 완료되었습니다.");
        				this.fnStopTimer();
        				this.divMain.form.edtEmlAddrLocal.set_enable(false);
        				this.divMain.form.edtEmlAddrDomain.set_enable(false);
        				this.divMain.form.cboEmlAddrDomain.set_enable(false);
        				this.divMain.form.divEmlVerify.form.edtVerificationCode.set_enable(false);
        				this.divMain.form.divEmlVerify.form.staTimer.set_visible(false);
        				this.divMain.form.btnAskCode.set_enable(false);
        				this.divMain.form.btnAskCode.set_visible(false);
        				this.divMain.form.divEmlVerify.form.btnCheckCode.set_enable(false);
        				this.divMain.form.divEmlVerify.form.btnCheckCode.set_visible(false);
        				this.dsUserInfo.setColumn(0, "emailVerified", "Y");
        			}
        			break;
        		case "confirmPw":
        			if (this.callbackMsg == "success") {
        				this.fnSave();
        			} else {
        				this.gfnAlert("현재 비밀번호가 일치하지 않습니다.");
        			}
        			break;
        		case "updatePw":
        			if(this.callbackMsg == "success"){
        				this.gfnAlert("비밀번호 변경이 완료되었습니다.");
        				this.close();
        			}else{
        				this.gfnAlert("비밀번호 변경이 실패했습니다.");
        			}
        			break;
        			default:
        			break;
        			}
        		};
        this.fnPopupCallback = function (popupId, args)
        {
            const result = this.gfnGetPopupRtn();
            switch (popupId) {
                case "addressPopup":
                    if (!result.canceled) {
                        this.dsUserInfo.setColumn(0, "mbrZip", result.data.zonecode);
                        this.dsUserInfo.setColumn(0, "mbrAddr", result.data.roadAddress);
                    }
                    break;
                case "ofcAddressPopup":
                    if (!result.canceled) {
                        this.dsUserInfo.setColumn(0, "ofcZip", result.data.zonecode);
                        this.dsUserInfo.setColumn(0, "ofcAddr", result.data.roadAddress);
                    }
                    break;
                default:
                    break;
            };
        };

        /**
         * description 이메일 주소 선택 comboBox
        */

        this.fnComboCallback = function (svcId, errorCode, errorMsg) {
            if (svcId === "loadEmlCombo") {
                const row = this.dsEmailCbo.addRow();
                this.dsEmailCbo.setColumn(row, "text", "직접 입력");
                this.dsEmailCbo.setColumn(row, "value", "");
                this.divMain.form.cboEmlAddrDomain.set_index(row);
            }
        };

        /**
         * description Popup CallBack 함수
        */
        this.fnPopupAfter = function (sPopupId, vArg)
        {
        	console.log('fnPopupAfter: ', sPopupId, ' || ', vArg);
        	switch(sPopupId){
        		case "memberDropPopup":	//  회원탈퇴 팝업
        			var oRtn = this.gfnGetPopupRtn();
        			if(oRtn){
        				console.log('oRtn : ',  oRtn);
        				console.log('oRtn.CONFIRM : ',  oRtn.CONFIRM);
        			}
        		break;
        		default:
        		break;
        	}
        };

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        /**
         * description 유저 주소 검색 버튼 클릭
        */
        this.divMain_btnSearchAddr_onclick = function(obj,e)
        {
            this.gfnOpenPopup("addressPopup", "cmm::addressSearchPopup.xfdl", {}, "fnPopupCallback");
        };

        /**
         * description 회사 주소 검색 버튼 클릭
        */
        this.divInstInfo_btnOfcSearchAddr_onclick = function(obj,e)
        {
            this.gfnOpenPopup("ofcAddressPopup", "cmm::addressSearchPopup.xfdl", {}, "fnPopupCallback");
        };

        /**
         * description 인증요청 버튼클릭
        */
        this.divMain_btnAskCode_onclick = function(obj,e)
        {
        	if (!this.fnValidateEmailAddr()) {
                return;
            }
            this.fnRequestEmailVerification();
        };

        /**
         * description 저장버튼 클릭
        */
        this.divmain_BtnSave_onclick = function(obj,e)
        {
            if (!this.fnValidate()) {
                return;
            }

            this.fnSave();
        };


        /**
         * description 인증확인코드
        */
        this.divMain_btnCodeCheck_onclick = function(obj,e)
        {
            this.fnCheckVerificationCode();
        };

        /**
         * description 이메일
        */
        this.dsUserInfo_oncolumnchanged = function(obj,e)
        {
            if (e.columnid === "emlAddrLocal") {
                obj.setColumn(e.row, "emlAddr", e.newvalue + "@" + obj.getColumn(e.row, "emlAddrDomain"));
            } else if (e.columnid === "emlAddrDomain") {
                obj.setColumn(e.row, "emlAddr", obj.getColumn(e.row, "emlAddrLocal") + "@" + e.newvalue);
            }
        };

        /**
         * description 이메일 도메인 콤보박스
        */
        this.divMain_cboEmail_onitemchanged = function(obj,e)
        {
            this.dsUserInfo.setColumn(0, "emlAddrDomain", e.postvalue);
            this.divMain.form.edtEmlAddrDomain.set_enable(Eco.isEmpty(e.postvalue))
        };

        /**
         * description 소속기관 조회 버튼클릭
        */
        // this.divMemberInfo_btnInstCode_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
        // {
        // 	this.gfnOpenPopup("memberInsttPopup", "sys::cms/CMS_1010P.xfdl", "", "fnPopupAfter", "");
        // };

        /**
         * description 회원탈퇴 클릭 이동 화면
        */

        this.btnDropMember_onclick = function(obj,e)
        {
        	this.gfnOpenPopup("memberDropPopup", "sys::pts/PTS_6010P.xfdl", "", "fnPopupAfter", "");
        };


        this.divMain_edtNum_oninput = function(obj,e)
        {
            var value = obj.value;
            var formatted = this.fnFormatTelno(obj.value);
            obj.set_value(formatted);
            console.log({ oldValue: value, formatted, newValue: obj.value });
        };

        this.divInstInfo_edtOfcNum_oninput = function(obj,e)
        {
            var value = obj.value;
            var formatted = this.fnFormatTelno(obj.value);
            obj.set_value(formatted);
            console.log({ oldValue: value, formatted, newValue: obj.value });
        };

        /************************************************************************************************
        * 사용자 FUNCTION 영역
        ************************************************************************************************/

        this.fnStartTimer = function ()
        {
            let time = 300  // 5분
            this.timer = setInterval(() => {
                time--;
                if (time > 0) {
                	this.divMain.form.divEmlVerify.form.staTimer.set_text("(" + Math.floor(time / 60) + ":" + this.lpad(time % 60, 2, "0") + " 남음)");
                } else {
                    this.this.divMain.form.divEmlVerify.form.staTimer.set_text("(0:00 남음)");
                    this.stopTimer();
                }
            }, 1000);
        };

        this.fnStopTimer = function ()
        {
            if (this.timer != null) {
                this.divMain.form.divEmlVerify.form.staTimer.set_text("(0:00 남음)");
                clearInterval(this.timer);
                this.timer = null;
        		this.divMain.form.divEmlVerify.form.staTimer.set_text("인증이 완료되었습니다.");
            }
        };

        this.lpad = function (text, length, filler) {
            text = String(text);

            if (filler == null || filler == "") {
                filler = " ";
            }

            let s = "";
            while (text.length + s.length < length) {
                s += filler[0];
            }

            return s + text;
        }

        /**
         * description 비밀번호 체크 숫자, 영어, 특수기호 체크
        */

        this.fnValidate = function ()
        {
            var args = [
                ["memberNmKr", "NULL|MAX_LEN:300", "이름"],
                ["oldPasswd", "NULL|MIN_LEN:9|MAX_LEN:20", "기존 비밀번호"],
                ["passwd", "NULL|MIN_LEN:9|MAX_LEN:20", "새 비밀번호"],
        		["passwdCheck", "NULL|MIN_LEN:9|MAX_LEN:20", "새 비밀번호 확인"],
                ["mbrZip", "NULL", "주소"],
                ["mbrAddr", "NULL|MAX_LEN:300", "주소"],
                ["mbrDaddr", "MAX_LEN:300", "상세주소"],
            ];

            if (!this.gfnCheckGrid(this.dsUserInfo, args, "")) {
                return false;
            }

            const oldPasswd = this.dsUserInfo.getColumn(0, "oldPasswd");
            const passwd = this.dsUserInfo.getColumn(0, "passwd");
        	const passwdCheck = this.dsUserInfo.getColumn(0, "passwdCheck");

            let mblTelno = this.dsUserInfo.getColumn(0, "mblTelno");
            let ofcTelno = this.dsUserInfo.getColumn(0, "ofcTelno");

        	// 새 비밀번호가 입력되어져있으면, 비밀번호 체크
        	if (!Eco.isEmpty(passwd)) {
        		if (!this.fnPasswdValidation(passwd)) {
        			this.gfnAlert("비밀번호 형식이 맞지 않습니다.");
        		}

        		if(passwd != passwdCheck) {
        			this.gfnAlert("비밀번호와 비밀번호 확인 값이 다릅니다.");
        			return false;
        		}
        	}

            this.fnValidateEmailAddr();

            if (!Eco.isEmpty(mblTelno)) {
                mblTelno = mblTelno.replace(/-/g, "");
                if (!/^(0(?:2|1\d|[3-9]\d))(\d{3,4})(\d{4})$/.test(mblTelno)) {
                    this.gfnAlert("전화번호가 올바르지 않습니다.");
                    return false;
                }
            }

            if (!Eco.isEmpty(ofcTelno)) {
                ofcTelno = ofcTelno.replace(/-/g, "");
                if (!/^(0(?:2|1\d|[3-9]\d))(\d{3,4})(\d{4})$/.test(ofcTelno)) {
                    this.gfnAlert("전화번호가 올바르지 않습니다.");
                    return false;
                }
            }

            if ("Y" !== this.dsUserInfo.getColumn(0, "emailVerified")) {
                this.gfnAlert("이메일 인증이 필요합니다.");
                return false;
            }

            return true;
        };


        this.fnValidateEmailAddr = function ()
        {
            const emailLocal = this.dsUserInfo.getColumn(0, "emlAddrLocal");
            const emailDomain = this.dsUserInfo.getColumn(0, "emlAddrDomain");
            if (Eco.isEmpty(emailLocal) || Eco.isEmpty(emailDomain)) {
                this.gfnAlert("이메일 주소를 입력하세요.");
                return false;
            }

            const localRegEx = /^([\da-zA-Z!#$%&'*+\-\/=?^_`{|}~]{1,64})$/;
    const domainRegEx = /^((?:[a-zA-Z\d\-]{1,63}\.)*[a-zA-Z\-]{1,63})$/;

            if (!localRegEx.test(emailLocal) || !domainRegEx.test(emailDomain)) {
                this.gfnAlert("이메일 주소에 사용할 수 없는 문자가 있습니다.");
                return false;
            }
            return true;
        };

        /**
         * description 비밀번호 체크 숫자, 영어, 특수기호 체크
        */

        this.fnPasswdValidation = function (password)
        {
            var counts = {
                alpha: 0,
                digits: 0,
                symbols: 0
            };

            for (const ch of password) {
                var cp = ch.codePointAt(0);
                if (cp >= 0x0030 && cp <= 0x0039) {
                    counts.digits++;
                } else if ((cp >= 0x0041 && cp <= 0x005a) || (cp >= 0x0061 && cp <= 0x007a)) {
                    counts.alpha++;
                } else if ((cp >= 0x0021 && cp <= 0x002f) || (cp >= 0x003a && cp <= 0x0040) || (cp >= 0x005B && cp <= 0x0060) || (cp >= 0x007b && cp <= 0x007e)) {
                    counts.symbols++;
                } else if (cp == 0x0009 || cp == 0x000a || cp == 0x000b || cp == 0x000c || cp == 0x000d || cp == 0x0020) {
                    this.gfnAlert("공백 문자는 비밀번호에 사용할 수 없습니다.");
                    return false;
                } else if (cp <= 0x001f || cp == 0x007f) {
                    this.gfnAlert("비밀번호에 올바르지 않은 문자가 포함되어 있습니다.");
                    return false;
                } else {
                    this.gfnAlert("문자 '" + ch + "'는 비밀번호에 사용할 수 없습니다.");
                    return false;
                }
            }

            if (counts.alpha == 0 || counts.digits == 0 || counts.symbols == 0) {
                this.gfnAlert("비밀번호는 영문자, 숫자, 특수문자를 각각 하나 이상 사용해야 합니다.");
                return false;
            } else {
                return true;
            }
        };

        this.fnFormatTelno = function (input) {
            if (Eco.isEmpty(input)) {
                return "";
            }

            var regex = /^(?:(1[568]\d{2})(\d{0,4}?)|(010)(\d{4})?(\d{0,4})|(0(?:2|[3456]\d|1[15-9]))(\d{3,4}?)?(\d{0,4}))$/;
            var i = input.replace(/(-|[^\d])/g, '');
            var match = regex.exec(i);

            console.log({ input, i, match });

            if (match == null) {
                return i;
            } else {
                return Array.from(match).slice(1)
                    .filter(s => !Eco.isEmpty(s))
                    .join('-');
            }
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.Static34.addEventHandler("onclick",this.Static02_onclick,this);
            this.divMain.form.staNoramlTitle.addEventHandler("onclick",this.Static_onclick,this);
            this.divMain.form.Static11.addEventHandler("onclick",this.Static_onclick,this);
            this.divMain.form.Static12.addEventHandler("onclick",this.Static_onclick,this);
            this.divMain.form.Static13.addEventHandler("onclick",this.Static_onclick,this);
            this.divMain.form.Static14.addEventHandler("onclick",this.Static_onclick,this);
            this.divMain.form.Static15.addEventHandler("onclick",this.Static_onclick,this);
            this.divMain.form.Static16.addEventHandler("onclick",this.Static_onclick,this);
            this.divMain.form.Static17.addEventHandler("onclick",this.Static_onclick,this);
            this.divMain.form.edtNum.addEventHandler("oninput",this.divMain_edtNum_oninput,this);
            this.divMain.form.Static09.addEventHandler("onclick",this.Static_onclick,this);
            this.divMain.form.btnSearchAddr.addEventHandler("onclick",this.divMain_btnSearchAddr_onclick,this);
            this.divMain.form.cboEmlAddrDomain.addEventHandler("onitemchanged",this.divMain_cboEmail_onitemchanged,this);
            this.divMain.form.btnAskCode.addEventHandler("onclick",this.divMain_btnAskCode_onclick,this);
            this.divMain.form.Static14_00.addEventHandler("onclick",this.Static_onclick,this);
            this.divMain.form.Static02.addEventHandler("onclick",this.Static02_onclick,this);
            this.divMain.form.divEmlVerify.form.staVerificationCode.addEventHandler("onclick",this.Static_onclick,this);
            this.divMain.form.divEmlVerify.form.btnCheckCode.addEventHandler("onclick",this.divMain_btnCodeCheck_onclick,this);
            this.divInstInfo.form.Static21.addEventHandler("onclick",this.Static_onclick,this);
            this.divInstInfo.form.Static22.addEventHandler("onclick",this.Static_onclick,this);
            this.divInstInfo.form.Static23.addEventHandler("onclick",this.Static_onclick,this);
            this.divInstInfo.form.Static25.addEventHandler("onclick",this.Static_onclick,this);
            this.divInstInfo.form.Static26.addEventHandler("onclick",this.Static_onclick,this);
            this.divInstInfo.form.Static24.addEventHandler("onclick",this.Static_onclick,this);
            this.divInstInfo.form.Static27.addEventHandler("onclick",this.Static_onclick,this);
            this.divInstInfo.form.edtOfcNum.addEventHandler("oninput",this.divInstInfo_edtOfcNum_oninput,this);
            this.divInstInfo.form.btnOfcSearchAddr.addEventHandler("onclick",this.divInstInfo_btnOfcSearchAddr_onclick,this);
            this.BtnSave.addEventHandler("onclick",this.divmain_BtnSave_onclick,this);
            this.btnDropMember.addEventHandler("onclick",this.btnDropMember_onclick,this);
            this.dsUserInfo.addEventHandler("oncolumnchanged",this.dsUserInfo_oncolumnchanged,this);
        };
        this.loadIncludeScript("PTS_6010M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
