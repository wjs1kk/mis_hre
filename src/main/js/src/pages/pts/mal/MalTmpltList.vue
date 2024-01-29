<script setup>
import dhx from "dhx-suite-package";
import { onMounted, onUnmounted, ref } from "vue";
import { DataCollectionEx } from "@/util/data";
import { postData } from "@/util/ajax";
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
let grdTmplt;
/** @type {dhx.Layout} */
let grdTmpltLayout;

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
                                content: "템플릿 명",
                            },
                            {
                                value: "emlTmpltId",
                                content: "템플릿 ID",
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

    grdTmplt = new dhx.Grid(null, {
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
            { id: "rn", gravity: 48, header: [{ text: "순번", align: "center" }], editable: false },
            { id: "emlTmpltId", gravity: 160, header: [{ text: "템플릿 ID", align: "center" }] },
            { id: "emlTmpltNm", gravity: 240, header: [{ text: "템플릿 명", align: "center" }] },
            { id: "rtstDt", gravity: 160, header: [{ text: "작성일", align: "center" }], },
            { id: "rgstrId", gravity: 160, header: [{ text: "작성자", align: "center" }], },
            { id: "useYn", gravity: 80, header: [{ text: "사용여부", align: "center" }], },
        ]
    });

    grdTmpltLayout = new dhx.Layout(gridElement.value, {
        rows: [
            { id: "grid" }
        ]
    });

    grdTmpltLayout.getCell("grid").attach(grdTmplt);

    grdTmplt.events.on("cellDblClick", (row) => {
        globalUi.openTab({
            tabId: "malTmpltDtl",
            tabTitle: "메일 템플릿 등록",
            url: "pages/pts/mal/MalTmpltDtl.vue",
            args: {
                emlTmpltId: row.emlTmpltId
            }
        })
    })

    await search();
});

// 컴포넌트가 언로드됨
onUnmounted(() => {
    grdTmplt?.destructor();
    grdTmpltLayout?.destructor();
    searchForm?.destructor();
});

/////////////////
// 사용자 함수 //
/////////////////

/**
 * 메일 템플릿 목록을 조회한다.
 */
async function search() {
    const result = await postData("mal/emlSndMaster/getTmpltList.do", {
        dsSearch: searchForm.getValue()
    });

    const data = result.dsList;
    dsList.parse(data);
}

function addTmplt() {
    globalUi.openTab({
        tabId: "tmpltAdd",
        tabTitle: "템플릿 등록",
        url: "pages/pts/mal/MalTmpltDtl.vue",
    })
}
</script>

<template>
    <div class="jn-page">
        <div class="jn-title-container">
            <h1 class="jn-title">메일 템플릿 목록</h1>
            <div class="jn-btn-group">
                <button @click="search">조회</button>
            </div>
        </div>

        <div ref="searchFormElement"></div>

        <div class="jn-container" style="height: calc(100% - 143px);">
            <div class="jn-title-container">
                <h2 class="jn-sub-title-01">검색 결과</h2>
                <div class="jn-btn-group">
                    <button class="jn-btn-form icon-add" @click="addTmplt">템플릿 추가</button>
                </div>
            </div>
            <div ref="gridElement" style="height: calc(100% - 45px);"></div>
        </div>
    </div>
</template>
