<template>
    <div id="mian-appliance">
        <appliance class="app">
            <appliance-item>
                <img slot="item-icon" src="../../../assets/img/app/图标-切图_32.png">
                <div slot="item-text">附近医疗</div>
            </appliance-item>
            <appliance-item>
                <img slot="item-icon" src="../../../assets/img/app/图标-切图_33.png">
                <div slot="item-text">养宠指南</div>
            </appliance-item>
            <appliance-item>
                <img slot="item-icon" src="../../../assets/img/app/图标-切图_34.png">
                <div slot="item-text">宠物配对</div>
            </appliance-item>
            <appliance-item>
                <img slot="item-icon" src="../../../assets/img/app/图标-切图_35.png">
                <div slot="item-text">我的订阅</div>
            </appliance-item>
            <appliance-item>
                <img slot="item-icon" src="../../../assets/img/app/图标-切图_19.png">
                <div slot="item-text">购物车</div>
            </appliance-item>
            <appliance-item>
                <img slot="item-icon" src="../../../assets/img/app/图标-切图_36.png">
                <div slot="item-text">我的福利</div>
            </appliance-item>
            <appliance-item>
                <img slot="item-icon" src="../../../assets/img/app/图标-切图_37.png">
                <div slot="item-text">我的钱包</div>
            </appliance-item>
            <appliance-item>
                <img slot="item-icon" src="../../../assets/img/app/图标-切图_38.png">
                <div slot="item-text">我的签到</div>
            </appliance-item>
        </appliance>
    </div>
</template>

<script>
    import Appliance from "../../common/appliance/Appliance";
    import ApplianceItem from "../../common/appliance/ApplianceItem";

    export default {
        name: "MainAppliance",
        components: {
            Appliance,
            ApplianceItem
        }
    }
</script>

<style scoped>
    #mian-appliance {
        position: relative;
        top: 65px;
    }

    .app{
        width: 80%;
    }
</style>