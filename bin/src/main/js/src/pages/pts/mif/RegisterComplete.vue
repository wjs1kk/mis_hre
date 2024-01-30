<script setup lang="js">
import PortalPageLayout from "@/layout/PortalPageLayout.vue";
import { useRouter } from "vue-router";

const router = useRouter();

function goHome() {
    router.replace("/");
}
</script>

<template>
    <portal-page-layout>
        <div style="margin: auto; width: 100%;max-width: 1560px;">
            <div class="title">회원가입</div>
            <ul class="breadcrumb">
                <li>약관동의</li>
                <li>가입양식작성</li>
                <li class="active">가입완료</li>
            </ul>
            <div class="jn-container"
                style="display: flex; flex-direction: column; align-items: center; padding: 48px 0 20px;">
                <div style="font-size: 1.75rem;font-weight: 700;padding: 4px 0;text-align: center;">
                    회원가입 신청이 완료되었습니다.
                </div>
                <div style="padding: 8px;">
                    * 관리자 승인 후 로그인 가능합니다.<br>
                    * 승인까지 최대 00일이 소요될 수 있습니다.
                </div>
            </div>
            <div style="height: 150px;padding-top: 83px;text-align: center;">
                <button type="button" class="portal-button" @click="goHome">확인</button>
            </div>
        </div>
    </portal-page-layout>
</template>

<style scoped src="./register.scss">
</style>
