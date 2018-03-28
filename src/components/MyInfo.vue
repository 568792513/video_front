<template>
  <div class="myInfo">
    <div class="baseInfo">
      <h4>Welcome, {{user.name}}!</h4>
    </div>
    <el-button @click="onSubmit">get user</el-button>
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
      onSubmit() {
        let sel = this;
        sel.request({act: 'getUsers', method: 'get', body: null}).then(datas => {
          if (datas.code === 0) {
            let data = datas.data;
            console.log(data);
//            set.setSessionStorage({key: 'userInfo', data: data.})
            if (sel.$route.query.back) {
              sel.$router.push(sel.$route.query.back);
              return;
            }
          } else {
            sel.$message.error('登陆失败:' + datas.userMsg);
          }
        }, response => {
          sel.$meesage.error('登陆失败...');
        });
      }
    }
  }
</script>

<style scoped="">
/*.baseInfo {*/
  /*text-align: left;*/
/*}*/
</style>
