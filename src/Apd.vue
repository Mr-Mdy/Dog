<template>
    <div class="apd">
        <button @click="select('ds')">点击</button>
    </div>
</template>

<script>
    export default {
        name: "Apd",
        props:[
            'sdsd'
        ],
        methods:{
            select(val) {
                let data = {
                    cityname: val
                };
                this.$emit('showCityName',data);//select事件触发后，自动触发showCityName事件
            }
        }

    }
</script>

<style scoped>

</style>