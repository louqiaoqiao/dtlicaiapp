import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Product from '@/components/Product'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Findpw from '@/components/Findpw'
import ProductDetail from '@/components/ProductDetail'
import UserInfo from '@/components/UserInfo'
import UserAccount from '@/components/UserAccount'
import Order from '@/components/Order'
import RealName from '@/components/RealName'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/product',
      name: 'Product',
      component: Product
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/findpw',
      name: 'Findpw',
      component: Findpw
    },
    {
      path: '/prodetail',
      name: 'ProductDetail',
      component: ProductDetail
    },
    {
      path: '/userinfo',
      name: 'UserInfo',
      component: UserInfo
    },
    {
      path: '/useraccount',
      name: 'UserAccount',
      component: UserAccount
    },
    {
      path: '/order',
      name: 'Order',
      component: Order
    },
    {
      path: '/realname',
      name: 'RealName',
      component: RealName
    },
    
  ]
})
