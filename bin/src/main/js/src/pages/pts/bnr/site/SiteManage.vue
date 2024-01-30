<script setup lang="js">
import dhx from "dhx-suite-package";
import { onMounted, onUnmounted, ref } from "vue";
import { getCommonCodeCombo } from "@/util/combo";
import { useMessageStore } from "@/stores/message";
import { postData } from "@/util/ajax";
import { DataCollectionEx, rowStatusTemplate } from "@/util/data";
import { showAlert, showConfirm } from "@/util/popup";
import { validator } from "@/util/data/validate";

// 공통 메시지 기능을 사용한다.
const message = useMessageStore();

/*
 * 각각 검색 폼과 그리드를 연결할 HTML 요소
 */
const searchFormElement = ref();
const gridElement = ref();

/**
 * 검색 폼
 * @type {dhx.Form}
 */
let searchForm;

/**
 * 게시판마스터 목록 그리드
 * @type {dhx.Grid}
 */
let grdSite;

/** @type {dhx.Layout} */
let grdSiteLayout;

////////////
// 데이터 //
////////////

/**
 * 배너 목록 데이터를 저장한다.
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
                                value: "SITENAME",
                                content: "사이트명"
                            },
                            {
                                value: "SITEURL",
                                content: "사이트URL"
                            },
                            {
                                value: "WRITERNAME",
                                content: "등록자"
                            }
                        ]
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

    // 그리드 생성
    grdSite = new dhx.Grid(null, {
        css: "jn-grid",
        leftSplit: 3,
        autoWidth: true,
        rowHeight: 34,
        headerRowHeight: 30,
        selection: "cell",
        editable: true,
        sortable: false,
        data: dsList,
        columns: [
            { id: "rn", width: 48, header: [{ text: "순번", align: "center" }], editable: false },
            {
                id: "rowCheck",
                width: 48,
                header: [{ htmlEnable: true, text: "<input type='checkbox'>", align: "center" }],
                type: "boolean"
            },
            {
                id: "rowStatus",
                width: 48,
                header: [{ text: "상태", align: "center" }],
                editable: false,
                align: "center",
                template: rowStatusTemplate
            },
            {
                id: "siteNm",
                gravity: 200,
                header: [{ text: "사이트명", align: "center" }]
            },
            {
                id: "siteUrl",
                gravity: 200,
                header: [{ text: "사이트URL", align: "center" }]
            },
            {
                id: "rgstrId",
                gravity: 200,
                header: [{ text: "등록자", align: "center" }]
            },
            {
                id: "updtDt",
                gravity: 200,
                header: [{ text: "등록일", align: "center" }]
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
    grdSiteLayout = new dhx.Layout(gridElement.value, {
        rows: [{ id: "grid" }]
    });

    grdSiteLayout.getCell("grid").attach(grdSite);

    grdSite.events.on("beforeEditStart", (row, col) => {
        if (col.id === "siteId") {
            return row.rowStatus === "inserted";
        } else {
            return true;
        }
    });

    await searchSiteManage();
});

/**
 * 화면이 닫힌다.
 */
onUnmounted(() => {
    grdSite?.destructor();
    grdSiteLayout?.destructor();
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
async function searchSiteManage() {
    const result = await postData("bnr/site/getSiteManageList.do", {
        dsSearch: searchForm.getValue()
    });

    grdSite.data.parse(result.dsList);
}

/**
 *  행추가
 */
function addRow() {
    grdSite.data.add({});
}

/**
 * 행삭제
 */
function removeRow() {
    const checked = grdSite.data.getCheckedRowIds("rowCheck");
    grdSite.data.remove(checked);
}

/**
 * 저장
 */
async function save() {
    const validationResult = validator(grdSite)
        .column("siteNm", [["required"], ["maxLength", 100]])
        .column("siteUrl", [["required"], ["maxLength", 2000]])
        .validate();

    if (!validationResult) {
        return;
    }

    const confirmResult = await showConfirm(message.getMessage("CM_CFM_BEFORE_SAVE"));
    if (!confirmResult)
        return;

    const dsData = dsList.getCheckedRows("rowCheck");

    const result = await postData("bnr/site/saveSiteManageList.do", {
        dsList: dsData
    });

    if (result.callbackMsg === "success") {
        await showAlert(message.getMessage("CM_MSG_SAVE_SUCCESS"));
        await searchSiteManage();
    } else {
        await showAlert("저장 중 오류가 발생하였습니다.");
    }
}

</script>

<template>
    <div class="jn-page">
        <div class="jn-title-container">
            <h1 class="jn-title">사이트 관리</h1>
            <div class="jn-btn-group">
                <button @click="search">조회</button>
                <button class="jn-btn-save" @click="save">저장</button>
            </div>
        </div>

        <div ref="searchFormElement"></div>

        <div class="jn-container" style="height: calc(100% - 143px);">
            <div class="jn-title-container">
                <h2 class="jn-sub-title-01">검색 결과</h2>
                <div class="jn-btn-group">
                    <button class="jn-btn-form icon-row-add" @click="addRow">행추가</button>
                    <button class="jn-btn-form icon-row-delete" @click="removeRow">행삭제</button>
                </div>
            </div>
            <div ref="gridElement" style="height: calc(100% - 45px);"></div>
        </div>
    </div>
</template>
