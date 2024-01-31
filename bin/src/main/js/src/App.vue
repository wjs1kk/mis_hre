<script setup lang="ts">
import { useSessionStore } from "@/stores/session";
import { onMounted } from "vue";
import { useGlobalUiState } from "@/stores/ui";
import { ModalContainerView } from "@/util/popup";
import { useMessageStore } from "@/stores/message";
import ThrobberView from "./components/layout/ThrobberView.vue";
import PortalRootLayout from "./layout/PortalRootLayout.vue";

const sessionStore = useSessionStore();
const uiStateStore = useGlobalUiState();
const message = useMessageStore();

onMounted(async () => {
    await Promise.allSettled([sessionStore.refreshUserInfo(true), message.load()]);
});

</script>

<template>
    <portal-root-layout></portal-root-layout>
    <modal-container-view></modal-container-view>
    <throbber-view v-if="uiStateStore.throbberVisible"></throbber-view>
</template>

<style scoped>
/* App 최상위 컴포넌트의 스타일 정의 */
</style>
