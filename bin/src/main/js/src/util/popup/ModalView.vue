<script setup lang="ts">

import type { Component, DefineComponent } from "vue";
import { provide } from "vue";
import { closeModal, modalIdKey } from "@/util/popup/modal";

const props = defineProps<{
    modalId: string;
    active: boolean;
    component: Component | DefineComponent;
    props: any;
}>();


provide(modalIdKey, {
    modalId: props.modalId,
    close(result?: any) {
        closeModal(props.modalId, result);
    }
});

</script>

<template>
    <div :class="`jn-modal-scrim ${!props.active ? 'inactive' : ''}`" style="z-index: 10000;">
        <component :is="props.component" v-bind="props.props"></component>
    </div>
</template>

<style scoped>
.inactive {
    background: transparent;
}
</style>
