<script setup lang="js">
import dhx from "dhx-suite-package";
import { onMounted, onUnmounted, ref } from "vue";
import { DataCollectionEx } from "@/util/data";
import { postData } from "@/util/ajax";
import { showAlert, openModal } from "@/util/popup";
import { editOnSingleClick } from "@/util/grid";
import MalTmpltSearchPopup from "./MalTmpltSearchPopup.vue";
import { isEmpty } from "@/util/string";

/**
 * 검색 폼과 그리드 HTML 노드
 */
const infoFormElement = ref();
const searchFormElement = ref();
const gridElement = ref();
const gridElement2 = ref();
/*
 * 검색 폼과 그리드
 */
/** @type {dhx.Form} */
let searchForm;
/** @type {dhx.Form} */
let infoForm;
/** @type {dhx.Grid} */
let grdList2;
/** @type {dhx.Layout} */
let grdListLayout2;
/** @type {dhx.Grid} */
let grdList3;
/** @type {dhx.Layout} */
let grdListLayout3;
////////////
// 데이터 //
////////////
/**
 * 데이터를 저장한다.
 * @type {DataCollectionEx}
 */
const dsList2 = new DataCollectionEx();
const dsList3 = new DataCollectionEx();

////////////////////////
// 생명주기 이벤트 훅 //
////////////////////////

// 컴포넌트가 로드됨
onMounted(async () => {
    // 검색 폼 초기화
    searchForm = new dhx.Form(searchFormElement.value, {
        css: "search-form",
        cols: [
            {
                padding: 0,
                name: "searchType", type: "select", width: 120, labelPosition: "left", labelWidth: 0,
                options: [
                    {
                        value: "",
                        content: "부서",
                    },
                    {
                        value: "rcvUserId",
                        content: "아이디",
                    },
                    {
                        value: "rcvUserNm",
                        content: "이름",
                    },
                    {
                        value: "emlAddr",
                        content: "이메일주소",
                    },
                ]
            },
            {
                padding: "0 0 0 8px",
                rows: [
                    { name: "searchKeyword", type: "input", width: 400, labelPosition: "left", }
                ]
            },
        ]
    });



    // 조회 결과 그리드를 설정한다.
    grdList2 = new dhx.Grid(null, {
        css: "jn-grid",
        rowHeight: 34,
        headerRowHeight: 30,
        selection: "cell",
        editable: true,
        sortable: false,
        data: dsList2,
        autoWidth: true,
        leftSplit: 3,
        columns: [
            { id: "rowCheck", width: 48, header: [{ htmlEnable: true, text: "<input type='checkbox'>", align: "center" }], type: "boolean" },
            { id: "deptNm", gravity: 120, header: [{ text: "부서", align: "center" }], editable: false },
            { id: "memberId", gravity: 80, header: [{ text: "아이디", align: "center" }], editable: false },
            { id: "memberNmKr", gravity: 80, header: [{ text: "이름", align: "center" }], editable: false },
            { id: "emlAddr", gravity: 120, header: [{ text: "이메일주소", align: "center" }], editable: false },
        ]
    });

    grdListLayout2 = new dhx.Layout(gridElement.value, {
        rows: [
            { id: "grid" }
        ]
    });



    infoForm = new dhx.Form(infoFormElement.value, {
        rows: [
            {
                cols: [
                    { name: "emlId", type: "input", width: 320, label: "메일 ID", labelPosition: "left", labelWidth: 110, readOnly: "true", },
                    { name: "emlTtl", type: "input", width: 500, label: "메일제목", labelPosition: "left", labelWidth: 150, },
                    { name: "emlTmpltNm", type: "input", width: 320, label: "템플릿 명", labelPosition: "left", labelWidth: 150, readOnly: "true" },
                    { name: "emlTmpltId", type: "input", label: "템플릿 ID", hidden: true },
                    { name: "searchTmplt", type: "button", css: "jn-btn-form-accent", width: 26, height: 26 },
                ],
            },
            {
                cols: [
                    { name: "sndCn", type: "textarea", width: "80%", height: 350, label: "발송내용", labelPosition: "left", labelWidth: 110 },
                ]
            }
        ]

    });

    infoForm.events.on("ButtonClick", async () => {
        const modalData = await openModal(MalTmpltSearchPopup, {
        });
        infoForm.setValue({ ...modalData })
    });

    grdListLayout2.getCell("grid").attach(grdList2);

    // 조회 결과 그리드를 설정한다.
    grdList3 = new dhx.Grid(null, {
        css: "jn-grid",
        rowHeight: 34,
        headerRowHeight: 30,
        selection: "cell",
        editable: true,
        sortable: false,
        data: dsList3,
        autoWidth: true,
        leftSplit: 3,
        columns: [
            { id: "rowCheck", width: 48, header: [{ htmlEnable: true, text: "<input type='checkbox'>", align: "center" }], type: "boolean" },
            { id: "rcvEmlAddr", gravity: 120, header: [{ text: "이메일주소", align: "center" }] },
            { id: "emlSvr", gravity: 80, header: [{ text: "메일서버", align: "center" }] },
            { id: "rcvUserNm", gravity: 80, header: [{ text: "받는사람", align: "center" }] },
        ]
    });

    grdListLayout3 = new dhx.Layout(gridElement2.value, {
        rows: [
            { id: "grid" }
        ]
    });

    grdListLayout3.getCell("grid").attach(grdList3);

    grdList3.events.on("cellClick", editOnSingleClick);

    await search();
});
// 컴포넌트가 언로드됨
onUnmounted(() => {
    grdList2?.destructor();
    grdListLayout2?.destructor();
    grdList3?.destructor();
    grdListLayout3?.destructor();
    searchForm?.destructor();
    infoForm?.destructor();
});

/////////////////
// 사용자 함수 //
/////////////////

/**
 * 메일발송 목록을 조회한다.
 */
async function search() {
    const result = await postData("mal/emlSndMaster/getEmlSndUser.do", {
        dsSearch: searchForm.getValue()
    });

    const data = result.dsList2;
    dsList2.parse(data);
}

async function addRow() {
    grdList3.data.add({});
}

async function removeRow() {
    const checked = dsList3.getCheckedRowIds("rowCheck");
    dsList3.remove(checked);
}

async function sndMal() {
    const checkedRows = grdList3.data.getCheckedRows("rowCheck");

    const formData = infoForm.getValue();

    if (isEmpty(formData.emlTtl)) {
        await showAlert("메일 제목을 입력해주세요.");
        return;
    } else if (checkedRows.length === 0) {
        await showAlert("보낼 대상이 없습니다.");
        return;
    } else if (isEmpty(formData.sndCn)) {
        await showAlert("발송내용을 입력해주세요.");
        return;
    }

    for (const checkedRow of checkedRows) {
        console.log(typeof checkedRow.rcvEmlAddr);
        if ((checkedRow.rcvEmlAddr === "" || checkedRow.rcvEmlAddr === undefined)) {
            await showAlert("이메일 주소를 확인해주세요.");
            return;
        }
    }

    const data = await postData("mal/emlSndMaster/getEmlSnd.do", {
        dsList: infoForm.getValue(),
        dsList3: checkedRows
    });

    if (data.callbackMsg === "success") {
        await showAlert("메일 발송에 성공하였습니다.");
        await search();
    } else {
        await showAlert("메일 발송 중 오류가 발생했습니다.");
    }
}

async function init() {
    infoForm.clear();
    grdList3.data.removeAll();
}

async function sndData() {
    const checkedRows = grdList2.data.getCheckedRows("rowCheck");
    const checkedRows2 = grdList3.data.getCheckedRows("rowCheck");

    let duplicateEmailAlertShown = false;

    for (const checkedRow of checkedRows) {
        for (const checkedRow2 of checkedRows2) {
            if (checkedRow2.rcvEmlAddr === checkedRow.emlAddr) {
                if (!duplicateEmailAlertShown) {
                    await showAlert("중복된 이메일 주소가 있습니다.");
                    duplicateEmailAlertShown = true;
                    return;
                }
            }
        }
    }

    checkedRows.forEach(checkedRow => {
        const emlSvr = checkedRow.emlAddr.split("@")[1];
        grdList3.data.add({ rcvEmlAddr: checkedRow.emlAddr, emlSvr: emlSvr, rcvUserNm: checkedRow.memberNmKr });
    });
}
</script>

<template>
    <div class="jn-page">
        <div style="height: calc(100% - 50%);">
            <div class="jn-title-container">
                <h1 class="jn-title">메일 발송</h1>
                <div class="jn-btn-group">
                    <button class="jn-btn-form-accent icon-save" @click="sndMal">발송</button>
                    <button class="jn-btn-form-accent icon-delete" @click="init">초기화</button>
                </div>
            </div>

            <div class="jn-container">
                <div ref="infoFormElement"></div>
            </div>
        </div>
        <div class="jn-container" style="height: calc(100% - 90%)">
            <div class="jn-title-container">
                <h2 class="jn-sub-title-01">첨부파일</h2>
            </div>
        </div>

        <div class="jn-row" style="display: flex; flex-direction: row; height: 545px;">
            <div style="--cell-weight: 0.55;">
                <div class="jn-title-container">
                    <h2 class="jn-sub-title-01" style="flex: none;">대상 검색</h2>
                    <div ref="searchFormElement" style="flex: 1 0 0;"></div>
                    <div class="jn-btn-group">
                        <button class="jn-btn-form-accent icon-search" @click="search">조회</button>
                    </div>
                </div>
                <div ref="gridElement" style="height: 500px;"></div>
            </div>
            <div style="width: 26px; height: 100%; display: flex; flex-direction: column; justify-content: center;">
                <button class="jn-btn-form icon-arr-left" style="height: 26px; width: 26px;" @click=""></button>
                <button class="jn-btn-form icon-arr-right" style="height: 26px; width: 26px;" @click="sndData"></button>
            </div>
            <div style="--cell-weight: 0.45;">
                <div class="jn-title-container">
                    <h2 class="jn-sub-title-01">발송 대상</h2>
                    <div class="jn-btn-group">
                        <button class="jn-btn-form icon-row-add" @click="addRow">행추가</button>
                        <button class="jn-btn-form icon-row-delete" @click="removeRow">행삭제</button>
                    </div>
                </div>

                <div ref="gridElement2" style="height: 500px;"></div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.jn-row {
    --rows: 1;
    --spacing: 15px;
    --cell-weight: calc(1 / var(--rows));

    &>* {
        float: left;
        margin-left: 15px;
        width: calc((100% - var(--spacing) * (var(--rows) - 1)) * var(--cell-weight));
        height: 100%;

        &:first-child {
            margin-left: 0;
        }
    }
}

:deep(.search-form) {

    & .dhx_form-group,
    & .dhx_form-group--inline {
        margin-top: 0 !important;
        margin-bottom: 0 !important;
    }
}
</style>