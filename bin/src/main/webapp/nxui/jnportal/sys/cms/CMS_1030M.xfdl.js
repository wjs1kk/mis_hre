(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CMS_1030M");
            this.set_titletext("담당과제 조회");
            this.set_cssclass("frm_WF_comp");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,810);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj.set_updatecontrol("true");
            obj._setContents("<ColumnInfo><Column id=\"projectNo\" type=\"STRING\" size=\"256\"/><Column id=\"projectNm\" type=\"STRING\" size=\"256\"/><Column id=\"projectType\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsProjType", this);
            obj._setContents("<ColumnInfo><Column id=\"text\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsProject", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"projectNo\" type=\"STRING\" size=\"256\"/><Column id=\"projectNm\" type=\"STRING\" size=\"256\"/><Column id=\"projectType\" type=\"STRING\" size=\"256\"/><Column id=\"projectOverview\" type=\"STRING\" size=\"256\"/><Column id=\"projectStartDt\" type=\"STRING\" size=\"256\"/><Column id=\"projectEndDt\" type=\"STRING\" size=\"256\"/><Column id=\"projectDuration\" type=\"STRING\" size=\"256\"/><Column id=\"projectBudget\" type=\"STRING\" size=\"256\"/><Column id=\"rgstId\" type=\"STRING\" size=\"256\"/><Column id=\"RGST_IP\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsProjectAlert", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"mbrNo\" type=\"STRING\" size=\"256\"/><Column id=\"memberId\" type=\"STRING\" size=\"256\"/><Column id=\"projectNo\" type=\"STRING\" size=\"256\"/><Column id=\"projectAlertId\" type=\"STRING\" size=\"256\"/><Column id=\"projectAlertTitle\" type=\"STRING\" size=\"256\"/><Column id=\"projectAlertCont\" type=\"STRING\" size=\"256\"/><Column id=\"projectAlertOrdr\" type=\"STRING\" size=\"256\"/><Column id=\"projectAlertStartDt\" type=\"STRING\" size=\"256\"/><Column id=\"projectAlertEndDt\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch2", this);
            obj.set_updatecontrol("true");
            obj._setContents("<ColumnInfo><Column id=\"projectNo\" type=\"STRING\" size=\"256\"/><Column id=\"projectNm\" type=\"STRING\" size=\"256\"/><Column id=\"projectType\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btnSearch",null,"12","65","28","50",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle","50","10","500","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("담당과제 조회");
            obj.set_cssclass("sta_WF_compTitle01");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00","50","45","60","12",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("h 12");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Div("divProject","50","177",null,"300","50",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","0","-1","20","295",null,null,null,null,null,null,this.divProject.form);
            obj.set_taborder("1");
            obj.set_text("w20");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divProject.addChild(obj.name, obj);

            obj = new Static("Static04_00_00","20","0","60","18",null,null,null,null,null,null,this.divProject.form);
            obj.set_taborder("2");
            obj.set_text("h 18");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divProject.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_00","129","0","60","45",null,null,null,null,null,null,this.divProject.form);
            obj.set_taborder("3");
            obj.set_text("h 45");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divProject.addChild(obj.name, obj);

            obj = new Static("staTitle02","20","11","169","27",null,null,null,null,null,null,this.divProject.form);
            obj.set_taborder("5");
            obj.set_text("담당과제 목록");
            obj.set_cssclass("sta_WF_subTitle01");
            this.divProject.addChild(obj.name, obj);

            obj = new Static("staGridRowCnt","149","12","149","27",null,null,null,null,null,null,this.divProject.form);
            obj.set_taborder("6");
            obj.set_text("(총 0건)");
            obj.set_cssclass("sta_WF_subResult");
            this.divProject.addChild(obj.name, obj);

            obj = new Grid("grdProject","20","45",null,null,"20","13",null,null,null,null,this.divProject.form);
            obj.set_taborder("4");
            obj.set_binddataset("dsProject");
            obj.set_autofittype("col");
            obj.set_tooltiptype("default");
            obj.set_autoenter("select");
            obj.set_enable("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"100\"/><Column size=\"300\"/><Column size=\"100\"/><Column size=\"400\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"33\"/></Rows><Band id=\"head\"><Cell text=\"NO\"/><Cell col=\"1\" text=\"과제NO\" autosizerow=\"default\"/><Cell col=\"2\" text=\"과제명\"/><Cell col=\"3\" text=\"사업구분\"/><Cell col=\"4\" text=\"과제개요\"/><Cell col=\"5\" text=\"시작일\"/><Cell col=\"6\" text=\"종료일\"/><Cell col=\"7\" text=\"기간\"/><Cell col=\"8\" text=\"예산\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" textAlign=\"center\" expandsize=\"16\" edittype=\"none\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" text=\"bind:projectNo\" expandsize=\"16\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:projectNm\" displaytype=\"normal\" expandsize=\"16\" edittype=\"none\" textAlign=\"left\" tooltiptext=\"bind:projectNm\"/><Cell col=\"3\" displaytype=\"combotext\" edittype=\"none\" text=\"bind:projectType\" calendardateformat=\"yyyy-MM-dd\" expandsize=\"16\" textAlign=\"center\" combodataset=\"dsProjType\" combocodecol=\"value\" combodatacol=\"text\"/><Cell col=\"4\" text=\"bind:projectOverview\" textAlign=\"left\" edittype=\"none\" tooltiptext=\"bind:projectOverview\"/><Cell col=\"5\" text=\"bind:projectStartDt\" textAlign=\"center\" edittype=\"none\"/><Cell col=\"6\" text=\"bind:projectEndDt\" textAlign=\"center\" edittype=\"none\"/><Cell col=\"7\" text=\"bind:projectDuration\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:projectBudget\" textAlign=\"center\"/></Band></Format><Format id=\"format_copy\"/></Formats>");
            this.divProject.addChild(obj.name, obj);

            obj = new Static("Static10_00",null,"0","20","295","0",null,null,null,null,null,this.divProject.form);
            obj.set_taborder("0");
            obj.set_text("w20");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divProject.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_01","70","477","60","10",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Div("divMemberProject","50","487",null,"300","50",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","0","-1","20","295",null,null,null,null,null,null,this.divMemberProject.form);
            obj.set_taborder("1");
            obj.set_text("w20");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divMemberProject.addChild(obj.name, obj);

            obj = new Static("Static04_00_00","20","0","60","18",null,null,null,null,null,null,this.divMemberProject.form);
            obj.set_taborder("2");
            obj.set_text("h 18");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divMemberProject.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_00","129","0","60","45",null,null,null,null,null,null,this.divMemberProject.form);
            obj.set_taborder("3");
            obj.set_text("h 45");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divMemberProject.addChild(obj.name, obj);

            obj = new Static("staTitle02","20","11","169","27",null,null,null,null,null,null,this.divMemberProject.form);
            obj.set_taborder("5");
            obj.set_text("담당과제별 주요사항");
            obj.set_cssclass("sta_WF_subTitle01");
            this.divMemberProject.addChild(obj.name, obj);

            obj = new Static("staGridRowCnt","205","12","149","27",null,null,null,null,null,null,this.divMemberProject.form);
            obj.set_taborder("6");
            obj.set_text("(총 0건)");
            obj.set_cssclass("sta_WF_subResult");
            this.divMemberProject.addChild(obj.name, obj);

            obj = new Grid("grdMemberProject","20","45",null,null,"20","13",null,null,null,null,this.divMemberProject.form);
            obj.set_taborder("4");
            obj.set_binddataset("dsProjectAlert");
            obj.set_autofittype("col");
            obj.set_tooltiptype("default");
            obj.set_autoenter("select");
            obj.set_enable("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"100\"/><Column size=\"300\"/><Column size=\"70\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"400\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"99\"/></Rows><Band id=\"head\"><Cell text=\"NO\"/><Cell col=\"1\" text=\"주요사항NO\" autosizerow=\"default\"/><Cell col=\"2\" text=\"주요사항 제목\"/><Cell col=\"3\" text=\"순번\"/><Cell col=\"4\" text=\"알림 시작일\"/><Cell col=\"5\" text=\"알림 종료일\"/><Cell col=\"6\" text=\"주요사항 알림 내용\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" textAlign=\"center\" expandsize=\"16\" edittype=\"none\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" text=\"bind:projectAlertId\" expandsize=\"16\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:projectAlertTitle\" displaytype=\"normal\" expandsize=\"16\" edittype=\"none\" textAlign=\"left\" tooltiptext=\"bind:projectAlertTitle\"/><Cell col=\"3\" textAlign=\"right\" text=\"bind:projectAlertOrdr\"/><Cell col=\"4\" text=\"bind:projectAlertStartDt\" textAlign=\"center\" edittype=\"none\"/><Cell col=\"5\" text=\"bind:projectAlertEndDt\" textAlign=\"center\" edittype=\"none\"/><Cell col=\"6\" text=\"bind:projectAlertCont\" textAlign=\"left\" edittype=\"none\" tooltiptext=\"bind:projectAlertCont\" displaytype=\"normal\"/></Band></Format><Format id=\"format_copy\"/></Formats>");
            this.divMemberProject.addChild(obj.name, obj);

            obj = new Static("Static10_00",null,"0","20","295","0",null,null,null,null,null,this.divMemberProject.form);
            obj.set_taborder("0");
            obj.set_text("w20");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divMemberProject.addChild(obj.name, obj);

            obj = new Button("btnAlert",null,"10","65","28","20",null,null,null,null,null,this.divMemberProject.form);
            obj.set_text("알림");
            obj.set_cssclass("btn_WF_icoSelect");
            obj.set_taborder("7");
            this.divMemberProject.addChild(obj.name, obj);

            obj = new Div("divSearch","50","57",null,"110","50",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle01","20","11","169","27",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_subTitle01");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_00","20","0","60","18",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("h 18");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_00_00","110","0","60","45",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("h 45");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static04_00_00","0","95","60",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("h 12");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divSrch","20","45",null,"50","20",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("");
            obj.set_cssclass("div_WF_panel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static15_01_00","225","2","50","12",null,null,null,null,null,null,this.divSearch.form.divSrch.form);
            obj.set_taborder("0");
            obj.set_text("h 12");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divSearch.form.divSrch.addChild(obj.name, obj);

            obj = new Edit("edtProjectNo","125","14","150","26",null,null,null,null,null,null,this.divSearch.form.divSrch.form);
            obj.set_taborder("1");
            obj.set_maxlength("100");
            this.divSearch.form.divSrch.addChild(obj.name, obj);

            obj = new Static("sta001","15","10","110","34",null,null,null,null,null,null,this.divSearch.form.divSrch.form);
            obj.set_taborder("2");
            obj.set_text("과제NO");
            obj.set_cssclass("sta_WF_condition01");
            this.divSearch.form.divSrch.addChild(obj.name, obj);

            obj = new Static("sta002","313","10","110","34",null,null,null,null,null,null,this.divSearch.form.divSrch.form);
            obj.set_taborder("3");
            obj.set_text("과제명");
            obj.set_cssclass("sta_WF_condition01");
            this.divSearch.form.divSrch.addChild(obj.name, obj);

            obj = new Edit("edtProjectNm","423","14","150","26",null,null,null,null,null,null,this.divSearch.form.divSrch.form);
            obj.set_taborder("4");
            this.divSearch.form.divSrch.addChild(obj.name, obj);

            obj = new Static("sta003","592","10","110","34",null,null,null,null,null,null,this.divSearch.form.divSrch.form);
            obj.set_taborder("5");
            obj.set_text("사업구분");
            obj.set_cssclass("sta_WF_condition01");
            obj.set_fittocontents("width");
            this.divSearch.form.divSrch.addChild(obj.name, obj);

            obj = new Combo("cboProjectType","sta003:0","14","150","26",null,null,null,null,null,null,this.divSearch.form.divSrch.form);
            obj.set_taborder("6");
            obj.set_codecolumn("value");
            obj.set_datacolumn("text");
            obj.set_innerdataset("dsProjType");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("-1");
            this.divSearch.form.divSrch.addChild(obj.name, obj);

            obj = new Static("Static10_00","50","57","20",null,null,"466",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("w20");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divProject.form
            obj = new Layout("default","",1032,72,this.divProject.form,function(p){});
            this.divProject.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMemberProject.form
            obj = new Layout("default","",1032,72,this.divMemberProject.form,function(p){});
            this.divMemberProject.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divSearch.form.divSrch.form
            obj = new Layout("default","",0,0,this.divSearch.form.divSrch.form,function(p){});
            this.divSearch.form.divSrch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staTitle01.set_taborder("0");
                p.staTitle01.set_text("검색조건");
                p.staTitle01.set_cssclass("sta_WF_subTitle01");
                p.staTitle01.move("20","11","169","27",null,null);

                p.Static04_00_00_00.set_taborder("1");
                p.Static04_00_00_00.set_text("h 18");
                p.Static04_00_00_00.set_visible("false");
                p.Static04_00_00_00.set_background("aqua");
                p.Static04_00_00_00.set_color("blue");
                p.Static04_00_00_00.set_textAlign("center");
                p.Static04_00_00_00.set_verticalAlign("middle");
                p.Static04_00_00_00.set_opacity("0.7");
                p.Static04_00_00_00.set_font("normal 12px/normal \"Arial\"");
                p.Static04_00_00_00.move("20","0","60","18",null,null);

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

                p.Static04_00_00.set_taborder("3");
                p.Static04_00_00.set_text("h 12");
                p.Static04_00_00.set_visible("false");
                p.Static04_00_00.set_background("aqua");
                p.Static04_00_00.set_color("blue");
                p.Static04_00_00.set_textAlign("center");
                p.Static04_00_00.set_verticalAlign("middle");
                p.Static04_00_00.set_opacity("0.7");
                p.Static04_00_00.set_font("normal 12px/normal \"Arial\"");
                p.Static04_00_00.move("0","95","60",null,null,"0");

                p.divSrch.set_taborder("4");
                p.divSrch.set_text("");
                p.divSrch.set_cssclass("div_WF_panel");
                p.divSrch.move("20","45",null,"50","20",null);
            	}
            );
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divSearch.form
            obj = new Layout("screen00","",0,0,this.divSearch.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divSearch.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1920,810,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("담당과제 조회");
                p.set_cssclass("frm_WF_comp");

                p.btnSearch.set_taborder("0");
                p.btnSearch.set_text("조회");
                p.btnSearch.move(null,"12","65","28","50",null);

                p.staTitle.set_taborder("1");
                p.staTitle.set_text("담당과제 조회");
                p.staTitle.set_cssclass("sta_WF_compTitle01");
                p.staTitle.move("50","10","500","30",null,null);

                p.Static04_00.set_taborder("2");
                p.Static04_00.set_text("h 12");
                p.Static04_00.set_visible("false");
                p.Static04_00.set_background("aqua");
                p.Static04_00.set_color("blue");
                p.Static04_00.set_textAlign("center");
                p.Static04_00.set_verticalAlign("middle");
                p.Static04_00.set_opacity("0.7");
                p.Static04_00.set_font("normal 12px/normal \"Arial\"");
                p.Static04_00.move("50","45","60","12",null,null);

                p.divProject.set_taborder("4");
                p.divProject.set_cssclass("");
                p.divProject.set_text("");
                p.divProject.move("50","177",null,"300","50",null);

                p.Static04_00_00_01.set_taborder("5");
                p.Static04_00_00_01.set_text("h 10");
                p.Static04_00_00_01.set_visible("false");
                p.Static04_00_00_01.set_background("aqua");
                p.Static04_00_00_01.set_color("blue");
                p.Static04_00_00_01.set_textAlign("center");
                p.Static04_00_00_01.set_verticalAlign("middle");
                p.Static04_00_00_01.set_opacity("0.7");
                p.Static04_00_00_01.set_font("normal 12px/normal \"Arial\"");
                p.Static04_00_00_01.move("70","477","60","10",null,null);

                p.divMemberProject.set_taborder("6");
                p.divMemberProject.set_cssclass("");
                p.divMemberProject.set_text("");
                p.divMemberProject.move("50","487",null,"300","50",null);

                p.divSearch.set_taborder("7");
                p.divSearch.set_text("Div00");
                p.divSearch.move("50","57",null,"110","50",null);

                p.Static10_00.set_taborder("3");
                p.Static10_00.set_text("w20");
                p.Static10_00.set_visible("false");
                p.Static10_00.set_background("fuchsia");
                p.Static10_00.set_color("blue");
                p.Static10_00.set_textAlign("center");
                p.Static10_00.set_verticalAlign("middle");
                p.Static10_00.set_opacity("0.7");
                p.Static10_00.set_font("normal 12px/normal \"Arial\"");
                p.Static10_00.move("50","57","20",null,null,"466");
            	}
            );
            obj.set_stepcount("0");
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
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item3","divSearch.form.divSrch.form.edt_01","value","dsSearch","moduleId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.divSrch.form.edt_02","value","dsSearch","searchHeaderCode");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.divSrch.form.edt_03","value","dsSearch","headerCodeNmKr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divSearch.form.divSrch.form.edtProjectNo","value","dsSearch","projectNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.divSrch.form.edtProjectNm","value","dsSearch","projectNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.divSrch.form.cboProjectType","value","dsSearch","projectType");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("CMS_1030M.xfdl","lib::common.xjs");
        this.registerScript("CMS_1030M.xfdl", function() {
        /**
        *  Popup Template
        *  MenuPath      -
        *  FileName      cmMyProject.xfdl
        *  Creator 	     Kimjs
        *  CreateDate    2023.03.23
        *  Descrption    담당과제 조회
        ************** 소스 수정 이력 ***********************************************
        *  date          Modifier    Description
        *******************************************************************************
        *  2023.03.23    Kimjs  	 최초 생성
        *  2023.04.06    Cheonsy  	 수정
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
            this.gfnLoadCombo("loadCombo", "dsProjType=PMS:TMP:PROJECT_TY:A", "fnCallBack");
        	this.fnSearch();
        };

        /************************************************************************************************
        * TRANSACTION 서비스 호출 처리
        ************************************************************************************************/
        /**
         * description 담당과제 조회
        */
        this.fnSearch = function()
        {
        	this.gfnTransaction("getSubject", "cms/getSubject.do", "dsSearch", "dsProject", "", "fnCallBack");
        };

        /**
         * description 담당과제별 주요사항 조회
        */
        this.fnSearch2 = function()
        {
            this.gfnTransaction("getSubjectImp", "cms/getSubjectImp.do", "dsSearch2", "dsProjectAlert", "", "fnCallBack");
        }
        /************************************************************************************************
         * CALLBACK 콜백 처리부분(Transaction, Popup)
         ************************************************************************************************/
        /**
         * description Transaction CallBack 함수
        */
        this.fnCallBack = function (sSvcId, nErrorCode, sErrorMsg)
        {
        	switch (sSvcId) {
        		case "getSubject":
        			//총 건수 계산
        			this.gfnRowCount(this.dsProject, this.divProject.form.staGridRowCnt);
                    this.dsProjectAlert.clearData();
        		break;
                case "getSubjectImp":
                    this.gfnRowCount(this.dsProjectAlert, this.divMemberProject.form.staGridRowCnt);
                    if(this.dsProjectAlert.rowcount == 0) {
                        this.divMemberProject.form.btnAlert.set_enable(false);
                    }else{
                        this.divMemberProject.form.btnAlert.set_enable(true);
                    }
                break;
        		default:
        		break;
        	}
        };

        /**
         * description Popup CallBack 함수
        */
        this.fnPopupAfter = function (sPopupId, vArg)
        {
        	switch(sPopupId){
        		case "cmMyProjectInfoPopup":

        		break;
                case "cmMyProjectAlertPopup":

        		break;
                default:
                break;
        	}
        };

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        /**
         * description 조회 버튼
        */
        this.btnSearch_onclick = function(obj,e)
        {
        	this.fnSearch();
        };

        /**
         * description 엔터키 검색
        */
        this.cmMyProject_onkeyup = function(obj,e)
        {
        	if(e.keycode==13){
        		this.btnSearch_onclick();
        	}
        };

        /**
         * description 담당과제 더블클릭시
        */
        this.divProject_grdProject_oncelldblclick = function(obj,e)
        {
        	var oArg = {projectId: this.dsProject.getColumn(e.row, "projectNo")};
        	this.gfnOpenPopup("cmMyProjectInfoPopup", "sys::cms/CMS_1030P_01.xfdl", oArg, "fnPopupAfter", "");
        };


        /**
         * description 알림버튼클릭시
        */
        this.divMemberProject_btnAlert_onclick = function(obj,e)
        {
            var oArg = {  projectId : this.dsProjectAlert.getColumn(this.dsProjectAlert.rowposition, "projectNo") };
        	this.gfnOpenPopup("cmMyProjectAlertPopup", "sys::cms/CMS_1030P_02.xfdl", oArg, "fnPopupAfter", "");
        };

        /**
         * description 담당과제 row변경시 주요사항 변경
        */
        this.dsProject_onrowposchanged = function(obj,e)
        {
            this.dsSearch2.setColumn(0, "projectNo", this.dsProject.getColumn(this.dsProject.rowposition, "projectNo"));
        	this.fnSearch2();
        };

        /**
         * description 그리드 헤드 클릭
        */
        this.divMemberProject_grdMemberProject_onheadclick = function(obj,e)
        {
        	this.gfnSetGridCheckAll(obj, e, "rowCheck");
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
            this.Static04_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.divProject.form.Static04_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.divProject.form.Static04_00_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.divProject.form.staTitle02.addEventHandler("onclick",this.Static09_onclick,this);
            this.divProject.form.grdProject.addEventHandler("oncelldblclick",this.divProject_grdProject_oncelldblclick,this);
            this.Static04_00_00_01.addEventHandler("onclick",this.Static31_onclick,this);
            this.divMemberProject.form.Static04_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.divMemberProject.form.Static04_00_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.divMemberProject.form.staTitle02.addEventHandler("onclick",this.Static09_onclick,this);
            this.divMemberProject.form.grdMemberProject.addEventHandler("onheadclick",this.divMemberProject_grdMemberProject_onheadclick,this);
            this.divMemberProject.form.btnAlert.addEventHandler("onclick",this.divMemberProject_btnAlert_onclick,this);
            this.divSearch.form.staTitle01.addEventHandler("onclick",this.div_Search_Static05_onclick,this);
            this.divSearch.form.Static04_00_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.divSearch.form.Static04_00_00_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.divSearch.form.Static04_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.divSearch.form.divSrch.form.Static15_01_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.divSearch.form.divSrch.form.edtProjectNo.addEventHandler("onkeyup",this.cmMyProject_onkeyup,this);
            this.divSearch.form.divSrch.form.sta001.addEventHandler("onclick",this.div_Search_Static01_onclick,this);
            this.divSearch.form.divSrch.form.edtProjectNm.addEventHandler("onkeyup",this.cmMyProject_onkeyup,this);
            this.divSearch.form.divSrch.form.cboProjectType.addEventHandler("onkeyup",this.cmMyProject_onkeyup,this);
            this.dsProject.addEventHandler("onrowposchanged",this.dsProject_onrowposchanged,this);
        };
        this.loadIncludeScript("CMS_1030M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
