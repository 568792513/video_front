<template>
  <div class="infoCenterSide">
      <el-aside width="200px">
        <div>
          <img src="../assets/logo.png"/>
          <p>昵称</p>
          <p><router-link to="/infoCenter/myInfo"><el-button type="primary" class="el-icon-info"> 我的信息</el-button></router-link></p>
          <p><router-link to="/infoCenter/myVideo"><el-button type="primary" class="el-icon-caret-right"> 我的视频</el-button></router-link></p>
          <p><router-link to="/infoCenter/uploadVideo"><el-button type="primary" class="el-icon-upload"> 上传视频</el-button></router-link></p>
        </div>
      </el-aside>
  </div>
</template>
<script>
  export default {
    name: 'infoCenterSide',
    data () {
      return {

      }
    }
  }
</script>

<style scoped="">
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 20px;
  }
</style>
