<template>
  <div class="myVideo">
    <el-container v-loading="loading">
      <el-main>
        <el-row :gutter="40">
          <el-col :span="6" v-for="(video, index) in videoList" :key="index">
            <el-card :body-style="{ padding: '20px' }">
              <div class="video-img">
                <img v-bind:src="video.vedioImg"/>
              </div>
              <div class="introduction">
                <p>{{video.name}}</p>
                <el-tooltip :content="video.introduction" placement="bottom" effect="light">
                  <p>简介: {{video.introduction}}</p>
                </el-tooltip>
              </div>
              <div class="amount">播放量: {{video.playAmount}} 评论数: {{video.commentAmount}}</div>
              <div class="bottom clearfix">
                <time class="time">{{ currentDate }}</time>
                <el-dropdown trigger="click" v-on:command="handleCommand">
                  <!--<el-button type="text" class="button">操作按钮</el-button>-->
                  <span class="el-dropdown-link">
                    操作
                    <i class="el-icon-arrow-down el-icon--right"></i>
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item><a @click="editVideo(video)">修改</a></el-dropdown-item>
                    <el-dropdown-item command="removeVideo"><a v-on:click="removeVideo(video)">删除</a></el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </div>
            </el-card>
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

    <el-dialog title="视频信息修改" :visible.sync="dialogFormVisible">
      <el-form :model="currentVideo" :rules="rules" ref="currentVideo" label-width="100px">
        <el-form-item label="视频名称" :label-width="formLabelWidth" prop="name">
          <el-input v-model="currentVideo.name" :placeholder="currentVideo.name"></el-input>
        </el-form-item>
        <el-form-item label="视频简介" prop="introduction">
          <el-input type="textarea" :placeholder="currentVideo.introduction"
                    v-model="currentVideo.introduction"></el-input>
        </el-form-item>
        <el-form-item label="视频类型" :label-width="formLabelWidth" prop="type">
          <el-select :placeholder="currentVideo.type" v-model="currentVideo.type">
            <el-option label="新闻" value="0"></el-option>
            <el-option label="音乐" value="1"></el-option>
            <el-option label="生活" value="2"></el-option>
            <el-option label="科技" value="3"></el-option>
            <el-option label="影视" value="4"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="submintForm(currentVideo)">确 定</el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>
  import base from '../mixins/base';

  export default {
    mixins: [base],
    created() {
      // 组件创建完后获取数据，
      // 此时 data 已经被 observed 了
      this.getMyVideo()
    },
    watch: {
      // 如果路由有变化，会再次执行该方法
      '$route': 'getMyVideo'
    },
    data() {
      return {
        loading: true,
        currentDate: new Date(),
        page: {
          total: 0,
          current: 1,
          size: 10
        },
        currentVideo: {
          id: '',
          name: '',
          type: 0,
          introduction: '',
        },
        videoList: [],
//        introductionShort: ''
        dialogFormVisible: false,
        formLabelWidth: '120px',
        rules: {
          name: [
            {required: true, message: '请输入视频名称', trigger: 'blur'},
            {min: 1, max: 30, message: '长度在 1 到 30 个字符', trigger: 'blur'}
          ],
          type: [
            {required: true, message: '请选择一个视频类型', trigger: 'change'}
          ],
          introduction: [
            {required: true, message: '请填写视频简介', trigger: 'blur'}
          ]
        },
      };
    },
    computed: {},
    methods: {
      getPageData() {
        let sel = this;
        let params = {
          current: sel.page.current,
          size: sel.page.size
        };
        sel.request({act: 'getMyVideo', method: 'get', body: params}).then(datas => {
          if (datas.code == 0) {
            sel.loading = false;
            sel.videoList = datas.data.records;
            sel.page.total = datas.data.total;
            sel.page.size = datas.data.size;
            sel.page.current = datas.data.current;
//            sel.introductionShort = datas.data.introduction.substr(0,20) + '...' ;
          } else {
            sel.$message.error('出错了: ' + datas.msg)
          }
        }, response => {
          sel.loading = false;
          sel.$meesage.error('');
        });
      },
      getMyVideo: function () {
        this.getPageData();
      },
      handleSizeChange(val) {
        this.page.size = val;
        this.getPageData();
      },
      handleCurrentChange(val) {
        this.page.current = val;
        this.getPageData();
        console.log(`当前页: ${val}`);
      },
      editVideo(video) {
        let sel = this;
        sel.dialogFormVisible = true;
        sel.currentVideo.name = video.name;
        sel.currentVideo.introduction = video.introduction;
        sel.currentVideo.type = sel.typeChange(video.type);
        sel.currentVideo.id = video.id;
      },
      submintForm(formName) {
        let sel = this;
        if (typeof(formName.type) == 'string') {
          formName.type = sel.typeChange(formName.type)
        }
        sel.request({act: 'editVideo', method: 'post', body: formName}).then(datas => {
          if (datas.code == 0) {
            sel.$message({message: datas.msg, type: 'success'});
            sel.dialogFormVisible = false;
            sel.$router.go(0)
          } else {
            sel.$message.error(datas.msg);
          }
        }, response => {
          sel.$meesage.error('出错...');
          sel.dialogFormVisible = false;
        });
      },
      removeVideo(video) {
        this.$confirm('此操作将永久删除该视频, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.request({act: 'removeVideo', method: 'post', video}).then(res => {
            if (res.code == 0){
              this.$message({message: res.msg, type: 'success'})
            } else {
              this.$message({message: res.msg, type: 'error'})
            }
          }, response => {
            this.$message({message: res.msg, type: 'error'})
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消'
          });
        });
      }
    }
  }
</script>

<style scoped="">
  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }

  .el-col {
    margin-bottom: 30px;
    border-radius: 4px;
  }

  .el-row {
    margin-bottom: 20px;
  }

  .video-img {
    height: 180px;
    width: 265px;
    padding: 0px;

  }

  img {
    width: 100%;
    height: 100%;
    border: 1px solid #409EFF;
    border-radius: 10px;
  }

  .introduction {
    padding: 10px;
  }

  p {
    font-size: 16px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .el-dropdown-link {
    color: #409EFF;
    cursor: pointer;
  }
  .amount {
    font-size: 13px;
  }
</style>
