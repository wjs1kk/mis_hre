<script setup>
import dhx from "dhx-suite-package";
import { onMounted, onUnmounted, ref } from "vue";
import { DataCollectionEx } from "@/util/data";
import { postData } from "@/util/ajax";
import { defineProps } from "vue";

const props = defineProps({
    emlId: {
        type: String,
        default: ""
    }
});
/**
 * 검색 폼과 그리드 HTML 노드
 */
const infoFormElement = ref();
const searchFormElement = ref();
const gridElement2 = ref();
/*
 * 검색 폼과 그리드
 */
/** @type {dhx.Form} */
let searchForm;
/** @type {dhx.Form} */
let infoForm;

/** @type {dhx.Grid} */
let grdList2;
/** @type {dhx.Layout} */
let grdListLayout2;
////////////
// 데이터 //
////////////

const dsList = new DataCollectionEx();
const dsList2 = new DataCollectionEx();

const emlId = ref(props.emlId);
////////////////////////
// 생명주기 이벤트 훅 //
////////////////////////

// 컴포넌트가 로드됨
onMounted(async () => {

    infoForm = new dhx.Form(infoFormElement.value, {
        rows: [
            {
                cols: [
                    { name: "emlId", type: "input", width: 320, label: "메일 ID", labelPosition: "left", labelWidth: 110, readOnly: "true", },
                    { name: "emlTtl", type: "input", width: 500, label: "메일제목", labelPosition: "left", labelWidth: 110, readOnly: "true", },
                    { name: "emlTmpltNm", type: "input", width: 320, label: "템플릿 명", labelPosition: "left", labelWidth: 110, readOnly: "true" },
                ],
            },
            {
                cols: [
                    { name: "sndCn", type: "textarea", width: 1000, height: 400, label: "발송내용", labelPosition: "left", labelWidth: 110, readOnly: "true", },
                ]
            }
        ]
    });

    searchForm = new dhx.Form(searchFormElement.value, {
        rows: [
            {
                cols: [
                    { name: "emlId", type: "input", width: 320, label: "메일 ID", labelPosition: "left", labelWidth: 110, readOnly: "true", value: props.emlId },
                ],
            },

        ]
    });

    // 조회 결과 그리드를 설정한다.
    grdList2 = new dhx.Grid(null, {
        css: "jn-grid",
        rowHeight: 34,
        headerRowHeight: 30,
        selection: "cell",
        editable: false,
        keyNavigation: true,
        sortable: false,
        data: dsList2,
        autoWidth: true,
        leftSplit: 3,
        columns: [
            { id: "rn", gravity: 48, header: [{ text: "순번", align: "center" }], editable: false },
            { id: "deptNm", gravity: 120, header: [{ text: "부서", align: "center" }] },
            { id: "rcvUserId", gravity: 80, header: [{ text: "아이디", align: "center" }] },
            { id: "rcvUserNm", gravity: 80, header: [{ text: "이름", align: "center" }] },
            { id: "rcvEmlAddr", gravity: 80, header: [{ text: "이메일주소", align: "center" }] },
            { id: "sndDt", gravity: 80, header: [{ text: "발송일시", align: "center" }] },
            { id: "sndSttsNm", gravity: 80, header: [{ text: "발송상태", align: "center" }] },
            { id: "rcvSttsNm", gravity: 80, header: [{ text: "수신상태", align: "center" }] },
            { id: "ect", gravity: 80, header: [{ text: "비고", align: "center" }] },
        ]
    });

    grdListLayout2 = new dhx.Layout(gridElement2.value, {
        rows: [
            { id: "grid" }
        ]
    });

    grdListLayout2.getCell("grid").attach(grdList2);

    await search(emlId.value);

});

// 컴포넌트가 언로드됨
onUnmounted(() => {
    grdList2?.destructor();
    grdListLayout2?.destructor();
    infoForm?.destructor();
});

/////////////////
// 사용자 함수 //
/////////////////

/**
 * 메일발송 이력을 조회한다.
 */
async function search(emlId) {
    const result = await postData("mal/emlSndMaster/getEmlSndDtl.do", {
        dsSearch: {
            emlId
        }
    });

    infoForm.setValue(result.dsList[0]);

    const data = result.dsList2;
    dsList2.parse(data);

}

</script>

<template>
    <div class="jn-page">
        <div style="height: calc(100% - 50%);">
            <div class="jn-title-container">
                <h1 class="jn-title">메일 발송 이력</h1>
            </div>

            <div class="jn-container">
                <div ref="infoFormElement"></div>
            </div>
        </div>
        <div class="jn-container" style="height: calc(100% - 90%)">
            <div class="jn-title-container">
                <h2 class="jn-sub-title-01">첨부파일</h2>
            </div>
        </div>

        <div class="jn-title-container">
            <h2 class="jn-sub-title-01" style="flex: none;">발송이력</h2>
        </div>
        <div ref="gridElement2" style="height: 500px;"></div>
    </div>
</template>