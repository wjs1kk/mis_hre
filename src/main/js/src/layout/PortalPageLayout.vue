<script setup lang="ts">
import logo from "@/assets/images/footer_logo.png";
import GlobalFooter from "@/components/layout/GlobalFooter.vue";
</script>

<template>
    <div style="height: 100%; overflow: auto;">
        <div class="main-page-content">
            <slot></slot>
        </div>
        <global-footer :logo="logo">
            <p>(52815) 경상남도 진주시 사들로 123번길 40 | 팩스 055-751-5266</p>
            <p>Korea Research Institute for defense Technology planning and advancement all rights
                reserved.</p>
        </global-footer>
    </div>
</template>

<style scoped>
.main-page-content {
    min-height: calc(100% - 100px);
}
</style>
