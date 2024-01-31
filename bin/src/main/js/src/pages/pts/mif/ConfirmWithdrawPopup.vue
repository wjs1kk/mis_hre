<script setup lang="js">
import { onMounted, ref } from "vue";
import closeIcon from "@/assets/images/btn_WF_Cancel.png";
import Popup from "@/components/popup/PopupBase.vue";
import { useSessionStore } from "@/stores/session";
import { postData } from "@/util/ajax";
import { showAlert, showConfirm, useModalContext } from "@/util/popup";

const session = useSessionStore();
const modal = useModalContext();

const currentValue = ref("");
/** @type {import("vue").Ref<HTMLInputElement>} */
const input = ref();

onMounted(() => {
    input.value.focus();
    input.value.value = "";
});

async function withdraw() {
    const passwordCheckResult = await checkPassword();
    if (!passwordCheckResult) {
        return;
    }

    if (!await showConfirm("정말로 탈퇴하시겠습니까?")) {
        return;
    }

    const { callbackMsg } = await postData("mi/myPage/withdraw.do", {
        dsPassword: {
            oldPasswd: currentValue.value
        }
    });
    switch (callbackMsg) {
        case "success":
            await showAlert("탈퇴 처리가 완료되었습니다.");
            session.logout();
            modal.close();
            break;
        case "passwordNotMatched":
            await showAlert("비밀번호가 틀렸습니다.");
            break;
        default:
            break;
    }
}

async function checkPassword() {
    try {
        const { callbackMsg } = await postData("mi/myPage/checkPassword.do", {
            dsPassword: {
                oldPasswd: currentValue.value
            }
        });

        if (callbackMsg === "success") {
            return true;
        } else {
            showAlert("비밀번호가 틀렸습니다.");
            return false;
        }
    } catch (e) {
        showAlert("비밀번호가 틀렸습니다.");
        return false;
    }
}

function closePopup() {
    modal.close();
}

</script>

<template>
    <popup class="jn-message-box" style="--popup-header-padding: 0 0 0 30px;">
        <template #title>
            <span style="flex: 1 0 0;">회원탈퇴</span>
            <button type="button" class="btn--popup-close" @click="closePopup"><img :src="closeIcon" alt="닫기"></button>
        </template>
        <div class="jn-alert">
            <div class="jn-alert-text no-icon"
                style="font-size: 1.125rem; font-weight: 700; color: #00388e; text-align: start; margin-bottom: 64px;">
                회원 탈퇴를 원하시는 경우<br>
                아래 비밀번호를 입력하시고 확인 버튼을 클릭해 주세요.
            </div>
            <div style="padding-top: 8px; text-align: center;">
                <input ref="input" style="width: 400px; height: 34px;" type="password" autocomplete="off"
                    v-model="currentValue" @keyup.enter="withdraw">
            </div>
            <div class="jn-btn-group" style="padding-top: 25px; justify-content: center;">
                <button type="button" class="jn-btn-save" @click="withdraw">확인</button>
            </div>
        </div>
    </popup>
</template>

<style scoped lang="scss">
.btn--popup-close {
    width: 50px;
    height: 50px;
    background-color: transparent;
    border: 0px none;
    border-radius: 0;
    padding: 11px 17px !important;
    flex: none;

    &:hover,
    &:focus,
    &:active {
        background-color: transparent;
        border: 0px none;
    }

    &:disabled {
        background-color: transparent;
        opacity: 50%;
    }
}
</style>
