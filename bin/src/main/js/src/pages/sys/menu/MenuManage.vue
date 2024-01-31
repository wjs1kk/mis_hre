<script setup>
import dhx from "dhx-suite-package";
import { onMounted, ref } from "vue";
import { useMessageStore } from "@/stores/message";
import { useSessionStore } from "@/stores/session";
import ProgramSearchPopup from "@/pages/sys/prog/ProgramSearchPopup.vue";
import { postData } from "@/util/ajax";
import { getCommonCodeCombo, getSystemIdCombo, getModuleIdCombo, toSelectOptions } from "@/util/combo";
import { DataCollectionEx, rowStatusTemplate } from "@/util/data";
import { datasetConverter } from "@/util/data/convert";
import { showAlert, showConfirm, openModal } from "@/util/popup";
import { validator } from "@/util/data/validate";

/*
 * 검색 폼과 그리드를 연결할 HTML 요소
 */
let searchFormElement = ref();
let gridElement = ref();

/**
 * 검색 폼
 */
let searchForm;
let grdMenu;
let grdMenuLayout;

// 공통 메시지 기능을 사용한다.
let message = useMessageStore();
// 사용자 세션 졍보를 사용한다.
let session = useSessionStore();

////////////
// 데이터 //
////////////

/**
 * 메뉴 목록 데이터를 저장한다.
 * @type {DataCollectionEx}
 */
let dsMenu = new DataCollectionEx();

/////////////////
// 생명주기 훅 //
/////////////////

onMounted(async () => {
    const { sysIdCombo, moduleIdCombo, menuTyCombo, menuTySearchCombo } = await getCombo();
    searchForm = new dhx.Form(searchFormElement.value, {
        padding: "15px 20px",
        height: 94,
        css: "jn-search-form",
        cols: [
            {
                padding: "0 60px 0 0",
                rows: [
                    { name: "sysId", type: "select", width: 310, label: "시스템", labelPosition: "left", labelWidth: 100, value: session.user.sysId, options: toSelectOptions(sysIdCombo) },
                    { name: "upperMenuId", type: "input", width: 310, label: "상위 메뉴 ID", labelPosition: "left", labelWidth: 100 }
                ]
            },
            {
                padding: "0 60px 0 0",
                rows: [
                    { name: "menuId", type: "input", width: 310, label: "메뉴 ID", labelPosition: "left", labelWidth: 100 },
                    { name: "progId", type: "input", width: 310, label: "프로그램 ID", labelPosition: "left", labelWidth: 100 }
                ]
            },
            {
                padding: "0 60px 0 0",
                rows: [
                    { name: "menuNm", type: "input", width: 310, label: "메뉴명", labelPosition: "left", labelWidth: 100 }
                ]
            },
            {
                padding: "0 60px 0 0",
                rows: [
                    { name: "menuTy", type: "input", width: 310, label: "메뉴 타입", labelPosition: "left", labelWidth: 100, options: toSelectOptions(menuTySearchCombo), value: "" }
                ]
            }
        ]
    });

    grdMenu = new dhx.TreeGrid(null, {
        css: "jn-grid",
        autoWidth: true,
        rowHeight: 34,
        headerRowHeight: 30,
        selection: "cell",
        editable: true,
        sortable: false,
        data: dsMenu,
        columns: [
            { id: "menuNm", width: 384, header: [{ text: "메뉴명", align: "center" }] },
            { id: "rowCheck", width: 48, header: [{ htmlEnable: true, text: "<input type='checkbox'>", align: "center" }], type: "boolean" },
            { id: "rowStatus", width: 48, header: [{ text: "상태", align: "center" }], editable: false, align: "center", template: rowStatusTemplate },
            { id: "menuId", width: 120, header: [{ text: "메뉴 ID", align: "center" }] },
            { id: "sysId", width: 120, header: [{ text: "시스템", align: "center" }], editorType: "select", editorConfig: { readOnly: true }, options: (_, row) => sysIdCombo.filter(() => searchForm.getValue().sysId === row.sysId), editable: false },
            { id: "progId", width: 120, header: [{ text: "프로그램 ID", align: "center" }], editable: false },
            { id: "progNm", width: 150, header: [{ text: "프로그램명", align: "center", colspan: 2 }], editable: false },
            { id: "progSearch", width: 48, header: [], editable: false, template: () => "<button class='search'></button>", htmlEnable: true },
            { id: "upperMenuId", width: 128, header: [{ text: "상위 메뉴 ID", align: "center" }], editable: false },
            { id: "moduleId", width: 128, header: [{ text: "모듈 ID", align: "center" }], editorType: "select", editorConfig: { readOnly: true }, options: moduleIdCombo },
            { id: "menuTy", width: 128, header: [{ text: "메뉴 타입", align: "center" }], editorType: "select", editorConfig: { readOnly: true }, options: menuTyCombo },
            { id: "mainUrl", width: 128, header: [{ text: "메뉴 URL", align: "center" }] },
            { id: "indctYn", width: 48, header: [{ text: "표시", align: "center" }], type: "boolean" },
            { id: "sortOrdr", width: 128, header: [{ text: "정렬 순서", align: "center" }], type: "number" },
        ],
        eventHandlers: {
            onclick: {
                async search(event, data) {
                    await selectProgram(data.row);
                }
            }
        }
    });

    grdMenuLayout = new dhx.Layout(gridElement.value, {
        rows: [
            { id: "grid" }
        ]
    });

    grdMenuLayout.getCell("grid").attach(grdMenu);

    await search();
});

/////////////////
// 사용자 함수 //
/////////////////

/**
 * 콤보 박스 목록을 조회한다.
 */
async function getCombo() {
    const sysIdComboPromise = getSystemIdCombo();
    const moduleIdComboPromise = getModuleIdCombo("C");
    const commonComboPromise = getCommonCodeCombo({
        menuTyCombo: ["SM", "PROG_TY", "C"],
        menuTySearchCombo: ["SM", "PROG_TY", "A"]
    });

    const result = await Promise.all([sysIdComboPromise, moduleIdComboPromise, commonComboPromise]);
    return {
        sysIdCombo: result[0],
        moduleIdCombo: result[1],
        menuTyCombo: result[2].menuTyCombo,
        menuTySearchCombo: result[2].menuTySearchCombo
    };
}

/**
 * 메뉴 목록을 조회한다.
 */
async function search() {
    const result = await postData("sm/getMenuManageList.do", { dsSearch: searchForm.getValue() });
    const dsMenuData = datasetConverter(result.dsMenu)
        .checkbox("indctYn", ["N", "Y"], [false, true])
        .convert();

    grdMenu.data.parse(dsMenuData);
}

/**
 * 메뉴 목록을 저장한다.
 */
async function save() {
    const validationResult = validator(grdMenu)
        .column("menuId", [["required"], ["maxLength", 50]])
        .column("menuNm", [["required"], ["maxLength", 300]])
        .column("mainUrl", [["maxLength", 50]])
        .validate();

    if (!validationResult)
        return;

    const result = await showConfirm(message.getMessage("CM_CFM_BEFORE_SAVE"));
    if (!result)
        return;

    let dsMenuData = dsMenu.getCheckedRows("rowCheck");
    dsMenuData = datasetConverter(dsMenuData)
        .checkbox("indctYn", [false, true], ["N", "Y"])
        .convert();

    const data = await postData("sm/saveMenuManageList.do", {
        dsMenu: dsMenuData
    });

    if (data.callbackMsg === "success") {
        await showAlert(message.getMessage("CM_MSG_SAVE_SUCCESS"));
        await search();
    } else {
        await showAlert("저장 중 오류가 발생하였습니다.");
    }
}

/**
 * 프로그램 선택 팝업을 표시한다.
 *
 * @param {Object.<string, *>} row 그리드에서 선택한 행 데이터
 */
async function selectProgram(row) {
    const result = await openModal(ProgramSearchPopup, {
        props: {
            sysId: row.sysId
        }
    });

    if (!result.canceled) {
        const program = result.programs[0] ?? {};
        grdMenu.data.update(row.id, { progId: program.progId, progNm: program.progNm });
    }
}

/**
 * 최상위 행을 추가한다.
 */
function addTopmostRow() {
    dsMenu.add({ sysId: searchForm.getValue().sysId });
}

/**
 * 동일 레벨에 행을 추가한다.
 */
function addSiblingRow() {
    const selected = grdMenu.selection.getCell().row;
    if (selected == null) {
        addTopmostRow();
        return;
    }

    const id = selected.id;

    const parent = dsMenu.getParent(id);
    dsMenu.add({ sysId: searchForm.getValue().sysId, upperMenuId: parent.menuId }, null, parent.id);
}

/**
 * 자식 행을 추가한다.
 */
function addChildRow() {
    const selected = grdMenu.selection.getCell().row;
    if (selected == null) {
        addTopmostRow();
        return;
    }

    const id = selected.id;
    dsMenu.add({ sysId: searchForm.getValue().sysId, upperMenuId: selected.menuId }, null, id);
}

/**
 * 선택한 행을 삭제한다.
 */
function deleteRow() {
    const checked = dsMenu.getCheckedRowIds("rowCheck");
    dsMenu.remove(checked);
}

/**
 * 전체 트리를 펼친다.
 */
function expandAll() {
    grdMenu.expandAll();
}

/**
 * 전체 트리를 접는다.
 */
function collapseAll() {
    grdMenu.collapseAll();
}

</script>

<template>
    <div class="jn-page">
        <div class="jn-title-container">
            <h1 class="jn-title">메뉴 관리</h1>
            <div class="jn-btn-group">
                <button @click="search()">조회</button>
                <button class="jn-btn-save" @click="save()">저장</button>
            </div>
        </div>

        <div ref="searchFormElement">
        </div>

        <div class="jn-container" style="height: calc(100% - 177px);">
            <div class="jn-title-container">
                <h2 class="jn-sub-title-01">검색 결과</h2>
                <div class="jn-btn-group">
                    <button class="jn-btn-form icon-tree-expand" @click="expandAll()">전체펼침</button>
                    <button class="jn-btn-form icon-tree-collapse" @click="collapseAll()">전체접힘</button>
                    <button class="jn-btn-form icon-row-add" @click="addSiblingRow()">같은 레벨 메뉴 추가</button>
                    <button class="jn-btn-form icon-row-add" @click="addChildRow()">하위 메뉴 추가</button>
                    <button class="jn-btn-form icon-row-delete" @click="deleteRow()">삭제</button>
                </div>
            </div>
            <div ref="gridElement" style="height: calc(100% - 45px);"></div>
        </div>
    </div>
</template>
