<script setup lang="ts">
import { getCurrentInstance, isRef, onMounted, onUnmounted, provide, ref } from "vue";
import { Tabbar } from "dhx-suite-package";
import GlobalHeader from "@/components/layout/GlobalHeader.vue";
import { useGlobalUiState, type MdiTabOptions } from "@/stores/ui";
import { getPageComponent } from "@/util";
import { tabbarStateKey, type TabInfo } from "./types";
import SideMenu from "@/components/layout/SideMenu.vue";

const uiState = useGlobalUiState();
const mainTabId = "home";
const mainTabTitle = "HOME";

let tabbar: Tabbar;
let tabCount = 1;

////////////
// 데이터 //
////////////

const tabbarElement = ref<HTMLElement>();
const tabs = ref<TabInfo[]>([
    {
        tabId: mainTabId,
        tabTitle: mainTabTitle,
        url: "pages/MainPage.vue",
        component: getPageComponent("pages/MainPage.vue"),
        menuPath: [],
        ref: ref(),
        hideMenuPath: true
    }
]);
const currentTab = ref<string>(mainTabId);

provide(tabbarStateKey, {
    tabs,
    currentTab
});

////////////////////////
// 생명주기 이벤트 훅 //
////////////////////////

onMounted(async () => {
    tabbar = new Tabbar(tabbarElement.value, {
        css: "jn-mdi-tab-bar",
        tabHeight: 30,
        closable: true,
        noContent: true,
        views: [
            { id: mainTabId, tab: "", tabWidth: 0, tabCss: "jn-mdi-main-tab" } as any
        ]
    });

    tabbar.events.on("change", onTabChange);
    tabbar.events.on("beforeClose", onTabBeforeClose);
    tabbar.events.on("afterClose", onTabAfterClose);

    uiState.setMdiLayout(getCurrentInstance());
});

onUnmounted(() => {
    tabbar.destructor();
    uiState.setMdiLayout(null);
});

///////////////////////////////
// 사용자 정의 함수 (public) //
///////////////////////////////

function openTab(options: MdiTabOptions) {
    if (tabbar.getCell(options.tabId) != null) {
        tabbar.setActive(options.tabId);
        return;
    }

    tabbar.addTab({
        id: options.tabId,
        tab: options.tabTitle
    }, tabCount);

    const list = [...tabs.value];
    const item: TabInfo = {
        ...options,
        menuPath: options.menuPath ?? [],
        ref: ref(),
        component: options.url ? getPageComponent(options.url) : null
    };
    list.push(item);
    tabs.value = list;
    tabCount++;
    tabbar.setActive(options.tabId);
}

function closeTab(idOrIndex: string | number) {
    if (typeof idOrIndex === "number") {
        tabbar.removeTab(tabs.value[idOrIndex].tabId);
    } else {
        tabbar.removeTab(idOrIndex);
    }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function closeAllTab(force: boolean) {
    const ids = tabs.value.map(e => e.tabId)
        .filter(e => e !== mainTabId);

    tabs.value = tabs.value.filter(e => e.tabId === mainTabId);

    for (const id of ids) {
        tabbar.removeTab(id);
    }
}

function invokeMethod(tabId: string, method: string, args: unknown[]) {
    const filtered = tabs.value.filter(e => e.tabId === tabId);
    if (filtered.length === 0) {
        return;
    }

    const tab = filtered[0];
    const instance = tab.ref.value;

    if (instance == null) {
        return;
    }

    if (!(method in instance)) {
        return;
    }

    if (typeof instance[method] !== "function") {
        const prop = instance[method];
        return isRef(prop) ? prop.value : prop;
    } else {
        return instance[method](...args);
    }
}

function activateTab(tabId: string) {
    tabbar.setActive(tabId);
}

defineExpose({
    openTab,
    closeTab,
    closeAllTab,
    invokeMethod,
    activateTab
});

//////////////////////
// 사용자 정의 함수 //
//////////////////////

function onTabChange(id: string) {
    currentTab.value = id;
    setTimeout(() => {
        // 모든 탭이 닫혔다가 다시 열리면 탭 크기가 잘못 계산되어 렌더링 후 setTimeout 콜백에서 다시 그리도록 처리
        tabbar.paint();
    });
}

function onTabBeforeClose(id: string) {
    const index = findIndex(id);
    if (index < 0) {
        return;
    }

    const item = tabs.value[index];
    if (item.ref != null && typeof item.ref.onBeforeClose == "function") {
        return item.ref.onBeforeClose();
    } else {
        return true;
    }
}

function onTabAfterClose(id: string) {
    const index = findIndex(id);
    if (index < 0) {
        return;
    }

    const array = [...tabs.value];
    array.splice(index, 1);
    const newIndex = (index >= array.length) ? index - 1 : index;

    tabs.value = array;
    currentTab.value = array[newIndex]?.tabId ?? null;
    tabbar.setActive(array[newIndex].tabId);
}

function findIndex(id: string) {
    const array = tabs.value;
    const count = array.length;
    for (let i = 0; i < count; i++) {
        const item = array[i];
        if (item.tabId === id)
            return i;
    }
    return -1;
}

</script>

<template>
    <GlobalHeader></GlobalHeader>
    <div style="height: 35px; position: relative; background-color: var(--primary-color);">
        <div ref="tabbarElement"></div>
        <div class="jn-mdi-tab-bar__button-group">
            <button type="button" class="jn-mdi-tab-bar__button icon-tab-prev" style="width: 35px;"></button>
            <button type="button" class="jn-mdi-tab-bar__button icon-tab-next" style="width: 35px;"></button>
            <button type="button" class="jn-mdi-tab-bar__button icon-home" title="홈"
                @click="activateTab(mainTabId)"></button>
            <button type="button" class="jn-mdi-tab-bar__button icon-close-all-tab" title="모든 탭 닫기"
                @click="closeAllTab(true)"></button>
        </div>
    </div>
    <div style="height: calc(100% - 143px); overflow: auto; position: relative;">
        <RouterView></RouterView>
        <SideMenu></SideMenu>
    </div>
</template>

<style lang="scss">
.jn-mdi-tab-bar {
    background-color: var(--mdi-tabbar-background-color);
    padding: 5px 192px 0 50px;

    & .dhx_tabbar-header__wrapper {
        border-bottom: none;
    }

    & .dhx_tabbar-header {
        gap: 2px;
    }

    & .dhx_tabbar-tab-button {
        font-size: 0.75rem;
        font-weight: 700;
        line-height: 1;
        padding: 0 25px 0 14px;
        text-transform: none;
        color: var(--mdi-tabbar-tab-foreground-color);
        background-color: var(--mdi-tabbar-tab-background-color);

        &+.dhx_tabbar-tab__close {
            color: var(--mdi-tabbar-tab-foreground-color);
        }
    }

    & .dhx_tabbar-tab-button--active {
        font-size: 0.75rem;
        font-weight: 700;
        line-height: 1;
        color: var(--mdi-tabbar-tab-active-foreground-color);
        background-color: var(--mdi-tabbar-tab-active-background-color);

        &+.dhx_tabbar-tab__close {
            color: var(--mdi-tabbar-tab-active-foreground-color);
        }
    }

    & .dhx_tabbar-header-active {
        display: none;
    }
}

.jn-mdi-main-tab {
    display: none;
}
</style>

<style scoped lang="scss">
.container {
    height: calc(100% - 143px);
    overflow: auto;
}

.jn-mdi-tab-bar__button-group {
    position: absolute;
    top: 0;
    right: 49px;
    display: inline-flex;
    flex-direction: row;

    & .jn-mdi-tab-bar__button {
        border: 0 none;
        border-left: 1px solid #3360a5;

        background-color: transparent;
        border-radius: 0;
        width: 36px;
        height: 35px;
        flex: none;

        &:hover,
        &:focus,
        &:active {
            outline: none;
            background-color: transparent;
        }

        &:last-child {
            border-right: 1px solid #3360a5;
        }

        &[class^="icon-"],
        &[class*=" icon-"] {
            background-position: center;
            background-repeat: no-repeat;
        }

        &.icon-close-all-tab {
            background-image: url("@/assets/images/btn_MDI_tabClose.png");
        }

        &.icon-home {
            background-image: url("@/assets/images/btn_MDI_menu.png");
        }

        &.icon-tab-prev {
            background-image: url("@/assets/images/btn_MDI_tabPrev.png");
        }

        &.icon-tab-next {
            background-image: url("@/assets/images/btn_MDI_tabNext.png");
        }
    }
}
</style>
