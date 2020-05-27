<template>
    <div class="nav-bar">
        <div class="left">
            <slot name="left"></slot>
        </div>
        <div class="center">
            <slot name="center"></slot>
        </div>
        <div class="right">
            <slot name="right"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "NavBar"
    }
</script>

<style scoped>
    .nav-bar {
        position: fixed;
        top: 0;
        z-index: 2;
        display: flex;
        width: 100%;
    }

    .center {
        flex: 1;
    }

    .right, .left {
        width: 50px;
    }
</style>