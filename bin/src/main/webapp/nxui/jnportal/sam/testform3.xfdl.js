(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("testform3");
            this.set_titletext("Form Template");
            this.set_cssclass("frm_WF_comp");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTypeOne", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"rowCheck\" type=\"STRING\" size=\"256\"/><Column id=\"rowStatus\" type=\"STRING\" size=\"256\"/><Column id=\"sysId\" type=\"STRING\" size=\"256\"/><Column id=\"progId\" type=\"STRING\" size=\"256\"/><Column id=\"progNm\" type=\"STRING\" size=\"256\"/><Column id=\"progTy\" type=\"STRING\" size=\"256\"/><Column id=\"progUrl\" type=\"STRING\" size=\"256\"/><Column id=\"progDc\" type=\"STRING\" size=\"256\"/><Column id=\"progFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"progAuthor\" type=\"STRING\" size=\"256\"/><Column id=\"substituteUrl\" type=\"STRING\" size=\"256\"/><Column id=\"substituteUseYn\" type=\"STRING\" size=\"256\"/><Column id=\"atchFileId\" type=\"STRING\" size=\"256\"/><Column id=\"permissionUseYn\" type=\"STRING\" size=\"256\"/><Column id=\"permissionDc\" type=\"STRING\" size=\"256\"/><Column id=\"radioUseYn\" type=\"STRING\" size=\"256\"/><Column id=\"rgstId\" type=\"STRING\" size=\"256\"/><Column id=\"rgstNm\" type=\"STRING\" size=\"256\"/><Column id=\"rgstIp\" type=\"STRING\" size=\"256\"/><Column id=\"rgstDt\" type=\"STRING\" size=\"256\"/><Column id=\"updtId\" type=\"STRING\" size=\"256\"/><Column id=\"updtIp\" type=\"STRING\" size=\"256\"/><Column id=\"updtDt\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"sysId\">3</Col><Col id=\"progId\">3</Col><Col id=\"substituteUseYn\">Y</Col><Col id=\"permissionUseYn\">Y</Col><Col id=\"radioUseYn\">Y</Col><Col id=\"rgstDt\">2023/02/10</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUseYn", this);
            obj._setContents("<ColumnInfo><Column id=\"LINE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"LINE_CODE_NM_KR\" type=\"STRING\" size=\"256\"/><Column id=\"LINE_CODE_NM_EN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"LINE_CODE\">Y</Col><Col id=\"LINE_CODE_NM_KR\">사용</Col><Col id=\"LINE_CODE_NM_EN\"/></Row><Row><Col id=\"LINE_CODE\">N</Col><Col id=\"LINE_CODE_NM_KR\">미사용</Col><Col id=\"LINE_CODE_NM_EN\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","50","10","500","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Form Template");
            obj.set_cssclass("sta_WF_compTitle01");
            this.addChild(obj.name, obj);

            obj = new Div("divForm","50","50",null,null,"50","50",null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0",null,"100%","0",null,null,null,null,null,this.divForm.form);
            obj.set_taborder("2");
            obj.set_background("#ffffff");
            obj.set_text("");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("sta_01","20","10","80","30",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("0");
            obj.set_text("시스템ID");
            this.divForm.addChild(obj.name, obj);

            obj = new Edit("edt_01","128","10","120","30",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("1");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("sta_02","328","10","80","30",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("3");
            obj.set_text("프로그램ID");
            this.divForm.addChild(obj.name, obj);

            obj = new Edit("edt_02","435","10","180","30",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("4");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("sta_02_00","658","10","80","30",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("5");
            obj.set_text("프로그램명");
            this.divForm.addChild(obj.name, obj);

            obj = new Edit("edt_02_00","771","10","389","30",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("6");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("sta_02_00_00","20","81","80","30",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("7");
            obj.set_text("프로그램타입");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("sta_01_00","328","81","80","30",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("8");
            obj.set_text("프로그램 URL");
            this.divForm.addChild(obj.name, obj);

            obj = new Edit("edt_01_00","435","81","174","30",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("9");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("sta_02_01","658","81","80","30",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("10");
            obj.set_text("프로그램 설명");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("sta_02_00_01","20","185","120","30",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("11");
            obj.set_text("프로그램 파일명");
            this.divForm.addChild(obj.name, obj);

            obj = new Edit("edt_02_00_01","128","185","180","30",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("12");
            this.divForm.addChild(obj.name, obj);

            obj = new Edit("edt_02_00_00_00","435","185","180","30",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("13");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("sta_02_00_00_00","328","185","80","30",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("14");
            obj.set_text("대체URL");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("sta_01_00_00","658","185","120","30",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("15");
            obj.set_text("대체URL 사용여부");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("sta_02_01_00","20","251","80","30",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("16");
            obj.set_text("첨부파일");
            this.divForm.addChild(obj.name, obj);

            obj = new Edit("edt_02_01_00","128","251","180","30",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("17");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("sta_02_00_01_00","658","251","108","30",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("18");
            obj.set_text("권한레벨 사용설명");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("sta_02_00_00_00_00","328","251","110","30",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("19");
            obj.set_text("권한레벨 사용여부");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("sta_01_00_00_00","20","342","104","30",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("20");
            obj.set_text("Radio 사용여부");
            this.divForm.addChild(obj.name, obj);

            obj = new Radio("Radio00","128","336","127","43",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("21");
            obj.set_innerdataset("dsUseYn");
            obj.set_codecolumn("LINE_CODE");
            obj.set_datacolumn("LINE_CODE_NM_KR");
            obj.set_direction("vertical");
            this.divForm.addChild(obj.name, obj);

            obj = new Combo("Combo00","128","80","122","33",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("22");
            obj.set_innerdataset("dsUseYn");
            obj.set_codecolumn("LINE_CODE");
            obj.set_datacolumn("LINE_CODE_NM_KR");
            obj.set_text("사용");
            obj.set_value("Y");
            obj.set_index("0");
            this.divForm.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","770","76","390","89",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("23");
            this.divForm.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","808","179","73","42",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("24");
            this.divForm.addChild(obj.name, obj);

            obj = new TextArea("TextArea00_00","770","241","390","89",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("25");
            this.divForm.addChild(obj.name, obj);

            obj = new Combo("Combo00_00","438","250","122","33",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("26");
            obj.set_innerdataset("dsUseYn");
            obj.set_codecolumn("LINE_CODE");
            obj.set_datacolumn("LINE_CODE_NM_KR");
            obj.set_text("사용");
            obj.set_value("Y");
            obj.set_index("0");
            this.divForm.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divForm.form
            obj = new Layout("default","",0,0,this.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static00.set_taborder("2");
                p.Static00.set_background("#ffffff");
                p.Static00.set_text("");
                p.Static00.move("0","0",null,"100%","0",null);

                p.sta_01.set_taborder("0");
                p.sta_01.set_text("시스템ID");
                p.sta_01.move("20","10","80","30",null,null);

                p.edt_01.set_taborder("1");
                p.edt_01.move("128","10","120","30",null,null);

                p.sta_02.set_taborder("3");
                p.sta_02.set_text("프로그램ID");
                p.sta_02.move("328","10","80","30",null,null);

                p.edt_02.set_taborder("4");
                p.edt_02.move("435","10","180","30",null,null);

                p.sta_02_00.set_taborder("5");
                p.sta_02_00.set_text("프로그램명");
                p.sta_02_00.move("658","10","80","30",null,null);

                p.edt_02_00.set_taborder("6");
                p.edt_02_00.move("771","10","389","30",null,null);

                p.sta_02_00_00.set_taborder("7");
                p.sta_02_00_00.set_text("프로그램타입");
                p.sta_02_00_00.move("20","81","80","30",null,null);

                p.sta_01_00.set_taborder("8");
                p.sta_01_00.set_text("프로그램 URL");
                p.sta_01_00.move("328","81","80","30",null,null);

                p.edt_01_00.set_taborder("9");
                p.edt_01_00.move("435","81","174","30",null,null);

                p.sta_02_01.set_taborder("10");
                p.sta_02_01.set_text("프로그램 설명");
                p.sta_02_01.move("658","81","80","30",null,null);

                p.sta_02_00_01.set_taborder("11");
                p.sta_02_00_01.set_text("프로그램 파일명");
                p.sta_02_00_01.move("20","185","120","30",null,null);

                p.edt_02_00_01.set_taborder("12");
                p.edt_02_00_01.move("128","185","180","30",null,null);

                p.edt_02_00_00_00.set_taborder("13");
                p.edt_02_00_00_00.move("435","185","180","30",null,null);

                p.sta_02_00_00_00.set_taborder("14");
                p.sta_02_00_00_00.set_text("대체URL");
                p.sta_02_00_00_00.move("328","185","80","30",null,null);

                p.sta_01_00_00.set_taborder("15");
                p.sta_01_00_00.set_text("대체URL 사용여부");
                p.sta_01_00_00.move("658","185","120","30",null,null);

                p.sta_02_01_00.set_taborder("16");
                p.sta_02_01_00.set_text("첨부파일");
                p.sta_02_01_00.move("20","251","80","30",null,null);

                p.edt_02_01_00.set_taborder("17");
                p.edt_02_01_00.move("128","251","180","30",null,null);

                p.sta_02_00_01_00.set_taborder("18");
                p.sta_02_00_01_00.set_text("권한레벨 사용설명");
                p.sta_02_00_01_00.move("658","251","108","30",null,null);

                p.sta_02_00_00_00_00.set_taborder("19");
                p.sta_02_00_00_00_00.set_text("권한레벨 사용여부");
                p.sta_02_00_00_00_00.move("328","251","110","30",null,null);

                p.sta_01_00_00_00.set_taborder("20");
                p.sta_01_00_00_00.set_text("Radio 사용여부");
                p.sta_01_00_00_00.move("20","342","104","30",null,null);

                p.Radio00.set_taborder("21");
                p.Radio00.set_innerdataset("dsUseYn");
                p.Radio00.set_codecolumn("LINE_CODE");
                p.Radio00.set_datacolumn("LINE_CODE_NM_KR");
                p.Radio00.set_direction("vertical");
                p.Radio00.move("128","336","127","43",null,null);

                p.Combo00.set_taborder("22");
                p.Combo00.set_innerdataset("dsUseYn");
                p.Combo00.set_codecolumn("LINE_CODE");
                p.Combo00.set_datacolumn("LINE_CODE_NM_KR");
                p.Combo00.set_text("사용");
                p.Combo00.set_value("Y");
                p.Combo00.set_index("0");
                p.Combo00.move("128","80","122","33",null,null);

                p.TextArea00.set_taborder("23");
                p.TextArea00.move("770","76","390","89",null,null);

                p.CheckBox00.set_taborder("24");
                p.CheckBox00.move("808","179","73","42",null,null);

                p.TextArea00_00.set_taborder("25");
                p.TextArea00_00.move("770","241","390","89",null,null);

                p.Combo00_00.set_taborder("26");
                p.Combo00_00.set_innerdataset("dsUseYn");
                p.Combo00_00.set_codecolumn("LINE_CODE");
                p.Combo00_00.set_datacolumn("LINE_CODE_NM_KR");
                p.Combo00_00.set_text("사용");
                p.Combo00_00.set_value("Y");
                p.Combo00_00.set_index("0");
                p.Combo00_00.move("438","250","122","33",null,null);
            	}
            );
            this.divForm.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form
            obj = new Layout("screen00","",0,0,this.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divForm.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divForm.form.edt_01","value","dsTypeOne","sysId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divForm.form.edt_02","value","dsTypeOne","progId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divForm.form.edt_02_00","value","dsTypeOne","progNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divForm.form.edt_02_00_00","value","dsTypeOne","progTy");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divForm.form.edt_01_00","value","dsTypeOne","progUrl");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divForm.form.edt_02_01","value","dsTypeOne","progDc");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divForm.form.edt_02_00_01","value","dsTypeOne","progFileNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divForm.form.edt_02_00_00_00","value","dsTypeOne","substituteUrl");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divForm.form.edt_02_01_00","value","dsTypeOne","atchFileId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divForm.form.edt_02_00_01_00","value","dsTypeOne","permissionDc");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divForm.form.edt_02_00_00_00_00","value","dsTypeOne","permissionUseYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divForm.form.edt_01_00_00","value","dsTypeOne","substituteUseYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divForm.form.edt_02_01_00_00","value","dsTypeOne","progNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divForm.form.edt_02_00_01_00_00","value","dsTypeOne","progNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divForm.form.edt_02_00_00_00_00_00","value","dsTypeOne","progNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divForm.form.edt_01_00_00_00","value","dsTypeOne","radioUseYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divForm.form.edt_02_01_00_00_00","value","dsTypeOne","progNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divForm.form.edt_02_00_01_00_00_00","value","dsTypeOne","progNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divForm.form.edt_02_00_00_00_00_00_00","value","dsTypeOne","progNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divForm.form.edt_01_00_00_00_00","value","dsTypeOne","progId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divForm.form.edt_02_01_00_00_00_00","value","dsTypeOne","progNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divForm.form.edt_02_00_01_00_00_00_00","value","dsTypeOne","progNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divForm.form.edt_02_00_00_00_00_00_00_00","value","dsTypeOne","progNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divForm.form.edt_01_00_00_00_00_00","value","dsTypeOne","progId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divForm.form.Radio00","value","dsTypeOne","radioUseYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","divForm.form.TextArea00","value","dsTypeOne","progDc");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","divForm.form.Combo00","value","dsTypeOne","progTy");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","divForm.form.TextArea00_00","value","dsTypeOne","permissionDc");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","divForm.form.Combo00_00","value","dsTypeOne","permissionUseYn");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("testform3.xfdl", function() {

        this.Static00_onclick = function(obj,e)
        {

        };

        this.divForm_Static00_onclick = function(obj,e)
        {

        };

        this.divForm_Radio00_onitemchanged = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.divForm.form.Static00.addEventHandler("onclick",this.divForm_Static00_onclick,this);
            this.divForm.form.sta_01.addEventHandler("onclick",this.divForm_sta_01_onclick,this);
            this.divForm.form.sta_02.addEventHandler("onclick",this.divForm_sta_01_onclick,this);
            this.divForm.form.sta_02_00.addEventHandler("onclick",this.divForm_sta_01_onclick,this);
            this.divForm.form.sta_02_00_00.addEventHandler("onclick",this.divForm_sta_01_onclick,this);
            this.divForm.form.sta_01_00.addEventHandler("onclick",this.divForm_sta_01_onclick,this);
            this.divForm.form.sta_02_01.addEventHandler("onclick",this.divForm_sta_01_onclick,this);
            this.divForm.form.sta_02_00_01.addEventHandler("onclick",this.divForm_sta_01_onclick,this);
            this.divForm.form.sta_02_00_00_00.addEventHandler("onclick",this.divForm_sta_01_onclick,this);
            this.divForm.form.sta_01_00_00.addEventHandler("onclick",this.divForm_sta_01_onclick,this);
            this.divForm.form.sta_02_01_00.addEventHandler("onclick",this.divForm_sta_01_onclick,this);
            this.divForm.form.sta_02_00_01_00.addEventHandler("onclick",this.divForm_sta_01_onclick,this);
            this.divForm.form.sta_02_00_00_00_00.addEventHandler("onclick",this.divForm_sta_01_onclick,this);
            this.divForm.form.sta_01_00_00_00.addEventHandler("onclick",this.divForm_sta_01_onclick,this);
            this.divForm.form.Radio00.addEventHandler("onitemchanged",this.divForm_Radio00_onitemchanged,this);
        };
        this.loadIncludeScript("testform3.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
