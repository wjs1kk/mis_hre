<script setup lang="ts">
import type { MenuItem as MenuItemInfo } from "@/common/menu-types";
import TopSubmenu from "@/components/layout/TopSubmenu.vue";
import { ref, toRaw } from "vue";
import { isEmpty } from "@/util/string";
import { useGlobalUiState } from "@/stores/ui";

const props = defineProps<{
    menuItem: MenuItemInfo;
    level: number;
}>();

const emit = defineEmits<{
    (e: "closeRequested"): void;
}>();

const uiState = useGlobalUiState();
const item = ref<HTMLLIElement>();

function onClick() {
    const menuItem = props.menuItem;
    const children = toRaw(props.menuItem.items);

    if ((children?.length ?? 0) > 0 && props.level == 1) {
        item.value?.classList.toggle("opened");
    } else if (!isEmpty(menuItem.url)) {
        uiState.openTab({
            tabId: menuItem.menuId,
            url: menuItem.url,
            tabTitle: menuItem.menuNm,
            menuPath: menuItem.menuNmPath.split(">"),
            menuId: menuItem.menuId
        });
        emit("closeRequested");
    } else if (!isEmpty(menuItem.mainUrl)) {
        uiState.openTab({
            tabId: menuItem.menuId,
            url: menuItem.mainUrl,
            tabTitle: menuItem.menuNm,
            menuPath: menuItem.menuNmPath.split(">"),
            menuId: menuItem.menuId
        });
        emit("closeRequested");
    } else {
        emit("closeRequested");
    }
}

function onClickOutside(e: MouseEvent) {
    if (item.value?.classList.contains("opened")) {
        item.value?.classList.remove("opened");

        e.stopPropagation();
        e.preventDefault();
    }
}

function onCloseRequested() {
    if (props.level == 1) {
        item.value?.classList.remove("opened");
    } else {
        emit("closeRequested");
    }
}
</script>

<template>
    <li v-if="level <= 3" ref="item" :class='"menu-item-depth-" + level' v-click-outside="onClickOutside">
        <span v-if="level == 1"><span class="menu-link" @click="onClick()">{{ menuItem.menuNm }}</span></span>
        <span class="menu-link" v-if="level != 1" @click="onClick()">{{ menuItem.menuNm }}</span>
        <TopSubmenu :level="level + 1" :menu="menuItem.items ?? []" :title="menuItem.menuNm"
            @close-requested="onCloseRequested()" />
    </li>
</template>

<style scoped>
.menu-link {
    cursor: pointer;
}

.menu-item-depth-1 {
    font-size: 1.0625rem;
    position: relative;
    padding: 0 24px;

    &>span {
        font-weight: 700;
        display: flex;
        align-items: center;
        height: 100%;

        &>.menu-link {
            display: block;
            margin: auto 0;
            padding: 6px 0;
            text-decoration: none;
            color: inherit;
        }
    }

    &.opened>span>.menu-link,
    &:hover>span>.menu-link {
        padding-bottom: 3px;
        color: var(--primary-color-variant);
        border-bottom: 3px solid var(--primary-color-variant);
    }

    &> :deep(.submenu) {
        display: none;
    }

    &.opened> :deep(.submenu) {
        display: flex;
    }
}

.menu-item-depth-2 {
    flex: none;
    width: 300px;
    margin: 16px;

    &>.menu-link {
        font-size: 1rem;
        font-weight: 700;
        line-height: 1.25rem;
        display: block;
        padding: 8px 16px;
        text-decoration: none;
        color: inherit;
        border-bottom: 1px solid black;
    }
}

.menu-item-depth-3 {
    font-size: 0.875rem;
    line-height: 1.25rem;
    padding: 2px 16px;

    & .menu-link {
        text-decoration: none;
        color: inherit;
    }

    &::before {
        display: inline-block;
        width: 4px;
        height: 4px;
        padding: 0 8px 0 0;
        content: url(@/assets/images/sta_TF_navText.png);
        transform: translateY(-2px);
        vertical-align: top;
    }

    &:hover {
        color: var(--primary-color);

        &::before {
            content: url(@/assets/images/sta_TF_navText_S.png);
        }
    }
}
</style>
