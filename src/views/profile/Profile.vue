<template>
    <div class="profile">
        <profile-nav></profile-nav>
        <div class="personal">
            <div class="left"><img src="../../assets/img/profile/图层 11.png"></div>
            <div class="center">
                <h1>几度花开</h1>
                <p>简介</p>
            </div>
            <div class="right"><img src="../../assets/img/profile/列表.png"></div>
        </div>
        <profile-hot></profile-hot>

        <div class="list">
            <ul>
                <li v-for="(item,index) in list" :key="index">{{item}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
    import ProfileNav from "./childsComps/ProfileNav";
    import ProfileHot from "./childsComps/ProfileHot";


    export default {
        name: "Profile",
        components: {
            ProfileNav,
            ProfileHot,
        },
        data() {
            return {
                list: ['签到', '浏览记录', '常见问题', '客服中心', '关于']
            }
        }
    }
</script>

<style scoped>
    .profile {
        width: 100%;
        height: 1500px;
        /*background: #FFFFFF;*/
        /*position: fixed;*/
        /*z-index: 2;*/
    }

    .personal {
        width: 100%;
        display: flex;
        position: relative;
        top: 70px;
    }

    .center {
        flex: 1;
    }

    .center h1 {
        margin-top: 20px;
        font-size: 16px;
    }

    .center p {
        font-size: 12px;
    }

    .left, .right {
        width: 130px;
    }

    .left img {
        margin-left: 15px;
        width: 80px;
    }

    .right img {
        margin: 35px 0px 0px 90px;
        width: 10px;
    }

    .list {
        position: relative;
        top: 210px;
        width: 100%;
    }

    .list ul {
        position: absolute;
        left: -20px;
        display: inline-block;
        margin: 0;
        list-style-type: none;
    }

    .list ul li {
        margin: 0px 0px 0px 0px;
        width: 100%;
        height: 60px;
    }
</style>
