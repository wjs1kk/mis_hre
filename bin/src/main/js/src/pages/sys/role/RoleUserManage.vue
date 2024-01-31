<script setup>
import dhx from "dhx-suite-package";
import { onMounted, onUnmounted, ref } from "vue";
import { getModuleIdCombo, getCommonCodeCombo, toSelectOptions } from "@/util/combo";
import { DataCollectionEx, rowStatusTemplate } from "@/util/data";
import { postData } from "@/util/ajax";
import { editOnSingleClick } from "@/util/grid";
import { openModal, showAlert, showConfirm } from "@/util/popup";
import { useMessageStore } from "@/stores/message";
import RoleUserAddPopup from "./RoleUserAddPopup.vue";

const message = useMessageStore();

/*
 * 검색 폼과 그리드를 표시할 HTML 요소
 */
const searchFormElement = ref();
const grdRoleElement = ref();
const grdRoleUserElement = ref();

/*
 * 검색 폼과 그리드
 */
/** @type {dhx.Form} */
let searchForm;
/** @type {dhx.Grid} */
let grdRole;
/** @type {dhx.Layout} */
let grdRoleLayout;
/** @type {dhx.Grid} */
let grdRoleUser;
/** @type {dhx.Layout} */
let grdRoleUserLayout;

////////////
// 데이터 //
////////////

const dsRole = new DataCollectionEx();
const dsRoleUser = new DataCollectionEx();

////////////////////////
// 생명주기 이벤트 훅 //
////////////////////////

// 컴포넌트가 브라우저에 표시됨
onMounted(async () => {
    const {
        moduleIdCombo,
        useYnCombo,
        useYnSearchCombo
    } = await getCombo();

    // 검색 폼 초기화
    searchForm = new dhx.Form(searchFormElement.value, {
        padding: "15px 20px",
        height: 60,
        css: "jn-search-form",
        cols: [
            {
                padding: "0 60px 0 0",
                rows: [
                    { name: "roleCode", type: "input", width: 310, label: "권한코드", labelPosition: "left", labelWidth: 100 }
                ]
            },
            {
                padding: "0 60px 0 0",
                rows: [
                    { name: "roleNm", type: "input", width: 310, label: "권한명", labelPosition: "left", labelWidth: 100 }
                ]
            },
            {
                padding: "0 60px 0 0",
                rows: [
                    { name: "useYn", type: "select", width: 310, label: "사용여부", labelPosition: "left", labelWidth: 100, options: toSelectOptions(useYnSearchCombo), value: "" }
                ]
            }
        ]
    });

    // 권한 목록 그리드 초기화
    grdRole = new dhx.Grid(null, {
        css: "jn-grid",
        rowHeight: 34,
        headerRowHeight: 30,
        selection: "row",
        editable: false,
        keyNavigation: true,
        sortable: false,
        data: dsRole,
        leftSplit: 2,
        columns: [
            { id: "rn", width: 48, header: [{ text: "순번", align: "center" }] },
            { id: "rowCheck", width: 48, header: [{ htmlEnable: true, text: "<input type='checkbox'>", align: "center" }], type: "boolean", align: "center", editable: true },
            { id: "roleCode", width: 160, header: [{ text: "권한코드", align: "center" }] },
            { id: "roleNm", width: 224, header: [{ text: "권한명", align: "center" }] },
            { id: "moduleId", width: 160, header: [{ text: "모듈명", align: "center" }], editable: true, editorType: "select", options: (_, row) => moduleIdCombo.filter(e => e.sysId === row.sysId) },
            { id: "useYn", width: 72, header: [{ text: "사용여부", align: "center" }], editable: true, editorType: "select", options: useYnCombo },
        ]
    });

    grdRoleLayout = new dhx.Layout(grdRoleElement.value, {
        rows: [
            { id: "grid" }
        ]
    });
    grdRoleLayout.getCell("grid").attach(grdRole);

    // 권한별 사용자 그리드 초기화
    grdRoleUser = new dhx.Grid(null, {
        css: "jn-grid",
        rowHeight: 34,
        headerRowHeight: 30,
        selection: "cell",
        editable: true,
        keyNavigation: true,
        sortable: false,
        data: dsRoleUser,
        leftSplit: 3,
        columns: [
            { id: "rn", width: 48, header: [{ text: "순번", align: "center" }], editable: false },
            { id: "rowCheck", width: 48, header: [{ htmlEnable: true, text: "<input type='checkbox'>", align: "center" }], type: "boolean", align: "center", editable: true },
            { id: "rowStatus", width: 48, header: [{ text: "상태", align: "center" }], align: "center", template: rowStatusTemplate, editable: false },
            { id: "memberId", width: 96, header: [{ text: "회원 ID", align: "center" }], editable: false },
            { id: "userNm", width: 96, header: [{ text: "사용자명", align: "center" }], editable: false },
            { id: "deptNm", width: 160, header: [{ text: "부서명", align: "center" }], editable: false },
            { id: "jobPosition", width: 160, header: [{ text: "직위", align: "center" }], editable: false },
            { id: "updtReason", width: 288, header: [{ text: "수정사유", align: "center" }], editable: true },
        ]
    });

    grdRoleUserLayout = new dhx.Layout(grdRoleUserElement.value, {
        rows: [
            { id: "grid" }
        ]
    });

    grdRoleUserLayout.getCell("grid").attach(grdRoleUser);

    // 그리드 이벤트 설정
    grdRole.events.on("beforeEditStart", () => {
        return false;
    });

    grdRole.events.on("AfterSelect", async row => {
        dsRole.setCheckedAll("rowCheck", 0);
        dsRole.update(row.id, { rowCheck: 1 });
        await searchRoleUserList();
    });

    grdRoleUser.events.on("cellClick", editOnSingleClick);
    grdRoleUser.events.on("beforeEditStart", (_, col) => {
        return !(col.id !== "rowCheck" && col.id !== "updtReason");
    });

    await searchRoleList();
});

// 컴포넌트가 제거됨
onUnmounted(() => {
    grdRole?.destructor();
    grdRoleLayout?.destructor();
    grdRoleUser?.destructor();
    grdRoleUserLayout?.destructor();
    searchForm?.destructor();
});

/////////////////
// 사용자 함수 //
/////////////////

/**
 * 콤보 박스 목록을 조회한다.
 */
async function getCombo() {
    const moduleIdSearchComboPromise = getModuleIdCombo("A", null, true);
    const commonComboPromise = getCommonCodeCombo({
        useYnCombo: ["SM", "USE_YN"],
        useYnSearchCombo: ["SM", "USE_YN", "A"],
    });

    const data = await Promise.all([moduleIdSearchComboPromise, commonComboPromise]);
    return {
        moduleIdCombo: data[0],
        useYnCombo: data[1].useYnCombo,
        useYnSearchCombo: data[1].useYnSearchCombo,
    };
}

/**
 * 권한 목록을 조회한다.
 */
async function searchRoleList() {
    const result = await postData("sm/getRoleList.do", {
        dsSearch: searchForm?.getValue()
    });

    const data = result.dsRole;
    dsRole.parse(data);
}

/**
 * 권한별 사용자 목록을 조회한다.
 */
async function searchRoleUserList() {
    const cell = grdRole.selection.getCell();

    if (cell == null) {
        dsRoleUser.parse([]);
    }

    const row = cell.row;

    const result = await postData("sm/getRoleUserSearch.do", {
        dsSearch: {
            ...(searchForm?.getValue() ?? {}),
            searchRoleCode: row.roleCode
        }
    });

    const data = result.dsRoleUser;
    grdRoleUser.data.parse(data);
}

/**
 * 권한별 사용자 목록을 저장한다.
 */
async function save() {
    const cell = grdRole.selection.getCell();

    if (cell == null) {
        await showAlert("권한을 선택하세요.");
        return;
    }

    const dsRoleUserData = dsRoleUser.getCheckedRows("rowCheck");
    for (const item of dsRoleUserData) {
        item.roleCode = cell.row.roleCode;
        item.roleNm = cell.row.roleNm;
    }

    const confirmResult = await showConfirm(message.getMessage("CM_CFM_BEFORE_SAVE"));
    if (!confirmResult)
        return;

    const result = await postData("sm/setRoleUser.do", {
        dsRoleUser: dsRoleUserData
    });

    if (result.callbackMsg === "success") {
        await showAlert(message.getMessage("CM_MSG_SAVE_SUCCESS"));
        await searchRoleUserList();
    } else {
        await showAlert("저장 중 오류가 발생하였습니다.");
    }
}

async function addRow() {
    const cell = grdRole.selection.getCell();

    if (cell == null) {
        await showAlert("권한을 선택하세요.");
        return;
    }

    const row = cell.row;
    const { users } = await openModal(RoleUserAddPopup, {
        props: {
            roleCode: row.roleCode
        }
    });

    if (users == null) {
        return;
    }

    for (const item of users) {
        dsRoleUser.add({
            userId: item.userId,
            memberId: item.memberId,
            userNm: item.userNm,
            deptCode: item.deptCode,
            deptNm: item.deptNm,
            jobPosition: item.jobPosition,
            roleCode: row.roleCode,
            useYn: "Y"
        });
    }
}

async function removeRow() {
    const checked = dsRoleUser.getCheckedRowIds("rowCheck");
    dsRoleUser.remove(checked);
}

</script>

<template>
    <div class="jn-page">
        <div class="jn-title-container">
            <h1 class="jn-title">권한별 사용자 관리</h1>
            <div class="jn-btn-group">
                <button @click="searchRoleList">조회</button>
                <button class="jn-btn-save" @click="save">저장</button>
            </div>
        </div>

        <div ref="searchFormElement"></div>

        <div class="jn-container jn-row" style="height: calc(100% - 143px); --rows: 2">
            <div style="--cell-weight: 0.45;">
                <div class="jn-title-container">
                    <h2 class="jn-sub-title-01">권한 목록</h2>
                    <div class="jn-btn-group">
                        <button class="jn-btn-form icon-row-add" @click="addRow">행추가</button>
                        <button class="jn-btn-form icon-row-delete" @click="removeRow">행삭제</button>
                    </div>
                </div>
                <div ref="grdRoleElement" style="height: calc(100% - 45px);"></div>
            </div>
            <div style="--cell-weight: 0.55;">
                <div class="jn-title-container">
                    <h2 class="jn-sub-title-01">권한별 사용자 목록</h2>
                    <div class="jn-btn-group">
                        <button class="jn-btn-form icon-row-add" @click="addRow">행추가</button>
                        <button class="jn-btn-form icon-row-delete" @click="removeRow">행삭제</button>
                    </div>
                </div>
                <div ref="grdRoleUserElement" style="height: calc(100% - 45px);"></div>
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
</style>
