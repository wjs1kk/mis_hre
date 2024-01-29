<script setup lang="js">
import dhx from "dhx-suite-package";
import { onMounted, onUnmounted, ref } from "vue";
import { getModuleIdCombo, getSystemIdCombo, toSelectOptions } from "@/util/combo";
import { DataCollectionEx, rowStatusTemplate } from "@/util/data";
import { postData } from "@/util/ajax";
import { editOnSingleClick } from "@/util/grid";
import { showAlert, showConfirm } from "@/util/popup";
import { useMessageStore } from "@/stores/message";
import { useSessionStore } from "@/stores/session";
import { datasetConverter } from "@/util/data/convert";

const message = useMessageStore();
const session = useSessionStore();

/*
 * 검색 폼과 그리드 HTML 노드
 */
const searchFormElement = ref();
const gridElement = ref();

/*
 * 검색 폼과 그리드
 */
/** @type {dhx.Form} */
let searchForm;
/** @type {dhx.Grid} */
let grdParam;
/** @type {dhx.Layout} */
let grdParamLayout;

////////////
// 데이터 //
////////////

const dsParam = new DataCollectionEx();

////////////////////////
// 생명주기 이벤트 훅 //
////////////////////////

// 컴포넌트가 로드됨
onMounted(async () => {
    const {
        sysIdCombo,
        moduleSearchCombo,
        moduleCombo
    } = await getCombo();

    const filteredModuleCombo = moduleSearchCombo.filter(e => e.id == "" || e.sysId == session.user.sysId);

    // 검색 폼을 설정한다.
    searchForm = new dhx.Form(searchFormElement.value, {
        padding: "15px 20px",
        height: 60,
        css: "jn-search-form",
        cols: [
            {
                padding: "0 60px 0 0",
                rows: [
                    { name: "sysId", type: "select", width: 310, label: "시스템", labelPosition: "left", labelWidth: 100, value: session.user.sysId, options: toSelectOptions(sysIdCombo) },
                ]
            },
            {
                padding: "0 60px 0 0",
                rows: [
                    { name: "paramId", type: "input", width: 310, label: "파라미터 ID", labelPosition: "left", labelWidth: 100 }
                ]
            },
            {
                padding: "0 60px 0 0",
                rows: [
                    { name: "paramNm", type: "input", width: 310, label: "파라미터명", labelPosition: "left", labelWidth: 100 }
                ]
            },
            {
                padding: "0 60px 0 0",
                rows: [
                    { name: "moduleFg", type: "select", width: 310, label: "모듈", labelPosition: "left", labelWidth: 100, options: toSelectOptions(filteredModuleCombo) }
                ]
            }
        ]
    });

    // 검색 폼의 change 이벤트를 사용하여 시스템 ID 변경 시 모듈 ID 콤보를 변경한다.
    searchForm.events.on("change", (name, value) => {
        if (name === "sysId") {
            /** @type {import("dhx-suite-package/codebase/types/ts-form/sources/elements/select").Select} */
            const select = searchForm.getItem("sysId");
            const options = moduleSearchCombo.filter(e => e.id == "" || e.sysId == value);
            select.setOptions(toSelectOptions(options));
        }
    });

    // 조회 결과 그리드를 설정한다.
    grdParam = new dhx.Grid(null, {
        css: "jn-grid",
        rowHeight: 34,
        headerRowHeight: 30,
        selection: "cell",
        editable: true,
        keyNavigation: true,
        sortable: false,
        data: dsParam,
        leftSplit: 3,
        columns: [
            { id: "rn", width: 48, header: [{ text: "순번", align: "center" }], editable: false },
            { id: "rowCheck", width: 48, header: [{ htmlEnable: true, text: "<input type='checkbox'>", align: "center" }], type: "boolean", align: "center" },
            { id: "rowStatus", width: 48, header: [{ text: "상태", align: "center" }], align: "center", editable: false, template: rowStatusTemplate },
            { id: "sysId", width: 120, header: [{ text: "시스템", align: "center" }], editorType: "select", options: sysIdCombo, editable: false },
            { id: "paramId", width: 100, header: [{ text: "파라미터 ID", align: "center" }] },
            { id: "paramNm", width: 120, header: [{ text: "파라미터명", align: "center" }] },
            { id: "moduleFg", width: 120, header: [{ text: "모듈 구분", align: "center" }], editorType: "select", options: (_, row) => moduleCombo.filter(e => e.id == "" || e.sysId == row.sysId) },
            { id: "targetNm", width: 250, header: [{ text: "환경설정대상(경로)", align: "center" }] },
            { id: "paramData", width: 200, header: [{ text: "파라미터 자료", align: "center" }] },
            { id: "msg", width: 200, header: [{ text: "메시지", align: "center" }] },
            { id: "rmk", width: 100, header: [{ text: "비고", align: "center" }], editable: false },
            { id: "updtNm", width: 80, header: [{ text: "수정자", align: "center" }], editable: false },
            { id: "updtDt", width: 80, header: [{ text: "수정일", align: "center" }], editable: false },
        ]
    });

    grdParamLayout = new dhx.Layout(gridElement.value, {
        rows: [
            { id: "grid" }
        ]
    });

    grdParamLayout.getCell("grid").attach(grdParam);

    grdParam.events.on("cellClick", editOnSingleClick);
    grdParam.events.on("beforeEditStart", (row, col) => {
        return row.rowStatus === "inserted" || (col.id !== "sysId" && col.id !== "moduleId");
    });

    await search();
});

// 컴포넌트가 언로드됨
onUnmounted(() => {
    grdParam?.destructor();
    grdParamLayout?.destructor();
    searchForm?.destructor();
});

/////////////////
// 사용자 함수 //
/////////////////

/**
 * 콤보 박스 목록을 조회한다.
 */
async function getCombo() {
    const sysIdComboPromise = getSystemIdCombo();
    const moduleComboPromise = getModuleIdCombo("C");
    const moduleSearchComboPromise = getModuleIdCombo("A");

    const [sysIdCombo, moduleCombo, moduleSearchCombo] = await Promise.all([sysIdComboPromise, moduleComboPromise, moduleSearchComboPromise]);

    return {
        sysIdCombo,
        moduleCombo,
        moduleSearchCombo
    };
}

/**
 * 권한 목록을 조회한다.
 */
async function search() {
    const result = await postData("sm/getParam.do", {
        dsSearch: searchForm.getValue()
    });

    // 체크박스 값을 변환한다.
    const data = datasetConverter(result.dsParam)
        .convert();
    dsParam.parse(data);
}

async function save() {
    const confirmResult = await showConfirm(message.getMessage("CM_CFM_BEFORE_SAVE"));
    if (!confirmResult)
        return;

    const dsParamData = datasetConverter(dsParam.getCheckedRows("rowCheck"))
        .convert();

    const result = await postData("sm/setParam.do", {
        dsParam: dsParamData
    });

    if (result.callbackMsg === "success") {
        await showAlert(message.getMessage("CM_MSG_SAVE_SUCCESS"));
        await search();
    } else {
        await showAlert("저장 중 오류가 발생하였습니다.");
    }
}

async function addRow() {
    dsParam.add({
        useYn: "Y",
        sysId: searchForm.getValue().sysId
    });
}

async function removeRow() {
    const checked = dsParam.getCheckedRowIds("rowCheck");
    dsParam.remove(checked);
}

</script>

<template>
    <div class="jn-page">
        <div class="jn-title-container">
            <h1 class="jn-title">파라미터 관리</h1>
            <div class="jn-btn-group">
                <button @click="search">조회</button>
                <button class="jn-btn-save" @click="save">저장</button>
            </div>
        </div>

        <div ref="searchFormElement"></div>

        <div class="jn-container" style="height: calc(100% - 143px);">
            <div class="jn-title-container">
                <h2 class="jn-sub-title-01">검색 결과</h2>
                <div class="jn-btn-group">
                    <button class="jn-btn-form icon-row-add" @click="addRow">행추가</button>
                    <button class="jn-btn-form icon-row-delete" @click="removeRow">행삭제</button>
                </div>
            </div>
            <div ref="gridElement" style="height: calc(100% - 45px);"></div>
        </div>
    </div>
</template>
