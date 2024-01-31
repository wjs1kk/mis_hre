(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("USER_1010P_02");
            this.set_titletext("회원가입 승인");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,570);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMemberInfo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"memberId\" type=\"STRING\" size=\"20\"/><Column id=\"memberNmKr\" type=\"STRING\" size=\"300\"/><Column id=\"memberNmEn\" type=\"STRING\" size=\"300\"/><Column id=\"passwd\" type=\"STRING\" size=\"72\"/><Column id=\"passwdCheck\" type=\"STRING\" size=\"72\"/><Column id=\"ogdpInstCd\" type=\"STRING\" size=\"20\"/><Column id=\"ogdpInstNm\" type=\"STRING\" size=\"200\"/><Column id=\"emlAddrLocal\" type=\"STRING\" size=\"160\"/><Column id=\"emlAddrDomain\" type=\"STRING\" size=\"160\"/><Column id=\"emlAddr\" type=\"STRING\" size=\"320\"/><Column id=\"ofcTelno\" type=\"STRING\" size=\"20\"/><Column id=\"ofcFxno\" type=\"STRING\" size=\"11\"/><Column id=\"mblTelno\" type=\"STRING\" size=\"20\"/><Column id=\"prvcClctAgreYn\" type=\"STRING\" size=\"1\"/><Column id=\"prvcPvsnAgreYn\" type=\"STRING\" size=\"1\"/><Column id=\"applyDt\" type=\"DATETIME\" size=\"256\"/><Column id=\"applyCont\" type=\"STRING\" size=\"4000\"/><Column id=\"joinAprvStts\" type=\"STRING\" size=\"20\"/><Column id=\"joinAutzr\" type=\"STRING\" size=\"20\"/><Column id=\"joinAprvDt\" type=\"DATETIME\" size=\"256\"/><Column id=\"corpYn\" type=\"STRING\" size=\"1\"/><Column id=\"jbpsCd\" type=\"STRING\" size=\"20\"/><Column id=\"jbpsNm\" type=\"STRING\" size=\"300\"/><Column id=\"ogdpDeptCd\" type=\"STRING\" size=\"20\"/><Column id=\"ogdpDeptNm\" type=\"STRING\" size=\"300\"/><Column id=\"mbrZip\" type=\"STRING\" size=\"6\"/><Column id=\"mbrAddr\" type=\"STRING\" size=\"300\"/><Column id=\"mbrDaddr\" type=\"STRING\" size=\"300\"/><Column id=\"ofcZip\" type=\"STRING\" size=\"6\"/><Column id=\"ofcAddr\" type=\"STRING\" size=\"300\"/><Column id=\"ofcDaddr\" type=\"STRING\" size=\"300\"/><Column id=\"whdwlYn\" type=\"STRING\" size=\"1\"/><Column id=\"useYn\" type=\"STRING\" size=\"1\"/><Column id=\"rgstId\" type=\"STRING\" size=\"20\"/><Column id=\"rgstDt\" type=\"DATETIME\" size=\"256\"/><Column id=\"rgstIp\" type=\"STRING\" size=\"40\"/><Column id=\"updtId\" type=\"STRING\" size=\"20\"/><Column id=\"updtDt\" type=\"DATETIME\" size=\"256\"/><Column id=\"updtIp\" type=\"STRING\" size=\"40\"/><Column id=\"mbrAddrMerged\" type=\"STRING\" size=\"1048576\"/><Column id=\"ofcAddrMerged\" type=\"STRING\" size=\"1048576\"/><Column id=\"userId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"userId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divPopupRoot","0","0","1000","570",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Static("staPopupTitle","0","0","1000","50",null,null,null,null,null,null,this.divPopupRoot.form);
            obj.set_taborder("0");
            obj.set_text("회원가입 승인");
            obj.set_cssclass("sta_WF_popupTitle");
            this.divPopupRoot.addChild(obj.name, obj);

            obj = new Div("divBasicInfo","30","50",null,"217","30",null,null,null,null,null,this.divPopupRoot.form);
            obj.set_taborder("1");
            this.divPopupRoot.addChild(obj.name, obj);

            obj = new Static("staSubtitle","0","0","169","45",null,null,null,null,null,null,this.divPopupRoot.form.divBasicInfo.form);
            obj.set_taborder("0");
            obj.set_text("기본정보");
            obj.set_cssclass("sta_WF_subTitle01");
            this.divPopupRoot.form.divBasicInfo.addChild(obj.name, obj);

            obj = new Static("sta000","0","44",null,"34","0",null,null,null,null,null,this.divPopupRoot.form.divBasicInfo.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_condition02box");
            obj.set_text("");
            this.divPopupRoot.form.divBasicInfo.addChild(obj.name, obj);

            obj = new Static("sta001","0","77",null,"34","0",null,null,null,null,null,this.divPopupRoot.form.divBasicInfo.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_condition02box");
            obj.set_text("");
            this.divPopupRoot.form.divBasicInfo.addChild(obj.name, obj);

            obj = new Static("sta002","0","110",null,"34","0",null,null,null,null,null,this.divPopupRoot.form.divBasicInfo.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_condition02box");
            obj.set_text("");
            this.divPopupRoot.form.divBasicInfo.addChild(obj.name, obj);

            obj = new Static("sta003","0","143",null,"74","0",null,null,null,null,null,this.divPopupRoot.form.divBasicInfo.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_condition02box");
            obj.set_text("");
            this.divPopupRoot.form.divBasicInfo.addChild(obj.name, obj);

            obj = new Static("staLMemberNmKr","470","44","150","34",null,null,null,null,null,null,this.divPopupRoot.form.divBasicInfo.form);
            obj.set_taborder("6");
            obj.set_text("회원명");
            obj.set_cssclass("sta_WF_condition02");
            this.divPopupRoot.form.divBasicInfo.addChild(obj.name, obj);

            obj = new Static("staLMbrAddr","0","143","150","74",null,null,null,null,null,null,this.divPopupRoot.form.divBasicInfo.form);
            obj.set_taborder("9");
            obj.set_text("주소");
            obj.set_cssclass("sta_WF_condition02_L");
            this.divPopupRoot.form.divBasicInfo.addChild(obj.name, obj);

            obj = new Static("staLMblTelno","0","110","150","34",null,null,null,null,null,null,this.divPopupRoot.form.divBasicInfo.form);
            obj.set_taborder("8");
            obj.set_text("연락처");
            obj.set_cssclass("sta_WF_condition02_L");
            this.divPopupRoot.form.divBasicInfo.addChild(obj.name, obj);

            obj = new Static("staLEmlAddr","0","77","150","34",null,null,null,null,null,null,this.divPopupRoot.form.divBasicInfo.form);
            obj.set_taborder("7");
            obj.set_text("이메일");
            obj.set_cssclass("sta_WF_condition02_L");
            this.divPopupRoot.form.divBasicInfo.addChild(obj.name, obj);

            obj = new Static("staLMemberId","0","44","150","34",null,null,null,null,null,null,this.divPopupRoot.form.divBasicInfo.form);
            obj.set_taborder("5");
            obj.set_text("회원 ID");
            obj.set_cssclass("sta_WF_condition02_L");
            this.divPopupRoot.form.divBasicInfo.addChild(obj.name, obj);

            obj = new Static("staAddr","staLMbrAddr:10","147","770","66",null,null,null,null,null,null,this.divPopupRoot.form.divBasicInfo.form);
            obj.set_taborder("10");
            obj.set_text("00000\r\n대전광역시 유성구\r\n102호");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_verticalAlign("top");
            obj.set_padding("5px 9px");
            obj.set_font("normal 9pt/1.5 \"Malgun Gothic\"");
            this.divPopupRoot.form.divBasicInfo.addChild(obj.name, obj);

            obj = new Static("staMemberId","160","48","300","26",null,null,null,null,null,null,this.divPopupRoot.form.divBasicInfo.form);
            obj.set_taborder("11");
            obj.set_text("김길동");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_verticalAlign("top");
            obj.set_padding("6px 9px");
            obj.set_font("normal 9pt \"Malgun Gothic\"");
            this.divPopupRoot.form.divBasicInfo.addChild(obj.name, obj);

            obj = new Static("staMemberNm","630","48","300","26",null,null,null,null,null,null,this.divPopupRoot.form.divBasicInfo.form);
            obj.set_taborder("12");
            obj.set_text("김길동");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_verticalAlign("top");
            obj.set_padding("6px 9px");
            obj.set_font("normal 9pt \"Malgun Gothic\"");
            this.divPopupRoot.form.divBasicInfo.addChild(obj.name, obj);

            obj = new Static("staEmlAddr","160","81","300","26",null,null,null,null,null,null,this.divPopupRoot.form.divBasicInfo.form);
            obj.set_taborder("13");
            obj.set_text("김길동");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_verticalAlign("top");
            obj.set_padding("6px 9px");
            obj.set_font("normal 9pt \"Malgun Gothic\"");
            this.divPopupRoot.form.divBasicInfo.addChild(obj.name, obj);

            obj = new Static("staMblTelno","160","114","300","26",null,null,null,null,null,null,this.divPopupRoot.form.divBasicInfo.form);
            obj.set_taborder("14");
            obj.set_text("김길동");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_verticalAlign("top");
            obj.set_padding("6px 9px");
            obj.set_font("normal 9pt \"Malgun Gothic\"");
            this.divPopupRoot.form.divBasicInfo.addChild(obj.name, obj);

            obj = new Div("divBasicInfo00","30","divBasicInfo:10",null,"217","30",null,null,null,null,null,this.divPopupRoot.form);
            obj.set_taborder("2");
            this.divPopupRoot.addChild(obj.name, obj);

            obj = new Static("staSubtitle","0","0","169","45",null,null,null,null,null,null,this.divPopupRoot.form.divBasicInfo00.form);
            obj.set_taborder("0");
            obj.set_text("업체/기관정보");
            obj.set_cssclass("sta_WF_subTitle01");
            this.divPopupRoot.form.divBasicInfo00.addChild(obj.name, obj);

            obj = new Static("sta000","0","44",null,"34","0",null,null,null,null,null,this.divPopupRoot.form.divBasicInfo00.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_condition02box");
            obj.set_text("");
            this.divPopupRoot.form.divBasicInfo00.addChild(obj.name, obj);

            obj = new Static("sta001","0","77",null,"34","0",null,null,null,null,null,this.divPopupRoot.form.divBasicInfo00.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_condition02box");
            obj.set_text("");
            this.divPopupRoot.form.divBasicInfo00.addChild(obj.name, obj);

            obj = new Static("sta002","0","110",null,"34","0",null,null,null,null,null,this.divPopupRoot.form.divBasicInfo00.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_condition02box");
            obj.set_text("");
            this.divPopupRoot.form.divBasicInfo00.addChild(obj.name, obj);

            obj = new Static("sta003","0","143",null,"74","0",null,null,null,null,null,this.divPopupRoot.form.divBasicInfo00.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_condition02box");
            obj.set_text("");
            this.divPopupRoot.form.divBasicInfo00.addChild(obj.name, obj);

            obj = new Static("staLJbps","470","77","150","34",null,null,null,null,null,null,this.divPopupRoot.form.divBasicInfo00.form);
            obj.set_taborder("6");
            obj.set_text("직위");
            obj.set_cssclass("sta_WF_condition02");
            this.divPopupRoot.form.divBasicInfo00.addChild(obj.name, obj);

            obj = new Static("staLMbrAddr","0","143","150","74",null,null,null,null,null,null,this.divPopupRoot.form.divBasicInfo00.form);
            obj.set_taborder("9");
            obj.set_text("주소");
            obj.set_cssclass("sta_WF_condition02_L");
            this.divPopupRoot.form.divBasicInfo00.addChild(obj.name, obj);

            obj = new Static("staLOfcTelno","0","110","150","34",null,null,null,null,null,null,this.divPopupRoot.form.divBasicInfo00.form);
            obj.set_taborder("8");
            obj.set_text("사무실 연락처");
            obj.set_cssclass("sta_WF_condition02_L");
            this.divPopupRoot.form.divBasicInfo00.addChild(obj.name, obj);

            obj = new Static("staLOgdpDept","0","77","150","34",null,null,null,null,null,null,this.divPopupRoot.form.divBasicInfo00.form);
            obj.set_taborder("7");
            obj.set_text("부서");
            obj.set_cssclass("sta_WF_condition02_L");
            this.divPopupRoot.form.divBasicInfo00.addChild(obj.name, obj);

            obj = new Static("staLOgdpInstNm","0","44","150","34",null,null,null,null,null,null,this.divPopupRoot.form.divBasicInfo00.form);
            obj.set_taborder("5");
            obj.set_text("업체/기관명");
            obj.set_cssclass("sta_WF_condition02_L");
            this.divPopupRoot.form.divBasicInfo00.addChild(obj.name, obj);

            obj = new Static("staOfcAddr","staLMbrAddr:10","147","770","66",null,null,null,null,null,null,this.divPopupRoot.form.divBasicInfo00.form);
            obj.set_taborder("10");
            obj.set_text("00000\r\n대전광역시 유성구\r\n102호");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_verticalAlign("top");
            obj.set_padding("5px 9px");
            obj.set_font("normal 9pt/1.5 \"Malgun Gothic\"");
            this.divPopupRoot.form.divBasicInfo00.addChild(obj.name, obj);

            obj = new Static("staOgdpInstNm","160","48","770","26",null,null,null,null,null,null,this.divPopupRoot.form.divBasicInfo00.form);
            obj.set_taborder("11");
            obj.set_text("김길동");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_verticalAlign("top");
            obj.set_padding("6px 9px");
            obj.set_font("normal 9pt \"Malgun Gothic\"");
            this.divPopupRoot.form.divBasicInfo00.addChild(obj.name, obj);

            obj = new Static("staJbps","630","81","300","26",null,null,null,null,null,null,this.divPopupRoot.form.divBasicInfo00.form);
            obj.set_taborder("12");
            obj.set_text("김길동");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_verticalAlign("top");
            obj.set_padding("6px 9px");
            obj.set_font("normal 9pt \"Malgun Gothic\"");
            this.divPopupRoot.form.divBasicInfo00.addChild(obj.name, obj);

            obj = new Static("staOgdpDeptNm","160","81","300","26",null,null,null,null,null,null,this.divPopupRoot.form.divBasicInfo00.form);
            obj.set_taborder("13");
            obj.set_text("김길동");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_verticalAlign("top");
            obj.set_padding("6px 9px");
            obj.set_font("normal 9pt \"Malgun Gothic\"");
            this.divPopupRoot.form.divBasicInfo00.addChild(obj.name, obj);

            obj = new Static("staOfcTelno","160","114","300","26",null,null,null,null,null,null,this.divPopupRoot.form.divBasicInfo00.form);
            obj.set_taborder("14");
            obj.set_text("김길동");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_verticalAlign("top");
            obj.set_padding("6px 9px");
            obj.set_font("normal 9pt \"Malgun Gothic\"");
            this.divPopupRoot.form.divBasicInfo00.addChild(obj.name, obj);

            obj = new Static("staLOfcFxno","470","110","150","34",null,null,null,null,null,null,this.divPopupRoot.form.divBasicInfo00.form);
            obj.set_taborder("15");
            obj.set_text("사무실 팩스 번호");
            obj.set_cssclass("sta_WF_condition02");
            this.divPopupRoot.form.divBasicInfo00.addChild(obj.name, obj);

            obj = new Static("staOfcFxno","630","114","300","26",null,null,null,null,null,null,this.divPopupRoot.form.divBasicInfo00.form);
            obj.set_taborder("16");
            obj.set_text("김길동");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_verticalAlign("top");
            obj.set_padding("6px 9px");
            obj.set_font("normal 9pt \"Malgun Gothic\"");
            this.divPopupRoot.form.divBasicInfo00.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_01_00_00","449",null,"103","25",null,"51.024",null,null,null,null,this.divPopupRoot.form);
            obj.set_taborder("3");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divPopupRoot.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_01_00","448",null,"103","23",null,"0.02400000000000091",null,null,null,null,this.divPopupRoot.form);
            obj.set_taborder("4");
            obj.set_text("h 23");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divPopupRoot.addChild(obj.name, obj);

            obj = new Div("divDlgBtns","250","518",null,"28","250",null,null,null,null,null,this.divPopupRoot.form);
            obj.set_taborder("5");
            this.divPopupRoot.addChild(obj.name, obj);

            obj = new Button("btnApprove","579","2545","63","28",null,null,null,null,null,null,this.divPopupRoot.form.divDlgBtns.form);
            obj.set_text("승인");
            obj.set_cssclass("btn_WF_icoApprobation");
            obj.set_taborder("1");
            this.divPopupRoot.form.divDlgBtns.addChild(obj.name, obj);

            obj = new Button("btnReject","513","2545","63","28",null,null,null,null,null,null,this.divPopupRoot.form.divDlgBtns.form);
            obj.set_text("반려");
            obj.set_cssclass("btn_WF_icoReject");
            obj.set_taborder("0");
            this.divPopupRoot.form.divDlgBtns.addChild(obj.name, obj);

            obj = new Button("btnClose","315","2545","63","28",null,null,null,null,null,null,this.divPopupRoot.form.divDlgBtns.form);
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_icoCancel");
            obj.set_taborder("2");
            this.divPopupRoot.form.divDlgBtns.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divPopupRoot.form.divBasicInfo.form
            obj = new Layout("default","",0,0,this.divPopupRoot.form.divBasicInfo.form,function(p){});
            this.divPopupRoot.form.divBasicInfo.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divPopupRoot.form.divBasicInfo00.form
            obj = new Layout("default","",0,0,this.divPopupRoot.form.divBasicInfo00.form,function(p){});
            this.divPopupRoot.form.divBasicInfo00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divPopupRoot.form.divDlgBtns.form
            obj = new Layout("default","",0,0,this.divPopupRoot.form.divDlgBtns.form,function(p){});
            obj.set_type("horizontal");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("3");
            this.divPopupRoot.form.divDlgBtns.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divPopupRoot.form
            obj = new Layout("default","",0,0,this.divPopupRoot.form,function(p){});
            this.divPopupRoot.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1000,570,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divPopupRoot.form.divBasicInfo.form.staMemberId","text","dsMemberInfo","memberId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divPopupRoot.form.divBasicInfo.form.staMemberNm","text","dsMemberInfo","memberNmKr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divPopupRoot.form.divBasicInfo.form.staEmlAddr","text","dsMemberInfo","emlAddr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divPopupRoot.form.divBasicInfo.form.staMblTelno","text","dsMemberInfo","mblTelno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divPopupRoot.form.divBasicInfo.form.staAddr","text","dsMemberInfo","mbrAddrMerged");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divPopupRoot.form.divBasicInfo00.form.staOgdpInstNm","text","dsMemberInfo","ogdpInstNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divPopupRoot.form.divBasicInfo00.form.staOgdpDeptNm","text","dsMemberInfo","ogdpDeptNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divPopupRoot.form.divBasicInfo00.form.staJbps","text","dsMemberInfo","jbpsNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divPopupRoot.form.divBasicInfo00.form.staOfcTelno","text","dsMemberInfo","ofcTelno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divPopupRoot.form.divBasicInfo00.form.staOfcFxno","text","dsMemberInfo","ofcFxno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divPopupRoot.form.divBasicInfo00.form.staOfcAddr","text","dsMemberInfo","ofcAddrMerged");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("USER_1010P_02.xfdl","lib::common.xjs");
        this.registerScript("USER_1010P_02.xfdl", function() {
        /**
         *  회원가입 승인
         *  MenuPath      시스템 관리 - 기준정보 관리 - 사용자, 메뉴 및 권한 관리
         *  FileName      user.Manage.xfdl
         *  Creator 	  parksw
         *  CreateDate    2023.10.31
         *  Desction      회원가입 승인 팝업
         ************** 소스 수정 이력 *************************************************
         *  date          Modifier    Description
         *******************************************************************************
         *  2023.10.31    parksw 	 최초 생성
         *******************************************************************************/

        this.executeIncludeScript("lib::common.xjs"); /*include "lib::common.xjs"*/;

        /***********************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose)
         ***********************************************************************************************/

        this.USER_1010P_02_onload = function(obj,e)
        {
            this.gfnFormOnLoad(this);
            this.dsSearch.setColumn(0, "userId", this.parent.userId);
            this.fnSearch();
        };

        /************************************************************************************************
         * TRANSACTION 서비스 호출 처리
         ************************************************************************************************/

        this.fnSearch = function ()
        {
            this.gfnTransaction("getRegistInfo", "sm/user/getRegisterInfo.do", "dsSearch", "dsMemberInfo", "", "fnCallback");
        };

        this.fnApprove = function ()
        {
            this.gfnTransaction("approveRegistration", "sm/user/approveRegistration.do", "dsMemberInfo", "", "", "fnCallback");
        };

        this.fnReject = function ()
        {
            this.gfnTransaction("rejectRegistration", "sm/user/rejectRegistration.do", "dsMemberInfo", "", "", "fnCallback");
        };

        /************************************************************************************************
         * CALLBACK 콜백 처리부분(Transaction, Popup)
         ************************************************************************************************/

        this.fnCallback = function (svcId, errorCode, errorMsg)
        {
            switch (svcId) {
                case "getRegistInfo":
                    break;
                case "approveRegistration":
                    if (this.callbackMsg === "success") {
                        this.gfnAlert("회원가입 요청이 승인되었습니다.");
                        this.close();
                    }
                    break;
                case "rejectRegistration":
                    if (this.callbackMsg === "success") {
                        this.gfnAlert("회원가입 요청이 반려되었습니다.");
                        this.close();
                    }
                    break;
                default:
                    break;
            }
        };

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/

        this.divPopupRoot_divDlgBtns_btnApprove_onclick = function(obj,e)
        {
            this.fnBeforeApprove();
        };

        this.divPopupRoot_divDlgBtns_btnReject_onclick = function(obj,e)
        {
            this.fnBeforeReject();
        };

        this.divPopupRoot_divDlgBtns_btnClose_onclick = function(obj,e)
        {
            this.close();
        };

        /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/

        this.fnBeforeApprove = function ()
        {
            this.gfnAlert("CM_CFM_APPROVAL", [], "", { trueFunc: "fnApprove", falseFunc: "" });
        };


        this.fnBeforeReject = function ()
        {
            this.gfnAlert("CM_CFM_REJECT", [], "", { trueFunc: "fnReject", falseFunc: "" });
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.USER_1010P_02_onload,this);
            this.divPopupRoot.form.divBasicInfo.form.staSubtitle.addEventHandler("onclick",this.Static09_onclick,this);
            this.divPopupRoot.form.divBasicInfo.form.staAddr.addEventHandler("onclick",this.Static10_onclick,this);
            this.divPopupRoot.form.divBasicInfo.form.staMemberId.addEventHandler("onclick",this.Static10_onclick,this);
            this.divPopupRoot.form.divBasicInfo.form.staMemberNm.addEventHandler("onclick",this.Static10_onclick,this);
            this.divPopupRoot.form.divBasicInfo.form.staEmlAddr.addEventHandler("onclick",this.Static10_onclick,this);
            this.divPopupRoot.form.divBasicInfo.form.staMblTelno.addEventHandler("onclick",this.Static10_onclick,this);
            this.divPopupRoot.form.divBasicInfo00.form.staSubtitle.addEventHandler("onclick",this.Static09_onclick,this);
            this.divPopupRoot.form.divBasicInfo00.form.staOfcAddr.addEventHandler("onclick",this.Static10_onclick,this);
            this.divPopupRoot.form.divBasicInfo00.form.staOgdpInstNm.addEventHandler("onclick",this.Static10_onclick,this);
            this.divPopupRoot.form.divBasicInfo00.form.staJbps.addEventHandler("onclick",this.Static10_onclick,this);
            this.divPopupRoot.form.divBasicInfo00.form.staOgdpDeptNm.addEventHandler("onclick",this.Static10_onclick,this);
            this.divPopupRoot.form.divBasicInfo00.form.staOfcTelno.addEventHandler("onclick",this.Static10_onclick,this);
            this.divPopupRoot.form.divBasicInfo00.form.staOfcFxno.addEventHandler("onclick",this.Static10_onclick,this);
            this.divPopupRoot.form.Static04_00_00_01_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.divPopupRoot.form.Static04_00_00_01_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.divPopupRoot.form.divDlgBtns.form.btnApprove.addEventHandler("onclick",this.divPopupRoot_divDlgBtns_btnApprove_onclick,this);
            this.divPopupRoot.form.divDlgBtns.form.btnReject.addEventHandler("onclick",this.divPopupRoot_divDlgBtns_btnReject_onclick,this);
            this.divPopupRoot.form.divDlgBtns.form.btnClose.addEventHandler("onclick",this.divPopupRoot_divDlgBtns_btnClose_onclick,this);
            this.dsMemberInfo.addEventHandler("oncolumnchanged",this.dsMemberInfo_oncolumnchanged,this);
        };
        this.loadIncludeScript("USER_1010P_02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
