<script setup lang="ts">
import { useGlobalUiState } from "@/stores/ui";

defineProps<{
    logo: string;
}>();

const uiState = useGlobalUiState();
const { helpLinks, internalSites, externalSites } = uiState;
</script>

<template>
    <div class="jn-layout-footer-wrap">
        <footer class="jn-layout-footer">
            <div class="jn-layout-footer__top">
                <ul class="jn-layout-footer__help-link-list">
                    <li v-for="item in helpLinks" :key="item.url">
                        <a :href="item.url">{{ item.name }}</a>
                    </li>
                </ul>
                <select class="jn-layout-footer__link-combo">
                    <option>업무시스템</option>
                    <option v-for="item in internalSites" :value="item.url" :key="item.url">{{ item.name }}</option>
                </select>
                <select class="jn-layout-footer__link-combo">
                    <option value="01">관련사이트</option>
                    <option v-for="item in externalSites" :value="item.url" :key="item.url">{{ item.name }}</option>
                </select>
            </div>
            <div class="jn-layout-footer__bottom">
                <p class="jn-layout-footer-logo" style="float: left;"><img :src="logo" alt=""></p>
                <div class="jn-layout-footer-text">
                    <slot />
                </div>
            </div>
        </footer>
    </div>
</template>

<style scoped lang="scss">
:deep(*) {
    box-sizing: border-box;
    margin: 0;
}

.jn-layout-footer-wrap {
    width: 100%;
    color: #afafaf;
    background-color: #363636;
}

.jn-layout-footer {
    width: 100%;
    max-width: 1560px;
    margin: auto;
    padding-top: 10px;
}

.jn-layout-footer__top {
    display: flex;
    align-items: start;
    flex-direction: row;
    width: 100%;
    margin-bottom: -16px;

    &>* {
        margin-left: 10px;

        &:first-child {
            margin-left: 0;
        }
    }

    &>ul {
        font-size: 0.875rem;
        flex: 1;
        margin-top: 3px;
        list-style: none;

        & a {
            text-decoration: none;
            color: inherit;
        }

        &>li {
            display: inline-block;
            padding: 0 16px;
            border-left: 1px solid #afafaf;

            &:first-child {
                padding-left: 0;
                color: white;
                border-left: none;
            }
        }
    }
}

.jn-layout-footer__help-link-list {
    font-size: 0.875rem;
    flex: 1;
    margin-top: 3px;
    padding: 0;
    list-style: none;
}

.jn-layout-footer__link-combo {
    box-sizing: border-box;
    width: 200px;
    height: 40px;
}

.help-list>li:first-of-type {
    color: white;
}

.jn-layout-footer__bottom {
    display: flex;
    overflow: hidden;
    align-items: start;
    flex-direction: row;
    justify-content: start;
    padding: 8px 0 7px;

    & .jn-layout-footer-logo {
        flex: none;

        &>img {
            vertical-align: top;
        }
    }

    & div {
        flex: 1;
        margin-left: 45px;
    }
}

.jn-layout-footer-text {
    font-size: 0.875rem;
    line-height: 1.5rem;
    float: left;
}

select.jn-layout-footer__link-combo {
    border: 1px solid #686868;
    background: #363636;
    color: #ffffff;
    font-size: 0.875rem;
    font-weight: 400;

    &>option {
        background: white;
        border-radius: 0;
    }
}
</style>
