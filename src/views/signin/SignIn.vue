<template>
    <div class="signin">
        <div class="head">
            <img src="../../assets/img/signin/图层 112.png"/>
            <p>汪物之家</p>
        </div>
        <div class="switch">
            <div @click="switch1" :class="{active:show==1}">登录</div>
            <div @click="switch2" :class="{active:show==2}">注册</div>
        </div>

        <div class="login" v-if="show==1">
            <input type="text" v-model="loginForm.username" placeholder="请输入用户名"><br>
            <input type="password" v-model="loginForm.password" placeholder="请输入密码"><br>
            <button @click="login">登录</button>
        </div>

        <div class="login" v-if="show==2">
            <input type="text" v-model="loginForm.username" placeholder="请输入用户名"><br>
            <input type="password" v-model="loginForm.password" placeholder="请输入密码"><br>
            <button @click="login">注册</button>
        </div>

        <div class="tail">
            <p>第三方登录</p>
            <div class="img">
                <img src="../../assets/img/signin/图层 11113.png"/>
                <img src="../../assets/img/signin/图层 15.png"/>
                <img src="../../assets/img/signin/图层 114.png"/>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: "SignIn",
        data() {
            return {
                loginForm:{
                    username: '',
                    password: '',
                },
                responseResult: [],
                show : 1,
                activeColor: {
                    type: String,
                    default: 'red',
                }
            }
        },
        mounted() {

        },
        computed: {
            isActive1() {
                return true;
            },
            activeStyle() {
                return this.isActive1 ? {color: this.activeColor} : {}
            }
        },
        methods: {
            login () {
                axios.post('http://localhost:8488/api/login', {
                    username: this.loginForm.username,
                    password: this.loginForm.password
                })
                    .then(successResponse => {
                        console.log(successResponse.data);
                        if (successResponse.data.code === 1) {
                            var _this = this
                            _this.$store.commit('login', _this.loginForm)
                            var path = this.$route.query.redirect
                            console.log(path);
                            this.$router.replace({path: path === '/' || path === undefined ? '/profile' : path})
                            console.log(path);
                        } else if(successResponse.data.code === 400){
                            console.log("no");
                        }
                    })
                    .catch(failResponse => {
                        console.log(failResponse);
                        console.log("no");
                    })
            },
            switch1() {
                this.show = 1;

            },
            switch2() {
                this.show = 2;
            }
        },
    }
</script>

<style scoped>
    .active {
        color: black;
    }

    .signin{
        width: 100%;
        height: 1000px;
        background: #FFFFFF;
        position: fixed;
        z-index: 20;
    }
    .head{
        width: 100%;
        height: 250px;
        position: relative;
        /*top: -16px;*/
    }
    .head img{
        width: 90px;
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    .head p{
        font-size: 18px;
        position: absolute;
        top: 62%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    input{
        width: 70%;
        height: 30px;
        border: 0px;
        border-bottom: 1px solid #ECECEC;
        margin: 30px 0px 0px 30px;
        background: #FFFFFF;
    }
    button{
        color: #FFFFFF;
        margin: 50px 0px 0px 50px;
        width: 70%;
        height: 40px;
        background: #73C3E6;
        border-radius: 10px;
    }
    .tail{
        margin-top: 30px;
        width: 100%;
        /*background: red;*/
        height: 300px;
        overflow: hidden;
    }
    .tail img{
        height: 100%;
        float: left;
        margin-left: 55px;
    }
    .tail p{
        margin-bottom: 40px;
        text-align: center;
    }
    .img{
        width: 100%;
        height: 50px;
    }

    .switch{
        color: #969696;
    }
    .switch div{
        margin-left: 30px;
        font-size: 16px;
        float: left;
    }
</style>