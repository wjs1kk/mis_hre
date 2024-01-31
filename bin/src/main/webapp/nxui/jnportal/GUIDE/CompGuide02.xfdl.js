(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CompGuide01");
            this.set_titletext("컴포넌트 사이즈 가이드");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,3019);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">0</Col><Col id=\"data\">Static</Col></Row><Row><Col id=\"code\">1</Col><Col id=\"data\">DataSet</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"data\">Button</Col></Row><Row><Col id=\"code\">3</Col><Col id=\"data\">Calendar</Col></Row><Row><Col id=\"code\">4</Col><Col id=\"data\">CheckBox</Col></Row><Row><Col id=\"code\">5</Col><Col id=\"data\">Radio</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grid", this);
            obj._setContents("<ColumnInfo><Column id=\"Edit\" type=\"STRING\" size=\"256\"/><Column id=\"MaskEdit\" type=\"STRING\" size=\"256\"/><Column id=\"Combo\" type=\"STRING\" size=\"256\"/><Column id=\"Calendar\" type=\"STRING\" size=\"256\"/><Column id=\"Expand\" type=\"STRING\" size=\"256\"/><Column id=\"Normal\" type=\"STRING\" size=\"256\"/><Column id=\"Number\" type=\"STRING\" size=\"256\"/><Column id=\"Button\" type=\"STRING\" size=\"256\"/><Column id=\"ProgressBar\" type=\"STRING\" size=\"256\"/><Column id=\"Image\" type=\"STRING\" size=\"256\"/><Column id=\"Mask\" type=\"STRING\" size=\"256\"/><Column id=\"CheckBox\" type=\"STRING\" size=\"256\"/><Column id=\"Date\" type=\"STRING\" size=\"256\"/><Column id=\"Radio\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SIZE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Button\">버튼</Col><Col id=\"Edit\">Edit</Col><Col id=\"MaskEdit\">AA-001</Col><Col id=\"Normal\">Text</Col><Col id=\"Number\">713000</Col><Col id=\"ProgressBar\">50</Col></Row><Row><Col id=\"Button\">버튼</Col></Row><Row><Col id=\"Button\">버튼</Col></Row><Row><Col id=\"Button\">버튼</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_tree", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"level\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">1 Depth Menu 01</Col><Col id=\"level\">0</Col></Row><Row><Col id=\"code\">1 Depth Menu 02</Col><Col id=\"level\">0</Col></Row><Row><Col id=\"code\">2 Depth Menu 01</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"code\">3 Depth Menu 01</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"code\">3 Depth Menu 02</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"code\">3 Depth Menu 03</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"level\">1</Col><Col id=\"code\">2 Depth Menu 02</Col></Row><Row><Col id=\"code\">1 Depth Menu 03</Col><Col id=\"level\">0</Col></Row><Row><Col id=\"code\">1 Depth Menu 04</Col><Col id=\"level\">0</Col></Row><Row><Col id=\"code\">2 Depth Menu 01</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"code\">2 Depth Menu 02</Col><Col id=\"level\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_radio", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">0</Col><Col id=\"data\">Y</Col></Row><Row><Col id=\"code\">1</Col><Col id=\"data\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","0","0",null,"30","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Component");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_cssclass("sta_WF_GTitle");
            obj.set_textAlign("");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","0","1658","100","110",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Edit");
            obj.set_cssclass("sta_WF_GLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","99","1658",null,"110","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("");
            obj.set_cssclass("sta_WF_GArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static12","109","1667","107","25",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("[status=enabled]");
            obj.set_cssclass("sta_WF_GStatus");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01","109","1707","150","26",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_value("Edit");
            obj.set_text("Edit");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","0","30","100","800",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Static");
            obj.set_cssclass("sta_WF_GLabel");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","99","30",null,"800","0",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("");
            obj.set_cssclass("sta_WF_GArea");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","109","39","130","25",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("[status=enabled]");
            obj.set_cssclass("sta_WF_GStatus");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","335","39","130","25",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("[status=disabled]");
            obj.set_cssclass("sta_WF_GStatus");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","109","79","220","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("Nexacro N");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            this.addChild(obj.name, obj);

            obj = new Static("Static14","338","88","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("Nexacro N");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static14_00","110","168","150","58",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("대타이틀");
            obj.set_enable("true");
            obj.set_cssclass("sta_WF_compTitle01");
            this.addChild(obj.name, obj);

            obj = new Static("Static09_00","110","137","178","25",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("class = sta_WF_compTitle01");
            obj.set_cssclass("sta_WF_GStatus");
            this.addChild(obj.name, obj);

            obj = new Static("Static14_00_00","418","181","150","45",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("중타이틀");
            obj.set_enable("true");
            obj.set_cssclass("sta_WF_subTitle01");
            this.addChild(obj.name, obj);

            obj = new Static("Static09_00_00","419","137","165","25",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("class = sta_WF_subTitle01");
            obj.set_cssclass("sta_WF_GStatus");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00","0","825","100","735",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("Button");
            obj.set_cssclass("sta_WF_GLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_00","0","2258","100","114",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("CheckBox");
            obj.set_cssclass("sta_WF_GLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00","99","825",null,"735","0",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("");
            obj.set_cssclass("sta_WF_GArea");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_00","99","2258",null,"114","0",null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("");
            obj.set_cssclass("sta_WF_GArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static08_00","109","834","38","25",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("CRUD");
            obj.set_cssclass("sta_WF_GStatus");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            this.addChild(obj.name, obj);

            obj = new Static("Static13_00","109","2267","107","25",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("[status=enabled]");
            obj.set_cssclass("sta_WF_GStatus");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","109","884","65","28",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("버튼");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox02","109","2307","150","26",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("CheckBox00");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_01","99","1767",null,"110","0",null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("");
            obj.set_cssclass("sta_WF_GArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_01","0","1767","100","110",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("Combo");
            obj.set_cssclass("sta_WF_GLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static13_01","109","1776","107","25",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("[status=enabled]");
            obj.set_cssclass("sta_WF_GStatus");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00","109","1816","150","26",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_innerdataset("ds_list");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_displaynulltext("Combo");
            obj.set_text("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01","0","1876","100","383",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("Calendar");
            obj.set_cssclass("sta_WF_GLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_02","99","1876",null,"383","0",null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("");
            obj.set_cssclass("sta_WF_GArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static08_01","109","1885","107","25",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("[status=enabled]");
            obj.set_cssclass("sta_WF_GStatus");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            this.addChild(obj.name, obj);

            obj = new Static("Static12_02","109","1984","241","25",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("Appearance > type=monthonly");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar06","109","1925","150","26",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_value("20230313");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_usetrailingday("false");
            obj.set_weekformat("일 월 화 수 목 금 토");
            obj.set_daysize("28 28");
            obj.set_headheight("28");
            obj.set_popupsize("220");
            obj.set_showyearspin("false");
            obj.set_showmonthspin("true");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar08","109","2024","218","200",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_type("monthonly");
            obj.set_daysize("28 28");
            obj.set_headheight("28");
            obj.set_popupsize("220");
            obj.set_weekformat("일 월 화 수 목 금 토");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_03","0","2489","100","520",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("Grid ");
            obj.set_cssclass("sta_WF_GLabel");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            this.addChild(obj.name, obj);

            obj = new Static("Static17_00","99","2489",null,"520","0",null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("");
            obj.set_cssclass("sta_WF_GArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static08_03","109","2498","255","25",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("Normal");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid02","109","2533","561","172",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_grid");
            obj.set_selecttype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"34\"/></Rows><Band id=\"head\"><Cell text=\"Edit\"/><Cell col=\"1\" text=\"MaskEdit\"/><Cell col=\"2\" text=\"Combo\"/><Cell col=\"3\" text=\"Calendar\"/><Cell col=\"4\" text=\"Expand\"/><Cell col=\"5\" text=\"Normal\"/><Cell col=\"6\" text=\"Number\"/><Cell col=\"7\" text=\"Button\"/><Cell col=\"8\" text=\"ProgressBar\"/></Band><Band id=\"body\"><Cell text=\"bind:Edit\" displaytype=\"editcontrol\" edittype=\"normal\"/><Cell col=\"1\" text=\"bind:MaskEdit\" displaytype=\"maskeditcontrol\" edittype=\"mask\"/><Cell col=\"2\" text=\"bind:Combo\" edittype=\"combo\" displaytype=\"combocontrol\"/><Cell col=\"3\" text=\"bind:Calendar\" displaytype=\"calendarcontrol\" edittype=\"date\" calendardateformat=\"yyyy-MM-dd\" calendarweekformat=\"일 월 화 수 목 금 토\" calendarautoselect=\"false\"/><Cell col=\"4\" text=\"bind:Expand\" displaytype=\"editcontrol\" expandshow=\"show\" expandsize=\"26\"/><Cell col=\"5\" text=\"bind:Normal\" edittype=\"text\"/><Cell col=\"6\" text=\"bind:Number\" displaytype=\"number\"/><Cell col=\"7\" text=\"bind:Button\" displaytype=\"buttoncontrol\" edittype=\"button\"/><Cell col=\"8\" text=\"bind:ProgressBar\" displaytype=\"progressbarcontrol\" progressbarsmooth=\"true\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","725","2533","236","172",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_cssclass("grd_WF_tree");
            obj.set_binddataset("ds_tree");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"234\"/></Columns><Rows><Row size=\"32\"/></Rows><Band id=\"body\"><Cell displaytype=\"treeitemcontrol\" edittype=\"tree\" text=\"bind:code\" treelevel=\"bind:level\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static08_03_00","725","2497","255","25",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("Tree Grid");
            this.addChild(obj.name, obj);

            obj = new Static("Static14_00_00_01","715","181","150","45",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("소타이틀");
            obj.set_enable("true");
            obj.set_cssclass("sta_WF_subTitle02");
            this.addChild(obj.name, obj);

            obj = new Static("Static09_00_00_01","715","137","165","25",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("class = sta_WF_subTitle02");
            obj.set_cssclass("sta_WF_GStatus");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_07","0","2371","100","119",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_text("Radio");
            obj.set_cssclass("sta_WF_GLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_04","99","2371",null,"119","0",null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_text("");
            obj.set_cssclass("sta_WF_GArea");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            this.addChild(obj.name, obj);

            obj = new Static("Static08_07","109","2380","111","25",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_text("[status=enabled] ");
            obj.set_cssclass("sta_WF_GStatus");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00","109","2420","195","26",null,null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_innerdataset("ds_radio");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_direction("vertical");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_08","0","3008","100","231",null,null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_text("Tab");
            obj.set_cssclass("sta_WF_GLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_04","99","3008",null,"231","0",null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_text("");
            obj.set_cssclass("sta_WF_GArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static08_08","109","3017","235","25",null,null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_text("class = tab_WF_comp");
            obj.set_cssclass("sta_WF_GStatus");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            this.addChild(obj.name, obj);

            obj = new Tab("Tab03","109","3058","594","167",null,null,null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_tabindex("0");
            obj.set_tabbuttonheight("34");
            obj.set_cssclass("tab_WF_comp");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Tab03);
            obj.set_text("Tabpage1");
            this.Tab03.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Tab03);
            obj.set_text("Tabpage2");
            this.Tab03.addChild(obj.name, obj);

            obj = new Static("Static04_01_01","199","168","9","58",null,null,null,null,null,null,this);
            obj.set_taborder("65");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00_00_01","209","188","32","18",null,null,null,null,null,null,this);
            obj.set_taborder("66");
            obj.set_text("H 58");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_01_01_00","507","181","9","45",null,null,null,null,null,null,this);
            obj.set_taborder("67");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00_00_01_00","517","194","32","18",null,null,null,null,null,null,this);
            obj.set_taborder("68");
            obj.set_text("H 45");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_01_01_00_00","804","181","9","45",null,null,null,null,null,null,this);
            obj.set_taborder("71");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00_00_01_00_00","814","194","32","18",null,null,null,null,null,null,this);
            obj.set_taborder("72");
            obj.set_text("H 45");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_01_00","427","384","39","28",null,null,null,null,null,null,this);
            obj.set_taborder("75");
            obj.set_text("W 150");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_00","371","403","150","9",null,null,null,null,null,null,this);
            obj.set_taborder("78");
            obj.set_cssclass("sta_WF_GLineH");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_01_00_00","176","78","9","30",null,null,null,null,null,null,this);
            obj.set_taborder("69");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00_01_00","183","85","32","18",null,null,null,null,null,null,this);
            obj.set_taborder("74");
            obj.set_text("H 30");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_01_00_00_00","175","884","9","28",null,null,null,null,null,null,this);
            obj.set_taborder("76");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00_01_00_00","182","889","32","18",null,null,null,null,null,null,this);
            obj.set_taborder("77");
            obj.set_text("H 28");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static08_00_00_00_00","310","834","167","25",null,null,null,null,null,null,this);
            obj.set_taborder("79");
            obj.set_text("class = btn_WF_frmSearch");
            obj.set_cssclass("sta_WF_GStatus");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            this.addChild(obj.name, obj);

            obj = new Button("Button04","311","889","26","26",null,null,null,null,null,null,this);
            obj.set_taborder("80");
            obj.set_cssclass("btn_WF_frmSearch");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_01_00","340","889","9","26",null,null,null,null,null,null,this);
            obj.set_taborder("81");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00_00_00","349","889","32","26",null,null,null,null,null,null,this);
            obj.set_taborder("82");
            obj.set_text("H 26");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_02_00","311","922","28","22",null,null,null,null,null,null,this);
            obj.set_taborder("83");
            obj.set_text("W 26");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_01","311","918","26","9",null,null,null,null,null,null,this);
            obj.set_taborder("84");
            obj.set_cssclass("sta_WF_GLineH");
            this.addChild(obj.name, obj);

            obj = new Static("Static14_00_02","371","289","100","26",null,null,null,null,null,null,this);
            obj.set_taborder("85");
            obj.set_text("Label");
            obj.set_enable("true");
            obj.set_cssclass("sta_WF_condition01");
            this.addChild(obj.name, obj);

            obj = new Static("Static09_00_02","110","290","190","25",null,null,null,null,null,null,this);
            obj.set_taborder("86");
            obj.set_text("class = sta_WF_condition01");
            obj.set_cssclass("sta_WF_GStatus");
            this.addChild(obj.name, obj);

            obj = new Static("Static14_00_00_02","371","416","150","34",null,null,null,null,null,null,this);
            obj.set_taborder("87");
            obj.set_text("Label");
            obj.set_enable("true");
            obj.set_cssclass("sta_WF_condition02_L");
            this.addChild(obj.name, obj);

            obj = new Static("Static09_00_00_02","110","421","205","25",null,null,null,null,null,null,this);
            obj.set_taborder("88");
            obj.set_text("class = sta_WF_condition02_L");
            obj.set_cssclass("sta_WF_GStatus");
            this.addChild(obj.name, obj);

            obj = new Static("Static14_00_00_01_00","371","577","150","34",null,null,null,null,null,null,this);
            obj.set_taborder("89");
            obj.set_text("Label");
            obj.set_enable("true");
            obj.set_cssclass("sta_WF_condition02");
            this.addChild(obj.name, obj);

            obj = new Static("Static09_00_00_01_00","110","582","190","25",null,null,null,null,null,null,this);
            obj.set_taborder("90");
            obj.set_text("class = sta_WF_condition02");
            obj.set_cssclass("sta_WF_GStatus");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_01_01_01","473","289","9","26",null,null,null,null,null,null,this);
            obj.set_taborder("91");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00_00_01_01","483","293","32","18",null,null,null,null,null,null,this);
            obj.set_taborder("92");
            obj.set_text("H 26");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_01_01_00_01","525","416","9","34",null,null,null,null,null,null,this);
            obj.set_taborder("93");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00_00_01_00_01","535","424","32","18",null,null,null,null,null,null,this);
            obj.set_taborder("94");
            obj.set_text("H 34");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_01_01_00_00_00","525","577","9","34",null,null,null,null,null,null,this);
            obj.set_taborder("95");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00_00_01_00_00_00","535","585","32","18",null,null,null,null,null,null,this);
            obj.set_taborder("96");
            obj.set_text("H 34");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_01_00_00","427","545","39","28",null,null,null,null,null,null,this);
            obj.set_taborder("97");
            obj.set_text("W 150");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_00","371","566","150","9",null,null,null,null,null,null,this);
            obj.set_taborder("98");
            obj.set_cssclass("sta_WF_GLineH");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_01_00_01","401","257","39","28",null,null,null,null,null,null,this);
            obj.set_taborder("99");
            obj.set_text("W 100");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_01","370","276","100","9",null,null,null,null,null,null,this);
            obj.set_taborder("100");
            obj.set_cssclass("sta_WF_GLineH");
            this.addChild(obj.name, obj);

            obj = new Static("Static14_00_00_01_00_00","370","726","150","34",null,null,null,null,null,null,this);
            obj.set_taborder("101");
            obj.set_text("Area");
            obj.set_enable("true");
            obj.set_cssclass("sta_WF_condition02box");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_01_01_00_00_00_00","525","726","9","34",null,null,null,null,null,null,this);
            obj.set_taborder("102");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00_00_01_00_00_00_00","535","733","32","18",null,null,null,null,null,null,this);
            obj.set_taborder("103");
            obj.set_text("H 34");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static09_00_00_01_00_00","110","730","210","25",null,null,null,null,null,null,this);
            obj.set_taborder("104");
            obj.set_text("class = sta_WF_condition02box");
            obj.set_cssclass("sta_WF_GStatus");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_01_00_00","262","1707","9","26",null,null,null,null,null,null,this);
            obj.set_taborder("105");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00_00_00_00","271","1707","32","26",null,null,null,null,null,null,this);
            obj.set_taborder("106");
            obj.set_text("H 26");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_01_00_00_00","261","1816","9","26",null,null,null,null,null,null,this);
            obj.set_taborder("70");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00_00_00_00_00","270","1816","32","26",null,null,null,null,null,null,this);
            obj.set_taborder("73");
            obj.set_text("H 26");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_02_00_00","129","2451","28","22",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_text("W 12");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_01_00","137","2438","12","9",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_cssclass("sta_WF_GLineH");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_01_00_00_00_00","201","2307","9","26",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00_00_00_00_00_00","211","2307","32","26",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_text("H 26");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_01_00_00_00_00_00","183","2420","9","26",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00_00_00_00_00_00_00","193","2420","32","26",null,null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_text("H 26");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_01_00_00_00_01","260","1925","9","26",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00_00_00_00_00_01","270","1925","32","26",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_text("H 26");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_01_00_00_00_00_00_00","669","2533","9","30",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00_00_00_00_00_00_00_00","679","2533","32","26",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("H 30");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_01_00_00_00_00_00_00_00","306","3058","9","34",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00_00_00_00_00_00_00_00_00","316","3062","32","26",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_text("H 34");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_01_00_00_00_00_00_01","163","2568","9","26",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00_00_00_00_00_00_00_01","173","2568","32","26",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_text("H 26");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_01_00_00_00_00_00_00_00_00","960","2533","9","32",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_cssclass("sta_WF_GLineV");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00_00_00_00_00_00_00_00_00_00","970","2538","32","26",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_text("H 32");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_01_01","109","915","65","9",null,null,null,null,null,null,this);
            obj.set_taborder("107");
            obj.set_cssclass("sta_WF_GLineH");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_02_00_01","127","919","28","22",null,null,null,null,null,null,this);
            obj.set_taborder("108");
            obj.set_text("W 65");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static08_00_00","109","1008","117","25",null,null,null,null,null,null,this);
            obj.set_taborder("109");
            obj.set_text("버튼 두글자인경우");
            obj.set_cssclass("sta_WF_GStatus");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            this.addChild(obj.name, obj);

            obj = new Button("Button02_00","141","1059","61","28",null,null,null,null,null,null,this);
            obj.set_taborder("114");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_icoAdd");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_01_00_00_00_00","205","1059","9","28",null,null,null,null,null,null,this);
            obj.set_taborder("110");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00_01_00_00_00","212","1064","32","18",null,null,null,null,null,null,this);
            obj.set_taborder("111");
            obj.set_text("H 28");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_01_01_00","141","1090","61","9",null,null,null,null,null,null,this);
            obj.set_taborder("112");
            obj.set_cssclass("sta_WF_GLineH");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_02_00_01_00","158","1094","28","22",null,null,null,null,null,null,this);
            obj.set_taborder("113");
            obj.set_text("W 61");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_01_01_00_00","141","1050","8","9",null,null,null,null,null,null,this);
            obj.set_taborder("115");
            obj.set_cssclass("sta_WF_GLineH");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_02_00_01_00_00","134","1030","28","22",null,null,null,null,null,null,this);
            obj.set_taborder("116");
            obj.set_text("W 8");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_01_01_00_00_00","194","1050","8","9",null,null,null,null,null,null,this);
            obj.set_taborder("117");
            obj.set_cssclass("sta_WF_GLineH");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_02_00_01_00_00_00","188","1030","28","22",null,null,null,null,null,null,this);
            obj.set_taborder("118");
            obj.set_text("W 8");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_01_01_00_00_01","165","1050","5","9",null,null,null,null,null,null,this);
            obj.set_taborder("119");
            obj.set_cssclass("sta_WF_GLineH");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_02_00_01_00_00_01","158","1030","24","22",null,null,null,null,null,null,this);
            obj.set_taborder("120");
            obj.set_text("W 5");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_01_00_00_00_00_00","132","1081","9","6",null,null,null,null,null,null,this);
            obj.set_taborder("121");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00_01_00_00_00_00","109","1074","32","18",null,null,null,null,null,null,this);
            obj.set_taborder("122");
            obj.set_text("H 6");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00_01_00_00_00_00_00","110","1052","32","18",null,null,null,null,null,null,this);
            obj.set_taborder("123");
            obj.set_text("H 6");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_01_00_00_00_00_00_00","132","1059","9","6",null,null,null,null,null,null,this);
            obj.set_taborder("124");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("Static08_00_00_00","311","1008","117","25",null,null,null,null,null,null,this);
            obj.set_taborder("125");
            obj.set_text("버튼 세글자인경우");
            obj.set_cssclass("sta_WF_GStatus");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            this.addChild(obj.name, obj);

            obj = new Button("Button02_00_00","343","1059","73","28",null,null,null,null,null,null,this);
            obj.set_taborder("126");
            obj.set_text("업로드");
            obj.set_cssclass("btn_WF_icoUpload");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_01_00_00_00_00_01","419","1059","9","28",null,null,null,null,null,null,this);
            obj.set_taborder("127");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00_01_00_00_00_01","426","1064","32","18",null,null,null,null,null,null,this);
            obj.set_taborder("128");
            obj.set_text("H 28");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_01_01_00_01","343","1089","73","9",null,null,null,null,null,null,this);
            obj.set_taborder("129");
            obj.set_cssclass("sta_WF_GLineH");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_02_00_01_00_01","367","1093","28","22",null,null,null,null,null,null,this);
            obj.set_taborder("130");
            obj.set_text("W 73");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_01_01_00_00_02","343","1050","8","9",null,null,null,null,null,null,this);
            obj.set_taborder("131");
            obj.set_cssclass("sta_WF_GLineH");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_02_00_01_00_00_02","336","1030","28","22",null,null,null,null,null,null,this);
            obj.set_taborder("132");
            obj.set_text("W 8");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_01_01_00_00_00_00","408","1050","8","9",null,null,null,null,null,null,this);
            obj.set_taborder("133");
            obj.set_cssclass("sta_WF_GLineH");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_02_00_01_00_00_00_00","402","1030","28","22",null,null,null,null,null,null,this);
            obj.set_taborder("134");
            obj.set_text("W 8");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_01_01_00_00_01_00","367","1050","5","9",null,null,null,null,null,null,this);
            obj.set_taborder("135");
            obj.set_cssclass("sta_WF_GLineH");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_02_00_01_00_00_01_00","360","1030","24","22",null,null,null,null,null,null,this);
            obj.set_taborder("136");
            obj.set_text("W 5");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_01_00_00_00_00_00_01","334","1081","9","6",null,null,null,null,null,null,this);
            obj.set_taborder("137");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00_01_00_00_00_00_01","311","1074","32","18",null,null,null,null,null,null,this);
            obj.set_taborder("138");
            obj.set_text("H 6");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00_01_00_00_00_00_00_00","311","1052","32","18",null,null,null,null,null,null,this);
            obj.set_taborder("139");
            obj.set_text("H 6");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_01_00_00_00_00_00_00_00","334","1059","9","6",null,null,null,null,null,null,this);
            obj.set_taborder("140");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("Static08_00_00_00_01","550","1007","117","25",null,null,null,null,null,null,this);
            obj.set_taborder("141");
            obj.set_text("버튼 네글자인경우");
            obj.set_cssclass("sta_WF_GStatus");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            this.addChild(obj.name, obj);

            obj = new Button("Button02_00_00_00","582","1059","85","28",null,null,null,null,null,null,this);
            obj.set_taborder("142");
            obj.set_text("결재상신");
            obj.set_cssclass("btn_WF_icoApproval");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_01_00_00_00_00_01_00","669","1059","9","28",null,null,null,null,null,null,this);
            obj.set_taborder("143");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00_01_00_00_00_01_00","676","1064","32","18",null,null,null,null,null,null,this);
            obj.set_taborder("144");
            obj.set_text("H 28");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_01_01_00_01_00","582","1088","85","9",null,null,null,null,null,null,this);
            obj.set_taborder("145");
            obj.set_cssclass("sta_WF_GLineH");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_02_00_01_00_01_00","612","1092","28","22",null,null,null,null,null,null,this);
            obj.set_taborder("146");
            obj.set_text("W 85");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_01_01_00_00_02_00","582","1050","8","9",null,null,null,null,null,null,this);
            obj.set_taborder("147");
            obj.set_cssclass("sta_WF_GLineH");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_02_00_01_00_00_02_00","575","1030","28","22",null,null,null,null,null,null,this);
            obj.set_taborder("148");
            obj.set_text("W 8");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_01_01_00_00_00_00_00","659","1049","8","9",null,null,null,null,null,null,this);
            obj.set_taborder("149");
            obj.set_cssclass("sta_WF_GLineH");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_02_00_01_00_00_00_00_00","652","1030","28","22",null,null,null,null,null,null,this);
            obj.set_taborder("150");
            obj.set_text("W 8");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_01_01_00_00_01_00_00","606","1050","5","9",null,null,null,null,null,null,this);
            obj.set_taborder("151");
            obj.set_cssclass("sta_WF_GLineH");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_02_00_01_00_00_01_00_00","599","1030","24","22",null,null,null,null,null,null,this);
            obj.set_taborder("152");
            obj.set_text("W 5");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_01_00_00_00_00_00_01_00","573","1081","9","6",null,null,null,null,null,null,this);
            obj.set_taborder("153");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00_01_00_00_00_00_01_00","550","1074","32","18",null,null,null,null,null,null,this);
            obj.set_taborder("154");
            obj.set_text("H 6");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00_01_00_00_00_00_00_00_00","552","1052","32","18",null,null,null,null,null,null,this);
            obj.set_taborder("155");
            obj.set_text("H 6");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_01_00_00_00_00_00_00_00_00","573","1059","9","6",null,null,null,null,null,null,this);
            obj.set_taborder("156");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("Static08_00_00_00_01_00","777","1008","131","25",null,null,null,null,null,null,this);
            obj.set_taborder("157");
            obj.set_text("버튼 다섯글자인경우");
            obj.set_cssclass("sta_WF_GStatus");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            this.addChild(obj.name, obj);

            obj = new Button("Button02_00_00_00_00","809","1059","102","28",null,null,null,null,null,null,this);
            obj.set_taborder("158");
            obj.set_text("내용지우기");
            obj.set_cssclass("btn_WF_icoContDelete");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_01_00_00_00_00_01_00_00","915","1059","9","28",null,null,null,null,null,null,this);
            obj.set_taborder("159");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00_01_00_00_00_01_00_00","922","1064","32","18",null,null,null,null,null,null,this);
            obj.set_taborder("160");
            obj.set_text("H 28");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_01_01_00_01_00_00","809","1088","102","9",null,null,null,null,null,null,this);
            obj.set_taborder("161");
            obj.set_cssclass("sta_WF_GLineH");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_01_01_00_00_02_00_00","809","1050","8","9",null,null,null,null,null,null,this);
            obj.set_taborder("162");
            obj.set_cssclass("sta_WF_GLineH");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_02_00_01_00_00_02_00_00","797","1030","28","22",null,null,null,null,null,null,this);
            obj.set_taborder("163");
            obj.set_text("W 8");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_01_01_00_00_00_00_00_00","904","1050","8","9",null,null,null,null,null,null,this);
            obj.set_taborder("164");
            obj.set_cssclass("sta_WF_GLineH");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_02_00_01_00_00_00_00_00_00","897","1031","28","22",null,null,null,null,null,null,this);
            obj.set_taborder("165");
            obj.set_text("W 8");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_01_01_00_00_01_00_00_00","833","1050","5","9",null,null,null,null,null,null,this);
            obj.set_taborder("166");
            obj.set_cssclass("sta_WF_GLineH");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_02_00_01_00_00_01_00_00_00","821","1030","24","22",null,null,null,null,null,null,this);
            obj.set_taborder("167");
            obj.set_text("W 5");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_01_00_00_00_00_00_01_00_00","800","1081","9","6",null,null,null,null,null,null,this);
            obj.set_taborder("168");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00_01_00_00_00_00_01_00_00","777","1074","32","18",null,null,null,null,null,null,this);
            obj.set_taborder("169");
            obj.set_text("H 6");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00_01_00_00_00_00_00_00_00_00","779","1052","32","18",null,null,null,null,null,null,this);
            obj.set_taborder("170");
            obj.set_text("H 6");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_01_00_00_00_00_00_00_00_00_00","800","1059","9","6",null,null,null,null,null,null,this);
            obj.set_taborder("171");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("Static08_00_00_01","109","1174","117","25",null,null,null,null,null,null,this);
            obj.set_taborder("172");
            obj.set_text("버튼 두글자인경우");
            obj.set_cssclass("sta_WF_GStatus");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_01_00_00_00_00_02","203","1225","9","26",null,null,null,null,null,null,this);
            obj.set_taborder("173");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00_01_00_00_00_02","210","1230","32","18",null,null,null,null,null,null,this);
            obj.set_taborder("174");
            obj.set_text("H 26");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_01_01_00_02","141","1256","61","9",null,null,null,null,null,null,this);
            obj.set_taborder("175");
            obj.set_cssclass("sta_WF_GLineH");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_02_00_01_00_02","155","1260","28","22",null,null,null,null,null,null,this);
            obj.set_taborder("176");
            obj.set_text("W 61");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_01_01_00_00_03","141","1216","8","9",null,null,null,null,null,null,this);
            obj.set_taborder("177");
            obj.set_cssclass("sta_WF_GLineH");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_02_00_01_00_00_03","134","1196","28","22",null,null,null,null,null,null,this);
            obj.set_taborder("178");
            obj.set_text("W 8");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_01_01_00_00_00_01","194","1216","8","9",null,null,null,null,null,null,this);
            obj.set_taborder("179");
            obj.set_cssclass("sta_WF_GLineH");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_02_00_01_00_00_00_01","188","1196","28","22",null,null,null,null,null,null,this);
            obj.set_taborder("180");
            obj.set_text("W 8");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_01_01_00_00_01_01","163","1216","5","9",null,null,null,null,null,null,this);
            obj.set_taborder("181");
            obj.set_cssclass("sta_WF_GLineH");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_02_00_01_00_00_01_01","156","1196","24","22",null,null,null,null,null,null,this);
            obj.set_taborder("182");
            obj.set_text("W 5");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_01_00_00_00_00_00_02","132","1244","9","6",null,null,null,null,null,null,this);
            obj.set_taborder("183");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00_01_00_00_00_00_02","109","1237","32","18",null,null,null,null,null,null,this);
            obj.set_taborder("184");
            obj.set_text("H 6");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00_01_00_00_00_00_00_01","110","1218","32","18",null,null,null,null,null,null,this);
            obj.set_taborder("185");
            obj.set_text("H 6");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_01_00_00_00_00_00_00_01","132","1225","9","6",null,null,null,null,null,null,this);
            obj.set_taborder("186");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("Static08_00_00_00_02","311","1174","117","25",null,null,null,null,null,null,this);
            obj.set_taborder("187");
            obj.set_text("버튼 세글자인경우");
            obj.set_cssclass("sta_WF_GStatus");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            this.addChild(obj.name, obj);

            obj = new Button("Button02_00_00_01","343","1225","73","26",null,null,null,null,null,null,this);
            obj.set_taborder("188");
            obj.set_text("업로드");
            obj.set_cssclass("btn_WF_grdUpload");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_01_00_00_00_00_01_01","419","1225","9","26",null,null,null,null,null,null,this);
            obj.set_taborder("189");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00_01_00_00_00_01_01","426","1230","32","18",null,null,null,null,null,null,this);
            obj.set_taborder("190");
            obj.set_text("H 26");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_01_01_00_01_01","343","1255","73","9",null,null,null,null,null,null,this);
            obj.set_taborder("191");
            obj.set_cssclass("sta_WF_GLineH");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_02_00_01_00_01_01","366","1259","28","22",null,null,null,null,null,null,this);
            obj.set_taborder("192");
            obj.set_text("W 73");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_01_01_00_00_02_01","343","1216","8","9",null,null,null,null,null,null,this);
            obj.set_taborder("193");
            obj.set_cssclass("sta_WF_GLineH");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_02_00_01_00_00_02_01","336","1196","28","22",null,null,null,null,null,null,this);
            obj.set_taborder("194");
            obj.set_text("W 8");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_01_01_00_00_00_00_01","408","1216","8","9",null,null,null,null,null,null,this);
            obj.set_taborder("195");
            obj.set_cssclass("sta_WF_GLineH");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_02_00_01_00_00_00_00_01","402","1196","28","22",null,null,null,null,null,null,this);
            obj.set_taborder("196");
            obj.set_text("W 8");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_01_01_00_00_01_00_01","365","1216","5","9",null,null,null,null,null,null,this);
            obj.set_taborder("197");
            obj.set_cssclass("sta_WF_GLineH");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_02_00_01_00_00_01_00_01","358","1196","24","22",null,null,null,null,null,null,this);
            obj.set_taborder("198");
            obj.set_text("W 5");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_01_00_00_00_00_00_01_01","334","1244","9","6",null,null,null,null,null,null,this);
            obj.set_taborder("199");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00_01_00_00_00_00_01_01","311","1237","32","18",null,null,null,null,null,null,this);
            obj.set_taborder("200");
            obj.set_text("H 6");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00_01_00_00_00_00_00_00_01","311","1218","32","18",null,null,null,null,null,null,this);
            obj.set_taborder("201");
            obj.set_text("H 6");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_01_00_00_00_00_00_00_00_01","334","1225","9","6",null,null,null,null,null,null,this);
            obj.set_taborder("202");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("Static08_00_00_00_01_01","550","1173","117","25",null,null,null,null,null,null,this);
            obj.set_taborder("203");
            obj.set_text("버튼 네글자인경우");
            obj.set_cssclass("sta_WF_GStatus");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            this.addChild(obj.name, obj);

            obj = new Button("Button02_00_00_00_01","582","1225","85","26",null,null,null,null,null,null,this);
            obj.set_taborder("204");
            obj.set_text("결재상신");
            obj.set_cssclass("btn_WF_grdApproval");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_01_00_00_00_00_01_00_01","670","1225","9","26",null,null,null,null,null,null,this);
            obj.set_taborder("205");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00_01_00_00_00_01_00_01","677","1230","32","18",null,null,null,null,null,null,this);
            obj.set_taborder("206");
            obj.set_text("H 26");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_01_01_00_01_00_01","582","1254","85","9",null,null,null,null,null,null,this);
            obj.set_taborder("207");
            obj.set_cssclass("sta_WF_GLineH");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_02_00_01_00_01_00_01","610","1258","28","22",null,null,null,null,null,null,this);
            obj.set_taborder("208");
            obj.set_text("W 85");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_01_01_00_00_02_00_01","582","1216","8","9",null,null,null,null,null,null,this);
            obj.set_taborder("209");
            obj.set_cssclass("sta_WF_GLineH");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_02_00_01_00_00_02_00_01","575","1196","28","22",null,null,null,null,null,null,this);
            obj.set_taborder("210");
            obj.set_text("W 8");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_01_01_00_00_00_00_00_01","659","1215","8","9",null,null,null,null,null,null,this);
            obj.set_taborder("211");
            obj.set_cssclass("sta_WF_GLineH");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_02_00_01_00_00_00_00_00_01","652","1196","28","22",null,null,null,null,null,null,this);
            obj.set_taborder("212");
            obj.set_text("W 8");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_01_01_00_00_01_00_00_01","604","1216","5","9",null,null,null,null,null,null,this);
            obj.set_taborder("213");
            obj.set_cssclass("sta_WF_GLineH");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_02_00_01_00_00_01_00_00_01","597","1196","24","22",null,null,null,null,null,null,this);
            obj.set_taborder("214");
            obj.set_text("W 5");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_01_00_00_00_00_00_01_00_01","573","1245","9","6",null,null,null,null,null,null,this);
            obj.set_taborder("215");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00_01_00_00_00_00_01_00_01","550","1236","32","18",null,null,null,null,null,null,this);
            obj.set_taborder("216");
            obj.set_text("H 6");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00_01_00_00_00_00_00_00_00_01","552","1218","32","18",null,null,null,null,null,null,this);
            obj.set_taborder("217");
            obj.set_text("H 6");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_01_00_00_00_00_00_00_00_00_01","573","1225","9","6",null,null,null,null,null,null,this);
            obj.set_taborder("218");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("Static08_00_00_00_01_00_00","777","1174","131","25",null,null,null,null,null,null,this);
            obj.set_taborder("219");
            obj.set_text("버튼 다섯글자인경우");
            obj.set_cssclass("sta_WF_GStatus");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            this.addChild(obj.name, obj);

            obj = new Button("Button02_00_00_00_00_00","809","1225","97","26",null,null,null,null,null,null,this);
            obj.set_taborder("220");
            obj.set_text("내용지우기");
            obj.set_cssclass("btn_WF_grdContDelete");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_01_00_00_00_00_01_00_00_00","909","1225","9","26",null,null,null,null,null,null,this);
            obj.set_taborder("221");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00_01_00_00_00_01_00_00_00","916","1230","32","18",null,null,null,null,null,null,this);
            obj.set_taborder("222");
            obj.set_text("H 26");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_01_01_00_01_00_00_00","809","1253","97","9",null,null,null,null,null,null,this);
            obj.set_taborder("223");
            obj.set_cssclass("sta_WF_GLineH");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_02_00_01_00_01_00_00_00","843","1257","28","22",null,null,null,null,null,null,this);
            obj.set_taborder("224");
            obj.set_text("W 97");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_01_01_00_00_02_00_00_00","809","1216","8","9",null,null,null,null,null,null,this);
            obj.set_taborder("225");
            obj.set_cssclass("sta_WF_GLineH");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_02_00_01_00_00_02_00_00_00","797","1196","28","22",null,null,null,null,null,null,this);
            obj.set_taborder("226");
            obj.set_text("W 8");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_01_01_00_00_00_00_00_00_00","898","1216","8","9",null,null,null,null,null,null,this);
            obj.set_taborder("227");
            obj.set_cssclass("sta_WF_GLineH");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_02_00_01_00_00_00_00_00_00_00","893","1197","28","22",null,null,null,null,null,null,this);
            obj.set_taborder("228");
            obj.set_text("W 8");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_01_01_00_00_01_00_00_00_00","831","1216","5","9",null,null,null,null,null,null,this);
            obj.set_taborder("229");
            obj.set_cssclass("sta_WF_GLineH");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_02_00_01_00_00_01_00_00_00_00","825","1196","24","22",null,null,null,null,null,null,this);
            obj.set_taborder("230");
            obj.set_text("W 5");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_01_00_00_00_00_00_01_00_00_00","800","1247","9","6",null,null,null,null,null,null,this);
            obj.set_taborder("231");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00_01_00_00_00_00_01_00_00_00","777","1240","32","18",null,null,null,null,null,null,this);
            obj.set_taborder("232");
            obj.set_text("H 6");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00_01_00_00_00_00_00_00_00_00_00","779","1218","32","18",null,null,null,null,null,null,this);
            obj.set_taborder("233");
            obj.set_text("H 6");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_01_00_00_00_00_00_00_00_00_00_00","800","1225","9","6",null,null,null,null,null,null,this);
            obj.set_taborder("234");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Button("Button02_00_01","141","1225","61","26",null,null,null,null,null,null,this);
            obj.set_taborder("235");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_grdAdd");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_02_00_01_00_01_00_02","843","1092","35","22",null,null,null,null,null,null,this);
            obj.set_taborder("236");
            obj.set_text("W 102");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_02_00_01_00_00_04","109","969","171","40",null,null,null,null,null,null,this);
            obj.set_taborder("237");
            obj.set_text("CRUD 공통버튼\r\n- font-size : 12px");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_02_00_01_00_00_04_00","108","1133","171","40",null,null,null,null,null,null,this);
            obj.set_taborder("238");
            obj.set_text("폼버튼\r\n- font-size : 12px");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_02","370","493","150","9",null,null,null,null,null,null,this);
            obj.set_taborder("239");
            obj.set_cssclass("sta_WF_GLineH");
            this.addChild(obj.name, obj);

            obj = new Static("Static14_00_00_02_00","370","503","150","34",null,null,null,null,null,null,this);
            obj.set_taborder("240");
            obj.set_text("Label");
            obj.set_enable("true");
            obj.set_cssclass("sta_WF_condition02_LEssential");
            this.addChild(obj.name, obj);

            obj = new Static("Static09_00_00_02_00","110","508","253","25",null,null,null,null,null,null,this);
            obj.set_taborder("241");
            obj.set_text("class = sta_WF_condition02_LEssential");
            obj.set_cssclass("sta_WF_GStatus");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_01_01_00_01_00","525","503","9","34",null,null,null,null,null,null,this);
            obj.set_taborder("242");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00_00_01_00_01_00","535","511","32","18",null,null,null,null,null,null,this);
            obj.set_taborder("243");
            obj.set_text("H 34");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static09_00_00_01_00_01","110","656","247","25",null,null,null,null,null,null,this);
            obj.set_taborder("244");
            obj.set_text("class = sta_WF_condition02Essential");
            obj.set_cssclass("sta_WF_GStatus");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_01_01_00_00_00_01","525","651","9","34",null,null,null,null,null,null,this);
            obj.set_taborder("245");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00_00_01_00_00_00_01","535","659","32","18",null,null,null,null,null,null,this);
            obj.set_taborder("246");
            obj.set_text("H 34");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_01_00_00_00","426","618","39","28",null,null,null,null,null,null,this);
            obj.set_taborder("247");
            obj.set_text("W 150");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_00_00","370","637","150","9",null,null,null,null,null,null,this);
            obj.set_taborder("248");
            obj.set_cssclass("sta_WF_GLineH");
            this.addChild(obj.name, obj);

            obj = new Static("Static14_00_00_01_00_01","370","651","150","34",null,null,null,null,null,null,this);
            obj.set_taborder("249");
            obj.set_text("Label");
            obj.set_enable("true");
            obj.set_cssclass("sta_WF_condition02Essential");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_01_00_02","426","473","39","28",null,null,null,null,null,null,this);
            obj.set_taborder("250");
            obj.set_text("W 150");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_01_00_00_00_00_00_00_00_01","669","2563","9","34",null,null,null,null,null,null,this);
            obj.set_taborder("251");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00_00_00_00_00_00_00_00_00_01","679","2567","32","26",null,null,null,null,null,null,this);
            obj.set_taborder("252");
            obj.set_text("H 34");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static08_03_01","108","2727","255","25",null,null,null,null,null,null,this);
            obj.set_taborder("253");
            obj.set_text("Normal");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid02_00","109","2762","561","202",null,null,null,null,null,null,this);
            obj.set_taborder("254");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_grid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"34\"/><Row size=\"34\"/></Rows><Band id=\"head\"><Cell text=\"Edit\"/><Cell col=\"1\" text=\"MaskEdit\"/><Cell col=\"2\" text=\"Combo\"/><Cell col=\"3\" text=\"Calendar\"/><Cell col=\"4\" text=\"Expand\"/><Cell col=\"5\" text=\"Normal\"/><Cell col=\"6\" text=\"Number\"/><Cell col=\"7\" text=\"Button\"/><Cell col=\"8\" text=\"ProgressBar\"/><Cell row=\"1\" text=\"Image\"/><Cell row=\"1\" col=\"1\" text=\"Mask\"/><Cell row=\"1\" col=\"2\" text=\"Checkbox\"/><Cell row=\"1\" col=\"3\" text=\"Date\"/><Cell row=\"1\" col=\"4\" text=\"Radio\"/><Cell row=\"1\" col=\"5\"/><Cell row=\"1\" col=\"6\"/><Cell row=\"1\" col=\"7\"/><Cell row=\"1\" col=\"8\"/></Band><Band id=\"body\"><Cell text=\"bind:Edit\" displaytype=\"editcontrol\" edittype=\"text\"/><Cell col=\"1\" text=\"bind:MaskEdit\" displaytype=\"maskeditcontrol\" edittype=\"mask\"/><Cell col=\"2\" text=\"bind:Combo\" edittype=\"combo\" displaytype=\"combocontrol\"/><Cell col=\"3\" text=\"bind:Calendar\" displaytype=\"calendarcontrol\" edittype=\"button\"/><Cell col=\"4\" text=\"bind:Expand\" displaytype=\"editcontrol\" expandshow=\"show\" expandsize=\"26\"/><Cell col=\"5\" text=\"bind:Normal\" edittype=\"text\"/><Cell col=\"6\" text=\"bind:Number\" displaytype=\"number\"/><Cell col=\"7\" text=\"bind:Button\" displaytype=\"buttoncontrol\" edittype=\"button\"/><Cell col=\"8\" text=\"bind:ProgressBar\" displaytype=\"progressbarcontrol\" progressbarsmooth=\"true\"/><Cell row=\"1\" displaytype=\"imagecontrol\" text=\"bind:Image\"/><Cell row=\"1\" col=\"1\" displaytype=\"mask\" edittype=\"mask\" text=\"bind:Mask\"/><Cell row=\"1\" col=\"2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CheckBox\"/><Cell row=\"1\" col=\"3\" displaytype=\"date\" edittype=\"date\" text=\"bind:Date\"/><Cell row=\"1\" col=\"4\" displaytype=\"radioitemcontrol\" edittype=\"radioitem\" radioitemcodevalue=\"bind:Edit\" text=\"bind:Radio\"/><Cell row=\"1\" col=\"5\"/><Cell row=\"1\" col=\"6\"/><Cell row=\"1\" col=\"7\"/><Cell row=\"1\" col=\"8\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_01_00_00_00_00_00_00_01","668","2762","9","30",null,null,null,null,null,null,this);
            obj.set_taborder("255");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00_00_00_00_00_00_00_00_01","678","2762","32","30",null,null,null,null,null,null,this);
            obj.set_taborder("256");
            obj.set_text("H 30");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_01_00_00_00_00_00_00_01_00","668","2792","9","30",null,null,null,null,null,null,this);
            obj.set_taborder("257");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00_00_00_00_00_00_00_00_01_00","678","2792","32","30",null,null,null,null,null,null,this);
            obj.set_taborder("258");
            obj.set_text("H 30");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_01_00_00_00_00_00_00_00_01_00","668","2822","9","34",null,null,null,null,null,null,this);
            obj.set_taborder("259");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00_00_00_00_00_00_00_00_00_01_00","678","2830","32","26",null,null,null,null,null,null,this);
            obj.set_taborder("260");
            obj.set_text("H 34");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static08_00_00_00_00_00","552","833","181","25",null,null,null,null,null,null,this);
            obj.set_taborder("261");
            obj.set_text("class = btn_WF_toggleDown");
            obj.set_cssclass("sta_WF_GStatus");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_02_00_02","558","921","28","22",null,null,null,null,null,null,this);
            obj.set_taborder("262");
            obj.set_text("W 40");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_01_02","552","917","40","9",null,null,null,null,null,null,this);
            obj.set_taborder("263");
            obj.set_cssclass("sta_WF_GLineH");
            this.addChild(obj.name, obj);

            obj = new Button("Button04_00","553","889","40","26",null,null,null,null,null,null,this);
            obj.set_taborder("264");
            obj.set_cssclass("btn_WF_toggleDown");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_01_00_01","596","889","9","26",null,null,null,null,null,null,this);
            obj.set_taborder("265");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00_00_00_01","604","889","32","26",null,null,null,null,null,null,this);
            obj.set_taborder("266");
            obj.set_text("H 26");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_02_00_02_00","781","921","28","22",null,null,null,null,null,null,this);
            obj.set_taborder("267");
            obj.set_text("W 40");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_01_02_00","777","916","40","9",null,null,null,null,null,null,this);
            obj.set_taborder("268");
            obj.set_cssclass("sta_WF_GLineH");
            this.addChild(obj.name, obj);

            obj = new Button("Button04_00_00","777","888","40","26",null,null,null,null,null,null,this);
            obj.set_taborder("269");
            obj.set_cssclass("btn_WF_toggleUp");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_01_00_01_00","820","888","9","26",null,null,null,null,null,null,this);
            obj.set_taborder("270");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00_00_00_01_00","828","888","32","26",null,null,null,null,null,null,this);
            obj.set_taborder("271");
            obj.set_text("H 26");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static08_00_00_00_00_00_00","777","832","162","25",null,null,null,null,null,null,this);
            obj.set_taborder("272");
            obj.set_text("class = btn_WF_toggleUp");
            obj.set_cssclass("sta_WF_GStatus");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            this.addChild(obj.name, obj);

            obj = new Static("Static14_00_02_00","370","357","100","26",null,null,null,null,null,null,this);
            obj.set_taborder("273");
            obj.set_text("Label");
            obj.set_enable("true");
            obj.set_cssclass("sta_WF_condition01Essential");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_01_01_01_00","472","357","9","26",null,null,null,null,null,null,this);
            obj.set_taborder("274");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00_00_01_01_00","482","361","32","18",null,null,null,null,null,null,this);
            obj.set_taborder("275");
            obj.set_text("H 26");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_01_00_01_00","400","325","39","28",null,null,null,null,null,null,this);
            obj.set_taborder("276");
            obj.set_text("W 100");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_01_00","370","345","100","9",null,null,null,null,null,null,this);
            obj.set_taborder("277");
            obj.set_cssclass("sta_WF_GLineH");
            this.addChild(obj.name, obj);

            obj = new Static("Static09_00_02_00","110","358","229","25",null,null,null,null,null,null,this);
            obj.set_taborder("278");
            obj.set_text("class = sta_WF_condition01Essential");
            obj.set_cssclass("sta_WF_GStatus");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_02_00_01_00_00_04_00_00","108","1510","402","40",null,null,null,null,null,null,this);
            obj.set_taborder("279");
            obj.set_text("fit to contents로 버튼 크기 잡을수 있도록 하였음\r\nCSS로 좌우 8px 패딩값 적용");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_02_00_01_00_00_04_00_01","107","1320","171","40",null,null,null,null,null,null,this);
            obj.set_taborder("280");
            obj.set_text("폼버튼\r\n- font-size : 12px");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Tab03.Tabpage1
            obj = new Layout("default","",0,0,this.Tab03.Tabpage1.form,function(p){});
            this.Tab03.Tabpage1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Tab03.Tabpage2
            obj = new Layout("default","",0,0,this.Tab03.Tabpage2.form,function(p){});
            this.Tab03.Tabpage2.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1000,3019,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Static10.addEventHandler("onclick",this.Static10_onclick,this);
            this.Static02_00.addEventHandler("onclick",this.Static02_onclick,this);
            this.Static02_08.addEventHandler("onclick",this.Static02_onclick,this);
            this.Static09_00_00_01_00_00.addEventHandler("onclick",this.Static09_00_00_01_00_00_onclick,this);
            this.Static05_02_00_01_00_00_04_00.addEventHandler("onclick",this.Static05_02_00_01_00_00_04_00_onclick,this);
            this.Static05_02_00_01_00_00_04_00_00.addEventHandler("onclick",this.Static05_02_00_01_00_00_04_00_onclick,this);
            this.Static05_02_00_01_00_00_04_00_01.addEventHandler("onclick",this.Static05_02_00_01_00_00_04_00_onclick,this);
        };
        this.loadIncludeScript("CompGuide02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
