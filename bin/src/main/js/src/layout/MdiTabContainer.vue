<script setup lang="ts">
import TabPage from "@/components/layout/TabPage.vue";
import { inject, type Ref } from "vue";
import { tabbarStateKey, type TabInfo } from "./types";

const injected = inject<{ tabs: Ref<TabInfo[]>; currentTab: Ref<string>; }>(tabbarStateKey);
const tabs = injected.tabs;
const currentTab = injected.currentTab;

</script>

<template>
    <tab-page v-for="item in tabs" :key="item.tabId" :class="`jn-mdi-tab ${item.tabId === currentTab ? 'active' : ''}`"
        :tab-id="item.tabId" :title="item.tabTitle" :menu-id="item.menuId" :menu-path="item.menuPath"
        :hide-menu-path="item.hideMenuPath ?? false">
        <component :is="item.component" :ref="el => item.ref = el" v-bind="item.args ?? {}"></component>
    </tab-page>
</template>

<style scoped lang="scss">
.jn-mdi-tab {
    display: none;
    height: 100%;
    overflow: auto;

    &.active {
        display: inherit;
    }
}
</style>
