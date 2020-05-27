<template>
    <div class="hotbar">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "HotBar",
        components: {}
    }
</script>

<style scoped>
    .hotbar {
        width: 100%;
        height: 300px;
        overflow: scroll;
        float: left;
        display: flex;
    }
</style>