<script setup>
import dhx from "dhx-suite-package";
import { onMounted, onUnmounted, ref } from "vue";
import { getCommonCodeCombo, getSystemIdCombo, toSelectOptions } from "@/util/combo";
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
let grdModule;
/** @type {dhx.Layout} */
let grdModuleLayout;

////////////
// 데이터 //
////////////

const dsModuleManage = new DataCollectionEx();

////////////////////////
// 생명주기 이벤트 훅 //
////////////////////////

// 컴포넌트가 로드됨
onMounted(async () => {
    const {
        sysIdCombo,
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
                    { name: "sysId", type: "select", width: 310, label: "시스템", labelPosition: "left", labelWidth: 100, value: session.user.sysId, options: toSelectOptions(sysIdCombo) },
                ]
            },
            {
                padding: "0 60px 0 0",
                rows: [
                    { name: "moduleId", type: "input", width: 310, label: "모듈ID", labelPosition: "left", labelWidth: 100 }
                ]
            },
            {
                padding: "0 60px 0 0",
                rows: [
                    { name: "moduleNm", type: "input", width: 310, label: "모듈명", labelPosition: "left", labelWidth: 100 }
                ]
            }
        ]
    });

    grdModule = new dhx.Grid(null, {
        css: "jn-grid",
        rowHeight: 34,
        headerRowHeight: 30,
        selection: "cell",
        editable: true,
        keyNavigation: true,
        sortable: false,
        data: dsModuleManage,
        leftSplit: 3,
        columns: [
            { id: "rn", width: 48, header: [{ text: "순번", align: "center" }], editable: false },
            { id: "rowCheck", width: 48, header: [{ htmlEnable: true, text: "<input type='checkbox'>", align: "center" }], type: "boolean", align: "center" },
            { id: "rowStatus", width: 48, header: [{ text: "상태", align: "center" }], align: "center", editable: false, template: rowStatusTemplate },
            { id: "sysId", width: 144, header: [{ text: "시스템", align: "center" }], editorType: "select", options: sysIdCombo },
            { id: "moduleId", width: 112, header: [{ text: "모듈 ID", align: "center" }] },
            { id: "moduleNm", width: 320, header: [{ text: "모듈명", align: "center" }] },
            { id: "useYn", width: 96, header: [{ text: "사용여부", align: "center" }], editorType: "select", options: useYnCombo },
            { id: "useYmd", width: 120, header: [{ text: "사용시작일", align: "center" }], align: "center", type: "date", format: "%Y-%m-%d" },
            { id: "endYmd", width: 120, header: [{ text: "사용종료일", align: "center" }], align: "center", type: "date", format: "%Y-%m-%d" },
            { id: "sortOrdr", width: 96, header: [{ text: "정렬순서", align: "center" }], type: "number" },
            { id: "rgstNm", width: 96, header: [{ text: "작성자", align: "center" }], editable: false },
            { id: "rgstDt", width: 96, header: [{ text: "작성일", align: "center" }], editable: false },
            { id: "updtNm", width: 96, header: [{ text: "수정자", align: "center" }], editable: false },
            { id: "updtDt", width: 96, header: [{ text: "수정일", align: "center" }], editable: false },
        ]
    });

    grdModuleLayout = new dhx.Layout(gridElement.value, {
        rows: [
            { id: "grid" }
        ]
    });

    grdModuleLayout.getCell("grid").attach(grdModule);

    grdModule.events.on("cellClick", editOnSingleClick);
    grdModule.events.on("beforeEditStart", (row, col) => {
        return row.rowStatus === "inserted" || (col.id !== "sysId" && col.id !== "moduleId");
    });

    await search();
});

// 컴포넌트가 언로드됨
onUnmounted(() => {
    grdModule?.destructor();
    grdModuleLayout?.destructor();
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
    const commonComboPromise = getCommonCodeCombo({
        useYnCombo: ["SM", "USE_YN"]
    });

    const data = await Promise.all([sysIdComboPromise, commonComboPromise]);

    return {
        sysIdCombo: data[0],
        useYnCombo: data[1].useYnCombo
    };
}

/**
 * 권한 목록을 조회한다.
 */
async function search() {
    const result = await postData("sm/getModuleManageList.do", {
        dsSearch: searchForm.getValue()
    });

    // 체크박스 값을 변환한다.
    const data = datasetConverter(result.dsModuleManage)
        .dateFormat("useYmd", "yyyyMMdd", "yyyy-MM-dd")
        .dateFormat("endYmd", "yyyyMMdd", "yyyy-MM-dd")
        .convert();
    dsModuleManage.parse(data);
}

async function save() {
    const confirmResult = await showConfirm(message.getMessage("CM_CFM_BEFORE_SAVE"));
    if (!confirmResult)
        return;

    const dsModuleManageData = datasetConverter(dsModuleManage.getCheckedRows("rowCheck"))
        .dateFormat("useYmd", "yyyy-MM-dd", "yyyyMMdd")
        .dateFormat("endYmd", "yyyy-MM-dd", "yyyyMMdd")
        .convert();

    const result = await postData("sm/setModuleManageList.do", {
        dsModuleManage: dsModuleManageData
    });

    if (result.callbackMsg === "success") {
        await showAlert(message.getMessage("CM_MSG_SAVE_SUCCESS"));
        await search();
    } else {
        await showAlert("저장 중 오류가 발생하였습니다.");
    }
}

async function addRow() {
    dsModuleManage.add({
        useYn: "Y",
        sysId: searchForm.getValue().sysId
    });
}

async function removeRow() {
    const checked = dsModuleManage.getCheckedRowIds("rowCheck");
    dsModuleManage.remove(checked);
}

</script>

<template>
    <div class="jn-page">
        <div class="jn-title-container">
            <h1 class="jn-title">시스템 모듈 관리</h1>
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
