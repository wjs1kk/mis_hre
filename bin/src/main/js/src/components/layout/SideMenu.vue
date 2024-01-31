<script setup lang="js">
import { useGlobalMenuData, useGlobalUiState } from "@/stores/ui";
import { postData } from "@/util/ajax";
import dhx from "dhx-suite-package";
import { onMounted, onUnmounted, ref, watch, stop } from "vue";

const ui = useGlobalUiState();
const menu = useGlobalMenuData();

const isOpened = ref(false);
const isFavoriteActive = ref(false);
/** @type {import("vue").Ref<HTMLElement>} */
const treeElement = ref();
/** @type {import("vue").Ref<HTMLElement>} */
const gridElement = ref();

watch(ui.isMenuOpened, value => {
    if (value) {
        isOpened.value = false;
    }
});

watch(menu, data => {
    menuTree?.data?.parse(data.menuTree);
    menuTree?.expandAll();
    grid?.data?.parse(data.favoriteMenuList);
});

/** @type {dhx.Tree} */
let menuTree;
/** @type {dhx.Grid} */
let grid;
/** @type {dhx.Layout} */
let layout;

onMounted(() => {
    menuTree = new dhx.Tree(treeElement.value, {
        css: "side-menu-tree",
        itemHeight: 32,
        template: menuTreeTemplate,
        selection: false,
        data: menu.menuTree,
        eventHandlers: {
            onclick: {
                favorite(_, row) {
                    toggleFavorite(row);
                }
            }
        }
    });

    grid = new dhx.Grid(null, {
        css: "favorite-grid",
        editable: false,
        rowHeight: 32,
        selection: false,
        autoWidth: true,
        columns: [
            { id: "menuNmPath", header: [{}], gravity: 1 }
        ]
    });

    layout = new dhx.Layout(gridElement.value, {
        rows: [{ id: "grid" }]
    });

    layout.getCell("grid").attach(grid);

    grid.data.parse(menu.favoriteMenuList);

    menuTree.events.on("itemClick", id => {
        const item = menuTree.data.getItem(id);
        if (item.menuTy === "PAGE") {
            openNewTab(item);
        } else if (menuTree.getState()[id].open) {
            menuTree.collapse(id);
        } else {
            menuTree.expand(id);
        }
    });

    grid.events.on("cellClick", row => {
        openNewTab(row);
    });
});

onUnmounted(() => {
    menuTree?.destructor();
    grid?.destructor();
    layout?.destructor();
    stop();
});

function openNewTab(item) {
    ui.openTab({
        tabId: item.menuId,
        url: item.url,
        tabTitle: item.menuNm,
        menuPath: item.menuNmPath.split(">"),
        menuId: item.menuId
    });
}

function menuTreeTemplate(item, isFolder) {
    const template = [
        `<div class="dhx_tree_template">
        <span class="dhx_tree_template__value">${item.menuNm}</span>`
    ];
    if (item.menuTy === "PAGE") {
        template.push(`
        <div class="dhx_tree_template__rows">
            <button type="button" class="dhx_tree_template__button favorite ${item.favoriteYn === "Y" ? "on" : "off"}"></button>
        </div>
        `);
    }

    template.push(`</div>`);
    return template.join("");
}

/**
 * @param {MouseEvent} e
 */
function onClickOutside(e) {
    if (isOpened.value) {
        isOpened.value = false;
        e.preventDefault();
        e.stopPropagation();
    }
}

function toggleSidebar() {
    isOpened.value = !isOpened.value;
}

async function toggleFavorite(item) {
    const favoriteYn = (item.favoriteYn === "Y") ? "N" : "Y";
    const result = await postData("cmn/favorite/setFavoriteMenu.do", {}, {
        menuId: item.menuId,
        setFavorite: favoriteYn
    });

    if (result.resultMsg === "success") {
        menuTree.data.update(item.id, { favoriteYn });
    }
}

function showFavorite() {
    isFavoriteActive.value = true;
    menu.reloadFavorite();
}

function showMenu() {
    isFavoriteActive.value = false;
}

</script>

<template>
    <div :class="{ open: isOpened, 'left-sidebar': true }" v-click-outside="onClickOutside">
        <div class="side-menu">
            <div style="display: flex; flex-direction: row;">
                <button type="button" class="btn-header btn-menu" @click="showMenu">전체메뉴</button>
                <button type="button" class="btn-header btn-favorite" @click="showFavorite">즐겨찾기</button>
            </div>
            <div v-show="!isFavoriteActive" style="height: calc(100% - 48px);">
                <div class="sidebar-title">
                    전체메뉴
                </div>
                <div ref="treeElement" style="height: calc(100% - 57px);"></div>
            </div>
            <div v-show="isFavoriteActive" style="height: calc(100% - 48px);">
                <div style="height: 100%;" ref="gridElement"></div>
            </div>
        </div>
        <button type="button" class="btn-toggle" @click="toggleSidebar"></button>
    </div>
</template>

<style scoped lang="scss">
.left-sidebar {
    width: 250px;
    height: 100%;
    position: absolute;
    left: -250px;
    top: 0;
    overflow: visible;
    z-index: 9000;
    user-select: none;
    background-color: white;

    transition: left 380ms ease-in-out;

    .sidebar-title {
        color: #00388e;
        font-size: 1.125rem;
        font-weight: 700;
        padding: 0 24px;
        height: 57px;
        display: flex;
        align-items: center;
    }

    &>.side-menu {
        width: 100%;
        height: 100%;
    }

    &.open {
        display: flex;
        left: 0;

        &>.side-menu {
            box-shadow: 0 0 4px 0 rgba($color: #000000, $alpha: 0.3);
        }
    }

    :deep(.favorite) {
        width: 36px;

        &.off::before {
            content: url(../../assets/images/img_LF_favorite.png);
        }

        &.on::before {
            content: url(../../assets/images/img_LF_favorite_active.png);
        }
    }

    .btn-header {
        height: 48px;
        flex: 1 0 0;

        color: white;
        border: none;

        &:focus,
        &:active {
            outline: none;
        }

        &::before {
            margin-right: 8px;
        }

        &.btn-menu {
            background-color: #00388e;

            &::before {
                content: url(../../assets/images/btn_LF_menu.png);
            }
        }

        &.btn-favorite {
            background-color: #666;

            &::before {
                content: url(../../assets/images/btn_LF_menu.png);
            }
        }
    }

    .btn-favorite {
        height: 48px;
        flex: 1 0 0;
    }

    .btn-toggle {
        left: 100%;
        top: 64px;
        width: 18px;
        height: 60px;
        border: none;
        position: absolute;
        background: url(../../assets/images/btn_LF_open.png) no-repeat center center #00388e;
        border-radius: 0 3px 3px 0;
    }

    &.open .btn-toggle {
        background-image: url(../../assets/images/btn_LF_close.png);
    }


    :deep(.dhx_tree_template) {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 4px;
        width: 100%;
        height: 100%;
    }

    :deep(.dhx_tree_template__value) {
        font-family: Roboto, Arial, Tahoma, Verdana, sans-serif;
        font-size: 12px;
        line-height: normal;
        color: rgba(0, 0, 0, .7);
    }

    :deep(.dhx_tree_template__rows) {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    :deep(.dhx_tree_template__button) {
        margin-left: 4px;
        background: inherit;
        border: none;
        cursor: pointer;
        padding: 0;
        display: flex;
        height: 24px;
        width: 24px;
        align-items: center;
    }

    :deep(.side-menu-tree) {
        &>.dhx_tree-list-item::before {
            margin-left: 20px;
        }
    }

    :deep(.favorite-grid) {
        & .dhx_grid-row {
            border: none;
        }

        & .dhx_grid-cell {
            border: 0;
            font-size: 12px;
            color: rgba(0, 0, 0, .7);
        }

        & .dhx_header-wrapper {
            display: none;
        }
    }
}
</style>
