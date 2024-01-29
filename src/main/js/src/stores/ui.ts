import { defineStore } from "pinia";
import { type ComponentInternalInstance, type Ref, ref, computed, type ComputedRef, type Component, readonly } from "vue";
import type { MenuItem } from "@/common/menu-types";
import axios from "axios";
import mitt, { type Emitter } from "mitt";
import { makeTree } from "@/util/data/common";
import { postData } from "@/util/ajax";

export type MdiTabOptions = {
    tabId: string;
    tabTitle: string;
    menuId?: string;
    url?: string;
    args?: {
        [key: string]: any;
    };
    menuPath?: string[];
};

export type TabInfo = {
    tabId: string;
    tabTitle: string;
    menuId?: string;
    url?: string;
    args?: Record<string, unknown>;
    menuPath: string[];
    domNode?: Element;
    component: Component | null;
    ref: Ref<InstanceType<any> | null>;
};

export type LinkInfo = {
    name: string;
    url: string;
};

// The inferred type of this node exceeds the maximum length the compiler will serialize. An explicit type annotation is needed.
// 오류로 인해 스토어에 대한 타입 정의 추가
export type UiStateStore = {
    isMenuOpened: Ref<boolean>;
    throbberVisible: ComputedRef<boolean>;
    helpLinks: Readonly<Ref<readonly LinkInfo[]>>;
    internalSites: Readonly<Ref<readonly LinkInfo[]>>;
    externalSites: Readonly<Ref<readonly LinkInfo[]>>;
    toggleMenu(): void;
    openMenu(): void;
    closeMenu(): void;
    setMdiLayout(layout: ComponentInternalInstance | null): void;
    openTab(tab: MdiTabOptions): void;
    closeTab(idOrIndex: string | number): void;
    closeAllTab(): void;
    invokeMethod(tabId: string, method: string, args: unknown[]);
    pushThrobber(): void;
    popThrobber(): void;
    events: Emitter<{
        addTab: MdiTabOptions;
        closeTab: MdiTabOptions;
    }>;
};

export const useGlobalUiState = defineStore<"globalUiState", UiStateStore>("globalUiState", () => {
    const isMenuOpened = ref(false);
    const mdiTabLayout = ref<ComponentInternalInstance | null>(null);
    const throbberCount = ref(0);
    const throbberVisible = computed(() => throbberCount.value !== 0);

    const helpLinks = ref<LinkInfo[]>([
        { name: "개인정보처리방침", url: "#" },
        { name: "이용약관", url: "#" },
        { name: "연구소소개", url: "#" },
    ]);
    const internalSites = ref<LinkInfo[]>([
        { name: "개인정보처리방침", url: "#" },
        { name: "이용약관", url: "#" },
        { name: "연구소소개", url: "#" },
    ]);
    const externalSites = ref<LinkInfo[]>([
        { name: "개인정보처리방침", url: "#" },
        { name: "이용약관", url: "#" },
        { name: "연구소소개", url: "#" },
    ]);

    const events = mitt<{
        addTab: MdiTabOptions;
        closeTab: MdiTabOptions;
    }>();

    return {
        isMenuOpened,
        throbberVisible,
        helpLinks: readonly(helpLinks),
        internalSites: readonly(internalSites),
        externalSites: readonly(externalSites),
        toggleMenu,
        openMenu,
        closeMenu,
        setMdiLayout,
        openTab,
        closeTab,
        closeAllTab,
        invokeMethod,
        pushThrobber,
        popThrobber,
        events
    };

    function toggleMenu() {
        isMenuOpened.value = !isMenuOpened.value;
    }

    function openMenu() {
        isMenuOpened.value = true;
    }

    function closeMenu() {
        isMenuOpened.value = false;
    }

    function setMdiLayout(layout: ComponentInternalInstance | null) {
        mdiTabLayout.value = layout as any;
    }

    function openTab(options: MdiTabOptions) {
        if (mdiTabLayout.value == null) {
            console.warn("MDI layout not yet attached.");
            return;
        }

        mdiTabLayout.value?.exposed?.openTab(options);
    }

    function closeTab(idOrIndex: number | string) {
        if (mdiTabLayout.value == null) {
            console.warn("MDI layout not yet attached.");
            return;
        }

        mdiTabLayout.value?.exposed?.closeTab(idOrIndex);
    }

    function closeAllTab() {
        if (mdiTabLayout.value == null) {
            console.warn("MDI layout not yet attached.");
            return;
        }

        mdiTabLayout.value?.exposed?.closeAllTab();
    }

    function invokeMethod(tabId: string, method: string, args: unknown[]) {
        return mdiTabLayout.value?.exposed?.invokeMethod(tabId, method, args);
    }

    function pushThrobber() {
        throbberCount.value++;
    }

    function popThrobber() {
        if (throbberCount.value == 0)
            return;
        throbberCount.value--;
    }
});

export const useGlobalMenuData = defineStore("globalMenuData", () => {
    const menuList = ref<MenuItem[]>([]);
    const favoriteMenuList = ref<MenuItem[]>([]);
    const menuTree = computed(() => makeTree(menuList.value, "menuId", "upperMenuId", "items") as MenuItem[]);

    async function load() {
        const response = await axios.get("cmn/getTreeMenu.do");
        const data = response.data as {
            data: MenuItem[];
        };
        menuList.value = data.data;
    }

    async function reloadFavorite() {
        const { dsFavoriteMenu } = await postData("cmn/favorite/getFavoriteMenu.do");
        favoriteMenuList.value = dsFavoriteMenu;
    }

    function clear() {
        menuList.value = [];
    }

    return { menuTree, menuList, favoriteMenuList, load, clear, reloadFavorite };
});
