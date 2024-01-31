<script setup lang="js">
import Popup from "@/components/popup/PopupBase.vue";
import { useModalContext } from "@/util/popup";

const modal = useModalContext();

defineProps({
    emlAddr: String
});

function closePopup() {
    modal.close();
}

</script>

<template>
    <Popup style="width: 480px;">
        <template #title>
            비밀번호 찾기
        </template>

        <p class="heading" style="margin-top: 16px; margin-bottom: 16px;">
            회원가입 시 입력하신 아래 메일로 임시 비밀번호가 발송되었습니다.
        </p>
        <p class="email-addr" style="margin-bottom: 16px;">
            {{ emlAddr }}
        </p>
        <p class="description" style="margin-bottom: 16px;">메일 수신이 되지 않을 경우 스팸함을 확인해주세요.</p>
        <div class="jn-btn-group" style="justify-content: center;">
            <button type="button" class="ok-btn" style="height: 45px;" @click="closePopup">확인</button>
        </div>
    </Popup>
</template>

<style scoped lang="scss">
.heading {
    font-size: 1.125rem;
    font-weight: 700;
    color: #00388e;
    margin: 0;
    padding: 0;
}

.email-addr {
    border-radius: var(--border-radius-small);
    border: 1px solid var(--border-color);
    padding: 16px;
    margin: 0;
    text-align: center;
}

.description {
    color: #555;
    font-size: 1rem;
    line-height: 1.5;
    margin: 0;
    padding: 0;
}

.ok-btn {
    background-color: #00388e;
    display: flex;
    flex-direction: row;
    align-items: center;
}
</style>
