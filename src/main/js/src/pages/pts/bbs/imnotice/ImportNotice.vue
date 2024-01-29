<script setup lang="js">
import dhx from "dhx-suite-package";
import { onMounted, onUnmounted, ref } from "vue";
import { getCommonCodeCombo, toSelectOptions } from "@/util/combo";
import { useMessageStore } from "@/stores/message";
import { postData } from "@/util/ajax";
import { DataCollectionEx, rowStatusTemplate } from "@/util/data";
import { showAlert, showConfirm } from "@/util/popup";
import { datasetConverter } from "@/util/data/convert";
import { formatDate } from "@/util/date";

/*
 * 공통 메세지
 */
const message = useMessageStore();

/*
 * 각각 검색 폼과 그리드를 연결할 HTML 요소
 */
const grdImportNoticeElement = ref();
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
let grdImportNotice;
/** @type {dhx.Layout} */
let grdImportNoticeLayout;

////////////
// 데이터 //
////////////

/**
 * 게시판 목록 데이터를 저장한다.
 * @type {DataCollectionEx}
 */
const dsList = new DataCollectionEx();

/** @type {import("@/util/combo").ComboItem[]} */
let searchTyCombo;

/////////////////
// 생명주기 훅 //
/////////////////

/**
 * 컴포넌트 로드
 */
onMounted(async () => {
    await getCombo();

    // 공지기간 셋팅
    const now = new Date();
    const firstDate = new Date(now);
    firstDate.setDate(1);

    let date = new Date();
    let y = date.getFullYear();
    let m = date.getMonth();
    const lastDate = new Date(y, m + 1, 0);

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
                padding: "0 5px 0 0",
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
                padding: "0 60px 0 0",
                rows: [
                    {
                        name: "searchKeyword",
                        type: "input",
                        width: 300
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
                        label: "공지 기간",
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
            },
            {
                padding: "0 60px 0 0",
                height: 26,
                cols: [
                    {
                        name: "popYn",
                        type: "checkbox",
                        width: 150,
                        labelPosition: "left",
                        label: "팝업 공지",
                        labelWidth: 110
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
    grdImportNotice = new dhx.Grid(null, {
        css: "jn-grid",
        leftSplit: 3,
        autoWidth: true,
        rowHeight: 34,
        headerRowHeight: 30,
        selection: "cell",
        editable: true,
        sortable: false,
        data: dsList,
        autoWidth: true,
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
                id: "bbsTyNm",
                gravity: 150,
                header: [{ text: "게시판 그룹", align: "center" }],
                editable: false
            },
            {
                id: "bbsId",
                type: "string",
                hidden: true,
                header: [{}]
            },
            {
                id: "nttTtl",
                gravity: 300,
                header: [{ text: "게시판 제목", align: "center" }],
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
                gravity: 150,
                header: [{ text: "작성일", align: "center" }],
                editable: false
            },
            {
                id: "popYn",
                type: "boolean",
                gravity: 48,
                header: [{ text: "팝업", align: "center" }],
                editable: true
            },
            {
                id: "ntcBgnYmd",
                header: [{ text: "공지시작", align: "center" }],
                gravity: 150,
                type: "date",
                format: "%Y-%m-%d",
                editable: true
            },
            {
                id: "ntcEndYmd",
                header: [{ text: "공지종료", align: "center" }],
                gravity: 150,
                type: "date",
                format: "%Y-%m-%d",
                editable: true
            }
        ]
    });

    grdImportNoticeLayout = new dhx.Layout(grdImportNoticeElement.value, {
        rows: [{ id: "grid" }]
    });

    grdImportNoticeLayout.getCell("grid").attach(grdImportNotice);

    await search();
});

/**
 * 화면이 닫힌다.
 */
onUnmounted(() => {
    grdImportNotice?.destructor();
    grdImportNoticeLayout?.destructor();
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
        .checkbox("popYn", [false, true], ["N", "Y"]) // 서버로 보내는 것
        .dateFormat("strYmd", "yyyy-MM-dd", "yyyyMMdd")
        .dateFormat("endYmd", "yyyy-MM-dd", "yyyyMMdd")
        .convert();
    const result = await postData("bbs/imnotice/getImportNoticeManage.do", { dsSearch: dsSearch });
    const list = datasetConverter(result.dsList)
        .checkbox("popYn", ["N", "Y"], [false, true]) // 서버로부터 받는 것
        .dateFormat("ntcBgnYmd", "yyyyMMdd", "yyyy-MM-dd")
        .dateFormat("ntcEndYmd", "yyyyMMdd", "yyyy-MM-dd")
        .convert();

    grdImportNotice.data.parse(list);
}

/**
 * 저장
 */
async function save() {
    const result = await showConfirm(message.getMessage("CM_CFM_BEFORE_SAVE"));
    if (result) {
        const dsData = datasetConverter(dsList.getCheckedRows("rowCheck"))
            .checkbox("popYn", [false, true], ["N", "Y"])
            .dateFormat("ntcBgnYmd", "yyyy-MM-dd", "yyyyMMdd")
            .dateFormat("ntcEndYmd", "yyyy-MM-dd", "yyyyMMdd")
            .convert();

        const result = await postData("bbs/imnotice/setImportNoticeManage.do", {
            dsList: dsData
        });
        if (result.callbackMsg === "success") {
            await showAlert(message.getMessage("CM_MSG_SAVE_SUCCESS"));
            await search();
        } else {
            await showAlert("저장 중 오류가 발생하였습니다.");
        }
    }
}
</script>

<template>
    <div class="jn-page">
        <div class="jn-title-container">
            <h1 class="jn-title">공지사항</h1>
            <div class="jn-btn-group">
                <button @click="search()">조회</button>
                <button class="jn-btn-save" @click="save()">저장</button>
            </div>
        </div>

        <div ref="searchFormElement"></div>

        <div class="jn-container" style="height: calc(100% - 177px)">
            <div class="jn-title-container">
                <h2 class="jn-sub-title-01"></h2>
                <div class="jn-btn-group"></div>
            </div>
            <div ref="grdImportNoticeElement" style="height: calc(100% - 45px)"></div>
        </div>
    </div>
</template>
