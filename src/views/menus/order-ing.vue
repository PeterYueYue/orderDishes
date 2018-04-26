<template>
    <div>

        <div class="zj-main" v-if="isShow==2">
            <div class="zj-body">
                <div class="zj-title">
                    <span>桌号:外3</span>
                    <div></div>
                </div>
                <div class="zj-money">
                    <p>
                        <span>¥</span>
                        <span>99.00</span>
                    </p>
                    <div></div>
                </div>
                <div class="zj-more">
                    <span>更多</span>
                    <div :class="{zjTransform : more == 1}" @click="More()"></div>
                </div>
            </div>
            <transition name="more">
                <div class="zj-time" v-if="more !=1">
                    <p>下单时间:11-10 09:30</p>
                    <p>用餐人数:2</p>
                    <p>备注:暂无备注</p>
                </div>
            </transition>
            <div class="zj-goods">
                <div class="zj-titles">
                    <div></div>
                    <span>合计共1件商品</span>
                </div>

                <div class="zj-lists">
                    <div>单人锅</div>
                    <div><span>已下厨</span></div>
                    <div>x1</div>
                    <div>¥99.00</div>
                </div>
                <div class="zj-bottom">
                    <div @click="keepOn()">继续点菜</div>
                    <div @click="pay()">去结账(¥99.00)</div>
                </div>
            </div>
            <!-- 弹出框 -->
            <div class="zj-windows" v-if="isClick==2" @click="cancel()"></div>
            <div class="zj-sure" v-if="isClick==2">
                <div>
                    <p>您确定要加菜吗?</p>
                </div>
                <div>
                    <section @click="cancel()">确认</section>
                    <section @click="cancel()">取消</section>
                </div>
            </div>
        </div>
        <!-- 没有东西 -->
        <div class="zj-empty" v-if="isShow==1">
            <div class="zj-shop">
                <p>订单</p>
                <div></div>
                <p>还没有正在进行中的订餐哦~</p>
                <p>请点击下方"去点餐"按钮开始点餐吧!</p>
            </div>
            <!-- <div class="zj-foot">
                去点餐
            </div> -->
            <router-link tag="div" :to="{path:'order'}" class="zj-foot">去点餐</router-link>
        </div>
    </div>

</template>

<script>
    export default {
        name: "order-ing",
        data() {
            return {
                isShow: 1,
                isClick: 1,
                more: 1
            }
        },
        mounted() {

        },
        methods: {
            More() {
                // console.log(this.more);
                if (this.more == 1) {
                    this.more = 2
                } else {
                    this.more = 1
                }
            },
            pay() {
                this.$router.push('/pay')
            },
            // 继续点菜弹窗
            keepOn() {
                this.isClick = 2
            },
            // 确认取消
            cancel() {
                this.isClick = 1
            }
        }
    }
</script>

<style scoped lang="less">
    .zj-empty {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: #ddd;
        .zj-shop {
            width: 9.466667rem;
            height: 5.333333rem;
            background: url(../../assets/images/shoped.png);
            background-size: contain;
            margin: .4rem auto;
            p:nth-of-type(1) {
                font-size: .453333rem;
                color: #666;
                padding-top: .3rem;
                text-align: center;
            }
            div {
                width: .88rem;
                height: .933333rem;
                background: url(../../assets/images/goods.png);
                background-size: contain;
                margin: 1.186667rem auto 0;
            }
            p:nth-of-type(2) {
                color: #333;
                font-size: .453333rem;
                text-align: center;
                margin-top: .52rem;
            }
            p:nth-of-type(3) {
                color: #888;
                font-size: .373333rem;
                text-align: center;
                margin-top: .1rem;
            }
        }
        .zj-foot {
            position: absolute;
            bottom: 0;
            width: 100%;
            line-height: 1.306667rem;
            text-align: center;
            color: #fff;
            font-size: .48rem;
            height: 1.306667rem;
            background-color: #0993f9;
        }
    }

    .zj-main {
        width: 100%;
        height: 100%;
        background-color: #ddd;
        .zj-body {
            width: 9.466667rem;
            height: 9.066667rem;
            // outline: 1px solid red;
            margin: .213333rem auto 0;
            background: url(../../assets/images/shop.png) no-repeat;
            background-size: 100% 100%;
            .zj-title {
                // width: 100%;
                height: 1.373333rem;
                margin: 0 .2rem;
                // outline: 1px solid red;
                // border-bottom: 1px solid #ddd;
                line-height: 1.373333rem;
                span {
                    margin-left: .2rem;
                    font-size: .4rem;
                }

                div {
                    width: .56rem;
                    float: right;
                    height: .56rem;
                    background: url(../../assets/images/break.png) no-repeat;
                    // outline: 1px solid red;
                    background-size: contain;
                    margin-top: .4rem;
                    margin-right: .2rem;
                }
            }
            .zj-money {
                position: relative;
                text-align: center;
                // outline: 1px solid red;
                height: 4.5rem;
                p {
                    font-size: .8rem;
                    color: #ff461f;
                    margin-top: .6rem;
                    span:nth-child(2) {
                        font-size: 1.333333rem;
                    }
                }
                div {
                    position: absolute;
                    bottom: 1rem;
                    right: 1rem;
                    width: 1.6rem;
                    height: 1.36rem;
                    background: url(../../assets/images/money.png) no-repeat;
                    background-size: contain;
                }
            }
            .zj-more {
                margin-top: 1.2rem;
                height: 1.4rem;
                // outline: 1px solid red;
                .zjTransform {
                    transform: rotate(180deg);
                }
                span {
                    font-size: .4rem;
                    color: #333;
                    line-height: 1.24rem;
                    margin-left: .306667rem;
                }
                div {
                    width: .4rem;
                    height: .4rem;
                    margin-top: .5rem;
                    margin-right: .3rem;
                    // outline: 1px solid red;                    
                    background: url(../../assets/images/top.png) no-repeat;
                    background-size: 100% 100%;
                    float: right;
                }
            }
        }
        .zj-time {
            width: 9.466667rem;
            // outline: 1px solid red;
            margin: 0.1rem auto 0;
            padding-top: .386667rem;
            padding-bottom: .3rem;
            background-color: #fff;
            font-size: .4rem;
            p {
                line-height: .64rem;
                margin-left: .306667rem;
            }
            p:nth-child(3) {
                color: #888;
            }
        }
        .zj-goods {
            width: 9.466667rem;
            // outline: 1px solid red;
            margin: .2rem auto;
            background-color: #fff;
            padding-top: .4rem;
            padding-bottom: 1rem;
            .zj-titles {
                display: flex;
                margin-bottom: .3rem;
                div {
                    width: .093333rem;
                    height: .44rem;
                    background-color: #3190e8;
                    margin-left: .28rem;
                }
                span {
                    font-size: .4rem;
                    color: #333;
                    font-weight: 500;
                    line-height: .4rem;
                    margin-left: .2rem;
                }
            }
            .zj-lists {
                z-index: 100;
                width: 8.946667rem;
                height: 1.133333rem;
                background-color: #fff;
                //  outline: 1px solid red;
                margin: 0 auto;
                border-bottom: 1px solid #ddd;
                display: flex;
                line-height: 1.133333rem;
                font-size: .4rem;
                div {
                    width: 25%;
                }
                div:nth-child(1) {
                    text-align: center;
                }
                div:nth-child(2) {
                    display: flex;
                    align-items: center;
                    span {
                        display: inline-block;
                        width: 1.333333rem;
                        height: .48rem;
                        line-height: .45rem;
                        text-align: center;
                        font-size: .32rem;
                        border: 1px solid #2faf62;
                        color: #2faf62;
                        border-radius: 5px;
                    }
                }
                div:nth-child(3) {
                    text-align: center;
                }
                div:nth-child(4) {
                    text-align: right;
                    padding-right: .2rem;
                }
            }
            .zj-bottom {
                width: 100%;
                height: 1.4rem;
                // outline: 1px solid red;
                position: absolute;
                bottom: 0;
                left: 0;
                display: flex;
                div {
                    width: 50%;
                    height: 100%;
                    line-height: 1.4rem;
                    text-align: center;
                    font-size: .453333rem;
                }
                div:nth-child(1) {
                    background: rgba(25, 24, 22, 0.8);
                    color: #fff;
                }
                div:nth-child(2) {
                    color: #fff;
                    background-color: rgba(89, 191, 129, .8)
                }
            }
        }
        .more-enter-active {
            animation: more-in 1s;
        }
        .more-leave-active {
            animation: more-in 1s reverse;
        }
        @keyframes more-in {
            0% {
                height: 0;
                opacity: 0;
            }
            100% {
                height: 2.5rem;
                // outline: 1px solid red;
            }
        }
        .zj-windows {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            background: rgba(25, 24, 22, 0.8);
        }
        .zj-sure {
            width: 7.466667rem;
            height: 3.493333rem;
            background-color: #fff;
            position: absolute;
            top: 6.133333rem;
            left: 1.266667rem;
            border-radius: 6px;
            div:nth-child(1) {
                height: 2.386667rem;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: .4rem;
                color: #333;
                border-bottom: 1px solid #ddd;
            }
            div:nth-child(2) {
                display: flex;
                section {
                    width: 50%;
                    text-align: center;
                    line-height: 1.106667rem;
                }
                section:nth-child(1) {
                    border-right: 1px solid #ddd;
                    background-color: #0b8cea;
                    border-bottom-left-radius: 6px;
                    border-bottom: 1px solid #0b8cea;
                    color: #fff;
                }
            }
        }
    }
</style>