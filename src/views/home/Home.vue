<template>
    <div id="home">
        <!--        头-->
        <home-nav></home-nav>

        <!--        轮播图-->
        <home-swiper/>

        <!--        应用-->
        <main-appliance></main-appliance>

        <home-hot></home-hot>
    </div>
</template>

<script>
    import HomeNav from "./childComps/HomeNav";
    import HomeSwiper from "./childComps/HomeSwiper";
    import MainAppliance from "../../components/content/mainAppliance/MainAppliance";
    import HomeHot from "./childComps/HomeHot";


    // import {getGoods} from "../../network/home";

    export default {
        name: "Home",
        components: {
            HomeNav,
            HomeSwiper,
            MainAppliance,
            HomeHot
        },
        data() {
            return {
                banners: []
            }
        },
        created() {
            // this.getGoods();
        },
        mounted() {

        },
        computed: {},
        methods: {
            // getGoods(){
            //     getGoods().then(res=>{
            //
            //     })
            // }

        }
    }
</script>

<style scoped>

</style>
