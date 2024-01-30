<script setup lang="js">
import { computed } from "vue";

const props = defineProps({
    trmsId: String,
    trmsTitle: String,
    trmsCn: String,
    esntlYn: String,
    agrmYn: String
});

const agreed = computed({
    get() {
        return props.agrmYn;
    },
    set(value) {
        emits("update:agrmYn", value);
    }
});

const emits = defineEmits(["update:agrmYn"]);

</script>

<template>
    <div class="title">{{ trmsTitle }}</div>
    <textarea readonly style="width: 100%;height: 227px;" :value="trmsCn"></textarea>
    <div style="display: flex;flex-direction: row;">
        <input type="radio" :name="`${trmsId}-agrm-yn`" value="Y" v-model="agreed" :id="`${trmsId}-agree`">
        <label :for="`${trmsId}-agree`">동의함</label>
        <input type="radio" :name="`${trmsId}-agrm-yn`" value="N" v-model="agreed" :id="`${trmsId}-not-agree`">
        <label :for="`${trmsId}-not-agree`">동의하지 않음</label>
    </div>
</template>

<style scoped lang="scss">
.title {
    display: flex;
    color: black;
    font-weight: 700;
    font-size: 1.1875rem;
    line-height: 1;
    height: 62px;
    justify-content: start;
    align-items: center;
    text-align: center;
}

textarea {
    border: 1px solid #cccccc;
    padding: 13px 15px;
    background-color: #f3f3f3;
    border-radius: 0;

    &:focus {
        outline: none;
    }
}
</style>
