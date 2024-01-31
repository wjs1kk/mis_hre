(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Pattern01");
            this.set_titletext("Pattern01");
            this.set_scrolltype("vertical");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,681);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsData", this);
            obj._setContents("<ColumnInfo><Column id=\"country\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"FLOAT\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"country\">핵심기술 과제공고</Col><Col id=\"value\">1</Col></Row><Row><Col id=\"country\">핵심기술 과제기획</Col><Col id=\"value\">2</Col></Row><Row><Col id=\"country\">방산진흥 과제공고</Col><Col id=\"value\">3</Col></Row><Row><Col id=\"country\">방산진흥 과제기획</Col><Col id=\"value\">4</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","0","0",null,"467","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_background("url(\'theme://images/portal/portal_main_bg.jpg\') no-repeat center top");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","180","0","502","467",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_formscrollbartype("none none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","13","66",null,"38","13",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("국방기술과 방위산업 혁신을 선도하는");
            obj.set_font("normal 23px/1 \"맑은고딕\"");
            obj.set_color("#c9d7ff");
            obj.set_cssclass("portal_mainTxt_s");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","13","Static00:0",null,"38","13",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("연구기관 KRIT");
            obj.set_font("700 27px/1 \"맑은고딕\"");
            obj.set_color("#ffffff");
            obj.set_cssclass("portal_mainTxt");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div01","14","163",null,"54","14",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("Div00");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00","0","2",null,null,"1","2",null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("0");
            obj.set_border("1px solid #252525");
            obj.set_borderRadius("25px");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Combo("Combo01","1","3","185",null,null,"3",null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("2");
            obj.set_innerdataset("dsData");
            obj.set_codecolumn("value");
            obj.set_datacolumn("country");
            obj.set_cssclass("portal_cmb_main");
            obj.set_buttonsize("20 48");
            obj.set_itemheight("25");
            obj.set_text("핵심기술 과제공고");
            obj.set_value("1");
            obj.set_index("0");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit01","Combo01:0","3",null,null,"27","3",null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("1");
            obj.set_displaynulltext("검색어를 입력하세요");
            obj.set_cssclass("portal_edi_main");
            obj.set_border("1px none #252525");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Button("Button02",null,"0","54","54","0",null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("3");
            obj.set_cssclass("portal_btn_search");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Button("btn_system","13","281","95","132",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("시스템소개");
            obj.set_cssclass("portal_btns_quick");
            obj.set_icon("url(\'theme://images/portal/portal_btn_icon1.png\')");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_manual","btn_system:34","281","95","132",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("이용매뉴얼");
            obj.set_cssclass("portal_btns_quick");
            obj.set_icon("url(\'theme://images/portal/portal_btn_icon2.png\')");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_regul","btn_manual:34","281","95","132",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("규정 및 지침");
            obj.set_cssclass("portal_btns_quick");
            obj.set_icon("url(\'theme://images/portal/portal_btn_icon3.png\')");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_law","btn_regul:34","281","95","132",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("관련법령");
            obj.set_cssclass("portal_btns_quick");
            obj.set_icon("url(\'theme://images/portal/portal_btn_icon4.png\')");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div02","0","Div00:0",null,"214","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div02");
            obj.set_url("pts::PTS_0000M_01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static34","0","0","180",null,null,"0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("W 50");
            obj.set_visible("false");
            obj.set_background("antiquewhite");
            obj.set_color("blue");
            this.addChild(obj.name, obj);

            obj = new Static("Static02",null,"0","180",null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("W\r\n 50");
            obj.set_visible("false");
            obj.set_background("antiquewhite");
            obj.set_color("blue");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","Div00:56","0",null,"467","180",null,null,null,null,null,this);
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Tab("Tab00","0","26",null,null,"0","36",null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_tabindex("0");
            obj.set_cssclass("portal_tab_main");
            obj.set_tabbuttonheight("48");
            this.Div01.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Div01.form.Tab00);
            obj.set_text("전체");
            this.Div01.form.Tab00.addChild(obj.name, obj);

            obj = new Div("Div00","0","26","486","150",null,null,null,null,null,null,this.Div01.form.Tab00.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_cssclass("portal_div_project");
            this.Div01.form.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static01","20","17","60","26",null,null,null,null,null,null,this.Div01.form.Tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("0");
            obj.set_text("접수중");
            obj.set_cssclass("portal_sta_projAccepting");
            this.Div01.form.Tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","Static01:7","17","60","26",null,null,null,null,null,null,this.Div01.form.Tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("1");
            obj.set_text("핵심기술");
            obj.set_cssclass("portal_sta_projCore");
            this.Div01.form.Tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static04","0","Static01:10",null,"50","0",null,null,null,null,null,this.Div01.form.Tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("2");
            obj.set_text("<2023년 산학연 주관 국방핵심기술과제 사전예고>");
            obj.set_cssclass("portal_sta_projTitle");
            this.Div01.form.Tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static05","0",null,"169","45",null,"0",null,null,null,null,this.Div01.form.Tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("3");
            obj.set_text("마감일 2023-03-14");
            obj.set_cssclass("portal_sta_projDate");
            this.Div01.form.Tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static03","Static02:7","17","60","26",null,null,null,null,null,null,this.Div01.form.Tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("4");
            obj.set_text("과제기획");
            obj.set_textAlign("center");
            obj.set_cssclass("portal_sta_projPlan");
            this.Div01.form.Tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static06","Static05:0",null,"34","47",null,"0",null,null,null,null,this.Div01.form.Tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("5");
            obj.set_text("D-12");
            obj.set_cssclass("portal_sta_projDday");
            this.Div01.form.Tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Div("Div01","Div00:30","26",null,"150","0",null,null,null,null,null,this.Div01.form.Tab00.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_cssclass("portal_div_project");
            this.Div01.form.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static01","20","17","60","26",null,null,null,null,null,null,this.Div01.form.Tab00.Tabpage1.form.Div01.form);
            obj.set_taborder("0");
            obj.set_text("접수예정");
            obj.set_cssclass("portal_sta_projAccept");
            this.Div01.form.Tab00.Tabpage1.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static02","Static01:7","17","60","26",null,null,null,null,null,null,this.Div01.form.Tab00.Tabpage1.form.Div01.form);
            obj.set_taborder("1");
            obj.set_text("방산진흥");
            obj.set_cssclass("portal_sta_projDefense");
            this.Div01.form.Tab00.Tabpage1.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static05","0",null,"169","45",null,"0",null,null,null,null,this.Div01.form.Tab00.Tabpage1.form.Div01.form);
            obj.set_taborder("2");
            obj.set_text("마감일 2023-03-30");
            obj.set_cssclass("portal_sta_projDate");
            this.Div01.form.Tab00.Tabpage1.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static03","Static02:7","17","60","26",null,null,null,null,null,null,this.Div01.form.Tab00.Tabpage1.form.Div01.form);
            obj.set_taborder("3");
            obj.set_text("과제기획");
            obj.set_cssclass("portal_sta_projPlan");
            this.Div01.form.Tab00.Tabpage1.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static06","Static05:0",null,"34","47",null,"0",null,null,null,null,this.Div01.form.Tab00.Tabpage1.form.Div01.form);
            obj.set_taborder("4");
            obj.set_text("D-27");
            obj.set_cssclass("portal_sta_projDday");
            this.Div01.form.Tab00.Tabpage1.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static04","0","53",null,"50","0",null,null,null,null,null,this.Div01.form.Tab00.Tabpage1.form.Div01.form);
            obj.set_taborder("5");
            obj.set_text("23-1차 유망수출품목발굴 지원사업 참여기업 모집...");
            obj.set_cssclass("portal_sta_projTitle");
            this.Div01.form.Tab00.Tabpage1.form.Div01.addChild(obj.name, obj);

            obj = new Div("Div03","0","Div00:30","486","150",null,null,null,null,null,null,this.Div01.form.Tab00.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_cssclass("portal_div_project");
            this.Div01.form.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static01","20","17","60","26",null,null,null,null,null,null,this.Div01.form.Tab00.Tabpage1.form.Div03.form);
            obj.set_taborder("0");
            obj.set_text("접수중");
            obj.set_cssclass("portal_sta_projAccepting");
            this.Div01.form.Tab00.Tabpage1.form.Div03.addChild(obj.name, obj);

            obj = new Static("Static02","Static01:7","17","60","26",null,null,null,null,null,null,this.Div01.form.Tab00.Tabpage1.form.Div03.form);
            obj.set_taborder("1");
            obj.set_text("방산진흥");
            obj.set_cssclass("portal_sta_projDefense");
            this.Div01.form.Tab00.Tabpage1.form.Div03.addChild(obj.name, obj);

            obj = new Static("Static04","0","60",null,"50","0",null,null,null,null,null,this.Div01.form.Tab00.Tabpage1.form.Div03.form);
            obj.set_taborder("2");
            obj.set_text("23년 국방 벤처기업 인큐베이팅사업 지원대상기업...");
            obj.set_cssclass("portal_sta_projTitle");
            this.Div01.form.Tab00.Tabpage1.form.Div03.addChild(obj.name, obj);

            obj = new Static("Static05","0",null,"169","45",null,"0",null,null,null,null,this.Div01.form.Tab00.Tabpage1.form.Div03.form);
            obj.set_taborder("3");
            obj.set_text("마감일 2023-03-16");
            obj.set_cssclass("portal_sta_projDate");
            this.Div01.form.Tab00.Tabpage1.form.Div03.addChild(obj.name, obj);

            obj = new Static("Static03","Static02:7","17","60","26",null,null,null,null,null,null,this.Div01.form.Tab00.Tabpage1.form.Div03.form);
            obj.set_taborder("4");
            obj.set_text("과제기획");
            obj.set_cssclass("portal_sta_projPlan");
            this.Div01.form.Tab00.Tabpage1.form.Div03.addChild(obj.name, obj);

            obj = new Static("Static06","Static05:0",null,"34","47",null,"0",null,null,null,null,this.Div01.form.Tab00.Tabpage1.form.Div03.form);
            obj.set_taborder("5");
            obj.set_text("D-13");
            obj.set_cssclass("portal_sta_projDday");
            this.Div01.form.Tab00.Tabpage1.form.Div03.addChild(obj.name, obj);

            obj = new Div("Div04","Div03:30","Div01:30",null,"150","0",null,null,null,null,null,this.Div01.form.Tab00.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_cssclass("portal_div_project");
            this.Div01.form.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static01","20","17","60","26",null,null,null,null,null,null,this.Div01.form.Tab00.Tabpage1.form.Div04.form);
            obj.set_taborder("0");
            obj.set_text("접수중");
            obj.set_cssclass("portal_sta_projAccepting");
            this.Div01.form.Tab00.Tabpage1.form.Div04.addChild(obj.name, obj);

            obj = new Static("Static02","Static01:7","17","60","26",null,null,null,null,null,null,this.Div01.form.Tab00.Tabpage1.form.Div04.form);
            obj.set_taborder("1");
            obj.set_text("방산진흥");
            obj.set_cssclass("portal_sta_projDefense");
            this.Div01.form.Tab00.Tabpage1.form.Div04.addChild(obj.name, obj);

            obj = new Static("Static05","0",null,"169","45",null,"0",null,null,null,null,this.Div01.form.Tab00.Tabpage1.form.Div04.form);
            obj.set_taborder("2");
            obj.set_text("마감일 2023-03-13");
            obj.set_cssclass("portal_sta_projDate");
            this.Div01.form.Tab00.Tabpage1.form.Div04.addChild(obj.name, obj);

            obj = new Static("Static03","Static02:7","17","60","26",null,null,null,null,null,null,this.Div01.form.Tab00.Tabpage1.form.Div04.form);
            obj.set_taborder("3");
            obj.set_text("과제기획");
            obj.set_cssclass("portal_sta_projPlan");
            this.Div01.form.Tab00.Tabpage1.form.Div04.addChild(obj.name, obj);

            obj = new Static("Static06","Static05:0",null,"34","47",null,"0",null,null,null,null,this.Div01.form.Tab00.Tabpage1.form.Div04.form);
            obj.set_taborder("4");
            obj.set_text("D-10");
            obj.set_cssclass("portal_sta_projDday");
            this.Div01.form.Tab00.Tabpage1.form.Div04.addChild(obj.name, obj);

            obj = new Static("Static04","0","60",null,"50","0",null,null,null,null,null,this.Div01.form.Tab00.Tabpage1.form.Div04.form);
            obj.set_taborder("5");
            obj.set_text("23-3차 무기체계 부품 국산화 개발지원 사업 주관...");
            obj.set_cssclass("portal_sta_projTitle");
            this.Div01.form.Tab00.Tabpage1.form.Div04.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Div01.form.Tab00);
            obj.set_text("핵심기술");
            this.Div01.form.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.Div01.form.Tab00);
            obj.set_text("방산진흥");
            this.Div01.form.Tab00.addChild(obj.name, obj);

            obj = new Button("Button00",null,"39","64","27","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("더보기");
            obj.set_cssclass("portal_btn_moreTxt");
            this.Div01.addChild(obj.name, obj);

            obj = new Radio("Radio00",null,"32","265","34","Button00:20",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("portal_rdo_proj");
            obj.set_rowcount("-1");
            obj.set_columncount("3");
            obj.set_fittocontents("width");
            var Div01_form_Radio00_innerdataset = new nexacro.NormalDataset("Div01_form_Radio00_innerdataset", obj);
            Div01_form_Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">접수중</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">접수예정</Col></Row></Rows>");
            obj.set_innerdataset(Div01_form_Radio00_innerdataset);
            obj.set_text("전체");
            obj.set_value("0");
            obj.set_index("0");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("btn_quick",null,"234","31","56","0",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("portal_quick_collapse");
            this.addChild(obj.name, obj);

            obj = new Button("btn_01",null,null,"82","102","0","46",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("챗봇상담");
            obj.set_cssclass("portal_quick_chatbot");
            this.addChild(obj.name, obj);

            obj = new Div("quickMenu",null,"13","80","497","-80",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Div03");
            obj.set_url("pts::PTS_0000M_03.xfdl");
            obj.set_visible("true");
            obj.set_cssclass("portal_main_quick");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form.Div01.form
            obj = new Layout("default","",0,0,this.Div00.form.Div01.form,function(p){});
            this.Div00.form.Div01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div02
            obj = new Layout("default","",0,0,this.Div02.form,function(p){});
            this.Div02.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01.form.Tab00.Tabpage1.form.Div00.form
            obj = new Layout("default","",0,0,this.Div01.form.Tab00.Tabpage1.form.Div00.form,function(p){});
            this.Div01.form.Tab00.Tabpage1.form.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01.form.Tab00.Tabpage1.form.Div01.form
            obj = new Layout("default","",0,0,this.Div01.form.Tab00.Tabpage1.form.Div01.form,function(p){});
            this.Div01.form.Tab00.Tabpage1.form.Div01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01.form.Tab00.Tabpage1.form.Div03.form
            obj = new Layout("default","",0,0,this.Div01.form.Tab00.Tabpage1.form.Div03.form,function(p){});
            this.Div01.form.Tab00.Tabpage1.form.Div03.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01.form.Tab00.Tabpage1.form.Div04.form
            obj = new Layout("default","",0,0,this.Div01.form.Tab00.Tabpage1.form.Div04.form,function(p){});
            this.Div01.form.Tab00.Tabpage1.form.Div04.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01.form.Tab00.Tabpage1.form
            obj = new Layout("default","",0,0,this.Div01.form.Tab00.Tabpage1.form,function(p){});
            this.Div01.form.Tab00.Tabpage1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01.form.Tab00.Tabpage2
            obj = new Layout("default","",0,0,this.Div01.form.Tab00.Tabpage2.form,function(p){});
            this.Div01.form.Tab00.Tabpage2.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01.form.Tab00.Tabpage3.form
            obj = new Layout("default","",0,0,this.Div01.form.Tab00.Tabpage3.form,function(p){});
            this.Div01.form.Tab00.Tabpage3.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01.form
            obj = new Layout("default","",0,0,this.Div01.form,function(p){});
            this.Div01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.quickMenu
            obj = new Layout("default","",0,0,this.quickMenu.form,function(p){});
            this.quickMenu.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Div00.form.Combo01","value","Dataset00","key");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Div00.form.Div01.form.Combo01","value","Dataset00","key");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","pts::PTS_0000M_01.xfdl");
            this._addPreloadList("fdl","pts::PTS_0000M_03.xfdl");
        };
        
        // User Script
        this.registerScript("PTS_0000M.xfdl", function() {

        this.Div00_btn_manual_onclick = function(obj,e)
        {
        	var sMenuId = "PTS_3020M_01";
        	var url = "pts::PTS_3020M_01.xfdl";
        	nexacro.getApplication().goPage(sMenuId, url);
        };

        this.Div00_btn_regul_onclick = function(obj,e)
        {
        	var sMenuId = "PTS_3060M_01";
        	var url = "pts::PTS_3060M_01.xfdl";
        	nexacro.getApplication().goPage(sMenuId, url);
        };

        this.main_onload = function(obj,e)
        {
        	this.quick_animate(obj);
        };

        this.btn_quick_onclick = function(obj,e)
        {
        	if( obj.cssclass == "portal_quick_collapse")
        	{
        		this.Ani00.play();
        	} else {
        		this.Ani01.play();
        	}
        };

        this.quick_animate = function(obj) {
            var aniObj00 = new nexacro.Animation("Ani00", this);
            this.addChild("Ani00", aniObj00);
        	this.Ani00.addTarget("AniItem00", this.btn_quick, "right:80");
        	this.Ani00.addTarget("AniItem01", this.quickMenu, "right:0", "visible: true");
        	this.Ani00.setEventHandler("oncomplete", this.Ani00_oncomplete, this);
        	this.Ani00.set_duration(500);
        	this.Ani00.set_easing("easeInSine");

            var aniObj01 = new nexacro.Animation("Ani01", this);
            this.addChild("Ani01", aniObj01);
        	this.Ani01.addTarget("AniItem00", this.btn_quick, "right:0");
        	this.Ani01.addTarget("AniItem01", this.quickMenu, "right:-80", "visible: false");
        	this.Ani01.setEventHandler("oncomplete", this.Ani01_oncomplete, this);
        	this.Ani01.set_duration(500);
        	this.Ani01.set_easing("easeInSine");
        }

        this.Ani00_oncomplete = function(obj,e)
        {
        	this.btn_quick.set_cssclass("portal_quick_expand");
        };

        this.Ani01_oncomplete = function(obj,e)
        {
        	this.btn_quick.set_cssclass("portal_quick_collapse");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.main_onload,this);
            this.Div00.form.Static01.addEventHandler("onclick",this.Div03_Div00_Static01_onclick,this);
            this.Div00.form.Div01.form.Edit01.addEventHandler("onchanged",this.Div00_Div01_Edit01_onchanged,this);
            this.Div00.form.btn_manual.addEventHandler("onclick",this.Div00_btn_manual_onclick,this);
            this.Div00.form.btn_regul.addEventHandler("onclick",this.Div00_btn_regul_onclick,this);
            this.Static34.addEventHandler("onclick",this.Static02_onclick,this);
            this.Static02.addEventHandler("onclick",this.Static02_onclick,this);
            this.Div01.form.Tab00.addEventHandler("onchanged",this.Tab00_onchanged,this);
            this.Div01.form.Tab00.Tabpage1.form.Div00.form.Static01.addEventHandler("onclick",this.Div01_Div00_Static01_onclick,this);
            this.btn_quick.addEventHandler("onclick",this.btn_quick_onclick,this);
        };
        this.loadIncludeScript("PTS_0000M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
