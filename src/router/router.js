import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Login from '@/components/Login'
import InfoCenter from '@/components/InfoCenter'
import MyInfo from '@/components/myInfo'
import MyVideo from '@/components/myVideo'
import UploadVideo from '@/components/uploadVideo'

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/infoCenter',
      name: 'infoCenter',
      component: InfoCenter,
      children: [
        {
          path: 'myInfo',
          component: MyInfo
        },
        {
          path: 'myVideo',
          component: MyVideo
        },
        {
          path: 'uploadVideo',
          component: UploadVideo
        }
      ]
    }
  ]
})
