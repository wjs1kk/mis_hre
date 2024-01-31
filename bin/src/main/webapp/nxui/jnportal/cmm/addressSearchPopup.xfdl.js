(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("addressSearchPopup");
            this.set_titletext("주소 검색");
            if (Form == this.constructor)
            {
                this._setFormPosition(500,550);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new WebBrowser("wbDaumPostcode","0","50",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_border("0px none");
            this.addChild(obj.name, obj);

            obj = new Static("staPopupTitle","0","0",null,"50","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("우편번호 검색");
            obj.set_cssclass("sta_WF_popupTitle");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose",null,"0","50","50","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_background("#00388E");
            obj.set_borderRadius("0px");
            obj.set_icon("url(\'theme://images/btn_WF_Cancel.png\')");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",500,550,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("addressSearchPopup.xfdl","lib::common.xjs");
        this.registerScript("addressSearchPopup.xfdl", function() {
        /**
         *  주소 검색
         *  MenuPath      -
         *  FileName      cmm::addressSearchPopup.xfdl
         *  Creator       parksw
         *  CreateDate    2023.10.26
         *  Desction      주소 검색 팝업
         ************** 소스 수정 이력 ***********************************************
         *  date          Modifier    Description
         *******************************************************************************
         *  2023.10.26    parksw      최초 생성
         *******************************************************************************/

        this.executeIncludeScript("lib::common.xjs"); /*include "lib::common.xjs"*/;

        /***********************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose)
         ***********************************************************************************************/

        this.AddressSearchPopup_oninit = function(obj,e)
        {
            const serviceUrl = nexacro.getEnvironment().services["svcurl"].url;
            this.wbDaumPostcode.set_url(serviceUrl + "cmm/goPostalSearch.do");
        };

        this.AddressSearchPopup_onload = function(obj,e)
        {
        };

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/

        this.wbDaumPostcode_onloadcompleted = function(obj,e)
        {
            const postSearch = obj.getProperty("window").handle.postSearch;

            postSearch.once("initialized", this.wbDaumPostcode_oninitialized.bind(this));
            postSearch.on("completed", this.wbDaumPostcode_oncompleted.bind(this));

            postSearch.init();
        };

        this.wbDaumPostcode_oninitialized = function ()
        {
        };

        this.wbDaumPostcode_oncompleted = function (data)
        {
            console.log(data);
            this.gfnPopupClose({
                data: data
            });
        };

        this.btnClose_onclick = function(obj,e)
        {
            this.gfnPopupClose({
                canceled: true
            });
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.AddressSearchPopup_oninit,this);
            this.addEventHandler("onload",this.AddressSearchPopup_onload,this);
            this.wbDaumPostcode.addEventHandler("onloadcompleted",this.wbDaumPostcode_onloadcompleted,this);
            this.wbDaumPostcode.addEventHandler("onusernotify",this.wbDaumPostcode_onusernotify,this);
            this.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
        };
        this.loadIncludeScript("addressSearchPopup.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
