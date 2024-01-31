(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CMS_1020M");
            this.set_cssclass("frm_WF_comp");
            this.set_titletext("회원정보 수정");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,485);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsUserInfo", this);
            obj.set_updatecontrol("true");
            obj._setContents("<ColumnInfo><Column id=\"memberId\" type=\"STRING\" size=\"256\"/><Column id=\"memberNmKr\" type=\"STRING\" size=\"256\"/><Column id=\"memberNmEn\" type=\"STRING\" size=\"256\"/><Column id=\"oldPasswd\" type=\"STRING\" size=\"256\"/><Column id=\"ogdpInstCd\" type=\"STRING\" size=\"256\"/><Column id=\"ogdpInstNm\" type=\"STRING\" size=\"256\"/><Column id=\"emlAddr\" type=\"STRING\" size=\"256\"/><Column id=\"ofcTelno\" type=\"STRING\" size=\"256\"/><Column id=\"mblTelno\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"prvcClctAgreYn\" type=\"STRING\" size=\"256\"/><Column id=\"prvcPvsnAgreYn\" type=\"STRING\" size=\"256\"/><Column id=\"mbrNo\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staTitle","50","10","500","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("회원정보 수정");
            obj.set_cssclass("sta_WF_compTitle01");
            this.addChild(obj.name, obj);

            obj = new Div("divMemberInfo","50","50",null,null,"50","30",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_enable("true");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_00_00","110","0","60","45",null,null,null,null,null,null,this.divMemberInfo.form);
            obj.set_taborder("0");
            obj.set_text("h 45");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divMemberInfo.addChild(obj.name, obj);

            obj = new Static("staTitle","20","11","250","27",null,null,null,null,null,null,this.divMemberInfo.form);
            obj.set_taborder("11");
            obj.set_text("회원 정보");
            obj.set_cssclass("sta_WF_subTitle01");
            this.divMemberInfo.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_00","20","0","60","18",null,null,null,null,null,null,this.divMemberInfo.form);
            obj.set_taborder("12");
            obj.set_text("h 18");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divMemberInfo.addChild(obj.name, obj);

            obj = new Static("Static07_01_01_00_00","20","45",null,"1","20",null,null,null,null,null,this.divMemberInfo.form);
            obj.set_taborder("13");
            obj.set_text("");
            obj.set_cssclass("sta_WF_borCondition02");
            this.divMemberInfo.addChild(obj.name, obj);

            obj = new Static("sta001","20","46","200","34",null,null,null,null,null,null,this.divMemberInfo.form);
            obj.set_taborder("14");
            obj.set_text("회원 ID");
            obj.set_cssclass("sta_WF_condition02");
            this.divMemberInfo.addChild(obj.name, obj);

            obj = new Edit("edtMemberId","228","50","200","26",null,null,null,null,null,null,this.divMemberInfo.form);
            obj.set_taborder("1");
            obj.set_cssclass("essential");
            obj.set_enable("false");
            this.divMemberInfo.addChild(obj.name, obj);

            obj = new Static("Static07_01_01_00","20","80",null,"1","20",null,null,null,null,null,this.divMemberInfo.form);
            obj.set_taborder("16");
            obj.set_text("");
            obj.set_cssclass("sta_WF_borCondition02");
            this.divMemberInfo.addChild(obj.name, obj);

            obj = new Static("sta002","20","81","200","34",null,null,null,null,null,null,this.divMemberInfo.form);
            obj.set_taborder("17");
            obj.set_text("회원명(한글)");
            obj.set_cssclass("sta_WF_condition02");
            this.divMemberInfo.addChild(obj.name, obj);

            obj = new Static("sta003","20","116","200","34",null,null,null,null,null,null,this.divMemberInfo.form);
            obj.set_taborder("18");
            obj.set_text("회원명(영문)");
            obj.set_cssclass("sta_WF_condition02");
            this.divMemberInfo.addChild(obj.name, obj);

            obj = new Static("Static07_01_01_00_01","20","115",null,"1","20",null,null,null,null,null,this.divMemberInfo.form);
            obj.set_taborder("20");
            obj.set_text("");
            obj.set_cssclass("sta_WF_borCondition02");
            this.divMemberInfo.addChild(obj.name, obj);

            obj = new Static("Static07_01_01_00_01_00","20","150",null,"1","20",null,null,null,null,null,this.divMemberInfo.form);
            obj.set_taborder("21");
            obj.set_text("");
            obj.set_cssclass("sta_WF_borCondition02");
            this.divMemberInfo.addChild(obj.name, obj);

            obj = new Static("Static10_00","220","46","8",null,null,"80",null,null,null,null,this.divMemberInfo.form);
            obj.set_taborder("15");
            obj.set_text("w8");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divMemberInfo.addChild(obj.name, obj);

            obj = new Static("Static10_01",null,"0","20",null,"0","0",null,null,null,null,this.divMemberInfo.form);
            obj.set_taborder("23");
            obj.set_text("w20");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divMemberInfo.addChild(obj.name, obj);

            obj = new Static("Static07_01_01_00_01_01","20","325",null,"1","20",null,null,null,null,null,this.divMemberInfo.form);
            obj.set_taborder("24");
            obj.set_text("");
            obj.set_cssclass("sta_WF_borCondition02");
            this.divMemberInfo.addChild(obj.name, obj);

            obj = new Static("sta008","20","291","200","34",null,null,null,null,null,null,this.divMemberInfo.form);
            obj.set_taborder("25");
            obj.set_text("휴대폰 전화번호");
            obj.set_cssclass("sta_WF_condition02");
            this.divMemberInfo.addChild(obj.name, obj);

            obj = new Edit("edtMemberNmEng","228","120","200","26",null,null,null,null,null,null,this.divMemberInfo.form);
            obj.set_taborder("3");
            obj.set_cssclass("essential");
            obj.set_inputtype("english");
            obj.set_inputfilter("space,symbol");
            obj.set_imemode("alpha");
            this.divMemberInfo.addChild(obj.name, obj);

            obj = new Static("sta004","20","151","200","34",null,null,null,null,null,null,this.divMemberInfo.form);
            obj.set_taborder("26");
            obj.set_text("비밀번호");
            obj.set_cssclass("sta_WF_condition02");
            this.divMemberInfo.addChild(obj.name, obj);

            obj = new Static("Static07_01_01_00_01_00_01","20","185",null,"1","20",null,null,null,null,null,this.divMemberInfo.form);
            obj.set_taborder("27");
            obj.set_text("");
            obj.set_cssclass("sta_WF_borCondition02");
            this.divMemberInfo.addChild(obj.name, obj);

            obj = new Static("sta005","20","186","200","34",null,null,null,null,null,null,this.divMemberInfo.form);
            obj.set_taborder("28");
            obj.set_text("소속기관");
            obj.set_cssclass("sta_WF_condition02");
            this.divMemberInfo.addChild(obj.name, obj);

            obj = new Edit("edtOgdpInstNm","354","190","200","26",null,null,null,null,null,null,this.divMemberInfo.form);
            obj.set_taborder("5");
            obj.set_cssclass("essential");
            this.divMemberInfo.addChild(obj.name, obj);

            obj = new Static("Static07_01_01_01_01","20","220",null,"1","20",null,null,null,null,null,this.divMemberInfo.form);
            obj.set_taborder("29");
            obj.set_text("");
            obj.set_cssclass("sta_WF_borCondition02");
            this.divMemberInfo.addChild(obj.name, obj);

            obj = new Static("sta006","20","221","200","34",null,null,null,null,null,null,this.divMemberInfo.form);
            obj.set_taborder("30");
            obj.set_text("이메일주소");
            obj.set_cssclass("sta_WF_condition02");
            this.divMemberInfo.addChild(obj.name, obj);

            obj = new Edit("edtEmail","228","225","326","26",null,null,null,null,null,null,this.divMemberInfo.form);
            obj.set_taborder("6");
            obj.set_cssclass("essential");
            this.divMemberInfo.addChild(obj.name, obj);

            obj = new Static("Static07_01_01_01_01_00","20","255",null,"1","20",null,null,null,null,null,this.divMemberInfo.form);
            obj.set_taborder("31");
            obj.set_text("");
            obj.set_cssclass("sta_WF_borCondition02");
            this.divMemberInfo.addChild(obj.name, obj);

            obj = new Static("sta007","20","256","200","34",null,null,null,null,null,null,this.divMemberInfo.form);
            obj.set_taborder("32");
            obj.set_text("사무실 전화번호");
            obj.set_cssclass("sta_WF_condition02");
            this.divMemberInfo.addChild(obj.name, obj);

            obj = new Edit("edtOfcNo","228","260","200","26",null,null,null,null,null,null,this.divMemberInfo.form);
            obj.set_taborder("7");
            obj.set_cssclass("essential");
            this.divMemberInfo.addChild(obj.name, obj);

            obj = new Static("Static07_01_01_01_01_00_00","20","290",null,"1","20",null,null,null,null,null,this.divMemberInfo.form);
            obj.set_taborder("33");
            obj.set_text("");
            obj.set_cssclass("sta_WF_borCondition02");
            this.divMemberInfo.addChild(obj.name, obj);

            obj = new Static("Static10","0","-1","20",null,null,"0",null,null,null,null,this.divMemberInfo.form);
            obj.set_taborder("22");
            obj.set_text("w20");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divMemberInfo.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00","19","45","1","281",null,null,null,null,null,null,this.divMemberInfo.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_borCondition02_v");
            this.divMemberInfo.addChild(obj.name, obj);

            obj = new Edit("edtMemberNmKr","228","85","200","26",null,null,null,null,null,null,this.divMemberInfo.form);
            obj.set_taborder("2");
            obj.set_cssclass("essential");
            obj.set_imemode("hangul");
            obj.set_inputfilter("space,symbol");
            this.divMemberInfo.addChild(obj.name, obj);

            obj = new Edit("edtTelNo","228","295","200","26",null,null,null,null,null,null,this.divMemberInfo.form);
            obj.set_taborder("8");
            obj.set_cssclass("essential");
            this.divMemberInfo.addChild(obj.name, obj);

            obj = new Button("btnInsttNm","323","190","26","26",null,null,null,null,null,null,this.divMemberInfo.form);
            obj.set_taborder("34");
            obj.set_cssclass("btn_WF_frmSearch");
            this.divMemberInfo.addChild(obj.name, obj);

            obj = new Edit("edtOgdpCd","228","190","90","26",null,null,null,null,null,null,this.divMemberInfo.form);
            obj.set_taborder("4");
            obj.set_readonly("true");
            this.divMemberInfo.addChild(obj.name, obj);

            obj = new Static("Static10_00_00","318","186","5","35",null,null,null,null,null,null,this.divMemberInfo.form);
            obj.set_taborder("35");
            obj.set_text("w8");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divMemberInfo.addChild(obj.name, obj);

            obj = new Static("Static10_00_00_00","349","186","5","35",null,null,null,null,null,null,this.divMemberInfo.form);
            obj.set_taborder("36");
            obj.set_text("w8");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divMemberInfo.addChild(obj.name, obj);

            obj = new Static("staText01","445","50","416","26",null,null,null,null,null,null,this.divMemberInfo.form);
            obj.set_taborder("37");
            obj.set_text("n ~ m자의 영문, 숫자만 사용해 주세요.");
            obj.set_color("darkgray");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.divMemberInfo.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_01_00_00","0",null,null,"25","0","54",null,null,null,null,this.divMemberInfo.form);
            obj.set_taborder("38");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divMemberInfo.addChild(obj.name, obj);

            obj = new Static("sta_g001","904",null,"12","28",null,"26",null,null,null,null,this.divMemberInfo.form);
            obj.set_taborder("39");
            obj.set_text("w12");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divMemberInfo.addChild(obj.name, obj);

            obj = new Button("btnClose","916",null,"65","28",null,"26",null,null,null,null,this.divMemberInfo.form);
            obj.set_text("닫기");
            obj.set_cssclass("");
            obj.set_visible("true");
            obj.set_taborder("10");
            this.divMemberInfo.addChild(obj.name, obj);

            obj = new Button("btnApplication","829",null,"75","28",null,"26",null,null,null,null,this.divMemberInfo.form);
            obj.set_text("수정");
            obj.set_cssclass("btn_WF_icoModify");
            obj.set_taborder("9");
            obj.set_fittocontents("none");
            this.divMemberInfo.addChild(obj.name, obj);

            obj = new Button("btnChangePw","228","155","152","26",null,null,null,null,null,null,this.divMemberInfo.form);
            obj.set_text("비밀번호 변경");
            obj.set_cssclass("btn_WF_icoModify");
            obj.set_taborder("40");
            this.divMemberInfo.addChild(obj.name, obj);

            obj = new Static("staText02","445","260","910","26",null,null,null,null,null,null,this.divMemberInfo.form);
            obj.set_taborder("41");
            obj.set_text("전화번호 양식에 맞추어 입력해주세요. ex) 11 자리 012-3456-7890, 10~9자리 012-345-6789 01-234-5678 02-1234-5678, 8자리 1234-5678, 7자리 123-4567, 4자리 1234");
            obj.set_color("darkgray");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.divMemberInfo.addChild(obj.name, obj);

            obj = new Static("staText03","445","295","471","26",null,null,null,null,null,null,this.divMemberInfo.form);
            obj.set_taborder("42");
            obj.set_text("휴대폰번호 양식에 맞추어 입력해주세요. ex) 11 자리 012-3456-7890, 10자리 012-345-6789");
            obj.set_color("darkgray");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.divMemberInfo.addChild(obj.name, obj);

            obj = new Static("sta009","23","46","25","34",null,null,null,null,null,null,this.divMemberInfo.form);
            obj.set_taborder("43");
            obj.set_text("*");
            obj.set_cssclass("essential");
            obj.set_tooltiptext("필수입력");
            this.divMemberInfo.addChild(obj.name, obj);

            obj = new Static("sta010","23","81","25","34",null,null,null,null,null,null,this.divMemberInfo.form);
            obj.set_taborder("44");
            obj.set_text("*");
            obj.set_cssclass("essential");
            obj.set_tooltiptext("필수입력");
            this.divMemberInfo.addChild(obj.name, obj);

            obj = new Static("sta011","23","116","25","34",null,null,null,null,null,null,this.divMemberInfo.form);
            obj.set_taborder("45");
            obj.set_text("*");
            obj.set_cssclass("essential");
            obj.set_tooltiptext("필수입력");
            this.divMemberInfo.addChild(obj.name, obj);

            obj = new Static("sta012","23","186","25","34",null,null,null,null,null,null,this.divMemberInfo.form);
            obj.set_taborder("46");
            obj.set_text("*");
            obj.set_cssclass("essential");
            obj.set_tooltiptext("필수입력");
            this.divMemberInfo.addChild(obj.name, obj);

            obj = new Static("sta013","23","221","25","34",null,null,null,null,null,null,this.divMemberInfo.form);
            obj.set_taborder("47");
            obj.set_text("*");
            obj.set_cssclass("essential");
            obj.set_tooltiptext("필수입력");
            this.divMemberInfo.addChild(obj.name, obj);

            obj = new Static("sta014","23","256","25","34",null,null,null,null,null,null,this.divMemberInfo.form);
            obj.set_taborder("48");
            obj.set_text("*");
            obj.set_cssclass("essential");
            obj.set_tooltiptext("필수입력");
            this.divMemberInfo.addChild(obj.name, obj);

            obj = new Static("sta015","23","291","25","34",null,null,null,null,null,null,this.divMemberInfo.form);
            obj.set_taborder("49");
            obj.set_text("*");
            obj.set_cssclass("essential");
            obj.set_tooltiptext("필수입력");
            this.divMemberInfo.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_01_00_00","0",null,null,"25","0","31",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Div("divPassConfirm","50","50","1820","405",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_00_00","110","0","60","45",null,null,null,null,null,null,this.divPassConfirm.form);
            obj.set_taborder("0");
            obj.set_text("h 45");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divPassConfirm.addChild(obj.name, obj);

            obj = new Static("staTitle","20","11","250","27",null,null,null,null,null,null,this.divPassConfirm.form);
            obj.set_taborder("3");
            obj.set_text("회원 정보");
            obj.set_cssclass("sta_WF_subTitle01");
            this.divPassConfirm.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_00","20","0","60","18",null,null,null,null,null,null,this.divPassConfirm.form);
            obj.set_taborder("4");
            obj.set_text("h 18");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divPassConfirm.addChild(obj.name, obj);

            obj = new Static("Static07_01_01_00_01_00","708","142","410","1",null,null,null,null,null,null,this.divPassConfirm.form);
            obj.set_taborder("7");
            obj.set_text("");
            obj.set_cssclass("sta_WF_borCondition02");
            this.divPassConfirm.addChild(obj.name, obj);

            obj = new Static("Static10_00","908","143","8","35",null,null,null,null,null,null,this.divPassConfirm.form);
            obj.set_taborder("5");
            obj.set_text("w8");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divPassConfirm.addChild(obj.name, obj);

            obj = new Static("Static10_01",null,"0","20",null,"0","0",null,null,null,null,this.divPassConfirm.form);
            obj.set_taborder("9");
            obj.set_text("w20");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divPassConfirm.addChild(obj.name, obj);

            obj = new Static("sta001","708","143","200","34",null,null,null,null,null,null,this.divPassConfirm.form);
            obj.set_taborder("10");
            obj.set_text("비밀번호");
            obj.set_cssclass("sta_WF_condition02");
            this.divPassConfirm.addChild(obj.name, obj);

            obj = new Static("Static07_01_01_00_01_00_01","708","177","410","1",null,null,null,null,null,null,this.divPassConfirm.form);
            obj.set_taborder("11");
            obj.set_text("");
            obj.set_cssclass("sta_WF_borCondition02");
            this.divPassConfirm.addChild(obj.name, obj);

            obj = new Static("Static10","0","-1","20",null,null,"0",null,null,null,null,this.divPassConfirm.form);
            obj.set_taborder("8");
            obj.set_text("w20");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divPassConfirm.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00","708","142","1","36",null,null,null,null,null,null,this.divPassConfirm.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_borCondition02_v");
            this.divPassConfirm.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_01_00_00","0",null,null,"25","0","54",null,null,null,null,this.divPassConfirm.form);
            obj.set_taborder("12");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divPassConfirm.addChild(obj.name, obj);

            obj = new Static("sta_g001","904",null,"12","28",null,"26",null,null,null,null,this.divPassConfirm.form);
            obj.set_taborder("13");
            obj.set_text("w12");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divPassConfirm.addChild(obj.name, obj);

            obj = new Button("btnClose","916",null,"65","28",null,"26",null,null,null,null,this.divPassConfirm.form);
            obj.set_text("닫기");
            obj.set_cssclass("");
            obj.set_visible("true");
            obj.set_taborder("2");
            this.divPassConfirm.addChild(obj.name, obj);

            obj = new Button("btnConfirm","840",null,"65","28",null,"26",null,null,null,null,this.divPassConfirm.form);
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_icoConfirm");
            obj.set_taborder("1");
            this.divPassConfirm.addChild(obj.name, obj);

            obj = new Edit("edtPasswd","916","147","200","26",null,null,null,null,null,null,this.divPassConfirm.form);
            obj.set_taborder("14");
            obj.set_maxlength("100");
            obj.set_cssclass("essential");
            obj.set_password("true");
            this.divPassConfirm.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divMemberInfo.form
            obj = new Layout("default","",0,0,this.divMemberInfo.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static04_00_00_00_00.set_taborder("0");
                p.Static04_00_00_00_00.set_text("h 45");
                p.Static04_00_00_00_00.set_visible("false");
                p.Static04_00_00_00_00.set_background("aqua");
                p.Static04_00_00_00_00.set_color("blue");
                p.Static04_00_00_00_00.set_textAlign("center");
                p.Static04_00_00_00_00.set_verticalAlign("middle");
                p.Static04_00_00_00_00.set_opacity("0.7");
                p.Static04_00_00_00_00.set_font("normal 12px/normal \"Arial\"");
                p.Static04_00_00_00_00.move("110","0","60","45",null,null);

                p.staTitle.set_taborder("11");
                p.staTitle.set_text("회원 정보");
                p.staTitle.set_cssclass("sta_WF_subTitle01");
                p.staTitle.move("20","11","250","27",null,null);

                p.Static04_00_00_00.set_taborder("12");
                p.Static04_00_00_00.set_text("h 18");
                p.Static04_00_00_00.set_visible("false");
                p.Static04_00_00_00.set_background("aqua");
                p.Static04_00_00_00.set_color("blue");
                p.Static04_00_00_00.set_textAlign("center");
                p.Static04_00_00_00.set_verticalAlign("middle");
                p.Static04_00_00_00.set_opacity("0.7");
                p.Static04_00_00_00.set_font("normal 12px/normal \"Arial\"");
                p.Static04_00_00_00.move("20","0","60","18",null,null);

                p.Static07_01_01_00_00.set_taborder("13");
                p.Static07_01_01_00_00.set_text("");
                p.Static07_01_01_00_00.set_cssclass("sta_WF_borCondition02");
                p.Static07_01_01_00_00.move("20","45",null,"1","20",null);

                p.sta001.set_taborder("14");
                p.sta001.set_text("회원 ID");
                p.sta001.set_cssclass("sta_WF_condition02");
                p.sta001.move("20","46","200","34",null,null);

                p.edtMemberId.set_taborder("1");
                p.edtMemberId.set_cssclass("essential");
                p.edtMemberId.set_enable("false");
                p.edtMemberId.move("228","50","200","26",null,null);

                p.Static07_01_01_00.set_taborder("16");
                p.Static07_01_01_00.set_text("");
                p.Static07_01_01_00.set_cssclass("sta_WF_borCondition02");
                p.Static07_01_01_00.move("20","80",null,"1","20",null);

                p.sta002.set_taborder("17");
                p.sta002.set_text("회원명(한글)");
                p.sta002.set_cssclass("sta_WF_condition02");
                p.sta002.move("20","81","200","34",null,null);

                p.sta003.set_taborder("18");
                p.sta003.set_text("회원명(영문)");
                p.sta003.set_cssclass("sta_WF_condition02");
                p.sta003.move("20","116","200","34",null,null);

                p.Static07_01_01_00_01.set_taborder("20");
                p.Static07_01_01_00_01.set_text("");
                p.Static07_01_01_00_01.set_cssclass("sta_WF_borCondition02");
                p.Static07_01_01_00_01.move("20","115",null,"1","20",null);

                p.Static07_01_01_00_01_00.set_taborder("21");
                p.Static07_01_01_00_01_00.set_text("");
                p.Static07_01_01_00_01_00.set_cssclass("sta_WF_borCondition02");
                p.Static07_01_01_00_01_00.move("20","150",null,"1","20",null);

                p.Static10_00.set_taborder("15");
                p.Static10_00.set_text("w8");
                p.Static10_00.set_visible("false");
                p.Static10_00.set_background("fuchsia");
                p.Static10_00.set_color("blue");
                p.Static10_00.set_textAlign("center");
                p.Static10_00.set_verticalAlign("middle");
                p.Static10_00.set_opacity("0.7");
                p.Static10_00.set_font("normal 12px/normal \"Arial\"");
                p.Static10_00.move("220","46","8",null,null,"80");

                p.Static10_01.set_taborder("23");
                p.Static10_01.set_text("w20");
                p.Static10_01.set_visible("false");
                p.Static10_01.set_background("fuchsia");
                p.Static10_01.set_color("blue");
                p.Static10_01.set_textAlign("center");
                p.Static10_01.set_verticalAlign("middle");
                p.Static10_01.set_opacity("0.7");
                p.Static10_01.set_font("normal 12px/normal \"Arial\"");
                p.Static10_01.move(null,"0","20",null,"0","0");

                p.Static07_01_01_00_01_01.set_taborder("24");
                p.Static07_01_01_00_01_01.set_text("");
                p.Static07_01_01_00_01_01.set_cssclass("sta_WF_borCondition02");
                p.Static07_01_01_00_01_01.move("20","325",null,"1","20",null);

                p.sta008.set_taborder("25");
                p.sta008.set_text("휴대폰 전화번호");
                p.sta008.set_cssclass("sta_WF_condition02");
                p.sta008.move("20","291","200","34",null,null);

                p.edtMemberNmEng.set_taborder("3");
                p.edtMemberNmEng.set_cssclass("essential");
                p.edtMemberNmEng.set_inputtype("english");
                p.edtMemberNmEng.set_inputfilter("space,symbol");
                p.edtMemberNmEng.set_imemode("alpha");
                p.edtMemberNmEng.move("228","120","200","26",null,null);

                p.sta004.set_taborder("26");
                p.sta004.set_text("비밀번호");
                p.sta004.set_cssclass("sta_WF_condition02");
                p.sta004.move("20","151","200","34",null,null);

                p.Static07_01_01_00_01_00_01.set_taborder("27");
                p.Static07_01_01_00_01_00_01.set_text("");
                p.Static07_01_01_00_01_00_01.set_cssclass("sta_WF_borCondition02");
                p.Static07_01_01_00_01_00_01.move("20","185",null,"1","20",null);

                p.sta005.set_taborder("28");
                p.sta005.set_text("소속기관");
                p.sta005.set_cssclass("sta_WF_condition02");
                p.sta005.move("20","186","200","34",null,null);

                p.edtOgdpInstNm.set_taborder("5");
                p.edtOgdpInstNm.set_cssclass("essential");
                p.edtOgdpInstNm.move("354","190","200","26",null,null);

                p.Static07_01_01_01_01.set_taborder("29");
                p.Static07_01_01_01_01.set_text("");
                p.Static07_01_01_01_01.set_cssclass("sta_WF_borCondition02");
                p.Static07_01_01_01_01.move("20","220",null,"1","20",null);

                p.sta006.set_taborder("30");
                p.sta006.set_text("이메일주소");
                p.sta006.set_cssclass("sta_WF_condition02");
                p.sta006.move("20","221","200","34",null,null);

                p.edtEmail.set_taborder("6");
                p.edtEmail.set_cssclass("essential");
                p.edtEmail.move("228","225","326","26",null,null);

                p.Static07_01_01_01_01_00.set_taborder("31");
                p.Static07_01_01_01_01_00.set_text("");
                p.Static07_01_01_01_01_00.set_cssclass("sta_WF_borCondition02");
                p.Static07_01_01_01_01_00.move("20","255",null,"1","20",null);

                p.sta007.set_taborder("32");
                p.sta007.set_text("사무실 전화번호");
                p.sta007.set_cssclass("sta_WF_condition02");
                p.sta007.move("20","256","200","34",null,null);

                p.edtOfcNo.set_taborder("7");
                p.edtOfcNo.set_cssclass("essential");
                p.edtOfcNo.move("228","260","200","26",null,null);

                p.Static07_01_01_01_01_00_00.set_taborder("33");
                p.Static07_01_01_01_01_00_00.set_text("");
                p.Static07_01_01_01_01_00_00.set_cssclass("sta_WF_borCondition02");
                p.Static07_01_01_01_01_00_00.move("20","290",null,"1","20",null);

                p.Static10.set_taborder("22");
                p.Static10.set_text("w20");
                p.Static10.set_visible("false");
                p.Static10.set_background("fuchsia");
                p.Static10.set_color("blue");
                p.Static10.set_textAlign("center");
                p.Static10.set_verticalAlign("middle");
                p.Static10.set_opacity("0.7");
                p.Static10.set_font("normal 12px/normal \"Arial\"");
                p.Static10.move("0","-1","20",null,null,"0");

                p.Static07_00_00_00.set_taborder("19");
                p.Static07_00_00_00.set_cssclass("sta_WF_borCondition02_v");
                p.Static07_00_00_00.move("19","45","1","281",null,null);

                p.edtMemberNmKr.set_taborder("2");
                p.edtMemberNmKr.set_cssclass("essential");
                p.edtMemberNmKr.set_imemode("hangul");
                p.edtMemberNmKr.set_inputfilter("space,symbol");
                p.edtMemberNmKr.move("228","85","200","26",null,null);

                p.edtTelNo.set_taborder("8");
                p.edtTelNo.set_cssclass("essential");
                p.edtTelNo.move("228","295","200","26",null,null);

                p.btnInsttNm.set_taborder("34");
                p.btnInsttNm.set_cssclass("btn_WF_frmSearch");
                p.btnInsttNm.move("323","190","26","26",null,null);

                p.edtOgdpCd.set_taborder("4");
                p.edtOgdpCd.set_readonly("true");
                p.edtOgdpCd.move("228","190","90","26",null,null);

                p.Static10_00_00.set_taborder("35");
                p.Static10_00_00.set_text("w8");
                p.Static10_00_00.set_visible("false");
                p.Static10_00_00.set_background("fuchsia");
                p.Static10_00_00.set_color("blue");
                p.Static10_00_00.set_textAlign("center");
                p.Static10_00_00.set_verticalAlign("middle");
                p.Static10_00_00.set_opacity("0.7");
                p.Static10_00_00.set_font("normal 12px/normal \"Arial\"");
                p.Static10_00_00.move("318","186","5","35",null,null);

                p.Static10_00_00_00.set_taborder("36");
                p.Static10_00_00_00.set_text("w8");
                p.Static10_00_00_00.set_visible("false");
                p.Static10_00_00_00.set_background("fuchsia");
                p.Static10_00_00_00.set_color("blue");
                p.Static10_00_00_00.set_textAlign("center");
                p.Static10_00_00_00.set_verticalAlign("middle");
                p.Static10_00_00_00.set_opacity("0.7");
                p.Static10_00_00_00.set_font("normal 12px/normal \"Arial\"");
                p.Static10_00_00_00.move("349","186","5","35",null,null);

                p.staText01.set_taborder("37");
                p.staText01.set_text("n ~ m자의 영문, 숫자만 사용해 주세요.");
                p.staText01.set_color("darkgray");
                p.staText01.set_font("normal 8pt/normal \"Arial\"");
                p.staText01.move("445","50","416","26",null,null);

                p.Static04_00_00_01_00_00.set_taborder("38");
                p.Static04_00_00_01_00_00.set_text("h 25");
                p.Static04_00_00_01_00_00.set_visible("false");
                p.Static04_00_00_01_00_00.set_background("aqua");
                p.Static04_00_00_01_00_00.set_color("blue");
                p.Static04_00_00_01_00_00.set_textAlign("center");
                p.Static04_00_00_01_00_00.set_verticalAlign("middle");
                p.Static04_00_00_01_00_00.set_opacity("0.7");
                p.Static04_00_00_01_00_00.set_font("normal 12px/normal \"Arial\"");
                p.Static04_00_00_01_00_00.move("0",null,null,"25","0","54");

                p.sta_g001.set_taborder("39");
                p.sta_g001.set_text("w12");
                p.sta_g001.set_visible("false");
                p.sta_g001.set_background("fuchsia");
                p.sta_g001.set_color("blue");
                p.sta_g001.set_textAlign("center");
                p.sta_g001.set_verticalAlign("middle");
                p.sta_g001.set_opacity("0.7");
                p.sta_g001.set_font("normal 12px/normal \"Arial\"");
                p.sta_g001.move("904",null,"12","28",null,"26");

                p.btnClose.set_text("닫기");
                p.btnClose.set_cssclass("");
                p.btnClose.set_visible("true");
                p.btnClose.set_taborder("10");
                p.btnClose.move("916",null,"65","28",null,"26");

                p.btnApplication.set_text("수정");
                p.btnApplication.set_cssclass("btn_WF_icoModify");
                p.btnApplication.set_taborder("9");
                p.btnApplication.set_fittocontents("none");
                p.btnApplication.move("829",null,"75","28",null,"26");

                p.btnChangePw.set_text("비밀번호 변경");
                p.btnChangePw.set_cssclass("btn_WF_icoModify");
                p.btnChangePw.set_taborder("40");
                p.btnChangePw.move("228","155","152","26",null,null);

                p.staText02.set_taborder("41");
                p.staText02.set_text("전화번호 양식에 맞추어 입력해주세요. ex) 11 자리 012-3456-7890, 10~9자리 012-345-6789 01-234-5678 02-1234-5678, 8자리 1234-5678, 7자리 123-4567, 4자리 1234");
                p.staText02.set_color("darkgray");
                p.staText02.set_font("normal 8pt/normal \"Arial\"");
                p.staText02.move("445","260","910","26",null,null);

                p.staText03.set_taborder("42");
                p.staText03.set_text("휴대폰번호 양식에 맞추어 입력해주세요. ex) 11 자리 012-3456-7890, 10자리 012-345-6789");
                p.staText03.set_color("darkgray");
                p.staText03.set_font("normal 8pt/normal \"Arial\"");
                p.staText03.move("445","295","471","26",null,null);

                p.sta009.set_taborder("43");
                p.sta009.set_text("*");
                p.sta009.set_cssclass("essential");
                p.sta009.set_tooltiptext("필수입력");
                p.sta009.move("23","46","25","34",null,null);

                p.sta010.set_taborder("44");
                p.sta010.set_text("*");
                p.sta010.set_cssclass("essential");
                p.sta010.set_tooltiptext("필수입력");
                p.sta010.move("23","81","25","34",null,null);

                p.sta011.set_taborder("45");
                p.sta011.set_text("*");
                p.sta011.set_cssclass("essential");
                p.sta011.set_tooltiptext("필수입력");
                p.sta011.move("23","116","25","34",null,null);

                p.sta012.set_taborder("46");
                p.sta012.set_text("*");
                p.sta012.set_cssclass("essential");
                p.sta012.set_tooltiptext("필수입력");
                p.sta012.move("23","186","25","34",null,null);

                p.sta013.set_taborder("47");
                p.sta013.set_text("*");
                p.sta013.set_cssclass("essential");
                p.sta013.set_tooltiptext("필수입력");
                p.sta013.move("23","221","25","34",null,null);

                p.sta014.set_taborder("48");
                p.sta014.set_text("*");
                p.sta014.set_cssclass("essential");
                p.sta014.set_tooltiptext("필수입력");
                p.sta014.move("23","256","25","34",null,null);

                p.sta015.set_taborder("49");
                p.sta015.set_text("*");
                p.sta015.set_cssclass("essential");
                p.sta015.set_tooltiptext("필수입력");
                p.sta015.move("23","291","25","34",null,null);
            	}
            );
            this.divMemberInfo.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divMemberInfo.form
            obj = new Layout("screen00","",0,0,this.divMemberInfo.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divMemberInfo.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divPassConfirm.form
            obj = new Layout("default","",0,0,this.divPassConfirm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static04_00_00_00_00.set_taborder("0");
                p.Static04_00_00_00_00.set_text("h 45");
                p.Static04_00_00_00_00.set_visible("false");
                p.Static04_00_00_00_00.set_background("aqua");
                p.Static04_00_00_00_00.set_color("blue");
                p.Static04_00_00_00_00.set_textAlign("center");
                p.Static04_00_00_00_00.set_verticalAlign("middle");
                p.Static04_00_00_00_00.set_opacity("0.7");
                p.Static04_00_00_00_00.set_font("normal 12px/normal \"Arial\"");
                p.Static04_00_00_00_00.move("110","0","60","45",null,null);

                p.staTitle.set_taborder("3");
                p.staTitle.set_text("회원 정보");
                p.staTitle.set_cssclass("sta_WF_subTitle01");
                p.staTitle.move("20","11","250","27",null,null);

                p.Static04_00_00_00.set_taborder("4");
                p.Static04_00_00_00.set_text("h 18");
                p.Static04_00_00_00.set_visible("false");
                p.Static04_00_00_00.set_background("aqua");
                p.Static04_00_00_00.set_color("blue");
                p.Static04_00_00_00.set_textAlign("center");
                p.Static04_00_00_00.set_verticalAlign("middle");
                p.Static04_00_00_00.set_opacity("0.7");
                p.Static04_00_00_00.set_font("normal 12px/normal \"Arial\"");
                p.Static04_00_00_00.move("20","0","60","18",null,null);

                p.Static07_01_01_00_01_00.set_taborder("7");
                p.Static07_01_01_00_01_00.set_text("");
                p.Static07_01_01_00_01_00.set_cssclass("sta_WF_borCondition02");
                p.Static07_01_01_00_01_00.move("708","142","410","1",null,null);

                p.Static10_00.set_taborder("5");
                p.Static10_00.set_text("w8");
                p.Static10_00.set_visible("false");
                p.Static10_00.set_background("fuchsia");
                p.Static10_00.set_color("blue");
                p.Static10_00.set_textAlign("center");
                p.Static10_00.set_verticalAlign("middle");
                p.Static10_00.set_opacity("0.7");
                p.Static10_00.set_font("normal 12px/normal \"Arial\"");
                p.Static10_00.move("908","143","8","35",null,null);

                p.Static10_01.set_taborder("9");
                p.Static10_01.set_text("w20");
                p.Static10_01.set_visible("false");
                p.Static10_01.set_background("fuchsia");
                p.Static10_01.set_color("blue");
                p.Static10_01.set_textAlign("center");
                p.Static10_01.set_verticalAlign("middle");
                p.Static10_01.set_opacity("0.7");
                p.Static10_01.set_font("normal 12px/normal \"Arial\"");
                p.Static10_01.move(null,"0","20",null,"0","0");

                p.sta001.set_taborder("10");
                p.sta001.set_text("비밀번호");
                p.sta001.set_cssclass("sta_WF_condition02");
                p.sta001.move("708","143","200","34",null,null);

                p.Static07_01_01_00_01_00_01.set_taborder("11");
                p.Static07_01_01_00_01_00_01.set_text("");
                p.Static07_01_01_00_01_00_01.set_cssclass("sta_WF_borCondition02");
                p.Static07_01_01_00_01_00_01.move("708","177","410","1",null,null);

                p.Static10.set_taborder("8");
                p.Static10.set_text("w20");
                p.Static10.set_visible("false");
                p.Static10.set_background("fuchsia");
                p.Static10.set_color("blue");
                p.Static10.set_textAlign("center");
                p.Static10.set_verticalAlign("middle");
                p.Static10.set_opacity("0.7");
                p.Static10.set_font("normal 12px/normal \"Arial\"");
                p.Static10.move("0","-1","20",null,null,"0");

                p.Static07_00_00_00.set_taborder("6");
                p.Static07_00_00_00.set_cssclass("sta_WF_borCondition02_v");
                p.Static07_00_00_00.move("708","142","1","36",null,null);

                p.Static04_00_00_01_00_00.set_taborder("12");
                p.Static04_00_00_01_00_00.set_text("h 25");
                p.Static04_00_00_01_00_00.set_visible("false");
                p.Static04_00_00_01_00_00.set_background("aqua");
                p.Static04_00_00_01_00_00.set_color("blue");
                p.Static04_00_00_01_00_00.set_textAlign("center");
                p.Static04_00_00_01_00_00.set_verticalAlign("middle");
                p.Static04_00_00_01_00_00.set_opacity("0.7");
                p.Static04_00_00_01_00_00.set_font("normal 12px/normal \"Arial\"");
                p.Static04_00_00_01_00_00.move("0",null,null,"25","0","54");

                p.sta_g001.set_taborder("13");
                p.sta_g001.set_text("w12");
                p.sta_g001.set_visible("false");
                p.sta_g001.set_background("fuchsia");
                p.sta_g001.set_color("blue");
                p.sta_g001.set_textAlign("center");
                p.sta_g001.set_verticalAlign("middle");
                p.sta_g001.set_opacity("0.7");
                p.sta_g001.set_font("normal 12px/normal \"Arial\"");
                p.sta_g001.move("904",null,"12","28",null,"26");

                p.btnClose.set_text("닫기");
                p.btnClose.set_cssclass("");
                p.btnClose.set_visible("true");
                p.btnClose.set_taborder("2");
                p.btnClose.move("916",null,"65","28",null,"26");

                p.btnConfirm.set_text("확인");
                p.btnConfirm.set_cssclass("btn_WF_icoConfirm");
                p.btnConfirm.set_taborder("1");
                p.btnConfirm.move("840",null,"65","28",null,"26");

                p.edtPasswd.set_taborder("14");
                p.edtPasswd.set_maxlength("100");
                p.edtPasswd.set_cssclass("essential");
                p.edtPasswd.set_password("true");
                p.edtPasswd.move("916","147","200","26",null,null);
            	}
            );
            this.divPassConfirm.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divPassConfirm.form
            obj = new Layout("screen00","",0,0,this.divPassConfirm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divPassConfirm.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1920,485,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_cssclass("frm_WF_comp");
                p.set_titletext("회원정보 수정");

                p.staTitle.set_taborder("0");
                p.staTitle.set_text("회원정보 수정");
                p.staTitle.set_cssclass("sta_WF_compTitle01");
                p.staTitle.move("50","10","500","30",null,null);

                p.divMemberInfo.set_taborder("1");
                p.divMemberInfo.set_text("");
                p.divMemberInfo.set_enable("true");
                p.divMemberInfo.set_visible("false");
                p.divMemberInfo.move("50","50",null,null,"50","30");

                p.Static04_00_00_01_00_00.set_taborder("2");
                p.Static04_00_00_01_00_00.set_text("h 25");
                p.Static04_00_00_01_00_00.set_visible("false");
                p.Static04_00_00_01_00_00.set_background("aqua");
                p.Static04_00_00_01_00_00.set_color("blue");
                p.Static04_00_00_01_00_00.set_textAlign("center");
                p.Static04_00_00_01_00_00.set_verticalAlign("middle");
                p.Static04_00_00_01_00_00.set_opacity("0.7");
                p.Static04_00_00_01_00_00.set_font("normal 12px/normal \"Arial\"");
                p.Static04_00_00_01_00_00.move("0",null,null,"25","0","31");

                p.divPassConfirm.set_taborder("3");
                p.divPassConfirm.set_text("");
                p.divPassConfirm.set_visible("true");
                p.divPassConfirm.move("50","50","1820","405",null,null);
            	}
            );
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("screen00","",1280,670,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divMemberInfo.form.edtMemberId","value","dsUserInfo","memberId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divMemberInfo.form.edtMemberNmKr","value","dsUserInfo","memberNmKr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divMemberInfo.form.edtMemberNmEng","value","dsUserInfo","memberNmEn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divMemberInfo.form.edtOgdpCd","value","dsUserInfo","ogdpInstCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divMemberInfo.form.edtOgdpInstNm","value","dsUserInfo","ogdpInstNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divMemberInfo.form.edtEmail","value","dsUserInfo","emlAddr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divMemberInfo.form.edtOfcNo","value","dsUserInfo","ofcTelno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divMemberInfo.form.edtTelNo","value","dsUserInfo","mblTelno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divPopup.form.divForm.form.edt_001_00","value","dsUserInfo","passwd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divPopup.form.divForm.form.edt_001_00_00","value","dsUserInfo","passwd2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","divMemberInfo.form.MaskEditOfcTel","value","dsUserInfo","ofcTelno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","divMemberInfo.form.MaskEditMblTel","value","dsUserInfo","mblTelno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divPassConfirm.form.edtPasswd","value","dsUserInfo","oldPasswd");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("CMS_1020M.xfdl","lib::common.xjs");
        this.registerScript("CMS_1020M.xfdl", function() {
        /**
        *  messageManage
        *  MenuPath      -
        *  FileName      myMemberManage.xfdl
        *  Creator 	     cheonsy
        *  CreateDate    2023.03.28
        *  Desction      회원정보 수정
        ************** 소스 수정 이력 ***********************************************
        *  date          Modifier    Description
        *******************************************************************************
        *  2023.03.28    cheonsy 	 최초 생성
        *******************************************************************************/
        this.executeIncludeScript("lib::common.xjs"); /*include "lib::common.xjs"*/;
        // 아이디 자릿수 설정 5 ~ 19
        var min = 5;
        var max = 19;
        /***********************************************************************************************
        * FORM EVENT 영역(onload, onbeforeclose)
        /***********************************************************************************************/
        /**
         * description 화면 onload
        */
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnLoad(this);
        	this.divMemberInfo.form.staText01.set_text(min + ' ~ ' + max + '자의 영문, 숫자만 사용해 주세요.');
        };

        /************************************************************************************************
        * TRANSACTION 서비스 호출 처리
        ************************************************************************************************/
        /**
         * description 확인
        */
        this.fnConfirm = function(nPageNo)
        {
        	this.gfnTransaction("confirmPw", "cms/confirmPw.do", "dsUserInfo", "", "", "fnCallBack");
        };

        /**
         * description 조회
        */
        this.fnSearch = function()
        {
        	this.gfnTransaction("srchUserInfo", "cms/srchUserInfo.do", "", "dsUserInfo", "", "fnCallBack");
        };

        /**
         * description 저장
        */
        this.fnSave = function()
        {
        	this.gfnTransaction("updateUserInfo", "cms/updateUserInfo.do", "dsUserInfo", "", "", "fnCallBack");
        };

        /************************************************************************************************
         * CALLBACK 콜백 처리부분(Transaction, Popup)
         ************************************************************************************************/
        /**
         * description Transaction CallBack 함수
        */
        this.fnCallBack = function (sSvcId, nErrorCode, sErrorMsg)
        {
        	switch (sSvcId) {
        		case "confirmPw":
        			if(this.callbackMsg == "success"){
        				this.divPassConfirm.set_visible(false);
        				this.divMemberInfo.set_visible(true);
        				this.fnSearch();
        			}else{
        				this.gfnAlert("비밀번호가 일치하지 않습니다.");
        			}
        		break;
        		case "srchUserInfo":
        			this.fnChangeFomat();
        		break;
        		case "updateUserInfo":
        			if(this.callbackMsg == "success"){
        				this.gfnAlert("회원정보 수정이 완료되었습니다.");
        				this.dsUserInfo.clearData();
        				this.dsUserInfo.addRow();
        			}else{
        				this.gfnAlert("CM_MSG_TEST_3");  // 저장에 실패하였습니다.
        			}
        		break;
        		default:
        		break;
        	}
        };

        /**
         * description Popup CallBack 함수
        */
        this.fnPopupAfter = function (sPopupId, vArg)
        {
        	console.log('fnPopupAfter: ', sPopupId, ' || ', vArg);
        	switch(sPopupId){
        		case "memberInsttPopup":	// 소속기관 조회 팝업
        			var oRtn = this.gfnGetPopupRtn();
        			if(oRtn){
        				console.log('oRtn : ',  oRtn);
        				console.log('oRtn.CONFIRM : ',  oRtn.CONFIRM);
        			}
        		break;
        		case "myMemberManagePopup":	// 비밀번호 변경 팝업
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
         * description 회원정보 수정 화면 진입(확인버튼)
        */
        this.divPassConfirm_btnConfirm_onclick = function(obj,e)
        {
        	this.fnConfirm();
        };

        /**
         * description 회원정보 수정 화면 엔터키 이벤트
        */
        this.divPassConfirm_edtPasswd_onkeyup = function(obj,e)
        {
        	if(e.keycode==13){
        		this.divPassConfirm_btnConfirm_onclick();
        	}
        };

        /**
         * description 저장버튼 클릭
        */
        this.divMemberInfo_btnApplication_onclick = function(obj,e)
        {
        	if (!this.fnNullValidation()) {// null 체크
        		return;
            }

        	if (!this.fnEmailValidation()) {// 이메일 형식 체크
        		this.gfnAlert("이메일 형식을 확인해주세요.");
        		return;
            }

        	if (!this.fnOfficeValidation()) {// 전화번호 체크
        		this.gfnAlert("전화번호 양식을 확인해주세요.");
        		return;
            }

        	if (!this.fnHpValidation()) {// 핸드폰번호 체크
        		this.gfnAlert("휴대폰 전화번호 양식을 확인해주세요.");
        		return;
            }
        	this.fnSave();
        };

        /**
         * description 비밀번호 변경 버튼클릭
        */
        this.divMemberInfo_btnChangePw_onclick = function(obj,e)
        {
        	var oArg = {  memberId : this.dsUserInfo.getColumn(0, "memberId")
        				, mbrNo: this.dsUserInfo.getColumn(0, "mbrNo")};

        	this.gfnOpenPopup("myMemberManagePopup", "sys::cms/CMS_1020P.xfdl", oArg, "fnPopupAfter", "");
        };

        /**
         * description 소속기관 조회 버튼클릭
        */
        this.divMemberInfo_btnInsttNm_onclick = function(obj,e)
        {
        	this.gfnOpenPopup("memberInsttPopup", "sys::cms/CMS_1010P.xfdl", "", "fnPopupAfter", "");
        };

        /**
         * description 닫기버튼 클릭
        */
        this.divMemberInfo_btnClose_onclick = function(obj,e)
        {

        };

        /************************************************************************************************
        * 사용자 FUNCTION 영역
        ************************************************************************************************/
        /**
         * description generate multi language Excel
        */
        this.btnExportCompML_onclick = function(obj,e)
        {
        	// generate multi language Excel
        	this.gfnGenerateML(this);
        	this.gfnGenerateMLExcel();
        };

        /**
         * description null값 체크
        */
        this.fnNullValidation = function ()
        {
        	// null값 체크
        	if(this.gfnIsNull(this.dsUserInfo.getColumn(0, "memberNmKr"))) {
        		this.gfnAlert("회원명(한글)을 입력해주세요.");
        		return false;
            }
        	if(this.gfnIsNull(this.dsUserInfo.getColumn(0, "memberNmEn"))) {
        		this.gfnAlert("회원명(영문)을 입력해주세요.");
        		return false;
            }
        	if(this.gfnIsNull(this.dsUserInfo.getColumn(0, "ogdpInstNm"))) {
        		this.gfnAlert("소속기관명을 입력해주세요.");
        		return false;
            }
        	if(this.gfnIsNull(this.dsUserInfo.getColumn(0, "emlAddr"))) {
        		this.gfnAlert("이메일을 입력해주세요.");
        		return false;
            }
        	if(this.gfnIsNull(this.dsUserInfo.getColumn(0, "ofcTelno"))) {
        		this.gfnAlert("사무실 전화번호를 입력해주세요.");
        		return false;
            }
        	if(this.gfnIsNull(this.dsUserInfo.getColumn(0, "mblTelno"))) {
        		this.gfnAlert("휴대폰 전화번호를 입력해주세요.");
        		return false;
            }
        	return true;
        };

        /**
         * description 이메일 체크
        */
        this.fnEmailValidation = function()
        {
        	var email = this.dsUserInfo.getColumn(0, "emlAddr");
        	var vChk = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890-._@";
            var i, pos, vEmailFirst, vEmailLast;

            if (this.fnCheckNull(email))
            {
                return false;
            }

            for (var i = 0 ; i < email.length ; i++)
            {
                if (vChk.indexOf(email.charAt(i)) < 0)
                {
                    return false;
                }
            }

            pos = this.fnPos(email, "@");

            if (pos < 0)
            {
                return false;
            }

            vEmailFirst = email.substr(0, pos);
            vEmailLast  = email.substr(pos+1);

            if (vEmailFirst.length <= 0 || vEmailLast.length <= 0)
            {
                return false;
            }

            if (this.fnPos(vEmailLast, ".") <= 0
             || this.fnPos(vEmailLast, "..") >= 0
             || this.fnRight(vEmailLast, 1) == ".")
            {
                return false;
            }

            if (this.fnPos(vEmailLast, "@") >= 0)
            {
                return false;
            }

            return true;

        }

        this.fnCheckNull = function(sValue)
        {
            if (String(sValue).valueOf() == "undefined")
            {
                return true;
            }

            if (sValue == null)
            {
                return true;
            }

            if (("x"+sValue == "xNaN") && ( new String(sValue.length).valueOf() == "undefined" ))
            {
                return true;
            }

            if (sValue.length == 0)
            {
                return true;
            }

            return false;
        }

        this.fnPos = function(sOrg, sFind, nStart)
        {
            if (this.fnCheckNull(sOrg) || this.fnCheckNull(sFind))
            {
                return -1;
            }

            if (this.fnCheckNull(nStart))
            {
                nStart = 0;
            }

            return sOrg.indexOf(sFind, nStart);
        }

        this.fnRight = function(sOrg, nSize)
        {
            if (this.fnCheckNull(sOrg) || this.fnCheckNull(nSize))
            {
                return "";
            }

            if (sOrg.length < nSize)
            {
                return sOrg;
            }
            else
            {
                return sOrg.substr(sOrg.length-nSize, nSize);
            }
        }

        /**
         * description 전화번호 체크
        */
        this.fnOfficeValidation = function ()
        {
        	//11 자리 012-3456-7890, 10~9자리 012-345-6789 01-234-5678 02-1234-5678, 8자리 1234-5678, 7자리 123-4567, 4자리 1234
        	var ofcTelno = this.dsUserInfo.getColumn(0, "ofcTelno");
        	var ofcPhone = ofcTelno.trim();

        	var match = ofcPhone.match(/^\d{2,3}-\d{3,4}-\d{4}$/);
        	var match2 = ofcPhone.match(/^\d{4}-\d{4}$/);
        	var match3 = ofcPhone.match(/^\d{3}-\d{4}$/);
        	var match4 = ofcPhone.match(/^\d{4}$/);

        	if(match == null && match2 == null && match3 == null && match4 == null){
        		return false;
        	} else{
        		return true;
        	}
        }

        /**
         * description 핸드폰번호 체크
        */
        this.fnHpValidation = function ()
        {
        	//11 자리 012-3456-7890, 10자리 012-345-6789
        	var mblTelno = this.dsUserInfo.getColumn(0, "mblTelno");
            var phone = mblTelno.trim();

        	var match = phone.match(/^01([0|1|6|7|8|9]?)-?([0-9]{3,4})-?([0-9]{4})$/);

        	if(match == null){
        		return false;
        	} else{
        		return true;
        	}
        }

        /**
         * description 전화번호/핸드폰번호 포맷 변경
        */
        this.fnChangeFomat = function ()
        {
        	var ofcTelno = this.dsUserInfo.getColumn(0, "ofcTelno");
        	var mblTelno = this.dsUserInfo.getColumn(0, "mblTelno");
        	var ofcLength = ofcTelno.length;
        	var mblLength = mblTelno.length;
        	var a = 0;
        	var b = 0;

        	if(ofcLength == 7){	// ex) 720-0000
        		a = ofcTelno.substr(0,3) +"-"+ ofcTelno.substr(3,4);
        	}else if(ofcLength == 8){	// ex) 1588-0000
        		a = ofcTelno.substr(0,4) +"-"+ ofcTelno.substr(4,4);
        	}else if(ofcLength == 9){	// ex) 02-720-0000
        		a = ofcTelno.substr(0,2) +"-"+ ofcTelno.substr(2,3) + "-" + ofcTelno.substr(5,4);
        	}else if(ofcLength == 10){	// ex) 051-720-0000 || 02-0000-0000
        		if(ofcTelno.substr(0,2) == 02){	// 02-0000-0000
        			a = ofcTelno.substr(0,2) +"-"+ ofcTelno.substr(2,4) + "-" + ofcTelno.substr(6,4);
        		}else{	// 051-720-0000
        			a = ofcTelno.substr(0,3) +"-"+ ofcTelno.substr(3,3) + "-" + ofcTelno.substr(6,4);
        		}
        	}else if(ofcLength == 11){	// ex) 010-0000-0000
        		a = ofcTelno.substr(0,3) +"-"+ ofcTelno.substr(3,4) + "-" + ofcTelno.substr(7,4);
        	}else{	// ex) 1541, etc...
        		a = ofcTelno;
        	}

        	if(mblLength == 10){	// ex) 011-111-1111
        		b = mblTelno.substr(0,3) +"-"+ mblTelno.substr(3,3) + "-" + mblTelno.substr(6,4);
        	}else if(mblLength == 11){	// ex) 010-1111-1111
        		b = mblTelno.substr(0,3) +"-"+ mblTelno.substr(3,4) + "-" + mblTelno.substr(7,4);
        	}else{
        		b = mblTelno;
        	}

        	this.dsUserInfo.setColumn(0, "ofcTelno", a);
        	this.dsUserInfo.setColumn(0, "mblTelno", b);

        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divMemberInfo.form.Static04_00_00_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.divMemberInfo.form.staTitle.addEventHandler("onclick",this.Static09_onclick,this);
            this.divMemberInfo.form.Static04_00_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.divMemberInfo.form.Static07_01_01_00_00.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.divMemberInfo.form.Static07_01_01_00.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.divMemberInfo.form.Static07_01_01_00_01.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.divMemberInfo.form.Static07_01_01_00_01_00.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.divMemberInfo.form.Static07_01_01_00_01_01.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.divMemberInfo.form.Static07_01_01_00_01_00_01.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.divMemberInfo.form.Static07_01_01_01_01.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.divMemberInfo.form.Static07_01_01_01_01_00.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.divMemberInfo.form.Static07_01_01_01_01_00_00.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.divMemberInfo.form.Static07_00_00_00.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.divMemberInfo.form.btnInsttNm.addEventHandler("onclick",this.divMemberInfo_btnInsttNm_onclick,this);
            this.divMemberInfo.form.Static04_00_00_01_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.divMemberInfo.form.btnClose.addEventHandler("onclick",this.divMemberInfo_btnClose_onclick,this);
            this.divMemberInfo.form.btnApplication.addEventHandler("onclick",this.divMemberInfo_btnApplication_onclick,this);
            this.divMemberInfo.form.btnChangePw.addEventHandler("onclick",this.divMemberInfo_btnChangePw_onclick,this);
            this.Static04_00_00_01_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.divPassConfirm.form.Static04_00_00_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.divPassConfirm.form.Static04_00_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.divPassConfirm.form.Static07_01_01_00_01_00.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.divPassConfirm.form.Static07_01_01_00_01_00_01.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.divPassConfirm.form.Static07_00_00_00.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.divPassConfirm.form.Static04_00_00_01_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.divPassConfirm.form.btnClose.addEventHandler("onclick",this.divMemberInfo_btnClose_onclick,this);
            this.divPassConfirm.form.btnConfirm.addEventHandler("onclick",this.divPassConfirm_btnConfirm_onclick,this);
            this.divPassConfirm.form.edtPasswd.addEventHandler("onkeyup",this.divPassConfirm_edtPasswd_onkeyup,this);
        };
        this.loadIncludeScript("CMS_1020M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
