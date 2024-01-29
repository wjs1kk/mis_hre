(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("memberJoin");
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
            obj = new Static("sta_01","50","10","500","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("메시지관리");
            obj.set_cssclass("sta_WF_compTitle01");
            obj.set_expr("comp.parent.getOwnerFrame().tabArgs.title");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","50","50",null,null,"50","30",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_00_00","110","0","60","45",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("h 45");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static37_00","20","11","250","27",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("15");
            obj.set_text("회원 정보");
            obj.set_cssclass("sta_WF_subTitle01");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_00","20","0","60","18",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("16");
            obj.set_text("h 18");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static07_01_01_00_00","20","45",null,"1","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("17");
            obj.set_text("");
            obj.set_cssclass("sta_WF_borCondition02");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("in_TRP_NM","20","46","200","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("18");
            obj.set_text("회원 ID");
            obj.set_cssclass("sta_WF_condition02");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("SBJ","228","50","200","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_cssclass("essential");
            obj.set_password("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static07_01_01_00","20","80",null,"1","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("20");
            obj.set_text("");
            obj.set_cssclass("sta_WF_borCondition02");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("in_Type","20","81","200","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("21");
            obj.set_text("회원명(한글)");
            obj.set_cssclass("sta_WF_condition02");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("in_IN_OUT00","20","116","200","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("22");
            obj.set_text("회원명(영문)");
            obj.set_cssclass("sta_WF_condition02");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static07_01_01_01","20","219",null,"1","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("23");
            obj.set_text("");
            obj.set_cssclass("sta_WF_borCondition02");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static07_01_01_00_01","20","115",null,"1","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("25");
            obj.set_text("");
            obj.set_cssclass("sta_WF_borCondition02");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static07_01_01_00_01_00","20","150",null,"1","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("26");
            obj.set_text("");
            obj.set_cssclass("sta_WF_borCondition02");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static10_00","220","46","8",null,null,"80",null,null,null,null,this.Div00.form);
            obj.set_taborder("19");
            obj.set_text("w8");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static10_01",null,"0","20",null,"0","0",null,null,null,null,this.Div00.form);
            obj.set_taborder("28");
            obj.set_text("w20");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static07_01_01_00_01_01","20","359",null,"1","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("29");
            obj.set_text("");
            obj.set_cssclass("sta_WF_borCondition02");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static07_01_01_01_00","20","510",null,"1","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("30");
            obj.set_text("");
            obj.set_cssclass("sta_WF_borCondition02");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("in_IN_OUT00_00","20","360","200","150",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("31");
            obj.set_text("개인정보 수집 및 이용 동의");
            obj.set_cssclass("sta_WF_condition02");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("in_Type00","20","325","200","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("32");
            obj.set_text("휴대폰 전화번호");
            obj.set_cssclass("sta_WF_condition02");
            this.Div00.addChild(obj.name, obj);

            obj = new Radio("Radio00","228","365","136","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var Div00_form_Radio00_innerdataset = new nexacro.NormalDataset("Div00_form_Radio00_innerdataset", obj);
            Div00_form_Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">동의</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">비동의</Col></Row></Rows>");
            obj.set_innerdataset(Div00_form_Radio00_innerdataset);
            obj.set_text("비동의");
            obj.set_value("N");
            obj.set_index("1");
            this.Div00.addChild(obj.name, obj);

            obj = new TextArea("TextArea01_00","228","399",null,"106","40",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            obj.set_value("가. 개인정보의 수집 및 이용 목적\n① 과제관리시스템은 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 개인정보 보호법 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.\n1. 과제관리시스템 서비스 제공을 위한 회원관리\n1) 공간정보 다운로드, 오픈API 신청 및 활용 등 포털 서비스 제공과 서비스 부정이용 방지를 목적으로 개인정보를\n   처리합니다.\n\n나. 정보주체와 법정대리인의 권리ㆍ의무 및 행사방법\n① 정보주체(만 14세 미만인 경우에는 법정대리인을 말함)는 언제든지 개인정보 열람·정정·삭제·처리정지 요구 등의 권리를 행사할 수 있습니다.\n② 제1항에 따른 권리 행사는 개인정보보호법 시행규칙 별지 제8호 서식에 따라 작성 후 서면, 전자우편 등을 통하여 하실 수 있으며, 기관은 이에 대해 지체 없이 조치하겠습니다.\n③ 제1항에 따른 권리 행사는 정보주체의 법정대리인이나 위임을 받은 자 등 대리인을 통하여 하실 수 있습니다. 이 경우 개인정보 보호법 시행규칙 별지 제11호 서식에 따른 위임장을 제출하셔야 합니다.\n④ 개인정보 열람 및 처리정지 요구는 개인정보 보호법 제35조 제5항, 제37조 제2항에 의하여 정보주체의 권리가 제한 될 수 있습니다.\n⑤ 개인정보의 정정 및 삭제 요구는 다른 법령에서 그 개인정보가 수집 대상으로 명시되어 있는 경우에는 그 삭제를 요구할 수 없습니다.\n⑥ 정보주체 권리에 따른 열람의 요구, 정정ㆍ삭제의 요구, 처리정지의 요구 시 열람 등 요구를 한 자가 본인이거나 정당한 대리인인지를 확인합니다.\n\n다. 수집하는 개인정보의 항목\n① 과제관리시스템 회원정보(필수): 이름, 이메일(아이디), 비밀번호\n\n라. 개인정보의 보유 및 이용기간\n① 과제관리시스템은 법령에 따른 개인정보 보유ㆍ이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의 받은 개인정보 보유ㆍ이용기간 내에서 개인정보를 처리ㆍ보유합니다.\n1. 과제관리시스템 회원정보\n- 수집근거: 정보주체의 동의\n- 보존기간: 회원 탈퇴 요청 전까지(1년 경과 시 재동의)\n- 보존근거: 정보주체의 동의\n\n마. 동의 거부 권리 및 동의 거부에 따른 불이익\n위 개인정보의 수집 및 이용에 대한 동의를 거부할 수 있으나, 동의를 거부할 경우 회원 가입이 제한됩니다.");
            obj.set_scrolltype("vertical");
            obj.set_wordWrap("char");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("SBJ00","228","120","200","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_cssclass("essential");
            obj.set_inputtype("english");
            obj.set_imemode("alpha");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("in_IN_OUT00_01","20","151","200","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("33");
            obj.set_text("비밀번호");
            obj.set_cssclass("sta_WF_condition02");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("SBJ00_00","228","155","200","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_cssclass("essential");
            obj.set_maxlength("0");
            obj.set_password("false");
            obj.set_text("null");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("SBJ00_00_00","228","189","200","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_cssclass("essential");
            obj.set_maxlength("0");
            obj.set_password("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("in_IN_OUT00_01_00","20","185","200","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("35");
            obj.set_text("비밀번호(확인)");
            obj.set_cssclass("sta_WF_condition02");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static07_01_01_00_01_00_01","20","185",null,"1","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("34");
            obj.set_text("");
            obj.set_cssclass("sta_WF_borCondition02");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("in_IN_OUT00_01_00_00","20","220","200","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("36");
            obj.set_text("소속기관");
            obj.set_cssclass("sta_WF_condition02");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("SBJ00_00_00_00","354","224","200","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_cssclass("essential");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static07_01_01_01_01","20","254",null,"1","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("37");
            obj.set_text("");
            obj.set_cssclass("sta_WF_borCondition02");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("in_IN_OUT00_01_00_00_00","20","255","200","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("38");
            obj.set_text("이메일주소");
            obj.set_cssclass("sta_WF_condition02");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("SBJ00_00_00_00_00","228","259","326","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_cssclass("essential");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static07_01_01_01_01_00","20","289",null,"1","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("39");
            obj.set_text("");
            obj.set_cssclass("sta_WF_borCondition02");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("in_IN_OUT00_01_00_00_00_00","20","290","200","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("40");
            obj.set_text("사무실 전화번호");
            obj.set_cssclass("sta_WF_condition02");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("SBJ00_00_00_00_00_00","228","294","200","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_cssclass("essential");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static07_01_01_01_01_00_00","20","324",null,"1","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("41");
            obj.set_text("");
            obj.set_cssclass("sta_WF_borCondition02");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static10","0","-1","20",null,null,"0",null,null,null,null,this.Div00.form);
            obj.set_taborder("27");
            obj.set_text("w20");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00","20","45","1","466",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_borCondition02_v");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("SBJ01","228","85","200","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_cssclass("essential");
            obj.set_imemode("hangul");
            obj.set_inputfilter("space");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("SBJ00_00_00_00_00_00_00","228","329","200","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_cssclass("essential");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00","81","46","25","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("42");
            obj.set_text("*");
            obj.set_cssclass("essential");
            obj.set_tooltiptext("필수입력");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","109","81","25","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("43");
            obj.set_text("*");
            obj.set_cssclass("essential");
            obj.set_tooltiptext("필수입력");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","109","116","25","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("44");
            obj.set_text("*");
            obj.set_cssclass("essential");
            obj.set_tooltiptext("필수입력");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","89","151","25","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("45");
            obj.set_text("*");
            obj.set_cssclass("essential");
            obj.set_tooltiptext("필수입력");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00","121","186","25","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("46");
            obj.set_text("*");
            obj.set_cssclass("essential");
            obj.set_tooltiptext("필수입력");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00_00","89","220","25","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("47");
            obj.set_text("*");
            obj.set_cssclass("essential");
            obj.set_tooltiptext("필수입력");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00_00_00","103","255","25","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("48");
            obj.set_text("*");
            obj.set_cssclass("essential");
            obj.set_tooltiptext("필수입력");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00_00_00_00","132","290","25","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("49");
            obj.set_text("*");
            obj.set_cssclass("essential");
            obj.set_tooltiptext("필수입력");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00_00_00_00_00","132","325","25","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("50");
            obj.set_text("*");
            obj.set_cssclass("essential");
            obj.set_tooltiptext("필수입력");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00_00_00_00_00_00","193","418","25","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("51");
            obj.set_text("*");
            obj.set_cssclass("essential");
            obj.set_tooltiptext("필수입력");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_instt_nm","323","224","26","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("52");
            obj.set_cssclass("btn_WF_frmSearch");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_roleNm","228","224","90","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static10_00_00","318","220","5","35",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("53");
            obj.set_text("w8");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static10_00_00_00","349","220","5","35",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("54");
            obj.set_text("w8");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","602","50","416","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("55");
            obj.set_text("n ~ m자의 영문, 숫자만 사용해 주세요.");
            obj.set_color("darkgray");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00","445","155","416","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("56");
            obj.set_text("8~16자리 영문 대소문자, 숫자, 특수문자 중 3가지 이상 조합으로 만들어주세요.");
            obj.set_color("darkgray");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_01_00_00","0",null,null,"25","0","54",null,null,null,null,this.Div00.form);
            obj.set_taborder("57");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_g001","904",null,"12","28",null,"26",null,null,null,null,this.Div00.form);
            obj.set_taborder("58");
            obj.set_text("w12");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btnPopupClose","916",null,"65","28",null,"26",null,null,null,null,this.Div00.form);
            obj.set_text("닫기");
            obj.set_cssclass("");
            obj.set_visible("true");
            obj.set_taborder("14");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_application","840",null,"65","28",null,"26",null,null,null,null,this.Div00.form);
            obj.set_text("신청");
            obj.set_cssclass("btn_WF_icoApplication");
            obj.set_taborder("13");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","445","294","910","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("59");
            obj.set_text("전화번호 양식에 맞추어 입력해주세요. ex) 11 자리 012-3456-7890, 10~9자리 012-345-6789 01-234-5678 02-1234-5678, 8자리 1234-5678, 7자리 123-4567, 4자리 1234");
            obj.set_color("darkgray");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","445","329","471","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("60");
            obj.set_text("휴대폰번호 양식에 맞추어 입력해주세요. ex) 11 자리 012-3456-7890, 10자리 012-345-6789");
            obj.set_color("darkgray");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btnCheckId","436","50","152","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_text("아이디 중복확인");
            obj.set_cssclass("btn_WF_icoModify");
            obj.set_taborder("61");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static10_00_00_00_00","428","45","8","35",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("62");
            obj.set_text("w8");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.Div00.addChild(obj.name, obj);

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
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,
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

                p.Static37_00.set_taborder("15");
                p.Static37_00.set_text("회원 정보");
                p.Static37_00.set_cssclass("sta_WF_subTitle01");
                p.Static37_00.move("20","11","250","27",null,null);

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

                p.in_TRP_NM.set_taborder("18");
                p.in_TRP_NM.set_text("회원 ID");
                p.in_TRP_NM.set_cssclass("sta_WF_condition02");
                p.in_TRP_NM.move("20","46","200","34",null,null);

                p.SBJ.set_taborder("1");
                p.SBJ.set_cssclass("essential");
                p.SBJ.set_password("false");
                p.SBJ.move("228","50","200","26",null,null);

                p.Static07_01_01_00.set_taborder("20");
                p.Static07_01_01_00.set_text("");
                p.Static07_01_01_00.set_cssclass("sta_WF_borCondition02");
                p.Static07_01_01_00.move("20","80",null,"1","20",null);

                p.in_Type.set_taborder("21");
                p.in_Type.set_text("회원명(한글)");
                p.in_Type.set_cssclass("sta_WF_condition02");
                p.in_Type.move("20","81","200","34",null,null);

                p.in_IN_OUT00.set_taborder("22");
                p.in_IN_OUT00.set_text("회원명(영문)");
                p.in_IN_OUT00.set_cssclass("sta_WF_condition02");
                p.in_IN_OUT00.move("20","116","200","34",null,null);

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

                p.in_IN_OUT00_00.set_taborder("31");
                p.in_IN_OUT00_00.set_text("개인정보 수집 및 이용 동의");
                p.in_IN_OUT00_00.set_cssclass("sta_WF_condition02");
                p.in_IN_OUT00_00.move("20","360","200","150",null,null);

                p.in_Type00.set_taborder("32");
                p.in_Type00.set_text("휴대폰 전화번호");
                p.in_Type00.set_cssclass("sta_WF_condition02");
                p.in_Type00.move("20","325","200","34",null,null);

                p.Radio00.set_taborder("11");
                p.Radio00.set_codecolumn("codecolumn");
                p.Radio00.set_datacolumn("datacolumn");
                p.Radio00.set_direction("vertical");
                p.Radio00.set_innerdataset(Div00_form_Radio00_innerdataset);
                p.Radio00.set_value("N");
                p.Radio00.set_index("1");
                p.Radio00.move("228","365","136","26",null,null);

                p.TextArea01_00.set_taborder("12");
                p.TextArea01_00.set_value("가. 개인정보의 수집 및 이용 목적\n① 과제관리시스템은 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 개인정보 보호법 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.\n1. 과제관리시스템 서비스 제공을 위한 회원관리\n1) 공간정보 다운로드, 오픈API 신청 및 활용 등 포털 서비스 제공과 서비스 부정이용 방지를 목적으로 개인정보를\n   처리합니다.\n\n나. 정보주체와 법정대리인의 권리ㆍ의무 및 행사방법\n① 정보주체(만 14세 미만인 경우에는 법정대리인을 말함)는 언제든지 개인정보 열람·정정·삭제·처리정지 요구 등의 권리를 행사할 수 있습니다.\n② 제1항에 따른 권리 행사는 개인정보보호법 시행규칙 별지 제8호 서식에 따라 작성 후 서면, 전자우편 등을 통하여 하실 수 있으며, 기관은 이에 대해 지체 없이 조치하겠습니다.\n③ 제1항에 따른 권리 행사는 정보주체의 법정대리인이나 위임을 받은 자 등 대리인을 통하여 하실 수 있습니다. 이 경우 개인정보 보호법 시행규칙 별지 제11호 서식에 따른 위임장을 제출하셔야 합니다.\n④ 개인정보 열람 및 처리정지 요구는 개인정보 보호법 제35조 제5항, 제37조 제2항에 의하여 정보주체의 권리가 제한 될 수 있습니다.\n⑤ 개인정보의 정정 및 삭제 요구는 다른 법령에서 그 개인정보가 수집 대상으로 명시되어 있는 경우에는 그 삭제를 요구할 수 없습니다.\n⑥ 정보주체 권리에 따른 열람의 요구, 정정ㆍ삭제의 요구, 처리정지의 요구 시 열람 등 요구를 한 자가 본인이거나 정당한 대리인인지를 확인합니다.\n\n다. 수집하는 개인정보의 항목\n① 과제관리시스템 회원정보(필수): 이름, 이메일(아이디), 비밀번호\n\n라. 개인정보의 보유 및 이용기간\n① 과제관리시스템은 법령에 따른 개인정보 보유ㆍ이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의 받은 개인정보 보유ㆍ이용기간 내에서 개인정보를 처리ㆍ보유합니다.\n1. 과제관리시스템 회원정보\n- 수집근거: 정보주체의 동의\n- 보존기간: 회원 탈퇴 요청 전까지(1년 경과 시 재동의)\n- 보존근거: 정보주체의 동의\n\n마. 동의 거부 권리 및 동의 거부에 따른 불이익\n위 개인정보의 수집 및 이용에 대한 동의를 거부할 수 있으나, 동의를 거부할 경우 회원 가입이 제한됩니다.");
                p.TextArea01_00.set_scrolltype("vertical");
                p.TextArea01_00.set_wordWrap("char");
                p.TextArea01_00.set_readonly("true");
                p.TextArea01_00.move("228","399",null,"106","40",null);

                p.SBJ00.set_taborder("3");
                p.SBJ00.set_cssclass("essential");
                p.SBJ00.set_inputtype("english");
                p.SBJ00.set_imemode("alpha");
                p.SBJ00.move("228","120","200","26",null,null);

                p.in_IN_OUT00_01.set_taborder("33");
                p.in_IN_OUT00_01.set_text("비밀번호");
                p.in_IN_OUT00_01.set_cssclass("sta_WF_condition02");
                p.in_IN_OUT00_01.move("20","151","200","34",null,null);

                p.SBJ00_00.set_taborder("4");
                p.SBJ00_00.set_cssclass("essential");
                p.SBJ00_00.set_maxlength("0");
                p.SBJ00_00.set_password("false");
                p.SBJ00_00.move("228","155","200","26",null,null);

                p.SBJ00_00_00.set_taborder("5");
                p.SBJ00_00_00.set_cssclass("essential");
                p.SBJ00_00_00.set_maxlength("0");
                p.SBJ00_00_00.set_password("false");
                p.SBJ00_00_00.move("228","189","200","26",null,null);

                p.in_IN_OUT00_01_00.set_taborder("35");
                p.in_IN_OUT00_01_00.set_text("비밀번호(확인)");
                p.in_IN_OUT00_01_00.set_cssclass("sta_WF_condition02");
                p.in_IN_OUT00_01_00.move("20","185","200","34",null,null);

                p.Static07_01_01_00_01_00_01.set_taborder("34");
                p.Static07_01_01_00_01_00_01.set_text("");
                p.Static07_01_01_00_01_00_01.set_cssclass("sta_WF_borCondition02");
                p.Static07_01_01_00_01_00_01.move("20","185",null,"1","20",null);

                p.in_IN_OUT00_01_00_00.set_taborder("36");
                p.in_IN_OUT00_01_00_00.set_text("소속기관");
                p.in_IN_OUT00_01_00_00.set_cssclass("sta_WF_condition02");
                p.in_IN_OUT00_01_00_00.move("20","220","200","34",null,null);

                p.SBJ00_00_00_00.set_taborder("7");
                p.SBJ00_00_00_00.set_cssclass("essential");
                p.SBJ00_00_00_00.move("354","224","200","26",null,null);

                p.Static07_01_01_01_01.set_taborder("37");
                p.Static07_01_01_01_01.set_text("");
                p.Static07_01_01_01_01.set_cssclass("sta_WF_borCondition02");
                p.Static07_01_01_01_01.move("20","254",null,"1","20",null);

                p.in_IN_OUT00_01_00_00_00.set_taborder("38");
                p.in_IN_OUT00_01_00_00_00.set_text("이메일주소");
                p.in_IN_OUT00_01_00_00_00.set_cssclass("sta_WF_condition02");
                p.in_IN_OUT00_01_00_00_00.move("20","255","200","34",null,null);

                p.SBJ00_00_00_00_00.set_taborder("8");
                p.SBJ00_00_00_00_00.set_cssclass("essential");
                p.SBJ00_00_00_00_00.move("228","259","326","26",null,null);

                p.Static07_01_01_01_01_00.set_taborder("39");
                p.Static07_01_01_01_01_00.set_text("");
                p.Static07_01_01_01_01_00.set_cssclass("sta_WF_borCondition02");
                p.Static07_01_01_01_01_00.move("20","289",null,"1","20",null);

                p.in_IN_OUT00_01_00_00_00_00.set_taborder("40");
                p.in_IN_OUT00_01_00_00_00_00.set_text("사무실 전화번호");
                p.in_IN_OUT00_01_00_00_00_00.set_cssclass("sta_WF_condition02");
                p.in_IN_OUT00_01_00_00_00_00.move("20","290","200","34",null,null);

                p.SBJ00_00_00_00_00_00.set_taborder("9");
                p.SBJ00_00_00_00_00_00.set_cssclass("essential");
                p.SBJ00_00_00_00_00_00.move("228","294","200","26",null,null);

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

                p.SBJ01.set_taborder("2");
                p.SBJ01.set_cssclass("essential");
                p.SBJ01.set_imemode("hangul");
                p.SBJ01.set_inputfilter("space");
                p.SBJ01.move("228","85","200","26",null,null);

                p.SBJ00_00_00_00_00_00_00.set_taborder("10");
                p.SBJ00_00_00_00_00_00_00.set_cssclass("essential");
                p.SBJ00_00_00_00_00_00_00.move("228","329","200","26",null,null);

                p.Static01_00.set_taborder("42");
                p.Static01_00.set_text("*");
                p.Static01_00.set_cssclass("essential");
                p.Static01_00.set_tooltiptext("필수입력");
                p.Static01_00.move("81","46","25","34",null,null);

                p.Static01_00_00.set_taborder("43");
                p.Static01_00_00.set_text("*");
                p.Static01_00_00.set_cssclass("essential");
                p.Static01_00_00.set_tooltiptext("필수입력");
                p.Static01_00_00.move("109","81","25","34",null,null);

                p.Static01_00_00_00.set_taborder("44");
                p.Static01_00_00_00.set_text("*");
                p.Static01_00_00_00.set_cssclass("essential");
                p.Static01_00_00_00.set_tooltiptext("필수입력");
                p.Static01_00_00_00.move("109","116","25","34",null,null);

                p.Static01_00_00_00_00.set_taborder("45");
                p.Static01_00_00_00_00.set_text("*");
                p.Static01_00_00_00_00.set_cssclass("essential");
                p.Static01_00_00_00_00.set_tooltiptext("필수입력");
                p.Static01_00_00_00_00.move("89","151","25","34",null,null);

                p.Static01_00_00_00_00_00.set_taborder("46");
                p.Static01_00_00_00_00_00.set_text("*");
                p.Static01_00_00_00_00_00.set_cssclass("essential");
                p.Static01_00_00_00_00_00.set_tooltiptext("필수입력");
                p.Static01_00_00_00_00_00.move("121","186","25","34",null,null);

                p.Static01_00_00_00_00_00_00.set_taborder("47");
                p.Static01_00_00_00_00_00_00.set_text("*");
                p.Static01_00_00_00_00_00_00.set_cssclass("essential");
                p.Static01_00_00_00_00_00_00.set_tooltiptext("필수입력");
                p.Static01_00_00_00_00_00_00.move("89","220","25","34",null,null);

                p.Static01_00_00_00_00_00_00_00.set_taborder("48");
                p.Static01_00_00_00_00_00_00_00.set_text("*");
                p.Static01_00_00_00_00_00_00_00.set_cssclass("essential");
                p.Static01_00_00_00_00_00_00_00.set_tooltiptext("필수입력");
                p.Static01_00_00_00_00_00_00_00.move("103","255","25","34",null,null);

                p.Static01_00_00_00_00_00_00_00_00.set_taborder("49");
                p.Static01_00_00_00_00_00_00_00_00.set_text("*");
                p.Static01_00_00_00_00_00_00_00_00.set_cssclass("essential");
                p.Static01_00_00_00_00_00_00_00_00.set_tooltiptext("필수입력");
                p.Static01_00_00_00_00_00_00_00_00.move("132","290","25","34",null,null);

                p.Static01_00_00_00_00_00_00_00_00_00.set_taborder("50");
                p.Static01_00_00_00_00_00_00_00_00_00.set_text("*");
                p.Static01_00_00_00_00_00_00_00_00_00.set_cssclass("essential");
                p.Static01_00_00_00_00_00_00_00_00_00.set_tooltiptext("필수입력");
                p.Static01_00_00_00_00_00_00_00_00_00.move("132","325","25","34",null,null);

                p.Static01_00_00_00_00_00_00_00_00_00_00.set_taborder("51");
                p.Static01_00_00_00_00_00_00_00_00_00_00.set_text("*");
                p.Static01_00_00_00_00_00_00_00_00_00_00.set_cssclass("essential");
                p.Static01_00_00_00_00_00_00_00_00_00_00.set_tooltiptext("필수입력");
                p.Static01_00_00_00_00_00_00_00_00_00_00.move("193","418","25","34",null,null);

                p.btn_instt_nm.set_taborder("52");
                p.btn_instt_nm.set_cssclass("btn_WF_frmSearch");
                p.btn_instt_nm.move("323","224","26","26",null,null);

                p.edt_roleNm.set_taborder("6");
                p.edt_roleNm.set_readonly("true");
                p.edt_roleNm.move("228","224","90","26",null,null);

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

                p.Static00.set_taborder("55");
                p.Static00.set_text("n ~ m자의 영문, 숫자만 사용해 주세요.");
                p.Static00.set_color("darkgray");
                p.Static00.set_font("normal 8pt/normal \"Arial\"");
                p.Static00.move("602","50","416","26",null,null);

                p.Static00_00.set_taborder("56");
                p.Static00_00.set_text("8~16자리 영문 대소문자, 숫자, 특수문자 중 3가지 이상 조합으로 만들어주세요.");
                p.Static00_00.set_color("darkgray");
                p.Static00_00.set_font("normal 8pt/normal \"Arial\"");
                p.Static00_00.move("445","155","416","26",null,null);

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

                p.btnPopupClose.set_text("닫기");
                p.btnPopupClose.set_cssclass("");
                p.btnPopupClose.set_visible("true");
                p.btnPopupClose.set_taborder("14");
                p.btnPopupClose.move("916",null,"65","28",null,"26");

                p.btn_application.set_text("신청");
                p.btn_application.set_cssclass("btn_WF_icoApplication");
                p.btn_application.set_taborder("13");
                p.btn_application.move("840",null,"65","28",null,"26");

                p.Static00_00_00.set_taborder("59");
                p.Static00_00_00.set_text("전화번호 양식에 맞추어 입력해주세요. ex) 11 자리 012-3456-7890, 10~9자리 012-345-6789 01-234-5678 02-1234-5678, 8자리 1234-5678, 7자리 123-4567, 4자리 1234");
                p.Static00_00_00.set_color("darkgray");
                p.Static00_00_00.set_font("normal 8pt/normal \"Arial\"");
                p.Static00_00_00.move("445","294","910","26",null,null);

                p.Static00_00_00_00.set_taborder("60");
                p.Static00_00_00_00.set_text("휴대폰번호 양식에 맞추어 입력해주세요. ex) 11 자리 012-3456-7890, 10자리 012-345-6789");
                p.Static00_00_00_00.set_color("darkgray");
                p.Static00_00_00_00.set_font("normal 8pt/normal \"Arial\"");
                p.Static00_00_00_00.move("445","329","471","26",null,null);

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
            this.Div00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div00.form
            obj = new Layout("screen00","",0,0,this.Div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.Div00.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1920,670,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_cssclass("frm_WF_comp");
                p.set_titletext("회원가입");

                p.sta_01.set_taborder("0");
                p.sta_01.set_text("메시지관리");
                p.sta_01.set_cssclass("sta_WF_compTitle01");
                p.sta_01.set_expr("comp.parent.getOwnerFrame().tabArgs.title");
                p.sta_01.move("50","10","500","30",null,null);

                p.Div00.set_taborder("1");
                p.Div00.set_text("");
                p.Div00.move("50","50",null,null,"50","30");

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
            obj = new BindItem("item0","Div00.form.SBJ","value","dsUserInfo","memberId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Div00.form.SBJ01","value","dsUserInfo","memberNmKr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Div00.form.SBJ00","value","dsUserInfo","memberNmEn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","Div00.form.SBJ00_00","value","dsUserInfo","passwd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","Div00.form.edt_roleNm","value","dsUserInfo","ogdpInstCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","Div00.form.SBJ00_00_00_00","value","dsUserInfo","ogdpInstNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","Div00.form.SBJ00_00_00_00_00","value","dsUserInfo","emlAddr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","Div00.form.SBJ00_00_00_00_00_00","value","dsUserInfo","ofcTelno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","Div00.form.SBJ00_00_00_00_00_00_00","value","dsUserInfo","mblTelno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","Div00.form.SBJ00_00_00","value","dsUserInfo","passwd2");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("memberJoin.xfdl","lib::common.xjs");
        this.registerScript("memberJoin.xfdl", function() {
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
        	this.Div00.form.Static00.set_text(min + ' ~ ' + max + '자의 영문, 숫자만 사용해 주세요.');
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
        				this.Div00.form.Radio00.set_index(1);
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
        this.Div00_SBJ00_00_oninput = function(obj,e)
        {
        	this.Div00.form.SBJ00_00.set_password(true);
        	this.Div00.form.SBJ00_00_00.set_password(true);
        };

        /**
         * description 저장버튼 클릭
        */
        this.Div00_btn_application_onclick = function(obj,e)
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
        this.Div00_btn_instt_nm_onclick = function(obj,e)
        {
        	this.gfnOpenPopup("memberInsttPopup", "cms::memberInsttPopup.xfdl", "", "fnPopupAfter", "");
        };

        /**
         * description 아이디 중복체크 버튼 클릭
        */
        this.Div00_btnCheckId_onclick = function(obj,e)
        {
        	if (!this.fnIdValidation()) {// 아이디 체크 및 ID null체크
        		return;
            }

        	this.fnCheckId();
        };


        this.Div00_SBJ_onchanged = function(obj,e)
        {
        	idCheck = false;
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
        	var radio = this.Div00.form.Radio00.index;
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
            this.Div00.form.Static04_00_00_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.Div00.form.Static37_00.addEventHandler("onclick",this.Static09_onclick,this);
            this.Div00.form.Static04_00_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.Div00.form.Static07_01_01_00_00.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.Div00.form.SBJ.addEventHandler("oneditclick",this.SBJ_oneditclick,this);
            this.Div00.form.SBJ.addEventHandler("onchanged",this.Div00_SBJ_onchanged,this);
            this.Div00.form.Static07_01_01_00.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.Div00.form.Static07_01_01_01.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.Div00.form.Static07_01_01_00_01.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.Div00.form.Static07_01_01_00_01_00.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.Div00.form.Static07_01_01_00_01_01.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.Div00.form.Static07_01_01_01_00.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.Div00.form.TextArea01_00.addEventHandler("oneditclick",this.TextArea01_oneditclick,this);
            this.Div00.form.SBJ00.addEventHandler("oneditclick",this.SBJ_oneditclick,this);
            this.Div00.form.SBJ00_00.addEventHandler("oneditclick",this.SBJ_oneditclick,this);
            this.Div00.form.SBJ00_00.addEventHandler("oninput",this.Div00_SBJ00_00_oninput,this);
            this.Div00.form.SBJ00_00_00.addEventHandler("oneditclick",this.SBJ_oneditclick,this);
            this.Div00.form.SBJ00_00_00.addEventHandler("oninput",this.Div00_SBJ00_00_oninput,this);
            this.Div00.form.Static07_01_01_00_01_00_01.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.Div00.form.SBJ00_00_00_00.addEventHandler("oneditclick",this.SBJ_oneditclick,this);
            this.Div00.form.Static07_01_01_01_01.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.Div00.form.SBJ00_00_00_00_00.addEventHandler("oneditclick",this.SBJ_oneditclick,this);
            this.Div00.form.Static07_01_01_01_01_00.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.Div00.form.SBJ00_00_00_00_00_00.addEventHandler("oneditclick",this.SBJ_oneditclick,this);
            this.Div00.form.Static07_01_01_01_01_00_00.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.Div00.form.Static07_00_00_00.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.Div00.form.SBJ01.addEventHandler("oneditclick",this.SBJ_oneditclick,this);
            this.Div00.form.SBJ01.addEventHandler("oninput",this.Div00_SBJ01_oninput,this);
            this.Div00.form.SBJ00_00_00_00_00_00_00.addEventHandler("oneditclick",this.SBJ_oneditclick,this);
            this.Div00.form.btn_instt_nm.addEventHandler("onclick",this.Div00_btn_instt_nm_onclick,this);
            this.Div00.form.edt_roleNm.addEventHandler("onkeyup",this.divSearch_Div00_edt_roleNm_onkeyup,this);
            this.Div00.form.Static04_00_00_01_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.Div00.form.btnPopupClose.addEventHandler("onclick",this.divPopup_btnPopupClose_onclick,this);
            this.Div00.form.btn_application.addEventHandler("onclick",this.Div00_btn_application_onclick,this);
            this.Div00.form.btnCheckId.addEventHandler("onclick",this.Div00_btnCheckId_onclick,this);
            this.Static04_00_00_01_00_00.addEventHandler("onclick",this.Static31_onclick,this);
        };
        this.loadIncludeScript("memberJoin.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
