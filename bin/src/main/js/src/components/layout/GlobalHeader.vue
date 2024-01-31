<script setup lang="ts">
import GlobalHeaderLogo from "@/components/layout/GlobalHeaderLogo.vue";
import TopMenu from "@/components/layout/TopMenu.vue";
import logo from "@/assets/images/logo.png";
import { useGlobalMenuData } from "@/stores/ui";
import { computed, onMounted } from "vue";
import { useSessionStore } from "@/stores/session";
import { RouterLink } from "vue-router";

const menuDataStore = useGlobalMenuData();
const sessionStore = useSessionStore();

const isLoggedIn = computed(() => sessionStore.isLoggedIn);

onMounted(async () => {
    try {
        await menuDataStore.load();
    } catch (e) {
        // do nothing
    }
});

function toggleGlobalMenu() {
    //
}

function logout() {
    sessionStore.logout();
}

</script>

<template>
    <header class="jn-layout-header">
        <div>
            <ul class="jn-layout-header__util">
                <template v-if="isLoggedIn">
                    <li><b>{{ sessionStore.user?.userNmKr }}</b> 님</li>
                    <li><a href="#" @click="logout">로그아웃</a></li>
                    <li>
                        <RouterLink replace to="/pts/mif/myPage">마이페이지</RouterLink>
                    </li>
                </template>
                <template v-else>
                    <li>
                        <RouterLink replace to="/login">로그인</RouterLink>
                    </li>
                    <li>
                        <RouterLink replace to="/pts/mif/termsAgree">회원가입</RouterLink>
                    </li>
                </template>
                <li><a href="#">온라인 매뉴얼</a></li>
            </ul>
        </div>
        <div class="jn-layout-header__toolbar">
            <GlobalHeaderLogo :src="logo" alt="JnPortal" href="#" />
            <TopMenu :menu="menuDataStore.menuTree" />
            <button class="jn-global-menu-button" @click="toggleGlobalMenu()">
                <img src="../../assets/images/menu.png" alt="메뉴" />
            </button>
        </div>
    </header>
</template>

<style scoped lang="scss">
:deep(*) {
    box-sizing: border-box;
    margin: 0;
}

.jn-layout-header {
    width: 100%;

    & .jn-layout-header__util {
        background-color: #f5f5f5;
        display: block;
        height: 36px;
        list-style: none;
        margin: 0;
        padding: 0 30px;
        text-align: end;

        &>li {
            display: inline-block;
            font-size: 0.75rem;
            line-height: 1rem;
            margin-left: 15px;
            padding: 10px;

            &>a {
                color: inherit;
                text-decoration: none;
            }
        }
    }

    &>.jn-layout-header__toolbar {
        align-items: center;
        display: flex;
        flex-direction: row;
        height: 72px;
    }

    & .jn-global-menu-button {
        background-color: transparent;
        border: none;
        flex: none;
        height: 24px;
        margin-right: 50px;
        padding: 0;
        width: 24px;
    }
}
</style>
