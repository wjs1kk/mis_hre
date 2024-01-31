(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("boardRegistPopup");
            this.set_titletext("게시판 등록 팝업");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsBoard", this);
            obj._setContents("<ColumnInfo><Column id=\"sysId\" type=\"STRING\" size=\"256\"/><Column id=\"boardId\" type=\"STRING\" size=\"256\"/><Column id=\"boardIntro\" type=\"STRING\" size=\"256\"/><Column id=\"boardNm\" type=\"STRING\" size=\"256\"/><Column id=\"boardType\" type=\"STRING\" size=\"256\"/><Column id=\"boardAttr\" type=\"STRING\" size=\"256\"/><Column id=\"replyPosblYn\" type=\"STRING\" size=\"256\"/><Column id=\"fileAtchPosblYn\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"rgstDt\" type=\"DATE\" size=\"256\"/><Column id=\"rsgtId\" type=\"STRING\" size=\"256\"/><Column id=\"rgstIp\" type=\"STRING\" size=\"256\"/><Column id=\"updtId\" type=\"DATE\" size=\"256\"/><Column id=\"updtDt\" type=\"STRING\" size=\"256\"/><Column id=\"updtIp\" type=\"STRING\" size=\"256\"/><Column id=\"upperMenuId\" type=\"STRING\" size=\"256\"/><Column id=\"upperMenuNm\" type=\"STRING\" size=\"256\"/><Column id=\"sortOrdr\" type=\"INT\" size=\"256\"/><Column id=\"rowStatus\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBoardTypeCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"text\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBoardAttrCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"text\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAvailCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"text\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"text\">가능</Col><Col id=\"value\">Y</Col></Row><Row><Col id=\"text\">불가능</Col><Col id=\"value\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBoardRoles", this);
            obj.set_updatecontrol("false");
            obj._setContents("<ColumnInfo><Column id=\"rowStatus\" type=\"STRING\" size=\"256\"/><Column id=\"rowCheck\" type=\"STRING\" size=\"256\"/><Column id=\"sysId\" type=\"STRING\" size=\"256\"/><Column id=\"roleCode\" type=\"STRING\" size=\"256\"/><Column id=\"roleNm\" type=\"STRING\" size=\"256\"/><Column id=\"canViewList\" type=\"STRING\" size=\"256\"/><Column id=\"canViewArticle\" type=\"STRING\" size=\"256\"/><Column id=\"canWriteArticle\" type=\"STRING\" size=\"256\"/><Column id=\"canWriteReply\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUseCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"text\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"boardId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("popup","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("popupTitle","0","0",null,"50","0",null,null,null,null,null,this.popup.form);
            obj.set_taborder("1");
            obj.set_text("게시판 등록");
            obj.set_cssclass("sta_WF_popupTitle");
            this.popup.addChild(obj.name, obj);

            obj = new Static("Static10","0","50","30","586",null,null,null,null,null,null,this.popup.form);
            obj.set_taborder("2");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.popup.addChild(obj.name, obj);

            obj = new Static("Static10_00",null,"50","30","586","0",null,null,null,null,null,this.popup.form);
            obj.set_taborder("3");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.popup.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_01","30","50","103","20",null,null,null,null,null,null,this.popup.form);
            obj.set_taborder("4");
            obj.set_text("h 20");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.popup.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_01_00","349",null,"103","23",null,"0",null,null,null,null,this.popup.form);
            obj.set_taborder("5");
            obj.set_text("h 23");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.popup.addChild(obj.name, obj);

            obj = new Div("div_boardInfo","30","70",null,null,"30","76",null,null,null,null,this.popup.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_popup");
            obj.set_text("");
            this.popup.addChild(obj.name, obj);

            obj = new Static("Static10","0","0","19","132",null,null,null,null,null,null,this.popup.form.div_boardInfo.form);
            obj.set_taborder("0");
            obj.set_text("w20");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.popup.form.div_boardInfo.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_00","110","0","60","45",null,null,null,null,null,null,this.popup.form.div_boardInfo.form);
            obj.set_taborder("14");
            obj.set_text("h 45");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.popup.form.div_boardInfo.addChild(obj.name, obj);

            obj = new Static("Static07_01_01_00","20","80",null,"1","20",null,null,null,null,null,this.popup.form.div_boardInfo.form);
            obj.set_taborder("15");
            obj.set_background("#dddddd");
            obj.set_text("");
            this.popup.form.div_boardInfo.addChild(obj.name, obj);

            obj = new Static("Static07_01_01_00_00","20","45",null,"1","20",null,null,null,null,null,this.popup.form.div_boardInfo.form);
            obj.set_taborder("16");
            obj.set_background("#dddddd");
            obj.set_text("");
            this.popup.form.div_boardInfo.addChild(obj.name, obj);

            obj = new Static("Static07_00_01_00",null,"45","1",null,"19","15",null,null,null,null,this.popup.form.div_boardInfo.form);
            obj.set_taborder("18");
            obj.set_background("#dddddd");
            this.popup.form.div_boardInfo.addChild(obj.name, obj);

            obj = new Static("sta_dtlInfo","19","11","169","27",null,null,null,null,null,null,this.popup.form.div_boardInfo.form);
            obj.set_taborder("21");
            obj.set_text("게시판 설정");
            obj.set_cssclass("sta_WF_subTitle01");
            this.popup.form.div_boardInfo.addChild(obj.name, obj);

            obj = new Static("Static07_01_02_00","171","45","1",null,null,"15",null,null,null,null,this.popup.form.div_boardInfo.form);
            obj.set_taborder("20");
            obj.set_background("#dddddd");
            this.popup.form.div_boardInfo.addChild(obj.name, obj);

            obj = new Static("sta_boardType","21","150","150","34",null,null,null,null,null,null,this.popup.form.div_boardInfo.form);
            obj.set_taborder("22");
            obj.set_text("게시판 유형");
            obj.set_cssclass("sta_WF_condition02");
            this.popup.form.div_boardInfo.addChild(obj.name, obj);

            obj = new Static("sta_boardNm","21","46","150","34",null,null,null,null,null,null,this.popup.form.div_boardInfo.form);
            obj.set_taborder("23");
            obj.set_text("게시판명");
            obj.set_cssclass("sta_WF_condition02");
            this.popup.form.div_boardInfo.addChild(obj.name, obj);

            obj = new Static("sta_boardIntro","21","81","150","68",null,null,null,null,null,null,this.popup.form.div_boardInfo.form);
            obj.set_taborder("24");
            obj.set_text("게시판 설명");
            obj.set_cssclass("sta_WF_condition02");
            this.popup.form.div_boardInfo.addChild(obj.name, obj);

            obj = new Static("Static10_00","172","46","12","34",null,null,null,null,null,null,this.popup.form.div_boardInfo.form);
            obj.set_taborder("25");
            obj.set_text("w12");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.popup.form.div_boardInfo.addChild(obj.name, obj);

            obj = new Static("Static10_00_00_00","172","150","12","34",null,null,null,null,null,null,this.popup.form.div_boardInfo.form);
            obj.set_taborder("26");
            obj.set_text("w12");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.popup.form.div_boardInfo.addChild(obj.name, obj);

            obj = new Static("Static10_00_01","172","81","12","34",null,null,null,null,null,null,this.popup.form.div_boardInfo.form);
            obj.set_taborder("27");
            obj.set_text("w12");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.popup.form.div_boardInfo.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_00_00","110","579","60","15",null,null,null,null,null,null,this.popup.form.div_boardInfo.form);
            obj.set_taborder("28");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.popup.form.div_boardInfo.addChild(obj.name, obj);

            obj = new Static("Static10_00_00","706","46","12","34",null,null,null,null,null,null,this.popup.form.div_boardInfo.form);
            obj.set_taborder("29");
            obj.set_text("w12");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.popup.form.div_boardInfo.addChild(obj.name, obj);

            obj = new Static("Static07_01_01_00_01","20","149",null,"1","20",null,null,null,null,null,this.popup.form.div_boardInfo.form);
            obj.set_taborder("17");
            obj.set_background("#dddddd");
            obj.set_text("");
            this.popup.form.div_boardInfo.addChild(obj.name, obj);

            obj = new Static("sta_boardAttr","370","150","150","34",null,null,null,null,null,null,this.popup.form.div_boardInfo.form);
            obj.set_taborder("30");
            obj.set_text("게시판 속성");
            obj.set_cssclass("sta_WF_condition02");
            this.popup.form.div_boardInfo.addChild(obj.name, obj);

            obj = new Static("Static07_01_02_00_00","369","150","1","70",null,null,null,null,null,null,this.popup.form.div_boardInfo.form);
            obj.set_taborder("31");
            obj.set_background("#dddddd");
            this.popup.form.div_boardInfo.addChild(obj.name, obj);

            obj = new Static("Static07_01_01_00_02","20","184",null,"1","20",null,null,null,null,null,this.popup.form.div_boardInfo.form);
            obj.set_taborder("32");
            obj.set_background("#dddddd");
            obj.set_text("");
            this.popup.form.div_boardInfo.addChild(obj.name, obj);

            obj = new Static("Static10_00_00_00_00","357","150","12","34",null,null,null,null,null,null,this.popup.form.div_boardInfo.form);
            obj.set_taborder("33");
            obj.set_text("w12");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.popup.form.div_boardInfo.addChild(obj.name, obj);

            obj = new Static("Static07_01_02_00_00_00","520","150","1","70",null,null,null,null,null,null,this.popup.form.div_boardInfo.form);
            obj.set_taborder("34");
            obj.set_background("#dddddd");
            this.popup.form.div_boardInfo.addChild(obj.name, obj);

            obj = new Static("Static10_00_00_00_01","521","150","12","34",null,null,null,null,null,null,this.popup.form.div_boardInfo.form);
            obj.set_taborder("35");
            obj.set_text("w12");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.popup.form.div_boardInfo.addChild(obj.name, obj);

            obj = new Static("Static10_00_00_00_00_00","706","150","12","34",null,null,null,null,null,null,this.popup.form.div_boardInfo.form);
            obj.set_taborder("36");
            obj.set_text("w12");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.popup.form.div_boardInfo.addChild(obj.name, obj);

            obj = new Static("sta_fileAtchPosblYn","370","185","150","34",null,null,null,null,null,null,this.popup.form.div_boardInfo.form);
            obj.set_taborder("37");
            obj.set_text("파일 첨부 가능 여부");
            obj.set_cssclass("sta_WF_condition02");
            this.popup.form.div_boardInfo.addChild(obj.name, obj);

            obj = new Static("sta_replyPosblYn","21","185","150","34",null,null,null,null,null,null,this.popup.form.div_boardInfo.form);
            obj.set_taborder("38");
            obj.set_text("댓글 가능 여부");
            obj.set_cssclass("sta_WF_condition02");
            this.popup.form.div_boardInfo.addChild(obj.name, obj);

            obj = new Static("Static07_01_01_00_02_00","20","219",null,"1","20",null,null,null,null,null,this.popup.form.div_boardInfo.form);
            obj.set_taborder("39");
            obj.set_background("#dddddd");
            obj.set_text("");
            this.popup.form.div_boardInfo.addChild(obj.name, obj);

            obj = new Static("sta_boardTypeRequired","100","150","25","34",null,null,null,null,null,null,this.popup.form.div_boardInfo.form);
            obj.set_taborder("40");
            obj.set_text("*");
            obj.set_cssclass("essential");
            obj.set_tooltiptext("필수입력");
            this.popup.form.div_boardInfo.addChild(obj.name, obj);

            obj = new Static("sta_replyPosblYnRequired","117","185","25","34",null,null,null,null,null,null,this.popup.form.div_boardInfo.form);
            obj.set_taborder("41");
            obj.set_text("*");
            obj.set_cssclass("essential");
            obj.set_tooltiptext("필수입력");
            this.popup.form.div_boardInfo.addChild(obj.name, obj);

            obj = new Static("sta_boardAttrRequired","449","150","25","34",null,null,null,null,null,null,this.popup.form.div_boardInfo.form);
            obj.set_taborder("42");
            obj.set_text("*");
            obj.set_cssclass("essential");
            obj.set_tooltiptext("필수입력");
            this.popup.form.div_boardInfo.addChild(obj.name, obj);

            obj = new Static("sta_fileAtchPosblYnRequired","495","185","25","34",null,null,null,null,null,null,this.popup.form.div_boardInfo.form);
            obj.set_taborder("43");
            obj.set_text("*");
            obj.set_cssclass("essential");
            obj.set_tooltiptext("필수입력");
            this.popup.form.div_boardInfo.addChild(obj.name, obj);

            obj = new Static("sta_useYn","21","220","150","34",null,null,null,null,null,null,this.popup.form.div_boardInfo.form);
            obj.set_taborder("44");
            obj.set_text("사용 여부");
            obj.set_cssclass("sta_WF_condition02");
            this.popup.form.div_boardInfo.addChild(obj.name, obj);

            obj = new Static("sta_useYnRequired","89","220","25","34",null,null,null,null,null,null,this.popup.form.div_boardInfo.form);
            obj.set_taborder("45");
            obj.set_text("*");
            obj.set_cssclass("essential");
            obj.set_tooltiptext("필수입력");
            this.popup.form.div_boardInfo.addChild(obj.name, obj);

            obj = new Static("Static07_01_01_00_02_00_00","20","254",null,"1","20",null,null,null,null,null,this.popup.form.div_boardInfo.form);
            obj.set_taborder("46");
            obj.set_background("#dddddd");
            obj.set_text("");
            this.popup.form.div_boardInfo.addChild(obj.name, obj);

            obj = new Static("sta_upperMenuId","21","255","150","34",null,null,null,null,null,null,this.popup.form.div_boardInfo.form);
            obj.set_taborder("47");
            obj.set_text("상위 메뉴");
            obj.set_cssclass("sta_WF_condition02");
            this.popup.form.div_boardInfo.addChild(obj.name, obj);

            obj = new Static("sta_sortOrdr","370","255","150","34",null,null,null,null,null,null,this.popup.form.div_boardInfo.form);
            obj.set_taborder("49");
            obj.set_text("정렬 순서");
            obj.set_cssclass("sta_WF_condition02");
            this.popup.form.div_boardInfo.addChild(obj.name, obj);

            obj = new Static("sta_sortOrdrRequired","437","255","25","34",null,null,null,null,null,null,this.popup.form.div_boardInfo.form);
            obj.set_taborder("48");
            obj.set_text("*");
            obj.set_cssclass("essential");
            obj.set_tooltiptext("필수입력");
            this.popup.form.div_boardInfo.addChild(obj.name, obj);

            obj = new Static("Static07_01_01_00_02_00_01","20","289",null,"1","20",null,null,null,null,null,this.popup.form.div_boardInfo.form);
            obj.set_taborder("50");
            obj.set_background("#dddddd");
            obj.set_text("");
            this.popup.form.div_boardInfo.addChild(obj.name, obj);

            obj = new Static("Static07_01_02_00_00_01","369","255","1","34",null,null,null,null,null,null,this.popup.form.div_boardInfo.form);
            obj.set_taborder("51");
            obj.set_background("#dddddd");
            this.popup.form.div_boardInfo.addChild(obj.name, obj);

            obj = new Static("Static07_01_02_00_00_00_00","520","255","1","34",null,null,null,null,null,null,this.popup.form.div_boardInfo.form);
            obj.set_taborder("52");
            obj.set_background("#dddddd");
            this.popup.form.div_boardInfo.addChild(obj.name, obj);

            obj = new Static("in_YY01_01_00","21","290","150",null,null,"16",null,null,null,null,this.popup.form.div_boardInfo.form);
            obj.set_taborder("53");
            obj.set_text("게시판 권한");
            obj.set_cssclass("sta_WF_condition02");
            this.popup.form.div_boardInfo.addChild(obj.name, obj);

            obj = new Static("Static07_01_01_00_02_00_01_00","20",null,null,"1","20","15",null,null,null,null,this.popup.form.div_boardInfo.form);
            obj.set_taborder("54");
            obj.set_background("#dddddd");
            obj.set_text("");
            this.popup.form.div_boardInfo.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00","20","45","1",null,null,"15",null,null,null,null,this.popup.form.div_boardInfo.form);
            obj.set_taborder("19");
            obj.set_background("#00388e");
            obj.set_text("");
            this.popup.form.div_boardInfo.addChild(obj.name, obj);

            obj = new Edit("edt_boardNm","184","50","522","26",null,null,null,null,null,null,this.popup.form.div_boardInfo.form);
            obj.set_taborder("1");
            obj.set_cssclass("essential");
            this.popup.form.div_boardInfo.addChild(obj.name, obj);

            obj = new TextArea("ta_boardIntro","184","85",null,"60","32",null,null,null,null,null,this.popup.form.div_boardInfo.form);
            obj.set_taborder("2");
            this.popup.form.div_boardInfo.addChild(obj.name, obj);

            obj = new Combo("cbo_boardType","184","154","147","26",null,null,null,null,null,null,this.popup.form.div_boardInfo.form);
            obj.set_taborder("3");
            obj.set_innerdataset("dsBoardTypeCombo");
            obj.set_datacolumn("text");
            obj.set_codecolumn("value");
            obj.set_text("");
            this.popup.form.div_boardInfo.addChild(obj.name, obj);

            obj = new Combo("edt_boardAttr","533","154","147","26",null,null,null,null,null,null,this.popup.form.div_boardInfo.form);
            obj.set_taborder("4");
            obj.set_innerdataset("dsBoardAttrCombo");
            obj.set_datacolumn("text");
            obj.set_codecolumn("value");
            obj.set_text("");
            this.popup.form.div_boardInfo.addChild(obj.name, obj);

            obj = new Radio("rad_replyPosblYn","184","185","173","34",null,null,null,null,null,null,this.popup.form.div_boardInfo.form);
            obj.set_taborder("5");
            obj.set_innerdataset("dsAvailCombo");
            obj.set_codecolumn("value");
            obj.set_datacolumn("text");
            obj.set_direction("vertical");
            this.popup.form.div_boardInfo.addChild(obj.name, obj);

            obj = new Radio("rad_fileAtchPosblyn","533","185","173","34",null,null,null,null,null,null,this.popup.form.div_boardInfo.form);
            obj.set_taborder("6");
            obj.set_innerdataset("dsAvailCombo");
            obj.set_codecolumn("value");
            obj.set_datacolumn("text");
            obj.set_direction("vertical");
            this.popup.form.div_boardInfo.addChild(obj.name, obj);

            obj = new Combo("cbo_useYn","184","224","147","26",null,null,null,null,null,null,this.popup.form.div_boardInfo.form);
            obj.set_taborder("7");
            obj.set_innerdataset("dsUseCombo");
            obj.set_codecolumn("value");
            obj.set_datacolumn("text");
            obj.set_text("");
            this.popup.form.div_boardInfo.addChild(obj.name, obj);

            obj = new Edit("edt_upperMenuNm","184","259","147","26",null,null,null,null,null,null,this.popup.form.div_boardInfo.form);
            obj.set_taborder("8");
            obj.set_cssclass("essential");
            obj.set_readonly("true");
            this.popup.form.div_boardInfo.addChild(obj.name, obj);

            obj = new Button("btn_schMenu","edt_upperMenuNm:0","259","26","26",null,null,null,null,null,null,this.popup.form.div_boardInfo.form);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_frmSearch");
            obj.set_enable("true");
            this.popup.form.div_boardInfo.addChild(obj.name, obj);

            obj = new Edit("edt_sortOrdr","533","259","147","26",null,null,null,null,null,null,this.popup.form.div_boardInfo.form);
            obj.set_taborder("10");
            obj.set_cssclass("essential");
            obj.set_inputtype("number");
            obj.set_inputfilter("comma,alpha,dot,sign,space,symbol");
            this.popup.form.div_boardInfo.addChild(obj.name, obj);

            obj = new Static("sta_boardRolesRequired","100","290","25",null,null,"16",null,null,null,null,this.popup.form.div_boardInfo.form);
            obj.set_taborder("55");
            obj.set_text("*");
            obj.set_cssclass("essential");
            obj.set_tooltiptext("필수입력");
            this.popup.form.div_boardInfo.addChild(obj.name, obj);

            obj = new Button("btn_deleteRow",null,"294","80","26","32",null,null,null,null,null,this.popup.form.div_boardInfo.form);
            obj.set_taborder("12");
            obj.set_text("권한 삭제");
            obj.set_cssclass("btn_WF_Row_Delete");
            this.popup.form.div_boardInfo.addChild(obj.name, obj);

            obj = new Button("btn_addRow",null,"294","80","26","117",null,null,null,null,null,this.popup.form.div_boardInfo.form);
            obj.set_taborder("11");
            obj.set_text("권한 추가");
            obj.set_cssclass("btn_WF_Row_Add");
            this.popup.form.div_boardInfo.addChild(obj.name, obj);

            obj = new Grid("grdBoardRoles","184","324","522",null,null,"20",null,null,null,null,this.popup.form.div_boardInfo.form);
            obj.set_taborder("13");
            obj.set_binddataset("dsBoardRoles");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"100\"/><Column size=\"64\" band=\"right\"/><Column size=\"64\" band=\"right\"/><Column size=\"64\" band=\"right\"/><Column size=\"64\" band=\"right\"/></Columns><Rows><Row size=\"46\" band=\"head\"/><Row size=\"33\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"권한명\"/><Cell col=\"2\" text=\"목록 보기\"/><Cell col=\"3\" text=\"내용 보기\"/><Cell col=\"4\" text=\"글쓰기\"/><Cell col=\"5\" text=\"댓글 작성\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:rowCheck\"/><Cell col=\"1\" text=\"bind:roleNm\"/><Cell col=\"2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:canViewList\" checkboxfalsevalue=\"N\" checkboxtruevalue=\"Y\"/><Cell col=\"3\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\" text=\"bind:canViewArticle\" checkboxfalsevalue=\"N\" checkboxtruevalue=\"Y\"/><Cell col=\"4\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\" text=\"bind:canWriteArticle\" checkboxfalsevalue=\"N\" checkboxtruevalue=\"Y\"/><Cell col=\"5\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\" text=\"bind:canWriteReply\" checkboxfalsevalue=\"N\" checkboxtruevalue=\"Y\"/></Band></Format></Formats>");
            this.popup.form.div_boardInfo.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_01_00_00","349",null,"103","25",null,"51",null,null,null,null,this.popup.form);
            obj.set_taborder("6");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.popup.addChild(obj.name, obj);

            obj = new Div("div_btnGroup","30","669","740","28",null,null,null,null,null,null,this.popup.form);
            obj.set_taborder("7");
            this.popup.addChild(obj.name, obj);

            obj = new Button("btnSave","0","0","65","28",null,null,null,null,null,null,this.popup.form.div_btnGroup.form);
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_icoSave");
            obj.set_taborder("1");
            this.popup.form.div_btnGroup.addChild(obj.name, obj);

            obj = new Button("btnDelete","0","0","64","28",null,null,null,null,null,null,this.popup.form.div_btnGroup.form);
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_icoDelete");
            obj.set_taborder("2");
            obj.set_visible("false");
            this.popup.form.div_btnGroup.addChild(obj.name, obj);

            obj = new Button("btnClose","0","0","65","28",null,null,null,null,null,null,this.popup.form.div_btnGroup.form);
            obj.set_text("닫기");
            obj.set_cssclass("");
            obj.set_visible("true");
            obj.set_taborder("0");
            this.popup.form.div_btnGroup.addChild(obj.name, obj);

            obj = new Static("sta_boardNmRequired","115","117","25","34",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("*");
            obj.set_cssclass("essential");
            obj.set_tooltiptext("필수입력");
            this.addChild(obj.name, obj);

            obj = new Static("sta_upperMenuRequired","120","326","25","34",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("*");
            obj.set_cssclass("essential");
            obj.set_tooltiptext("필수입력");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.popup.form.div_boardInfo.form
            obj = new Layout("default","",1032,72,this.popup.form.div_boardInfo.form,function(p){});
            this.popup.form.div_boardInfo.form.addLayout(obj.name, obj);

            //-- Default Layout : this.popup.form.div_btnGroup.form
            obj = new Layout("default","",0,0,this.popup.form.div_btnGroup.form,function(p){});
            obj.set_type("horizontal");
            obj.set_horizontalgap("3");
            obj.set_flexmainaxisalign("center");
            this.popup.form.div_btnGroup.form.addLayout(obj.name, obj);

            //-- Default Layout : this.popup.form
            obj = new Layout("default","",0,0,this.popup.form,function(p){});
            this.popup.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",800,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","popup.form.div_boardInfo.form.edt_boardNm","value","dsBoard","boardNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","popup.form.div_boardInfo.form.ta_boardIntro","value","dsBoard","boardIntro");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","popup.form.div_boardInfo.form.cbo_boardType","value","dsBoard","boardType");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","popup.form.div_boardInfo.form.edt_boardAttr","value","dsBoard","boardAttr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","popup.form.div_boardInfo.form.rad_replyPosblYn","value","dsBoard","replyPosblYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","popup.form.div_boardInfo.form.rad_fileAtchPosblyn","value","dsBoard","fileAtchPosblYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","popup.form.div_boardInfo.form.cbo_useYn","value","dsBoard","useYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","popup.form.div_boardInfo.form.edt_upperMenuNm","value","dsBoard","upperMenuNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","popup.form.div_boardInfo.form.edt_sortOrdr","value","dsBoard","sortOrdr");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("boardRegistPopup.xfdl","lib::common.xjs");
        this.registerScript("boardRegistPopup.xfdl", function() {
        /**
        *  게시판 등록 및 수정 팝업
        *  MenuPath      관리 메뉴 - 관리자 - 게시판 관리
        *  FileName      boardRegistPopup.xfdl
        *  Creator 	     parksw
        *  CreateDate    2023.03.27
        *  Desction      게시판 목록 관리
        ************** 소스 수정 이력 ***********************************************
        *  date          Modifier    Description
        *******************************************************************************
        *  2023.03.27    parksw 	 최초 생성
        *******************************************************************************/

        this.executeIncludeScript("lib::common.xjs"); /*include "lib::common.xjs"*/;

        /***********************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose)
         ***********************************************************************************************/

        /**
         * @description 화면 onload
         */
        this.boardRegistPopup_onload = function(obj,e)
        {
        	this.gfnFormOnLoad(this);
            var boardId = this.parent.boardId;

            if (boardId != null && boardId != "") {
                this.popup.form.popupTitle.set_text("게시판 수정");
                this.type = "updated";
                this.popup.form.div_btnGroup.form.btnDelete.set_visible(true);
            } else {
                this.type = "inserted";
            }

            this.gfnLoadCombo("loadCombo", "dsBoardTypeCombo=PMS:CMS:BOARD_TYPE dsBoardAttrCombo=PMS:CMS:BOARD_ATTR dsBoardAvailCombo=PMS:CMS:BOARD_AVAIL dsUseCombo=PMS:SM:USE_YN", "fnComboCallback");
        };


        /************************************************************************************************
         * TRANSACTION 서비스 호출 처리
         ************************************************************************************************/

        /**
         * @description 조회
         */
        this.fnSearch = function ()
        {
        	var strSvcId    = "getBoardInfo";
        	var strSvcUrl   = "cms/getBoardManageItem.do";
        	var inData      = "dsSearch";
        	var outData     = "dsBoard dsBoardRoles";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        this.fnSave = function ()
        {
        	var strSvcId    = "saveBoardInfo";
        	var strSvcUrl   = "cms/saveBoardManageItem.do";
        	var inData      = "dsBoard dsBoardRoles";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

            this.dsBoard.setColumn(0, "rowStatus", this.type);

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        this.fnDelete = function ()
        {
        	var strSvcId    = "deleteBoardInfo";
        	var strSvcUrl   = "cms/deleteBoardManageItem.do";
        	var inData      = "dsBoard";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

            this.dsBoard.setColumn(0, "rowStatus", this.type);

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        /************************************************************************************************
         * CALLBACK 콜백 처리부분(Transaction, Popup)
         ************************************************************************************************/

        this.fnComboCallback = function (svcId, errorCode, errorMsg)
        {
            var boardId = this.parent.boardId;
            if (boardId != null && boardId != "") {
                this.dsSearch.setColumn(0, "boardId", boardId);

                if (this.parent.sysId != null && this.parent.sysId != "") {
                    this.dsSearch.setColumn(0, "sysId", this.parent.sysId);
                }

                this.fnSearch();
                this.roleUpdated = false;
            } else {
                // 기본값을 설정한다.
                this.gfnInsertRow(this.dsBoard, "last");
                this.dsBoard.setColumn(0, "boardType", "BBST01");
                this.dsBoard.setColumn(0, "boardAttr", "BBSA02");
                this.dsBoard.setColumn(0, "replyPosblYn", "Y");
                this.dsBoard.setColumn(0, "fileAtchPosblYn", "Y");
                this.dsBoard.setColumn(0, "useYn", "Y");

                // 게시판 권한 목록에 기본 항목을 추가한다.
                var p = this.dsBoardRoles.addRow();
                this.dsBoardRoles.setColumn(p, "sysId", this.parent.sysId);
                this.dsBoardRoles.setColumn(p, "roleCode", "ROLE_USER");
                this.dsBoardRoles.setColumn(p, "roleNm", "일반 사용자");
                this.dsBoardRoles.setColumn(p, "canViewList", "Y");
                this.dsBoardRoles.setColumn(p, "canViewArticle", "Y");
                this.dsBoardRoles.setColumn(p, "canWriteArticle", "Y");
                this.dsBoardRoles.setColumn(p, "canWriteReply", "Y");
            }
        };

        /**
         * @description Transaction CallBack 함수
         */
        this.fnCallback = function (svcId, errorCode, errorMsg)
        {
            switch (svcId) {
                case "getBoardInfo":
                    if (this.dsBoard.rowcount == 0) {
                        this.gfnAlert("CM_MSG_NO_ITEM");  // 항목이 없습니다.
                        this.gfnPopupClose(true);
                    }
                    this.roleUpdated = false;
                    break;
                case "saveBoardInfo":
                    if(this.callbackMsg == "success"){
                        this.gfnAlert("CM_MSG_SAVE_SUCCESS");  // 저장 되었습니다.
                        this.gfnPopupClose(true);
                    }
                    break;
                case "deleteBoardInfo":
                    if(this.callbackMsg == "success"){
                        this.gfnAlert("CM_MSG_DELETE_SUCCESS");  // 저장 되었습니다.
                        this.gfnPopupClose(true);
                    }
                    break;
            }
        };

        this.fnPopupCallback = function (popupId, args)
        {
            if (popupId == "menuSearchPopup") {
                var result = this.gfnGetPopupRtn();
                if (result != null && Object.prototype.hasOwnProperty.call(result, "menus")) {
                    if (result.menus.length > 0) {
                        var menu = result.menus[0];
                        this.dsBoard.setColumn(0, "upperMenuId", menu.menuId);
                        this.dsBoard.setColumn(0, "upperMenuNm", menu.menuNm);
                    } else {
                        this.dsBoard.setColumn(0, "upperMenuId", null);
                        this.dsBoard.setColumn(0, "upperMenuNm", null);
                    }
                }
            } else if (popupId == "roleSearchPopup") {
                var result = this.gfnGetPopupRtn();
                if (result != null && Object.prototype.hasOwnProperty.call(result, "roles")) {
                    var n = result.roles.length;

                    for (var i = 0; i < n; i++) {
                        var item = result.roles[i];
                        var l = this.dsBoardRoles.findRowExpr("roleCode == \"" + item.roleCode + "\" && sysId == \"" + item.sysId + "\"");
                        if (l < 0) {
                            var p = this.dsBoardRoles.addRow();
                            this.dsBoardRoles.setColumn(p, "sysId", item.sysId);
                            this.dsBoardRoles.setColumn(p, "roleCode", item.roleCode);
                            this.dsBoardRoles.setColumn(p, "roleNm", item.roleNm);
                            this.dsBoardRoles.setColumn(p, "roleCode", item.roleCode);
                            this.dsBoardRoles.setColumn(p, "canViewList", "Y");
                            this.dsBoardRoles.setColumn(p, "canViewArticle", "Y");
                            this.dsBoardRoles.setColumn(p, "canWriteArticle", "Y");
                            this.dsBoardRoles.setColumn(p, "canWriteReply", "Y");
                        }
                    }
                }
            }
        };

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/

        this.popup_btn_close_onclick = function(obj,e)
        {
        	this.gfnPopupClose(false);
        };

        this.popup_btn_save_onclick = function(obj,e)
        {
            this.fnBeforeSave();
        };

        this.popup_div_btnGroup_btnDelete_onclick = function(obj,e)
        {
            var boardId = this.parent.boardId;
            if (boardId != null && boardId != "") {
                this.fnDelete();
            }
        };

        this.popup_div_boardInfo_btn_schMenu_onclick = function(obj,e)
        {
        	this.fnOpenMenuPopup();
        };

        this.popup_div_boardInfo_btn_addRow_onclick = function(obj,e)
        {
            this.fnOpenRolePopup();
        };

        this.popup_div_boardInfo_btn_deleteRow_onclick = function(obj,e)
        {
            var indices = this.gfnGetCheckedRows(this.dsBoardRoles, "rowCheck");
            this.dsBoardRoles.deleteMultiRows(indices);
        };

        this.dsBoardRoles_onvaluechanged = function(obj,e)
        {
        	this.roleUpdated = true;
        };

        /************************************************************************************************
        * 사용자 FUNCTION 영역
        ************************************************************************************************/

        this.fnOpenMenuPopup = function ()
        {
            var args = {
                menuId: this.dsBoard.getColumn(0, "upperMenuId"),
                mode: "single",
                typesCanSelect: ["GROUP"]
            };

            this.gfnOpenPopup("menuSearchPopup", "sm::menuSearchPopup.xfdl", args, "fnPopupCallback", "");
        };

        this.fnOpenRolePopup = function ()
        {
        	var args = {
            };

            this.gfnOpenPopup("roleSearchPopup", "sm::roleSearchPopup.xfdl", args, "fnPopupCallback", "");
        };

        this.fnBeforeSave = function ()
        {
            if (!this.fnValidate()) {
                return;
            }

            if (this.dsBoardRoles.rowcount == 0) {
                this.gfnAlert("CMN_BBS_MNG_SAVE_EMPTY_ROLE", [], "", { trueFunc: "fnSave" });
            } else {
                this.gfnAlert("CM_CFM_BEFORE_SAVE", [], "", { trueFunc: "fnSave" });
            }
        };

        this.fnValidate = function ()
        {
            if (!this.gfnDsIsUpdated(this.dsBoard) && !this.roleUpdated) {
        		this.gfnAlert("CM_MSG_SAVE_NOCHANGE");  // 변경된 내역이 없습니다.
        		return false;
            }

            var args = [
                ["boardNm", "NULL|MAX_LEN:100", "게시판명"],
                ["boardIntro", "MAX_LEN:4000", "게시판 설명"],
                ["upperMenuId", "NULL", "상위 메뉴"],
                ["sortOrdr", "NULL|NUM", "정렬 순서"]
            ];

            if (!this.gfnCheckGrid(this.dsBoard, args, "")) {
                return false;
            }

            var n = this.dsBoardRoles.rowcount;
            for (var i = 0; i < n; i++) {
                var roleNm = this.dsBoardRoles.getColumn(i, "roleNm");
                var canViewList = this.dsBoardRoles.getColumn(i, "canViewList") == "Y";
                var canViewArticle = this.dsBoardRoles.getColumn(i, "canViewArticle") == "Y";
                var canWriteArticle = this.dsBoardRoles.getColumn(i, "canWriteArticle") == "Y";
                var canWriteReply = this.dsBoardRoles.getColumn(i, "canWriteReply") == "Y";

                if (!canViewList && !canViewArticle && !canWriteArticle && !canWriteReply) {
                    this.gfnAlert("CMN_BBS_MNG_CHECK_ROLE", roleNm);
                    return false;
                }
            }

            return true;
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.boardRegistPopup_onload,this);
            this.popup.form.Static04_00_00_01.addEventHandler("onclick",this.Static31_onclick,this);
            this.popup.form.Static04_00_00_01_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.popup.form.div_boardInfo.form.Static04_00_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.popup.form.div_boardInfo.form.Static07_01_01_00.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.popup.form.div_boardInfo.form.Static07_01_01_00_00.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.popup.form.div_boardInfo.form.Static07_00_01_00.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.popup.form.div_boardInfo.form.sta_dtlInfo.addEventHandler("onclick",this.Static09_onclick,this);
            this.popup.form.div_boardInfo.form.Static07_01_02_00.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.popup.form.div_boardInfo.form.sta_boardType.addEventHandler("onclick",this.div_Search02_00_in_YY_onclick,this);
            this.popup.form.div_boardInfo.form.Static04_00_00_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.popup.form.div_boardInfo.form.Static07_01_01_00_01.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.popup.form.div_boardInfo.form.sta_boardAttr.addEventHandler("onclick",this.div_Search02_00_in_YY_onclick,this);
            this.popup.form.div_boardInfo.form.Static07_01_02_00_00.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.popup.form.div_boardInfo.form.Static07_01_01_00_02.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.popup.form.div_boardInfo.form.Static07_01_02_00_00_00.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.popup.form.div_boardInfo.form.sta_fileAtchPosblYn.addEventHandler("onclick",this.div_Search02_00_in_YY_onclick,this);
            this.popup.form.div_boardInfo.form.sta_replyPosblYn.addEventHandler("onclick",this.div_Search02_00_in_YY_onclick,this);
            this.popup.form.div_boardInfo.form.Static07_01_01_00_02_00.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.popup.form.div_boardInfo.form.sta_useYn.addEventHandler("onclick",this.div_Search02_00_in_YY_onclick,this);
            this.popup.form.div_boardInfo.form.Static07_01_01_00_02_00_00.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.popup.form.div_boardInfo.form.sta_upperMenuId.addEventHandler("onclick",this.div_Search02_00_in_YY_onclick,this);
            this.popup.form.div_boardInfo.form.sta_sortOrdr.addEventHandler("onclick",this.div_Search02_00_in_YY_onclick,this);
            this.popup.form.div_boardInfo.form.Static07_01_01_00_02_00_01.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.popup.form.div_boardInfo.form.Static07_01_02_00_00_01.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.popup.form.div_boardInfo.form.Static07_01_02_00_00_00_00.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.popup.form.div_boardInfo.form.in_YY01_01_00.addEventHandler("onclick",this.div_Search02_00_in_YY_onclick,this);
            this.popup.form.div_boardInfo.form.Static07_01_01_00_02_00_01_00.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.popup.form.div_boardInfo.form.Static07_00_00_00.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.popup.form.div_boardInfo.form.btn_schMenu.addEventHandler("onclick",this.popup_div_boardInfo_btn_schMenu_onclick,this);
            this.popup.form.div_boardInfo.form.btn_deleteRow.addEventHandler("onclick",this.popup_div_boardInfo_btn_deleteRow_onclick,this);
            this.popup.form.div_boardInfo.form.btn_addRow.addEventHandler("onclick",this.popup_div_boardInfo_btn_addRow_onclick,this);
            this.popup.form.Static04_00_00_01_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.popup.form.div_btnGroup.form.btnSave.addEventHandler("onclick",this.popup_btn_save_onclick,this);
            this.popup.form.div_btnGroup.form.btnDelete.addEventHandler("onclick",this.popup_div_btnGroup_btnDelete_onclick,this);
            this.popup.form.div_btnGroup.form.btnClose.addEventHandler("onclick",this.popup_btn_close_onclick,this);
            this.dsBoardRoles.addEventHandler("oncolumnchanged",this.dsBoardRoles_oncolumnchanged,this);
            this.dsBoardRoles.addEventHandler("onvaluechanged",this.dsBoardRoles_onvaluechanged,this);
        };
        this.loadIncludeScript("boardRegistPopup.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
