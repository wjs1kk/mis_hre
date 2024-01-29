(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ROLE_1020M");
            this.set_titletext("권한별 메뉴관리");
            this.set_cssclass("frm_WF_comp");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,1000);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj.set_updatecontrol("true");
            obj._setContents("<ColumnInfo><Column id=\"roleCode\" type=\"STRING\" size=\"256\"/><Column id=\"roleNm\" type=\"STRING\" size=\"256\"/><Column id=\"moduleId\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"searchRoleCode\" type=\"STRING\" size=\"256\"/><Column id=\"sysId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRole", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"rowCheck\" type=\"STRING\" size=\"256\"/><Column id=\"rowStatus\" type=\"STRING\" size=\"256\"/><Column id=\"roleCode\" type=\"STRING\" size=\"256\"/><Column id=\"sysId\" type=\"STRING\" size=\"256\"/><Column id=\"moduleId\" type=\"STRING\" size=\"256\"/><Column id=\"roleNm\" type=\"STRING\" size=\"256\"/><Column id=\"roleDc\" type=\"STRING\" size=\"256\"/><Column id=\"rolePermit\" type=\"STRING\" size=\"256\"/><Column id=\"workGrpId\" type=\"STRING\" size=\"256\"/><Column id=\"useYmd\" type=\"DATE\" size=\"256\"/><Column id=\"endYmd\" type=\"DATE\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"rgstId\" type=\"STRING\" size=\"256\"/><Column id=\"rgstDt\" type=\"STRING\" size=\"256\"/><Column id=\"rgstIp\" type=\"STRING\" size=\"256\"/><Column id=\"rgstNm\" type=\"STRING\" size=\"256\"/><Column id=\"updtId\" type=\"STRING\" size=\"256\"/><Column id=\"updtIp\" type=\"STRING\" size=\"256\"/><Column id=\"updtDt\" type=\"STRING\" size=\"256\"/><Column id=\"updtNm\" type=\"STRING\" size=\"256\"/><Column id=\"level\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRoleMenu", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"rowCheck\" type=\"STRING\" size=\"256\"/><Column id=\"rowStatus\" type=\"STRING\" size=\"256\"/><Column id=\"level\" type=\"INT\" size=\"256\"/><Column id=\"treeKey\" type=\"STRING\" size=\"52\"/><Column id=\"treeUpper\" type=\"STRING\" size=\"52\"/><Column id=\"treeText\" type=\"STRING\" size=\"300\"/><Column id=\"description\" type=\"STRING\" size=\"3000\"/><Column id=\"sortOrdr\" type=\"INT\" size=\"256\"/><Column id=\"funcAt\" type=\"STRING\" size=\"1\"/><Column id=\"authYn\" type=\"STRING\" size=\"1\"/><Column id=\"roleCode\" type=\"STRING\" size=\"50\"/><Column id=\"useYn\" type=\"STRING\" size=\"1\"/><Column id=\"sysId\" type=\"STRING\" size=\"20\"/><Column id=\"menuId\" type=\"STRING\" size=\"256\"/><Column id=\"funcId\" type=\"STRING\" size=\"256\"/><Column id=\"indctYn\" type=\"STRING\" size=\"256\"/><Column id=\"funcCnt\" type=\"INT\" size=\"256\"/><Column id=\"authCnt\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsModuleCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"text\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUseYn", this);
            obj._setContents("<ColumnInfo><Column id=\"value\" type=\"STRING\" size=\"256\"/><Column id=\"text\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRolePermit", this);
            obj._setContents("<ColumnInfo><Column id=\"value\" type=\"STRING\" size=\"256\"/><Column id=\"text\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAuthYn", this);
            obj._setContents("<ColumnInfo><Column id=\"value\" type=\"STRING\" size=\"256\"/><Column id=\"text\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSysIdCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"value\" type=\"STRING\" size=\"256\"/><Column id=\"text\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsModuleSearchCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"text\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btnSave",null,"20","65","28","50",null,null,null,null,null,this);
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_icoSave");
            obj.set_taborder("4");
            obj.set_enable("true");
            obj.set_escapebutton("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"20","65","28","btnSave:3",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle","50","0","500","58",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("권한별 메뉴관리");
            obj.set_cssclass("sta_WF_compTitle01");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","50","58",null,"56","50",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staBg","0","0",null,"56","0",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_bg");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta001","25%","15","100","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("권한코드");
            obj.set_cssclass("sta_WF_condition01");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtRoleCd","sta001:10","15","160","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta002","50%","15","100","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("권한명");
            obj.set_cssclass("sta_WF_condition01");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtRoleNm","sta002:10","15","200","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta003","75%","15","100","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("모듈구분");
            obj.set_cssclass("sta_WF_condition01");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboModuleId","sta003:10","15","200","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_innerdataset("dsModuleSearchCombo");
            obj.set_codecolumn("value");
            obj.set_datacolumn("text");
            obj.set_text("Combo00");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00","20","15","100","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("시스템");
            obj.set_cssclass("sta_WF_condition01");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSysId","Static00:10","15","160","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_innerdataset("dsSysIdCombo");
            obj.set_codecolumn("value");
            obj.set_datacolumn("text");
            obj.set_text("Combo00");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static15_01_00_00","280","95","50",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divRole","50","divSearch:15",null,null,"50","30",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("divRoleList","0","0","56.25%",null,null,"0",null,null,null,null,this.divRole.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Area");
            this.divRole.addChild(obj.name, obj);

            obj = new Grid("grdRole","0","45",null,null,"0.2999999999999545","0",null,null,null,null,this.divRole.form.divRoleList.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsRole");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_autoupdatetype("itemselect");
            obj.set_treeusecheckbox("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\" band=\"left\"/><Column size=\"48\" band=\"left\"/><Column size=\"150\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"34\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" displaytype=\"none\" edittype=\"none\"/><Cell col=\"2\" text=\"권한코드\"/><Cell col=\"3\" text=\"권한명\"/><Cell col=\"4\" text=\"권한등급\"/><Cell col=\"5\" text=\"모듈명\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\" text=\"expr:currow+1\" textAlign=\"center\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"none\" text=\"bind:rowCheck\"/><Cell col=\"2\" text=\"bind:roleCode\" edittype=\"none\" displaytype=\"normal\" treelevel=\"bind:level\"/><Cell col=\"3\" text=\"bind:roleNm\" edittype=\"none\"/><Cell col=\"4\" text=\"bind:rolePermit\" edittype=\"none\" textAlign=\"left\" displaytype=\"combotext\" combodisplaynulltype=\"none\" combodataset=\"dsRolePermit\" combocodecol=\"value\" combodatacol=\"text\"/><Cell col=\"5\" text=\"bind:moduleId\" edittype=\"none\" combodataset=\"dsModuleCombo\" combocodecol=\"value\" combodatacol=\"text\" displaytype=\"combotext\" combodisplaynulltype=\"none\"/></Band></Format></Formats>");
            this.divRole.form.divRoleList.addChild(obj.name, obj);

            obj = new Static("staTitle","0","0","51","45",null,null,null,null,null,null,this.divRole.form.divRoleList.form);
            obj.set_taborder("1");
            obj.set_text("권한");
            obj.set_cssclass("sta_WF_subTitle01");
            obj.set_fittocontents("width");
            this.divRole.form.divRoleList.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_00_00","110","0","60","45",null,null,null,null,null,null,this.divRole.form.divRoleList.form);
            obj.set_taborder("2");
            obj.set_text("h 45");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divRole.form.divRoleList.addChild(obj.name, obj);

            obj = new Static("staGridRowCnt","staTitle:10","0","150","45",null,null,null,null,null,null,this.divRole.form.divRoleList.form);
            obj.set_taborder("3");
            obj.set_text("(총 0건)");
            obj.set_cssclass("sta_WF_subResult");
            this.divRole.form.divRoleList.addChild(obj.name, obj);

            obj = new Div("divRoleMenu","divRoleList:15","0",null,null,"0","0",null,null,null,null,this.divRole.form);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_cssclass("div_WF_Area");
            this.divRole.addChild(obj.name, obj);

            obj = new Grid("grdRoleMenu","0","45",null,null,"0","0",null,null,null,null,this.divRole.form.divRoleMenu.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsRoleMenu");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_autoupdatetype("itemselect");
            obj.set_treeinitstatus("expand,null");
            obj.set_treeusecheckbox("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\" band=\"left\"/><Column size=\"180\"/><Column size=\"200\"/><Column size=\"72\"/><Column size=\"104\"/><Column size=\"48\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"34\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"메뉴기능명\"/><Cell col=\"2\" text=\"설명\"/><Cell col=\"3\" text=\"메뉴 표시\"/><Cell col=\"4\" text=\"선택한 하위 기능\"/><Cell col=\"5\" text=\"사용\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\" text=\"expr:currow+1\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:treeText\" edittype=\"tree\" displaytype=\"treeitemcontrol\" treelevel=\"bind:level\"/><Cell col=\"2\" text=\"bind:desciption\" edittype=\"none\"/><Cell col=\"3\" displaytype=\"expr:funcAt == &apos;N&apos; ? &apos;imagecontrol&apos; : &apos;none&apos;\" text=\"bind:indctYn\" expr=\"indctYn == &apos;Y&apos; ? &apos;theme://images/chk_WF_Box_DS.png&apos; : &apos;theme://images/chk_WF_Box_D.png&apos;\"/><Cell col=\"4\" expr=\"funcAt == &apos;Y&apos; ? &apos;&apos; : (authCnt + &apos; / &apos; + funcCnt)\"/><Cell col=\"5\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxfalsevalue=\"N\" checkboxtruevalue=\"Y\" text=\"bind:authYn\"/></Band></Format></Formats>");
            this.divRole.form.divRoleMenu.addChild(obj.name, obj);

            obj = new Button("btnContract",null,"14","89","26","0",null,null,null,null,null,this.divRole.form.divRoleMenu.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdExpand");
            obj.set_text("전체닫힘");
            this.divRole.form.divRoleMenu.addChild(obj.name, obj);

            obj = new Button("btnTreeExpand",null,"14","89","26","btnContract:5",null,null,null,null,null,this.divRole.form.divRoleMenu.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_grdExpand");
            obj.set_text("전체펼침");
            this.divRole.form.divRoleMenu.addChild(obj.name, obj);

            obj = new Static("staTitle","0","0","100","45",null,null,null,null,null,null,this.divRole.form.divRoleMenu.form);
            obj.set_taborder("3");
            obj.set_text("권한별 메뉴");
            obj.set_cssclass("sta_WF_subTitle01");
            obj.set_fittocontents("width");
            this.divRole.form.divRoleMenu.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_00_00","110","0","60","45",null,null,null,null,null,null,this.divRole.form.divRoleMenu.form);
            obj.set_taborder("4");
            obj.set_text("h 45");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divRole.form.divRoleMenu.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divRole.form.divRoleList.form
            obj = new Layout("default","",0,0,this.divRole.form.divRoleList.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.grdRole.set_taborder("0");
                p.grdRole.set_binddataset("dsRole");
                p.grdRole.set_autofittype("col");
                p.grdRole.set_autoenter("select");
                p.grdRole.set_autoupdatetype("itemselect");
                p.grdRole.set_treeusecheckbox("false");
                p.grdRole.move("0","45",null,null,"0.2999999999999545","0");

                p.staTitle.set_taborder("1");
                p.staTitle.set_text("권한");
                p.staTitle.set_cssclass("sta_WF_subTitle01");
                p.staTitle.set_fittocontents("width");
                p.staTitle.move("0","0","51","45",null,null);

                p.Static04_00_00_00_00.set_taborder("2");
                p.Static04_00_00_00_00.set_text("h 45");
                p.Static04_00_00_00_00.set_visible("false");
                p.Static04_00_00_00_00.set_background("aqua");
                p.Static04_00_00_00_00.set_color("blue");
                p.Static04_00_00_00_00.set_textAlign("center");
                p.Static04_00_00_00_00.set_verticalAlign("middle");
                p.Static04_00_00_00_00.set_opacity("0.7");
                p.Static04_00_00_00_00.set_font("normal 12px/normal \"Arial\"");
                p.Static04_00_00_00_00.move("110","0","60","45",null,null);

                p.staGridRowCnt.set_taborder("3");
                p.staGridRowCnt.set_text("(총 0건)");
                p.staGridRowCnt.set_cssclass("sta_WF_subResult");
                p.staGridRowCnt.move("staTitle:10","0","150","45",null,null);
            	}
            );
            this.divRole.form.divRoleList.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divRole.form.divRoleList.form
            obj = new Layout("screen00","",0,0,this.divRole.form.divRoleList.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divRole.form.divRoleList.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divRole.form.divRoleMenu.form
            obj = new Layout("default","",0,0,this.divRole.form.divRoleMenu.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.grdRoleMenu.set_taborder("0");
                p.grdRoleMenu.set_binddataset("dsRoleMenu");
                p.grdRoleMenu.set_autofittype("col");
                p.grdRoleMenu.set_autoenter("select");
                p.grdRoleMenu.set_autoupdatetype("itemselect");
                p.grdRoleMenu.set_treeinitstatus("expand,null");
                p.grdRoleMenu.set_treeusecheckbox("false");
                p.grdRoleMenu.move("0","45",null,null,"0","0");

                p.btnContract.set_taborder("2");
                p.btnContract.set_cssclass("btn_WF_grdExpand");
                p.btnContract.set_text("전체닫힘");
                p.btnContract.move(null,"14","89","26","0",null);

                p.btnTreeExpand.set_taborder("1");
                p.btnTreeExpand.set_cssclass("btn_WF_grdExpand");
                p.btnTreeExpand.set_text("전체펼침");
                p.btnTreeExpand.move(null,"14","89","26","btnContract:5",null);

                p.staTitle.set_taborder("3");
                p.staTitle.set_text("권한별 메뉴");
                p.staTitle.set_cssclass("sta_WF_subTitle01");
                p.staTitle.set_fittocontents("width");
                p.staTitle.move("0","0","100","45",null,null);

                p.Static04_00_00_00_00.set_taborder("4");
                p.Static04_00_00_00_00.set_text("h 45");
                p.Static04_00_00_00_00.set_visible("false");
                p.Static04_00_00_00_00.set_background("aqua");
                p.Static04_00_00_00_00.set_color("blue");
                p.Static04_00_00_00_00.set_textAlign("center");
                p.Static04_00_00_00_00.set_verticalAlign("middle");
                p.Static04_00_00_00_00.set_opacity("0.7");
                p.Static04_00_00_00_00.set_font("normal 12px/normal \"Arial\"");
                p.Static04_00_00_00_00.move("110","0","60","45",null,null);
            	}
            );
            this.divRole.form.divRoleMenu.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divRole.form.divRoleMenu.form
            obj = new Layout("screen00","",0,0,this.divRole.form.divRoleMenu.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divRole.form.divRoleMenu.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divRole.form
            obj = new Layout("default","",0,0,this.divRole.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divRoleList.set_taborder("0");
                p.divRoleList.set_text("Div00");
                p.divRoleList.set_cssclass("div_WF_Area");
                p.divRoleList.move("0","0","56.25%",null,null,"0");

                p.divRoleMenu.set_taborder("1");
                p.divRoleMenu.set_text("Div01");
                p.divRoleMenu.set_cssclass("div_WF_Area");
                p.divRoleMenu.move("divRoleList:15","0",null,null,"0","0");
            	}
            );
            this.divRole.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divRole.form
            obj = new Layout("screen00","",0,0,this.divRole.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divRole.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1920,1000,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("권한별 메뉴관리");
                p.set_cssclass("frm_WF_comp");

                p.btnSave.set_text("저장");
                p.btnSave.set_cssclass("btn_WF_icoSave");
                p.btnSave.set_taborder("4");
                p.btnSave.set_enable("true");
                p.btnSave.set_escapebutton("false");
                p.btnSave.move(null,"20","65","28","50",null);

                p.btnSearch.set_taborder("0");
                p.btnSearch.set_text("조회");
                p.btnSearch.move(null,"20","65","28","btnSave:3",null);

                p.staTitle.set_taborder("1");
                p.staTitle.set_text("권한별 메뉴관리");
                p.staTitle.set_cssclass("sta_WF_compTitle01");
                p.staTitle.move("50","0","500","58",null,null);

                p.divSearch.set_taborder("2");
                p.divSearch.set_text("");
                p.divSearch.move("50","58",null,"56","50",null);

                p.divRole.set_taborder("3");
                p.divRole.set_text("");
                p.divRole.move("50","divSearch:15",null,null,"50","30");
            	}
            );
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("screen00","",1280,670,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.divSrch.form.edtRoleCd","value","dsSearch","searchRoleCode");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.divSrch.form.edtRoleNm","value","dsSearch","roleNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.divSrch.form.systemIdCombo","value","dsSearch","sysId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.divSrch.form.cboModuleId","value","dsSearch","moduleId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.edtRoleCd","value","dsSearch","searchRoleCode");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.edtRoleNm","value","dsSearch","roleNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.cboModuleId","value","dsSearch","moduleId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearch.form.cboSysId","value","dsSearch","sysId");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("ROLE_1020M.xfdl","lib::common.xjs");
        this.registerScript("ROLE_1020M.xfdl", function() {
        /**
         *  권한별 메뉴 관리
         *  MenuPath      시스템 관리 - 사용자, 권한 및 메뉴 관리 - 권한별 메뉴 관리
         *  FileName      roleMenuManage.xfdl
         *  Creator 	  cheonsy
         *  CreateDate    2023.03.08
         *  Desction      권한별 메뉴관리
         ************** 소스 수정 이력 ***********************************************
         *  date          Modifier    Description
         *******************************************************************************
         *  2023.03.08    cheonsy 	 최초 생성
         *  2023.08.25    parksw      시스템 ID, 메뉴 표시 여부, 하위 기능 개수 추가,
         *******************************************************************************/

        this.executeIncludeScript("lib::common.xjs"); /*include "lib::common.xjs"*/;

        /***********************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose)
         ***********************************************************************************************/

        /**
         * description 화면 onload
         */
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnLoad(this);
        	this.fnLoadCombo();
        };

        /************************************************************************************************
         * TRANSACTION 서비스 호출 처리
         ************************************************************************************************/

        /**
         * description 모듈명 콤보 생성
         */
        this.fnLoadCombo = function()
        {
            this.loadCount = 4;
        	this.gfnLoadCombo("loadCombo", "dsUseYn=SM:USE_YN:C dsRolePermit=SM:ROLE_PERMIT:C dsAuthYn=SM:AUTH_YN:C", "fnComboCallback");
        	this.gfnTransaction("loadSysIdCombo", "sm/getSystemIdCombo.do", "", "dsSysIdCombo", "", "fnComboCallback");
            this.gfnTransaction("loadModuleCombo", "sm/getMenuModuleCombo.do", "", "dsModuleCombo", "", "fnComboCallback");
            this.gfnTransaction("loadModuleSearchCombo", "sm/getMenuModuleCombo.do", "", "dsModuleSearchCombo=dsModuleCombo", "type=A", "fnComboCallback");
        };

        /**
         * description 권한 조회
         */
        this.fnRoleSearch = function()
        {
        	this.gfnTransaction("getRole", "sm/getRole.do", "dsSearch", "dsRole", "", "fnCallback");
        };

        /**
         * description 권한별 메뉴 조회
         */
        this.fnRoleMenuSearch = function()
        {
            this.dsSearch.setColumn(0, "roleCode", this.dsRole.getColumn(this.dsRole.rowposition, "roleCode"));
        	this.gfnTransaction("getRoleMenuSearch", "sm/getRoleMenuSearch.do", "dsSearch", "dsRoleMenu", "", "fnCallback");
        };

        /**
         * description 권한별 메뉴 저장
         */
        this.fnSave = function()
        {
        	this.gfnTransaction("setRoleMenu", "sm/setRoleMenu.do", "dsRoleMenu", "", "", "fnCallback");
        };

        /************************************************************************************************
         * CALLBACK 콜백 처리부분(Transaction, Popup)
         ************************************************************************************************/

        this.fnComboCallback = function (svcId, errorCode, errorMsg)
        {
            this.loadCount--;
            if (this.loadCount == 0) {
                var sysId = nexacro.getApplication().gdsUserInfo.getColumn(0, "sysId");
                this.dsSearch.setColumn(0, "sysId", sysId);

                this.fnRoleSearch();
            }
        };

        /**
         * description Transaction CallBack 함수
         */
        this.fnCallback = function (sSvcId, nErrorCode, sErrorMsg)
        {
        	switch (sSvcId) {
        		case "getRole":
        			//총 건수 계산
        			this.gfnRowCount(this.dsRole, this.divRole.form.divRoleList.form.staGridRowCnt);
                    break;
        		case "getRoleMenuSearch":
                    break;
        		case "setRoleMenu":
        			if (this.callbackMsg == "success") {
        				this.gfnAlert("CM_MSG_SAVE_SUCCESS");  // 저장 되었습니다.
        				this.fnRoleSearch();
        			} else {
        				this.gfnAlert("CM_MSG_TEST_3");  // 저장에 실패하였습니다.
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
         * description 조회버튼 클릭
         */
        this.btnSearch_onclick = function(obj,e)
        {
        	if (this.fnSystemIdIsNull()) {
        		return;
        	}
        	this.dsSearch.setColumn(0, "roleCode", this.dsSearch.getColumn(0, "searchRoleCode"));
        	this.fnRoleSearch();
        };

        /**
         * description role rowposition change 이벤트
         */
        this.dsRole_onrowposchanged = function(obj,e)
        {
            for(var i = 0; i < this.dsRole.getRowCount(); i++) {
                this.dsRole.setColumn(i, "rowCheck", 0);
            }
            this.dsRole.setColumn(e.newrow, "rowCheck", 1);

        	if (this.fnSystemIdIsNull()) {
        		return;
        	}

        	this.fnRoleMenuSearch();
        };

        /*
         *	sysetm id combobox onchange event
         */
        this.divSearch_divSrch_systemIdCombo_onitemchanged = function(obj,e)
        {
        	this.fnRoleMenuSearch();
        };

        /**
         * description 저장버튼 클릭
         */
        this.btnSave_onclick = function(obj,e)
        {
        	if (this.fnSystemIdIsNull()) {
        		return;
        	}
        	if (this.dsRoleMenu.rowcount == 0) {
        		this.gfnAlert("CM_MSG_SAVE_NODATA");  // 저장할 데이터가 없습니다.
        		return;
        	}
        	if (!this.gfnDsIsUpdated(this.dsRoleMenu)) {
        		this.gfnAlert("CM_MSG_SAVE_NOCHANGE");  // 변경된 내역이 없습니다.
        		return;
        	}

        	this.gfnAlert("CM_CFM_BEFORE_SAVE", "", "", { trueFunc: "fnSave", falseFunc: "" });  // 변경된 내역을 저장 하시겠습니까?
        	return;
        };

        /**
         * description 트리 펼치기
         */
        this.divRole_divRoleMenu_btnTreeExpand_onclick = function(obj,e)
        {
        	this.divRole.form.divRoleMenu.form.grdRoleMenu.set_treeinitstatus("expand,all");
        };

        /**
         * description 트리 접기
         */
        this.divRole_divRoleMenu_btnContract_onclick = function(obj,e)
        {
        	this.divRole.form.divRoleMenu.form.grdRoleMenu.set_treeinitstatus("collapse,all");
        };

        /**
         * description 메뉴사용여부 체크시 권한체크 알림
         */
        this.dsRoleMenu_cancolumnchange = function(obj,e)
        {
        	if (!this.gfnIsGridChecked(this.dsRole, "rowCheck")) {
        		this.gfnAlert("권한을 체크해주세요");
        		return false;
        	}
        };

        /**
         * @description 메뉴 사용여부 클릭 시 트리 하위 전체 선택
         */
        this.dsRoleMenu_oncolumnchanged = function(obj,e)
        {
        	if (e.columnid == "authYn") {
        		//하위 트리들 체크하여 체크하기 함수 호출
                var grid = this.divRole.form.divRoleMenu.form.grdRoleMenu;
        		this.fnCheckTreeRow(grid, e.row, e.newvalue == "Y");
        	}
        };

        /**
         * @description 엔터키 조회
         */
        this.divSearch_divSrch_edtRoleCd_onkeyup = function(obj,e)
        {
        	if (e.keycode == 13) {
        		this.btnSearch_onclick();
        	}
        };

        /************************************************************************************************
        * 사용자 FUNCTION 영역
        ************************************************************************************************/

        /**
         * description generate multi language Excel
         */
        this.btnExportCompML_onclick = function(obj,e)
        {
        	// generate multi language Excel
        	this.gfnGenerateML(this);
        	this.gfnGenerateMLExcel();
        };

        /**
         * 그리드 트리의 체크 상태를 변경한다. 지정한 열의 하위 및 부모 행들의 상태를 같이 업데이트한다.
         *
         * @param {nexacro.Grid} grid 대상 그리드
         * @param {number} row 체크 상태를 변경할 행
         * @param {string} colId 체크 상태를 변경할 열
         * @param {string} countColId 하위 항목 체크 개수를 표시하는 열
         * @param {boolean} check 체크 상태
         */
        this.fnCheckTreeRow = function (grid, row, check)
        {
            var ds = grid.getBindDataset();
            var colIdx = grid.getBindCellIndex("body", "authYn");
            var value = grid.getCellProperty("body", colIdx, check ? "checkboxtruevalue" : "checkboxfalsevalue");
            var trueValue = "Y";
            var falseValue = "N";

            if (value == null) {
                value = Number(check).toFixed(0);
            }

            ds.set_enableevent(false);

            // 자식 행들의 상태를 업데이트한다.
            updateDescendents(row);

            // 자신 및 부모 행들의 상태를 업데이트한다.
            var parentRow = grid.getTreeParentRow(row);
            while (parentRow >= 0) {
                var n = grid.getTreeChildCount(parentRow);
                var funcAt = ds.getColumn(parentRow, "funcAt");

                if (n == 0) {
                    ds.setColumn(row, "authYn", value);
                } else {
                    var sum = 0;
                    var checkedAll = true;
                    for (var i = 0; i < n; i++) {
                        var r = grid.getTreeChildRow(parentRow, i);
                        checkedAll = checkedAll && ds.getColumn(r, "authYn") == trueValue;
                        sum += ds.getColumn(r, "authCnt");
                    }

                    ds.setColumn(parentRow, "authYn", checkedAll ? trueValue : falseValue);
                    ds.setColumn(parentRow, "rowStatus", "updated");
                    ds.setColumn(parentRow, "authCnt", sum);
                }

                parentRow = grid.getTreeParentRow(parentRow);
            }
            ds.set_enableevent(true);

            function updateDescendents(row) {
                var n = grid.getTreeChildCount(row);
                var funcAt = ds.getColumn(row, "funcAt");
                ds.setColumn(row, "authYn", value);
                ds.setColumn(row, "rowCheck", "1");
                ds.setColumn(row, "rowStatus", "updated");

                if (funcAt == "Y") {
                    ds.setColumn(row, "authCnt", value == trueValue ? 1 : 0);
                } else {
                    var sum = 0;
                    for (var i = 0; i < n; i++) {
                        var r = grid.getTreeChildRow(row, i);
                        updateDescendents(r);
                        sum += ds.getColumn(r, "authCnt");
                    }
                    ds.setColumn(row, "authCnt", sum);
                }
            }
        };

        //system ID 선택여부 확인
        this.fnSystemIdIsNull = function () {
        	var sysId = this.dsSearch.getColumn(0,"sysId");
        	if (Eco.isEmpty(sysId)) {
        		this.gfnAlert("시스템을 선택하세요.");
        		return true;
        	} else {
        		return false;
        	}
        }



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnSave.addEventHandler("onclick",this.btnSave_onclick,this);
            this.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
            this.divSearch.form.staBg.addEventHandler("onclick",this.div_Search_Static00_onclick,this);
            this.divSearch.form.sta001.addEventHandler("onclick",this.divSearch_sta_01_onclick,this);
            this.divSearch.form.edtRoleCd.addEventHandler("onkeyup",this.divSearch_divSrch_edtRoleCd_onkeyup,this);
            this.divSearch.form.sta002.addEventHandler("onclick",this.divSearch_sta_01_onclick,this);
            this.divSearch.form.edtRoleNm.addEventHandler("onkeyup",this.divSearch_Div00_edt_01_onkeyup,this);
            this.divSearch.form.sta003.addEventHandler("onclick",this.divSearch_sta_01_onclick,this);
            this.divSearch.form.cboModuleId.addEventHandler("onkeyup",this.divSearch_Div00_edt_01_onkeyup,this);
            this.divSearch.form.cboSysId.addEventHandler("onitemchanged",this.divSearch_divSrch_systemIdCombo_onitemchanged,this);
            this.divSearch.form.Static15_01_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.divRole.form.divRoleList.form.staTitle.addEventHandler("onclick",this.Static09_onclick,this);
            this.divRole.form.divRoleList.form.Static04_00_00_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.divRole.form.divRoleMenu.form.grdRoleMenu.addEventHandler("oncellclick",this.Div00_Div01_grdRoleMenu_oncellclick,this);
            this.divRole.form.divRoleMenu.form.btnContract.addEventHandler("onclick",this.divRole_divRoleMenu_btnContract_onclick,this);
            this.divRole.form.divRoleMenu.form.btnTreeExpand.addEventHandler("onclick",this.divRole_divRoleMenu_btnTreeExpand_onclick,this);
            this.divRole.form.divRoleMenu.form.staTitle.addEventHandler("onclick",this.Static09_onclick,this);
            this.divRole.form.divRoleMenu.form.Static04_00_00_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.dsRole.addEventHandler("onrowposchanged",this.dsRole_onrowposchanged,this);
            this.dsRoleMenu.addEventHandler("cancolumnchange",this.dsRoleMenu_cancolumnchange,this);
            this.dsRoleMenu.addEventHandler("oncolumnchanged",this.dsRoleMenu_oncolumnchanged,this);
        };
        this.loadIncludeScript("ROLE_1020M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
