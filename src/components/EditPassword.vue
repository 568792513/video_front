<template>
  <div class="editMyInfo">
    <div class="form-box">
      <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
          <el-button @click="resetForm('ruleForm2')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  import base from '../mixins/base';

  export default {
    mixins: [base],
    data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          let reg = /^[A-Za-z0-9]{6,20}$/;
          if (!reg.test(value)){
            callback(new Error('请输入6-20位字母数字组合的密码'));
          } else {
            if (this.ruleForm2.checkPass !== '') {
              this.$refs.ruleForm2.validateField('checkPass');
              callback();
            }
          }
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm2: {
          pass: '',
          checkPass: '',
        },
        rules2: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let sel = this;
            let params = {
              checkPass: sel.ruleForm2.checkPass
            };
            sel.request({act: 'editPassword', method: 'post', body: params}).then(datas => {
              if (datas.code == 0) {
                sel.$message({message: datas.msg, type: 'success'});
                sel.$router.push('/login');
              } else {
                sel.$message.error(datas.msg);
              }
            }, response => {
              sel.$meesage.error('修改失败...');
            });
          } else {
            sel.$meesage.error('修改失败...');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style scoped="">
  .form-box {
    text-align: center;
  }
</style>
