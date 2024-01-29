
<template>
    <div class="jn-throbber-scrim">
        <img src="@/assets/throbber.svg" alt="loading">
    </div>
</template>
<style scoped lang="scss">
.jn-throbber-scrim {
    position: fixed;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    z-index: 90000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
}
</style>
