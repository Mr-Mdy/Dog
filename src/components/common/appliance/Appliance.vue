<template>
    <div id="appliance">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "Appliance"
    }
</script>

<style scoped>
    #appliance {
        margin: 0 auto;
        /*width: 80%;*/
        height: 200px;
        display: flex;
        flex-wrap: wrap;
    }
</style>