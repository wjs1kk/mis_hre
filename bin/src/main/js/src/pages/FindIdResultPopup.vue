<script setup lang="js">
import Popup from "@/components/popup/PopupBase.vue";
import { useModalContext } from "@/util/popup";

const modal = useModalContext();

defineProps({
    memberId: String
});

function hideLetters(string, from, to) {
    const s = String(string);
    return [s.substring(0, from), "*".repeat(to - from, 0), s.substring(to)].join("");
}

function closePopup() {
    modal.close();
}
</script>

<template>
    <Popup style="width: 480px;">
        <template #title>
            아이디 찾기
        </template>

        <p class="heading" style="margin-top: 16px; margin-bottom: 16px;">회원님의 ID는 다음과 같습니다.</p>
        <p class="found-id" style="margin-bottom: 16px;">
            {{ hideLetters(memberId, 3, memberId.length - 1) }}
        </p>
        <p class="description" style="margin-bottom: 16px;">개인정보 보호를 위해 앞 3자리, 끝 1자리를 제외한 문자는 *로 표시됩니다.</p>
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

.found-id {
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
