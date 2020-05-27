<template>
    <div class="hottopicitem">
        <slot name="item-icon">图片插槽</slot>
        <div>
            <slot name="item-text"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HotTopicItem"
    }
</script>

<style scoped>
    .hottopicitem {
        flex: 1;
        text-align: center;


    }
</style>