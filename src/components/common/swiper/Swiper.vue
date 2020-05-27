<template>
    <div id="hy-swiper">
        <div class="swiper" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd">
            <slot></slot>
        </div>
        <slot name="indicator"></slot>
        <!--        //下标点-->
        <div class="indicator">
            <slot name="indicator" v-if="showIndicator && slideCount>1">
                <div v-for="(item,index) in slideCount" class="indi-item" :class="{active:index === currentIndex-1}"
                     :key="index"></div>
            </slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Swiper",
        props: {
            interval: {
                type: Number,
                default: 1000
            },
            animDuration: {  //延迟
                type: Number,
                default: 300
            },
            moveRatio: { //拖到时 拖多少切下一个动画的比例
                type: Number,
                default: 0.25
            },
            showIndicator: { //指示器
                type: Boolean,
                default: true
            },
        },
        data() {
            return {
                slideCount: 0,//元素个数
                totalWidth: 0, //swiper的宽度
                swiperStyle: {}, //swiper样式
                currentIndex: 1, //当前的INDEX
                scrolling: false,//是否滚动
            }
        },
        mounted: function () {
            //操作DOM  在前后添加slide
            setTimeout(() => {
                this.handleDom();
                //开启定时器
                this.startTimer();
            }, 100)
        },
        methods: {
            //定时器操作
            startTimer() {
                this.playTimer = window.setInterval(() => {
                    this.currentIndex++;    //index下标   ++
                    this.scrollContent(-this.currentIndex * this.totalWidth);
                }, this.interval)
            },
            stopTimer() {
                //停止this.plyTime
                window.clearInterval(this.playTimer);
            },
            //滚动到正确的位置
            scrollContent: function (currentPosition) {
                //设置正在滚动
                this.scrolling = true;
                //开始滚动动画
                this.swiperStyle.transition = 'transfom' + this.animDuration + 'ms';
                // console.log( this.swiperStyle.transition)
                this.setTransform(currentPosition);
                //判断滚动到的位置
                this.checkPosition();
                //滚动完成
                this.scrolling = false
            },
            //检验正确的位置
            checkPosition: function () {
                window.setTimeout(() => {
                    //检验正确的位置
                    this.swiperStyle.transition = '0ms';
                    if (this.currentIndex >= this.slideCount + 1) {
                        this.currentIndex = 1;
                        this.setTransform(-this.currentIndex * this.totalWidth);
                    } else if (this.currentIndex <= 0) {
                        this.currentIndex = this.slideCount;
                        this.setTransform(-this.currentIndex * this.totalWidth);
                    }
                    //结束移动后的回调
                    this.$emit('transitionEnd', this.currentIndex - 1);
                }, this.anmDuration)
            },
            //设置滚动的位置
            setTransform: function (position) {
                this.swiperStyle.transform = `translate3d(${position}px,0,0`;
                this.swiperStyle['-webkit-transform'] = `translate3d(${position}px,0,0`;
                this.swiperStyle['-ms-transForm'] = `translate3d(${position}px,0,0`;
            },
            //操作DOM  在DOM前后添加slide
            handleDom: function () {
                //获取要操作的元素
                let swiperEl = document.querySelector('.swiper');
                let slidesEls = swiperEl.getElementsByClassName('slide');

                //保存个数
                this.slideCount = slidesEls.length;
                //如果大于1个  那么在前后分别添加一个slide
                if (this.slideCount > 1) {
                    let CloneFirst = slidesEls[0].cloneNode(true);  //1
                    let cloneLast = slidesEls[this.slideCount - 1].cloneNode(true); //4
                    swiperEl.insertBefore(cloneLast, slidesEls[0]);
                    swiperEl.appendChild(CloneFirst);
                    this.totalWidth = swiperEl.offsetWidth;
                    this.swiperStyle = swiperEl.style;
                }
                //让swiper元素   显示在第一个 （目前时显示前面添加的最后一个元素）
                this.setTransform(-this.totalWidth);
            },
            //拖动事件的处理
            touchStart: function (e) {
                //如果正在滚动  不可以拖动
                if (this.scrolling) return;
                //停止定时器
                this.stopTimer();
                //保存开始滚动的位置
                this.startX = e.touches[0].pageX;
            },
            touchMove: function (e) {
                //计算出用户拖动的距离
                this.currentX = e.touches[0].pageX;
                this.distance = this.currentX - this.startX;
                let currentPosition = -this.currentIndex * this.totalWidth;
                let moveDistance = this.distance + currentPosition;
                //设置当前的位置
                this.setTransform(moveDistance);
            },
            touchEnd: function () {
                //获取移动的距离
                let currentMove = Math.abs(this.distance);
                //判断最终的距离
                if (this.distance === 0) {
                    return
                } else if (this.distance > 0 && currentMove > this.totalWidth * this.moveRatio) {
                    //右边移动超过0.5
                    this.currentIndex--
                } else if (this.distance < 0 && currentMove > this.totalWidth * this.moveRatio) {
                    //向左移动超过0.5
                    this.currentIndex++
                }
                //移动到正确位置
                this.scrollContent(-this.currentIndex * this.totalWidth);
                //移动完成后重新开启定时器
                this.startTimer();
            },
            //控制上一个  下一个
            pervious: function () {
                this.changeItem(-1);
            },
            next: function () {
                this.changeItem(1);
            },

            changeItem: function (num) {
                //移除定时器
                this.stopTimer();
                //修改index的位置
                this.currentIndex += num;
                this.scrollContent(-this.currentIndex * this.totalWidth);
                //添加定时器
            }
        }
    }
</script>

<style scoped>
    #hy-swiper {
        overflow: hidden;
        position: relative;
        /*width: 80%;*/



    }

    .swiper {
        display: flex;
        height: 100%;
    }

    .indicator {
        display: flex;
        justify-content: center;
        position: absolute;
        width: 100%;
        bottom: 8px;
    }

    .indi-item {
        box-sizing: border-box;
        width: 8px;
        height: 8px;
        border-radius: 4px;
        background-color: #fff;
        line-height: 8px;
        text-align: center;
        font-size: 12px;
        margin: 0 5px;
    }

    .indi-item.active {
        background-color: rgba(212, 62, 46, 1.0);
    }
</style>