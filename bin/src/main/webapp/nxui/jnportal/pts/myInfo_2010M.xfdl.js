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
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,930);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_radio", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">Y</Col><Col id=\"data\">동의</Col></Row><Row><Col id=\"code\">N</Col><Col id=\"data\">동의하지않음</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCountryLitres", this);
            obj._setContents("<ColumnInfo><Column id=\"country\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"FLOAT\" size=\"256\"/><Column id=\"select\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/><Column id=\"valuedata\" type=\"FLOAT\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"country\">공고</Col><Col id=\"value\">4</Col><Col id=\"select\"/><Col id=\"data\">공고</Col><Col id=\"valuedata\"/></Row><Row><Col id=\"country\">협약</Col><Col id=\"value\">3</Col><Col id=\"select\"/><Col id=\"data\">협약</Col><Col id=\"valuedata\"/></Row><Row><Col id=\"country\">수행</Col><Col id=\"value\">2</Col><Col id=\"select\"/><Col id=\"data\">수행</Col><Col id=\"valuedata\"/></Row><Row><Col id=\"country\">성과</Col><Col id=\"value\">1</Col><Col id=\"select\"/><Col id=\"data\">성과</Col><Col id=\"valuedata\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_data", this);
            obj._setContents("<ColumnInfo><Column id=\"title\" type=\"STRING\" size=\"256\"/><Column id=\"status\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"title\">산학연구관 연구개발주관기관 선정을 위한 제안서 공모</Col><Col id=\"status\">공고접수</Col></Row><Row><Col id=\"title\">2023년 산학연 주관 국방핵심기술과제 사전예고</Col><Col id=\"status\">공고접수</Col></Row><Row><Col id=\"title\">23-1차 유망수출품목발굴 지원사업 참여기업 모집 공고</Col><Col id=\"status\">협약변경</Col></Row><Row><Col id=\"title\">23년 국방 벤처기업 인큐베이팅사업 지원대상기업 모집 공고</Col><Col id=\"status\">수행평가</Col></Row><Row><Col id=\"title\">[재공고] 250kW급 고출력밀도 시동/발전기 기술(응용연구)</Col><Col id=\"status\">성과등록</Col></Row><Row><Col id=\"title\">[재공고] 기뢰탐색용 무인잠수정-Ⅱ 해수 이차전지 에너지원 기술</Col><Col id=\"status\">수행평가</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_data2", this);
            obj._setContents("<ColumnInfo><Column id=\"title\" type=\"STRING\" size=\"256\"/><Column id=\"status\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"title\">산학연구관 연구개발주관기관 선정을 위한 제안서 공모</Col><Col id=\"status\">공고접수</Col></Row><Row><Col id=\"title\">[재공고] 250kW급 고출력밀도 시동/발전기 기술(응용연구)</Col><Col id=\"status\">성과등록</Col></Row><Row><Col id=\"title\">2023년 산학연 주관 국방핵심기술과제 사전예고</Col><Col id=\"status\">공고접수</Col></Row><Row><Col id=\"title\">23-1차 유망수출품목발굴 지원사업 참여기업 모집 공고</Col><Col id=\"status\">협약변경</Col></Row><Row><Col id=\"title\">23년 국방 벤처기업 인큐베이팅사업 지원대상기업 모집 공고</Col><Col id=\"status\">수행평가</Col></Row><Row><Col id=\"title\">[재공고] 기뢰탐색용 무인잠수정-Ⅱ 해수 이차전지 에너지원 기술</Col><Col id=\"status\">수행평가</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCountryLitres2", this);
            obj._setContents("<ColumnInfo><Column id=\"country\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"FLOAT\" size=\"256\"/><Column id=\"select\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/><Column id=\"valuedata\" type=\"FLOAT\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"country\">공고</Col><Col id=\"value\">5</Col><Col id=\"select\"/><Col id=\"data\">공고</Col><Col id=\"valuedata\"/></Row><Row><Col id=\"country\">협약</Col><Col id=\"value\">3</Col><Col id=\"select\"/><Col id=\"data\">협약</Col><Col id=\"valuedata\"/></Row><Row><Col id=\"country\">수행</Col><Col id=\"value\">1</Col><Col id=\"select\"/><Col id=\"data\">수행</Col><Col id=\"valuedata\"/></Row><Row><Col id=\"country\">성과</Col><Col id=\"value\">1</Col><Col id=\"select\"/><Col id=\"data\">성과</Col><Col id=\"valuedata\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTempo", this);
            obj._setContents("<ColumnInfo><Column id=\"month\" type=\"STRING\" size=\"256\"/><Column id=\"c1\" type=\"FLOAT\" size=\"256\"/><Column id=\"c2\" type=\"FLOAT\" size=\"256\"/><Column id=\"c3\" type=\"FLOAT\" size=\"256\"/><Column id=\"c4\" type=\"FLOAT\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"month\">1월</Col><Col id=\"c1\">6</Col><Col id=\"c2\">2</Col><Col id=\"c3\">2</Col><Col id=\"c4\">1</Col></Row><Row><Col id=\"month\">2월</Col><Col id=\"c1\">0.1</Col><Col id=\"c2\">0.1</Col><Col id=\"c3\">0.1</Col><Col id=\"c4\">0.1</Col></Row><Row><Col id=\"month\">3월</Col><Col id=\"c1\">2</Col><Col id=\"c2\">4</Col><Col id=\"c3\">8</Col><Col id=\"c4\">4</Col></Row><Row><Col id=\"month\">4월</Col><Col id=\"c1\">0.1</Col><Col id=\"c2\">2</Col><Col id=\"c3\">2</Col><Col id=\"c4\">1</Col></Row><Row><Col id=\"month\">5월</Col><Col id=\"c1\">5</Col><Col id=\"c2\">2</Col><Col id=\"c3\">5</Col><Col id=\"c4\">5</Col></Row><Row><Col id=\"month\">6월</Col><Col id=\"c1\">4</Col><Col id=\"c2\">0.1</Col><Col id=\"c3\">0.1</Col><Col id=\"c4\">0.1</Col></Row><Row><Col id=\"month\">7월</Col><Col id=\"c1\">0.1</Col><Col id=\"c2\">8</Col><Col id=\"c3\">8</Col><Col id=\"c4\">1</Col></Row><Row><Col id=\"month\">8월</Col><Col id=\"c1\">4</Col><Col id=\"c2\">2</Col><Col id=\"c3\">2</Col><Col id=\"c4\">1</Col></Row><Row><Col id=\"month\">9월</Col><Col id=\"c1\">4</Col><Col id=\"c2\">5</Col><Col id=\"c3\">2</Col><Col id=\"c4\">1</Col></Row><Row><Col id=\"month\">10월</Col><Col id=\"c1\">6</Col><Col id=\"c2\">2</Col><Col id=\"c3\">10</Col><Col id=\"c4\">1</Col></Row><Row><Col id=\"month\">11월</Col><Col id=\"c1\">2</Col><Col id=\"c2\">10</Col><Col id=\"c3\">2</Col><Col id=\"c4\">1</Col></Row><Row><Col id=\"month\">12월</Col><Col id=\"c1\">6</Col><Col id=\"c2\">2</Col><Col id=\"c3\">2</Col><Col id=\"c4\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_data3", this);
            obj._setContents("<ColumnInfo><Column id=\"col1\" type=\"STRING\" size=\"256\"/><Column id=\"col2\" type=\"STRING\" size=\"256\"/><Column id=\"col3\" type=\"STRING\" size=\"256\"/><Column id=\"col4\" type=\"STRING\" size=\"256\"/><Column id=\"col5\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"col1\">협약</Col><Col id=\"col2\">협약변경</Col><Col id=\"col3\">차세대 보병전투차량 다중 위협체 대응 지능형 능동방호 기술</Col><Col id=\"col4\">접수대기</Col><Col id=\"col5\">23.12.25 14:00</Col></Row><Row><Col id=\"col1\">공고</Col><Col id=\"col2\">공고접수</Col><Col id=\"col3\">다목적모듈형 무인잠수정용 에너지원 기술 개발</Col><Col id=\"col4\">접수중</Col><Col id=\"col5\">23.11.25 14:00</Col></Row><Row><Col id=\"col1\">사업비</Col><Col id=\"col2\">사업비청구</Col><Col id=\"col3\">국방 수직이착륙기 특화연구센터(기초연구)</Col><Col id=\"col4\">진행중</Col><Col id=\"col5\">23.11.25 14:00</Col></Row><Row><Col id=\"col1\">협약</Col><Col id=\"col2\">협약변경</Col><Col id=\"col5\">23.12.25 14:00</Col><Col id=\"col3\">차세대 보병전투차량 다중 위협체 대응 지능형 능동방호 기술</Col><Col id=\"col4\">접수대기</Col></Row><Row><Col id=\"col1\">공고</Col><Col id=\"col2\">공고접수</Col><Col id=\"col5\">23.11.25 14:00</Col><Col id=\"col3\">다목적모듈형 무인잠수정용 에너지원 기술 개발</Col><Col id=\"col4\">접수중</Col></Row><Row><Col id=\"col1\">사업비</Col><Col id=\"col2\">사업비청구</Col><Col id=\"col5\">23.11.25 14:00</Col><Col id=\"col3\">국방 수직이착륙기 특화연구센터(기초연구)</Col><Col id=\"col4\">진행중</Col></Row><Row><Col id=\"col1\">협약</Col><Col id=\"col2\">협약변경</Col><Col id=\"col3\">차세대 보병전투차량 다중 위협체 대응 지능형 능동방호 기술</Col><Col id=\"col4\">접수대기</Col><Col id=\"col5\">23.12.25 14:00</Col></Row><Row><Col id=\"col1\">공고</Col><Col id=\"col2\">공고접수</Col><Col id=\"col3\">다목적모듈형 무인잠수정용 에너지원 기술 개발</Col><Col id=\"col4\">접수중</Col><Col id=\"col5\">23.11.25 14:00</Col></Row><Row><Col id=\"col1\">사업비</Col><Col id=\"col2\">사업비청구</Col><Col id=\"col3\">국방 수직이착륙기 특화연구센터(기초연구)</Col><Col id=\"col4\">진행중</Col><Col id=\"col5\">23.11.25 14:00</Col></Row><Row><Col id=\"col1\">사업비</Col><Col id=\"col2\">사업비청구</Col><Col id=\"col3\">차세대 보병전투차량 다중 위협체 대응 지능형 능동방호 기술</Col><Col id=\"col4\">진행중</Col><Col id=\"col5\">23.11.25 14:00</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static34","0","0","50",null,null,"0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("W 50");
            obj.set_visible("false");
            obj.set_background("antiquewhite");
            obj.set_color("blue");
            this.addChild(obj.name, obj);

            obj = new Static("Static02",null,"0","50",null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("W\r\n 50");
            obj.set_visible("false");
            obj.set_background("antiquewhite");
            obj.set_color("blue");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","50","15","400","140",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_border("1px solid #cccccc");
            obj.set_text("");
            obj.set_background("#efefef");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","80","15","120","38",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("과제관리책임자");
            obj.set_cssclass("sta_WF_GStatus");
            obj.set_textAlign("center");
            obj.set_font("normal bold 16px/normal \"Arial\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","Static01:0","15","10","38",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("|");
            obj.set_cssclass("sta_WF_GStatus");
            obj.set_textAlign("center");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","Static00:0","15","120","38",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("부서장");
            obj.set_cssclass("sta_WF_GStatus");
            obj.set_textAlign("center");
            obj.set_font("normal 16px/normal \"Arial\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button01","130","72","130","38",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("회원정보");
            obj.set_background("#ffffff");
            obj.set_color("#777777");
            obj.set_border("1px solid #cccccc");
            obj.set_borderRadius("50px");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div01","50","170","400","280",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_border("1px solid #cccccc");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","0","38",null,null,"0","0",null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_type("monthonly");
            obj.set_daysize("28 28");
            obj.set_headheight("28");
            obj.set_popupsize("220");
            obj.set_weekformat("일 월 화 수 목 금 토");
            obj.set_usecontextmenu("true");
            obj.set_border("0px");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01","0","0","120","38",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_text("주요일정");
            obj.set_cssclass("sta_WF_GStatus");
            obj.set_textAlign("center");
            obj.set_font("normal bold 16px/normal \"Arial\"");
            this.Div01.addChild(obj.name, obj);

            obj = new Tab("Tab01","Div00:15","15",null,"434","50",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_tabindex("0");
            obj.set_tabbuttonheight("34");
            obj.set_cssclass("tab_WF_comp");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Tab01);
            obj.set_text("부서과제");
            obj.set_border("1px solid #cccccc");
            this.Tab01.addChild(obj.name, obj);

            obj = new PieChart("PieChart00","0","0","500",null,null,"15",null,null,null,null,this.Tab01.Tabpage1.form);
            obj.getSetter("taborder").set("0");
            obj.getSetter("binddataset").set("dsCountryLitres");
            obj.getSetter("categorycolumn").set("bind:country");
            obj.getSetter("enableanimation").set("true");
            this.Tab01.Tabpage1.addChild(obj.name, obj);

            obj = new Div("Div00","PieChart00:15","15",null,null,"15","15",null,null,null,null,this.Tab01.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_text("");
            this.Tab01.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static01","0%","15","250","38",null,null,null,null,null,null,this.Tab01.Tabpage1.form.Div00.form);
            obj.set_taborder("0");
            obj.set_text("총 10건");
            obj.set_enable("true");
            obj.set_font("normal normal 14px/normal \"맑은고딕\"");
            this.Tab01.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Grid("Grid01","0","Static01:10",null,null,"0","0",null,null,null,null,this.Tab01.Tabpage1.form.Div00.form);
            obj.set_taborder("1");
            obj.set_binddataset("ds_data");
            obj.set_tooltiptype("default");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_grid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"500\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No.\"/><Cell col=\"1\" text=\"과제제목\"/><Cell col=\"2\" text=\"진행상태\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:title\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:status\"/></Band></Format></Formats>");
            this.Tab01.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button02",null,"15","80","38","0",null,null,null,null,null,this.Tab01.Tabpage1.form.Div00.form);
            obj.set_taborder("2");
            obj.set_text("확인");
            this.Tab01.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo00_00",null,"15","100","38","Button02:10",null,null,null,null,null,this.Tab01.Tabpage1.form.Div00.form);
            obj.set_taborder("3");
            obj.set_displaynulltext("전체");
            obj.set_innerdataset("dsCountryLitres");
            obj.set_codecolumn("value");
            obj.set_datacolumn("country");
            this.Tab01.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Tab01);
            obj.set_text("나의과제");
            obj.set_border("1px solid #cccccc");
            this.Tab01.addChild(obj.name, obj);

            obj = new Div("Div00","515","15",null,null,"15","15",null,null,null,null,this.Tab01.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_text("");
            this.Tab01.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static01","0%","15","250","38",null,null,null,null,null,null,this.Tab01.Tabpage2.form.Div00.form);
            obj.set_taborder("0");
            obj.set_text("총 10건");
            obj.set_enable("true");
            obj.set_font("normal normal 14px/normal \"맑은고딕\"");
            this.Tab01.Tabpage2.form.Div00.addChild(obj.name, obj);

            obj = new Grid("Grid01","0","Static01:10",null,null,"0","0",null,null,null,null,this.Tab01.Tabpage2.form.Div00.form);
            obj.set_taborder("1");
            obj.set_binddataset("ds_data2");
            obj.set_tooltiptype("default");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_grid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"500\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No.\"/><Cell col=\"1\" text=\"과제제목\"/><Cell col=\"2\" text=\"진행상태\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:title\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:status\" displaytype=\"normal\"/></Band></Format></Formats>");
            this.Tab01.Tabpage2.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button02",null,"15","80","38","0",null,null,null,null,null,this.Tab01.Tabpage2.form.Div00.form);
            obj.set_taborder("2");
            obj.set_text("확인");
            this.Tab01.Tabpage2.form.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo00_00",null,"15","100","38","Button02:10",null,null,null,null,null,this.Tab01.Tabpage2.form.Div00.form);
            obj.set_taborder("3");
            obj.set_displaynulltext("선택");
            obj.set_innerdataset("dsCountryLitres");
            obj.set_codecolumn("value");
            obj.set_datacolumn("country");
            this.Tab01.Tabpage2.form.Div00.addChild(obj.name, obj);

            obj = new PieChart("PieChart00","0","0","500",null,null,"15",null,null,null,null,this.Tab01.Tabpage2.form);
            obj.getSetter("taborder").set("1");
            obj.getSetter("binddataset").set("dsCountryLitres2");
            obj.getSetter("categorycolumn").set("bind:country");
            obj.getSetter("enableanimation").set("true");
            this.Tab01.Tabpage2.addChild(obj.name, obj);

            obj = new Tab("Tab02","50","Tab01:30",null,"434","50",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_tabindex("0");
            obj.set_tabbuttonheight("34");
            obj.set_cssclass("tab_WF_comp");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Tab02);
            obj.set_text("업무현황");
            obj.set_border("1px solid #cccccc");
            this.Tab02.addChild(obj.name, obj);

            obj = new BasicChart("BasicChart00","50","53",null,null,"50","15",null,null,null,null,this.Tab02.Tabpage1.form);
            obj.getSetter("taborder").set("2");
            obj.getSetter("binddataset").set("dsTempo");
            obj.getSetter("categorycolumn").set("bind:month");
            this.Tab02.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("Combo00_00",null,"15","220","38","110",null,null,null,null,null,this.Tab02.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_displaynulltext("월별 협약관리 건수");
            obj.set_codecolumn("value");
            obj.set_datacolumn("country");
            this.Tab02.Tabpage1.addChild(obj.name, obj);

            obj = new Button("Button02",null,"15","80","38","15",null,null,null,null,null,this.Tab02.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_text("조회");
            this.Tab02.Tabpage1.addChild(obj.name, obj);

            obj = new Button("Button02_00_01","846","21","28","26",null,null,null,null,null,null,this.Tab02.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_text("<");
            obj.set_border("1px solid #ababab");
            obj.set_background("#ffffff");
            obj.set_color("#777777");
            this.Tab02.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static01","Button02_00_01:10","15","55","38",null,null,null,null,null,null,this.Tab02.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_text("2023년");
            obj.set_enable("true");
            obj.set_font("normal 700 16px/normal \"맑은고딕\"");
            this.Tab02.Tabpage1.addChild(obj.name, obj);

            obj = new Button("Button02_00_01_00","Static01:10","21","28","26",null,null,null,null,null,null,this.Tab02.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_text(">");
            obj.set_border("1px solid #ababab");
            obj.set_background("#ffffff");
            obj.set_color("#777777");
            this.Tab02.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Tab02);
            obj.set_text("업무목록");
            obj.set_border("1px solid #cccccc");
            this.Tab02.addChild(obj.name, obj);

            obj = new Div("Div00","15","15",null,null,"15","15",null,null,null,null,this.Tab02.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_text("");
            this.Tab02.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static01","0%","15","250","38",null,null,null,null,null,null,this.Tab02.Tabpage2.form.Div00.form);
            obj.set_taborder("0");
            obj.set_text("총 <fc v=\'red\'>25건</fc>의 업무가 있습니다.");
            obj.set_enable("true");
            obj.set_font("normal bold 14px/normal \"맑은고딕\"");
            obj.set_usedecorate("true");
            this.Tab02.Tabpage2.form.Div00.addChild(obj.name, obj);

            obj = new Grid("Grid01","0","Static01:10",null,null,"0","0",null,null,null,null,this.Tab02.Tabpage2.form.Div00.form);
            obj.set_taborder("1");
            obj.set_binddataset("ds_data3");
            obj.set_tooltiptype("default");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_grid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"80\"/><Column size=\"400\"/><Column size=\"80\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"프로세스\"/><Cell col=\"1\" text=\"업무\"/><Cell col=\"2\" text=\"과제명\"/><Cell col=\"3\" text=\"진행상태\"/><Cell col=\"4\" text=\"처리기한\"/></Band><Band id=\"body\"><Cell text=\"bind:col1\"/><Cell col=\"1\" text=\"bind:col2\"/><Cell col=\"2\" text=\"bind:col3\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:col4\"/><Cell col=\"4\" text=\"bind:col5\"/></Band></Format></Formats>");
            this.Tab02.Tabpage2.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button02",null,"15","80","38","0",null,null,null,null,null,this.Tab02.Tabpage2.form.Div00.form);
            obj.set_taborder("2");
            obj.set_text("확인");
            this.Tab02.Tabpage2.form.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo00_00",null,"15","100","38","Button02:10",null,null,null,null,null,this.Tab02.Tabpage2.form.Div00.form);
            obj.set_taborder("3");
            obj.set_displaynulltext("전체");
            obj.set_codecolumn("value");
            obj.set_datacolumn("country");
            this.Tab02.Tabpage2.form.Div00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01.form
            obj = new Layout("default","",0,0,this.Div01.form,function(p){});
            this.Div01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Tab01.Tabpage1.form.Div00.form
            obj = new Layout("default","",0,0,this.Tab01.Tabpage1.form.Div00.form,function(p){});
            this.Tab01.Tabpage1.form.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Tab01.Tabpage1.form
            obj = new Layout("default","",0,0,this.Tab01.Tabpage1.form,function(p){});
            this.Tab01.Tabpage1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Tab01.Tabpage2.form.Div00.form
            obj = new Layout("default","",0,0,this.Tab01.Tabpage2.form.Div00.form,function(p){});
            this.Tab01.Tabpage2.form.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Tab01.Tabpage2.form
            obj = new Layout("default","",0,0,this.Tab01.Tabpage2.form,function(p){});
            this.Tab01.Tabpage2.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Tab02.Tabpage1.form
            obj = new Layout("default","",0,0,this.Tab02.Tabpage1.form,function(p){});
            this.Tab02.Tabpage1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Tab02.Tabpage2.form.Div00.form
            obj = new Layout("default","",0,0,this.Tab02.Tabpage2.form.Div00.form,function(p){});
            this.Tab02.Tabpage2.form.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Tab02.Tabpage2.form
            obj = new Layout("default","",0,0,this.Tab02.Tabpage2.form,function(p){});
            this.Tab02.Tabpage2.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Tab01.Tabpage1.form.Div00.form.Combo00_00","value","Dataset00","key");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Tab01.Tabpage2.form.Div00.form.Combo00_00","value","Dataset00","key");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Tab02.Tabpage1.form.Div00.form.Combo00_00","value","Dataset00","key");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","Tab02.Tabpage2.form.Div00.form.Combo00_00","value","Dataset00","key");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","Tab02.Tabpage1.form.Combo00_00","value","Dataset00","key");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Static34.addEventHandler("onclick",this.Static02_onclick,this);
            this.Static02.addEventHandler("onclick",this.Static02_onclick,this);
            this.Div00.form.Static01.addEventHandler("onclick",this.Static_onclick,this);
            this.Div00.form.Static00.addEventHandler("onclick",this.Static_onclick,this);
            this.Div00.form.Static02.addEventHandler("onclick",this.Static_onclick,this);
            this.Div01.form.Calendar00.addEventHandler("onchanged",this.Div01_Calendar00_onchanged,this);
            this.Div01.form.Static01.addEventHandler("onclick",this.Static_onclick,this);
            this.Tab01.addEventHandler("onchanged",this.Tab03_onchanged,this);
            this.Tab01.Tabpage1.form.Div00.form.Static01.addEventHandler("onclick",this.Static_onclick,this);
            this.Tab01.Tabpage1.form.Div00.form.Grid01.addEventHandler("oncellclick",this.Div00_Grid01_oncellclick,this);
            this.Tab01.Tabpage2.form.Div00.form.Static01.addEventHandler("onclick",this.Static_onclick,this);
            this.Tab01.Tabpage2.form.Div00.form.Grid01.addEventHandler("oncellclick",this.Div00_Grid01_oncellclick,this);
            this.Tab02.addEventHandler("onchanged",this.Tab03_onchanged,this);
            this.Tab02.Tabpage1.form.Static01.addEventHandler("onclick",this.Static_onclick,this);
            this.Tab02.Tabpage2.form.Div00.form.Static01.addEventHandler("onclick",this.Static_onclick,this);
            this.Tab02.Tabpage2.form.Div00.form.Grid01.addEventHandler("oncellclick",this.Div00_Grid01_oncellclick,this);
        };
        this.loadIncludeScript("myInfo_2010M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
