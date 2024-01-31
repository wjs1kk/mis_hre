<script setup>
import dhx from "dhx-suite-package";
import { onMounted, onUnmounted, ref } from "vue";
import Popup from "@/components/popup/PopupBase.vue";
import { postData } from "@/util/ajax";
import { getCommonCodeCombo, getSystemIdCombo, toSelectOptions } from "@/util/combo";
import { DataCollectionEx, removeInternalStatus } from "@/util/data";
import { showAlert, useModalContext } from "@/util/popup";

// 팝업 파라미터 정의
const props = defineProps({
    roleCode: String
});

const formElement = ref();
const gridElement = ref();

let searchForm;
let grid;
let gridLayout;

const modal = useModalContext();

let dsRoleUser = new DataCollectionEx();

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
                    { name: "roleCode", type: "input", hidden: true, value: props.roleCode },
                    { name: "memberId", type: "input", width: 320, label: "회원 ID", labelPosition: "left", labelWidth: 100 },
                    { name: "deptNm", type: "select", width: 320, label: "부서명", labelPosition: "left", labelWidth: 100, value: "", options: toSelectOptions(progTySearchCombo), readOnly: true }
                ]
            },
            {
                padding: "0 40px 0 0",
                rows: [
                    { name: "userNm", type: "input", width: 400, label: "사용자명", labelPosition: "left", labelWidth: 100 },
                    { name: "jbpsNm", type: "input", width: 400, label: "직급", labelPosition: "left", labelWidth: 100 },
                ]
            }
        ]
    });

    grid = new dhx.Grid(null, {
        css: "jn-grid",
        columns: [
            { id: "rn", width: 40, header: [{ text: "순번", align: "center" }] },
            { id: "rowCheck", width: 40, header: [{ text: "선택", align: "center" }], type: "boolean", editable: true },
            { id: "memberId", width: 80, header: [{ text: "회원 ID", align: "center" }] },
            { id: "userNm", width: 80, header: [{ text: "사용자명", align: "center" }] },
            { id: "telNo", width: 120, header: [{ text: "전화번호", align: "center" }] },
            { id: "emailAddr", width: 120, header: [{ text: "이메일", align: "center" }] },
            { id: "deptNm", width: 120, header: [{ text: "부서명", align: "center" }] },
            { id: "jobPosition", width: 80, header: [{ text: "직급", align: "center" }] },
        ],
        leftSplit: 3,
        autoWidth: true,
        rowHeight: 34,
        headerRowHeight: 30,
        selection: "row",
        editable: false,
        sortable: false,
        data: dsRoleUser
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
    const result = await postData("sm/getUserList.do", { dsSearch: searchForm.getValue() });
    grid.data.parse(result.dsRoleUser);
}

function select() {
    const data = dsRoleUser.getCheckedRows("rowCheck");

    if (data.length === 0) {
        showAlert("사용자를 선택하세요.");
        return;
    }

    modal.close({
        users: data.map(e => removeInternalStatus(e))
    });
}

function reset() {
    modal.close({
        users: []
    });
}

function closePopup() {
    modal.close({
        canceled: true
    });
}

</script>

<template>
    <popup style="width: 900px;">
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
