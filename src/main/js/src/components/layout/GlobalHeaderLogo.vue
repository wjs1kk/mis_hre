<script setup lang="ts">
import { RouterLink } from "vue-router";

defineProps<{
    src: string;
    href: string;
    alt: string;
}>();
</script>

<template>
    <h1 class="logo"><router-link replace to="/"><img :src="src" :alt="alt"></router-link></h1>
</template>

<style scoped lang="scss">
.logo {
    height: 100%;
    text-align: left;
    flex: none;

    & img {
        width: 211px;
        height: 100%;
        margin: 5px 5px 0 30px;
        object-fit: contain;
        object-position: center center;
    }
}
</style>
