(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DEPT_1010M");
            this.set_titletext("부서 관리");
            this.set_cssclass("frm_WF_comp");
            this.set_enable("true");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"SCH_UP_COMM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SCH_KEY\" type=\"STRING\" size=\"256\"/><Column id=\"SCH_STR\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_commCd", this);
            obj._setContents("<ColumnInfo><Column id=\"isChecked\" type=\"STRING\" size=\"256\"/><Column id=\"tmHeader\" type=\"STRING\" size=\"256\"/><Column id=\"COMM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COMM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"COMM_ENG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"UP_COMM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ETC1\" type=\"STRING\" size=\"256\"/><Column id=\"ETC2\" type=\"STRING\" size=\"256\"/><Column id=\"ETC3\" type=\"STRING\" size=\"256\"/><Column id=\"ETC4\" type=\"STRING\" size=\"256\"/><Column id=\"ETC5\" type=\"STRING\" size=\"256\"/><Column id=\"ETC6\" type=\"STRING\" size=\"256\"/><Column id=\"ETC7\" type=\"STRING\" size=\"256\"/><Column id=\"ETC8\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"RMK\" type=\"STRING\" size=\"256\"/><Column id=\"SYS_CD_CLS\" type=\"STRING\" size=\"256\"/><Column id=\"CLS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ORD_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_IDEN\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_VALE\" type=\"STRING\" size=\"256\"/><Column id=\"INS_ID\" type=\"STRING\" size=\"256\"/><Column id=\"INS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"INS_DT\" type=\"STRING\" size=\"256\"/><Column id=\"UPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"UPT_DT\" type=\"STRING\" size=\"256\"/><Column id=\"LEV\" type=\"STRING\" size=\"256\"/><Column id=\"TREE_STATE\" type=\"STRING\" size=\"256\"/><Column id=\"COMM_CDNM\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_COMM_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_commDnCd", this);
            obj._setContents("<ColumnInfo><Column id=\"isChecked\" type=\"STRING\" size=\"256\"/><Column id=\"tmHeader\" type=\"STRING\" size=\"256\"/><Column id=\"COMM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COMM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"COMM_ENG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"UP_COMM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ETC1\" type=\"STRING\" size=\"256\"/><Column id=\"ETC2\" type=\"STRING\" size=\"256\"/><Column id=\"ETC3\" type=\"STRING\" size=\"256\"/><Column id=\"ETC4\" type=\"STRING\" size=\"256\"/><Column id=\"ETC5\" type=\"STRING\" size=\"256\"/><Column id=\"ETC6\" type=\"STRING\" size=\"256\"/><Column id=\"ETC7\" type=\"STRING\" size=\"256\"/><Column id=\"ETC8\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"RMK\" type=\"STRING\" size=\"256\"/><Column id=\"SYS_CD_CLS\" type=\"STRING\" size=\"256\"/><Column id=\"CLS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ORD_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_IDEN\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_VALE\" type=\"STRING\" size=\"256\"/><Column id=\"INS_ID\" type=\"STRING\" size=\"256\"/><Column id=\"INS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"INS_DT\" type=\"STRING\" size=\"256\"/><Column id=\"UPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"UPT_DT\" type=\"STRING\" size=\"256\"/><Column id=\"LEV\" type=\"STRING\" size=\"256\"/><Column id=\"TREE_STATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_useYn", this);
            obj._setContents("<ColumnInfo><Column id=\"COMM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COMM_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COMM_CD\">Y</Col><Col id=\"COMM_NM\">사용</Col></Row><Row><Col id=\"COMM_CD\">N</Col><Col id=\"COMM_NM\">미사용</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_commUpCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COMM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COMM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CLS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("mainTitle","50","0","500","58",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("공통코드관리");
            obj.set_cssclass("sta_WF_compTitle01");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"20","65","28","50",null,null,null,null,null,this);
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Save");
            obj.set_visible("true");
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Div("divResult","50","73","650","617",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Grid("grdDept","0","49",null,null,"0","0",null,null,null,null,this.divResult.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_commCd");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_autoupdatetype("itemselect");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("expand,null");
            obj.set_cssclass("grd_WF_tree");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"304\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"NO\"/><Cell col=\"1\" text=\"코드명\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:COMM_NM\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:LEV\" treestate=\"bind:TREE_STATE\"/></Band></Format></Formats>");
            this.divResult.addChild(obj.name, obj);

            obj = new Static("deptList","9","9","81","45",null,null,null,null,null,null,this.divResult.form);
            obj.set_taborder("1");
            obj.set_text("부서목록");
            obj.set_cssclass("sta_WF_subTitle01");
            obj.set_fittocontents("width");
            this.divResult.addChild(obj.name, obj);

            obj = new Static("staGridRowCnt","deptList:10","9","149","45",null,null,null,null,null,null,this.divResult.form);
            obj.set_taborder("2");
            obj.set_text("(총 0건)");
            obj.set_cssclass("sta_WF_subResult");
            this.divResult.addChild(obj.name, obj);

            obj = new Button("btnAddSiblingRow",null,"9","94","26","105",null,null,null,null,null,this.divResult.form);
            obj.set_taborder("3");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_Row_Add");
            this.divResult.addChild(obj.name, obj);

            obj = new Button("btnAddRow","550","9","94","26",null,null,null,null,null,null,this.divResult.form);
            obj.set_taborder("4");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_Row_Delete");
            this.divResult.addChild(obj.name, obj);

            obj = new Div("divDetail","790","73",null,"357","50",null,null,null,null,null,this);
            obj.set_taborder("3");
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

            obj = new Static("staUpDeptCd","0","45","151","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("4");
            obj.set_text("코드");
            obj.set_cssclass("sta_WF_condition02_LEssential");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staDeptCd","0","79","151","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("5");
            obj.set_text("상위코드");
            obj.set_cssclass("sta_WF_condition02");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staOrdSn","0","113","151","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("6");
            obj.set_text("구분");
            obj.set_cssclass("sta_WF_condition02");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staDeptNm","454","79","151","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("7");
            obj.set_text("코드영문명");
            obj.set_cssclass("sta_WF_condition02");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("stauUseYn","454","113","151","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("8");
            obj.set_text("기타1");
            obj.set_cssclass("sta_WF_condition02");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staUpDeptNm","454","45","151","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("9");
            obj.set_text("코드명");
            obj.set_cssclass("sta_WF_condition02Essential");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("editUpDeptNm","staUpDeptNm:10","49","300","26",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("10");
            obj.set_cssclass("");
            obj.set_enable("false");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("editUpDeptCd","staUpDeptCd:10","49","271","26",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("11");
            obj.set_enable("false");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static12_01_00_00","0","147",null,"34","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_condition02box");
            obj.set_text("");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staDeptLdr","0","147","151","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("13");
            obj.set_text("순위");
            obj.set_cssclass("sta_WF_condition02");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staDeptMngr","454","147","151","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("14");
            obj.set_text("기타2");
            obj.set_cssclass("sta_WF_condition02");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("editDeptCd","staDeptCd:10","83","271","26",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("15");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("editOrdSn","staOrdSn:10","117","271","26",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("16");
            obj.set_inputtype("digit");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("editDeptLdrNm","staDeptLdr:10","151","271","26",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("17");
            obj.set_enable("true");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("editDeptNm","staDeptNm:10","83","300","26",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("18");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("editDeptMngrNm","staDeptMngr:10","151","125","26",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("19");
            obj.set_enable("true");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("Edit00","615","117","125","26",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("20");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("stauUseYn00","750","113","151","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("21");
            obj.set_text("기타5");
            obj.set_cssclass("sta_WF_condition02");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("Edit00_00","911","117","125","26",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("22");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("stauUseYn00_00","750","146","151","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("23");
            obj.set_text("기타6");
            obj.set_cssclass("sta_WF_condition02");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00","911","151","125","26",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("24");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static12_01_00_00_00","0","180",null,"34","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_condition02box");
            obj.set_text("");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staDeptLdr00","0","180","151","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("26");
            obj.set_text("참조코드");
            obj.set_cssclass("sta_WF_condition02");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("editDeptLdrNm00","161","184","271","26",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("27");
            obj.set_enable("true");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staDeptMngr00","454","180","151","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("28");
            obj.set_text("기타3");
            obj.set_cssclass("sta_WF_condition02");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("editDeptMngrNm00","615","184","125","26",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("29");
            obj.set_enable("true");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("stauUseYn00_00_00","750","180","151","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("30");
            obj.set_text("기타7");
            obj.set_cssclass("sta_WF_condition02");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_00","911","184","125","26",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("31");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static12_01_00_00_00_00","0","213",null,"34","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_condition02box");
            obj.set_text("");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staDeptLdr00_00","-1","213","151","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("33");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_condition02");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("editDeptLdrNm00_00","161","217","271","26",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("34");
            obj.set_enable("true");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staDeptMngr00_00","454","213","151","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("35");
            obj.set_text("기타4");
            obj.set_cssclass("sta_WF_condition02");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("editDeptMngrNm00_00","618","217","125","26",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("36");
            obj.set_enable("true");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("stauUseYn00_00_00_00","750","213","151","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("37");
            obj.set_text("기타8");
            obj.set_cssclass("sta_WF_condition02");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_00_00","911","217","125","26",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("38");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static12_01_00_00_00_00_00","-1","246",null,"111","1",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("39");
            obj.set_cssclass("sta_WF_condition02box");
            obj.set_text("");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staDeptLdr00_00_00","-1","246","151","111",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("40");
            obj.set_text("내용");
            obj.set_cssclass("sta_WF_condition02");
            this.divDetail.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","161","253","875","95",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("41");
            this.divDetail.addChild(obj.name, obj);

            obj = new Grid("Grid00","790","467","1080","223",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("ds_commDnCd");
            obj.set_cellmovingtype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"140\"/><Column size=\"90\"/><Column size=\"40\"/><Column size=\"70\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"90\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"NO\"/><Cell col=\"1\" text=\"isChecked\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"상태\"/><Cell col=\"3\" text=\"코드\"/><Cell col=\"4\" text=\"상위코드\"/><Cell col=\"5\" text=\"코드명\"/><Cell col=\"6\" text=\"참조코드\"/><Cell col=\"7\" text=\"순위\"/><Cell col=\"8\" text=\"사용여부\"/><Cell col=\"9\" text=\"설명\"/><Cell col=\"10\" text=\"코드영문명\"/><Cell col=\"11\" text=\"구분\"/><Cell col=\"12\" text=\"레벨\"/><Cell col=\"13\" text=\"기타1\"/><Cell col=\"14\" text=\"기타2\"/><Cell col=\"15\" text=\"기타3\"/><Cell col=\"16\" text=\"기타4\"/><Cell col=\"17\" text=\"기타5\"/><Cell col=\"18\" text=\"기타6\"/><Cell col=\"19\" text=\"기타7\"/><Cell col=\"20\" text=\"기타8\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:isChecked\"/><Cell col=\"2\" text=\"bind:tmHeader\"/><Cell col=\"3\" text=\"bind:COMM_CD\" tooltiptext=\"bind:COMM_CD\"/><Cell col=\"4\" text=\"bind:UP_COMM_CD\" tooltiptext=\"bind:UP_COMM_CD\"/><Cell col=\"5\" text=\"bind:COMM_NM\" tooltiptext=\"bind:COMM_NM\"/><Cell col=\"6\" text=\"bind:REF_CD\" tooltiptext=\"bind:REF_CD\"/><Cell col=\"7\" text=\"bind:ORD_NO\"/><Cell col=\"8\" text=\"bind:USE_YN\"/><Cell col=\"9\" text=\"bind:RMK\"/><Cell col=\"10\" text=\"bind:COMM_ENG_NM\" tooltiptext=\"bind:COMM_ENG_NM\"/><Cell col=\"11\" text=\"bind:CLS_CD\" tooltiptext=\"bind:CLS_CD\"/><Cell col=\"12\" text=\"bind:LEV\" tooltiptext=\"bind:LEV\"/><Cell col=\"13\" text=\"bind:ETC1\" tooltiptext=\"bind:ETC1\"/><Cell col=\"14\" text=\"bind:ETC2\" tooltiptext=\"bind:ETC2\"/><Cell col=\"15\" text=\"bind:ETC3\" tooltiptext=\"bind:ETC3\"/><Cell col=\"16\" text=\"bind:ETC4\" tooltiptext=\"bind:ETC4\"/><Cell col=\"17\" text=\"bind:ETC5\" tooltiptext=\"bind:ETC5\"/><Cell col=\"18\" text=\"bind:ETC6\" tooltiptext=\"bind:ETC6\"/><Cell col=\"19\" text=\"bind:ETC7\" tooltiptext=\"bind:ETC7\"/><Cell col=\"20\" text=\"bind:ETC8\" tooltiptext=\"bind:ETC8\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("deptDetail","789","431","500","45",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("하위코드");
            obj.set_cssclass("sta_WF_subTitle01");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divResult.form
            obj = new Layout("default","",0,0,this.divResult.form,function(p){});
            this.divResult.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDetail.form
            obj = new Layout("default","",0,0,this.divDetail.form,function(p){});
            this.divDetail.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1920,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divResult.form.editDeptNm","value","dsSearch","deptNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divDetail.form.editUpDeptCd","value","dsList","upDeptCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divDetail.form.editUpDeptNm","value","dsList","upDeptNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divDetail.form.editDeptCd","value","dsList","deptCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divDetail.form.editOrdSn","value","dsList","ordSn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divDetail.form.editDeptLdrNm","value","dsList","deptLdrNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divDetail.form.editDeptNm","value","dsList","deptNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divDetail.form.comboUseYn","value","dsList","useYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divDetail.form.editDeptMngrNm","value","dsList","deptMngrNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divDetail.form.editDeptDesc","value","dsList","deptDesc");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divDetail.form.editDeptLdrNm00","value","dsList","deptLdrNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divDetail.form.editDeptMngrNm00","value","dsList","deptMngrNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divDetail.form.editDeptLdrNm00_00","value","dsList","deptLdrNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divDetail.form.editDeptMngrNm00_00","value","dsList","deptMngrNm");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("hre3010M.xfdl","lib::common.xjs");
        this.registerScript("hre3010M.xfdl", function() {
        /**
         *  관리 메뉴
         *  MenuPath      조직정보 - 부서관리
         *  FileName      DEPT_1010M.xfdl
         *  Creator 	  woohj
         *  CreateDate    2023.11.20
         *  Desction      관리 메뉴
         ************** 소스 수정 이력 ***********************************************
         *  date          Modifier    Description
         *******************************************************************************
         *  2023.11.20    woohj      최초 생성
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
        };

        /************************************************************************************************
         * TRANSACTION 서비스 호출 처리
         ************************************************************************************************/

        /**
         * description 콤보 loadCombo
        */
        this.fnLoadCombo = function ()
        {
        	this.gfnLoadCombo("loadCombo", "dsUseYnCombo=SM:USE_YN:C", "fnComboCallback");
        };

        /**
         * description 조회
        */
        this.fnSearch = function()
        {
        	var strSvcId    = "getDeptManageList";
        	var strSvcUrl   = "org/deptManage/getDeptManageList.do";
        	var inData      = "dsSearch";
        	var outData     = "dsList";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId,strSvcUrl, inData,outData, strArg, callBackFnc, isAsync);
        };

        /**
         * description 저장
        */
        this.fnSave = function ()
        {
        	var strSvcId    = "saveDeptManageList";
        	var strSvcUrl   = "org/deptManage/saveDeptManageList.do";
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





        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/

        /************************************************************************************************
        * 사용자 FUNCTION 영역
        ************************************************************************************************/

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnSave.addEventHandler("onclick",this.btnSave_onclick,this);
            this.divResult.form.deptList.addEventHandler("onclick",this.Static09_onclick,this);
            this.divResult.form.btnAddSiblingRow.addEventHandler("onclick",this.divResult_btnAddSiblingRow_onclick,this);
            this.divResult.form.btnAddRow.addEventHandler("onclick",this.divResult_btnAddRow_onclick,this);
            this.divDetail.form.deptDetail.addEventHandler("onclick",this.Div00_Static13_onclick,this);
            this.deptDetail.addEventHandler("onclick",this.Div00_Static13_onclick,this);
        };
        this.loadIncludeScript("hre3010M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
