<script setup>
import dhx from "dhx-suite-package";
import { onMounted, onUnmounted, ref } from "vue";
import { getModuleIdCombo, getCommonCodeCombo, toSelectOptions, getSystemIdCombo } from "@/util/combo";
import { DataCollectionEx } from "@/util/data";
import { postData } from "@/util/ajax";
import { editOnSingleClick } from "@/util/grid";
import { showAlert, showConfirm } from "@/util/popup";
import { useMessageStore } from "@/stores/message";
import { useSessionStore } from "@/stores/session";
import { datasetConverter } from "@/util/data/convert";

let session = useSessionStore();
const message = useMessageStore();

/*
 * 검색 폼과 그리드를 표시할 HTML 요소
 */
const searchFormElement = ref();
const grdRoleElement = ref();
const grdRoleMenuElement = ref();

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
let grdRoleMenu;
/** @type {dhx.Layout} */
let grdRoleMenuLayout;

////////////
// 데이터 //
////////////

const dsRole = new DataCollectionEx();
const dsRoleMenu = new DataCollectionEx();

////////////////////////
// 생명주기 이벤트 훅 //
////////////////////////

// 컴포넌트가 브라우저에 표시됨
onMounted(async () => {
    const {
        sysIdCombo,
        moduleIdCombo,
        moduleIdSearchCombo,
        useYnCombo,
        rolePermitCombo
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
                    { name: "sysId", type: "select", width: 310, label: "시스템", labelPosition: "left", labelWidth: 100, value: session.user.sysId, options: toSelectOptions(sysIdCombo) },
                ]
            },
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
                    { name: "moduleId", type: "select", width: 310, label: "모듈구분", labelPosition: "left", labelWidth: 100, options: toSelectOptions([{ id: "", value: "전체" }]), value: "" }
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
            { id: "rolePermit", width: 224, header: [{ text: "권한등급", align: "center" }], editable: true, editorType: "select", options: rolePermitCombo },
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
    grdRoleMenu = new dhx.TreeGrid(null, {
        css: "jn-grid",
        rowHeight: 34,
        headerRowHeight: 30,
        selection: "row",
        editable: false,
        keyNavigation: true,
        sortable: false,
        data: dsRoleMenu,
        rightSplit: 5,
        columns: [
            { id: "treeText", width: 320, header: [{ text: "메뉴기능명", align: "center" }] },
            { id: "description", width: 200, header: [{ text: "설명", align: "center" }] },
            { id: "indctYn", width: 72, header: [{ text: "메뉴 표시", align: "center" }], type: "boolean", editable: true },
            { id: "authCnt", width: 56, header: [{ text: "선택한 하위 기능", align: "center", colspan: 3 }], type: "number", template: (value, row) => (row.funcAt === "Y" ? "" : value) },
            { id: "col5", width: 24, header: [], template: (_, row) => (row.funcAt === "Y" ? "" : "/"), align: "center" },
            { id: "funcCnt", width: 56, header: [], type: "number", template: (value, row) => (row.funcAt === "Y" ? "" : value) },
            { id: "authYn", width: 48, header: [{ text: "사용", align: "center" }], type: "boolean", editable: true },
        ]
    });

    grdRoleMenuLayout = new dhx.Layout(grdRoleMenuElement.value, {
        rows: [
            { id: "grid" }
        ]
    });

    grdRoleMenuLayout.getCell("grid").attach(grdRoleMenu);

    // 그리드 이벤트 설정
    grdRole.events.on("beforeEditStart", () => {
        return false;
    });

    grdRole.events.on("AfterSelect", async row => {
        // 권한 선택 시 상세 목록 조회
        dsRole.setCheckedAll("rowCheck", 0);
        dsRole.update(row.id, { rowCheck: 1 });
        await searchRoleMenuList();
    });

    grdRoleMenu.events.on("cellClick", editOnSingleClick);
    grdRoleMenu.events.on("beforeEditStart", (_, col) => {
        return col.id === "authYn";
    });

    grdRoleMenu.events.on("afterEditEnd", (value, row, col) => {
        if (col.id === "authYn") {
            updateChecked(row.id, "authYn", value);
            updateCount(row.id);
        }
    });

    searchForm.events.on("change", (name, value) => {
        if (name == "sysId") {
            /** @type {import("dhx-suite-package/codebase/types/ts-form/sources/elements/select").Select} */
            const moduleIdSelect = searchForm.getItem("moduleId");
            const options = moduleIdSearchCombo.filter(e => e.id == "" || e.sysId === value);
            moduleIdSelect.setOptions(toSelectOptions(options));
        }
    });

    await searchRoleList();
});

// 컴포넌트가 제거됨
onUnmounted(() => {
    grdRole?.destructor();
    grdRoleLayout?.destructor();
    grdRoleMenu?.destructor();
    grdRoleMenuLayout?.destructor();
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
    const moduleIdComboPromise = getModuleIdCombo();
    const moduleIdSearchComboPromise = getModuleIdCombo("A");
    const commonComboPromise = getCommonCodeCombo({
        useYnCombo: ["SM", "USE_YN"],
        useYnSearchCombo: ["SM", "USE_YN", "A"],
        rolePermitCombo: ["SM", "ROLE_PERMIT"]
    });

    const data = await Promise.all([sysIdComboPromise, moduleIdComboPromise, moduleIdSearchComboPromise, commonComboPromise]);
    return {
        sysIdCombo: data[0],
        moduleIdCombo: data[1],
        moduleIdSearchCombo: data[2],
        useYnCombo: data[3].useYnCombo,
        useYnSearchCombo: data[3].useYnSearchCombo,
        rolePermitCombo: data[3].rolePermitCombo
    };
}

/**
 * 권한 목록을 조회한다.
 */
async function searchRoleList() {
    const result = await postData("sm/getRoleList.do", {
        dsSearch: searchForm?.getValue()
    });

    dsRole.parse(result.dsRole);
}

/**
 * 권한별 사용자 목록을 조회한다.
 */
async function searchRoleMenuList() {
    const cell = grdRole.selection.getCell();

    if (cell == null) {
        dsRoleMenu.parse([]);
    }

    const row = cell.row;

    const result = await postData("sm/getRoleMenuSearch.do", {
        dsSearch: {
            ...(searchForm?.getValue() ?? {}),
            roleCode: row.roleCode
        }
    });

    const data = datasetConverter(result.dsRoleMenu)
        .checkbox("indctYn", ["N", "Y"], [false, true])
        .checkbox("authYn", ["N", "Y"], [false, true])
        .convert();
    grdRoleMenu.data.parse(data);
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

    const confirmResult = await showConfirm(message.getMessage("CM_CFM_BEFORE_SAVE"));
    if (!confirmResult)
        return;

    const dsRoleMenuData = datasetConverter(dsRoleMenu.getCheckedRows("rowCheck"))
        .checkbox("authYn", [false, true], ["N", "Y"])
        .convert();
    for (const item of dsRoleMenuData) {
        item.roleCode = cell.row.roleCode;
        item.roleNm = cell.row.roleNm;
    }

    const result = await postData("sm/setRoleMenu.do", {
        dsRoleMenu: dsRoleMenuData
    });

    if (result.callbackMsg === "success") {
        await showAlert(message.getMessage("CM_MSG_SAVE_SUCCESS"));
        await searchRoleMenuList();
    } else {
        await showAlert("저장 중 오류가 발생하였습니다.");
    }
}

function updateChecked(id, col, value) {
    dsRoleMenu.eachChild(id, e => { dsRoleMenu.update(e.id, { [col]: value }); }, true);
    dsRoleMenu.eachParent(id, e => {
        let checked = true;
        dsRoleMenu.eachChild(e.id, c => {
            checked = checked && c.authYn;
        });
        dsRoleMenu.update(e.id, { authYn: checked });
    });
}

function updateCount(id) {
    getTotalAuthCnt(id);
    dsRoleMenu.eachParent(id, e => {
        let cnt = 0;
        dsRoleMenu.eachChild(e.id, c => {
            if (c.funcAt === "Y") {
                cnt += c.authYn ? 1 : 0;
            } else {
                cnt += c.authCnt ?? 0;
            }
        });
        dsRoleMenu.update(e.id, { authCnt: cnt });
    });

    function getTotalAuthCnt(id) {
        let authCnt = 0;
        dsRoleMenu.eachChild(id, e => {
            if (e.funcAt === "Y") {
                authCnt += e.authYn ? 1 : 0;
            } else {
                authCnt += getTotalAuthCnt(e.id);
            }
        });
        dsRoleMenu.update(id, { authCnt });
        return authCnt;
    }
}
</script>

<template>
    <div class="jn-page">
        <div class="jn-title-container">
            <h1 class="jn-title">권한별 메뉴 관리</h1>
            <div class="jn-btn-group">
                <button @click="searchRoleList">조회</button>
                <button class="jn-btn-save" @click="save">저장</button>
            </div>
        </div>

        <div ref="searchFormElement"></div>

        <div class="jn-container jn-row" style="height: calc(100% - 143px); --rows: 2">
            <div style="--cell-weight: 0.55;">
                <div class="jn-title-container">
                    <h2 class="jn-sub-title-01">권한 목록</h2>
                    <div class="jn-btn-group">
                        <button class="jn-btn-form icon-row-add" @click="addRow">행추가</button>
                        <button class="jn-btn-form icon-row-delete" @click="removeRow">행삭제</button>
                    </div>
                </div>
                <div ref="grdRoleElement" style="height: calc(100% - 45px);"></div>
            </div>
            <div style="--cell-weight: 0.45;">
                <div class="jn-title-container">
                    <h2 class="jn-sub-title-01">권한별 메뉴 목록</h2>
                    <div class="jn-btn-group">
                        <button class="jn-btn-form icon-tree-expand" @click="expandAll()">전체펼침</button>
                        <button class="jn-btn-form icon-tree-collapse" @click="collapseAll()">전체접힘</button>
                    </div>
                </div>
                <div ref="grdRoleMenuElement" style="height: calc(100% - 45px);"></div>
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
