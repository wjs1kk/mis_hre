(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("testform4");
            this.set_titletext("Tab Template");
            this.set_cssclass("frm_WF_comp");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTypeTab1", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"rowCheck\" type=\"STRING\" size=\"256\"/><Column id=\"rowStatus\" type=\"STRING\" size=\"256\"/><Column id=\"sysId\" type=\"STRING\" size=\"256\"/><Column id=\"progId\" type=\"STRING\" size=\"256\"/><Column id=\"progNm\" type=\"STRING\" size=\"256\"/><Column id=\"progTy\" type=\"STRING\" size=\"256\"/><Column id=\"progUrl\" type=\"STRING\" size=\"256\"/><Column id=\"progDc\" type=\"STRING\" size=\"256\"/><Column id=\"progFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"progAuthor\" type=\"STRING\" size=\"256\"/><Column id=\"substituteUrl\" type=\"STRING\" size=\"256\"/><Column id=\"substituteUseYn\" type=\"STRING\" size=\"256\"/><Column id=\"atchFileId\" type=\"STRING\" size=\"256\"/><Column id=\"permissionUseYn\" type=\"STRING\" size=\"256\"/><Column id=\"permissionDc\" type=\"STRING\" size=\"256\"/><Column id=\"radioUseYn\" type=\"STRING\" size=\"256\"/><Column id=\"rgstId\" type=\"STRING\" size=\"256\"/><Column id=\"rgstNm\" type=\"STRING\" size=\"256\"/><Column id=\"rgstIp\" type=\"STRING\" size=\"256\"/><Column id=\"rgstDt\" type=\"STRING\" size=\"256\"/><Column id=\"updtId\" type=\"STRING\" size=\"256\"/><Column id=\"updtIp\" type=\"STRING\" size=\"256\"/><Column id=\"updtDt\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"sysId\">3</Col><Col id=\"progId\">3</Col><Col id=\"substituteUseYn\">Y</Col><Col id=\"permissionUseYn\">Y</Col><Col id=\"radioUseYn\">Y</Col><Col id=\"rgstDt\">2023/02/10</Col></Row><Row><Col id=\"sysId\">5</Col><Col id=\"progId\">5</Col><Col id=\"progNm\">5</Col><Col id=\"substituteUseYn\">Y</Col><Col id=\"permissionUseYn\">Y</Col><Col id=\"radioUseYn\">Y</Col><Col id=\"rgstDt\">2023/02/10</Col></Row><Row><Col id=\"sysId\">1</Col><Col id=\"progId\">1</Col><Col id=\"progNm\">테스트</Col><Col id=\"substituteUseYn\">N</Col><Col id=\"permissionUseYn\">N</Col><Col id=\"radioUseYn\">N</Col><Col id=\"rgstDt\">2023/02/10</Col></Row><Row><Col id=\"sysId\">2</Col><Col id=\"progId\">2</Col><Col id=\"substituteUseYn\">Y</Col><Col id=\"permissionUseYn\">Y</Col><Col id=\"radioUseYn\">Y</Col><Col id=\"rgstDt\">2023/02/10</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTypeTab2", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"rowCheck\" type=\"STRING\" size=\"256\"/><Column id=\"rowStatus\" type=\"STRING\" size=\"256\"/><Column id=\"sysId\" type=\"STRING\" size=\"256\"/><Column id=\"progId\" type=\"STRING\" size=\"256\"/><Column id=\"progNm\" type=\"STRING\" size=\"256\"/><Column id=\"progTy\" type=\"STRING\" size=\"256\"/><Column id=\"progUrl\" type=\"STRING\" size=\"256\"/><Column id=\"progDc\" type=\"STRING\" size=\"256\"/><Column id=\"progFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"progAuthor\" type=\"STRING\" size=\"256\"/><Column id=\"substituteUrl\" type=\"STRING\" size=\"256\"/><Column id=\"substituteUseYn\" type=\"STRING\" size=\"256\"/><Column id=\"atchFileId\" type=\"STRING\" size=\"256\"/><Column id=\"permissionUseYn\" type=\"STRING\" size=\"256\"/><Column id=\"permissionDc\" type=\"STRING\" size=\"256\"/><Column id=\"radioUseYn\" type=\"STRING\" size=\"256\"/><Column id=\"rgstId\" type=\"STRING\" size=\"256\"/><Column id=\"rgstNm\" type=\"STRING\" size=\"256\"/><Column id=\"rgstIp\" type=\"STRING\" size=\"256\"/><Column id=\"rgstDt\" type=\"STRING\" size=\"256\"/><Column id=\"updtId\" type=\"STRING\" size=\"256\"/><Column id=\"updtIp\" type=\"STRING\" size=\"256\"/><Column id=\"updtDt\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"sysId\">3</Col><Col id=\"progId\">3</Col><Col id=\"substituteUseYn\">Y</Col><Col id=\"permissionUseYn\">Y</Col><Col id=\"radioUseYn\">Y</Col><Col id=\"rgstDt\">2023/02/10</Col></Row><Row><Col id=\"sysId\">5</Col><Col id=\"progId\">5</Col><Col id=\"progNm\">5</Col><Col id=\"substituteUseYn\">Y</Col><Col id=\"permissionUseYn\">Y</Col><Col id=\"radioUseYn\">Y</Col><Col id=\"rgstDt\">2023/02/10</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUseYn", this);
            obj._setContents("<ColumnInfo><Column id=\"LINE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"LINE_CODE_NM_KR\" type=\"STRING\" size=\"256\"/><Column id=\"LINE_CODE_NM_EN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"LINE_CODE\">Y</Col><Col id=\"LINE_CODE_NM_KR\">사용</Col><Col id=\"LINE_CODE_NM_EN\"/></Row><Row><Col id=\"LINE_CODE\">N</Col><Col id=\"LINE_CODE_NM_KR\">미사용</Col><Col id=\"LINE_CODE_NM_EN\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","50","10","190","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Tab Template");
            obj.set_cssclass("sta_WF_compTitle01");
            this.addChild(obj.name, obj);

            obj = new Tab("Tab00","50","50",null,null,"50","50",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_WF_comp");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Tab00);
            obj.set_text("Tabpage1");
            this.Tab00.addChild(obj.name, obj);

            obj = new Grid("grdTypeTwo","20","45",null,null,"20","20",null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsTypeTab1");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_autoupdatetype("itemselect");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\" band=\"left\"/><Column size=\"48\" band=\"left\"/><Column size=\"48\" band=\"left\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"42\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"상태\"/><Cell col=\"3\" text=\"시스템ID\"/><Cell col=\"4\" text=\"프로그램ID\"/><Cell col=\"5\" text=\"프로그램명\"/><Cell col=\"6\" text=\"프로그램유형\"/><Cell col=\"7\" text=\"URL\"/><Cell col=\"8\" text=\"프로그램 설명\"/><Cell col=\"9\" text=\"프로그램 파일명\"/><Cell col=\"10\" text=\"대체URL\"/><Cell col=\"11\" text=\"대체URL 사용여부\"/><Cell col=\"12\" text=\"첨부파일\"/><Cell col=\"13\" text=\"권한레벨 사용여부\"/><Cell col=\"14\" text=\"권한레벨 사용설명\"/><Cell col=\"15\" text=\"radio사용\"/><Cell col=\"16\" text=\"radio미사용\"/><Cell col=\"17\" text=\"등록자\"/><Cell col=\"18\" text=\"등록일\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\" text=\"expr:currow+1\" textAlign=\"center\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" textAlign=\"center\" text=\"bind:rowCheck\"/><Cell col=\"2\" textAlign=\"center\" imagestretch=\"fit\" displaytype=\"normal\" text=\"expr:rowStatus == &apos;inserted&apos; ? &apos;C&apos; : rowStatus == &apos;updated&apos; ? &apos;U&apos; : rowStatus == &apos;deleted&apos; ? &apos;D&apos; : &apos;&apos;\"/><Cell col=\"3\" text=\"bind:sysId\" edittype=\"text\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:progId\" edittype=\"text\"/><Cell col=\"5\" text=\"bind:progNm\" edittype=\"text\"/><Cell col=\"6\" text=\"bind:progTy\" edittype=\"combo\" displaytype=\"combocontrol\"/><Cell col=\"7\" text=\"bind:progUrl\" edittype=\"text\"/><Cell col=\"8\" text=\"bind:progDc\" edittype=\"text\"/><Cell col=\"9\" text=\"bind:progFileNm\" edittype=\"text\"/><Cell col=\"10\" text=\"bind:substituteUrl\" edittype=\"text\"/><Cell col=\"11\" text=\"bind:substituteUseYn\" edittype=\"combo\" displaytype=\"combocontrol\" combodataset=\"dsUseYn\" combocodecol=\"LINE_CODE\" combodatacol=\"LINE_CODE_NM_KR\" comboautoselect=\"true\"/><Cell col=\"12\" text=\"bind:atchFileId\" edittype=\"text\"/><Cell col=\"13\" text=\"bind:permissionUseYn\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\" checkboxfalsevalue=\"N\" checkboxtruevalue=\"Y\"/><Cell col=\"14\" text=\"bind:permissionDc\" edittype=\"text\"/><Cell col=\"15\" displaytype=\"radioitemcontrol\" edittype=\"radioitem\" radioitemcodevalue=\"Y\" text=\"bind:radioUseYn\"/><Cell col=\"16\" text=\"bind:radioUseYn\" displaytype=\"radioitemcontrol\" edittype=\"radioitem\" radioitemcodevalue=\"N\"/><Cell col=\"17\" text=\"bind:rgstNm\" edittype=\"none\" textAlign=\"center\"/><Cell col=\"18\" text=\"bind:rgstDt\" edittype=\"none\" textAlign=\"center\"/></Band></Format></Formats>");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_00","20","14","370","23",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_text("Tabpage 1 Grid List");
            obj.set_cssclass("sta_WF_compTitle02");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Tab00);
            obj.set_text("Tabpage2");
            this.Tab00.addChild(obj.name, obj);

            obj = new Static("sta_00","20","14","370","23",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_text("Tabpage 2 Grid List");
            obj.set_cssclass("sta_WF_compTitle02");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Grid("grdTypeTwo","20","45",null,null,"20","20",null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("1");
            obj.set_binddataset("dsTypeTab2");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_autoupdatetype("itemselect");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\" band=\"left\"/><Column size=\"48\" band=\"left\"/><Column size=\"48\" band=\"left\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"42\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"상태\"/><Cell col=\"3\" text=\"시스템ID\"/><Cell col=\"4\" text=\"프로그램ID\"/><Cell col=\"5\" text=\"프로그램명\"/><Cell col=\"6\" text=\"프로그램유형\"/><Cell col=\"7\" text=\"URL\"/><Cell col=\"8\" text=\"프로그램 설명\"/><Cell col=\"9\" text=\"프로그램 파일명\"/><Cell col=\"10\" text=\"대체URL\"/><Cell col=\"11\" text=\"대체URL 사용여부\"/><Cell col=\"12\" text=\"첨부파일\"/><Cell col=\"13\" text=\"권한레벨 사용여부\"/><Cell col=\"14\" text=\"권한레벨 사용설명\"/><Cell col=\"15\" text=\"radio사용\"/><Cell col=\"16\" text=\"radio미사용\"/><Cell col=\"17\" text=\"등록자\"/><Cell col=\"18\" text=\"등록일\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\" text=\"expr:currow+1\" textAlign=\"center\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" textAlign=\"center\" text=\"bind:rowCheck\"/><Cell col=\"2\" textAlign=\"center\" imagestretch=\"fit\" displaytype=\"normal\" text=\"expr:rowStatus == &apos;inserted&apos; ? &apos;C&apos; : rowStatus == &apos;updated&apos; ? &apos;U&apos; : rowStatus == &apos;deleted&apos; ? &apos;D&apos; : &apos;&apos;\"/><Cell col=\"3\" text=\"bind:sysId\" edittype=\"text\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:progId\" edittype=\"text\"/><Cell col=\"5\" text=\"bind:progNm\" edittype=\"text\"/><Cell col=\"6\" text=\"bind:progTy\" edittype=\"combo\" displaytype=\"combocontrol\"/><Cell col=\"7\" text=\"bind:progUrl\" edittype=\"text\"/><Cell col=\"8\" text=\"bind:progDc\" edittype=\"text\"/><Cell col=\"9\" text=\"bind:progFileNm\" edittype=\"text\"/><Cell col=\"10\" text=\"bind:substituteUrl\" edittype=\"text\"/><Cell col=\"11\" text=\"bind:substituteUseYn\" edittype=\"combo\" displaytype=\"combocontrol\" combodataset=\"dsUseYn\" combocodecol=\"LINE_CODE\" combodatacol=\"LINE_CODE_NM_KR\" comboautoselect=\"true\"/><Cell col=\"12\" text=\"bind:atchFileId\" edittype=\"text\"/><Cell col=\"13\" text=\"bind:permissionUseYn\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\" checkboxfalsevalue=\"N\" checkboxtruevalue=\"Y\"/><Cell col=\"14\" text=\"bind:permissionDc\" edittype=\"text\"/><Cell col=\"15\" displaytype=\"radioitemcontrol\" edittype=\"radioitem\" radioitemcodevalue=\"Y\" text=\"bind:radioUseYn\"/><Cell col=\"16\" text=\"bind:radioUseYn\" displaytype=\"radioitemcontrol\" edittype=\"radioitem\" radioitemcodevalue=\"N\"/><Cell col=\"17\" text=\"bind:rgstNm\" edittype=\"none\" textAlign=\"center\"/><Cell col=\"18\" text=\"bind:rgstDt\" edittype=\"none\" textAlign=\"center\"/></Band></Format></Formats>");
            this.Tab00.Tabpage2.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Tab00.Tabpage1.form
            obj = new Layout("default","",0,0,this.Tab00.Tabpage1.form,function(p){});
            this.Tab00.Tabpage1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Tab00.Tabpage2.form
            obj = new Layout("default","",0,0,this.Tab00.Tabpage2.form,function(p){});
            this.Tab00.Tabpage2.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("testform4.xfdl", function() {

        this.Tab00_onchanged = function(obj,e)
        {

        };

        this.Tab00_Tabpage1_sta_00_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Tab00.addEventHandler("onchanged",this.Tab00_onchanged,this);
            this.Tab00.Tabpage1.form.sta_00.addEventHandler("onclick",this.Tab00_Tabpage1_sta_00_onclick,this);
        };
        this.loadIncludeScript("testform4.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
