(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PTS_6000M");
            this.set_titletext("마이페이지");
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
            obj = new Static("Static34","0","0","180",null,null,"0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("W 180");
            obj.set_visible("false");
            obj.set_background("antiquewhite");
            obj.set_color("blue");
            this.addChild(obj.name, obj);

            obj = new Static("Static02",null,"0","180",null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("W 180");
            obj.set_visible("false");
            obj.set_background("antiquewhite");
            obj.set_color("blue");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","180","14","400","127",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("");
            obj.set_cssclass("portal_div_charge");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","110","23","72","23",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("주관기업");
            obj.set_cssclass("portal_sys_title");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","Static01:12","32","10","38",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("|");
            obj.set_cssclass("sta_WF_GStatus");
            obj.set_textAlign("center");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","Static00:12","23","90","23",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("총괄담당자");
            obj.set_cssclass("portal_sys_charge");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btnMemberInfo","74","65","125","36",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("회원정보");
            obj.set_cssclass("portal_btn_charge");
            obj.set_borderRadius("999px 0px 0px 999px");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button01_00","btnMemberInfo:-1","65","125","36",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("관심게시물");
            obj.set_cssclass("portal_btn_charge");
            obj.set_borderRadius("0px 999px 999px 0px");
            this.Div00.addChild(obj.name, obj);

            obj = new Tab("Tab01","Div00:20","15",null,"408","180",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_tabindex("0");
            obj.set_tabbuttonheight("36");
            obj.set_cssclass("portal_tab_mypage");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Tab01);
            obj.set_text("부서과제");
            this.Tab01.addChild(obj.name, obj);

            obj = new PieChart("PieChart00","0","0","500",null,null,"15",null,null,null,null,this.Tab01.Tabpage1.form);
            obj.getSetter("taborder").set("0");
            obj.getSetter("binddataset").set("dsCountryLitres");
            obj.getSetter("categorycolumn").set("bind:country");
            obj.getSetter("enableanimation").set("true");
            this.Tab01.Tabpage1.addChild(obj.name, obj);

            obj = new Div("Div00","PieChart00:15","33",null,null,"20","20",null,null,null,null,this.Tab01.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_text("");
            this.Tab01.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static01","0.00%","0","56","40",null,null,null,null,null,null,this.Tab01.Tabpage1.form.Div00.form);
            obj.set_taborder("0");
            obj.set_text("총 10건");
            obj.set_enable("true");
            obj.set_cssclass("portal_mypage_Total");
            this.Tab01.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Grid("Grid01","0","Static01:12",null,null,"0","0",null,null,null,null,this.Tab01.Tabpage1.form.Div00.form);
            obj.set_taborder("1");
            obj.set_binddataset("ds_data");
            obj.set_tooltiptype("default");
            obj.set_autofittype("col");
            obj.set_cssclass("portal_grd_mypage");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"470\"/><Column size=\"80\"/></Columns><Rows><Row size=\"37\" band=\"head\"/><Row size=\"36\"/></Rows><Band id=\"head\"><Cell text=\"No.\"/><Cell col=\"1\" text=\"과제제목\"/><Cell col=\"2\" text=\"진행상태\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:title\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:status\"/></Band></Format></Formats>");
            this.Tab01.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button02",null,"0","80","40","0",null,null,null,null,null,this.Tab01.Tabpage1.form.Div00.form);
            obj.set_taborder("2");
            obj.set_text("확인");
            obj.set_cssclass("portal_btn_mypage");
            this.Tab01.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo00_00",null,"0","175","40","Button02:5",null,null,null,null,null,this.Tab01.Tabpage1.form.Div00.form);
            obj.set_taborder("3");
            obj.set_displaynulltext("전체");
            obj.set_innerdataset("dsCountryLitres");
            obj.set_codecolumn("value");
            obj.set_datacolumn("country");
            obj.set_cssclass("portal_cmb_mypage");
            this.Tab01.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Tab01);
            obj.set_text("나의과제");
            obj.set_border("1px solid #cccccc");
            this.Tab01.addChild(obj.name, obj);

            obj = new PieChart("PieChart00","0","0","500",null,null,"15",null,null,null,null,this.Tab01.Tabpage2.form);
            obj.getSetter("taborder").set("1");
            obj.getSetter("binddataset").set("dsCountryLitres2");
            obj.getSetter("categorycolumn").set("bind:country");
            obj.getSetter("enableanimation").set("true");
            this.Tab01.Tabpage2.addChild(obj.name, obj);

            obj = new Div("Div00","PieChart00:15","33",null,null,"20","20",null,null,null,null,this.Tab01.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_text("");
            this.Tab01.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static01","0%","0","49","40",null,null,null,null,null,null,this.Tab01.Tabpage2.form.Div00.form);
            obj.set_taborder("0");
            obj.set_text("총 10건");
            obj.set_enable("true");
            obj.set_font("normal normal 14px/normal \"맑은고딕\"");
            obj.set_cssclass("portal_mypage_Total");
            this.Tab01.Tabpage2.form.Div00.addChild(obj.name, obj);

            obj = new Grid("Grid01","0","Static01:12",null,null,"0","0",null,null,null,null,this.Tab01.Tabpage2.form.Div00.form);
            obj.set_taborder("1");
            obj.set_binddataset("ds_data2");
            obj.set_tooltiptype("default");
            obj.set_autofittype("col");
            obj.set_cssclass("portal_grd_mypage");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"470\"/><Column size=\"80\"/></Columns><Rows><Row size=\"37\" band=\"head\"/><Row size=\"36\"/></Rows><Band id=\"head\"><Cell text=\"No.\"/><Cell col=\"1\" text=\"과제제목\"/><Cell col=\"2\" text=\"진행상태\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:title\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:status\" displaytype=\"normal\"/></Band></Format></Formats>");
            this.Tab01.Tabpage2.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button02",null,"0","80","40","0",null,null,null,null,null,this.Tab01.Tabpage2.form.Div00.form);
            obj.set_taborder("2");
            obj.set_text("확인");
            obj.set_cssclass("portal_btn_mypage");
            this.Tab01.Tabpage2.form.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo00_00",null,"0","100","40","Button02:5",null,null,null,null,null,this.Tab01.Tabpage2.form.Div00.form);
            obj.set_taborder("3");
            obj.set_displaynulltext("선택");
            obj.set_innerdataset("dsCountryLitres");
            obj.set_codecolumn("value");
            obj.set_datacolumn("country");
            obj.set_cssclass("portal_cmb_mypage");
            this.Tab01.Tabpage2.form.Div00.addChild(obj.name, obj);

            obj = new Div("Div01","180","Div00:15","400","267",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_border("1px solid #cccccc");
            obj.set_cssclass("portal_div_system");
            this.addChild(obj.name, obj);

            obj = new Div("divDay","20","25","358",null,null,"10",null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("portal_div_calendar");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("btnNext",null,"0","25","25","0",null,null,null,null,null,this.Div01.form.divDay.form);
            obj.set_taborder("44");
            obj.set_cssclass("portal_btn_calNext");
            this.Div01.form.divDay.addChild(obj.name, obj);

            obj = new Button("btnYearMonth",null,"0","84","25","btnNext:0",null,null,null,null,null,this.Div01.form.divDay.form);
            obj.set_taborder("0");
            obj.set_text("2021년 5월");
            obj.set_cssclass("portal_btn_calYM");
            this.Div01.form.divDay.addChild(obj.name, obj);

            obj = new Button("btnPrev",null,"0","25","25","btnYearMonth:0",null,null,null,null,null,this.Div01.form.divDay.form);
            obj.set_taborder("43");
            obj.set_cssclass("portal_btn_calPrev");
            this.Div01.form.divDay.addChild(obj.name, obj);

            obj = new Static("stSun","19","30","46","30",null,null,null,null,null,null,this.Div01.form.divDay.form);
            obj.set_taborder("1");
            obj.set_text("일");
            obj.set_cssclass("portal_sta_calText");
            this.Div01.form.divDay.addChild(obj.name, obj);

            obj = new Static("stMon","65","30","46","30",null,null,null,null,null,null,this.Div01.form.divDay.form);
            obj.set_taborder("7");
            obj.set_text("월");
            obj.set_cssclass("portal_sta_calText");
            this.Div01.form.divDay.addChild(obj.name, obj);

            obj = new Static("stTue","111","30","46","30",null,null,null,null,null,null,this.Div01.form.divDay.form);
            obj.set_taborder("13");
            obj.set_text("화");
            obj.set_cssclass("portal_sta_calText");
            this.Div01.form.divDay.addChild(obj.name, obj);

            obj = new Static("stWed","157","30","46","30",null,null,null,null,null,null,this.Div01.form.divDay.form);
            obj.set_taborder("19");
            obj.set_text("수");
            obj.set_cssclass("portal_sta_calText");
            this.Div01.form.divDay.addChild(obj.name, obj);

            obj = new Static("stThu","203","30","46","30",null,null,null,null,null,null,this.Div01.form.divDay.form);
            obj.set_taborder("25");
            obj.set_text("목");
            obj.set_cssclass("portal_sta_calText");
            this.Div01.form.divDay.addChild(obj.name, obj);

            obj = new Static("stFri","249","30","46","30",null,null,null,null,null,null,this.Div01.form.divDay.form);
            obj.set_taborder("31");
            obj.set_text("금");
            obj.set_cssclass("portal_sta_calText");
            this.Div01.form.divDay.addChild(obj.name, obj);

            obj = new Static("stSta","295","30","46","30",null,null,null,null,null,null,this.Div01.form.divDay.form);
            obj.set_taborder("37");
            obj.set_text("토");
            obj.set_cssclass("portal_sta_calText");
            this.Div01.form.divDay.addChild(obj.name, obj);

            obj = new Button("btn_3","19","70","46","32",null,null,null,null,null,null,this.Div01.form.divDay.form);
            obj.set_taborder("20");
            obj.set_text("28");
            obj.set_cssclass("portal_btn_calDate");
            this.Div01.form.divDay.addChild(obj.name, obj);

            obj = new Button("btn_4","65","70","46","32",null,null,null,null,null,null,this.Div01.form.divDay.form);
            obj.set_taborder("26");
            obj.set_text("29");
            obj.set_cssclass("portal_btn_calDate");
            this.Div01.form.divDay.addChild(obj.name, obj);

            obj = new Button("btn_5","111","70","46","32",null,null,null,null,null,null,this.Div01.form.divDay.form);
            obj.set_taborder("32");
            obj.set_text("30");
            obj.set_cssclass("portal_btn_calDate");
            this.Div01.form.divDay.addChild(obj.name, obj);

            obj = new Button("btn_6","157","70","46","32",null,null,null,null,null,null,this.Div01.form.divDay.form);
            obj.set_taborder("38");
            obj.set_text("1");
            obj.set_cssclass("portal_btn_calDate_today");
            this.Div01.form.divDay.addChild(obj.name, obj);

            obj = new Button("btn_7","203","70","46","32",null,null,null,null,null,null,this.Div01.form.divDay.form);
            obj.set_taborder("2");
            obj.set_text("2");
            obj.set_cssclass("portal_btn_calDate");
            this.Div01.form.divDay.addChild(obj.name, obj);

            obj = new Button("btn_8","249","70","46","32",null,null,null,null,null,null,this.Div01.form.divDay.form);
            obj.set_taborder("8");
            obj.set_text("3");
            obj.set_cssclass("portal_btn_calDate");
            this.Div01.form.divDay.addChild(obj.name, obj);

            obj = new Button("btn_9","295","70","46","32",null,null,null,null,null,null,this.Div01.form.divDay.form);
            obj.set_taborder("14");
            obj.set_text("4");
            obj.set_cssclass("portal_btn_calDate");
            this.Div01.form.divDay.addChild(obj.name, obj);

            obj = new Button("btn_10","19","102","46","32",null,null,null,null,null,null,this.Div01.form.divDay.form);
            obj.set_taborder("21");
            obj.set_text("5");
            obj.set_cssclass("portal_btn_calDate");
            this.Div01.form.divDay.addChild(obj.name, obj);

            obj = new Button("btn_11","65","102","46","32",null,null,null,null,null,null,this.Div01.form.divDay.form);
            obj.set_taborder("27");
            obj.set_text("6");
            obj.set_cssclass("portal_btn_calDate");
            this.Div01.form.divDay.addChild(obj.name, obj);

            obj = new Button("btn_12","111","102","46","32",null,null,null,null,null,null,this.Div01.form.divDay.form);
            obj.set_taborder("33");
            obj.set_text("7");
            obj.set_cssclass("portal_btn_calDate");
            this.Div01.form.divDay.addChild(obj.name, obj);

            obj = new Button("btn_13","157","102","46","32",null,null,null,null,null,null,this.Div01.form.divDay.form);
            obj.set_taborder("39");
            obj.set_text("8");
            obj.set_cssclass("portal_btn_calDate");
            this.Div01.form.divDay.addChild(obj.name, obj);

            obj = new Button("btn_14","203","102","46","32",null,null,null,null,null,null,this.Div01.form.divDay.form);
            obj.set_taborder("3");
            obj.set_text("9");
            obj.set_cssclass("portal_btn_calDate");
            this.Div01.form.divDay.addChild(obj.name, obj);

            obj = new Button("btn_15","249","102","46","32",null,null,null,null,null,null,this.Div01.form.divDay.form);
            obj.set_taborder("9");
            obj.set_text("10");
            obj.set_cssclass("portal_btn_calDate");
            this.Div01.form.divDay.addChild(obj.name, obj);

            obj = new Button("btn_16","295","102","46","32",null,null,null,null,null,null,this.Div01.form.divDay.form);
            obj.set_taborder("15");
            obj.set_text("11");
            obj.set_cssclass("portal_btn_calDate");
            this.Div01.form.divDay.addChild(obj.name, obj);

            obj = new Button("btn_17","19","134","46","32",null,null,null,null,null,null,this.Div01.form.divDay.form);
            obj.set_taborder("22");
            obj.set_text("12");
            obj.set_cssclass("portal_btn_calDate_S");
            this.Div01.form.divDay.addChild(obj.name, obj);

            obj = new Button("btn_18","65","134","46","32",null,null,null,null,null,null,this.Div01.form.divDay.form);
            obj.set_taborder("28");
            obj.set_text("13");
            obj.set_cssclass("portal_btn_calDate");
            this.Div01.form.divDay.addChild(obj.name, obj);

            obj = new Button("btn_19","111","134","46","32",null,null,null,null,null,null,this.Div01.form.divDay.form);
            obj.set_taborder("34");
            obj.set_text("14");
            obj.set_cssclass("portal_btn_calDate");
            this.Div01.form.divDay.addChild(obj.name, obj);

            obj = new Button("btn_20","157","134","46","32",null,null,null,null,null,null,this.Div01.form.divDay.form);
            obj.set_taborder("40");
            obj.set_text("15");
            obj.set_cssclass("portal_btn_calDate");
            this.Div01.form.divDay.addChild(obj.name, obj);

            obj = new Button("btn_21","203","134","46","32",null,null,null,null,null,null,this.Div01.form.divDay.form);
            obj.set_taborder("4");
            obj.set_text("16");
            obj.set_cssclass("portal_btn_calDate");
            this.Div01.form.divDay.addChild(obj.name, obj);

            obj = new Button("btn_22","249","134","46","32",null,null,null,null,null,null,this.Div01.form.divDay.form);
            obj.set_taborder("10");
            obj.set_text("17");
            obj.set_cssclass("portal_btn_calDate");
            this.Div01.form.divDay.addChild(obj.name, obj);

            obj = new Button("btn_23","295","134","46","32",null,null,null,null,null,null,this.Div01.form.divDay.form);
            obj.set_taborder("16");
            obj.set_text("18");
            obj.set_cssclass("portal_btn_calDate");
            this.Div01.form.divDay.addChild(obj.name, obj);

            obj = new Button("btn_24","19","166","46","32",null,null,null,null,null,null,this.Div01.form.divDay.form);
            obj.set_taborder("23");
            obj.set_text("19");
            obj.set_cssclass("portal_btn_calDate");
            this.Div01.form.divDay.addChild(obj.name, obj);

            obj = new Button("btn_25","65","166","46","32",null,null,null,null,null,null,this.Div01.form.divDay.form);
            obj.set_taborder("29");
            obj.set_text("20");
            obj.set_cssclass("portal_btn_calDate");
            this.Div01.form.divDay.addChild(obj.name, obj);

            obj = new Button("btn_26","111","166","46","32",null,null,null,null,null,null,this.Div01.form.divDay.form);
            obj.set_taborder("35");
            obj.set_text("21");
            obj.set_cssclass("portal_btn_calDate");
            this.Div01.form.divDay.addChild(obj.name, obj);

            obj = new Button("btn_27","157","166","46","32",null,null,null,null,null,null,this.Div01.form.divDay.form);
            obj.set_taborder("41");
            obj.set_text("22");
            obj.set_cssclass("portal_btn_calDate");
            this.Div01.form.divDay.addChild(obj.name, obj);

            obj = new Button("btn_28","203","166","46","32",null,null,null,null,null,null,this.Div01.form.divDay.form);
            obj.set_taborder("5");
            obj.set_text("23");
            obj.set_cssclass("portal_btn_calDate");
            this.Div01.form.divDay.addChild(obj.name, obj);

            obj = new Button("btn_29","249","166","46","32",null,null,null,null,null,null,this.Div01.form.divDay.form);
            obj.set_taborder("11");
            obj.set_text("24");
            obj.set_cssclass("portal_btn_calDate");
            this.Div01.form.divDay.addChild(obj.name, obj);

            obj = new Button("btn_30","295","166","46","32",null,null,null,null,null,null,this.Div01.form.divDay.form);
            obj.set_taborder("17");
            obj.set_text("25");
            obj.set_cssclass("portal_btn_calDate");
            this.Div01.form.divDay.addChild(obj.name, obj);

            obj = new Button("btn_31","19","198","46","32",null,null,null,null,null,null,this.Div01.form.divDay.form);
            obj.set_taborder("24");
            obj.set_text("26");
            obj.set_cssclass("portal_btn_calDate");
            this.Div01.form.divDay.addChild(obj.name, obj);

            obj = new Button("btn_32","65","198","46","32",null,null,null,null,null,null,this.Div01.form.divDay.form);
            obj.set_taborder("30");
            obj.set_text("27");
            obj.set_cssclass("portal_btn_calDate");
            this.Div01.form.divDay.addChild(obj.name, obj);

            obj = new Button("btn_33","111","198","46","32",null,null,null,null,null,null,this.Div01.form.divDay.form);
            obj.set_taborder("36");
            obj.set_text("28");
            obj.set_cssclass("portal_btn_calDate");
            this.Div01.form.divDay.addChild(obj.name, obj);

            obj = new Button("btn_34","157","198","46","32",null,null,null,null,null,null,this.Div01.form.divDay.form);
            obj.set_taborder("42");
            obj.set_text("29");
            obj.set_cssclass("portal_btn_calDate");
            this.Div01.form.divDay.addChild(obj.name, obj);

            obj = new Button("btn_35","203","198","46","32",null,null,null,null,null,null,this.Div01.form.divDay.form);
            obj.set_taborder("6");
            obj.set_text("30");
            obj.set_cssclass("portal_btn_calDate");
            this.Div01.form.divDay.addChild(obj.name, obj);

            obj = new Button("btn_36","249","198","46","32",null,null,null,null,null,null,this.Div01.form.divDay.form);
            obj.set_taborder("12");
            obj.set_text("31");
            obj.set_cssclass("portal_btn_calDate");
            this.Div01.form.divDay.addChild(obj.name, obj);

            obj = new Button("btn_37","295","198","46","32",null,null,null,null,null,null,this.Div01.form.divDay.form);
            obj.set_taborder("18");
            obj.set_text("1");
            obj.set_cssclass("portal_btn_calDate");
            this.Div01.form.divDay.addChild(obj.name, obj);

            obj = new Static("Static01","25","24","72","23",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_text("주요일정");
            obj.set_cssclass("portal_sys_title");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00","0","Tab01:20",null,"487","0",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("portal_mypageBg");
            this.addChild(obj.name, obj);

            obj = new Tab("Tab02","180","463",null,"434","180",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_tabindex("0");
            obj.set_tabbuttonheight("36");
            obj.set_cssclass("portal_tab_mypage");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Tab02);
            obj.set_text("업무현황");
            obj.set_border("1px solid #cccccc");
            this.Tab02.addChild(obj.name, obj);

            obj = new Static("Static01","741","40","85","21",null,null,null,null,null,null,this.Tab02.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_text("2023년");
            obj.set_enable("true");
            obj.set_cssclass("portal_work_year");
            this.Tab02.Tabpage1.addChild(obj.name, obj);

            obj = new BasicChart("BasicChart00","50","Static01:10",null,null,"50","15",null,null,null,null,this.Tab02.Tabpage1.form);
            obj.getSetter("taborder").set("2");
            obj.getSetter("binddataset").set("dsTempo");
            obj.getSetter("categorycolumn").set("bind:month");
            this.Tab02.Tabpage1.addChild(obj.name, obj);

            obj = new Button("Button02",null,"20","80","40","20",null,null,null,null,null,this.Tab02.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_text("조회");
            obj.set_cssclass("portal_btn_mypage");
            this.Tab02.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("Combo00_00",null,"20","200","40","Button02:5",null,null,null,null,null,this.Tab02.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_displaynulltext("월별 협약관리 건수");
            obj.set_codecolumn("value");
            obj.set_datacolumn("country");
            obj.set_cssclass("portal_cmb_mypage");
            obj.set_text("");
            this.Tab02.Tabpage1.addChild(obj.name, obj);

            obj = new Button("Button02_00_01","720","40","21","21",null,null,null,null,null,null,this.Tab02.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_cssclass("portal_work_datePrev");
            obj.set_text("");
            this.Tab02.Tabpage1.addChild(obj.name, obj);

            obj = new Button("Button02_00_01_00","Static01:0","40","21","21",null,null,null,null,null,null,this.Tab02.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_cssclass("portal_work_dateNext");
            this.Tab02.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Tab02);
            obj.set_text("업무목록");
            obj.set_border("1px solid #cccccc");
            this.Tab02.addChild(obj.name, obj);

            obj = new Div("Div00","20","20",null,null,"20","50",null,null,null,null,this.Tab02.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_text("");
            this.Tab02.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static01","0%","0","187","40",null,null,null,null,null,null,this.Tab02.Tabpage2.form.Div00.form);
            obj.set_taborder("0");
            obj.set_text("총 <fc v=\'#ed0c0c\'>25건</fc>의 업무가 있습니다.");
            obj.set_enable("true");
            obj.set_usedecorate("true");
            obj.set_cssclass("portal_work_Total");
            this.Tab02.Tabpage2.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button02",null,"0","80","40","0",null,null,null,null,null,this.Tab02.Tabpage2.form.Div00.form);
            obj.set_taborder("2");
            obj.set_text("확인");
            obj.set_cssclass("portal_btn_mypage");
            this.Tab02.Tabpage2.form.Div00.addChild(obj.name, obj);

            obj = new Grid("Grid01","0","Button02:10",null,null,"0","0",null,null,null,null,this.Tab02.Tabpage2.form.Div00.form);
            obj.set_taborder("1");
            obj.set_binddataset("ds_data3");
            obj.set_tooltiptype("default");
            obj.set_autofittype("col");
            obj.set_cssclass("portal_grd_work");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"80\"/><Column size=\"400\"/><Column size=\"80\"/><Column size=\"120\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"36\"/></Rows><Band id=\"head\"><Cell text=\"프로세스\"/><Cell col=\"1\" text=\"업무\"/><Cell col=\"2\" text=\"과제명\"/><Cell col=\"3\" text=\"진행상태\"/><Cell col=\"4\" text=\"처리기한\"/></Band><Band id=\"body\"><Cell text=\"bind:col1\"/><Cell col=\"1\" text=\"bind:col2\"/><Cell col=\"2\" text=\"bind:col3\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:col4\"/><Cell col=\"4\" text=\"bind:col5\"/></Band></Format></Formats>");
            this.Tab02.Tabpage2.form.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo00_00",null,"0","175","40","Button02:5",null,null,null,null,null,this.Tab02.Tabpage2.form.Div00.form);
            obj.set_taborder("3");
            obj.set_displaynulltext("전체");
            obj.set_codecolumn("value");
            obj.set_datacolumn("country");
            obj.set_cssclass("portal_cmb_mypage");
            this.Tab02.Tabpage2.form.Div00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

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

            //-- Default Layout : this.Div01.form.divDay.form
            obj = new Layout("default","",0,0,this.Div01.form.divDay.form,function(p){});
            this.Div01.form.divDay.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01.form
            obj = new Layout("default","",0,0,this.Div01.form,function(p){});
            this.Div01.form.addLayout(obj.name, obj);

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
        this.addIncludeScript("PTS_6000M.xfdl","lib::common.xjs");
        this.registerScript("PTS_6000M.xfdl", function() {
        /**
        *  프로그램 관리
        *  MenuPath      시스템 관리 - 기준정보 관리 - 프로그램 관리
        *  FileName      PRG_1010M.xfdl
        *  Creator       yuyr
        *  CreateDate    2023.10.31
        *  Desction      프로그램 관리
        ************** 소스 수정 이력 ***********************************************
        *  date          Modifier    Description
        *******************************************************************************
        *  2023.10.31    yuyr      최초 생성
        *******************************************************************************/
        this.executeIncludeScript("lib::common.xjs"); /*include "lib::common.xjs"*/;
        /***********************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose)
         ***********************************************************************************************/
        this.programManage_oninit = function(obj,e)
        {
            this.gfnFormOnLoad(this);
            this.fnLoadCombo();
        };

        /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/
        this.btnMemberInfo_onclick = function(obj,e)
        {
        	var sMenuId = "memberInfo";
        	//var url = "Mypage::my_myInfo.xfdl";
        	var url = "cms::CMS_1020M.xfdl";
        	app.goPage(sMenuId, url);
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Static34.addEventHandler("onclick",this.Static02_onclick,this);
            this.Static02.addEventHandler("onclick",this.Static02_onclick,this);
            this.Div00.form.Static01.addEventHandler("onclick",this.Static_onclick,this);
            this.Div00.form.Static00.addEventHandler("onclick",this.Static_onclick,this);
            this.Div00.form.Static02.addEventHandler("onclick",this.Static_onclick,this);
            this.Div00.form.btnMemberInfo.addEventHandler("onclick",this.btnMemberInfo_onclick,this);
            this.Tab01.addEventHandler("onchanged",this.Tab03_onchanged,this);
            this.Tab01.Tabpage1.form.Div00.form.Static01.addEventHandler("onclick",this.Static_onclick,this);
            this.Tab01.Tabpage1.form.Div00.form.Grid01.addEventHandler("oncellclick",this.Div00_Grid01_oncellclick,this);
            this.Tab01.Tabpage2.form.Div00.form.Static01.addEventHandler("onclick",this.Static_onclick,this);
            this.Tab01.Tabpage2.form.Div00.form.Grid01.addEventHandler("oncellclick",this.Div00_Grid01_oncellclick,this);
            this.Div01.form.divDay.addEventHandler("onsize",this.divDay_onsize,this);
            this.Div01.form.divDay.form.btnNext.addEventHandler("onclick",this.divDay_btnNext_onclick,this);
            this.Div01.form.divDay.form.btnYearMonth.addEventHandler("onclick",this.divDay_btnYearMonth_onclick,this);
            this.Div01.form.divDay.form.btnPrev.addEventHandler("onclick",this.divDay_btnPrev_onclick,this);
            this.Div01.form.divDay.form.btn_3.addEventHandler("onclick",this.DayButton_onclick,this);
            this.Div01.form.divDay.form.btn_4.addEventHandler("onclick",this.DayButton_onclick,this);
            this.Div01.form.divDay.form.btn_5.addEventHandler("onclick",this.DayButton_onclick,this);
            this.Div01.form.divDay.form.btn_6.addEventHandler("onclick",this.DayButton_onclick,this);
            this.Div01.form.divDay.form.btn_7.addEventHandler("onclick",this.DayButton_onclick,this);
            this.Div01.form.divDay.form.btn_8.addEventHandler("onclick",this.DayButton_onclick,this);
            this.Div01.form.divDay.form.btn_9.addEventHandler("onclick",this.DayButton_onclick,this);
            this.Div01.form.divDay.form.btn_10.addEventHandler("onclick",this.DayButton_onclick,this);
            this.Div01.form.divDay.form.btn_11.addEventHandler("onclick",this.DayButton_onclick,this);
            this.Div01.form.divDay.form.btn_12.addEventHandler("onclick",this.DayButton_onclick,this);
            this.Div01.form.divDay.form.btn_13.addEventHandler("onclick",this.DayButton_onclick,this);
            this.Div01.form.divDay.form.btn_14.addEventHandler("onclick",this.DayButton_onclick,this);
            this.Div01.form.divDay.form.btn_15.addEventHandler("onclick",this.DayButton_onclick,this);
            this.Div01.form.divDay.form.btn_16.addEventHandler("onclick",this.DayButton_onclick,this);
            this.Div01.form.divDay.form.btn_17.addEventHandler("onclick",this.DayButton_onclick,this);
            this.Div01.form.divDay.form.btn_18.addEventHandler("onclick",this.DayButton_onclick,this);
            this.Div01.form.divDay.form.btn_19.addEventHandler("onclick",this.DayButton_onclick,this);
            this.Div01.form.divDay.form.btn_20.addEventHandler("onclick",this.DayButton_onclick,this);
            this.Div01.form.divDay.form.btn_21.addEventHandler("onclick",this.DayButton_onclick,this);
            this.Div01.form.divDay.form.btn_22.addEventHandler("onclick",this.DayButton_onclick,this);
            this.Div01.form.divDay.form.btn_23.addEventHandler("onclick",this.DayButton_onclick,this);
            this.Div01.form.divDay.form.btn_24.addEventHandler("onclick",this.DayButton_onclick,this);
            this.Div01.form.divDay.form.btn_25.addEventHandler("onclick",this.DayButton_onclick,this);
            this.Div01.form.divDay.form.btn_26.addEventHandler("onclick",this.DayButton_onclick,this);
            this.Div01.form.divDay.form.btn_27.addEventHandler("onclick",this.DayButton_onclick,this);
            this.Div01.form.divDay.form.btn_28.addEventHandler("onclick",this.DayButton_onclick,this);
            this.Div01.form.divDay.form.btn_29.addEventHandler("onclick",this.DayButton_onclick,this);
            this.Div01.form.divDay.form.btn_30.addEventHandler("onclick",this.DayButton_onclick,this);
            this.Div01.form.divDay.form.btn_31.addEventHandler("onclick",this.DayButton_onclick,this);
            this.Div01.form.divDay.form.btn_32.addEventHandler("onclick",this.DayButton_onclick,this);
            this.Div01.form.divDay.form.btn_33.addEventHandler("onclick",this.DayButton_onclick,this);
            this.Div01.form.divDay.form.btn_34.addEventHandler("onclick",this.DayButton_onclick,this);
            this.Div01.form.divDay.form.btn_35.addEventHandler("onclick",this.DayButton_onclick,this);
            this.Div01.form.divDay.form.btn_36.addEventHandler("onclick",this.DayButton_onclick,this);
            this.Div01.form.divDay.form.btn_37.addEventHandler("onclick",this.DayButton_onclick,this);
            this.Div01.form.Static01.addEventHandler("onclick",this.Static_onclick,this);
            this.Tab02.addEventHandler("onchanged",this.Tab03_onchanged,this);
            this.Tab02.Tabpage1.form.Static01.addEventHandler("onclick",this.Static_onclick,this);
            this.Tab02.Tabpage2.form.Div00.form.Static01.addEventHandler("onclick",this.Static_onclick,this);
            this.Tab02.Tabpage2.form.Div00.form.Grid01.addEventHandler("oncellclick",this.Div00_Grid01_oncellclick,this);
        };
        this.loadIncludeScript("PTS_6000M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
