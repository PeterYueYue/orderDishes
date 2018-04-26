<template>
    <div class="zj-order" v-if="showMe">
        <div class="zj-top">
            <div class="zj-title">
                <div @click="storeOpen()">
                    <img src="../../assets/images/avart.png" alt="">
                </div>
                <div @click="storeOpen()">
                    <p>测试住店</p>
                    <p>桌台:DT3</p>
                </div>
                <div>
                    <span @click="Search()"></span>
                </div>
            </div>
            <p class="zj-active">
                <span></span>
                如有活动请咨询商家了解店铺活动详情
            </p>
            <p class="zj-notice">
                <span></span>
                公告:欢迎新老客户
            </p>
        </div>
        <div class="zj-tabs">
            <div @click="tabClick(1)">
                <div :class="{isShow:isActive==1}">商品</div>
            </div>
            <div @click="tabClick(2)">
                <div :class="{isShow:isActive == 2}">活动<span class="zj-hot"></span></div>
            </div>
        </div>
        <!-- 商品页面 -->

        <div v-if="isActive==1" class="zj-goods">
            <div class="zj-left-menus">
                <ul ref="businessLeft">
                    <li v-for="(menusd,index) in menus" @click="leftControlRightScroll(index)">
                        {{menusd.name}}
                    </li>
                </ul>
            </div>
            <ul class="zj-right-goods" @click="Food()" ref="ullist">

                <li v-for="goods in menus">
                    <header class="type_title ell">
                        {{goods.name}}
                    </header>
                    <section v-for="good in goods.food">
                        <div class="zj-left-avarts">
                            <img src="../../assets/images/avart.png" alt="">
                        </div>
                        <div class="zj-food-name">
                            <p>{{good.name}}</p>
                            <div class="zj-food-detail">
                                ¥<span>55.00</span>
                                <section class="zj-numbers">
                                    <span></span>
                                    <span>2</span>
                                    <span></span>
                                </section>
                            </div>
                        </div>
                    </section>
                </li>
            </ul>
        </div>

        <!-- 活动页面 -->
        <div v-if="isActive==2" class="zj-actives">
            <p>活动与服务</p>
            <div class="zj-content">
                <div></div>
                如有活动请咨询商家了解店铺活动详情
            </div>
        </div>
        <div class="zj-shopcar" :class="{isCar:foodNumber != 0}">
            <section>
                <div>10</div>
            </section>
            <button class="zj-button">选好了</button>
        </div>
        <div class="zj-shopcard" :class="{isCar:foodNumber == 0}"></div>

        <!-- 菜品弹出框 -->
        <div class="zj-alert" v-if="isalert == 1" @click="alertNone()">
        </div>
        <transition name="alerts">

            <div class="zj-alerts" v-if="isalert==1">
                <div class="zj-title">
                    <span></span>
                </div>
                <div class="zj-foods">
                    <span>单人火锅</span>
                    <span>¥<span>55.00</span></span>
                </div>
                <div class="zj-clik-food">
                    <div>
                        <section>数量:</section>
                        <section></section>
                        <section>10</section>
                        <section></section>
                    </div>
                    <div>
                        加入购物车
                    </div>
                </div>
            </div>
        </transition>
        <!-- 搜索 -->
        <transition name="search">
            <div class="zj-search" v-if="search==1">
                <div class="zj-search-bar">
                    <div>
                        <span></span>
                        <input type="text" placeholder="请输入菜品名称">
                    </div>
                    <button>搜索</button>
                </div>
                <div class="zj-listds">

                    <div>
                        <div></div>
                    </div>
                    <p>亲爱的想吃什么告诉我</p>
                </div>
            </div>
        </transition>
        <div class="zj-numberd" v-if="isPew==1"></div>
        <div class="zj-nalert" v-if="isPew==1">
            <p>请选择您的用餐人数</p>
            <div class="zj-pew">
                <div v-for="data in number" :class="{selected:data.id==selecteId}" @click=isSelect(data.id)>
                    {{data.name}}
                </div>
            </div>
            <div class="zj-order">
                <div @click="Pew()"></div>
            </div>
        </div>
        <!-- 门店信息展示 -->
        <div class="zj-store" v-if="isStore==1">
            <div class="zj-top">
                <div>
                    <img src="../../assets/images/avart.png" alt="">
                </div>
                <div>
                    <p>测试住点名</p>
                    <p>桌台:DT3</p>
                </div>
            </div>
            <div class="zj-block">
                <section class="zj-phone"></section>
                <span>电话:13023062222</span>
            </div>
            <div class="zj-block">
                <section class="zj-address"></section>
                <span>地址:军工路100号</span>
            </div>
            <div class="zj-block">
                <section class="zj-time"></section>
                <span>营业时间:9:30-22:00</span>
            </div>
            <div class="zj-notie" style="margin-top:.3rem;">
                <p>商家公告</p>
                <p>暂无公告</p>
            </div>
            <div class="zj-notie">
                <p>简介</p>
                <p>暂无</p>
            </div>
            <div class="zj-closed">
                <div @click="storeClosed()">×</div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "order",
        data() {
            return {
                showMe: false,
                isStore: 2,
                isPew: 2,
                isTrue: false,
                selecteId: 0,
                number: [
                    {id: '1', name: '1位'},
                    {id: '2', name: '2位'},
                    {id: '3', name: '3位'},
                    {id: '4', name: '4位'},
                    {id: '5', name: '5位'},
                    {id: '6', name: '6位'},
                    {id: '7', name: '7位'},
                    {id: '8', name: '8位'},
                    {id: '9', name: '9位'},
                    {id: '10', name: '10位'},
                    {id: '11', name: '11位'},
                    {id: '12', name: '12位'},
                ],
                search: 0,
                foodNumber: 0,
                isActive: 1,
                isalert: 0,
                menus: [
                    {id: '1', name: '哈哈哈1', food: [{name: "剁椒鱼头1"}, {name: "剁椒鱼头2"}]},
                    {id: '1', name: '哈哈哈2', food: [{name: "剁椒鱼头1"}, {name: "剁椒鱼头2"}]},
                    {id: '3', name: '哈哈哈3', food: [{name: "剁椒鱼头2"}, {name: "剁椒鱼头2"}, {name: "剁椒鱼头2"}]},
                    {id: '4', name: '哈哈哈4', food: [{name: "剁椒鱼头2"}]},
                    {id: '5', name: '哈哈哈5', food: [{name: "剁椒鱼头2"}]},
                    {id: '6', name: '哈哈哈6', food: [{name: "剁椒鱼头2"}]},
                    {id: '7', name: '哈哈哈7', food: [{name: "剁椒鱼头2"}]},
                    {id: '8', name: '哈哈哈8', food: [{name: "剁椒鱼头2"}]},
                    {id: '9', name: '哈哈哈9', food: [{name: "剁椒鱼头2"}]},
                    {id: '10', name: '哈哈哈10', food: [{name: "剁椒鱼头2"}]},
                    // {id: '11', name: '哈哈哈11', food: [{name: "剁椒鱼头2"}]},
                    // {id: '12', name: '哈哈哈12', food: [{name: "剁椒鱼头2"}]},
                    // {id: '13', name: '哈哈哈13', food: [{name: "剁椒鱼头2"}]},
                    // {id: '14', name: '哈哈哈14', food: [{name: "剁椒鱼头2"}]},
                    // {id: '15', name: '哈哈哈15', food: [{name: "剁椒鱼头2"}]},
                    // {id: '16', name: '哈哈哈16', food: [{name: "剁椒鱼头2"}]},
                    // {id: '17', name: '哈哈哈17', food: [{name: "剁椒鱼头2"}]},
                    // {id: '18', name: '哈哈哈18', food: [{name: "剁椒鱼头2"}]},
                    // {id: '19', name: '哈哈哈19', food: [{name: "剁椒鱼头2"}]},
                    // {id: '20', name: '哈哈哈20', food: [{name: "剁椒鱼头2"}]},

                ]
            }
        },
        mounted: function () {
            this.showMe=true;
        },
        watch: {
            showMe: function (value) {
                if (value) {
                    this.$nextTick(() => {
                        this.init()
                    })
                }
            }
        },
        methods: {
            init() {
                this.rightControlLeftClass()
            },
            rightControlLeftClass() {
                // 左边列表
                var leftUl = this.$refs.businessLeft;
                //左目录下所有li
                var leftLI = leftUl.getElementsByTagName('li');
                // 右边商品列表
                var rightUl = this.$refs.ullist;
                var ti = rightUl.querySelectorAll('.type_title');
                // 自定义当前滚动到的index值
                var asIndex = 0;
                rightUl.addEventListener('scroll', () => {
                    var thisST = rightUl.scrollTop-100;
                  console.log('滚动条上去高度', rightUl.scrollTop);
                  console.log(thisST);
                    for (var i = 0; i < ti.length; i++) {
                        if (thisST >= ti[i].offsetTop-300) {
                            asIndex = i;
                        }
                    }
                    ;
                    // 给左目录列表所有的li去掉激活样式
                    for (var j = 0, x = leftLI.length; j < x; j++) {
                        leftLI[j].classList.remove('active_ia');
                    }
                    // 当前滚动到的li加激活样式
                    leftLI[asIndex].classList.add('active_ia');
                }, false)
            },
            // 左列表点击控制右列表滚动
            leftControlRightScroll(index) {
                console.log('点击'+index);
                var scrollMove = (ele, target) => {
                  // console.log(ele,target);
                  target=target-150;
                  // 根据当前scrollTop与目标点距离算出单次改变量
                    var vector = Math.round((target - ele.scrollTop) / 10);
                    var scrollTimer = setInterval(() => {
                        ele.scrollTop += vector;
                        // 超出目标点后 或者 已经滚动到底清空定时器
                        // 上滑(scrollTop>=目标点 且 vector为正) 或 下滑(scrollTop <= 目标点 且 vector为负)或 滑到最底
                        if (((ele.scrollTop >= target) && vector > 0) || ((ele.scrollTop <= target) && vector < 0) || ((ele.scrollTop + ele.clientHeight + 1) >= ele.scrollHeight)) {
                            // +1 正确激活当前左栏状态
                            ele.scrollTop = target +1;
                            clearInterval(scrollTimer);
                        }
                    }, 1000 / 100);
                };
                var rightUl_ = this.$refs.ullist;
                // 右列表应该滚动到的标题的offsetTop
                var rightTo_ = rightUl_.querySelectorAll('.type_title')[index].offsetTop;
                scrollMove(rightUl_, rightTo_);
            },
            // 切换tab
            tabClick(id) {
                console.log(id);
                if (id == 1) {
                    this.isActive = 1
                } else {
                    this.isActive = 2
                }
            },
            Food() {
                console.log('哈哈')
                this.foodNumber = 1
                this.isalert = 1
                console.log(this.foodNumber)
                console.log(this.isalert)

            },
            // 菜单消失
            alertNone() {
                this.isalert = 2;
                this.foodNumber = 2;
                console.log(this.foodNumber)
                console.log(this.isalert)

            },
            // 搜索
            Search() {
                this.search = 1;
            },
            // 选择用餐人数
            isSelect(id) {
                this.selecteId = id;
            },
            // 点餐按钮
            Pew() {
                this.isPew = 2
            },
            // 打开信息
            storeOpen() {
                this.isStore = 1;
            },
            // 关闭
            storeClosed() {
                this.isStore = 2;
            },
            //列表滚动
            leftScroll(e, position) {
                // console.log(e)
                // console.log(position)
            },
            rightScroll(e, position) {
                // console.log(e)
                // console.log(position.scrollTop);
                // let scrollHeight = position.scrollTop;
                // let number = scrollHeight / 120;
                // console.log(number);
                // position.scrollTop = 10;
            },
            leftClick(index) {
                // console.log(index)
            }

        }
    }
</script>

<style scoped lang="less">
    .active_ia {
        color: red;
        background-color: #ddd;
    }

    .zj-numberd {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        background: rgba(25, 24, 22, 0.8);
    }

    .zj-nalert {
        position: absolute;
        top: 3.8rem;
        left: .333333rem;
        width: 9.306667rem;
        height: 8.253333rem;
        border-radius: 5px;
        z-index: 999;
        background-color: #fff;
        p {
            text-align: center;
            font-size: .4rem;
            color: #333;
            font-weight: 500;
            margin-top: 1.186667rem;
        }
        .zj-pew {
            width: 100%;
            height: 5.2rem;
            margin-top: .5rem;
            font-size: .4rem;
            // outline: 1px solid red;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            div {
                width: 1.946667rem;
                height: 1.066667rem;
                border-radius: 8px;
                border: 1px solid #ddd;
                margin: .1rem .1rem 0;
                text-align: center;
                line-height: 1.066667rem;
            }
            .selected {
                border: 1px solid #1682e5;
                color: #1682e5;
            }
        }
        .zj-order {
            width: 100%;
            // outline: 1px solid red;
            margin-top: -.2rem;
            div {
                width: 1.786667rem;
                height: 1.786667rem;
                background: url(../../assets/images/orders.png) no-repeat;
                background-size: contain;
                margin: 0 auto;
            }
        }
    }

    .zj-hot {
        display: inline-block;
        width: .4rem;
        height: .466667rem;
        // outline: 1px solid red;
        background: url(../../assets/images/hot.png) 0rem .12rem no-repeat;
        background-size: 100% 80%;
    }

    .isAlert {
        display: inline-block !important;
    }

    .isAlerts {
        display: inline-block !important;
        // animation: alert-in .3s;
    }

    .isCar {
        display: inline-block !important;
        animation: bounce1-in .3s;
    }

    .zj-search-enter-active {
        animation: search-in 1s;

    }

    .zj-search-leave-active {
        animation: search-in 1s reverse;
    }

    //搜索弹出层
    @keyframes search-in {
        0% {
            height: 0;
        }
        100% {
            height: 100%;
        }
    }

    .alerts-enter-active {
        animation: alert-in 1s;
    }

    .alerts-leave-active {
        animation: alert-in 1s reverse;
    }

    @keyframes alert-in {
        0% {
            height: 0;
        }
        100% {
            height: 1.306667rem;
        }
    }

    @keyframes bounce1-in {
        0% {
            height: 0;
        }
        /*50%{
            top: -5px;
            left: 34px;
        }*/
        100% {
            height: 1.33333rem;
        }
    }

    .zj-order {
        .zj-top {
            width: 100%;
            .zj-title {
                display: flex;
                align-items: center;
                height: 2.066667rem;
                div:nth-child(1) {
                    width: 2.4rem;
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    img {
                        display: inline-block;
                        width: 1.653333rem;
                        height: 1.653333rem;
                    }
                }
                div:nth-child(2) {
                    width: 7rem;
                    height: 100%;
                    p:nth-child(1) {
                        font-size: .453333rem;
                        color: #333;
                        margin-top: .5rem;
                    }
                    p:nth-child(2) {
                        font-size: .32rem;
                        color: #666;
                    }
                }
                div:nth-child(3) {
                    width: 1.2rem;
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    span {
                        display: inline-block;
                        width: .48rem;
                        height: .48rem;
                        background: url(../../assets/images/search.png);
                        background-size: contain;
                    }
                }
            }
        }

        .zj-active {
            display: flex;
            font-size: .266667rem;
            color: #888;
            span {
                display: inline-block;
                width: .5rem;
                height: .5rem;
                background: url(../../assets/images/h.png);
                background-size: 100% 100%;
                margin-left: .533333rem;
            }
        }
        .zj-notice {
            display: flex;
            margin-top: .213333rem;
            font-size: .266667rem;
            color: #333;
            span {
                display: inline-block;
                width: .5rem;
                height: .5rem;
                background: url(../../assets/images/g.png);
                background-size: 100% 100%;
                margin-left: .533333rem;
            }
        }
        .zj-tabs {
            width: 100%;
            height: 1.333333rem;
            display: flex;
            font-size: .453333rem;
            line-height: 1.33333rem;
            box-sizing: border-box;
            border-bottom: 1px solid #ddd;
            div:nth-child(1) {
                width: 2rem;
                height: 98%;
                text-align: center;
                margin-left: .5rem;
                box-sizing: content-box;
                margin-bottom: .1rem;
            }
            div:nth-child(2) {
                margin-left: 1.5rem;
                height: 98%;
                box-sizing: content-box;
                margin-bottom: .1rem;
            }
        }

        .isShow {
            border-bottom: 2px solid #0088ff;
            color: #0088ff;
        }
        .zj-goods {
            width: 100%;
            display: flex;
            margin-top: .1rem;
            .zj-left-menus {
                width: 2.333333rem;
                height: 13rem;
                background-color: #f5f5f5;
                ul {
                    width: 100%;
                    height: 100%;
                    overflow-y: auto;
                    overflow-x: hidden;
                    li {
                        width: 100%;
                        height: 1.4rem;
                        font-size: .373333rem;
                        padding-left: .2rem;
                        line-height: 1.4rem;
                        border-bottom: 1px solid #ededed;
                    }
                }
            }
            .zj-right-goods {
                width: 7.6rem;
                height: 13rem;
                overflow-y: auto;
                overflow-x: hidden;
                background-color: #fff;
                header {
                    height: .8rem;
                    line-height: .8rem;
                    font-size: .4rem;
                    padding-left: .2rem;
                    color: #333;
                    border-bottom: 1px solid #ddd;
                }
                section {
                    display: flex;
                    height: 2.533333rem;
                    .zj-left-avarts {
                        width: 2.5rem;
                        height: 2.5rem;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        img {
                            display: inline-block;
                            width: 1.973333rem;
                            height: 1.973333rem;
                        }
                    }
                    .zj-food-name {
                        p {
                            margin-top: .4rem;
                            font-size: .4rem;
                            color: #333;
                        }
                        .zj-food-detail {
                            display: flex;
                            margin-top: .3rem;
                            font-size: .32rem;
                            line-height: .7rem;
                            color: #ff461d;
                            span {
                                font-size: .453333rem;
                            }
                            .zj-numbers {
                                margin-left: 1.6rem;
                                span:nth-child(1) {
                                    width: .64rem;
                                    height: .64rem;
                                    background: url(../../assets/images/reduce.png);
                                    background-size: contain;
                                }
                                span:nth-child(2) {
                                    display: inline-block;
                                    width: .8rem;
                                    text-align: center;
                                }
                                span:nth-child(3) {
                                    width: .64rem;
                                    height: .64rem;
                                    background: url(../../assets/images/add.png);
                                    background-size: contain;
                                }
                            }
                        }
                    }
                }
            }

        }

        .zj-shopcar {
            display: none;
            position: absolute;
            bottom: 0;
            z-index: 30;
            width: 100%;
            background-color: #4c4c4c;
            height: 1.333333rem;
            section {
                position: absolute;
                width: 1.5rem;
                height: 1.5rem;
                top: -.6rem;
                left: .64rem;
                background: url(../../assets/images/shopcar.png);
                background-size: contain;
                div {
                    width: .533333rem;
                    height: .533333rem;
                    background-color: red;
                    border-radius: 50%;
                    font-size: .266667rem;
                    line-height: .55rem;
                    color: #fff;
                    text-align: center;
                }
            }
            .zj-button {
                display: inline-block;
                width: 3rem;
                height: 100%;
                color: #fff;
                float: right;
                font-size: .453333rem;
                z-index: 40;
                outline: none;
                border-radius: 0;
                border: 1px solid #48ce7e;
                background-color: #48ce7e;
            }

        }
        .zj-shopcard {
            display: none;
            position: absolute;
            bottom: .266667rem;
            width: 1.066667rem;
            height: 1.066667rem;
            background: url(../../assets/images/shoping.png) no-repeat;
            background-size: contain;
            border-radius: 50%;
            z-index: 100;
            left: .5rem;
        }
        .zj-alert {
            position: absolute;
            // display: none;
            top: 0;
            width: 100%;
            height: 100%;
            background: rgba(25, 24, 22, 0.8);
            z-index: 100;
        }

        .zj-alerts {
            animation: alert-out .2s;
            // display: none;
            z-index: 110;
            position: absolute;
            bottom: 0;
            width: 100%;
            height: 11.2rem;
            background-color: #fff;
            .zj-title {
                width: 100%;
                height: 7.106667rem;
                background: url(../../assets/images/foosback.jpg);
                background-size: contain;
                span {
                    display: inline-block;
                    width: .56rem;
                    height: .56rem;
                    background: url(../../assets/images/closed.png);
                    background-size: contain;
                    float: right;
                    margin-top: .4rem;
                    margin-right: .4rem;
                }
            }
            .zj-foods {
                width: 100%;
                height: 1.466667rem;
                line-height: 1.466667rem;
                span:nth-child(1) {
                    font-size: .4rem;
                    margin-left: .373333rem;
                }
                span:nth-child(2) {
                    float: right;
                    margin-right: .373333rem;
                    font-size: .426667rem;
                    color: #ff461d;
                    span {
                        font-size: .613333rem;
                    }
                }
            }

            .zj-clik-food {
                width: 100%;
                display: flex;
                font-size: .4rem;
                margin-top: 1.3rem;
                div:nth-child(1) {
                    width: 6.506667rem;
                    height: 1.306667rem;
                    display: flex;
                    align-items: center;
                    border-top: 1px solid #ddd;
                    // outline: 1px solid red;
                    line-height: 1.306667rem;
                    section:nth-child(1) {
                        width: 1.6rem;
                        margin-left: .373333rem;
                        font-size: .453333rem;
                    }

                    section:nth-child(3) {
                        width: .8rem;
                        height: .8rem;
                        text-align: center;
                        line-height: .8rem;
                        border-top: 1px solid #ddd;
                        border-bottom: 1px solid #ddd;
                    }
                    section:nth-child(2) {
                        background: url(../../assets/images/minus.png) 80% 50% no-repeat;
                        background-size: contain;
                    }
                    section:nth-child(4) {
                        background: url(../../assets/images/adds.png) 80% 50% no-repeat;
                        background-size: contain;
                    }
                    section:nth-child(2),
                    section:nth-child(4) {
                        width: .8rem;
                        font-size: .64rem;
                        height: .8rem;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        border: 1px solid #ddd;
                    }
                }
                div:nth-child(2) {
                    width: 3.493333rem;
                    height: 1.306667rem;
                    font-size: .453333rem;
                    line-height: 1.306667rem;
                    text-align: center;
                    color: #fff;
                    background-color: #2faf62;
                }
            }
        }
        .zj-actives {
            width: 100%;
            height: 100%;
            p {
                font-size: .426667rem;
                font-weight: 500;
                margin: .35rem .506667rem;
            }
            .zj-content {
                display: flex;
                padding-left: .5rem;
                    font-size: .266667rem;
                div {
                    width: .5rem;
                    height: .5rem;
                    background: url(../../assets/images/h.png) no-repeat;
                    background-size: 100% 100%;
                }

            }
        }
        .zj-search {
            position: absolute;
            width: 100%;
            height: 100%;
            background-color: #ddd;
            top: 0;
            .zj-search-bar {
                width: 100%;
                height: 1.266667rem;
                background-color: #fff;
                display: flex;
                align-items: center;
                div {
                    margin-left: .3rem;
                    border-radius: 5px;
                    padding-left: .1rem;
                    width: 7.6rem;
                    height: .853333rem;
                    background-color: #eee;
                    display: flex;
                    align-items: center;
                    span {
                        display: inline-block;
                        width: .6rem;
                        height: .6rem;
                        background: url(../../assets/images/search.png) no-repeat;
                        background-size: contain;
                    }
                    input {
                        width: 6.5rem;
                        margin-left: .2rem;
                        outline: none;
                        border: none;
                        background-color: #eee;
                    }

                }
                button {
                    width: 1.6rem;
                    height: .853333rem;
                    background-color: #0088ff;
                    margin-left: .3rem;
                    color: #fff;
                    font-size: .4rem;
                    outline: none;
                    border-radius: 5px;
                }
            }
            .zj-listds {
                width: 100%;
                text-align: center;
                div {
                    width: 100%;
                    text-align: center;
                    div {
                        width: 3.44rem;
                        height: 3.44rem;
                        background: url(../../assets/images/avart.png);
                        background-size: contain;
                        margin: .533333rem auto;
                    }
                }
                p {
                    font-size: .4rem;
                    color: #888;
                }

            }
        }
        .zj-store {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            background-color: #fff;
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
            .zj-phone {
                background: url(../../assets/images/phone.png);
            }
            .zj-address {
                background: url(../../assets/images/address.png);
            }
            .zj-time {
                background: url(../../assets/images/time.png);
            }
            .zj-block {
                display: flex;
                height: .4rem;
                line-height: .4rem;
                margin-top: .3rem;
                margin-left: .4rem;
                section {
                    display: inline-block;
                    width: .4rem;
                    height: .4rem;
                    // outline: 1px solid red;
                    background-size: 100% 100%;
                }
                span {
                    color: #333;
                    margin-left: .1rem;
                    font-size: .426667rem;
                }
            }
            .zj-notie {
                margin-left: 1.08rem;
                p:nth-child(1) {
                    font-size: .426667rem;
                    color: #333;
                }
                p:nth-child(2) {
                    font-size: .4rem;
                    color: #888;
                }
            }
            .zj-closed {
                width: 100%;
                position: absolute;
                bottom: 1.2rem;
                div {
                    width: .7rem;
                    height: .7rem;
                    // background: url(../../assets/images/closed.png);
                    background-size: contain;
                    margin: 0 auto;
                    font-size: .8rem;
                }
            }
        }

    }


</style>
