<script setup lang="js">
import { onMounted, onUnmounted, ref } from "vue";
import dhx from "dhx-suite-package";
import { DataCollectionEx } from "@/util/data";
import { datasetConverter } from "@/util/data/convert";
import { postData } from "@/util/ajax";

/** @type {import("vue").Ref<HTMLElement>} */
const gridElement = ref();

const dsTxByMenu = new DataCollectionEx();

/** @type {dhx.Grid} */
let grid;
/** @type {dhx.Layout} */
let gridLayout;

onMounted(() => {
    grid = new dhx.Grid(null, {
        css: "jn-grid",
        leftSplit: 2,
        autoWidth: true,
        rowHeight: 34,
        headerRowHeight: 30,
        selection: "row",    // 이 화면은 조회 전용이므로 행 단위 선택으로 동작하도록 한다.
        sortable: false,
        editable: false,    // 이 화면은 조회 전용이므로 editable을 false로 설정한다.
        data: dsTxByMenu,
        columns: [
            { id: "accessDate", width: 120, header: [{ text: "요청일자", align: "center" }] },
            { id: "sysId", width: 120, header: [{ text: "시스템 ID", align: "center" }] },
            { id: "sysNm", width: 200, header: [{ text: "시스템명", align: "center" }] },
            { id: "progId", width: 120, header: [{ text: "프로그램 ID", align: "center" }] },
            { id: "progNm", width: 200, header: [{ text: "프로그램명", align: "center" }] },
            { id: "menuId", width: 120, header: [{ text: "메뉴 ID", align: "center" }] },
            { id: "menuNm", width: 200, header: [{ text: "메뉴명", align: "center" }] },
            { id: "actionName", width: 120, header: [{ text: "수행 업무", align: "center" }] },
            { id: "accessCount", width: 120, header: [{ text: "접근 횟수", align: "center" }] },
        ]
    });

    gridLayout = new dhx.Layout(gridElement.value, {
        rows: [
            { id: "grid" }
        ]
    });
    gridLayout.getCell("grid").attach(grid);
});

onUnmounted(() => {
    grid?.destructor();
    gridLayout?.destructor();
});

async function search(searchData) {
    const dsSearch = datasetConverter(searchData)
        .dateFormat("accessFromDt", "yyyy-MM-dd", "yyyyMMdd")
        .dateFormat("accessToDt", "yyyy-MM-dd", "yyyyMMdd")
        .convert();
    const result = await postData("sm/progStat/getTxByMenuStat.do", { dsSearch: dsSearch });
    dsTxByMenu.parse(result.dsTxByMenu);
}

/**
 * search 함수를 메서드로 내보낸다.
 */
defineExpose({
    search
});

</script>

<template>
    <div style="height: 100%;">
        <div class="jn-title-container">
            <h2 class="jn-sub-title-01">검색 결과</h2>
            <div class="jn-btn-group">
            </div>
        </div>
        <div ref="gridElement" style="height: calc(100% - 45px);">
        </div>
    </div>
</template>
