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
            <el-menu-item index="/classify/0">新闻</el-menu-item>
            <el-menu-item index="/classify/1">音乐</el-menu-item>
            <el-menu-item index="/classify/2">生活</el-menu-item>
            <el-menu-item index="/classify/3">科技</el-menu-item>
            <el-menu-item index="/classify/4">影视</el-menu-item>
          </el-submenu>
          <el-menu-item index="" ><a v-on:click="infoCenter">个人中心</a></el-menu-item>
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
      <el-footer>
        <p>Copyright &copy; 2018. by hui   <a href="https://github.com/568792513" target="_blank" title="github">568792513</a></p>
      </el-footer>
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
        let username = this.getSessionStorage({key: 'name'});
        let userId = this.getSessionStorage({key: 'id'});
        if (username == null || userId == null){
          sel.$router.push('/login');
          sel.$message({message: '请先登录', type: 'success'});
        } else {
          sel.$router.push('/infoCenter')
        }
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
    /*background: url("../assets/1fbf27cf246be57a9a2d51ef3fbaaa78.jpg");*/
    background: url("../assets/head_img.jpg");
    height: 180px;
  }
  .el-footer {
    background-color: #409EFF;
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
