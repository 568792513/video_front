import Vue from 'vue'
import Main from '@/components/Nav'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import InfoCenter from '@/components/InfoCenter'
import MyInfo from '@/components/MyInfo'
import MyVideo from '@/components/MyVideo'
import UploadVideo from '@/components/UploadVideo'
import EditMyInfo from '@/components/EditMyInfo'
import EditPassword from '@/components/EditPassword'

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
              path: 'editMyInfo',
              component: EditMyInfo
            },
            {
              path: 'myVideo',
              component: MyVideo
            },
            {
              path: 'uploadVideo',
              component: UploadVideo
            },
            {
              path: 'editPassword',
              component: EditPassword
            }
          ]
        }
      ]
    }
  ]
})
