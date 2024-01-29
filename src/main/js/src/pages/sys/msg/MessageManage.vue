<script setup>
import dhx from "dhx-suite-package";
import { onMounted, onUnmounted, ref } from "vue";
import { getCommonCodeCombo } from "@/util/combo";
import { DataCollectionEx, rowStatusTemplate } from "@/util/data";
import { postData } from "@/util/ajax";
import { editOnSingleClick } from "@/util/grid";
import { showAlert, showConfirm } from "@/util/popup";
import { useMessageStore } from "@/stores/message";
import { validator } from "@/util/data/validate";

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
let grdMessage;
/** @type {dhx.Layout} */
let grdMessageLayout;

////////////
// 데이터 //
////////////

const dsMessage = new DataCollectionEx();

////////////////////////
// 생명주기 이벤트 훅 //
////////////////////////

// 컴포넌트가 로드됨
onMounted(async () => {
    const {
        useYnCombo,
        msgTypeCombo
    } = await getCombo();

    searchForm = new dhx.Form(searchFormElement.value, {
        padding: "15px 20px",
        height: 60,
        css: "jn-search-form",
        cols: [
            {
                padding: "0 60px 0 0",
                rows: [
                    { name: "msgId", type: "input", width: 310, label: "메시지 ID", labelPosition: "left", labelWidth: 100 }
                ]
            },
            {
                padding: "0 60px 0 0",
                rows: [
                    { name: "msg", type: "input", width: 310, label: "메시지", labelPosition: "left", labelWidth: 100 }
                ]
            }
        ]
    });

    grdMessage = new dhx.Grid(null, {
        css: "jn-grid",
        rowHeight: 34,
        headerRowHeight: 30,
        selection: "cell",
        editable: true,
        keyNavigation: true,
        sortable: false,
        data: dsMessage,
        leftSplit: 3,
        columns: [
            { id: "rn", width: 48, header: [{ text: "순번", align: "center" }], editable: false },
            { id: "rowCheck", width: 48, header: [{ htmlEnable: true, text: "<input type='checkbox'>", align: "center" }], type: "boolean", align: "center" },
            { id: "rowStatus", width: 48, header: [{ text: "상태", align: "center" }], align: "center", editable: false, template: rowStatusTemplate },
            { id: "msgId", width: 200, header: [{ text: "메시지 ID", align: "center" }] },
            { id: "msg", width: 400, header: [{ text: "메시지 (한글)", align: "center" }] },
            { id: "engMsg", width: 400, header: [{ text: "메시지 (영문)", align: "center" }] },
            { id: "msgType", width: 72, header: [{ text: "유형", align: "center" }], editorType: "select", options: msgTypeCombo },
            { id: "useYn", width: 72, header: [{ text: "사용 여부", align: "center" }], editorType: "select", options: useYnCombo },
            { id: "rmk", width: 320, header: [{ text: "비고", align: "center" }] },
            { id: "updtNm", width: 96, header: [{ text: "수정자", align: "center" }], editable: false },
            { id: "updtDt", width: 96, header: [{ text: "수정일", align: "center" }], editable: false }
        ]
    });

    grdMessageLayout = new dhx.Layout(gridElement.value, {
        rows: [
            { id: "grid" }
        ]
    });

    grdMessageLayout.getCell("grid").attach(grdMessage);

    grdMessage.events.on("cellClick", editOnSingleClick);
    grdMessage.events.on("beforeEditStart", (row, col) => {
        return row.rowStatus === "inserted" || col.id !== "msgId";
    });

    await search();
});

// 컴포넌트가 언로드됨
onUnmounted(() => {
    grdMessage?.destructor();
    grdMessageLayout?.destructor();
    searchForm?.destructor();
});

/////////////////
// 사용자 함수 //
/////////////////

/**
 * 콤보 박스 목록을 조회한다.
 */
async function getCombo() {
    const commonComboPromise = getCommonCodeCombo({
        useYnCombo: ["SM", "USE_YN"],
        msgTypeCombo: ["SM", "MSG_TYPE"]
    });

    const data = await Promise.all([commonComboPromise]);

    return {
        useYnCombo: data[0].useYnCombo,
        msgTypeCombo: data[0].msgTypeCombo
    };
}

/**
 * 권한 목록을 조회한다.
 */
async function search() {
    const result = await postData("sm/getMessageList.do", {
        dsSearch: searchForm.getValue()
    });

    // 체크박스 값을 변환한다.
    const data = result.dsMessage;
    dsMessage.parse(data);
}

async function save() {
    const validationResult = validator(grdMessage)
        .column("msgId", [["required"], ["maxLength", 50]])
        .column("msg", [["required"], ["maxLength", 1000]])
        .column("engMsg", [["required"], ["maxLength", 1000]])
        .column("rmk", [["maxLength", 4000]])
        .validate();

    if (!validationResult) {
        return;
    }

    const confirmResult = await showConfirm(message.getMessage("CM_CFM_BEFORE_SAVE"));
    if (!confirmResult)
        return;

    const dsMessageData = dsMessage.getCheckedRows("rowCheck");

    const result = await postData("sm/setMessageList.do", {
        dsMessage: dsMessageData
    });

    if (result.callbackMsg === "success") {
        await showAlert(message.getMessage("CM_MSG_SAVE_SUCCESS"));
        await search();
    } else {
        await showAlert("저장 중 오류가 발생하였습니다.");
    }
}

async function addRow() {
    dsMessage.add({
        useYn: "Y",
        msgType: "A"
    });
}

async function removeRow() {
    const checked = dsMessage.getCheckedRowIds("rowCheck");
    dsMessage.remove(checked);
}

</script>

<template>
    <div class="jn-page">
        <div class="jn-title-container">
            <h1 class="jn-title">메시지 관리</h1>
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
