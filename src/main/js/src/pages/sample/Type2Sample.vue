<script setup lang="js">
/**
 * @file
 * @author parksw
 * @since  2023.12.08
 * @description 타입 2 샘플
 * 메뉴:   -
 * 파일명: src/pages/sam/Type2Sample.vue
 *
 * 소스 수정 이력
 * --------------
 *
 * 일시        | 수정자     | 설명
 * -----------------------------------------------------
 * 2023.12.08  | parksw     | 최초 생성
 */


import { DataCollectionEx } from "@/util/data";
import { ref, onMounted, onUnmounted } from "vue";

// 화면에 파라미터가 필요한 경우, defineProps를 사용하여 목록을 정의한다.
// import { defineProps } from "vue";
// const props = defineProps(["userId"]);

///////////////
// 상태 변수 //
///////////////

/**
 * 검색 폼이 삽입될 div를 담고 있는 ref 객체
 *
 * @type {import("vue").Ref<HTMLElement>}
 */
const searchFormElement = ref();

/**
 * 그리드가 삽입될 div를 담고 있는 ref 객체
 *
 * @type {import("vue").Ref<HTMLElement>}
 */
const gridElement = ref();

////////////////
// 폼, 그리드 //
////////////////

/**
 * 검색 폼
 * @type {import("dhx-suite-package").Form}
 */
let searchForm;

/**
 * 조회 결과 그리드
 * @type {import("dhx-suite-package").Grid}
 */
let grdMessage;

/**
 * 조회 결과 그리드가 삽입될 레이아웃
 * @type {import("dhx-suite-package").Layout}
 */
let grdMessageLayout;

////////////
// 데이터 //
////////////

/**
 * 메시지 목록
 */
let dsMessage = new DataCollectionEx();

/////////////////
// 생명주기 훅 //
/////////////////

// 컴포넌트가 화면에 표시될 때
onMounted(async () => {
    // 콤보박스 데이터를 조회한다.
    const {
        useYnCombo,
        msgTypeCombo
    } = await getCombo();

    // 검색 폼을 생성한다.
    // cols: 항목들을 가로로 배치할 때 사용한다.
    // rows: 항목들을 세로로 배치헐 때 사용한다.
    searchForm = new dhx.Form(searchFormElement.value, {
        padding: "15px 20px",       // 폼의 패딩 설정
        height: 60,                 // 폼의 높이 설정
        css: "jn-search-form",      // 폼에 적용할 CSS 클래스 설정
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

    // 그리드를 생성한다.
    grdMessage = new dhx.Grid(null, {
        css: "jn-grid",         // 그리드에 적용할 CSS 클래스 설정
        rowHeight: 34,          // 행 높이(in px)
        headerRowHeight: 30,    // 헤더 행 높이(in px)
        selection: "cell",      // 클릭 시 선택되는 단위. "row"로 설정 시에는 키보드 탐색으로 옆의 칸으로 이동할 수 없으니 주의.
        editable: true,         // 그리드의 내용을 편집 가능하도록 설정한다.
        keyNavigation: true,    // 키보드 방향 키 및 Tab 키로 탐색하는 기능을 활성화
        sortable: false,        // 그리드 헤더를 눌러 정렬할 수 있는가 설정한다.
        data: dsMessage,        // 그리드에 설정할 데이터
        leftSplit: 3,           // 그리드 왼쪽에 고정할 열 개수
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

    // 그리드를 부착할 레이아웃을 생성한다.
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

// 컴포넌트가 화면에서 제거될 때
onUnmounted(() => {
    searchForm?.destructor();
    grdMessage?.destructor();
    grdMessageLayout?.destructor();
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
 * 메시지 목록을 조회한다.
 */
async function search() {
    const result = await postData("sm/getMessageList.do", {
        dsSearch: searchForm.getValue()
    });

    const data = result.dsMessage;
    dsMessage.parse(data);
}

/**
 * 메시지 목록을 저장한다.
 */
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

/**
 * 그리드에 행을 추가한다.
 */
async function addRow() {
    dsMessage.add({
        useYn: "Y",
        msgType: "A"
    });
}

/**
 * 선택한 행을 그리드에서 삭제한다.
 */
async function removeRow() {
    const checked = dsMessage.getCheckedRowIds("rowCheck");
    dsMessage.remove(checked);
}
</script>

<template>
    <div class="jn-page">
        <div class="jn-title-container">
            <h1 class="jn-title">Type 2 샘플</h1>
            <div class="jn-btn-group">
                <button class="jn-btn-save" @click="save">저장</button>
            </div>
        </div>

        <div ref="searchFormElement">
        </div>

        <div class="jn-container" style="height: calc(100% - 177px);">
            <div class="jn-title-container">
                <h2 class="jn-sub-title-01">검색 결과</h2>
                <div class="jn-btn-group">
                    <button class="jn-btn-form icon-row-add" @click="addRow">행추가</button>
                    <button class="jn-btn-form icon-row-delete" @click="removeRow">행삭제</button>
                </div>
            </div>
            <div ref="gridElement"></div>
        </div>
    </div>
</template>
