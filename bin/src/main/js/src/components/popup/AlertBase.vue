<script setup lang="ts">
import Popup from "@/components/popup/PopupBase.vue";
import { useModalContext } from "@/util/popup";
import { onMounted, ref } from "vue";

defineProps<{
    message: string;
}>();

const modal = useModalContext();
const button = ref<HTMLButtonElement>();

onMounted(() => {
    button.value.focus();
});

</script>

<template>
    <popup class="jn-message-box">
        <template #title>
            알림
        </template>
        <div class="jn-alert">
            <div class="jn-alert-text">
                {{ message }}
            </div>
            <div class="jn-btn-group" style="padding-top: 25px; justify-content: center;">
                <button type="button" ref="button" @click="modal.close()">확인</button>
            </div>
        </div>
    </popup>
</template>
