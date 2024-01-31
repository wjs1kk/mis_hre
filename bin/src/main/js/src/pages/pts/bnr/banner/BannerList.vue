<script setup>
import dhx from "dhx-suite-package";
import { onMounted, onUnmounted, ref } from "vue";
import { DataCollectionEx, rowStatusTemplate } from "@/util/data";
import { postData } from "@/util/ajax";
import { useMessageStore } from "@/stores/message";
import { useGlobalUiState } from "@/stores/ui";

const message = useMessageStore();
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
let grdBanner;
/** @type {dhx.Layout} */
let grdBannertLayout;

////////////
// 데이터 //
////////////

const dsList = new DataCollectionEx();

////////////////////////
// 생명주기 이벤트 훅 //
////////////////////////

// 컴포넌트가 로드됨
onMounted(async () => {
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
                                content: "전체",
                            },
                            {
                                value: "BANNERNAME",
                                content: "배너명",
                            },
                            {
                                value: "BANNERURL",
                                content: "배너URL",
                            },
                            {
                                value: "WRITERNAME",
                                content: "등록자",
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
        ]
    });

    grdBanner = new dhx.Grid(null, {
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
            { id: "rn", width: 48, header: [{ text: "순번", align: "center" }], editable: false },
            { id: "bnrNm", gravity: 160, header: [{ text: "배너명", align: "center" }] },
            { id: "bnrUrl", gravity: 240, header: [{ text: "배너URL", align: "center" }] },
            { id: "rgstrId", gravity: 160, header: [{ text: "등록자", align: "center" }], },
            { id: "rgstDt", gravity: 160, header: [{ text: "등록일", align: "center" }], },
            { id: "bnrOrd", gravity: 80, header: [{ text: "우선순위", align: "center" }], },
            { id: "useYn", gravity: 80, header: [{ text: "사용여부", align: "center" }], },
        ]
    });

    grdBannertLayout = new dhx.Layout(gridElement.value, {
        rows: [
            { id: "grid" }
        ]
    });

    grdBannertLayout.getCell("grid").attach(grdBanner);

    grdBanner.events.on("cellDblClick", (row) => {
        globalUi.openTab({
            tabId: "bannerManage",
            tabTitle: "배너 등록",
            url: "pages/pts/bnr/banner/BannerManage.vue",
            args: {
                bnrId: row.bnrId
            }
        })
    })

    await search();
});

// 컴포넌트가 언로드됨
onUnmounted(() => {
    grdBanner?.destructor();
    grdBannertLayout?.destructor();
    searchForm?.destructor();
});

/////////////////
// 사용자 함수 //
/////////////////

/**
 * 배너 목록을 조회한다.
 */
async function search() {
    const result = await postData("bnr/banner/getBannerList.do", {
        dsSearch: searchForm.getValue()
    });

    const data = result.dsList;
    dsList.parse(data);
}
</script>

<template>
    <div class="jn-page">
        <div class="jn-title-container">
            <h1 class="jn-title">배너 조회</h1>
            <div class="jn-btn-group">
                <button @click="search">조회</button>
            </div>
        </div>

        <div ref="searchFormElement"></div>

        <div class="jn-container" style="height: calc(100% - 143px);">
            <div class="jn-title-container">
                <h2 class="jn-sub-title-01">검색 결과</h2>
                <div class="jn-btn-group">
                    <button class="jn-btn-form icon-add" @click="addBanner">배너 추가</button>
                </div>
            </div>
            <div ref="gridElement" style="height: calc(100% - 45px);"></div>
        </div>
    </div>
</template>
