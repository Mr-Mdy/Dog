<template>
    <nav-bar class="profileNav">
        <div slot="left"></div>
        <div slot="center">我的</div>
        <div slot="right"><img src="../../../assets/img/navbar/profileNav/设置.png"></div>
    </nav-bar>
</template>

<script>
    import NavBar from "../../../components/common/navbar/Navbar";

    export default {
        name: "ProfileNav",
        components: {
            NavBar
        }
    }
</script>

<style scoped>
    .profileNav {
        text-align: center;
        font-size: 19px;
        line-height: 50px;
        height: 50px;
        background: #F0F0F0;
    }

    .profileNav img {
        width: 25px;
        margin: 13px 10px 0px 0px;
    }
</style>