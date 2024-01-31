<script setup lang="ts">
import type { MenuItem as MenuItemInfo } from "@/common/menu-types";
import TopMenuItem from "@/components/layout/TopMenuItem.vue";

type TopMenuProps = {
    menu?: MenuItemInfo[] | null;
};

const props = withDefaults(defineProps<TopMenuProps>(), {
    menu: () => []
});

</script>

<template>
    <nav class="gnb">
        <ul>
            <TopMenuItem v-for="item in menu" :key="item.menuId" :menu-item="item" :level="1" />
        </ul>
    </nav>
</template>

<style scoped lang="scss">
.gnb {
    border-bottom: 0;
    flex: 1 0 0;
    height: 100%;
    margin: 0 auto;
    width: 100%;

    &>ul {
        display: flex;
        flex-direction: row;
        height: 100%;
        list-style: none;
        margin: 0;
    }
}
</style>
