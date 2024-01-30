<script setup lang="ts">
import Popup from "@/components/popup/PopupBase.vue";
import { useModalContext } from "@/util/popup";
import { onMounted, ref } from "vue";

defineProps<{
    message: string;
}>();

const modal = useModalContext();
const okButton = ref<HTMLButtonElement>();

onMounted(() => {
    okButton.value.focus();
});
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
            <div class="jn-btn-group" style="padding-top: 25px; justify-content: center;">
                <button ref="okButton" type="button" @click="modal.close(true)">확인</button>
                <button type="button" @click="modal.close(false)">취소</button>
            </div>
        </div>
    </popup>
</template>
