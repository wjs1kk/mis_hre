<script setup lang="js">
import dhx from "dhx-suite-package";
import { onMounted, ref } from "vue";
import { useMessageStore } from "@/stores/message";
import { postData } from "@/util/ajax";
import { DataCollectionEx, rowStatusTemplate } from "@/util/data";
import { showAlert, showConfirm } from "@/util/popup";

/*
 * 공통 메시지
 */
const message = useMessageStore();

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
let grdBoardScrapList;
/** @type {dhx.Layout} */
let grdBoardScrapListLayout;

////////////
// 데이터 //
////////////

/**
 * 사용자 목록 데이터를 저장한다.
 * @type {DataCollectionEx}
 */
let dsScrpList = new DataCollectionEx();

////////////////////////
// 생명주기 이벤트 훅 //
////////////////////////

/*
 * 컴포넌트 로드
 */
onMounted(async () => {
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
                        name: "scrpNm",
                        type: "input",
                        width: 500,
                        label: "스크랩 명",
                        labelPosition: "left",
                        labelWidth: 100
                    }
                ]
            }
        ]
    });

    // 그리드 설정
    grdBoardScrapList = new dhx.Grid(null, {
        css: "jn-grid",
        leftSplit: 3,
        autoWidth: true,
        rowHeight: 34,
        headerRowHeight: 30,
        selection: "row",
        editable: false,
        sortable: false,
        data: dsScrpList,
        autoWidth: true,
        columns: [
            { id: "rn", gravity: 48, header: [{ text: "순번", align: "center" }], editable: false },
            {
                id: "rowCheck",
                gravity: 48,
                header: [{ htmlEnable: true, text: "<input type='checkbox'>", align: "center" }],
                type: "boolean",
                editable: true
            },
            {
                id: "rowStatus",
                gravity: 48,
                header: [{ text: "상태", align: "center" }],
                editable: false,
                align: "center",
                template: rowStatusTemplate
            },
            {
                id: "scrpNm",
                gravity: 1100,
                header: [{ text: "스크랩 명", align: "left" }]
            },
            {
                id: "scrpDt",
                gravity: 300,
                header: [{ text: "스크랩 일자", align: "left" }]
            }
        ]
    });

    // 그리드 크기- 화면 크기 자동조절 Layout을 그리드에 넣음
    grdBoardScrapListLayout = new dhx.Layout(gridElement.value, {
        rows: [{ id: "grid" }]
    });

    grdBoardScrapListLayout.getCell("grid").attach(grdBoardScrapList);

    await search();
});

/////////////////
// 사용자 함수 //
/////////////////

/**
 *  검색
 */
async function search() {
    const result = await postData("bbs/boardScrap/getBoardScrapList.do", {
        dsSearch: searchForm.getValue()
    });

    const data = result.dsScrpList;
    dsScrpList.parse(data);
}

/**
 * 삭제
 */
async function deleteScrap() {
    const checkedRows = grdBoardScrapList.data.getCheckedRows("rowCheck");
    if (checkedRows.length === 0) {
        await showAlert("삭제할 데이터를 선택해주세요.");
        return;
    }

    const result = await showConfirm(message.getMessage("CM_CFM_DELETE"));
    if (!result) {
        return;
    }

    const data = await postData("bbs/boardScrap/deleteBoardScrapManage.do", {
        dsScrpList: checkedRows
    });

    if (data.callbackMsg === "success") {
        await showAlert("CM_MSG_DELETE_SUCCESS");
        await search();
    } else {
        await showAlert("선택한 항목을 삭제하는 중 오류가 발생했습니다.");
    }
}
</script>

<template>
    <div class="jn-page">
        <div class="jn-title-container">
            <h1 class="jn-title">스크랩 목록</h1>
            <div class="jn-btn-group">
                <button @click="search()">조회</button>
            </div>
        </div>

        <div ref="searchFormElement"></div>

        <div class="jn-container" style="height: calc(100% - 143px)">
            <div class="jn-title-container">
                <h2 class="jn-sub-title-01"></h2>
                <div class="jn-btn-group">
                    <button class="jn-btn-delete" @click="deleteScrap()">스크랩 삭제</button>
                </div>
            </div>

            <div ref="gridElement" style="height: calc(100% - 45px)"></div>
        </div>
    </div>
</template>
