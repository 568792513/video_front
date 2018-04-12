<template>
  <div class="comment">
    <el-container>
      <el-header height="auto">
        <div class="banner">
          <span class="tab-fixed">评论区</span>
          <span class="comment-pts-num">共有{{page.total}}条评论</span>
        </div>
        <div class="login-tip" v-show="loginTip">
          您尚未登录，请先行
          <router-link to="/login"><a class="toLogin">[登录/注册]</a></router-link>
        </div>
        <div class="write" v-show="!loginTip" >
          <el-form ref="commentForm" :model="commentForm" label-width="0px" :rules="rules" >
            <el-form-item prop="content">
              <el-input type="textarea" v-model="commentForm.content" placeholder="请在此处填写您的评论...."></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit('commentForm')">发表评论</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-header>

      <el-main>
        <el-row :gutter="12" >
          <el-col :span="24" v-for="(comment, index) in commentList" :key="index">
              <div class="comment-box">
                <div class="author">{{comment.floor}}楼  {{comment.user.name}} :</div>
                <div class="time">{{comment.time}}</div>
                <div class="content">{{comment.content}}</div>
              </div>
          </el-col>
        </el-row>
      </el-main>

      <el-footer>
        <el-pagination
          background
          layout="total, sizes, prev, pager, next, jumper"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="page.current"
          :page-size="page.size"
          :page-sizes="[8, 16, 24, 32]"
          :total="page.total">
        </el-pagination>
      </el-footer>

    </el-container>
  </div>
</template>

<script>
  import base from '../mixins/base';
  import { quillEditor } from 'vue-quill-editor'
  export default {
    mixins: [base],
    props: ['videoId'],
    components: {
      quillEditor
    },
    data() {
      return {
        loginTip: false,
        page: {
          total: 0,
          current: 1,
          size: 8
        },
        commentForm: {
          content: ''
        },
        commentList: [],
        rules: {
          content: [
            { required: true, message: '请输入评论内容'},
          ],
        },
      }
    },
    created() {
      // 组件创建完后获取数据，
      if (this.getSessionStorage({key: 'id'}) == null){
        this.loginTip = true;
      }
      this.getComment();
    },
    watch: {
      // 如果路由有变化，会再次执行该方法
      '$route': 'getComment'
    },
    methods: {
      handleSizeChange(val) {
        this.page.size = val;
        this.getComment();
      },
      handleCurrentChange(val) {
        this.page.current = val;
        this.getComment();
        console.log(`当前页: ${val}`);
      },
      onSubmit(inputForm) {
        this.$refs[inputForm].validate((valid) => {
          if (valid) {
            let param = {
              videoId: this.videoId,
              content: this.commentForm.content
            };
            this.request({act: 'addComment', method: 'post', body: param}).then(datas => {
              if (datas.code == 0){
                this.$message({message: datas.msg, type: 'success'});
                //再次获取评论
                this.getComment();
              } else {
                this.$message.error(datas.msg+',code:'+datas.code);
              }
            }, err => {
              this.$message.error('发表失败...');
            });
          } else {
            return false;
          }
        });
      },
      getComment() {
        let params = {
          videoId: this.videoId,
          current: this.page.current,
          size: this.page.size
        };
        this.request({act: 'getComment', method: 'get', body: params}).then(datas => {
          if (datas.code == 0) {
            if (datas.data == 0){

            } else {
              this.commentList = datas.data.content;
              this.page.total = datas.data.totalElements;
              this.page.size = datas.data.size;
              this.page.current = datas.data.number + 1;
              for (let i=0; i<this.commentList.length; i++) {
                this.commentList[i].time = this.timeChange(this.commentList[i].time);
              }
            }
          } else {
            this.$message.error('出错了: ' + datas.msg)
          }
        }, response => {
//          sel.loading = false;
          this.$meesage.error('');
        });
      }
    }
  }
</script>

<style scoped="">
  .el-container {
    width: 1300px;
    margin-left: auto;
    margin-right: auto;
  }
  .toLogin:hover {
    cursor: pointer;
  }
  .banner {
   border-bottom: 1px solid #eee;
    margin-bottom: 10px;
   height: 30px;
  }
  .el-textarea__inner {
    width: 100px;
  }
  .tab-fixed {
    float: left;
    font-size: 16px;
    height: 20px;
    border: 0;
  }
  .comment-pts-num {
    float: left;
    height: 20px;
    font-size: 12px;
    color: #8e8785;
    margin-left: 10px;
  }
  .login-tip {
    height: 25px;
    background-color: #fcf8e3;
    border-color:#faebcc;
    color: #8a6d3b;
    font-size: 14px;
  }
  .comment-box {
    border-bottom: 1px solid #eee;
    text-align: left;
    padding: 10px;
  }
  .author {
    position:absolute;
    font-size: 15px;
  }
  .time {
    position:absolute;
    left: 1100px;
    font-size: 14px;

  }
  .content {
    padding-top: 30px;
  }
</style>
