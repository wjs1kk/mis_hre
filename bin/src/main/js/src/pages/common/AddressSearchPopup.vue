<script setup lang="js">
import { onMounted, ref } from "vue";
import Popup from "@/components/popup/PopupBase.vue";
import { useModalContext } from "@/util/popup";
import closeIcon from "@/assets/images/btn_WF_Cancel.png";
import { isEmpty } from "@/util/string";

const params = defineProps({
    query: { type: String, required: false, default: "" }
});

const modal = useModalContext();

/** @type {import("vue").Ref<Element>} */
const element = ref();

onMounted(() => {
    /** @type {daum.IPostcodeEmbedParam} */
    const options = {
        autoClose: false
    };

    if (!isEmpty(params.query)) {
        options.q = params.query;
    }

    new daum.Postcode({
        oncomplete(data) {
            modal.close({
                address: data
            });
        },
        width: "100%",
        height: "100%"
    }).embed(element.value, options);
});

function close() {
    modal.close({ canceled: true });
}

</script>

<template>
    <popup style="width: 500px; height: 600px; --popup-header-padding: 0 0 0 30px; --popup-content-padding: 0;">
        <template v-slot:title>
            <span style="flex: 1 0 0;">우편번호 검색</span>
            <button type="button" class="btn--popup-close" @click="close"><img :src="closeIcon" alt="닫기"></button>
        </template>
        <div ref="element" style="width: 100%;height: 100%;"></div>
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
