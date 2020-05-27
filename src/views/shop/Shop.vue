<template>
    <div class="shop">
        <div class="shopswiper">
            <swiper class="hy-swiper">
                <swiper-item v-for="item in banners" :key="item.src">
                    <a href="#">
                        <img v-bind:src="item.src" alt="">
                    </a>
                </swiper-item>
            </swiper>
        </div>


        <div class="shopnav">
            <nav-bar class="home-nav">

                <div slot="center">
                    <form action="">
                        <input type="text" id="search">
                    </form>
                </div>
                <div slot="right" class="home-right"><img src="../../assets/img/navbar/更多.png" id="more"></div>
            </nav-bar>
        </div>

        <div class="recommend">
            <div class="left">
                <p>今日福利</p>
                <span>每日更新折扣商品</span>
            </div>
            <div class="right">
                <p>每日好货</p>
                <span>每日寻找好货</span>
            </div>
        </div>

        <div class="appliance">
            <appliance class="app">
                <appliance-item>
                    <img slot="item-icon" src="../../assets/img/shop/图标-切图_51.png">
                    <div slot="item-text">主粮</div>
                </appliance-item>
                <appliance-item>
                    <img slot="item-icon" src="../../assets/img/shop/图标-切图_52.png">
                    <div slot="item-text">零食</div>
                </appliance-item>
                <appliance-item>
                    <img slot="item-icon" src="../../assets/img/shop/图标-切图_53.png">
                    <div slot="item-text">玩具</div>
                </appliance-item>
                <appliance-item>
                    <img slot="item-icon" src="../../assets/img/shop/图标-切图_54.png">
                    <div slot="item-text">保健品</div>
                </appliance-item>
                <appliance-item>
                    <img slot="item-icon" src="../../assets/img/shop/图标-切图_55.png">
                    <div slot="item-text">用品</div>
                </appliance-item>
                <appliance-item>
                    <img slot="item-icon" src="../../assets/img/shop/图标-切图_56.png">
                    <div slot="item-text">香波</div>
                </appliance-item>
                <appliance-item>
                    <img slot="item-icon" src="../../assets/img/shop/图标-切图_57.png">
                    <div slot="item-text">罐头</div>
                </appliance-item>
                <appliance-item>
                    <img slot="item-icon" src="../../assets/img/shop/图标-切图_58.png">
                    <div slot="item-text">更多</div>
                </appliance-item>
            </appliance>
        </div>

        <div class="hot">
            <switch-bar class="home-head">
                <p slot="head">限时抢购 <span>点击抢购更多</span></p>
            </switch-bar>
            <hot-bar>
                <div class="overflowhot">
                    <hot-topic-item class="home-item">
                        <img slot="item-icon" src="../../assets/img/hottopic/图层 12.png">
                        <div slot="item-text">幼犬是否可以喝牛奶 像牛奶营养丰富 喝奶补钙 帮助成长 这一类得观念</div>
                    </hot-topic-item>
                    <hot-topic-item class="home-item">
                        <img slot="item-icon" src="../../assets/img/hottopic/图层 14.png">
                        <div slot="item-text">幼犬是否可以喝牛奶 像牛奶营养丰富 喝奶补钙 帮助成长 这一类得观念</div>
                    </hot-topic-item>
                    <hot-topic-item class="home-item">
                        <img slot="item-icon" src="../../assets/img/hottopic/图层 12.png">
                        <div slot="item-text">幼犬是否可以喝牛奶 像牛奶营养丰富 喝奶补钙 帮助成长 这一类得观念</div>
                    </hot-topic-item>
                </div>
            </hot-bar>
        </div>
    </div>
</template>

<script>
    import {Swiper, SwiperItem} from '../../components/common/swiper';
    import NavBar from "../../components/common/navbar/Navbar";

    import Appliance from "../../components/common/appliance/Appliance";
    import ApplianceItem from "../../components/common/appliance/ApplianceItem";

    import HotBar from "../../components/common/hottopic/HotBar";
    import HotTopicItem from "../../components/common/hottopic/HotTopicItem";
    import SwitchBar from "../../components/common/hottopic/SwitchBar";

    export default {
        name: "Cart",
        components: {
            Swiper,
            SwiperItem,
            NavBar,
            Appliance,
            ApplianceItem,
            HotBar,
            HotTopicItem,
            SwitchBar
        },
        data() {
            return {
                banners: [
                    {src: require('../../assets/img/home/scsd.jpg')},
                    {src: require('../../assets/img/home/sfds.jpg')},
                    {src: require('../../assets/img/home/svcd.jpg')},
                    {src: require('../../assets/img/home/vdge.jpg')},
                ]
            }
        },
    }
</script>

<style scoped>
    .hy-swiper{
        width: 100%;
        height: 200px;
        margin: 0px auto;
    }

    #search {
        width: 250px;
        height: 30px;
        border: 0px #eeeeee solid;
        outline-style: none;
        background: #F1F1F1 url("../../assets/img/navbar/形状 1.png") no-repeat 10px;
        background-size: 13px;
        border-radius: 100px;
    }



    #more {
        width: 14px;
    }

    .home-nav {
        text-align: center;
        /*background: #FFFFFF;*/
        line-height: 70px;
        height: 70px;
    }

    .home-left {
        width: 90px;
    }

    .home-right {
        width: 50px;
    }


    .recommend{
        width: 100%;
        display: flex;
        margin-top: 10px;
    }

    .recommend .left{
        border-radius: 10px;
        margin-left: 15px;
        margin-right: 15px;
        flex: 1;
        width: 43%;
        height: 100px;
        background: #F7F7F7;
    }

    p{
        color: #212121;
        font-weight: bold;
        margin: 10px 0px;
    }
    span{
        color: #ACACAC;
        font-size: 14px;
    }

    .recommend .right{
        border-radius: 10px;
        margin-right: 15px;
        margin-left: 15px;
        width: 43%;
        height: 100px;
        background: #F7F7F7;
    }

    .app{
        width: 86%;
    }


    .homehot {
        /*width: 100%;*/
        position: relative;
        top: 50px;

    }

    .overflowhot {
        display: flex;
        /*flex-wrap: nowrap;*/
        /*overflow-y: hidden;*/
        /*overflow-x: scroll;*/
        /*width: 5600px;*/
        height: 200px;
        margin: 10px 0px 0px 20px;
    }

    .home-item {
        margin-right: 20px;
        width: 180px;
        height: 300px;
        float: left;
    }

    .home-item img {
        width: 180px;
    }

    .home-item div {
        width: 160px;
        font-size: 14px;
        margin-left: 6px;
    }

    .home-head {
        width: 100%;
    }

    .home-head p {
        margin: 40px 0px 0px 20px;
        font-size: 16px;
    }

    .home-head p span {
        margin-left: 200px;
        font-size: 10px;
        color: #B6B6B6;
    }
</style>
