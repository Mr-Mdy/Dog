<template>
    <div class="tab-bar-item" @click="itemClick">
        <slot v-if="!isActive" name="item-icon">图片插槽</slot>
        <slot v-else name="item-icon-active">替换</slot>
        <div :style="activeStyle">
            <slot name="item-text"></slot>

        </div>
    </div>
</template>

<script>
    export default {
        name: "TabBarItem",
        props: {
            path: String,
            activeColor: {
                type: String,
                default: 'black',
            }
        },
        data() {
            return {
                // isActive: false
            }
        },
        computed: {
            isActive() {
                //route当前活跃的router   indeof 判断  /home  =? item1(./home)
                // 在this。path中找没有==-1
                return this.$route.path.indexOf(this.path) !== -1;
            },
            activeStyle() {
                return this.isActive ? {color: this.activeColor} : {}
            }
        },
        methods: {
            itemClick() {
                if (this.path=='/profile'){
                    if (!this.$store.state.user.username){

                        this.$router.replace(this.path)
                    } else {
                        this.$store.state.loginif.boolean = false
                        this.$router.replace("/signin")
                    }
                } else {
                    this.$router.replace(this.path)
                }

            }
        }
    }
</script>

<style scoped>

    .tab-bar-item {
        flex: 1px;
        text-align: center;
        height: 60px;
        /*line-height: 49px;*/
        font-size: 10px;
    }

    .tab-bar-item img {
        margin-top: -8px;
        width: 40px;
        /*去除图片边距*/
        vertical-align: middle;
    }


    .tab-bar-item div {
        margin-top: -6px;
    }
</style>
