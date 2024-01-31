<script setup lang="js">
import PortalPageLayout from "@/layout/PortalPageLayout.vue";
import { useSessionStore } from "@/stores/session";
import UserInfoView from "./mypage/UserInfoView.vue";

const session = useSessionStore();
const userInfo = session.user;

</script>

<template>
    <PortalPageLayout style="background-color: #ecf1f7;">
        <div style="width: 100%; padding: 14px 180px 20px; background-color: white;">
            <div style="width: 100%; max-width: 1560px; display: flex; flex-direction: row; gap: 20px;">
                <div
                    style="display: flex; flex-direction: column; width: 400px; height: 409px; flex: none; gap: 15px; align-items: stretch; justify-content: stretch;">
                    <UserInfoView style="height: 125px; flex: none;" :user-info="userInfo" />
                    <div class="mypage-card" style="flex: 1 0;">
                        <div class="mypage-card-title" style="margin: 24px 0 0 24px;">주요일정</div>
                    </div>
                </div>
                <div class="mypage-card" style="flex: 1 0;">
                    <div class="mypage-card-title" style="margin: 24px 0 0 24px;">주요일정</div>
                </div>
            </div>
        </div>
        <div style="width: 100%; padding: 20px 180px;">
            <div class="mypage-card" style="height: 520px;">
                <div class="mypage-card-title" style="margin: 24px 0 0 24px;">
                    업무목록<span class="mypage-work-total" style="margin-left: 12px;">
                        총 <span class="count">25건</span>의 업무가 있습니다.</span>
                </div>
            </div>
        </div>
    </PortalPageLayout>
</template>

<style scoped lang="scss">
.mypage-card {
    border: 1px solid var(--border-color);
    background-color: white;
}

.mypage-card-title {
    color: #111111;
    font-size: 1.125rem;
    line-height: 1.5rem;
}

.mypage-work-total {
    color: #111111;
    font-size: 0.9375rem;

    &>.count {
        color: #ed0c0c;
    }
}
</style>
