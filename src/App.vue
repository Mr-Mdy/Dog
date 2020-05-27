<template>
    <div id="app">
        <router-view></router-view>
        <main-tab-bar></main-tab-bar>
<!--        <apd  @showCityName="updateCity" ></apd>-->
    </div>
</template>

<script>
    import MainTabBar from "./components/content/mainTabbar/MainTabBar";
    // import Apd from "./Apd";

    export default {
        name: 'app',
        components: {
            MainTabBar,
            // Apd
        },
        data(){
            return{
                toc: 'sds'
            }
        },
        methods:{
            updateCity(data){//触发子组件城市选择-选择城市的事件
                this.toCity = data.cityname;//改变了父组件的值
                console.log('toCity:'+this.toCity)
            }
        }
    }
</script>

<style>
    @import "assets/css/base.css";
</style>
