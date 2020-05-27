<template>
    <div class="slide">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "SwiperItem"
    }
</script>

<style scoped>
    .slide {
        width: 100%;
        flex-shrink: 0;
    }

    .slide img {
        width: 100%;
        height: 100%;
    }
</style>