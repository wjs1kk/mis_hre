<script setup lang="js">
import { DataCollectionEx } from "@/util/data";
import dhx from "dhx-suite-package";
import { onMounted, onUnmounted, ref } from "vue";
import { getCommonCodeCombo, toSelectOptions } from "@/util/combo";
import { postData } from "@/util/ajax";
import { useGlobalUiState } from "@/stores/ui";

const globalUi = useGlobalUiState();

/*
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
let grdFaqList;
/** @type {dhx.Layout} */
let grdFaqLayout;

////////////
// 데이터 //
////////////

/**
 * dsList에 저장
 * @type {DataCollectionEx}
 */
let dsList = new DataCollectionEx();

////////////////////////
// 생명주기 이벤트 훅 //
////////////////////////

/*
 * 컴포넌트 로드
 */

onMounted(async () => {
    const { searchTyCombo, clsTyCombo } = await getCombo();

    // 검색 폼 설정
    searchForm = new dhx.Form(searchFormElement.value, {
        padding: "15px 20px",
        height: 60,
        css: "jn-search-form",
        cols: [
            {
                padding: "0 60px 0 0",
                rows: [
                    {
                        name: "clsCd",
                        type: "select",
                        width: 310,
                        label: "분류",
                        labelPosition: "left",
                        labelWidth: 100,
                        options: toSelectOptions(clsTyCombo)
                    }
                ]
            },
            {
                padding: "0 60px 0 0",
                rows: [
                    {
                        name: "searchType",
                        type: "select",
                        width: 310,
                        label: "검색",
                        labelPosition: "left",
                        labelWidth: 100,
                        options: toSelectOptions(searchTyCombo)
                    }
                ]
            },
            {
                padding: "0 10px 0 0",
                rows: [
                    {
                        name: "searchKeyword",
                        type: "input",
                        width: 500
                    }
                ]
            }
        ]
    });

    // 그리드 설정
    grdFaqList = new dhx.Grid(null, {
        css: "jn-grid",
        leftSplit: 3,
        autoWidth: true,
        rowHeight: 34,
        headerRowHeight: 30,
        selection: "row",
        editable: false,
        sortable: false,
        data: dsList,
        autoWidth: true,
        columns: [
            { id: "faqId", type: "string", hidden: true, header: [{}] },
            { id: "rn", gravity: 90, header: [{ text: "순번", align: "center" }], editable: false },
            {
                id: "clsNm",
                gravity: 160,
                header: [{ text: "분류", align: "center" }],
                editable: false
            },
            {
                id: "qstnTtl",
                gravity: 160,
                header: [{ text: "제목", align: "center" }],
                editable: false
            },
            {
                id: "rdcnt",
                gravity: 160,
                header: [{ text: "조회수", align: "center" }],
                editable: false
            },
            {
                id: "rgstDt",
                gravity: 160,
                header: [{ text: "등록일", align: "center" }],
                editable: false
            },
            {
                id: "updtDt",
                gravity: 160,
                header: [{ text: "최종수정일", align: "center" }],
                editable: false
            },
            {
                id: "rgstrMemberId",
                gravity: 160,
                header: [{ text: "작성자", align: "center" }],
                editable: false
            }
        ]
    });

    grdFaqLayout = new dhx.Layout(gridElement.value, {
        rows: [{ id: "grid" }]
    });

    // 더블클릭
    grdFaqList.events.on("cellDblClick", (row) => {
        globalUi.openTab({
            tabId: "FaqDetailManage",
            tabTitle: "FAQ 상세",
            url: "pages/pts/bbs/faq/FaqDetailManage.vue",
            args: {
                faqId: row.faqId
            }
        });
    });

    grdFaqLayout.getCell("grid").attach(grdFaqList);

    await search();
});

/**
 *  컴포넌트가 언로드됨
 */
onUnmounted(() => {
    grdFaqList?.destructor();
    grdFaqLayout?.destructor();
    searchForm?.destructor();
});

/////////////////
// 사용자 함수 //
/////////////////

/**
 *  검색 유형 콤보 박스 조회
 */
async function getCombo() {
    const commonComboPromise = getCommonCodeCombo({
        searchTyCombo: ["PTS", "SEARCH_TY", "A"],
        clsTyCombo: ["PTS", "WORK_CATEGORY", "A"]
    });

    const [{ searchTyCombo, clsTyCombo }] = await Promise.all([commonComboPromise]);

    return {
        searchTyCombo,
        clsTyCombo
    };
}

/**
 *  검색
 */
async function search() {
    const result = await postData("bbs/faq/getFaqList.do", { dsSearch: searchForm.getValue() });

    const data = result.dsList;
    dsList.parse(data);
}

/**
 *  신규
 */
function registration() {
    globalUi.openTab({
        tabId: "FaqDetailAdd",
        tabTitle: "FAQ 상세",
        url: "pages/pts/bbs/faq/FaqDetailManage.vue",
        args: {
            faqId: "" // faqId 신규 설정
        }
    });
}
</script>

<template>
    <div class="jn-page">
        <div class="jn-title-container">
            <h1 class="jn-title">FAQ 목록</h1>
            <div class="jn-btn-group">
                <button @click="search()">조회</button>
            </div>
        </div>

        <div ref="searchFormElement"></div>

        <div class="jn-container" style="height: calc(100% - 143px)">
            <div class="jn-title-container">
                <h2 class="jn-sub-title-01"></h2>
                <div class="jn-btn-group">
                    <button @click="registration()">신규</button>
                </div>
            </div>
            <div ref="gridElement" style="height: calc(100% - 45px)"></div>
        </div>
    </div>
</template>
