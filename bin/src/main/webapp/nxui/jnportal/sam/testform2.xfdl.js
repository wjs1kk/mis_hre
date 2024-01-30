(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("testform2");
            this.set_titletext("엑셀 내보내기 템플릿");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSample", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"rowCheck\" type=\"STRING\" size=\"256\"/><Column id=\"rowStatus\" type=\"STRING\" size=\"256\"/><Column id=\"sysId\" type=\"STRING\" size=\"256\"/><Column id=\"progId\" type=\"STRING\" size=\"256\"/><Column id=\"progNm\" type=\"STRING\" size=\"256\"/><Column id=\"progTy\" type=\"STRING\" size=\"256\"/><Column id=\"progUrl\" type=\"STRING\" size=\"256\"/><Column id=\"progDc\" type=\"STRING\" size=\"256\"/><Column id=\"progFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"progAuthor\" type=\"STRING\" size=\"256\"/><Column id=\"substituteUrl\" type=\"STRING\" size=\"256\"/><Column id=\"substituteUseYn\" type=\"STRING\" size=\"256\"/><Column id=\"atchFileId\" type=\"STRING\" size=\"256\"/><Column id=\"permissionUseYn\" type=\"STRING\" size=\"256\"/><Column id=\"permissionDc\" type=\"STRING\" size=\"256\"/><Column id=\"rgstId\" type=\"STRING\" size=\"256\"/><Column id=\"rgstNm\" type=\"STRING\" size=\"256\"/><Column id=\"rgstIp\" type=\"STRING\" size=\"256\"/><Column id=\"rgstDt\" type=\"STRING\" size=\"256\"/><Column id=\"updtId\" type=\"STRING\" size=\"256\"/><Column id=\"updtIp\" type=\"STRING\" size=\"256\"/><Column id=\"updtDt\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("row0","218","63","100%","28",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Header");
            obj.set_flexgrow("0");
            obj.set_flexshrink("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","120","100%",null,null,null,null,null,null,this.row0.form);
            obj.set_taborder("0");
            obj.set_text("다운로드 테스트 데이터");
            obj.set_flexgrow("1");
            obj.set_font("normal bold 16px/normal \"Arial\"");
            obj.set_color("#00388e");
            this.row0.addChild(obj.name, obj);

            obj = new Button("btnRefresh","460","47","80","100%",null,null,null,null,null,null,this.row0.form);
            obj.set_taborder("2");
            obj.set_text("새로고침");
            obj.set_flexgrow("0");
            obj.set_flexshrink("0");
            this.row0.addChild(obj.name, obj);

            obj = new Button("btnDownload","460","47","80","100%",null,null,null,null,null,null,this.row0.form);
            obj.set_taborder("1");
            obj.set_text("다운로드");
            obj.set_flexgrow("0");
            obj.set_flexshrink("0");
            this.row0.addChild(obj.name, obj);

            obj = new Grid("grdSample","0","0","100%","1",null,null,"1",null,"1",null,this);
            obj.set_taborder("0");
            obj.set_binddataset("dsSample");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_autoupdatetype("itemselect");
            obj.set_flexgrow("1");
            obj.set_flexshrink("0");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\" band=\"left\"/><Column size=\"48\" band=\"left\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"시스템ID\"/><Cell col=\"3\" text=\"프로그램ID\"/><Cell col=\"4\" text=\"프로그램명\"/><Cell col=\"5\" text=\"프로그램유형\"/><Cell col=\"6\" text=\"URL\"/><Cell col=\"7\" text=\"프로그램 설명\"/><Cell col=\"8\" text=\"프로그램 파일명\"/><Cell col=\"9\" text=\"대체URL\"/><Cell col=\"10\" text=\"대체URL 사용여부\"/><Cell col=\"11\" text=\"첨부파일\"/><Cell col=\"12\" text=\"권한레벨 사용여부\"/><Cell col=\"13\" text=\"권한레벨 사용설명\"/><Cell col=\"14\" text=\"등록자\"/><Cell col=\"15\" text=\"등록일\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\" text=\"expr:currow+1\" textAlign=\"center\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" textAlign=\"center\" text=\"bind:rowCheck\"/><Cell col=\"2\" text=\"bind:sysId\" edittype=\"text\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:progId\" edittype=\"text\"/><Cell col=\"4\" text=\"bind:progNm\" edittype=\"text\"/><Cell col=\"5\" text=\"bind:progTy\" edittype=\"combo\" displaytype=\"combocontrol\"/><Cell col=\"6\" text=\"bind:progUrl\" edittype=\"text\"/><Cell col=\"7\" text=\"bind:progDc\" edittype=\"text\"/><Cell col=\"8\" text=\"bind:progFileNm\" edittype=\"text\"/><Cell col=\"9\" text=\"bind:substituteUrl\" edittype=\"text\"/><Cell col=\"10\" text=\"bind:substituteUseYn\" edittype=\"combo\" displaytype=\"combocontrol\" combodataset=\"dsUseYn\" combocodecol=\"LINE_CODE\" combodatacol=\"LINE_CODE_NM_KR\" comboautoselect=\"true\"/><Cell col=\"11\" text=\"bind:atchFileId\" edittype=\"text\"/><Cell col=\"12\" text=\"bind:permissionUseYn\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\" checkboxfalsevalue=\"N\" checkboxtruevalue=\"Y\"/><Cell col=\"13\" text=\"bind:permissionDc\" edittype=\"text\"/><Cell col=\"14\" text=\"bind:rgstNm\" edittype=\"none\" textAlign=\"center\"/><Cell col=\"15\" text=\"bind:rgstDt\" edittype=\"none\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.row0.form
            obj = new Layout("default","",0,0,this.row0.form,function(p){});
            obj.set_type("horizontal");
            obj.set_horizontalgap("3");
            this.row0.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_type("vertical");
            obj.set_spacing("30px 50px");
            obj.set_verticalgap("10");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("testform2.xfdl","lib::common.xjs");
        this.registerScript("testform2.xfdl", function() {
        /**
        *  샘플 관리
        *  MenuPath      -
        *  FileName      testform2.xfdl
        *  Creator 	     parksw
        *  CreateDate    2023.02.13
        *  Desction      엑셀 다운로드
        ************** 소스 수정 이력 ***********************************************
        *  date          Modifier    Description
        *******************************************************************************
        *  2023.02.13    parksw 	 최초 생성
        *******************************************************************************/

        this.executeIncludeScript("lib::common.xjs"); /*include "lib::common.xjs"*/;

        /***********************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose)
         ***********************************************************************************************/

        this.testform1_onload = function(obj,e)
        {
        	this.fnSearch();
        };

        /************************************************************************************************
        * TRANSACTION 서비스 호출 처리
        ************************************************************************************************/

        this.fnSearch = function ()
        {
        	this.gfnTransaction("sampleData", "sam/getExcelSampleData.do", "", "dsSample=dsTypeTwo", "", "fnCallback");
        };

        /************************************************************************************************
         * CALLBACK 콜백 처리부분(Transaction, Popup)
         ************************************************************************************************/

        this.fnCallback = function ()
        {
        };

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/

        this.row0_btnRefresh_onclick = function(obj,e)
        {
        	this.fnSearch();
        };

        this.row0_btnDownload_onclick = function(obj,e)
        {
        	this.gfnExportExcel(this.grdSample, { type: "xlsx", filename: "테스트" });
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.testform1_onload,this);
            this.row0.form.btnRefresh.addEventHandler("onclick",this.row0_btnRefresh_onclick,this);
            this.row0.form.btnDownload.addEventHandler("onclick",this.row0_btnDownload_onclick,this);
        };
        this.loadIncludeScript("testform2.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
