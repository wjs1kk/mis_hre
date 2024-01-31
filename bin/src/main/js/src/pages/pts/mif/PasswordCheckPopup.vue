<script setup lang="js">
import Popup from "@/components/popup/PopupBase.vue";
import { postData } from "@/util/ajax";
import { showAlert, useModalContext } from "@/util/popup";
import { onMounted, ref } from "vue";

defineProps({
    message: {
        type: String,
        default: "비밀번호를 입력하세요."
    }
});

const modal = useModalContext();

const currentValue = ref();
/** @type {import("vue").Ref<HTMLInputElement>} */
const input = ref();

onMounted(() => {
    input.value.focus();
});

async function check() {
    try {
        const { callbackMsg } = await postData("mi/myPage/checkPassword.do", {
            dsPassword: {
                oldPasswd: currentValue.value
            }
        });

        if (callbackMsg === "success") {
            modal.close(true);
        } else {
            showAlert("비밀번호가 틀렸습니다.");
        }
    } catch (error) {
        showAlert("비밀번호가 틀렸습니다.");
    }
}

function closeModal() {
    modal.close(false);
}

</script>

<template>
    <popup class="jn-message-box">
        <template #title>
            확인
        </template>
        <div class="jn-alert">
            <div class="jn-alert-text">
                {{ message }}
            </div>
            <div style="padding-top: 8px; text-align: center;">
                <input ref="input" style="width: 200px; height: 23px;" type="password" v-model="currentValue"
                    @keyup.enter="check">
            </div>
            <div class="jn-btn-group" style="padding-top: 25px; justify-content: center;">
                <button class="icon-confirm" @click="check">확인</button>
                <button class="icon-cancel" @click="closeModal">취소</button>
            </div>
        </div>
    </popup>
</template>
