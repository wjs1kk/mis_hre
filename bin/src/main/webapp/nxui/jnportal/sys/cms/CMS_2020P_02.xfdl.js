(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CMS_2020P_02");
            this.set_titletext("게시글 수정");
            if (Form == this.constructor)
            {
                this._setFormPosition(1084,880);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsUiStat", this);
            obj._setContents("<ColumnInfo><Column id=\"showYnVisible\" type=\"STRING\" size=\"256\"/><Column id=\"inOutDivVisible\" type=\"STRING\" size=\"256\"/><Column id=\"durationVisible\" type=\"STRING\" size=\"256\"/><Column id=\"boardNm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"showYnVisible\">false</Col><Col id=\"inOutDivVisible\">true</Col><Col id=\"durationVisible\">true</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsArticle", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"sysId\" type=\"STRING\" size=\"20\"/><Column id=\"boardId\" type=\"STRING\" size=\"20\"/><Column id=\"artclId\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"artclTitle\" type=\"STRING\" size=\"200\"/><Column id=\"artclCont\" type=\"STRING\" size=\"2147483647\"/><Column id=\"showYn\" type=\"STRING\" size=\"1\"/><Column id=\"showStartDt\" type=\"DATE\" size=\"256\"/><Column id=\"showEndDt\" type=\"DATE\" size=\"256\"/><Column id=\"atchFileId\" type=\"STRING\" size=\"40\"/><Column id=\"inOutDiv\" type=\"STRING\" size=\"20\"/><Column id=\"upArtclId\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"viewCount\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"rgstId\" type=\"STRING\" size=\"256\"/><Column id=\"rgstNm\" type=\"STRING\" size=\"256\"/><Column id=\"rgstDt\" type=\"DATETIME\" size=\"256\"/><Column id=\"rowStatus\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"showYn\">Y</Col><Col id=\"inOutDiv\">IN</Col></Row></Rows>");
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
            
            // UI Components Initialize
            obj = new Div("popupDiv","0","50",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_formscrollbartype("auto");
            obj.set_formscrolltype("vertical");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","0","50","30","586",null,null,null,null,null,null,this.popupDiv.form);
            obj.set_taborder("0");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.popupDiv.addChild(obj.name, obj);

            obj = new Static("Static10_00",null,"50","30","586","0",null,null,null,null,null,this.popupDiv.form);
            obj.set_taborder("1");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.popupDiv.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_01","30","0","103","20",null,null,null,null,null,null,this.popupDiv.form);
            obj.set_taborder("2");
            obj.set_text("h 20");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.popupDiv.addChild(obj.name, obj);

            obj = new Div("Div00","30","20",null,null,"30","0",null,null,null,null,this.popupDiv.form);
            obj.set_taborder("3");
            obj.set_text("Div00");
            this.popupDiv.addChild(obj.name, obj);

            obj = new Div("divFormBox","0","0","100%","167",null,null,null,null,null,null,this.popupDiv.form.Div00.form);
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

            obj = new Static("Static07_01_01_00","21","80",null,"1","20",null,null,null,null,null,this.popupDiv.form.Div00.form.divFormBox.form);
            obj.set_taborder("2");
            obj.set_background("#dddddd");
            obj.set_text("");
            this.popupDiv.form.Div00.form.divFormBox.addChild(obj.name, obj);

            obj = new Static("Static07_01_01_00_00","21","45","981","1",null,null,null,null,null,null,this.popupDiv.form.Div00.form.divFormBox.form);
            obj.set_taborder("3");
            obj.set_background("#dddddd");
            obj.set_text("");
            this.popupDiv.form.Div00.form.divFormBox.addChild(obj.name, obj);

            obj = new Static("staVd0","20","45","1",null,null,"14",null,null,null,null,this.popupDiv.form.Div00.form.divFormBox.form);
            obj.set_taborder("6");
            obj.set_background("#00388e");
            obj.set_text("");
            this.popupDiv.form.Div00.form.divFormBox.addChild(obj.name, obj);

            obj = new Static("staShowYn","staVd0:0","Static07_01_01_00:0","150","34",null,null,null,null,null,null,this.popupDiv.form.Div00.form.divFormBox.form);
            obj.set_taborder("9");
            obj.set_text("공개 여부");
            obj.set_cssclass("sta_WF_condition02");
            this.popupDiv.form.Div00.form.divFormBox.addChild(obj.name, obj);

            obj = new Static("staHd2","21","staShowYn:0",null,"1","20",null,null,null,null,null,this.popupDiv.form.Div00.form.divFormBox.form);
            obj.set_taborder("4");
            obj.set_background("#dddddd");
            obj.set_text("");
            this.popupDiv.form.Div00.form.divFormBox.addChild(obj.name, obj);

            obj = new Static("Static07_00_01_00",null,"45","1",null,"20","15",null,null,null,null,this.popupDiv.form.Div00.form.divFormBox.form);
            obj.set_taborder("5");
            obj.set_background("#dddddd");
            this.popupDiv.form.Div00.form.divFormBox.addChild(obj.name, obj);

            obj = new Static("staBoardNm","19","11",null,"27","20",null,null,null,null,null,this.popupDiv.form.Div00.form.divFormBox.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_subTitle01");
            this.popupDiv.form.Div00.form.divFormBox.addChild(obj.name, obj);

            obj = new Static("Static07_01_02_00","171","45","1",null,null,"15",null,null,null,null,this.popupDiv.form.Div00.form.divFormBox.form);
            obj.set_taborder("7");
            obj.set_background("#dddddd");
            this.popupDiv.form.Div00.form.divFormBox.addChild(obj.name, obj);

            obj = new Static("staInOutDiv","staShowYn:226.67%","Static07_01_01_00:0","150","34",null,null,null,null,null,null,this.popupDiv.form.Div00.form.divFormBox.form);
            obj.set_taborder("10");
            obj.set_text("대내외 구분");
            obj.set_cssclass("sta_WF_condition02");
            this.popupDiv.form.Div00.form.divFormBox.addChild(obj.name, obj);

            obj = new Static("staArtclTitle","21","46","150","34",null,null,null,null,null,null,this.popupDiv.form.Div00.form.divFormBox.form);
            obj.set_taborder("11");
            obj.set_text("제목");
            obj.set_cssclass("sta_WF_condition02");
            this.popupDiv.form.Div00.form.divFormBox.addChild(obj.name, obj);

            obj = new Static("Static10_00","172","46","12","34",null,null,null,null,null,null,this.popupDiv.form.Div00.form.divFormBox.form);
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

            obj = new Static("Static10_00_00_00","172","116","12","34",null,null,null,null,null,null,this.popupDiv.form.Div00.form.divFormBox.form);
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

            obj = new Static("Static10_00_01","172","81","12","34",null,null,null,null,null,null,this.popupDiv.form.Div00.form.divFormBox.form);
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

            obj = new Static("staShowRange","21","staHd2:0","150","34",null,null,null,null,null,null,this.popupDiv.form.Div00.form.divFormBox.form);
            obj.set_taborder("17");
            obj.set_text("게시 기간");
            obj.set_cssclass("sta_WF_condition02");
            this.popupDiv.form.Div00.form.divFormBox.addChild(obj.name, obj);

            obj = new Static("staHd3","21","staShowRange:0",null,"1","20",null,null,null,null,null,this.popupDiv.form.Div00.form.divFormBox.form);
            obj.set_taborder("16");
            obj.set_background("#dddddd");
            obj.set_text("");
            this.popupDiv.form.Div00.form.divFormBox.addChild(obj.name, obj);

            obj = new Static("staVd13",null,"81","1","35","staInOutDiv:0",null,null,null,null,null,this.popupDiv.form.Div00.form.divFormBox.form);
            obj.set_taborder("18");
            obj.set_background("#dddddd");
            this.popupDiv.form.Div00.form.divFormBox.addChild(obj.name, obj);

            obj = new Static("staVd14","staInOutDiv:0","81","1","34",null,null,null,null,null,null,this.popupDiv.form.Div00.form.divFormBox.form);
            obj.set_taborder("19");
            obj.set_background("#dddddd");
            this.popupDiv.form.Div00.form.divFormBox.addChild(obj.name, obj);

            obj = new Edit("edtArtclTitle","staArtclTitle:13","50","78.77%","26",null,null,null,null,null,null,this.popupDiv.form.Div00.form.divFormBox.form);
            obj.set_taborder("20");
            obj.set_cssclass("essential");
            this.popupDiv.form.Div00.form.divFormBox.addChild(obj.name, obj);

            obj = new Static("Static10_00_00","989","46","12","34",null,null,null,null,null,null,this.popupDiv.form.Div00.form.divFormBox.form);
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

            obj = new Combo("cbShowYn","staShowYn:13","Static07_01_01_00:4","17.5%","26",null,null,null,null,null,null,this.popupDiv.form.Div00.form.divFormBox.form);
            obj.set_taborder("22");
            obj.set_displaynulltext("선택");
            obj.set_codecolumn("value");
            obj.set_datacolumn("text");
            obj.set_innerdataset("dsShowYnCbo");
            this.popupDiv.form.Div00.form.divFormBox.addChild(obj.name, obj);

            obj = new Static("Static10_00_01_00",null,"81","12","34","staVd13:0",null,null,null,null,null,this.popupDiv.form.Div00.form.divFormBox.form);
            obj.set_taborder("23");
            obj.set_text("w12");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.popupDiv.form.Div00.form.divFormBox.addChild(obj.name, obj);

            obj = new Static("Static10_00_01_00_00","staVd14:0","81","12","34",null,null,null,null,null,null,this.popupDiv.form.Div00.form.divFormBox.form);
            obj.set_taborder("24");
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
            obj.set_taborder("25");
            obj.set_text("w12");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.popupDiv.form.Div00.form.divFormBox.addChild(obj.name, obj);

            obj = new Combo("cbInOutDiv","staInOutDiv:13","Static07_01_01_00:4","17.38%","26",null,null,null,null,null,null,this.popupDiv.form.Div00.form.divFormBox.form);
            obj.set_taborder("26");
            obj.set_displaynulltext("선택");
            obj.set_codecolumn("value");
            obj.set_datacolumn("text");
            obj.set_innerdataset("dsInOutCbo");
            this.popupDiv.form.Div00.form.divFormBox.addChild(obj.name, obj);

            obj = new Calendar("calShowStartDt","staShowRange:13","staHd2:4","153","26",null,null,null,null,null,null,this.popupDiv.form.Div00.form.divFormBox.form);
            obj.set_taborder("27");
            obj.set_displaynulltext("____-__-__");
            obj.set_cssclass("");
            obj.set_dateformat("yyyy-MM-dd");
            this.popupDiv.form.Div00.form.divFormBox.addChild(obj.name, obj);

            obj = new Static("staTilde","calShowStartDt:0","staHd2:5","25","24",null,null,null,null,null,null,this.popupDiv.form.Div00.form.divFormBox.form);
            obj.set_taborder("28");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.popupDiv.form.Div00.form.divFormBox.addChild(obj.name, obj);

            obj = new Calendar("calShowEndDt","staTilde:0","staHd2:4","153","26",null,null,null,null,null,null,this.popupDiv.form.Div00.form.divFormBox.form);
            obj.set_taborder("29");
            obj.set_displaynulltext("____-__-__");
            obj.set_cssclass("");
            obj.set_dateformat("yyyy-MM-dd");
            this.popupDiv.form.Div00.form.divFormBox.addChild(obj.name, obj);

            obj = new Static("staTitleReq","60","45","25","34",null,null,null,null,null,null,this.popupDiv.form.Div00.form.divFormBox.form);
            obj.set_taborder("30");
            obj.set_text("*");
            obj.set_cssclass("essential");
            obj.set_tooltiptext("필수입력");
            this.popupDiv.form.Div00.form.divFormBox.addChild(obj.name, obj);

            obj = new Static("staShowYnReq","88","81","25","34",null,null,null,null,null,null,this.popupDiv.form.Div00.form.divFormBox.form);
            obj.set_taborder("31");
            obj.set_text("*");
            obj.set_cssclass("essential");
            obj.set_tooltiptext("필수입력");
            this.popupDiv.form.Div00.form.divFormBox.addChild(obj.name, obj);

            obj = new Static("staInOutReq","staInOutDiv:-71","81","25","34",null,null,null,null,null,null,this.popupDiv.form.Div00.form.divFormBox.form);
            obj.set_taborder("32");
            obj.set_text("*");
            obj.set_cssclass("essential");
            obj.set_tooltiptext("필수입력");
            this.popupDiv.form.Div00.form.divFormBox.addChild(obj.name, obj);

            obj = new WebView("wvEditor","0","0","100%","1",null,null,null,null,"1",null,this.popupDiv.form.Div00.form);
            obj.set_taborder("1");
            obj.set_flexgrow("1");
            obj.set_flexshrink("0");
            obj.set_useurlhistory("false");
            this.popupDiv.form.Div00.addChild(obj.name, obj);

            obj = new Div("divAttachBox","0","0","100%","200",null,null,null,null,null,null,this.popupDiv.form.Div00.form);
            obj.set_taborder("2");
            obj.set_cssclass("div_WF_popup");
            obj.set_text("");
            obj.set_url("cmm::fileUpload.xfdl");
            this.popupDiv.form.Div00.addChild(obj.name, obj);

            obj = new Div("div_btnGroup","30","979","100%","66",null,null,null,null,null,null,this.popupDiv.form.Div00.form);
            obj.set_taborder("3");
            this.popupDiv.form.Div00.addChild(obj.name, obj);

            obj = new Button("btnSave","0","0","65","28",null,null,null,null,null,null,this.popupDiv.form.Div00.form.div_btnGroup.form);
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_icoSave");
            obj.set_taborder("1");
            this.popupDiv.form.Div00.form.div_btnGroup.addChild(obj.name, obj);

            obj = new Button("btnClose","0","0","65","28",null,null,null,null,null,null,this.popupDiv.form.Div00.form.div_btnGroup.form);
            obj.set_text("닫기");
            obj.set_cssclass("");
            obj.set_visible("true");
            obj.set_taborder("0");
            this.popupDiv.form.Div00.form.div_btnGroup.addChild(obj.name, obj);

            obj = new Static("Static00","0","0",null,"50","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("게시글 등록");
            obj.set_cssclass("sta_WF_popupTitle");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.popupDiv.form.Div00.form.divFormBox.form
            obj = new Layout("default","",1032,72,this.popupDiv.form.Div00.form.divFormBox.form,function(p){});
            this.popupDiv.form.Div00.form.divFormBox.form.addLayout(obj.name, obj);

            //-- Default Layout : this.popupDiv.form.Div00.form.divAttachBox
            obj = new Layout("default","",0,0,this.popupDiv.form.Div00.form.divAttachBox.form,function(p){});
            this.popupDiv.form.Div00.form.divAttachBox.form.addLayout(obj.name, obj);

            //-- Default Layout : this.popupDiv.form.Div00.form.div_btnGroup.form
            obj = new Layout("default","",0,0,this.popupDiv.form.Div00.form.div_btnGroup.form,function(p){});
            obj.set_type("horizontal");
            obj.set_horizontalgap("3");
            obj.set_flexmainaxisalign("center");
            obj.set_spacing("15px 0 23px 0");
            this.popupDiv.form.Div00.form.div_btnGroup.form.addLayout(obj.name, obj);

            //-- Default Layout : this.popupDiv.form.Div00.form
            obj = new Layout("default","",0,0,this.popupDiv.form.Div00.form,function(p){});
            obj.set_type("vertical");
            obj.set_verticalgap("10");
            this.popupDiv.form.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.popupDiv.form
            obj = new Layout("default","",0,0,this.popupDiv.form,function(p){});
            this.popupDiv.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1084,880,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","popupDiv.form.Div00.form.divFormBox.form.edtArtclTitle","value","dsArticle","artclTitle");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","popupDiv.form.Div00.form.divFormBox.form.cbShowYn","value","dsArticle","showYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","popupDiv.form.Div00.form.divFormBox.form.cbInOutDiv","value","dsArticle","inOutDiv");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","popupDiv.form.Div00.form.divFormBox.form.calShowStartDt","value","dsArticle","showStartDt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","popupDiv.form.Div00.form.divFormBox.form.calShowEndDt","value","dsArticle","showEndDt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","popupDiv.form.Div00.form.divFormBox.form.staBoardNm","text","dsUiStat","boardNm");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::fileUpload.xfdl");
        };
        
        // User Script
        this.addIncludeScript("CMS_2020P_02.xfdl","lib::common.xjs");
        this.registerScript("CMS_2020P_02.xfdl", function() {
        /**
        *  게시글 등록/수정
        *  MenuPath      게시판 - 게시글 등록/수정
        *  FileName      CMS_2020P_01.xfdl
        *  Creator 	     parksw
        *  CreateDate    2023.04.03
        *  Desction      게시판에 게시글을 등록한다.
        ************** 소스 수정 이력 ***********************************************
        *  date          Modifier    Description
        *******************************************************************************
        *  2023.04.06    parksw 	 최초 생성
        *  2023.04.18    parksw 	 폼 ID 변경
        *******************************************************************************/

        this.executeIncludeScript("lib::common.xjs"); /*include "lib::common.xjs"*/;

        /***********************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose)
         ***********************************************************************************************/

        this.CMS_2020P_02_oninit = function(obj,e)
        {
            form = this;
            this.editorLoaded = false;
            this.articleLoaded = false;

            this.fnResize();
            var webview = this.popupDiv.form.Div00.form.wvEditor;
            webview.set_url(nexacro.getEnvironment().services["svcurl"].url + "cms/tinymceEditor.do");

            var that = this;
            window.addEventListener("resize", this.onResizeHandler);

            this.sysId = this.parent.sysId;
            this.boardId = this.parent.boardId;
            this.boardNm = this.parent.boardNm;

            if (this.sysId == null || this.sysId == "" || this.boardId == null || this.boardId == "") {
                this.gfnAlert("잘못된 접근입니다.");
                this.fnClose();
                return;
            }

            this.dsArticle.setColumn(0, "sysId", this.sysId);
            this.dsArticle.setColumn(0, "boardId", this.boardId);

            this.mode = "inserted";
            this.dsUiStat.setColumn(0, "boardNm", this.boardNm);

            if (this.parent.articleId != null) {
                this.mode = "updated";
                this.articleId = this.parent.articleId;
                this.dsArticle.setColumn(0, "artclId", this.articleId);
            }

            this.gfnLoadCombo("loadCombo", "dsShowYnCbo=PMS:CMS:BOARD_SHOW_YN dsInOutCbo=PMS:CMS:BOARD_IN_OUT_DIV", "fnComboCallback");
        	this.gfnTransaction("getBoardInfo", "cms/getBoardInfo.do", "", "dsBoard dsBoardRoles", "boardId=" + this.boardId + " sysId=" + this.sysId, "fnCallback");
        };

        /**
         * @description 화면 onload
         */
        this.CMS_2020P_02_onload = function(obj,e)
        {
        	this.gfnFormOnLoad(this);
        };

        this.CMS_2020P_02_onbeforeclose = function(obj,e)
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
        	var outData     = "dsArticle dsAttach";
        	var strArg      = "withContent=true withNeighborLink=false withComment=false type=edit";
        	var callbackFn  = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callbackFn, isAsync);
        };

        this.fnSave = function ()
        {
        	var strSvcId    = "saveArticle";
        	var strSvcUrl   = "cms/saveBoardArticle.do";
        	var inData      = "dsArticle dsAttach";
        	var outData     = "";
        	var strArg      = "";
        	var callbackFn  = "fnCallback";
        	var isAsync   	= true;

            this.dsArticle.setColumn(0, "rowStatus", this.mode);

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callbackFn, isAsync);
        };

        /************************************************************************************************
         * CALLBACK 콜백 처리부분(Transaction, Popup)
         ************************************************************************************************/

        this.fnComboCallback = function (svcId, errorCode, errorMsg)
        {
            if (this.mode == "updated") {
                this.fnSearch();
            } else {
                this.articleLoaded = true;
                this.fnInit();
            }
        };

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

                    this.fnUpdateUiState(showYn, inOut, showRange, showAttach);
                    break;
                case "getArticle":
                    this.articleLoaded = true;
                    var data = JSON.stringify(this.dsArticle.getColumn(0, "artclCont"));
                    this.fnInit({
                        content: data.substring(1, data.length - 1)
                    });
                    break;
                case "saveArticle":
                    if(this.callbackMsg == "success"){
                        this.gfnAlert("CM_MSG_SAVE_SUCCESS");  // 저장 되었습니다.
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

        this.popupDiv_Div00_div_btnGroup_btnSave_onclick = function(obj,e)
        {
            this.fnBeforeSave();
        };

        this.popupDiv_Div00_wvEditor_onloadcompleted = function(obj,e)
        {
        	this.editorLoaded = true;
            var content = this.dsArticle.getColumn(0, "artclCont");
            var data = JSON.stringify(Eco.isEmpty(content) ? "" : content);
            this.fnInit({
                content: data.substring(1, data.length - 1)
            });
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
            var viewboxHeight = window.innerHeight;
            var height = Math.min(viewboxHeight - 30, 1080);
            form.set_height(height);
            this.parent.resize(form.parent.width, height);
            this.parent.move((viewboxWidth - form.parent.width) / 2, (viewboxHeight - height) / 2);
        };

        this.fnUpdateUiState = function (showYnVisible, inOutDivVisible, periodVisible, attachFileVisible)
        {
            var formHeight = 167;

            this.popupDiv.form.Div00.form.divFormBox.form.staShowYn.set_visible(showYnVisible);
            this.popupDiv.form.Div00.form.divFormBox.form.cbShowYn.set_visible(showYnVisible);
            this.popupDiv.form.Div00.form.divFormBox.form.staShowYnReq.set_visible(showYnVisible);
            this.popupDiv.form.Div00.form.divFormBox.form.staVd13.set_visible(showYnVisible && inOutDivVisible);
            this.popupDiv.form.Div00.form.divFormBox.form.staVd14.set_visible(showYnVisible && inOutDivVisible);
            this.popupDiv.form.Div00.form.divFormBox.form.staInOutDiv.set_left(showYnVisible ? "staShowYn:209.33%" : "staVd0:0");
            this.popupDiv.form.Div00.form.divFormBox.form.staInOutReq.set_right("staInOutDiv:-71");
            this.popupDiv.form.Div00.form.divFormBox.form.cbInOutDiv.set_left("staInOutDiv:13");

            this.popupDiv.form.Div00.form.divFormBox.form.staInOutDiv.set_visible(inOutDivVisible);
            this.popupDiv.form.Div00.form.divFormBox.form.cbInOutDiv.set_visible(inOutDivVisible);
            this.popupDiv.form.Div00.form.divFormBox.form.staInOutReq.set_visible(inOutDivVisible);
            this.popupDiv.form.Div00.form.divFormBox.form.staHd2.set_visible(inOutDivVisible);

            if (!showYnVisible && !inOutDivVisible) {
                formHeight -= 35;
            }

            this.popupDiv.form.Div00.form.divFormBox.form.staShowRange.set_visible(periodVisible);
            this.popupDiv.form.Div00.form.divFormBox.form.calShowStartDt.set_visible(periodVisible);
            this.popupDiv.form.Div00.form.divFormBox.form.staTilde.set_visible(periodVisible);
            this.popupDiv.form.Div00.form.divFormBox.form.calShowEndDt.set_visible(periodVisible);
            this.popupDiv.form.Div00.form.divFormBox.form.staHd3.set_visible(periodVisible);

            if (!periodVisible) {
                formHeight -= 35;
            }

            this.popupDiv.form.Div00.form.divFormBox.set_height(formHeight);
            this.popupDiv.form.Div00.form.divAttachBox.set_visible(attachFileVisible);

            this.popupDiv.form.Div00.form.divFormBox.form.resetScroll();
        };

        this.fnInit = function (args)
        {
            if (this.editorLoaded && this.articleLoaded) {
                this.popupDiv.form.Div00.form.wvEditor.callScript("editor.init(" + (arguments.length > 0 ? JSON.stringify(args) : "") + ")");
            }
        };

        this.fnGetContent = function ()
        {
        	return this.popupDiv.form.Div00.form.wvEditor.callScript("editor.content");
        };

        this.fnBeforeSave = function ()
        {
            var content = JSON.parse("\"" + this.fnGetContent() + "\"");
            this.dsArticle.setColumn(0, "artclCont", content);

            if (!this.fnValidate()) {
                return;
            }

            this.fnSave();
        };

        this.fnValidate = function ()
        {
            var args = [
                ["artclTitle", "NULL|MAX_LEN:200", "제목"],
                ["artclCont", "NULL", "내용"]
            ];

            if (this.dsBoard.getColumn(0, "boardType") == "BBST02") {
                args.push(["showYn", "NULL", "공개 여부"]);
            }

            if (this.dsBoard.getColumn(0, "boardType") == "BBST02") {
                args.push(["inOutDiv", "NULL", "대내외 구분"]);
            }

            if (!this.gfnCheckGrid(this.dsArticle, args, "")) {
                return false;
            }

            var from = this.fnToJsDate(this.dsArticle.getColumn(0, "showStartDt"));
            var to = this.fnToJsDate(this.dsArticle.getColumn(0, "showEndDt"));
            if (!this.fnValidateDateRange(from, to)) {
                return false;
            }

            return true;
        };

        /**
         * @summary 날짜 범위가 올바른지 확인한다.
         * @param {string | Date | nexacro.Date} from 날짜 범위의 시작
         * @param {string | Date | nexacro.Date} to 날짜 범위의 끝
         * @param {boolean} [exclusive=false] 범위의 끝이 범위에 포함되는지 여부
         * @returns {boolean} 범위의 끝이 시작보다 빠르면 false를, 아니면 true를 반환한다.
         */
        this.fnValidateDateRange = function (from, to, exclusive)
        {
            if (typeof from !== "string") {
                from = this.fnToJsDate(from);
            }

            if (typeof to !== "string") {
                to = this.fnToJsDate(to);
            }

            if (Eco.isEmpty(from) || Eco.isEmpty(to)) {
                return true;
            }

            var result = exclusive ? Eco.date.getDiffDay(from, to) > 0 : Eco.date.getDiffDay(from, to) >= 0;
            if (!result) {
                this.gfnAlert("CM_MSG_DATE_CHK");
            }

            return result;
        };

        /**
         * @summary {@link nexacro.Date}를 자바스크립트 {@link Date}로 변환한다.
         * @param {nexacro.Date} nexacroDate 자바스크립트 Date로 변환할 nexacro.Date 객체
         * @returns {Date} 주어진 nexacro.Date 객체가 나타내는 일시와 동일한 자바스크립트 Date 객체
         */
        this.fnToJsDate = function (nexacroDate) {
            if (Eco.isEmpty(nexacroDate)) {
                return (void 0);
            } else if (Object.prototype.toString(nexacroDate) === "[object Date]") {
                return nexacroDate;
            } else {
                return new Date(nexacroDate.getTime());
            }
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.CMS_2020P_02_onload,this);
            this.addEventHandler("oninit",this.CMS_2020P_02_oninit,this);
            this.addEventHandler("onbeforeclose",this.CMS_2020P_02_onbeforeclose,this);
            this.popupDiv.form.Static04_00_00_01.addEventHandler("onclick",this.Static31_onclick,this);
            this.popupDiv.form.Div00.form.divFormBox.form.Static04_00_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.popupDiv.form.Div00.form.divFormBox.form.Static07_01_01_00.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.popupDiv.form.Div00.form.divFormBox.form.Static07_01_01_00_00.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.popupDiv.form.Div00.form.divFormBox.form.staVd0.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.popupDiv.form.Div00.form.divFormBox.form.staShowYn.addEventHandler("onclick",this.div_Search02_00_in_YY_onclick,this);
            this.popupDiv.form.Div00.form.divFormBox.form.staHd2.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.popupDiv.form.Div00.form.divFormBox.form.Static07_00_01_00.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.popupDiv.form.Div00.form.divFormBox.form.staBoardNm.addEventHandler("onclick",this.Static09_onclick,this);
            this.popupDiv.form.Div00.form.divFormBox.form.Static07_01_02_00.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.popupDiv.form.Div00.form.divFormBox.form.Static04_00_00_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.popupDiv.form.Div00.form.divFormBox.form.staShowRange.addEventHandler("onclick",this.div_Search02_00_in_YY_onclick,this);
            this.popupDiv.form.Div00.form.divFormBox.form.staHd3.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.popupDiv.form.Div00.form.divFormBox.form.staVd13.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.popupDiv.form.Div00.form.divFormBox.form.staVd14.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.popupDiv.form.Div00.form.wvEditor.addEventHandler("onloadcompleted",this.popupDiv_Div00_wvEditor_onloadcompleted,this);
            this.popupDiv.form.Div00.form.div_btnGroup.form.btnSave.addEventHandler("onclick",this.popupDiv_Div00_div_btnGroup_btnSave_onclick,this);
            this.popupDiv.form.Div00.form.div_btnGroup.form.btnClose.addEventHandler("onclick",this.popupDiv_div_btnGroup_btnClose_onclick,this);
        };
        this.loadIncludeScript("CMS_2020P_02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
