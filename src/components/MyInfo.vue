<template>
  <div class="myInfo">
    <div class="baseInfo">
      <h4>Welcome, {{user.name}}!</h4>
    </div>
  </div>
</template>
<script>
  import base from '../mixins/base';
  export default {
    mixins:[base],
    name: 'myInfo',
    data () {
      return {
        user: {
          name: ''
        }
      }
    },
    mounted (){
      let username = this.getSessionStorage({key: 'name'});
//      let userId = this.getSessionStorage({key: 'id'});
      let userHeadImg = this.getSessionStorage({key: 'head_img'});
      this.user.name = username;
//      this.user_data.id = userId;
      this.user.headImg = userHeadImg
    },
    methods: {
    }
  }
</script>

<style scoped="">
/*.baseInfo {*/
  /*text-align: left;*/
/*}*/
</style>
