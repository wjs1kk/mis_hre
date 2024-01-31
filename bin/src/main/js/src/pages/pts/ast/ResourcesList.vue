<script setup>
import dhx from "dhx-suite-package";
import { onMounted, onUnmounted, ref } from "vue";
import { DataCollectionEx } from "@/util/data";
import { postData } from "@/util/ajax";
import { editOnSingleClick } from "@/util/grid";
import { useMessageStore } from "@/stores/message";
import { formatDate } from "@/util/date";


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

/*
 * 자원 목록 그리드
 */
/** @type {dhx.Grid} */
let grdResList;

/** @type {dhx.Layout} */
let grdListLayout;

////////////
// 데이터 //
////////////
/**
 * 사용자 목록 데이터를 저장한다.
 * @type {DataCollectionEx}
 */
const dsList = new DataCollectionEx();

////////////////////////
// 생명주기 이벤트 훅 //
////////////////////////

/**
 * 화면이 열림
 */
onMounted(async () => {
    searchForm = new dhx.Form(searchFormElement.value, {
        padding: "15px 20px",
        height: 60,
        css: "jn-search-form",
        cols: [
            {
                padding: "0 10px 0 0",
                rows: [
                    {
                        name: "astDivCd",
                        type: "select",
                        width: 310,
                        label: "구분",
                        labelPosition: "left",
                        labelWidth: 100,
                        options: [
                            {
                                value: "",
                                content: "전체"
                            },
                            {
                                value: "AST-020-010",
                                content: "회의실",
                            },
                            {
                                value: "AST-020-020",
                                content: "서버",
                            },
                            {
                                value: "AST-020-030",
                                content: "컴퓨터",
                            },
                            {
                                value: "AST-020-040",
                                content: "사무실비품",
                            }
                        ]
                    }
                ]
            },
            {
                padding: "0 10px 0 0",
                rows: [
                    {
                        name: "searchType",
                        type: "select",
                        width: 310,
                        options: [
                            {
                                value: "",
                                content: "전체"
                            },
                            {
                                value: "AST_NM",
                                content: "자원명"
                            },
                            {
                                value: "AST_MNG_DEPT_CD",
                                content: "관리부서"
                            },
                            {
                                value: "AST_MNG_PIC_ID",
                                content: "관리담당자"
                            }
                        ]
                    }
                ]
            },
            {
                padding: "0 30px 0 0",
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

    /**
     *  Grid 생성
     */
    grdResList = new dhx.Grid(null, {
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
            {
                id: "rn",
                gravity: 30,
                header: [{ text: "순번", align: "center" }],
                editable: false
            },
            {
                id: "astDivCdNm",
                gravity: 150,
                header: [{ text: "구분", align: "center" }],
                editable: false
            },
            {
                id: "astNo",
                gravity: 150,
                header: [{ text: "자원번호", align: "center" }],
                align: "center",
                editable: false
            },
            {
                id: "astNm",
                gravity: 300,
                header: [{ text: "자원명", align: "center" }],
                align: "center",
                editable: false
            },
            {
                id: "rgstDt",
                gravity: 200,
                header: [{ text: "최초등록일", align: "center" }],
                align: "center",
                editable: false
            },
            {
                id: "astQty",
                gravity: 90,
                header: [{ text: "수량", align: "center" }],
                editable: false,
                type: "number"
            },
            {
                id: "astMngDeptCdNm",
                gravity: 90,
                header: [{ text: "관리부서", align: "center" }],
                editable: false

            },
            {
                id: "astMngPicIdNm",
                gravity: 90,
                header: [{ text: "관리담당자", align: "center" }],
                editable: false
            }
        ]
    });

    grdListLayout = new dhx.Layout(gridElement.value, {
        rows: [
            { id: "grid" }
        ]
    });

    grdListLayout.getCell("grid").attach(grdResList);

    grdResList.events.on("cellClick", editOnSingleClick);

    grdResList.events.on("cellDblClick", (row, col) => {
        if (col.id === "astNo") {
            globalUi.openTab({
                tabId: "resourcesManage",
                tabTitle: "자원 등록",
                url: "pages/pts/ast/ResourcesManage.vue",
                args: {
                    astNo: row.astNo
                }
            })
        }
    })

    await search();
});

// 컴포넌트 언로드
onUnmounted(() => {
    grdResList?.destructor();
    grdListLayout?.destructor();
    searchForm?.destructor();
});

/////////////////
// 사용자 함수 //
/////////////////
/**
 *  목록을 조회한다.
 */
async function search() {
    const result = await postData("ast/resources/getResourcesList.do", {
        dsSearch: searchForm.getValue()
    });


    grdResList.data.parse(result.dsList);
}

function addAst() {
    globalUi.openTab({
        tabId: "resourcesManage",
        tabTitle: "자원 등록",
        url: "pages/pts/ast/ResourcesList.vue",
    })
}

</script>

<template>
    <div class="jn-page">
        <div class="jn-title-container">
            <h1 class="jn-title">자원 목록</h1>
            <div class="jn-btn-group">
                <button @click="search">조회</button>
            </div>
        </div>

        <div ref="searchFormElement"></div>

        <div class="jn-container" style="height: calc(100% - 143px);">
            <div class="jn-title-container">
                <h2 class="jn-sub-title-01">목록</h2>
                <div class="jn-btn-group">
                    <button class="jn-btn-form icon-add" @click="addAst">자원 등록</button>
                </div>
            </div>
            <div ref="gridElement" style="height: calc(100% - 45px)"></div>
        </div>
    </div>
</template>