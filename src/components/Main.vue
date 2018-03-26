<template>
  <div id="main">
    <div class="head-img"></div>
    <el-container>
      <el-header>
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#409EFF"
          text-color="#fff"
          active-text-color="#ffd04b"
          router="true">
          <el-menu-item index="/home">
            <img style="width: 40px; height: 40px" src="assets/logo.png"/>
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
          <el-menu-item index="/infoCenter" >个人中心</el-menu-item>
          <!--<el-menu-item index="4">搜索</el-menu-item>-->
          <div class="login-button-span">
            <router-link to="/login"><el-button type="primary" round size="medium">登录</el-button></router-link>
          </div>
          <router-link></router-link>
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
  export default {
    name: 'main',
    data() {
      return {
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      toLogin() {
        this.$router.push('/login')
      }
    },
    components: {
      'home': Home
    }
  }

</script>

<style>
  .head-img{
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
