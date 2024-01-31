<script setup>
import dhx from "dhx-suite-package";
import { onMounted, onUnmounted, ref } from "vue";
import Popup from "@/components/popup/PopupBase.vue";
import { postData } from "@/util/ajax";
import { DataCollectionEx } from "@/util/data";
import { showAlert, useModalContext } from "@/util/popup";

const searchFormElement = ref();
const gridElement = ref();

let searchForm;
let grid;
let gridLayout;

const modal = useModalContext();

const dsList = new DataCollectionEx();

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
                        name: "searchType", type: "select", width: 250, label: "검색조건", labelWidth: 50, labelPosition: "left",
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
                    { name: "searchKeyword", type: "input", width: 400, labelPosition: "left", }
                ]
            },
        ]
    });

    grid = new dhx.Grid(null, {
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
            { id: "rowCheck", gravity: 48, header: [{ text: "선택", align: "center" }], type: "boolean", editable: true },
            { id: "rn", gravity: 48, header: [{ text: "순번", align: "center" }], editable: false },
            { id: "emlTmpltId", gravity: 160, header: [{ text: "템플릿 ID", align: "center" }] },
            { id: "emlTmpltNm", gravity: 240, header: [{ text: "템플릿 명", align: "center" }] },
            { id: "rtstDt", gravity: 160, header: [{ text: "작성일", align: "center" }], },
            { id: "rgstrId", gravity: 160, header: [{ text: "작성자", align: "center" }], },
            { id: "useYn", gravity: 80, header: [{ text: "사용여부", align: "center" }], },
            { id: "emlTmpltCn", header: [{ text: "내용", align: "center" }], hidden: true },
        ]
    });

    // 단일 항목 선택을 위해 그리드 셀 클릭 시 수동으로 체크 여부 설정
    grid.events.on("cellClick", row => {
        grid.data.forEach((item) => {
            grid.data.update(item.id, { rowCheck: item.id === row.id });
        });
    });

    // 그리드 크기가 화면 크기에 맞춰 자동으로 조절되도록 Layout을 만들어 그 내부에 그리드를 붙인다.
    gridLayout = new dhx.Layout(gridElement.value, {
        rows: [
            { id: "grid" }
        ]
    });

    gridLayout.getCell("grid").attach(grid);

    await search();
});

onUnmounted(() => {
    searchForm?.destructor();
    grid?.destructor();
    gridLayout?.destructor();
});

async function search() {
    const result = await postData("mal/emlSndMaster/getTmpltList.do", {
        dsSearch: searchForm.getValue()
    });

    const data = result.dsList;
    dsList.parse(data);
}

function select() {
    const data = dsList.getCheckedRows("rowCheck");

    if (data.length === 0) {
        showAlert("템플릿을 선택하세요.");
        return;
    } else if (data[0].useYn === "N") {
        showAlert("사용이 불가능한 템플릿입니다.");
        return;
    }

    modal.close({
        emlTmpltId: data[0].emlTmpltId,
        emlTmpltNm: data[0].emlTmpltNm,
        sndCn: data[0].emlTmpltCn,
    });
}

function closePopup() {
    modal.close({
        canceled: true
    });
}

</script>
<template>
    <popup style="width: 1000px;">
        <template v-slot:title>
            메일 템플릿 조회
        </template>

        <div class="jn-title-container">
            <h1 class="jn-title">메일 템플릿 목록</h1>
            <div class="jn-btn-group">
                <button @click="search">조회</button>
            </div>
        </div>

        <div ref="searchFormElement"></div>

        <div class="jn-container">
            <div class="jn-title-container">
                <h2 class="jn-sub-title-01">검색 결과</h2>
            </div>

            <div ref="gridElement" style="height: 500px;"></div>

            <div class=" jn-btn-group" style="margin-top: 25px; justify-content: center;">
                <button class="icon-select" @click="select()">선택</button>
                <button @click="closePopup()">닫기</button>
            </div>
        </div>
    </popup>
</template>
