<template>
  <div class="infoCenterMain">
      <el-main>
        <router-view></router-view>
      </el-main>
  </div>
</template>
<script>
  export default {
    name: 'infoCenterMain',
    data () {
      return {

      }
    }
  }
</script>

<style scoped="">
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    margin-left: 50px;
    text-align: center;
    line-height: 160px;
    width: 1500px;
    padding: 50px;
    border:1px solid #409EFF;
    border-radius:25px;
  }
</style>
