<template>
    <div class="square">
        <div class="squareswiper">
            <swiper class="hy-swiper">
                <swiper-item v-for="item in banners" :key="item.src">
                    <a href="#">
                        <img v-bind:src="item.src" alt="">
                    </a>
                </swiper-item>
            </swiper>
        </div>


        <nav-bar class="home-nav">
            <div slot="left" class="home-left">
            </div>
            <div slot="center">
                <form action="">
                    <input type="text" id="search">
                </form>
            </div>
            <div slot="right" class="home-right"><img src="../../assets/img/navbar/更多.png" id="more"></div>
        </nav-bar>

        <tab-control :titles="['流行','新款','精选']" class="tab-control" @tabClick="tabClick"></tab-control>

        <div class="userTitle" v-for="(item,index) in container" :key="index">

            <div class="personal">
                <div class="left"><img :src="item.HeadPortrait"></div>
                <div class="center">
                    <h1>麦琪宝贝</h1>
                    <p>一分钟前 来自Iphone6s</p>
                </div>
                <div class="right"><p>更多</p></div>
            </div>
            <div class="title">
                {{item.title}}
            </div>


            <div class="img"  v-for="(item,index) in container" :key="index">
                <img :src="item.img[index].src">
            </div>
        </div>

    </div>
</template>

<script>
    import {Swiper, SwiperItem} from '../../components/common/swiper'
    import NavBar from "../../components/common/navbar/Navbar";
    import TabControl from "../../components/content/tabControl/TabControl";
    export default {
        name: "Catehory",
        components: {
            Swiper,
            SwiperItem,
            NavBar,
            TabControl
        },
        data() {
            return {
                banners: [
                    {src: require('../../assets/img/home/scsd.jpg')},
                    {src: require('../../assets/img/home/sfds.jpg')},
                    {src: require('../../assets/img/home/svcd.jpg')},
                    {src: require('../../assets/img/home/vdge.jpg')},
                ],
                container: [
                    {
                        title: '十分钟没注意它，它 竟然偷偷把我刚买的肉包子给吃了，明明嘴巴还在咀嚼着，被发现后立刻装无辜，嘴巴上的肉汁都还在呢。。。。。。',
                        HeadPortrait: require('../../assets/img/profile/图层 11.png'),
                        img:[
                            {src: require('../../assets/img/square/csd.jpg')},
                            {src: require('../../assets/img/square/dsacsdv.jpg')},
                            {src: require('../../assets/img/square/gdsdf.jpg')},
                        ],
                        address: '广州',
                        comment: 1522,
                        like: 5616,
                    },
                    {
                        title: '十分钟没注意它，它 竟然偷偷把我刚买的肉包子给吃了，明明嘴巴还在咀嚼着，被发现后立刻装无辜，嘴巴上的肉汁都还在呢。。。。。。',
                        HeadPortrait: require('../../assets/img/profile/图层 11.png'),
                        img:[
                            {src: require('../../assets/img/square/csd.jpg')},
                            {src: require('../../assets/img/square/dsacsdv.jpg')},
                            {src: require('../../assets/img/square/gdsdf.jpg')},
                        ],
                        address: '广州',
                        comment: 1522,
                        like: 5616,
                    },

                ],
                //默认类型
                currentType: 'pop',
            }
        },
        methods :{
            tabClick(index) {
                // console.log(index);
                switch (index) {
                    case 0:
                        this.currentType = 'pop'
                        break
                    case 1:
                        this.currentType = 'new'
                        break
                    case 2:
                        this.currentType = 'sell'
                        break
                }
            },
        }
    }
</script>

<style scoped>
    .hy-swiper{
        width: 100%;
        height: 250px;
    }




    #search {
        width: 200px;
        height: 35px;
        border: 0px #eeeeee solid;
        outline-style: none;
        background: #FFFFFF url("../../assets/img/navbar/形状 1.png") no-repeat 10px;
        background-size: 13px;
        border-radius: 100px;
    }

    #location {
        width: 10px;
        vertical-align: -4%;
        margin-left: 15px;
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




    .personal{
        width: 100%;
        display: flex;
    }
    .center {
        flex: 1;
    }

    .center h1 {
        margin-top: 20px;
        font-size: 12px;
    }

    .center p {
        font-size: 12px;
        color: #A9A9A9;
    }

    .left, .right {
        width: 80px;
    }

    .left img {
        margin-left: 15px;
        margin-top: 15px;
        width: 50px;
    }
    .right p{
        font-size: 12px;
        margin-top: 35px;
        margin-left: 15px;
    }

    .title{
        width: 90%;
        margin: 10px auto;
    }
    .img img{
        margin-top: 10px;
        margin-left: 15px;
        width: 120px;
        border-radius: 10px;
        float: left;
    }

    .userTitle{
        margin-top: ;
    }
</style>
