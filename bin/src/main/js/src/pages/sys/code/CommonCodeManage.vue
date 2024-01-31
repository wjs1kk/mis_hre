<script lang="js" setup>
import dhx from "dhx-suite-package";
import { onMounted, onUnmounted, ref } from "vue";
import { showAlert, showConfirm } from "@/util/popup";
import { useMessageStore } from "@/stores/message";
import { postData } from "@/util/ajax";
import { getCommonCodeCombo, getSystemIdCombo, getModuleIdCombo, toSelectOptions } from "@/util/combo";
import { DataCollectionEx, rowStatusTemplate } from "@/util/data";
import { useSessionStore } from "@/stores/session";

// 공통 메시지 기능을 사용한다.
let message = useMessageStore();
// 사용자 세션 졍보를 사용한다.
let session = useSessionStore();

/*
 * 각각 검색 폼과 그리드를 연결할 HTML 요소
 */
let grdCodeHeaderElement = ref();
let grdCodeLineElement = ref();
let searchFormElement = ref();

/**
 * 검색 폼
 * @type {dhx.Form}
 */
let searchForm;

/**
 * 코드헤더 목록 그리드
 * @type {dhx.Grid}
 */
let grdCodeHeader;
/** @type {dhx.Layout} */
let grdCodeHeaderLayout;

/**
 * 코드 목록 그리드
 */
/** @type {dhx.Grid} */
let grdCodeLine;
/** @type {dhx.Layout} */
let grdCodeLineLayout;

////////////
// 데이터 //
////////////

/** 행추가/삭제 버튼이 활성화됨 */
const codeHeaderButtonEnabled = ref(true);
const codeLineButtonEnabled = ref(true);

/**
 * 프로그램 목록 데이터를 저장한다.
 * @type {DataCollectionEx}
 */
let dsCodeHeader = new DataCollectionEx();

/**
 * 프로그램 기능 목록 데이터를 저장한다.
 * @type {DataCollectionEx}
 */
let dsCodeLine = new DataCollectionEx();

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
        moduleIdCombo,
        moduleIdSearchCombo,
        useYnCombo
    } = await getCombo();

    searchForm = new dhx.Form(searchFormElement.value, {
        padding: "15px 20px",
        height: 60,
        css: "jn-search-form",
        cols: [
            {
                padding: "0 60px 0 0",
                rows: [
                    { name: "searchSysId", type: "select", width: 310, label: "시스템", labelPosition: "left", labelWidth: 100, value: session.user.sysId, options: toSelectOptions(sysIdCombo) }
                ]
            },
            {
                padding: "0 60px 0 0",
                rows: [
                    { name: "searchHeaderCode", type: "input", width: 310, label: "코드그룹", labelPosition: "left", labelWidth: 100 }
                ]
            },
            {
                padding: "0 60px 0 0",
                rows: [
                    { name: "headerCodeNmKr", type: "input", width: 310, label: "코드그룹명", labelPosition: "left", labelWidth: 100 },
                ]
            },
            {
                padding: "0 60px 0 0",
                rows: [
                    { name: "searchModuleId", type: "select", width: 310, label: "모듈", labelPosition: "left", labelWidth: 100, options: toSelectOptions(moduleIdSearchCombo) },
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
    grdCodeHeader = new dhx.Grid(null, {
        css: "jn-grid",
        leftSplit: 3,
        autoWidth: true,
        rowHeight: 34,
        headerRowHeight: 30,
        selection: "cell",
        editable: true,
        sortable: false,
        data: dsCodeHeader,
        columns: [
            { id: "rn", width: 48, header: [{ text: "순번", align: "center" }], editable: false },
            { id: "rowCheck", width: 48, header: [{ htmlEnable: true, text: "<input type='checkbox'>", align: "center" }], type: "boolean" },
            { id: "rowStatus", width: 48, header: [{ text: "상태", align: "center" }], editable: false, align: "center", template: rowStatusTemplate },
            { id: "moduleId", width: 90, header: [{ text: "모듈", align: "center" }], editorType: "select", options: moduleIdCombo },
            { id: "headerCode", width: 160, header: [{ text: "코드그룹", align: "center" }] },
            { id: "headerCodeNmKr", width: 240, header: [{ text: "코드그룹명(한글)", align: "center" }] },
            { id: "headerCodeNmEn", width: 240, header: [{ text: "코드그룹명(영문)", align: "center" }] },
            { id: "headerCodeDc", width: 240, header: [{ text: "코드설명", align: "center" }] },
            { id: "useYn", width: 96, header: [{ text: "사용여부", align: "center" }], editorType: "select", options: useYnCombo }
        ],
    });

    // 그리드 크기가 화면 크기에 맞춰 자동으로 조절되도록 Layout을 만들어 그 내부에 그리드를 붙인다.
    grdCodeHeaderLayout = new dhx.Layout(grdCodeHeaderElement.value, {
        rows: [
            { id: "grid" }
        ]
    });
    grdCodeHeaderLayout.getCell("grid").attach(grdCodeHeader);

    grdCodeLine = new dhx.Grid(null, {
        css: "jn-grid",
        leftSplit: 3,
        autoWidth: true,
        rowHeight: 34,
        headerRowHeight: 30,
        selection: "cell",
        editable: true,
        sortable: false,
        data: dsCodeLine,
        columns: [
            { id: "rn", width: 48, header: [{ text: "순번", align: "center" }] },
            { id: "rowCheck", width: 48, header: [{ htmlEnable: true, text: "<input type='checkbox'>", align: "center" }], type: "boolean" },
            { id: "rowStatus", width: 48, header: [{ text: "상태", align: "center" }], editable: false, align: "center", template: rowStatusTemplate },
            { id: "headerCode", width: 160, header: [{ text: "코드그룹", align: "center" }], editable: false },
            { id: "lineCode", width: 160, header: [{ text: "코드", align: "center" }] },
            { id: "lineCodeNmKr", width: 240, header: [{ text: "코드명(한굴)", align: "center" }] },
            { id: "lineCodeNmEn", width: 240, header: [{ text: "코드명(영어)", align: "center" }] },
            { id: "lineCodeDc", width: 560, header: [{ text: "코드 설명", align: "center" }] },
            { id: "sortOrdr", width: 96, header: [{ text: "정렬 순서", align: "center" }], type: "number" },
            { id: "useYn", width: 96, header: [{ text: "기능 설명", align: "center" }], editorType: "select", options: useYnCombo },
        ],
    });

    grdCodeLineLayout = new dhx.Layout(grdCodeLineElement.value, {
        rows: [
            { id: "grid" }
        ]
    });
    grdCodeLineLayout.getCell("grid").attach(grdCodeLine);

    grdCodeHeader.events.on("beforeSelect", () => {
        return !hasChange();
    });

    // 프로그램 목록 그리드에서 항목을 클릭하면 해당하는 프로그램 기능 목록을 조회한다.
    grdCodeHeader.events.on("afterSelect", () => {
        searchCodeLine();
    });

    grdCodeHeader.events.on("beforeEditStart", (row, col) => {
        return row.rowStatus === "inserted" || (col.id !== "moduleId" && col.id !== "headerCode");
    });

    grdCodeLine.events.on("beforeEditStart", (row, col) => {
        return row.rowStatus === "inserted" || (col.id !== "lineCode");
    });

    dsCodeHeader.events.on("change", (_id, status) => {
        if (status == null)
            return;

        codeHeaderButtonEnabled.value = false;
        if (status === "add") {
            codeLineButtonEnabled.value = false;
        }
    });

    dsCodeLine.events.on("change", (_id, status) => {
        if (status == null)
            return;
        codeHeaderButtonEnabled.value = false;
    });

    dsCodeHeader.events.on("load", () => {
        codeHeaderButtonEnabled.value = true;
        codeLineButtonEnabled.value = true;
    });

    dsCodeLine.events.on("load", () => {
        codeLineButtonEnabled.value = true;
    });

    await searchCodeHeader();
});

/**
 * 화면이 닫힌다.
 */
onUnmounted(() => {
    grdCodeLine?.destructor();
    grdCodeLineLayout?.destructor();
    grdCodeHeader?.destructor();
    grdCodeHeaderLayout?.destructor();
    searchForm?.destructor();
});

/////////////////
// 사용자 함수 //
/////////////////

async function getCombo() {
    const sysIdPromise = getSystemIdCombo();
    const moduleIdComboPromise = getModuleIdCombo();
    const moduleIdSearchComboPromise = getModuleIdCombo("A", null, true);
    const commonCodePromise = getCommonCodeCombo({
        useYnCombo: ["SM", "USE_YN"]
    });

    const [sysIdCombo, moduleIdCombo, moduleIdSearchCombo, commonCodeCombo] = await Promise.all([sysIdPromise, moduleIdComboPromise, moduleIdSearchComboPromise, commonCodePromise]);
    return {
        sysIdCombo,
        moduleIdCombo,
        moduleIdSearchCombo,
        ...commonCodeCombo
    };
}

async function searchCodeHeader() {
    const result = await postData("sm/getCodeHeaderList.do", { dsSearch: searchForm.getValue() });
    dsCodeHeader.parse(result.dsCodeHeader);

    dsCodeLine.removeAll();
    if (dsCodeHeader.getLength() > 0) {
        grdCodeHeader.selection.setCell(dsCodeHeader.getId(0), "headerCode");
    }
}

async function searchCodeLine() {
    const cell = grdCodeHeader.selection.getCell();
    const row = cell.row;
    const result = await postData("sm/getCodeLineList.do", {
        dsSearch: {
            ...searchForm.getValue(),
            sysId: row.sysId,
            moduleId: row.moduleId,
            headerCode: row.headerCode
        }
    });

    if (Array.isArray(result.dsCodeLine) && result.dsCodeLine.length > 0)
        dsCodeLine.parse(result.dsCodeLine);
    else
        dsCodeLine.parse([]);
}

function addCodeHeader() {
    grdCodeHeader.data.add({});
}

function addCodeLine() {
    const cell = grdCodeHeader.selection.getCell();
    const row = cell.row;
    grdCodeLine.data.add({
        sysId: row.sysId,
        moduleId: row.moduleId,
        headerCode: row.headerCode
    });
}

function removeCodeHeader() {
    const checked = grdCodeHeader.data.getCheckedRowIds("rowCheck");
    grdCodeHeader.data.remove(checked);
}

function removeCodeLine() {
    const checked = grdCodeLine.data.getCheckedRowIds("rowCheck");
    grdCodeLine.data.remove(checked);
}

async function save() {
    const result = await showConfirm(message.getMessage("CM_CFM_BEFORE_SAVE"));
    if (result) {
        const result = await postData("sm/setCodeList.do", {
            dsCodeHeader: dsCodeHeader.getCheckedRows("rowCheck"),
            dsCodeLine: dsCodeLine.getCheckedRows("rowCheck")
        });
        if (result.callbackMsg === "success") {
            await showAlert(message.getMessage("CM_MSG_SAVE_SUCCESS"));
            await searchCodeHeader();
        } else {
            await showAlert("저장 중 오류가 발생하였습니다.");
        }
    }
}

function hasChange() {
    const result = dsCodeHeader.serialize().some(e => e.rowStatus === "inserted" || e.rowStatus === "updated" || e.rowStatus === "deleted");
    if (result) {
        showAlert(message.getMessage("CM_MSG_CHANGE_DATA"));
    }

    return result;
}

</script>

<template>
    <div class="jn-page" style="display:flex; flex-direction: column; max-height: 100%;">
        <div class="jn-title-container">
            <h1 class="jn-title">공통코드 관리</h1>
            <div class="jn-btn-group">
                <button @click="searchCodeHeader()">조회</button>
                <button class="jn-btn-save" @click="save()">저장</button>
            </div>
        </div>

        <div ref="searchFormElement">
        </div>

        <div class="jn-container program-container">
            <div class="jn-title-container">
                <h2 class="jn-sub-title-01">코드그룹</h2>
                <div class="jn-btn-group">
                    <button :disabled="!codeHeaderButtonEnabled" class="jn-btn-form icon-row-add"
                        @click="addCodeHeader()">행추가</button>
                    <button :disabled="!codeHeaderButtonEnabled" class="jn-btn-form icon-row-delete"
                        @click="removeCodeHeader()">행삭제</button>
                </div>
            </div>
            <div ref="grdCodeHeaderElement" style="height: calc(100% - 45px);"></div>
        </div>

        <div class="jn-container function-container">
            <div class="jn-title-container">
                <h2 class="jn-sub-title-01">코드라인</h2>
                <div class="jn-btn-group">
                    <button :disabled="!codeLineButtonEnabled" class="jn-btn-form icon-row-add"
                        @click="addCodeLine">행추가</button>
                    <button :disabled="!codeLineButtonEnabled" class="jn-btn-form icon-row-delete"
                        @click="removeCodeLine">행삭제</button>
                </div>
            </div>
            <div ref="grdCodeLineElement" style="height: calc(100% - 45px);"></div>
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
