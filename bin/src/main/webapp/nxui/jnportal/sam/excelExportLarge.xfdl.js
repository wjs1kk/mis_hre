(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("excelExportLarge");
            this.set_titletext("대용량 엑셀 다운로드");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"progId\" type=\"STRING\" size=\"256\"/><Column id=\"progNm\" type=\"STRING\" size=\"256\"/><Column id=\"selectedProgId\" type=\"STRING\" size=\"256\"/><Column id=\"progTy\" type=\"STRING\" size=\"256\"/><Column id=\"progUrl\" type=\"STRING\" size=\"256\"/><Column id=\"sysId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsProgTySearchCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"text\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSysIdCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"value\" type=\"STRING\" size=\"256\"/><Column id=\"text\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("fdtExcel", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staTitle","50","0","500","58",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("대용량 엑셀 다운로드 샘플");
            obj.set_cssclass("sta_WF_compTitle01");
            this.addChild(obj.name, obj);

            obj = new Button("btnDownload",null,"20","65","28","50",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("다운로드");
            obj.set_flexgrow("0");
            obj.set_flexshrink("0");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","50","58",null,"90","50",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("div_WF_Transparent");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","0","0",null,"90","0",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_bg");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staProgId","25%","15","100","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("프로그램 ID");
            obj.set_cssclass("sta_WF_condition01");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staProgNm","50%","15","100","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("프로그램명");
            obj.set_cssclass("sta_WF_condition01");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtProgId","staProgId:10","15","200","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtProgNm","staProgNm:10","15","200","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staProgUrl","20","49","100","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("프로그램 URL");
            obj.set_cssclass("sta_WF_condition01");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtProgUrl","staProgUrl:10","49","200","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staProgTy","25%","49","100","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("프로그램 유형");
            obj.set_cssclass("sta_WF_condition01");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboProgTySearch","staProgTy:10","49","150","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_innerdataset("dsProgTySearchCombo");
            obj.set_codecolumn("value");
            obj.set_datacolumn("text");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staSysId","20","15","100","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("시스템");
            obj.set_cssclass("sta_WF_condition01");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSysId","staSysId:10","15","200","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_innerdataset("dsSysIdCombo");
            obj.set_codecolumn("value");
            obj.set_datacolumn("text");
            obj.set_text("Combo00");
            this.divSearch.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1920,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.edtProgId","value","dsSearch","progId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.edtProgNm","value","dsSearch","progNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.cboProgTySearch","value","dsSearch","progTy");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.edtProgUrl","value","dsSearch","progUrl");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.cboSysId","value","dsSearch","sysId");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("excelExportLarge.xfdl","lib::common.xjs");
        this.registerScript("excelExportLarge.xfdl", function() {


        this.executeIncludeScript("lib::common.xjs"); /*include "lib::common.xjs"*/;

        this.excelExportLarge_onload = function(obj,e)
        {
            this.gfnLoadCombo("loadCombo", "dsProgTySearchCombo=PMS:SM:PROG_TY:A dsProgTyCombo=PMS:SM:PROG_TY:C dsFuncTyCombo=PMS:SM:FUNC_TYPE:C dsProgFuncTyCombo=PMS:SM:PROG_FUNC_TYPE:C dsUseYnCombo=PMS:SM:USE_YN", "fnComboCallback");
        	this.gfnTransaction("loadSysIdCombo","sm/getSystemIdCombo.do","","dsSysIdCombo","type=A","fnComboCallback");
        };

        this.btnDownload_onclick = function(obj,e)
        {
            const row = this.gfnGetRowObj(this.dsSearch, 0);
            for (let key in row) {
                if (Object.prototype.hasOwnProperty.call(row, key)) {
                    this.fdtExcel.setPostData(key, row[key]);
                }
            }

        	this.fdtExcel.download(nexacro.getEnvironment().services["svcurl"].url + "sam/excel/downloadLargeExcel.do");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.excelExportLarge_onload,this);
            this.btnDownload.addEventHandler("onclick",this.btnDownload_onclick,this);
            this.divSearch.form.Static00_01.addEventHandler("onclick",this.div_Search_Static00_onclick,this);
            this.divSearch.form.edtProgId.addEventHandler("onkeyup",this.row1_Div00_edt_prog_id_onkeyup,this);
            this.divSearch.form.edtProgNm.addEventHandler("onkeyup",this.row1_Div00_edt_prog_id_onkeyup,this);
            this.divSearch.form.edtProgUrl.addEventHandler("onkeyup",this.row1_Div00_edt_prog_id_onkeyup,this);
            this.divSearch.form.cboProgTySearch.addEventHandler("onkeyup",this.row1_Div00_edt_prog_id_onkeyup,this);
            this.divSearch.form.staSysId.addEventHandler("onclick",this.row1_Div00_Static01_onclick,this);
            this.divSearch.form.cboSysId.addEventHandler("onitemchanged",this.divSearch_systemIdCombo_onitemchanged,this);
        };
        this.loadIncludeScript("excelExportLarge.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
