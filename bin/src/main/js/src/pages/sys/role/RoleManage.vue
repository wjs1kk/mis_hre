<script setup>
import dhx from "dhx-suite-package";
import { onMounted, onUnmounted, ref } from "vue";
import { getModuleIdCombo, getCommonCodeCombo, getSystemIdCombo, toSelectOptions } from "@/util/combo";
import { DataCollectionEx, rowStatusTemplate } from "@/util/data";
import { postData } from "@/util/ajax";
import { editOnSingleClick } from "@/util/grid";
import { showAlert, showConfirm } from "@/util/popup";
import { useMessageStore } from "@/stores/message";

const message = useMessageStore();

/**
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
let grdRole;
/** @type {dhx.Layout} */
let grdRoleLayout;

////////////
// 데이터 //
////////////

const dsRole = new DataCollectionEx();

////////////////////////
// 생명주기 이벤트 훅 //
////////////////////////

// 컴포넌트가 로드됨
onMounted(async () => {
    const {
        sysIdCombo,
        moduleIdCombo,
        moduleIdSearchCombo,
        useYnCombo,
        useYnSearchCombo,
        rolePermitCombo
    } = await getCombo();

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
                    { name: "moduleId", type: "select", width: 310, label: "모듈구분", labelPosition: "left", labelWidth: 100, options: toSelectOptions([{ id: "", value: "전체" }]), value: "" }
                ]
            },
            {
                padding: "0 60px 0 0",
                rows: [
                    { name: "useYn", type: "select", width: 310, label: "사용여부", labelPosition: "left", labelWidth: 100, options: toSelectOptions(useYnSearchCombo), value: "" }
                ]
            },
        ]
    });

    grdRole = new dhx.Grid(null, {
        css: "jn-grid",
        rowHeight: 34,
        headerRowHeight: 30,
        selection: "cell",
        editable: true,
        keyNavigation: true,
        sortable: false,
        data: dsRole,
        leftSplit: 3,
        columns: [
            { id: "rn", width: 48, header: [{ text: "순번", align: "center" }], editable: false },
            { id: "rowCheck", width: 48, header: [{ htmlEnable: true, text: "<input type='checkbox'>", align: "center" }], type: "boolean", align: "center" },
            { id: "rowStatus", width: 48, header: [{ text: "상태", align: "center" }], align: "center", editable: false, template: rowStatusTemplate },
            { id: "roleCode", width: 160, header: [{ text: "권한코드", align: "center" }] },
            { id: "roleNm", width: 240, header: [{ text: "권한명", align: "center" }] },
            { id: "sysId", width: 160, header: [{ text: "시스템", align: "center" }], editorType: "select", options: sysIdCombo },
            { id: "moduleId", width: 160, header: [{ text: "모듈명", align: "center" }], editorType: "select", options: (_, row) => moduleIdCombo.filter(e => e.sysId === row.sysId) },
            { id: "rolePermit", width: 160, header: [{ text: "권한등급", align: "center" }], editorType: "select", options: rolePermitCombo },
            { id: "useYn", width: 80, header: [{ text: "사용여부", align: "center" }], editorType: "select", options: useYnCombo },
            { id: "roleDc", width: 640, header: [{ text: "비고", align: "center" }] },
        ]
    });

    grdRoleLayout = new dhx.Layout(gridElement.value, {
        rows: [
            { id: "grid" }
        ]
    });

    grdRoleLayout.getCell("grid").attach(grdRole);

    grdRole.events.on("cellClick", editOnSingleClick);

    searchForm.events.on("change", (name, value) => {
        if (name == "sysId") {
            /** @type {import("dhx-suite-package/codebase/types/ts-form/sources/elements/select").Select} */
            const moduleIdSelect = searchForm.getItem("moduleId");
            const options = moduleIdSearchCombo.filter(e => e.id == "" || e.sysId === value);
            moduleIdSelect.setOptions(toSelectOptions(options));
        }
    });

    await search();
});

// 컴포넌트가 언로드됨
onUnmounted(() => {
    grdRole?.destructor();
    grdRoleLayout?.destructor();
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
async function search() {
    const result = await postData("sm/getRoleSearch.do", {
        dsSearch: searchForm.getValue()
    });

    // 체크박스 값을 변환한다.
    const data = result.dsRole;
    dsRole.parse(data);
}

async function save() {
    const confirmResult = await showConfirm(message.getMessage("CM_CFM_BEFORE_SAVE"));
    if (!confirmResult)
        return;

    const dsRoleData = dsRole.getCheckedRows("rowCheck");

    const result = await postData("sm/setRoleList.do", {
        dsRole: dsRoleData
    });

    if (result.callbackMsg === "success") {
        await showAlert(message.getMessage("CM_MSG_SAVE_SUCCESS"));
        await search();
    } else {
        await showAlert("저장 중 오류가 발생하였습니다.");
    }
}

async function addRow() {
    dsRole.add({
        useYn: "Y"
    });
}

async function removeRow() {
    const checked = dsRole.getCheckedRowIds("rowCheck");
    dsRole.remove(checked);
}

</script>

<template>
    <div class="jn-page">
        <div class="jn-title-container">
            <h1 class="jn-title">권한 관리</h1>
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
