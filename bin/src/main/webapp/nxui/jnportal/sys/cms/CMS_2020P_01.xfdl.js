(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CMS_2020P_01");
            this.set_titletext("게시글 보기");
            if (Form == this.constructor)
            {
                this._setFormPosition(1084,1440);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsUiStat", this);
            obj._setContents("<ColumnInfo><Column id=\"showYnVisible\" type=\"STRING\" size=\"256\"/><Column id=\"inOutDivVisible\" type=\"STRING\" size=\"256\"/><Column id=\"durationVisible\" type=\"STRING\" size=\"256\"/><Column id=\"boardNm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"showYnVisible\">false</Col><Col id=\"inOutDivVisible\">true</Col><Col id=\"durationVisible\">true</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsArticle", this);
            obj._setContents("<ColumnInfo><Column id=\"sysId\" type=\"STRING\" size=\"20\"/><Column id=\"boardId\" type=\"STRING\" size=\"20\"/><Column id=\"artclId\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"artclTitle\" type=\"STRING\" size=\"200\"/><Column id=\"artclCont\" type=\"STRING\" size=\"2147483647\"/><Column id=\"showYn\" type=\"STRING\" size=\"1\"/><Column id=\"showStartDt\" type=\"DATE\" size=\"256\"/><Column id=\"showEndDt\" type=\"DATE\" size=\"256\"/><Column id=\"atchFileId\" type=\"STRING\" size=\"40\"/><Column id=\"inOutDiv\" type=\"STRING\" size=\"20\"/><Column id=\"upArtclId\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"viewCount\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"rgstId\" type=\"STRING\" size=\"256\"/><Column id=\"rgstNm\" type=\"STRING\" size=\"256\"/><Column id=\"rgstDt\" type=\"DATETIME\" size=\"256\"/><Column id=\"showDtRange\" type=\"STRING\" size=\"256\"/><Column id=\"prevArtclId\" type=\"STRING\" size=\"256\"/><Column id=\"prevArtclTitle\" type=\"STRING\" size=\"256\"/><Column id=\"nextArtclId\" type=\"STRING\" size=\"256\"/><Column id=\"nextArtclTitle\" type=\"STRING\" size=\"256\"/><Column id=\"showYnNm\" type=\"STRING\" size=\"256\"/><Column id=\"inOutDivNm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"showYn\">Y</Col><Col id=\"inOutDiv\">IN</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAttach", this);
            obj._setContents("<ColumnInfo><Column id=\"fileId\" type=\"STRING\" size=\"256\"/><Column id=\"fileSeq\" type=\"STRING\" size=\"256\"/><Column id=\"fileName\" type=\"STRING\" size=\"256\"/><Column id=\"fileSize\" type=\"STRING\" size=\"256\"/><Column id=\"fileMask\" type=\"STRING\" size=\"256\"/><Column id=\"fileUploadPath\" type=\"STRING\" size=\"256\"/><Column id=\"fileUploadFullPath\" type=\"STRING\" size=\"256\"/><Column id=\"link\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsShowYnCbo", this);
            obj._setContents("<ColumnInfo><Column id=\"text\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsInOutCbo", this);
            obj._setContents("<ColumnInfo><Column id=\"text\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBoard", this);
            obj._setContents("<ColumnInfo><Column id=\"sysId\" type=\"STRING\" size=\"256\"/><Column id=\"boardId\" type=\"STRING\" size=\"256\"/><Column id=\"boardIntro\" type=\"STRING\" size=\"256\"/><Column id=\"boardNm\" type=\"STRING\" size=\"256\"/><Column id=\"boardType\" type=\"STRING\" size=\"256\"/><Column id=\"boardAttr\" type=\"STRING\" size=\"256\"/><Column id=\"replyPosblYn\" type=\"STRING\" size=\"256\"/><Column id=\"fileAtchPosblYn\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"rgstDt\" type=\"DATE\" size=\"256\"/><Column id=\"rsgtId\" type=\"STRING\" size=\"256\"/><Column id=\"rgstIp\" type=\"STRING\" size=\"256\"/><Column id=\"updtId\" type=\"DATE\" size=\"256\"/><Column id=\"updtDt\" type=\"STRING\" size=\"256\"/><Column id=\"updtIp\" type=\"STRING\" size=\"256\"/><Column id=\"upperMenuId\" type=\"STRING\" size=\"256\"/><Column id=\"upperMenuNm\" type=\"STRING\" size=\"256\"/><Column id=\"sortOrdr\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBoardRoles", this);
            obj._setContents("<ColumnInfo><Column id=\"sysId\" type=\"STRING\" size=\"256\"/><Column id=\"boardId\" type=\"STRING\" size=\"256\"/><Column id=\"roleCode\" type=\"STRING\" size=\"256\"/><Column id=\"boardFuncId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsComment", this);
            obj.set_updatecontrol("false");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"cmntId\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"sysId\" type=\"STRING\" size=\"20\"/><Column id=\"boardId\" type=\"STRING\" size=\"20\"/><Column id=\"artclId\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"artclCont\" type=\"STRING\" size=\"4000\"/><Column id=\"atchFileId\" type=\"STRING\" size=\"40\"/><Column id=\"upCmntId\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"rgstId\" type=\"STRING\" size=\"20\"/><Column id=\"rgstDt\" type=\"DATETIME\" size=\"256\"/><Column id=\"rgstNm\" type=\"STRING\" size=\"300\"/><Column id=\"level\" type=\"INT\" size=\"256\"/><Column id=\"replyCont\" type=\"STRING\" size=\"4000\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCommentRegist", this);
            obj._setContents("<ColumnInfo><Column id=\"rowStatus\" type=\"STRING\" size=\"256\"/><Column id=\"sysId\" type=\"STRING\" size=\"256\"/><Column id=\"boardId\" type=\"STRING\" size=\"256\"/><Column id=\"artclId\" type=\"STRING\" size=\"256\"/><Column id=\"cmntId\" type=\"STRING\" size=\"256\"/><Column id=\"upCmntId\" type=\"STRING\" size=\"256\"/><Column id=\"artclCont\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("popupDiv","0","50",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_formscrollbartype("auto");
            obj.set_formscrolltype("vertical");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","30","20",null,"1370","30",null,null,null,null,null,this.popupDiv.form);
            obj.set_taborder("1");
            obj.set_text("Div00");
            this.popupDiv.addChild(obj.name, obj);

            obj = new Div("divFormBox","0","0","100%","132",null,null,null,null,null,null,this.popupDiv.form.Div00.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_popup");
            obj.set_text("");
            obj.set_flexgrow("0");
            obj.set_flexshrink("0");
            this.popupDiv.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static10","0","0","19","132",null,null,null,null,null,null,this.popupDiv.form.Div00.form.divFormBox.form);
            obj.set_taborder("0");
            obj.set_text("w20");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.popupDiv.form.Div00.form.divFormBox.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_00","110","0","60","45",null,null,null,null,null,null,this.popupDiv.form.Div00.form.divFormBox.form);
            obj.set_taborder("1");
            obj.set_text("h 45");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.popupDiv.form.Div00.form.divFormBox.addChild(obj.name, obj);

            obj = new Static("staArtclTitle","19","11",null,"27","20",null,null,null,"27",null,this.popupDiv.form.Div00.form.divFormBox.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_subTitle01");
            obj.set_fittocontents("height");
            obj.set_padding("4px 0px 4px 21px");
            this.popupDiv.form.Div00.form.divFormBox.addChild(obj.name, obj);

            obj = new Static("staHd0","21","staArtclTitle:7",null,"1","20",null,null,null,null,null,this.popupDiv.form.Div00.form.divFormBox.form);
            obj.set_taborder("3");
            obj.set_background("#dddddd");
            obj.set_text("");
            this.popupDiv.form.Div00.form.divFormBox.addChild(obj.name, obj);

            obj = new Static("staRgstNm","21","staHd0:0","151","34",null,null,null,null,null,null,this.popupDiv.form.Div00.form.divFormBox.form);
            obj.set_taborder("11");
            obj.set_text("작성자");
            obj.set_cssclass("sta_WF_condition02");
            this.popupDiv.form.Div00.form.divFormBox.addChild(obj.name, obj);

            obj = new Static("staVd0","20","staHd0:-1","1",null,null,"14",null,null,null,null,this.popupDiv.form.Div00.form.divFormBox.form);
            obj.set_taborder("6");
            obj.set_background("#00388e");
            obj.set_text("");
            this.popupDiv.form.Div00.form.divFormBox.addChild(obj.name, obj);

            obj = new Static("sta001","21","staRgstNm:0",null,"1","20",null,null,null,null,null,this.popupDiv.form.Div00.form.divFormBox.form);
            obj.set_taborder("2");
            obj.set_background("#dddddd");
            obj.set_text("");
            this.popupDiv.form.Div00.form.divFormBox.addChild(obj.name, obj);

            obj = new Static("staShowYn","staVd0:0","sta001:0","151","34",null,null,null,null,null,null,this.popupDiv.form.Div00.form.divFormBox.form);
            obj.set_taborder("9");
            obj.set_text("공개 여부");
            obj.set_cssclass("sta_WF_condition02");
            this.popupDiv.form.Div00.form.divFormBox.addChild(obj.name, obj);

            obj = new Static("staHd2","21","staShowYn:0",null,"1","20",null,null,null,null,null,this.popupDiv.form.Div00.form.divFormBox.form);
            obj.set_taborder("4");
            obj.set_background("#dddddd");
            obj.set_text("");
            this.popupDiv.form.Div00.form.divFormBox.addChild(obj.name, obj);

            obj = new Static("Static07_00_01_00",null,"staHd0:-1","1",null,"20","15",null,null,null,null,this.popupDiv.form.Div00.form.divFormBox.form);
            obj.set_taborder("5");
            obj.set_background("#dddddd");
            this.popupDiv.form.Div00.form.divFormBox.addChild(obj.name, obj);

            obj = new Static("Static07_01_02_00","staRgstNm:0","staHd0:-1","1",null,null,"15",null,null,null,null,this.popupDiv.form.Div00.form.divFormBox.form);
            obj.set_taborder("7");
            obj.set_background("#dddddd");
            this.popupDiv.form.Div00.form.divFormBox.addChild(obj.name, obj);

            obj = new Static("staInOutDiv","staShowYn:176","sta001:0","151","34",null,null,null,null,null,null,this.popupDiv.form.Div00.form.divFormBox.form);
            obj.set_taborder("10");
            obj.set_text("대내외 구분");
            obj.set_cssclass("sta_WF_condition02");
            this.popupDiv.form.Div00.form.divFormBox.addChild(obj.name, obj);

            obj = new Static("Static10_00","173","46","12","34",null,null,null,null,null,null,this.popupDiv.form.Div00.form.divFormBox.form);
            obj.set_taborder("12");
            obj.set_text("w12");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.popupDiv.form.Div00.form.divFormBox.addChild(obj.name, obj);

            obj = new Static("Static10_00_00_00","173","116","12","34",null,null,null,null,null,null,this.popupDiv.form.Div00.form.divFormBox.form);
            obj.set_taborder("13");
            obj.set_text("w12");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.popupDiv.form.Div00.form.divFormBox.addChild(obj.name, obj);

            obj = new Static("Static10_00_01","173","81","12","34",null,null,null,null,null,null,this.popupDiv.form.Div00.form.divFormBox.form);
            obj.set_taborder("14");
            obj.set_text("w12");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.popupDiv.form.Div00.form.divFormBox.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_00_00","110",null,"60","15",null,"0",null,null,null,null,this.popupDiv.form.Div00.form.divFormBox.form);
            obj.set_taborder("15");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.popupDiv.form.Div00.form.divFormBox.addChild(obj.name, obj);

            obj = new Static("staShowRange","staInOutDiv:176","sta001:0","151","34",null,null,null,null,null,null,this.popupDiv.form.Div00.form.divFormBox.form);
            obj.set_taborder("16");
            obj.set_text("게시 기간");
            obj.set_cssclass("sta_WF_condition02");
            this.popupDiv.form.Div00.form.divFormBox.addChild(obj.name, obj);

            obj = new Static("staVd13",null,"81","1","35","staInOutDiv:0",null,null,null,null,null,this.popupDiv.form.Div00.form.divFormBox.form);
            obj.set_taborder("17");
            obj.set_background("#dddddd");
            this.popupDiv.form.Div00.form.divFormBox.addChild(obj.name, obj);

            obj = new Static("Static10_00_00","989","46","12","34",null,null,null,null,null,null,this.popupDiv.form.Div00.form.divFormBox.form);
            obj.set_taborder("19");
            obj.set_text("w12");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.popupDiv.form.Div00.form.divFormBox.addChild(obj.name, obj);

            obj = new Static("Static10_00_01_00",null,"81","12","34","staVd13:0",null,null,null,null,null,this.popupDiv.form.Div00.form.divFormBox.form);
            obj.set_taborder("20");
            obj.set_text("w12");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.popupDiv.form.Div00.form.divFormBox.addChild(obj.name, obj);

            obj = new Static("Static10_00_01_00_00","staInOutDiv:1","81","12","34",null,null,null,null,null,null,this.popupDiv.form.Div00.form.divFormBox.form);
            obj.set_taborder("21");
            obj.set_text("w12");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.popupDiv.form.Div00.form.divFormBox.addChild(obj.name, obj);

            obj = new Static("Static10_00_01_00_00_00","989","81","12","34",null,null,null,null,null,null,this.popupDiv.form.Div00.form.divFormBox.form);
            obj.set_taborder("22");
            obj.set_text("w12");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.popupDiv.form.Div00.form.divFormBox.addChild(obj.name, obj);

            obj = new Static("staRgstNmValue","staRgstNm:13","46","150","34",null,null,null,null,null,null,this.popupDiv.form.Div00.form.divFormBox.form);
            obj.set_taborder("23");
            this.popupDiv.form.Div00.form.divFormBox.addChild(obj.name, obj);

            obj = new Static("staShowValue","staShowYn:13","sta001:1","150","34",null,null,null,null,null,null,this.popupDiv.form.Div00.form.divFormBox.form);
            obj.set_taborder("24");
            obj.set_text("");
            this.popupDiv.form.Div00.form.divFormBox.addChild(obj.name, obj);

            obj = new Static("staInOutValue","staInOutDiv:13","sta001:0","150","34",null,null,null,null,null,null,this.popupDiv.form.Div00.form.divFormBox.form);
            obj.set_taborder("25");
            this.popupDiv.form.Div00.form.divFormBox.addChild(obj.name, obj);

            obj = new Static("staRgstDt","staRgstNm:176","staHd0:0","151","34",null,null,null,null,null,null,this.popupDiv.form.Div00.form.divFormBox.form);
            obj.set_taborder("28");
            obj.set_text("작성일");
            obj.set_cssclass("sta_WF_condition02");
            this.popupDiv.form.Div00.form.divFormBox.addChild(obj.name, obj);

            obj = new Static("Static07_01_02_00_00",null,"staHd0:0","1","35","staRgstDt:0",null,null,null,null,null,this.popupDiv.form.Div00.form.divFormBox.form);
            obj.set_taborder("27");
            obj.set_background("#dddddd");
            this.popupDiv.form.Div00.form.divFormBox.addChild(obj.name, obj);

            obj = new Static("staRgstDtValue","staRgstDt:13","47","150","34",null,null,null,null,null,null,this.popupDiv.form.Div00.form.divFormBox.form);
            obj.set_taborder("30");
            this.popupDiv.form.Div00.form.divFormBox.addChild(obj.name, obj);

            obj = new Static("Static07_01_02_00_00_00","staRgstDt:0","staHd0:0","1","34",null,null,null,null,null,null,this.popupDiv.form.Div00.form.divFormBox.form);
            obj.set_taborder("29");
            obj.set_background("#dddddd");
            this.popupDiv.form.Div00.form.divFormBox.addChild(obj.name, obj);

            obj = new Static("staShowRangeValue","staShowRange:13","81",null,"34","Static07_00_01_00:12",null,null,null,null,null,this.popupDiv.form.Div00.form.divFormBox.form);
            obj.set_taborder("26");
            this.popupDiv.form.Div00.form.divFormBox.addChild(obj.name, obj);

            obj = new Static("staVd14","staInOutDiv:0","81","1","34",null,null,null,null,null,null,this.popupDiv.form.Div00.form.divFormBox.form);
            obj.set_taborder("18");
            obj.set_background("#dddddd");
            this.popupDiv.form.Div00.form.divFormBox.addChild(obj.name, obj);

            obj = new Static("staViewCount","staRgstDt:176","staHd0:0","151","34",null,null,null,null,null,null,this.popupDiv.form.Div00.form.divFormBox.form);
            obj.set_taborder("31");
            obj.set_text("조회수");
            obj.set_cssclass("sta_WF_condition02");
            this.popupDiv.form.Div00.form.divFormBox.addChild(obj.name, obj);

            obj = new Static("Static07_01_02_00_00_01",null,"46","1","35","staViewCount:0",null,null,null,null,null,this.popupDiv.form.Div00.form.divFormBox.form);
            obj.set_taborder("32");
            obj.set_background("#dddddd");
            this.popupDiv.form.Div00.form.divFormBox.addChild(obj.name, obj);

            obj = new Static("Static07_01_02_00_00_00_00","staViewCount:0","46","1","34",null,null,null,null,null,null,this.popupDiv.form.Div00.form.divFormBox.form);
            obj.set_taborder("33");
            obj.set_background("#dddddd");
            this.popupDiv.form.Div00.form.divFormBox.addChild(obj.name, obj);

            obj = new Static("Static10_00_01_00_00_01_00",null,"46","12","34","staViewCount:1",null,null,null,null,null,this.popupDiv.form.Div00.form.divFormBox.form);
            obj.set_taborder("34");
            obj.set_text("w12");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.popupDiv.form.Div00.form.divFormBox.addChild(obj.name, obj);

            obj = new Static("staViewCountValue","staViewCount:13","47","150","34",null,null,null,null,null,null,this.popupDiv.form.Div00.form.divFormBox.form);
            obj.set_taborder("35");
            this.popupDiv.form.Div00.form.divFormBox.addChild(obj.name, obj);

            obj = new Static("Static10_00_01_00_00_01_00_00","827","46","12","34",null,null,null,null,null,null,this.popupDiv.form.Div00.form.divFormBox.form);
            obj.set_taborder("36");
            obj.set_text("w12");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.popupDiv.form.Div00.form.divFormBox.addChild(obj.name, obj);

            obj = new Static("Static10_00_01_00_01",null,"46","12","34","staRgstDt:1",null,null,null,null,null,this.popupDiv.form.Div00.form.divFormBox.form);
            obj.set_taborder("37");
            obj.set_text("w12");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.popupDiv.form.Div00.form.divFormBox.addChild(obj.name, obj);

            obj = new Static("Static07_01_02_00_00_01_00",null,"81","1","35","staShowRange:0",null,null,null,null,null,this.popupDiv.form.Div00.form.divFormBox.form);
            obj.set_taborder("38");
            obj.set_background("#dddddd");
            this.popupDiv.form.Div00.form.divFormBox.addChild(obj.name, obj);

            obj = new Static("Static07_01_02_00_00_00_00_00","staShowRange:0","81","1","34",null,null,null,null,null,null,this.popupDiv.form.Div00.form.divFormBox.form);
            obj.set_taborder("39");
            obj.set_background("#dddddd");
            this.popupDiv.form.Div00.form.divFormBox.addChild(obj.name, obj);

            obj = new Div("divViewWrap","100","174","100%","330",null,null,null,null,"330",null,this.popupDiv.form.Div00.form);
            obj.set_taborder("4");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_popup");
            obj.set_flexgrow("0");
            obj.set_flexshrink("0");
            this.popupDiv.form.Div00.addChild(obj.name, obj);

            obj = new WebView("wvEditor","0","0","100%",null,null,"0",null,null,"1",null,this.popupDiv.form.Div00.form.divViewWrap.form);
            obj.set_taborder("0");
            obj.set_flexgrow("1");
            obj.set_flexshrink("0");
            this.popupDiv.form.Div00.form.divViewWrap.addChild(obj.name, obj);

            obj = new Div("divAttachBox","0","0","100%","200",null,null,null,null,null,null,this.popupDiv.form.Div00.form);
            obj.set_taborder("1");
            obj.set_cssclass("div_WF_popup");
            obj.set_text("");
            obj.set_url("cmm::fileUpload.xfdl");
            obj.set_flexgrow("0");
            obj.set_flexshrink("0");
            this.popupDiv.form.Div00.addChild(obj.name, obj);

            obj = new Div("divNav","0","632","100.00%","71",null,null,null,null,null,null,this.popupDiv.form.Div00.form);
            obj.set_taborder("3");
            obj.set_text("");
            obj.set_flexgrow("0");
            obj.set_flexshrink("0");
            this.popupDiv.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static07_01_01_00_00","0","0",null,"1","0",null,null,null,null,null,this.popupDiv.form.Div00.form.divNav.form);
            obj.set_taborder("1");
            obj.set_background("#dddddd");
            obj.set_text("");
            this.popupDiv.form.Div00.form.divNav.addChild(obj.name, obj);

            obj = new Static("staPrevLabel","1","Static07_01_01_00_00:0","150","34",null,null,null,null,null,null,this.popupDiv.form.Div00.form.divNav.form);
            obj.set_taborder("6");
            obj.set_text("이전 글");
            obj.set_cssclass("sta_WF_condition02");
            this.popupDiv.form.Div00.form.divNav.addChild(obj.name, obj);

            obj = new Static("Static07_01_01_00","0","staPrevLabel:0",null,"1","0",null,null,null,null,null,this.popupDiv.form.Div00.form.divNav.form);
            obj.set_taborder("0");
            obj.set_background("#dddddd");
            obj.set_text("");
            this.popupDiv.form.Div00.form.divNav.addChild(obj.name, obj);

            obj = new Static("staNextLabel","1","Static07_01_01_00:0","150","34",null,null,null,null,null,null,this.popupDiv.form.Div00.form.divNav.form);
            obj.set_taborder("7");
            obj.set_text("다음 글");
            obj.set_cssclass("sta_WF_condition02");
            this.popupDiv.form.Div00.form.divNav.addChild(obj.name, obj);

            obj = new Static("Static07_01_01_00_01","0","staNextLabel:0",null,"1","0",null,null,null,null,null,this.popupDiv.form.Div00.form.divNav.form);
            obj.set_taborder("2");
            obj.set_background("#dddddd");
            obj.set_text("");
            this.popupDiv.form.Div00.form.divNav.addChild(obj.name, obj);

            obj = new Static("Static07_00_01_00",null,"0","1","71","0",null,null,null,null,null,this.popupDiv.form.Div00.form.divNav.form);
            obj.set_taborder("3");
            obj.set_background("#dddddd");
            this.popupDiv.form.Div00.form.divNav.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00","0","0","1","71",null,null,null,null,null,null,this.popupDiv.form.Div00.form.divNav.form);
            obj.set_taborder("4");
            obj.set_background("#00388e");
            obj.set_text("");
            this.popupDiv.form.Div00.form.divNav.addChild(obj.name, obj);

            obj = new Static("Static07_01_02_00","staPrevLabel:0","0","1","70",null,null,null,null,null,null,this.popupDiv.form.Div00.form.divNav.form);
            obj.set_taborder("5");
            obj.set_background("#dddddd");
            this.popupDiv.form.Div00.form.divNav.addChild(obj.name, obj);

            obj = new Static("Static10_00","152","1","12","34",null,null,null,null,null,null,this.popupDiv.form.Div00.form.divNav.form);
            obj.set_taborder("8");
            obj.set_text("w12");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.popupDiv.form.Div00.form.divNav.addChild(obj.name, obj);

            obj = new Static("staPrevTitle","staPrevLabel:13","Static07_01_01_00_00:0",null,"33","Static07_00_01_00:12",null,null,null,null,null,this.popupDiv.form.Div00.form.divNav.form);
            obj.set_taborder("9");
            this.popupDiv.form.Div00.form.divNav.addChild(obj.name, obj);

            obj = new Static("Static10_00_01","152","36","12","34",null,null,null,null,null,null,this.popupDiv.form.Div00.form.divNav.form);
            obj.set_taborder("10");
            obj.set_text("w12");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.popupDiv.form.Div00.form.divNav.addChild(obj.name, obj);

            obj = new Static("staNextTitle","staNextLabel:13","Static07_01_01_00:0",null,"33","Static07_00_01_00:12",null,null,null,null,null,this.popupDiv.form.Div00.form.divNav.form);
            obj.set_taborder("11");
            this.popupDiv.form.Div00.form.divNav.addChild(obj.name, obj);

            obj = new Div("divBtnGroup","30","979","100%","54",null,null,null,null,null,null,this.popupDiv.form.Div00.form);
            obj.set_taborder("2");
            obj.set_flexgrow("0");
            obj.set_flexshrink("0");
            this.popupDiv.form.Div00.addChild(obj.name, obj);

            obj = new Button("btnModify","934","2681","65","28",null,null,null,null,null,null,this.popupDiv.form.Div00.form.divBtnGroup.form);
            obj.set_text("수정");
            obj.set_cssclass("btn_WF_icoModify");
            obj.set_taborder("1");
            obj.set_visible("false");
            this.popupDiv.form.Div00.form.divBtnGroup.addChild(obj.name, obj);

            obj = new Button("btnDelete","187","2681","64","28",null,null,null,null,null,null,this.popupDiv.form.Div00.form.divBtnGroup.form);
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_icoDelete");
            obj.set_taborder("2");
            obj.set_visible("false");
            this.popupDiv.form.Div00.form.divBtnGroup.addChild(obj.name, obj);

            obj = new Button("btnClose","0","0","65","28",null,null,null,null,null,null,this.popupDiv.form.Div00.form.divBtnGroup.form);
            obj.set_text("닫기");
            obj.set_cssclass("");
            obj.set_visible("true");
            obj.set_taborder("0");
            this.popupDiv.form.Div00.form.divBtnGroup.addChild(obj.name, obj);

            obj = new Div("divComment","0","849","100.00%","457",null,null,null,null,null,null,this.popupDiv.form.Div00.form);
            obj.set_taborder("6");
            obj.set_text("Div00");
            obj.set_flexgrow("0");
            obj.set_flexshrink("0");
            obj.set_cssclass("div_WF_popup");
            this.popupDiv.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static10","0","0","19","132",null,null,null,null,null,null,this.popupDiv.form.Div00.form.divComment.form);
            obj.set_taborder("0");
            obj.set_text("w20");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.popupDiv.form.Div00.form.divComment.addChild(obj.name, obj);

            obj = new Static("sta001","19","11","50","27",null,null,null,null,"27",null,this.popupDiv.form.Div00.form.divComment.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_subTitle01");
            obj.set_fittocontents("width");
            obj.set_padding("4px 0px 4px 21px");
            obj.set_text("댓글");
            this.popupDiv.form.Div00.form.divComment.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_00","110","0","60","45",null,null,null,null,null,null,this.popupDiv.form.Div00.form.divComment.form);
            obj.set_taborder("2");
            obj.set_text("h 45");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.popupDiv.form.Div00.form.divComment.addChild(obj.name, obj);

            obj = new Static("staGridRowCnt","sta001:0","11","149","27",null,null,null,null,null,null,this.popupDiv.form.Div00.form.divComment.form);
            obj.set_taborder("3");
            obj.set_text("(총 0건)");
            obj.set_cssclass("sta_WF_subResult");
            this.popupDiv.form.Div00.form.divComment.addChild(obj.name, obj);

            obj = new ListView("lvComment","19","sta001:7",null,"306","20",null,null,null,null,null,this.popupDiv.form.Div00.form.divComment.form);
            obj.set_taborder("4");
            obj.set_border("1px solid #dddddd, 0px none, 0px none");
            obj.set_background("transparent");
            obj.set_binddataset("dsComment");
            obj.set_bandexpandtype("accordion");
            obj.set_autoupdatetype("itemselect");
            obj.set_autoenter("select");
            obj.set_readonly("false");
            obj._setContents("<Formats><Format id=\"default\"><Band id=\"body\" width=\"100%\" height=\"80\"><Cell id=\"cellRgstNm\" left=\"expr:level * 20 - 10\" top=\"6\" width=\"80\" height=\"20\" text=\"bind:rgstNm\" border=\"0px none\" color=\"#000000\" font=\"normal 700 12px/16px &quot;Malgun Gothic&quot;\"/><Cell id=\"cellCont\" left=\"expr:level * 20 - 10\" top=\"cellRgstNm:6\" text=\"bind:artclCont\" right=\"10\" bottom=\"10\" tooltiptext=\"bind:artclCont\" border=\"0px none\" color=\"#000000\" wordWrap=\"english\" font=\"normal 12px/16px &quot;Malgun Gothic&quot;\" verticalAlign=\"top\"/><Cell id=\"cellRgstDt\" left=\"cellRgstNm:10\" top=\"4\" width=\"180\" height=\"20\" text=\"bind:rgstDt\" border=\"0px none\" font=\"normal 12px/16px &quot;Malgun Gothic&quot;\"/><Cell id=\"cellReply\" top=\"12\" height=\"7\" right=\"cellRgstNm:8\" width=\"7\" border=\"0px none, 0px none, 1px dotted black, 1px dotted black\"/><Cell id=\"cellDelete\" top=\"6\" width=\"58\" height=\"26\" right=\"10\" text=\"삭제\" border=\"0px none\" displaytype=\"expr:nexacro.getApplication().gdsUserInfo.getColumn(0, &quot;userId&quot;) == rgstId ? &quot;buttoncontrol&quot; : &quot;none&quot;\" edittype=\"expr:nexacro.getApplication().gdsUserInfo.getColumn(0, &quot;userId&quot;) == rgstId ? &quot;button&quot; : &quot;none&quot;\" borderRadius=\"4px\" padding=\"0px\"/></Band><Band id=\"detail\" width=\"100%\" height=\"80\"><Cell id=\"cellSave\" top=\"10\" width=\"58\" height=\"26\" right=\"10\" text=\"작성\" displaytype=\"buttoncontrol\" edittype=\"button\" padding=\"0px\" border=\"0px none\" color=\"white\" background=\"#5473e0\" borderRadius=\"4px\"/><Cell id=\"cellReplyCont\" left=\"expr:level * 20 + 10\" top=\"10\" edittype=\"textarea\" right=\"cellSave:10\" bottom=\"10\" padding=\"0px\" border=\"0px none\" text=\"bind:replyCont\" textareaacceptsenter=\"true\" textareamaxlength=\"4000\" displaytype=\"textareacontrol\" textareascrolltype=\"vertical\" wordWrap=\"english\"/><Cell id=\"cellReply\" top=\"10\" height=\"7\" right=\"cellReplyCont:8\" width=\"7\" border=\"0px none, 0px none, 1px dotted black, 1px dotted black\"/></Band></Format></Formats>");
            this.popupDiv.form.Div00.form.divComment.addChild(obj.name, obj);

            obj = new TextArea("taComment","20","lvComment:10",null,"80","94",null,null,null,null,null,this.popupDiv.form.Div00.form.divComment.form);
            obj.set_taborder("5");
            obj.set_scrolltype("vertical");
            obj.set_wordWrap("english");
            this.popupDiv.form.Div00.form.divComment.addChild(obj.name, obj);

            obj = new Button("btnWrite","taComment:10","lvComment:10","65","28",null,null,null,null,null,null,this.popupDiv.form.Div00.form.divComment.form);
            obj.set_text("작성");
            obj.set_cssclass("btn_WF_icoDecision");
            obj.set_taborder("6");
            this.popupDiv.form.Div00.form.divComment.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_00_00","36",null,"60","15",null,"-1",null,null,null,null,this.popupDiv.form.Div00.form.divComment.form);
            obj.set_taborder("7");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.popupDiv.form.Div00.form.divComment.addChild(obj.name, obj);

            obj = new Static("Static10_00",null,"324","19","132","0",null,null,null,null,null,this.popupDiv.form.Div00.form.divComment.form);
            obj.set_taborder("8");
            obj.set_text("w20");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.popupDiv.form.Div00.form.divComment.addChild(obj.name, obj);

            obj = new Div("divBtnGroup2","30","979","100%","66",null,null,null,null,null,null,this.popupDiv.form.Div00.form);
            obj.set_taborder("5");
            obj.set_flexgrow("0");
            obj.set_flexshrink("0");
            this.popupDiv.form.Div00.addChild(obj.name, obj);

            obj = new Button("btnModify","934","2681","65","28",null,null,null,null,null,null,this.popupDiv.form.Div00.form.divBtnGroup2.form);
            obj.set_text("수정");
            obj.set_cssclass("btn_WF_icoModify");
            obj.set_taborder("1");
            obj.set_visible("false");
            this.popupDiv.form.Div00.form.divBtnGroup2.addChild(obj.name, obj);

            obj = new Button("btnDelete","187","2681","64","28",null,null,null,null,null,null,this.popupDiv.form.Div00.form.divBtnGroup2.form);
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_icoDelete");
            obj.set_taborder("2");
            obj.set_visible("false");
            this.popupDiv.form.Div00.form.divBtnGroup2.addChild(obj.name, obj);

            obj = new Button("btnClose","0","0","65","28",null,null,null,null,null,null,this.popupDiv.form.Div00.form.divBtnGroup2.form);
            obj.set_text("닫기");
            obj.set_cssclass("");
            obj.set_visible("true");
            obj.set_taborder("0");
            this.popupDiv.form.Div00.form.divBtnGroup2.addChild(obj.name, obj);

            obj = new Static("staBoardNm","0","0",null,"50","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_popupTitle");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.popupDiv.form.Div00.form.divFormBox.form
            obj = new Layout("default","",1032,72,this.popupDiv.form.Div00.form.divFormBox.form,function(p){});
            this.popupDiv.form.Div00.form.divFormBox.form.addLayout(obj.name, obj);

            //-- Default Layout : this.popupDiv.form.Div00.form.divViewWrap.form
            obj = new Layout("default","",0,0,this.popupDiv.form.Div00.form.divViewWrap.form,function(p){});
            this.popupDiv.form.Div00.form.divViewWrap.form.addLayout(obj.name, obj);

            //-- Default Layout : this.popupDiv.form.Div00.form.divAttachBox
            obj = new Layout("default","",0,0,this.popupDiv.form.Div00.form.divAttachBox.form,function(p){});
            this.popupDiv.form.Div00.form.divAttachBox.form.addLayout(obj.name, obj);

            //-- Default Layout : this.popupDiv.form.Div00.form.divNav.form
            obj = new Layout("default","",1032,72,this.popupDiv.form.Div00.form.divNav.form,function(p){});
            this.popupDiv.form.Div00.form.divNav.form.addLayout(obj.name, obj);

            //-- Default Layout : this.popupDiv.form.Div00.form.divBtnGroup.form
            obj = new Layout("default","",0,0,this.popupDiv.form.Div00.form.divBtnGroup.form,function(p){});
            obj.set_type("horizontal");
            obj.set_horizontalgap("3");
            obj.set_flexmainaxisalign("center");
            obj.set_spacing("15px 0 23px 0");
            this.popupDiv.form.Div00.form.divBtnGroup.form.addLayout(obj.name, obj);

            //-- Default Layout : this.popupDiv.form.Div00.form.divComment.form
            obj = new Layout("default","",0,0,this.popupDiv.form.Div00.form.divComment.form,function(p){});
            this.popupDiv.form.Div00.form.divComment.form.addLayout(obj.name, obj);

            //-- Default Layout : this.popupDiv.form.Div00.form.divBtnGroup2.form
            obj = new Layout("default","",0,0,this.popupDiv.form.Div00.form.divBtnGroup2.form,function(p){});
            obj.set_type("horizontal");
            obj.set_horizontalgap("3");
            obj.set_flexmainaxisalign("center");
            obj.set_spacing("15px 0 23px 0");
            this.popupDiv.form.Div00.form.divBtnGroup2.form.addLayout(obj.name, obj);

            //-- Default Layout : this.popupDiv.form.Div00.form
            obj = new Layout("default","",0,0,this.popupDiv.form.Div00.form,function(p){});
            obj.set_type("vertical");
            obj.set_verticalgap("10");
            this.popupDiv.form.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.popupDiv.form
            obj = new Layout("default","",0,0,this.popupDiv.form,function(p){});
            this.popupDiv.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1084,1440,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","popupDiv.form.Div00.form.divFormBox.form.staArtclTitle","text","dsArticle","artclTitle");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","popupDiv.form.Div00.form.divFormBox.form.staRgstNmValue","text","dsArticle","rgstNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","popupDiv.form.Div00.form.divFormBox.form.staRgstDtValue","text","dsArticle","rgstDt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","popupDiv.form.Div00.form.divFormBox.form.staShowValue","text","dsArticle","showYnNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","popupDiv.form.Div00.form.divFormBox.form.staInOutValue","text","dsArticle","inOutDivNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","popupDiv.form.Div00.form.divFormBox.form.staShowRangeValue","text","dsArticle","showDtRange");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","staBoardNm","text","dsUiStat","boardNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","popupDiv.form.Div00.form.divNav.form.staPrevTitle","text","dsArticle","prevArtclTitle");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","popupDiv.form.Div00.form.divNav.form.staNextTitle","text","dsArticle","nextArtclTitle");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","popupDiv.form.Div00.form.divFormBox.form.staViewCountValue","text","dsArticle","viewCount");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::fileUpload.xfdl");
        };
        
        // User Script
        this.addIncludeScript("CMS_2020P_01.xfdl","lib::common.xjs");
        this.registerScript("CMS_2020P_01.xfdl", function() {
        /**
        *  게시글 보기
        *  MenuPath      게시판 - 게시글 보기
        *  FileName      CMS_2020P_01.xfdl
        *  Creator          parksw
        *  CreateDate    2023.04.03
        *  Desction      게시판에 게시글을 등록한다.
        ************** 소스 수정 이력 ***********************************************
        *  date          Modifier    Description
        *******************************************************************************
        *  2023.04.06    parksw      최초 생성
        *  2023.04.18    parksw      폼 ID 변경
        *******************************************************************************/

        this.executeIncludeScript("lib::common.xjs"); /*include "lib::common.xjs"*/;

        /***********************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose)
         ***********************************************************************************************/

        this.CMS_2020P_01_oninit = function(obj,e)
        {
            form = this;

            var that = this;
            window.addEventListener("resize", this.onResizeHandler);

            this.sysId = this.parent.sysId;
            this.boardId = this.parent.boardId;
            this.boardNm = this.parent.boardNm;
            this.articleId = this.parent.articleId;

            if (this.sysId == null || this.sysId == "" || this.boardId == null || this.boardId == "" || this.articleId == null || this.articleId == "") {
                this.gfnAlert("잘못된 접근입니다.");
                this.fnClose();
                return;
            }

            this.dsArticle.setColumn(0, "sysId", this.sysId);
            this.dsArticle.setColumn(0, "boardId", this.boardId);
            this.dsArticle.setColumn(0, "artclId", this.articleId);

            this.dsUiStat.setColumn(0, "boardNm", this.boardNm);
        };

        /**
         * @description 화면 onload
         */
        this.CMS_2020P_01_onload = function(obj,e)
        {
            this.gfnFormOnLoad(this);
            this.fnUpdateItemVisibility(true, false, true, true);

            this.gfnTransaction("getBoardInfo", "cms/getBoardInfo.do", "", "dsBoard dsBoardRoles", "boardId=" + this.boardId + " sysId=" + this.sysId, "fnCallback");
        };

        this.CMS_2020P_01_onbeforeclose = function(obj,e)
        {
            window.removeEventListener("resize", this.onResizeHandler);
        };

        /************************************************************************************************
         * TRANSACTION 서비스 호출 처리
         ************************************************************************************************/

        this.fnSearch = function ()
        {
            var strSvcId    = "getArticle";
            var strSvcUrl   = "cms/getBoardArticle.do";
            var inData      = "dsArticle";
            var outData     = "dsArticle dsAttach dsComment";
            var strArg      = "withContent=false withNeighborLink=true type=view";
            var callbackFn  = "fnCallback";
            var isAsync     = true;

            this.popupDiv.form.Div00.form.divBtnGroup.form.btnModify.set_visible(false);
            this.popupDiv.form.Div00.form.divBtnGroup.form.btnDelete.set_visible(false);

            if (this.dsBoardRoles.findRowExpr("boardFuncId == 'REPLY'") >= 0) {
                strArg += " withComment=true"
            }

            this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callbackFn, isAsync);
        };

        this.fnDelete = function ()
        {
            var strSvcId    = "deleteArticle";
            var strSvcUrl   = "cms/deleteBoardArticle.do";
            var inData      = "dsArticle";
            var outData     = "";
            var strArg      = "";
            var callbackFn  = "fnCallback";
            var isAsync     = true;

            this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callbackFn, isAsync);
        };

        this.fnSaveComment = function (id, content, parentId) {
            var strSvcId    = "saveComment";
            var strSvcUrl   = "cms/saveBoardComment.do";
            var inData      = "dsCommentRegist";
            var outData     = "";
            var strArg      = "";
            var callbackFn  = "fnCallback";
            var isAsync     = true;

            if (Eco.isEmpty(content)) {
                this.gfnAlert("CMN_BBS_ERR_NO_CONT");
                return;
            }

            this.dsCommentRegist.setColumn(0, "sysId", this.dsArticle.getColumn(0, "sysId"));
            this.dsCommentRegist.setColumn(0, "boardId", this.dsArticle.getColumn(0, "boardId"));
            this.dsCommentRegist.setColumn(0, "artclId", this.dsArticle.getColumn(0, "artclId"));
            this.dsCommentRegist.setColumn(0, "rowStatus", Eco.isEmpty(id) ? "inserted" : "updated");
            this.dsCommentRegist.setColumn(0, "cmntId", Eco.isEmpty(id) ? (void 0) : id);
            this.dsCommentRegist.setColumn(0, "upCmntId", parentId);
            this.dsCommentRegist.setColumn(0, "artclCont", content);

            this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callbackFn, isAsync);
        }

        this.fnDeleteComment = function (id) {
            var strSvcId    = "deleteComment";
            var strSvcUrl   = "cms/deleteBoardComment.do";
            var inData      = "dsCommentRegist";
            var outData     = "";
            var strArg      = "";
            var callbackFn  = "fnCallback";
            var isAsync     = true;

            if (Eco.isEmpty(id)) {
                this.gfnAlert("CM_MSG_NO_ITEM");
                return;
            }

            this.dsCommentRegist.setColumn(0, "sysId", this.dsArticle.getColumn(0, "sysId"));
            this.dsCommentRegist.setColumn(0, "boardId", this.dsArticle.getColumn(0, "boardId"));
            this.dsCommentRegist.setColumn(0, "artclId", this.dsArticle.getColumn(0, "artclId"));
            this.dsCommentRegist.setColumn(0, "cmntId", id);

            this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callbackFn, isAsync);
        }

        this.fnRefreshComment = function ()
        {
            var strSvcId    = "getCommentList";
            var strSvcUrl   = "cms/getBoardCommentList.do";
            var inData      = "dsArticle";
            var outData     = "dsComment";
            var strArg      = "";
            var callbackFn  = "fnCallback";
            var isAsync     = true;

            this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callbackFn, isAsync);
        };

        /************************************************************************************************
         * CALLBACK 콜백 처리부분(Transaction, Popup)
         ************************************************************************************************/

        this.fnCallback = function (svcId, errorCode, errorMsg)
        {
            switch (svcId) {
                case "getBoardInfo":
                    if (this.dsBoardRoles.findRow("boardFuncId", "WRITE") < 0) {
                        this.gfnAlert();
                        this.gfnPopupClose(false);
                    }

                    var showYn = this.dsBoard.getColumn(0, "boardType") == "BBST02";
                    var inOut = this.dsBoard.getColumn(0, "boardType") == "BBST02";
                    var showRange = this.dsBoard.getColumn(0, "boardAttr") == "BBSA01";
                    var showAttach = this.dsBoard.getColumn(0, "fileAtchPosblYn") == "Y";
                    var cmntVisible = this.dsBoard.getColumn(0, "replyPosblYn") == "Y";

                    this.fnUpdateItemVisibility(showYn, inOut, showRange, false, cmntVisible);
                    this.fnSearch();
                    break;
                case "getArticle":
                    this.popupDiv.form.Div00.form.divViewWrap.form.wvEditor.set_url(nexacro.getEnvironment().services["svcurl"].url + this.dsArticle.getColumn(0, "artclCont"));
                    this.commentDetailVisible = false;
                    this.fnUpdateAttachState();
                    this.fnUpdateButtonVisibility();
                    this.gfnRowCount(this.dsComment, this.popupDiv.form.Div00.form.divComment.form.staGridRowCnt);
                    break;
                case "saveComment":
                    if (this.callbackMsg == "success") {
                        this.popupDiv.form.Div00.form.divComment.form.taComment.set_value("");
                        this.dsCommentRegist.clearData();
                        this.dsCommentRegist.addRow();
                        this.fnRefreshComment();
                    }
                    break;
                case "deleteComment":
                    if (this.callbackMsg == "success") {
                        this.dsCommentRegist.clearData();
                        this.dsCommentRegist.addRow();
                        this.fnRefreshComment();
                    }
                    break;
                case "getCommentList":
                    this.commentDetailVisible = false;
                    this.fnResize();
                    this.gfnRowCount(this.dsComment, this.popupDiv.form.Div00.form.divComment.form.staGridRowCnt);
                    break;
                case "deleteArticle":
                    if(this.callbackMsg == "success"){
                        this.gfnAlert("CM_MSG_DELETE_SUCCESS");  // 저장 되었습니다.
                        this.gfnPopupClose(true);
                    }
                    break;
            }
        };

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/

        this.popupDiv_div_btnGroup_btnClose_onclick = function(obj,e)
        {
            this.fnClose(false);
        };

        this.popupDiv_Div00_div_btnGroup_btnModify_onclick = function(obj,e)
        {
            this.fnModify();
        };

        this.popupDiv_Div00_divViewWrap_wvEditor_onloadcompleted = function(obj,e)
        {
            this.fnResize();
        };

        this.popupDiv_Div00_divBtnGroup_btnDelete_onclick = function(obj,e)
        {
            this.fnDelete();
        };

        this.popupDiv_Div00_divComment_lvComment_oncellclick = function(obj,e)
        {
            if (e.bandid == "detail" && e.cellid == "cellSave") {
                this.fnSaveComment(void 0, this.dsComment.getColumn(e.row, "replyCont"), this.dsComment.getColumn(e.row, "cmntId"));
            } else if (e.bandid == "body" && e.cellid == "cellDelete") {
                this.fnDeleteComment(this.dsComment.getColumn(e.row, "cmntId"));
            } else if (e.bandid == "body") {
                this.commentDetailVisible = true;
                obj.showDetailBand(e.row);
                this.fnResize();
            }
        };

        this.popupDiv_Div00_divComment_lvComment_onbandclick = function(obj,e)
        {
            if (e.bandid == "body") {
                this.commentDetailVisible = true;
                obj.showDetailBand(e.row);
                this.fnResize();
            }
        };

        this.popupDiv_Div00_divComment_btnWrite_onclick = function(obj,e)
        {
        	this.fnSaveComment(void 0, this.popupDiv.form.Div00.form.divComment.form.taComment.value);
        };

        this.popupDiv_Div00_divNav_staPrevTitle_onclick = function(obj,e)
        {
        	this.fnGoPrevious();
        };

        this.popupDiv_Div00_divNav_staNextTitle_onclick = function(obj,e)
        {
        	this.fnGoNext();
        };

        /************************************************************************************************
        * 사용자 FUNCTION 영역
        ************************************************************************************************/

        this.fnClose = function (result)
        {
            this.gfnPopupClose(result || false);
        };

        this.onResizeHandler = (function ()
        {
            this.fnResize();
        }).bind(this);

        this.fnResize = function ()
        {
            var viewboxWidth = window.innerWidth;
            var formWidth = 1084;
            var viewboxHeight = window.innerHeight;
            var contentHeight = this.fnMeasure();
            var height = Math.min(viewboxHeight - 30, 1080);

            if (contentHeight > height) {
                formWidth += 16;
            }
            height = Math.min(height, contentHeight);

            this.popupDiv.form.Div00.set_height(contentHeight - 70);
            this.popupDiv.set_height(height - 50);
            form.set_height(height);
            this.parent.resize(formWidth, height);
            this.parent.move((viewboxWidth - formWidth) / 2, (viewboxHeight - height) / 2);
            this.resetScroll();
            this.popupDiv.form.resetScroll();
        };

        this.fnModify = function ()
        {
            var args = {
                sysId: this.dsArticle.getColumn(0, "sysId"),
                boardId: this.dsArticle.getColumn(0, "boardId"),
                articleId: this.dsArticle.getColumn(0, "artclId")
            };
            console.log(this.parent);
            this.opener.gfnOpenPopup("boardRegistPopup", "sys::cms/CMS_2020P_02.xfdl", args, "fnPopupCallback", "");
            this.fnClose(false);
        };

        this.fnUpdateAttachState = function ()
        {
            var showAttach = (this.dsBoard.getColumn(0, "fileAtchPosblYn") == "Y") && (this.dsAttach.rowcount);
            this.fnUpdateItemVisibility(this.showYnVisible, this.inOutDivVisible, this.periodVisible, showAttach, this.commentVisible);
        };

        this.fnUpdateItemVisibility = function (showYnVisible, inOutDivVisible, periodVisible, attachFileVisible, commentVisible)
        {
            var titleHeight = this.popupDiv.form.Div00.form.divFormBox.form.staArtclTitle.getOffsetHeight();
            var formHeight = 105 + titleHeight;

            this.popupDiv.form.Div00.form.divFormBox.form.staShowYn.set_visible(showYnVisible);
            this.popupDiv.form.Div00.form.divFormBox.form.staShowValue.set_visible(showYnVisible);
            this.popupDiv.form.Div00.form.divFormBox.form.staVd13.set_visible(showYnVisible && inOutDivVisible);
            this.popupDiv.form.Div00.form.divFormBox.form.staVd14.set_visible(showYnVisible && inOutDivVisible);
            this.popupDiv.form.Div00.form.divFormBox.form.staInOutDiv.set_left(showYnVisible ? "staShowYn:176" : "staVd0:0");
            this.popupDiv.form.Div00.form.divFormBox.form.staInOutValue.set_left("staInOutDiv:13");

            this.popupDiv.form.Div00.form.divFormBox.form.staInOutDiv.set_visible(inOutDivVisible);
            this.popupDiv.form.Div00.form.divFormBox.form.staInOutValue.set_visible(inOutDivVisible);

            this.popupDiv.form.Div00.form.divFormBox.form.staShowRange.set_visible(periodVisible);
            this.popupDiv.form.Div00.form.divFormBox.form.staShowRangeValue.set_visible(periodVisible);
            this.popupDiv.form.Div00.form.divFormBox.form.staShowRange.set_left(inOutDivVisible ? "staInOutDiv:176" : (showYnVisible ? "staShowYn:176" : "staVd0:0"));
            this.popupDiv.form.Div00.form.divFormBox.form.staShowRangeValue.set_left("staShowRange:13");
            this.popupDiv.form.Div00.form.divFormBox.form.staHd2.set_visible(showYnVisible || inOutDivVisible || periodVisible);

            if (!showYnVisible && !inOutDivVisible && !periodVisible) {
                formHeight -= 35;
            }

            this.popupDiv.form.Div00.form.divFormBox.set_height(formHeight);
            this.popupDiv.form.Div00.form.divAttachBox.set_visible(attachFileVisible);


            this.popupDiv.form.Div00.form.divComment.set_visible(commentVisible);
            this.popupDiv.form.Div00.form.divBtnGroup2.set_visible(commentVisible);

            this.showYnVisible = showYnVisible;
            this.inOutDivVisible = inOutDivVisible;
            this.periodVisible = periodVisible;
            this.attachFileVisible = attachFileVisible;
            this.commentVisible = commentVisible;

            this.popupDiv.form.Div00.form.divFormBox.form.resetScroll();
        };

        this.fnUpdateButtonVisibility = function ()
        {
            var sessionUserId = nexacro.getApplication().gdsUserInfo.getColumn(0, "userId");
            var writerId = this.dsArticle.getColumn(0, "rgstId");
            var editable = sessionUserId == writerId;

            this.popupDiv.form.Div00.form.divBtnGroup.form.btnModify.set_visible(editable);
            this.popupDiv.form.Div00.form.divBtnGroup.form.btnDelete.set_visible(editable);
            this.popupDiv.form.Div00.form.divBtnGroup2.form.btnModify.set_visible(editable);
            this.popupDiv.form.Div00.form.divBtnGroup2.form.btnDelete.set_visible(editable);
        };

        this.fnMeasure = function ()
        {
            var height = 70;
            height += this.popupDiv.form.Div00.form.divFormBox.getOffsetHeight() + 2;

            height += 10;
            height += this.fnMeasureAndAdjustArticle();

            if (this.popupDiv.form.Div00.form.divAttachBox.visible) {
                height += 10;
                height += this.popupDiv.form.Div00.form.divAttachBox.getOffsetHeight() + 2;
            }

            height += 20;
            height += this.popupDiv.form.Div00.form.divNav.getOffsetHeight();
            height += this.popupDiv.form.Div00.form.divBtnGroup.getOffsetHeight();

            if (this.commentVisible) {
                height += 20;
                height += this.fnMeasureAndAdjustComment();
                height += this.popupDiv.form.Div00.form.divBtnGroup2.getOffsetHeight();
            }

            return height;
        };

        this.fnMeasureAndAdjustArticle = function ()
        {
            this.popupDiv.form.Div00.form.divViewWrap.set_height(1);

            var contentWidth = Number(this.popupDiv.form.Div00.form.divViewWrap.form.wvEditor.callScript("document.documentElement.scrollWidth"));
            var contentHeight = Number(this.popupDiv.form.Div00.form.divViewWrap.form.wvEditor.callScript("document.documentElement.scrollHeight"));
            this.popupDiv.form.Div00.form.divViewWrap.set_height(contentHeight + 2);

            var clientWidth = Number(this.popupDiv.form.Div00.form.divViewWrap.form.wvEditor.callScript("document.documentElement.clientWidth"));
            var offsetWidth = this.popupDiv.form.Div00.form.divViewWrap.form.wvEditor.getOffsetWidth();
            var scrollBarSize = (contentWidth > offsetWidth) ? Math.abs(offsetWidth - clientWidth) : -1;

            if (scrollBarSize > 0) {
                this.popupDiv.form.Div00.form.divViewWrap.set_height(contentHeight + scrollBarSize + 2);
            }

            this.popupDiv.form.Div00.form.divViewWrap.form.wvEditor.set_width("100%");
            this.popupDiv.form.Div00.form.divViewWrap.form.resetScroll();
            return this.popupDiv.form.Div00.form.divViewWrap.getOffsetHeight() + 2;
        };

        this.fnMeasureAndAdjustComment = function ()
        {
            if (!this.commentVisible) {
                return 0;
            }

            var totalHeight = 45;
            var commentListHeight = this.dsComment.rowcount == 0 ? 0 : (1 + 81 * this.dsComment.rowcount);

            if (this.commentDetailVisible) {
                commentListHeight += 81;
            }
            totalHeight += commentListHeight

            totalHeight += this.popupDiv.form.Div00.form.divComment.form.taComment.getOffsetHeight();
            totalHeight += (this.dsComment.rowcount > 0) ? 10 : 0;

            totalHeight += 15;
            this.popupDiv.form.Div00.form.divComment.set_height(totalHeight);

            this.popupDiv.form.Div00.form.divComment.form.lvComment.set_height(commentListHeight);
            if (this.dsComment.rowcount == 0) {
                this.popupDiv.form.Div00.form.divComment.form.taComment.set_top("sta001:0");
                this.popupDiv.form.Div00.form.divComment.form.btnWrite.set_top("sta001:0");
            } else {
                this.popupDiv.form.Div00.form.divComment.form.taComment.set_top("lvComment:10");
                this.popupDiv.form.Div00.form.divComment.form.btnWrite.set_top("lvComment:10");
            }

            this.popupDiv.form.Div00.form.divComment.set_height(totalHeight);
            this.popupDiv.form.Div00.form.divComment.form.resetScroll();

            return totalHeight;
        };

        this.fnGoPrevious = function ()
        {
            var targetId = this.dsArticle.getColumn(0, "prevArtclId");
            if (targetId != null && targetId != "") {
                this.dsArticle.setColumn(0, "artclId", targetId);
                this.fnSearch();
            }
        };

        this.fnGoNext = function ()
        {
            var targetId = this.dsArticle.getColumn(0, "nextArtclId");
            if (targetId != null && targetId != "") {
                this.dsArticle.setColumn(0, "artclId", targetId);
                this.fnSearch();
            }
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.CMS_2020P_01_onload,this);
            this.addEventHandler("oninit",this.CMS_2020P_01_oninit,this);
            this.addEventHandler("onbeforeclose",this.CMS_2020P_01_onbeforeclose,this);
            this.popupDiv.form.Div00.form.divFormBox.form.Static04_00_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.popupDiv.form.Div00.form.divFormBox.form.staArtclTitle.addEventHandler("onclick",this.Static09_onclick,this);
            this.popupDiv.form.Div00.form.divFormBox.form.staHd0.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.popupDiv.form.Div00.form.divFormBox.form.staVd0.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.popupDiv.form.Div00.form.divFormBox.form.sta001.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.popupDiv.form.Div00.form.divFormBox.form.staShowYn.addEventHandler("onclick",this.div_Search02_00_in_YY_onclick,this);
            this.popupDiv.form.Div00.form.divFormBox.form.staHd2.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.popupDiv.form.Div00.form.divFormBox.form.Static07_00_01_00.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.popupDiv.form.Div00.form.divFormBox.form.Static07_01_02_00.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.popupDiv.form.Div00.form.divFormBox.form.Static04_00_00_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.popupDiv.form.Div00.form.divFormBox.form.staShowRange.addEventHandler("onclick",this.div_Search02_00_in_YY_onclick,this);
            this.popupDiv.form.Div00.form.divFormBox.form.staVd13.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.popupDiv.form.Div00.form.divFormBox.form.Static07_01_02_00_00.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.popupDiv.form.Div00.form.divFormBox.form.Static07_01_02_00_00_00.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.popupDiv.form.Div00.form.divFormBox.form.staVd14.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.popupDiv.form.Div00.form.divFormBox.form.Static07_01_02_00_00_01.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.popupDiv.form.Div00.form.divFormBox.form.Static07_01_02_00_00_00_00.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.popupDiv.form.Div00.form.divFormBox.form.Static07_01_02_00_00_01_00.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.popupDiv.form.Div00.form.divFormBox.form.Static07_01_02_00_00_00_00_00.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.popupDiv.form.Div00.form.divViewWrap.form.wvEditor.addEventHandler("onloadcompleted",this.popupDiv_Div00_divViewWrap_wvEditor_onloadcompleted,this);
            this.popupDiv.form.Div00.form.divNav.form.Static07_01_01_00_00.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.popupDiv.form.Div00.form.divNav.form.Static07_01_01_00.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.popupDiv.form.Div00.form.divNav.form.Static07_01_01_00_01.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.popupDiv.form.Div00.form.divNav.form.Static07_00_01_00.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.popupDiv.form.Div00.form.divNav.form.Static07_00_00_00.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.popupDiv.form.Div00.form.divNav.form.Static07_01_02_00.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.popupDiv.form.Div00.form.divNav.form.staPrevTitle.addEventHandler("onclick",this.popupDiv_Div00_divNav_staPrevTitle_onclick,this);
            this.popupDiv.form.Div00.form.divNav.form.staNextTitle.addEventHandler("onclick",this.popupDiv_Div00_divNav_staNextTitle_onclick,this);
            this.popupDiv.form.Div00.form.divBtnGroup.form.btnModify.addEventHandler("onclick",this.popupDiv_Div00_div_btnGroup_btnModify_onclick,this);
            this.popupDiv.form.Div00.form.divBtnGroup.form.btnDelete.addEventHandler("onclick",this.popupDiv_Div00_divBtnGroup_btnDelete_onclick,this);
            this.popupDiv.form.Div00.form.divBtnGroup.form.btnClose.addEventHandler("onclick",this.popupDiv_div_btnGroup_btnClose_onclick,this);
            this.popupDiv.form.Div00.form.divComment.form.sta001.addEventHandler("onclick",this.Static09_onclick,this);
            this.popupDiv.form.Div00.form.divComment.form.Static04_00_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.popupDiv.form.Div00.form.divComment.form.lvComment.addEventHandler("oncellclick",this.popupDiv_Div00_divComment_lvComment_oncellclick,this);
            this.popupDiv.form.Div00.form.divComment.form.lvComment.addEventHandler("onbandclick",this.popupDiv_Div00_divComment_lvComment_onbandclick,this);
            this.popupDiv.form.Div00.form.divComment.form.btnWrite.addEventHandler("onclick",this.popupDiv_Div00_divComment_btnWrite_onclick,this);
            this.popupDiv.form.Div00.form.divComment.form.Static04_00_00_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.popupDiv.form.Div00.form.divBtnGroup2.form.btnModify.addEventHandler("onclick",this.popupDiv_Div00_div_btnGroup_btnModify_onclick,this);
            this.popupDiv.form.Div00.form.divBtnGroup2.form.btnDelete.addEventHandler("onclick",this.popupDiv_Div00_divBtnGroup_btnDelete_onclick,this);
            this.popupDiv.form.Div00.form.divBtnGroup2.form.btnClose.addEventHandler("onclick",this.popupDiv_div_btnGroup_btnClose_onclick,this);
        };
        this.loadIncludeScript("CMS_2020P_01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
