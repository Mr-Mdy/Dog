<template>
    <div class="homehot">
        <switch-bar class="home-head">
            <p slot="head">热门话题 <span>换一批</span></p>
        </switch-bar>
        <hot-bar>
            <div class="overflowhot">
                <hot-topic-item class="home-item">
                    <img slot="item-icon" src="../../../assets/img/hottopic/图层 12.png">
                    <div slot="item-text">幼犬是否可以喝牛奶 像牛奶营养丰富 喝奶补钙 帮助成长 这一类得观念</div>
                </hot-topic-item>
                <hot-topic-item class="home-item">
                    <img slot="item-icon" src="../../../assets/img/hottopic/图层 14.png">
                    <div slot="item-text">幼犬是否可以喝牛奶 像牛奶营养丰富 喝奶补钙 帮助成长 这一类得观念</div>
                </hot-topic-item>
                <hot-topic-item class="home-item">
                    <img slot="item-icon" src="../../../assets/img/hottopic/图层 12.png">
                    <div slot="item-text">幼犬是否可以喝牛奶 像牛奶营养丰富 喝奶补钙 帮助成长 这一类得观念</div>
                </hot-topic-item>
            </div>
        </hot-bar>
    </div>
</template>

<script>
    import HotBar from "../../../components/common/hottopic/HotBar";
    import HotTopicItem from "../../../components/common/hottopic/HotTopicItem";
    import SwitchBar from "../../../components/common/hottopic/SwitchBar";

    export default {
        name: "HomeHot",
        components: {
            HotBar,
            HotTopicItem,
            SwitchBar
        }
    }
</script>

<style scoped>
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
        margin-left: 230px;
        font-size: 10px;
        color: #FB9AA6;
    }
</style>