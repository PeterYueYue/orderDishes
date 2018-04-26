<template>
    <div>

        <div class="zj-shop" v-if="isShow == 2">
            <div class="zj-main">
                <div class="zj-title">
                    <span>桌号:外3</span>
                    <div></div>
                    <div></div>
                </div>
                <div class="zj-shops">
                    <span>共2件商品</span>
                    <div>
                        <span>合计:</span>¥
                        <span>99.00</span>
                    </div>
                </div>
                <div class="zj-message">
                    <span>用餐人数:2人</span>
                    <div></div>
                </div>
                <div class="zj-text">
                    <input type="text" placeholder="请输入您的口味要求(可不填)">
                </div>
                <!-- 菜 -->
                <div class="zj-menu">
                    <div class="zj-menu-title">
                        <div></div>
                        <span>辅菜(1)</span>
                    </div>
                    <div class="zj-lists">
                        <div>
                            <img src="../../assets/images/avart.png" alt="">
                        </div>
                        <span>慧慧</span>
                    </div>
                    <div class="zj-name">
                        <span>海鲜拼盘</span>
                        <span>打包</span>
                    </div>
                    <div class="zj-price">
                        <span class="zj-span">¥
                            <span>0.15</span>
                        </span>
                        <div>
                            <span>-</span>
                            <span>4</span>
                            <span>+</span>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 底部悬浮 -->
            <div class="zj-bottom">
                <div @click="keepOn()">继续点菜</div>
                <div>去下单(¥99.00)</div>
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
                <p>购物车</p>
                <div></div>
                <p>购物车里还没有东西哦~</p>
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
        name: "shop-car",
        data() {
            return {
                // 是否为空
                isShow: 1,
                isClick: 1,
                show: 1
            }
        },
        methods: {
            Show() {
                if (this.show == 1) {
                    this.show = 2;
                }
                else {
                    this.show = 1;
                }
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
                text-align: center;
            }
            div {
                width: .96rem;
                height: .88rem;
                background: url(../../assets/images/cars.png);
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

    .zj-shop {
        width: 100%;
        height: 100%;
        background-color: #ddd;
        padding-top: .213333rem;
        .zj-main {
            width: 9.466667rem;
            // height: 6.56rem;
            height: 100%;
            background-color: red;
            margin: 0 auto;
            padding-top: .2rem;
            background: url(../../assets/images/shops.png) no-repeat;
            background-size: contain;
            .zj-title {
                // width: 100%;
                height: 1.373333rem;
                margin: 0 .2rem;
                // outline: 1px solid red;
                border-bottom: 1px solid #ddd;
                line-height: 1.373333rem;
                span {
                    margin-left: .2rem;
                    font-size: .4rem;
                }
                div:nth-of-type(1) {
                    width: .56rem;
                    height: .56rem;
                    float: right;
                    background: url(../../assets/images/delete.png) no-repeat;
                    // outline: 1px solid red;
                    background-size: contain;
                    margin-top: .4rem;
                    margin-left: .2rem;
                    margin-right: .1rem;
                }
                div:nth-of-type(2) {
                    width: .56rem;
                    float: right;
                    height: .56rem;
                    background: url(../../assets/images/break.png) no-repeat;
                    // outline: 1px solid red;
                    background-size: contain;
                    margin-top: .4rem;
                }
            }
            .zj-shops {
                margin: 0 .2rem;
                height: 1.08rem;
                border-bottom: 1px solid #dddddd;
                line-height: 1.08rem;
                span {
                    margin-left: .2rem;
                    font-size: .4rem;
                }
                div {
                    float: right;
                    font-size: .32rem;
                    color: #ff461d;
                    span:nth-child(1) {
                        font-size: .48rem;
                    }
                }
            }
            .zj-message {
                display: inline-block;
                width: 9.1rem;
                margin: 0 .2rem;
                height: 1.08rem;
                line-height: 1.08rem;
                span {
                    margin-left: .2rem;
                    font-size: .4rem;
                }
                div {
                    float: right;
                    width: .3rem;
                    height: .386667rem;
                    margin-top: .3rem;
                    margin-right: .2rem;
                    // outline: 1px solid orange;
                    background: url(../../assets/images/right.png) no-repeat;
                    background-size: 100% 100%;
                }
            }
            .zj-text {
                width: 9.1rem;
                margin: 0 .2rem;
                height: 1.08rem;
                line-height: 1.08rem;
                input {
                    width: 8.8rem;
                    outline: none;
                    font-size: .4rem;
                    margin-left: .2rem;
                }
            }
            .zj-menu {
                width: 9.1rem;
                margin: .5rem .2rem 0;
                height: 1.08rem;
                line-height: 1.08rem;
                .zj-menu-title {
                    display: flex;
                    align-items: center;
                    div {
                        width: .093333rem;
                        height: .44rem;
                        background-color: #3190e8;
                    }
                    span {
                        font-size: .4rem;
                        color: #333;
                        margin-left: .2rem;
                        font-weight: 500px;
                    }
                }
                .zj-lists {
                    display: flex;
                    align-items: center;
                    margin-top: .2rem;
                    div {
                        margin-left: .3rem;
                        width: 1.093333rem;
                        height: 1.093333rem;
                        border-radius: 50%;
                        img {
                            display: inline-block;
                            width: 100%;
                        }
                    }
                    span {
                        margin-left: .2rem;
                    }
                }
                .zj-name {
                    display: flex;
                    align-items: center;
                    span:nth-child(1) {
                        margin-left: .3rem;
                        font-size: .4rem;
                    }
                    span:nth-child(2) {
                        display: inline-block;
                        width: 1.066667rem;
                        height: .48rem;
                        border-radius: 5px;
                        border: 1px solid #ddd;
                        line-height: .48rem;
                        text-align: center;
                        margin-left: .1rem;
                        font-size: .266667rem;
                        color: #888;
                    }
                }
                .zj-price {
                    height: 1rem;
                    margin: 0 .2rem;
                    position: relative;
                    display: flex;
                    // outline: 1px solid red;
                    border-bottom: 1px solid #ddd;
                    .zj-span {
                        font-size: .32rem;
                        color: #ff461d;
                        span {
                            font-size: .453333rem;
                        }
                    }
                    div {
                        position: absolute;
                        right: 0;
                        // outline: 1px solid orange;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        span:nth-child(1) {
                            display: inline-block;
                            width: .64rem;
                            height: .64rem;
                            line-height: .4rem;
                            text-align: center;
                            border-radius: 50%;
                            color: #3190e8;
                            font-size: .8rem;
                            border: 1px solid #3190e8;
                        }
                        span:nth-child(2) {
                            display: inline-block;
                            min-width: .5rem;
                            text-align: center;
                        }
                        span:nth-child(3) {
                            display: inline-block;
                            width: .64rem;
                            height: .64rem;
                            line-height: .5rem;
                            text-align: center;
                            border-radius: 50%;
                            color: #ffffff;
                            font-size: .6rem;
                            background-color: #3190e8;
                        }
                    }
                }

            }

        }
        .zj-bottom {
            width: 100%;
            height: 1.4rem;
            // outline: 1px solid red;
            position: absolute;
            bottom: 0;
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