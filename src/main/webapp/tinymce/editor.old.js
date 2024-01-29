/// <reference path="./global.d.ts" />

const editor = (function () {
    /** @type {import("./js/tinymce/tinymce").Editor} */
    let edt = null;
    let initialized = false;

    const defaultToolbar = [
        "styleselect",
        "fontselect",
        "fontsizeselect",
        "bold italic underline strikethrough",
        "superscript subscript",
        "alignleft aligncenter alignright alignjustify",
        "bullist numlist",
        "outdent indent",
        "link image table",
        "undo redo",
        "code"
    ].join(" | ");

    const tableToolbar = [
        "tableprops tabledelete",
        "tableinsertrowbefore tableinsertrowafter tabledeleterow",
        "tableinsertcolbefore tableinsertcolafter tabledeletecol",
        "tablecellbackgroundcolor tablecellbordercolor tablecellborderwidth tablecellboarderstyle",
        "tablecellvalign"
    ].join(" | ");

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
        "Verdana=Verdana,sans-serif",
        "Times New Roman=Times New Roman,times,serif",
        "Consolas=Consolas,monospace",
        "Courier New=Courier New,courier,monospace"
    ].join(";");

    /** @type {import("./js/tinymce/tinymce").RawEditorSettings} */
    const defaultConfig = {
        plugins: "code image link lists table",
        branding: false,
        selector: "#main-text-editor",
        toolbar: defaultToolbar,
        table_toolbar: tableToolbar,
        toolbar_mode: "floating",
        max_width: 960,
        height: "100%",
        menubar: false,
        statusbar: false,
        resize: false,
        language: "ko_KR",
        content_style: "body { font-family: 맑은 고딕, Malgun Gothic, sans-serif; }",
        font_formats: fontFormats,
        images_upload_url: "attach/uploadImage.do",
        image_title: true,
        images_reuse_filename: true,
        automatic_uploads: true,
        images_upload_handler: function (blobInfo, success, failure, progress) {
            const xhr = new XMLHttpRequest();
            const formData = new FormData();

            formData.append("file", blobInfo.blob(), blobInfo.filename());

            xhr.open("POST", "http://localhost:8080/kritpms/attach/uploadImage.do");
            xhr.onload = function () {
                const json = JSON.parse(xhr.responseText);

                if (xhr.status != 200) {
                    failure(json.message);
                } else {
                    success(json.location);
                }
            };
            xhr.send(formData);
        },
    };

    return {
        init: function (args) {
            tinymce.init(Object.assign({}, defaultConfig))
                .then(function (e) {
                    edt = e[0];
                    if (args != null && ("content" in args)) {
                        edt.resetContent(args.content);
                    }
                })
                .then(function () { initialized = true; });
        },
        destroy: function () {
            if (initialized) {
                edt.destroy(true);
                edt = null;
            }
        },
        get content() {
            if (!initialized) {
                throwMessage("Editor not initialized");
            }
            return edt.getContent();
        },
        set content(value) {
            edt.setContent(value);
        },
        get plainText() {
            if (!initialized) {
                throwMessage("Editor not initialized");
            }
            return edt.getContent({ format: "text" });
        },
        get selector() {
            return defaultConfig.selector;
        },
        set selector(value) {
            if (initialized) {
                throwMessage("Cannot change editor's selector when editor has already initialized");
            }

            defaultConfig.selector = value;
        },
        get imageUploadUrl() {
            return defaultConfig.images_upload_url;
        },
        set imageUploadUrl(value) {
            if (initialized) {
                throwMessage("Cannot change image upload URL when editor has already initialized");
            }

            defaultConfig.images_upload_url = value;
        }
    };

    /**
     * @param {string} message
     * @returns {never}
     */
    function throwMessage(message) {
        throw new Error(message);
    }
})();
