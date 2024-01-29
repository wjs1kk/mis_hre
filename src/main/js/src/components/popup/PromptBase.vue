<script setup lang="ts">
import Popup from "@/components/popup/PopupBase.vue";
import { useModalContext } from "@/util/popup";
import { onMounted, ref } from "vue";

const props = withDefaults(defineProps<{
    message: string;
    type: string;
    value: string;
}>(), {
    type: "text",
    value: ""
});

const modal = useModalContext();

const currentValue = ref(props.value);
const input = ref<HTMLInputElement>();

onMounted(() => {
    input.value.focus();
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
            <div style="padding-top: 8px; text-align: center;">
                <input ref="input" style="width: 200px; height: 23px;" :type="type" v-model="currentValue"
                    @keyup.enter="modal.close(currentValue)">
            </div>
            <div class="jn-btn-group" style="padding-top: 25px; justify-content: center;">
                <button type="button" @click="modal.close(currentValue)">확인</button>
            </div>
        </div>
    </popup>
</template>
