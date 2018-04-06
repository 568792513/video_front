<template>
  <div class="classify">

    <el-container>
      <el-aside width="250px">
        <el-menu
          :default-active="$route.path"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          router
          active-text-color="#ffd04b">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>分类选择</span>
            </template>
            <el-menu-item index="0">新闻</el-menu-item>
            <el-menu-item index="1">音乐</el-menu-item>
            <el-menu-item index="2">生活</el-menu-item>
            <el-menu-item index="3">科技</el-menu-item>
            <el-menu-item index="4">影视</el-menu-item>
          </el-submenu>

        </el-menu>
      </el-aside>



      <el-container>
        <el-header>
          {{ activeIndex }}
        </el-header>

        <el-main v-loading="loading">
          <el-row :gutter="20">
            <el-col :span="4" v-for="(video, index) in videoList" :key="index">
              <el-card :body-style="{ padding: '0px' }">
                <div class="video-img" v-on:click="videoDetail(video)">
                  <img v-bind:src="video.vedioImg"/>
                </div>
                <div class="introduction">
                  <p class="video-name"><a v-on:click="videoDetail(video)"> {{video.name}} </a></p>
                  <el-tooltip :content="video.introduction" placement="bottom" effect="light">
                    <p class="introduction-content">简介: {{video.introduction}}</p>
                  </el-tooltip>
                </div>
                <div class="amount">播放量: {{video.playAmount}} &nbsp评论数: {{video.commentAmount}}</div>
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
            :page-sizes="[18, 32, 64]"
            :total="page.total">
          </el-pagination>
        </el-footer>
      </el-container>
    </el-container>


  </div>
</template>
<script>
  import base from '../mixins/base';
  export default {
    mixins:[base],
    name: 'myInfo',
    data () {
      return {
        loading: true,
        activeIndex: '',
        numberIndex: '',
        page: {
          total: 0,
          current: 1,
          size: 18
        },
        videoList: [],
      }
    },
    created () {
      this.getPageData()
    },
    mounted (){
    },
    watch: {
      // 如果路由有变化，会再次执行该方法
      '$route': 'getPageData',
    },
    methods: {
      getPageData() {
        this.numberIndex = parseInt(this.$route.path.substring(10, 11));
        this.activeIndex = this.typeChange(this.numberIndex);
        this.getVideoByType()
      },
      handleOpen(key, keyPath) {
      },
      handleClose(key, keyPath) {
      },
      handleSizeChange(val) {
        this.page.size = val;
        this.getPageData();
      },
      handleCurrentChange(val) {
        this.page.current = val;
        this.getPageData();
      },
      getVideoByType(){
        let params = {
          current: this.page.current,
          size: this.page.size,
          type: this.numberIndex
        };
        this.request({act: 'getVideoByType', method: 'get', body: params}).then(datas => {
          if (datas.code == 0) {
            this.loading = false;
            this.videoList = datas.data.page.records;
            this.page.total = datas.data.total;
            this.page.size = datas.data.page.size;
            this.page.current = datas.data.page.current;
//            sel.introductionShort = datas.data.introduction.substr(0,20) + '...' ;
            // 转换日期格式
            for (let i=0;i<this.videoList.length;i++) {
              this.videoList[i].createTime = this.timeChange(this.videoList[i].createTime);
            }
          } else {
            this.$message.error('出错了: ' + datas.msg)
          }
        }, response => {
          this.loading = false;
          this.$meesage.error('');
        });
      },
      videoDetail(video) {
        this.$router.push({
          path: '/videoDetail',
          name: 'videoDetail',
          params: {
            videoId: video.id
          }
          /*query: {
              name: 'name',
              dataObj: this.msg
          }*/
        })
      },
    }
  }
</script>

<style scoped="">
  /*.baseInfo {*/
  /*text-align: left;*/
  /*}*/
  .el-col {
    margin-bottom: 30px;
  }
  .video-img {
    height: 155px;
    width: 242px;
    padding: 0px;
    cursor: pointer;
  }
  .el-row {
    margin-bottom: 10px;
  }
  img {
    width: 100%;
    height: 100%;
    border: 1px solid #409EFF;
    border-radius: 10px;
  }

  .introduction {
    margin-top: 10px;
  }
  .amount {
    font-size: 13px;
    margin-bottom: 3px;
  }


  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }
  .introduction-content {
    margin-top: 3px;
    margin-bottom: 3px;
    padding: 0;
    /*line-height: 0;*/
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .video-name {
    margin: 0;
    padding: 0;
    font-size: 17px;
  }
  .video-name:hover {
    /*margin: 0;*/
    /*padding: 0;*/
    /*font-size: 16px;*/
    text-decoration: underline;
    cursor: pointer;
    /*line-height: 1;*/
  }
</style>
