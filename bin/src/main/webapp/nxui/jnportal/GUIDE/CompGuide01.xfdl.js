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
            this.set_titletext("컴포넌트 가이드");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,4035);
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

            obj = new Static("Static21","0","568","100","177",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("TextArea");
            obj.set_cssclass("sta_WF_GLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","0","459","100","110",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("MaskEdit");
            obj.set_cssclass("sta_WF_GLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","0","350","100","110",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Edit");
            obj.set_cssclass("sta_WF_GLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","99","459",null,"110","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("");
            obj.set_cssclass("sta_WF_GArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","99","350",null,"110","0",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("");
            obj.set_cssclass("sta_WF_GArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static17","99","568",null,"177","0",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("");
            obj.set_cssclass("sta_WF_GArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static12","109","359","107","25",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("[status=enabled]");
            obj.set_cssclass("sta_WF_GStatus");
            this.addChild(obj.name, obj);

            obj = new Static("Static18","109","577","107","25",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("[status=enabled]");
            obj.set_cssclass("sta_WF_GStatus");
            this.addChild(obj.name, obj);

            obj = new Static("Static19","274","577","109","25",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("[status=disabled]");
            obj.set_cssclass("sta_WF_GStatus");
            this.addChild(obj.name, obj);

            obj = new Static("Static16","274","468","109","25",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("[status=disabled]");
            obj.set_cssclass("sta_WF_GStatus");
            this.addChild(obj.name, obj);

            obj = new Static("Static15","274","359","109","25",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("[status=disabled]");
            obj.set_cssclass("sta_WF_GStatus");
            this.addChild(obj.name, obj);

            obj = new Static("Static13","109","468","107","25",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("[status=enabled]");
            obj.set_cssclass("sta_WF_GStatus");
            this.addChild(obj.name, obj);

            obj = new Static("Static15_00","439","359","110","25",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("class = readonly");
            obj.set_cssclass("sta_WF_GStatus");
            this.addChild(obj.name, obj);

            obj = new Static("Static15_00_00","604","359","150","25",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("class = essential");
            obj.set_cssclass("sta_WF_GStatus");
            this.addChild(obj.name, obj);

            obj = new Static("Static15_00_01","439","468","110","25",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("class = readonly");
            obj.set_cssclass("sta_WF_GStatus");
            this.addChild(obj.name, obj);

            obj = new Static("Static15_00_00_00","604","468","150","25",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("class = essential");
            obj.set_cssclass("sta_WF_GStatus");
            this.addChild(obj.name, obj);

            obj = new Static("Static15_00_01_00","439","577","110","25",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("class = readonly");
            obj.set_cssclass("sta_WF_GStatus");
            this.addChild(obj.name, obj);

            obj = new Static("Static15_00_00_00_00","604","577","150","25",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("class = essential");
            obj.set_cssclass("sta_WF_GStatus");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01","109","399","150","26",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_value("Edit");
            obj.set_text("Edit");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit01","109","508","150","26",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_value("12345600");
            obj.set_trimtype("none");
            obj.set_format("###,###");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea01","109","617","150","93",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_value("TextArea 내용이 나오는 곳입니다.");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01_00","274","399","150","26",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_enable("false");
            obj.set_value("Edit");
            obj.set_text("Edit");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01_01","439","399","150","26",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_readonly("true");
            obj.set_cssclass("readonly");
            obj.set_value("Edit");
            obj.set_text("Edit");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01_02","604","399","150","26",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_cssclass("essential");
            obj.set_value("Edit");
            obj.set_text("Edit");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea01_01","274","617","150","93",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_enable("false");
            obj.set_value("TextArea 내용이 나오는 곳입니다.");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit01_01","274","508","150","26",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_enable("false");
            obj.set_value("123456");
            obj.set_format("###,###");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea01_02","439","617","150","93",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_cssclass("readonly");
            obj.set_readonly("true");
            obj.set_value("TextArea 내용이 나오는 곳입니다.");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit01_02","439","508","150","26",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_cssclass("readonly");
            obj.set_readonly("true");
            obj.set_value("123456");
            obj.set_format("###,###");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea01_03","604","617","150","93",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_cssclass("essential");
            obj.set_value("TextArea 내용이 나오는 곳입니다.");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit01_03","604","508","150","26",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_cssclass("essential");
            obj.set_value("123456");
            obj.set_format("###,###");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","0","30","100","320",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("Static");
            obj.set_cssclass("sta_WF_GLabel");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","99","30",null,"320","0",null,null,null,null,null,this);
            obj.set_taborder("32");
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
            obj.set_taborder("33");
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
            obj.set_taborder("34");
            obj.set_text("[status=disabled]");
            obj.set_cssclass("sta_WF_GStatus");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","109","79","220","70",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("가나다라마바사아자차타카타파하\r\n1234567890\r\nABCDEFGHIJKLMNOPQRSTUVWXYZ\r\nabcdefghijklmnopqrstuvwxyz");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            this.addChild(obj.name, obj);

            obj = new Static("Static14","335","79","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("Nexacro N");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static14_00","110","230","74","58",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("대타이틀");
            obj.set_enable("true");
            obj.set_cssclass("sta_WF_compTitle01");
            this.addChild(obj.name, obj);

            obj = new Static("Static09_00","110","198","177","25",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("class = sta_WF_compTitle01");
            obj.set_cssclass("sta_WF_GStatus");
            this.addChild(obj.name, obj);

            obj = new Static("Static14_00_00","305","242","75","45",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("중타이틀");
            obj.set_enable("true");
            obj.set_cssclass("sta_WF_subTitle01");
            this.addChild(obj.name, obj);

            obj = new Static("Static09_00_00","305","197","177","25",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("class = sta_WF_subTitle01");
            obj.set_cssclass("sta_WF_GStatus");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00","0","744","100","112",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("Button");
            obj.set_cssclass("sta_WF_GLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_00","0","1667","100","114",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("CheckBox");
            obj.set_cssclass("sta_WF_GLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00","99","744",null,"112","0",null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("");
            obj.set_cssclass("sta_WF_GArea");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_00","99","1667",null,"114","0",null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_text("");
            obj.set_cssclass("sta_WF_GArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static08_00","109","753","107","25",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_text("[status=enabled]");
            obj.set_cssclass("sta_WF_GStatus");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            this.addChild(obj.name, obj);

            obj = new Static("Static09_01","439","753","109","25",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_text("[status=disabled]");
            obj.set_cssclass("sta_WF_GStatus");
            this.addChild(obj.name, obj);

            obj = new Static("Static13_00","109","1676","123","25",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_text("[status=enabled]");
            obj.set_cssclass("sta_WF_GStatus");
            this.addChild(obj.name, obj);

            obj = new Static("Static14_01","439","1676","123","25",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_text("[status=disabled]");
            obj.set_cssclass("sta_WF_GStatus");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","109","793","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","439","793","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_text("Button01");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox02","109","1716","150","26",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_text("CheckBox00");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox02_00","439","1716","150","26",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_text("CheckBox01");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_01","99","855",null,"110","0",null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_text("");
            obj.set_cssclass("sta_WF_GArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_01","0","855","100","110",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_text("Combo");
            obj.set_cssclass("sta_WF_GLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static13_01","109","864","107","25",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_text("[status=enabled]");
            obj.set_cssclass("sta_WF_GStatus");
            this.addChild(obj.name, obj);

            obj = new Static("Static14_02","274","864","100","25",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_text("[status=disabled]");
            obj.set_cssclass("sta_WF_GStatus");
            this.addChild(obj.name, obj);

            obj = new Static("Static14_00_01","439","864","120","25",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_text("class = readonly");
            obj.set_cssclass("sta_WF_GStatus");
            this.addChild(obj.name, obj);

            obj = new Static("Static14_00_00_00","604","864","150","25",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_text("class = essential");
            obj.set_cssclass("sta_WF_GStatus");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo02","439","904","150","26",null,null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_cssclass("readonly");
            obj.set_readonly("true");
            obj.set_innerdataset("ds_list");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_displaynulltext("Combo");
            obj.set_text("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00","109","904","150","26",null,null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_innerdataset("ds_list");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_displaynulltext("Combo");
            obj.set_text("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo01","274","904","150","26",null,null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_enable("false");
            obj.set_innerdataset("ds_list");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_displaynulltext("Combo");
            obj.set_text("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo03","604","904","150","26",null,null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_cssclass("essential");
            obj.set_innerdataset("ds_list");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_displaynulltext("Combo");
            obj.set_text("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_01","99","964",null,"213","0",null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_text("");
            obj.set_cssclass("sta_WF_GArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_01","0","964","100","213",null,null,null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_text("ListBox");
            obj.set_cssclass("sta_WF_GLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static12_01","109","974","107","25",null,null,null,null,null,null,this);
            obj.set_taborder("65");
            obj.set_text("[status=enabled]");
            obj.set_cssclass("sta_WF_GStatus");
            this.addChild(obj.name, obj);

            obj = new Static("Static10_02","439","974","100","25",null,null,null,null,null,null,this);
            obj.set_taborder("66");
            obj.set_text("[status=disabled]");
            obj.set_cssclass("sta_WF_GStatus");
            this.addChild(obj.name, obj);

            obj = new ListBox("ListBox02","109","1014","202","128",null,null,null,null,null,null,this);
            obj.set_taborder("67");
            obj.set_innerdataset("ds_list");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            this.addChild(obj.name, obj);

            obj = new ListBox("ListBox00","439","1014","202","128",null,null,null,null,null,null,this);
            obj.set_taborder("68");
            obj.set_innerdataset("ds_list");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00","0","1175","100","111",null,null,null,null,null,null,this);
            obj.set_taborder("69");
            obj.set_text("Spin");
            obj.set_cssclass("sta_WF_GLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00","99","1175",null,"111","0",null,null,null,null,null,this);
            obj.set_taborder("70");
            obj.set_text("");
            obj.set_cssclass("sta_WF_GArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static10_01","274","1185","132","25",null,null,null,null,null,null,this);
            obj.set_taborder("71");
            obj.set_text("[status=disabled]");
            obj.set_cssclass("sta_WF_GStatus");
            this.addChild(obj.name, obj);

            obj = new Static("Static12_00","109","1185","107","25",null,null,null,null,null,null,this);
            obj.set_taborder("72");
            obj.set_text("[status=enabled]");
            obj.set_cssclass("sta_WF_GStatus");
            this.addChild(obj.name, obj);

            obj = new Static("Static10_00_02","439","1185","120","25",null,null,null,null,null,null,this);
            obj.set_taborder("73");
            obj.set_text("class = readonly");
            obj.set_cssclass("sta_WF_GStatus");
            this.addChild(obj.name, obj);

            obj = new Static("Static10_00_00_01","604","1185","150","25",null,null,null,null,null,null,this);
            obj.set_taborder("74");
            obj.set_text("class = essential");
            obj.set_cssclass("sta_WF_GStatus");
            this.addChild(obj.name, obj);

            obj = new Spin("Spin02","109","1225","150","26",null,null,null,null,null,null,this);
            obj.set_taborder("75");
            obj.set_buttonsize("26");
            obj.set_value("701");
            this.addChild(obj.name, obj);

            obj = new Spin("Spin02_00","274","1225","150","26",null,null,null,null,null,null,this);
            obj.set_taborder("76");
            obj.set_enable("false");
            obj.set_buttonsize("26");
            obj.set_value("701");
            this.addChild(obj.name, obj);

            obj = new Spin("Spin02_01","439","1225","150","26",null,null,null,null,null,null,this);
            obj.set_taborder("77");
            obj.set_readonly("true");
            obj.set_cssclass("readonly");
            obj.set_buttonsize("26");
            obj.set_value("701");
            this.addChild(obj.name, obj);

            obj = new Spin("Spin02_02","604","1225","150","26",null,null,null,null,null,null,this);
            obj.set_taborder("78");
            obj.set_cssclass("essential");
            obj.set_buttonsize("26");
            obj.set_value("701");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01","0","1285","100","383",null,null,null,null,null,null,this);
            obj.set_taborder("79");
            obj.set_text("Calendar");
            obj.set_cssclass("sta_WF_GLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_02","99","1285",null,"383","0",null,null,null,null,null,this);
            obj.set_taborder("80");
            obj.set_text("");
            obj.set_cssclass("sta_WF_GArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static09_02","274","1294","141","25",null,null,null,null,null,null,this);
            obj.set_taborder("81");
            obj.set_text("[status=disabled]");
            obj.set_cssclass("sta_WF_GStatus");
            this.addChild(obj.name, obj);

            obj = new Static("Static12_02","109","1393","241","25",null,null,null,null,null,null,this);
            obj.set_taborder("82");
            obj.set_text("Appearance > type=monthonly");
            this.addChild(obj.name, obj);

            obj = new Static("Static10_03","439","1393","235","25",null,null,null,null,null,null,this);
            obj.set_taborder("83");
            obj.set_text("Appearance > type=spin");
            this.addChild(obj.name, obj);

            obj = new Static("Static09_00_01","439","1294","151","25",null,null,null,null,null,null,this);
            obj.set_taborder("84");
            obj.set_text("class = readonly");
            obj.set_cssclass("sta_WF_GStatus");
            this.addChild(obj.name, obj);

            obj = new Static("Static09_00_00_00","604","1294","191","25",null,null,null,null,null,null,this);
            obj.set_taborder("85");
            obj.set_text("class = essential");
            obj.set_cssclass("sta_WF_GStatus");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar06","109","1334","150","26",null,null,null,null,null,null,this);
            obj.set_taborder("86");
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

            obj = new Calendar("Calendar00","274","1334","150","26",null,null,null,null,null,null,this);
            obj.set_taborder("87");
            obj.set_enable("false");
            obj.set_value("20230313");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_daysize("21 21");
            obj.set_headheight("28");
            obj.set_popupsize("220 170");
            obj.set_weekformat("일 월 화 수 목 금 토");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar02","439","1334","150","26",null,null,null,null,null,null,this);
            obj.set_taborder("88");
            obj.set_readonly("true");
            obj.set_value("20230313");
            obj.set_cssclass("readonly");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_daysize("21 21");
            obj.set_headheight("28");
            obj.set_popupsize("220 170");
            obj.set_weekformat("일 월 화 수 목 금 토");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar07","604","1334","150","26",null,null,null,null,null,null,this);
            obj.set_taborder("89");
            obj.set_value("20230313");
            obj.set_cssclass("essential");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_daysize("21 21");
            obj.set_headheight("28");
            obj.set_popupsize("220 170");
            obj.set_weekformat("일 월 화 수 목 금 토");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar08","109","1433","218","200",null,null,null,null,null,null,this);
            obj.set_taborder("90");
            obj.set_type("monthonly");
            obj.set_daysize("28 28");
            obj.set_headheight("28");
            obj.set_popupsize("220");
            obj.set_weekformat("일 월 화 수 목 금 토");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar09","439","1433","150","26",null,null,null,null,null,null,this);
            obj.set_taborder("91");
            obj.set_type("spin");
            obj.set_dateformat("yyyy");
            obj.set_editformat("yyyy");
            obj.set_headformat("yyyy");
            obj.set_showyearspin("true");
            obj.set_usetrailingday("false");
            obj.set_weekformat("일 월 화 수 목 금 토");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_02","0","1780","100","275",null,null,null,null,null,null,this);
            obj.set_taborder("92");
            obj.set_text("Div");
            obj.set_cssclass("sta_WF_GLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_02","99","1780",null,"275","0",null,null,null,null,null,this);
            obj.set_taborder("93");
            obj.set_text("");
            obj.set_cssclass("sta_WF_GArea");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            this.addChild(obj.name, obj);

            obj = new Static("Static08_02","109","1781","255","25",null,null,null,null,null,null,this);
            obj.set_taborder("94");
            obj.set_text("[status=enabled] ");
            obj.set_cssclass("sta_WF_GStatus");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","109","1828","628","192",null,null,null,null,null,null,this);
            obj.set_taborder("95");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_03","0","2054","100","496",null,null,null,null,null,null,this);
            obj.set_taborder("96");
            obj.set_text("Grid ");
            obj.set_cssclass("sta_WF_GLabel");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            this.addChild(obj.name, obj);

            obj = new Static("Static17_00","99","2054",null,"496","0",null,null,null,null,null,this);
            obj.set_taborder("97");
            obj.set_text("");
            obj.set_cssclass("sta_WF_GArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static08_03","109","2063","255","25",null,null,null,null,null,null,this);
            obj.set_taborder("98");
            obj.set_text("Normal");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid02","109","2098","561","172",null,null,null,null,null,null,this);
            obj.set_taborder("99");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_grid");
            obj.set_selecttype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"34\"/></Rows><Band id=\"head\"><Cell text=\"Edit\"/><Cell col=\"1\" text=\"MaskEdit\"/><Cell col=\"2\" text=\"Combo\"/><Cell col=\"3\" text=\"Calendar\"/><Cell col=\"4\" text=\"Expand\"/><Cell col=\"5\" text=\"Normal\"/><Cell col=\"6\" text=\"Number\"/><Cell col=\"7\" text=\"Button\"/><Cell col=\"8\" text=\"ProgressBar\"/></Band><Band id=\"body\"><Cell text=\"bind:Edit\" displaytype=\"editcontrol\" edittype=\"text\"/><Cell col=\"1\" text=\"bind:MaskEdit\" displaytype=\"maskeditcontrol\" edittype=\"mask\"/><Cell col=\"2\" text=\"bind:Combo\" edittype=\"combo\" displaytype=\"combocontrol\"/><Cell col=\"3\" text=\"bind:Calendar\" displaytype=\"calendarcontrol\" edittype=\"date\" calendardateformat=\"yyyy-MM-dd\" calendarweekformat=\"일 월 화 수 목 금 토\" calendarautoselect=\"false\"/><Cell col=\"4\" text=\"bind:Expand\" displaytype=\"editcontrol\" expandshow=\"show\" expandsize=\"26\"/><Cell col=\"5\" text=\"bind:Normal\" edittype=\"text\"/><Cell col=\"6\" text=\"bind:Number\" displaytype=\"number\"/><Cell col=\"7\" text=\"bind:Button\" displaytype=\"buttoncontrol\" edittype=\"button\"/><Cell col=\"8\" text=\"bind:ProgressBar\" displaytype=\"progressbarcontrol\" progressbarsmooth=\"true\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_04","0","2549","100","184",null,null,null,null,null,null,this);
            obj.set_taborder("100");
            obj.set_text("GroupBox");
            obj.set_cssclass("sta_WF_GLabel");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_03","99","2549",null,"184","0",null,null,null,null,null,this);
            obj.set_taborder("101");
            obj.set_text("");
            obj.set_cssclass("sta_WF_GArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static08_04","109","2558","255","25",null,null,null,null,null,null,this);
            obj.set_taborder("102");
            obj.set_text("[status=enabled] ");
            obj.set_cssclass("sta_WF_GStatus");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            this.addChild(obj.name, obj);

            obj = new Static("Static09_03","444","2558","235","25",null,null,null,null,null,null,this);
            obj.set_taborder("103");
            obj.set_text("[status=disabled]");
            obj.set_cssclass("sta_WF_GStatus");
            this.addChild(obj.name, obj);

            obj = new GroupBox("GroupBox00","109","2598","246","101",null,null,null,null,null,null,this);
            obj.set_taborder("104");
            obj.set_text("GroupBox00");
            this.addChild(obj.name, obj);

            obj = new GroupBox("GroupBox01","444","2598","246","101",null,null,null,null,null,null,this);
            obj.set_taborder("105");
            obj.set_text("GroupBox01");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","725","2098","236","417",null,null,null,null,null,null,this);
            obj.set_taborder("106");
            obj.set_cssclass("grd_WF_tree");
            obj.set_binddataset("ds_tree");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"234\"/></Columns><Rows><Row size=\"32\"/></Rows><Band id=\"body\"><Cell displaytype=\"treeitemcontrol\" edittype=\"tree\" text=\"bind:code\" treelevel=\"bind:level\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static08_03_00","725","2062","255","25",null,null,null,null,null,null,this);
            obj.set_taborder("107");
            obj.set_text("Tree Grid");
            this.addChild(obj.name, obj);

            obj = new Static("Static14_00_00_01","500","242","72","45",null,null,null,null,null,null,this);
            obj.set_taborder("108");
            obj.set_text("소타이틀");
            obj.set_enable("true");
            obj.set_cssclass("sta_WF_subTitle02");
            this.addChild(obj.name, obj);

            obj = new Static("Static09_00_00_01","500","197","177","25",null,null,null,null,null,null,this);
            obj.set_taborder("109");
            obj.set_text("class = sta_WF_subTitle02");
            obj.set_cssclass("sta_WF_GStatus");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid02_00","109","2313","561","202",null,null,null,null,null,null,this);
            obj.set_taborder("110");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_grid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"34\"/><Row size=\"34\"/></Rows><Band id=\"head\"><Cell text=\"Edit\"/><Cell col=\"1\" text=\"MaskEdit\"/><Cell col=\"2\" text=\"Combo\"/><Cell col=\"3\" text=\"Calendar\"/><Cell col=\"4\" text=\"Expand\"/><Cell col=\"5\" text=\"Normal\"/><Cell col=\"6\" text=\"Number\"/><Cell col=\"7\" text=\"Button\"/><Cell col=\"8\" text=\"ProgressBar\"/><Cell row=\"1\" text=\"Image\"/><Cell row=\"1\" col=\"1\" text=\"Mask\"/><Cell row=\"1\" col=\"2\" text=\"Checkbox\"/><Cell row=\"1\" col=\"3\" text=\"Date\"/><Cell row=\"1\" col=\"4\" text=\"Radio\"/><Cell row=\"1\" col=\"5\"/><Cell row=\"1\" col=\"6\"/><Cell row=\"1\" col=\"7\"/><Cell row=\"1\" col=\"8\"/></Band><Band id=\"body\"><Cell text=\"bind:Edit\" displaytype=\"editcontrol\" edittype=\"text\"/><Cell col=\"1\" text=\"bind:MaskEdit\" displaytype=\"maskeditcontrol\" edittype=\"mask\"/><Cell col=\"2\" text=\"bind:Combo\" edittype=\"combo\" displaytype=\"combocontrol\"/><Cell col=\"3\" text=\"bind:Calendar\" displaytype=\"calendarcontrol\" edittype=\"button\"/><Cell col=\"4\" text=\"bind:Expand\" displaytype=\"editcontrol\" expandshow=\"show\" expandsize=\"26\"/><Cell col=\"5\" text=\"bind:Normal\" edittype=\"text\"/><Cell col=\"6\" text=\"bind:Number\" displaytype=\"number\"/><Cell col=\"7\" text=\"bind:Button\" displaytype=\"buttoncontrol\" edittype=\"button\"/><Cell col=\"8\" text=\"bind:ProgressBar\" displaytype=\"progressbarcontrol\" progressbarsmooth=\"true\"/><Cell row=\"1\" displaytype=\"imagecontrol\" text=\"bind:Image\"/><Cell row=\"1\" col=\"1\" displaytype=\"mask\" edittype=\"mask\" text=\"bind:Mask\"/><Cell row=\"1\" col=\"2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CheckBox\"/><Cell row=\"1\" col=\"3\" displaytype=\"date\" edittype=\"date\" text=\"bind:Date\"/><Cell row=\"1\" col=\"4\" displaytype=\"radioitemcontrol\" edittype=\"radioitem\" radioitemcodevalue=\"bind:Edit\" text=\"bind:Radio\"/><Cell row=\"1\" col=\"5\"/><Cell row=\"1\" col=\"6\"/><Cell row=\"1\" col=\"7\"/><Cell row=\"1\" col=\"8\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static08_03_01","109","2278","255","25",null,null,null,null,null,null,this);
            obj.set_taborder("111");
            obj.set_text("Head 2단");
            this.addChild(obj.name, obj);

            obj = new Static("Static10_00_00_00_00","510","1814","291","220",null,null,null,null,null,null,this);
            obj.set_taborder("112");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_cssclass("sta_WF_GTxt");
            obj.set_text("Div는 일반적으로 Form을 로드할 때 사용한다.\r\n디지인 요소가 필요할 경우 class로 지정해서 사용한다.");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_02_00","0","2732","100","275",null,null,null,null,null,null,this);
            obj.set_taborder("113");
            obj.set_text("PopupDiv");
            obj.set_cssclass("sta_WF_GLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_02_00","99","2732",null,"275","0",null,null,null,null,null,this);
            obj.set_taborder("114");
            obj.set_text("");
            obj.set_cssclass("sta_WF_GArea");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            this.addChild(obj.name, obj);

            obj = new Static("Static08_02_00","109","2732","255","25",null,null,null,null,null,null,this);
            obj.set_taborder("115");
            obj.set_text("[status=enabled] ");
            obj.set_cssclass("sta_WF_GStatus");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            this.addChild(obj.name, obj);

            obj = new Static("Static10_00_00_00_00_00","511","2766","291","220",null,null,null,null,null,null,this);
            obj.set_taborder("116");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_cssclass("sta_WF_GTxt");
            obj.set_text("PopupDiv는 일반적으로 Form을 로드할 때 사용한다.\r\n디지인 요소가 필요할 경우 class로 지정해서 사용한다.");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("PopupDiv00","113","2781","384","194",null,null,null,null,null,null,this);
            obj.set_text("PopupDiv00");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static17_01","99","3006",null,"264","0",null,null,null,null,null,this);
            obj.set_taborder("122");
            obj.set_text("");
            obj.set_cssclass("sta_WF_GArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static13_02","109","3015","235","25",null,null,null,null,null,null,this);
            obj.set_taborder("123");
            obj.set_text("[status=enabled]");
            obj.set_cssclass("sta_WF_GStatus");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","109","3081","180","154",null,null,null,null,null,null,this);
            obj.set_taborder("124");
            obj.set_text("ImageViewer00");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_04","99","3419",null,"124","0",null,null,null,null,null,this);
            obj.set_taborder("125");
            obj.set_text("");
            obj.set_cssclass("sta_WF_GArea");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_05","0","3269","100","151",null,null,null,null,null,null,this);
            obj.set_taborder("126");
            obj.set_text("FileUpload");
            obj.set_cssclass("sta_WF_GLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_03","99","3269",null,"151","0",null,null,null,null,null,this);
            obj.set_taborder("127");
            obj.set_text("");
            obj.set_cssclass("sta_WF_GArea");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_02","0","3419","100","124",null,null,null,null,null,null,this);
            obj.set_taborder("128");
            obj.set_text("FileDownload");
            obj.set_cssclass("sta_WF_GLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static08_05","109","3278","235","25",null,null,null,null,null,null,this);
            obj.set_taborder("129");
            obj.set_text("[status=enabled] ");
            obj.set_cssclass("sta_WF_GStatus");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            this.addChild(obj.name, obj);

            obj = new Static("Static12_03","109","3429","235","25",null,null,null,null,null,null,this);
            obj.set_taborder("130");
            obj.set_text("[status=enabled]");
            obj.set_cssclass("sta_WF_GStatus");
            this.addChild(obj.name, obj);

            obj = new Static("Static17_02","99","3542",null,"145","0",null,null,null,null,null,this);
            obj.set_taborder("131");
            obj.set_text("");
            obj.set_cssclass("sta_WF_GArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_06","0","3542","100","145",null,null,null,null,null,null,this);
            obj.set_taborder("132");
            obj.set_text("ProgressBar");
            obj.set_cssclass("sta_WF_GLabel");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            this.addChild(obj.name, obj);

            obj = new ProgressBar("Pgb01","109","3622","297","30",null,null,null,null,null,null,this);
            obj.set_taborder("133");
            obj.set_text("");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_smooth("true");
            obj.set_min("0");
            obj.set_max("100");
            obj.set_pos("50");
            this.addChild(obj.name, obj);

            obj = new ProgressBar("Pgb02","455","3622","297","30",null,null,null,null,null,null,this);
            obj.set_taborder("134");
            obj.set_text("");
            obj.set_smooth("true");
            obj.set_cssclass("pgb_WF_Image");
            obj.set_enable("false");
            obj.set_min("0");
            obj.set_max("100");
            obj.set_pos("50");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_03","455","3586","231","26",null,null,null,null,null,null,this);
            obj.set_taborder("135");
            obj.set_text("[status=disabled]");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_05","109","3586","396","26",null,null,null,null,null,null,this);
            obj.set_taborder("136");
            obj.set_text("[status=enabled] ");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_07","0","3686","100","119",null,null,null,null,null,null,this);
            obj.set_taborder("137");
            obj.set_text("Radio");
            obj.set_cssclass("sta_WF_GLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_04","99","3686",null,"119","0",null,null,null,null,null,this);
            obj.set_taborder("138");
            obj.set_text("");
            obj.set_cssclass("sta_WF_GArea");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            this.addChild(obj.name, obj);

            obj = new Static("Static08_07","109","3695","151","25",null,null,null,null,null,null,this);
            obj.set_taborder("139");
            obj.set_text("[status=enabled] ");
            obj.set_cssclass("sta_WF_GStatus");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            this.addChild(obj.name, obj);

            obj = new Static("Static09_04","439","3695","151","25",null,null,null,null,null,null,this);
            obj.set_taborder("140");
            obj.set_text("[status=disabled]");
            obj.set_cssclass("sta_WF_GStatus");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00","109","3735","195","26",null,null,null,null,null,null,this);
            obj.set_taborder("141");
            obj.set_innerdataset("ds_radio");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_direction("vertical");
            obj.set_rowcount("-1");
            obj.set_columncount("-1");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio01","439","3735","195","26",null,null,null,null,null,null,this);
            obj.set_taborder("142");
            obj.set_innerdataset("ds_radio");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_enable("false");
            obj.set_direction("vertical");
            obj.set_rowcount("-1");
            obj.set_columncount("-1");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_08","0","3804","100","231",null,null,null,null,null,null,this);
            obj.set_taborder("143");
            obj.set_text("Tab");
            obj.set_cssclass("sta_WF_GLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_04","99","3804",null,"231","0",null,null,null,null,null,this);
            obj.set_taborder("144");
            obj.set_text("");
            obj.set_cssclass("sta_WF_GArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static08_08","109","3813","235","25",null,null,null,null,null,null,this);
            obj.set_taborder("145");
            obj.set_text("class = tab_WF_comp");
            obj.set_cssclass("sta_WF_GStatus");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            this.addChild(obj.name, obj);

            obj = new Tab("Tab03","109","3854","594","167",null,null,null,null,null,null,this);
            obj.set_taborder("146");
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

            obj = new FileDownload("FileDownload00","109","3480","89","28",null,null,null,null,null,null,this);
            obj.set_taborder("147");
            obj.set_text("다운로드");
            this.addChild(obj.name, obj);

            obj = new FileUpload("FileUpload00","109","3315","255","69",null,null,null,null,null,null,this);
            obj.set_taborder("148");
            obj.set_itemheight("28");
            obj.set_buttontext("업로드");
            obj.set_buttonsize("76");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_02","0","3006","100","264",null,null,null,null,null,null,this);
            obj.set_taborder("149");
            obj.set_text("ImageViewer");
            obj.set_cssclass("sta_WF_GLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_01","640","2424","136","9",null,null,null,null,null,null,this);
            obj.set_taborder("150");
            obj.set_cssclass("sta_WF_GLineH");
            this.addChild(obj.name, obj);

            obj = new Static("Static08_01","774","2415","100","25",null,null,null,null,null,null,this);
            obj.set_taborder("150");
            obj.set_text("[status=selected]");
            obj.set_cssclass("sta_WF_GStatus");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            this.addChild(obj.name, obj);

            obj = new Static("Static08_01_00","930","2382","100","25",null,null,null,null,null,null,this);
            obj.set_taborder("151");
            obj.set_text("[status=selected]");
            obj.set_cssclass("sta_WF_GStatus");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_01_00","897","2110","36","9",null,null,null,null,null,null,this);
            obj.set_taborder("152");
            obj.set_cssclass("sta_WF_GLineH");
            this.addChild(obj.name, obj);

            obj = new Static("Static14_01_00","765","1676","135","25",null,null,null,null,null,null,this);
            obj.set_taborder("153");
            obj.set_text("class = essential");
            obj.set_cssclass("sta_WF_GStatus");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox02_00_00","765","1716","150","26",null,null,null,null,null,null,this);
            obj.set_taborder("154");
            obj.set_text("CheckBox01");
            obj.set_cssclass("essential");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio01_00","766","3735","195","26",null,null,null,null,null,null,this);
            obj.set_taborder("155");
            obj.set_innerdataset("ds_radio");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_enable("true");
            obj.set_direction("vertical");
            obj.set_rowcount("-1");
            obj.set_columncount("-1");
            obj.set_cssclass("essential");
            this.addChild(obj.name, obj);

            obj = new Static("Static09_04_00","766","3695","134","25",null,null,null,null,null,null,this);
            obj.set_taborder("156");
            obj.set_text("class = essential");
            obj.set_cssclass("sta_WF_GStatus");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.PopupDiv00
            obj = new Layout("default","",0,0,this.PopupDiv00.form,function(p){});
            this.PopupDiv00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Tab03.Tabpage1
            obj = new Layout("default","",0,0,this.Tab03.Tabpage1.form,function(p){});
            this.Tab03.Tabpage1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Tab03.Tabpage2
            obj = new Layout("default","",0,0,this.Tab03.Tabpage2.form,function(p){});
            this.Tab03.Tabpage2.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1000,4035,this,function(p){});
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
            this.Static15_00_00.addEventHandler("onclick",this.Static15_00_00_onclick,this);
            this.Static10.addEventHandler("onclick",this.Static10_onclick,this);
            this.Static02_00.addEventHandler("onclick",this.Static02_onclick,this);
            this.Static10_00_00_00_00.addEventHandler("onclick",this.Static10_onclick,this);
            this.Static10_00_00_00_00_00.addEventHandler("onclick",this.Static10_onclick,this);
            this.ImageViewer00.addEventHandler("onclick",this.ImageViewer00_onclick,this);
            this.Static02_08.addEventHandler("onclick",this.Static02_onclick,this);
            this.FileUpload00.addEventHandler("onitemchanged",this.FileUpload00_onitemchanged,this);
            this.Static07_02.addEventHandler("onclick",this.Static07_onclick,this);
            this.Static08_01.addEventHandler("onclick",this.Static08_01_onclick,this);
            this.Static08_01_00.addEventHandler("onclick",this.Static08_01_onclick,this);
            this.CheckBox02_00_00.addEventHandler("onclick",this.CheckBox02_00_00_onclick,this);
        };
        this.loadIncludeScript("CompGuide01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
