// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueResource from 'vue-resource'
import VueVideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css'
// import Vuex from 'vuex'

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(VueResource);
// Vue.use(Vuex);
Vue.use(VueVideoPlayer, /* {
  options: global default options,
  events: global videojs events
} */)

// var state = {
//   isLogin:0,     //初始时候给一个 isLogin=0 表示用户未登录
// };

// const mutations = {
//   changeLogin(state,data){
//     state.isLogin = data;
//   }
// };

Vue.http.interceptors.push(function(request, next) {//拦截器
// 跨域携带cookie
  request.credentials = true;
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  render: h => h(App)
})
