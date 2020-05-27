<template>
    <div class="prifilehot">
        <switch-bar class="profile-head">
            <p slot="head">我的订单 <span>查看全部订单</span></p>
        </switch-bar>
        <hot-bar class="profile-bar">
            <hot-topic-item>
                <img slot="item-icon" src="../../../assets/img/app/图标-切图_19.png">
                <div slot="item-text">购物车</div>
            </hot-topic-item>
            <hot-topic-item>
                <img slot="item-icon" src="../../../assets/img/app/图标-切图_20.png">
                <div slot="item-text">购物车</div>
            </hot-topic-item>
            <hot-topic-item>
                <img slot="item-icon" src="../../../assets/img/app/图标-切图_31.png">
                <div slot="item-text">购物车</div>
            </hot-topic-item>
            <hot-topic-item>
                <img slot="item-icon" src="../../../assets/img/app/组 6.png" id="img1">
                <div slot="item-text">购物车</div>
            </hot-topic-item>
        </hot-bar>
    </div>
</template>

<script>
    import SwitchBar from "../../../components/common/hottopic/SwitchBar";
    import HotBar from "../../../components/common/hottopic/HotBar";
    import HotTopicItem from "../../../components/common/hottopic/HotTopicItem";

    export default {
        name: "ProfileHot",
        components: {
            SwitchBar,
            HotBar,
            HotTopicItem
        }
    }
</script>

<style scoped>
    .prifilehot {
        position: relative;
        top: 85px;
    }

    .profile-head p {
        margin-left: 15px;
    }

    .profile-head span {
        font-size: 10px;
        margin-left: 200px;
    }

    img {
        width: 70px;
    }

    .profile-bar {
        margin-top: 0px;
        height: 220px;
    }

    .profile-bar div {
        margin-top: -18px;
    }


    #img1 {
        width: 55px;
        margin: 24px 0px 23px 0px;
    }
</style>