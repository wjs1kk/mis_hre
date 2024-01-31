(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PTS_4010M_02");
            this.set_titletext("공지사항_상세뷰");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,940);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_radio", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">Y</Col><Col id=\"data\">동의</Col></Row><Row><Col id=\"code\">N</Col><Col id=\"data\">동의하지않음</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NUM\" type=\"STRING\" size=\"256\"/><Column id=\"RQST_NO\" type=\"STRING\" size=\"256\"/><Column id=\"RQST_DT\" type=\"STRING\" size=\"256\"/><Column id=\"APV_STAT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"APV_STAT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RQST_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RQST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RQST_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"SBJ\" type=\"STRING\" size=\"256\"/><Column id=\"FRM_DT\" type=\"STRING\" size=\"256\"/><Column id=\"TO_DT\" type=\"STRING\" size=\"256\"/><Column id=\"isChecked\" type=\"STRING\" size=\"256\"/><Column id=\"HEAD_STAT_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"RQST_NO\">ACT02202001-0001</Col><Col id=\"RQST_DT\">공모-001</Col><Col id=\"APV_STAT_NM\">접수중</Col><Col id=\"APV_STAT_CD\"/><Col id=\"RQST_DEPT_NM\">인사총무팀</Col><Col id=\"RQST_NM\">홍길동</Col><Col id=\"RQST_AMT\">100000</Col><Col id=\"SBJ\">연구활동비 지급신청서활동비 지급신청서활동비 지급신청서활동비 지급신청서</Col><Col id=\"NUM\">1</Col><Col id=\"FRM_DT\">20200101</Col><Col id=\"TO_DT\">20200101</Col><Col id=\"isChecked\">D</Col><Col id=\"HEAD_STAT_CD\">I</Col></Row><Row><Col id=\"NUM\">2</Col><Col id=\"RQST_NO\">ACT02202001-0002</Col><Col id=\"RQST_DT\">공모-002</Col><Col id=\"HEAD_STAT_CD\">U</Col><Col id=\"APV_STAT_NM\">접수대기</Col></Row><Row><Col id=\"NUM\">3</Col><Col id=\"RQST_NO\">ACT02202001-0003</Col><Col id=\"RQST_DT\">공모-003</Col><Col id=\"APV_STAT_NM\">접수중</Col></Row><Row><Col id=\"NUM\">4</Col><Col id=\"RQST_NO\">ACT02202001-0004</Col><Col id=\"RQST_DT\">공모-004</Col><Col id=\"APV_STAT_NM\">마감</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","180","0",null,"920","180",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0",null,"127","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("공지사항");
            obj.set_enable("true");
            obj.set_cssclass("portal_sta_pTitle");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div01","0","Static00:0",null,"743","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","0",null,"125","0",null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("3");
            obj.set_cssclass("portal_sta_bdViewTitleBg");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Div("Div00_00","0","Static00_00:0",null,"94","0",null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("9");
            obj.set_cssclass("portal_div_bdattach");
            obj.set_text("");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static01","40","32","82","20",null,null,null,null,null,null,this.Div00.form.Div01.form.Div00_00.form);
            obj.set_taborder("0");
            obj.set_text("첨부파일");
            obj.set_enable("true");
            obj.set_cssclass("portal_sta_bdViewInfoTitle");
            this.Div00.form.Div01.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static02","Static01:0","32","582","20",null,null,null,null,null,null,this.Div00.form.Div01.form.Div00_00.form);
            obj.set_taborder("1");
            obj.set_text("수출개발 지원사업 사업비 적정성 검토 위탁용역 입찰공고문.jpg (312KB)");
            obj.set_enable("true");
            obj.set_cssclass("portal_sta_bdViewInfo");
            this.Div00.form.Div01.form.Div00_00.addChild(obj.name, obj);

            obj = new Button("btn_grdDownload_W","Static02:10","29","97","26",null,null,null,null,null,null,this.Div00.form.Div01.form.Div00_00.form);
            obj.set_taborder("2");
            obj.set_text("다운로드");
            obj.set_cssclass("portal_btn_download");
            this.Div00.form.Div01.form.Div00_00.addChild(obj.name, obj);

            obj = new Div("Div01","0","Div00_00:0",null,"322","0",null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("0");
            obj.set_cssclass("portal_bdView");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static01","40","10",null,null,"40","10",null,null,null,null,this.Div00.form.Div01.form.Div01.form);
            obj.set_taborder("0");
            obj.set_enable("true");
            obj.set_font("normal normal 14px/normal \"맑은고딕\"");
            obj.set_text("\r\n□ 신청자격\r\n  ㅇ 학술연구용역(업종코드:1169)에 입찰참가자격을 등록한 자\r\n  ㅇ 소기업 및 소상공인 확인서 제출가능한 자\r\n  ㅇ 원가계산 용역기관임을 증명할 수 있는 자료 제출가능한 자\r\n\r\n□ 신청방법\r\n  ㅇ 접수 및 공고 기간 : \'23. 3. 31. ~ \'23. 5. 11. (방문, 우편 접수 마감일이 상이하므로 확인바랍니다.)\r\n  ㅇ 접수방법 : 방문접수 및 우편접수 \r\n  ㅇ 접 수 처 : (52851) 경상남도 진주시 사들로 123 번길 40(배종프라임) 국방기술진흥연구소 3층, 수출개발사업팀\r\n  ㅇ 문 의 처 : 국방기술진흥연구소 수출개발사업팀(055-751-4899)");
            this.Div00.form.Div01.form.Div01.addChild(obj.name, obj);

            obj = new Button("Button02",null,"Div01:20","75","45","742",null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("10");
            obj.set_text("목록");
            obj.set_font("normal 700 16px/normal \"맑은고딕\"");
            obj.set_cssclass("portal_btn_bdBorder");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Div("Div02","0","Button02:20",null,"59","0",null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_cssclass("portal_div_bdPage");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static03","0","0","148","57",null,null,null,null,null,null,this.Div00.form.Div01.form.Div02.form);
            obj.set_taborder("1");
            obj.set_text("이전글");
            obj.set_enable("true");
            obj.set_cssclass("portal_sta_bdprev");
            this.Div00.form.Div01.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static02","Static03:54","13","332","30",null,null,null,null,null,null,this.Div00.form.Div01.form.Div02.form);
            obj.set_taborder("0");
            obj.set_text("충북국방벤처센터 \'23-1차 협약기업 모집 공고");
            obj.set_enable("true");
            obj.set_cssclass("portal_sta_pageTxt");
            this.Div00.form.Div01.form.Div02.addChild(obj.name, obj);

            obj = new Div("Div03","0","Div02:-1",null,"59","0",null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("2");
            obj.set_text("");
            obj.set_cssclass("portal_div_bdPage");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static12","0","0","148","57",null,null,null,null,null,null,this.Div00.form.Div01.form.Div03.form);
            obj.set_taborder("1");
            obj.set_text("다음글");
            obj.set_enable("true");
            obj.set_cssclass("portal_sta_bdnext");
            this.Div00.form.Div01.form.Div03.addChild(obj.name, obj);

            obj = new Static("Static02","Static12:54","13","330","30",null,null,null,null,null,null,this.Div00.form.Div01.form.Div03.form);
            obj.set_taborder("0");
            obj.set_text("2023년 국방핵심기술 과제공모 일정관련 안내");
            obj.set_enable("true");
            obj.set_cssclass("portal_sta_pageTxt");
            this.Div00.form.Div01.form.Div03.addChild(obj.name, obj);

            obj = new Static("Static01","0","24","504","38",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("4");
            obj.set_text("수출개발 지원사업 사업비 적정성 검토 수행기관 모집 공고");
            obj.set_enable("true");
            obj.set_font("normal 700 16px/normal \"맑은고딕\"");
            obj.set_cssclass("portal_sta_bdViewTitle");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_00","105","75","111","20",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("5");
            obj.set_text("2023.02.27");
            obj.set_enable("true");
            obj.set_cssclass("portal_sta_bdViewInfo");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static04_00","Static02_00:43","75","71","20",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("6");
            obj.set_text("조회수 ");
            obj.set_enable("true");
            obj.set_cssclass("portal_sta_bdViewInfoTitle");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static04_00_00","Static04_00:0","75","76","20",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("7");
            obj.set_text("2,312 ");
            obj.set_enable("true");
            obj.set_cssclass("portal_sta_bdViewInfo");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_01","40","75","65","20",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("8");
            obj.set_text("등록일");
            obj.set_enable("true");
            obj.set_cssclass("portal_sta_bdViewInfoTitle");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Button("btn_bookmark",null,"38","40","40","20",null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("11");
            obj.set_cssclass("portal_btn_star");
            this.Div00.form.Div01.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form.Div01.form.Div00_00.form
            obj = new Layout("default","",0,0,this.Div00.form.Div01.form.Div00_00.form,function(p){});
            this.Div00.form.Div01.form.Div00_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form.Div01.form.Div01.form
            obj = new Layout("default","",0,0,this.Div00.form.Div01.form.Div01.form,function(p){});
            this.Div00.form.Div01.form.Div01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form.Div01.form.Div02.form
            obj = new Layout("default","",0,0,this.Div00.form.Div01.form.Div02.form,function(p){});
            this.Div00.form.Div01.form.Div02.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form.Div01.form.Div03.form
            obj = new Layout("default","",0,0,this.Div00.form.Div01.form.Div03.form,function(p){});
            this.Div00.form.Div01.form.Div03.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form.Div01.form
            obj = new Layout("default","",0,0,this.Div00.form.Div01.form,function(p){});
            this.Div00.form.Div01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Div00.form.Combo00","value","Dataset00","key");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Div00.form.Combo00_00","value","Dataset00","key");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("PTS_4010M_02.xfdl", function() {

        this.Div00_Button01_onclick = function(obj,e)
        {
        	var sMenuId = "PTS_4010M_01";
        	var url = "pts::PTS_4010M_01.xfdl";
        	nexacro.getApplication().goPage(sMenuId, url);
        };


        this.Div00_Button06_onclick = function(obj,e)
        {
        	var objChild = new ChildFrame("popupCompany", "absolute", 0, 0, 800, 640);
        	objChild.set_formurl("Login::popup_company.xfdl");
        	objChild.set_openalign("center middle");
        	objChild.set_dragmovetype("all");

            objChild.showModal(this.getOwnerFrame()
                             , {}
                             , this
                             , "fn_callback_pop");
        };

        this.fn_callback_pop = function(sPopupId, sReturn)
        {

        }

        this.Div00_Button07_onclick = function(obj,e)
        {
        	var objChild = new ChildFrame("popupCompanyRegist", "absolute", 0, 0, 810, 360);
        	objChild.set_formurl("Login::popup_companyRegist.xfdl");
        	objChild.set_openalign("center middle");
        	objChild.set_dragmovetype("all");

            objChild.showModal(this.getOwnerFrame()
                             , {}
                             , this
                             , "fn_callback_pop");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Div00.form.Static00.addEventHandler("onclick",this.Static_onclick,this);
            this.Div00.form.Div01.form.Div00_00.form.Static01.addEventHandler("onclick",this.Static_onclick,this);
            this.Div00.form.Div01.form.Div00_00.form.Static02.addEventHandler("onclick",this.Static_onclick,this);
            this.Div00.form.Div01.form.Div01.form.Static01.addEventHandler("onclick",this.Static_onclick,this);
            this.Div00.form.Div01.form.Button02.addEventHandler("onclick",this.Div00_Button01_onclick,this);
            this.Div00.form.Div01.form.Div02.form.Static03.addEventHandler("onclick",this.Static_onclick,this);
            this.Div00.form.Div01.form.Div02.form.Static02.addEventHandler("onclick",this.Static_onclick,this);
            this.Div00.form.Div01.form.Div03.form.Static12.addEventHandler("onclick",this.Static_onclick,this);
            this.Div00.form.Div01.form.Div03.form.Static02.addEventHandler("onclick",this.Static_onclick,this);
            this.Div00.form.Div01.form.Static01.addEventHandler("onclick",this.Static_onclick,this);
            this.Div00.form.Div01.form.Static02_00.addEventHandler("onclick",this.Static_onclick,this);
            this.Div00.form.Div01.form.Static04_00.addEventHandler("onclick",this.Static_onclick,this);
            this.Div00.form.Div01.form.Static04_00_00.addEventHandler("onclick",this.Static_onclick,this);
            this.Div00.form.Div01.form.Static02_01.addEventHandler("onclick",this.Static_onclick,this);
        };
        this.loadIncludeScript("PTS_4010M_02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
