<script lang="ts" setup>

</script>

<template>
    <div class="jn-popup" role="dialog">
        <div class="jn-popup-title">
            <slot name="title">알림</slot>
        </div>
        <div class="jn-popup-content">
            <slot></slot>
        </div>
    </div>
</template>
