<template>
    <div class="homeswiper">
        <swiper class="hy-swiper">
            <swiper-item v-for="item in banners" :key="item.src">
                <a href="#">
                    <img v-bind:src="item.src" alt="">
                </a>
            </swiper-item>
        </swiper>
    </div>

</template>

<script>
    import {Swiper, SwiperItem} from '../../../components/common/swiper'

    export default {
        name: "HomeSwiper",
        data() {
            return {
                banners: [
                    {src: require('../../../assets/img/home/scsd.jpg')},
                    {src: require('../../../assets/img/home/sfds.jpg')},
                    {src: require('../../../assets/img/home/svcd.jpg')},
                    {src: require('../../../assets/img/home/vdge.jpg')},
                ]
            }
        },
        components: {
            Swiper,
            SwiperItem
        },
        created() {
            alert
        },
        methods: {}

    }
</script>

<style scoped>
    .homeswiper {
        position: relative;
        top: 65px;
    }
    .hy-swiper{
        width: 80%;
        height: 150px;
        border-radius: 8px;
        margin: 5px auto;
    }
</style>