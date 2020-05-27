<template>
    <div id="appliance-item">
        <slot name="item-icon">图片插槽</slot>
        <div>
            <slot name="item-text">文本插槽</slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ApplianceLtem"
    }
</script>

<style scoped>
    #appliance-item {
        margin: 0px auto;
        height: 90px;
    }

    #appliance-item img {
        width: 65px;
    }

    #appliance-item div {
        margin-top: -10px;
        text-align: center;
        /*position: relative;*/
        /*top: -5px;*/
        /*left: 4px;*/
        font-size: 8px;
    }
</style>