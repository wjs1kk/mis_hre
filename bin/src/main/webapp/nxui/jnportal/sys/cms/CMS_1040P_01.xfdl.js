(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CMS_1040P_01");
            this.set_titletext("사용자 조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,496);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsUserInfo", this);
            obj.set_updatecontrol("true");
            obj._setContents("<ColumnInfo><Column id=\"memberId\" type=\"STRING\" size=\"256\"/><Column id=\"memberNmKr\" type=\"STRING\" size=\"256\"/><Column id=\"memberNmEn\" type=\"STRING\" size=\"256\"/><Column id=\"ogdpInstCd\" type=\"STRING\" size=\"256\"/><Column id=\"ogdpInstNm\" type=\"STRING\" size=\"256\"/><Column id=\"emlAddr\" type=\"STRING\" size=\"256\"/><Column id=\"ofcTelno\" type=\"STRING\" size=\"256\"/><Column id=\"mblTelno\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"prvcClctAgreYn\" type=\"STRING\" size=\"256\"/><Column id=\"prvcPvsnAgreYn\" type=\"STRING\" size=\"256\"/><Column id=\"applyDt\" type=\"STRING\" size=\"256\"/><Column id=\"corpYn\" type=\"STRING\" size=\"256\"/><Column id=\"applyCont\" type=\"STRING\" size=\"256\"/><Column id=\"joinAprvStts\" type=\"STRING\" size=\"256\"/><Column id=\"whdwlYn\" type=\"STRING\" size=\"256\"/><Column id=\"inOrOutFlag\" type=\"STRING\" size=\"256\"/><Column id=\"mbrNo\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsInOut", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"value\" type=\"STRING\" size=\"256\"/><Column id=\"text\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"text\">전체</Col><Col id=\"value\"/></Row><Row><Col id=\"text\">국방망</Col><Col id=\"value\">I</Col></Row><Row><Col id=\"text\">인터넷망</Col><Col id=\"value\">O</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAprvStts", this);
            obj._setContents("<ColumnInfo><Column id=\"value\" type=\"STRING\" size=\"256\"/><Column id=\"text\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divPopup","0","0","1000","496",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staPopupTitle","0","0",null,"50","0",null,null,null,null,null,this.divPopup.form);
            obj.set_taborder("0");
            obj.set_text("회원가입 승인");
            obj.set_cssclass("sta_WF_popupTitle");
            this.divPopup.addChild(obj.name, obj);

            obj = new Static("Static10","0","50","30","586",null,null,null,null,null,null,this.divPopup.form);
            obj.set_taborder("1");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divPopup.addChild(obj.name, obj);

            obj = new Static("Static10_00",null,"50","30","586","0",null,null,null,null,null,this.divPopup.form);
            obj.set_taborder("2");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divPopup.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_01","30","50","103","20",null,null,null,null,null,null,this.divPopup.form);
            obj.set_taborder("3");
            obj.set_text("h 20");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divPopup.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_01_00","0",null,null,"23","0","0",null,null,null,null,this.divPopup.form);
            obj.set_taborder("4");
            obj.set_text("h 23");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divPopup.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_01_00_00","0",null,null,"25","0","53",null,null,null,null,this.divPopup.form);
            obj.set_taborder("5");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divPopup.addChild(obj.name, obj);

            obj = new Div("divMemberInfo","30","70","940","348",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_WF_popup");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","0","0","20","132",null,null,null,null,null,null,this.divMemberInfo.form);
            obj.set_taborder("0");
            obj.set_text("w20");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divMemberInfo.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_00","110","0","60","45",null,null,null,null,null,null,this.divMemberInfo.form);
            obj.set_taborder("1");
            obj.set_text("h 45");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divMemberInfo.addChild(obj.name, obj);

            obj = new Static("Static07_01_01_00","21","115",null,"1","21",null,null,null,null,null,this.divMemberInfo.form);
            obj.set_taborder("2");
            obj.set_background("#dddddd");
            obj.set_text("");
            this.divMemberInfo.addChild(obj.name, obj);

            obj = new Static("Static07_01_01_00_00","21","45",null,"1","21",null,null,null,null,null,this.divMemberInfo.form);
            obj.set_taborder("3");
            obj.set_background("#dddddd");
            obj.set_text("");
            this.divMemberInfo.addChild(obj.name, obj);

            obj = new Static("Static07_01_01_00_01","21","150",null,"1","21",null,null,null,null,null,this.divMemberInfo.form);
            obj.set_taborder("4");
            obj.set_background("#dddddd");
            obj.set_text("");
            this.divMemberInfo.addChild(obj.name, obj);

            obj = new Static("staTitle","20","10","160","27",null,null,null,null,null,null,this.divMemberInfo.form);
            obj.set_taborder("7");
            obj.set_text("회원정보");
            obj.set_cssclass("sta_WF_subTitle01");
            this.divMemberInfo.addChild(obj.name, obj);

            obj = new Static("Static07_01_02_00","203","45","1",null,null,"20",null,null,null,null,this.divMemberInfo.form);
            obj.set_taborder("6");
            obj.set_background("#dddddd");
            this.divMemberInfo.addChild(obj.name, obj);

            obj = new Static("sta001","20","46","180","34",null,null,null,null,null,null,this.divMemberInfo.form);
            obj.set_taborder("8");
            obj.set_text("망구분");
            obj.set_cssclass("sta_WF_condition02");
            this.divMemberInfo.addChild(obj.name, obj);

            obj = new Static("sta003","20","116","180","34",null,null,null,null,null,null,this.divMemberInfo.form);
            obj.set_taborder("9");
            obj.set_text("소속기관");
            obj.set_cssclass("sta_WF_condition02");
            this.divMemberInfo.addChild(obj.name, obj);

            obj = new Static("Static10_00","200","46","12","34",null,null,null,null,null,null,this.divMemberInfo.form);
            obj.set_taborder("10");
            obj.set_text("w12");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divMemberInfo.addChild(obj.name, obj);

            obj = new Static("Static10_00_00_00","200","111","12",null,null,"20",null,null,null,null,this.divMemberInfo.form);
            obj.set_taborder("11");
            obj.set_text("w12");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divMemberInfo.addChild(obj.name, obj);

            obj = new Static("Static10_00_01","200","116","12","34",null,null,null,null,null,null,this.divMemberInfo.form);
            obj.set_taborder("12");
            obj.set_text("w12");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divMemberInfo.addChild(obj.name, obj);

            obj = new Static("Static07_01_01_00_01_00_00","20","325",null,"1","22",null,null,null,null,null,this.divMemberInfo.form);
            obj.set_taborder("13");
            obj.set_background("#dddddd");
            obj.set_text("");
            this.divMemberInfo.addChild(obj.name, obj);

            obj = new Static("Static07_01_01_00_01_01","21","185",null,"1","21",null,null,null,null,null,this.divMemberInfo.form);
            obj.set_taborder("14");
            obj.set_background("#dddddd");
            obj.set_text("");
            this.divMemberInfo.addChild(obj.name, obj);

            obj = new Static("sta004","20","151","180","34",null,null,null,null,null,null,this.divMemberInfo.form);
            obj.set_taborder("15");
            obj.set_text("법인여부");
            obj.set_cssclass("sta_WF_condition02");
            this.divMemberInfo.addChild(obj.name, obj);

            obj = new Static("Static10_00_01_00","200","151","12","34",null,null,null,null,null,null,this.divMemberInfo.form);
            obj.set_taborder("16");
            obj.set_text("w12");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divMemberInfo.addChild(obj.name, obj);

            obj = new Static("Static07_01_01_00_01_01_00","21","220",null,"1","21",null,null,null,null,null,this.divMemberInfo.form);
            obj.set_taborder("17");
            obj.set_background("#dddddd");
            obj.set_text("");
            this.divMemberInfo.addChild(obj.name, obj);

            obj = new Static("sta005","20","186","180","34",null,null,null,null,null,null,this.divMemberInfo.form);
            obj.set_taborder("18");
            obj.set_text("사무실전화번호");
            obj.set_cssclass("sta_WF_condition02");
            this.divMemberInfo.addChild(obj.name, obj);

            obj = new Static("Static10_00_01_00_00","200","186","12","34",null,null,null,null,null,null,this.divMemberInfo.form);
            obj.set_taborder("19");
            obj.set_text("w12");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divMemberInfo.addChild(obj.name, obj);

            obj = new Static("Static07_01_01_00_01_01_00_00","21","255",null,"1","21",null,null,null,null,null,this.divMemberInfo.form);
            obj.set_taborder("20");
            obj.set_background("#dddddd");
            obj.set_text("");
            this.divMemberInfo.addChild(obj.name, obj);

            obj = new Static("sta006","20","221","180","34",null,null,null,null,null,null,this.divMemberInfo.form);
            obj.set_taborder("21");
            obj.set_text("승인상태");
            obj.set_cssclass("sta_WF_condition02");
            this.divMemberInfo.addChild(obj.name, obj);

            obj = new Static("Static10_00_01_00_00_00","200","221","12","34",null,null,null,null,null,null,this.divMemberInfo.form);
            obj.set_taborder("22");
            obj.set_text("w12");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divMemberInfo.addChild(obj.name, obj);

            obj = new Static("Static10_00_01_00_00_00_00","200","256","12","34",null,null,null,null,null,null,this.divMemberInfo.form);
            obj.set_taborder("23");
            obj.set_text("w12");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divMemberInfo.addChild(obj.name, obj);

            obj = new Radio("rdCorpYn","212","155","136","26",null,null,null,null,null,null,this.divMemberInfo.form);
            obj.set_taborder("24");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_enable("true");
            obj.set_readonly("true");
            var divMemberInfo_form_rdCorpYn_innerdataset = new nexacro.NormalDataset("divMemberInfo_form_rdCorpYn_innerdataset", obj);
            divMemberInfo_form_rdCorpYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">아니오</Col></Row><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">예</Col></Row></Rows>");
            obj.set_innerdataset(divMemberInfo_form_rdCorpYn_innerdataset);
            obj.set_index("0");
            this.divMemberInfo.addChild(obj.name, obj);

            obj = new Edit("edtOgdpInsCd","212","120","80","26",null,null,null,null,null,null,this.divMemberInfo.form);
            obj.set_taborder("25");
            obj.set_cssclass("");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_text("B554621");
            this.divMemberInfo.addChild(obj.name, obj);

            obj = new Edit("edtOfcNo","212","190","180","26",null,null,null,null,null,null,this.divMemberInfo.form);
            obj.set_taborder("26");
            obj.set_cssclass("");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_text("012-345-6789");
            this.divMemberInfo.addChild(obj.name, obj);

            obj = new Static("sta011","470","151","180","34",null,null,null,null,null,null,this.divMemberInfo.form);
            obj.set_taborder("27");
            obj.set_text("E-mail");
            obj.set_cssclass("sta_WF_condition02");
            obj.set_border("0px none, 1px solid #dddddd");
            this.divMemberInfo.addChild(obj.name, obj);

            obj = new Edit("edtEmail","662","155","180","26",null,null,null,null,null,null,this.divMemberInfo.form);
            obj.set_taborder("28");
            obj.set_cssclass("");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_text("abcd@efg.com");
            this.divMemberInfo.addChild(obj.name, obj);

            obj = new Static("Static10_00_01_01_00_00","650","151","12","34",null,null,null,null,null,null,this.divMemberInfo.form);
            obj.set_taborder("29");
            obj.set_text("w12");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divMemberInfo.addChild(obj.name, obj);

            obj = new Static("sta008","20","291","180","34",null,null,null,null,null,null,this.divMemberInfo.form);
            obj.set_taborder("30");
            obj.set_text("신청내용");
            obj.set_cssclass("sta_WF_condition02");
            this.divMemberInfo.addChild(obj.name, obj);

            obj = new Edit("edtAppltCont","212","295","700","26",null,null,null,null,null,null,this.divMemberInfo.form);
            obj.set_taborder("31");
            obj.set_cssclass("");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_text("000 과제를 위한 회원가입 신청입니다.");
            this.divMemberInfo.addChild(obj.name, obj);

            obj = new Edit("edtHpNo","662","190","180","26",null,null,null,null,null,null,this.divMemberInfo.form);
            obj.set_taborder("32");
            obj.set_cssclass("");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_text("010-1234-5678");
            this.divMemberInfo.addChild(obj.name, obj);

            obj = new Static("sta012","470","186","180","34",null,null,null,null,null,null,this.divMemberInfo.form);
            obj.set_taborder("33");
            obj.set_text("휴대폰전화번호");
            obj.set_cssclass("sta_WF_condition02");
            obj.set_border("0px none, 1px solid #dddddd");
            this.divMemberInfo.addChild(obj.name, obj);

            obj = new Static("sta013","470","221","180","34",null,null,null,null,null,null,this.divMemberInfo.form);
            obj.set_taborder("34");
            obj.set_text("신청일");
            obj.set_cssclass("sta_WF_condition02");
            obj.set_border("0px none, 1px solid #dddddd");
            this.divMemberInfo.addChild(obj.name, obj);

            obj = new Calendar("calApplyDt","662","225","118","26",null,null,null,null,null,null,this.divMemberInfo.form);
            obj.set_taborder("35");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_weekformat("일 월 화 수 목 금 토");
            obj.set_daysize("29 29");
            obj.set_headheight("28");
            obj.set_cssclass("essential");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divMemberInfo.addChild(obj.name, obj);

            obj = new Edit("edtOgdpInsNm","298","120","200","26",null,null,null,null,null,null,this.divMemberInfo.form);
            obj.set_taborder("36");
            obj.set_cssclass("");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_text("국방기술진흥연구소");
            this.divMemberInfo.addChild(obj.name, obj);

            obj = new Static("Static10_00_01_01_00_00_00","650","186","12","34",null,null,null,null,null,null,this.divMemberInfo.form);
            obj.set_taborder("37");
            obj.set_text("w12");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divMemberInfo.addChild(obj.name, obj);

            obj = new Static("Static10_00_01_01_00_00_00_00","650","221","12","34",null,null,null,null,null,null,this.divMemberInfo.form);
            obj.set_taborder("38");
            obj.set_text("w12");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divMemberInfo.addChild(obj.name, obj);

            obj = new Static("sta007","20","256","180","34",null,null,null,null,null,null,this.divMemberInfo.form);
            obj.set_taborder("39");
            obj.set_text("개인정보 수집 및 이용 동의");
            obj.set_cssclass("sta_WF_condition02");
            this.divMemberInfo.addChild(obj.name, obj);

            obj = new Static("sta014","470","256","180","34",null,null,null,null,null,null,this.divMemberInfo.form);
            obj.set_taborder("40");
            obj.set_text("개인정보 제공 동의");
            obj.set_cssclass("sta_WF_condition02");
            obj.set_border("0px none, 1px solid #dddddd");
            this.divMemberInfo.addChild(obj.name, obj);

            obj = new Static("Static07_01_01_00_01_01_00_00_00","21","290",null,"1","21",null,null,null,null,null,this.divMemberInfo.form);
            obj.set_taborder("41");
            obj.set_background("#dddddd");
            obj.set_text("");
            this.divMemberInfo.addChild(obj.name, obj);

            obj = new Static("Static10_00_01_01_00_00_00_00_00","650","256","12","34",null,null,null,null,null,null,this.divMemberInfo.form);
            obj.set_taborder("42");
            obj.set_text("w12");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divMemberInfo.addChild(obj.name, obj);

            obj = new Radio("rdPrvcPvsn","662","260","136","26",null,null,null,null,null,null,this.divMemberInfo.form);
            obj.set_taborder("43");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_enable("true");
            obj.set_readonly("true");
            var divMemberInfo_form_rdPrvcPvsn_innerdataset = new nexacro.NormalDataset("divMemberInfo_form_rdPrvcPvsn_innerdataset", obj);
            divMemberInfo_form_rdPrvcPvsn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">동의</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">비동의</Col></Row></Rows>");
            obj.set_innerdataset(divMemberInfo_form_rdPrvcPvsn_innerdataset);
            obj.set_index("0");
            this.divMemberInfo.addChild(obj.name, obj);

            obj = new Radio("rdPrvcClct","212","260","136","26",null,null,null,null,null,null,this.divMemberInfo.form);
            obj.set_taborder("44");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_enable("true");
            obj.set_readonly("true");
            var divMemberInfo_form_rdPrvcClct_innerdataset = new nexacro.NormalDataset("divMemberInfo_form_rdPrvcClct_innerdataset", obj);
            divMemberInfo_form_rdPrvcClct_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">동의</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">비동의</Col></Row></Rows>");
            obj.set_innerdataset(divMemberInfo_form_rdPrvcClct_innerdataset);
            obj.set_text("동의");
            obj.set_index("0");
            this.divMemberInfo.addChild(obj.name, obj);

            obj = new Static("Static07_01_01_00_00_00","21","80",null,"1","21",null,null,null,null,null,this.divMemberInfo.form);
            obj.set_taborder("45");
            obj.set_background("#dddddd");
            obj.set_text("");
            this.divMemberInfo.addChild(obj.name, obj);

            obj = new Static("sta002","20","81","180","34",null,null,null,null,null,null,this.divMemberInfo.form);
            obj.set_taborder("46");
            obj.set_text("회원명(한글)");
            obj.set_cssclass("sta_WF_condition02");
            this.divMemberInfo.addChild(obj.name, obj);

            obj = new Static("Static10_00_00","200","81","12","34",null,null,null,null,null,null,this.divMemberInfo.form);
            obj.set_taborder("47");
            obj.set_text("w12");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divMemberInfo.addChild(obj.name, obj);

            obj = new Edit("edtMemberNmKr","212","85","180","26",null,null,null,null,null,null,this.divMemberInfo.form);
            obj.set_taborder("48");
            obj.set_cssclass("");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_text("김재홍");
            this.divMemberInfo.addChild(obj.name, obj);

            obj = new Static("sta010","470","81","180","34",null,null,null,null,null,null,this.divMemberInfo.form);
            obj.set_taborder("49");
            obj.set_text("회원명(영문)");
            obj.set_cssclass("sta_WF_condition02");
            obj.set_border("0px none, 1px solid #dddddd");
            this.divMemberInfo.addChild(obj.name, obj);

            obj = new Edit("edtMemberNmEng","662","85","180","26",null,null,null,null,null,null,this.divMemberInfo.form);
            obj.set_taborder("50");
            obj.set_cssclass("");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_text("KIM JAEHONG");
            this.divMemberInfo.addChild(obj.name, obj);

            obj = new Static("Static10_00_01_01_01","650","81","12","34",null,null,null,null,null,null,this.divMemberInfo.form);
            obj.set_taborder("51");
            obj.set_text("w12");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divMemberInfo.addChild(obj.name, obj);

            obj = new Static("sta009","470","46","180","34",null,null,null,null,null,null,this.divMemberInfo.form);
            obj.set_taborder("52");
            obj.set_text("회원ID");
            obj.set_cssclass("sta_WF_condition02");
            obj.set_border("0px none, 1px solid #dddddd");
            this.divMemberInfo.addChild(obj.name, obj);

            obj = new Static("Static10_00_01_01_01_00","650","46","12","34",null,null,null,null,null,null,this.divMemberInfo.form);
            obj.set_taborder("53");
            obj.set_text("w12");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divMemberInfo.addChild(obj.name, obj);

            obj = new Edit("edtMemberId","662","50","180","26",null,null,null,null,null,null,this.divMemberInfo.form);
            obj.set_taborder("54");
            obj.set_cssclass("");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_text("abc0123456");
            this.divMemberInfo.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00","20","45","1",null,null,"20",null,null,null,null,this.divMemberInfo.form);
            obj.set_taborder("5");
            obj.set_background("#00388e");
            obj.set_text("");
            this.divMemberInfo.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00_00","470","45","1","71",null,null,null,null,null,null,this.divMemberInfo.form);
            obj.set_taborder("55");
            obj.set_background("#00388e");
            obj.set_text("");
            this.divMemberInfo.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00_00_00","470","150","1","141",null,null,null,null,null,null,this.divMemberInfo.form);
            obj.set_taborder("56");
            obj.set_background("#00388e");
            obj.set_text("");
            this.divMemberInfo.addChild(obj.name, obj);

            obj = new Combo("cboInOutFlag","212","50","180","26",null,null,null,null,null,null,this.divMemberInfo.form);
            obj.set_taborder("57");
            obj.set_innerdataset("dsInOut");
            obj.set_codecolumn("value");
            obj.set_datacolumn("text");
            obj.set_readonly("true");
            this.divMemberInfo.addChild(obj.name, obj);

            obj = new Combo("cboJoinAprvStts","212","225","180","26",null,null,null,null,null,null,this.divMemberInfo.form);
            obj.set_taborder("58");
            obj.set_innerdataset("dsAprvStts");
            obj.set_codecolumn("value");
            obj.set_datacolumn("text");
            obj.set_readonly("true");
            obj.set_text("");
            obj.set_index("-1");
            this.divMemberInfo.addChild(obj.name, obj);

            obj = new Button("btnApprobation","400",null,"65","28",null,"24",null,null,null,null,this);
            obj.set_text("승인");
            obj.set_cssclass("btn_WF_icoApprobation");
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Button("btnReject","468",null,"65","28",null,"24",null,null,null,null,this);
            obj.set_text("반려");
            obj.set_cssclass("btn_WF_icoReject");
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose",null,null,"65","28","399","24",null,null,null,null,this);
            obj.set_text("닫기");
            obj.set_cssclass("");
            obj.set_visible("true");
            obj.set_taborder("4");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divPopup.form
            obj = new Layout("default","",0,0,this.divPopup.form,function(p){});
            this.divPopup.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMemberInfo.form
            obj = new Layout("default","",1032,72,this.divMemberInfo.form,function(p){});
            this.divMemberInfo.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divMemberInfo.form.edt001","value","dsUserInfo","inOrOutFlag");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divMemberInfo.form.edtMemberNmKr","value","dsUserInfo","memberNmKr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divMemberInfo.form.edtMemberId","value","dsUserInfo","memberId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divMemberInfo.form.edtMemberNmEng","value","dsUserInfo","memberNmEn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divMemberInfo.form.edtOgdpInsCd","value","dsUserInfo","ogdpInstCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divMemberInfo.form.edtOgdpInsNm","value","dsUserInfo","ogdpInstNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divMemberInfo.form.rdCorpYn","value","dsUserInfo","corpYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divMemberInfo.form.edtEmail","value","dsUserInfo","emlAddr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divMemberInfo.form.edtOfcNo","value","dsUserInfo","ofcTelno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divMemberInfo.form.edtHpNo","value","dsUserInfo","mblTelno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divMemberInfo.form.RQST_NM00_00_01_00_01","value","dsUserInfo","joinAprvStts");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divMemberInfo.form.calApplyDt","value","dsUserInfo","applyDt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divMemberInfo.form.rdPrvcClct","value","dsUserInfo","prvcClctAgreYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divMemberInfo.form.rdPrvcPvsn","value","dsUserInfo","prvcPvsnAgreYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divMemberInfo.form.edtAppltCont","value","dsUserInfo","applyCont");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divMemberInfo.form.cboInOutFlag","text","dsUserInfo","inOrOutFlag");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divMemberInfo.form.cboJoinAprvStts","value","dsUserInfo","joinAprvStts");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divMemberInfo.form.cboInOutFlag","value","dsUserInfo","inOrOutFlag");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("CMS_1040P_01.xfdl","lib::common.xjs");
        this.registerScript("CMS_1040P_01.xfdl", function() {
        /**
        *  Popup Template
        *  MenuPath      -
        *  FileName      memberAprManagePopup.xfdl
        *  Creator 	     cheonsy
        *  CreateDate    2023.03.30
        *  Desction      회원가입 승인
        ************** 소스 수정 이력 ***********************************************
        *  date          Modifier    Description
        *******************************************************************************
        *  2023.03.15    cheonsy 	 최초 생성
        *******************************************************************************/
        this.executeIncludeScript("lib::common.xjs"); /*include "lib::common.xjs"*/;
        /***********************************************************************************************
        * FORM EVENT 영역(onload, onbeforeclose)
        /***********************************************************************************************/
        /**
         * description 화면 onload
        */
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnLoad(this);
        	this.gfnLoadCombo("loadCombo", "dsAprvStts=CMS:APRV_STTS:C", "fnCallBack");
        	this.dsUserInfo.setColumn(0, "memberId", this.parent.memberId);
        	this.dsUserInfo.setColumn(0, "mbrNo", this.parent.mbrNo);
        	this.dsUserInfo.setColumn(0, "inOrOutFlag", this.parent.inOrOutFlag);
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
        	this.gfnTransaction("getAprUserInfo", "cms/getAprUserInfo.do", "dsUserInfo", "dsUserInfo", "", "fnCallBack");
        };

        /**
         * description 승인/반려
        */
        this.fnSave = function()
        {
        	this.gfnTransaction("setAprUserInfo", "cms/setAprUserInfo.do", "dsUserInfo", "", "", "fnCallBack");
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
        		case "getAprUserInfo":
        			this.fnBtnControll();
        		break;
        		case "setAprUserInfo":
        			if(this.callbackMsg == "success"){
        				this.gfnAlert("CM_MSG_SAVE_SUCCESS");  // 저장 되었습니다.
        				this.close();
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

        };

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        /**
         * description 승인 버튼
        */
        this.btnApprobation_onclick = function(obj,e)
        {
        	this.dsUserInfo.setColumn(0, "joinAprvStts", "APPROVAL");
        	this.gfnAlert("CM_CFM_APPROVAL", "", "", {trueFunc: "fnSave", falseFunc: "fnReset"});  // 승인하시겠습니까?
            return;

        };

        /**
         * description 반려 버튼
        */
        this.btnReject_onclick = function(obj,e)
        {
        	this.dsUserInfo.setColumn(0, "joinAprvStts", "REJECT");
        	this.gfnAlert("CM_CFM_REJECT", "", "", {trueFunc: "fnSave", falseFunc: "fnReset"});  // 반려하시겠습니까?
        	return;
        };

        /**
         * description 닫기버튼
        */
        this.btnClose_onclick = function(obj,e)
        {
        	this.close();
        };

        /************************************************************************************************
        * 사용자 FUNCTION 영역
        ************************************************************************************************/
        this.fnBtnControll = function()
        {
        	if(this.dsUserInfo.getColumn(0, "joinAprvStts") == "APPLY"){
        		this.btnApprobation.set_enable(true);
        		this.btnReject.set_enable(true);
        		this.btnClose.set_enable(true);
        	}else if(this.dsUserInfo.getColumn(0, "joinAprvStts") == "APPROVAL"){
        		this.btnApprobation.set_enable(false);
        		this.btnReject.set_enable(false);
        		this.btnClose.set_enable(true);
        	}else if(this.dsUserInfo.getColumn(0, "joinAprvStts") == "REJECT"){
        		this.btnApprobation.set_enable(false);
        		this.btnReject.set_enable(false);
        		this.btnClose.set_enable(true);
        	}
        }

        /**
         * description 상태 승인으로 변경
        */
        this.fnReset = function()
        {
        	this.dsUserInfo.setColumn(0, "joinAprvStts", "APPLY");
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divPopup.form.Static04_00_00_01.addEventHandler("onclick",this.Static31_onclick,this);
            this.divPopup.form.Static04_00_00_01_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.divPopup.form.Static04_00_00_01_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.divMemberInfo.form.Static04_00_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.divMemberInfo.form.Static07_01_01_00.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.divMemberInfo.form.Static07_01_01_00_00.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.divMemberInfo.form.Static07_01_01_00_01.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.divMemberInfo.form.staTitle.addEventHandler("onclick",this.Static09_onclick,this);
            this.divMemberInfo.form.Static07_01_02_00.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.divMemberInfo.form.Static07_01_01_00_01_00_00.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.divMemberInfo.form.Static07_01_01_00_01_01.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.divMemberInfo.form.Static07_01_01_00_01_01_00.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.divMemberInfo.form.Static07_01_01_00_01_01_00_00.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.divMemberInfo.form.rdCorpYn.addEventHandler("onitemclick",this.Div00_Radio00_onitemclick,this);
            this.divMemberInfo.form.rdCorpYn.addEventHandler("onitemchanged",this.div_Search02_Radio00_onitemchanged,this);
            this.divMemberInfo.form.Static07_01_01_00_01_01_00_00_00.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.divMemberInfo.form.rdPrvcPvsn.addEventHandler("onitemclick",this.Div00_Radio00_onitemclick,this);
            this.divMemberInfo.form.rdPrvcPvsn.addEventHandler("onitemchanged",this.div_Search02_Radio00_onitemchanged,this);
            this.divMemberInfo.form.rdPrvcClct.addEventHandler("onitemclick",this.Div00_Radio00_onitemclick,this);
            this.divMemberInfo.form.rdPrvcClct.addEventHandler("onitemchanged",this.div_Search02_Radio00_onitemchanged,this);
            this.divMemberInfo.form.Static07_01_01_00_00_00.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.divMemberInfo.form.Static07_00_00_00.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.divMemberInfo.form.Static07_00_00_00_00.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.divMemberInfo.form.Static07_00_00_00_00_00.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.divMemberInfo.form.cboInOutFlag.addEventHandler("onkeyup",this.divSearch_Div00_edt_01_onkeyup,this);
            this.divMemberInfo.form.cboJoinAprvStts.addEventHandler("onkeyup",this.divSearch_Div00_edt_01_onkeyup,this);
            this.btnApprobation.addEventHandler("onclick",this.btnApprobation_onclick,this);
            this.btnReject.addEventHandler("onclick",this.btnReject_onclick,this);
            this.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
        };
        this.loadIncludeScript("CMS_1040P_01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
