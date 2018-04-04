<template>
  <div class="infoCenter">
    <el-container>
      <InfoCenterSide :user="user_data"></InfoCenterSide>
      <div class="main-a">
        <infoCenterMain>
        </infoCenterMain>
      </div>
    </el-container>
  </div>
</template>
<script>
  import InfoCenterSide from './InfoCenterSide.vue'
  import InfoCenterMain from './InfoCenterMain.vue'
  import base from '../mixins/base';
  export default {
  name: 'infoCenter',
  mixins: [base],
  data () {
    return {
      user_data: {
        id: '',
        name: '',
        headImg: ''
      }
    }
  },
  mounted (){
    let username = this.getSessionStorage({key: 'name'});
    let userId = this.getSessionStorage({key: 'id'});
    let userHeadImg = this.getSessionStorage({key: 'head_img'});
    this.user_data.name = username;
    this.user_data.id = userId;
    this.user_data.headImg = userHeadImg
  },
  components: {
    InfoCenterSide,
    InfoCenterMain
  }
}
</script>

<style scoped="">
  .el-aside {
    background-color: #E9EEF3;
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
  .main-a{
    text-align: center;
  }
</style>
