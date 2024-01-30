(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("AST_1020M");
            this.set_titletext("자원 등록");
            this.set_cssclass("btn_WF_Sort");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,1370);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"astNo\" type=\"STRING\" size=\"256\"/><Column id=\"astNm\" type=\"STRING\" size=\"256\"/><Column id=\"astAlias\" type=\"STRING\" size=\"256\"/><Column id=\"astDivCd\" type=\"STRING\" size=\"256\"/><Column id=\"astDivCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"rgstDt\" type=\"STRING\" size=\"256\"/><Column id=\"astMngDeptCd\" type=\"STRING\" size=\"256\"/><Column id=\"astMngDeptCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"astMngPicId\" type=\"STRING\" size=\"256\"/><Column id=\"astMngPicIdNm\" type=\"STRING\" size=\"256\"/><Column id=\"astMftrNm\" type=\"STRING\" size=\"256\"/><Column id=\"astQty\" type=\"STRING\" size=\"256\"/><Column id=\"astUom\" type=\"STRING\" size=\"256\"/><Column id=\"astDesc\" type=\"STRING\" size=\"256\"/><Column id=\"astRmk\" type=\"STRING\" size=\"256\"/><Column id=\"atchFileId\" type=\"STRING\" size=\"256\"/><Column id=\"astMngPicIdNember\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"astNo\" type=\"STRING\" size=\"256\"/><Column id=\"astMngPicId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSttsCbo", this);
            obj.set_updatecontrol("true");
            obj._setContents("<ColumnInfo><Column id=\"text\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"value\">AST-030-010</Col><Col id=\"text\">임시저장</Col></Row><Row><Col id=\"value\">AST-030-020</Col><Col id=\"text\">등록</Col></Row><Row><Col id=\"value\">AST-030-030</Col><Col id=\"text\">사용신청</Col></Row><Row><Col id=\"value\">AST-030-040</Col><Col id=\"text\">사용중</Col></Row><Row><Col id=\"value\">AST-030-050</Col><Col id=\"text\">반납완료</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDetailList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"astSrlNo\" type=\"STRING\" size=\"256\"/><Column id=\"astAqstnYmd\" type=\"STRING\" size=\"256\"/><Column id=\"astUseDeptCd\" type=\"STRING\" size=\"256\"/><Column id=\"astUseDeptCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"astUseUserId\" type=\"STRING\" size=\"256\"/><Column id=\"astUseUserIdNm\" type=\"STRING\" size=\"256\"/><Column id=\"astSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"astSttsCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"astRtnDueYmd\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"rowCheck\" type=\"STRING\" size=\"256\"/><Column id=\"rowStatus\" type=\"STRING\" size=\"256\"/><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Static("Static10_00_00_00_00","0","206",null,"268","0",null,null,null,null,null,this.divResisterForm.form);
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

            obj = new Edit("edtTitle","staTitle:10","48","215","26",null,null,null,null,null,null,this.divResisterForm.form);
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

            obj = new TextArea("textCn","staRqstCn:-1","207",null,"268","0",null,null,null,null,null,this.divResisterForm.form);
            obj.set_taborder("8");
            obj.set_readonly("false");
            this.divResisterForm.addChild(obj.name, obj);

            obj = new Static("staEnrollTitle","0","-27",null,"58","Static10_00:-500",null,null,null,null,null,this.divResisterForm.form);
            obj.set_taborder("9");
            obj.set_text("자원등록");
            obj.set_cssclass("sta_WF_compTitle01");
            this.divResisterForm.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"10","65","28","140",null,null,null,null,null,this.divResisterForm.form);
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Save");
            obj.set_visible("true");
            obj.set_taborder("10");
            this.divResisterForm.addChild(obj.name, obj);

            obj = new Button("btnDelete","btnSave:5","10","65","28",null,null,null,null,null,null,this.divResisterForm.form);
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_Delete");
            obj.set_visible("true");
            obj.set_taborder("11");
            this.divResisterForm.addChild(obj.name, obj);

            obj = new Combo("cboAskKind","staAskKind:10","81","215","26",null,null,null,null,null,null,this.divResisterForm.form);
            obj.set_taborder("12");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonly("false");
            var divResisterForm_form_cboAskKind_innerdataset = new nexacro.NormalDataset("divResisterForm_form_cboAskKind_innerdataset", obj);
            divResisterForm_form_cboAskKind_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"codecolumn\">AST-020-010</Col><Col id=\"datacolumn\">회의실</Col></Row><Row><Col id=\"codecolumn\">AST-020-020</Col><Col id=\"datacolumn\">서버</Col></Row><Row><Col id=\"codecolumn\">AST-020-030</Col><Col id=\"datacolumn\">컴퓨터</Col></Row><Row><Col id=\"codecolumn\">AST-020-040</Col><Col id=\"datacolumn\">사무실비품</Col></Row></Rows>");
            obj.set_innerdataset(divResisterForm_form_cboAskKind_innerdataset);
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.divResisterForm.addChild(obj.name, obj);

            obj = new Edit("edtRqstrId","staRqstrNm:10","48",null,"26","10",null,null,null,null,null,this.divResisterForm.form);
            obj.set_taborder("13");
            obj.set_readonly("false");
            this.divResisterForm.addChild(obj.name, obj);

            obj = new Static("staWorkCn","0","474","150","178",null,null,null,null,null,null,this.divResisterForm.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_condition02_L");
            obj.set_text("비고");
            this.divResisterForm.addChild(obj.name, obj);

            obj = new TextArea("textWorkCn","staWorkCn:-1","474",null,"178","0",null,null,null,null,null,this.divResisterForm.form);
            obj.set_taborder("14");
            this.divResisterForm.addChild(obj.name, obj);

            obj = new Static("Static10_00_00_00_01_00","0","651",null,"34","0",null,null,null,null,null,this.divResisterForm.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_condition02box");
            obj.set_text("");
            this.divResisterForm.addChild(obj.name, obj);

            obj = new Static("staWorkAtchFileNm","0","651","150","34",null,null,null,null,null,null,this.divResisterForm.form);
            obj.set_taborder("17");
            obj.set_text("첨부파일");
            obj.set_cssclass("sta_WF_condition02_L");
            this.divResisterForm.addChild(obj.name, obj);

            obj = new Edit("edtWorkAtchFileNm","staWorkAtchFileNm:10","654","445","26",null,null,null,null,null,null,this.divResisterForm.form);
            obj.set_taborder("18");
            obj.set_readonly("true");
            this.divResisterForm.addChild(obj.name, obj);

            obj = new Button("btnWokrDownload","edtWorkAtchFileNm:10","654","85","26",null,null,null,null,null,null,this.divResisterForm.form);
            obj.set_taborder("19");
            obj.set_text("다운로드");
            obj.set_cssclass("btn_WF_grdArrDown");
            this.divResisterForm.addChild(obj.name, obj);

            obj = new Button("btnWorkUpload","btnWokrDownload:5","654","73","26",null,null,null,null,null,null,this.divResisterForm.form);
            obj.set_taborder("20");
            obj.set_text("업로드");
            obj.set_cssclass("btn_WF_grdUpload");
            this.divResisterForm.addChild(obj.name, obj);

            obj = new Button("btnModify","btnDelete:5","10","65","28",null,null,null,null,null,null,this.divResisterForm.form);
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_icoExit");
            obj.set_visible("true");
            obj.set_taborder("21");
            this.divResisterForm.addChild(obj.name, obj);

            obj = new Static("starqstrDt00","25%","44","150","34",null,null,null,null,null,null,this.divResisterForm.form);
            obj.set_taborder("22");
            obj.set_text("자원명");
            obj.set_cssclass("sta_WF_condition02Essential");
            this.divResisterForm.addChild(obj.name, obj);

            obj = new Edit("edtrqstrDt00","starqstrDt00:10","48",null,"26","535",null,null,null,null,null,this.divResisterForm.form);
            obj.set_taborder("23");
            obj.set_readonly("false");
            this.divResisterForm.addChild(obj.name, obj);

            obj = new Static("Static10_00_00_01","0","110",null,"34","0",null,null,null,null,null,this.divResisterForm.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_condition02box");
            obj.set_text("");
            this.divResisterForm.addChild(obj.name, obj);

            obj = new Static("staAskKind00","0","110","150","34",null,null,null,null,null,null,this.divResisterForm.form);
            obj.set_taborder("25");
            obj.set_text("최초 등록일");
            obj.set_cssclass("sta_WF_condition02_LEssential");
            this.divResisterForm.addChild(obj.name, obj);

            obj = new Calendar("calCpltDueDt00","staAskKind00:10","114","215","26",null,null,null,null,null,null,this.divResisterForm.form);
            obj.set_taborder("26");
            obj.set_displaynulltext("____-__-__");
            obj.set_dateformat("yyyyMMdd");
            obj.set_editformat("yyyyMMdd");
            obj.set_readonly("true");
            this.divResisterForm.addChild(obj.name, obj);

            obj = new Static("Static10_00_00_01_00","0","143",null,"34","0",null,null,null,null,null,this.divResisterForm.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_condition02box");
            obj.set_text("");
            this.divResisterForm.addChild(obj.name, obj);

            obj = new Static("staAskKind00_01","0","143","150","34",null,null,null,null,null,null,this.divResisterForm.form);
            obj.set_taborder("28");
            obj.set_text("관리부서");
            obj.set_cssclass("sta_WF_condition02_L");
            this.divResisterForm.addChild(obj.name, obj);

            obj = new Static("staAskKind00_00_00","25%","143","150","34",null,null,null,null,null,null,this.divResisterForm.form);
            obj.set_taborder("29");
            obj.set_text("관리담당자");
            obj.set_cssclass("sta_WF_condition02");
            this.divResisterForm.addChild(obj.name, obj);

            obj = new Edit("edtWorkPicNm00_00","staAskKind00_00_00:10","146","151","26",null,null,null,null,null,null,this.divResisterForm.form);
            obj.set_taborder("30");
            obj.set_readonly("true");
            this.divResisterForm.addChild(obj.name, obj);

            obj = new Button("btnDeptMngr00_00","edtWorkPicNm00_00:5","146","26","26",null,null,null,null,null,null,this.divResisterForm.form);
            obj.set_taborder("31");
            obj.set_cssclass("btn_WF_frmSearch");
            obj.set_text("");
            this.divResisterForm.addChild(obj.name, obj);

            obj = new Static("Static10_00_00_01_00_00","0","174",null,"34","0",null,null,null,null,null,this.divResisterForm.form);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_condition02box");
            obj.set_text("");
            this.divResisterForm.addChild(obj.name, obj);

            obj = new Static("staAskKind00_01_00","0","174","150","34",null,null,null,null,null,null,this.divResisterForm.form);
            obj.set_taborder("33");
            obj.set_text("제조사");
            obj.set_cssclass("sta_WF_condition02_L");
            this.divResisterForm.addChild(obj.name, obj);

            obj = new Static("staAskKind00_01_00_00","25%","174","150","34",null,null,null,null,null,null,this.divResisterForm.form);
            obj.set_taborder("34");
            obj.set_text("수량");
            obj.set_cssclass("sta_WF_condition02");
            this.divResisterForm.addChild(obj.name, obj);

            obj = new Edit("edtWorkPicNm00_00_00","staAskKind00_01_00_00:10","178","151","26",null,null,null,null,null,null,this.divResisterForm.form);
            obj.set_taborder("35");
            obj.set_readonly("false");
            obj.set_inputtype("digit");
            this.divResisterForm.addChild(obj.name, obj);

            obj = new Combo("cboWorkType00","edtWorkPicNm00_00_00:5","178","108","26",null,null,null,null,null,null,this.divResisterForm.form);
            obj.set_taborder("36");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divResisterForm_form_cboWorkType00_innerdataset = new nexacro.NormalDataset("divResisterForm_form_cboWorkType00_innerdataset", obj);
            divResisterForm_form_cboWorkType00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"datacolumn\">EA</Col><Col id=\"codecolumn\">CMW-030-010</Col></Row><Row><Col id=\"datacolumn\">SET</Col><Col id=\"codecolumn\">CMW-030-020</Col></Row><Row><Col id=\"datacolumn\">식</Col><Col id=\"codecolumn\">CMW-030-030</Col></Row><Row><Col id=\"datacolumn\">KG</Col><Col id=\"codecolumn\">CMW-030-040</Col></Row></Rows>");
            obj.set_innerdataset(divResisterForm_form_cboWorkType00_innerdataset);
            obj.set_value("");
            obj.set_index("-1");
            this.divResisterForm.addChild(obj.name, obj);

            obj = new Edit("edtWorkPicNm00_00_01","staAskKind00_01:10","146","186","26",null,null,null,null,null,null,this.divResisterForm.form);
            obj.set_taborder("37");
            obj.set_readonly("true");
            this.divResisterForm.addChild(obj.name, obj);

            obj = new Button("btnDeptMngr00_00_00","edtWorkPicNm00_00_01:5","146","26","26",null,null,null,null,null,null,this.divResisterForm.form);
            obj.set_taborder("38");
            obj.set_cssclass("btn_WF_frmSearch");
            obj.set_text("");
            this.divResisterForm.addChild(obj.name, obj);

            obj = new Edit("edtWorkPicNm00_00_01_00","staAskKind00_01_00:10","178","186","26",null,null,null,null,null,null,this.divResisterForm.form);
            obj.set_taborder("39");
            obj.set_readonly("false");
            this.divResisterForm.addChild(obj.name, obj);

            obj = new Static("staDetailTit","4","staWorkAtchFileNm:10","81","45",null,null,null,null,null,null,this.divResisterForm.form);
            obj.set_taborder("40");
            obj.set_text("상세정보");
            obj.set_cssclass("sta_WF_subTitle01");
            this.divResisterForm.addChild(obj.name, obj);

            obj = new Grid("grdDetailInfo","0","staDetailTit:0",null,"533","0",null,null,null,null,null,this.divResisterForm.form);
            obj.set_taborder("41");
            obj.set_binddataset("dsDetailList");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_autoupdatetype("itemselect");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\" band=\"left\"/><Column size=\"58\" band=\"left\"/><Column size=\"58\" band=\"left\"/><Column size=\"190\"/><Column size=\"150\"/><Column size=\"195\"/><Column size=\"98\"/><Column size=\"85\"/><Column size=\"89\"/><Column size=\"101\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"34\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"순번\"/><Cell col=\"2\" text=\"상태\"/><Cell col=\"3\" text=\"자원 고유번호\"/><Cell col=\"4\" text=\"취득일\"/><Cell col=\"5\" text=\"사용부서\"/><Cell col=\"6\" text=\"사용자\"/><Cell col=\"7\" text=\"상태\"/><Cell col=\"8\" text=\"반납예정일\"/><Cell col=\"9\" text=\"사용여부\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" textAlign=\"center\" text=\"bind:rowCheck\"/><Cell col=\"1\" expr=\"currow+1\" text=\"expr:currow+1\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:rowStatus\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"none\" text=\"bind:astSrlNo\" combodatacol=\"text\" textAlign=\"center\" combocodecol=\"value\"/><Cell col=\"4\" text=\"bind:astAqstnYmd\" textAlign=\"center\" editmaxlength=\"-1\" displaytype=\"date\" edittype=\"date\" expandshow=\"hide\" expandsize=\"16\" calendardateformat=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\"/><Cell col=\"5\" text=\"bind:astUseDeptCdNm\" editmaxlength=\"20\" textAlign=\"center\" displaytype=\"normal\" expandshow=\"show\" expandsize=\"26\"/><Cell col=\"6\" text=\"bind:astUseUserIdNm\" edittype=\"none\" displaytype=\"normal\" combodataset=\"dsPowCbo\" combodatacol=\"text\" textAlign=\"center\" combocodecol=\"value\" expandshow=\"show\" expandsize=\"26\"/><Cell col=\"7\" text=\"bind:astSttsCd\" edittype=\"none\" displaytype=\"combotext\" combocodecol=\"value\" combodatacol=\"text\" textAlign=\"center\" combodataset=\"dsSttsCbo\"/><Cell col=\"8\" text=\"bind:astRtnDueYmd\" displaytype=\"date\" edittype=\"date\" calendardateformat=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\"/><Cell col=\"9\" text=\"bind:useYn\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"dsUseYn\" combocodecol=\"value\" combodatacol=\"text\"/></Band></Format></Formats>");
            this.divResisterForm.addChild(obj.name, obj);

            obj = new Button("btnAddRowGroup",null,"703","73","26","77",null,null,null,null,null,this.divResisterForm.form);
            obj.set_taborder("42");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_Row_Add");
            this.divResisterForm.addChild(obj.name, obj);

            obj = new Button("btnDeleteRowGroup","btnAddRowGroup:5","703",null,"26","0",null,null,null,null,null,this.divResisterForm.form);
            obj.set_taborder("43");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_Row_Delete");
            this.divResisterForm.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divResisterForm.form
            obj = new Layout("default","",0,0,this.divResisterForm.form,function(p){});
            this.divResisterForm.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divResisterForm.form.edtTitle","value","dsList","astNo");
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

            obj = new BindItem("item4","divResisterForm.form.edtWorkPicNm00_00_01","value","dsList","astMngDeptCdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divResisterForm.form.edtWorkPicNm00_00","value","dsList","astMngPicIdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divResisterForm.form.edtWorkPicNm00_00_01_00","value","dsList","astMftrNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divResisterForm.form.edtWorkPicNm00_00_00","value","dsList","astQty");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divResisterForm.form.cboWorkType00","value","dsList","astUom");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divResisterForm.form.textCn","value","dsList","astDesc");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divResisterForm.form.textWorkCn","value","dsList","astRmk");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divResisterForm.form.edtWorkAtchFileNm","value","dsList","atchFileId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divResisterForm.form.calCpltDueDt00","value","dsList","rgstDt");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("AST_1020M.xfdl","lib::common.xjs");
        this.registerScript("AST_1020M.xfdl", function() {
        /**
        *  자원 등록
        *  MenuPath      자원 > 자원 등록
        *  FileName      AST_1020M.xfdl
        *  Creator 	     yuyr
        *  CreateDate    2023.12.07
        *  Desction      배너 조회 및 등록
        ************** 소스 수정 이력 ***********************************************
        *  date          Modifier    Description
        *******************************************************************************
        *  2023.12.7   yuyr 	 최초 생성
        *******************************************************************************/

        this.executeIncludeScript("lib::common.xjs"); /*include "lib::common.xjs"*/;

        this.astNo = "";

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
        	this.astNo = (param == null || Eco.isEmpty(param.astNo)) ? null : param.astNo;

        	this.dsSearch.setColumn(0, "astNo", this.astNo);

        	if(this.astNo != null){
        		this.fnSearch();
        	} else if(this.astNo == null){
        		const today = Ex.util.getToday();
        		this.dsList.setColumn(0, "rgstDt", today);
        	}

        	this.fnLoadCombo();
        };

        /************************************************************************************************
        * TRANSACTION 서비스 호출 처리
        ************************************************************************************************/
        /**
         * description 콤보 loadCombo
        */
        this.fnLoadCombo = function ()
        {
        	this.gfnLoadCombo("loadCombo", "dsUseYn=SM:USE_YN:C", "fnComboCallback");
        };

        /**
         * description 자원등록 상세조회
         */
        this.fnSearch = function()
        {
        	this.gfnTransaction("getResourcesItem", "ast/resources/getResourcesItem.do", "dsSearch", "dsList dsDetailList", "", "fnCallback");
        };

        /**
         * description 자원등록 입력 및 저장
         */
        this.fnSave = function()
        {
        	this.gfnTransaction("setResourcesManage","ast/resources/setResourcesManage.do", "dsList dsDetailList", "", "", "fnCallback");
        };

        /**
         * description 삭제
         */
         this.fnDelete = function()
        {
        //	this.dsList.setColumn(0, "rowStatus", "deleted");
        	this.gfnTransaction("deleteResourcesManage", "ast/resources/deleteResourcesManage.do", "dsDetailList dsList", "", "", "fnCallback");
        };

        /************************************************************************************************
         * CALLBACK 콜백 처리부분(Transaction, Popup)
         ************************************************************************************************/
         /**
         * description 콤보 loadCombo
        */

        this.fnComboCallback = function (svcId, errorCode, errorMsg)
        {
        	switch(svcId) {
        		case "loadCombo":
        			if(this.astNo != null && this.astNo != "") {
        				this.fnSearch();
        			}
        			break;
        		default:
        			break;
        	}
        };

        /**
         * description Transaction CallBack 함수
        */
        this.fnCallback = function (svcId, errorCode, errorMsg)
        {
            switch (svcId) {
                case "getResourcesItem":
                    break;
        		case "setResourcesManage":
        			if(this.callbackMsg == "success"){
        				this.gfnAlert("CM_MSG_SAVE_SUCCESS");  	// 저장 되었습니다.
        				this.fnSearch();
        			}else{
        				this.gfnAlert("CM_MSG_TEST_3");  		// 저장에 실패하였습니다.
        			}
                    break;
        		case "deleteResourcesManage":
        			if(this.callbackMsg == "success"){
                        this.gfnAlert("CM_MSG_DELETE_SUCCESS");  // 삭제 되었습니다.
        			nexacro.getApplication().closeTab(this.getOwnerFrame().tabArgs.tabId);
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

        /**
         * description Popup CallBack Detail 사용부서, 사용자 불러오기
         */

        this.fnPopupClosed = function (popupId, args)
        {
            switch (popupId) {
        		case "useDeptPopup":
        			var result = this.gfnGetPopupRtn();
        			if (result == null) {
        				return;     // 취소시 항목의 프로그램 ID를 변경하지 않음
        			}
        			var uDept = result.dept;

        			if (!result.canceled) {
        				this.dsDetailList.setColumn(this.dsDetailList.rowposition, "astUseDeptCd", uDept.deptCd);
        				this.dsDetailList.setColumn(this.dsDetailList.rowposition, "astUseDeptCdNm", uDept.deptNm);
        			}
        			break;
        		case "userPopup":
        			var result = this.gfnGetPopupRtn();
        			if (result == null) {
        				return;     // 취소시 항목의 프로그램 ID를 변경하지 않음
        			}
        			var uUser = result.user;

        			if (!result.canceled) {
        				this.dsDetailList.setColumn(this.dsDetailList.rowposition, "astUseUserId", uUser.userId);
        				this.dsDetailList.setColumn(this.dsDetailList.rowposition, "astUseDeptCdMember", uUser.memberId);
        				this.dsDetailList.setColumn(this.dsDetailList.rowposition, "astUseUserIdNm", uUser.userNmKr);
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
         * description 저장 버튼 클릭
        */
        this.btn_save_onclick = function(obj,e)
         {
        	this.fnBeforeSave();
         };

        /**
         * description 닫기 버튼 클릭
        */
        this.divResisterForm_btnModify_onclick = function(obj,e)
        {
        	nexacro.getApplication().closeTab(this.getOwnerFrame().tabArgs.tabId); // 탭 닫기
        };


        /**
         * description 삭제 버튼 클릭
        */
        this.btn_delete_onclick = function(obj,e)
        {
        	this.gfnAlert("CM_CFM_DELETE", "", "", {trueFunc: "fnDelete", falseFunc: ""}); // 삭제하시겠습니까?
        };

        /**
         * description 관리 부서 추가 버튼
        */
        this.divResisterForm_btnDeptMngr_onclick = function(obj,e)
        {
        	var args = {
                mode: "single"
            };

        	this.gfnOpenPopup("deptSearchPopup", "cmm::deptSearchPopup.xfdl", args, "fnCallback", "");
        };

        /**
         * description 관리 담당자 추가 버튼
        */

        this.divResisterForm_btnDeptMngr00_00_onclick = function(obj,e)
        {
        	const args = {
                mode: "single",
                enableReset: false
            };

        	this.gfnOpenPopup("userSearchPopupMngr", "cmm::userSearchPopup.xfdl", args, "fnCallback", "");
        };

        /**
         * description Detail 사용부서 추가 버튼
        */
        this.divSiteResult_grdSiteList_onexpandup = function(obj, e) {

        	if(e.col == 5) {
                var args = {
                    mode: "single",
                    progId: this.dsDetailList.getColumn(this.dsDetailList.rowposition, "astNo"),
                    sysId: this.dsSearch.getColumn(0, "astNo")
                };
                this.gfnOpenPopup("useDeptPopup", "cmm::deptSearchPopup.xfdl", args, "fnPopupClosed");
        	} else if(e.col == 6){
                const uArgs = {
                    mode: "single",
                    enableReset: false
                };
                this.gfnOpenPopup("userPopup", "cmm::userSearchPopup.xfdl", uArgs, "fnPopupClosed");
        	}
        };

        /************************************************************************************************
        * 사용자 FUNCTION 영역
        ************************************************************************************************/
         /**
         * description 열 추가
        */
        this.divCode_btnAddRowGroup_onclick = function(obj,e)
        {
        	this.gfnInsertRow(this.dsDetailList, "last");
        };

         /**
         * description 열 삭제
        */
        this.divCode_btnDeleteRowGroup_onclick = function(obj,e)
        {
        	this.gfnDeleteRow(this.dsDetailList);
        };

        /**
         * description 저장 전 확인
        */
        this.fnBeforeSave = function () {
            if (this.dsList.rowcount == 0) {
                this.gfnAlert("CM_MSG_SAVE_NODATA");  	// 저장할 데이터가 없습니다.
                return;
            }

            if (!this.gfnDsIsUpdated(this.dsList) && !this.gfnDsIsUpdated(this.dsDetailList)) {
                this.gfnAlert("CM_MSG_SAVE_NOCHANGE");  // 변경된 내역이 없습니다.
                return;
            }

            if (!this.fnValidate()) {
                return;
            }

            this.gfnAlert("CM_CFM_BEFORE_SAVE", "", "", { trueFunc: "fnSave", falseFunc: "" });  // 변경된 내역을 저장 하시겠습니까?
        };


        /**
         * description 유효성 체크
        */
        this.fnValidate = function () {
            var resourceArgs = [
                ["astNm", "NULL|MAX_LEN:50", "자원명"]
            ];

            var detailArgs = [
                ["astAqstnYmd", "NULL|MAX_LEN:8", "취득일"]
            ];

            if (!this.gfnCheckGrid(this.dsList, resourceArgs, "")) {
                return false;
            }

            if (!this.gfnCheckGrid(this.dsDetailList, detailArgs, "")) {
                return false;
            }

            return true;
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
            this.divResisterForm.form.btnDelete.addEventHandler("onclick",this.btn_delete_onclick,this);
            this.divResisterForm.form.textWorkCn.addEventHandler("oneditclick",this.TextArea01_oneditclick,this);
            this.divResisterForm.form.textWorkCn.addEventHandler("onchanged",this.Div01_TextArea01_00_onchanged,this);
            this.divResisterForm.form.btnModify.addEventHandler("onclick",this.divResisterForm_btnModify_onclick,this);
            this.divResisterForm.form.staAskKind00.addEventHandler("onclick",this.Div01_Static_comboBox_onclick,this);
            this.divResisterForm.form.calCpltDueDt00.addEventHandler("onchanged",this.divResisterForm_calCpltDueDt00_onchanged,this);
            this.divResisterForm.form.staAskKind00_01.addEventHandler("onclick",this.Div01_Static_comboBox_onclick,this);
            this.divResisterForm.form.staAskKind00_00_00.addEventHandler("onclick",this.Div01_Static_comboBox_onclick,this);
            this.divResisterForm.form.btnDeptMngr00_00.addEventHandler("onclick",this.divResisterForm_btnDeptMngr00_00_onclick,this);
            this.divResisterForm.form.staAskKind00_01_00.addEventHandler("onclick",this.Div01_Static_comboBox_onclick,this);
            this.divResisterForm.form.staAskKind00_01_00_00.addEventHandler("onclick",this.Div01_Static_comboBox_onclick,this);
            this.divResisterForm.form.btnDeptMngr00_00_00.addEventHandler("onclick",this.divResisterForm_btnDeptMngr_onclick,this);
            this.divResisterForm.form.staDetailTit.addEventHandler("onclick",this.Static09_onclick,this);
            this.divResisterForm.form.grdDetailInfo.addEventHandler("onexpandup",this.divSiteResult_grdSiteList_onexpandup,this);
            this.divResisterForm.form.btnAddRowGroup.addEventHandler("onclick",this.divCode_btnAddRowGroup_onclick,this);
            this.divResisterForm.form.btnDeleteRowGroup.addEventHandler("onclick",this.divCode_btnDeleteRowGroup_onclick,this);
        };
        this.loadIncludeScript("AST_1020M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
