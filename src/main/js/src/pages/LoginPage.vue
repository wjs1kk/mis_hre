<script setup lang="ts">
import { ref } from "vue";
import TextInput from "@/components/TextInput.vue";
import { useRouter } from "vue-router";
import { useSessionStore } from "@/stores/session";
import { showAlert } from "@/util/popup";

const sessionStore = useSessionStore();

const router = useRouter();

const username = ref("");
const password = ref("");

async function login() {
    try {
        await sessionStore.login(username.value, password.value);
        router.replace("/");
    } catch (e) {
        await showAlert("로그인하지 못했습니다. ID와 비밀번호를 확인하세요.");
    }
}
</script>

<template>
    <div class="jn-login-page">
        <div class="jn-login">
            <h3 class="jn-login__title" style="margin-bottom: 32px">
                <img src="../assets/images/portal/portal_sta_login.png" alt="" style="height: 1.875rem;">
                로그인
            </h3>
            <form class="jn-login__form">
                <TextInput v-model="username" label="ID" name="username" style="margin-bottom: 8px" type="text"
                    @keyup.enter="login" />
                <TextInput v-model="password" label="비밀번호" name="password" style="margin-bottom: 12px;" type="password"
                    @keyup.enter="login" />
                <div style="margin-bottom: 20px;">
                    <input type="checkbox" id="remember-id"><label for="remember-id">아이디 저장</label>
                </div>
                <button class="jn-login__button" style="margin-bottom: 16px;" type="button" @click="login()">로그인</button>
                <div class="jn-login__find-id-pw">
                    <RouterLink replace to="/findIdPw" class="jn-login__find-id-pw-link">아이디 찾기</RouterLink>
                    <span class="divider"></span>
                    <RouterLink replace to="/findIdPw" class="jn-login__find-id-pw-link">비밀번호 찾기</RouterLink>
                </div>
            </form>
        </div>
    </div>
</template>

<style scoped lang="scss">
.jn-login-page {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.jn-login {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    flex: 1 0 0;
    margin: 36px;
    width: 100%;
    height: 100%;
    max-width: 1541px;
    max-height: 604px;
    min-height: 400px;

    background-color: #f8f9fe;
    border: 1px solid var(--border-color);
    border-radius: var(--border-radius-large);
}

.jn-login__form {
    display: flex;
    align-items: stretch;
    flex-direction: column;

    width: 100%;
    max-width: 480px;

    margin: 0 8px;
    padding: 0 24px;
}

.jn-login__title {
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.875rem;

    width: 100%;
    max-width: 480px;

    text-align: center;
    letter-spacing: 0;

    color: black;
}

.jn-login__button {
    color: var(--on-primary-color);
    background-color: var(--primary-color);
    height: 56px;
    width: 100%;
    border: none;
    border-radius: var(--border-radius-small);
}

.jn-login__find-id-pw {
    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: center;
    font-size: 0.9375rem;
    line-height: 1rem;

    &>* {
        flex: none;
    }

    &>.divider {
        border-left: 1px solid #b2b0b0;
        width: 1px;
    }

    &>.jn-login__find-id-pw-link {
        display: inline-block;
        padding: 0 16px;
        cursor: pointer;

        &:link,
        &:visited {
            color: black;
            text-decoration: none;
        }
    }
}
</style>
