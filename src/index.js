import Vue from 'vue'
import Router from 'vue-router'
import Welcome from './views/welcome/welcome'
import Home from './views/menus/home'
import Order from './views/menus/order'
import Shopcar from './views/menus/shop-car'
import Ordering from './views/menus/order-ing'
import Pay from './views/menus/pay'
import Message from './views/message/message'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '欢迎',
      component: Welcome
    },
    {
      path: '/home',
      component:Home,
      children:[
        {path:'/',component:Order},
        {path:'/order',component:Order},
        {path:'/shopcar',component:Shopcar},
        {path:'/ordering',component:Ordering},
        {path:'/pay',component:Pay}
      ]
    },
    {
      path:'/message',
      component:Message
    }
  ]
})
