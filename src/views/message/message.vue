<template>
    <div class="zj-main">
        <!-- 头部 -->
        <div class="zj-top">
            <div>
                <img src="../../assets/images/avart.png" alt="">
            </div>
            <div>
                <p>测试住点名</p>
                <p>桌台:DT3</p>
            </div>
        </div>
        <!-- 店铺信息 -->
        <div class="zj-message">
            <div class="zj-title">
                <span>店铺信息</span>
            </div>
            <p>地址:军工路100号</p>
            <p>电话:400-889-6668</p>
            <p>营业时间:9:30-22:00</p>
        </div>
        <!-- 店铺简介 -->
        <div class="zj-abstract">
            <div class="zj-title">
                <span>店铺简介</span>
            </div>
            <div class="zj-abstracts">
                暂无简介
            </div>
        </div>
        <!-- 底部 -->
        <div class="zj-foot">
            <router-link tag="div" :to="{path:'order'}"></router-link>
        </div>

    </div>
</template>
<script>
    export default {
        data() {
            return {
                show: false,
            }
        },
        mounted: function () {

        },
        methods: {},
        created: function () {

        }
    }
</script>
<style scoped lang="less">
    .zj-main {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: #ddd;

        .zj-top {
            width: 100%;
            height: 3.466667rem;
            background-color: #fff;
            display: flex;
            align-items: center;
            div:nth-child(1) {
                width: 3.466667rem;
                height: 3.466667rem;
                display: flex;
                justify-content: center;
                align-items: center;
                img {
                    display: inline-block;
                    width: 2.973333rem;
                    height: 3.106667rem;
                }
            }
            div:nth-child(2) {
                p:nth-child(1) {
                    color: #333;
                    font-size: .56rem;
                }
                p:nth-child(2) {
                    color: #666;
                    font-size: .48rem;
                }
            }
        }
        .zj-message {
            height: 4.666667rem;
            background-color: #fff;
            .zj-title {
                width: 9.466667rem;
                height: 1.093333rem;
                line-height: 1.093333rem;
                border-bottom: 1px solid #ddd;
                margin: .133333rem auto;
                span {
                    font-size: .4rem;
                    color: #333;
                    margin-left: .2rem;
                }
            }
            p {
                padding-left: .5rem;
                margin-top: .4rem;
                font-size: .4rem;
                color: #888;
            }
        }
        .zj-abstract {
            width: 100%;
            background-color: #fff;
            padding-bottom: .4rem;
            .zj-title {
                margin: .133333rem auto;
                width: 9.466667rem;
                height: 1.093333rem;
                line-height: 1.093333rem;
                border-bottom: 1px solid #ddd;
                span {
                    font-size: .4rem;
                    color: #333;
                    margin-left: .2rem;
                }
            }
            .zj-abstracts {
                font-size: .4rem;
                margin-left: .5rem;
                color: #888;
            }
        }
        .zj-foot {
            position: absolute;
            bottom: 0;
            width: 100%;
            height: 1.306667rem;
            background-color: #4c4c4c;
            div {
                width: 1.28rem;
                height: 1.28rem;
                border-radius: 50%;
                background: url(../../assets/images/addorder.png);
                background-size: contain;
                position: absolute;
                right: .453333rem;
                bottom: .386667rem;
            }
        }
    }
</style>

