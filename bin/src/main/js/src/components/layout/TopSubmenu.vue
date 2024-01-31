<script setup lang="ts">
import type { MenuItem as MenuItemInfo } from "@/common/menu-types";
import TopMenuItem from "@/components/layout/TopMenuItem.vue";

defineProps<{
    menu?: MenuItemInfo[] | null;
    title: string;
    level: number;
}>();

defineEmits<{
    (e: "closeRequested"): void;
}>();
</script>

<template>
    <div v-if="level == 2" class="menu-depth-2-container submenu">
        <h3>{{ title }}</h3>
        <ul class="menu-depth-2 clear">
            <TopMenuItem v-for="item in menu" :key="item.menuId" :level="level" :menu-item="item"
                @close-requested="$emit('closeRequested')" />
        </ul>
    </div>
    <template v-if="level == 3">
        <ul class="menu-depth-3 clear">
            <TopMenuItem v-for="item in menu" :key="item.menuId" :level="level" :menu-item="item"
                @close-requested="$emit('closeRequested')" />
        </ul>
    </template>
</template>

<style scoped>
.menu-depth-2-container {
    position: fixed;
    z-index: 9000;
    top: 108px;
    left: 0;
    align-items: stretch;
    justify-content: stretch;
    width: 100%;
    min-height: 200px;
    border-top: 1px solid var(--primary-color);
    background-color: #f5f5f5;
    flex-direction: row;

    &>h3 {
        font-size: 30px;
        display: block;
        flex: none;
        width: 420px;
        padding: 80px 40px 80px 120px;
        text-align: left;
        color: #ffffff;
        border: 0;
        background: url('@/assets/images/sta_WF_navTitle.png') top center no-repeat;
    }
}

.menu-depth-2 {
    display: flex;
    align-items: stretch;
    flex: 1 0 0;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: start;
    padding: 16px 16px;
    list-style: none;
}

.menu-depth-3 {
    padding: 6px 0;
    list-style: none;
}
</style>
