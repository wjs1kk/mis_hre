(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("hre_3010M");
            this.set_titletext("New Form");
            this.set_background("white");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,961);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static14_00","50","15","290","58",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("공통코드관리");
            obj.set_enable("true");
            obj.set_cssclass("sta_WF_compTitle01");
            this.addChild(obj.name, obj);

            obj = new Static("Static14_00_00","50","75","290","45",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("검색조건");
            obj.set_enable("true");
            obj.set_cssclass("sta_WF_subTitle01");
            this.addChild(obj.name, obj);

            obj = new Button("btn_registration",null,"20","65","28","186",null,null,null,null,null,this);
            obj.set_text("신규");
            obj.set_visible("true");
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"20","65","28","118",null,null,null,null,null,this);
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Save");
            obj.set_visible("true");
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"20","65","28","50",null,null,null,null,null,this);
            obj.set_text("조회");
            obj.set_cssclass("");
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Div("divSrch","50","125",null,null,"50","786",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("");
            obj.set_cssclass("div_WF_panel");
            this.addChild(obj.name, obj);

            obj = new Static("sta001","10","10","120","30",null,null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("0");
            obj.set_text("상위코드");
            obj.set_cssclass("sta_WF_condition01");
            this.divSrch.addChild(obj.name, obj);

            obj = new Static("sta002","452","10","100","30",null,null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("1");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_condition01");
            this.divSrch.addChild(obj.name, obj);

            obj = new Edit("edtMemberNm","742","13","290","26",null,null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("2");
            this.divSrch.addChild(obj.name, obj);

            obj = new Static("Static16_00","562","-3","20",null,null,"3",null,null,null,null,this.divSrch.form);
            obj.set_taborder("3");
            obj.set_text("w 10");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.divSrch.addChild(obj.name, obj);

            obj = new Combo("cboInOutFlag","582","13","150","26",null,null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("4");
            obj.set_innerdataset("dsInOut");
            obj.set_codecolumn("value");
            obj.set_datacolumn("text");
            obj.set_value("");
            obj.set_index("0");
            this.divSrch.addChild(obj.name, obj);

            obj = new Edit("edtMemberNm00","120","12","220","26",null,null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("5");
            this.divSrch.addChild(obj.name, obj);

            obj = new Static("Static14_00_00_00","50","205","290","45",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("검색조건");
            obj.set_enable("true");
            obj.set_cssclass("sta_WF_subTitle01");
            this.addChild(obj.name, obj);

            obj = new Static("staGridRowCnt","140","214","149","27",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("(총 0건)");
            obj.set_cssclass("sta_WF_subResult");
            this.addChild(obj.name, obj);

            obj = new Button("btn_row_add",null,"214","73","26","1523",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_Row_Add");
            this.addChild(obj.name, obj);

            obj = new Button("btn_row_delete",null,"214","73","26","1443",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_Row_Delete");
            this.addChild(obj.name, obj);

            obj = new Grid("grdDept","50","262",null,null,"1220","21",null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_binddataset("dsList");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_autoupdatetype("itemselect");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("expand,null");
            obj.set_cssclass("grd_WF_tree");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"200\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"34\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"상태\"/><Cell col=\"3\" text=\"코드명\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\" text=\"expr:currow+1\" textAlign=\"center\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" textAlign=\"center\" text=\"bind:rowCheck\"/><Cell col=\"2\" textAlign=\"center\" imagestretch=\"fit\" displaytype=\"normal\" text=\"bind:rowStatus\"/><Cell col=\"3\" text=\"bind:deptNm\" edittype=\"tree\" treelevel=\"bind:level\" textAlign=\"left\" displaytype=\"treeitemcontrol\" treecheck=\"bind:rowCheck\" treestartlevel=\"0\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("divDetail","713","205",null,"495","52",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("Div02");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Static("deptDetail","0","0","500","45",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("0");
            obj.set_text("코드정보");
            obj.set_cssclass("sta_WF_subTitle01");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static12_01_00","0","45",null,"34","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_condition02box");
            obj.set_text("");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static20_00_00","0","79",null,"34","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_condition02box");
            obj.set_text("");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static18_00","0","113",null,"34","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_condition02box");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static25_00_00","0","181",null,null,"0","25",null,null,null,null,this.divDetail.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_condition02box");
            obj.set_text("");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staUpDeptCd","0","45","151","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("5");
            obj.set_text("코드");
            obj.set_cssclass("sta_WF_condition02_LEssential");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staDeptCd","0","79","151","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("6");
            obj.set_text("상위코드");
            obj.set_cssclass("sta_WF_condition02_LEssential");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staOrdSn","0","113","151","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("7");
            obj.set_text("구분");
            obj.set_cssclass("sta_WF_condition02_LEssential");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staDeptDesc","0","315","151",null,null,"-22",null,null,null,null,this.divDetail.form);
            obj.set_taborder("8");
            obj.set_text("설명");
            obj.set_cssclass("sta_WF_condition02_L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staDeptNm","600","79","151","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("9");
            obj.set_text("부서명");
            obj.set_cssclass("sta_WF_condition02Essential");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("stauUseYn","600","113","151","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("10");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_condition02Essential");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staUpDeptNm","600","45","151","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("11");
            obj.set_text("상위부서명");
            obj.set_cssclass("sta_WF_condition02");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("editUpDeptNm","staUpDeptNm:10","49","300","26",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("12");
            obj.set_cssclass("");
            obj.set_enable("false");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("editUpDeptCd","staUpDeptCd:10","49","271","26",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("13");
            obj.set_enable("false");
            this.divDetail.addChild(obj.name, obj);

            obj = new TextArea("editDeptDesc","staDeptDesc:4","315",null,null,"16","10",null,null,null,null,this.divDetail.form);
            obj.set_taborder("14");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static12_01_00_00","0","147",null,"34","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_condition02box");
            obj.set_text("");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staDeptLdr","0","147","151","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("16");
            obj.set_text("순위");
            obj.set_cssclass("sta_WF_condition02_LEssential");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staDeptMngr","600","147","151","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("17");
            obj.set_text("부서 관리자");
            obj.set_cssclass("sta_WF_condition02");
            this.divDetail.addChild(obj.name, obj);

            obj = new Combo("comboUseYn","stauUseYn:10","117","300","26",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("18");
            obj.set_displaynulltext("선택");
            obj.set_innerdataset("dsUseYnCombo");
            obj.set_codecolumn("value");
            obj.set_datacolumn("text");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("editDeptCd","staDeptCd:10","83","300","26",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("19");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("editOrdSn","staOrdSn:10","117","300","26",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("20");
            obj.set_inputtype("digit");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("editDeptLdrNm","staDeptLdr:10","151","271","26",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("21");
            obj.set_enable("false");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("editDeptNm","staDeptNm:10","83","300","26",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("22");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("editDeptMngrNm","staDeptMngr:10","151","271","26",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("23");
            obj.set_enable("false");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnUpDeptCd","editUpDeptCd:5","49","26","26",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("24");
            obj.set_cssclass("btn_WF_frmSearch");
            obj.set_text("");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnDeptLdr","editDeptLdrNm:5","151","26","26",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("25");
            obj.set_cssclass("btn_WF_frmSearch");
            obj.set_text("");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnDeptMngr","editDeptMngrNm:5","151","26","26",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("26");
            obj.set_cssclass("btn_WF_frmSearch");
            obj.set_text("");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static12_01_00_00_00","2","187",null,"34","-2",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_condition02box");
            obj.set_text("");
            this.divDetail.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSrch.form
            obj = new Layout("default","",0,0,this.divSrch.form,function(p){});
            this.divSrch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDetail.form
            obj = new Layout("default","",0,0,this.divDetail.form,function(p){});
            this.divDetail.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1920,961,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSrch.form.calDtFrom","value","dsSearch","applyFromDt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSrch.form.calDtTo","value","dsSearch","applyToDt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSrch.form.edtMemberNm","value","dsSearch","memberNmKr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSrch.form.cboInOutFlag","value","dsSearch","inOrOutFlag");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSrch.form.cboJoinAprvStts","value","dsSearch","joinAprvStts");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSrch.form.chWhdwlYn","value","dsSearch","whdwlYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSrch.form.edtMemberNm00","value","dsSearch","memberNmKr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divDetail.form.editUpDeptCd","value","dsList","upDeptCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divDetail.form.editUpDeptNm","value","dsList","upDeptNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divDetail.form.editDeptCd","value","dsList","deptCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divDetail.form.editOrdSn","value","dsList","ordSn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divDetail.form.editDeptLdrNm","value","dsList","deptLdrNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divDetail.form.editDeptNm","value","dsList","deptNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divDetail.form.comboUseYn","value","dsList","useYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divDetail.form.editDeptMngrNm","value","dsList","deptMngrNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divDetail.form.editDeptDesc","value","dsList","deptDesc");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("hre_3010M.xfdl", function() {

        this.divDetail_staDeptLdr_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.divSrch.form.sta001.addEventHandler("onclick",this.divSearch_sta_01_onclick,this);
            this.divSrch.form.sta002.addEventHandler("onclick",this.divSearch_sta_01_onclick,this);
            this.divSrch.form.edtMemberNm.addEventHandler("onkeyup",this.divSearch_divSrch_calDtFrom_onkeyup,this);
            this.divSrch.form.cboInOutFlag.addEventHandler("onkeyup",this.divSearch_divSrch_calDtFrom_onkeyup,this);
            this.btn_row_add.addEventHandler("onclick",this.btn_row_add_onclick,this);
            this.divDetail.form.deptDetail.addEventHandler("onclick",this.Div00_Static13_onclick,this);
            this.divDetail.form.staDeptLdr.addEventHandler("onclick",this.divDetail_staDeptLdr_onclick,this);
            this.divDetail.form.btnUpDeptCd.addEventHandler("onclick",this.divDetail_btnUpDeptCd_onclick,this);
            this.divDetail.form.btnDeptLdr.addEventHandler("onclick",this.divDetail_btnDeptLdr_onclick,this);
            this.divDetail.form.btnDeptMngr.addEventHandler("onclick",this.divDetail_btnDeptMngr_onclick,this);
        };
        this.loadIncludeScript("hre_3010M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
