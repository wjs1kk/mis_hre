<script setup lang="js">
import { DataCollectionEx } from "@/util/data";
import dhx from "dhx-suite-package";
import { onMounted, onUnmounted, ref } from "vue";
import { getCommonCodeCombo, toSelectOptions } from "@/util/combo";
import { datasetConverter } from "@/util/data/convert";
import { formatDate } from "@/util/date";
import { postData } from "@/util/ajax";
import { useMessageStore } from "@/stores/message";
import { useGlobalUiState } from "@/stores/ui";

const message = useMessageStore();
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
let grdNoticeBoardList;
/** @type {dhx.Layout} */
let grdNoticeBoardListLayout;

////////////
// 데이터 //
////////////
/**
 * 사용자 목록 데이터를 저장한다.
 * @type {DataCollectionEx}
 */
let dsList = new DataCollectionEx();

/** @type {import("@/util/combo").ComboItem[]} */
let searchTyCombo;

////////////////////////
// 생명주기 이벤트 훅 //
////////////////////////

// 컴포넌트 로드
onMounted(async () => {
    await getCombo();

    const now = new Date();
    const firstDate = new Date(now);
    firstDate.setDate(1);

    let date = new Date();
    let y = date.getFullYear();
    let m = date.getMonth();
    const lastDate = new Date(y, m + 1, 0);
    //lastDate.setDate(now.getFullYear, now.getMonth + 1, 0);

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
            },
            {
                padding: "0 60px 0 0",
                height: 26,
                cols: [
                    {
                        name: "strYmd",
                        type: "datepicker",
                        width: 220,
                        label: "기간",
                        labelPosition: "left",
                        labelWidth: 100,
                        dateFormat: "%Y-%m-%d",
                        value: formatDate(firstDate, "yyyy-MM-dd"),
                        editable: true
                    },
                    {
                        name: "endYmd",
                        type: "datepicker",
                        width: 140,
                        label: "~",
                        labelPosition: "left",
                        dateFormat: "%Y-%m-%d",
                        value: formatDate(lastDate, "yyyy-MM-dd"),
                        editable: true,
                        padding: "0 0 0 10px"
                    }
                ]
            }
        ]
    });

    // 두 datepicker의 Calendar를 연결하여 날짜 범위 설정을 한다.
    /** @type {dhx.Calendar} */
    const strYmd = searchForm.getItem("strYmd").getWidget();
    const endYmd = searchForm.getItem("endYmd").getWidget();
    strYmd.link(endYmd);

    // 그리드 설정
    grdNoticeBoardList = new dhx.Grid(null, {
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
            {
                id: "nttNo",
                gravity: 90,
                header: [{ text: "순번", align: "center" }],
                editable: false
            },
            {
                id: "nttTtl",
                gravity: 550,
                header: [{ text: "제목", align: "center" }],
                editable: false
            },
            {
                id: "scrtYn",
                gravity: 90,
                header: [{ text: "비밀글", align: "center" }],
                editable: false
            },
            {
                id: "ntcrId",
                gravity: 150,
                header: [{ text: "작성자", align: "center" }],
                editable: false
            },
            {
                id: "rgstDt",
                gravity: 200,
                header: [{ text: "작성일", align: "center" }],
                editable: false
            },
            {
                id: "rcmdCnt",
                gravity: 90,
                header: [{ text: "추천", align: "center" }],
                editable: false
            },
            {
                id: "dcmdCnt",
                gravity: 90,
                header: [{ text: "비추천", align: "center" }],
                editable: false
            },
            {
                id: "rdcnt",
                gravity: 90,
                header: [{ text: "조회수", align: "center" }],
                editable: false
            },
            {
                id: "cmntCnt",
                gravity: 90,
                header: [{ text: "댓글수", align: "center" }],
                editable: false
            }
        ]
    });

    grdNoticeBoardListLayout = new dhx.Layout(gridElement.value, {
        rows: [{ id: "grid" }]
    });

    grdNoticeBoardListLayout.getCell("grid").attach(grdNoticeBoardList);

    grdNoticeBoardList.events.on("beforeEditStart", () => false);

    await search();
});

/**
 *  컴포넌트가 언로드됨
 */
onUnmounted(() => {
    grdNoticeBoardList?.destructor();
    grdNoticeBoardListLayout?.destructor();
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
        searchTyCombo: ["PTS", "SEARCH_TY", "A"]
    });
    [{ searchTyCombo }] = await Promise.all([commonComboPromise]);
}

/**
 *  검색
 */
async function search() {
    const dsSearch = datasetConverter(searchForm.getValue())
        .dateFormat("strYmd", "yyyy-MM-dd", "yyyyMMdd")
        .dateFormat("endYmd", "yyyy-MM-dd", "yyyyMMdd")
        .convert();
    const result = await postData("bbs/noticeBoard/getNoticeBoardList.do", { dsSearch: dsSearch });
    grdNoticeBoardList.data.parse(result.dsList);
}

/**
 *  글쓰기
 */
async function sndNotice() {
    // 할려면 파라미터 nttNo 추가해서 해야함.
    globalUi.openTab({
        tabId: "NoticeBoardRegistration",
        tabTitle: "게시물 글쓰기",
        url: "pages/pts/bbs/NoticeBoardRegistration.vue",
        args: {
            // nttNo: "", // inserted 게시글 번호는 생성할거라 없어도됨
            bbsId: "JNVBBS0001" // 게시판 ID 를 어떻게 설정하느냐..
        }
    });
}
</script>

<template>
    <div class="jn-page">
        <div class="jn-title-container">
            <h1 class="jn-title">게시물 목록</h1>
            <div class="jn-btn-group">
                <button @click="search()">조회</button>
            </div>
        </div>

        <div ref="searchFormElement"></div>

        <div class="jn-container" style="height: calc(100% - 143px)">
            <div class="jn-title-container">
                <h2 class="jn-sub-title-01"></h2>
                <div class="jn-btn-group">
                    <button @click="sndNotice()">글쓰기</button>
                </div>
            </div>
            <div ref="gridElement" style="height: calc(100% - 45px)"></div>
        </div>
    </div>
</template>
