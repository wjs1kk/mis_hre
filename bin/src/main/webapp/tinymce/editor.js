/// <reference path="./global.d.ts" />

/**
 * @param {import("./js/tinymce/tinymce").RawEditorOptions} options
 */
function createEditor(options) {
    /** @type {import("./js/tinymce/tinymce").Editor} */
    let instance = null;
    let initialized = false;

    const callbacks = {
        initialized: []
    };

    const fontFormats = [
        "맑은 고딕=맑은 고딕,Malgun Gothic,sans-serif",
        "굴림=굴림,Gulim,sans-serif",
        "굴림체=굴림체=GulimChe,monospace",
        "돋움=돋움,Dotum,sans-serif",
        "돋움체=돋움체,DotumChe,monospace",
        "바탕=바탕,Batang,serif",
        "바탕체=바탕체,BatangChe,monospace",
        "궁서=궁서,Gungseo,serif",
        "궁서체=궁서체,GungseoChe,monospace",
        "Arial=Arial,Helvetica,sans-serif",
        "Arial Black=Arial Black,Helvetica,sans-serif",
        "Comic Sans MS=Comic Sans MS,sans-serif",
        "Tahoma=Tahoma,sans-serif",
        "Verdana=Verdana,sans-serif",
        "Georgia=Georgia,serif",
        "Times New Roman=Times New Roman,times,serif",
        "Consolas=Consolas,monospace",
        "Courier New=Courier New,courier,monospace"
    ].join(";");

    const toolbar = [
        {
            name: "history",
            items: ["undo", "redo"]
        },
        {
            name: "styles",
            items: ["blocks", "fontfamily", "fontsizeinput", "forecolor", "backcolor"]
        },
        {
            name: "formatting",
            items: ["bold", "italic", "underline", "strikethrough"]
        },
        {
            name: "script",
            items: ["superscript", "subscript"]
        },
        {
            name: "align",
            items: ["alignleft", "aligncenter", "alignright", "alignjustify"]
        },
        {
            name: "list",
            items: ["numlist", "bullist"]
        },
        {
            name: "paragraph",
            items: ["lineheight", "outdent", "indent"]
        },
        {
            name: "media",
            items: ["link", "image", "media", "emoticons"]
        },
        {
            name: "table",
            items: ["table"]
        },
        {
            name: "code",
            items: ["code"]
        }
    ];

    /** @type {import("./js/tinymce/tinymce").RawEditorOptions} */
    const defaultConfig = {
        selector: "#main-text-editor",
        plugins: ["code", "codesample", "emoticons", "image", "link", "lists", "advlist", "media", "quickbars", "wordcount"],
        language: "ko_KR",
        menubar: false,
        branding: false,
        resize: false,
        height: "100%",
        skin: "jnportal",
        font_family_formats: fontFormats,
        content_style: "body { font-family: 맑은 고딕, Malgun Gothic, sans-serif; }",
        toolbar: toolbar,
        toolbar_mode: "sliding",
        automatic_uploads: true,
        promotion: false
    }

    return {
        init(config) {
            if (initialized)
                return;

            tinymce.init({
                ...defaultConfig,
                ...(options || {}),
                ...(config || {})
            }).then(editors => {
                if (editors.length > 0) {
                    instance = editors[0];
                    initialized = true;
                    callbacks.initialized.forEach(e => e(this));
                }
            });
        },
        destroy() {
            if (initialized) {
                instance.destroy();
                instance = null;
            }
        },
        get instance() {
            return instance;
        },
        /**
         * 에디터에 입력된 내용의 HTML
         */
        get content() {
            if (!initialized) {
                throwMessage("Editor is not initialized.");
            }
            return instance.getContent();
        },
        set content(value) {
            instance.setContent(value);
        },
        /**
         * 에디터에 입력된 내용을 일반 텍스트로 변환한 내용
         */
        get plainText() {
            if (!initialized) {
                throwMessage("Editor is not initialized.");
            }

            return instance.getContent({ format: "text" });
        },
        get readonly() {
            return initialized ? instance.mode.isReadOnly() : defaultConfig.readonly ?? false;
        },
        set readonly(value) {
            if (initialized) {
                instance.mode.set(value ? "readonly" : "design");
            } else {
                defaultConfig.readonly = value;
            }
        },
        /**
         * 에디터가 초기화된 후 실행될 콜백을 등록한다.
         *
         * @param {function():void} callback
         */
        onInitialized(callback) {
            if (initialized && (typeof callback === "function")) {
                callback(this);
            }
            if (typeof callback === "function") {
                callbacks.initialized.push(callback);
            }
        },
        /**
         * 에디터의 설정값을 확인한다.
         *
         * @param {string} name
         */
        getOption(name) {
            return instance.options.get(name);
        },
        /**
         * 에디터의 설정값을 변경한다.
         *
         * @param {string} name
         * @param {*} value
         */
        setOption(name, value) {
            instance.options.set(name, value)
        }
    };

    /**
     * @param {string} message
     * @returns {never}
     */
    function throwMessage(message) {
        throw new Error(message);
    }
}
