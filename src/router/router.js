import Vue from 'vue'
import Main from '@/components/Main'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import InfoCenter from '@/components/InfoCenter'
import MyInfo from '@/components/myInfo'
import MyVideo from '@/components/myVideo'
import UploadVideo from '@/components/uploadVideo'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/',
      name: 'main',
      component: Main,
      children: [
        {
          path: '/',
          name: 'home',
          component: Home
        },
        {
          path: '/home',
          name: 'home',
          component: Home
        },
        {
          path: '/infoCenter',
          name: 'infoCenter',
          component: InfoCenter,
          children: [
            {
              path: '/',
              component: MyInfo
            },
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
    }
  ]
})
