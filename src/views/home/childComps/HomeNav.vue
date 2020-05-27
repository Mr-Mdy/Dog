<template>
    <nav-bar class="home-nav">
        <div slot="left" class="home-left"><span>阳江</span><img src="../../../assets/img/navbar/定位.png" id="location">
        </div>
        <div slot="center">
            <form action="">
                <input type="text" id="search">
            </form>
        </div>
        <div slot="right" class="home-right"><img src="../../../assets/img/navbar/更多.png" id="more"></div>
    </nav-bar>
</template>

<script>
    import NavBar from "../../../components/common/navbar/Navbar";

    export default {
        name: "HomeNav",
        components: {
            NavBar
        }
    }
</script>

<style scoped>
    #search {
        width: 200px;
        height: 35px;
        border: 0px #eeeeee solid;
        outline-style: none;
        background: #F1F1F1 url("../../../assets/img/navbar/形状 1.png") no-repeat 10px;
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
        background: #FFFFFF;
        line-height: 70px;
        height: 70px;
    }

    .home-left {
        width: 90px;
    }

    .home-right {
        width: 50px;
    }
</style>