(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("registerForm");
            this.set_titletext("가입양식작성");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,1280);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsEmailVerification", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"userId\" type=\"STRING\" size=\"20\"/><Column id=\"userName\" type=\"STRING\" size=\"300\"/><Column id=\"emailAddr\" type=\"STRING\" size=\"320\"/><Column id=\"rqstId\" type=\"STRING\" size=\"256\"/><Column id=\"verificationCode\" type=\"STRING\" size=\"256\"/><Column id=\"expireDt\" type=\"INT\" size=\"256\"/><Column id=\"verifiedToken\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMemberInfo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"memberId\" type=\"STRING\" size=\"20\"/><Column id=\"memberNmKr\" type=\"STRING\" size=\"300\"/><Column id=\"memberNmEn\" type=\"STRING\" size=\"300\"/><Column id=\"passwd\" type=\"STRING\" size=\"72\"/><Column id=\"passwdCheck\" type=\"STRING\" size=\"72\"/><Column id=\"ogdpInstCd\" type=\"STRING\" size=\"20\"/><Column id=\"ogdpInstNm\" type=\"STRING\" size=\"200\"/><Column id=\"emlAddrLocal\" type=\"STRING\" size=\"160\"/><Column id=\"emlAddrDomain\" type=\"STRING\" size=\"160\"/><Column id=\"emlAddr\" type=\"STRING\" size=\"320\"/><Column id=\"ofcTelno\" type=\"STRING\" size=\"20\"/><Column id=\"ofcFxno\" type=\"STRING\" size=\"11\"/><Column id=\"mblTelno\" type=\"STRING\" size=\"20\"/><Column id=\"prvcClctAgreYn\" type=\"STRING\" size=\"1\"/><Column id=\"prvcPvsnAgreYn\" type=\"STRING\" size=\"1\"/><Column id=\"applyDt\" type=\"DATETIME\" size=\"256\"/><Column id=\"applyCont\" type=\"STRING\" size=\"4000\"/><Column id=\"joinAprvStts\" type=\"STRING\" size=\"20\"/><Column id=\"joinAutzr\" type=\"STRING\" size=\"20\"/><Column id=\"joinAprvDt\" type=\"DATETIME\" size=\"256\"/><Column id=\"corpYn\" type=\"STRING\" size=\"1\"/><Column id=\"jbpsCd\" type=\"STRING\" size=\"20\"/><Column id=\"jbpsNm\" type=\"STRING\" size=\"300\"/><Column id=\"ogdpDeptCd\" type=\"STRING\" size=\"20\"/><Column id=\"ogdpDeptNm\" type=\"STRING\" size=\"300\"/><Column id=\"mbrZip\" type=\"STRING\" size=\"6\"/><Column id=\"mbrAddr\" type=\"STRING\" size=\"300\"/><Column id=\"mbrDaddr\" type=\"STRING\" size=\"300\"/><Column id=\"ofcZip\" type=\"STRING\" size=\"6\"/><Column id=\"ofcAddr\" type=\"STRING\" size=\"300\"/><Column id=\"ofcDaddr\" type=\"STRING\" size=\"300\"/><Column id=\"whdwlYn\" type=\"STRING\" size=\"1\"/><Column id=\"useYn\" type=\"STRING\" size=\"1\"/><Column id=\"rgstId\" type=\"STRING\" size=\"20\"/><Column id=\"rgstDt\" type=\"DATETIME\" size=\"256\"/><Column id=\"rgstIp\" type=\"STRING\" size=\"40\"/><Column id=\"updtId\" type=\"STRING\" size=\"20\"/><Column id=\"updtDt\" type=\"DATETIME\" size=\"256\"/><Column id=\"updtIp\" type=\"STRING\" size=\"40\"/><Column id=\"idChecked\" type=\"STRING\" size=\"256\"/><Column id=\"emailVerified\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsEmailCbo", this);
            obj._setContents("<ColumnInfo><Column id=\"value\" type=\"STRING\" size=\"256\"/><Column id=\"text\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divStep","180","0","1560","201",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_flexshrink("0");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle","0","0","1560","125",null,null,null,null,null,null,this.divStep.form);
            obj.set_taborder("3");
            obj.set_enable("true");
            obj.set_cssclass("portal_sta_frmTitle");
            obj.set_text("회원가입");
            obj.set_textAlign("center");
            obj.set_flexshrink("0");
            this.divStep.addChild(obj.name, obj);

            obj = new Static("Static01","0","125","520","66",null,null,null,null,null,null,this.divStep.form);
            obj.set_taborder("0");
            obj.set_enable("true");
            obj.set_cssclass("portal_sta_joinStep1");
            obj.set_text("약관동의");
            this.divStep.addChild(obj.name, obj);

            obj = new Static("Static03","520","125","520","66",null,null,null,null,null,null,this.divStep.form);
            obj.set_taborder("1");
            obj.set_enable("true");
            obj.set_cssclass("portal_sta_joinStep3_S");
            obj.set_text("가입양식작성");
            this.divStep.addChild(obj.name, obj);

            obj = new Static("Static04","1040","125","520","66",null,null,null,null,null,null,this.divStep.form);
            obj.set_taborder("2");
            obj.set_enable("true");
            obj.set_cssclass("portal_sta_joinStep3_S_step4");
            obj.set_text("가입완료");
            this.divStep.addChild(obj.name, obj);

            obj = new Div("divBasicInfo","180","221","1560","437",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_WF_Area");
            obj.set_flexshrink("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","0","0","88","60",null,null,null,null,null,null,this.divBasicInfo.form);
            obj.set_taborder("0");
            obj.set_text("기본정보");
            obj.set_enable("true");
            obj.set_cssclass("portal_sta_memTitle");
            this.divBasicInfo.addChild(obj.name, obj);

            obj = new Static("Static100","0","Static10:0",null,"51","0",null,null,null,null,null,this.divBasicInfo.form);
            obj.set_taborder("1");
            obj.set_cssclass("portal_sta_memLabelBg");
            obj.set_text("");
            this.divBasicInfo.addChild(obj.name, obj);

            obj = new Static("Static101","0","Static100:-1",null,"51","0",null,null,null,null,null,this.divBasicInfo.form);
            obj.set_taborder("2");
            obj.set_cssclass("portal_sta_memLabelBg");
            obj.set_text("");
            this.divBasicInfo.addChild(obj.name, obj);

            obj = new Static("Static102","0","Static101:-1",null,"51","0",null,null,null,null,null,this.divBasicInfo.form);
            obj.set_taborder("3");
            obj.set_cssclass("portal_sta_memLabelBg");
            obj.set_text("");
            this.divBasicInfo.addChild(obj.name, obj);

            obj = new Static("Static103","0","Static102:-1",null,"51","0",null,null,null,null,null,this.divBasicInfo.form);
            obj.set_taborder("4");
            obj.set_cssclass("portal_sta_memLabelBg");
            obj.set_text("");
            this.divBasicInfo.addChild(obj.name, obj);

            obj = new Static("Static104","0","Static103:-1",null,"51","0",null,null,null,null,null,this.divBasicInfo.form);
            obj.set_taborder("5");
            obj.set_cssclass("portal_sta_memLabelBg");
            obj.set_text("");
            this.divBasicInfo.addChild(obj.name, obj);

            obj = new Static("Static105","0","Static104:-1",null,"127","0",null,null,null,null,null,this.divBasicInfo.form);
            obj.set_taborder("6");
            obj.set_cssclass("portal_sta_memLabelBg");
            obj.set_text("");
            this.divBasicInfo.addChild(obj.name, obj);

            obj = new Static("staMemberId","0","60","200","51",null,null,null,null,null,null,this.divBasicInfo.form);
            obj.set_taborder("7");
            obj.set_text("아이디");
            obj.set_enable("true");
            obj.set_cssclass("portal_sta_memLabel_L_essential");
            this.divBasicInfo.addChild(obj.name, obj);

            obj = new Static("staMemberNm","50%","60","200","51",null,null,null,null,null,null,this.divBasicInfo.form);
            obj.set_taborder("8");
            obj.set_text("이름");
            obj.set_enable("true");
            obj.set_cssclass("portal_sta_memLabel_Essential");
            this.divBasicInfo.addChild(obj.name, obj);

            obj = new Static("staPasswd","0","110","200","51",null,null,null,null,null,null,this.divBasicInfo.form);
            obj.set_taborder("9");
            obj.set_text("비밀번호");
            obj.set_enable("true");
            obj.set_cssclass("portal_sta_memLabel_L_essential");
            this.divBasicInfo.addChild(obj.name, obj);

            obj = new Static("staPasswdChk","0","160","200","51",null,null,null,null,null,null,this.divBasicInfo.form);
            obj.set_taborder("10");
            obj.set_text("비밀번호확인");
            obj.set_enable("true");
            obj.set_cssclass("portal_sta_memLabel_L_essential");
            this.divBasicInfo.addChild(obj.name, obj);

            obj = new Static("staEmlAddr","0","210","200","51",null,null,null,null,null,null,this.divBasicInfo.form);
            obj.set_taborder("11");
            obj.set_text("이메일");
            obj.set_enable("true");
            obj.set_cssclass("portal_sta_memLabel_L_essential");
            this.divBasicInfo.addChild(obj.name, obj);

            obj = new Static("staMblTelno","0","260","200","51",null,null,null,null,null,null,this.divBasicInfo.form);
            obj.set_taborder("12");
            obj.set_text("휴대전화");
            obj.set_enable("true");
            obj.set_cssclass("portal_sta_memLabel_L_essential");
            this.divBasicInfo.addChild(obj.name, obj);

            obj = new Static("staAddr","0","310","200","127",null,null,null,null,null,null,this.divBasicInfo.form);
            obj.set_taborder("13");
            obj.set_text("주소");
            obj.set_enable("true");
            obj.set_cssclass("portal_sta_memLabel_L_essential");
            this.divBasicInfo.addChild(obj.name, obj);

            obj = new Edit("edtMemberId","staMemberId:10","69","148","33",null,null,null,null,null,null,this.divBasicInfo.form);
            obj.set_taborder("14");
            obj.set_cssclass("portal_edi");
            this.divBasicInfo.addChild(obj.name, obj);

            obj = new Edit("edtMemberNm","staMemberNm:10","69","149","33",null,null,null,null,null,null,this.divBasicInfo.form);
            obj.set_taborder("15");
            obj.set_cssclass("portal_edi");
            this.divBasicInfo.addChild(obj.name, obj);

            obj = new Edit("edtPasswd","staPasswd:10","119","148","33",null,null,null,null,null,null,this.divBasicInfo.form);
            obj.set_taborder("16");
            obj.set_cssclass("portal_edi");
            obj.set_password("true");
            this.divBasicInfo.addChild(obj.name, obj);

            obj = new Edit("edtPasswdChk","staPasswdChk:10","169","148","33",null,null,null,null,null,null,this.divBasicInfo.form);
            obj.set_taborder("17");
            obj.set_cssclass("portal_edi");
            obj.set_password("true");
            this.divBasicInfo.addChild(obj.name, obj);

            obj = new Edit("edtEmlAddrLocal","staEmlAddr:10","219","148","33",null,null,null,null,null,null,this.divBasicInfo.form);
            obj.set_taborder("18");
            obj.set_cssclass("portal_edi");
            this.divBasicInfo.addChild(obj.name, obj);

            obj = new Static("Static20","edtEmlAddrLocal:0","219","24","33",null,null,null,null,null,null,this.divBasicInfo.form);
            obj.set_taborder("19");
            obj.set_text("@");
            obj.set_cssclass("portal_frmTxt");
            this.divBasicInfo.addChild(obj.name, obj);

            obj = new Edit("edtEmlAddrDomain","Static20:0","219","146","33",null,null,null,null,null,null,this.divBasicInfo.form);
            obj.set_taborder("20");
            obj.set_cssclass("portal_edi");
            this.divBasicInfo.addChild(obj.name, obj);

            obj = new Static("Static14_00_02_00",null,"0","135","60","0",null,null,null,null,null,this.divBasicInfo.form);
            obj.set_taborder("21");
            obj.set_text("   는 필수항목입니다.");
            obj.set_enable("true");
            obj.set_cssclass("portal_sta_memTopInfo_req");
            obj.set_textAlign("center");
            this.divBasicInfo.addChild(obj.name, obj);

            obj = new Edit("edtMblTelno","staMblTelno:10","269","148","33",null,null,null,null,null,null,this.divBasicInfo.form);
            obj.set_taborder("22");
            obj.set_cssclass("portal_edi");
            this.divBasicInfo.addChild(obj.name, obj);

            obj = new Edit("staPostalCode","staAddr:10","319","148","33",null,null,null,null,null,null,this.divBasicInfo.form);
            obj.set_taborder("23");
            obj.set_cssclass("portal_edi");
            obj.set_readonly("true");
            this.divBasicInfo.addChild(obj.name, obj);

            obj = new Edit("edtAddr1","staAddr:10","357","499","33",null,null,null,null,null,null,this.divBasicInfo.form);
            obj.set_taborder("24");
            obj.set_cssclass("portal_edi");
            obj.set_readonly("true");
            this.divBasicInfo.addChild(obj.name, obj);

            obj = new Edit("edtAddr2","staAddr:10","395","499","33",null,null,null,null,null,null,this.divBasicInfo.form);
            obj.set_taborder("25");
            obj.set_cssclass("portal_edi");
            this.divBasicInfo.addChild(obj.name, obj);

            obj = new Static("Static09","edtPasswd:12","111","257","49",null,null,null,null,null,null,this.divBasicInfo.form);
            obj.set_taborder("26");
            obj.set_text("* 9~15자 이내 숫자, 문자, 특수문자 조합");
            obj.set_cssclass("portal_sta_memInfo");
            this.divBasicInfo.addChild(obj.name, obj);

            obj = new Button("btnCheckId","edtMemberId:5","69","96","33",null,null,null,null,null,null,this.divBasicInfo.form);
            obj.set_taborder("27");
            obj.set_text("중복확인");
            obj.set_cssclass("portal_btn_mem");
            this.divBasicInfo.addChild(obj.name, obj);

            obj = new Button("btnSearchAddress","staPostalCode:5","319","96","33",null,null,null,null,null,null,this.divBasicInfo.form);
            obj.set_taborder("28");
            obj.set_text("주소검색");
            obj.set_cssclass("portal_btn_mem");
            this.divBasicInfo.addChild(obj.name, obj);

            obj = new Combo("cboEmlAddrDomain","edtEmlAddrDomain:5","219","128","33",null,null,null,null,null,null,this.divBasicInfo.form);
            obj.set_taborder("29");
            obj.set_cssclass("portal_cmb");
            obj.set_innerdataset("dsEmailCbo");
            obj.set_codecolumn("value");
            obj.set_datacolumn("text");
            obj.set_text("직접입력");
            obj.set_value("");
            obj.set_index("-1");
            this.divBasicInfo.addChild(obj.name, obj);

            obj = new Button("btnRqstVerification","cboEmlAddrDomain:5","219","96","33",null,null,null,null,null,null,this.divBasicInfo.form);
            obj.set_taborder("30");
            obj.set_text("인증요청");
            obj.set_cssclass("portal_btn_mem");
            this.divBasicInfo.addChild(obj.name, obj);

            obj = new Div("divEmlVerify","780","Static102:-1","780","51",null,null,null,null,null,null,this.divBasicInfo.form);
            obj.set_taborder("31");
            obj.set_visible("false");
            this.divBasicInfo.addChild(obj.name, obj);

            obj = new Edit("edtVerificationCode","211","8","149","33",null,null,null,null,null,null,this.divBasicInfo.form.divEmlVerify.form);
            obj.set_taborder("0");
            obj.set_cssclass("portal_edi");
            this.divBasicInfo.form.divEmlVerify.addChild(obj.name, obj);

            obj = new Button("btnCheckCode","365","8","96","33",null,null,null,null,null,null,this.divBasicInfo.form.divEmlVerify.form);
            obj.set_taborder("1");
            obj.set_text("확인");
            obj.set_cssclass("portal_btn_mem");
            this.divBasicInfo.form.divEmlVerify.addChild(obj.name, obj);

            obj = new Static("staTimer","473","0","257","49",null,null,null,null,null,null,this.divBasicInfo.form.divEmlVerify.form);
            obj.set_taborder("2");
            obj.set_text("(0:00 남음)");
            obj.set_cssclass("portal_sta_memInfo");
            this.divBasicInfo.form.divEmlVerify.addChild(obj.name, obj);

            obj = new Static("staVerificationCode","0.00%","0","200","51",null,null,null,null,null,null,this.divBasicInfo.form.divEmlVerify.form);
            obj.set_taborder("3");
            obj.set_text("인증번호");
            obj.set_enable("true");
            obj.set_cssclass("portal_sta_memLabel_Essential");
            this.divBasicInfo.form.divEmlVerify.addChild(obj.name, obj);

            obj = new Div("divInsttInfo","180","20","1560","336",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("div_WF_Area");
            obj.set_text("");
            obj.set_flexshrink("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static21","0","0","142","60",null,null,null,null,null,null,this.divInsttInfo.form);
            obj.set_taborder("0");
            obj.set_text("업체/기관정보");
            obj.set_enable("true");
            obj.set_cssclass("portal_sta_memTitle");
            this.divInsttInfo.addChild(obj.name, obj);

            obj = new Static("Static107","0","Static21:0",null,"51","0",null,null,null,null,null,this.divInsttInfo.form);
            obj.set_taborder("1");
            obj.set_cssclass("portal_sta_memLabelBg");
            obj.set_text("");
            this.divInsttInfo.addChild(obj.name, obj);

            obj = new Static("Static108","0","Static107:-1",null,"51","0",null,null,null,null,null,this.divInsttInfo.form);
            obj.set_taborder("2");
            obj.set_cssclass("portal_sta_memLabelBg");
            obj.set_text("");
            this.divInsttInfo.addChild(obj.name, obj);

            obj = new Static("Static109","0","Static108:-1",null,"51","0",null,null,null,null,null,this.divInsttInfo.form);
            obj.set_taborder("3");
            obj.set_cssclass("portal_sta_memLabelBg");
            obj.set_text("");
            this.divInsttInfo.addChild(obj.name, obj);

            obj = new Static("Static110","0","Static109:-1",null,"126","0",null,null,null,null,null,this.divInsttInfo.form);
            obj.set_taborder("4");
            obj.set_cssclass("portal_sta_memLabelBg");
            obj.set_text("");
            this.divInsttInfo.addChild(obj.name, obj);

            obj = new Static("Static14_00_02_00_00",null,"0","384","60","0",null,null,null,null,null,this.divInsttInfo.form);
            obj.set_taborder("5");
            obj.set_text("업체/기관 검색이 되지 않을 경우 신규 등록을 진행해 주세요.");
            obj.set_enable("true");
            obj.set_cssclass("portal_sta_memTopInfo");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.divInsttInfo.addChild(obj.name, obj);

            obj = new Static("staOgdpInstNm","0","60","200","51",null,null,null,null,null,null,this.divInsttInfo.form);
            obj.set_taborder("6");
            obj.set_text("업체/기관명");
            obj.set_enable("true");
            obj.set_cssclass("portal_sta_memLabel_L");
            this.divInsttInfo.addChild(obj.name, obj);

            obj = new Static("staOgdpDeptNm","0","110","200","51",null,null,null,null,null,null,this.divInsttInfo.form);
            obj.set_taborder("7");
            obj.set_text("부서");
            obj.set_enable("true");
            obj.set_cssclass("portal_sta_memLabel_L");
            this.divInsttInfo.addChild(obj.name, obj);

            obj = new Static("staOfcTelno","0","160","200","51",null,null,null,null,null,null,this.divInsttInfo.form);
            obj.set_taborder("8");
            obj.set_text("사무실연락처");
            obj.set_enable("true");
            obj.set_cssclass("portal_sta_memLabel_L");
            this.divInsttInfo.addChild(obj.name, obj);

            obj = new Static("staOfcFxno","50.00%","160","200","51",null,null,null,null,null,null,this.divInsttInfo.form);
            obj.set_taborder("9");
            obj.set_text("사무실팩스번호");
            obj.set_enable("true");
            obj.set_cssclass("portal_sta_memLabel");
            this.divInsttInfo.addChild(obj.name, obj);

            obj = new Static("Static24","50.00%","110","200","51",null,null,null,null,null,null,this.divInsttInfo.form);
            obj.set_taborder("10");
            obj.set_text("직위");
            obj.set_enable("true");
            obj.set_cssclass("portal_sta_memLabel");
            this.divInsttInfo.addChild(obj.name, obj);

            obj = new Static("staOfcAddr","0","210","200","126",null,null,null,null,null,null,this.divInsttInfo.form);
            obj.set_taborder("11");
            obj.set_text("사무실 주소");
            obj.set_enable("true");
            obj.set_cssclass("portal_sta_memLabel_L");
            this.divInsttInfo.addChild(obj.name, obj);

            obj = new Edit("edtOgdpInstNm","staOgdpInstNm:10","69","150","33",null,null,null,null,null,null,this.divInsttInfo.form);
            obj.set_taborder("12");
            obj.set_cssclass("portal_edi");
            this.divInsttInfo.addChild(obj.name, obj);

            obj = new Edit("edtOgdpDeptNm","staOgdpDeptNm:10","119","150","33",null,null,null,null,null,null,this.divInsttInfo.form);
            obj.set_taborder("13");
            obj.set_cssclass("portal_edi");
            this.divInsttInfo.addChild(obj.name, obj);

            obj = new Edit("Edit15","Static24:10","119","149","33",null,null,null,null,null,null,this.divInsttInfo.form);
            obj.set_taborder("14");
            obj.set_cssclass("portal_edi");
            this.divInsttInfo.addChild(obj.name, obj);

            obj = new Edit("edtOfcTelno","staOfcTelno:10","169","150","33",null,null,null,null,null,null,this.divInsttInfo.form);
            obj.set_taborder("15");
            obj.set_cssclass("portal_edi");
            this.divInsttInfo.addChild(obj.name, obj);

            obj = new Edit("edtOfcFxno","staOfcFxno:10","169","149","33",null,null,null,null,null,null,this.divInsttInfo.form);
            obj.set_taborder("16");
            obj.set_cssclass("portal_edi");
            this.divInsttInfo.addChild(obj.name, obj);

            obj = new Edit("staOfcZip","staOfcAddr:10","219","150","33",null,null,null,null,null,null,this.divInsttInfo.form);
            obj.set_taborder("17");
            obj.set_cssclass("portal_edi");
            obj.set_readonly("true");
            this.divInsttInfo.addChild(obj.name, obj);

            obj = new Edit("edtOfcAddr1","staOfcAddr:10","256","486","33",null,null,null,null,null,null,this.divInsttInfo.form);
            obj.set_taborder("18");
            obj.set_cssclass("portal_edi");
            obj.set_readonly("true");
            this.divInsttInfo.addChild(obj.name, obj);

            obj = new Edit("edtOfcAddr2","staOfcAddr:10","294","486","33",null,null,null,null,null,null,this.divInsttInfo.form);
            obj.set_taborder("19");
            obj.set_cssclass("portal_edi");
            this.divInsttInfo.addChild(obj.name, obj);

            obj = new Button("btnSearchInst","edtOgdpInstNm:5","69","68","33",null,null,null,null,null,null,this.divInsttInfo.form);
            obj.set_taborder("20");
            obj.set_text("검색");
            obj.set_cssclass("portal_btn_mem");
            obj.set_visible("false");
            this.divInsttInfo.addChild(obj.name, obj);

            obj = new Button("btnAddInst","btnSearchInst:5","69","163","33",null,null,null,null,null,null,this.divInsttInfo.form);
            obj.set_taborder("21");
            obj.set_text("업체/기관 신규등록");
            obj.set_cssclass("portal_btn_mem");
            obj.set_background("#00388e");
            obj.set_visible("false");
            this.divInsttInfo.addChild(obj.name, obj);

            obj = new Button("btnSearchOfcAddr","staOfcZip:5","219","96","33",null,null,null,null,null,null,this.divInsttInfo.form);
            obj.set_taborder("22");
            obj.set_text("주소검색");
            obj.set_cssclass("portal_btn_mem");
            this.divInsttInfo.addChild(obj.name, obj);

            obj = new Div("divBtn","180","1034","1560","246",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_flexshrink("0");
            this.addChild(obj.name, obj);

            obj = new Button("btnNext","715","15","130","45",null,null,null,null,null,null,this.divBtn.form);
            obj.set_taborder("0");
            obj.set_text("다음");
            obj.set_cssclass("portal_btn");
            this.divBtn.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divStep.form
            obj = new Layout("default","",0,0,this.divStep.form,function(p){});
            this.divStep.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divBasicInfo.form.divEmlVerify.form
            obj = new Layout("default","",0,0,this.divBasicInfo.form.divEmlVerify.form,function(p){});
            this.divBasicInfo.form.divEmlVerify.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divBasicInfo.form
            obj = new Layout("default","",0,0,this.divBasicInfo.form,function(p){});
            this.divBasicInfo.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divInsttInfo.form
            obj = new Layout("default","",0,0,this.divInsttInfo.form,function(p){});
            this.divInsttInfo.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divBtn.form
            obj = new Layout("default","",0,0,this.divBtn.form,function(p){});
            this.divBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1920,1280,this,function(p){});
            obj.set_type("vertical");
            obj.set_verticalgap("20");
            obj.set_flexcrossaxisalign("center");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divBasicInfo.form.divEmlVerify.form.edtVerificationCode","value","dsEmailVerification","verificationCode");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divBasicInfo.form.edtMemberId","value","dsMemberInfo","memberId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divBasicInfo.form.edtMemberNm","value","dsMemberInfo","memberNmKr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divBasicInfo.form.edtPasswd","value","dsMemberInfo","passwd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divBasicInfo.form.edtPasswdChk","value","dsMemberInfo","passwdCheck");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divBasicInfo.form.edtEmlAddrLocal","value","dsMemberInfo","emlAddrLocal");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divBasicInfo.form.edtEmlAddrDomain","value","dsMemberInfo","emlAddrDomain");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divBasicInfo.form.edtMblTelno","value","dsMemberInfo","mblTelno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divBasicInfo.form.staPostalCode","value","dsMemberInfo","mbrZip");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divBasicInfo.form.edtAddr1","value","dsMemberInfo","mbrAddr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divBasicInfo.form.edtAddr2","value","dsMemberInfo","mbrDaddr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divInsttInfo.form.edtOgdpInstNm","value","dsMemberInfo","ogdpInstNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divInsttInfo.form.edtOgdpDeptNm","value","dsMemberInfo","ogdpDeptNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divInsttInfo.form.Edit15","value","dsMemberInfo","jbpsNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divInsttInfo.form.edtOfcTelno","value","dsMemberInfo","ofcTelno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divInsttInfo.form.edtOfcFxno","value","dsMemberInfo","ofcFxno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divInsttInfo.form.staOfcZip","value","dsMemberInfo","ofcZip");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divInsttInfo.form.edtOfcAddr1","value","dsMemberInfo","ofcAddr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divInsttInfo.form.edtOfcAddr2","value","dsMemberInfo","ofcDaddr");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("MIF_1020M.xfdl","lib::common.xjs");
        this.registerScript("MIF_1020M.xfdl", function() {
        /**
         *  회원정보 입력
         *  MenuPath      회원가입 - 회원정보 입력
         *  FileName      MIF_1020M.xfdl
         *  Creator       parksw
         *  CreateDate    2023.10.25
         *  Desction      회원정보 입력
         ************** 소스 수정 이력 ***********************************************
         *  date          Modifier    Description
         *******************************************************************************
         *  2023.10.25    parksw      최초 생성
         *******************************************************************************/

        this.executeIncludeScript("lib::common.xjs"); /*include "lib::common.xjs"*/;

        this.isIdCheckPassed = "N";
        this.isEmailVerified = "N";
        this.timer = null;
        this.callbackMsg = null;

        /***********************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose)
         ***********************************************************************************************/

        this.registerForm_onload = function(obj,e)
        {
            this.gfnFormOnLoad(this);
            this.gfnLoadCombo("loadEmlCombo", "dsEmailCbo=PMS:MI:EML_DOMAIN:", "fnComboCallback");
        };

        /************************************************************************************************
         * TRANSACTION 서비스 호출 처리
         ************************************************************************************************/

        this.fnCheckId = function ()
        {
            this.gfnTransaction("checkId", "mi/register/checkId.do", "dsMemberInfo", "", "", "fnCallback");
        };

        this.fnRequestEmailVerification = function ()
        {
            this.dsEmailVerification.setColumn(0, "emailAddr", this.dsMemberInfo.getColumn(0, "emlAddr"));
            this.gfnTransaction("requestEmailVerification", "mi/common/mailVerification/sendMail.do", "dsEmailVerification", "dsEmailVerification", "", "fnCallback");
        };

        this.fnCheckVerificationCode = function ()
        {
            this.dsEmailVerification.setColumn(0, "emailAddr", this.dsMemberInfo.getColumn(0, "emlAddr"));
            this.gfnTransaction("checkVerificationCode", "mi/common/mailVerification/checkVerificationCode.do", "dsEmailVerification", "dsEmailVerification", "", "fnCallback");
        };

        this.fnSave = function ()
        {
            this.gfnTransaction("register", "mi/register/register.do", "dsMemberInfo", "", "", "fnCallback");
        };

        /************************************************************************************************
         * CALLBACK 콜백 처리부분(Transaction, Popup)
         ************************************************************************************************/

        this.fnComboCallback = function (svcId, errorCode, errorMsg) {
            if (svcId === "loadEmlCombo") {
                const row = this.dsEmailCbo.addRow();
                this.dsEmailCbo.setColumn(row, "text", "직접 입력");
                this.dsEmailCbo.setColumn(row, "value", "");
                this.divBasicInfo.form.cboEmlAddrDomain.set_index(row);
            }
        };

        this.fnCallback = function (svcId, errorCode, errorMsg)
        {
            switch (svcId) {
                case "checkId":
                    if (this.isIdCheckPassed === "Y") {
                        this.gfnAlert("'{0}'은 사용 가능한 ID입니다.", [this.dsMemberInfo.getColumn(0, "memberId")]);
                        this.divBasicInfo.form.edtMemberId.set_enable(false);
                        this.divBasicInfo.form.btnCheckId.set_enable(false);
                        this.divBasicInfo.form.btnCheckId.set_visible(false);
                        this.dsMemberInfo.setColumn(0, "idChecked", "Y");
                    }
                    break;
                case "requestEmailVerification":
                    if (this.callbackMsg === "success") {
                        this.gfnAlert("인증번호가 메일로 전송되었습니다.");
                        this.divBasicInfo.form.divEmlVerify.set_visible(true);
                        let expire = this.dsEmailVerification.getColumn(0, "expireDt");
                        this.fnStartTimer();
                    }
                    break;
                case "checkVerificationCode":
                    if (this.callbackMsg === "success") {
                        this.gfnAlert("이메일 인증이 완료되었습니다.");
                        this.fnStopTimer();
                        this.divBasicInfo.form.edtEmlAddrLocal.set_enable(false);
                        this.divBasicInfo.form.edtEmlAddrDomain.set_enable(false);
                        this.divBasicInfo.form.cboEmlAddrDomain.set_enable(false);
                        this.divBasicInfo.form.divEmlVerify.form.edtVerificationCode.set_enable(false);
                        this.divBasicInfo.form.divEmlVerify.form.staTimer.set_visible(false);
                        this.divBasicInfo.form.btnRqstVerification.set_enable(false);
                        this.divBasicInfo.form.btnRqstVerification.set_visible(false);
                        this.divBasicInfo.form.divEmlVerify.form.btnCheckCode.set_enable(false);
                        this.divBasicInfo.form.divEmlVerify.form.btnCheckCode.set_visible(false);
                        this.dsMemberInfo.setColumn(0, "emailVerified", "Y");
                    }
                    break;
                case "register":
                    if (this.callbackMsg === "success") {
                        nexacro.getApplication().goPage("identification", "mif::register/MIF_1030M.xfdl");
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
                        this.dsMemberInfo.setColumn(0, "mbrZip", result.data.zonecode);
                        this.dsMemberInfo.setColumn(0, "mbrAddr", result.data.roadAddress);
                    }
                    break;
                case "ofcAddressPopup":
                    if (!result.canceled) {
                        this.dsMemberInfo.setColumn(0, "ofcZip", result.data.zonecode);
                        this.dsMemberInfo.setColumn(0, "ofcAddr", result.data.roadAddress);
                    }
                    break;
                default:
                    break;
            };
        };

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/

        this.divBasicInfo_btnSearchAddress_onclick = function(obj,e)
        {
            this.gfnOpenPopup("addressPopup", "cmm::addressSearchPopup.xfdl", {}, "fnPopupCallback");
        };

        this.divInsttInfo_btnSearchOfcAddr_onclick = function(obj,e)
        {
            this.gfnOpenPopup("ofcAddressPopup", "cmm::addressSearchPopup.xfdl", {}, "fnPopupCallback");
        };

        this.divBasicInfo_btnCheckId_onclick = function(obj,e)
        {
            if (!this.fnValidateId()) {
                return;
            }

            this.fnCheckId();
        };

        this.divBasicInfo_btnRqstValidation_onclick = function(obj,e)
        {
        	if (!this.fnValidateEmailAddr()) {
                return;
            }

            this.fnRequestEmailVerification();
        };

        this.divBasicInfo_divEmlVerify_btnCheckCode_onclick = function(obj,e)
        {
            this.fnCheckVerificationCode();
        };

        this.dsMemberInfo_oncolumnchanged = function(obj,e)
        {
            if (e.columnid === "emlAddrLocal") {
                obj.setColumn(e.row, "emlAddr", e.newvalue + "@" + obj.getColumn(e.row, "emlAddrDomain"));
            } else if (e.columnid === "emlAddrDomain") {
                obj.setColumn(e.row, "emlAddr", obj.getColumn(e.row, "emlAddrLocal") + "@" + e.newvalue);
            }
        };

        this.divBtn_btnNext_onclick = function(obj,e)
        {
            if (!this.fnValidate()) {
                return;
            }

            this.fnSave();
        };

        this.divBasicInfo_cboEmlAddrDomain_onitemchanged = function(obj,e)
        {
            this.dsMemberInfo.setColumn(0, "emlAddrDomain", e.postvalue);
            this.divBasicInfo.form.edtEmlAddrDomain.set_enable(Eco.isEmpty(e.postvalue))
        };

        this.divBasicInfo_edtMblTelno_oninput = function(obj,e)
        {
            var value = obj.value;
            var formatted = this.fnFormatTelno(obj.value);
            obj.set_value(formatted);
            console.log({ oldValue: value, formatted, newValue: obj.value });
        };

        this.divInsttInfo_edtOfcTelno_oninput = function(obj,e)
        {
            var value = obj.value;
            var formatted = this.fnFormatTelno(obj.value);
            obj.set_value(formatted);
            console.log({ oldValue: value, formatted, newValue: obj.value });
        };

        this.divInsttInfo_edtOfcFxno_oninput = function(obj,e)
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
                	this.divBasicInfo.form.divEmlVerify.form.staTimer.set_text("(" + Math.floor(time / 60) + ":" + this.lpad(time % 60, 2, "0") + " 남음)");
                } else {
                    this.divBasicInfo.form.divEmlVerify.form.staTimer.set_text("(0:00 남음)");
                    this.stopTimer();
                }
            }, 1000);
        };

        this.fnStopTimer = function ()
        {
            if (this.timer != null) {
                this.divBasicInfo.form.divEmlVerify.form.staTimer.set_text("(0:00 남음)");
                clearInterval(this.timer);
                this.timer = null;
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

        this.fnValidate = function ()
        {
            var args = [
                ["memberId", "NULL|MAX_LEN:20", "아이디"],
                ["memberNmKr", "NULL|MAX_LEN:300", "이름"],
                ["passwd", "NULL|MIN_LEN:9|MAX_LEN:16", "비밀번호"],
                ["passwdCheck", "NULL|MIN_LEN:9|MAX_LEN:20", "비밀번호 확인"],
                ["mbrZip", "NULL", "주소"],
                ["mbrAddr", "NULL|MAX_LEN:300", "주소"],
                ["mbrDaddr", "MAX_LEN:300", "상세주소"],
            ];

            if (!this.gfnCheckGrid(this.dsMemberInfo, args, "")) {
                return false;
            }

            const passwd = this.dsMemberInfo.getColumn(0, "passwd");
            const passwdCheck = this.dsMemberInfo.getColumn(0, "passwdCheck");
            let mblTelno = this.dsMemberInfo.getColumn(0, "mblTelno");
            let ofcTelno = this.dsMemberInfo.getColumn(0, "ofcTelno");
            let ofcFxno = this.dsMemberInfo.getColumn(0, "ofcFxno");

            this.fnValidateId();
            this.fnCheckPassword(passwd);
            if (passwd != passwdCheck) {
                this.gfnAlert("비밀번호 확인이 다릅니다.");
                return false;
            }

            this.fnValidateEmailAddr();

            if (!Eco.isEmpty(mblTelno)) {
                mblTelno = mblTelno.replace(/-/g, "");
                if (!/^(0(?:2|1\d|[3-9]\d))(\d{3,4})(\d{4})$/.test(mblTelno)) {
                    this.gfnAlert("연락처 전화번호가 올바르지 않습니다.");
                    return false;
                }
            }

            if (!Eco.isEmpty(ofcTelno)) {
                ofcTelno = ofcTelno.replace(/-/g, "");
                if (!/^((0(?:2|1\d|[3-9]\d))(\d{3,4})(\d{4})|1[568]\d{6})$/.test(ofcTelno)) {
                    this.gfnAlert("사무실연락처 전화번호가 올바르지 않습니다.");
                    return false;
                }
            }

            if (!Eco.isEmpty(ofcFxno)) {
                ofcFxno = ofcFxno.replace(/-/g, "");
                if (!/^((0(?:2|1\d|[3-9]\d))(\d{3,4})(\d{4})|1[568]\d{6})$/.test(ofcFxno)) {
                    this.gfnAlert("사무실 팩스번호가 올바르지 않습니다.");
                    return false;
                }
            }

            if ("Y" !== this.dsMemberInfo.getColumn(0, "idChecked")) {
                this.gfnAlert("아이디 중복 확인이 필요합니다.");
                return false;
            }

            if ("Y" !== this.dsMemberInfo.getColumn(0, "emailVerified")) {
                this.gfnAlert("이메일 인증이 필요합니다.");
                return false;
            }

            return true;
        };

        this.fnValidateId = function ()
        {
            const memberId = this.dsMemberInfo.getColumn(0, "memberId");
            if (Eco.isEmpty(memberId)) {
                this.gfnAlert("아이디를 입력하세요.");
                return false;
            } else if (memberId.length < 6 || memberId.length > 20) {
                this.gfnAlert("아이디는 6글자 이상 20글자 미만이어야 합니다.");
                return false;
            }

            return true;
        };

        this.fnValidateEmailAddr = function ()
        {
            const emailLocal = this.dsMemberInfo.getColumn(0, "emlAddrLocal");
            const emailDomain = this.dsMemberInfo.getColumn(0, "emlAddrDomain");
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

        this.fnCheckPassword = function (password)
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
            this.addEventHandler("onload",this.registerForm_onload,this);
            this.divBasicInfo.form.Static10.addEventHandler("onclick",this.Static_onclick,this);
            this.divBasicInfo.form.staMemberId.addEventHandler("onclick",this.Static_onclick,this);
            this.divBasicInfo.form.staMemberNm.addEventHandler("onclick",this.Static_onclick,this);
            this.divBasicInfo.form.staPasswd.addEventHandler("onclick",this.Static_onclick,this);
            this.divBasicInfo.form.staPasswdChk.addEventHandler("onclick",this.Static_onclick,this);
            this.divBasicInfo.form.staEmlAddr.addEventHandler("onclick",this.Static_onclick,this);
            this.divBasicInfo.form.staMblTelno.addEventHandler("onclick",this.Static_onclick,this);
            this.divBasicInfo.form.staAddr.addEventHandler("onclick",this.Static_onclick,this);
            this.divBasicInfo.form.Static14_00_02_00.addEventHandler("onclick",this.Static_onclick,this);
            this.divBasicInfo.form.edtMblTelno.addEventHandler("oninput",this.divBasicInfo_edtMblTelno_oninput,this);
            this.divBasicInfo.form.Static09.addEventHandler("onclick",this.Static_onclick,this);
            this.divBasicInfo.form.btnCheckId.addEventHandler("onclick",this.divBasicInfo_btnCheckId_onclick,this);
            this.divBasicInfo.form.btnSearchAddress.addEventHandler("onclick",this.divBasicInfo_btnSearchAddress_onclick,this);
            this.divBasicInfo.form.cboEmlAddrDomain.addEventHandler("onitemchanged",this.divBasicInfo_cboEmlAddrDomain_onitemchanged,this);
            this.divBasicInfo.form.btnRqstVerification.addEventHandler("onclick",this.divBasicInfo_btnRqstValidation_onclick,this);
            this.divBasicInfo.form.divEmlVerify.form.btnCheckCode.addEventHandler("onclick",this.divBasicInfo_divEmlVerify_btnCheckCode_onclick,this);
            this.divBasicInfo.form.divEmlVerify.form.staTimer.addEventHandler("onclick",this.Static_onclick,this);
            this.divBasicInfo.form.divEmlVerify.form.staVerificationCode.addEventHandler("onclick",this.Static_onclick,this);
            this.divInsttInfo.form.Static21.addEventHandler("onclick",this.Static_onclick,this);
            this.divInsttInfo.form.Static14_00_02_00_00.addEventHandler("onclick",this.Static_onclick,this);
            this.divInsttInfo.form.staOgdpInstNm.addEventHandler("onclick",this.Static_onclick,this);
            this.divInsttInfo.form.staOgdpDeptNm.addEventHandler("onclick",this.Static_onclick,this);
            this.divInsttInfo.form.staOfcTelno.addEventHandler("onclick",this.Static_onclick,this);
            this.divInsttInfo.form.staOfcFxno.addEventHandler("onclick",this.Static_onclick,this);
            this.divInsttInfo.form.Static24.addEventHandler("onclick",this.Static_onclick,this);
            this.divInsttInfo.form.staOfcAddr.addEventHandler("onclick",this.Static_onclick,this);
            this.divInsttInfo.form.edtOfcTelno.addEventHandler("oninput",this.divInsttInfo_edtOfcTelno_oninput,this);
            this.divInsttInfo.form.edtOfcFxno.addEventHandler("oninput",this.divInsttInfo_edtOfcFxno_oninput,this);
            this.divInsttInfo.form.btnSearchInst.addEventHandler("onclick",this.Div00_Button06_onclick,this);
            this.divInsttInfo.form.btnAddInst.addEventHandler("onclick",this.Div00_Button07_onclick,this);
            this.divInsttInfo.form.btnSearchOfcAddr.addEventHandler("onclick",this.divInsttInfo_btnSearchOfcAddr_onclick,this);
            this.divBtn.form.btnNext.addEventHandler("onclick",this.divBtn_btnNext_onclick,this);
            this.dsMemberInfo.addEventHandler("oncolumnchanged",this.dsMemberInfo_oncolumnchanged,this);
        };
        this.loadIncludeScript("MIF_1020M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
