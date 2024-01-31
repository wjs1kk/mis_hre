(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("fileUploadTest");
            this.set_titletext("파일 업로드 테스트");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,1699);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("staTitle","50","0","500","58",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("파일 업로드 샘플");
            obj.set_cssclass("sta_WF_compTitle01");
            this.addChild(obj.name, obj);

            obj = new Div("divSample1","50","staTitle:-10","720","318",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Div("divFileUpload1","0","0","720","280",null,null,null,null,null,null,this.divSample1.form);
            obj.set_taborder("0");
            obj.set_url("cmm::fileUpload.xfdl");
            this.divSample1.addChild(obj.name, obj);

            obj = new Button("btnUpload","0","290","120","28",null,null,null,null,null,null,this.divSample1.form);
            obj.set_taborder("1");
            obj.set_text("업로드 시작");
            this.divSample1.addChild(obj.name, obj);

            obj = new Div("divSample2","50","divSample1:10","720","318",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Div("divFileUpload2","0","0","720","280",null,null,null,null,null,null,this.divSample2.form);
            obj.set_taborder("0");
            obj.set_url("cmm::fileUpload.xfdl");
            this.divSample2.addChild(obj.name, obj);

            obj = new Button("btnUpload","0","290","120","28",null,null,null,null,null,null,this.divSample2.form);
            obj.set_taborder("1");
            obj.set_text("업로드 시작");
            this.divSample2.addChild(obj.name, obj);

            obj = new Div("divSample3","50","divSample2:10","720","358",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Div("divFileUpload3","0","0","720","280",null,null,null,null,null,null,this.divSample3.form);
            obj.set_taborder("0");
            obj.set_url("cmm::fileUpload.xfdl");
            obj.set_cssclass("div_WF_Area");
            this.divSample3.addChild(obj.name, obj);

            obj = new Button("btnRefresh","0","290","120","28",null,null,null,null,null,null,this.divSample3.form);
            obj.set_taborder("1");
            obj.set_text("목록 새로고침");
            this.divSample3.addChild(obj.name, obj);

            obj = new Static("Static00","0","328","720","30",null,null,null,null,null,null,this.divSample3.form);
            obj.set_taborder("2");
            obj.set_text("\"기본 첨부파일 예제\"에 파일을 업로드한 후 \"목록 새로고침\"을 누르면 목록이 표시됩니다.");
            this.divSample3.addChild(obj.name, obj);

            obj = new Static("staHeading3","50","divSample3:10","169","45",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("기타 예제");
            obj.set_cssclass("sta_WF_subTitle01");
            this.addChild(obj.name, obj);

            obj = new Div("divSample7","50","staHeading3:-10","720","358",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Div("divFileUpload7","0","0","720","280",null,null,null,null,null,null,this.divSample7.form);
            obj.set_taborder("0");
            obj.set_url("cmm::fileUpload.xfdl");
            obj.set_cssclass("div_WF_Area");
            this.divSample7.addChild(obj.name, obj);

            obj = new Button("btnUpload","0","290","120","28",null,null,null,null,null,null,this.divSample7.form);
            obj.set_taborder("1");
            obj.set_text("업로드 시작");
            this.divSample7.addChild(obj.name, obj);

            obj = new Static("Static00","0","328","720","30",null,null,null,null,null,null,this.divSample7.form);
            obj.set_taborder("2");
            obj.set_text("이미지 파일(jpg, png, gif, bmp, webp, heif)만 업로드 가능합니다.");
            this.divSample7.addChild(obj.name, obj);

            obj = new Div("divSample8","50","divSample7:10","720","358",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Div("divFileUpload8","0","0","720","280",null,null,null,null,null,null,this.divSample8.form);
            obj.set_taborder("0");
            obj.set_url("cmm::fileUpload.xfdl");
            obj.set_cssclass("div_WF_Area");
            this.divSample8.addChild(obj.name, obj);

            obj = new Button("btnUpload","0","290","120","28",null,null,null,null,null,null,this.divSample8.form);
            obj.set_taborder("1");
            obj.set_text("업로드 시작");
            this.divSample8.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSample1.form.divFileUpload1
            obj = new Layout("default","",0,0,this.divSample1.form.divFileUpload1.form,function(p){});
            this.divSample1.form.divFileUpload1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divSample1.form
            obj = new Layout("default","",0,0,this.divSample1.form,function(p){});
            this.divSample1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divSample2.form.divFileUpload2
            obj = new Layout("default","",0,0,this.divSample2.form.divFileUpload2.form,function(p){});
            this.divSample2.form.divFileUpload2.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divSample2.form
            obj = new Layout("default","",0,0,this.divSample2.form,function(p){});
            this.divSample2.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divSample3.form.divFileUpload3
            obj = new Layout("default","",0,0,this.divSample3.form.divFileUpload3.form,function(p){});
            this.divSample3.form.divFileUpload3.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divSample3.form
            obj = new Layout("default","",0,0,this.divSample3.form,function(p){});
            this.divSample3.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divSample7.form.divFileUpload7
            obj = new Layout("default","",0,0,this.divSample7.form.divFileUpload7.form,function(p){});
            this.divSample7.form.divFileUpload7.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divSample7.form
            obj = new Layout("default","",0,0,this.divSample7.form,function(p){});
            this.divSample7.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divSample8.form.divFileUpload8
            obj = new Layout("default","",0,0,this.divSample8.form.divFileUpload8.form,function(p){});
            this.divSample8.form.divFileUpload8.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divSample8.form
            obj = new Layout("default","",0,0,this.divSample8.form,function(p){});
            this.divSample8.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1920,1699,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::fileUpload.xfdl");
        };
        
        // User Script
        this.registerScript("fileUploadSample.xfdl", function() {

        this.fileUploadTest_oninit = function(obj,e)
        {
        };

        this.fileUploadTest_onload = function(obj,e)
        {
            // 파일 업로더를 초기화한다.
            // init(pgmId, fileId, options)
            // pgmId: 프로그램 ID
            // fileId: 파일 ID
            // options: 업로더 옵션
            //   - header: 업로더 제목 (문자열)
            //   - maxCount: 최대 업로드 가능 개수 (숫자) (기본값: 20)
            //   - maxFileSize: 단일 파일의 업로드 가능한 최대 크기 (기본값: 50MB) (예: "20MB")
            //   - maxTotalSize: 파일 크기 총합 최대 크기 (기본값: 200MB) (예: "200MB")
            //   - allowedTypes: 업로드를 허용할 확장자 배열 (예: ["doc", "docx", "hwp", "odt"])
            //   - readonly: 읽기 전용(다운로드 전용) 모드 여부 (boolean)
            this.divSample1.form.divFileUpload1.form.init("fileUploadTest", "20230907000001", { header: "기본 첨부파일 예제" });

            this.divSample2.form.divFileUpload2.form.init("fileUploadTest", "20230907000002", { header: "목록 저장을 화면에서 별도로 처리하는 예제" });

            this.divSample3.form.divFileUpload3.form.init("fileUploadTest", "20230907000001", { header: "읽기 전용", readonly: true });

            this.divSample7.form.divFileUpload7.form.init("fileUploadTest", "20230907000007", { header: "파일 확장자 제한", allowedTypes: ["jpg", "png", "gif", "bmp", "webp", "heif"] });

            this.divSample8.form.divFileUpload8.form.init("fileUploadTest", "20230907000008", { header: "파일 크기 제한 변경", maxCount: 10, maxFileSize: "5GB", maxTotalSize: "20GB" });
        };

        this.fnSaveSample2 = function ()
        {
            this.gfnTransaction("save2", "cmn/file/setList.do", "dsFileList=dsFile2", "", "", "fnCallback");
        };

        this.fnCallback = function (svcId, errorCode, errorMsg)
        {
            if (svcId === "save2") {
                this.gfnAlert("저장하였습니다.");
                this.divSample2.form.divFileUpload2.form.searchFileList();
            }
        };

        this.divSample1_btnUpload_onclick = function(obj,e)
        {
            // 파일을 업로드한다.
            // upload(callback, dsFile[, extParam])
            // callback: 업로드 후 실행될 콜백 이름
            // dsFile: 업로드 후 파일 목록이 저장될 데이터셋 이름
            // extParam: 값이 "U"면 업로드만 하고 파일 목록을 저장하지 않음. 빈 값이면 파일 목록도 저장함.
            // 여기서는 파일 목록을 같이 저장한다.
            this.divSample1.form.divFileUpload1.form.upload("fnUploadComplete1", "dsFile1");
        };

        this.divSample2_btnUpload_onclick = function(obj,e)
        {
            // 파일만 업로드하고 목록은 저장하지 않는다.
            this.divSample2.form.divFileUpload2.form.upload("fnUploadComplete2", "dsFile2", "U");
        };

        this.divSample3_btnRefresh_onclick = function(obj,e)
        {
            // 파일 목록을 새로 조회한다.
            this.divSample3.form.divFileUpload3.form.searchFileList();
        };

        this.divSample7_btnUpload_onclick = function(obj,e)
        {
            this.divSample7.form.divFileUpload7.form.upload("fnUploadComplete7", "dsFile7");
        };

        this.divSample8_btnUpload_onclick = function(obj,e)
        {
            this.divSample8.form.divFileUpload8.form.upload("fnUploadComplete8", "dsFile8");
        };


        this.fnUploadComplete1 = function (name, result)
        {
            if (result === "Y") {
                this.gfnAlert("업로드를 완료하였습니다.");
            }
        };

        this.fnUploadComplete2 = function (name, result)
        {
            if (result === "Y") {
                this.fnSaveSample2();
            }
        };

        this.fnUploadComplete7 = function (name, result)
        {
            if (result === "Y") {
                this.gfnAlert("업로드를 완료하였습니다.");
            }
        };

        this.fnUploadComplete8 = function (name, result)
        {
            if (result === "Y") {
                this.gfnAlert("업로드를 완료하였습니다.");
            }
        };

        this.raonk_RAONKUPLOAD_BeforeCreation = function(obj)
        {
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.fileUploadTest_oninit,this);
            this.addEventHandler("onload",this.fileUploadTest_onload,this);
            this.divSample1.form.btnUpload.addEventHandler("onclick",this.divSample1_btnUpload_onclick,this);
            this.divSample2.form.btnUpload.addEventHandler("onclick",this.divSample2_btnUpload_onclick,this);
            this.divSample3.form.btnRefresh.addEventHandler("onclick",this.divSample3_btnRefresh_onclick,this);
            this.divSample7.form.btnUpload.addEventHandler("onclick",this.divSample7_btnUpload_onclick,this);
            this.divSample8.form.btnUpload.addEventHandler("onclick",this.divSample8_btnUpload_onclick,this);
        };
        this.loadIncludeScript("fileUploadSample.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
