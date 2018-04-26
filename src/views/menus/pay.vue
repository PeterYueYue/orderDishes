<template>
    <div class="zj-main">
        <div class="zj-money">
            <span>应付金额</span>
            <div>
                <span>¥</span>
                <span>99.00</span>
            </div>
        </div>
        <div class="zj-pay">
            <div class="zj-title">选择支付方式</div>
            <div class="zj-alipay">
                <div></div>
                <span>支付宝支付</span>
                <div :class="{isSelect:selectd==1}" @click="isSelected()"></div>
            </div>
        </div>
        <div>
            <div class="zj-button">确认支付</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "pay",
        data() {
            return {
                selectd: 0
            }
        },
        methods: {
            isSelected() {
                if (this.selectd == 0) {
                    this.selectd = 1
                } else {
                    this.selectd = 0
                }
            }
        }
    }
</script>

<style scoped lang="less">
    .zj-main {
        width: 100%;
        height: 100%;
        background-color: #ddd;
        .zj-money {
            display: flex;
            position: relative;
            height: 1.36rem;
            background-color: #fff;
            line-height: 1.36rem;
            span:nth-child(1) {
                font-size: .4rem;
                margin-left: .4rem;
            }
            div {
                position: absolute;
                right: .4rem;
                color: #ff461d;
                span:nth-child(1) {
                    font-size: .32rem;
                }
                span:nth-child(2) {
                    font-size: .56rem;
                }
            }
        }
        .zj-pay {
            background-color: #ffffff;
            margin-top: .24rem;
            height: 2.92rem;
            .zj-title {
                height: 1.28rem;
                color: #333;
                padding-left: .266667rem;
                line-height: 1.28rem;
                font-size: .4rem;
                border-bottom: 1px solid #ddd;
            }
            .zj-alipay {
                display: flex;
                position: relative;
                height: 1.586667rem;
                align-items: center;
                line-height: 1.586667rem;
                div:nth-child(1) {
                    width: 1.066667rem;
                    height: 1.066667rem;
                    border-radius: 50%;
                    background: url(../../assets/images/alipay.png) no-repeat;
                    background-size: contain;
                    margin-left: .266667rem;
                }
                span {
                    font-size: .4rem;
                    margin-left: .24rem;
                }
                div:nth-of-type(2) {
                    position: absolute;
                    right: .266667rem;
                    width: .613333rem;
                    height: .613333rem;
                    border-radius: 50%;
                    border: 1px solid #ddd;
                }
                .isSelect {
                    background: url(../../assets/images/yes.png) no-repeat;
                    background-size: contain;
                }
            }
        }
        .zj-button {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 1.32rem;
            background-color: #3190e8;
            color: #fff;
            font-size: .48rem;
            text-align: center;
            line-height: 1.32rem;
        }

    }
</style>