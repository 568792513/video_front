<template>
  <div class="login-page">
    <div class="login-box">

      <div class="login-wrap" v-show="showLogin">
        <h3>登 录</h3>
        <p v-show="showTip">{{tip}}</p>
        <input type="text" placeholder="请输入用户名" v-model="name">
        <input type="password" placeholder="请输入密码" v-model="password">
        <button v-on:click="login">登录</button>
        <p></p>
        <span v-on:click="toRegister">没有账号？马上注册</span>
      </div>

      <div class="register-wrap" v-show="showRegister">
        <h3>注 册</h3>
        <p v-show="showTip">{{tip}}</p>
        <input type="text" placeholder="请输入用户名" v-model="newUsername">
        <input type="password" placeholder="请输入密码" v-model="newPassword">
        <input type="password" placeholder="确认密码" v-model="confirmPassword">
        <button v-on:click="register">注册</button>
        <p></p>
        <span v-on:click="toLogin">已有账号？马上登录</span>
      </div>

      <div class="return-home">
        <router-link to="/home">返回主页</router-link>
      </div>

    </div>
  </div>
</template>

<script>
  import {setCookie, getCookie} from '../common/cookie'
  import base from '../mixins/base';

  export default {
    mixins: [base],
    data() {
      return {
        showLogin: true,
        showRegister: false,
        showTip: false,
        tip: '',
        name: '',
        password: '',
        newUsername: '',
        newPassword: '',
        confirmPassword: ''
      }
    },
    mounted() {
      /*页面挂载获取cookie，如果存在username的cookie，则跳转到主页，不需登录*/
      if (getCookie('name')) {
        this.$router.push('/home')
      }
    },
    methods: {
      login() {
        let sel = this;
        let params = {
          name: sel.name,
          password: sel.password
        }
        sel.request({act: 'login', method: 'post', body: params}).then(datas => {
          if (datas.code == 0) {
            let name={name:datas.data.name}
            sel.setSessionStorage({key: 'name', data: datas.data.name});
            sel.setSessionStorage({key: 'id', data: datas.data.id});
            sel.setSessionStorage({key: 'head_img', data: datas.data.headImg});
//            this.$store.commit('changeLogin', '100');
            //登录后改变登录状态 isLogin = 100 ；
            sel.$message({message: datas.msg, type: 'success'});
//            if (sel.$route.query.back) {
//              sel.$router.push(sel.$route.query.back);
//              return;
//            }
            sel.$router.push('/home');
          } else {
            sel.$message.error('登陆失败:' + datas.msg);
          }
        }, response => {
          sel.$meesage.error('登陆失败...');
        });
      },


//        if (this.username === "" || this.password === "") {
//          alert("请输入用户名或密码")
//        } else {
//          let data = {'username': this.username, 'password': this.password}
//          /*接口请求*/
//          this.$http.post('http://localhost/user/login', data).then((res) => {
//            console.log(res)
//            if (res.data == -1) {
//              this.tishi = "该用户不存在"
//              this.showTishi = true
//            } else if (res.data == 0) {
//              this.tishi = "密码输入错误"
//              this.showTishi = true
//            } else if (res.data == 'admin') {
//              /*路由跳转this.$router.push*/
//              this.$router.push('/infoCenter')
//            } else {
//              this.tishi = "登录成功"
//              this.showTishi = true
//              setCookie('username', this.username, 1000 * 60)
//              setTimeout(function () {
//                this.$router.push('/home')
//              }.bind(this), 1000)
//            }
//          })
//        }
//      },
      register() {
        let sel = this;
        let params = {
          name: sel.newUsername,
          password: sel.newPassword
        };
        if (sel.newUsername === "" || sel.newPassword === "") {
          sel.$message.error('账号或密码不能为空');
          return false;
        }
        if (sel.newPassword !== sel.confirmPassword) {
          sel.$message.error('两次输入密码不一致');
          return false;
        }
        sel.request({act: 'register', method: 'post', body: params}).then(datas => {
          if (datas.code == 0) {
            sel.$message({message: datas.userMsg, type: 'success'});
            sel.$Router.push('/login');
          } else if (datas.code == 2000) {
            sel.$message.error(datas.userMsg);
          } else {
            sel.$message.error(datas.userMsg);
          }
        }, response => {
          sel.$meesage.error('注册失败...');
        });


//
//        if(this.newUsername == "" || this.newPassword == ""){
//          alert("请输入用户名或密码")
//        }else{
//          let data = {'username':this.newUsername,'password':this.newPassword}
//          this.$http.post('http://localhost/user/register',data).then((res)=>{
//            console.log(res)
//            if(res.data == "ok"){
//              this.tishi = "注册成功"
//              this.showTishi = true
//              this.username = ''
//              this.password = ''
//              /*注册成功之后再跳回登录页*/
//              setTimeout(function(){
//                this.showRegister = false
//                this.showLogin = true
//                this.showTishi = false
//              }.bind(this),1000)
//            }
//          })
//        }
      },
      toRegister() {
        this.showRegister = true;
        this.showLogin = false;
      },
      toLogin() {
        this.showRegister = false;
        this.showLogin = true;
      }

    }
  }
</script>

<style scoped="">
  .login-page {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    padding-top: 150px;
    background: url(../assets/login_background.jpg) no-repeat center;
    background-size: cover;
  }
  .login-box {
    width: 300px;
    height: 390px;
    margin: 0 auto;
    padding: 47px 29px 0;
    background-color: #fff;
    border: 1px solid #41b883;
    box-shadow: 0 0 20px rgba(0,0,0, .5);
  }
  .login-wrap {
    text-align: center;
  }
  .register-wrap {
    text-align: center;
  }
  .return-home {
    margin-top: 30px;
    text-align: center;
  }
  input {
    display: block;
    width: 250px;
    height: 40px;
    line-height: 40px;
    margin: 0 auto;
    margin-bottom: 10px;
    outline: none;
    border: 1px solid #888;
    padding: 10px;
    box-sizing: border-box;
  }

  button {
    display: block;
    width: 250px;
    height: 40px;
    line-height: 40px;
    margin: 0 auto;
    border: none;
    background-color: #41b883;
    color: #fff;
    font-size: 16px;
    margin-bottom: 5px;
  }

  span {
    cursor: pointer;
  }

  span:hover {
    color: #41b883;
  }
</style>
