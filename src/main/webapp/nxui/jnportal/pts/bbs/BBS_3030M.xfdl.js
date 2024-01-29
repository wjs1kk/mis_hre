(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("BBS_3030M");
            this.set_titletext("게시물 상세-댓글");
            this.set_cssclass("btn_WF_Sort");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,1768);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"nttNo\" type=\"STRING\" size=\"256\"/><Column id=\"bbsId\" type=\"STRING\" size=\"256\"/><Column id=\"ntcrId\" type=\"STRING\" size=\"256\"/><Column id=\"wrtrId\" type=\"STRING\" size=\"256\"/><Column id=\"cmntNo\" type=\"STRING\" size=\"256\"/><Column id=\"scrpId\" type=\"STRING\" size=\"256\"/><Column id=\"rcmdCnt\" type=\"STRING\" size=\"256\"/><Column id=\"dcmdCnt\" type=\"STRING\" size=\"256\"/><Column id=\"isRead\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsComment", this);
            obj._setContents("<ColumnInfo><Column id=\"bbsId\" type=\"STRING\" size=\"256\"/><Column id=\"nttNo\" type=\"STRING\" size=\"256\"/><Column id=\"cmntNo\" type=\"STRING\" size=\"256\"/><Column id=\"wrtrId\" type=\"STRING\" size=\"256\"/><Column id=\"wrtrNm\" type=\"STRING\" size=\"256\"/><Column id=\"cmntCn\" type=\"STRING\" size=\"2000\"/><Column id=\"rgstDt\" type=\"STRING\" size=\"256\"/><Column id=\"rgstrId\" type=\"STRING\" size=\"256\"/><Column id=\"updtDt\" type=\"STRING\" size=\"256\"/><Column id=\"updtrId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj.set_updatecontrol("true");
            obj._setContents("<ColumnInfo><Column id=\"nttNo\" type=\"STRING\" size=\"256\"/><Column id=\"bbsId\" type=\"STRING\" size=\"256\"/><Column id=\"nttTtl\" type=\"STRING\" size=\"256\"/><Column id=\"nttCn\" type=\"STRING\" size=\"256\"/><Column id=\"answrYn\" type=\"STRING\" size=\"256\"/><Column id=\"upNttNo\" type=\"STRING\" size=\"256\"/><Column id=\"cmntYn\" type=\"STRING\" size=\"256\"/><Column id=\"sortOrdr\" type=\"STRING\" size=\"256\"/><Column id=\"rdcnt\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"ntcBgnYmd\" type=\"STRING\" size=\"256\"/><Column id=\"ntcEndYmd\" type=\"STRING\" size=\"256\"/><Column id=\"ntcrId\" type=\"STRING\" size=\"256\"/><Column id=\"ntcrNm\" type=\"STRING\" size=\"256\"/><Column id=\"passwd\" type=\"STRING\" size=\"256\"/><Column id=\"atchFileId\" type=\"STRING\" size=\"256\"/><Column id=\"noticeYn\" type=\"STRING\" size=\"256\"/><Column id=\"sjBoldYn\" type=\"STRING\" size=\"256\"/><Column id=\"scrtYn\" type=\"STRING\" size=\"256\"/><Column id=\"rgstDt\" type=\"STRING\" size=\"256\"/><Column id=\"rgstrId\" type=\"STRING\" size=\"256\"/><Column id=\"updtDt\" type=\"STRING\" size=\"256\"/><Column id=\"updtrId\" type=\"STRING\" size=\"256\"/><Column id=\"cmntCnt\" type=\"STRING\" size=\"256\"/><Column id=\"cmntNo\" type=\"STRING\" size=\"256\"/><Column id=\"wrtrId\" type=\"STRING\" size=\"256\"/><Column id=\"nttNoPrev\" type=\"STRING\" size=\"256\"/><Column id=\"nttTtlPrev\" type=\"STRING\" size=\"256\"/><Column id=\"nttNoNext\" type=\"STRING\" size=\"256\"/><Column id=\"nttTtlNext\" type=\"STRING\" size=\"256\"/><Column id=\"rcmdCnt\" type=\"STRING\" size=\"256\"/><Column id=\"dcmdCnt\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCommentRgst", this);
            obj._setContents("<ColumnInfo><Column id=\"nttNo\" type=\"STRING\" size=\"256\"/><Column id=\"bbsId\" type=\"STRING\" size=\"256\"/><Column id=\"cmntCn\" type=\"STRING\" size=\"2000\"/><Column id=\"passwd\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCommentDel", this);
            obj._setContents("<ColumnInfo><Column id=\"nttNo\" type=\"STRING\" size=\"256\"/><Column id=\"bbsId\" type=\"STRING\" size=\"256\"/><Column id=\"cmntNo\" type=\"STRING\" size=\"256\"/><Column id=\"wrtrId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsScrpList", this);
            obj._setContents("<ColumnInfo><Column id=\"scrpId\" type=\"STRING\" size=\"256\"/><Column id=\"bbsId\" type=\"STRING\" size=\"256\"/><Column id=\"nttNo\" type=\"STRING\" size=\"256\"/><Column id=\"scrpNm\" type=\"STRING\" size=\"256\"/><Column id=\"scrpDt\" type=\"STRING\" size=\"256\"/><Column id=\"scrpUserId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("DivForm","50","153",null,"900","50",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div01");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Static("Static10_00","0","45",null,"34","0",null,null,null,null,null,this.DivForm.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_condition02box");
            obj.set_text("");
            this.DivForm.addChild(obj.name, obj);

            obj = new Static("Static10_00_00","0","79",null,"34","0",null,null,null,null,null,this.DivForm.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_condition02box");
            obj.set_text("");
            this.DivForm.addChild(obj.name, obj);

            obj = new Static("Static10_00_00_00_00","0","113",null,"490","0",null,null,null,null,null,this.DivForm.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_condition02box");
            obj.set_text("");
            this.DivForm.addChild(obj.name, obj);

            obj = new Static("staNttTtl","0","45","150","34",null,null,null,null,null,null,this.DivForm.form);
            obj.set_taborder("3");
            obj.set_text("제목");
            obj.set_cssclass("sta_WF_condition02_LEssential");
            this.DivForm.addChild(obj.name, obj);

            obj = new Edit("edtNttTtl","staNttTtl:10","49","740","26",null,null,null,null,null,null,this.DivForm.form);
            obj.set_taborder("4");
            obj.set_enable("false");
            this.DivForm.addChild(obj.name, obj);

            obj = new Static("staNtcrId","0","79","150","34",null,null,null,null,null,null,this.DivForm.form);
            obj.set_taborder("5");
            obj.set_text("작성자");
            obj.set_cssclass("sta_WF_condition02_L");
            this.DivForm.addChild(obj.name, obj);

            obj = new Static("staNttCn","0","113","150","490",null,null,null,null,null,null,this.DivForm.form);
            obj.set_taborder("6");
            obj.set_text("내용");
            obj.set_cssclass("sta_WF_condition02_L");
            this.DivForm.addChild(obj.name, obj);

            obj = new TextArea("textNttCn","staNttCn:10","118",null,"480","20",null,null,null,null,null,this.DivForm.form);
            obj.set_taborder("7");
            obj.set_enable("false");
            this.DivForm.addChild(obj.name, obj);

            obj = new Static("staRgstDt","20%","79","150","34",null,null,null,null,null,null,this.DivForm.form);
            obj.set_taborder("8");
            obj.set_text("작성일");
            obj.set_cssclass("sta_WF_condition02");
            this.DivForm.addChild(obj.name, obj);

            obj = new Edit("edtRgstDt","staRgstDt:10","83","190","26",null,null,null,null,null,null,this.DivForm.form);
            obj.set_taborder("9");
            obj.set_readonly("true");
            this.DivForm.addChild(obj.name, obj);

            obj = new Static("staSubTitle","0","0","75","45",null,null,null,null,null,null,this.DivForm.form);
            obj.set_taborder("10");
            obj.set_text("내용");
            obj.set_cssclass("sta_WF_subTitle01");
            this.DivForm.addChild(obj.name, obj);

            obj = new Edit("edtNtcrId","staNtcrId:10","83","190","26",null,null,null,null,null,null,this.DivForm.form);
            obj.set_taborder("11");
            obj.set_readonly("true");
            this.DivForm.addChild(obj.name, obj);

            obj = new Static("staRdcnt","40.00%","79","143","34",null,null,null,null,null,null,this.DivForm.form);
            obj.set_taborder("12");
            obj.set_text("조회수");
            obj.set_cssclass("sta_WF_condition02");
            this.DivForm.addChild(obj.name, obj);

            obj = new Edit("edtRdcnt","staRdcnt:10","83","190","26",null,null,null,null,null,null,this.DivForm.form);
            obj.set_taborder("13");
            obj.set_readonly("true");
            this.DivForm.addChild(obj.name, obj);

            obj = new Static("staAnswr","60%","79","142","34",null,null,null,null,null,null,this.DivForm.form);
            obj.set_taborder("14");
            obj.set_text("답글수");
            obj.set_cssclass("sta_WF_condition02");
            this.DivForm.addChild(obj.name, obj);

            obj = new Edit("edtAnswrCnt","staAnswr:10","83","190","26",null,null,null,null,null,null,this.DivForm.form);
            obj.set_taborder("15");
            obj.set_readonly("true");
            this.DivForm.addChild(obj.name, obj);

            obj = new Static("staRcm","80%","79","142","34",null,null,null,null,null,null,this.DivForm.form);
            obj.set_taborder("16");
            obj.set_text("추천수");
            obj.set_cssclass("sta_WF_condition02");
            this.DivForm.addChild(obj.name, obj);

            obj = new Edit("edtRcmCnt","staRcm:10","83","190","26",null,null,null,null,null,null,this.DivForm.form);
            obj.set_taborder("17");
            obj.set_readonly("true");
            this.DivForm.addChild(obj.name, obj);

            obj = new Div("divDrop","0","658",null,"195","0",null,null,null,null,null,this.DivForm.form);
            obj.set_taborder("18");
            obj.set_cssclass("raonkdropzone");
            obj.set_border("0px none");
            this.DivForm.addChild(obj.name, obj);

            obj = new Grid("grdFileList","0","0",null,null,"0","34",null,null,null,null,this.DivForm.form.divDrop.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsFileList");
            obj.set_autofittype("col");
            obj.set_tooltiptype("default");
            obj.set_autoenter("select");
            obj.set_enable("true");
            obj.set_nodatatext("여기에 파일을 끌어다 놓으세요");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"200\"/><Column size=\"64\" band=\"right\"/><Column size=\"56\" band=\"right\"/><Column size=\"56\" band=\"right\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"34\"/></Rows><Band id=\"head\"><Cell text=\"NO\" autosizecol=\"none\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" textAlign=\"center\" verticalAlign=\"middle\" autosizecol=\"none\"/><Cell col=\"2\" text=\"상태\"/><Cell col=\"3\"/><Cell col=\"4\" text=\"파일명\"/><Cell col=\"5\" text=\"크기\"/><Cell col=\"6\" text=\"다운로드\"/><Cell col=\"7\" text=\"삭제\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" textAlign=\"center\" expandsize=\"16\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:rowCheck\" textAlign=\"center\" verticalAlign=\"middle\" expandsize=\"16\"/><Cell col=\"2\" expr=\"comp.fnRowStatusSymbol(rowStatus)\"/><Cell col=\"3\" expr=\"comp.fnGetFileIcon(orgnlFileNm)\" displaytype=\"imagecontrol\"/><Cell col=\"4\" textAlign=\"left\" text=\"bind:orgnlFileNm\" tooltiptext=\"bind:orgnlFileNm\"/><Cell col=\"5\" textAlign=\"right\" expr=\"comp.fnFormatFileSize(fileSz)\"/><Cell col=\"6\" displaytype=\"imagecontrol\" text=\"theme://images/btn_WF_grdDownload.png\"/><Cell col=\"7\" displaytype=\"imagecontrol\" expr=\"rowStatus == &apos;deleted&apos; ? &apos;theme://images/btn_WF_grdReturn.png&apos; : &apos;theme://images/btn_WF_grdDelete.png&apos;\"/></Band></Format><Format id=\"download\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"240\"/><Column size=\"64\" band=\"right\"/><Column size=\"56\" band=\"right\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"34\"/></Rows><Band id=\"head\"><Cell text=\"NO\" autosizecol=\"none\"/><Cell col=\"1\"/><Cell col=\"2\" text=\"파일명\"/><Cell col=\"3\" text=\"크기\"/><Cell col=\"4\" text=\"다운로드\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" textAlign=\"center\" expandsize=\"16\"/><Cell col=\"1\" expr=\"comp.fnGetFileIcon(orgnlFileNm)\" displaytype=\"imagecontrol\"/><Cell col=\"2\" textAlign=\"left\" text=\"bind:orgnlFileNm\" color=\"expr:rowStatus == &apos;deleted&apos; ? &apos;red&apos; : &apos;black&apos;\" textDecoration=\"expr:rowStatus == &apos;deleted&apos; ? &apos;line-through&apos; : &apos;&apos;\" tooltiptext=\"bind:orgnlFileNm\"/><Cell col=\"3\" textAlign=\"right\" expr=\"comp.fnFormatFileSize(fileSz)\"/><Cell col=\"4\" displaytype=\"imagecontrol\" text=\"theme://images/btn_WF_grdDownload.png\"/></Band></Format></Formats>");
            this.DivForm.form.divDrop.addChild(obj.name, obj);

            obj = new Static("staStatus","0",null,null,"34","0","0",null,null,null,null,this.DivForm.form.divDrop.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_condition02");
            obj.set_border("0px none,1px solid #dddddd, 1px solid #dddddd, 1px solid #dddddd");
            this.DivForm.form.divDrop.addChild(obj.name, obj);

            obj = new Button("btnDownloadAll",null,"627","118","26","0",null,null,null,null,null,this.DivForm.form);
            obj.set_taborder("19");
            obj.set_text("전체 다운로드");
            obj.set_cssclass("btn_WF_grdDownload");
            obj.set_visible("false");
            obj.set_enable("false");
            this.DivForm.addChild(obj.name, obj);

            obj = new Button("btnDeleteAll",null,"627","89","26","126",null,null,null,null,null,this.DivForm.form);
            obj.set_taborder("20");
            obj.set_text("전체삭제");
            obj.set_cssclass("btn_WF_grdDelete");
            obj.set_visible("false");
            obj.set_enable("false");
            this.DivForm.addChild(obj.name, obj);

            obj = new Button("btnDelete",null,"627","89","26","220",null,null,null,null,null,this.DivForm.form);
            obj.set_taborder("21");
            obj.set_text("선택삭제");
            obj.set_cssclass("btn_WF_grdDelete");
            obj.set_visible("false");
            obj.set_enable("false");
            this.DivForm.addChild(obj.name, obj);

            obj = new Button("btnAdd",null,"627","63","26","314",null,null,null,null,null,this.DivForm.form);
            obj.set_taborder("22");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_visible("false");
            obj.set_enable("false");
            this.DivForm.addChild(obj.name, obj);

            obj = new Static("staAtchFileld","0","613","171","45",null,null,null,null,null,null,this.DivForm.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_subTitle01");
            obj.set_text("첨부 파일(안됨)");
            this.DivForm.addChild(obj.name, obj);

            obj = new Div("Div00","0","divDrop:5",null,"26","0",null,null,null,null,null,this.DivForm.form);
            obj.set_taborder("24");
            obj.set_text("Div00");
            this.DivForm.addChild(obj.name, obj);

            obj = new Button("btnScrap",null,"0","65","26","-159",null,null,null,null,null,this.DivForm.form.Div00.form);
            obj.set_text("스크랩");
            obj.set_cssclass("btn_WF_Save");
            obj.set_visible("true");
            obj.set_taborder("0");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.DivForm.form.Div00.addChild(obj.name, obj);

            obj = new Button("btnRecommend","1001","0","76","26",null,null,null,null,null,null,this.DivForm.form.Div00.form);
            obj.set_taborder("2");
            obj.set_text("추천");
            obj.set_cssclass("btn_WF_grdArrUp");
            obj.set_color("#e10e62");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.DivForm.form.Div00.addChild(obj.name, obj);

            obj = new Button("btnDisrecommend","922","0","76","26",null,null,null,null,null,null,this.DivForm.form.Div00.form);
            obj.set_taborder("1");
            obj.set_text("비추천");
            obj.set_cssclass("btn_WF_grdArrDown");
            obj.set_color("#0090ff");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.DivForm.form.Div00.addChild(obj.name, obj);

            obj = new Button("btnAnswr",null,"14","63","28","68",null,null,null,null,null,this.DivForm.form);
            obj.set_text("답글");
            obj.set_cssclass("btn_WF_icoReturn");
            obj.set_taborder("26");
            obj.set_enable("false");
            this.DivForm.addChild(obj.name, obj);

            obj = new Button("btnModify",null,"14","63","28","btnAnswr:5",null,null,null,null,null,this.DivForm.form);
            obj.set_text("수정");
            obj.set_cssclass("btn_WF_icoModify");
            obj.set_taborder("25");
            this.DivForm.addChild(obj.name, obj);

            obj = new Button("btnClose",null,"14","63","28","0",null,null,null,null,null,this.DivForm.form);
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_icoCancel");
            obj.set_taborder("27");
            this.DivForm.addChild(obj.name, obj);

            obj = new Static("staTitle","50","0",null,"58","1420",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("게시물 상세화면");
            obj.set_cssclass("sta_WF_compTitle01");
            this.addChild(obj.name, obj);

            obj = new Div("DivBnrForm00","50","58",null,"68","50",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div01");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Static("Static10_00","0","0",null,"34","0",null,null,null,null,null,this.DivBnrForm00.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_condition02box");
            obj.set_text("");
            this.DivBnrForm00.addChild(obj.name, obj);

            obj = new Static("Static10_00_00","0","34",null,"34","0",null,null,null,null,null,this.DivBnrForm00.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_condition02box");
            obj.set_text("");
            this.DivBnrForm00.addChild(obj.name, obj);

            obj = new Static("staNttNoPrev","0","0","150","34",null,null,null,null,null,null,this.DivBnrForm00.form);
            obj.set_taborder("2");
            obj.set_text("이전 글");
            obj.set_cssclass("sta_WF_condition02_L");
            this.DivBnrForm00.addChild(obj.name, obj);

            obj = new Edit("edtNttNoPrev","staNttNoPrev:10","4","740","26",null,null,null,null,null,null,this.DivBnrForm00.form);
            obj.set_taborder("3");
            obj.set_enable("false");
            this.DivBnrForm00.addChild(obj.name, obj);

            obj = new Static("staCls","0","34","150","34",null,null,null,null,null,null,this.DivBnrForm00.form);
            obj.set_taborder("4");
            obj.set_text("다음 글");
            obj.set_cssclass("sta_WF_condition02_L");
            this.DivBnrForm00.addChild(obj.name, obj);

            obj = new Edit("edtQstnTtl00","staCls:10","38","740","26",null,null,null,null,null,null,this.DivBnrForm00.form);
            obj.set_taborder("5");
            obj.set_enable("false");
            this.DivBnrForm00.addChild(obj.name, obj);

            obj = new Div("Div00","50","DivForm:15",null,"700","50",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Static("staComment","0","0","171","45",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_subTitle01");
            obj.set_text("댓글");
            this.Div00.addChild(obj.name, obj);

            obj = new TextArea("textComment","5","490",null,"110","5",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btnComment",null,null,"93","28","0","textComment:5",null,null,null,null,this.Div00.form);
            obj.set_text("댓글 등록");
            obj.set_cssclass("btn_WF_icoModify");
            obj.set_taborder("2");
            this.Div00.addChild(obj.name, obj);

            obj = new ListView("ListViewComment","0","45",null,"400","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_binddataset("dsComment");
            obj.set_useselcolor("false");
            obj.set_background("transparent");
            obj._setContents("<Formats><Format id=\"default\"><Band id=\"body\" width=\"100%\" height=\"80\" expandbartype=\"false\"><Cell id=\"cmntCn\" left=\"200\" top=\"10\" text=\"bind:cmntCn\" right=\"227\" bottom=\"10\" verticalAlign=\"top\" color=\"black\" font=\"normal 14px/normal &quot;Noto Sans KR&quot;\" border=\"0px none\"/><Cell id=\"wrtrNm\" left=\"10\" height=\"24\" text=\"bind:wrtrNm\" right=\"cmntCn:10\" verticalAlign=\"top\" color=\"black\" font=\"normal 700 14px/normal &quot;Noto Sans KR&quot;\" border=\"0px none\" bottom=\"10\"/><Cell id=\"rgstDt\" left=\"cmntCn:10\" top=\"44\" text=\"bind:rgstDt\" right=\"10\" verticalAlign=\"top\" color=\"#666666\" border=\"0px none\" height=\"24\"/><Cell id=\"delbutton\" top=\"7\" displaytype=\"expr:rgstrId == nexacro.getApplication().gdsUserInfo.getColumn(0, &quot;userId&quot;) ? &quot;buttoncontrol&quot; : &quot;none&quot;\" text=\"삭제\" edittype=\"expr:rgstrId == nexacro.getApplication().gdsUserInfo.getColumn(0, &quot;userId&quot;) ? &quot;button&quot; : &quot;none&quot;\" border=\"0px none\" padding=\"0px\" textAlign=\"center\" height=\"26\" width=\"87\" right=\"10\"/><Cell id=\"cmntNo\" left=\"10\" height=\"24\" text=\"bind:cmntNo\" right=\"cmntCn:10\" verticalAlign=\"top\" color=\"#666666\" font=\"normal 700 14px/normal &quot;Noto Sans KR&quot;\" border=\"0px none\" top=\"10\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.DivForm.form.divDrop.form
            obj = new Layout("default","",0,0,this.DivForm.form.divDrop.form,function(p){});
            this.DivForm.form.divDrop.form.addLayout(obj.name, obj);

            //-- Default Layout : this.DivForm.form.Div00.form
            obj = new Layout("default","",0,0,this.DivForm.form.Div00.form,function(p){});
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("3");
            this.DivForm.form.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.DivForm.form
            obj = new Layout("default","",0,0,this.DivForm.form,function(p){});
            this.DivForm.form.addLayout(obj.name, obj);

            //-- Default Layout : this.DivBnrForm00.form
            obj = new Layout("default","",0,0,this.DivBnrForm00.form,function(p){});
            this.DivBnrForm00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","DivBnrForm00.form.edtNttNoPrev","value","dsList","nttTtlPrev");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","DivBnrForm00.form.edtQstnTtl00","value","dsList","nttTtlNext");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","DivForm.form.edtNttTtl","value","dsList","nttTtl");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","DivForm.form.edtNtcrId","value","dsList","ntcrId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","DivForm.form.edtRgstDt","value","dsList","rgstDt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","DivForm.form.edtRdcnt","value","dsList","rdcnt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","DivForm.form.textNttCn","value","dsList","nttCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","Div00.form.textComment","value","dsCommentRgst","cmntCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","DivForm.form.edtRcmCnt","value","dsList","rcmdCnt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","DivForm.form.chWhdwlYn","value","dsSearch","whdwlYn");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("BBS_3030M.xfdl","lib::common.xjs");
        this.registerScript("BBS_3030M.xfdl", function() {
        /**
        *  게시물 상세조회
        *  MenuPath      소통광장 - 게시물 - 게시물 상세조회
        *  FileName      BBS_3030M.xfdl
        *  Creator 	     woohj
        *  CreateDate    2023.12.07
        *  Desction      게시물 상세조회
        ************** 소스 수정 이력 ***********************************************
        *  date          Modifier    Description
        *******************************************************************************
        *  2023.12.07   woohj	 	 최초 생성
        *******************************************************************************/

        this.executeIncludeScript("lib::common.xjs"); /*include "lib::common.xjs"*/;

        this.nttNo = ""; // 초기화
        this.bbsId = ""; // 초기화

        this.scrpId = "";
        /***********************************************************************************************
        * FORM EVENT 영역(onload, onbeforeclose)
        /***********************************************************************************************/
        /**
         * description 화면 onload
        */
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnLoad(this);

        	var param = this.getOwnerFrame().tabArgs.param;
        	this.nttNo = (param == null || Eco.isEmpty(param.nttNo)) ? null : param.nttNo;
        	this.bbsId = (param == null || Eco.isEmpty(param.bbsId)) ? null : param.bbsId;

        	this.dsSearch.setColumn(0, "isRead", "Y");

        	this.dsSearch.setColumn(0, "nttNo", this.nttNo); // 게시글
        	this.dsSearch.setColumn(0, "bbsId", this.bbsId);

        	this.dsCommentRgst.setColumn(0, "nttNo", this.nttNo); // 댓글
        	this.dsCommentRgst.setColumn(0, "bbsId", this.bbsId);

        	this.dsScrpList.setColumn(0, "nttNo", this.nttNo); // 스크랩
        	this.dsScrpList.setColumn(0, "bbsId", this.bbsId);

        	this.fnSearch();
        };

        /************************************************************************************************
        * TRANSACTION 서비스 호출 처리
        ************************************************************************************************/
        /**
         * description 상세 조회
         */
        this.fnSearch = function ()
        {
        	var strSvcId    = "getNoticeBoardDetail";
        	var strSvcUrl   = "bbs/noticeBoard/getNoticeBoardDetail.do";
        	var inData      = "dsSearch";
        	var outData     = "dsList";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);

        	this.fnCommentSearch();
        };

        /**
         * description 게시물 상세조회 내용 -댓글내용 조회
         */
        this.fnCommentSearch = function ()
        {
        	var strSvcId    = "getNBDetailComment";
        	var strSvcUrl   = "bbs/noticeBoard/comment/getNBDetailComment.do";
        	var inData      = "dsSearch";
        	var outData     = "dsComment";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        /**
         * description 게시물 상세조회 내용 -댓글내용 입력
         */
        this.fnCommentSet = function ()
        {
        	var strSvcId    = "setNBDetailComment";
        	var strSvcUrl   = "bbs/noticeBoard/comment/setNBDetailComment.do";
        	var inData      = "dsCommentRgst";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        /**
         * description 게시물 상세조회 내용 -댓글내용 삭제
         */
        this.fnCommentDel = function ()
        {
        	var strSvcId    = "deleteNBDetailComment";
        	var strSvcUrl   = "bbs/noticeBoard/comment/deleteNBDetailComment.do";
        	var inData      = "dsCommentDel"; // dsComment
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        /**
         * description 게시물 상세조회 - 게시물 스크랩
         */
        this.fnBoardScrp = function ()
        {
        	var strSvcId    = "setBoardScrapManage";
        	var strSvcUrl   = "bbs/boardScrap/setBoardScrapManage.do";
        	var inData      = "dsScrpList";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        /**
         * description 게시물 상세조회 - 추천
         */
        this.fnRecommend = function ()
        {
        	var strSvcId    = "setNBRecommend";
        	var strSvcUrl   = "bbs/noticeBoard/setNBRecommend.do";
        	var inData      = "dsList";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        /**
         * description 게시물 상세조회 - 비추천
         */
        this.fnDisrecommend = function ()
        {
        	var strSvcId    = "setNBDisrecommend";
        	var strSvcUrl   = "bbs/noticeBoard/setNBDisrecommend.do";
        	var inData      = "dsList";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        /************************************************************************************************
         * CALLBACK 콜백 처리부분(Transaction, Popup)
         ************************************************************************************************/
        /**
         * description Transaction CallBack 함수
        */
        this.fnCallback = function (svcId, errorCode, errorMsg)
        {
            switch (svcId) {
                case "getNoticeBoardDetail":

                    break;
        		case "getNBDetailComment":

                    break;
        		case "setNBDetailComment":
        			if(this.callbackMsg == "success"){
        				this.gfnAlert("CM_MSG_SAVE_SUCCESS");  	// 저장 되었습니다.
        				this.dsCommentRgst.setColumn(0,"cmntCn", "");
        				this.fnSearch();
        			}else{
        				this.gfnAlert("CM_MSG_TEST_3");  		// 저장에 실패하였습니다.
        			}
                    break;
        		case "deleteNBDetailComment":
        			if(this.callbackMsg == "success"){
                        this.gfnAlert("CM_MSG_DELETE_SUCCESS");  // 삭제 되었습니다.
                    }
        			this.fnCommentSearch();
                    break;
        		case "setBoardScrapManage":
        			if(this.callbackMsg == "success"){
        				this.gfnAlert("CM_MSG_SAVE_SUCCESS");  	// 저장 되었습니다.
        				this.dsSearch.setColumn(0,"scrpId", this.scrpId);

        				this.dsSearch.setColumn(0, "nttNo", this.nttNo);
        				this.dsSearch.setColumn(0, "bbsId", this.bbsId);

        			}else{
        				this.gfnAlert("CM_MSG_TEST_3");  		// 저장에 실패하였습니다.
        			}
                    break;
                case "setNBRecommend":
        			if(this.callbackMsg == "success"){
        				this.dsSearch.setColumn(0 , "isRead" , "N");
        				this.fnSearch();
        			}
                    break;
        		case "setNBDisrecommend":
        			if(this.callbackMsg == "success"){
        				this.dsSearch.setColumn(0 , "isRead" , "N");
        				this.fnSearch();
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
         * description 수정 버튼
        */
        this.DivForm_btnModify_onclick = function(obj,e)
        {
        	// ntcrId 게시글작성자 ID, wrtrId 댓글작성자ID,  userId 로그인한 유저

        	var param = {
        			nttNo: this.dsList.getColumn(e.row, "nttNo"),
        			bbsId:  this.dsList.getColumn(e.row, "bbsId")
        		}

        	//var ntcrId = this.dsList.getColumn(e.row, "ntcrId");
        	var rgstrId = this.dsList.getColumn(e.row, "rgstrId");

        	var userId = nexacro.getApplication().gdsUserInfo.getColumn(0, "userId");   // Application에 있는 로그인한 유저id

        	// 확인중
        	if(rgstrId === userId) {

        		nexacro.getApplication().openNewTab("BBS_3020M", "게시물 글쓰기", "pts::bbs/BBS_3020M.xfdl", param , "소통광장 > 게시물 > 게시물 등록", "");
        	} else {
        		alert("본인이 등록한 게시물이 아닙니다.");
        		this.DivForm.form.btnModify.set_enable(false);

        	}

        };

        /**
         * description 닫기 버튼
        */
        this.DivForm_btnClose_onclick = function(obj,e)
        {
        	nexacro.getApplication().closeTab(this.getOwnerFrame().tabArgs.tabId);
        };

        /**
         * description 댓글 등록 버튼
        */
        this.Div00_btnComment_onclick = function(obj,e)
        {
        	this.fnBeforeSave();
        };

        /**
         * description 리스트뷰 삭제버튼
        */
        this.Div00_ListViewComment_oncellclick = function(obj,e)
        {
        	var userId = nexacro.getApplication().gdsUserInfo.getColumn(0, "userId");
        	var rgstrId = this.dsComment.getColumn(e.row, "rgstrId")

        	var cmntNo = this.dsComment.getColumn(e.row, "cmntNo");

        	if(rgstrId == userId) {
        		if(cmntNo != null && cmntNo != "") {
        			this.dsCommentDel.setColumn(0, "nttNo", this.nttNo);
        			this.dsCommentDel.setColumn(0, "bbsId", this.bbsId);
        			this.dsCommentDel.setColumn(0, "cmntNo", cmntNo);

        			this.fnCommentDel();
        		}
        	} else {
        		alert("다른사용자의 댓글은 삭제 할 수 없습니다.");
        	}
        	this.fnCommentSearch();
        };

        /**
         * description 게시물 스크랩 버튼
        */
        this.DivForm_Div00_btnScrap_onclick = function(obj,e)
        {
        	this.gfnAlert("PTS_BOARD_SCRAP", "", "", {trueFunc: "fnBoardScrp", falseFunc: ""}); // 스크랩 하시겠습니까?
        };

        /**
         * description 추천 버튼
        */
        this.DivForm_Div00_btnRecommend_onclick = function(obj,e)
        {
        	this.dsSearch.setColumn(0, "bbsId", this.bbsId);
        	this.dsSearch.setColumn(0, "nttNo", this.nttNo);

        	this.fnRecommend();
        };

        /**
         * description 비추천 버튼
        */
        this.DivForm_Div00_btnDisrecommend_onclick = function(obj,e)
        {
        	this.dsSearch.setColumn(0, "bbsId", this.bbsId);
        	this.dsSearch.setColumn(0, "nttNo", this.nttNo);

        	this.fnDisrecommend();
        };
        /************************************************************************************************
        * 사용자 FUNCTION 영역
        ************************************************************************************************/

        /**
         * description 저장 전 확인
        */
        this.fnBeforeSave = function ()
        {
        	if(this.dsCommentRgst.rowcount == 0){
        		this.gfnAlert("CM_MSG_SAVE_NODATA");  	// 저장할 데이터가 없습니다.
        		return;
        	}

        	if (!this.gfnDsIsUpdated(this.dsCommentRgst)) {
        		this.gfnAlert("CM_MSG_SAVE_NOCHANGE");  // 변경된 내역이 없습니다.
        		return;
        	}

        	if (!this.fnValidation()) {		// 그리드 필수값 체크
        		return;
            }

            this.gfnAlert("CM_CFM_BEFORE_SAVE", "", "", {trueFunc: "fnCommentSet", falseFunc: ""});  // 변경된 내역을 저장 하시겠습니까?
        };

        /**
         * description 댓글 fnValidation
        */
        this.fnValidation = function ()
        {
        	var args = [
                ["cmntCn", "NULL|MAX_LEN:2000", "댓글내용"]
            ];

        	if(!this.gfnCheckGrid(this.dsCommentRgst, args, "")) {
        		return false;
        	}

            return true;
        };

















        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.DivForm.form.Static10_00_00_00_00.addEventHandler("onclick",this.Div01_Static10_00_00_00_00_onclick,this);
            this.DivForm.form.staNtcrId.addEventHandler("onclick",this.Div01_Static_comboBox_onclick,this);
            this.DivForm.form.textNttCn.addEventHandler("oneditclick",this.TextArea01_oneditclick,this);
            this.DivForm.form.textNttCn.addEventHandler("onchanged",this.Div01_TextArea01_00_onchanged,this);
            this.DivForm.form.staSubTitle.addEventHandler("onclick",this.Div00_Static09_onclick,this);
            this.DivForm.form.divDrop.form.grdFileList.addEventHandler("onheadclick",this.grdFileList_onheadclick,this);
            this.DivForm.form.divDrop.form.grdFileList.addEventHandler("oncellclick",this.grdFileList_oncellclick,this);
            this.DivForm.form.btnDownloadAll.addEventHandler("onclick",this.btnDownloadAll_onclick,this);
            this.DivForm.form.btnDeleteAll.addEventHandler("onclick",this.btnDeleteAll_onclick,this);
            this.DivForm.form.btnDelete.addEventHandler("onclick",this.btnDelete_onclick,this);
            this.DivForm.form.btnAdd.addEventHandler("onclick",this.btnAdd_onclick,this);
            this.DivForm.form.staAtchFileld.addEventHandler("onclick",this.Static09_onclick,this);
            this.DivForm.form.Div00.form.btnScrap.addEventHandler("onclick",this.DivForm_Div00_btnScrap_onclick,this);
            this.DivForm.form.Div00.form.btnRecommend.addEventHandler("onclick",this.DivForm_Div00_btnRecommend_onclick,this);
            this.DivForm.form.Div00.form.btnDisrecommend.addEventHandler("onclick",this.DivForm_Div00_btnDisrecommend_onclick,this);
            this.DivForm.form.btnAnswr.addEventHandler("onclick",this.btn_search_onclick,this);
            this.DivForm.form.btnModify.addEventHandler("onclick",this.DivForm_btnModify_onclick,this);
            this.DivForm.form.btnClose.addEventHandler("onclick",this.DivForm_btnClose_onclick,this);
            this.staTitle.addEventHandler("onclick",this.sta_title_onclick,this);
            this.DivBnrForm00.form.staCls.addEventHandler("onclick",this.Div01_Static_comboBox_onclick,this);
            this.Div00.form.staComment.addEventHandler("onclick",this.Static09_onclick,this);
            this.Div00.form.btnComment.addEventHandler("onclick",this.Div00_btnComment_onclick,this);
            this.Div00.form.ListViewComment.addEventHandler("oncellclick",this.Div00_ListViewComment_oncellclick,this);
        };
        this.loadIncludeScript("BBS_3030M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
