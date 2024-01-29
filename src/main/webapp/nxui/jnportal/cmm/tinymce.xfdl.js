(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("tinymce");
            this.set_titletext("TinyMCE 에디터");
            if (Form == this.constructor)
            {
                this._setFormPosition(640,360);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new WebBrowser("wbEditor","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_border("0px none");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",640,360,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("tinymce.xfdl","lib::common.xjs");
        this.registerScript("tinymce.xfdl", function() {
        /**
         *  TinyMCE 에디터
         *  MenuPath      -
         *  FileName      cmm::tinymce.xfdl
         *  Creator       parksw
         *  CreateDate    2023.12.07
         *  Desription    TinyMCE 에디터
         ************** 소스 수정 이력 ***********************************************
         *  date          Modifier    Description
         *******************************************************************************
         *  2023.12.07    parksw      최초 생성
         *******************************************************************************/

        this.executeIncludeScript("lib::common.xjs"); /*include "lib::common.xjs"*/;

        /***********************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose)
         ***********************************************************************************************/

        let editor = null;
        let initializedCallback = [];
        let loaded = false;
        let initConfig = null;
        let shouldInit = false;

        this.tinymce_oninit = function(obj,e)
        {
            this.wbEditor.set_url(nexacro.getEnvironment().services.svcurl.url + "cmn/tinymce.do");
        };

        this.tinymce_onbeforeclose = function(obj,e)
        {
            editor.callMethod("destroy");
            editor.destroy();
        };

        this.wbEditor_onloadcompleted = function(obj,e)
        {
            editor = this.wbEditor.getProperty("window").getProperty("editor");
            loaded = true;

            if (shouldInit) {
                this._fnInit(initConfig);
            }
        };

        /**
         * 에디터를 초기화한다.
         */
        this.init = function (config)
        {
            if (loaded) {
                this._fnInit(config);
            } else {
                initConfig = config;
                shouldInit = true;
            }
        };

        /**
         * 에디터 초기화 후 실행할 콜백을 지정한다.
         */
        this.addOnInitializedCallback = function (callbackName, target)
        {
            if (editor == null || editor.getProperty("instance") == null) {
                initializedCallback.push({ callback: callbackName, target: target });
            } else if (typeof target[callbackName] === "function") {
                target[callbackName](editor);
            }
        };

        /**
         * 에디터의 내용을 가져온다.
         *
         * @return {string} 에디터의 내용 HTML
         */
        this.getContent = function ()
        {
            return editor.getProperty("content");
        }

        /**
         * 에디터에 내용을 설정한다.
         *
         * @param {string} content 에디터의 내용 HTML
         */
        this.setContent = function (content)
        {
            editor.setProperty("content", content);
        }

        /**
         * 에디터가 읽기 전용인지 확인한다.
         *
         * @return {boolean} 에디터가 읽기 전용이면 true.
         */
        this.isReadonly = function ()
        {
            return editor.getProperty("readonly");
        }

        /**
         * 에디터의 읽기 전용 상태를 설정한다.
         *
         * @param {boolean} readonly 읽기 전용으로 설정할 경우 true, 편집 가능 모드로 설정할 경우 false.
         */
        this.setReadonly = function (readonly)
        {
            editor.setProperty("readonly", readonly);
        }

        /**
         * 에디터 옵션을 확인한다.
         */
        this.getEditorOption = function (name)
        {
            return editor.callMethod("getOption", name);
        };

        /**
         * 에디터 옵션을 변경한다.
         */
        this.setEditorOption = function (name, value)
        {
            return editor.callMethod("setOption", name, value);
        };

        this._fnInitialized = function ()
        {
            const n = initializedCallback.length;
            for (let i = 0; i < n; i++) {
                const item = initializedCallback[i];
                if (typeof item.target[item.callback] === "function") {
                    item.target[item.callback](editor);
                }
            }
            initializedCallback.splice(0);
        };

        this._fnInit = function (config)
        {
            const thisObj = this;
            editor.handle.onInitialized(function () {
                thisObj._fnInitialized();
            });
            editor.callMethod("init", config);
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.tinymce_oninit,this);
            this.addEventHandler("onbeforeclose",this.tinymce_onbeforeclose,this);
            this.wbEditor.addEventHandler("onloadcompleted",this.wbEditor_onloadcompleted,this);
        };
        this.loadIncludeScript("tinymce.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
