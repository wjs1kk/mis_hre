<script setup>
import dhx from "dhx-suite-package";
import { onMounted, onUnmounted, ref } from "vue";
import Popup from "@/components/popup/PopupBase.vue";
import { postData } from "@/util/ajax";
import { getCommonCodeCombo, getSystemIdCombo, toSelectOptions } from "@/util/combo";
import { DataCollectionEx } from "@/util/data";
import { showAlert, useModalContext } from "@/util/popup";

// 화면의 파라미터 정의
const props = defineProps({
    sysId: String
});

const formElement = ref();
const gridElement = ref();

let searchForm;
let grid;
let gridLayout;

const modal = useModalContext();

let dsProgram = new DataCollectionEx();

onMounted(async () => {
    const {
        sysIdCombo,
        progTyCombo,
        progTySearchCombo,
    } = await getCombo();

    searchForm = new dhx.Form(formElement.value, {
        css: "jn-search-form",
        padding: "15px 20px",
        cols: [
            {
                padding: "0 40px 0 0",
                rows: [
                    { name: "sysId", type: "input", hidden: true, value: props.sysId },
                    { name: "progId", type: "input", width: 320, label: "프로그램 ID", labelPosition: "left", labelWidth: 100 },
                    { name: "progTy", type: "select", width: 320, label: "프로그램 유형", labelPosition: "left", labelWidth: 100, value: "", options: toSelectOptions(progTySearchCombo), readOnly: true }
                ]
            },
            {
                padding: "0 40px 0 0",
                rows: [
                    { name: "progNm", type: "input", width: 400, label: "프로그램명", labelPosition: "left", labelWidth: 100 },
                    { name: "progUrl", type: "input", width: 400, label: "프로그램 URL", labelPosition: "left", labelWidth: 100 },
                ]
            }
        ]
    });

    grid = new dhx.Grid(null, {
        css: "jn-grid",
        columns: [
            { id: "rn", width: 48, header: [{ text: "순번", align: "center" }] },
            { id: "rowCheck", width: 48, header: [{ text: "선택", align: "center" }], type: "boolean", editable: true },
            { id: "sysId", width: 128, header: [{ text: "시스템", align: "center" }], editorType: "select", options: sysIdCombo },
            { id: "progId", width: 112, header: [{ text: "프로그램ID", align: "center" }] },
            { id: "progNm", width: 160, header: [{ text: "프로그램명", align: "center" }] },
            { id: "progTy", width: 96, header: [{ text: "프로그램 유형", align: "center" }], editorType: "select", options: progTyCombo },
            { id: "progUrl", width: 192, header: [{ text: "URL", align: "center" }] },
        ],
        leftSplit: 3,
        autoWidth: true,
        rowHeight: 34,
        headerRowHeight: 30,
        selection: "row",
        editable: false,
        sortable: false,
        data: dsProgram
    });

    // 단일 항목 선택을 위해 그리드 셀 클릭 시 수동으로 체크 여부 설정
    grid.events.on("cellClick", row => {
        grid.data.forEach((item) => {
            grid.data.update(item.id, { rowCheck: item.id === row.id });
        });
    });

    // 그리드 크기가 화면 크기에 맞춰 자동으로 조절되도록 Layout을 만들어 그 내부에 그리드를 붙인다.
    gridLayout = new dhx.Layout(gridElement.value, {
        rows: [
            { id: "grid" }
        ]
    });
    gridLayout.getCell("grid").attach(grid);

    await search();
});

onUnmounted(() => {
    searchForm?.destructor();
    grid?.destructor();
    gridLayout?.destructor();
});

async function getCombo() {
    const sysIdPromise = getSystemIdCombo();
    const commonCodePromise = getCommonCodeCombo({
        progTyCombo: ["SM", "PROG_TY", "C"],
        progTySearchCombo: ["SM", "PROG_TY", "A"]
    });

    const [sysIdCombo, commonCodeCombo] = await Promise.all([sysIdPromise, commonCodePromise]);
    return {
        sysIdCombo,
        ...commonCodeCombo
    };
}

async function search() {
    const result = await postData("sm/getProgramManageList.do", { dsSearch: searchForm.getValue() });
    grid.data.parse(result.dsProgram);
}

function select() {
    const data = dsProgram.getCheckedRows("rowCheck");

    if (data.length === 0) {
        showAlert("프로그램을 선택하세요.");
        return;
    }

    modal.close({
        programs: data
    });
}

function reset() {
    modal.close({
        programs: []
    });
}

function closePopup() {
    modal.close({
        canceled: true
    });
}

</script>
<template>
    <popup style="width: 1000px;">
        <template v-slot:title>
            프로그램 검색
        </template>

        <div class="jn-container">
            <div class="jn-title-container">
                <h2 class="jn-sub-title-01">검색 조건</h2>
                <div class="jn-btn-group">
                    <button class="jn-form-btn icon-search" @click="search()">조회</button>
                </div>
            </div>
            <div ref="formElement"></div>
        </div>

        <div class="jn-container">
            <div class="jn-title-container">
                <h2 class="jn-sub-title-01">검색 결과</h2>
            </div>
            <div ref="gridElement" style="height: 230px;"></div>
        </div>

        <div class="jn-btn-group" style="margin-top: 25px; justify-content: center;">
            <button class="icon-select" @click="select()">선택</button>
            <button class="icon-return" @click="reset()">초기화</button>
            <button @click="closePopup()">닫기</button>
        </div>
    </popup>
</template>
