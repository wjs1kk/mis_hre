<script setup lang="ts">
import type PortalPageLayout from "@/layout/PortalPageLayout.vue";
</script>

<template>
    <portal-page-layout>
        <div class="jn-page">
            <div class="jn-title-container">
                <h1 class="jn-title">메인</h1>
            </div>
        </div>
    </portal-page-layout>
</template>

<style scoped>
.main-page-content {
    min-height: calc(100% - 100px);
    overflow: auto;
}
</style>
