(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("tinymceSample");
            this.set_titletext("웹 에디터 샘플");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,1000);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsData", this);
            obj._setContents("<ColumnInfo><Column id=\"content01\" type=\"STRING\" size=\"2147483647\"/><Column id=\"content02\" type=\"STRING\" size=\"2147483647\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staTitle","50","0","500","58",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("기본화면구성");
            obj.set_cssclass("sta_WF_compTitle01");
            this.addChild(obj.name, obj);

            obj = new Div("divEditor01","50","staTitle:-5","900","482",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Div("divEditor","0","45",null,null,"0","0",null,null,null,null,this.divEditor01.form);
            obj.set_taborder("0");
            obj.set_url("cmm::tinymce.xfdl");
            this.divEditor01.addChild(obj.name, obj);

            obj = new Static("sta_dtlInfo","0","0","169","45",null,null,null,null,null,null,this.divEditor01.form);
            obj.set_taborder("1");
            obj.set_text("에디터");
            obj.set_cssclass("sta_WF_subTitle01");
            this.divEditor01.addChild(obj.name, obj);

            obj = new Button("btnReadOnlyToggle","77","14","123","26",null,null,null,null,null,null,this.divEditor01.form);
            obj.set_taborder("2");
            obj.set_text("읽기 전용 토글");
            obj.set_cssclass("btn_WF_grdModify");
            this.divEditor01.addChild(obj.name, obj);

            obj = new Div("divHtml01","50","divEditor01:10","900","415",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new TextArea("taHtml","0","45",null,null,"0","0",null,null,null,null,this.divHtml01.form);
            obj.set_taborder("0");
            obj.set_readonly("true");
            this.divHtml01.addChild(obj.name, obj);

            obj = new Static("sta_dtlInfo","0","0","169","45",null,null,null,null,null,null,this.divHtml01.form);
            obj.set_taborder("1");
            obj.set_text("에디터 HTML");
            obj.set_cssclass("sta_WF_subTitle01");
            this.divHtml01.addChild(obj.name, obj);

            obj = new Button("btnGetContent","124","14","116","26",null,null,null,null,null,null,this.divHtml01.form);
            obj.set_taborder("2");
            obj.set_text("내용 가져오기");
            obj.set_cssclass("btn_WF_grdArrDown");
            this.divHtml01.addChild(obj.name, obj);

            obj = new Div("divEditor02","divEditor01:15","staTitle:-5","900","482",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Div("divEditor","0","45",null,null,"0","0",null,null,null,null,this.divEditor02.form);
            obj.set_taborder("0");
            obj.set_url("cmm::tinymce.xfdl");
            this.divEditor02.addChild(obj.name, obj);

            obj = new Static("sta_dtlInfo","0","0","169","45",null,null,null,null,null,null,this.divEditor02.form);
            obj.set_taborder("1");
            obj.set_text("읽기 전용 에디터");
            obj.set_cssclass("sta_WF_subTitle01");
            this.divEditor02.addChild(obj.name, obj);

            obj = new Div("divHtml02","divHtml01:15","divEditor02:10","900","415",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new TextArea("taHtml","0","45",null,null,"0","0",null,null,null,null,this.divHtml02.form);
            obj.set_taborder("0");
            this.divHtml02.addChild(obj.name, obj);

            obj = new Static("sta_dtlInfo","0","0","169","45",null,null,null,null,null,null,this.divHtml02.form);
            obj.set_taborder("1");
            obj.set_text("HTML 입력");
            obj.set_cssclass("sta_WF_subTitle01");
            this.divHtml02.addChild(obj.name, obj);

            obj = new Button("btnSetContent","107","14","140","26",null,null,null,null,null,null,this.divHtml02.form);
            obj.set_taborder("2");
            obj.set_text("에디터에 설정하기");
            obj.set_cssclass("btn_WF_grdArrUp");
            this.divHtml02.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divEditor01.form.divEditor
            obj = new Layout("default","",0,0,this.divEditor01.form.divEditor.form,function(p){});
            this.divEditor01.form.divEditor.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divEditor01.form
            obj = new Layout("default","",0,0,this.divEditor01.form,function(p){});
            this.divEditor01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divHtml01.form
            obj = new Layout("default","",0,0,this.divHtml01.form,function(p){});
            this.divHtml01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divEditor02.form.divEditor
            obj = new Layout("default","",0,0,this.divEditor02.form.divEditor.form,function(p){});
            this.divEditor02.form.divEditor.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divEditor02.form
            obj = new Layout("default","",0,0,this.divEditor02.form,function(p){});
            this.divEditor02.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divHtml02.form
            obj = new Layout("default","",0,0,this.divHtml02.form,function(p){});
            this.divHtml02.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1920,1000,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divHtml01.form.taHtml","value","dsData","content01");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divHtml02.form.taHtml","value","dsData","content02");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::tinymce.xfdl");
        };
        
        // User Script
        this.addIncludeScript("editorSample.xfdl","lib::common.xjs");
        this.registerScript("editorSample.xfdl", function() {
        /**
         *  웹 에디터(TinyMCE) 샘플
         *  MenuPath      -
         *  FileName      sam::editorSample.xfdl
         *  Creator       parksw
         *  CreateDate    2023.12.08
         *  Desction      웹 에디터(TinyMCE) 샘플
         ************** 소스 수정 이력 ***********************************************
         *  date          Modifier    Description
         *******************************************************************************
         *  2023.12.08    parksw      최초 생성
         *******************************************************************************/

        this.executeIncludeScript("lib::common.xjs"); /*include "lib::common.xjs"*/;

        this.tinymceSample_onload = function(obj,e)
        {
            this.gfnFormOnLoad(this);

            // 에디터를 초기화한다.
            this.divEditor01.form.divEditor.form.init();
            // 에디터 초기화 후 추가 작업이 필요한 경우 콜백을 지정한다.
            this.divEditor01.form.divEditor.form.addOnInitializedCallback("fnDivEditor01Initialized", this);

            // 에디터를 읽기 전용으로 초기화한다.
            this.divEditor02.form.divEditor.form.init({
                readonly: true,
                toolbar: false
            });
        };

        // 에디터 초기화 후 콜백
        this.fnDivEditor01Initialized = function ()
        {
            this.divEditor01.form.divEditor.form.setContent("<h1>제목</h1><p>내용</p>");
        };

        /**
         * 내용 가져오기 버튼
         */
        this.divHtml01_btnGetContent_onclick = function(obj,e)
        {
            // 에디터 내용을 가져온다.
            const html = this.divEditor01.form.divEditor.form.getContent();

            // 가져온 내용을 데이터셋에 설정한다.
            this.dsData.setColumn(0, "content01", html);
        };

        /**
         * 읽기 전용 토글 버튼
         */
        this.divEditor01_btnReadOnlyToggle_onclick = function(obj,e)
        {
            // 에디터의 읽기 전용 상태를 가져온다.
            const isReadonly = this.divEditor01.form.divEditor.form.isReadonly();

            // 에디터의 읽기 전용 상태를 반대로 바꾼다.
            this.divEditor01.form.divEditor.form.setReadonly(!isReadonly);
        };

        /**
         * 에디터에 설정하기 버튼
         */
        this.divHtml02_btnSetContent_onclick = function(obj,e)
        {
            // 데이터셋에 설정된 HTML을 가져온다.
            const html = this.dsData.getColumn(0, "content02");

            // 앞의 HTML을 에디터 내용으로 설정한다.
            this.divEditor02.form.divEditor.form.setContent(html);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.tinymceSample_onload,this);
            this.divEditor01.form.sta_dtlInfo.addEventHandler("onclick",this.Static09_onclick,this);
            this.divEditor01.form.btnReadOnlyToggle.addEventHandler("onclick",this.divEditor01_btnReadOnlyToggle_onclick,this);
            this.divHtml01.form.sta_dtlInfo.addEventHandler("onclick",this.Static09_onclick,this);
            this.divHtml01.form.btnGetContent.addEventHandler("onclick",this.divHtml01_btnGetContent_onclick,this);
            this.divEditor02.form.sta_dtlInfo.addEventHandler("onclick",this.Static09_onclick,this);
            this.divHtml02.form.sta_dtlInfo.addEventHandler("onclick",this.Static09_onclick,this);
            this.divHtml02.form.btnSetContent.addEventHandler("onclick",this.divHtml02_btnSetContent_onclick,this);
        };
        this.loadIncludeScript("editorSample.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
