<script lang="js" setup>
import dhx from "dhx-suite-package";
import { onMounted, onUnmounted, ref } from "vue";
import { showAlert, showConfirm } from "@/util/popup";
import { useMessageStore } from "@/stores/message";
import { postData } from "@/util/ajax";
import { getCommonCodeCombo, getSystemIdCombo, toSelectOptions } from "@/util/combo";
import { DataCollectionEx, rowStatusTemplate } from "@/util/data";
import { useSessionStore } from "@/stores/session";
import { validator } from "@/util/data/validate";

/*
 * 각각 검색 폼과 그리드를 연결할 HTML 요소를 담고 있을 변수
 */
let grdProgramElement = ref();
let grdFunctionElement = ref();
let searchFormElement = ref();

/**
 * 검색 폼
 */
let searchForm;

/**
 * 프로그램 목록 그리드
 */
let grdProgram;
let grdProgramLayout;

/**
 * 프로그램 기능 그리드
 */
let grdFunction;
let grdFunctionLayout;

// 공통 메시지 기능을 사용한다.
let message = useMessageStore();
// 사용자 세션 졍보를 사용한다.
let session = useSessionStore();

////////////
// 데이터 //
////////////

/**
 * 프로그램 목록 데이터를 저장한다.
 * @type {DataCollectionEx}
 */
let dsProgram = new DataCollectionEx();

/**
 * 프로그램 기능 목록 데이터를 저장한다.
 * @type {DataCollectionEx}
 */
let dsFunction = new DataCollectionEx();

/////////////////
// 생명주기 훅 //
/////////////////

/**
 * 화면이 열렸다
 */
onMounted(async () => {
    // 콤보 박스 데이터를 불러온다.
    const {
        sysIdCombo,
        progTyCombo,
        progTySearchCombo,
        funcTypeCombo,
        funcPatternTypeCombo,
        useYnCombo
    } = await getCombo();

    // 검색 폼을 초기화한다.
    // cols: 검색 폼에 항목을 배치할 때, 가로로 배치하기 위해 사용한다.
    // rows: 검색 폼에 항목을 배치할 때, 그룹 내에서 세로로 배치하기 위해 사용한다.
    // height: 검색 폼 전체 높이를 설정한다. 일반적으로 1행인 경우 70, 2행인 경우 94.
    //     n행일 때 검색 폼 전체 높이: 32 + 26 * n + 8 * (n - 1)
    // css: 검색 폼에 적용할 CSS 클래스를 지정한다.
    searchForm = new dhx.Form(searchFormElement.value, {
        padding: "15px 20px",
        height: 94,
        css: "jn-search-form",
        cols: [
            {
                padding: "0 60px 0 0",
                rows: [
                    // 입력란의 유형은 type 속성을 사용해 설정하며, input, combo, checkbox, datepicker 등이 있다.
                    // 다른 입력란 유형은 https://docs.dhtmlx.com/suite/category/list-of-form-controls/ 참조.
                    // 라벨 위치는 기본적으로 입력란 상단이며, labelPosition 속성을 사용해 왼쪽으로 이동시킨다.
                    // 라벨 크기는 labelWidth 속성을 사용하여 설정한다.
                    // 입력란의 기본값을 설정할 때는 value 속성을 사용한다.
                    // 입력란에 콤보박스를 삽입할 때, combo 타입은 data 속성에, select 타입은 options 속성에 콤보박스 항목을 지정한다.
                    // type이 combo일 때, readOnly 속성을 true로 설정하여 콤보박스의 텍스트 수정을 막을 수 있다.
                    { name: "sysId", type: "select", width: 310, label: "시스템", labelPosition: "left", labelWidth: 100, value: session.user.sysId, options: toSelectOptions(sysIdCombo) },
                    { name: "progUrl", type: "input", width: 310, label: "프로그램 URL", labelPosition: "left", labelWidth: 100 },
                ]
            },
            {
                padding: "0 60px 0 0",
                rows: [
                    { name: "progId", type: "input", width: 310, label: "프로그램 ID", labelPosition: "left", labelWidth: 100 },
                    { name: "progTy", type: "select", width: 310, label: "프로그램 유형", labelPosition: "left", labelWidth: 100, value: "", options: toSelectOptions(progTySearchCombo) }
                ]
            },
            {
                padding: "0 60px 0 0",
                rows: [
                    { name: "progNm", type: "input", width: 310, label: "프로그램명", labelPosition: "left", labelWidth: 100 },
                ]
            }
        ]
    });

    // 그리드를 생성한다.
    // editable: 그리드 전체에 대해 데이터를 수정 가능하도록 설정한다. 기본값은 false(읽기 전용)
    // leftSplit: 그리드 왼쪽에 고정할 열의 개수를 지정한다. 가로 스크롤이 생겨도 해당 열 개수만큼은 왼쪽에 고정되어 표시된다.
    // css: 적용할 CSS 클래스를 지정한다.
    // columns: 그리드 열을 설정한다.
    //     id: 그리드에 표시할 열의 ID. (VO의 속성)
    //     width: 그리드 열의 너비
    //     header: 이 열의 그리드 헤더에 표시할 내용을 설정한다. 배열로 되어 있어 그리드 헤더를 여러 행으로 만들 수 있다.
    //         text: 그리드 헤더에 표시할 제목
    //         align: 그리드 헤더 텍스트의 정렬
    //         colspan: 그리드 헤더 셀을 지정한 칸 수만큼 오른쪽으로 병합한다.
    //         rowspan: 그리드 헤더 셀을 지정한 행 수만큼 아래로 병합한다.
    //     type: 그리드 데이터의 형식. string, number, boolean, date, percent의 다섯 종류를 지원한다.
    //     editorType: 그리드 셀을 더블 클릭할 때 사용할 수정 방식. input, select, datePicker, combobox 등이 있다.
    //     editorConfig: 그리드 셀 내용을 수정할 때 편집란에 적용할 옵션
    //     align: 그리드 셀 내용의 정렬 방향. "left", "center", "right"의 3가지로 설정할 수 있다.
    //     template: 셀에 데이터를 그대로 보여주는 대신, 함수를 사용하여 변환하여 보여주고자 할 때 사용.
    //     options: 그리드 셀 타입이 select, combobox, multiselect일 때, 콤보박스에 표시할 선택 목록.
    //     editable: 열의 수정 가능 여부를 설정한다.
    grdProgram = new dhx.Grid(null, {
        css: "jn-grid",
        columns: [
            { id: "rn", width: 48, header: [{ text: "순번", align: "center" }], editable: false },
            { id: "rowCheck", width: 48, header: [{ htmlEnable: true, text: "<input type='checkbox'>", align: "center" }], type: "boolean" },
            { id: "rowStatus", width: 48, header: [{ text: "상태", align: "center" }], editable: false, align: "center", template: rowStatusTemplate },
            { id: "sysId", width: 128, header: [{ text: "시스템", align: "center" }], editorType: "select", options: sysIdCombo, editable: false },
            { id: "progId", width: 112, header: [{ text: "프로그램ID", align: "center" }] },
            { id: "progNm", width: 160, header: [{ text: "프로그램명", align: "center" }] },
            { id: "progTy", width: 96, header: [{ text: "프로그램 유형", align: "center" }], editorType: "select", options: progTyCombo },
            { id: "progUrl", width: 192, header: [{ text: "URL", align: "center" }] },
            { id: "progDc", width: 120, header: [{ text: "프로그램 설명", align: "center" }] },
            { id: "progFileNm", width: 120, header: [{ text: "프로그램 파일명", align: "center" }] },
            { id: "tblManageBtn", width: 72, header: [{ text: "연관 테이블", align: "center" }], editable: false, htmlEnable: true, template: () => "<button class='tblManage'>편집</button>" },
            { id: "substituteUrl", width: 144, header: [{ text: "대체URL", align: "center" }] },
            { id: "substituteUseYn", width: 112, header: [{ text: "대체URL 사용여부", align: "center" }], editorType: "select", options: useYnCombo },
            { id: "permissionUseYn", width: 112, header: [{ text: "권한레벨 사용여부", align: "center" }], editorType: "select", options: useYnCombo },
            { id: "permissionDc", width: 120, header: [{ text: "권한레벨 사용설명", align: "center" }] },
            { id: "rgstNm", width: 80, header: [{ text: "등록자", align: "center" }] },
            { id: "rgstDt", width: 80, header: [{ text: "등록일", align: "center" }] },
        ],
        leftSplit: 3,
        autoWidth: true,
        rowHeight: 34,
        headerRowHeight: 30,
        selection: "row",
        editable: true,
        sortable: false,
        data: dsProgram,
        eventHandlers: {
            onclick: {
                tblManage(event, data) {
                    console.log(data);
                }
            }
        }
    });

    // 그리드 크기가 화면 크기에 맞춰 자동으로 조절되도록 Layout을 만들어 그 내부에 그리드를 붙인다.
    grdProgramLayout = new dhx.Layout(grdProgramElement.value, {
        rows: [
            { id: "grid" }
        ]
    });
    grdProgramLayout.getCell("grid").attach(grdProgram);

    grdFunction = new dhx.Grid(null, {
        css: "jn-grid",
        columns: [
            { id: "rn", width: 48, header: [{ text: "순번", align: "center" }] },
            { id: "rowCheck", width: 48, header: [{ htmlEnable: true, text: "<input type='checkbox'>", align: "center" }], type: "boolean" },
            { id: "rowStatus", width: 48, header: [{ text: "상태", align: "center" }], editable: false, align: "center", template: rowStatusTemplate },
            { id: "funcType", width: 120, header: [{ text: "기능 유형", align: "center" }], editorType: "select", editorConfig: { readOnly: true }, options: funcTypeCombo },
            { id: "funcCode", width: 120, header: [{ text: "기능 코드", align: "center" }] },
            { id: "funcName", width: 160, header: [{ text: "기능명", align: "center" }] },
            { id: "funcPatternType", width: 120, header: [{ text: "접근 유형", align: "center" }], editorType: "select", editorConfig: { readOnly: true }, options: funcPatternTypeCombo },
            { id: "funcPattern", width: 360, header: [{ text: "접근 패턴", align: "center" }] },
            { id: "sortOrdr", width: 80, header: [{ text: "정렬 순서", align: "center" }], type: "number" },
            { id: "funcDesc", width: 560, header: [{ text: "기능 설명", align: "center" }] },
        ],
        leftSplit: 3,
        autoWidth: true,
        rowHeight: 34,
        headerRowHeight: 30,
        selection: "cell",
        editable: true,
        sortable: false,
        data: dsFunction
    });

    grdFunctionLayout = new dhx.Layout(grdFunctionElement.value, {
        rows: [
            { id: "grid" }
        ]
    });
    grdFunctionLayout.getCell("grid").attach(grdFunction);

    // 프로그램 목록 그리드에서 항목을 클릭하면 해당하는 프로그램 기능 목록을 조회한다.
    grdProgram.events.on("afterSelect", () => {
        searchFunction();
    });

    await searchProgram();
});

/**
 * 화면이 닫힌다.
 */
onUnmounted(() => {
    grdFunction?.destructor();
    grdFunctionLayout?.destructor();
    grdProgram?.destructor();
    grdProgramLayout?.destructor();
    searchForm?.destructor();
});

/////////////////
// 사용자 함수 //
/////////////////

async function getCombo() {
    const sysIdPromise = getSystemIdCombo();
    const commonCodePromise = getCommonCodeCombo({
        progTyCombo: ["SM", "PROG_TY", "C"],
        progTySearchCombo: ["SM", "PROG_TY", "A"],
        funcTypeCombo: ["SM", "FUNC_TYPE", "C"],
        funcPatternTypeCombo: ["SM", "PROG_FUNC_TYPE", "C"],
        useYnCombo: ["SM", "USE_YN"]
    });

    const [sysIdCombo, commonCodeCombo] = await Promise.all([sysIdPromise, commonCodePromise]);
    return {
        sysIdCombo,
        ...commonCodeCombo
    };
}

async function searchProgram() {
    const result = await postData("sm/getProgramManageList.do", { dsSearch: searchForm.getValue() });
    grdProgram.data.parse(result.dsProgram);
}

async function searchFunction() {
    const cell = grdProgram.selection.getCell();
    const row = cell.row;
    const result = await postData("sm/getProgramFunctionManageList.do", { dsSearch: searchForm.getValue() }, { sysId: row.sysId, progId: row.progId });

    if (Array.isArray(result.dsFunction) && result.dsFunction.length > 0)
        grdFunction.data.parse(result.dsFunction);
    else
        grdFunction.data.parse([]);
}

function addProgram() {
    grdProgram.data.add({
        sysId: searchForm.getValue().sysId
    });
}

function addFunction() {
    const cell = grdProgram.selection.getCell();
    const row = cell.row;
    grdFunction.data.add({
        sysId: row.sysId,
        progId: row.progId
    });
}

function removeProgram() {
    const checked = grdProgram.data.getCheckedRowIds("rowCheck");
    grdProgram.data.remove(checked);
}

function removeFunction() {
    const checked = grdFunction.data.getCheckedRowIds("rowCheck");
    grdFunction.data.remove(checked);
}

async function saveProgram() {
    const validationResult = validator(grdProgram)
        .column("sysId", [["required"], ["maxLength", 20]])
        .column("progId", [["required"], ["maxLength", 20]])
        .column("progNm", [["required"], ["maxLength", 100]])
        .column("progTy", [["required"]])
        .column("progUrl", [["maxLength", 1000]])
        .validate();

    if (!validationResult)
        return;

    const result = await showConfirm(message.getMessage("CM_CFM_BEFORE_SAVE"));
    if (result) {
        const data = grdProgram.data.getCheckedRows("rowCheck");
        const result = await postData("sm/saveProgramList.do", { dsProgram: data }, {});
        if (result.callbackMsg === "success") {
            await showAlert(message.getMessage("CM_MSG_SAVE_SUCCESS"));
            await searchProgram();
        } else {
            await showAlert("저장 중 오류가 발생하였습니다.");
        }
    }
}

async function saveFunction() {
    const validationResult = validator(grdFunction)
        .column("funcType", [["required"]])
        .column("funcCode", [["required"]])
        .column("funcName", [["required"], ["maxLength", 100]])
        .column("funcPatternType", [["required"]])
        .column("funcDesc", [["maxLength", 300]])
        .validate();

    if (!validationResult)
        return;

    const result = await showConfirm(message.getMessage("CM_CFM_BEFORE_SAVE"));
    if (result) {
        const data = grdFunction.data.getCheckedRows("rowCheck");
        const result = await postData("sm/saveProgramFunctionList.do", { dsFunction: data }, {});
        if (result.callbackMsg === "success") {
            await showAlert(message.getMessage("CM_MSG_SAVE_SUCCESS"));
            await searchFunction();
        } else {
            await showAlert("저장 중 오류가 발생하였습니다.");
        }
    }
}

</script>

<template>
    <div class="jn-page" style="display:flex; flex-direction: column; max-height: 100%;">
        <div class="jn-title-container">
            <h1 class="jn-title">프로그램 관리</h1>
            <div class="jn-btn-group">
                <button @click="searchProgram()">조회</button>
            </div>
        </div>

        <div ref="searchFormElement">
        </div>

        <div class="jn-container program-container">
            <div class="jn-title-container">
                <h2 class="jn-sub-title-01">프로그램</h2>
                <div class="jn-btn-group">
                    <button class="jn-btn-form icon-row-add" @click="addProgram()">행추가</button>
                    <button class="jn-btn-form icon-row-delete" @click="removeProgram()">행삭제</button>
                    <button class="jn-btn-form icon-save" @click="saveProgram()">저장</button>
                </div>
            </div>
            <div ref="grdProgramElement" style="height: calc(100% - 45px);"></div>
        </div>

        <div class="jn-container function-container">
            <div class="jn-title-container">
                <h2 class="jn-sub-title-01">프로그램 기능</h2>
                <div class="jn-btn-group">
                    <button class="jn-btn-form icon-row-add" @click="addFunction">행추가</button>
                    <button class="jn-btn-form icon-row-delete" @click="removeFunction">행삭제</button>
                    <button class="jn-btn-form icon-save" @click="saveFunction()">저장</button>
                </div>
            </div>
            <div ref="grdFunctionElement" style="height: calc(100% - 45px);"></div>
        </div>
    </div>
</template>

<style scoped>
.program-container,
.function-container {
    flex: none;
    height: calc((100% - 177px) / 2);
}
</style>
