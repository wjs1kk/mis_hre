<script setup lang="ts">
import { useModalStore } from "@/util/popup/modal";
import ModalView from "@/util/popup/ModalView.vue";

const store = useModalStore();

</script>

<template>
    <template v-for="(item, index) in store.modals" :key="item.id">
        <modal-view :active="index == store.modals.length - 1" :component="item.component" :props="item.props"
                    :modal-id="item.id">
        </modal-view>
    </template>
</template>

<style scoped>

</style>
