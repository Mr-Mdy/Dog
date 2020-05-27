<template>
    <div id="main-tab-bar">
        <tab-bar>
            <tab-bar-item path="/home">
                <img slot="item-icon" src="../../../assets/img/tabbar/1-1.png" alt="">
                <img slot="item-icon-active" src="../../../assets/img/tabbar/1-2.png" alt="">
                <div slot="item-text">首页</div>
            </tab-bar-item>
            <tab-bar-item path="/shop" activeColor="black">
                <img slot="item-icon" src="../../../assets/img/tabbar/2-1.png" alt="">
                <img slot="item-icon-active" src="../../../assets/img/tabbar/2-2.png" alt="">
                <div slot="item-text">商城</div>
            </tab-bar-item>
            <tab-bar-item path="" activeColor="black">
                <img slot="item-icon" src="../../../assets/img/tabbar/图标-切图_15.png" >
                <img slot="item-icon-active" src="../../../assets/img/tabbar/图标-切图_15.png" id="add">
            </tab-bar-item>
            <tab-bar-item path="/square" activeColor="black">
                <img slot="item-icon" src="../../../assets/img/tabbar/3-1.png" alt="">
                <img slot="item-icon-active" src="../../../assets/img/tabbar/3-2.png" alt="">
                <div slot="item-text">广场</div>
            </tab-bar-item>
            <tab-bar-item path="/profile" activeColor="black">
                <img slot="item-icon" src="../../../assets/img/tabbar/4-1.png" alt="">
                <img slot="item-icon-active" src="../../../assets/img/tabbar/4-2.png" alt="">
                <div slot="item-text">我的</div>
            </tab-bar-item>
        </tab-bar>
    </div>
</template>

<script>
    import TabBar from "../../common/tabbar/TabBar";
    import TabBarItem from "../../common/tabbar/TabBarItem";

    export default {
        name: "MainTabBar",
        components: {
            TabBar,
            TabBarItem
        }
    }

</script>

<style scoped>
    #add {
        width: 70px;
        position: relative;
        top: -20px;
    }
</style>
