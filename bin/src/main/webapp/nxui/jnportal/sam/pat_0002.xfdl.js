(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Pattern02");
            this.set_titletext("Pattern02");
            if (Form == this.constructor)
            {
                this._setFormPosition(1050,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_List", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NUM\" type=\"STRING\" size=\"256\"/><Column id=\"RQST_NO\" type=\"STRING\" size=\"256\"/><Column id=\"RQST_DT\" type=\"STRING\" size=\"256\"/><Column id=\"APV_STAT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"APV_STAT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RQST_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RQST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RQST_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"SBJ\" type=\"STRING\" size=\"256\"/><Column id=\"HEAD_STAT_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"RQST_NO\">ACT02203001-0001</Col><Col id=\"RQST_DT\">20300101</Col><Col id=\"APV_STAT_NM\">결재중</Col><Col id=\"APV_STAT_CD\">020-000-0100</Col><Col id=\"RQST_DEPT_NM\">인사총무팀</Col><Col id=\"RQST_NM\">홍길동</Col><Col id=\"RQST_AMT\">100000</Col><Col id=\"SBJ\">연구활동비 지급신청서활동비 지급신청서활동비 지급신청서활동비 지급신청서</Col><Col id=\"NUM\">1</Col><Col id=\"HEAD_STAT_CD\">I</Col></Row><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_Search","15","78",null,"80","15",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("div_WFSA_SearchBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","20","10","80","24",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("1");
            obj.set_text("신청번호");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_Search.addChild(obj.name, obj);

            obj = new Static("Static00","334","10","80","24",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("8");
            obj.set_text("신청일");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_Search.addChild(obj.name, obj);

            obj = new Calendar("Calendar01","405","10","120","24",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("2");
            this.div_Search.addChild(obj.name, obj);

            obj = new Static("Static02","525","-2","40","80",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("9");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_Search.addChild(obj.name, obj);

            obj = new Static("Static03","554","10","70","24",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("10");
            obj.set_text("신청자");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_Search.addChild(obj.name, obj);

            obj = new Edit("MaskEdit01","626","10","120","24",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("3");
            this.div_Search.addChild(obj.name, obj);

            obj = new Button("Button00","740","10","24","24",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_SearchSmall");
            this.div_Search.addChild(obj.name, obj);

            obj = new Static("Static04","764","10","40","22",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("11");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_Search.addChild(obj.name, obj);

            obj = new Static("Static05","793","10","70","24",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("12");
            obj.set_text("결재상태");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_Search.addChild(obj.name, obj);

            obj = new Combo("Combo00","863","10","124","24",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("4");
            obj.set_text("Combo00");
            this.div_Search.addChild(obj.name, obj);

            obj = new Static("Static07","20","42","80","24",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("13");
            obj.set_text("최종수정자");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_Search.addChild(obj.name, obj);

            obj = new Static("Static08","334","42","80","24",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("14");
            obj.set_text("사업년도");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_Search.addChild(obj.name, obj);

            obj = new Static("Static09","554","42","70","24",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("15");
            obj.set_text("신청부서");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_Search.addChild(obj.name, obj);

            obj = new Edit("MaskEdit00","626","42","320","24",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("6");
            this.div_Search.addChild(obj.name, obj);

            obj = new Button("Button01","945","42","24","24",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("16");
            obj.set_cssclass("btn_WF_SearchSmall");
            this.div_Search.addChild(obj.name, obj);

            obj = new Edit("Edit00","104","10","190","24",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("0");
            this.div_Search.addChild(obj.name, obj);

            obj = new Edit("Edit01","104","42","190","24",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("5");
            this.div_Search.addChild(obj.name, obj);

            obj = new Static("Static06","0","-5","1032","5",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("17");
            obj.set_text("h 5");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_Search.addChild(obj.name, obj);

            obj = new Static("Static10","0","-1","20","80",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("18");
            obj.set_text("w20");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_Search.addChild(obj.name, obj);

            obj = new Static("Static12","94","0","10","80",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("19");
            obj.set_text("w 10");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_Search.addChild(obj.name, obj);

            obj = new Static("Static11","108","0","50","10",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("20");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_Search.addChild(obj.name, obj);

            obj = new Static("Static14","108","66","50","10",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("21");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_Search.addChild(obj.name, obj);

            obj = new Static("Static15","110","34","50","8",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("22");
            obj.set_text("h 8");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_Search.addChild(obj.name, obj);

            obj = new Static("Static16","395","-1","10","80",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("23");
            obj.set_text("w 10");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_Search.addChild(obj.name, obj);

            obj = new Static("Static13","616","0","10","80",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("24");
            obj.set_text("w 10");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_Search.addChild(obj.name, obj);

            obj = new Static("Static17","854","-2","10","80",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("25");
            obj.set_text("w 10");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_Search.addChild(obj.name, obj);

            obj = new Spin("Spin00","405","42","70","24",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("26");
            obj.set_value("2019");
            this.div_Search.addChild(obj.name, obj);

            obj = new Button("btn_delete",null,"10","65","27","83",null,null,null,null,null,this);
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_Delete");
            obj.set_visible("true");
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Button("btn_registration",null,"10","65","27","151",null,null,null,null,null,this);
            obj.set_text("등록");
            obj.set_cssclass("btn_WF_Registration");
            obj.set_visible("true");
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","15","158","1020","10",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","15","168",null,"35","15",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("검색결과");
            obj.set_cssclass("sta_WF_SubTitle1");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","15","203",null,"547","15",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_binddataset("ds_List");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"40\"/><Column size=\"99\"/><Column size=\"85\"/><Column size=\"83\"/><Column size=\"43\"/><Column size=\"95\"/><Column size=\"88\"/><Column size=\"95\"/><Column size=\"292\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"NO\"/><Cell col=\"1\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"선택\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"2\" text=\"신청번호\"/><Cell col=\"3\" text=\"신청일\"/><Cell col=\"4\" text=\"결재상태\"/><Cell col=\"5\" text=\"문서\"/><Cell col=\"6\" text=\"신청부서\"/><Cell col=\"7\" text=\"신청자\"/><Cell col=\"8\" text=\"신청금액\"/><Cell col=\"9\" text=\"제목\"/></Band><Band id=\"body\"><Cell text=\"bind:NUM\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:Column0\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"none\" text=\"bind:RQST_NO\"/><Cell col=\"3\" displaytype=\"date\" edittype=\"none\" text=\"bind:RQST_DT\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"4\" displaytype=\"normal\" edittype=\"none\" text=\"bind:APV_STAT_NM\"/><Cell col=\"5\" text=\"bind:APV_STAT_CD\"/><Cell col=\"6\" displaytype=\"normal\" edittype=\"none\" text=\"bind:RQST_DEPT_NM\"/><Cell col=\"7\" displaytype=\"normal\" edittype=\"none\" text=\"bind:RQST_NM\"/><Cell col=\"8\" displaytype=\"number\" edittype=\"none\" text=\"bind:RQST_AMT\" textAlign=\"right\" verticalAlign=\"middle\"/><Cell col=\"9\" displaytype=\"normal\" edittype=\"none\" text=\"bind:SBJ\" textAlign=\"right\" verticalAlign=\"middle\" wordWrap=\"none\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static14","15","43",null,"35","15",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_SubTitle1");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title","15","5","205","37",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("일반목록화면");
            obj.set_cssclass("sta_WF_Title01");
            this.addChild(obj.name, obj);

            obj = new Static("Static17","311","79","40","80",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static31","15","37","1020","10",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static44","102","169","68","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("(총 4건)");
            obj.set_cssclass("sta_WF_Number");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","90","169","10","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("w 10");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("white");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","252","0","50","37",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("h 37");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","534","1","50","10",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"10","65","27","15",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Search");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0","15","752",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("W\r\n15");
            obj.set_visible("false");
            obj.set_background("antiquewhite");
            obj.set_color("blue");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","1035","0","15","750",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("W\r\n15");
            obj.set_visible("false");
            obj.set_background("antiquewhite");
            obj.set_color("blue");
            this.addChild(obj.name, obj);

            obj = new Button("btn_help",null,"10","77","27","379",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("도움말");
            obj.set_cssclass("btn_WF_Help");
            this.addChild(obj.name, obj);

            obj = new Button("btn_print",null,"10","65","27","311",null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("인쇄");
            obj.set_cssclass("btn_WF_Print");
            this.addChild(obj.name, obj);

            obj = new Button("btn_approval",null,"10","89","27","219",null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("결재상신");
            obj.set_cssclass("btn_WF_Approval");
            this.addChild(obj.name, obj);

            obj = new Button("btn_help00",null,"10","77","27","459",null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("행복사");
            obj.set_cssclass("btn_WF_Common");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancel",null,"10","65","27","539",null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("취소");
            obj.set_cssclass("btn_WF_Cancel");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_Search.form
            obj = new Layout("default","",1032,72,this.div_Search.form,function(p){});
            this.div_Search.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("pat_0002.xfdl", function() {

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("pat_0002.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
