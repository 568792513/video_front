import Vue from 'vue'
import Router from 'vue-router'
import Nav from '@/components/Nav'
import Home from '@/components/Home'
import Login from '@/components/Login'
import InfoCenter from '@/components/InfoCenter'
import MyInfo from '@/components/MyInfo'
import MyVideo from '@/components/MyVideo'
import UploadVideo from '@/components/UploadVideo'
import EditMyInfo from '@/components/EditMyInfo'
import EditPassword from '@/components/EditPassword'
import VideoDetail from '@/components/VideoDetail'
import Classify from '@/components/Classify'
import Comment from '@/components/Comment'


Vue.use(Router);

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
      component: Nav,
      children: [
        {
          path: '/',
          name: 'home',
          component: Home
        },
        {
          path: '/home',
          component: Home
        },
        {
          path: '/classify/:classId',
          name: 'classify',
          component: Classify
        },
        {
          path: '/videoDetail/:videoId',
          name: 'videoDetail',
          component: VideoDetail
        },
        {
          path: '/Comment',
          name: 'comment',
          component: Comment
        },
        {
          path: '/infoCenter',
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
