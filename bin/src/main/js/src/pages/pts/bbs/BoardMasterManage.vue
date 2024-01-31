<script setup lang="js">
import dhx from "dhx-suite-package";
import { onMounted, onUnmounted, ref } from "vue";
import { getCommonCodeCombo } from "@/util/combo";
import { useMessageStore } from "@/stores/message";
import { postData } from "@/util/ajax";
import { DataCollectionEx, rowStatusTemplate } from "@/util/data";
import { showAlert, showConfirm } from "@/util/popup";
import { datasetConverter } from "@/util/data/convert";

// 공통 메시지 기능을 사용한다.
const message = useMessageStore();

/*
 * 각각 검색 폼과 그리드를 연결할 HTML 요소
 */
const grdBoardMasterElement = ref();
const searchFormElement = ref();

/**
 * 검색 폼
 * @type {dhx.Form}
 */
let searchForm;

/**
 * 게시판마스터 목록 그리드
 * @type {dhx.Grid}
 */
let grdBoardMaster;
/** @type {dhx.Layout} */
let grdBoardMasterLayout;

////////////
// 데이터 //
////////////

/**
 * 게시판 목록 데이터를 저장한다.
 * @type {DataCollectionEx}
 */
const dsList = new DataCollectionEx();

/////////////////
// 생명주기 훅 //
/////////////////

/**
 * 화면이 열렸다
 */
onMounted(async () => {
    // 콤보박스 데이터 가져옴
    const { useYnCombo } = await getCombo();

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
                        name: "bbsTyCd",
                        type: "select",
                        width: 310,
                        label: "게시판 그룹",
                        labelPosition: "left",
                        labelWidth: 100,
                        options: [
                            {
                                value: "",
                                content: "전체"
                            },
                            {
                                value: "BRD-010-010",
                                content: "일반게시판"
                            },
                            {
                                value: "BRD-010-020",
                                content: "자료게시판"
                            },
                            {
                                value: "BRD-010-030",
                                content: "이미지게시판"
                            }
                        ]
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
                        options: [
                            {
                                value: "",
                                content: "전체"
                            },
                            {
                                value: "BBSMST_ID",
                                content: "게시판 ID"
                            },
                            {
                                value: "BBSMST_TTL",
                                content: "내용"
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

    // 그리드 생성
    grdBoardMaster = new dhx.Grid(null, {
        css: "jn-grid",
        leftSplit: 3,
        autoWidth: true,
        rowHeight: 34,
        headerRowHeight: 30,
        selection: "cell",
        editable: true,
        sortable: false,
        autoWidth: true,
        data: dsList,
        columns: [
            { id: "rn", gravity: 48, header: [{ text: "순번", align: "center" }], editable: false },
            {
                id: "rowCheck",
                gravity: 48,
                header: [{ htmlEnable: true, text: "<input type='checkbox'>", align: "center" }],
                type: "boolean"
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
                id: "bbsTyCd",
                gravity: 200,
                header: [{ text: "게시판 그룹", align: "center" }],
                editorType: "select",
                options: [
                    {
                        id: "",
                        value: "선택"
                    },
                    {
                        id: "BRD-010-010",
                        value: "일반게시판"
                    },
                    {
                        id: "BRD-010-020",
                        value: "자료게시판"
                    },
                    {
                        id: "BRD-010-030",
                        value: "이미지게시판"
                    }
                ]
            },
            {
                id: "bbsId",
                gravity: 200,
                header: [{ text: "게시판 ID", align: "center" }]
            },
            {
                id: "bbsNm",
                gravity: 550,
                header: [{ text: "게시판 제목", align: "center" }]
            },
            {
                id: "replyYn",
                gravity: 90,
                header: [{ text: "답변", align: "center" }],
                type: "boolean",
                editable: true
            },
            {
                id: "answrYn",
                gravity: 90,
                header: [{ text: "댓글", align: "center" }],
                type: "boolean",
                editable: true
            },
            {
                id: "fileAtchYn",
                gravity: 90,
                header: [{ text: "파일첨부", align: "center" }],
                type: "boolean",
                editable: true
            },
            {
                id: "rcmdYn",
                gravity: 90,
                header: [{ text: "추천", align: "center" }],
                type: "boolean",
                editable: true
            },
            {
                id: "useYn",
                gravity: 180,
                header: [{ text: "사용여부", align: "center" }],
                editorType: "select",
                options: useYnCombo
            }
        ]
    });

    // 그리드 크기가 화면 크기에 맞춰 자동으로 조절되도록 Layout을 만들어 그 내부에 그리드를 붙인다.
    grdBoardMasterLayout = new dhx.Layout(grdBoardMasterElement.value, {
        rows: [{ id: "grid" }]
    });

    grdBoardMasterLayout.getCell("grid").attach(grdBoardMaster);

    // grdBoardMaster.events.on("beforeSelect", () => {
    //     return !hasChange();
    // }); // 굳이 체크할 필요가 없다.

    grdBoardMaster.events.on("beforeEditStart", (row, col) => {
        if (col.id === "bbsId") {
            return row.rowStatus === "inserted";
        } else {
            return true;
        }
    });

    await searchBoardMaster();
});

/**
 * 화면이 닫힌다.
 */
onUnmounted(() => {
    grdBoardMaster?.destructor();
    grdBoardMasterLayout?.destructor();
    searchForm?.destructor();
});

/////////////////
// 사용자 함수 //
/////////////////

/**
 *  사용여부 콤보
 */
async function getCombo() {
    const commonCodePromise = getCommonCodeCombo({
        useYnCombo: ["SM", "USE_YN"]
    });

    const [commonCodeCombo] = await Promise.all([commonCodePromise]);

    return {
        ...commonCodeCombo
    };
}

/**
 *  게시판 목록 조회
 */
async function searchBoardMaster() {
    const result = await postData("bbs/boardMaster/getBoardMasterList.do", {
        dsSearch: searchForm.getValue()
    });

    const data = datasetConverter(result.dsList)
        .checkbox("replyYn", ["N", "Y"], [false, true])
        .checkbox("answrYn", ["N", "Y"], [false, true])
        .checkbox("fileAtchYn", ["N", "Y"], [false, true])
        .checkbox("rcmdYn", ["N", "Y"], [false, true])
        .convert();
    //grdBoardMaster.data.parse(data);
    // 값을 data로 받아야 한다. 두개 있을 필요없음

    dsList.parse(data);
}

/**
 *  행추가
 */
function addRow() {
    grdBoardMaster.data.add({});
}

/**
 * 행삭제
 */
function removeRow() {
    const checked = grdBoardMaster.data.getCheckedRowIds("rowCheck");
    grdBoardMaster.data.remove(checked);
}

/**
 * 저장
 */
async function save() {
    const result = await showConfirm(message.getMessage("CM_CFM_BEFORE_SAVE"));
    if (result) {
        const dsData = datasetConverter(dsList.getCheckedRows("rowCheck"))
            .checkbox("replyYn", [false, true], ["N", "Y"])
            .checkbox("answrYn", [false, true], ["N", "Y"])
            .checkbox("fileAtchYn", [false, true], ["N", "Y"])
            .checkbox("rcmdYn", [false, true], ["N", "Y"])
            .convert();

        const result = await postData("bbs/boardMaster/setBoardMasterList.do", {
            dsList: dsData
        });
        if (result.callbackMsg === "success") {
            await showAlert(message.getMessage("CM_MSG_SAVE_SUCCESS"));
            await searchBoardMaster();
        } else {
            await showAlert("저장 중 오류가 발생하였습니다.");
        }
    }
}

/**
 *  상태에 따른 변경
 */
function hasChange() {
    const result = dsList
        .serialize()
        .some(
            (e) =>
                e.rowStatus === "inserted" || e.rowStatus === "updated" || e.rowStatus === "deleted"
        );
    if (result) {
        showAlert(message.getMessage("CM_MSG_CHANGE_DATA"));
    }

    return result;
}
</script>

<template>
    <div class="jn-page">
        <div class="jn-title-container">
            <h1 class="jn-title">게시판 목록</h1>
            <div class="jn-btn-group">
                <button @click="searchBoardMaster()">조회</button>
                <button class="jn-btn-save" @click="save()">저장</button>
            </div>
        </div>

        <div ref="searchFormElement"></div>

        <div class="jn-container program-container">
            <div class="jn-title-container">
                <h2 class="jn-sub-title-01">게시판 관리</h2>
                <div class="jn-btn-group">
                    <button class="jn-btn-form icon-row-add" @click="addRow">행추가</button>
                    <button class="jn-btn-form icon-row-delete" @click="removeRow">행삭제</button>
                </div>
            </div>
            <div ref="grdBoardMasterElement" style="height: calc(100% - 45px)"></div>
        </div>
    </div>
</template>

<style scoped>
.program-container {
    flex: none;
    height: calc((100% - 177px));
}
</style>
