<script setup>
import dhx from "dhx-suite-package";
import { onMounted, ref } from "vue";
import { postData } from "@/util/ajax";
import { getCommonCodeCombo, getSystemIdCombo, toSelectOptions } from "@/util/combo";
import { DataCollectionEx } from "@/util/data";
import { formatDate } from "@/util/date";
import { datasetConverter } from "@/util/data/convert";
import { useSessionStore } from "@/stores/session";

const session = useSessionStore();

/*
 * 검색 폼과 그리드를 연결할 HTML 요소
 */
let searchFormElement = ref();
let gridElement = ref();

/**
 * 검색 폼
 */
let searchForm;
let grdAccessLog;
let grdAccessLogLayout;

////////////
// 데이터 //
////////////

/**
 * 사용자 목록 데이터를 저장한다.
 * @type {DataCollectionEx}
 */
let dsAccessLog = new DataCollectionEx();

/** @type {import("@/util/combo").ComboItem[]} */
let actionRsltCombo;
/** @type {import("@/util/combo").ComboItem[]} */
let sysIdCombo;

/////////////////
// 생명주기 훅 //
/////////////////

onMounted(async () => {
    await getCombo();
    const now = new Date();
    const firstDate = new Date(now);
    firstDate.setDate(1);

    // 검색 폼 설정
    searchForm = new dhx.Form(searchFormElement.value, {
        padding: "15px 20px",
        height: 94,
        css: "jn-search-form",
        cols: [
            {
                padding: "0 60px 0 0",
                rows: [
                    { name: "sysId", type: "select", width: 310, label: "시스템", labelPosition: "left", labelWidth: 100, options: toSelectOptions(sysIdCombo), value: session.user.sysId },
                    { name: "actionResult", type: "select", width: 310, label: "실행 결과", labelPosition: "left", labelWidth: 100, options: toSelectOptions(actionRsltCombo) }
                ]
            },
            {
                padding: "0 60px 0 0",
                rows: [
                    { name: "userId", type: "input", width: 310, label: "사용자 ID", labelPosition: "left", labelWidth: 100, autocomplete: false },
                    {
                        padding: "0",
                        height: 26,
                        cols: [
                            { name: "accessFromDt", type: "datepicker", width: 220, label: "기간", labelPosition: "left", labelWidth: 100, dateFormat: "%Y-%m-%d", value: formatDate(firstDate, "yyyy-MM-dd"), editable: true },
                            { name: "accessToDt", type: "datepicker", width: 140, label: "~", labelPosition: "left", dateFormat: "%Y-%m-%d", value: formatDate(now, "yyyy-MM-dd"), editable: true, padding: "0 0 0 10px" },
                        ]
                    }
                ]
            },
            {
                padding: "0 60px 0 0",
                rows: [
                    { name: "userNmKr", type: "input", width: 310, label: "사용자명", labelPosition: "left", labelWidth: 100, autocomplete: false }
                ]
            },
            {
                padding: "0 60px 0 0",
                rows: [
                    { name: "menuNm", type: "input", width: 310, label: "접근메뉴명", labelPosition: "left", labelWidth: 100, autocomplete: false }
                ]
            }
        ]
    });

    // 두 datepicker의 Calendar를 연결하여 날짜 범위 설정을 한다.
    /** @type {dhx.Calendar} */
    const accessFromCal = searchForm.getItem("accessFromDt").getWidget();
    const accessToCal = searchForm.getItem("accessToDt").getWidget();
    accessFromCal.link(accessToCal);

    // 그리드 설정
    grdAccessLog = new dhx.Grid(null, {
        css: "jn-grid",
        leftSplit: 1,
        autoWidth: true,
        rowHeight: 34,
        headerRowHeight: 30,
        selection: "row",    // 이 화면은 조회 전용이므로 행 단위 선택으로 동작하도록 한다.
        sortable: false,
        editable: false,    // 이 화면은 조회 전용이므로 editable을 false로 설정한다.
        data: dsAccessLog,
        columns: [
            { id: "accessTime", width: 160, header: [{ text: "일시", align: "center" }] },
            { id: "accessIp", width: 192, header: [{ text: "접속 IP", align: "center" }] },
            { id: "memberId", width: 96, header: [{ text: "ID", align: "center" }] },
            { id: "userNmKr", width: 80, header: [{ text: "사용자명", align: "center" }] },
            { id: "menuNm", width: 240, header: [{ text: "접근 메뉴", align: "center" }] },
            { id: "actionName", width: 120, header: [{ text: "수행 업무", align: "center" }], editorType: "select", options: actionRsltCombo, editable: true },
            { id: "actionResult", width: 80, header: [{ text: "실행 결과", align: "center" }] },
            { id: "requestBody", width: 800, header: [{ text: "요청 본문", align: "center" }] },
        ]
    });

    grdAccessLogLayout = new dhx.Layout(gridElement.value, {
        rows: [
            { id: "grid" }
        ]
    });

    grdAccessLogLayout.getCell("grid").attach(grdAccessLog);

    grdAccessLog.events.on("beforeEditStart", () => false);

    await search();
});

/////////////////
// 사용자 함수 //
/////////////////

async function getCombo() {
    const sysIdComboPromise = getSystemIdCombo();
    const commonComboPromise = getCommonCodeCombo({
        actionRsltCombo: ["SM", "ACTION_RSLT", "A"]
    });

    [sysIdCombo, { actionRsltCombo }] = await Promise.all([sysIdComboPromise, commonComboPromise]);
}

async function search() {
    const dsSearch = datasetConverter(searchForm.getValue())
        .dateFormat("accessFromDt", "yyyy-MM-dd", "yyyyMMdd")
        .dateFormat("accessToDt", "yyyy-MM-dd", "yyyyMMdd")
        .convert();
    const result = await postData("sm/getAccessLog.do", { dsSearch: dsSearch });
    grdAccessLog.data.parse(result.dsAccessLog);
}


</script>

<template>
    <div class="jn-page">
        <div class="jn-title-container">
            <h1 class="jn-title">접속 로그 조회</h1>
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
