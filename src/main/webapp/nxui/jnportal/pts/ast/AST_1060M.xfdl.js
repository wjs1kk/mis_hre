(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("AST_1060M");
            this.set_titletext("자원현황상세");
            this.set_cssclass("btn_WF_Sort");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,1370);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"astNo\" type=\"STRING\" size=\"256\"/><Column id=\"astNm\" type=\"STRING\" size=\"256\"/><Column id=\"astAlias\" type=\"STRING\" size=\"256\"/><Column id=\"astDivCd\" type=\"STRING\" size=\"256\"/><Column id=\"astDivCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"rgstDt\" type=\"STRING\" size=\"256\"/><Column id=\"astMngDeptCd\" type=\"STRING\" size=\"256\"/><Column id=\"astMngDeptCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"astMngPicId\" type=\"STRING\" size=\"256\"/><Column id=\"astMngPicIdNm\" type=\"STRING\" size=\"256\"/><Column id=\"astMftrNm\" type=\"STRING\" size=\"256\"/><Column id=\"astQty\" type=\"STRING\" size=\"256\"/><Column id=\"astUom\" type=\"STRING\" size=\"256\"/><Column id=\"astDesc\" type=\"STRING\" size=\"256\"/><Column id=\"astRmk\" type=\"STRING\" size=\"256\"/><Column id=\"atchFileId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"astNo\" type=\"STRING\" size=\"256\"/><Column id=\"astMngPicId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAskKindCbo", this);
            obj.set_updatecontrol("true");
            obj._setContents("<ColumnInfo><Column id=\"text\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDetailList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"astSrlNo\" type=\"STRING\" size=\"256\"/><Column id=\"astAqstnYmd\" type=\"STRING\" size=\"256\"/><Column id=\"astUseDeptCd\" type=\"STRING\" size=\"256\"/><Column id=\"astUseDeptCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"astUseUserId\" type=\"STRING\" size=\"256\"/><Column id=\"astUseUserIdNm\" type=\"STRING\" size=\"256\"/><Column id=\"astSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"astSttsCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"astRtnDueYmd\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"rowCheck\" type=\"STRING\" size=\"256\"/><Column id=\"rowStatus\" type=\"STRING\" size=\"256\"/><Column id=\"astUseBgnYmd\" type=\"STRING\" size=\"256\"/><Column id=\"astRtnYmd\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUseYn", this);
            obj._setContents("<ColumnInfo><Column id=\"value\" type=\"STRING\" size=\"256\"/><Column id=\"text\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static02",null,"0","50","3275","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("W\r\n 50");
            obj.set_visible("false");
            obj.set_background("antiquewhite");
            obj.set_color("blue");
            this.addChild(obj.name, obj);

            obj = new Static("Static34","0","4","50","1366",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("W 50");
            obj.set_visible("false");
            obj.set_background("antiquewhite");
            obj.set_color("blue");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_02","45","379","60","10",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Div("divResisterForm","50","28",null,"1312","50",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div01");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Static("Static10_00","0","44",null,"34","0",null,null,null,null,null,this.divResisterForm.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_condition02box");
            obj.set_text("");
            this.divResisterForm.addChild(obj.name, obj);

            obj = new Static("Static10_00_00","0","77",null,"34","0",null,null,null,null,null,this.divResisterForm.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_condition02box");
            obj.set_text("");
            this.divResisterForm.addChild(obj.name, obj);

            obj = new Static("Static10_00_00_00_00","0","207",null,"268","0",null,null,null,null,null,this.divResisterForm.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_condition02box");
            obj.set_text("");
            this.divResisterForm.addChild(obj.name, obj);

            obj = new Static("staTitle","0","44","150","34",null,null,null,null,null,null,this.divResisterForm.form);
            obj.set_taborder("3");
            obj.set_text("자원번호");
            obj.set_cssclass("sta_WF_condition02_LEssential");
            this.divResisterForm.addChild(obj.name, obj);

            obj = new Static("staRqstrNm","75%","44","150","34",null,null,null,null,null,null,this.divResisterForm.form);
            obj.set_taborder("6");
            obj.set_text("별칭");
            obj.set_cssclass("sta_WF_condition02");
            this.divResisterForm.addChild(obj.name, obj);

            obj = new Edit("edtTitle","staTitle:10","48","250","26",null,null,null,null,null,null,this.divResisterForm.form);
            obj.set_taborder("4");
            obj.set_readonly("true");
            this.divResisterForm.addChild(obj.name, obj);

            obj = new Static("staAskKind","0","77","150","34",null,null,null,null,null,null,this.divResisterForm.form);
            obj.set_taborder("5");
            obj.set_text("구분");
            obj.set_cssclass("sta_WF_condition02_LEssential");
            this.divResisterForm.addChild(obj.name, obj);

            obj = new Static("staRqstCn","0","207","150","268",null,null,null,null,null,null,this.divResisterForm.form);
            obj.set_taborder("7");
            obj.set_text("사양");
            obj.set_cssclass("sta_WF_condition02_L");
            this.divResisterForm.addChild(obj.name, obj);

            obj = new TextArea("textCn","staRqstCn:-1","206",null,"269","0",null,null,null,null,null,this.divResisterForm.form);
            obj.set_taborder("8");
            obj.set_readonly("true");
            this.divResisterForm.addChild(obj.name, obj);

            obj = new Static("staEnrollTitle","0","-27",null,"58","Static10_00:-500",null,null,null,null,null,this.divResisterForm.form);
            obj.set_taborder("9");
            obj.set_text("자원현황");
            obj.set_cssclass("sta_WF_compTitle01");
            this.divResisterForm.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"10","65","28","70",null,null,null,null,null,this.divResisterForm.form);
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Save");
            obj.set_visible("true");
            obj.set_taborder("10");
            this.divResisterForm.addChild(obj.name, obj);

            obj = new Combo("cboAskKind","staAskKind:10","81","215","26",null,null,null,null,null,null,this.divResisterForm.form);
            obj.set_taborder("11");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonly("true");
            var divResisterForm_form_cboAskKind_innerdataset = new nexacro.NormalDataset("divResisterForm_form_cboAskKind_innerdataset", obj);
            divResisterForm_form_cboAskKind_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"codecolumn\">AST-020-010</Col><Col id=\"datacolumn\">회의실</Col></Row><Row><Col id=\"codecolumn\">AST-020-020</Col><Col id=\"datacolumn\">서버</Col></Row><Row><Col id=\"codecolumn\">AST-020-030</Col><Col id=\"datacolumn\">컴퓨터</Col></Row><Row><Col id=\"codecolumn\">AST-020-040</Col><Col id=\"datacolumn\">사무실비품</Col></Row></Rows>");
            obj.set_innerdataset(divResisterForm_form_cboAskKind_innerdataset);
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.divResisterForm.addChild(obj.name, obj);

            obj = new Edit("edtRqstrId","staRqstrNm:10","48","285","26",null,null,null,null,null,null,this.divResisterForm.form);
            obj.set_taborder("12");
            obj.set_readonly("true");
            this.divResisterForm.addChild(obj.name, obj);

            obj = new Static("staWorkCn","0","474","150","178",null,null,null,null,null,null,this.divResisterForm.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_condition02_L");
            obj.set_text("비고");
            this.divResisterForm.addChild(obj.name, obj);

            obj = new TextArea("textWorkCn","staWorkCn:-1","474",null,"178","0",null,null,null,null,null,this.divResisterForm.form);
            obj.set_taborder("13");
            obj.set_readonly("false");
            this.divResisterForm.addChild(obj.name, obj);

            obj = new Static("Static10_00_00_00_01_00","0","650",null,"34","0",null,null,null,null,null,this.divResisterForm.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_condition02box");
            obj.set_text("");
            this.divResisterForm.addChild(obj.name, obj);

            obj = new Static("staWorkAtchFileNm","0","650","150","34",null,null,null,null,null,null,this.divResisterForm.form);
            obj.set_taborder("16");
            obj.set_text("첨부파일");
            obj.set_cssclass("sta_WF_condition02_L");
            this.divResisterForm.addChild(obj.name, obj);

            obj = new Edit("edtWorkAtchFileNm","staWorkAtchFileNm:10","654","445","26",null,null,null,null,null,null,this.divResisterForm.form);
            obj.set_taborder("17");
            obj.set_readonly("true");
            this.divResisterForm.addChild(obj.name, obj);

            obj = new Button("btnWokrDownload","edtWorkAtchFileNm:10","654","85","26",null,null,null,null,null,null,this.divResisterForm.form);
            obj.set_taborder("18");
            obj.set_text("다운로드");
            obj.set_cssclass("btn_WF_grdArrDown");
            this.divResisterForm.addChild(obj.name, obj);

            obj = new Button("btnWorkUpload","btnWokrDownload:5","654","73","26",null,null,null,null,null,null,this.divResisterForm.form);
            obj.set_taborder("19");
            obj.set_text("업로드");
            obj.set_cssclass("btn_WF_grdUpload");
            this.divResisterForm.addChild(obj.name, obj);

            obj = new Button("btnModify","btnSave:5","10","65","28",null,null,null,null,null,null,this.divResisterForm.form);
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_icoExit");
            obj.set_visible("true");
            obj.set_taborder("20");
            this.divResisterForm.addChild(obj.name, obj);

            obj = new Static("starqstrDt00","25.00%","44","150","34",null,null,null,null,null,null,this.divResisterForm.form);
            obj.set_taborder("21");
            obj.set_text("자원명");
            obj.set_cssclass("sta_WF_condition02");
            this.divResisterForm.addChild(obj.name, obj);

            obj = new Edit("edtrqstrDt00","starqstrDt00:10","48","670","26",null,null,null,null,null,null,this.divResisterForm.form);
            obj.set_taborder("22");
            obj.set_readonly("true");
            obj.set_password("false");
            this.divResisterForm.addChild(obj.name, obj);

            obj = new Static("Static10_00_00_01","0","110",null,"34","0",null,null,null,null,null,this.divResisterForm.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_condition02box");
            obj.set_text("");
            this.divResisterForm.addChild(obj.name, obj);

            obj = new Static("staAskKind00","0","110","150","34",null,null,null,null,null,null,this.divResisterForm.form);
            obj.set_taborder("24");
            obj.set_text("최초 등록일");
            obj.set_cssclass("sta_WF_condition02_LEssential");
            this.divResisterForm.addChild(obj.name, obj);

            obj = new Calendar("calCpltDueDt00","staAskKind00:10","114","215","26",null,null,null,null,null,null,this.divResisterForm.form);
            obj.set_taborder("25");
            obj.set_displaynulltext("____-__-__");
            obj.set_dateformat("yyyyMMdd");
            obj.set_editformat("yyyyMMdd");
            obj.set_readonly("true");
            this.divResisterForm.addChild(obj.name, obj);

            obj = new Static("Static10_00_00_01_00","0","143",null,"34","0",null,null,null,null,null,this.divResisterForm.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_condition02box");
            obj.set_text("");
            this.divResisterForm.addChild(obj.name, obj);

            obj = new Static("staAskKind00_01","0","143","150","34",null,null,null,null,null,null,this.divResisterForm.form);
            obj.set_taborder("27");
            obj.set_text("관리부서");
            obj.set_cssclass("sta_WF_condition02_LEssential");
            this.divResisterForm.addChild(obj.name, obj);

            obj = new Static("staAskKind00_00_00","455","143","150","34",null,null,null,null,null,null,this.divResisterForm.form);
            obj.set_taborder("28");
            obj.set_text("관리담당자");
            obj.set_cssclass("sta_WF_condition02");
            this.divResisterForm.addChild(obj.name, obj);

            obj = new Edit("edtWorkPicNm00_00","staAskKind00_00_00:10","146","151","26",null,null,null,null,null,null,this.divResisterForm.form);
            obj.set_taborder("29");
            obj.set_readonly("true");
            this.divResisterForm.addChild(obj.name, obj);

            obj = new Static("Static10_00_00_01_00_00","0","174",null,"34","0",null,null,null,null,null,this.divResisterForm.form);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_condition02box");
            obj.set_text("");
            this.divResisterForm.addChild(obj.name, obj);

            obj = new Static("staAskKind00_01_00","0","174","150","34",null,null,null,null,null,null,this.divResisterForm.form);
            obj.set_taborder("31");
            obj.set_text("제조사");
            obj.set_cssclass("sta_WF_condition02_L");
            this.divResisterForm.addChild(obj.name, obj);

            obj = new Static("staAskKind00_01_00_00","455","174","150","34",null,null,null,null,null,null,this.divResisterForm.form);
            obj.set_taborder("32");
            obj.set_text("수량");
            obj.set_cssclass("sta_WF_condition02");
            this.divResisterForm.addChild(obj.name, obj);

            obj = new Edit("edtWorkPicNm00_00_00","staAskKind00_01_00_00:10","178","151","26",null,null,null,null,null,null,this.divResisterForm.form);
            obj.set_taborder("33");
            obj.set_readonly("false");
            this.divResisterForm.addChild(obj.name, obj);

            obj = new Combo("cboWorkType00","edtWorkPicNm00_00_00:5","178","108","26",null,null,null,null,null,null,this.divResisterForm.form);
            obj.set_taborder("34");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonly("false");
            var divResisterForm_form_cboWorkType00_innerdataset = new nexacro.NormalDataset("divResisterForm_form_cboWorkType00_innerdataset", obj);
            divResisterForm_form_cboWorkType00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"datacolumn\">EA</Col><Col id=\"codecolumn\">CMW-030-010</Col></Row><Row><Col id=\"datacolumn\">SET</Col><Col id=\"codecolumn\">CMW-030-020</Col></Row><Row><Col id=\"datacolumn\">식</Col><Col id=\"codecolumn\">CMW-030-030</Col></Row><Row><Col id=\"datacolumn\">KG</Col><Col id=\"codecolumn\">CMW-030-040</Col></Row></Rows>");
            obj.set_innerdataset(divResisterForm_form_cboWorkType00_innerdataset);
            obj.set_value("");
            obj.set_index("-1");
            this.divResisterForm.addChild(obj.name, obj);

            obj = new Edit("edtWorkPicNm00_00_01","staAskKind00_01:10","146","186","26",null,null,null,null,null,null,this.divResisterForm.form);
            obj.set_taborder("35");
            obj.set_readonly("true");
            this.divResisterForm.addChild(obj.name, obj);

            obj = new Edit("edtWorkPicNm00_00_01_00","staAskKind00_01_00:10","178","186","26",null,null,null,null,null,null,this.divResisterForm.form);
            obj.set_taborder("36");
            obj.set_readonly("true");
            this.divResisterForm.addChild(obj.name, obj);

            obj = new Static("staDetailTit","4","staWorkAtchFileNm:10","81","45",null,null,null,null,null,null,this.divResisterForm.form);
            obj.set_taborder("37");
            obj.set_text("상세정보");
            obj.set_cssclass("sta_WF_subTitle01");
            this.divResisterForm.addChild(obj.name, obj);

            obj = new Grid("grdDetailInfo","0","staDetailTit:0",null,"533","0",null,null,null,null,null,this.divResisterForm.form);
            obj.set_taborder("38");
            obj.set_binddataset("dsDetailList");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_autoupdatetype("itemselect");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\" band=\"left\"/><Column size=\"58\" band=\"left\"/><Column size=\"100\"/><Column size=\"190\"/><Column size=\"150\"/><Column size=\"195\"/><Column size=\"98\"/><Column size=\"85\"/><Column size=\"89\"/><Column size=\"89\"/><Column size=\"89\"/><Column size=\"101\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"34\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"순번\"/><Cell col=\"2\" text=\"구분\"/><Cell col=\"3\" text=\"자원 고유번호\"/><Cell col=\"4\" text=\"취득일\"/><Cell col=\"5\" text=\"사용부서\"/><Cell col=\"6\" text=\"사용자\"/><Cell col=\"7\" text=\"상태\"/><Cell col=\"8\" text=\"사용시작일\"/><Cell col=\"9\" text=\"반납예정일\"/><Cell col=\"10\" text=\"반납일\"/><Cell col=\"11\" text=\"사용여부\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" textAlign=\"center\" text=\"bind:rowCheck\"/><Cell col=\"1\" expr=\"currow+1\" text=\"expr:currow+1\" textAlign=\"center\"/><Cell col=\"2\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"none\" text=\"bind:astSrlNo\" combodatacol=\"text\" textAlign=\"center\" combocodecol=\"value\"/><Cell col=\"4\" text=\"bind:astAqstnYmd\" textAlign=\"center\" editmaxlength=\"-1\" displaytype=\"normal\" edittype=\"none\" expandshow=\"hide\" expandsize=\"16\"/><Cell col=\"5\" text=\"bind:astUseDeptCdNm\" editmaxlength=\"20\" textAlign=\"center\" displaytype=\"normal\" edittype=\"text\"/><Cell col=\"6\" text=\"bind:astUseUserIdNm\" edittype=\"text\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:astSttsCd\" edittype=\"none\" displaytype=\"normal\" combodataset=\"dsUseYn\" combocodecol=\"value\" combodatacol=\"text\" textAlign=\"left\"/><Cell col=\"8\" displaytype=\"date\" edittype=\"none\" text=\"bind:astUseBgnYmd\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"9\" text=\"bind:astRtnDueYmd\" displaytype=\"date\" edittype=\"none\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"10\" displaytype=\"date\" edittype=\"date\" calendardateformat=\"yyyy-MM-dd\" text=\"bind:astRtnYmd\"/><Cell col=\"11\" text=\"bind:useYn\" displaytype=\"normal\" edittype=\"none\" combodataset=\"dsUseYn\" combocodecol=\"value\" combodatacol=\"text\"/></Band></Format></Formats>");
            this.divResisterForm.addChild(obj.name, obj);

            obj = new Button("btnDept","edtWorkPicNm00_00_01:5","146","26","26",null,null,null,null,null,null,this.divResisterForm.form);
            obj.set_taborder("39");
            obj.set_cssclass("btn_WF_frmSearch");
            obj.set_text("");
            this.divResisterForm.addChild(obj.name, obj);

            obj = new Button("btnPic","edtWorkPicNm00_00:5","146","26","26",null,null,null,null,null,null,this.divResisterForm.form);
            obj.set_taborder("40");
            obj.set_cssclass("btn_WF_frmSearch");
            obj.set_text("");
            this.divResisterForm.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divResisterForm.form
            obj = new Layout("default","",0,0,this.divResisterForm.form,function(p){});
            this.divResisterForm.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divResisterForm.form.edtTitle","value","dsSearch","astNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divResisterForm.form.edtrqstrDt00","value","dsList","astNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divResisterForm.form.edtRqstrId","value","dsList","astAlias");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divResisterForm.form.cboAskKind","value","dsList","astDivCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divResisterForm.form.calCpltDueDt00","value","dsList","rgstDt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divResisterForm.form.edtWorkPicNm00_00_01","value","dsList","astMngDeptCdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divResisterForm.form.edtWorkPicNm00_00","value","dsList","astMngPicIdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divResisterForm.form.edtWorkPicNm00_00_01_00","value","dsList","astMftrNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divResisterForm.form.edtWorkPicNm00_00_00","value","dsList","astQty");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divResisterForm.form.cboWorkType00","value","dsList","astUom");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divResisterForm.form.textCn","value","dsList","astDesc");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divResisterForm.form.textWorkCn","value","dsList","astRmk");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("AST_1060M.xfdl","lib::common.xjs");
        this.registerScript("AST_1060M.xfdl", function() {
        /**
        *  처리 등록
        *  MenuPath
        *  FileName      AST_1060M.xfdl
        *  Creator 	     yuyr
        *  CreateDate    2023.12.15
        *  Desction      자원 현황 상세
        ************** 소스 수정 이력 ***********************************************
        *  date          Modifier    Description
        *******************************************************************************
        *  2023.12.15   yuyr 	 최초 생성
        *******************************************************************************/

        this.executeIncludeScript("lib::common.xjs"); /*include "lib::common.xjs"*/;

        var astNo = this.getOwnerFrame().tabArgs.param.astNo;
        /***********************************************************************************************
        * FORM EVENT 영역(onload, onbeforeclose)
        /***********************************************************************************************/
        /**
         * description 화면 onload
        */
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnLoad(this);
        	this.dsSearch.setColumn(0, "astNo", astNo);
        	this.fnSearch();
        };

        /************************************************************************************************
        * TRANSACTION 서비스 호출 처리
        ************************************************************************************************/
        /*
         * description 자원등록 상세조회
         */
        this.fnSearch = function()
        {
        	this.gfnTransaction("getResourcesItem", "ast/resources/getResourcesItem.do", "dsSearch", "dsList dsDetailList", "", "fnCallback");
        };

        /*
         * description 자원등록 상세조회
         */
        this.fnUpdate = function()
        {
        	this.gfnTransaction("getResourcesUpdate", "ast/resources/getResourcesUpdate.do", "dsList dsDetailList", "", "", "fnCallback");
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
                case "getResourcesItem":
                    break;
        		case "getAstRqstApply":
        			if(this.callbackMsg == "success"){
        				this.gfnAlert("CM_MSG_SAVE_SUCCESS");  	// 저장 되었습니다.
        			}else{
        				this.gfnAlert("CM_MSG_TEST_3");  		// 저장에 실패하였습니다.
        			}
                    break;
        		case "getResourcesUpdate":
        			if(this.callbackMsg == "success"){
        				this.gfnAlert("CM_MSG_SAVE_SUCCESS");  	// 저장 되었습니다.
        			}else{
        				this.gfnAlert("CM_MSG_TEST_3");  		// 저장에 실패하였습니다.
        			}
                    break;
        		case "userSearchPopupMngr":
        			var result = this.gfnGetPopupRtn();
        			if (result == null) {
        				return;     // 취소시 항목의 ID를 변경하지 않음
        			}
        			var sUser = result.user;

        			if (!result.canceled) {
        				this.dsList.setColumn(0, "astMngPicId", sUser.userId);
        				this.dsList.setColumn(0, "astMngPicIdMember", sUser.memberId);
        				this.dsList.setColumn(0, "astMngPicIdNm", sUser.userNmKr);
        			}
        			break;
        		case "deptSearchPopup":
        			var result = this.gfnGetPopupRtn();
        			if (result == null) {
        				return;     // 취소시 항목의 프로그램 ID를 변경하지 않음
        			}
        			var sDept = result.dept;

        			if (!result.canceled) {
        				this.dsList.setColumn(0, "astMngDeptCd", sDept.deptCd);  //  팝업창 sDept[0].deptCd를 "upDeptCd"에 담음
        				this.dsList.setColumn(0, "astMngDeptCdNm", sDept.deptNm);
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
         * description 자원번호 검색
        */
        this.divResisterForm_btnDeptMngr_onclick = function(obj,e)
        {
        	var args = {
                mode: "single"
            };

        	this.gfnOpenPopup("deptSearchPopup", "cmm::deptSearchPopup.xfdl", args, "fnCallback", "");
        };

        this.divResisterForm_btnPic_onclick = function(obj,e)
        {
        		const args = {
                mode: "single",
                enableReset: false
            };

        	this.gfnOpenPopup("userSearchPopupMngr", "cmm::userSearchPopup.xfdl", args, "fnCallback", "");
        };

        /**
         * description 현재 창 닫기
        */
        this.divResisterForm_btnModify_onclick = function(obj,e)
        {
        	nexacro.getApplication().closeTab(this.getOwnerFrame().tabArgs.tabId);
        };
        /************************************************************************************************
        * 사용자 FUNCTION 영역
        ************************************************************************************************/
         /**
         * description 저장 전 확인
        */
        this.fnBeforeSave = function ()
        {
        	if(this.dsList.rowcount == 0){
        		this.gfnAlert("CM_MSG_SAVE_NODATA");  	// 저장할 데이터가 없습니다.
        		return;
        	}

        	if (!this.gfnDsIsUpdated(this.dsList)) {
        		this.gfnAlert("CM_MSG_SAVE_NOCHANGE");  // 변경된 내역이 없습니다.
        		return;
        	}

             if (!this.fnValidate()) {
        		return;
            }

            this.gfnAlert("CM_CFM_BEFORE_SAVE", "", "", {trueFunc: "fnUpdate", falseFunc: ""});  // 변경된 내역을 저장 하시겠습니까?
        };

        /**
         * description 유효성 체크
        */
         this.fnValidate = function ()
         {
             if (!this.gfnDsIsUpdated(this.dsList)) {
         		this.gfnAlert("CM_MSG_SAVE_NOCHANGE");  // 변경된 내역이 없습니다.
         		return false;
             }

             var args = [
                ["astNm", "NULL|MAX_LEN:50", "자원명"]
            ];

        	if (!this.gfnCheckGrid(this.dsList, args, "")) {
                return false;
            }
        	return true;
         };


        this.btn_save_onclick = function(obj,e)
        {
        	this.fnUpdate();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.Static02.addEventHandler("onclick",this.Static02_onclick,this);
            this.Static34.addEventHandler("onclick",this.Static02_onclick,this);
            this.Static04_00_00_02.addEventHandler("onclick",this.Static31_onclick,this);
            this.divResisterForm.form.Static10_00_00_00_00.addEventHandler("onclick",this.Div01_Static10_00_00_00_00_onclick,this);
            this.divResisterForm.form.staAskKind.addEventHandler("onclick",this.Div01_Static_comboBox_onclick,this);
            this.divResisterForm.form.textCn.addEventHandler("oneditclick",this.TextArea01_oneditclick,this);
            this.divResisterForm.form.textCn.addEventHandler("onchanged",this.Div01_TextArea01_00_onchanged,this);
            this.divResisterForm.form.staEnrollTitle.addEventHandler("onclick",this.sta_title_onclick,this);
            this.divResisterForm.form.btnSave.addEventHandler("onclick",this.btn_save_onclick,this);
            this.divResisterForm.form.textWorkCn.addEventHandler("oneditclick",this.TextArea01_oneditclick,this);
            this.divResisterForm.form.textWorkCn.addEventHandler("onchanged",this.Div01_TextArea01_00_onchanged,this);
            this.divResisterForm.form.btnModify.addEventHandler("onclick",this.divResisterForm_btnModify_onclick,this);
            this.divResisterForm.form.staAskKind00.addEventHandler("onclick",this.Div01_Static_comboBox_onclick,this);
            this.divResisterForm.form.staAskKind00_01.addEventHandler("onclick",this.Div01_Static_comboBox_onclick,this);
            this.divResisterForm.form.staAskKind00_00_00.addEventHandler("onclick",this.Div01_Static_comboBox_onclick,this);
            this.divResisterForm.form.staAskKind00_01_00.addEventHandler("onclick",this.Div01_Static_comboBox_onclick,this);
            this.divResisterForm.form.staAskKind00_01_00_00.addEventHandler("onclick",this.Div01_Static_comboBox_onclick,this);
            this.divResisterForm.form.staDetailTit.addEventHandler("onclick",this.Static09_onclick,this);
            this.divResisterForm.form.grdDetailInfo.addEventHandler("onexpandup",this.divSiteResult_grdSiteList_onexpandup,this);
            this.divResisterForm.form.btnDept.addEventHandler("onclick",this.divResisterForm_btnDeptMngr_onclick,this);
            this.divResisterForm.form.btnPic.addEventHandler("onclick",this.divResisterForm_btnPic_onclick,this);
        };
        this.loadIncludeScript("AST_1060M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
