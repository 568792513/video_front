<template>
  <div class="infoCenterSide">
      <el-aside width="250px">
        <div class="head-img">
          <img v-bind:src="user.headImg"/>
        </div>
          <p>{{user.name ? user.name : "昵称"}}</p>
          <p><router-link to="/infoCenter/myInfo"><el-button type="primary" class="el-icon-info"> 我的信息</el-button></router-link></p>
          <p><router-link to="/infoCenter/editMyInfo"><el-button type="primary" class="el-icon-edit"> 修改信息</el-button></router-link></p>
          <p><router-link to="/infoCenter/myVideo"><el-button type="primary" class="el-icon-caret-right" > 我的视频</el-button></router-link></p>
          <p><router-link to="/infoCenter/uploadVideo"><el-button type="primary" class="el-icon-upload"> 上传视频</el-button></router-link></p>
          <p><router-link to="/infoCenter/editPassword"><el-button type="primary" class="el-icon-setting"> 修改密码</el-button></router-link></p>
      </el-aside>
  </div>
</template>
<script>
  import base from "../mixins/base"
  export default {
    name: 'infoCenterSide',
    props: ['user'],
    mixins: [base],
    data () {
      return {

      }
    },
    methods: {

    }

  }
</script>

<style scoped="">
  .infoCenterSide {
    background-color: #E9EEF3;
  }
  /*.el-aside {*/
    /*background-color: #E9EEF3;*/
    /*color: #333;*/
    /*text-align: center;*/
    /*line-height: 20px;*/
  /*}*/
  .head-img {
    height: 120px;
    width: 120px;
    text-align: center;
    padding-top: 20px;
    padding-left: 62px;
  }
    img {
      width: 100%;
      height: 100%;
      border: 2px solid #409EFF;
    }
</style>
