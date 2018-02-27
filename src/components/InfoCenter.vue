<template>
  <div class="infoCenter">
    <el-container>
      <InfoCenterSide></InfoCenterSide>
      <div class="main">
        <infoCenterMain>
        </infoCenterMain>
      </div>
    </el-container>
  </div>
</template>
<script>
  import InfoCenterSide from './InfoCenterSide.vue'
  import InfoCenterMain from './InfoCenterMain.vue'
export default {
  name: 'infoCenter',
  data () {
    return {

    }
  },
  components: {
    InfoCenterSide,
    InfoCenterMain
  }
}
</script>

<style scoped="">
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  .main{
    text-align: center;
  }
</style>
