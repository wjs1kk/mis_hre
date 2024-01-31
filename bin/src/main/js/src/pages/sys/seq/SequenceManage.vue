<script setup lang="js">
import dhx from "dhx-suite-package";
import { onMounted, onUnmounted, ref } from "vue";
import { getCommonCodeCombo, toSelectOptions } from "@/util/combo";
import { DataCollectionEx, rowStatusTemplate } from "@/util/data";
import { postData } from "@/util/ajax";
import { editOnSingleClick } from "@/util/grid";
import { showAlert, showConfirm } from "@/util/popup";
import { useMessageStore } from "@/stores/message";
import { datasetConverter } from "@/util/data/convert";

const message = useMessageStore();

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
let grdSeqMng;
/** @type {dhx.Layout} */
let grdSeqMngLayout;

////////////
// 데이터 //
////////////

const dsSeqMng = new DataCollectionEx();

////////////////////////
// 생명주기 이벤트 훅 //
////////////////////////

// 컴포넌트가 로드됨
onMounted(async () => {
    const {
        useYnCombo
    } = await getCombo();

    // 검색 폼을 설정한다.
    searchForm = new dhx.Form(searchFormElement.value, {
        padding: "15px 20px",
        height: 60,
        css: "jn-search-form",
        cols: [
            {
                padding: "0 60px 0 0",
                rows: [
                    { name: "seqId", type: "input", width: 310, label: "채번 ID", labelPosition: "left", labelWidth: 100 }
                ]
            },
            {
                padding: "0 60px 0 0",
                rows: [
                    { name: "seqDesc", type: "input", width: 310, label: "설명", labelPosition: "left", labelWidth: 100 }
                ]
            },
            {
                padding: "0 60px 0 0",
                rows: [
                    { name: "useYn", type: "select", width: 310, label: "사용 여부", labelPosition: "left", labelWidth: 100, options: toSelectOptions(useYnCombo) }
                ]
            }
        ]
    });

    // 조회 결과 그리드를 설정한다.
    grdSeqMng = new dhx.Grid(null, {
        css: "jn-grid",
        rowHeight: 34,
        headerRowHeight: 30,
        selection: "cell",
        editable: true,
        keyNavigation: true,
        sortable: false,
        data: dsSeqMng,
        leftSplit: 3,
        columns: [
            { id: "rn", width: 48, header: [{ text: "순번", align: "center", rowspan: 2 }], editable: false },
            { id: "rowCheck", width: 48, header: [{ htmlEnable: true, text: "<input type='checkbox'>", align: "center", rowspan: 2 }], type: "boolean", align: "center" },
            { id: "rowStatus", width: 48, header: [{ text: "상태", align: "center", rowspan: 2 }], align: "center", editable: false, template: rowStatusTemplate },
            { id: "seqId", width: 120, header: [{ text: "채번 ID", align: "center", rowspan: 2 }] },
            { id: "seqPrefix", width: 160, header: [{ text: "접두어", align: "center", rowspan: 2 }] },
            { id: "seqDigits", width: 72, header: [{ text: "채번 정보", align: "center", colspan: 3 }, { text: "자릿수", align: "center" }] },
            { id: "seqInc", width: 72, header: [{}, { text: "증가", align: "center" }] },
            { id: "seqMin", width: 72, header: [{}, { text: "초기값", align: "center" }] },
            { id: "seqSuffix", width: 160, header: [{ text: "접미어", align: "center", rowspan: 2 }] },
            { id: "useYn", width: 96, header: [{ text: "사용 여부", align: "center", rowspan: 2 }] },
            { id: "seqCurr", width: 120, header: [{ text: "현재값", align: "center", rowspan: 2 }], editable: false },
            { id: "seqDesc", width: 440, header: [{ text: "설명", align: "center", rowspan: 2 }] },
        ]
    });

    grdSeqMngLayout = new dhx.Layout(gridElement.value, {
        rows: [
            { id: "grid" }
        ]
    });

    grdSeqMngLayout.getCell("grid").attach(grdSeqMng);

    grdSeqMng.events.on("cellClick", editOnSingleClick);
    grdSeqMng.events.on("beforeEditStart", (row, col) => {
        return row.rowStatus === "inserted" || (col.id !== "sysId" && col.id !== "moduleId");
    });

    await search();
});

// 컴포넌트가 언로드됨
onUnmounted(() => {
    grdSeqMng?.destructor();
    grdSeqMngLayout?.destructor();
    searchForm?.destructor();
});

/////////////////
// 사용자 함수 //
/////////////////

/**
 * 콤보 박스 목록을 조회한다.
 */
async function getCombo() {
    const commonCodeData = await getCommonCodeCombo({
        useYnCombo: ["SM", "USE_YN", "A"]
    });
    return commonCodeData;
}

/**
 * 권한 목록을 조회한다.
 */
async function search() {
    const result = await postData("sm/getSeqManageList.do", {
        dsSchSeq: searchForm.getValue()
    });

    // 체크박스 값을 변환한다.
    const data = datasetConverter(result.dsSeqMng)
        .convert();
    dsSeqMng.parse(data);
}

async function save() {
    const confirmResult = await showConfirm(message.getMessage("CM_CFM_BEFORE_SAVE"));
    if (!confirmResult)
        return;

    const dsSeqMngData = datasetConverter(dsSeqMng.getCheckedRows("rowCheck"))
        .convert();

    const result = await postData("sm/saveSeqManageList.do", {
        dsSeqMng: dsSeqMngData
    });

    if (result.callbackMsg === "success") {
        await showAlert(message.getMessage("CM_MSG_SAVE_SUCCESS"));
        await search();
    } else {
        await showAlert("저장 중 오류가 발생하였습니다.");
    }
}

async function addRow() {
    dsSeqMng.add({
        useYn: "Y",
        seqDigits: 4,
        seqInc: 1,
        seqMin: 1
    });
}

async function removeRow() {
    const checked = dsSeqMng.getCheckedRowIds("rowCheck");
    dsSeqMng.remove(checked);
}
</script>

<template>
    <div class="jn-page">
        <div class="jn-title-container">
            <h1 class="jn-title">채번기준 관리</h1>
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
