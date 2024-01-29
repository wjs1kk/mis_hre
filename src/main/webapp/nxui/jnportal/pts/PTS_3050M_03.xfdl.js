(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PTS_3050M_03");
            this.set_titletext("Q&A_글쓰기");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,990);
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


            obj = new Dataset("ds_combo", this);
            obj._setContents("<ColumnInfo><Column id=\"key\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"key\">0</Col><Col id=\"value\">과제기획</Col></Row><Row><Col id=\"key\">1</Col><Col id=\"value\">과제공고</Col></Row><Row><Col id=\"key\">2</Col><Col id=\"value\">협약</Col></Row><Row><Col id=\"key\">3</Col><Col id=\"value\">수행</Col></Row><Row><Col id=\"key\">4</Col><Col id=\"value\">사업비</Col></Row><Row><Col id=\"key\">5</Col><Col id=\"value\">성과</Col></Row><Row><Col id=\"key\">6</Col><Col id=\"value\">평가</Col></Row><Row><Col id=\"key\">7</Col><Col id=\"value\">기타</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","180","0",null,"853","180",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0",null,"127","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("Q&A");
            obj.set_enable("true");
            obj.set_cssclass("portal_sta_pTitle");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div01","0","Static00:50",null,"611","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div00","0","0",null,"251","0",null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("1");
            obj.set_text("");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static100_01","0","0",null,"51","0",null,null,null,null,null,this.Div00.form.Div01.form.Div00.form);
            obj.set_taborder("14");
            obj.set_cssclass("portal_sta_memLabelBg");
            obj.set_text("");
            this.Div00.form.Div01.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static100","0","50",null,"51","0",null,null,null,null,null,this.Div00.form.Div01.form.Div00.form);
            obj.set_taborder("0");
            obj.set_cssclass("portal_sta_memLabelBg");
            obj.set_text("");
            this.Div00.form.Div01.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static100_00","0","Static100:-1",null,"51","0",null,null,null,null,null,this.Div00.form.Div01.form.Div00.form);
            obj.set_taborder("1");
            obj.set_cssclass("portal_sta_memLabelBg");
            obj.set_text("");
            this.Div00.form.Div01.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","0","50","200","51",null,null,null,null,null,null,this.Div00.form.Div01.form.Div00.form);
            obj.set_taborder("2");
            obj.set_text("제목");
            obj.set_font("normal bold 16px/normal \"맑은고딕\"");
            obj.set_cssclass("portal_sta_memLabel_L");
            this.Div00.form.Div01.form.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit01","Static01:10","59","500","33",null,null,null,null,null,null,this.Div00.form.Div01.form.Div00.form);
            obj.set_taborder("3");
            obj.set_cssclass("portal_edi");
            this.Div00.form.Div01.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","0","100","200","51",null,null,null,null,null,null,this.Div00.form.Div01.form.Div00.form);
            obj.set_taborder("4");
            obj.set_text("작성자");
            obj.set_font("normal bold 16px/normal \"맑은고딕\"");
            obj.set_cssclass("portal_sta_memLabel_L");
            this.Div00.form.Div01.form.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit02","Static02:10","109","160","33",null,null,null,null,null,null,this.Div00.form.Div01.form.Div00.form);
            obj.set_taborder("5");
            obj.set_value("krit005");
            obj.set_cssclass("portal_edi");
            obj.set_text("krit005");
            this.Div00.form.Div01.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static100_00_00","0","Static100:49",null,"51","0",null,null,null,null,null,this.Div00.form.Div01.form.Div00.form);
            obj.set_taborder("6");
            obj.set_cssclass("portal_sta_memLabelBg");
            obj.set_text("");
            this.Div00.form.Div01.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static100_00_00_00","0","Static100:99",null,"51","0",null,null,null,null,null,this.Div00.form.Div01.form.Div00.form);
            obj.set_taborder("7");
            obj.set_cssclass("portal_sta_memLabelBg");
            obj.set_text("");
            this.Div00.form.Div01.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static03","0","150","200","51",null,null,null,null,null,null,this.Div00.form.Div01.form.Div00.form);
            obj.set_taborder("8");
            obj.set_text("등록일");
            obj.set_font("normal bold 16px/normal \"맑은고딕\"");
            obj.set_cssclass("portal_sta_memLabel_L");
            this.Div00.form.Div01.form.Div00.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","Static03:10","159","160","33",null,null,null,null,null,null,this.Div00.form.Div01.form.Div00.form);
            obj.set_taborder("9");
            obj.set_displaynulltext("____-__-__");
            obj.set_cssclass("portal_cal");
            obj.set_value("20230419");
            this.Div00.form.Div01.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static04","0","200","200","51",null,null,null,null,null,null,this.Div00.form.Div01.form.Div00.form);
            obj.set_taborder("10");
            obj.set_text("첨부파일");
            obj.set_font("normal bold 16px/normal \"맑은고딕\"");
            obj.set_cssclass("portal_sta_memLabel_L");
            this.Div00.form.Div01.form.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit03","Static04:10","209","300","33",null,null,null,null,null,null,this.Div00.form.Div01.form.Div00.form);
            obj.set_taborder("11");
            obj.set_cssclass("portal_edi");
            obj.set_text("krit005");
            this.Div00.form.Div01.form.Div00.addChild(obj.name, obj);

            obj = new Button("btn_upload","Edit03:5","209","143","33",null,null,null,null,null,null,this.Div00.form.Div01.form.Div00.form);
            obj.set_taborder("12");
            obj.set_text("첨부파일 업로드");
            obj.set_cssclass("portal_btn_bdBtns");
            this.Div00.form.Div01.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","0","200","51",null,null,null,null,null,null,this.Div00.form.Div01.form.Div00.form);
            obj.set_taborder("13");
            obj.set_text("카테고리");
            obj.set_font("normal bold 16px/normal \"맑은고딕\"");
            obj.set_cssclass("portal_sta_memLabel_L");
            this.Div00.form.Div01.form.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo00","Static01_00:10","9","303","33",null,null,null,null,null,null,this.Div00.form.Div01.form.Div00.form);
            obj.set_taborder("15");
            obj.set_innerdataset("ds_combo");
            obj.set_codecolumn("key");
            obj.set_datacolumn("value");
            obj.set_cssclass("portal_cmb");
            obj.set_text("과제기획");
            obj.set_value("0");
            obj.set_index("0");
            this.Div00.form.Div01.form.Div00.addChild(obj.name, obj);

            obj = new Div("Div01","0","250",null,"359","0",null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("1");
            obj.set_text("웹 에디터 영역");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #cccccc");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","20","20",null,null,"20","20",null,null,null,null,this.Div00.form.Div01.form.Div01.form);
            obj.set_taborder("0");
            this.Div00.form.Div01.form.Div01.addChild(obj.name, obj);

            obj = new Button("Button01",null,"Div01:20","98","45","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("저장");
            obj.set_font("normal 700 16px/normal \"맑은고딕\"");
            obj.set_cssclass("portal_btn");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button02",null,"Div01:20","98","45","Button01:10",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("취소");
            obj.set_font("normal 700 16px/normal \"맑은고딕\"");
            obj.set_cssclass("portal_btn_bdBorder");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00","180","Div00:0","160","42",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form.Div01.form.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form.Div01.form.Div00.form,function(p){});
            this.Div00.form.Div01.form.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form.Div01.form.Div01.form
            obj = new Layout("default","",0,0,this.Div00.form.Div01.form.Div01.form,function(p){});
            this.Div00.form.Div01.form.Div01.form.addLayout(obj.name, obj);

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
        this.registerScript("PTS_3050M_03.xfdl", function() {

        this.Div00_Button01_onclick = function(obj,e)
        {
        	var sMenuId = "joinComplete";
        	var url = "pts::PTS_3050M_01.xfdl";
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

        this.Div00_Grid01_oncellclick = function(obj,e)
        {
        	if(e.cell == 6){
        		var sMenuId = "p_002";
        		var nRow = dataset.findRow("menuId",sMenuId);
        		var url = "Page::p_002.xfdl";
        		nexacro.getApplication().goPage(sMenuId, url);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Div00.form.Static00.addEventHandler("onclick",this.Static_onclick,this);
            this.Div00.form.Button01.addEventHandler("onclick",this.Div00_Button01_onclick,this);
            this.Div00.form.Button02.addEventHandler("onclick",this.Div00_Button01_onclick,this);
        };
        this.loadIncludeScript("PTS_3050M_03.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
