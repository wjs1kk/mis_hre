<script setup>
import dhx from "dhx-suite-package";
import { onMounted, ref } from "vue";
import { postData } from "@/util/ajax";
import { getCommonCodeCombo, toSelectOptions } from "@/util/combo";
import { DataCollectionEx } from "@/util/data";
import { formatDate } from "@/util/date";
import { datasetConverter } from "@/util/data/convert";

/*
 * 검색 폼과 그리드를 연결할 HTML 요소
 */
let searchFormElement = ref();
let gridElement = ref();

/**
 * 검색 폼
 */
let searchForm;
let grdRoleLog;
let grdRoleLogLayout;

////////////
// 데이터 //
////////////

/**
 * 사용자 목록 데이터를 저장한다.
 * @type {DataCollectionEx}
 */
let dsRoleLog = new DataCollectionEx();

/////////////////
// 생명주기 훅 //
/////////////////

onMounted(async () => {
    const { processTyCombo } = await getCombo();

    const now = new Date();
    const firstDate = new Date(now);
    firstDate.setDate(1);

    searchForm = new dhx.Form(searchFormElement.value, {
        padding: "15px 20px",
        height: 94,
        css: "jn-search-form",
        cols: [
            {
                padding: "0 60px 0 0",
                rows: [
                    { name: "memberId", type: "input", width: 310, label: "사용자 ID", labelPosition: "left", labelWidth: 100, autocomplete: false },
                    { name: "roleCode", type: "input", width: 310, label: "접근권한 코드", labelPosition: "left", labelWidth: 100, autocomplete: false }
                ]
            },
            {
                padding: "0 60px 0 0",
                rows: [
                    { name: "userNmKr", type: "input", width: 310, label: "사용자 이름", labelPosition: "left", labelWidth: 100, autocomplete: false },
                    { name: "roleNm", type: "input", width: 310, label: "접근권한명", labelPosition: "left", labelWidth: 100, autocomplete: false }
                ]
            },
            {
                padding: "0 60px 0 0",
                rows: [
                    { name: "processTy", type: "select", width: 360, label: "유형", labelPosition: "left", labelWidth: 100, options: toSelectOptions(processTyCombo), value: "" },
                    {
                        padding: "0",
                        height: 26,
                        cols: [
                            { name: "processFromDt", type: "datepicker", width: 220, label: "처리일자", labelPosition: "left", labelWidth: 100, dateFormat: "%Y-%m-%d", value: formatDate(firstDate, "yyyy-MM-dd") },
                            { name: "processToDt", type: "datepicker", width: 140, label: "~", labelPosition: "left", dateFormat: "%Y-%m-%d", value: formatDate(now, "yyyy-MM-dd"), padding: "0 0 0 10px" },
                        ]
                    }
                ]
            }
        ]
    });

    grdRoleLog = new dhx.Grid(null, {
        css: "jn-grid",
        leftSplit: 1,
        autoWidth: true,
        rowHeight: 34,
        headerRowHeight: 30,
        selection: "row",
        sortable: false,
        editable: false,
        data: dsRoleLog,
        columns: [
            { id: "rn", width: 48, header: [{ text: "순번", align: "center" }] },
            { id: "memberId", width: 96, header: [{ text: "사용자 ID", align: "center" }] },
            { id: "userNmKr", width: 96, header: [{ text: "사용자명", align: "center" }] },
            { id: "organNm", width: 160, header: [{ text: "소속", align: "center" }] },
            { id: "roleCode", width: 120, header: [{ text: "접근권한 코드", align: "center" }] },
            { id: "roleNm", width: 200, header: [{ text: "접근권한명", align: "center" }] },
            { id: "processTy", width: 64, header: [{ text: "유형", align: "center" }], editorType: "select", options: processTyCombo, editable: true },
            { id: "processByMemberId", width: 96, header: [{ text: "처리자 ID", align: "center" }] },
            { id: "processByNmKr", width: 96, header: [{ text: "처리자명", align: "center" }] },
            { id: "processDt", width: 120, header: [{ text: "처리일시", align: "center" }] },
            { id: "processReason", width: 400, header: [{ text: "수정사유", align: "center" }] },
        ]
    });

    grdRoleLogLayout = new dhx.Layout(gridElement.value, {
        rows: [
            { id: "grid" }
        ]
    });

    grdRoleLogLayout.getCell("grid").attach(grdRoleLog);

    grdRoleLog.events.on("beforeEditStart", () => false);

    await search();
});

/////////////////
// 사용자 함수 //
/////////////////

async function getCombo() {
    const commonCombo = await getCommonCodeCombo({
        processTyCombo: ["SM", "PROCESS_TY", "A"]
    });

    return commonCombo;
}

async function search() {
    const dsSearch = datasetConverter(searchForm.getValue())
        .dateFormat("processFromDt", "yyyy-MM-dd", "yyyy-MM-dd")
        .dateFormat("processToDt", "yyyy-MM-dd", "yyyy-MM-dd")
        .convert();
    const result = await postData("sm/getRoleLog.do", { dsSearch: dsSearch });
    grdRoleLog.data.parse(result.dsRoleLog);
}


</script>

<template>
    <div class="jn-page">
        <div class="jn-title-container">
            <h1 class="jn-title">권한 변경 이력 조회</h1>
            <div class="jn-btn-group">
                <button @click="search()">조회</button>
            </div>
        </div>

        <div ref="searchFormElement">
        </div>

        <div class="jn-container" style="height: calc(100% - 177px);">
            <div class="jn-title-container">
                <h2 class="jn-sub-title-01">검색 결과</h2>
                <div class="jn-btn-group">
                </div>
            </div>
            <div ref="gridElement" style="height: calc(100% - 45px);"></div>
        </div>
    </div>
</template>
