<script setup>
import dhx from "dhx-suite-package";
import { onMounted, onUnmounted, ref } from "vue";
import { DataCollectionEx } from "@/util/data";
import { postData } from "@/util/ajax";
import { formatDate } from "@/util/date";
import { datasetConverter } from "@/util/data/convert";
import { useGlobalUiState } from "@/stores/ui";

const globalUi = useGlobalUiState();
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
let grdList;
/** @type {dhx.Layout} */
let grdListLayout;

////////////
// 데이터 //
////////////

const dsList = new DataCollectionEx();

////////////////////////
// 생명주기 이벤트 훅 //
////////////////////////

// 컴포넌트가 로드됨
onMounted(async () => {

    const now = new Date();
    const lastDate = new Date(now);
    const firstDate = new Date(now);
    firstDate.setDate(1);
    lastDate.setDate(31);

    searchForm = new dhx.Form(searchFormElement.value, {
        padding: "15px 20px",
        height: 60,
        css: "jn-search-form",
        cols: [
            {
                padding: "0 60px 0 0",
                rows: [
                    {
                        name: "searchType", type: "select", width: 310, label: "검색", labelPosition: "left", labelWidth: 150,
                        options: [
                            {
                                value: "",
                                content: "제목",
                            },
                            {
                                value: "sndMembNm",
                                content: "발송자",
                            }
                        ]
                    }
                ]
            },
            {
                padding: "0 60px 0 0",
                rows: [
                    { name: "searchKeyword", type: "input", width: 1000, labelPosition: "left", }
                ]
            },
            {
                padding: "0 60px 0 0",
                rows: [
                    {
                        padding: "0",
                        height: 26,
                        cols: [
                            { name: "sndStrDt", type: "datepicker", width: 220, label: "처리일자", labelPosition: "left", labelWidth: 100, dateFormat: "%Y-%m-%d", value: formatDate(firstDate, "yyyy-MM-dd") },
                            { name: "sndEndDt", type: "datepicker", width: 140, label: "~", labelPosition: "left", dateFormat: "%Y-%m-%d", value: formatDate(lastDate, "yyyy-MM-dd"), padding: "0 0 0 10px" },
                        ]
                    }
                ]
            }
        ]
    });

    grdList = new dhx.Grid(null, {
        css: "jn-grid",
        rowHeight: 34,
        headerRowHeight: 30,
        selection: "cell",
        editable: false,
        keyNavigation: true,
        sortable: false,
        data: dsList,
        autoWidth: true,
        leftSplit: 3,
        columns: [
            { id: "emlId", gravity: 48, header: [{ text: "이메일ID", align: "center" }], hidden: true },
            { id: "rn", gravity: 48, header: [{ text: "순번", align: "center" }], editable: false },
            { id: "emlTtl", gravity: 160, header: [{ text: "제목", align: "center" }] },
            { id: "sndDt", gravity: 240, header: [{ text: "발송일", align: "center" }] },
            { id: "sndNm", gravity: 160, header: [{ text: "발송자", align: "center" }], },
            { id: "sndTrgtCnt", gravity: 160, header: [{ text: "발송대상 수", align: "center" }], },
            { id: "sndSttsNm", gravity: 80, header: [{ text: "상태", align: "center" }], },
        ]
    });

    grdListLayout = new dhx.Layout(gridElement.value, {
        rows: [
            { id: "grid" }
        ]
    });

    grdListLayout.getCell("grid").attach(grdList);

    grdList.events.on("cellDblClick", (row) => {
        globalUi.openTab({
            tabId: "emlSndHstry",
            tabTitle: "메일발송 이력",
            url: "pages/pts/mal/MalSndHstry.vue",
            args: {
                emlId: row.emlId
            }
        })
    })

    await search();
});

// 컴포넌트가 언로드됨
onUnmounted(() => {
    grdList?.destructor();
    grdListLayout?.destructor();
    searchForm?.destructor();
});

/////////////////
// 사용자 함수 //
/////////////////

/**
 * 메일발송 목록을 조회한다.
 */
async function search() {
    const dsSearch = datasetConverter(searchForm.getValue())
        .dateFormat("sndStrDt", "yyyy-MM-dd", "yyyyMMdd")
        .dateFormat("sndEndDt", "yyyy-MM-dd", "yyyyMMdd")
        .convert();
    const result = await postData("mal/emlSndMaster/getEmlSndList.do", {
        dsSearch: dsSearch
    });

    grdList.data.parse(result.dsList);
}

function sndMal() {
    globalUi.openTab({
        tabId: "emlSnd",
        tabTitle: "메일 발송",
        url: "pages/pts/mal/MalSnd.vue",
    })
}

</script>

<template>
    <div class="jn-page">
        <div class="jn-title-container">
            <h1 class="jn-title">메일발송 목록</h1>
            <div class="jn-btn-group">
                <button @click="search">조회</button>
            </div>
        </div>

        <div ref="searchFormElement"></div>

        <div class="jn-container" style="height: calc(100% - 143px);">
            <div class="jn-title-container">
                <h2 class="jn-sub-title-01">검색 결과</h2>
                <div class="jn-btn-group">
                    <button class="jn-btn-form icon-sms" @click="sndMal">메일 발송</button>
                </div>
            </div>
            <div ref="gridElement" style="height: calc(100% - 45px);"></div>
        </div>
    </div>
</template>
