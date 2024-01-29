(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CMS_1010M");
            this.set_cssclass("frm_WF_comp");
            this.set_titletext("회원가입");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,670);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsUserInfo", this);
            obj.set_updatecontrol("true");
            obj._setContents("<ColumnInfo><Column id=\"memberId\" type=\"STRING\" size=\"256\"/><Column id=\"memberNmKr\" type=\"STRING\" size=\"256\"/><Column id=\"memberNmEn\" type=\"STRING\" size=\"256\"/><Column id=\"passwd\" type=\"STRING\" size=\"256\"/><Column id=\"ogdpInstCd\" type=\"STRING\" size=\"256\"/><Column id=\"ogdpInstNm\" type=\"STRING\" size=\"256\"/><Column id=\"emlAddr\" type=\"STRING\" size=\"256\"/><Column id=\"ofcTelno\" type=\"STRING\" size=\"256\"/><Column id=\"mblTelno\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"prvcClctAgreYn\" type=\"STRING\" size=\"256\"/><Column id=\"prvcPvsnAgreYn\" type=\"STRING\" size=\"256\"/><Column id=\"passwd2\" type=\"STRING\" size=\"256\"/><Column id=\"applyDt\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staTitle","50","10","500","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("회원가입");
            obj.set_cssclass("sta_WF_compTitle01");
            this.addChild(obj.name, obj);

            obj = new Div("divMemberJoin","50","50",null,null,"50","30",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_00_00","110","0","60","45",null,null,null,null,null,null,this.divMemberJoin.form);
            obj.set_taborder("0");
            obj.set_text("h 45");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divMemberJoin.addChild(obj.name, obj);

            obj = new Static("staTitle","20","11","250","27",null,null,null,null,null,null,this.divMemberJoin.form);
            obj.set_taborder("15");
            obj.set_text("회원 정보");
            obj.set_cssclass("sta_WF_subTitle01");
            this.divMemberJoin.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_00","20","0","60","18",null,null,null,null,null,null,this.divMemberJoin.form);
            obj.set_taborder("16");
            obj.set_text("h 18");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divMemberJoin.addChild(obj.name, obj);

            obj = new Static("Static07_01_01_00_00","20","45",null,"1","20",null,null,null,null,null,this.divMemberJoin.form);
            obj.set_taborder("17");
            obj.set_text("");
            obj.set_cssclass("sta_WF_borCondition02");
            this.divMemberJoin.addChild(obj.name, obj);

            obj = new Static("sta001","20","46","200","34",null,null,null,null,null,null,this.divMemberJoin.form);
            obj.set_taborder("18");
            obj.set_text("회원 ID");
            obj.set_cssclass("sta_WF_condition02");
            obj.set_fittocontents("none");
            this.divMemberJoin.addChild(obj.name, obj);

            obj = new Edit("edtMemberId","228","50","200","26",null,null,null,null,null,null,this.divMemberJoin.form);
            obj.set_taborder("1");
            obj.set_cssclass("essential");
            obj.set_password("false");
            this.divMemberJoin.addChild(obj.name, obj);

            obj = new Static("Static07_01_01_00","20","80",null,"1","20",null,null,null,null,null,this.divMemberJoin.form);
            obj.set_taborder("20");
            obj.set_text("");
            obj.set_cssclass("sta_WF_borCondition02");
            this.divMemberJoin.addChild(obj.name, obj);

            obj = new Static("sta002","20","81","200","34",null,null,null,null,null,null,this.divMemberJoin.form);
            obj.set_taborder("21");
            obj.set_text("회원명(한글)");
            obj.set_cssclass("sta_WF_condition02");
            this.divMemberJoin.addChild(obj.name, obj);

            obj = new Static("sta003","20","116","200","34",null,null,null,null,null,null,this.divMemberJoin.form);
            obj.set_taborder("22");
            obj.set_text("회원명(영문)");
            obj.set_cssclass("sta_WF_condition02");
            this.divMemberJoin.addChild(obj.name, obj);

            obj = new Static("Static07_01_01_01","20","219",null,"1","20",null,null,null,null,null,this.divMemberJoin.form);
            obj.set_taborder("23");
            obj.set_text("");
            obj.set_cssclass("sta_WF_borCondition02");
            this.divMemberJoin.addChild(obj.name, obj);

            obj = new Static("Static07_01_01_00_01","20","115",null,"1","20",null,null,null,null,null,this.divMemberJoin.form);
            obj.set_taborder("25");
            obj.set_text("");
            obj.set_cssclass("sta_WF_borCondition02");
            this.divMemberJoin.addChild(obj.name, obj);

            obj = new Static("Static07_01_01_00_01_00","20","150",null,"1","20",null,null,null,null,null,this.divMemberJoin.form);
            obj.set_taborder("26");
            obj.set_text("");
            obj.set_cssclass("sta_WF_borCondition02");
            this.divMemberJoin.addChild(obj.name, obj);

            obj = new Static("Static10_00","220","46","8",null,null,"80",null,null,null,null,this.divMemberJoin.form);
            obj.set_taborder("19");
            obj.set_text("w8");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divMemberJoin.addChild(obj.name, obj);

            obj = new Static("Static10_01",null,"0","20",null,"0","0",null,null,null,null,this.divMemberJoin.form);
            obj.set_taborder("28");
            obj.set_text("w20");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divMemberJoin.addChild(obj.name, obj);

            obj = new Static("Static07_01_01_00_01_01","20","359",null,"1","20",null,null,null,null,null,this.divMemberJoin.form);
            obj.set_taborder("29");
            obj.set_text("");
            obj.set_cssclass("sta_WF_borCondition02");
            this.divMemberJoin.addChild(obj.name, obj);

            obj = new Static("Static07_01_01_01_00","20","510",null,"1","20",null,null,null,null,null,this.divMemberJoin.form);
            obj.set_taborder("30");
            obj.set_text("");
            obj.set_cssclass("sta_WF_borCondition02");
            this.divMemberJoin.addChild(obj.name, obj);

            obj = new Static("sta010","20","360","200","150",null,null,null,null,null,null,this.divMemberJoin.form);
            obj.set_taborder("31");
            obj.set_text("개인정보 수집 및 이용 동의");
            obj.set_cssclass("sta_WF_condition02");
            obj.set_wordWrap("english");
            this.divMemberJoin.addChild(obj.name, obj);

            obj = new Static("sta009","20","325","200","34",null,null,null,null,null,null,this.divMemberJoin.form);
            obj.set_taborder("32");
            obj.set_text("휴대폰 전화번호");
            obj.set_cssclass("sta_WF_condition02");
            this.divMemberJoin.addChild(obj.name, obj);

            obj = new Radio("rdPrvc","228","365","136","26",null,null,null,null,null,null,this.divMemberJoin.form);
            obj.set_taborder("11");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var divMemberJoin_form_rdPrvc_innerdataset = new nexacro.NormalDataset("divMemberJoin_form_rdPrvc_innerdataset", obj);
            divMemberJoin_form_rdPrvc_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">동의</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">비동의</Col></Row></Rows>");
            obj.set_innerdataset(divMemberJoin_form_rdPrvc_innerdataset);
            obj.set_text("비동의");
            obj.set_value("N");
            obj.set_index("1");
            this.divMemberJoin.addChild(obj.name, obj);

            obj = new TextArea("taPrvc","228","399",null,"106","40",null,null,null,null,null,this.divMemberJoin.form);
            obj.set_taborder("12");
            obj.set_value("가. 개인정보의 수집 및 이용 목적\n① 과제관리시스템은 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 개인정보 보호법 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.\n1. 과제관리시스템 서비스 제공을 위한 회원관리\n1) 공간정보 다운로드, 오픈API 신청 및 활용 등 포털 서비스 제공과 서비스 부정이용 방지를 목적으로 개인정보를\n   처리합니다.\n\n나. 정보주체와 법정대리인의 권리ㆍ의무 및 행사방법\n① 정보주체(만 14세 미만인 경우에는 법정대리인을 말함)는 언제든지 개인정보 열람·정정·삭제·처리정지 요구 등의 권리를 행사할 수 있습니다.\n② 제1항에 따른 권리 행사는 개인정보보호법 시행규칙 별지 제8호 서식에 따라 작성 후 서면, 전자우편 등을 통하여 하실 수 있으며, 기관은 이에 대해 지체 없이 조치하겠습니다.\n③ 제1항에 따른 권리 행사는 정보주체의 법정대리인이나 위임을 받은 자 등 대리인을 통하여 하실 수 있습니다. 이 경우 개인정보 보호법 시행규칙 별지 제11호 서식에 따른 위임장을 제출하셔야 합니다.\n④ 개인정보 열람 및 처리정지 요구는 개인정보 보호법 제35조 제5항, 제37조 제2항에 의하여 정보주체의 권리가 제한 될 수 있습니다.\n⑤ 개인정보의 정정 및 삭제 요구는 다른 법령에서 그 개인정보가 수집 대상으로 명시되어 있는 경우에는 그 삭제를 요구할 수 없습니다.\n⑥ 정보주체 권리에 따른 열람의 요구, 정정ㆍ삭제의 요구, 처리정지의 요구 시 열람 등 요구를 한 자가 본인이거나 정당한 대리인인지를 확인합니다.\n\n다. 수집하는 개인정보의 항목\n① 과제관리시스템 회원정보(필수): 이름, 이메일(아이디), 비밀번호\n\n라. 개인정보의 보유 및 이용기간\n① 과제관리시스템은 법령에 따른 개인정보 보유ㆍ이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의 받은 개인정보 보유ㆍ이용기간 내에서 개인정보를 처리ㆍ보유합니다.\n1. 과제관리시스템 회원정보\n- 수집근거: 정보주체의 동의\n- 보존기간: 회원 탈퇴 요청 전까지(1년 경과 시 재동의)\n- 보존근거: 정보주체의 동의\n\n마. 동의 거부 권리 및 동의 거부에 따른 불이익\n위 개인정보의 수집 및 이용에 대한 동의를 거부할 수 있으나, 동의를 거부할 경우 회원 가입이 제한됩니다.");
            obj.set_scrolltype("vertical");
            obj.set_wordWrap("char");
            obj.set_readonly("true");
            this.divMemberJoin.addChild(obj.name, obj);

            obj = new Edit("edtMemberNmEng","228","120","200","26",null,null,null,null,null,null,this.divMemberJoin.form);
            obj.set_taborder("3");
            obj.set_cssclass("essential");
            obj.set_inputtype("english");
            obj.set_imemode("alpha");
            obj.set_inputfilter("space,symbol");
            this.divMemberJoin.addChild(obj.name, obj);

            obj = new Static("sta004","20","151","200","34",null,null,null,null,null,null,this.divMemberJoin.form);
            obj.set_taborder("33");
            obj.set_text("비밀번호");
            obj.set_cssclass("sta_WF_condition02");
            this.divMemberJoin.addChild(obj.name, obj);

            obj = new Edit("edtPasswd","228","155","200","26",null,null,null,null,null,null,this.divMemberJoin.form);
            obj.set_taborder("4");
            obj.set_cssclass("essential");
            obj.set_maxlength("0");
            obj.set_password("false");
            obj.set_text("null");
            this.divMemberJoin.addChild(obj.name, obj);

            obj = new Edit("edtPasswd2","228","189","200","26",null,null,null,null,null,null,this.divMemberJoin.form);
            obj.set_taborder("5");
            obj.set_cssclass("essential");
            obj.set_maxlength("0");
            obj.set_password("false");
            this.divMemberJoin.addChild(obj.name, obj);

            obj = new Static("sta005","20","185","200","34",null,null,null,null,null,null,this.divMemberJoin.form);
            obj.set_taborder("35");
            obj.set_text("비밀번호(확인)");
            obj.set_cssclass("sta_WF_condition02");
            this.divMemberJoin.addChild(obj.name, obj);

            obj = new Static("Static07_01_01_00_01_00_01","20","185",null,"1","20",null,null,null,null,null,this.divMemberJoin.form);
            obj.set_taborder("34");
            obj.set_text("");
            obj.set_cssclass("sta_WF_borCondition02");
            this.divMemberJoin.addChild(obj.name, obj);

            obj = new Static("sta006","20","220","200","34",null,null,null,null,null,null,this.divMemberJoin.form);
            obj.set_taborder("36");
            obj.set_text("소속기관");
            obj.set_cssclass("sta_WF_condition02");
            this.divMemberJoin.addChild(obj.name, obj);

            obj = new Edit("edtOgdpNm","354","224","200","26",null,null,null,null,null,null,this.divMemberJoin.form);
            obj.set_taborder("7");
            obj.set_cssclass("essential");
            this.divMemberJoin.addChild(obj.name, obj);

            obj = new Static("Static07_01_01_01_01","20","254",null,"1","20",null,null,null,null,null,this.divMemberJoin.form);
            obj.set_taborder("37");
            obj.set_text("");
            obj.set_cssclass("sta_WF_borCondition02");
            this.divMemberJoin.addChild(obj.name, obj);

            obj = new Static("sta007","20","255","200","34",null,null,null,null,null,null,this.divMemberJoin.form);
            obj.set_taborder("38");
            obj.set_text("이메일주소");
            obj.set_cssclass("sta_WF_condition02");
            this.divMemberJoin.addChild(obj.name, obj);

            obj = new Edit("edtEmail","228","259","326","26",null,null,null,null,null,null,this.divMemberJoin.form);
            obj.set_taborder("8");
            obj.set_cssclass("essential");
            this.divMemberJoin.addChild(obj.name, obj);

            obj = new Static("Static07_01_01_01_01_00","20","289",null,"1","20",null,null,null,null,null,this.divMemberJoin.form);
            obj.set_taborder("39");
            obj.set_text("");
            obj.set_cssclass("sta_WF_borCondition02");
            this.divMemberJoin.addChild(obj.name, obj);

            obj = new Static("sta008","20","290","200","34",null,null,null,null,null,null,this.divMemberJoin.form);
            obj.set_taborder("40");
            obj.set_text("사무실 전화번호");
            obj.set_cssclass("sta_WF_condition02");
            this.divMemberJoin.addChild(obj.name, obj);

            obj = new Edit("edtOfcNo","228","294","200","26",null,null,null,null,null,null,this.divMemberJoin.form);
            obj.set_taborder("9");
            obj.set_cssclass("essential");
            this.divMemberJoin.addChild(obj.name, obj);

            obj = new Static("Static07_01_01_01_01_00_00","20","324",null,"1","20",null,null,null,null,null,this.divMemberJoin.form);
            obj.set_taborder("41");
            obj.set_text("");
            obj.set_cssclass("sta_WF_borCondition02");
            this.divMemberJoin.addChild(obj.name, obj);

            obj = new Static("Static10","0","-1","20",null,null,"0",null,null,null,null,this.divMemberJoin.form);
            obj.set_taborder("27");
            obj.set_text("w20");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divMemberJoin.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00","20","45","1","466",null,null,null,null,null,null,this.divMemberJoin.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_borCondition02_v");
            this.divMemberJoin.addChild(obj.name, obj);

            obj = new Edit("edtMemberNmKr","228","85","200","26",null,null,null,null,null,null,this.divMemberJoin.form);
            obj.set_taborder("2");
            obj.set_cssclass("essential");
            obj.set_imemode("hangul");
            obj.set_inputfilter("space,symbol");
            this.divMemberJoin.addChild(obj.name, obj);

            obj = new Edit("edtHpNo","228","329","200","26",null,null,null,null,null,null,this.divMemberJoin.form);
            obj.set_taborder("10");
            obj.set_cssclass("essential");
            this.divMemberJoin.addChild(obj.name, obj);

            obj = new Static("sta011","22","46","25","34",null,null,null,"100",null,null,this.divMemberJoin.form);
            obj.set_taborder("42");
            obj.set_text("*");
            obj.set_cssclass("essential");
            obj.set_tooltiptext("필수입력");
            obj.set_fittocontents("none");
            this.divMemberJoin.addChild(obj.name, obj);

            obj = new Static("sta012","22","81","25","34",null,null,null,null,null,null,this.divMemberJoin.form);
            obj.set_taborder("43");
            obj.set_text("*");
            obj.set_cssclass("essential");
            obj.set_tooltiptext("필수입력");
            this.divMemberJoin.addChild(obj.name, obj);

            obj = new Static("sta013","22","116","25","34",null,null,null,null,null,null,this.divMemberJoin.form);
            obj.set_taborder("44");
            obj.set_text("*");
            obj.set_cssclass("essential");
            obj.set_tooltiptext("필수입력");
            this.divMemberJoin.addChild(obj.name, obj);

            obj = new Static("sta014","22","151","25","34",null,null,null,null,null,null,this.divMemberJoin.form);
            obj.set_taborder("45");
            obj.set_text("*");
            obj.set_cssclass("essential");
            obj.set_tooltiptext("필수입력");
            this.divMemberJoin.addChild(obj.name, obj);

            obj = new Static("sta015","22","186","25","34",null,null,null,null,null,null,this.divMemberJoin.form);
            obj.set_taborder("46");
            obj.set_text("*");
            obj.set_cssclass("essential");
            obj.set_tooltiptext("필수입력");
            this.divMemberJoin.addChild(obj.name, obj);

            obj = new Static("sta016","22","220","25","34",null,null,null,null,null,null,this.divMemberJoin.form);
            obj.set_taborder("47");
            obj.set_text("*");
            obj.set_cssclass("essential");
            obj.set_tooltiptext("필수입력");
            this.divMemberJoin.addChild(obj.name, obj);

            obj = new Static("sta017","22","255","25","34",null,null,null,null,null,null,this.divMemberJoin.form);
            obj.set_taborder("48");
            obj.set_text("*");
            obj.set_cssclass("essential");
            obj.set_tooltiptext("필수입력");
            this.divMemberJoin.addChild(obj.name, obj);

            obj = new Static("sta018","22","290","25","34",null,null,null,null,null,null,this.divMemberJoin.form);
            obj.set_taborder("49");
            obj.set_text("*");
            obj.set_cssclass("essential");
            obj.set_tooltiptext("필수입력");
            this.divMemberJoin.addChild(obj.name, obj);

            obj = new Static("sta019","22","325","25","34",null,null,null,null,null,null,this.divMemberJoin.form);
            obj.set_taborder("50");
            obj.set_text("*");
            obj.set_cssclass("essential");
            obj.set_tooltiptext("필수입력");
            this.divMemberJoin.addChild(obj.name, obj);

            obj = new Static("sta020","22","418","25","34",null,null,null,null,null,null,this.divMemberJoin.form);
            obj.set_taborder("51");
            obj.set_text("*");
            obj.set_cssclass("essential");
            obj.set_tooltiptext("필수입력");
            this.divMemberJoin.addChild(obj.name, obj);

            obj = new Button("btnInsttNm","323","224","26","26",null,null,null,null,null,null,this.divMemberJoin.form);
            obj.set_taborder("52");
            obj.set_cssclass("btn_WF_frmSearch");
            this.divMemberJoin.addChild(obj.name, obj);

            obj = new Edit("edtOgdpCd","228","224","90","26",null,null,null,null,null,null,this.divMemberJoin.form);
            obj.set_taborder("6");
            obj.set_readonly("true");
            obj.set_cssclass("essential");
            this.divMemberJoin.addChild(obj.name, obj);

            obj = new Static("Static10_00_00","318","220","5","35",null,null,null,null,null,null,this.divMemberJoin.form);
            obj.set_taborder("53");
            obj.set_text("w8");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divMemberJoin.addChild(obj.name, obj);

            obj = new Static("Static10_00_00_00","349","220","5","35",null,null,null,null,null,null,this.divMemberJoin.form);
            obj.set_taborder("54");
            obj.set_text("w8");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divMemberJoin.addChild(obj.name, obj);

            obj = new Static("staText01","602","50","416","26",null,null,null,null,null,null,this.divMemberJoin.form);
            obj.set_taborder("55");
            obj.set_text("n ~ m자의 영문, 숫자만 사용해 주세요.");
            obj.set_color("darkgray");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.divMemberJoin.addChild(obj.name, obj);

            obj = new Static("staText02","445","155","416","26",null,null,null,null,null,null,this.divMemberJoin.form);
            obj.set_taborder("56");
            obj.set_text("8~16자리 영문 대소문자, 숫자, 특수문자 중 3가지 이상 조합으로 만들어주세요.");
            obj.set_color("darkgray");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.divMemberJoin.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_01_00_00","0",null,null,"25","0","54",null,null,null,null,this.divMemberJoin.form);
            obj.set_taborder("57");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divMemberJoin.addChild(obj.name, obj);

            obj = new Static("sta_g001","904",null,"12","28",null,"26",null,null,null,null,this.divMemberJoin.form);
            obj.set_taborder("58");
            obj.set_text("w12");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divMemberJoin.addChild(obj.name, obj);

            obj = new Button("btnClose","916",null,"65","28",null,"26",null,null,null,null,this.divMemberJoin.form);
            obj.set_text("닫기");
            obj.set_cssclass("");
            obj.set_visible("true");
            obj.set_taborder("14");
            this.divMemberJoin.addChild(obj.name, obj);

            obj = new Button("btnApplication","840",null,"65","28",null,"26",null,null,null,null,this.divMemberJoin.form);
            obj.set_text("신청");
            obj.set_cssclass("btn_WF_icoApplication");
            obj.set_taborder("13");
            this.divMemberJoin.addChild(obj.name, obj);

            obj = new Static("staText03","445","294","910","26",null,null,null,null,null,null,this.divMemberJoin.form);
            obj.set_taborder("59");
            obj.set_text("전화번호 양식에 맞추어 입력해주세요. ex) 11 자리 012-3456-7890, 10~9자리 012-345-6789 01-234-5678 02-1234-5678, 8자리 1234-5678, 7자리 123-4567, 4자리 1234");
            obj.set_color("darkgray");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.divMemberJoin.addChild(obj.name, obj);

            obj = new Static("staText04","445","329","471","26",null,null,null,null,null,null,this.divMemberJoin.form);
            obj.set_taborder("60");
            obj.set_text("휴대폰번호 양식에 맞추어 입력해주세요. ex) 11 자리 012-3456-7890, 10자리 012-345-6789");
            obj.set_color("darkgray");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.divMemberJoin.addChild(obj.name, obj);

            obj = new Button("btnCheckId","436","50","152","26",null,null,null,null,null,null,this.divMemberJoin.form);
            obj.set_text("아이디 중복확인");
            obj.set_cssclass("btn_WF_icoModify");
            obj.set_taborder("61");
            this.divMemberJoin.addChild(obj.name, obj);

            obj = new Static("Static10_00_00_00_00","428","45","8","35",null,null,null,null,null,null,this.divMemberJoin.form);
            obj.set_taborder("62");
            obj.set_text("w8");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divMemberJoin.addChild(obj.name, obj);

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
            // Layout Functions
            //-- Default Layout : this.divMemberJoin.form
            obj = new Layout("default","",0,0,this.divMemberJoin.form,
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

                p.staTitle.set_taborder("15");
                p.staTitle.set_text("회원 정보");
                p.staTitle.set_cssclass("sta_WF_subTitle01");
                p.staTitle.move("20","11","250","27",null,null);

                p.Static04_00_00_00.set_taborder("16");
                p.Static04_00_00_00.set_text("h 18");
                p.Static04_00_00_00.set_visible("false");
                p.Static04_00_00_00.set_background("aqua");
                p.Static04_00_00_00.set_color("blue");
                p.Static04_00_00_00.set_textAlign("center");
                p.Static04_00_00_00.set_verticalAlign("middle");
                p.Static04_00_00_00.set_opacity("0.7");
                p.Static04_00_00_00.set_font("normal 12px/normal \"Arial\"");
                p.Static04_00_00_00.move("20","0","60","18",null,null);

                p.Static07_01_01_00_00.set_taborder("17");
                p.Static07_01_01_00_00.set_text("");
                p.Static07_01_01_00_00.set_cssclass("sta_WF_borCondition02");
                p.Static07_01_01_00_00.move("20","45",null,"1","20",null);

                p.sta001.set_taborder("18");
                p.sta001.set_text("회원 ID");
                p.sta001.set_cssclass("sta_WF_condition02");
                p.sta001.set_fittocontents("none");
                p.sta001.move("20","46","200","34",null,null);

                p.edtMemberId.set_taborder("1");
                p.edtMemberId.set_cssclass("essential");
                p.edtMemberId.set_password("false");
                p.edtMemberId.move("228","50","200","26",null,null);

                p.Static07_01_01_00.set_taborder("20");
                p.Static07_01_01_00.set_text("");
                p.Static07_01_01_00.set_cssclass("sta_WF_borCondition02");
                p.Static07_01_01_00.move("20","80",null,"1","20",null);

                p.sta002.set_taborder("21");
                p.sta002.set_text("회원명(한글)");
                p.sta002.set_cssclass("sta_WF_condition02");
                p.sta002.move("20","81","200","34",null,null);

                p.sta003.set_taborder("22");
                p.sta003.set_text("회원명(영문)");
                p.sta003.set_cssclass("sta_WF_condition02");
                p.sta003.move("20","116","200","34",null,null);

                p.Static07_01_01_01.set_taborder("23");
                p.Static07_01_01_01.set_text("");
                p.Static07_01_01_01.set_cssclass("sta_WF_borCondition02");
                p.Static07_01_01_01.move("20","219",null,"1","20",null);

                p.Static07_01_01_00_01.set_taborder("25");
                p.Static07_01_01_00_01.set_text("");
                p.Static07_01_01_00_01.set_cssclass("sta_WF_borCondition02");
                p.Static07_01_01_00_01.move("20","115",null,"1","20",null);

                p.Static07_01_01_00_01_00.set_taborder("26");
                p.Static07_01_01_00_01_00.set_text("");
                p.Static07_01_01_00_01_00.set_cssclass("sta_WF_borCondition02");
                p.Static07_01_01_00_01_00.move("20","150",null,"1","20",null);

                p.Static10_00.set_taborder("19");
                p.Static10_00.set_text("w8");
                p.Static10_00.set_visible("false");
                p.Static10_00.set_background("fuchsia");
                p.Static10_00.set_color("blue");
                p.Static10_00.set_textAlign("center");
                p.Static10_00.set_verticalAlign("middle");
                p.Static10_00.set_opacity("0.7");
                p.Static10_00.set_font("normal 12px/normal \"Arial\"");
                p.Static10_00.move("220","46","8",null,null,"80");

                p.Static10_01.set_taborder("28");
                p.Static10_01.set_text("w20");
                p.Static10_01.set_visible("false");
                p.Static10_01.set_background("fuchsia");
                p.Static10_01.set_color("blue");
                p.Static10_01.set_textAlign("center");
                p.Static10_01.set_verticalAlign("middle");
                p.Static10_01.set_opacity("0.7");
                p.Static10_01.set_font("normal 12px/normal \"Arial\"");
                p.Static10_01.move(null,"0","20",null,"0","0");

                p.Static07_01_01_00_01_01.set_taborder("29");
                p.Static07_01_01_00_01_01.set_text("");
                p.Static07_01_01_00_01_01.set_cssclass("sta_WF_borCondition02");
                p.Static07_01_01_00_01_01.move("20","359",null,"1","20",null);

                p.Static07_01_01_01_00.set_taborder("30");
                p.Static07_01_01_01_00.set_text("");
                p.Static07_01_01_01_00.set_cssclass("sta_WF_borCondition02");
                p.Static07_01_01_01_00.move("20","510",null,"1","20",null);

                p.sta010.set_taborder("31");
                p.sta010.set_text("개인정보 수집 및 이용 동의");
                p.sta010.set_cssclass("sta_WF_condition02");
                p.sta010.set_wordWrap("english");
                p.sta010.move("20","360","200","150",null,null);

                p.sta009.set_taborder("32");
                p.sta009.set_text("휴대폰 전화번호");
                p.sta009.set_cssclass("sta_WF_condition02");
                p.sta009.move("20","325","200","34",null,null);

                p.rdPrvc.set_taborder("11");
                p.rdPrvc.set_codecolumn("codecolumn");
                p.rdPrvc.set_datacolumn("datacolumn");
                p.rdPrvc.set_direction("vertical");
                p.rdPrvc.set_innerdataset(divMemberJoin_form_rdPrvc_innerdataset);
                p.rdPrvc.set_value("N");
                p.rdPrvc.set_index("1");
                p.rdPrvc.move("228","365","136","26",null,null);

                p.taPrvc.set_taborder("12");
                p.taPrvc.set_value("가. 개인정보의 수집 및 이용 목적\n① 과제관리시스템은 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 개인정보 보호법 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.\n1. 과제관리시스템 서비스 제공을 위한 회원관리\n1) 공간정보 다운로드, 오픈API 신청 및 활용 등 포털 서비스 제공과 서비스 부정이용 방지를 목적으로 개인정보를\n   처리합니다.\n\n나. 정보주체와 법정대리인의 권리ㆍ의무 및 행사방법\n① 정보주체(만 14세 미만인 경우에는 법정대리인을 말함)는 언제든지 개인정보 열람·정정·삭제·처리정지 요구 등의 권리를 행사할 수 있습니다.\n② 제1항에 따른 권리 행사는 개인정보보호법 시행규칙 별지 제8호 서식에 따라 작성 후 서면, 전자우편 등을 통하여 하실 수 있으며, 기관은 이에 대해 지체 없이 조치하겠습니다.\n③ 제1항에 따른 권리 행사는 정보주체의 법정대리인이나 위임을 받은 자 등 대리인을 통하여 하실 수 있습니다. 이 경우 개인정보 보호법 시행규칙 별지 제11호 서식에 따른 위임장을 제출하셔야 합니다.\n④ 개인정보 열람 및 처리정지 요구는 개인정보 보호법 제35조 제5항, 제37조 제2항에 의하여 정보주체의 권리가 제한 될 수 있습니다.\n⑤ 개인정보의 정정 및 삭제 요구는 다른 법령에서 그 개인정보가 수집 대상으로 명시되어 있는 경우에는 그 삭제를 요구할 수 없습니다.\n⑥ 정보주체 권리에 따른 열람의 요구, 정정ㆍ삭제의 요구, 처리정지의 요구 시 열람 등 요구를 한 자가 본인이거나 정당한 대리인인지를 확인합니다.\n\n다. 수집하는 개인정보의 항목\n① 과제관리시스템 회원정보(필수): 이름, 이메일(아이디), 비밀번호\n\n라. 개인정보의 보유 및 이용기간\n① 과제관리시스템은 법령에 따른 개인정보 보유ㆍ이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의 받은 개인정보 보유ㆍ이용기간 내에서 개인정보를 처리ㆍ보유합니다.\n1. 과제관리시스템 회원정보\n- 수집근거: 정보주체의 동의\n- 보존기간: 회원 탈퇴 요청 전까지(1년 경과 시 재동의)\n- 보존근거: 정보주체의 동의\n\n마. 동의 거부 권리 및 동의 거부에 따른 불이익\n위 개인정보의 수집 및 이용에 대한 동의를 거부할 수 있으나, 동의를 거부할 경우 회원 가입이 제한됩니다.");
                p.taPrvc.set_scrolltype("vertical");
                p.taPrvc.set_wordWrap("char");
                p.taPrvc.set_readonly("true");
                p.taPrvc.move("228","399",null,"106","40",null);

                p.edtMemberNmEng.set_taborder("3");
                p.edtMemberNmEng.set_cssclass("essential");
                p.edtMemberNmEng.set_inputtype("english");
                p.edtMemberNmEng.set_imemode("alpha");
                p.edtMemberNmEng.set_inputfilter("space,symbol");
                p.edtMemberNmEng.move("228","120","200","26",null,null);

                p.sta004.set_taborder("33");
                p.sta004.set_text("비밀번호");
                p.sta004.set_cssclass("sta_WF_condition02");
                p.sta004.move("20","151","200","34",null,null);

                p.edtPasswd.set_taborder("4");
                p.edtPasswd.set_cssclass("essential");
                p.edtPasswd.set_maxlength("0");
                p.edtPasswd.set_password("false");
                p.edtPasswd.move("228","155","200","26",null,null);

                p.edtPasswd2.set_taborder("5");
                p.edtPasswd2.set_cssclass("essential");
                p.edtPasswd2.set_maxlength("0");
                p.edtPasswd2.set_password("false");
                p.edtPasswd2.move("228","189","200","26",null,null);

                p.sta005.set_taborder("35");
                p.sta005.set_text("비밀번호(확인)");
                p.sta005.set_cssclass("sta_WF_condition02");
                p.sta005.move("20","185","200","34",null,null);

                p.Static07_01_01_00_01_00_01.set_taborder("34");
                p.Static07_01_01_00_01_00_01.set_text("");
                p.Static07_01_01_00_01_00_01.set_cssclass("sta_WF_borCondition02");
                p.Static07_01_01_00_01_00_01.move("20","185",null,"1","20",null);

                p.sta006.set_taborder("36");
                p.sta006.set_text("소속기관");
                p.sta006.set_cssclass("sta_WF_condition02");
                p.sta006.move("20","220","200","34",null,null);

                p.edtOgdpNm.set_taborder("7");
                p.edtOgdpNm.set_cssclass("essential");
                p.edtOgdpNm.move("354","224","200","26",null,null);

                p.Static07_01_01_01_01.set_taborder("37");
                p.Static07_01_01_01_01.set_text("");
                p.Static07_01_01_01_01.set_cssclass("sta_WF_borCondition02");
                p.Static07_01_01_01_01.move("20","254",null,"1","20",null);

                p.sta007.set_taborder("38");
                p.sta007.set_text("이메일주소");
                p.sta007.set_cssclass("sta_WF_condition02");
                p.sta007.move("20","255","200","34",null,null);

                p.edtEmail.set_taborder("8");
                p.edtEmail.set_cssclass("essential");
                p.edtEmail.move("228","259","326","26",null,null);

                p.Static07_01_01_01_01_00.set_taborder("39");
                p.Static07_01_01_01_01_00.set_text("");
                p.Static07_01_01_01_01_00.set_cssclass("sta_WF_borCondition02");
                p.Static07_01_01_01_01_00.move("20","289",null,"1","20",null);

                p.sta008.set_taborder("40");
                p.sta008.set_text("사무실 전화번호");
                p.sta008.set_cssclass("sta_WF_condition02");
                p.sta008.move("20","290","200","34",null,null);

                p.edtOfcNo.set_taborder("9");
                p.edtOfcNo.set_cssclass("essential");
                p.edtOfcNo.move("228","294","200","26",null,null);

                p.Static07_01_01_01_01_00_00.set_taborder("41");
                p.Static07_01_01_01_01_00_00.set_text("");
                p.Static07_01_01_01_01_00_00.set_cssclass("sta_WF_borCondition02");
                p.Static07_01_01_01_01_00_00.move("20","324",null,"1","20",null);

                p.Static10.set_taborder("27");
                p.Static10.set_text("w20");
                p.Static10.set_visible("false");
                p.Static10.set_background("fuchsia");
                p.Static10.set_color("blue");
                p.Static10.set_textAlign("center");
                p.Static10.set_verticalAlign("middle");
                p.Static10.set_opacity("0.7");
                p.Static10.set_font("normal 12px/normal \"Arial\"");
                p.Static10.move("0","-1","20",null,null,"0");

                p.Static07_00_00_00.set_taborder("24");
                p.Static07_00_00_00.set_cssclass("sta_WF_borCondition02_v");
                p.Static07_00_00_00.move("20","45","1","466",null,null);

                p.edtMemberNmKr.set_taborder("2");
                p.edtMemberNmKr.set_cssclass("essential");
                p.edtMemberNmKr.set_imemode("hangul");
                p.edtMemberNmKr.set_inputfilter("space,symbol");
                p.edtMemberNmKr.move("228","85","200","26",null,null);

                p.edtHpNo.set_taborder("10");
                p.edtHpNo.set_cssclass("essential");
                p.edtHpNo.move("228","329","200","26",null,null);

                p.sta011.set_taborder("42");
                p.sta011.set_text("*");
                p.sta011.set_cssclass("essential");
                p.sta011.set_tooltiptext("필수입력");
                p.sta011.set_fittocontents("none");
                p.sta011.set_minwidth("");
                p.sta011.set_maxwidth("100");
                p.sta011.move("22","46","25","34",null,null);

                p.sta012.set_taborder("43");
                p.sta012.set_text("*");
                p.sta012.set_cssclass("essential");
                p.sta012.set_tooltiptext("필수입력");
                p.sta012.move("22","81","25","34",null,null);

                p.sta013.set_taborder("44");
                p.sta013.set_text("*");
                p.sta013.set_cssclass("essential");
                p.sta013.set_tooltiptext("필수입력");
                p.sta013.move("22","116","25","34",null,null);

                p.sta014.set_taborder("45");
                p.sta014.set_text("*");
                p.sta014.set_cssclass("essential");
                p.sta014.set_tooltiptext("필수입력");
                p.sta014.move("22","151","25","34",null,null);

                p.sta015.set_taborder("46");
                p.sta015.set_text("*");
                p.sta015.set_cssclass("essential");
                p.sta015.set_tooltiptext("필수입력");
                p.sta015.move("22","186","25","34",null,null);

                p.sta016.set_taborder("47");
                p.sta016.set_text("*");
                p.sta016.set_cssclass("essential");
                p.sta016.set_tooltiptext("필수입력");
                p.sta016.move("22","220","25","34",null,null);

                p.sta017.set_taborder("48");
                p.sta017.set_text("*");
                p.sta017.set_cssclass("essential");
                p.sta017.set_tooltiptext("필수입력");
                p.sta017.move("22","255","25","34",null,null);

                p.sta018.set_taborder("49");
                p.sta018.set_text("*");
                p.sta018.set_cssclass("essential");
                p.sta018.set_tooltiptext("필수입력");
                p.sta018.move("22","290","25","34",null,null);

                p.sta019.set_taborder("50");
                p.sta019.set_text("*");
                p.sta019.set_cssclass("essential");
                p.sta019.set_tooltiptext("필수입력");
                p.sta019.move("22","325","25","34",null,null);

                p.sta020.set_taborder("51");
                p.sta020.set_text("*");
                p.sta020.set_cssclass("essential");
                p.sta020.set_tooltiptext("필수입력");
                p.sta020.move("22","418","25","34",null,null);

                p.btnInsttNm.set_taborder("52");
                p.btnInsttNm.set_cssclass("btn_WF_frmSearch");
                p.btnInsttNm.move("323","224","26","26",null,null);

                p.edtOgdpCd.set_taborder("6");
                p.edtOgdpCd.set_readonly("true");
                p.edtOgdpCd.set_cssclass("essential");
                p.edtOgdpCd.move("228","224","90","26",null,null);

                p.Static10_00_00.set_taborder("53");
                p.Static10_00_00.set_text("w8");
                p.Static10_00_00.set_visible("false");
                p.Static10_00_00.set_background("fuchsia");
                p.Static10_00_00.set_color("blue");
                p.Static10_00_00.set_textAlign("center");
                p.Static10_00_00.set_verticalAlign("middle");
                p.Static10_00_00.set_opacity("0.7");
                p.Static10_00_00.set_font("normal 12px/normal \"Arial\"");
                p.Static10_00_00.move("318","220","5","35",null,null);

                p.Static10_00_00_00.set_taborder("54");
                p.Static10_00_00_00.set_text("w8");
                p.Static10_00_00_00.set_visible("false");
                p.Static10_00_00_00.set_background("fuchsia");
                p.Static10_00_00_00.set_color("blue");
                p.Static10_00_00_00.set_textAlign("center");
                p.Static10_00_00_00.set_verticalAlign("middle");
                p.Static10_00_00_00.set_opacity("0.7");
                p.Static10_00_00_00.set_font("normal 12px/normal \"Arial\"");
                p.Static10_00_00_00.move("349","220","5","35",null,null);

                p.staText01.set_taborder("55");
                p.staText01.set_text("n ~ m자의 영문, 숫자만 사용해 주세요.");
                p.staText01.set_color("darkgray");
                p.staText01.set_font("normal 8pt/normal \"Arial\"");
                p.staText01.move("602","50","416","26",null,null);

                p.staText02.set_taborder("56");
                p.staText02.set_text("8~16자리 영문 대소문자, 숫자, 특수문자 중 3가지 이상 조합으로 만들어주세요.");
                p.staText02.set_color("darkgray");
                p.staText02.set_font("normal 8pt/normal \"Arial\"");
                p.staText02.move("445","155","416","26",null,null);

                p.Static04_00_00_01_00_00.set_taborder("57");
                p.Static04_00_00_01_00_00.set_text("h 25");
                p.Static04_00_00_01_00_00.set_visible("false");
                p.Static04_00_00_01_00_00.set_background("aqua");
                p.Static04_00_00_01_00_00.set_color("blue");
                p.Static04_00_00_01_00_00.set_textAlign("center");
                p.Static04_00_00_01_00_00.set_verticalAlign("middle");
                p.Static04_00_00_01_00_00.set_opacity("0.7");
                p.Static04_00_00_01_00_00.set_font("normal 12px/normal \"Arial\"");
                p.Static04_00_00_01_00_00.move("0",null,null,"25","0","54");

                p.sta_g001.set_taborder("58");
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
                p.btnClose.set_taborder("14");
                p.btnClose.move("916",null,"65","28",null,"26");

                p.btnApplication.set_text("신청");
                p.btnApplication.set_cssclass("btn_WF_icoApplication");
                p.btnApplication.set_taborder("13");
                p.btnApplication.move("840",null,"65","28",null,"26");

                p.staText03.set_taborder("59");
                p.staText03.set_text("전화번호 양식에 맞추어 입력해주세요. ex) 11 자리 012-3456-7890, 10~9자리 012-345-6789 01-234-5678 02-1234-5678, 8자리 1234-5678, 7자리 123-4567, 4자리 1234");
                p.staText03.set_color("darkgray");
                p.staText03.set_font("normal 8pt/normal \"Arial\"");
                p.staText03.move("445","294","910","26",null,null);

                p.staText04.set_taborder("60");
                p.staText04.set_text("휴대폰번호 양식에 맞추어 입력해주세요. ex) 11 자리 012-3456-7890, 10자리 012-345-6789");
                p.staText04.set_color("darkgray");
                p.staText04.set_font("normal 8pt/normal \"Arial\"");
                p.staText04.move("445","329","471","26",null,null);

                p.btnCheckId.set_text("아이디 중복확인");
                p.btnCheckId.set_cssclass("btn_WF_icoModify");
                p.btnCheckId.set_taborder("61");
                p.btnCheckId.move("436","50","152","26",null,null);

                p.Static10_00_00_00_00.set_taborder("62");
                p.Static10_00_00_00_00.set_text("w8");
                p.Static10_00_00_00_00.set_visible("false");
                p.Static10_00_00_00_00.set_background("fuchsia");
                p.Static10_00_00_00_00.set_color("blue");
                p.Static10_00_00_00_00.set_textAlign("center");
                p.Static10_00_00_00_00.set_verticalAlign("middle");
                p.Static10_00_00_00_00.set_opacity("0.7");
                p.Static10_00_00_00_00.set_font("normal 12px/normal \"Arial\"");
                p.Static10_00_00_00_00.move("428","45","8","35",null,null);
            	}
            );
            this.divMemberJoin.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divMemberJoin.form
            obj = new Layout("screen00","",0,0,this.divMemberJoin.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divMemberJoin.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1920,670,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_cssclass("frm_WF_comp");
                p.set_titletext("회원가입");

                p.staTitle.set_taborder("0");
                p.staTitle.set_text("회원가입");
                p.staTitle.set_cssclass("sta_WF_compTitle01");
                p.staTitle.move("50","10","500","30",null,null);

                p.divMemberJoin.set_taborder("1");
                p.divMemberJoin.set_text("");
                p.divMemberJoin.move("50","50",null,null,"50","30");

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
            obj = new BindItem("item0","divMemberJoin.form.edtMemberId","value","dsUserInfo","memberId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divMemberJoin.form.edtMemberNmKr","value","dsUserInfo","memberNmKr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divMemberJoin.form.edtMemberNmEng","value","dsUserInfo","memberNmEn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divMemberJoin.form.edtPasswd","value","dsUserInfo","passwd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divMemberJoin.form.edtOgdpCd","value","dsUserInfo","ogdpInstCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divMemberJoin.form.edtOgdpNm","value","dsUserInfo","ogdpInstNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divMemberJoin.form.edtEmail","value","dsUserInfo","emlAddr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divMemberJoin.form.edtOfcNo","value","dsUserInfo","ofcTelno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divMemberJoin.form.edtHpNo","value","dsUserInfo","mblTelno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divMemberJoin.form.edtPasswd2","value","dsUserInfo","passwd2");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("CMS_1010M.xfdl","lib::common.xjs");
        this.registerScript("CMS_1010M.xfdl", function() {
        /**
        *  messageManage
        *  MenuPath      -
        *  FileName      memberJoin.xfdl
        *  Creator 	     cheonsy
        *  CreateDate    2023.03.21
        *  Desction      회원가입
        ************** 소스 수정 이력 ***********************************************
        *  date          Modifier    Description
        *******************************************************************************
        *  2023.03.21    cheonsy 	 최초 생성
        *******************************************************************************/
        this.executeIncludeScript("lib::common.xjs"); /*include "lib::common.xjs"*/;
        // 아이디 자릿수 설정 5 ~ 19
        var min = 5;
        var max = 19;
        var idCheck = false;
        /***********************************************************************************************
        * FORM EVENT 영역(onload, onbeforeclose)
        /***********************************************************************************************/
        /**
         * description 화면 onload
        */
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnLoad(this);
        	this.divMemberJoin.form.staText01.set_text(min + ' ~ ' + max + '자의 영문, 숫자만 사용해 주세요.');
        };

        /************************************************************************************************
        * TRANSACTION 서비스 호출 처리
        ************************************************************************************************/
        /**
         * description 시스템 로그 조회
        */
        this.fnSave = function()
        {
        	this.gfnTransaction("saveUser", "cms/saveUser.do", "dsUserInfo", "", "", "fnCallBack");
        };

        /**
         * description 아이디 중복 체크
        */
        this.fnCheckId = function()
        {
        	this.gfnTransaction("checkId", "cms/checkId.do", "dsUserInfo", "", "", "fnCallBack");
        }

        /************************************************************************************************
         * CALLBACK 콜백 처리부분(Transaction, Popup)
         ************************************************************************************************/
        /**
         * description Transaction CallBack 함수
        */
        this.fnCallBack = function (sSvcId, nErrorCode, sErrorMsg)
        {
        	switch (sSvcId) {
        		case "saveUser":
        			if(this.callbackMsg == "success"){
        				this.gfnAlert("CM_MSG_JOIN_SUCCESS");  // 회원가입이 완료되었습니다.
        				this.dsUserInfo.clearData();
        				this.dsUserInfo.addRow();
        				this.divMemberJoin.form.rdPrvc.set_index(1);
        			}else{
        				this.gfnAlert("CM_MSG_TEST_3");  // 저장에 실패하였습니다.
        			}
        		break;
        		case "checkId":
        			if(this.callbackMsg == "success"){
        				this.gfnAlert("사용할 수 있는 아이디입니다.");
        				idCheck = true;
        			}else{
        				this.gfnAlert("이미 사용중인 아이디입니다.");
        				idCheck = false;
        				return;
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
        		case "memberInsttPopup":	// 사용자 조회 팝업
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
         * description 패스워드 입력창 암호화 처리
        */
        this.divMemberJoin_edtPasswd_oninput = function(obj,e)
        {
        	this.divMemberJoin.form.edtPasswd.set_password(true);
        	this.divMemberJoin.form.edtPasswd2.set_password(true);
        };

        /**
         * description 저장버튼 클릭
        */
        this.divMemberJoin_btnApplication_onclick = function(obj,e)
        {
        	if(idCheck == false){
        		this.gfnAlert("아이디 중복확인을 진행해주세요.");
        		return false;
        	}

        	if (!this.fnIdValidation()) {// 아이디 체크 및 ID null체크
        		return;
            }
        	if (!this.fnNullValidation()) {// null 체크
        		return;
            }

        	if (!this.fnPasswdValidation()) {// 비번 체크
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

        	if (!this.fnPrvcValidation()) {// 개인정보 수집 및 이용동의 체크
        		this.gfnAlert("개인정보 수집 및 이용동의를 확인해주세요.");
        		return;
            }
        	this.fnSave();
        };

        /**
         * description 소속기관 조회 버튼클릭
        */
        this.divMemberJoin_btnInsttNm_onclick = function(obj,e)
        {
        	this.gfnOpenPopup("memberInsttPopup", "sys::cms/CMS_1010P.xfdl", "", "fnPopupAfter", "");
        };

        /**
         * description 아이디 중복체크 버튼 클릭
        */

        this.divMemberJoin_btnCheckId_onclick = function(obj,e)
        {
        	if (!this.fnIdValidation()) {// 아이디 체크 및 ID null체크
        		return;
            }

        	this.fnCheckId();
        };

        this.divMemberJoin_edtMemberId_onchanged = function(obj,e)
        {
        	idCheck = false;
        };

        /**
         * description 닫기버튼
        */
        this.divPopup_btnPopupClose_onclick = function(obj,e)
        {

        };

        /************************************************************************************************
        * 사용자 FUNCTION 영역
        ************************************************************************************************/
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
        	if(this.gfnIsNull(this.dsUserInfo.getColumn(0, "passwd"))) {
        		this.gfnAlert("비밀번호를 입력해주세요.");
        		return false;
            }
        	if(this.gfnIsNull(this.dsUserInfo.getColumn(0, "passwd2"))) {
        		this.gfnAlert("비밀번호(확인)을 입력해주세요.");
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
         * description 아이디 체크
        */
        this.fnIdValidation = function ()
        {
        	// 아이디 체크
        	if(this.gfnIsNull(this.dsUserInfo.getColumn(0, "memberId"))) {
        		this.gfnAlert("아이디를 입력해주세요.");
        		return;
            }else{
        		// ID 자릿수 체크
        		var id = this.dsUserInfo.getColumn(0, "memberId");
        		var id2 = id.length;
        		var rslt = false;

        		// 영어와 숫자만 입력 가능
        		var sRegExp = "[a-z0-9]{"+(min-1)+","+max+"}";
        		var objRegExp = new RegExp(sRegExp, "i");
                var objResult = objRegExp.exec(id);
        		if (objResult == id){
        			id2 >= min ?  (id2 <= max ? rslt = true : rslt = false) : rslt = false;
        		} else{
        			rslt = false;
        		}
        		if(rslt == false){
        			this.gfnAlert("아이디는 "+min+"~"+max+"자의 영문, 숫자만 사용해 주세요.");
        		}
        		return rslt;
        	}
        }

        /**
         * description 비밀번호 체크	숫자, 영어, 특수기호 체크
        */
        this.fnPasswdValidation = function ()
        {
        	var pass = this.dsUserInfo.getColumn(0, "passwd");
        	var pass2 = this.dsUserInfo.getColumn(0, "passwd2");
        	var passLength = pass.length;
        	// 비밀번호 값 체크
        	if(pass != pass2){
        		this.gfnAlert("비밀번호와 비밀번호 확인 값이 다릅니다.");
        		return;
        	}else{
        		//최소 8 자, 최대16재 최소 하나의 문자, 하나의 숫자 및 하나의 특수 문자
        		var rslt = false;
        		var sRegExp = "[a-zA-Z]";	// 영문
        		var sRegExp2 = "[0-9]";	// 숫자
        		var sRegExp3 = "[$@$!%*#?&]";	// 특수기호
        		var objRegExp = new RegExp(sRegExp, "i");	// i가 대소문자 허용
        		var objRegExp2 = new RegExp(sRegExp2, "i");
        		var objRegExp3 = new RegExp(sRegExp3, "i");
        		var objResult = objRegExp.exec(pass);
        		var objResult2 = objRegExp2.exec(pass);
        		var objResult3 = objRegExp3.exec(pass);

        		if (objResult != null){
        			if (objResult2 != null){
        				if (objResult3 != null){
        					// 길이 8 ~ 16 체크
        					passLength >= 8 ?  (passLength <= 16 ? rslt = true : rslt = false) : rslt = false;
        				}
        			}
        		}else{
        			rslt = false;
        		}
        		if(rslt == false){
        			this.gfnAlert("비밀번호는 8~16자리 영문 대소문자, 숫자,\n 특수문자 중 3가지 이상 조합으로 만들어주세요.");
        		}
        		return rslt;
        	}
        }

        /**
         * description 이메일 체크
        */
        this.fnEmailValidation = function()
        {
        	var email = this.dsUserInfo.getColumn(0, "emlAddr");
        	var vChk = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890-._@";
            var i, pos, vEmailFirst, vEmailLast;

            if (this.fn_checkNull(email))
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

            pos = this.fn_pos(email, "@");

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

            if (this.fn_pos(vEmailLast, ".") <= 0
             || this.fn_pos(vEmailLast, "..") >= 0
             || this.fn_right(vEmailLast, 1) == ".")
            {
                return false;
            }

            if (this.fn_pos(vEmailLast, "@") >= 0)
            {
                return false;
            }

            return true;

        }

        this.fn_checkNull = function(sValue)
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

        this.fn_pos = function(sOrg, sFind, nStart)
        {
            if (this.fn_checkNull(sOrg) || this.fn_checkNull(sFind))
            {
                return -1;
            }

            if (this.fn_checkNull(nStart))
            {
                nStart = 0;
            }

            return sOrg.indexOf(sFind, nStart);
        }

        this.fn_right = function(sOrg, nSize)
        {
            if (this.fn_checkNull(sOrg) || this.fn_checkNull(nSize))
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
        	//11 자리 012-3456-7890, 10~9자리 012-345-6789 01-234-5678 02-1234-5678, 8자리 1234-5678, 4자리 1234
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
         * description 개인정보 수집 제공동의 체크
        */
        this.fnPrvcValidation = function ()
        {
        	var radio = this.divMemberJoin.form.rdPrvc.index;
        	if(radio == 0){
        		this.dsUserInfo.setColumn(0, "prvcClctAgreYn", "Y");	// 개인정보 수집동의 여부
        		this.dsUserInfo.setColumn(0, "prvcPvsnAgreYn", "Y");	// 개인정보 제공동의 여부
        		return true;
        	}else{
        		return false;
        	}
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divMemberJoin.form.Static04_00_00_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.divMemberJoin.form.staTitle.addEventHandler("onclick",this.Static09_onclick,this);
            this.divMemberJoin.form.Static04_00_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.divMemberJoin.form.Static07_01_01_00_00.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.divMemberJoin.form.sta001.addEventHandler("onclick",this.divMemberJoin_sta001_onclick,this);
            this.divMemberJoin.form.edtMemberId.addEventHandler("onchanged",this.DivMemberJoin_edtMemberId_onchanged,this);
            this.divMemberJoin.form.Static07_01_01_00.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.divMemberJoin.form.Static07_01_01_01.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.divMemberJoin.form.Static07_01_01_00_01.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.divMemberJoin.form.Static07_01_01_00_01_00.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.divMemberJoin.form.Static07_01_01_00_01_01.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.divMemberJoin.form.Static07_01_01_01_00.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.divMemberJoin.form.edtPasswd.addEventHandler("oninput",this.divMemberJoin_edtPasswd_oninput,this);
            this.divMemberJoin.form.edtPasswd2.addEventHandler("oninput",this.divMemberJoin_edtPasswd_oninput,this);
            this.divMemberJoin.form.Static07_01_01_00_01_00_01.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.divMemberJoin.form.Static07_01_01_01_01.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.divMemberJoin.form.Static07_01_01_01_01_00.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.divMemberJoin.form.Static07_01_01_01_01_00_00.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.divMemberJoin.form.Static07_00_00_00.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.divMemberJoin.form.btnInsttNm.addEventHandler("onclick",this.divMemberJoin_btnInsttNm_onclick,this);
            this.divMemberJoin.form.Static04_00_00_01_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.divMemberJoin.form.btnClose.addEventHandler("onclick",this.divPopup_btnPopupClose_onclick,this);
            this.divMemberJoin.form.btnApplication.addEventHandler("onclick",this.divMemberJoin_btnApplication_onclick,this);
            this.divMemberJoin.form.btnCheckId.addEventHandler("onclick",this.divMemberJoin_btnCheckId_onclick,this);
            this.Static04_00_00_01_00_00.addEventHandler("onclick",this.Static31_onclick,this);
        };
        this.loadIncludeScript("CMS_1010M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
