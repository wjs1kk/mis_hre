<script setup lang="js">
import { defineProps } from "vue";

/**
 * @typedef UserInfoViewProps
 * @property {import("@/stores/session").User} userInfo
 */

/** @type {UserInfoViewProps} */
defineProps({
    userInfo: Object
});
</script>

<template>
    <div class="portal-charge">
        <div
            style="display: flex; flex-direction: row; align-items: center; justify-content: center; gap: 12px; font-size: 1.125rem;">
            <span style="font-weight: 700; padding: 0 12px; color: #111; ">{{ userInfo.userNmKr }}</span>
            <span style="font-size: 0.75rem; color: #111; flex: none;">|</span>
            <span style="padding: 0 12px; color: #353535;">{{ userInfo.jbpsNm }}</span>
        </div>
        <div class="portal-charge-btn-group"
            style="display: flex; flex-direction: row; align-items: center; margin-top: 20px;">
            <RouterLink class="portal-charge-btn" style="width: 123px;" to="/pts/mif/modifyInfo" replace>
                회원정보
            </RouterLink>
            <RouterLink class="portal-charge-btn" style="width: 123px;" to="#" replace>관심게시물</RouterLink>
        </div>
    </div>
</template>

<style scoped lang="scss">
.portal-charge {
    border: 1px solid var(--border-color);
    background-color: #f7f7f7;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.portal-charge-btn-group {
    display: flex;
    flex-direction: row;

    &>.portal-charge-btn {
        border: 1px solid #dddddd;
        border-left: none;
        background-color: white;
        color: #555555;
        font-size: 0.875rem;
        text-align: center;
        text-decoration: none;
        height: 36px;
        flex: none;
        display: inline-flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        &:link,
        &:visited {
            color: #555555;
            text-decoration: none;
        }

        &::after {
            background-image: url("@/assets/images/portal/portal_btn_charge.png");
            background-position: center;
            background-repeat: no-repeat;
            content: '';
            width: 24px;
            height: 100%;
        }

        &:first-child {
            border-left: 1px solid #dddddd;
            border-radius: 18px 0 0 18px;
        }

        &:last-child {
            border-radius: 0 18px 18px 0;
        }
    }
}
</style>
