<template>
  <div id="nav">
    <div class="head-img"></div>
    <el-container>
      <el-header>
        <el-menu
          :default-active="$route.path"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#409EFF"
          text-color="#fff"
          active-text-color="#ffd04b"
          router>
          <el-menu-item index="/home">
            <img style="width: 40px; height: 40px" src="../assets/play114.png"/>
          </el-menu-item>
          <el-menu-item index="/home">首页</el-menu-item>
          <el-submenu index="2">
            <template slot="title">分类</template>
            <el-menu-item index="2-1">新闻</el-menu-item>
            <el-menu-item index="2-2">音乐</el-menu-item>
            <el-menu-item index="2-3">生活</el-menu-item>
            <el-menu-item index="2-4">科技</el-menu-item>
            <el-menu-item index="2-5">影视</el-menu-item>
          </el-submenu>
          <el-menu-item index="/infoCenter" ><a v-on:click="infoCenter">个人中心</a></el-menu-item>
          <!--<el-menu-item index="4">搜索</el-menu-item>-->
          <div class="login-button-span" v-show="loginButton">
            <router-link to="/login"><el-button type="primary" round size="medium">登录</el-button></router-link>
          </div>
          <div class="login-button-span" v-show="!loginButton">
            <router-link to="/login"><el-button type="primary" round size="medium" v-on:click="logout">退出</el-button></router-link>
          </div>
        </el-menu>
      </el-header>

      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
  import Home from './Home.vue'
  import base from '../mixins/base';

  export default {
    name: 'main',
    mixins: [base],
    mounted (){
      if (this.getSessionStorage({key: 'id'}) != null){
        this.loginButton = false;
      }
    },
    data() {
      return {
        loginButton: true
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      toLogin() {
        this.$router.push('/login')
      },
      infoCenter() {
        let sel = this;
        sel.request({act: 'isLogin', method: 'get'}).then(datas =>{
          if (datas.code == 0){
            sel.$router.push('/infoCenter')
          } else {
            sel.$message({message: '请先登录', type: 'success'});
            sel.$router.push('/login');
          }
        }, response => {
          sel.$meesage.error('内部错误');
        })
      },
      logout() {
        let sel = this;
        sessionStorage.clear();
        sel.$router.push('/home')
      }
    },
    components: {
      'home': Home
    }
  }

</script>

<style scoped="">
  .head-img{
    /*background: url("../assets/1/20180330140523.jpg");*/
    background: url("../assets/head_img.jpg");
    height: 180px;
  }
  .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
  }
  .el-main {
    color: #333;
    text-align: center;
    /*line-height: 160px;*/
  }
  body > .el-container {
    margin-bottom: 40px;
  }
  .serach{
    padding: 20px 10px 10px;
    display: flex;
  .search-input{
    flex: 1;
    padding-right: 10px;
  }
  .search-right{
    flex:0 0 50px;
  }
  }
  .login-button-span {
    padding: 10px;
    float:right;
    text-align: center;
  }
</style>
