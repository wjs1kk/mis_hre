<script lang="ts">
export const pageContextKey = Symbol("pageContextKey");
</script>

<script setup lang="ts">
import { provide } from "vue";

type TabPageProps = {
    tabId: string;
    menuPath: string[];
    menuId?: string;
    title: string;
    hideMenuPath: boolean;
};

const props = withDefaults(defineProps<TabPageProps>(), {
    menuPath: () => [],
    hideMenuPath: false
});

const contextData = Object.freeze({ ...props });

provide(pageContextKey, contextData);
</script>

<template>
    <div>
        <ul class="menu-path" v-if="!hideMenuPath">
            <li class="home"></li>
            <li v-for="item in menuPath" :key="item">{{ item }}</li>
        </ul>
        <div class="content">
            <slot />
        </div>
    </div>
</template>

<style scoped lang="scss">
.menu-path {
    display: flex;
    align-items: center;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: end;
    height: 32px;
    margin: 0 50px 0 0;
    padding: 0;
    list-style: none;

    &>li {
        font-size: 0.75rem;
        line-height: 0.75rem;
        display: inline-block;
        flex: none;
        padding: 5px 5px 5px 0;
        vertical-align: middle;
        color: var(--menu-path-color);

        &:not(:first-child)::before {
            display: inline-block;
            width: 9px;
            height: 0.75rem;
            margin-right: 5px;
            content: '';
            background: no-repeat center url("@/assets/images/sta_WF_navi.png");
        }
    }

    &>.home {
        position: relative;
        width: 32px;
        height: 32px;
        background: no-repeat 5px 9px url("@/assets/images/btn_MDI_home.png");
    }
}

.content {
    overflow: auto;
    height: calc(100% - 32px);

    &:first-child {
        height: 100%;
    }
}
</style>
