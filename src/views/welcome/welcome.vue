<template>
  <div class="zj-welcome">
    <!-- <img src="../../assets/images/back.jpg" alt=""> -->
    <!--首页-->
    <!--<router-link :to="{path:'/home'}">点击</router-link>-->
    <div class="zj-shop">测试门店(长阳店)</div>
    <div class="zj-name">hi,小鱼,欢迎光临</div>
    <div class="zj-avart">
      <div>
        <router-link tag="span" :to="{path:'message'}">

        </router-link>
      </div>
    </div>
    <p class="zj-button">
      <router-link :to="{path:'/home'}" tag="button">优惠点餐</router-link>
    </p>
    <p class="zj-foots">欢迎使用商券通{{data}}</p>

  </div>

</template>

<script>
  import store from '../../vuex/index.js'
  export default {
    name: "welcome",
    data() {
      return {
        data:11
      }
    },
    computed:{
      // count: state => state.userId,

    },
    mounted:function () {
      store.state.userId=22;
      console.log(store.state.userId)
    },
    methods: {
      getRequest() {
        var url = location.search; //获取url中"?"符后的字串
        var theRequest = new Object();
        if (url.indexOf("?") != -1) {
          var str = url.substr(1);
          strs = str.split("&");
          for (var i = 0; i < strs.length; i++) {
            theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
          }
        }
        return theRequest;
      }
    }
  }
</script>

<style scoped lang="less">
  .zj-welcome {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    background-color: red;
    font-size: .213333rem;
    background: url(../../assets/images/back.jpg);
    background-size: 100% 100%;
    img {
      display: inline-block;
      width: 100%;
      position: absolute;
      top: 0;
      height: 100%;
      z-index: 1;
    }
    .zj-shop {
      text-align: center;
      color: #fff;
      font-size: .56rem;
      margin-top: 2.506667rem;
    }
    .zj-name {
      text-align: center;
      color: #fff;
      font-size: .4rem;
      margin-top: .293333rem;
    }
    .zj-avart {
      text-align: center;
      width: 100%;
      margin-top: 1.346667rem;
      /* background-color: green; */
      div {
        display: inline-block;
        width: 4.773333rem;
        height: 4.773333rem;
        text-align: center;
        background: url("../../assets/images/code.png");
        span {
          display: inline-block;
          width: 2.76rem;
          height: 2.76rem;
          // background-color: red;
          background: url("../../assets/images/avart.png");
          background-size: contain;
          margin-top: .96rem;
        }
      }
    }
    .zj-button {
      text-align: center;
      margin-top: 1.573333rem;
      button {
        width: 4rem;
        height: 1.066667rem;
        color: #fff;
        background-color: #4444;
        font-size: .453333rem;
        outline: none;
      }
    }
    .zj-foots {
      text-align: center;
      color: #fff;
      font-size: .32rem;
      margin-top: 3.6rem;
    }
    .zj-window {
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: #fff;
    }
  }
</style>
