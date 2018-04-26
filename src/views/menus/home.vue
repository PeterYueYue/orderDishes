<template>
    <div>
        <div class="container">
         
            <router-link to="/shopcar">
                <transition name='bounce3'>
                    <div @click="clickTab" class="display_i_b bounce3" v-if="show">
                        <div class="aa"></div>
                        <span>购物车</span>
                    </div>
                </transition>
            </router-link>

            <router-link to="/order">
                <transition name='bounce2'>
                    <div @click="clickTab" class="display_i_b bounce2" v-if="show">
                        <div class="aa"></div>
                        <span>点餐</span>
                    </div>
                </transition>
            </router-link>

            <router-link to="/ordering">
                <transition name='bounce5'>
                    <div @click="clickTab" class="display_i_b bounce5" v-if="show">
                        <div class="aa"></div>
                        <span>进行中订单</span>
                    </div>
                </transition>
            </router-link>

            <!-- <router-link to="/historyorder">
            <transition  name='bounce'>
            <div @click="clickTab" class="display_i_b bounce" v-if="show">
            <div  class="aa"></div>
            <span>历史订单</span>
            </div>
            </transition>
            </router-link> -->

            <!-- <router-link to="/person">
                <transition  name='bounce5'>
                    <div @click="clickTab" class="display_i_b bounce5" v-if="show">
                        <div  class="aa"></div>
                        <span>个人信息</span>
                    </div>
                </transition>
            </router-link> -->
            <div class='menu' @click="show = !show" :class="{closed:show==true}">

            </div>
            <div class="zj-tabs" @click="clickTab" v-if="show"></div>
        </div>
        <div class="zj-main">
            <router-view></router-view>
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
        methods: {
            clickTab: function () {
                console.log('点击了');
                this.show = false
            }
        },
        created: function () {

        }
    }
</script>

<style scoped lang="less">
    .closed {
        z-index:100!important;
        background: url(../../assets/images/close.png) 20% 50% no-repeat !important;
        background-size: 100% 50% !important;
    }

    .zj-tabs {
        position: absolute;
        width: 100%;
        height: 100%;
        background: rgba(25, 24, 22, 0.8);
        z-index: 90;
        font-size: .4rem;
        text-align: center;
    }

    .zj-main {
        width: 100%;
        height: 100%;
        /* background-color: red; */
        position: absolute;
        top: 0;
        z-index: 1;
    }

    .navTab {
        position: absolute;
        top: 10%;
    }

    .container {
        font-size: 0.6rem;
        height: 380px;
        width: 200px;
        z-index: 99;
    }

    .container span {
        text-align: center;
        display: inline-block;
        width: 60px;
        font-size: 14px;
    }

    .menu {
        position: absolute;
        left: 0;
        top: 150px;
        width: 40px;
        height: 80px;
        background: url(../../assets/images/home.png) 0% 50% no-repeat;
        background-size: 100% 50%;
        border-top-right-radius: 50px;
        border-bottom-right-radius: 50px;
        z-index: 80;
    }

    .aa {
        width: 50px;
        height: 50px;
        display: inline-block;
        border-radius: 25px;
        background-color: #ddd;
    }

    .display_i_b {
        display: inline-block;
        width: 80px;
        text-align: center;
        // outline: 1px solid red;
        font-size: 0;
        position: absolute;
    }

    .display_i_b span {
        display: inline-block;
        width: 100%;
    }

    .bounce1 {
        font-size: 0;
        position: absolute;
        top: 40px;
        left: 30px;
        z-index: 99;
    }

    .bounce3 div {
        background: url(../../assets/images/shopcars.png);
        background-size: contain;
    }

    .bounce2 div {
        background: url(../../assets/images/order.png);
        background-size: contain;
    }

    .bounce5 div {
        background: url(../../assets/images/list.png);
        background-size: contain;
    }

    .bounce2 {
        font-size: 0;
        position: absolute;
        top: 155px;
        left: 110px;
        z-index: 99;

    }

    .bounce3 {
        font-size: 0;
        position: absolute;
        top: 40px;
        left: 30px;
        z-index: 99;

    }

    .bounce4 {
        font-size: 0;
        position: absolute;
        top: 300px;
        left: 110px;
        z-index: 99;

    }

    .bounce5 {
        font-size: 0;
        position: absolute;
        top: 280px;
        left: 30px;
        z-index: 99;

    }

    /*动画一*/
      .bounce1-enter-active {
        animation: bounce1-in .3s;
    }

    .bounce1-leave-active {
        animation: bounce1-in .3s reverse;
    }

    @keyframes bounce1-in {
        0% {
            top: 155px;
            left: -30px;
        }
        100% {
            top: 40px;
            left: 30px;
        }
    }

    /*动画二*/
    .bounce2-enter-active {
        animation: bounce2-in .3s;
    }

    .bounce2-leave-active {
        animation: bounce2-in .3s reverse;
    }

    @keyframes bounce2-in {
        0% {
            top: 155px;
            left: -30px;
        }
        /*50%{
            top: 47px;
            left: 105px;
        }*/
        100% {
            top: 155px;
            left: 110px;
        }
    }

    /*动画三*/
    .bounce3-enter-active {
        animation: bounce3-in .3s;
    }

    .bounce3-leave-active {
        animation: bounce3-in .3s reverse;
    }

    @keyframes bounce3-in {
        0% {
            top: 155px;
            left: -30px;
        }
        100% {
            top: 40px;
            left: 30px;
        }
    }

    /*动画四*/
    .bounce4-enter-active {
        animation: bounce4-in .3s;
    }

    .bounce4-leave-active {
        animation: bounce4-in .3s reverse;
    }

    @keyframes bounce4-in {
        0% {
            top: 155px;
            left: -30px;
        }
        /*50%{
            top:214px;
            left: 34px;
        }*/
        100% {
            top: 250px;
            left: 110px;
        }
    }

    /*动画五*/
    .bounce5-enter-active {
        animation: bounce5-in .3s;
    }

    .bounce5-leave-active {
        animation: bounce5-in .3s reverse;
    }

    @keyframes bounce5-in {
        0% {
            top: 155px;
            left: -30px;
        }
        /*50%{
            top:214px;
            left: 34px;
        }*/
        100% {
            top: 280px;
            left: 30px;
        }
    }

</style>