//XJS=fileUpload.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function() {

        this.extUp;
        this.extDown;

        this.rqstNo = "";
        this.fileType = "";
        this.pgmId = "";

        let fileCallback = "";
        let newDsFile = "";
        let dirType = "";

        const defaultAllowedTypes = ["jpg", "jpeg", "gif", "png", "bmp", "webp", "heif",
            "zip", "7z", "rar",
            "txt", "doc", "docx", "ppt", "pptx", "xls", "xlsx", "pdf", "hwp", "hwpx"];

        const defaultDeniedTypes = [];

        const defaultImageTypes = ["jpg", "jpeg", "gif", "png", "bmp", "webp", "heif"];

        /**
         * @property {string} host
         * @property {string} uploadUrl
         * @property {string} downloadUrl
         * @property {string} deleteUrl
         * @property {string} downlImage
         * @property {string} delImage
         * @property {string} cancelImage
         * @property {string[]} allowTypes
         * @property {string[]} denyTypes
         * @property {number} maxCount
         * @property {number | string} maxSize
         * @property {number | string} maxTotalSize
         * @property {string[]} imageTypes
         */
        this.fileConfig = {
            host: nexacro.getEnvironment().services.svcurl.url,
            uploadUrl: "cmn/file/upload.do",
            downloadUrl: "cmn/file/download.do",
            deleteUrl: "cmn/file/delete.do",
            downImage: "theme://images/btns/btn_WF_grdDownload_W.png",
            delImage: "theme://images/btns/btn_WF_grdDelete_W.png",
            cancelImage: "theme://images/btns/btn_WF_grdReturn_W.png",
            allowTypes: defaultAllowedTypes,
            denyTypes: defaultDeniedTypes,
            maxCount: 20,
            maxSize: "50MB",
            maxTotalSize: "200MB",
            imageTypes: defaultImageTypes
        };

        /**
         * @description 유형별 파일 아이콘 목록
         */
        this.fileIcons = {
            exe: "theme://images/btn_WF_grdExe.png",
            text: "theme://images/btn_WF_grdTxt.png",
            image: "theme://images/btn_WF_grdJpg.png",
            audio: "theme://images/btn_WF_grdAudio.png",
            video: "theme://images/btn_WF_grdVod.png",
            xls: "theme://images/btn_WF_grdXls.png",
            ppt: "theme://images/btn_WF_grdPpt.png",
            doc: "theme://images/btn_WF_grdDoc.png",
            pdf: "theme://images/btn_WF_grdPdf.png",
            zip: "theme://images/btn_WF_grdZip.png",
            etc: "theme://images/btn_WF_grdEtc.png"
        };

        this.iconInfo = {
            exe: ["exe"],
            text: ["txt"],
            image: ["jpg", "jpeg", "gif", "png", "bmp", "webp", "heif"],
            audio: ["wav", "wma", "mp3", "m4a", "flac", "ogg", "oga"],
            video: ["avi", "3gp", "wmv", "mp4", "m4v", "webm", "mov", "mkv", "ogv"],
            xls: ["xls", "xslx", "ods"],
            ppt: ["ppt", "pptx", "odp"],
            doc: ["doc", "docx", "odt"],
            pdf: ["pdf"],
            zip: ["zip", "rar", "7z"]
        };

        this.extIconMap = {};

        this.tranFiles = {
            added: [],
            downloaded: [],
            transferFileSize: 0,
            transferFileIndex: 0,
            preFileSizeSum: 0
        };

        this.transferType = "all";

        /**
         * @summary 파일 확장자별 아이콘 이미지 경로를 구한다.
         * @param {string} filename 파일명
         * @return {string} 확장자에 해당하는 아이콘 이미지
         */
        this.getFileIcon = function (filename) {
            if (Eco.isEmpty(filename)) {
                return this.fileIcons.etc;
            }

            var tokens = filename.split(".");
            var ext = tokens[tokens.length - 1].toLowerCase();
            if (Object.prototype.hasOwnProperty.call(this.extIconMap, ext)) {
                return this.extIconMap[ext];
            } else {
                return this.fileIcons.etc;
            }
        };

        /**
         * @summary 파일 확장자별 이미지 파일을 찾기 위한 맵을 초기화한다.
         */
        this.initExtIconMap = function () {
            const fileIcons = this.fileIcons;
            const iconInfo = this.iconInfo;
            const extIconMap = this.extIconMap;

            for (let name in iconInfo) {
                if (!Object.prototype.hasOwnProperty.call(iconInfo, name)) {
                    continue;
                }

                const arr = iconInfo[name];
                const len = arr.length;
                for (let i = 0; i < len; i++) {
                    extIconMap[arr[i]] = fileIcons[name];
                }
            }
        };

        /**
         * @summary 파일 추가가 가능한 지 확인한다.
         * @param {object} target 추가 가능 여부를 확인할 대상
         */
        this.validateFile = function (target) {
            let result = 1;

            Eco.object.Each(target, function (prop, val, obj) {
                var result = "";
                switch (prop) {
                    case "name":
                        const ext = val.slice(val.lastIndexOf(".") + 1).toLowerCase();
                        if (this.fileConfig.allowTypes.indexOf(ext) < 0 || this.fileConfig.denyTypes.indexOf(ext) >= 0) {
                            this.gfnAlert("확장자가 '" + ext + "'인 파일은 업로드할 수 없습니다. (" + val + ")");
                            result = 0;
                            return false;
                        }
                        break;
                    case "length":
                        if (val >= this.fileConfig.maxCount) {
                            this.gfnAlert("최대 " + this.fileConfig.maxCount + "개의 파일만 업로드할 수 있습니다.");
                            result = -1;
                            return false;
                        }
                        break;
                    case "size":
                        if (!isNaN(val) && (val >= this.parseFileSize(this.fileConfig.maxSize))) {
                            this.gfnAlert("업로드할 파일의 크기는 " + this.formatFileSize(this.fileConfig.maxSize) + " 이내여야 합니다.");
                            result = 0;
                            return false;
                        }
                        break;
                    case "totalSize":
                        if (!isNaN(val) && (val >= this.parseFileSize(this.fileconfig.maxTotalSize))) {
                            this.gfnAlert("업로드할 파일 크기의 총합은 " + this.formatFileSize(this.fileConfig.maxTotalSize) + " 이내여야 합니다.");
                            result = -1;
                            return false;
                        }
                        break;
                    default:
                        break;
                }
            }, this);

            return result;
        };

        /**
         * @description 주어진 데이터셋이 변경되었는지 확인한다.
         * @param {nexacro.NormalDataset} dataset 대상 데이터셋
         * @return {boolean} 데이터세싱 업데이트되었으면 true를 반환한다.
         */
        this.isDatasetUpdated = function (dataset)
        {
            if (Eco.isEmpty(dataset)) {
                return false;
            }

            if (dataset.getRowCount() < 1) {
                return false;
            }

            if (dataset.getDeletedRowCount() > 0) {
                return true;
            }

            return dataset.findRowExpr("(this.getRowType(rowidx) == Dataset.ROWTYPE_UPDATE) || (this.getRowType(rowidx) == Dataset.ROWTYPE_INSERT)") >= 0;
        };

        /**
         * 파일 목록 데이터셋에서 파일명 뒤에 파일 크기를 붙여 가져온다.
         */
        this.getFileNameWithSize = function (dataset, rowIndex)
        {
            const fileName = dataset.getColumn(rowIndex, "orgnlFileNm");
            const size = dataset.getColumn(rowIndex, "fileSz");

            if (Eco.isEmpty(size)) {
                return fileName;
            } else {
                return fileName + " (" + this.formatFileSize(size) + ")";
            }
        };

        this.validateImageFile = function (target)
        {
            var result = 1;

            Eco.object.Each(target, function (prop, val, object) {
                if (prop === "name") {
                    const ext = val.slice(val.lastIndexOf(".") + 1).toLowerCase();
                    if (!Eco.array.contains(this.fileConfig.imageTypes, ext)) {
                        alert("확장자가 '" + ext + "'인 파일은 업로드할 수 없습니다. (" + val + ")");
                        result = 1;
                        return false;
                    }
                }
            }, this);

            return result;
        };

        /**
         * @summary 파일 크기를 바이트 단위로 환산한다.
         *
         * @description 주어진 파일 크기를 다음 규칙에 따라 바이트 단위로 환산한다.
         *   1. 입력값이 숫자형인 경우 정수로 변환한다. 음수는 0으로 변환한다.
         *   2. 입력 문자열이 단위가 붙은 수 형태의 경우, 해당 단위에 따라 바이트로 환산한다.
         *      지원하는 단위는 다음과 같으며, 접두어의 크기는 이진 표기(2^10)를 기준으로 한다.
         *          B, KB, MB, GB, TB
         *   3. 이외의 경우는 null을 반환하고, 브라우저 콘솔에 오류 메시지를 출력한다.
         *   자바스크립트 number 타입의 한계로 인해, 결과값이 Safe integer 범위(|x| <= 2^53 - 1)를 넘어가면 잘릴 수 있다.
         *
         * @param {number | string} size 파일 크기. 단위(KB, MB, GB)를 포함할 수 있다.
         *
         * @return {number | null} 입력값을 바이트 단위로 환산했을 때의 크기
         */
        this.parseFileSize = function (size) {
            if (typeof size === "number") {
                return Math.max(toInteger(size), 0);        // 입력값 타입이 number인 경우 정수로만 변환
            }

            if (typeof size !== "string") {
                console.log("Input value should be number or string.");
                return null;
            }

            const expMap = {
                K: 10,
                M: 20,
                G: 30,
                T: 40
            };
            const unitRegEx = /([kmgt]b)$/i;
            const match = unitRegEx.exec(size);

            if (match) {
                const unit = match[1].toUpperCase();
                const numberStr = size.substring(0, size.length - unit.length);
                const number = Number(numberStr);

                if (isNaN(number)) {
                    console.log("Invalid number: " + numberStr);
                    return null;
                }

                if (unit == "B") {
                    return Math.max(0, toInteger(number));
                }

                return Math.round(number * Math.pow(2, expMap[unit[0]] || 0));
            } else {
                console.log("'" + size + "' is not a valid file size.");
            }

            function toInteger(value) {
                var n = Number(value);
                if (isNaN(n)) {
                    return 0;
                }

                if (number === 0 || !isFinite(number)) {
                    return number;
                }

                return (number > 0 ? 1 : -1) * Math.floor(Math.abs(n));
            }
        };

        /**
         * @summary 바이트 단위로 나타낸 파일 크기를 적당한 크기의 단위로 변환한다.
         *
         * @description 바이트 단위로 나타낸 파일 크기를 일정 자리수를 넘지 않도록 단위를 붙여 문자열로 변환한다.
         *   유효숫자가 3자리 이내가 되도록 변환하며, TB보다 큰 단위가 적용되지는 않는다.
         *   입력값이 2^53 - 1을 넘어가는 경우, 자바스크립트 number 타입의 한계로 인해, 값이 다르게 나올 수 있다.
         *
         * @param {number} 바이트 단위로 나타낸 크기. 반드시 숫자형이어야 한다.
         *
         * @returns {string} 적당한 단위로 변환하여 나타낸 크기.
         */
        this.formatFileSize = function (bytes) {
            if (typeof bytes !== "number") {
                return bytes;
            }

            const units = ["B", "KB", "MB", "GB", "TB"];
            let l = units.length;
            let n = bytes;
            let i = 0;

            while (n >= 1000 && i < (l - 1)) {
                n /= 1024;
                i++;
            }

            if (i == 0) {
                return n.toFixed(0) + units[i];
            }

            let d = Math.floor(Math.log10(n)) + 1;
            return n.toFixed(Math.max(3 - d, 0)) + units[i];
        }


        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
