<script setup>
import dhx from "dhx-suite-package";
import { onMounted, onUnmounted, ref } from "vue";
import { getSystemIdCombo, toSelectOptions } from "@/util/combo";
import { formatDate } from "@/util/date";
import { useSessionStore } from "@/stores/session";
import UsersByMenuTab from "./UsersByMenuTab.vue";
import TxByMenuTab from "./TxByMenuTab.vue";
import MenuByUserTab from "./MenuByUserTab.vue";
import TxByUserTab from "./TxByUserTab.vue";

const session = useSessionStore();

/*
 * 검색 폼과 그리드를 연결할 HTML 요소
 */
let searchFormElement = ref();
let tabbarElement = ref();

/**
 * 검색 폼
 * @type {dhx.Form}
 */
let searchForm;
/** @type {dhx.Tabbar} */
let tabbar;

/** 현재 탭 ID */
const currentTabId = ref("usersByMenu");

/**
 * 메뉴별 사용자 탭
 * @type {import("vue").Ref<InstanceType<typeof UsersByMenuTab>>}
 */
const usersByMenuTab = ref();

/**
 * 메뉴별 트랜잭션 탭
 * @type {import("vue").Ref<InstanceType<typeof TxByMenuTab>>}
 */
const txByMenuTab = ref();

/**
 * 메뉴별 사용자 탭
 * @type {import("vue").Ref<InstanceType<typeof MenuByUserTab>>}
 */
const menuByUserTab = ref();

/**
 * 메뉴별 사용자 탭
 * @type {import("vue").Ref<InstanceType<typeof TxByUserTab>>}
 */
const txByUserTab = ref();

////////////
// 데이터 //
////////////

/** @type {import("@/util/combo").ComboItem[]} */
let sysIdCombo;

/////////////////
// 생명주기 훅 //
/////////////////

onMounted(async () => {
    await getCombo();
    const now = new Date();
    const firstDate = new Date(now);
    firstDate.setDate(1);

    // 검색 폼 설정
    searchForm = new dhx.Form(searchFormElement.value, {
        padding: "15px 20px",
        height: 60,
        css: "jn-search-form",
        cols: [
            {
                padding: "0 60px 0 0",
                rows: [
                    { name: "sysId", type: "select", width: 310, label: "시스템", labelPosition: "left", labelWidth: 100, options: toSelectOptions(sysIdCombo), value: session.user.sysId },
                ]
            },
            {
                padding: "0 60px 0 0",
                rows: [
                    { name: "menuNm", type: "input", width: 310, label: "접근메뉴명", labelPosition: "left", labelWidth: 100, autocomplete: false }
                ]
            },
            {
                padding: "0 60px 0 0",
                rows: [
                    {
                        padding: "0",
                        height: 26,
                        cols: [
                            { name: "accessFromDt", type: "datepicker", width: 220, label: "기간", labelPosition: "left", labelWidth: 100, dateFormat: "%Y-%m-%d", value: formatDate(firstDate, "yyyy-MM-dd"), editable: true },
                            { name: "accessToDt", type: "datepicker", width: 140, label: "~", labelPosition: "left", dateFormat: "%Y-%m-%d", value: formatDate(now, "yyyy-MM-dd"), editable: true, padding: "0 0 0 10px" },
                        ]
                    }
                ]
            }
        ]
    });

    searchForm.events.on("change", name => {
        if (name === "sysId") {
            search();
        }
    });

    // 탭 바 설정
    tabbar = new dhx.Tabbar(tabbarElement.value, {
        css: "jn-tabbar",
        tabHeight: 34,
        closable: false,
        noContent: true,
        disabled: ["txByUser"],
        views: [
            { id: "userByMenu", tab: "메뉴별 사용자" },
            { id: "txByMenu", tab: "메뉴별 트랜잭션" },
            { id: "menuByUser", tab: "사용자별 메뉴 접근" },
            { id: "txByUser", tab: "사용자별 트랜잭션" },
        ]
    });

    tabbar.events.on("change", id => {
        currentTabId.value = id;
        setTimeout(() => tabbar.paint());
        search();
    });

    currentTabId.value = "userByMenu";

    await search();
});

onUnmounted(() => {
    searchForm?.destructor();
    tabbar?.destructor();
});

/////////////////
// 사용자 함수 //
/////////////////

async function getCombo() {
    sysIdCombo = await getSystemIdCombo();
}

async function search() {
    const searchData = searchForm.getValue();

    switch (currentTabId.value) {
        case "userByMenu":
            await usersByMenuTab.value?.search(searchData);
            break;
        case "txByMenu":
            await txByMenuTab.value?.search(searchData);
            break;
        case "menuByUser":
            await menuByUserTab.value?.search(searchData);
            break;
        case "txByUser":
            await txByUserTab.value?.search(searchData);
            break;
        default:
            break;
    }
}

</script>

<template>
    <div class="jn-page">
        <div class="jn-title-container">
            <h1 class="jn-title">프로그램 사용 통계</h1>
            <div class="jn-btn-group">
                <button @click="search()">조회</button>
            </div>
        </div>

        <div ref="searchFormElement">
        </div>

        <div class="jn-container" style="height: calc(100% - 143px);">
            <div ref="tabbarElement" style="height: 34px;"></div>
            <div style="height: calc(100% - 34px);">
                <users-by-menu-tab ref="usersByMenuTab"
                    :class="currentTabId == 'userByMenu' ? '' : 'hidden'"></users-by-menu-tab>
                <tx-by-menu-tab ref="txByMenuTab" :class="currentTabId == 'txByMenu' ? '' : 'hidden'"></tx-by-menu-tab>
                <menu-by-user-tab ref="menuByUserTab"
                    :class="currentTabId == 'menuByUser' ? '' : 'hidden'"></menu-by-user-tab>
                <tx-by-user-tab ref="txByUserTab" :class="currentTabId == 'txByUser' ? '' : 'hidden'"></tx-by-user-tab>
            </div>
        </div>
    </div>
</template>

<style scoped>
.hidden {
    display: none;
}
</style>
